import Anthropic from '@anthropic-ai/sdk';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// ---------------------------------------------------------------------------
// Config
// ---------------------------------------------------------------------------
const DATA_DIR = 'public/data/calls';
const REPO = process.env.GITHUB_REPOSITORY || 'cannonQ/ergo-transcripts';
const ISSUE_NUMBER = process.env.ISSUE_NUMBER;
const ISSUE_BODY = process.env.ISSUE_BODY || '';
const ISSUE_TITLE = process.env.ISSUE_TITLE || '';
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY;
const TRIGGER_LABEL = process.env.TRIGGER_LABEL || 'correction';
const MAINTAINER_APPROVED = TRIGGER_LABEL === 'approved';

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Post a comment on the issue */
async function commentOnIssue(body) {
  await fetch(`https://api.github.com/repos/${REPO}/issues/${ISSUE_NUMBER}/comments`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ body }),
  });
}

/** Add a label to the issue */
async function addLabel(label) {
  await fetch(`https://api.github.com/repos/${REPO}/issues/${ISSUE_NUMBER}/labels`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ labels: [label] }),
  });
}

/** Create a pull request */
async function createPR(branch, title, body) {
  const res = await fetch(`https://api.github.com/repos/${REPO}/pulls`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      Accept: 'application/vnd.github+json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title,
      body,
      head: branch,
      base: 'main',
    }),
  });
  return res.json();
}

// ---------------------------------------------------------------------------
// Step 1: Parse the issue body
// ---------------------------------------------------------------------------

