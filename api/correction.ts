import type { VercelRequest, VercelResponse } from '@vercel/node';

const REPO_OWNER = 'cannonQ';
const REPO_NAME = 'ergo-transcripts';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    return res.status(500).json({ error: 'Server configuration error' });
  }

  const { pageType, pageTitle, pageUrl, currentText, correctedText, notes } = req.body;

  if (!pageType || !pageTitle || !currentText) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const title = `[Correction] ${pageType}: ${pageTitle}`;
  const body = [
    `## Correction Request`,
    ``,
    `**Page:** ${pageUrl}`,
    `**Section:** ${pageType}`,
    `**Item:** ${pageTitle}`,
    ``,
    `### Current Text`,
    `> ${currentText}`,
    ``,
    `### Suggested Correction`,
    correctedText ? `> ${correctedText}` : '_No replacement provided_',
    ``,
    notes ? `### Additional Notes\n${notes}` : '',
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
      const error = await response.text();
      console.error('GitHub API error:', error);
      return res.status(502).json({ error: 'Failed to create issue' });
    }

    const issue = await response.json();
    return res.status(201).json({ success: true, issueUrl: issue.html_url });
  } catch (err) {
    console.error('Error creating issue:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
