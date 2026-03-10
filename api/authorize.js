// No-op OAuth authorization endpoint — public data, no real credentials needed
export default function handler(req, res) {
  const redirectUri = req.query.redirect_uri;
  const state = req.query.state;

  if (!redirectUri) {
    return res.status(400).json({ error: "missing redirect_uri" });
  }

  const url = new URL(redirectUri);
  url.searchParams.set("code", "ergo-community-static-code");
  if (state) url.searchParams.set("state", state);

  res.redirect(url.toString());
}
