---
title: "Ergo General Chat — 2025-W02"
date_start: "2025-01-06"
date_end: "2025-01-12"
type: telegram_weekly
channel: general
week: "2025-W02"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2025-W02 Summary

## Key Topics Discussed

- **SigmaUSD Redemption Issues**: Users encountered stuck transactions in proxy addresses when redeeming SigmaRSV. Solution involves using tokenjay.app or refunding via sigmausd.io before retrying with dApp connector or ergopay. [@Edvin, @Glasgow, @cafebedouin.org, Jan 6-7]

- **Sub-blocks EIP & Protocol Improvements**: First draft of "sub-blocks" (input/ordering blocks) EIP published. Protocol reference client 5.1.1 released. Discussion of block time, block height dependencies, and implications for faster confirmations. [@kushti, @Ergo NEWS, msg#538301, Jan 6; msg#539030-539041, Jan 10]

- **Storage Rent / Demurrage Semantics**: Community debate on terminology — "storage rent" vs. "demurrage" vs. "maintenance fee". Consensus that "demurrage" better captures the economic concept, though kushti notes the term originated in Ethereum community discussions since 2015. [@Alex, @cannon_q, @cafebedouin.org, msg#538596-538674, Jan 8]

- **PHP Token Recovery via Demurrage**: Sigmanauts Mining DAO successfully claimed 100% of PHP supply through demurrage, relaunching it as the first-ever recovered meme token. Discussion of future utilities: NFT rarities locked in demurrage boxes, bounty boxes, Easter egg mechanics. [@cannon_q, @LouisLibre, msg#538447, 538631-538741, Jan 7-9]

- **Ergo Positioning for 2025**: kushti outlined strategic focus: performant P2P network (sub-blocks, Tailstorm), multi-stablecoin ecosystem (Gluon/Dexy/Djed), secure bridges (Rosen), p2p smart contracts, decentralized PoW mining (Lithos), stablecoin-based payments, p2p digital banking. [@kushti, msg#539030, Jan 10]

- **Wallet & Mobile Ecosystem**: Nautilus mobile app in development; Keystone integration SDK progressing; Ergo Mobile/Terminus for iOS; discussion of need for multi-chain swaps and improved wallet UX. [@Ergo NEWS msg#538301, @qx(), msg#538618-621, Jan 8]

- **Rosen Bridge Use Cases**: Future vision includes Rosen as trustless relay for cross-chain asset onramping — e.g., buying Monero via Ergo escrow contracts, then unwrapping via Rosen to native XMR. [@kushti, msg#539087-539102, Jan 11]

- **Bulletproofs & Zero-Knowledge in ErgoScript**: kushti explained bulletproofs as compact Sigma protocols for zero-knowledge proofs without trusted setup, enabling range proofs and custom statements verifiable in ErgoScript. Potential for verifiable credentials and hybrid contracts. [AMA context, Jan 9]

- **Demurrage Vault Contract**: Simplest no-spend contract `sigmaProp(false)` creates boxes only recoverable via demurrage/miners. Discussed for creating NFT series, Easter eggs, and community bounty mechanisms. [@kii, @kushti, msg#538731-538758, Jan 8-9]

- **Oracle Pools & Chainlink Partnership (Palmyra/ZenGate)**: Chainlink integration for proof-of-reserve, warehouse receipts, trade financing. Plans to build native Ergo oracles with foundation capital allocation. Multiple oracle versions running (v1 with EF members, v2 for Dexy Gold with GORT rewards). [@Dan/Armeanio context, msg#539087-539043, Jan 10-11]

---

## Important Decisions or Announcements

- [@Ergo NEWS, msg#538301, 2025-01-06]: **Emission Reduction Complete** — Network now rewards miners with constant 18 ERG per block (~12,960 ERG/day). Sub-blocks EIP first draft published. Nautilus mobile work started. Keystone SDK integration in draft PR.

- [@cannon_q, msg#538447, 2025-01-07]: **PHP Token Relaunch** — Sigmanauts Mining DAO recovered 100% PHP supply via demurrage; token relaunched with trading on MewDex.

- [@kushti, msg#539015, 2025-01-10]: **Keystone Integration Progress** — Transaction parsing & signing mostly complete; UI integration underway. Screenshot shows transaction summary from scanned QR.

- [@Chris Ray, msg#539572, 2025-01-12]: **Dexy Contracts Audited** — 18 contracts audited for Dexy; Dexy is live/progressing.

- [@kushti, msg#539030, 2025-01-10]: **2025 Development Roadmap Proposed** — Sub-blocks, multi-stablecoin support, Rosen improvements, p2p smart contracts, Lithos mining, off-chain payment layers, ChainCash framework.

---

## Technical Q&A Worth Preserving

- **Q** (@Edvin, msg#538265): How long does SigmaRSV redemption take? Removed SigmaRSV but no ERG received after 30 min, no transaction visible.
  **A** (@Glasgow, msg#538269; @cafebedouin.org, msg#538270): Likely stuck in proxy address. Use tokenjay.app or refund via sigmausd.io menu, then retry with dApp connector or ergopay.

- **Q** (@Alex, msg#538596): Why "storage rent" instead of "chain fee" — feels like wallet doesn't belong to you?
  **A** (@cannon_q, msg#538601; @kushti, msg#538611): Consolidating once per 4 years avoids fee entirely — sustainable for public ledger. Term originated in Ethereum community (2015+) for UTXO/state growth management.

- **Q** (@Alex, msg#538609): Why no developers on interoperable wallet with integrated swap/bridge (like PayPal/Revolut for crypto)?
  **A** (@qx(), msg#538618-621): Nautilus has multichain in pipeline following Rosen; mobile work in progress. Terminus/Ergo Mobile has Mosaik framework for plugin-based features. Currently only SigmaUSD bank integrated for swaps.

- **Q** (@Chris Ray, msg#539323): Is there a smart contract for timed payment at specific block height?
  **A** (@Patato, msg#539395): Sample ErgoScript provided (HEIGHT >= unlockHeight check + recipient proveDlog).

- **Q** (@Patato, msg#539551): Can smart contracts hide funds as protection against wallet compromise?
  **A** (implicit discussion): Contract allowing wallet B to spend funds sent from wallet A; blockchain scannable but adds friction. Multisig 2-of-3 also useful; best practice is to prevent compromise entirely.

- **Q** (@kushti, msg#539030): What should Ergo prioritize for 2025 dev roadmap?
  **A** (@c8, msg#539091): MUST-HAVE: spot Rosen vector oracle for bridged assets, mempool subscriptions. NICE-TO-HAVE: sub-blocks, web dApp, mobile DeFi, p2p message layer, ErgoScript debug logging.

- **Q** (@kushti, msg#539092, @Alex): How does fiat→Monero onramp via escrow + Rosen work?
  **A** (@kushti, msg#539099-539102): User buys wrapped Monero via escrow (like Bisq), then Rosen unwraps to native XMR. Can be automated end-to-end for user: select amount → pay fiat → receive Monero.

---

## Links Shared

- [https://github.com/ergoplatform/ergo/pull/2055/files](https://github.com/ergoplatform/ergo/pull/2055/files): Sub-blocks EIP first draft.
- [https://github.com/ergoplatform/ergo/releases/tag/v5.1.1](https://github.com/ergoplatform/ergo/releases/tag/v5.1.1): Ergo protocol reference client v5.1.1 release.
- [https://github.com/ergoplatform/oracle-core/pull/329](https://github.com/ergoplatform/oracle-core/pull/329): Silver datafeeds support added to oracles.
- [https://github.com/KeystoneHQ/keystone-sdk-rust/pull/105](https://github.com/KeystoneHQ/keystone-sdk-rust/pull/105): Keystone SDK integration (draft).
- [https://demurrage.fun](https://demurrage.fun): PHP token relaunch & info site.
- [https://dex.mewfinance.com/ergo/swap](https://dex.mewfinance.com/ergo/swap): MewDex swap interface (PHP trading pair example).
- [https://fund.mewfinance.com/](https://fund.mewfinance.com/): MewFund strategic development plan (Offers, Token Delegation, Lending Platform rounds).
- [https://medium.com/@haskell.plus.mail/exle-lite-paper-ergolend-3f89dc2ebb9d](https://medium.com/@haskell.plus.mail/exle-lite-paper-ergolend-3f89dc2ebb9d): EXLE/ErgoLend Lite Paper.
- [https://www.ergoforum.org/t/a-bisq-like-dex-to-trade-erg-for-fiat-or-btc-and-other-cryptcurrencies/4078](https://www.ergoforum.org/t/a-bisq-like-dex-to-trade-erg-for-fiat-or-btc-and-other-cryptcurrencies/4078): P2P fiat/BTC onramp proposal.
- [https://sigmaspace.io/en/token/26b684b432262d3378af088355f3f60d70ffd44ab7a1505a8e4e2b323c82c5a6](https://sigmaspace.io/en/token/26b684b432262d3378af088355f3f60d70ffd44ab7a1505a8e4e2b323c82c5a6): Elamite's Ergo Art Series NFT (to be claimed via storage rent).
- [https://rosen.tech/](https://rosen.tech/): Rosen Bridge interface.
- [https://youtu.be/DDDjaIBTMUw](https://youtu.be/DDDjaIBTMUw): Ergo video mentioned by @Andy L.
- [https://youtube.com/live/LqrHepXZyvY](https://youtube.com/live/LqrHepXZyvY): Ergo AMA (Jan 9).

---

## Unresolved Questions

- **Sub-blocks timing impact**: Increasing block speed affects contracts relying on HEIGHT vs. timestamp. Security implications of reduced block time not fully resolved; kushti noted some dApps specifically rely on timestamp, requiring careful parameter tweaking. [@kushti, msg#539030-539043]

- **Dexy Protocol deployment timeline**: Contracts audited but exact mainnet launch date unconfirmed. [@Chris Ray, msg#539572]

- **Native Ergo Oracle Pool funding**: Plan to allocate token-sale capital to build out Ergo oracles, but capital amount and timeline TBD. [@Dan/Armeanio context]

- **LCX listing terms**: Discussion of potential listing but fee structure (listing vs. MM vs. marketing) unclear; marketing budget mentioned as fee replacement but impact on liquidity adoption uncertain. [@cannon_q, @Glasgow, msg#538806-538812]

- **Mobile DeFi + TradFi integration**: Alex flagged that without mobile-first "super dApp" (like Revolut for crypto) connecting to traditional finance, broader ecosystem adoption limited — c8 acknowledged legal/process challenges remain unsolved. [@Alex, @c8, msg#539093-539095]

- **Fiat onramp via escrow + Rosen**: Technical feasibility outlined but regulatory pathway and intermediary risk model (how fiat-to-Monero custody operates) not detailed. [@kushti, msg#539087-539102]

---