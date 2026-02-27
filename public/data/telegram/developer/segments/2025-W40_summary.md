# Ergo Developer Chat Summary — 2025-W40

## Key Topics Discussed

- **Node Synchronization Issues**: Multiple reports of nodes getting stuck at different block heights on devnet, with peer penalty scoring and seed node blacklisting causing sync failures. kushti identified the root cause as rapid block arrival with few peers triggering incorrect penalty logic.

- **6.0 Protocol Soft-Fork & Input/Ordering Blocks**: Core R&D on mempool and wallet support for input blocks is complete except for rollback processing and test generation. A whitepaper on input/ordering blocks is being written, with global transfer policy contract examples now codified in ErgoScript.

- **ErgoScript Design Patterns via AI Agents**: kushti published 2020 design patterns from the forum and is using AI agents to rework them into showcase tests in SigmaSDK, with bounties planned for community contributions exploring programmable money on Ergo.

- **Token Burning Mechanics**: Discussion clarified that tokens (unlike ERGs) can be omitted from outputs to burn them, provided the box script does not prevent it. ERGs must balance in/out; token amounts only require input >= output.

- **Perpetual Token Contract**: kushti implemented the first ErgoScript example of a perpetual token contract based on Jason Davies' 2020 forum post, demonstrating practical use of storage rent and token mechanics.

- **USE Stablecoin & Dexy Protocol**: New USD Oracle Pool v2 (powered by Dexy) launched by Pgr456; Dexy protocol parameters are under discussion.

- **Rosen Bridge Watcher Infrastructure**: Clarified that watchers serve only the Rosen protocol, not as full nodes, though operators may run local nodes alongside or use remote node connections.

- **Real-World Assets (RWAs) Onboarding**: Forum discussion on using Quex oracles to onboard RWAs on Ergo, with follow-up ideas about API integrations for shipping and logistics tracking on-chain.

## Important Decisions or Announcements

