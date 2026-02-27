# Ergo General Chat — 2021-W27 Summary
**Period:** 2021-07-05 to 2021-07-11

## Key Topics Discussed

- **Emission Schedule and Treasury Reduction**: Block reward emission reduction began at block 525,600. Treasury receives amounts above 67.5 ERG; miner rewards remain at 67.5 ERG until approximately early 2022 when the reward drops below that threshold. Every 3 months, block rewards decrease by 3 ERG. Discussion clarified that treasury is reduced first before miner rewards are affected.

- **Mempool Congestion Event**: Severe mempool congestion occurred on July 10, with transactions stuck for 12+ hours. Users reported "could not contact assembler service" errors on ErgoAuctions. The congestion appeared related to many transactions with large numbers of inputs, possibly from mixer operations or pools. Issue was resolved after developer intervention.

- **SigmaUSD/SigmaRSV Mechanics**: Extended discussion about SigmaRSV risk profile. SigmaRSV holders gain when ERG price increases but cannot redeem when reserve ratio falls below 400%. If ERG price drops significantly, SigmaRSV value decreases, though holders don't lose everything. General consensus: high-risk, high-reward for long-term bulls.

- **Charli3 Oracle Controversy**: Community identified Charli3 (Cardano oracle project) claiming to be "first decentralized oracle on Cardano" in marketing materials. Ergo community pushed back, noting Ergo Oracle Pools existed first. Charli3 changed video title from "the first" to "one of the first" after feedback. Concerns raised about lack of code from Charli3 team.

- **Yoroi Wallet "Send All" Feature**: Discussion about Yoroi's checkbox to send all assets being a potential security risk. Users expressed concern it makes accidental wallet emptying too easy, with little use case for the feature.

- **Mining Pool Decentralization**: Concerns raised about one mining pool (Nanopool) approaching 51% hashrate. Discussion pointed to FAQ and AMA addressing this as temporary concentration that would resolve naturally.

## Important Decisions or Announcements

