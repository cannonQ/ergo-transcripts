# Ergo General Chat — 2021-W22
## Period: 2021-05-31 to 2021-06-06

---

## Key Topics Discussed

- **Ergo Mining Discussions**: Extensive discussion about mining hardware, pools, and profitability. Community advised avoiding Nanopool due to having over 50% of network hashrate, recommending Herominers and Woolypool instead. Autolykos is memory-intensive but runs cooler than Ethash, with RDNA generation GPUs (Navi, Big Navi) performing poorly due to 128-byte cacheline size versus GCN's 64-byte cachelines.

- **ErgoDEX Development Status**: ErgoDEX will launch incrementally piece-by-piece starting in June 2021, not as a single launch. First beta will be AMM on Ergo. No governance token in initial release, may be added later. LPs earn fees in the base token of the chain utilized (ERG on Ergo, ADA on Cardano).

- **Wallet Development**: Yoroi wallet only supports Ergo on desktop browser extension, not mobile yet. Mobile support expected in July 2021 (~2 months out). Ledger hardware wallet support expected in July 2021. Users experiencing sync issues with Yoroi should refresh or use alternative explorers.

- **Oracle Pool Infrastructure**: Ergo Oracle Pool is live and operational, currently powering SigmaUSD stablecoin. Oracle Pool v1 run by EF members and others. Oracle Pool v2 running for Dexy Gold with GORT rewards. ADA oracle exists but not currently active (was used to demonstrate capability for Cardano stake pool explorer).

- **Gravity Protocol Integration**: Gravity protocol will enable Ergo to port to blockchains connected to the gravity network, allowing both ERG token transfers and oracle pool data across ETH, BSC, Waves, Fantom. This enables multi-blockchain DEXes and liquidity pools using Ergo Oracle Pools.

- **Storage Rent and Long-term Incentives**: After 8 years when block emission ends, miners will be incentivized by storage rent fees (demurrage) and data request fees. Discussion about how this differs from Bitcoin's long-tail emission model.

- **Community Marketing Efforts**: Community members created and shared infographics about Ergo on /r/cardano and /r/cryptocurrency subreddits. Posts gained significant traction (700+ upvotes on Cardano sub) but some were removed by moderators, with one user receiving a permanent ban. Community advised to add meaningful discussion rather than bot-like comments.

---

## Important Decisions or Announcements