- [@kushti khushi, msg#36138, 2025-09-29]: ErgoDevs DAO has 7.5K ERG in bounties (including Keystone integration). Fundraising campaigns on Ergo Raffle and MewFund raised additional 7K ERG in kushti's wallet. 1K bounty set for sigma-rust issue #193; 6K ERG allocation plan to be published shortly.

- [@kushti khushi, msg#36146, 2025-09-30]: Weekly Ergo Developers chat scheduled for Wed, Oct 1st, 1 PM UTC. Topics: developer tooling feedback, financial contracts on Ergo, 6.0 soft-fork, input/ordering blocks, sidechains, L2, and AI research.

- [@kushti khushi, msg#36148, 2025-10-01]: Developers chat live on Oct 1st; call for project updates.

- [@kushti khushi, msg#36152, 2025-10-01]: **Basis / ChainCash** — vibecoded rough prototype ready for manual review, polishing, and testing. SilverCents idea being evaluated. madspectator started a wallet implementation.

- [@anon_br Σ, msg#36150, 2025-10-01]: **Nautilus** — WebHID Ledger interactions fixed. Bitcoin Runes integration research ongoing. **Machina Finance & Hermes** — still in MVP development; no major updates to report.

- [@kushti khushi, msg#36149, 2025-10-01]: **GitCircles** — bro_etiket completed another pull request (3 milestones left). wishyoubalance setting up infrastructure (domain, etc.).

- [@kushti khushi, msg#36155, 2025-10-01]: **Ergo Protocol R&D** — mempool/wallet support for input blocks done (except rollback processing). Whitepaper on input/ordering blocks in progress. AI-generated tests for 6.0, SigmaSDK, input blocks, and difficulty readjustment. Global transfer policy contract example added to sigmastate-interpreter PR #1080.

- [@kushti khushi, msg#36158, 2025-10-01]: **USE Stablecoin** — new USD Oracle Pool v2 (Dexy-powered) launched by Pgr456. Dexy protocol parameters under discussion.

- [@kushti khushi, msg#36173, 2025-10-03]: Major security research published on rollup transaction fee mechanisms: comprehensive analysis of liveness attacks and Prover Killer transactions (link: https://x.com/schaliasosvons/status/1972634135245287863).

- [@kushti khushi, msg#36184, 2025-10-05]: **6.0 Protocol activation in 20 hours.**

## Technical Q&A Worth Preserving

- **Q** (@Patato, msg#36130): Node stuck at block height 41854 while main devnet progresses to 42663; logs indicate desynchronization even after DB deletion.
  **A** (@kushti khushi, msg#36142): Issue caused by rapid block arrival with few peers triggering incorrect penalty scoring. Temporary mitigation: set `scorex.network.penaltyScoreThreshold = 500000` in top-level scorex section of config. Root cause fix in progress.

- **Q** (@Patato, msg#36136): Node stuck again at height 43505; sees spam penalties and blacklisted seed node warnings.
  **A** (@kushti khushi, msg#36138): Will investigate with DEBUG logs (200 MB analysis enabled with AI tooling to cross-reference against codebase).

- **Q** (@Josemi, msg#36169): Can a token be omitted from outputs to remove it from network state?
  **A** (@Pulsarz, msg#36170): Yes, that is exactly how token burning works, unless the box script prevents it.

- **Q** (@Josemi, msg#36171): Is token burning different from ERG burning? Is burning ERGs only possible with an always-false script (ignoring storage rent)?
  **A** (@kushti khushi, msg#36172): For ERG, sum of inputs must equal sum of outputs. For other tokens, input sum >= output sum. (Implication: token burning is erasure via non-inclusion in outputs; ERG burning requires destruction via always-false script or rent depletion.)

- **Q** (@Kubele 🇦🇷, msg#36174): Is Ergo emission reduction happening tomorrow?
  **A** (@cannon_q, msg#36175): Check ergo.watch chart for emission schedule.

- **Q** (@Jayedii via Discord, msg#36178): Do Rosen watchers serve as full nodes AND watchers, or only as Rosen protocol servers?
  **A** (@Glasgow via Discord, msg#36179): Watchers serve only Rosen protocol. They connect to a node, which operators may run locally or remotely.

## Links Shared

- [https://twitter.com/chepurnoy/status/1972594385301729485?t=kQZ-j5c3gZEPrzNGJRb5mA](https://twitter.com/chepurnoy/status/1972594385301729485?t=kQZ-j5c3gZEPrzNGJRb5mA): kushti's Twitter post (context not provided in chat).

- [https://ea68fc205ee5.ngrok-free.app/info](https://ea68fc205ee5.ngrok-free.app/info): Patato's devnet node info endpoint (used for sync verification with penalty threshold fix).

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1080](https://github.com/ergoplatform/sigmastate-interpreter/pull/1080): Global transfer policy contract example in ErgoScript (input/ordering blocks feature).

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1082/files](https://github.com/ergoplatform/sigmastate-interpreter/pull/1082/files): First ErgoScript perpetual token contract implementation (based on 2020 forum post).

- [https://www.ergoforum.org/t/ergoscript-design-patterns/222](https://www.ergoforum.org/t/ergoscript-design-patterns/222): 2020 ErgoScript design patterns forum post (being reworked into SigmaSDK showcase tests).

- [https://www.ergoforum.org/t/a-perpetual-token/205](https://www.ergoforum.org/t/a-perpetual-token/205): Jason Davies' perpetual token design post (foundation for kushti's PR #1082).

- [https://x.com/schaliasosvons/status/1972634135245287863](https://x.com/schaliasosvons/status/1972634135245287863): Security research on rollup transaction fee mechanisms and Prover Killer transactions.

- [https://www.ergoforum.org/t/onboarding-real-world-assets-rwas-on-ergo-using-quex-oracles/5237](https://www.ergoforum.org/t/onboarding-real-world-assets-rwas-on-ergo-using-quex-oracles/5237): RWA onboarding on Ergo using Quex oracles framework.

## Unresolved Questions

- Exact root cause of penalty score miscalculation in node sync logic with fast blocks and few peers (fix in progress, awaiting kushti's analysis of DEBUG logs from Patato).
- Full scope of bounty allocations from ErgoDevs DAO's remaining 6K ERG (plan to be published).
- Specific parameters and mechanics of Dexy protocol v2 (under discussion, not finalized).
- Rollback processing implementation for input/ordering blocks (whitepaper and tests pending).
- AI-assisted design pattern showcase scope in SigmaSDK (bounty structure TBD).