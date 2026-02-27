# Ergo Developer Chat Summary — 2025-W38

## Key Topics Discussed

- **Sub-blocks Implementation & Voting**: kushti introduced voteable parameters for sub-blocks (number per block), with whitepaper in progress. Community discussion and approval required before full deployment; no subblocks possible if clear disagreement emerges. [@kushti khushi, msg#35895, msg#35899-35901]

- **P2P Layer Bugs in 6.0 Alpha**: Multiple issues causing peer bans and duplicate block header delivery. Root causes identified in transaction propagation serialization and input block announcement messages. Fixed in commits 389c9f5 and 75fcc0c. [@kushti khushi, msg#35913, msg#35915, msg#35937, msg#35946]

- **Sigma 6.0 Test Generation with LLM**: Generated ~360 lines of Sigma code using LLM assistance within hours; aims to improve ErgoScript semantics definition. Seeking volunteers for prompting and output cleanup while learning Sigma. [@kushti khushi, msg#35884-35885]

- **USD Oracle Pool v1 & v2**: v1 currently used in SigmaUSD and Raffle v1. v2 running for Dexy Gold with GORT rewards. Plans to build native Ergo oracles with improved security and ecosystem-specific tooling for Palmyra use case. [@kushti khushi, msg#35881-35882, msg#35930]

- **Nautilus Wallet Localization**: Added Javanese and Malaysian (Melayu) language support via pull requests #316 and #317. [@CHRIS45, msg#35878, msg#35920]

- **Basis Contract & ChainCash**: Fixed Basis contract; pushed data structures for basis tracker and IOU persistence (agent-generated with hallucinations reviewed). Actively seeking Rust developers for tracker implementation. [@kushti khushi, msg#35922]

- **Rosen Bridge UI Updates**: Event List page updated to use latest UI-Kit for consistency; UI-Kit enhanced with flexibility improvements and new components. Guard app dashboard refactored for networks and health sections. [@zargarzadehmoein, msg#35924]

- **Gluon Gold Frontend**: Multiple UI improvements for desktop/mobile, 14-day transmute volume chart added, swap checking restriction reduced to 75% pending fusion. Two wallet connection issues (GitHub #50, #51) need deeper investigation. [@Michael, msg#35936; @Bruno, msg#35987]

- **GitCircles Development**: Working on token issuance and payment distribution; bro_etiket received first payment for merged PRs. [@kushti khushi, msg#35921]

- **Game of Prompts**: Improvements to reputation system; working on frontend judges section. [@Josemi, msg#35923]

- **Data Input Costs**: Data inputs cost 100 per input (per network parameters), making 1,000 inputs feasible but with cumulative cost. [@MGpai, msg#36035; @Pgr456, msg#36036]

## Important Decisions or Announcements

- [@kushti khushi, msg#35915, 2025-09-16]: Requested testing of commit 389c9f5 to resolve peer banning and spam issues in devnet (6.0 alpha).

- [@kushti khushi, msg#35937, 2025-09-17]: Will redeploy seed node with fix for transaction propagation error in input block announcement serializer.

- [@kushti khushi, msg#35970, 2025-09-18]: Seed node peers database reset after earlier banning issues.

- [@kushti khushi, msg#35931, 2025-09-17]: New USE stablecoin Telegram group established (https://t.me/USE_stablecoin); proceeding with new pool instead of updating current one.

- [@kushti khushi, msg#35946, 2025-09-17]: P2P layer remains hardest to test; will generate standard (non-integration) tests in coming days.

- [@kushti khushi, msg#35980, 2025-09-19]: Identified issues with mining; requested testing without mining for now.

- [@kushti khushi, msg#35917, 2025-09-16]: Weekly Ergo Developers chat scheduled for Wed Sep 17, 1PM UTC; requested feedback on developing financial contracts, 6.0 protocol soft-fork, input/ordering blocks, sidechains, L2, and AI research topics.

## Technical Q&A Worth Preserving

- **Q** (@Kubele 🇦🇷): When can sub-blocks be fully live?
  **A** (@kushti khushi, msg#35899): After whitepaper and community discussion/approval. In case of objections, there will be no subblocks. Miners then adopt them or not.

- **Q** (@Patato): Node repeatedly losing connection to seed node and getting penalized despite full DB sync.
  **A** (@kushti khushi, msg#35913, msg#35918): Found peer ban issue after input block with transactions due to error in input block transaction announce message serializer. Fixed in later commits.

- **Q** (@Luca D'Angelo): How to convert block height to timestamp?
  **A** (@HQΣr, msg#36023): Ergo Watch Swagger API provides endpoints for this.
  (@Aco Šmrkas, msg#36024): Example endpoint: `https://api.ergoplatform.com/api/v1/blocks?limit=1&offset=1434699&sortBy=height&sortDirection=asc`

- **Q** (@Josemi): Can debugging output from `sign_tx()` error messages (showing reduced expressions and environments) be copy-pasted back into `sign_tx()` for debugging?
  **A** (Unresolved) Someone reportedly did this with Scala, but no explicit confirmation in thread. [@Josemi, msg#36029]

- **Q** (@Josemi): Is there a limit on data inputs per transaction? Do 1,000 data inputs incur significant cost?
  **A** (@MGpai, msg#36034): There is cost associated with data inputs. (@Pgr456, msg#36036): `dataInputCost: 100` per input in network parameters, so cumulative but not prohibitive for large numbers.

## Links Shared

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1077]: Sigma 6.0 test generation via LLM; awaiting review.
- [https://github.com/nautls/nautilus-wallet/pull/316]: Nautilus Wallet Javanese language support.
- [https://github.com/nautls/nautilus-wallet/pull/317]: Nautilus Wallet Malaysian language support.
- [https://github.com/GitCircles/GitCircles-Github/pull/6] and [https://github.com/GitCircles/GitCircles-Github/pull/5]: GitCircles token issuance and payment distribution.
- [https://www.ergoforum.org/t/ergo-precious-metal-expansion-using-p2p-transfers-paideia-dao-and-dexygold/5230]: Physical precious metal expansion discussion.
- [https://www.ergoforum.org/t/physical-or-digital-gold-simple-insurance-on-ergo/4715]: Gold insurance proposal.
- [https://www.ergoforum.org/t/illicit-cycles-and-liquidity-collapse-in-fractal-finance/5233]: Fractal finance discussion.
- [https://www.ergoforum.org/t/onboarding-real-world-assets-rwas-on-ergo-using-quex-oracles/5237]: Real World Asset tokenization via Quex oracles.
- [https://github.com/StabilityNexus/Gluon-Ergo-UI/issues/51] and [https://github.com/StabilityNexus/Gluon-Ergo-UI/issues/50]: Gluon Gold wallet connection issues needing resolution.
- [https://app.paideia.im/rosenguardsetv1]: Rosen Guard set v1 (suggested for cross-posting discussion).
- [https://docs.ergoplatform.com/dev/protocol/tx/read-only-inputs/#benefits-of-data-inputs]: Documentation on data input cost benefits.
- [https://termbin.com/k1pi], [https://40b8ae065386.ngrok-free.app/info], [https://termbin.com/t3yb]: Various log dumps and node status endpoints from testing.

## Unresolved Questions

- **Sub-blocks finalization timeline**: Whitepaper and community approval process timeline unclear; dependencies on voting parameters and miner adoption.
- **Mining desync issue**: Root cause of desyncing during mining still under investigation; Patato testing without mining to isolate cause (msg#35980, msg#36005).
- **Patato's multi-continent testing continuation**: Testing paused pending travel to Uspallata, Mendoza; resumes ~Monday 2025-09-22 with Starlink. [@Patato, msg#36014]
- **LLM-generated Sigma code quality & review process**: How much manual review required; unclear acceptance criteria for generated tests. [@kushti khushi, msg#35884]
- **Gluon wallet connection debugging**: Two GitHub issues (#50, #51) blocking frontend release; require deeper wallet connection/communication expertise.
- **Ergo Oracle Pool v3 or multi-oracle strategy**: Mentioned need to build native Ergo oracles and integrate multiple oracle sources (including Ergo's own) but timeline and prioritization undefined.
- **Dev funding & bounty strategy**: arkadia inquired about which bounties lack funding or need boosting; no explicit funding roadmap provided. [@arkadia, msg#36008-36012]