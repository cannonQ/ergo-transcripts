---
title: "Ergo General Chat — 2024-W49"
date_start: "2024-12-02"
date_end: "2024-12-08"
type: telegram_weekly
channel: general
week: "2024-W49"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2024-W49 Summary

## Key Topics Discussed

- **6.0 Soft-Fork Proposal**: A proposal for Ergo 6.0 soft-fork was published with a shorter version on the forum and full version in EIP-50. Discussion included potential for faster block times and implications for timestamp-dependent contracts.

- **Rosen Bridge Expansion**: Multiple new chains being onboarded (BSC/Binance Smart Chain, Dogecoin, Solana, Sui). BSC testing in Pandora environment ongoing; Doge integration under review; RoseNet integration underway for enhanced efficiency.

- **Storage Rent / Demurrage**: Extended discussion on storage rent as a design feature unique to Ergo. Contrast drawn between demurrage (opt-in storage cost for inactive UTXOs) and government garnishment; community acceptance of cost as fee for security.

- **NIPoPoWs Light Nodes**: Community members testing NIPoPoWs nodes on mobile and low-spec hardware (Pentium 3 with 256MB RAM). Stateless, stateful, and full node variants working; stateful takes longer to sync with limited progress visibility.

- **DEX Architecture**: Discussion of Trade House order book vs AMM (Spectrum) design patterns. Order books offer transparency and trader control over slippage; AMMs work better for LPs. Potential for hybrid aggregator combining both models being explored.

- **Bridge Token Naming (rs prefix)**: Extensive debate on why bridged tokens are prefixed `rs` (e.g., rsADA, rsERG). Rationale: different trust assumptions than native assets; prevents user error sending wrapped tokens to native wallets; follows industry standard (wETH on Ethereum).

- **Hydra Scaling**: Discussion of Hydra head capacity (15k outputs in single transaction mentioned). Questions raised about server specs, real-world TPS measurement, and settlement to mainchain not fully resolved.

- **Wintergate / Palmyra Integration with Chainlink**: Palmyra using Chainlink oracles for proof-of-reserve in decentralized trade financing. IoT devices (cameras, weight sensors, motion sensors) providing continuous warehouse receipt validation on-chain.

- **Rosen Watcher Economics**: November APY ~15%, early December ~25% depending on bridge transaction volume. Requires 30k RSN + 800 ERG baseline; 3k RSN per permit (7-10 permits recommended). Profitable but capital-intensive; pool-based lending available via DuckPools.

- **MewFinance Community Campaigns**: Ongoing liquidity bootstrapping initiatives at fund.mewfinance.com. PEPERG yield farm launching with 30,000 tokens per day distribution over 170 days. Multiple governance proposals under community vote.

- **Keystone Hardware Wallet + Sigma Rust**: Multi-party effort: dusek (Sigma Rust), Pgr456 (Keystone firmware), anon_br (Nautilus wallet integration). Community-funded origin through DevDAO bounty matched by Ergo Foundation.

---

## Important Decisions or Announcements

