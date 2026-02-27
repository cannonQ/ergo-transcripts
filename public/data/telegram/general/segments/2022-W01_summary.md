# Ergo General Chat — 2022-W01 Summary

## Key Topics Discussed

- **EIP-27 Re-emission Proposal**: Ongoing community discussion about extending miner rewards beyond the initial emission schedule to maintain network security. Proposal requires ~90% miner approval. Community Twitter Spaces scheduled for Friday Jan 7 to discuss the proposal, with multiple participants raising questions about post-emission security guarantees and storage rent projections.

- **Solana (SuSy) Bridge Development**: Bridge is complete on Ergo side, waiting for Solana team to return from vacation to finalize their side. Expected completion within days to 2 weeks maximum. Will bring USDT and other Solana assets to Ergo. Future bridges to BSC, Fantom, Matic, and Harmony also possible with SuSy architecture.

- **Ledger Hardware Wallet Integration**: Ledger support is nearly complete on Ergo's side, now waiting for review from Ledger team. No ETA for completion of review process.

- **New Telegram Tip Bot (@ergotipperbot)**: Replaced old @ergotip_bot with cross-platform bot supporting Telegram, Discord, Reddit, and Twitter. Users can restore wallets from old bot using `/restore <new_bot_password> <old_bot_seed_phrase>` command. Bot supports multiple Ergo native tokens including ERG, SigUSD, SigRSV, COMET, Erdoge, and others.

- **NIPoPoWs (Non-Interactive Proofs of Proof-of-Work)**: Active development continues with NiPoPoW proof verification merged into sigma-rust. First implementation will enable UTXO set snapshots for fast node synchronization. Discussion of NIPoPoWs vs FlyClient—both are technically NIPoPoWs with different tradeoffs, and Ergo's approach has been shown to work with variable difficulty.

- **Kucoin Withdrawal Issues**: Multiple users reported ERG withdrawals from Kucoin stuck with "Transaction with this ID was not found, or it has not entered Mempool yet" message. Issue identified as Kucoin-side problem being worked on, with transactions expected to complete eventually.

- **Emission Milestone**: Ergo crossed 50% of total supply mined (50,353,750 ERG of ~97.7M max supply).

- **Scala vs ErgoScript Discussion**: Technical debate about Scala as foundation for ErgoScript. Scala chosen for interoperability between object-oriented and functional programming, enabling mathematical equations and high-assurance security. Some developers expressed frustration with Scala's complexity and non-standard syntax.

- **ASIC Resistance via Memory-Hardness**: Ergo's Autolykos v2 algorithm uses memory-hardness to resist ASIC mining and keep mining accessible to GPU miners. Non-outsourceable PoW from v1 was removed after research showed it could be bypassed via smart contracts. Focus now on memory requirements and preparations for potential hashrate influx after Ethereum merge.

## Important Decisions or Announcements