- [@Armeanio, msg#161497, 2021-07-10]: Coinfoundry mining pool launched for Ergo: https://coinfoundry.org/pool/ergo

- [@Ilya Oskin, msg#161749, 2021-07-11]: "First version [of ErgoDEX] will be released in public around next week"

- [@Armeanio, msg#159863, 2021-07-06]: Bitcoin.com exchange was doing wallet testing. Expected to go live soon. Changelly and Changelly Pro also in progress, plus unnamed tier 1 exchange.

- [@Armeanio, msg#159861, 2021-07-06]: "Son of a tech interview with kushti tomorrow, maybe... when its live you will know."

- [@Angie H, msg#161436, 2021-07-10]: Project Catalyst voting opened for ErgoDEX Plutus port funding proposal. Registration instructions and voting guide shared for community to support.

- [@Angie H, msg#161437, 2021-07-10]: Giveaway event announced on r/erg_miners subreddit: show mining rigs for chance to win ERG and NFTs including Ergnome by Foeniculum.

- [@Jennie D, msg#161078-161080, 2021-07-09]: Unofficial Ergo Instagram account launched: https://www.instagram.com/ergo_platform/ (community-run, not EF-controlled)

## Technical Q&A Worth Preserving

- **Q** (@Andromeda): As most of you already know, when you stake ADA in pools, the ADA remains in your wallet so you dont risk losing them. Are we going to have something similar with ERG later?
  **A** (@Glasgow): Don't see why it wouldn't be possible. Don't imagine it's planned though. It's needed for ADA because stakers are like their miners. Presumably there is some sort of risk in qERG too so they'd need control over your assets - or at least a SC would. Staking (on Ada) has no downside - it'll never go down in value, so can be done in that manner. ErgoMixer tokenization and other apps will provide passive income options. See: https://www.ergoforum.org/t/a-solution-for-staking/1057

- **Q** (@NC): Does ErgoScript support sha256 hash operation?
  **A** (@NC): Seems answer is yes [self-resolved]

- **Q** (@Miguel): How can I use 2 different addresses in the same official ergo wallet?
  **A** (@Dennis TheMenace): You have to use derive path from swagger site. You only create a path that gives you another address (or 2 if you don't change anything in the function you use). You don't need to sync blockchain again.

- **Q** (@Andrew S): Tried to buy SIGRSV yesterday. ERGs left my account, and the transaction with sigrsv was unconfirmed yesterday all day, and today it disappeared. Did the developers of the coin scam me?
  **A** (@Alison Robson): You can see your SigRSV on Yoroi's send tab [transaction was stuck due to mempool congestion]

- **Q** (@Jeronimo Backes): Is there anything in ergo's smart contracts DNA that makes defi on ergo significantly more secure compared to what's out there in other blockchains?
  **A** (@Ron): https://ergoplatform.org/en/blog/2021-04-16-multi-stage-contracts/ and https://ergoplatform.org/en/blog/2021-04-06-ergodex-model-amm-and-order-book-type-exchange/ [rug pull protection discussion]

- **Q** (@Pat): C3 dangerous for ergo?
  **A** (@Robert): If they deliver: No, because Ergo Oracles will have first mover and tech advantage. If they end up seen as a rug pull because they can't or don't deliver? Bad for all crypto. However you look at it they represent no real "danger," though. At best a competitor for a small fraction of what Ergo does.

- **Q** (@Duncan): Will Ergodex have its own token?
  **A** (@Snowman Jason): No governance token initially. May be added later if needed - the ERG token does most of the heavy lifting.

## Links Shared

- [https://docs.google.com/spreadsheets/d/1RTkYzu114NV9OL2yKs3Pp3Sq0BPlK1t-CvVGmfEoZaM/edit?usp=sharing]: Ergo emission schedule spreadsheet showing block rewards over time
- [https://ergoplatform.org/en/blog/2019_05_20-curve/]: Official blog post explaining emission curve and treasury mechanics
- [http://213.239.193.208:9053/emission/at/525599]: Node API endpoint showing emission at block 525599
- [http://213.239.193.208:9053/emission/at/525600]: Node API endpoint showing emission reduction at block 525600
- [https://www.ergoforum.org/t/a-solution-for-staking/1057]: Forum discussion on potential staking solution through tokenization
- [https://github.com/MrStahlfelge/ergo-wallet-android/releases/download/v0.6.2105/app-ergomainnet-release.apk]: Android mobile wallet beta version for testing
- [http://cds.oette.info/ergo_diff.htm]: Difficulty tracker showing blocks until next adjustment
- [https://ergoplatform.org/en/blog/2021-07-06-cex-vs-dex-what-are-differences/]: Blog post comparing centralized and decentralized exchanges
- [https://ergoplatform.org/en/blog/2021-07-07-2nd-ergoversary-wrap-up/]: ErgoVersary wrap-up with roadmap updates and exchange news
- [https://curiaregiscrypto.medium.com/whats-going-on-behind-the-screens-ergo-weekly-dev-update-july-7th-a229b28b7bd6]: Weekly dev update July 7th
- [https://ergoplatform.org/en/blog/2021-07-08-a-case-for-the-combined-power-of-ergo-and-cardano/]: Blog post on synergy between Ergo and Cardano
- [https://www.youtube.com/watch?v=2QC-u2KvXN4]: Son of Tech interview with kushti
- [https://ergoplatform.org/en/blog/2021-07-09-cryptocurrency-fees-a-solution-to-unreasonable-state-growth/]: Blog post on storage rent and state growth solutions
- [https://www.reddit.com/r/erg_miners/comments/oh0wf0/giveaway_event_1_show_your_rig_hashrates_and_pools/]: Mining rig giveaway event on Reddit
- [https://cardano.ideascale.com/a/dtd/ErgoDex-Plutus-Port/352410-48088]: Project Catalyst proposal for ErgoDEX Plutus port
- [https://iohk.zendesk.com/hc/en-us/articles/900005679386]: Catalyst registration and voting guide
- [https://poolpartynodes.com/ergo-merchant-shop/]: Ergo merchandise shop
- [https://sigmausd.io]: SigmaUSD/SigmaRSV interface
- [https://thecoinperspective.com/?c=ERG&vs=LINK]: Coin comparison tool (ERG vs LINK market cap)
- [https://ergoplatform.org/en/blog/2021-04-27-chainlink-oracles-vs-ergo-oracle-pools/]: Comparison of Chainlink oracles vs Ergo Oracle Pools
- [https://ergoplatform.org/en/blog/2021-04-06-ergodex-model-amm-and-order-book-type-exchange/]: ErgoDEX model explaining AMM and order book functionality with rug pull protection

## Unresolved Questions

- Exact timeline for Ledger hardware wallet support: "Tesseract is moving onto the next stage of development, implementing the ledger specs" but no firm date provided
- Mobile Yoroi wallet timeline: Still in testing, estimated "maybe within a month" but not confirmed
- Fourth tier 1 exchange identity: Bitcoin.com, Changelly, and Changelly Pro confirmed, but fourth exchange remains unnamed
- How liquidity provision will work on ErgoDEX when SigmaUSD minting is restricted at low reserve ratios
- Native Cardano token trading on ErgoDEX: Unclear if automatic or requires additional development
- Fee structure on ErgoDEX for cross-chain swaps: Whether fees can be paid in the token being transacted
- Sidechain implementation details: Forum post coming "soon" but construction not yet published
- Merge-mined sidechain reward mechanics: How mainchain miners will be rewarded for including sidechain data