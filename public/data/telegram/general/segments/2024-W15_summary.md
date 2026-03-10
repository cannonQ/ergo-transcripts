---
title: "Ergo General Chat — 2024-W15"
date_start: "2024-04-08"
date_end: "2024-04-14"
type: telegram_weekly
channel: general
week: "2024-W15"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2024-W15 Summary

## Key Topics Discussed

- **Emission Reduction & Supply Mechanics**: Successful emission reduction from 30 ERG to 27 ERG block reward completed. Discussion of annual inflation rates: ~8.54% (2024-2025), declining to ~4.28% (2025-2026), ~1.22% (2026-2027), and stabilizing below 1% by 2028 onwards.

- **Sigma Chains Vision**: Introduction of parallel ASIC-tailored blockchains using Ergo's contractual layer (ErgoTree/Sigma protocol). These chains absorb specific hardware/energy ecosystems (e.g., Ethash ASICs), contribute emissions back to ErgoTree development and DevDAO, support merged mining with Ergo, and provide pre-built DeFi infrastructure. Not competing with Ergo—complementary capture of ASIC market share and hardware diversity.

- **Rosen Bridge Bitcoin Testnet**: Testnet for Bitcoin-to-Ergo-to-Cardano bridging initiated. Enables wrapped asset movement across chains (rsBTC, etc.). Discussion of token naming, atomic rewrapping constraints, and UI implementation for displaying token sources.

- **SigmaUSD/SigmaRSV Protocol Edge Cases**: Incident where a user's SigUSD-to-ERG swap got stuck in a proxy address due to insufficient ERG in the transaction to cover all fees. Refund mechanism via SigmaUSD.io menu available. Oracle price update delays prevent flash crash exploitation but do allow legitimate arbitrage paths.

- **Sigma Chains vs. Layer 2 Debate**: Community discussion on whether Ergo needs faster blocks (sub-blocks), sidechains, or L2 solutions. Arguments for faster blocks improve UX/DeFi efficiency; counter-arguments favor organic demand-driven L2 deployments (transparent interoperability via Muun-style wallets). Consensus: improve L1, let L2 solutions emerge naturally.

- **Proof-of-Work Heritage & Energy Arbitrage**: kushti emphasized viewing PoW mining as legitimate excess energy utilization with intrinsic cost. Sigma Chains amplify this by supporting multiple mining algorithms and hardware types, positioning Ergo as hub for multi-chain PoW future.

- **Palmyra Commodities DEX & Chainlink Partnership**: Dan Friedman (Palmyra lead) announced $50k USD PALM token donation to Sigmanauts DAO treasury. Palmyra uses Chainlink oracles + IoT (camera, weight sensor, motion sensor) for on-chain warehouse receipt issuance. Palm IDO round coming within one week using rsERG from Rosen Bridge.

- **Ledger Hardware Wallet Limitations**: Ledger app (dev mode only) cannot handle transactions with >20 distinct tokens. If user receives 20+ assets in a single UTXO, Ledger cannot sign outgoing txs, but funds remain recoverable via seed phrase import into Nautilus or Ergo Mobile wallet (no seed input needed for hardware wallet mode reconnection).

- **Proof-of-Work Backed NFTs**: Maritsa Art released PoW JPGs collection—first NFTs with four hexspeak hashes (SHA-256, IPFS CID v0, token ID, minting TX ID). Three-year GPU/CPU mining effort. Includes EIP-0024 V1 royalties and separators. First PoW-backed NFTs referenced back to kushti's 2020 token ID mining proposal and CYTI smart contract.

- **MEXC Listing Progress**: kushti confirmed 4-6 Ergo developers collaborating daily with MEXC on API integration. Listing in progress; Ergo team cannot control speed of integration on MEXC side.

- **Sigmanauts DAO & Pool Randomness**: qx() announced random token drops (DarkDoge every 410 blocks) and storage rent token collection distribution for Sigmanauts mining pool. Full DAO governance model is long-term vision; reward incentives will be marketed once live.

