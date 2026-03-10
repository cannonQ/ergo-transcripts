// No-op OAuth token endpoint — public data, no real credentials needed
export default function handler(req, res) {
  res.json({
    access_token: "ergo-community-public-access",
    token_type: "bearer",
    expires_in: 86400,
  });
}
