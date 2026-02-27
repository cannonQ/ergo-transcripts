# Ergo General Chat — 2023-W48 Summary

## Key Topics Discussed

- **Transaction Fee Structure Clarification**: Extended discussion about Ergo's fee model, distinguishing between the minimum box value (dust prevention, ~360 nanoerg per byte) and the separate fee contract box that miners claim. Consensus emerged that "transaction fee" terminology conflates two distinct mechanisms.

- **51% Attack Security Analysis**: Community debate about Ergo's vulnerability to 51% attacks at current hashrate. Consensus: currently requires 90,000+ 3070Ti GPUs for an external attacker; security assumption strengthens as network grows and hashrate increases.

- **Rosen Bridge Launch Timeline**: Multiple references to "1-2 weeks" launch window with community joking about perpetual "soon" announcements. Armeanio confirmed bridge is actively being tested and refined ([@CW, msg#456178, 2023-12-03]).

- **Block Reward Reductions & Mining Economics**: Discussion of block reward schedule (currently 33 ERG, reducing to 3 ERG at block height 1,760,000 around March 2026). Concern raised that at low prices, mining may become unprofitable, but network security tied to continued GPU accessibility rather than difficulty.

- **Sub-blocks Implementation**: Discussion of sub-blocks as optional faster confirmation layer for vendors to choose based on security tolerance. Technical implementation and parameter tweaking being explored on testnet.

- **Demurrage Mechanism Refinement**: Mar Bondicat proposed linear/exponential fee curves as alternative to current storage rent implementation, but noted this requires hardfork. dayumbbbb argued for stronger demurrage as "circulation-secured" vs "circulation-insecure" alternative chains.

- **CEX Listing Negotiations**: Dan Friedman confirmed ongoing talks with 2 US/Canadian exchanges regarding spot and derivatives products. MEXC listing fell through due to pricing disputes ([@Glasgow, msg#455161, 2023-12-01]). xeggex mentioned at $2k listing fee; Glasgow pursuing free listing negotiations.

## Important Decisions or Announcements

- **Rosen Bridge Estimated Launch**: [@Armeanio, msg#454949, 2023-11-30]: Acknowledged video problems during AMA, stated bridge in final testing phase with ~1-2 week window (community skeptical of timeline)

- **US Exchange Access in Progress**: [@Dan Friedman, msg#454881, 2023-11-30]: "Still talking to them. Going through some discussions around what products they can make available for US and Canadian customers"

- **MEXC Deal Rejected**: [@Glasgow, msg#455161, 2023-12-01]: "They're not interested" — funding entity withdrew after MEXC demanded non-negotiable price changes

- **Ergo Names Development**: [@Unknown, msg#455498, 2023-12-01]: "mgpai and balb are apparently going to be working on it in december"

- **SigmaO v2 Design Initiated**: [@Glasgow, msg#455897, 2023-12-02]: SigmaO v2 allowing option usage from other smart contracts (design phase started)

- **Presearch Collaboration Inquiry**: [@Unknown, msg#456093, 2023-12-02]: Presearch approached community for background design to promote Ergo to 4.4M registered users; CW noted prior campaign (March-April) yielded trivial results in bear market

## Technical Q&A Worth Preserving

- **Q** (@Mar Bondicat): How is minimum required fee calculated — fee per byte × whole transaction box sizes or just the fee box itself? (msg#454604)
  **A** (@Pulsarz): Minimum box value formula (360 nanoerg × box size) is separate from fee mechanism. Fee has its own box created in transactions; network only verifies ergs in that box ≥ min required fee (msg#454585)

- **Q** (@Mar Bondicat): Can a box contain zero ERG on Ergo? (msg#454542)
  **A** (@Glasgow & Luivatra): No. Each box requires minimum value (360 nanoerg × box size). Fee box is optional but must also meet minimum (msg#454555, #454556)

- **Q** (@CW): How to enable indexing on node? (msg#455038)
  **A** (@Pulsarz): `extraIndex = true` (msg#455039)

- **Q** (@Me): Can 100x leverage be built on-chain with Ergo smart contracts? (msg#455087)
  **A** (@Unknown): Would be difficult; possible on EVM protocols like GMX/dYdX but they don't reach 100x (msg#455088, #455089)

- **Q** (@Ronnie): Which APK file to download for Ergo Mobile Wallet on Android for cold storage? (msg#454796)
  **A** (@CW): Debug builds are fine; they're built by GitHub directly and haven't been modified by third parties (msg#455815, #455816)

- **Q** (@Me): Is PoW coin value proposition fundamentally different from PoS? (msg#454678)
  **A** (@Mar Bondicat, kushti): PoW miners must expend continued energy; PoS holders earn yield from token holdings. PoW security not favored toward early adopters. PoS security assumptions more complex (msg#454680, #455046)

- **Q** (@Mar Bondicat): Fee sequencing — do miners order transactions by fee per byte or by miner tips? (msg#454508)
  **A** (@Glasgow): Fee per byte is standard, but ultimately up to miner's preference. Not enforced by protocol (msg#454511)

- **Q** (@Nash): As network grows, will 51% attacks become easier or harder? (msg#455430)
  **A** (@MavΣrickBg): Harder. At current all-time-low hashrate, ~90,000 3070Ti GPUs needed for external 51% attack. Larger network = higher cost (msg#455434, #455439, #455440)

## Links Shared

- [https://ergoplatform.org/en/news/Rosen-Bridge-Updates-Launch-Expected-Within-1-2-Weeks/](https://ergoplatform.org/en/news/Rosen-Bridge-Updates-Launch-Expected-Within-1-2-Weeks/): Rosen Bridge launch update posted ~1 week ago, timeline continuously pushed (msg#454824)

- [https://docs.ergoplatform.com/dev/protocol/tx/min-fee/](https://docs.ergoplatform.com/dev/protocol/tx/min-fee/): Ergo transaction fee documentation with explicit fee contract details (msg#454553)

- [https://www.ergoforum.org/t/fee-scripts-enhancement-proposal/669/2](https://www.ergoforum.org/t/fee-scripts-enhancement-proposal/669/2): Forum discussion on fee script optimization (anyone-can-spend) (msg#454562)

- [https://docs.ergoplatform.com/fud-faq/#fpgas-are-already-taking-over-ergo](https://docs.ergoplatform.com/fud-faq/#fpgas-are-already-taking-over-ergo): FPGA efficiency data (2x best Nvidia cards, not cost-effective) (msg#455905)

- [https://github.com/ergoplatform/ergo-wallet-app](https://github.com/ergoplatform/ergo-wallet-app): Ergo Wallet App GitHub repository (msg#454820)

- [https://app.ergone.io/](https://app.ergone.io/): Erg0ne native token incentivizing community marketing (msg#455877)

- [https://live.ergexplorer.com/](https://live.ergexplorer.com/): Live Ergo Explorer visualization tool (msg#456189)

- [https://vxtwitter.com/cometmooning/status/1729509856405594583](https://vxtwitter.com/cometmooning/status/1729509856405594583): COMET NFT premint announcement (msg#454539)

- [https://twitter.com/RosenBridge_erg/status/1730154066964271410](https://twitter.com/RosenBridge_erg/status/1730154066964271410): Rosen Bridge Twitter update (msg#454872)

- [https://vxtwitter.com/auction_house_/status/1730355650545279383](https://vxtwitter.com/auction_house_/status/1730355650545279383): Auction House project update (msg#455068)

- [https://app.firn.cash/](https://app.firn.cash/): Firn Protocol (Tornado successor with anonymous devs) (msg#455756)

- [https://twitter.com/Sigmanauts/status/1731025498652995691](https://twitter.com/Sigmanauts/status/1731025498652995691): Sigmanauts announcement (msg#456113)

- [https://x.com/ERG_Armeanio/status/1731253416553283834](https://x.com/ERG_Armeanio/status/1731253416553283834): Armeanio Rosen Bridge update (msg#456178)

- [https://youtu.be/b3IfFspCUZE](https://youtu.be/b3IfFspCUZE): Developer update video (msg#456361)

- [https://hackernoon.com/how-linux-became-so-popular](https://hackernoon.com/how-linux-became-so-popular): Article comparing Linux adoption curve to Ergo development (msg#456148)

## Unresolved Questions

- **Sub-blocks Launch Timing**: When will sub-blocks testnet be ready for community participation? kushti indicated need for community testing but timeline uncertain (msg#454501, #454854)

- **Demurrage Curve Optimization**: Should Ergo implement linear/exponential fee multipliers on top of current storage rent? Technical feasibility and hardfork requirements unclear (msg#455676, #455677)

- **Leverage Trading on-chain**: Is 50-100x decentralized leverage achievable in Ergo smart contracts? Potentially viable but no concrete implementation announced (msg#455102, #455107)

- **Block Time Reduction Feasibility**: How to reduce block time without increasing reorg attack surface? Trade-offs between faster confirmations and security being discussed but no consensus path (msg#454661, #454663, #454672)

- **Rosen Cross-chain LP Strategy**: Will guards provide LP between native chain coins and RSN, or between RSN and ERG? LP structure for new chain bridges TBD (msg#456145, #456150)

- **Ergo Names Integration**: Timeline for wallet integration and launch of decentralized naming service unknown beyond "December" (msg#455498, #456100)

- **Mining Profitability Post-Halving**: Block reward halving to 3 ERG at March 2026 — will GPU mining remain profitable? Contingent on price appreciation (msg#455518, #455543, #455547)

- **Presearch ROI Assessment**: Why did prior Presearch campaign yield trivial results? Community unsure if model is viable or if timing/execution was poor (msg#456097, #456099)

---

**Summary**: W48 focused on technical clarifications (transaction fees, 51% attack mechanics, security assumptions), Rosen Bridge readiness, and CEX expansion efforts. Fee mechanism confusion led to productive documentation improvements. Mining security and demurrage optimization remain active research areas. Rosen launch repeatedly characterized as "1-2 weeks away" with community skepticism mounting.