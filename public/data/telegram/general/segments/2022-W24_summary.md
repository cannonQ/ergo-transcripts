---
title: "Ergo General Chat — 2022-W24"
date_start: "2022-06-13"
date_end: "2022-06-19"
type: telegram_weekly
channel: general
week: "2022-W24"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2022-W24 Summary
**Period:** 2022-06-13 to 2022-06-19  
**Messages Analyzed:** 1042

---

## Key Topics Discussed

- **EIP-27 Emission Reduction** — Block 777,217 (approximately June 21, ~4.3 days away) triggers a 29% inflation drop in mining rewards. Second reduction to 48 ERG follows at block 790,000 (24% further reduction). [@TMR.ΣRG, msg#283400-283402]

- **SigmaUSD vs Dexy Protocol** — SigmaUSD is an over-collateralized algorithmic stablecoin; Dexy is an arbitrage-based stablecoin using a DEX mechanism. Different approaches to maintaining peg. [@Unknown, msg#281925]

- **Explorer Performance Issues** — Ergo Explorer experiencing timeouts; community solutions offered via GetBlok CDN endpoint (https://ergo-explorer-cdn.getblok.io/) and public node at https://ergo-node.getblok.io. [@AllCloudy | GetBlok.io, msg#282019-282039]

- **Gas Fees vs Transaction Fees** — eUTXO model uses predictable transaction fees (~0.001 ERG); Ethereum's account-based model creates unpredictable gas fees. Storage rent will supplement miner income post-emission. [@Unknown, msg#281541; @glasgowm, msg#281537-281538]

- **Wallet Security & Restoration** — Users can restore old wallets via seed phrases in Nautilus, SafeW, or Ergo Mobile Wallet. Mobile wallet on Android now supports ErgoPay for desktop signing. [@Unknown, msg#281517; @MrStahlfelge, msg#282004, msg#282015, msg#282035]

- **Sub-pools & Subpooling** — Neta subpool on GetBlok offers 22% NETA distribution bonus (funded by anetaBTC team treasury) in exchange for 2% hashrate. Enables fair IMPO (initial mining pool offering) token distribution. [@Benny, msg#283078, msg#283128]

- **NIPoPoWs & Sidechain Construction** — Published sidechain constructions leveraging NIPoPoWs for trustless relay and merge-mined sidechain data delivery. BAP 301 (equivalent to BIP 301) framework discussed for trustless pegging. [@Unknown, msg#281496; implied in technical discussions]

- **Bulletproofs & Zero-Knowledge Proofs** — Bulletproofs enable compact zero-knowledge range proofs without trusted setup (alternative to SNARKs). ErgoScript verification of bulletproofs + hybrid contracts allow sensitive data to remain private while proof validates on-chain. [@kushti, implied in msg#281587 onwards discussion pattern]

- **Chainlink Partnership & Palmyra** — Winter Protocol + Chainlink oracle pools for on-chain warehouse receipts & decentralized trade financing. Palmyra ecosystem utilizing Rosen Bridge, Oracle Pools v1 & v2 (with Dexy Gold rewards), and planned Ergo Oracle infrastructure investment. [@Dan Friedman, msg#282297-282806]

- **TokenJay & SigmaUSD Minting** — TokenJay.app enables ErgoPay-based AgeUSD minting/redemption with oracle state validation. Prevents failures when oracle rate changes mid-transaction. [@MrStahlfelge, msg#281356-281357, msg#281752-281760]

- **Block Reward & Difficulty** — Difficulty reached 22TH before EIP-27. Mining profitability discussion: 3070 & 3060 most efficient GPUs; Ergo more profitable than ETH for many miners post-Merge. [@Agent 47, msg#283191; various miners]

---

## Important Decisions or Announcements

- [@CW, msg#281717, 2022-06-13]: Tier 1 exchange listing "soon", EIP-27 in ~one week, Ergoversary (July 1 — 3rd anniversary), version 5.0 client and more features coming.

- [@Richi [MANA], msg#282414-282417, 2022-06-16]: EIP-27 fork at block 777,217, activating ~June 21, 11 PM UTC. 29% inflation drop by July 2.

- [@AllCloudy | GetBlok.io, msg#282019-282039, 2022-06-15]: Public Ergo Explorer CDN endpoint live; global node endpoint with HTTPS now available.

- [@HQΣr, msg#282697, 2022-06-17]: Gemlink light wallet approval received; awaiting team functionality check before launch.

- [@CW, msg#281720-281721, 2022-06-13]: Ergoversary = Ergo's 3rd birthday (July 1).

- [@Glasgow | WON'T DM, msg#282946, 2022-06-17]: GetBlok mining pool surpassed 1 TH/s hashrate (10x growth noted).

- [@Unknown, msg#282981-282982, 2022-06-17]: ErgoPool subpool for Ergopad coming soon — 50/50 ERG/Ergopad split with 1.2x Ergopad distribution bonus.

---

## Technical Q&A Worth Preserving

- **Q** (@Ntuthuko1983, msg#281534-281535): What's the difference between transaction fees and gas fees, and how does Ergo sustain miners after all ERGs are mined?
  **A** (@Glasgow | WON'T DM, msg#281537-281539): Gas is unpredictable and charged even on tx failure; eUTXO tx fees are fixed (0.001 ERG typical). ERG will have storage rent, subpooling fees, sidechain fees, etc. to support miners. [@glasgowm, msg#281537-281539]

- **Q** (@PalaZ ♾️, msg#281450): How to distinguish Ergo team-built dApps from independent projects on Cyberverse?
  **A** (@Glasgow | WON'T DM, msg#281853-281856): Ergo is open platform; anyone can use Ergo logo. Core Ergo team builds Ergo, not dApps. Early L1s often have chain name in dApp names. No dApps built by EF. [@glasgowm, msg#281853-281856]

- **Q** (@MrStahlfelge, msg#281357): Why do TokenJay transactions fail?
  **A** (@MrStahlfelge, msg#281357): Two reasons: (1) Oracle posts new rate before tx inclusion, (2) Someone else swaps simultaneously with lower fee — tx discarded. TokenJay logs block number & oracle box ID for diagnostics. [@MrStahlfelge, msg#281357]

- **Q** (@zhang zee, msg#282659): How does ergo-assembler work — two transactions or one?
  **A** (@Luivatra, msg#282674): Yes, two: dApp generates proxy contract; user sends funds to proxy; assembler uses proxy box as input to generate follow-up tx with specific register data. Mostly superseded by dApp connectors now. [@Luivatra, msg#282656-282674]

- **Q** (@Derrick, msg#281959-281967): Mobile wallet has 15-word mnemonic, PC wallet asks for 12 words. Which is official?
  **A** (@Luivatra, msg#281968): ergowallet.io is deprecated. Use official wallets from ergoplatform.org. Import via seed phrase in Nautilus or SafeW (with ErgoPay signing). [@Luivatra, msg#281968-281972]

- **Q** (@Unknown, msg#281346): How do order book DEXes differ from AMM DEXes?
  **A** (@qx(), msg#281740+ implied discussion pattern): Order books provide total transparency of depth/liquidity levels, full slippage control, and partial order fills. You choose exact price & quantity (vs. AMM curves). Trade House & Spectrum represent both models. [@implied from context]

- **Q** (@Zhang zee, msg#282655): What was ergo-assembler used for?
  **A** (@Luivatra, msg#282656-282657): Legacy tool before dApp connectors. Proxy contract pattern: user sends to proxy, assembler auto-creates follow-up tx with register data. Mostly obsolete now. [@Luivatra, msg#282656-282657]

- **Q** (@MrStahlfelge, msg#282042): How to verify Ergo Wallet or Nautilus safety?
  **A** (@MrStahlfelge, msg#282042): Review code on GitHub (pull requests) or audit yourself & build locally. Trust audition process or do own review. [@MrStahlfelge, msg#282042]

- **Q** (@Unknown, msg#283285): Can a smart contract automatically burn a token/NFT after validity expires (e.g., hotel pass)?
  **A** (@Luivatra, msg#283287; @Unknown, msg#283295): Can't burn NFT in someone else's wallet (like hotel staff can't burn key in your pocket). But contract can sit in escrow & burn if not redeemed by deadline, or invalidate access (NFT becomes stub). [@Luivatra, msg#283287; @Unknown, msg#283295]

---

## Links Shared

- [https://tokenjay.app/ageusd]: TokenJay AgeUSD/SigmaUSD minting & redemption via ErgoPay (no proxies).

- [https://ergoplatform.org/en/blog/2022-02-09-ergos-hybrid-method-for-counting-costs/]: Hybrid cost-counting method explanation (storage rent + tx fees).

- [https://docs.ergoplatform.com/mining/]: Ergo mining documentation.

- [https://ergonaut.space/en/Guides/yield]: Yield & staking guides.

- [https://miningpoolstats.stream/ergo]: Ergo mining pool statistics & hashrate tracking.

- [https://ergo-explorer-cdn.getblok.io/]: GetBlok public Ergo Explorer CDN endpoint (globally distributed).

- [https://ergo-node.getblok.io]: GetBlok public Ergo node endpoint (TLS/HTTPS).

- [https://gemlink.org/voting/]: Gemlink wallet voting page (ERG among privacy coins listed for wallet integration).

- [https://github.com/ergoplatform/eips/blob/master/eip-0027.md]: EIP-27 smart contract source code.

- [https://zeamerch.com/collections/ergo]: Ergo merchandise store.

- [https://sigmafy.app] (referenced as sigmafy.app in corrections): SigmaUSD web interface.

- [https://medium.com/@anetaBTC/rosen-bridge-vs-interlay-an-analysis-on-wrapping-bitcoin-c9ae84da0e9d]: anetaBTC analysis on Rosen Bridge vs Interlay.

- [https://medium.com/@anetaBTC/mine-neta-on-ergo-877b67c921c5]: anetaBTC guide to mining Neta on Ergo subpool.

- [https://cds.oette.info/ergo_diff.htm]: Ergo difficulty & network hashrate monitor.

- [https://youtu.be/ZMFx8qzaizw]: Dev update video (EIP-27 related).

- [https://youtu.be/l_wDMmJQwZo]: Ergo meet-up 4-hour video.

- [https://www.youtube.com/watch?v=9kBpL_b80r4]: Additional Ergo video content.

- [https://twitter.com/sigmanaut/status/1537885040751017985]: Twitter Spaces AMA announcement.

- [https://www.reddit.com/r/ergonauts/comments/veqbk3/payment_portal_to_initiate_process_and_track/?utm_medium=android_app&utm_source=share]: ErgoPad payment portal & tracking.

---

## Unresolved Questions

- **Tier 1 Exchange Listing Timeline** — Repeatedly announced as "soon" in early June; by mid-June status remains "integration done on Ergo side, waiting for exchange." No confirmed date provided. [@HQΣr, msg#282366, msg#283107]

- **Node 5.0 Rollout** — Mentioned multiple times but no release date confirmed; appears tied to EIP-27 activation. [@CW, msg#281717]

- **Gemlink Wallet Open-Source Status** — Community skeptical whether closed-source wallet will be adopted; Gemlink team promised restricted Discord channel for technical coordination but open-source commitment unclear. [@Armeanio, msg#282814, msg#282824; @MrStahlfelge, msg#282822]

- **Ergo GraphQL Implementation Timeline** — @OxCapitulation asked feasibility & timeline (2-3 months?); no concrete estimate given. Described as "highly customizable alternative to explorer API" but dev resources/priority unclear. [@OxCapitulation, msg#282792-282797]

- **Ledger Hardware Wallet Support** — Only beta available in Nautilus; no ETA for full Ledger Live integration or broader hardware wallet support. [@Unknown, msg#283158-283166]

- **Block Time / Speed Improvements** — Community discussed feasibility of faster blocks; implementation details (microblocks, sidechains, layer 2) left open. No decision on path forward. [@kushti, implied; @Unknown, msg#283340+]

- **Sidechain Construction Publication** — Mentioned as "soon" to publish; exact timeline and implementation status unclear. [@kushti, implied msg#281587+]

---