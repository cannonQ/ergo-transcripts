## Key Topics Discussed

- **KuCoin Listing & Trading Campaign**: Ergo was recently listed on KuCoin with a $30,000 ERG prize pool campaign (Activity 1: deposit competition for $10,000; Activity 2: trading competition for $20,000). The listing also enabled ERG/USDT tracking on TradingView. Significant volume and price movement (~36% in one day, reaching ~$9+) followed.

- **SigmaUSD / SigRSV Mechanics**: Multiple community members discussed how SigmaUSD works as a crypto-backed algorithmic stablecoin. Key points: SigmaUSD is pegged to $1; SigRSV appreciates with ERG price increases and fee accumulation; the reserve ratio (RR) must stay above 400% to redeem SigRSV and below 800% to mint it; minting/redeeming carries a 2.5% fee that goes back into the reserve. The strategy of minting SigmaUSD instead of selling ERG on exchanges was promoted as a way to take profits without suppressing ERG price.

- **Nanopool Centralization Risk**: Nanopool held over 50% of Ergo's total hashrate, raising 51% attack concerns. Community members actively encouraged miners to switch pools. By the end of the period, Nanopool had dropped to ~49%.

- **ErgoDEX Beta Launch**: ErgoDEX beta launch was anticipated for early the following week (around August 9th voting results, with beta potentially shortly after). The DEX is described as a cross-chain exchange targeting both Ergo and Cardano networks. It will support AMM pools initially, with a full order book DEX expected by end of year.

- **Ergo Paper Wallet Development**: anon_br announced a working prototype of an Ergo paper wallet, with plans to rewrite it properly, add unit tests, a basic UI, and publish to GitHub for community testing and auditing that week.

- **Yoroi Wallet Derived Address Issue**: A user reported ERG stuck at an old Yoroi address after generating a new address for a transaction. The issue relates to Yoroi not automatically scanning all derived addresses. The resolution involved restoring via the Ergo full node using the Yoroi mnemonic to access all UTXOs.

- **US Infrastructure Bill / Crypto Regulation**: Significant off-topic-adjacent discussion about the US Senate infrastructure bill's crypto broker reporting requirements. Community members discussed the Wyden-Toomey-Lummis amendment (favored) vs. the Warner amendment. The bill was expected to be voted on over the weekend of August 7–8.

- **ErgoDEX and Impermanent Loss**: Brief technical discussion on whether ErgoDEX's concentrated AMM pools reduce or eliminate impermanent loss. A Reddit post explaining the DEX's architecture (including the eUTXO concurrency challenge and proposed solutions) was shared.

- **Ergo Oracle Pools vs. Chainlink**: Community members discussed Ergo's Oracle Pools being more efficient than Chainlink oracles. A blog post comparing the two was shared. The nut.link project was noted as already delivering Ergo oracle data to Cardano as a proof of concept.

- **Ergo–Cardano Relationship**: Several new members asked about Ergo's relationship with Cardano. Clarifications provided: Ergo is an independent blockchain; both use the eUTXO model; kushti worked at IOHK; Ergo helped with the Djed stablecoin whitepaper; ErgoDEX aims to be the first cross-chain DEX on both networks.

- **Gravity Bridge (BSC)**: Brief mention that gravity.tech is the first bridge for Ergo to BSC, with parts live but ERG not yet bridged.

---

## Important Decisions or Announcements