- [@kushti_ru, msg#243549-243552, 2022-01-06]: Created fundraising raffle for DarkFund0 DAO, investigating if ergoraffle UI supports P2S addresses for DAO fundraising.

- [@Chris Ray, msg#244151, 2022-01-08]: ErgoLearn rebranding as DeCo (Decentralized Collaboration) to expand beyond education into ecosystem support for eUTXO development.

- [@Glasgow, msg#244195, 2022-01-08]: Old tip bot (@ergotip_bot) replaced with new @ergotipperbot supporting cross-platform tipping and native token support.

- [@Richi, msg#244586, 2022-01-09]: Charles Hoskinson mentioned in Twitter AMA that Cardano is catching up on smart contract approaches Alex/Ergo pioneered, specifically noting Ergo took a more developer-oriented approach.

- [@Andy L, msg#243749, 2022-01-06]: First Weekly Update and AMA of 2022 scheduled for Friday Jan 7 @ 13:00 UTC.

## Technical Q&A Worth Preserving

- **Q** (@darkcastle21): Why are we using Java for some applications? Can't we use libraries like React Native?  
  **A** (@C4lculista): Because that's what the devs use.

- **Q** (@Lee Sin): What are your thoughts on the energy crisis and impact on PoW projects? Any thoughts on switching to Proof of Stake?  
  **A** (@Glasgow): Nope. PoW on purpose.

- **Q** (@Max): Is something similar to Milkomeda sidechain on Cardano also possible for Ergo?  
  **A** (@kushti_ru, via forum posts): Publishing sidechain constructions soon with merge-mined sidechains, trustless pegging via smart contracts, and improved constructions compared to Bitcoin's BIP 301.

- **Q** (@darkcastle21): Could someone do a comparison between ErgoScript and Solidity?  
  **A** (@Chris Ray, msg#244846): Solidity is object-based for Ethereum contracts, chosen for developer familiarity. ErgoScript is based on Scala which supports both object-oriented and functional programming, eliminating barriers for projects requiring mathematical equations. ErgoScript is as interoperable as Scala, just Ergo-specific (for now).

- **Q** (@Jose Costa): What are the advantages of ErgoMixer vs Monero?  
  **A** (@TMR.ΣRG, msg#243346): Ergo is full-service blockchain with smart contracts, mixer makes privacy optional. (@Glasgow, msg#243348): With enough people staking $MIX tokens it can be more anonymous. Even more, less inference issues than Monero (citing https://eprint.iacr.org/2019/186.pdf).

- **Q** (@Max): Are royalty standards also possible for tokens (not just NFTs)?  
  **A** (@Daniel Oravec, msg#243374-243376): Possible to implement for tokens on SC level, but royalties could be bypassed. Box could store royalty data in registers and marketplace could build transactions based on that data, but arbitrary data can be added to registers allowing bypass for ordinary tokens.

- **Q** (@Unknown): How does Ergo succeed in being ASIC resistant?  
  **A** (@Glasgow, msg#244319): Memory-hardness. (@TMR.ΣRG, msg#243320): Links to explanation of memory-hard vs memory-bound functions.

- **Q** (@JCFishing): Is there any future plans to integrate Ergo to Trust Wallet or other popular wallets?  
  **A** (@Gazza, msg#245011): Not really possible—popular wallets are based on account model. eUTXO coins won't work without wallet devs adding support. Likely to get support on Cardano wallets eventually. 4 new Ergo wallets in development currently.

## Links Shared

- [https://ergoraffle.com/raffle/show/26edd44496e7e64553fda406b0148f4b2dc0e0e3ad30cfe12651226df9e7c596]: kushti's test raffle for tips
- [https://youtu.be/Wzsg94wcc_o]: Ergo Pulse Episode 2 with Chris Ray (ErgoLend)
- [https://twitter.com/sigmanaut/status/1478000208902377472]: Sigmanaut tweet thread
- [https://moxie.org/2022/01/07/web3-first-impressions.html]: Critical article on Web3 centralization, discussing implications for decentralization (Reddit discussion: https://www.reddit.com/r/ergonauts/comments/ryx1ej/)
- [https://www.ergoforum.org/t/storage-rent-details/256]: Old forum thread where kushti explains storage rent estimation methodology
- [https://www.reddit.com/r/CoinBase/comments/ry0rhe/]: Unofficial Coinbase Reddit poll for next listing (Ergo vs RVN)
- [https://ergoplatform.org/en/blog/2022-01-04-ergo-mining-rewards-the-first-drop-in-emission/]: Blog post about first emission reduction
- [https://youtu.be/LvaL_7KQ8AQ]: Weekly Update and AMA Jan 7 2022
- [https://twitter.com/i/spaces/1gqxvlDjyWWGB]: Twitter Space on emissions proposal with Haskell_plus, Quokka, Chris Ray
- [https://thecomettoken.com/news-on-a-rock/]: COMET token news aggregator for Ergo ecosystem
- [https://www.reddit.com/r/ergonauts/comments/rzz87w/getblokio_is_launching_proof_of_vote_pov_tokens/]: GetBlok.io Proof of Vote tokens announcement
- [https://twitter.com/mrtn_vienna/status/1480202055667134464]: Ergo TVL milestone tweet
- [https://github.com/mhssamadani/ErgoProfitSharingDapp]: PoW profit sharing dApp repository
- [https://youtu.be/cld-FUUKsa4]: Development update video
- [https://ergonaut.space/en/Guides/yield]: Guide for earning yield with ERG
- [https://ergonaut.space/en/Guides/tip-bot]: Tutorial for new cross-platform tip bot
- [https://sigmaverse.io]: Updated with Sigma Valley, Ergo Tutorials, ab6x Pixel Map, and Ergo Transaction Builder

## Unresolved Questions

- **Post-Emission Security**: Multiple community members asking for concrete estimations of miner rewards after emission ends. Storage rent projections difficult without knowing UTXO set growth and transaction volume. Further discussion and modeling scheduled for next year before emission ends.

- **ErgoScript Learning Curve**: Suggestion raised (@Unknown, msg#244994) to create an ErgoScript game similar to Solidity learning games (like CryptoZombies/CodeAcademy style) to onboard developers. Not yet picked up by any developers.

- **Mining Pool Strategy Post-ETH Merge**: Discussion about whether Ergo will capture significant ETH hashrate. Estimate of half ETH hashrate potentially coming to ERG (hundreds of TH/s), but many variables unknown. Security concerns about 51% attacks before hashrate increases, though current 30+ TH/s peak considered secure enough.

- **Storage Rent Token Support in ErgoMixer**: Token support needs to be added to ErgoMixer, also requires liquidity. Tokenization of mixer discussed for future profit-sharing solution.