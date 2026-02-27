# Ergo General Chat — 2020-W52 Summary

## Key Topics Discussed

- **Autolykos v2 PoW Scheme & Memory Hardening**: kushti released documentation on the updated proof-of-work algorithm with progressive memory hardening. Table size (N value) grows until block 614,400 (2^26 = 67,108,864), then increases by 5% every 51,200 blocks until block 9,216,000, then fixed. Goal is to resist ASIC mining and keep the network accessible to GPU miners. [@kushti, msg#71139, msg#72022, 2020-12-23]

- **SigmaUSD Stablecoin Announcement (AgeUSD)**: kushti and Armeanio confirmed development of a collateralized stablecoin in partnership with EMURGO/Cardano, with official announcement scheduled for January 23, 2021 (ErgoSummit). Implementation in ErgoScript for Ergo, Plutus for Cardano. [@Richi, msg#70626, 2020-12-21; @kushti, msg#70989, 2020-12-22]

- **ErgoMixer with Programmable Interface**: anon2020 developing a mixer API allowing programmable privacy transactions. kushti noted this is "mindblowing stuff" — enables bots to issue SigmaUSD when ERG/USD peaks, then immediately mix output for enhanced privacy. [@kushti, msg#71216-71219, 2020-12-23]

- **Auction House Image Preview Feature**: anon_real rapidly implemented image/GIF display in Ergo Auction House within 24 hours of user request. NFT issuing now supports artwork URLs in register R9, auto-uploaded via ergoutils.org. [@kushti, msg#71657-71709, 2020-12-24; @David F, msg#71282, 2020-12-23]

- **NIPoPoWs & Cross-Chain Interoperability**: Ergo's Non-Interactive Proofs of Proof-of-Work enable trustless sidechaining and interoperability. Discussion of Ergo as potential oracle solution for Cardano and other blockchains; kushti confirmed ERG would be payment token for oracle suppliers (like LINK). [@Unknown, msg#71033, 2020-12-22; @Richi, msg#71792, 2020-12-25]

- **Storage Rent Mechanism**: Storage rent (storage fee) provides miners with ongoing incentive beyond block rewards once max supply is reached. Discussed as tool to prevent whale accumulation (potential "dust" fees on large holdings), though implementation details remain flexible. [@Unknown, msg#71060, 2020-12-22; @kushti, msg#71607-71612, 2020-12-24]

- **Order Book vs. AMM DEX Models**: qx() discussed distinction between order book DEXes (Spectrum/Trade House) and AMM pools. Order books enable transparent depth, full slippage control, peer-to-peer matching; AMMs simpler but subject to impermanent loss. Both viable on Ergo. [@kushti, msg#70686-70689, 2020-12-22]

- **Anonymous Developer Contributions (Anon Army)**: kushti highlighted that anon devs built ~50% of core ecosystem apps: Ergo Utils, ErgoMixer, Ergo Auction House. Additional 5 anonymous developers needed to accelerate ecosystem growth. [@kushti, msg#71646-71650, 2020-12-24]

- **Emission Curve & Inflation Dynamics**: Ergo at ~57% inflation rate at end of 2020 (54,000 ERG/day ÷ 29.4M circulating). Emissions static first 2 years (until July 2021), then decline 3 ERG per quarter. Full supply (97.73M ERG) mined in ~8 years. Richi planning to publish inflation curve graphic. [@Richi, msg#72039-72053, 2020-12-27]

- **ErgoSummit 2021 Announcement**: January 23, 2021 event (2pm UTC / 9am EST). EMURGO devs presenting multiple sessions. kushti hinted "more will be shown than expected." [@kushti, msg#70946, msg#72078, 2020-12-22/27]

- **Sigmaverse Portal Launch**: Launched sigmaverse.io aggregating Ergo dApps, tokens, NFTs, Oracle Pools, and smart contracts in one interface. [@kushti, msg#71247, 2020-12-23; @Richi, msg#71788, 2020-12-25]

## Important Decisions or Announcements

- [@kushti, msg#71139, 2020-12-23]: Autolykos v2 PoW scheme documentation released. Progressive memory hardening schedule finalized.

- [@kushti, msg#70946, 2020-12-22]: ErgoSummit 2021 confirmed for January 23, 2 pm UTC / 9 am EST with EMURGO presentations.

- [@kushti, msg#71826, 2020-12-25]: Ergo wallet desktop NFT support feature sent to wallet dev team; implementation pending.

- [@kushti, msg#71948-71949, 2020-12-26]: Recommendation to community: contact favorite exchanges (especially FTX, KuCoin, Binance) requesting Ergo listing. Gate.io contacted Ergo team first. Marketing push needed across miners, NFT artists, traders, DeFi users.

- [@Richi, msg#72039-72047, 2020-12-27]: Committed to publishing inflation curve graphic showing daily inflation rate decline through 2026.

- [@Dmitry Usov, msg#72064, 2020-12-27]: Sigmaverse.io portal officially launched and announced.

## Technical Q&A Worth Preserving

- **Q** (@matiwinnetou, msg#70986): Will the SigmaUSD stablecoin be developed in Plutus or Solidity?
  **A** (@kushti, msg#70989): Cardano implementation in Plutus, Ergo implementation in ErgoScript.

- **Q** (@Unknown, msg#71023): How can ErgoScript-based SigmaUSD work if it needs deployment on both Cardano and Ergo?
  **A** (@Unknown, msg#71033): Ergo has NIPoPoWs built-in making interoperability easy; potential sidechain connection discussed.

- **Q** (@Unknown, msg#70690): How does order book creation work on Ergo?
  **A** (@kushti, msg#70686): Order created in 1 transaction, matching requires another transaction. Order encodes ERG ↔ token swap functionality. AMM DEXes also possible and efficient on Ergo.

- **Q** (@Unknown, msg#70657): Why didn't Yoroi wallet display NFT tokens after auction win?
  **A** (@kushti, msg#70682): Yoroi holds tokens but doesn't display them yet. Sebastien working on token support. Tokens not lost; accessible via full node.

- **Q** (@David F, msg#71282): Will Ergo Auction House add image previews to improve UX?
  **A** (@kushti, msg#71707): Feature implemented via Artwork NFT standard in register R9; ergoutils.org auto-uploads artwork. Effective only for new auctions following standard.

- **Q** (@matiwinnetou, msg#71554): Will regulators target USDT after SEC vs. Ripple?
  **A** (@Unknown, msg#71555-71557): Stablecoins appear closest regulatory target; White House and G7 discussing multi-currency stablecoin limits.

- **Q** (@Unknown, msg#71790): Will ERG token be used for Chainlink oracle integration?
  **A** (@Richi, msg#71792): Yes. ERG is payment currency for oracle suppliers and Stake Pool Operators (SPOs), similar to LINK. Oracles just one part of Ergo ecosystem.

- **Q** (@Unknown, msg#72030-72033): When will all ERG be mined?
  **A** (@Damon AndTheSea, msg#72034): ~6.5 years from launch (July 2019). See emission curve: static first 2 years, then -3 ERG per quarter until ~2027.

- **Q** (@Richi, msg#72039): How does inflation rate change as supply grows?
  **A** (@Richi, msg#72050): Even with static daily emission, inflation rate drops daily because total circulating supply grows. Starting July 2021, inflation decline accelerates. BTC now at 1.76%; Ergo at 57% at end-2020.

- **Q** (@chrom, msg#72028): Can single PC/laptop mine Ergo profitably with good GPU?
  **A** (@Unknown, msg#72010): Not until Autolykos v2 hard fork (post-Jan 2021). Mining doesn't make sense for most GPU miners currently.

## Links Shared

- [Autolykos v2 PoW scheme description](https://www.docdroid.net/mcoitvK/ergopow-pdf): kushti's technical documentation on memory hardening schedule. [@kushti, msg#71139, 2020-12-23]

- [ErgoSummit 2021 official site](http://ergosummit.org/): January 23 event with EMURGO presentations and stablecoin announcement. [@kushti, msg#70946, 2020-12-22]

- [Sigmaverse.io](https://sigmaverse.io/): Aggregated portal for Ergo dApps, tokens, NFTs, Oracle Pools. [@kushti, msg#71247, 2020-12-23]

- [Ergo Platform Awesome List](https://github.com/ergoplatform/awesome-ergo): Community-curated resources. [@kushti, msg#71789, 2020-12-25]

- [Ergo Auction House](https://ergoauctions.org/): Live NFT auctions with image preview support. [@Unknown, msg#71795, 2020-12-25]

- [Sigmaverse blog post](https://ergoplatform.org/en/blog/2020-12-27-introducing-the-sigmaverse/): Official announcement with portal overview. [@Dmitry Usov, msg#72064, 2020-12-27]

- [Emission Curve Reference](https://ergoplatform.org/en/blog/2019_05_20-curve/): Block interval 2 minutes, 75 ERG/block first 2 years, then -3 ERG per quarter. [@Damon AndTheSea, msg#72034, 2020-12-27]

- [Oracle Core GitHub](https://github.com/ergoplatform/oracle-core/): Oracle Pool bootstrap & setup instructions. [@Unknown, msg#71742, 2020-12-24]

- [Oracle Pools Documentation (EMURGO Research)](https://github.com/Emurgo/Emurgo-Research/blob/master/oracles/Oracle-Pools.md): Technical guide. [@✖️plc, msg#71717, 2020-12-24]

- [Medium: Oracle-Special](https://veriumfellow.medium.com/oracle-special-4e36cfa6a852): Community perspective on Ergo oracle role. [@UpwindStrategy, msg#71798, 2020-12-25]

## Unresolved Questions

- **Exchange Listings**: Community requested major exchange listing (Binance, FTX, KuCoin) to improve price discovery and adoption. kushti confirmed gate.io contacted them first; new round of talks needed. No timeline given. [@David F, msg#71918-71919; @kushti, msg#71948, 2020-12-26]

- **Stablecoin Technical Details**: While January 23 announcement confirmed, specific collateralization ratio, liquidation mechanics, and multi-blockchain deployment strategy not yet detailed publicly.

- **Block Time/Difficulty Adjustment for Speed**: Community debated faster blocks vs. current 2-minute intervals. Concerns raised about timestamp-based dApps (auctions, expiry conditions) if block time changes. kusht acknowledged complexity but no decision announced. [@kushti, msg#71254, 2020-12-23]

- **Storage Rent Implementation Details**: Confirmed mechanism exists but exact fee rates, dust thresholds, and interaction with privacy/mixer features not yet finalized. [@Unknown, msg#71589-71591, 2020-12-24]

- **Chinese Community Growth**: No Ergo Chinese-language channels or partnerships mentioned; potential untapped market. [@Unknown, msg#71999, 2020-12-27]

- **Africa/Nigeria DeFi Strategy**: Community noted Nigeria's large Binance fiat volume and emerging Fintech ecosystem as ideal for Ergo adoption. No formal team outreach plan confirmed. [@Unknown, msg#71959-71960, 2020-12-26]

---

**Summary**: Week was dominated by infrastructure announcements (Autolykos v2, Sigmaverse launch, ErgoSummit details) and ecosystem tooling progress (mixer API, auction house preview, wallet NFT support). Anonymous developers emerged as critical force. Community focused on exchange listings, marketing strategy, and understanding inflation/emission mechanics ahead of stablecoin release.