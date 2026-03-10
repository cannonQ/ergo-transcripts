---
title: "Ergo General Chat — 2020-W46"
date_start: "2020-11-09"
date_end: "2020-11-15"
type: telegram_weekly
channel: general
week: "2020-W46"
source: telegram
message_count: 401
categories: [community, ecosystem, bridges, technical, wallet, defi, mining]
key_terms: [Wikipedia, censorship, Cardano, crypto-related content, DarkFund0, community rewards, crowdfunding, 3500 ERG, Huobi, exchange listing, CoinEx, listing fees, Gravity Network, gateways, USDN, USDT, Tron, Waves, Binance Chain, oracle pools]
---
# Ergo General Chat Summary — 2020-W46
**Period:** 2020-11-09 to 2020-11-15  
**Messages analyzed:** 401

---

## Key Topics Discussed

- **Gravity Network Integration & Gateways**: Ergo Foundation planning to implement gateways for USDN/USDT (primarily Tron's USDT) via Gravity protocol; Waves, Binance Chain, and Tron are the most active partners currently [@kushti, msg#64589].

- **Oracle Pools vs API3**: Extended discussion contrasting Ergo's permissionless Oracle Pools (decentralized, foundational approach) with API3's first-party oracle solution (centralized data sources). Both have merits; Oracle Pools enable more trustless customization for users [@Unknown, msg#65000-65009].

- **Magnum Wallet Sunset**: Magnum Wallet shutting down November 30, 2020 (20-day notice). Users must migrate; Magnum uses different derivation path (0') than Yoroi/CoinBarn, complicating recovery. ErgoMixer will support Magnum addresses as covert addresses post-closure [@kushti, msg#64737-64741, msg#65118].

- **Stablecoin Economics**: Discussion of collateralized stablecoin enabling long/short positions and DeFi products. Users can supply collateral to go long ERG or mint stablecoin to go short. Fee-on-transfer mechanisms via liquidity pools mentioned but details deferred to forthcoming documentation [@Unknown, msg#64878-64893].

- **Native Tokens vs Contract-based Tokens**: Clarification that Ergo's tokens are native to the protocol (like Waves/NXT), not contract-based like ERC-20, supporting first-class status comparable to Cardano's planned "native assets" [@kushti, msg#64911].

- **Auction House & Trade House**: Auction House updated to support any wallet via assembler service 2; peer-to-peer order book DEX (Trade House) discussed as alternative to AMMs with full slippage control and price transparency [@kushti, msg#64902-64903].

- **Fee Mechanisms Research**: Theoretical exploration of mining accepting tokens for fees via fee emission boxes or velvet-fork proposals; practical adoption unlikely due to token price/liquidity complications [@kushti, msg#64908, msg#64917-64918].

- **Mining Economics**: Question raised regarding cost efficiency of mining vs. buying ERG long-term with 3-5 year hold horizon; no concrete answer provided [@Unknown, msg#65116-65117].

---

## Important Decisions or Announcements

- **Cardano Oracle Partnership**: Ergo published blog post announcing "first steps towards interoperability with Cardano oracles"; referenced multiple times as significant bridge between ecosystems [@Unknown, msg#64614, msg#64658].

- **Roadmap Released**: New Ergo development roadmap published with technical milestones; community reception positive [@Unknown, msg#64932-64947].

- **Video Content Series**: kushti committed to producing one technical video per week covering protocol development, state of development, roadmap, and light clients [@kushti, msg#64691-64692].

- **Ledger Support Timeline**: No ETA confirmed for Ledger hardware wallet support; Emurgo mobile wallet (Yoroi) switch to ergo-rust library causing delays but expected to provide long-term advantages [@kushti, msg#64836].

- **Mobile Yoroi Delayed**: Mobile Yoroi wallet for ERG not expected before Magnum Wallet closure (November 30); technical library migration (TypeScript → Rust) prioritized over speed [@Dmitry Usov, msg#64783].

- **Wrapped ERG Discussion**: Jason Davies proposed trustless 1:1 exchange contract for ERG ↔ WERG to simplify certain contract designs [@Jason Davies, msg#64852-64873].

---

## Technical Q&A Worth Preserving

- **Q** (@Unknown): Can stablecoin collateral generate returns beyond basic market appreciation?  
  **A** (@Unknown, msg#64878-64893): Yes; supplying collateral keeps you long ERG while earning from liquidity pool fees. Minting stablecoin is shorting ERG. Specific mechanics deferred to forthcoming documentation.

- **Q** (@Unknown): Why not use wrapped ERG instead of native tokens?  
  **A** (@Jason Davies, msg#64873): Wrapping simplifies contracts that only handle arbitrary user-issued tokens. Also neat to deploy trustless 1:1 WERG ↔ ERG exchange.

- **Q** (@mensrea): Can tokens be used to pay transaction fees like ERG?  
  **A** (@Unknown, msg#64877; @kushti, msg#64908): Theoretically yes via fee emission boxes or by buying ERG from liquidity pools in same transaction. Unlikely miners accept arbitrary tokens (90%+ have no market). Fee script not fixed in protocol [@kushti, msg#64908].

- **Q** (@scalahub): What is Magnum Wallet's private key format and derivation scheme?  
  **A** (@kushti, msg#64801-64805): Magnum file contains encrypted mnemonic; uses derivation path 0' (different from Yoroi 3.3.x+). Code obtained; discussion moved to Discord.

- **Q** (@Damon AndTheSea): How does order book DEX differ from AMM?  
  **A** (@qx(), msg#64704-): Order books provide total transparency of market depth, full slippage control, and peer-to-peer matching without impermanent loss; AMMs use liquidity pools with fixed spreads.

- **Q** (@Unknown): Will Ergo's stablecoin require a governance token like MKR?  
  **A** (@mensrea, msg#64889): Design uses only ERG and stablecoin; no new governance token introduced.

- **Q** (@Unknown): Can NIPoPoWs enable Cardano-Ergo bridges differently?  
  **A** (@Unknown, msg#65103): "The game completely changes when NIPoPoWs come about!" (implies significant cross-chain capability improvement, but not detailed).

---

## Links Shared

- [YouTube: Ergo Technical Overview](https://www.youtube.com/watch?v=Eie6QBVyos8): kushti's inaugural technical video on Ergo protocol internals [@kushti, msg#64624].

- [Blog: First Steps Towards Interoperability with Cardano Oracles](https://ergoplatform.org/en/blog/2020-11-09-first-steps-towards-interoperability-with-cardano-oracles/): Official Ergo Foundation post on Oracle Pools and Cardano bridge [@Unknown, msg#64614].

- [Cardano vs Wikipedia Dispute](https://en.cryptonomist.ch/2020/10/23/charles-hoskinson-of-cardano-vs-wikipedia/): Context for concerns about Ergo Wikipedia censoring [@Jordan, msg#64534].

- [Ergo Auction House Forum Post](https://www.ergoforum.org/t/some-details-about-ergo-auction-house/428/8): Updated Auction House with assembler service support [@kushti, msg#64902].

- [Wrapped ERG Proposal](https://www.ergoforum.org/t/wrapped-erg-wrapping-native-erg-as-a-1-1-token/469): Jason Davies' trustless WERG exchange design [@Jason Davies, msg#64852].

- [Collective Spending Approach](https://www.ergoforum.org/t/a-simpler-collective-spending-approach-for-everyone/476): anon_real protocol contribution [@kushti, msg#65147].

- [Oracle Pool Specification](https://github.com/ergoplatform/oracle-core/blob/master/docs/specs/Basic-Oracle-Pool-Spec.md): Technical spec for Oracle Pools [@Dmitry Usov, msg#64681].

- [Emurgo Oracle Pools Research](https://github.com/Emurgo/Emurgo-Research/blob/master/oracles/Oracle-Pools.md): Overview and incentive research [@Dmitry Usov, msg#64681].

- [BTC Manager: Ergo Oracle + Cardano Interop](https://btcmanager.com/ergo-oracle-solution-cardano-ada-interoperability/): Third-party coverage of partnership [@Unknown, msg#64658].

- [Bitcoin Privacy Best Practices](https://www.bitcoinqna.com/post/10-tips-for-interacting-with-bitcoin-more-privately): Referenced for Ergo Mixer coin control guidance [@Unknown, msg#65072].

- [Ergo YouTube Channel](https://www.youtube.com/channel/UC7cht_rw6ofX3wTirrQG8kw): Official technical content repository [@Unknown, msg#65111].

---

## Unresolved Questions

- **Magnum Wallet Recovery**: Can users with Magnum-derived keys recover funds via Yoroi/node interface if derivation path (0') is confirmed? Partial answer: Yoroi uses different scheme; node interface may work but manual configuration required [@kushti, msg#64748; @Unknown, msg#65076].

- **Huobi Listing Status**: kushti asked Gravity partners about exchange talks; outcome not disclosed in chat [@kushti, msg#64549]. Follow-up: "What can community do to support Huobi listing?" [@Jonesy, msg#65125] — no response.

- **Stablecoin Paper & Design Details**: Multiple requests for stablecoin research paper and mechanics documentation; deferred to "wait and see" [@Unknown, msg#64886; @Kookster, msg#65046].

- **Fee Emission Box Specification**: kushti mentions velvet-fork proposal for fee boxes allowing miners to accept tokens; promised forum post never appeared in week (msg#64920: "Will appear on time").

- **Non-Outsourceable PoW (NO-PoW) User-Activation**: kushti referenced idea of making NO-PoW "user-activated soft-forkable"; question raised whether existing users could enable instantly but not answered [@Unknown, msg#65132-65133].

- **Ethical Regulation & Mining Anonymity**: Discussion of anonymity in NO-PoW vs. pools; tension between regulator participation and competitive fairness not resolved [@Unknown, msg#65119, msg#65128, msg#65146].

- **API3 vs Oracle Pools Competitive Impact**: Concern raised whether Cardano's official API3 partnership will diminish Ergo's oracle relevance; no clear strategy articulated [@Unknown, msg#65098-65101].

---

**Archival Note:** Week 46 marked significant infrastructure transitions (Magnum sunset, mobile wallet delays, video content launch) and clarification of DeFi economic models (stablecoin mechanics, fee mechanisms). Oracle Pools vs. API3 debate reflects healthy ecosystem positioning rather than internal conflict. Most technical details on stablecoin and advanced fee structures deliberately deferred by maintainers pending research publication.