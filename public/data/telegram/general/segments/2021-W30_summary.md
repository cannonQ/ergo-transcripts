## Key Topics Discussed

- **Android Wallet Release**: Ergo's first mobile wallet built on Ergo AppKit was released on Google Play Store, developed by Benjamin Schulte (MrStahlfelge). The wallet was audited by Ergo devs and supports read-only wallet functionality. Community initially had concerns about trust/verification, but the wallet is legitimate and EF-supported.

- **Bitcoin.com Exchange Listing Delay**: ERG listing on Bitcoin.com Exchange was delayed from July 29th to August 3rd at 9 AM UTC due to internal technical issues on the exchange side. The delay was outside Ergo Foundation's control.

- **Tier 1 Exchange Announcement**: Armeanio confirmed a tier 1 exchange listing announcement coming the week of August 2nd, with community speculation focusing on KuCoin based on a deleted tweet. The exchange would be larger than Bitcoin.com and in the top 10 by volume.

- **Community Token Creation**: Multiple community tokens emerged including Kushtis, Erdoge, Hopium, YAYERG, and UTXO tokens. Discussion about using ErgoUtils to create tokens led to debate about the Ergo Token Centre telegram channel being created for token-specific discussions.

- **SigmaUSD/SigRSV Issues**: Users accidentally sent SigRSV tokens to exchanges using "Send all assets" in Yoroi, resulting in lost tokens. Exchanges may charge 20% fee to recover. Also discussion of reserve ratio being too high for new SigRSV minting.

- **Mining Pool Decentralization**: Nanopool controlling ~56-60% of hashrate was discussed as a concern. Armeanio working on adding 5 new pools to improve decentralization. Community noted 2miners growing and LeafPool having issues.

- **NFT Copyright Discussion**: Extended debate about copyright law, licensing, and whether using Pexels images for commercial NFT sales is legal. Pexels license allows commercial use for edited derivative works under their terms.

- **ErgoDEX Timeline**: ErgoDEX waiting on Yoroi dApp connector fix before launch. Smart contracts already translated to Plutus. Catalyst Fund 5 voting results pending with concerns about downvoting from competing projects.

- **NIPoPoWs and Sidechains**: Kushti discussed sidechain constructions coming soon, merge-mined sidechains that reward mainchain miners, and trustless pegging mechanisms superior to BIP 301. Discussion of how Ethereum 2.0 migration will bring miners to Ergo.

- **Ergo Performance Discussion**: Community discussed potential speed improvements including sub-blocks, microblocks, and sidechains. Kushti noted current contract set (GARD, Rosen, Oracle Pools, DEXes) provides good benchmark for optimization rather than premature optimization.

## Important Decisions or Announcements