- [@Ergo NEWS, msg#529890, 2024-12-02]: **Weekly ecosystem update**: 6.0 soft-fork proposal published; Ledger integration passed functional testing, moving to security audit; Rosen watcher operators must update to v4.0.4 (watcher-service) and v3.0.0 (UI); Spectrum SDK update finalized under review; Fleet SDK 0.8.0 released; Sigmanauts BlueSky accounts launched.

- [@Ergo NEWS, msg#529910, 2024-12-02]: **$24,000 mining grant approved** for Comprehensive Ergo Mining Ecosystem Development and Community Expansion over 12 months.

- [@Glasgow, msg#530046 & msg#530534, 2024-12-03 & 2024-12-05]: **Rosen Bridge Update**: BSC testing on Pandora this week; RoseNet integration underway; Dogecoin manually tested, pending merge; new tokens from Ergo and Cardano being added.

- [@Andy L, msg#529894, 2024-12-02]: **Weekly AMA timing adjustment**: Thursday 5 December at 14UTC (1 hour later than normal).

- [@kushti, msg#530056, 2024-12-03]: **Ergo Book progress**: Joe adding manifestos; kushti polishing structure draft and finishing articles for forum publication; contributors welcomed to join.

- [@Armeanio, msg#531414, 2024-12-08]: **2025 priorities**: Hummingbot Foundation integration discussions; sandbox on node with UI framework planned; pushing resources for Machina Finance development.

- [@cannon_q, msg#531125, 2024-12-07]: **Trade House AMM Access upgrade raffle**: Goal 4500 ERG; 55.76% funded (2509 ERG raised from 4 contributors).

---

## Technical Q&A Worth Preserving

- **Q** (@Matt, msg#530137): Is it possible to merkelize the RAM elements for Autolykos like Ethash?
  **A** (@kushti, msg#530146): Merklization not needed; PoW verification depends only on block height, not blockchain context. Verifier computes elements from table without holding it; generator needs table (or accepts exponential slowdown). [Reference: PoW spec](https://www.docdroid.net/mcoitvK/ergopow-pdf)

- **Q** (@Matt, msg#530147 & msg#530162): Doesn't verifier need table data to compute elements?
  **A** (@kushti, msg#530158): No need for verifier to hold table; only computes elements. For efficient PoW generation, table required or accept exponential slowdown to k parameter.

- **Q** (@Jim Nil, msg#530122): Can I use Phantom/Solana and MetaMask wallets to buy Ergo?
  **A** (implied community response, msg#530127-131): Use peer-to-peer DEX routes (Rosen Bridge to bridge from other chains). Kraken and few CEXes offer direct fiat onramp; Ergo Trading Telegram for discussion.

- **Q** (@Ace, msg#530279): Can Ergo do everything Cardano can do in relation to Bitcoin, given both are eUTXO?
  **A** (@Unknown, msg#530281 & msg#530293): Ergo has working bridge to Bitcoin, Ethereum, Cardano. Rosen Bridge uses contract on Ergo side, multisig wallets on other chains. Key difference: contract-based approach vs pure multisig security assumptions.

- **Q** (@Alex, msg#530809-838): Why do bridged tokens need `rs` prefix instead of seamless cross-chain movement?
  **A** (@Luivatra, msg#530828; @kushti, msg#530862): Different trust assumptions after bridging justify different names. Wrapped assets have greater risk than native; naming prevents user error (e.g., sending rsADA to Cardano wallet). Seamless bridging usually not feasible; renaming is transparent, not scammy.

- **Q** (@Patato, msg#531017): Can 23KB base64 data be minted as token; funds stuck in contract.
  **A** (@Pulsarz, msg#531021): Boxes limited to 4KB; can combine multiple output boxes in single TX to exceed limit. For data storage, multiple boxes required.

- **Q** (@cafebedouin.org, msg#531425): Does directly spending AMM contract boxes mess with batcher execution; does 6.0/sub-blocks address?
  **A** (@Flying Pig, msg#531426): Not a problem.

- **Q** (@Nabz, msg#530783): How many watchers currently active; where to see watcher info and fees?
  **A** (@Koutelier, msg#530787-788): Check Rosen Telegram (@rosenbridge_erg) for detailed watcher data and fee structure; Rosen watcher app shows per-watcher earnings.

- **Q** (@Richi [MANA], msg#531030): Why should DEXes prioritize LP-centric over trader-centric design?
  **A** (@Richi, msg#531034 & msg#531050): AMM default trading strategy; 1% fee pools better balanced than 0.3% for low liquidity. Unless you control enough stake to move markets, optimal strategy replicates AMM. Programmable MM strategy harder to implement; hybrid order book + AMM via aggregator simpler.

---

## Links Shared

- [6.0 Soft-Fork Forum Post](https://www.ergoforum.org/t/6-0-soft-fork-proposal/5005/1): Shorter version; full version in EIP-50
- [EIP-50 (GitHub)](https://github.com/ergoplatform/eips/pull/100): Full 6.0 soft-fork proposal
- [Rosen Watcher Service v4.0.4](https://github.com/rosen-bridge/watcher/releases/tag/4.0.4): Required update
- [Rosen UI v3.0.0](https://github.com/rosen-bridge/ui/releases/tag/watcher-app-3.0.0): Required update
- [MewFinance Community Liquidity](https://fund.mewfinance.com/): Bootstrapping campaigns and proposals
- [3D Ergo Blockchain Visualization](https://www.3rgo.xyz/): UTXO model explorer
- [Spectrum SDK Update PR](https://github.com/spectrum-finance/ergo-dex-sdk-js/pull/45): Under review by Spectrum team
- [Contract Templates EIP-5](https://www.ergoforum.org/t/ergoscript-and-contract-templates-why-how-eip-5/5006): Luivatra tutorial on EIP-5
- [Ergonaut Airdrop Tool](https://github.com/The-Last-Byte-Bar/ergonaut-airdrop): Command-line token distribution for miners
- [Lithos GitHub](implicitly referenced): Fraud proof contracts for NIPoPoWs
- [Fleet SDK 0.8.0](implicitly released): SDK update
- [Sigmanauts BlueSky](https://bsky.app/profile/sigmanauts.com): Sigmanauts social presence
- [Ergo Platform BlueSky](https://bsky.app/profile/ergoplatform.org): Official Ergo social
- [Rosen Bridge Homepage](https://rosen.tech): Bridge overview
- [DuckPools](implicitly referenced): Lending pools for RSN staking capital
- [MewFinance DEX](https://dex.mewfinance.com/): Liquidity and token swaps
- [Ergo Explorer](https://ergexplorer.com/): Address and transaction lookup
- [Ergo Raffle](https://ergoraffle.com/): Community fundraising (Trade House AMM Access raffle)
- [Storage Rent Explainer](https://ergoplatform.org/en/blog/2022-02-18-ergo-explainer-storage-rent/): Official blog post on demurrage/storage rent
- [Autolykos PoW Spec](https://www.docdroid.net/mcoitvK/ergopow-pdf): Technical specification
- [Palmyra / ZenGate Info](implicitly referenced): Chainlink integration for proof-of-reserve
- [Minotaur Research Paper](https://dl.acm.org/doi/pdf/10.1145/3548606.3559356): Multi-resource consensus framework
- [Extism](https://extism.org/): Plugin system (mentioned in Machina Finance context)
- [Hummingbot Courses](https://courses.botcamp.xyz/slides/slide/the-position-executor-component-915): Position executor component training
- [Ergo Tokenautics Frontend](https://babygrenade.github.io/ergo-tokenautics-frontend/): Token holder distribution tool
- [Wrapped ERG on Ethereum](https://etherscan.io/token/0x6C060Ba738af39A09F3b45ac6487dFC9Ebb885f6): Etherscan contract address

---

## Unresolved Questions

- **Hydra Settlement Finality**: Unclear whether Hydra head state ever settled back to Ergo mainchain or if it only demonstrated off-chain state updates. (@qx, msg#530392 raised; @Armeanio, msg#530390 suggested "unknown if settled"; @Matt, msg#530399-400 noted "just trading state updates").

- **6.0 Block Time Impact on Timestamp-Dependent Apps**: Discussion of faster blocks raising questions about contracts relying on timestamps vs block height. (@kushti notes timestamp would be affected; exact compatibility matrix unclear).

- **Sub-Blocks vs Layer 2 vs Sidechains Priority**: Community unclear on roadmap hierarchy—whether 6.0 focuses on sub-blocks, sidechains, or layer 2 solutions first. (@kushti opening community chat to discuss post-Ergoversary).

- **Merger-Mine Sidechain Security vs Bitcoin BIP 301**: Discussion of sidechain constructions being more secure than Bitcoin's proposed BIP 301, but implementation details not fully fleshed out.

- **DAO Tokenomics Effectiveness**: @Chris Ray voiced concerns that tokenized DAOs (citing EXLE example) struggle with participation and governance. Whether non-tokenized merit-based DAOs are feasible left open.

- **AmeriGold (AHT) Capitulation**: Transaction showing 20M AHT → 42k RSN → 1.9k ERG suggests project liquidity collapse, but root cause not discussed (rug, market failure, or genuine exit unclear).

- **Comet Explorer Downtime**: @Armeanio reported cmt-explorer.l2.fun down for 5 days; @MGpai pinged but no resolution documented.

- **License Validity for Compile-Only Software**: @cafebedouin raised legal concerns about custom "steal the title" license not applying to compiled binaries and questionable enforceability under current case law. No resolution reached.

- **Sandbox / Extism Plugin System for Ergo**: @Armeanio mentioned exploratory discussions with Aberg about running sandbox on node with UI framework, but no timeline or technical feasibility assessment provided.

---

## Notable Community Sentiment & Observations

- **Demurrage Advocacy Growing**: @LouisLibre frequent reminders that storage rent solves Bitcoin's lost-coin and UTXO bloat problems; community starting to understand the comparison to government asset garnishment.

- **P2P over "Decentralization"**: @qx and @Matt emphasized that "decentralization" is nebulous marketing term; "p2p network" is technically meaningful and should be Ergo's messaging focus (lightweight nodes, self-custody, censorship-resistance, GPU mining).

- **Rosen Bridge Early Success**: Multiple sources (Cardano-to-Ergo 75% liquidity injection in 7 days; 54 transfers = $340k USD in 24h; Catalyst proposals for Solana/Sui onboarding) indicate bridge traction exceeding expectations.

- **Accessibility Gap for Non-Technical Users**: @Nabz raised concern that answering questions with whitepapers/essays alienates newcomers; proposal for beginner-friendly content and marketing emerged as potential focus area.

- **Meme Coin Ecosystem Maturing**: PEPERG (now 9th most liquid Ergo asset), BOBER, COMET, PJs launching with farms and events. Whether memes drive adoption or dilute technical narrative remains open debate.