- [@kushti, msg#149696, 2021-06-03]: Confirmed ErgoDEX update will be published after Wednesday dev chat, with more details about June rollout timeline.

- [@Armeanio, msg#150088, 2021-06-03]: "There won't be a one-time launch of ErgoDEX. ErgoDEX is a DeFi ecosystem, it will be launched incrementally piece by piece. Contracts also can be updated from time to time (like in Uniswap). The rollout starts in June."

- [@Armeanio, msg#150276, 2021-06-04]: "Better exchanges are coming hopefully I can release more info soon" - regarding exchange listings under NDA.

- [@kushti, msg#150595, 2021-06-05]: "Yes, roadmap will be updated after the hackathon" - confirming roadmap refresh timeline.

- [@Glasgow｜WON'T DM, msg#150338, 2021-06-04]: ErgoHack (first community hackathon) announced to begin June 12, 2021. Link: https://ergoplatform.org/en/blog/2021-06-04-ergo-community-launches-its-first-hackathon-ergohack/

- [@Armeanio, msg#150830, 2021-06-02]: Weekly dev update published: https://curiaregiscrypto.medium.com/whats-going-on-behind-the-screens-ergo-weekly-dev-update-june-2nd-fe2c6a0012

---

## Technical Q&A Worth Preserving

- **Q** (@Alison Robson, msg#150211): "Why is Ergo mostly wrote in Java based languages?"
  **A** (@Ron, msg#150217): "Ergoscript is great for what it needs to do" (Note: Core implementation uses Scala, also Java and Rust per @Ilya Oskin msg#149896)

- **Q** (@unknown, msg#149647): "It's not clear if there's going to be another governance token for ErgoDex is it?"
  **A** (@J, msg#149849): "they are beta testing both routes, w and w/out governance token" | (@unknown, msg#149649): "not clear yet. Team is not convinced it is needed. Can always be added"

- **Q** (@unknown, msg#149844): "Anyone know what the gravity integration will enable?"
  **A** (@Armeanio, msg#149851): "Gravity will open Ergo to port to blockchains connected to the gravity network. Both in terms of ERG token transfers and oracle pool data." | (@Bardamug, msg#149852): "Multi blockchain DEXes, multi blockchain liquidity pools + allow these chains use Ergo Oracle pools"

- **Q** (@unknown, msg#150249): "Hey, does anyone know what will happen to sigusd when age usd is released?"
  **A** (@Ron, msg#150251): "sigUSD is built on ageUSD protocol"

- **Q** (@Snowman Jason, msg#150351): "With the ergodex and mixer will we be able to make mixed ada?"
  **A**: No direct answer provided, likely requires NIPoPoWs integration.

- **Q** (@JayDee12Thr33, msg#150591): "Could I mint a native Token and one of the properties of that Token would be that when it is transacted a higher fee has to be paid and a fixed amount X is send to a smart contract?"
  **A**: No answer provided in this period.

- **Q** (@unknown, msg#150101): "According to this post, ergo started in may 2017. 4 years have passed and the current supply is 33~M ergo right now, but should be around 60-70M according to the graph?"
  **A** (@A, msg#150113): "Ergo mainnet launched in July 2019. So, 2 years will have passed in 1 month"

- **Q** (@unknown, msg#150491): "I see that if miners mine for 4 years they can participate in renting after the coin is fully mined. How long has ergo been mined for? And how many years left do we have until zero block?"
  **A** (@unknown, msg#150497): "Miners can participate forever as long there is an incentive for providing security to the network" | (@unknown, msg#150498): "Data requests will be enough after 8 years of issuance being over."

- **Q** (@Vasilis Manos, msg#150565): "I would like to know how ErgoMixer is going to allow stacking for erg. And how much is the APY for stacking. Has anything been announced yet?"
  **A** (@Glasgow, msg#150566): Linked to forum proposal: https://www.ergoforum.org/t/a-solution-for-staking/1057 | (@Andrey Andreev, msg#150569): "It is just a proposal, is there any working solution for staking ergs?" [no working solution yet]

---

## Links Shared

- [https://ergoplatform.org/en/mining/]: Official Ergo mining documentation
- [https://thecoinperspective.com/?c=ERG&vs=ETH&fx=USD]: Market cap comparison tool for Ergo vs other projects
- [https://swop.fi/investments/swop-farming]: Waves-based liquidity pool for ERG/USDN with staking
- [https://www.reddit.com/r/cardano/comments/np84r1/intro_to_ergo_cardanos_sister_project/]: Community infographic about Ergo on Cardano subreddit (700+ upvotes)
- [https://curiaregiscrypto.medium.com/ergo-why-proof-of-work-47c9b25fae70]: Article explaining Ergo's PoW choice
- [https://forum.cardano.org/t/ergo-will-complement-cardano/45412]: Forum post on Ergo-Cardano complementarity
- [https://explorer.ergoplatform.com/en/oracle-pool-state/ergusd]: Live ERG/USD Oracle Pool state
- [https://sigmausd.io/]: SigmaUSD stablecoin interface
- [https://gravity.tech/]: Gravity protocol for cross-chain interoperability
- [https://arxiv.org/ftp/arxiv/papers/2007/2007.00966.pdf]: Gravity protocol technical paper
- [https://www.tomorrowtides.com/how-ergo-dominates-link.html]: Article comparing Ergo oracles to Chainlink
- [https://ergoplatform.org/en/blog/2021-04-26-the-ergo-manifesto/]: The Ergo Manifesto (social contract)
- [https://www.ergoforum.org/t/discuss-desired-future-exchange-listings/808]: Forum discussion on exchange listing strategy
- [https://defipulse.com/]: DeFi Total Value Locked tracker (Ethereum ecosystem strength example)
- [https://ergonaut.space/en/hackathon]: ErgoHack hackathon information page
- [https://charts.cointrader.pro/charts.html?coin=ERGO%3ABTC]: Alternative charting tool for Ergo (TradingView alternative)

---

## Unresolved Questions

- **Exchange Listings**: Multiple exchanges confirmed under NDA but no timeline or names disclosed. Bitmart deposits/withdrawals opened after maintenance but some users reporting 2-month-old deposits still not credited. Team working with Bitmart support on resolution.

- **TradingView Integration**: Ergo not listed on TradingView because neither CoinEx nor Gate.io are supported data sources. Will be resolved when listed on Binance, Coinbase, KuCoin, or Kraken.

- **Yoroi Transaction Display Bug**: Users reported confusing transaction display showing very high amounts (950 ERG sent with 945 fee) when only 5 ERG was actually sent. Appears to be UI issue with change address display, not actual double-spend. Explanation provided about UTXO model but UI improvement needed.

- **Mining Directly to Exchange Wallets**: Multiple users experienced issues mining directly to Gate.io and other exchange addresses. Community recommends mining to personal wallet (Yoroi) first, then transferring to exchanges.

- **CoinEx BEP-20 USDT to Coinbase**: User sent USDT via BEP-20 from CoinEx to Coinbase which only supports ERC-20 for USDT. Funds likely lost; user advised to contact support but recovery uncertain.

- **Ergo Design/Branding Resources**: Question raised about official brand identity guidelines, design team, UX/UI resources, and downloadable brand manual. Directed to @ErgoSocials telegram for community marketing resources.

- **NIPoPoWs and Cardano Integration**: Discussion of using NIPoPoWs for sidechains and trustless relay to update sidechain data on Ergo mainchain, but specific implementation timeline unclear.

- **Fee Estimation API**: Node has fee estimation API showing required fee for next 1-2 blocks but it's untested and not integrated into wallets yet. Community requested testing and integration.

- **Mobile Wallet Timeline**: July 2021 estimated for Yoroi mobile Ergo support, but community hedged with "about 2 months" and noted more devs from hackathons could accelerate to early July.