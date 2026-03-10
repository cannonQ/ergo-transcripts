// OAuth Authorization Server Metadata (RFC 8414)
// No-op OAuth — public data, no real credentials needed
export default function handler(req, res) {
  const host = req.headers["x-forwarded-host"] || req.headers.host;
  const protocol = req.headers["x-forwarded-proto"] || "https";
  const origin = `${protocol}://${host}`;

  res.json({
    issuer: origin,
    authorization_endpoint: `${origin}/api/authorize`,
    token_endpoint: `${origin}/api/token`,
    response_types_supported: ["code"],
    grant_types_supported: ["authorization_code"],
    code_challenge_methods_supported: ["S256"],
  });
}