function parseIssueBody(body) {
  const pageUrl = body.match(/\*\*Page:\*\*\s*(.+)/)?.[1]?.trim();
  const section = body.match(/\*\*Section:\*\*\s*(.+)/)?.[1]?.trim();
  const item = body.match(/\*\*Item:\*\*\s*(.+)/)?.[1]?.trim();

  // Extract quoted text blocks after the headings
  const currentText = body.match(/### Current Text\n>\s*(.+)/)?.[1]?.trim();
  const suggestedText = body.match(/### Suggested Correction\n>\s*(.+)/)?.[1]?.trim();

  // Additional notes: everything after "### Additional Notes"
  const notesMatch = body.match(/### Additional Notes\n([\s\S]*?)(?=$)/);
  const notesRaw = notesMatch?.[1]?.trim() || '';

  // Extract call ID from URL: /calls/XXXXX
  const callId = pageUrl?.match(/\/calls\/([A-Za-z0-9_-]+)/)?.[1];

  return { pageUrl, section, item, currentText, suggestedText, notesRaw, callId };
}

/**
 * Parse additional notes for correction patterns.
 * Supports: "X = Y", "X=Y", comma/newline separated
 */
function parseAdditionalCorrections(notesRaw) {
  if (!notesRaw) return [];
  const corrections = [];
  // Split on commas or newlines
  const parts = notesRaw.split(/[,\n]+/).map(s => s.trim()).filter(Boolean);
  for (const part of parts) {
    const match = part.match(/^(.+?)\s*=\s*(.+)$/);
    if (match) {
      corrections.push({ from: match[1].trim(), to: match[2].trim() });
    }
  }
  return corrections;
}

// ---------------------------------------------------------------------------
// Step 2: Find affected files
// ---------------------------------------------------------------------------

function findAffectedFiles(callId) {
  if (!callId || !fs.existsSync(DATA_DIR)) return [];
  return fs.readdirSync(DATA_DIR)
    .filter(f => f.includes(callId))
    .map(f => path.join(DATA_DIR, f));
}

function findOccurrences(files, searchText) {
  const results = [];
  for (const filePath of files) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const count = content.split(searchText).length - 1;
    if (count > 0) {
      results.push({ filePath, count });
    }
  }
  return results;
}

function getContext(filePath, searchText, chars = 200) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const idx = content.indexOf(searchText);
  if (idx === -1) return '';
  const start = Math.max(0, idx - chars);
  const end = Math.min(content.length, idx + searchText.length + chars);
  return '...' + content.slice(start, end) + '...';
}

// ---------------------------------------------------------------------------
// Step 3: Claude validation
// ---------------------------------------------------------------------------

async function validateWithClaude(correction, additionalCorrections, contextSnippets) {
  if (!ANTHROPIC_API_KEY) {
    console.log('No ANTHROPIC_API_KEY — skipping Claude validation, marking as needs-review');
    return { verdict: 'NEEDS_REVIEW', reasoning: 'No API key configured for automated validation.' };
  }

  const client = new Anthropic({ apiKey: ANTHROPIC_API_KEY });

  const allCorrections = [
    `"${correction.currentText}" → "${correction.suggestedText}"`,
    ...additionalCorrections.map(c => `"${c.from}" → "${c.to}"`),
  ].join('\n- ');

  const response = await client.messages.create({
    model: 'claude-sonnet-4-20250514',
    max_tokens: 300,
    messages: [{
      role: 'user',
      content: `You review community-submitted transcript corrections for the Ergo blockchain ecosystem knowledge base.

Proposed corrections:
- ${allCorrections}

Transcript context where the text appears:
${contextSnippets.slice(0, 3).map(s => `"${s}"`).join('\n\n')}

Evaluate each correction:
1. Is the replacement a plausible real term, project name, or person's name in a blockchain context?
2. Could the current text be a speech-to-text transcription error for the suggested replacement?
3. Does it contain profanity, vandalism, spam, or bad-faith content?
4. Does the replacement make sense given the surrounding context?

Respond with exactly one of these verdicts on the first line, followed by one sentence of reasoning:
APPROVE — if all corrections look like legitimate transcription fixes
REJECT — if any correction contains profanity, vandalism, or is clearly wrong
NEEDS_REVIEW — if you're unsure or the correction is ambiguous`,
    }],
  });

  const text = response.content[0].text.trim();
  const firstLine = text.split('\n')[0];
  let verdict = 'NEEDS_REVIEW';
  if (firstLine.startsWith('APPROVE')) verdict = 'APPROVE';
  else if (firstLine.startsWith('REJECT')) verdict = 'REJECT';

  return { verdict, reasoning: text };
}

// ---------------------------------------------------------------------------
// Step 4: Apply corrections
// ---------------------------------------------------------------------------

function applyCorrections(files, corrections) {
  const changes = [];
  for (const filePath of files) {
    let content = fs.readFileSync(filePath, 'utf-8');
    let fileChanged = false;
    const fileChanges = [];

    for (const { from, to } of corrections) {
      const count = content.split(from).length - 1;
      if (count > 0) {
        content = content.replaceAll(from, to);
        fileChanged = true;
        fileChanges.push(`"${from}" → "${to}" (${count}×)`);
      }
    }

    if (fileChanged) {
      fs.writeFileSync(filePath, content, 'utf-8');
      changes.push({ file: path.basename(filePath), replacements: fileChanges });
    }
  }
  return changes;
}

// ---------------------------------------------------------------------------
// Step 5: Create branch and PR
// ---------------------------------------------------------------------------

function createBranchAndCommit(branchName, corrections, issueNumber) {
  const summary = corrections.map(c => `${c.from} → ${c.to}`).join(', ');
  const message = `fix(transcript): ${summary} (closes #${issueNumber})`;

  execSync(`git config user.name "correction-bot"`);
  execSync(`git config user.email "correction-bot@users.noreply.github.com"`);
  execSync(`git checkout -b ${branchName}`);
  execSync(`git add ${DATA_DIR}`);
  execSync(`git commit -m "${message.replace(/"/g, '\\"')}"`);
  execSync(`git push origin ${branchName}`);
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main() {
  console.log(`Processing correction issue #${ISSUE_NUMBER}`);

  // Parse
  const parsed = parseIssueBody(ISSUE_BODY);
  console.log('Parsed:', JSON.stringify(parsed, null, 2));

  if (!parsed.callId) {
    console.log('Could not extract call ID from issue body');
    await commentOnIssue(
      `⚠️ **Correction Bot**: Could not extract a call ID from this issue. ` +
      `Please ensure the page URL contains a valid call path (e.g. \`/calls/H8uXsY6WP3s\`).`
    );
    await addLabel('needs-review');
    return;
  }

  if (!parsed.currentText || !parsed.suggestedText) {
    console.log('Missing current text or suggested correction');
    await commentOnIssue(
      `⚠️ **Correction Bot**: Could not parse the current text or suggested correction from this issue. ` +
      `A maintainer will review this manually.`
    );
    await addLabel('needs-review');
    return;
  }

  // Find files
  const files = findAffectedFiles(parsed.callId);
  console.log(`Found ${files.length} files for call ID: ${parsed.callId}`);

  if (files.length === 0) {
    await commentOnIssue(
      `⚠️ **Correction Bot**: No data files found for call ID \`${parsed.callId}\`. ` +
      `The call may not have been processed yet.`
    );
    await addLabel('needs-review');
    return;
  }

  // Build correction list: primary + any from additional notes
  const allCorrections = [
    { from: parsed.currentText, to: parsed.suggestedText },
    ...parseAdditionalCorrections(parsed.notesRaw),
  ];
  console.log('Corrections to apply:', allCorrections);

  // Check occurrences
  let totalOccurrences = 0;
  const contextSnippets = [];
  for (const { from } of allCorrections) {
    const occurrences = findOccurrences(files, from);
    const count = occurrences.reduce((sum, o) => sum + o.count, 0);
    totalOccurrences += count;
    if (occurrences.length > 0) {
      contextSnippets.push(getContext(occurrences[0].filePath, from));
    }
  }

  if (totalOccurrences === 0) {
    await commentOnIssue(
      `ℹ️ **Correction Bot**: Searched ${files.length} files for call \`${parsed.callId}\` ` +
      `but found no occurrences of the text to correct.\n\n` +
      `Searched for: ${allCorrections.map(c => `\`${c.from}\``).join(', ')}\n\n` +
      `The text may have already been corrected, or the exact wording may differ. A maintainer can review manually.`
    );
    await addLabel('needs-review');
    return;
  }

  // Claude validation (skipped when maintainer adds "approved" label)
  let validation;
  if (MAINTAINER_APPROVED) {
    console.log('Maintainer approved — skipping Claude validation');
    validation = { verdict: 'APPROVE', reasoning: 'Maintainer manually approved via "approved" label.' };
  } else {
    console.log('Validating with Claude...');
    validation = await validateWithClaude(parsed, allCorrections.slice(1), contextSnippets);
    console.log('Claude verdict:', validation.verdict);
    console.log('Claude reasoning:', validation.reasoning);

    if (validation.verdict === 'REJECT') {
      await commentOnIssue(
        `🚫 **Correction Bot**: This correction was flagged for review.\n\n` +
        `> ${validation.reasoning}\n\n` +
        `A maintainer will review this issue manually. To override, add the \`approved\` label.`
      );
      await addLabel('needs-review');
      return;
    }

    if (validation.verdict === 'NEEDS_REVIEW') {
      await commentOnIssue(
        `🔍 **Correction Bot**: This correction needs human review before processing.\n\n` +
        `> ${validation.reasoning}\n\n` +
        `Found ${totalOccurrences} occurrence(s) across ${files.length} files. ` +
        `To process anyway, add the \`approved\` label.`
      );
      await addLabel('needs-review');
      return;
    }
  }

  // APPROVED — apply corrections
  console.log('Applying corrections...');
  const changes = applyCorrections(files, allCorrections);

  if (changes.length === 0) {
    await commentOnIssue(
      `⚠️ **Correction Bot**: Corrections were approved but no changes were made. ` +
      `This may indicate the text was already fixed.`
    );
    return;
  }

  // Create branch and PR
  const branchName = `corrections/issue-${ISSUE_NUMBER}`;
  console.log(`Creating branch: ${branchName}`);
  createBranchAndCommit(branchName, allCorrections, ISSUE_NUMBER);

  const changesSummary = changes
    .map(c => `- **${c.file}**: ${c.replacements.join(', ')}`)
    .join('\n');

  const prBody = [
    `## Automated Correction`,
    ``,
    `Resolves #${ISSUE_NUMBER}`,
    ``,
    `### Changes`,
    changesSummary,
    ``,
    `### Claude Validation`,
    `> ${validation.reasoning}`,
    ``,
    `### Review Checklist`,
    `- [ ] Corrections look accurate in the diff`,
    `- [ ] No unintended replacements in surrounding text`,
    `- [ ] Spot-check against the original video if needed`,
  ].join('\n');

  const correctionSummary = allCorrections.map(c => `${c.from} → ${c.to}`).join(', ');
  const pr = await createPR(
    branchName,
    `fix(transcript): ${correctionSummary} (#${ISSUE_NUMBER})`,
    prBody
  );

  console.log('PR created:', pr.html_url);

  // Comment on issue with results
  await commentOnIssue(
    `✅ **Correction Bot**: Processed this correction successfully.\n\n` +
    `**Changes made:**\n${changesSummary}\n\n` +
    `**Claude validation:** ${validation.reasoning}\n\n` +
    `**Pull Request:** ${pr.html_url}\n\n` +
    `A maintainer will review and merge the PR.`
  );
}

main().catch(async (err) => {
  console.error('Correction agent failed:', err);
  try {
    await commentOnIssue(
      `⚠️ **Correction Bot**: An error occurred while processing this issue. ` +
      `A maintainer will handle it manually.\n\n` +
      `\`\`\`\n${err.message}\n\`\`\``
    );
    await addLabel('needs-review');
  } catch {
    // If even the comment fails, just log
    console.error('Failed to post error comment');
  }
  process.exit(1);
});
