# Ergo Developer Chat — 2025-W30 Summary

## Key Topics Discussed

- **Autolykos candidate block timeout issues (5.0.x → 6.0.0)**: Node operators experiencing AskTimeoutException when submitting blocks via `/mining/candidate` endpoint; kushti traced root cause to candidate block regeneration introduced in 5.0.26 and requested RAM/config details to diagnose further.

- **Lithos Protocol development**: CannonQ completed storage rent contract testing, NISP Fraud Proof contracts (mostly done), and initiated difficulty contract to prevent on-chain 'd' value fraud. Also started emission contract for LIT token and began research on merge-mined Ergo sidechains in Rust. Braid whitepaper in progress from kushti.

- **Sigma 6.0 protocol soft-fork**: Ergo 6.0 activation targeted for September. Feature scope includes improved sub-block handling with PoEM (Proof of Equivocation Misbehavior) for input-block fork resolution, merged-mined sidechain framework in Rust, and performance improvements under discussion.

- **Hardware fingerprinting / Proof-of-Antiquity consensus**: AutoJanitor presented RustChain concept using CPU entropy aging, RAM clock drift, and BIOS specificity to prove hardware age rather than computational power; debate emerged over verifiability of fingerprints to validators and whether LLM-generated code was appropriate for consensus-critical systems.

- **Hermes indexer and box streaming**: anon_BR working on real-time box streamer on indexed node originally for Machina Finance but designed generically; Hermes project exploring Ledger integration with token limit constraints (~100 tokens per transaction due to device memory).

- **FleetSDK / Keystone integration**: arobsn added reduced transaction custom serialization to keystone-ergo-js; MGpai working on input box proof inclusion in API responses for enhanced transaction visibility.

- **SigmaLok indexing layer**: MGpai reported completion of contract, review, and indexer (written in Go with actor framework); handles mempool transactions, replacements, and rollbacks; API documentation available at api-sigmalok.phoenixfi.app.

- **Celaut and Game of Prompts**: Josemi resolved local execution and service packaging issues blocking beta release; working on visual landing pages for both projects (Ubuntu 22 only initially).

- **Minotaur wallet 3.0.0 release**: Multi-sig communication data format updated; **breaking change** — not compatible with older versions for multi-sig transactions.

## Important Decisions or Announcements

