const REPO_OWNER = 'cannonQ';
const REPO_NAME = 'ergo-transcripts';

// Max character limits for input fields
const MAX_FIELD_LENGTH = 2000;
const MAX_TITLE_LENGTH = 200;

// Strip HTML tags and control characters from user input
function sanitize(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/<[^>]*>/g, '')           // strip HTML tags
    .replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, '') // strip control chars
    .trim();
}

function truncate(str, max) {
  return str.length > max ? str.slice(0, max) + '...' : str;
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return res.status(500).json({ error: 'Server configuration error' });
  }

  const { pageType, pageTitle, pageUrl, currentText, correctedText, notes, website } = req.body || {};

  // Honeypot — if the hidden field is filled, silently discard
  if (website) {
    return res.status(201).json({ success: true });
  }

  // Validate required fields
  if (!pageType || !pageTitle || !currentText) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Sanitize and truncate all user inputs
  const cleanPageType = truncate(sanitize(pageType), MAX_TITLE_LENGTH);
  const cleanPageTitle = truncate(sanitize(pageTitle), MAX_TITLE_LENGTH);
  const cleanPageUrl = truncate(sanitize(pageUrl || ''), MAX_FIELD_LENGTH);
  const cleanCurrentText = truncate(sanitize(currentText), MAX_FIELD_LENGTH);
  const cleanCorrectedText = truncate(sanitize(correctedText || ''), MAX_FIELD_LENGTH);
  const cleanNotes = truncate(sanitize(notes || ''), MAX_FIELD_LENGTH);

  const title = `[Correction] ${cleanPageType}: ${cleanPageTitle}`;
  const body = [
    `## Correction Request`,
    ``,
    `**Page:** ${cleanPageUrl}`,
    `**Section:** ${cleanPageType}`,
    `**Item:** ${cleanPageTitle}`,
    ``,
    `### Current Text`,
    `> ${cleanCurrentText}`,
    ``,
    `### Suggested Correction`,
    cleanCorrectedText ? `> ${cleanCorrectedText}` : '_No replacement provided_',
    ``,
    cleanNotes ? `### Additional Notes\n${cleanNotes}` : '',
  ].filter(Boolean).join('\n');

  try {
    const response = await fetch(
      `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/issues`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: 'application/vnd.github+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          body,
          labels: ['correction', 'community'],
        }),
      }
    );

    if (!response.ok) {
      console.error('GitHub API error:', response.status);
      return res.status(502).json({ error: 'Failed to create issue' });
    }

    const issue = await response.json();
    return res.status(201).json({ success: true, issueUrl: issue.html_url });
  } catch (err) {
    console.error('Error creating issue:', err.message);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