- **Community Marketing & Narrative**: kushti stressed Ergo Foundation should be viewed as transitional (like Bitcoin Foundation, 2012), with emphasis shifting to EF dissolution roadmap. Marketing entities: Sigmanauts, ErgoSocials, ErgOne, ErgoDevs. Core narrative: Ergo as **future of Proof-of-Work** with GPU minability, DeFi dominance (#1 PoW by TVL), storage rent (log-space mining), Sigma protocols for efficient ZK, and SigmaChains revitalizing PoW.

---

## Important Decisions or Announcements

- [@kushti, msg#486910, 2024-04-08]: Emission reduction successfully completed; supply is shrinking.

- [@qx(), msg#486948-953, 2024-04-08]: Sigmanauts pool will add random token drops (DarkDoge every 410 blocks) and initiate storage rent collection soon with token distribution from found wallets.

- [@Armeanio, msg#486965, 2024-04-08]: Rosen Bridge Sigma Chains podcast/video released; referenced energy arbitrage and cross-chain mechanics.

- [@kushti, msg#487375, 2024-04-10]: Ergo vision refined as **future of Proof-of-Work**: GPU minability, #1 PoW by DeFi TVL, storage rent, trustless derivatives, Sigma protocol breakthroughs, and SigmaChains as multi-ASIC-tailored sidechains with merged mining and emission feedback loops.

- [@Θeodore | CHEF, msg#487692, 2024-04-11]: Palm IDO round for Ergo community launching in one week using rsERG (Rosen Bridge wrapped ERG).

- [@kushti, msg#487660, 2024-04-11]: Dan Friedman donated $50k USD worth of PALM tokens to Sigmanauts treasury.

- [@kushti, msg#487594-599, 2024-04-11]: MEXC listing integration underway with 4-6 Ergo developers providing API support; completion timeline dependent on MEXC integration speed.

- [@CW, msg#488007, 2024-04-13]: Rosen Bridge Bitcoin testnet announcement confirmed; enables cross-chain asset wrapping and movement.

---

## Technical Q&A Worth Preserving

- **Q** (@hexa decimal, msg#487134): Could Ergo implement RGB++? Seems ErgoScript would suit it well. Nervos getting attention for this.
  **A** (@kushti, msg#487149): "But is it really needed, or just hype" — implied skepticism on necessity; deferred detailed answer.

- **Q** (@Man ish, msg#487222): How slow/fast is Ergo compared to BTC? When sub-blocks?
  **A** (@JayDee12Thr33, msg#487223): Ergo is 5x faster. Sub-blocks discussed as future optimization but not imminent.

- **Q** (@Rj, msg#487228): Is 10min average block time per tx correct?
  **A** (Implied): Ergo block time ~2 minutes; longer delays (10-20 min) observed during difficulty adjustment issues or congestion.

- **Q** (@J. P. Costa, msg#487560): If Ledger receives 20+ distinct assets in one TX, can the wallet be recovered?
  **A** (@Glasgow, msg#487582; @Unknown, msg#487566): Ledger app can't sign TXs with 20+ tokens, but funds are not locked. Restore the hardware wallet via "add new hardware wallet" in Nautilus, or import seed phrase into Ergo Mobile/Terminus (non-custodial import, no private key exposure).

- **Q** (@Anthony M, msg#488127): SigmaUSD swap sent SigmaUSD but received no ERG; TX shown as success on explorer.
  **A** (@qx(), @HQΣr, msg#488195-196): Funds stuck in proxy address due to insufficient ERG to cover full TX fee. Use SigmaUSD.io menu (upper right) → "Submit Refund" with sending address and proxy address.

- **Q** (@TMR.ΣRG, msg#488089): How to store ERG on Ledger safely?
  **A** (@TMR.ΣRG, msg#488109; @Unknown, msg#488100): Ledger with Nautilus browser extension (requires developer mode). Alternative: Ergo Wallet (Android) or Terminus (iOS) with Ledger hardware wallet mode (no seed input). Ledger cannot sign TXs with >20 distinct tokens.

- **Q** (@Unknown, msg#488011-021): Does Rosen Bridge allow direct BTC-to-Cardano wrapping, or must all traffic go through Ergo first?
  **A** (@CW, msg#488021): You can bridge BTC directly to chain X; Ergo facilitates any transfer (not always intermediary). Token naming/display controlled via token ID UI mapping.

- **Q** (@qx(), msg#488027): If rsBTC moves from Ergo to Cardano to Bitcoin, does it get rewrapped or remain locked?
  **A** (@qx(), msg#488027): After thought experiment: source chain (BTC) locks original amount; wrapped version exists only on destination chain at a time. Moving rsBTC from Ergo to Cardano to BTC works because BTC side maintains lock, preventing rewrapping bloat.

- **Q** (@Man ish, msg#487434): What's Sigma Chains block time? Will they be super fast?
  **A** (@Glasgow, msg#487435): Concept allows dozens of Sigma Chains with different params/emissions per use case. Block times customizable per chain.

- **Q** (@Snowman Jason, msg#488048): Current yearly ERG emission and inflation percentage?
  **A** (@Snowman Jason, msg#488050-073): ~26k blocks/year × ~30 ERG/block = ~780k ERG annually (varies with emission schedule). 2024-2025: ~8.54% inflation; 2025-2026: ~4.28%; 2026-2027: ~1.22%; stabilizes <1% by 2028. 2041 inflation ~0.84%.

---

## Links Shared

- [Rosen Bridge Sigma Chains Presentation](https://docs.google.com/presentation/d/e/2PACX-1vQMR27WLXAQ5NiuBb2EJ5wadU8DoJEzJmsrp_oqVNKmPOAATdF6Cjw9IKaW2InO0Xqr85xTI4luPPUE/pub): Explains Sigma Chains concept, ASIC tailoring, merged mining, and emission feedback to ErgoTree development.

- [Gate.io Article on Ergo (Chinese)](https://www.gate.io/zh/learn/articles/what-is-ergo-all-you-need-to-know-about-erg/1668): Overview of Ergo architecture, NIPoPoWs, Autolykos, and DeFi applications.

- [ErgoScript Documentation](https://docs.ergoplatform.com/dev/scs/): Smart contract language reference.

- [Sigma Language Docs](https://docs.ergoplatform.com/dev/scs/sigma-lang/): Compiler and protocol details.

- [T. Attema PhD on Sigma Protocols](https://scholarlypublications.universiteitleiden.nl/handle/1887/3619596): Recent breakthroughs in generic zero-knowledge statements via Sigma protocols (referenced for future ZK dApp development on Ergo).

- [Palmyra Commodities DEX Overview](https://cardanospot.io/news/palmyra-comdex-dollarpalm-a-comprehensive-overview-78JPZoLTAninkyhB): Chainlink integration, IoT sensors, warehouse receipts.

- [PoW JPGs Collection (IPFS)](https://ipfs.io/ipns/k51qzi5uqu5dmcgzuwz86d2q3w276s3oul284ixx0j9bskdimqvixmy6heartz): Proof-of-Work backed NFTs with hexspeak hashes.

- [Sigmanauts Mining Pool](https://t.me/sigmanauts_pool): Pool governance, tokenomics, and random reward mechanics.

- [DuckPools Phase 2 IDO](https://dao.duckpools.io/ido): Algorithmic lending, open-source DAO frameworks, developer extensions.

- [CYTI Smart Contract Reference](https://docs.ergoplatform.com/eco/cyti/): Token ID mining contract (foundational for PoW JPGs).

- [EIP-0024 V1 NFT Royalties Standard](https://github.com/ergoplatform/eips/blob/master/eip-0024.md#design-v1): Ergo NFT standard with artist royalties.

- [Ledger Ergo Wallet Tutorial](https://youtu.be/7q3Jq_OvhKY): Step-by-step guide for importing Ledger seed into non-custodial mobile wallet.

- [Ergo Weekly AMA (2024-04-11)](https://youtube.com/live/BcJ-nhR6vA0): Live stream featuring Palmyra, MEXC, and SigmaChains discussion.

- [Late-Night Dev AMA (2024-04-14)](https://www.youtube.com/watch?v=9OhPkTM4mZU): qx() and Armeanio discussing current development priorities.

---

## Unresolved Questions

- **Sigma Chains Rollout Timeline**: Announced as future concept but no confirmed launch date; kusht referenced building "throughout the next bear" with release on next bull cycle.

- **Sub-blocks Implementation**: Discussed as potential speed improvement but no consensus on priority vs. Sigma Chains or L2 solutions; requires community testnet participation to evaluate feasibility.

- **Ledger Max Token Limit Rationale**: Why exactly 20 tokens? No explanation provided for hardware constraint or potential future fix.

- **Why Proxy Address Used for One SigmaUSD TX**: qx() flagged anomaly where one user's swap used a proxy address while his own subsequent TXs did not. Root cause unresolved; may relate to transaction size, mempool state, or fee calculations.

- **Ergo Foundation Dissolution Roadmap**: kushti raised need to clarify EF's transition plan and sunset timeline, drawing parallel to Bitcoin Foundation (2012). No formal decision announced.

- **MEXC Listing Date**: Status: integration in progress with Ergo devs providing API support. Completion dependent on MEXC side, no target date confirmed.

- **Storage Rent & Sigma Chains Revenue Sharing**: Announced that Sigma Chains will funnel emissions to ErgoTree development and DevDAO, but specific percentages and governance mechanics not detailed.

---