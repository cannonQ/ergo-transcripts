## Key Topics Discussed

- **Exchange Listings Announced**: On July 1st (Ergo's 2nd anniversary), three new exchange partnerships were announced: Bitcoin.com, Changelly, and Changelly Pro. A fourth tier-1 exchange remains unannounced. Changelly integration will enable a "Buy ERG" button in Yoroi wallet similar to the existing "Buy ADA" feature. No specific listing dates were provided, though July 2021 was indicated as the target timeframe.

- **ErgoDEX Timeline and Development**: ErgoDEX launch targeted for mid-July 2021. Development was delayed due to developers assisting with the Yoroi dApp connector. The DEX will feature both AMM and order book functionality. No governance token confirmed at launch, though one may be added later if needed for parameter changes.

- **Mobile Wallet Testing**: Android wallet testing began for Ergo, with testers receiving 0.5 ERG tips. Setup instructions posted on Discord pinned messages. The wallet is in test mode only and not for storing actual ERG. Yoroi mobile support for ERG is planned post-Cardano Alonzo hard fork, as Emurgo is prioritizing Cardano smart contracts first.

- **Ledger Hardware Wallet Integration**: Tesseract team moved to next development stage implementing Ledger specs after initial spec process delays. Development includes implementing specs, building basic UI, then full user interface, followed by extensive testing. No specific completion date provided.

- **Storage Rent Mechanism**: Discussion of Ergo's storage rent feature (0.12 ERG per box every 4 years for inactive wallets). Debate about whether fees should increase over time or remain percentage-based rather than fixed. Storage rent designed to return lost coins to circulation and compensate miners post-emission.

- **SigmaUSD/SigmaRSV Protocol**: Community members shared educational infographics explaining the dual-token stablecoin system. SigmaRSV holders can redeem for more ERG when reserve ratio exceeds 400%. Protocol provides price stability through reserve-backed mechanism.

- **NIPoPoWs Research and Development**: New video from Dionysis Zindros released for Ergoversary covering logarithmic mining updates. Node 4.0.12 added new NIPoPoWs tooling. NIPoPoWs enable light clients without downloading full blockchain history, with applications for sidechains and cross-chain bridges.

- **Network Speed and Scalability Discussions**: Community discussions about potential speed improvements including sub-blocks, microblocks, and sidechains. Kushti noted that having a concrete set of existing applications (Oracle Pools, Spectrum DEX, SigmaUSD, Rosen Bridge) makes optimization easier than chains without real usage. Testing network for parameter changes (difficulty, block time) available for community experimentation.

- **UTXO Concurrency Solutions**: Discussion of UTXO DEX concurrency challenges. Ergo solved this with data-inputs. Link shared to mirquir's proposed workaround solution on Reddit. This distinguishes Ergo's approach from other Cardano DEX projects still working on solutions.

- **Mining Pool and Network Decentralization**: New Ergo mining pool launched: https://ergo.leafpool.com/. Community encouraged to help decentralize hashrate. Discussion of merge-mined sidechains where miners can earn both ERG and sidechain tokens. Emission contract would reward mainchain miners for delivering sidechain data.

## Important Decisions or Announcements

- [@Armeanio, msg#156471, 2021-07-01]: Announced three exchange partnerships on Ergoversary (July 1st): Bitcoin.com, Changelly, and Changelly Pro. Fourth tier-1 exchange to be announced later (NDAs preventing disclosure until July 4th).
- [@glasgowm, msg#158775, 2021-07-04]: Confirmed 1 more tier-1 CEX to come and hopefully all listings live this month unless unexpected issues arise.
- [@glasgowm, msg#158984, 2021-07-02]: ErgoDEX should launch "this month" (July 2021).
- [@Armeanio, msg#156612-156614, 2021-07-01]: Yoroi mobile ERG support and buy-button coming post-Cardano Alonzo hard fork, as Emurgo prioritizing Cardano preparation given market cap difference.
- [@kushti, msg#157025, 2021-07-02]: New mining pool added at https://ergo.leafpool.com/ for community to try and help decentralize network.
- [@glasgowm, msg#156688, 2021-07-01]: Yoroi announced Twitter integration will support ERG.

## Technical Q&A Worth Preserving

- **Q** (@unknown): How do storage rents work after max supply is reached if everyone moves their ERG to avoid the fees?
  **A** (@multiple): Storage rent is 0.12 ERG per box (wallet address) every 4 years, not per ERG held. It's designed to return lost/dormant coins to miners. The fee is low enough that active users can easily avoid it, but high enough to clean up abandoned UTXOs. Debate about whether fees should scale over time or use percentage rather than fixed amount.

- **Q** (@S, msg#158468): Node not updating ERG balance after restoring wallet with mnemonic on new SSD?
  **A** (@glasgowm, msg#158473): Node not fully synchronized yet. Must wait for full sync to see accurate balance.

- **Q** (@unknown): Can Ergo transactions be taxed when swapping between cryptocurrencies?
  **A** (@multiple, msg#156676-156683): In UK, swapping one crypto for another is considered a taxable disposal event for capital gains tax purposes, not just when converting to fiat. Applies to all crypto-to-crypto trades.

- **Q** (@unknown): How will miners be rewarded after emission ends if storage rent equals zero?
  **A** (@kushti, msg#158400): Unlikely scenario as not all wallets will be kept active. Transaction fees will also contribute to miner rewards. Ergo's fee market will develop naturally as usage increases.

- **Q** (@unknown, msg#158369): How is Ergo tackling UTXO concurrency challenges for DEXes?
  **A** (@glasgowm, msg#158372-158373): Solved on Ergo using data-inputs. Also referenced mirquir's proposed workaround solution: https://www.reddit.com/r/ergonauts/comments/o2vkat/the_utxodexissue_and_my_idea_of_a_solution/

- **Q** (@rerolabs): Can Android wallet tip bot 12-word seeds be imported to Yoroi?
  **A** (@Nik_An, msg#157107-157121): Tip bot requires 15 words but only provides 12. Workaround: restore on Yoroi desktop using 12 words (works there).

- **Q** (@unknown): What are bulletproofs and can they be verified in ErgoScript?
  **A** (@kushti, msg#157024-157036): Bulletproofs are zero-knowledge proof technique allowing specific statements to be proven without trusted setup (unlike SNARKs). Can be used for range proofs (like Monero) or generic statements. If verification can be done in ErgoScript, enables variety of zero-knowledge protocols alongside Ergo contracts for hybrid on-chain/off-chain execution without data disclosure.

- **Q** (@unknown): How will merge-mined sidechains work for miners?
  **A** (@kushti, msg#157681-157694): Miners can earn both mainchain ERG and sidechain tokens. Emission contract on mainchain rewards miners for delivering sidechain data. Trustless pegging via smart contracts. Ergo's approach potentially better than Bitcoin's BIP-301 due to clearer security model and ability to do trustless relays. Can enable CPU mining on sidechains while main chain remains GPU.

## Links Shared

- [https://finance.yahoo.com/news/ergo-unique-blockchain-based-open-184500937.html]: Yahoo Finance article about Ergo platform (posted for Ergoversary)
- [https://www.youtube.com/watch?v=e3DDlihe0Tk]: Ergoversary 2021 Team AMA video premiere
- [https://www.youtube.com/watch?v=s05ypkSC7gk]: Dionysis Zindros video on logarithmic mining update and NIPoPoWs
- [https://ergoplatform.org/en/blog/2021-07-01-lets-start-the-discussion/]: Blog post initiating discussion on network speed improvements
- [https://www.reddit.com/r/ergonauts/comments/obgplp/ergoversary_2021_team_ama_and_more/]: Reddit thread with Ergoversary AMA questions and summary
- [https://curiaregiscrypto.medium.com/whats-going-on-behind-the-screens-ergo-weekly-dev-update-june-30th-b2fa26b5d4e0]: Weekly dev update covering ErgoTeam tool, ErgoFund improvements, Ledger integration progress, and mining pool developments
- [https://ergoplatform.org/en/blog/2021-06-29-2nd-ergoversary-core-things-early-adopter-should-know/]: Ergoversary blog post summarizing 2 years of development
- [https://www.ergoforum.org/t/a-solution-for-staking/1057]: Forum post discussing staking solution implementation
- [https://github.com/glasgowm148/awesome-ergo/blob/master/pages/wallets.md]: Comprehensive wallet documentation
- [https://ergoplatform.org/en/exchanges/]: Official list of exchanges supporting ERG
- [https://ergonaut.space/en/ErgoAuctions]: Tutorial guide for minting and auctioning NFTs on Ergo
- [https://www.healthline.com/health/mast-cell-activation-syndrome]: Medical reference shared in off-topic health discussion
- [https://www.jacionline.org/article/S0091-6749(14)02927-3/fulltext]: 2015 medical paper defining MCAS disorder cluster
- [https://github.com/MrStahlfelge/ergo-wallet-android/releases/download/v0.6.2105/app-ergomainnet-release.apk]: Android wallet APK for testing
- [https://erg.urlwallet.org/]: Instant URL wallet for Ergo
- [https://www.reddit.com/r/ergonauts/comments/o2vkat/the_utxodexissue_and_my_idea_of_a_solution/]: mirquir's proposed solution to UTXO concurrency challenge
- [https://buildingoncardano.com/#/]: Directory of projects building on Cardano ecosystem
- [https://ergo.leafpool.com/]: New Ergo mining pool for network decentralization
- [https://twitter.com/chepurnoy/status/1390791525332885504]: Kushti's tweet with official Ergo logo resources
- [https://www.dropbox.com/sh/m1ht6llbzt2oher/AAA8cdN5hABCbTP-67YEGdWVa?dl=0]: Dropbox folder with community content for BitTube
- [https://t.me/CardanoCommunityMarketplace]: Telegram group for vetting Cardano ecosystem projects
- [https://www.reddit.com/r/cardano/comments/nec9w3/sundaeswap_is_a_decentralized_exchange_based_on/]: Reddit thread with critical discussion of SundaeSwap
- [https://twitter.com/SebastienGllmt/status/1396492945033883651]: Sebastien Guillemot calling out hype marketing in Cardano DEX space

## Unresolved Questions

- Exact listing dates for announced exchanges (Bitcoin.com, Changelly, Changelly Pro) remain TBD, though July 2021 targeted.
- Identity and announcement timing of fourth tier-1 exchange partnership still under NDA.
- ErgoDEX governance token mechanism and distribution not finalized—may be added later if needed for parameter changes.
- Timeline for Yoroi mobile ERG support depends on Cardano Alonzo hard fork completion—post-Alonzo but no specific date.
- Ledger hardware wallet integration timeline unclear beyond "moving to next development stage" with implementation of specs.
- Trezor hardware wallet support uncertain—depends on Trezor team prioritization, currently only supports top 30 coins.
- Final decision on storage rent fee structure (fixed vs. scaling vs. percentage-based) not resolved in community discussions.
- Network speed improvement path (sub-blocks vs. microblocks vs. sidechains) requires further community discussion and testing—testnet available but needs leadership to organize experiments.
- Sidechain constructions publication pending—kushti mentioned publishing "soon" to forum but timing not specified.
- Fee market development and transaction fee estimation API underutilized by applications—needs testing and integration work.