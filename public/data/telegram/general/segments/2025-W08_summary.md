---
title: "Ergo General Chat — 2025-W08"
date_start: "2025-02-17"
date_end: "2025-02-23"
type: telegram_weekly
channel: general
week: "2025-W08"
source: telegram
message_count: 244
categories: [wallet, ecosystem, marketing, community, governance, technical, bridges, defi]
key_terms: [ledger, consolidation, token limit, nautilus, nano s, ledger nano s, deprecated, keystone, hardware wallet, token limit increase, mew finance, ergexplorer, block explorer, addressbook, mempool, product adoption, user experience, stop selling chain, market positioning, memecoins]
---
# Ergo General Chat — 2025-W08 Summary

## Key Topics Discussed

- **Ledger Hardware Wallet Constraints & Token Limits**: Discussion of the 20-token limit on Ledger Nano S and planned increase to 100 tokens in newer Ledger App versions. Ledger deprecation of Nano S noted as a limitation for Ergo users. [@Aco Šmrkas, @anon_br, @Pulsarz, msgs#546412–546447, 2025-02-17]

- **Keystone Hardware Wallet Integration**: Keystone Ergo app development mentioned as a potential alternative to Ledger for hardware signing. [@Pulsarz, msg#546445, 2025-02-17]

- **Watcher v4.1.1 Update Requirements**: Watcher software update mandatory for all watchers to capture rsBNB-related events and qualify for rewards. [@Armeanio, msg#546888–546889, 2025-02-20]

- **Market Positioning & Adoption Strategy**: Community discussion on why Ergo should not replicate meme-coin or rugpull dynamics; emphasis on building real products for users rather than marketing the blockchain itself. [@qx(), @Flying Pig™, @c8, msgs#546667–546702, 2025-02-20]

- **ErgoScript Security & Verification**: Explanation of why ErgoScript and UTXO model provide superior security vs. account-based smart contract languages; immutability by default and verifiability as core advantages. [@c8, msgs#547063–547064, 2025-02-22]

- **Mempool Address Tracking & ErgoExplorer Integration**: New feature allowing real-time tracking of marked addresses (oracles, DEX swaps, staking, Rosen Bridge events) directly from mempool via ErgoExplorer address book labels. [@HQΣr, msgs#546720–547130, 2025-02-20 to 2025-02-22]

- **SigmaUSD Minting Status**: SigmaUSD minting currently disabled due to reserves falling below 400% collateralization threshold. Alternative interface suggested at ergfi.xyz. [@cannon_q, msgs#547139–547140, 2025-02-22]

- **Order Book vs. AMM DEX Design**: Discussion of Trade House (order book model) vs. Spectrum (AMM model); order books provide transparency in depth, full control over slippage, and enable arbitrage strategies. [@qx(), msg#546667 context, 2025-02-20]

- **Rosen Bridge & Bitcoin Runes Integration**: Speculative discussion on extending Rosen Bridge to Bitcoin Runes, potentially adding metadata capabilities; framed as exploratory. [@Armeanio, msgs#546973–546974, 2025-02-21]

---

## Important Decisions or Announcements

- [@Andy L, msg#546653, 2025-02-20]: Weekly Thursday Update and AMA cancelled this week due to unavailability of core participants; will resume next week.

- [@Armeanio, msg#546888–546889, 2025-02-20]: **Watcher v4.1.1 update mandatory** — all watchers must update to capture rsBNB event rewards; v2.2.1 also released for Watcher UI.

- [@Armeanio, msg#546892, 2025-02-20]: Rare Evo conference announced for Vegas in August; Armeanio indicated likely attendance.

- [@Glasgow｜WON'T DM, msg#546947, 2025-02-21]: Summary bot returning from repairs; developers reconsidering prioritization approach for important announcements.

- [@HQΣr, msg#546720, 2025-02-20]: Core developer of MewFinance (also ErgoExplorer founder) developing live block explorer with real-time transaction visualization.

---

## Technical Q&A Worth Preserving

- **Q** (@HQΣr, msg#546412): How does Ledger consolidation work for addresses with many tokens?
  
  **A** (@Aco Šmrkas, msgs#546413–546423): Nautilus can handle consolidation; Ledger is a signing tool only. Ledger has a 20-token limit per transaction on Nano S. Workaround: send 10 different tokens + 0.001 ERG in one box at a time rather than all ERG at once (which triggers use of all boxes with 26+ tokens and fails). (@anon_br adds: New Ledger App version increases limit to 100 tokens; optimization tool may already be attempting this if user has 20+ tokens in single box.)

- **Q** (@Rj, msg#547061): Is multisig on Ergo more secure than Bybit, and how can it be built more securely?
  
  **A** (@c8, msgs#547063–547064): Yes. Two factors: **(1) Immutability** — Ergo contracts are immutable by default; once a multisig address is created, it cannot be compromised. **(2) Simplicity** — radical simplicity enables verifiability; any hobby developer with a few weeks training can review and decompile any ErgoTree contract back to source, unlike complex account-based languages (e.g., Solidity). Practical example: even if a dApp website is hacked, you remain safe if you verify that tokens you receive are proportional to tokens you spend directly in your wallet. ErgoScript multisigs are "the most fool-proof and secure way to manage large sums."

- **Q** (@Ich Binsnicht, msg#547101): Where can hobby developers start learning to review ErgoScript contracts?
  
  **A** (@c8, msg#547202): Download the most recent Ergo JAR from GitHub and run a full indexed node. This is not an easy task but ask questions in the process, report issues — this greatly improves onboarding documentation. (Later: msg#547204 indicates timelock tutorial will be added to wallet integration; currently template for builders creating zero-code multisig apps.)

- **Q** (@Unknown, msg#547108): Unable to connect ErgoPayWallet on Android with Spectrum DEX; what can I do?
  
  **A** (@HQΣr, msg#547109–547113): Try dex.mewfinance.com. If button "open external wallet" is empty, clear cache and change explorer; confirmed working for HQΣr.

- **Q** (@Unknown, msg#547173–547174): Wallet not connecting with Spectrum DEX or MewFinance despite multiple browsers, devices, networks.
  
  **A** (@Unknown, msg#547205): Clear cache solution appears to be recommended; user will test when free.

---

## Links Shared

- [https://x.com/ergo_platform/status/1891715902128677185](https://x.com/ergo_platform/status/1891715902128677185): Ergo event/announcement (@qx(), msg#546473, 2025-02-17)

- [https://github.com/ErgoDevs/Ergo-Bounties](https://github.com/ErgoDevs/Ergo-Bounties): Ergo Bounties repository for development opportunities (@cannon_q, multiple msgs, used repeatedly as reference for interested developers)

- [https://ergexplorer.com](https://ergexplorer.com): Live block explorer with real-time transaction visualization and address book integration (@HQΣr, msg#546720, 2025-02-20)

- [https://dex.mewfinance.com](https://dex.mewfinance.com): MewFinance DEX interface (alternative to Spectrum) (@HQΣr, msg#547109, 2025-02-22)

- [https://ergfi.xyz](https://ergfi.xyz): Alternative interface for SigmaUSD minting when primary site unavailable (@cannon_q, msg#547139, 2025-02-22)

- [https://escript.online/blockly](https://escript.online/blockly): ErgoScript Blockly visual editor for timelock and contract design (@cannon_q, msg#547167, 2025-02-22)

- [https://curiaregiscrypto.medium.com/rosen-bridges-solution-can-it-enrich-bitcoin-runes-with-metadata-and-beyond-882b821856ef](https://curiaregiscrypto.medium.com/rosen-bridges-solution-can-it-enrich-bitcoin-runes-with-metadata-and-beyond-882b821856ef): Rosen Bridge solution for Bitcoin Runes metadata (@Armeanio, msg#546973, 2025-02-21)

- [https://x.com/HQ3r_erg/status/1892649224476529127](https://x.com/HQ3r_erg/status/1892649224476529127): MewFinance live block explorer announcement (@HQΣr, msg#546720, 2025-02-20)

- [https://x.com/adaorca1/status/1892462645355131240](https://x.com/adaorca1/status/1892462645355131240): Ada Orca market critique; context for Ergo positioning discussion (@qx(), msg#546667, 2025-02-20)

- [https://youtu.be/XPOZj2yWU_o](https://youtu.be/XPOZj2yWU_o): Video shared by kushti (@kushti khushi, msg#546142, 2025-02-22)

---

## Unresolved Questions

- **Storage Rent Mechanism & Long-Term Sustainability**: Discussion of timelock contracts and long-term holding (msg#546975 mentions storing >0.5 ERG for decade+) suggests storage rent implications, but no detailed resolution on how this affects UTXO retention strategies. [@cannon_q, @Unknown, msg#546975, 2025-02-21]

- **Rosen Bridge Scope & Timeline**: Rosen Bridge Bitcoin Runes integration remains exploratory ("just some extension on the bridge plan maybe"); no concrete roadmap or decision on whether this will be prioritized. [@Armeanio, msgs#546820–546825, 2025-02-20]

- **Hardware Wallet Alternatives**: Keystone Ergo app release timing unclear; Ledger Nano S support sunset leaves a gap for hardware wallet users without timeline for resolution. [@Pulsarz, msgs#546445–546447, 2025-02-17]

- **Community-Driven Development Incentives**: Discussion raised whether Ergo needs a curated "nice-to-have" feature list to focus community development efforts; no decision made on how to structure or prioritize such a list. [@c8, msgs#546685–546702, 2025-02-20]

- **Mempool Address Book Feature Rollout**: ErgoExplorer address book integration with mempool tracking announced but no concrete timeline for full feature deployment or dApp integration roadmap provided. [@HQΣr, msgs#546720–547130, 2025-02-20 to 2025-02-22]