- [@Armeanio, msg#180987, 2021-08-06]: Noted TradingView listing as a significant accomplishment alongside exchange listings.
- [@anon_br, msg#183099, 2021-08-08]: Announced a working prototype of an Ergo paper wallet; plans to publish to GitHub with unit tests and basic UI later that week.
- [@anon_br, msg#183104, 2021-08-08]: Confirmed paper wallet rewrite, unit tests, basic UI, and GitHub release for community testing/auditing planned for the coming week.
- [@Angie H, msg#182971, 2021-08-08]: Announced Ergo Platform AMA on bitcoin.com's Telegram channel on Tuesday August 10th at 16:00 UTC, with Armeanio, kushti, and Glasgow attending.
- [@Peppers CK, msg#182400, 2021-08-07]: Announced a new Ergo podcast in Spanish with @brodaxCrypto, first episode releasing Monday August 9th, with English subtitles planned for YouTube.
- [@Glasgow, msg#181582, 2021-08-06]: Confirmed ERGOHACK II is upcoming.
- [@Glasgow, msg#181580–181581, 2021-08-06]: Confirmed Gravity bridge and Ergo Raffle as upcoming ecosystem milestones.

---

## Technical Q&A Worth Preserving

- **Q** (@Unknown): What network does KuCoin use for ERG deposits?
  **A** (@Cancian, msg#180635): ERG is its own blockchain, so it uses the ERG network.

- **Q** (@Unknown, msg#180926): Why did a third address appear in a UTXO transaction?
  **A** (@Unknown, msg#180926): In UTXO, you have many addresses. The extra address is likely a change address you control. If mining with the node wallet, use the `derivenextkey` API call to find your next address.

- **Q** (@Unknown, msg#180700): Why does SigRSV give back less ERG even though ERG price is higher than when purchased?
  **A** (@Joonatan, msg#180708–180712): Not only the price difference matters — the path through which the price was reached also affects SigRSV value. If ERG dropped to $4 between purchase and current price, the SigRSV value is affected differently than a straight-line move.

- **Q** (@Glasgow, msg#181217): When can you not cash out SigRSV?
  **A** (@Glasgow, msg#181217): You can't cash out SigRSV when the reserve ratio is below 400%. You also can't mint SigRSV above 800% RR.

- **Q** (@XTK, msg#182028): Will ErgoDEX be front-run resistant?
  **A** (not directly answered, but referenced via Reddit post msg#183223): ErgoDEX's order-based and concentrated AMM design addresses the eUTXO concurrency issue; the architecture inherently limits front-running compared to EVM-based DEXes.

- **Q** (@CW, msg#182986): Is there a way to see how many active nodes are on the Ergo network?
  **A** (@Dmitry Usov, msg#182987–182993): Yes, via a method in the node's API. Run the node, go to `/swagger`, and look for the relevant API call. If not found, ask in the Discord development channel.

- **Q** (@Unknown, msg#182807): How often does Ergo adjust difficulty?
  **A** (@Glasgow, msg#182809): Every 1,024 blocks. An estimation site is pinned in the mining chat.

- **Q** (@fjunior, msg#182965): ERG sent to an old Yoroi address (not the currently active one) — is it recoverable?
  **A** (@Dmitry Usov, msg#182966–182968): Yes. Set up and fully sync the Ergo node using your Yoroi mnemonic. The node wallet scans all UTXOs by public key regardless of derived address, so you will see the balance and can send it to yourself. Ask at @ergosupport for further help.

- **Q** (@Unknown, msg#182516): What stops you from paying ErgoDEX fees in any token?
  **A** (@Ron, msg#182525–182506): On Cardano, fees can be paid in any token but are ultimately converted to ADA for stakers. On Ergo, even with babel fees, ERG is always needed at the base layer for transaction fees.

- **Q** (@XTK, msg#182661): Are Ergo NFTs stored on-chain, or can the image be changed after minting?
  **A** (not definitively answered in thread; question left open)

- **Q** (@TMR.ΣRG, msg#183013): What stops collusion between oracles in Ergo Oracle Pools?
  **A** (not directly answered in thread; question left open)

- **Q** (@Velvia, msg#182345): Is there a full node wallet for Ergo similar to Daedalus?
  **A** (@Unknown, msg#182346–182350): Yes, there is a full node wallet. The most up-to-date setup guide is at the Ergo GitHub wiki. Note: the Yoroi-based setup script is slightly different and easier than the older blog post.

---

## Links Shared

- [https://sigmausd.io/#/reservecoin]: SigmaUSD/SigRSV interface for minting and redeeming
- [https://explorer.ergoplatform.com/en/oracle-pool-state/ergusd]: Live Ergo/USD Oracle Pool state showing current price and update cadence
- [https://ergoplatform.org/en/blog/2021-07-30-ergos-ageusd-protocol-sigrsv-and-sigusd/]: Blog post explaining the AgeUSD protocol, SigRSV, and SigmaUSD
- [https://github.com/ergoplatform/eips/blob/master/eip-0004.md]: EIP-0004 — Ergo NFT token standard (equivalent to ERC-721)
- [https://github.com/ergoplatform/awesome-ergo/blob/master/pages/devs.md]: Developer resources and documentation index
- [https://susy.gravity.tech/]: Gravity/SuSy bridge for Ergo to BSC (parts live, ERG bridge not yet active)
- [https://ergoplatform.org/en/blog/2021-04-08-heres-how-ergo-seeks-to-boost-interoperability-for-cardanos-eutxo-model/]: Blog post on Ergo–Cardano eUTXO interoperability
- [https://ergoplatform.org/en/blog/2021-04-27-chainlink-oracles-vs-ergo-oracle-pools/]: Comparison of Chainlink oracles vs. Ergo Oracle Pools
- [https://nut.link/]: Proof-of-concept delivering Ergo Oracle Pool data to Cardano
- [https://ergoplatform.org/en/blog/2020-11-09-first-steps-towards-interoperability-with-cardano-oracles/]: Blog post on first Ergo oracle steps toward Cardano interoperability
- [http://cds.oette.info/ergo_diff.htm]: Ergo difficulty estimation tracker
- [https://www.reddit.com/r/ergonauts/comments/ozmjvl/must_read_for_those_looking_to_take_profits/]: Community post explaining how to take profits via SigmaUSD minting instead of selling ERG on exchanges
- [https://www.reddit.com/r/ergonauts/comments/ode4s7/ergo_dex_explained_an_automatic_decentralized/]: ErgoDEX architecture explainer including concentrated AMM and impermanent loss discussion
- [https://www.reddit.com/r/ergonauts/comments/p0ahj1/ergo_is_severely_broken/]: User complaint post about Ergo wallet/node issues (flagged for community support)
- [https://github.com/ergoplatform/ergo/wiki/Set-up-a-full-node]: Up-to-date Ergo full node setup guide
- [https://www.ergoforum.org/t/shrimpcoin-the-first-shrimp-pinned-stablecoin-on-ergo/1381]: Shrimpcoin — a proposed shrimp-price-pegged stablecoin on Ergo
- [https://sigmaverse.io/]: Ergo dApps directory
- [https://www.kucoin.com/news/en-ergo-listing-campaign-enjoy-a-30000-in-erg-prize-pool]: KuCoin ERG listing campaign details ($30,000 prize pool)
- [https://ergosites.github.io]: Community-built quick-access resource and infographic hub
- [https://ergonaut.space]: Comprehensive Ergo ecosystem handbook/wiki
- [https://discord.gg/7kWWQeMCwe]: Ergo Discord invite link

---

## Unresolved Questions

- **ErgoDEX impermanent loss**: Whether ErgoDEX's concentrated AMM pools fully eliminate impermanent loss was raised but not definitively resolved. A Reddit explainer was shared but the technical detail was described as above most participants' level.
- **Ergo NFT on-chain storage**: @XTK asked whether Ergo NFT images are stored on-chain or can be changed post-minting — not answered.
- **Oracle Pool collusion prevention**: @TMR.ΣRG asked what prevents oracle collusion in Ergo Oracle Pools — not answered in thread.
- **ErgoDEX fee token**: Whether ERG is required for fees when swapping non-ERG token pairs on ErgoDEX (e.g., tokenA → tokenB) was raised by @Ron but left unresolved.
- **Ledger support**: Multiple users asked about Ledger hardware wallet integration — confirmed "in progress, no ETA."
- **iOS Ergo wallet**: Repeatedly asked about; confirmed under development with no ETA.
- **Yoroi derived address scanning**: The root cause of Yoroi not displaying balances at older derived addresses was noted by @Glasgow as a known issue, with the workaround being the full node restore. No fix timeline given.
- **Nanopool hashrate dominance**: Still a concern even after dropping below 51%; community efforts to redistribute hashrate were ongoing in the mining channel.