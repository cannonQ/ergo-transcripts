# Ergo General Chat — Week 2024-W30 Summary

## Key Topics Discussed

- **Sub-blocks (Microblocks) Scalability Proposal**: kushti outlined a reworked sub-blocks proposal to improve transaction inclusion guarantees while requiring node/miner updates. Discussed as potential solution to increase throughput without compromising decentralization. (@kushti, msg#504067, #504622)

- **SigmaChain Development Roadmap**: Sigma 6.0 is ~95% complete (under review); framework will support merge-mined sidechains, standalone PoW blockchains, and private chains. Partner chain launch planned as first implementation, with generic SigmaChain framework similar to Scorex. (@kushti, msg#504622)

- **Storage Rent & Fixed Supply Monetary Design**: Community discussion on storage rent's role in maintaining chain integrity and enabling fixed supply—contrasted with infinite inflation/deflation cycles. Demurrage mentioned as complementary mechanism. (@Jack Σ, @dayumbbbb, msg#504794–#504838)

- **Merge-Mined Sidechains**: Bitcoin/Namecoin and Litecoin/Dogecoin cited as precedent. Ergo miners would receive rewards from sidechains or via emission contracts for sidechain data delivery. (@kushti, msg#504134, #504622, #504762)

- **TradeHouse Order Book DEX Launch**: P2P peer-to-peer DEX using order books (not AMM) released in July 2024, supporting partial order fills, full slippage control, and no impermanent loss. Contrasted with AMM pools. (@kushti, msg#504145–#504146, #504386)

- **ChainCash for Alternative Monetary Systems**: Use case explored for mutual credit clearing, municipal/private company deployment before state-level adoption. BRICS/Africa framed as potential markets; CFA zone monetary replacement discussed. (@kushti, msg#504147, #504242–#504244)

- **Live Ergo Explorer with Asset Recognition**: HQx proposed real-time block explorer (live.ergexplorer.com) with smart contract type recognition (emission, SigmaUSD bank, DEX swap) and asset icons. (@HQx, @kushti, msg#504208–#504215)

- **Oracle Solutions & Palmyra**: Palmyra using Chainlink proof-of-reserve + IoT sensors (camera, weight, motion) for trustless on-chain warehouse receipts. Plan to build native Ergo oracles alongside external oracle utilization. (@Dan Friedman via Armeanio context, msg#504854 etc., detailed in prior weeks)

- **Plagiarism / Friendly Fork Rules**: Bruno raised issue with Cardano fork of hodlERG (hodlADA, Danzo Arena) not following friendly-fork revenue-sharing rules. George208's project noted as copying without attribution/fee payment. (@Bruno Woltzenlogel Paleo, msg#504562–#504572)

- **Manifesto 2.0 & Ecosystem Framing**: kushti suggested composing new whitepaper on Ergo's evolved identity (fast confirmations, sidechains, trustless derivatives, p2p finance); HQx requested "Manifesto 2.0" reflecting accomplishments and new goals. Manifesto 2.0 draft exists (linked). (@kushti, @HQx, @Glasgow, msg#504297–#504309)

---

## Important Decisions or Announcements

- **Ergo Foundation New Initiative** [@Ergo NEWS, msg#504349, 2024-07-24]: EF launching structured proposal system, welcoming new Foundation members, funding community proposals; first approved project: Gluon Gold marketing campaign.

- **Gluon Gold Development Update** [@kii, msg#504360, 2024-07-24]: UI lag cause identified; contributors welcome to fix for Gluon token compensation. Stable Order contracts documented at docs.stability.nexus.

- **Bober Poker Night 12** [@MavΣrickBg, msg#504225, #504343, 2024-07-23/24]: Free-to-play poker tournament (160 Bober = ~45 ERG pot) + CyberVerse NFT giveaway (Ergonium Jackhammer, Hyron RX-ERG CyberCar). July 24, 7 PM UTC.

- **DuckPools v2 Borrow Token Issuance** [@kushti, msg#504757, 2024-07-26]: New token QUACKS-2.0 (900M emission) issued for duckpools v2 borrow functionality.

- **Demurrage Twitter Spaces Recording** [@qx(), msg#504773–#504790, 2024-07-26]: Community discussion on demurrage mechanics, storage rent, and fixed supply. 4 PM UTC, moderated by qx(). Speakers: kushti, Armeanio, LouisLibre (dayumbbbb).

- **ErgCube Discontinuation & Sigmaverse Continuation** [@HQx, msg#504294–#504299, 2024-07-24]: ErgCube backend subscription-based; Noah returning to Sigmaverse development. HQx exploring Sigmaverse API restyling (ErgCube-like UI).

---

## Technical Q&A Worth Preserving

- **Q** (@Misfit Toy, msg#504319): Will sub-blocks make Ergo faster than Solana?
  **A** (@Luivatra, msg#504325): Sub-blocks provide weak confirmation to transactions and spread p2p load over 2-minute block time rather than peak around block discovery. Will apply to all transactions, but apps determine if they use weak confirmation. Development starting now after Sigma 6.0 finalization. (@kushti, msg#504330)

- **Q** (@Misfit Toy, msg#504323): Sub-blocks for all transactions or optional per-sidechain?
  **A** (@Luivatra, msg#504325): Sub-blocks will be for all transactions; individual applications determine weak confirmation usage.

- **Q** (@big sad, msg#504336): How difficult to set up Rosen Bridge watcher with zero coding experience?
  **A** (@big sad, msg#504338–#504339): Has been running testnet validators; requires 24/7 computer or external node service.

- **Q** (@Rj, msg#504781): Which dApps need UI/UX improvement?
  **A** (@Rj, msg#504787): Rosen Network, SigmaFi, and Spectrum DEX. Suggests central dApp hub to prevent user context-switching. (@kii, msg#504786)

- **Q** (@TMR.ΣRG, msg#504512): How does Ergo's PoW decentralization compare to VC-backed chains?
  **A** (@TMR.ΣRG, msg#504516–#504517): Ergo is "pinnacle of decentralization for smart contract crypto"—decentralized platform for p2p money. (@Rj, msg#504513: PoW superior to VC-backed POS on security & decentralization grounds.)

- **Q** (@qx(), msg#504567): Did George208's fork follow friendly-fork rules?
  **A** (@Bruno Woltzenlogel Paleo, msg#504570): Friendly-fork rule requires small fee to original creators (hodlERG repo). George208 did not comply. Explains repo: https://github.com/PhoenixErgo/phoenix-hodlcoin-contracts

- **Q** (@NΣL!0, msg#504126): Why has transaction volume exploded on Ergo?
  **A** (@kushti, msg#504128): New producers on-chain (not exchange-level spike). (@Glasgow, msg#504131: Likely ETH/ERG pair bug on GateIO.)

- **Q** (@Jack Σ, msg#504227): How many semi-active developers on Ergo monthly?
  **A** (@Glasgow, msg#504234–#504235): DeveloperReport.com/ecosystems/ergo + Artemis can provide metrics. Electric Capital crypto-ecosystems repo tracks contributions.

- **Q** (@T F, msg#504835): Can oracle solutions be simplified to commodity basket stablecoin pegging?
  **A** (No direct response; @T F, msg#504842): Observation that robust oracle design is exceedingly difficult. @kushti acknowledged oracles TBD but acknowledged complexity. Palmyra attempting IoT + Chainlink integration as partial solution.

- **Q** (@Alex, msg#504718–#504720): Would embedded dApp-to-DEX swap iframe widgets be easy to implement?
  **A** (@HQx, msg#504723): Interested in building embeddable swap modal widget; could also integrate Crystal Pools order book.

---

## Links Shared

- [https://live.ergexplorer.com/]: Live Ergo block explorer with real-time transaction visualization. (@kushti, msg#504209)

- [https://www.ergoforum.org/t/a-scalability-plan-for-ergo/226/10]: Reworked sub-blocks proposal (chaotic writeup). (@kushti, msg#504067)

- [https://github.com/ChainCashLabs/chaincash/blob/master/docs/lets.md]: ChainCash LETS (Local Exchange Trading System) mutual credit clearing documentation. (@kushti, msg#504147)

- [https://www.youtube.com/watch?v=riUXWElYV5I]: TradeHouse presentation — peer-to-peer order book DEX. (@kushti, msg#504145–#504386)

- [https://ergoauctions.org/trade]: TradeHouse live order book DEX trading interface. (@kushti, msg#504386)

- [https://docs.stability.nexus]: Stable Order (SigmaUSD) documentation & contribution framework. (@Bruno, msg#504364)

- [https://www.reddit.com/r/ergonauts/comments/1cktqfu/the_ergo_manifesto/]: Ergo Manifesto 2.0 draft for community feedback. (@Glasgow, msg#504309)

- [https://www.developerreport.com/ecosystems/ergo]: Developer activity metrics for Ergo ecosystem. (@Glasgow, msg#504234)

- [https://github.com/search?q=repo%3Aelectric-capital%2Fcrypto-ecosystems%20ergo&type=code]: Electric Capital crypto-ecosystems GitHub (source for developer tracking). (@Glasgow, msg#504246)

- [https://github.com/PhoenixErgo/phoenix-hodlcoin-contracts]: hodlERG smart contract repo with friendly-fork revenue-sharing rules in README. (@Bruno, msg#504570)

- [https://ergcube.com]: Ergo ecosystem dashboard (subscription-based backend; transitioning to Sigmaverse). (@HQx, msg#504280)

- [https://sigmaverse.io]: Sigmaverse ecosystem tracker (active development resuming). (@HQx, msg#504280)

- [https://ergoplatform.org/en/community/]: Ergo community resources. (@HQx, msg#504285)

- [https://www.gluon.gold/]: Gluon Gold interface & documentation. (@Unknown, msg#504351)

- [https://x.com/i/spaces/1kvJpbPRqpQKE]: Demurrage Twitter Spaces (July 26, 4 PM UTC). (@kushti, msg#504615)

- [https://github.com/hyperledger-labs/Scorex]: Scorex blockchain framework (precursor to Ergo, used by Waves, V Systems). (@kushti, msg#504622)

- [https://x.com/ergo_platform/status/1816799554781524312]: Demurrage Spaces announcement. (@qx(), msg#504755)

---

## Unresolved Questions

- **Sub-blocks Timeline & Miner Adoption**: Kushti noted development "jumping on it now" post-Sigma 6.0, but no ETA or mandatory upgrade timeline specified. Risk of old miners rejecting blocks unclear. (@Luivatra, msg#504330)

- **SigmaChain First Implementation Partner**: Plan requires finding partner chain to launch first SigmaChain; no specific partner named or timeline given. (@kushti, msg#504622)

- **Merged Mining vs. Standalone Sidechains**: Design choice (merge-mined vs. standalone PoW) left as "biggest question" with no resolution. (@kushti, msg#504622)

- **Ergo Oracle Framework Scope**: Oracle solution design complexity acknowledged but roadmap unclear. Palmyra using Chainlink + native Ergo oracles; native oracle build-out depends on capital allocation. (@kushti, msg#504244)

- **Manifesto 2.0 Composition Process**: Draft exists but community composition method, approval, and publication timeline not confirmed. (@kushti, msg#504302; @Glasgow, msg#504309)

- **Friendly-Fork Enforcement**: Bruno raised plagiarism issues but no governance mechanism or enforcement policy established for future fork attribution/fee compliance. (@Bruno, msg#504562–#504572)

- **Live Explorer Script Recognition**: Recognized script types (emission, SigmaUSD, swap) proposed but implementation status unclear. Requires contract address mapping & styling. (@kushti, msg#504211–#504215)

- **Keystone Hardware Wallet Integration**: Aberg expressed frustration with 9-month communication gap; unclear why integration stalled or if revived. (@Aberg, msg#504865–#504867)

- **Sigma 6.0 Release Date**: Code ~95% done and under review; no final release ETA confirmed. (@kushti, msg#504622)