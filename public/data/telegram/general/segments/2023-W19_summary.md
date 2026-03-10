---
title: "Ergo General Chat — 2023-W19"
date_start: "2023-05-08"
date_end: "2023-05-14"
type: telegram_weekly
channel: general
week: "2023-W19"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2023-W19 Summary
**Period:** 2023-05-08 to 2023-05-14  
**Messages Analyzed:** 810  

---

## Key Topics Discussed

- **Storage Rent Mechanics & UTXO Consolidation**  
  Discussion of storage rent activation (~July 2023 at block 1,051,200), UTXO age tracking via tokenjay.app, and consolidation strategies. Clarified that rent is charged by output size in bytes, not ERG value. Miners can adjust rent prices via voting.

- **Rosen Bridge Architecture**  
  Rosen uses a dual-layer verification model: Watchers monitor other chains and notify Guards on Ergo; Guards independently verify events before releasing funds. Only a multisig wallet exists on other chains, minimizing attack vectors compared to full smart contract bridges.

- **NIPoPoWs & Light Node Sync**  
  NIPoPoWs enable ~20-minute initial sync with auto-pruning after verified milestones. Allows wallets to verify blockchain without downloading full history. Implementation pending but "almost here."

- **Fee Market & Spam Protection**  
  Ergo has flat transaction fees (unlike Ethereum's gas model). Nodes support configurable minimum propagation fee rates to prevent mempool spam. Reference client v4.0.44+ includes spam protections limiting single-peer transaction downloads.

- **SigmaFi Bond Protocol Updates**  
  Auto-liquidation feature under development for future bonds (optional, not retroactive). Lenders currently can only liquidate after term expiry; auto-liquidation would use off-chain bots. Discussion of keeping original design simplicity vs. advanced options.

- **Bulletproofs & Zero-Knowledge Proofs in ErgoScript**  
  kushti discussing integration of bulletproof verification into ErgoScript contracts. Enables trustless zero-knowledge proofs without trusted setup, alternative to SNARKs. Opens possibilities for hybrid contracts combining ZK statements with on-chain execution.

- **Order Book DEXes vs. AMMs**  
  Trade House (order book model) offers full transparency of depth/liquidity and user control over slippage. Unlike AMMs, supports partial fills and one-to-one matching. Contrast drawn with Serum (Solana) which lost admin keys.

- **Speed Improvements & Block Time Scaling**  
  Community discussion of potential micro-blocks/sub-blocks and faster block times. Concern raised: faster blocks affect timestamp-dependent contracts. Hard to optimize without concrete applications; layer 2 solutions also considered.

- **Merge Mining & Sidechain Construction**  
  kushti confirming sidechain constructions will be published soon. Merge-mined sidechains allow miners to earn both mainchain and sidechain tokens. Discusses trustless pegging vs. BAP 301-style approaches.

- **Demurrage (Storage Rent) as Spam Cleaner**  
  Storage rent automatically eliminates old spam transactions from the blockchain over time, unlike Bitcoin which faces indefinite bloat from BRC-20/inscriptions. Unique Ergo feature providing economic incentive for UTXO cleanup.

---

## Important Decisions or Announcements

- [@kushti, msg#388539, 2023-05-14]: Confirmed next ErgoHack will likely occur September or October 2023.

- [@Armeanio, msg#388187, 2023-05-11]: Weekly Ergo AMA with Dan Friedman and Armeanio held on YouTube/Twitter Spaces (msg#388147 announced 1 PM UTC Thursday May 11).

- [@Gazza, msg#388341, 2023-05-12]: Spectrum bot documentation for Cardano expected before June 2023; Docker already complete.

- [@CW, msg#388147, 2023-05-11]: Weekly update/AMA scheduled Thursday May 11, 1 PM UTC.

- [@Glasgow, msg#388602, 2023-05-14]: Community reminder about UTXO consolidation; storage rent activation ~July 2023 at block 1,051,200.

- [@kushti, msg#388585-586, 2023-05-14]: Clarified Spectrum DEX (formerly ErgoDEX) operates without admin keys.

---

## Technical Q&A Worth Preserving

- **Q** (@OxCapitulation, msg#388321-330): Storage rent boxes on tokenjay show 3.8-year-old boxes in a 1-year-old wallet. Can resending ERG reset the timer? Can box age be verified another way?  
  **A** (@Glasgow, msg#388334): Box age displays incorrectly on tokenjay. Resending creates a new UTXO. Send tokens to self (msg#387615) to reset clock; consolidation needed.

- **Q** (@Marty, msg#387437): How to check storage rent in mobile wallet?  
  **A** (@Unknown, msg#387439): Check via wallet UI (specific path given).

- **Q** (@gg, msg#387428): Does auto-liquidation feature on SigmaFi activate by price or time?  
  **A** (@Unknown, msg#387478): Will be optional choice in upcoming implementation.

- **Q** (@qx, msg#387452-461): Why add auto-liquidation if bonds were unique in current design? Suggests "liquidate" checkbox making bonds optional.  
  **A** (@Unknown, msg#387478): Auto-liquidation will be optional; no mandatory changes to current bonds.

- **Q** (@Ace, msg#387538-562): Can crypto be transferred via USB like physical cash? How to create "open" wallets?  
  **A** (@HQΣr, msg#387548): Paper wallets work; seed phrase can be stored on USB but previous owners could copy it. QR codes on currency notes for P2P transfers feasible.

- **Q** (@Siavash, msg#387608-617): If UTXO contains SigmaRSV, will storage rent claim it? Does transferring ERG fix it?  
  **A** (@Glasgow, msg#387609): SigmaRSV without enough ERG will be claimed. Transferring creates new UTXO (doesn't reset old one). Send tokens to self instead (msg#387615).

- **Q** (@Stasis, msg#387972-978): What's difference between "gas" and "transaction fee"?  
  **A** (@qx, msg#387973-985): Ethereum gas is calculated by tx complexity × price per unit, making total fee variable. Ergo has flat fee regardless of complexity (0.001 ERG for 1,000 addresses same as 1 address).

- **Q** (@Unknown, msg#388129-145): Could code minification/compilation reduce script space on blockchain?  
  **A** (@Aberg, msg#388139-146): Code is already compiled into ErgoTree on-chain (not source). Minification is web-only technique (like JavaScript). Term: "minification."

- **Q** (@Ty, msg#388103-118): Is storage rent only for inactive wallets? If mining consistently to wallet, am I safe?  
  **A** (@GliTcH_, msg#388113-117): Mining creates multiple UTXOs; consolidate every several months by sending all balance to self. Transaction count alone doesn't prevent rent.

- **Q** (@Allen, msg#388208): What makes Rosen Bridge different from other smart contract bridges?  
  **A** (@qx, msg#388210-217): Rosen does heavy lifting on Ergo with dual verification (Watchers + Guards). Other chain only has multisig wallet (minimal attack surface). Analogy: Fort Knox on Ergo + guarded safe on other chain.

- **Q** (@kusthy, msg#387615-617): After Bitcoin halving, will Ergo price double-digit?  
  **A** (@kushti, msg#387618): Asked clarifying question about Bitcoin halving context.

- **Q** (@dayumbbbb, msg#387772-780): Is storage rent called "UTXO Rent" or "Box Rent"?  
  **A** (@kushti, msg#387776): Rent amount defined by output size in bytes. Miners can vote to adjust (upper limit 2x default, minimum 0).

- **Q** (@Albermonte, msg#388054-090): What are challenges with using Ergo explorer API vs. light nodes?  
  **A** (@Albermonte, msg#388054): Explorer API rejected TXs without error/message. NIPoPoWs + SPV enable trustless node without full chain download; can relay TXs without connecting to specific endpoint.

---

## Links Shared

- [tokenjay.app](https://tokenjay.app): UTXO consolidation tool and storage rent age tracker.

- [ergoplatform.com/mining/rent](https://docs.ergoplatform.com/mining/rent): Storage rent modeling documentation.

- [sigmafi.app](https://sigmafi.app): SigmaFi decentralized P2P bond protocol.

- [Paideia DAO voting interface](https://twitter.com/paideiadao/status/1656675393875894272): Basic voting UI demo (Yes/No and preference-based).

- [github.com/slaninas/tostr](https://github.com/slaninas/tostr): Abandoned Nostr bot for Ergo; Glasgow looking for alternatives.

- [ergosphere.cloud](https://ergosphere.cloud/): Off-chain bot framework/infrastructure.

- [satergo.com](https://satergo.com/): Desktop wallet with built-in full node (Windows .exe).

- [keyst.one](https://keyst.one/security-schemes): Keystone hardware wallet with open-source firmware; user requested Ergo integration.

- [youtube.com/live/IjNgz-G1iJo](https://www.youtube.com/live/IjNgz-G1iJo): Weekly Ergo AMA live stream (May 11, 1 PM UTC).

- [ergonodes.net](http://ergonodes.net/): List of available Ergo node endpoints.

- [Reddit: Tracking Storage Rent Potential](https://www.reddit.com/r/ergonauts/comments/13e8f8g/tracking_storage_rent_potential_3rd_ed): Community tracking of storage rent implications.

---

## Unresolved Questions

- **Auto-Liquidation Implementation**: Whether auto-liquidation remains optional or becomes mandatory; whether off-chain bots suffice vs. on-chain solutions.

- **Block Speed Scaling**: Broader discussion of micro-blocks/sub-blocks vs. layer 2 solutions not resolved; depends on concrete application demand.

- **Sidechain Publication Timeline**: kushti stated constructions "will be published soon" but no firm date given (msg#388543 mentions "September or October" for next ErgoHack).

- **NIPoPoWs Wallet Implementation**: NIPoPoWs 20-minute sync described as "almost here" but not yet live; Satergo integration unclear.

- **Spectrum Cardano Bot Release**: Expected "before June" but dependency on documentation completion creates soft timeline.

- **Storage Rent Pools Auditing**: @Eddie_Moralez (msg#388153) raised concern about pools potentially stealing storage rent; no mechanism described to verify miner payouts.

- **Physical Crypto Cash Feasibility**: Ace's question about practical peer-to-peer paper wallet/QR code transfers acknowledged but not fully designed.

- **Marketing vs. Liquidity Strategy**: Debate over whether Ergo needs CEX listings (Binance/Kraken) vs. organic DEX growth; no consensus reached on priority.

- **ErgoScript Python Alternative**: @JotaJs (msg#387845) suggested Python compilation to ErgoTree; Luivatra noted possibility but no existing implementation momentum mentioned.

---

## Notable Community Sentiment

- **Storage Rent Anxiety**: Widespread concern about UTXO expiration; multiple clarifications needed on consolidation mechanics and age tracking.

- **Price Discussion**: Frequent speculation about market cap targets (100B, 10B) and comparison to meme coins (Pepe), with recognition that marketing/liquidity, not just tech, drives adoption.

- **Developer Tooling Progress**: Appreciation for improved SDKs (FleetSDK, ErgoPy) and frameworks; gap between old bot infrastructure (Albermonte's deprecated bot) and new tools acknowledged.

- **Bridge Confidence**: Rosen Bridge described positively; Watchers/Guards dual-verification model seen as security advantage.

---

*This summary omits extensive price speculation, off-topic discussions (politics, hardware recommendations), and general community chatter. Focus maintained on technical decisions, ecosystem updates, and developer-relevant Q&A.*