- [@kushti, msg#35054, 2025-07-23]: Weekly Ergo Developers chat scheduled for Wed, July 23rd, 1PM UTC; requested feedback on financial contracts development and discussion of 6.0 protocol updates, sidechains, and L2 research.

- [@kushti, msg#35068, 2025-07-23]: Braid whitepaper initial pre-public version finished; seeking peer review. Merged-mined Ergo sidechains framework starting in Rust — contributors welcomed.

- [@kushti, msg#35123, 2025-07-24]: Community Zoom chat scheduled for next day instead of usual AMA format to discuss "all things Ergo" with open group conversation.

- [@cannon_q, msg#35048, 2025-07-21]: Lithos Protocol storage rent contract testing complete; NISP Fraud Proof contracts nearly complete; difficulty and emission contracts underway.

- [@vorujack (via kushti), msg#35174, 2025-07-25]: **Minotaur v3.0.0 released** with multi-sig format update; warning that version is **NOT backward-compatible** with older multi-sig transactions.

- [@qx(), msg#35173, 2025-07-24]: InfraDAO infrastructure dashboard accepting explorer and testnet submissions (Sigmaspace and ErgoExplorer monitoring to be added later).

## Technical Q&A Worth Preserving

- **Q** (@andrei via DiscordBridge, msg#35044): POST /mining/candidate endpoint returns AskTimeoutException after 5 seconds; some blocks rejected. Node is 6.0.0.
  **A** (@kushti, msg#35045): Likely caused by candidate block regeneration from 5.0.26. Requested frequency of errors, RAM allocation, and node config to diagnose.

- **Q** (@kushti, msg#35088–89): How can hardware fingerprinting in RustChain's Proof-of-Antiquity be proven to validators without cheating?
  **A** (@AutoJanitor, msg#35092, 35093): Three-pronged approach: (1) RAM clock drift differences between real and emulated hardware; (2) CPU entropy aging/thermal degradation curves; (3) BIOS/firmware specificity (emulators use generic ROMs). Emulators detectable and punished; ARM CPUs cheap/plentiful so penalized. No hashrate race removes incentive to emulate.

- **Q** (@kushti, msg#35125): Can AI (LLM) create secure consensus algorithms?
  **A** (@kushti, implicit): Skeptical; suggested reviewing actual code/whitepaper rather than AI-generated scaffolding for security-critical systems.

- **Q** (@Luca D'Angelo, msg#35176): Is Cardano's GuardScripts proposal (preventing smart contract UTXO creation) possible on Ergo?
  **A** (@kushti, msg#35184): Left to sidechains experimentation; appears to be a use case for Global Transfer Policies (GTP). Scope differs — GTP applies to monetary circuits starting from initial UTXOs/tokens; this proposal treats contracts as first-class citizens controlling which UTXOs bind to them.

- **Q** (@HQΣr, msg#35179): Easiest way to convert block height to timestamp for old blocks?
  **A** (@HQΣr, msg#35181): Self-resolved; found endpoint (details not shared in excerpt).

## Links Shared

- [https://github.com/ergoplatform/ergo/pull/2231]: Candidate block cache issue PR; kushti requested review from Pgr456 regarding previousCachedCandidate expiration bug.

- [https://github.com/ergoplatform/ergo/pull/2229]: Testnet sync fix PR.

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1074]: Sigma 6.0.1 release preparation; merged.

- [https://github.com/BetterMoneyLabs/chaincash-rs/pull/60]: ChainCash PR reviewed by kushti.

- [https://github.com/ergoplatform/ergo/issues/2232]: New bounty issue opened by kushti.

- [https://github.com/ergoplatform/ergo/pull/2233]: MGpai's PR for input box proofs in API response; requesting help with formatting and proof inclusion.

- [https://github.com/4EYESConsulting/sigmalok-indexer]: SigmaLok indexer (Go, actor framework); indexes mempool transactions, handles replacements and rollbacks.

- [https://api-sigmalok.phoenixfi.app/docs]: SigmaLok API documentation.

- [https://github.com/ergoplatform/sigma-rust/pull/834]: dusek review requested; JSON serialization for reduced transactions needed for Keystone/Nautilus integration.

- [https://minotaur-ergo/minotaur-wallet/releases/tag/v3.0.0]: Minotaur wallet v3.0.0 release notes.

- [https://eprint.iacr.org/2023/1388.pdf]: kushti shared IACR paper on Sigma protocol progress (msg#35129).

- [https://www.ergoforum.org/t/sidechain-ideas-global-transfer-policies/5199]: Ergoforum discussion of Global Transfer Policies for sidechains.

- [https://infra-p2p.ergoplatform.com/cgi-bin/dashboard.cgi]: InfraDAO infrastructure dashboard for node/explorer/testnet monitoring.

- [https://ergoplatform.org/en/blog/Sigma-6-0-A-Smarter-More-Flexible-Ergo/]: Blog post on Sigma 6.0; Glasgow requested confirmation of September activation date.

- [https://github.com/colll78/CIPs/blob/GuardScripts/CIP-GuardScripts%2FREADME.md]: Cardano CIP-GuardScripts proposal referenced by Luca D'Angelo.

- [https://patents.justia.com/assignee/ai-coin-inc]: Patent assignment record shared by AutoJanitor regarding AI-Coin (pre-Ripple decentralized fast payment system, 2014–2016).

## Unresolved Questions

- **RustChain consensus verifiability**: AutoJanitor claims fingerprinting (entropy, clock drift, BIOS) is cheating-resistant but no whitepaper or audited code provided yet; kushti requested whitepaper/code for review (msg#35113). AutoJanitor stated DJ hired to formalize code; meeting pending.

- **Autolykos timeout root cause**: kushti waiting on node config and RAM details from mining pool operator (andrei) to confirm 5.0.26 regression hypothesis.

- **Sub-blocks implementation path**: kushti identified need for consensus on whether to pursue sub-blocks, sidechains, or layer 2 solutions; community discussion planned post-Ergoversary but no decision yet (msg#35067).

- **Global Transfer Policies vs. GuardScripts semantics**: MGpai confirmed with proposer that GuardScripts treats contracts as first-class citizens, but detailed implementation implications for Ergo unclear.

- **Input box proof API format**: MGpai requested kushti's guidance on how to include input box proofs in API response structure (msg#35097); ongoing.

- **SkyHarbor community governance**: quokka seeking advice on shared ownership model for backend infrastructure; CannonQ offered to reach out but no resolution documented (msg#35128).

---

**Summary**: Week 2025-W30 saw steady protocol R&D progress (Sigma 6.0, Lithos, Braid), wallet/tooling updates (Minotaur 3.0, Hermes, Keystone), and heated debate over AI-assisted code in consensus systems and open-source licensing. Mining pool timeout issue identified but diagnostic data pending. Community Zoom chat held mid-week for broader Ergo ecosystem discussion.