- [@Angie H, msg#173214, 2021-07-30]: Ergo's first mobile wallet released on Google Play Store, built on Ergo AppKit and audited by Ergo team.
- [@Armeanio, msg#172051, 2021-07-29]: Bitcoin.com Exchange listing delayed 24 hours due to internal technical issues, will list August 3rd at 9 AM UTC.
- [@Glasgow, msg#174349, 2021-07-31]: Tier 1 exchange (top 10) will list ERG this week.
- [@Armeanio, msg#172028, 2021-07-29]: Weekly dev update published covering Ledger progress, hot wallet work, and raffle testing on testnet.
- [@Chris Ray, msg#174198, 2021-07-31]: Created Ergo Token Centre telegram channel to separate community token discussion from main channel.
- [@kushti khushi, msg#172219, 2021-07-27]: Raffle testing on testnet confirmed.

## Technical Q&A Worth Preserving

- **Q** (@J A): Can we stake/farm ERG?
  **A** (@flying sheep): Check ErgoDEX, soon. LP available on CoinEx currently, or buy SigRSV when reserve ratio permits.

- **Q** (@Viktor Stoyanov): If ERG is not halving every x blocks, how does the reduction work?
  **A** (@A): Block reward reduces every 3 months (64,800 blocks), not halving but gradual reduction.

- **Q** (@J A): Why use Ada and Ergo and not ETH?
  **A** (@Glasgow): Ergo and Cardano use eUTXO model vs Ethereum's account model. See blog post: https://ergoplatform.org/en/blog/2021_03_26_eth_vs_erg/

- **Q** (@mrtn): Is pool-resistant mining feasible now that pools exist?
  **A** (@Glasgow): Pool resistance not feasible on smart contract chains - can work around with smart contracts. It would only work on "dumb chains". Can't rent hash on Nanopool so 51% attack risk is low.

- **Q** (@Rpalet): I sent SigRSV to CoinEx using "Send all assets" - did I lose them?
  **A** (@Glasgow): Contact CoinEx support, they can refund for 20% fee if you open support ticket. This has been done before.

- **Q** (@timetofx): What is the next big step for Ergo? What partnerships?
  **A** (@Kevin): See roadmap at https://ergonaut.space/en/roadmap

- **Q** (@flying sheep): Do you need ERG to send around tokens or NFTs?
  **A** (@Unknown): Yes, you need a small amount of ERG (minimum ~0.001) to send tokens/NFTs as transaction fee.

- **Q** (@Exupery): How many Cardano DEXes will be available when Yoroi launches?
  **A** (@Ben): Don't watch just Yoroi - multiple DEXes coming including ErgoDEX, SundaeSwap, others in development.

- **Q** (@AllCloudy): Feedback on Coinfoundry pool?
  **A** (@Glasgow): Ask in @ergo_mining channel for pool-specific questions.

## Links Shared

- [https://ergoplatform.org/en/blog/2021-07-29-ergo-for-android-released/]: Official blog post announcing Android wallet release
- [https://play.google.com/store/apps/details?id=org.ergoplatform.android]: Ergo Android wallet on Google Play Store
- [https://ergoplatform.org/en/blog/2021-07-30-ergos-ageusd-protocol-sigrsv-and-sigusd/]: Blog post explaining AgeUSD protocol, SigRSV and SigmaUSD
- [https://ergosites.github.io/]: Community-created site with infographics and fast read-up on Ergo fundamentals (by @Sgn7kr)
- [https://curiaregiscrypto.medium.com/whats-going-on-behind-the-screens-ergo-weekly-dev-update-july-28th-e548ead67c45]: Weekly dev update July 28th
- [https://yoroi-wallet.com/]: Yoroi wallet for desktop (Ergo support)
- [https://ergonaut.space/en/roadmap]: Ergo roadmap
- [https://ergoplatform.org/en/blog/2021_03_26_eth_vs_erg/]: Blog comparing Ethereum vs Ergo
- [https://twitter.com/Mr_Kwibs/status/1421416835166183433]: Tweet analyzing Ergo as undervalued privacy-oriented project
- [https://www.youtube.com/watch?v=yKY6VwVq02s]: Charles Hoskinson AMA mentioning Ergo at 27:15 timestamp
- [https://sundaeswap-finance.medium.com/liquid-nitrogen-ice-cream-liqwid-x-sundaeswap-dc6bcbe97d1e]: SundaeSwap and Liqwid partnership announcement
- [https://www.banking.senate.gov/imo/media/doc/Brito%20Testimony%207-27-21.pdf]: US Senate testimony transcript on crypto adoption

## Unresolved Questions

- Exact tier 1 exchange identity - speculation on KuCoin vs Kraken vs other top 10 exchanges, will be announced week of August 2nd
- Catalyst Fund 5 voting results for ErgoDEX funding - voting ends August 1st, results timing unclear
- Ledger hardware wallet support timeline - "work in progress, nothing concrete to report" per Armeanio
- ErgoDEX public launch date - waiting on Yoroi dApp connector fix, no specific date given beyond "soon"
- Whether US infrastructure bill crypto provisions will actually apply to miners/users - language unclear, may not apply to everyone per Glasgow
- Ergo performance improvements roadmap - sub-blocks, microblocks, sidechains discussed but no timeline for implementation decisions
- How ETH 2.0 miner migration to Ergo will impact hashrate distribution and pool centralization
- Ergo staking mechanisms beyond LP provision - ErgoDEX will offer options but details not finalized