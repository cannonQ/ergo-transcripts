# Ergo Developer Chat Summary — 2025-W49
## Period: 2025-12-01 to 2025-12-07

---

## Key Topics Discussed

- **Pool contract templates and token IDs**: kushti clarified that pool contracts remain the same across different stablecoins (USE, DORT, CLB) — only token IDs differ, and the compiler correctly extracts them all from the same template [@kushti khushi, msg#37295].

- **LLM-assisted contract development and auditing**: kushti and Arohbe discussed using language models (Qwen Coder) with langspec.md, UTXO model descriptions, and known-issues documentation to assist with contract development and vibe-auditing. Arohbe is building an LLM-based contract builder achieving ~90% accuracy but discovered edge cases (e.g., ensuring box token counts match sales) that require embedded context rules [@kushti khushi, msg#37327-37328; @Arohbe, msg#37330].

- **Sub-blocks research**: kushti is writing a whitepaper on sub-blocks with vibecoding tests and manual verification, targeting draft release the following week [@kushti khushi, msg#37329].

- **USE stablecoin integration**: Three priority tasks identified: (1) Complete USE in UI, (2) Update USE, DORT, CLB logos in Nautilus, (3) Add USE integration with Rosen Bridge [@kushti khushi, msg#37316]. USE deployed successfully [@cannon_q, msg#37317].

- **Hermes (block watcher)**: anon_BR reported progress on block watcher, hex-to-bytes serialization, and tracing improvements [@DiscordBridge, msg#37318].

- **Machina Finance limit contract**: anon_BR reached final version of ERG-to-Token limit contract, moving to unit tests [@DiscordBridge, msg#37318].

- **Token logo repository**: Michael flagged fragmentation of token logos across multiple repositories (explorer-frontend, Nautilus, CruxFinance) and initiated discussion to establish a single canonical logo repository under ergoplatform for dApp integration [@Michael, msg#37333].

- **Dexy LP pool tracking**: Luivatra added support for tracking Dexy LP pools (Dexy Gold, USE) in CruxFinance with charts and order history (LP tracking only, not bank) [@DiscordBridge, msg#37324].

- **Lithos Protocol v2.0.2**: Cheese released testnet version fixing NISP tree synchronization bug, fraud proof evaluation, and stratum synchronization issues. Added NISP detection/saving and fraud proof contract evaluation [@Cheese, msg#37347].

- **Basis tracker live testing**: kushti completed tracker box updates and is moving to live blockchain reserve testing, followed by stabilization and marketing materials. Planning peer-to-peer cash over mesh network demo with madspectator [@kushti khushi, msg#37331].

- **Stability Workshop papers**: Five peer-reviewed research papers by Ergo community members to be presented December 15, 2025 at LNM Institute of Information Technology, India, covering stablecoins (Djed Shu, Dexy, Gluon W), oracles (Orb), prediction markets (Fate Protocol), and reward distribution (RainDrop) [@kushti khushi, msg#37332].

- **Ergo mobile wallet updates**: Superellipse completed Android 15 and iOS support updates for ergo-wallet-app, requiring MobiVM 2.3.24 and XCode 26.1.1. App tested on iPhone 12 mini (iOS 18.6.2), passes all automatic checks [@Superellipse, msg#37309].

- **Xergon cloud deployment**: Arohbe deployed Xergon cloud version with node/agent, token mint with pubkey for localized private key UI relay connection, adding LLM Studio support for expanded model availability — release target within two weeks [@Arohbe, msg#37346].

- **Ergo 3D block explorer**: Arohbe deployed ergospace.degens.world 3D block explorer (desktop only) [@Arohbe, msg#37346].

- **Game of Prompts and Celaut**: Josemi clarified ongoing work on Game of Prompts to provide first real-world Celaut node service use case, with payment/reputation systems moving from alpha to beta toward Basis [@Josemi, msg#37353].

- **GitCircles development**: Bro Etiket pushing commits for issue-7 with remaining tasks to complete [@Bro Etiket, msg#37338].

- **LLM context for contract development**: Arohbe created structured Ergo-Context repository linking langspec.md, known issues, examples, and references in machine-readable format for local LLM development without internet search [@Arohbe, msg#37368].

- **DOS/Win9x miner support**: AutoJanitor compiled miner on 16-bit OpenWatcom in QEMU FreeDOS, with TCP/IP stack and Rust-based PoA attestation integration in progress. Modern/BSD/Linux/macOS miners already complete [@DiscordBridge, msg#37349-37351].

---

## Important Decisions or Announcements

- [@kushti khushi, msg#37316, 2025-12-03]: Three priority tasks announced for ecosystem progress: complete USE in UI, update USE/DORT/CLB logos in Nautilus, add USE integration with Rosen Bridge.

- [@cannon_q, msg#37317, 2025-12-03]: USE deployed; token IDs and deployment transactions available in PR #5 to dexy-stable repository.

- [@Michael, msg#37333, 2025-12-03]: Multiple PRs merged across explorer-frontend (USD Oracle V2 pending), Nautilus (USE, CLB, DORT added and merged), CruxFinance (trending/gainers/losers boxes, logo additions).

- [@Cheese, msg#37347, 2025-12-03]: Lithos Protocol testnet v2.0.2 released with NISP tree sync and fraud proof evaluation fixes.

- [@Superellipse, msg#37309, 2025-12-02]: ergo-wallet-app PR #188 ready for release after Android 15 and iOS updates (MobiVM 2.3.24 required); tested on iPhone 12 mini (iOS 18.6.2).

- [@kushti khushi, msg#37332, 2025-12-03]: Announcement of five peer-reviewed research papers by Ergo community for presentation at 1st Stability Workshop, December 15, 2025.

- [@kushti khushi, msg#37334, 2025-12-03]: Bounty attached to explorer-frontend PR #199 (USD Oracle V2).

---

## Technical Q&A Worth Preserving

- **Q** (@Bruno Woltzenlogel Paleo, msg#37293-37297): Is there a "good first issues" list on Ergo, similar to Stability Nexus? Current bounty list appears focused on harder issues rather than entry-level contributions.
  **A** (@kushti khushi, msg#37296): Some repos have them; will check later today.

- **Q** (@Luivatra, msg#37291): Need to identify which pool actions were taken on specific pool contracts.
  **A** (@kushti khushi, msg#37295): Pool contract is identical; only token IDs differ for stablecoin and action NFTs. Compiler extracts all tokens from same template.

- **Q** (@kushti khushi, msg#37300): Can issue #632 in sigmastate-interpreter be closed?
  **A** (@Luivatra, msg#37301): Yes, it's used by Paideia and should be fine.

- **Q** (@Arohbe, msg#37330): How to handle LLM-based contract builder missing edge cases like ensuring contract box token count matches tokens sold?
  **A** (@kushti khushi, msg#37328): Include langspec.md, UTXO model description, known issues documentation, and examples (whitepaper/advanced ES whitepaper) in LLM context; this should be sufficient. Basic exchange rules in whitepaper may help [@kushti khushi, msg#37335].

- **Q** (@HQΣr, msg#37369): Should FleetSDK be added to Ergo-Context?
  **A** (@Arohbe, msg#37370): FleetSDK already referenced in langspec.md, which links to Fleet SDK.

---

## Links Shared

- [https://github.com/ergoplatform/explorer-backend/pull/261]: Separated PR with test proving bug and fix recommendations for explorer-backend.

- [https://github.com/ergoplatform/explorer-backend/pull/260]: Removed submission file as requested.

- [https://github.com/ergoplatform/sigmastate-interpreter/issues/632]: Issue regarding functionality used by Paideia (closed).

- [https://github.com/ergoplatform/ergo-wallet-app/pull/188]: Android 15 and iOS support updates for ergo-wallet-app (MobiVM 2.3.24, XCode 26.1.1).

- [https://github.com/ergoplatform/explorer-frontend/pull/199]: USD Oracle V2 addition pending review/merge with attached bounty.

- [https://github.com/cruxfinance/crux-frontend/pull/98]: Token logo additions and bug fixes for CruxFinance.

- [https://github.com/cruxfinance/crux-frontend/pull/97]: Trending/gainers/losers boxes for CruxFinance.

- [https://github.com/kushti/dexy-stable/pull/5]: USE deployment with token IDs and deployment transactions.

- [https://github.com/nautls/nautilus-wallet/pull/324]: USE, CLB, DORT added to Nautilus.

- [https://github.com/nautls/nautilus-wallet/pull/317]: Javanese and Malaysian translation for Nautilus Wallet.

- [https://github.com/nautls/nautilus-wallet/pull/316]: Translation PR for Nautilus Wallet.

- [https://github.com/Lithos-Protocol/Lithos-Client/releases/tag/v2.0.2-test]: Lithos Protocol testnet v2.0.2 release with sync and fraud proof fixes.

- [https://workshop.stability.nexus]: 1st Stability Workshop, December 15, 2025, featuring peer-reviewed Ergo community research papers.

- [https://ergospace.degens.world]: Deployed Ergo 3D block explorer (desktop only).

- [https://github.com/ArOhBeK/Ergo-Context]: Structured repository linking langspec.md, known issues, examples, and references in machine-readable format for LLM-assisted contract development.

- [https://github.com/marctheshark3/FintelligenceAI]: FintelligenceAI repository for LLM-based UI development research.

---

## Unresolved Questions

- **Token logo repository**: Michael initiated discussion on establishing single canonical logo repository under ergoplatform for all wallets and dApps. Currently in talks with developers; solution approach TBD [@Michael, msg#37333].

- **Ergohost/gold oracle status**: Michael flagged that Dexy Gold oracle link is down pending Boris's ErgoHost fix. If not resolved within a few days, Michael or Pgr456 may expose alternative similar to USD v2 [@Michael, msg#37336].

- **LLM context file formats**: Arohbe building Ergo-Context repository but notes PDF references may be problematic for LLMs — prefers markdown formats and considers whether to include local repository copies for offline use [@Arohbe, msg#37368].

- **Explorer-frontend version numbering**: Superellipse notes ergo-wallet-app PR #188 may require version bump and release year update in About window, but flagged as secondary [@Superellipse, msg#37309].

---