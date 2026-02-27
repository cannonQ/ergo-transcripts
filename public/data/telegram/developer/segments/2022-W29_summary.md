# Ergo Developer Chat Summary — 2022-W29

## Key Topics Discussed

- **Node synchronization issues with version 4.0.34**: Aberg reported assertion failures in the AVL tree persistence layer (`PersistentBatchAVLProver`) when upgrading from 4.0.20.1 to 4.0.34, resulting in `fullHeight: null` and inability to sync. kushti acknowledged potential database corruption and committed to investigating.

- **Satergo wallet v1.4.0 release**: Major stable release with offline mode for address management, improved sync progress UI, CoinGecko data filtering, and node overview enhancements.

- **Cloudflare browser verification blocking API access**: Explorer API at ergoplatform.com was blocking non-browser clients (especially Tor users) with HTML verification responses instead of JSON. kushti disabled verification on Tor requests; issue resolved by week's end.

- **Ergo.watch feature requests and donations**: User inquiry about feature requests and lack of donation address for the accounting tool; directed to Discord for developer contact.

- **Node operator tooling**: Discussion of ergonodes.net (daily network stats, planned hourly updates) and GetBlock's explorer API as alternative when official API is unavailable.

## Important Decisions or Announcements

- [@Aberg, msg#4288, 2022-07-20]: **Satergo v1.4.0 released** — offline mode, improved sync UI, CoinGecko data filtering, stable version bump from pre-release numbering.
- [@kushti, msg#4414, 2022-07-24]: **Cloudflare browser verification disabled** on Ergo Explorer API; relaxed specifically for Tor traffic to preserve non-browser API access.

## Technical Q&A Worth Preserving

- **Q** (@Aberg, msg#4227, 4243): Node crashes with `PersistentBatchAVLProver` assertion failure in 4.0.34, even after deleting blockchain data.
  **A** (@kushti, msg#4248, 4251): Asked for full error context; suspected database corruption; committed to investigation with version confirmation (4.0.34).

- **Q** (@Aberg, msg#4262): Is "state collector got strange input" spam normal during sync?
  **A** (implicit resolution): Noted as "stats collector" typo; behavior not further discussed — likely noise from ABL tree operations during catch-up.

- **Q** (@Unknown, msg#4324): Best route to request features on ergo.watch? Are donation addresses available?
  **A** (@MrStahlfelge, msg#4325): Developer is active on Discord and in weekly chats.

- **Q** (@Aberg, msg#4392, 4399): Cloudflare browser verification on Explorer API blocks Tor users; breaks non-browser access (Satergo, code clients).
  **A** (@kushti, msg#4414, 4417): Disabled verification; relaxed specifically for Tor to preserve API-only access pattern.

## Links Shared

- [https://ergo.watch/apis](https://ergo.watch/apis): Explorer and API endpoint reference.
- [https://satergo.com](https://satergo.com): Satergo wallet v1.4.0 release page.
- [ergonodes.net](http://ergonodes.net): Real-time Ergo node network statistics (daily, planned hourly updates).

## Unresolved Questions

- Root cause of `PersistentBatchAVLProver` assertion failures post-update not conclusively diagnosed; kushti collected error details but no final resolution reported within the week.
- Why synced node's HTTP API was killed when sync completed, and why it ignored CTRL+C (required `kill -9`) — classified as "broken node behavior" but not root-caused.