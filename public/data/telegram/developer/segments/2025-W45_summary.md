# Ergo Developer Chat Summary — W45 2025-11-03 to 2025-11-09

## Key Topics Discussed

- **Hetzner Infrastructure Outage & P2P Failover**: On 2025-11-03, Hetzner datacenter experienced downtime. API, GraphQL, and Explorer were redirected to Cloudflare workers and p2p pool servers. Redirects were removed once infrastructure recovered (~2 hours). This exposed performance gaps between Hetzner and p2p nodes for heavy queries (e.g., oracle contract box lookups).

- **Explorer API Performance Bottlenecks**: High-complexity ErgoTree queries (e.g., `byErgoTree` with 500+ offset) timeout on p2p nodes but succeed on Hetzner and Sigmaspace. Root cause identified as missing database optimizations/indices or insufficient RAM (32GB p2p vs 128GB Cornell instance). TimescaleDB autotuning suggested as potential improvement.

- **Protocol R&D & Sub-blocks**: kushti reviewed PRs #2249 and #2250, opened issue #2251 on mitigation strategies. Sub-blocks forking logic being reworked to simplify verification cost accumulation. Whitepaper continuation in progress.

- **SigmaSDK Maturation**: Polishing examples and publishing documentation. PR #1086 (sigmastate-interpreter) pending review.

- **Ergo Wallet & Explorer Backend Bounties**: Multiple first-issue bounties assigned for Scala/Java/Android developers. Wallet app issue #187 (transaction formation) and Explorer backend issues #258–259 require contributor participation.

- **Rosen Bridge Bitcoin Runes Release**: Final QA milestone started. Replaced P2P system with Rosenet, integrated new Ergo Multisig package, upgraded services to Node v22.18. On-chain token map (TokenMap) being implemented in two stages to decentralize token config management.

- **Perpetual Futures (Perps) for ERG**: Community discussion on building perps dApp as driver for on-chain activity. Concerns raised about developer incentives and funding model; no consensus reached on implementation.

## Important Decisions or Announcements

- [@kushti khushi, msg#36595, 2025-11-03]: Bounty assigned for Ergo Wallet app issue #187 (transaction formation tooling).
- [@qx(), msg#36603–36689, 2025-11-03]: Infrastructure redirects deployed then removed after Hetzner recovery; API, GraphQL, and Explorer restored to primary endpoints.
- [@kushti khushi, msg#36698, 2025-11-03]: Bounties can be assigned for open-source Ergo improvements with permissionless licenses.
- [@cannon_q, msg#36715, 2025-11-04]: Paideia DevDAO vote set up for BigPanda bounty payout (2-day closure window).
- [@kushti khushi, msg#36758, 2025-11-05]: AGENTS.md merged into 6.0.2 protocol candidate (PR #2242).
- [@DiscordBridge (kushti Discord relay), msg#36720, 2025-11-04]: Weekly Ergo Developers chat scheduled for Wednesday, Nov 6, 1PM UTC. Topics: financial contracts feedback, 6.0 soft-fork, input/ordering blocks, sidechains, L2, AI research.

## Technical Q&A Worth Preserving

- **Q** (@Aco Šmrkas): Are oracle-core.ergopool.io and airdrop.spectrum.fi required for current operations?
  **A** (@Aco Šmrkas, msg#36630): "Those are long gone. Not an issue right now."

- **Q** (@Aco Šmrkas): Can the heavy `byErgoTree` API queries be optimized?
  **A** (@error, msg#36651): "P2P performance is not on par with Hetzner. Those calls ARE heavy." (@Aco Šmrkas suggests missing DB indices or raw computing power.)
  **A** (@qx(), msg#36664–36668): Cornell instance has 128GB RAM and 3000/5000 write/read MHS SSDs; p2p nodes have 32GB. (@kushti suggests checking PR #256 on explorer-backend for sync fixes; @Pgr456 clarifies this is mandatory for full-height sync, not a speedup.)

- **Q** (@kushti khushi): Can context extensions (6.0 feature) reduce transaction formation friction?
  **A** (@kushti khushi, msg#36596): "Starting from 6.0, you can provide a script via context extension of one input and read it in all inputs. Sometimes that could work better."

- **Q** (@kushti khushi): Is Lithos Protocol reusable for LLM inference contexts?
  **A** (@kushti khushi, msg#36764): Question posed to @Armeanio and @CheeseEnthusiast; no answer recorded in this segment.

- **Q** (@Alien): Does Rosen Bridge expose APIs for third-party platform integration?
  **A** (@Michael, msg#36774): "https://github.com/rosen-bridge/rosen-sdk" — SDK available but missing EVM support on all chains.

## Links Shared

- [https://github.com/ergoplatform/ergo/issues/2251](https://github.com/ergoplatform/ergo/issues/2251): Mitigation strategy issue for infrastructure/protocol concerns (msg#36594).
- [https://github.com/ergoplatform/ergo-wallet-app/issues/187](https://github.com/ergoplatform/ergo-wallet-app/issues/187): Bounty-assigned first issue for Scala/Java/Android Ergo Wallet development (msg#36595).
- [https://github.com/ergoplatform/explorer-backend/pull/256](https://github.com/ergoplatform/explorer-backend/pull/256): Explorer sync optimization PR (msg#36666).
- [https://github.com/ergoplatform/ergo/pull/2250](https://github.com/ergoplatform/ergo/pull/2250): Approved protocol PR; awaiting BigPanda merge (msg#36703).
- [https://github.com/rosen-bridge/rosen-sdk](https://github.com/rosen-bridge/rosen-sdk): Rosen Bridge SDK for cross-chain integration (msg#36774).
- [https://deepwiki.com/rosen-bridge/rcs](https://deepwiki.com/rosen-bridge/rcs): Rosen Contract Registry & RCS documentation (msg#36778).
- [https://x.com/chepurnoy/status/1985445463160713513](https://x.com/chepurnoy/status/1985445463160713513): kushti's DLC security note (msg#36701).
- [https://x.com/chepurnoy/status/1986005948494729681](https://x.com/chepurnoy/status/1986005948494729681): kushti's post on DLC protocol and Ergo implementation (msg#36745).
- [https://x.com/chepurnoy/status/1986224467631288407](https://x.com/chepurnoy/status/1986224467631288407): kushti's post on cryptographic research alignment (msg#36757).
- [https://x.com/chepurnoy/status/1986465436649857303](https://x.com/chepurnoy/status/1986465436649857303): kushti's post on LLM inference context (msg#36763).
- [https://x.com/buildonergo/status/1987524187104411889](https://x.com/buildonergo/status/1987524187104411889): BuildOnErgo tweet (msg#36785).

## Unresolved Questions

- **P2P Explorer API Optimization**: Consensus that heavy queries need database indexing or TimescaleDB tuning, but no owner assigned for implementing these fixes across the p2p pool. (@kushti suggested compiling a GitHub issue list; @qx() indicated willingness to apply optimizations script-wide once details known.)
- **Perpetual Futures Funding & Developer Incentives**: No resolution on whether perps should be funded via investor pools, developer fees, or bounties. Interest expressed but no development team committed (msg#36716–36732).
- **Script Context Extension Best Practices (6.0)**: kushti's suggestion to use context extensions for script reuse needs further documentation and examples.
- **LLM Inference on Lithos**: Question posed but not answered; requires feedback from Armeanio or CheeseEnthusiast.