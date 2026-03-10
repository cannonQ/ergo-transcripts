---
title: "Ergo General Chat — 2020-W41"
date_start: "2020-10-05"
date_end: "2020-10-11"
type: telegram_weekly
channel: general
week: "2020-W41"
source: telegram
message_count: 2585
categories: [wallet, ecosystem, defi, technical, community, mining, governance, nft, marketing]
key_terms: [yoroi, nightly, pending transactions, coinbarn compatibility, magnum, gate.io, voting, airdrop, listing fee, GT token, ergomixer, covert address, tor support, dark wallet, erebus, mempool, double-spend, fee estimation, magnum withdrawal, coinex]
---
## Key Topics Discussed

- **Gate.io listing and voting campaign**: Gate.io listing was confirmed via voting campaign that reached 44+ million votes (target was 10 million). Trading went live on October 10th with ERG/USDT, ERG/BTC, and ERG/ETH pairs. The listing involved 100k ERG from foundation (50k for airdrop/rewards at $0.40 price, rest for market making). Gate.io ranked #4 on CoinGecko, #8 on BTI rating, considered a tier-1 exchange.

- **Yoroi wallet integration completed**: Yoroi browser extension support for ERG launched October 8th after successful nightly testing. Mobile apps and Ledger support still in progress. Users can restore CoinBarn wallets in Yoroi but not Magnum wallets due to different derivation paths. Node wallet 3.3.4+ and Yoroi are compatible on derivation.

- **Mempool and transaction issues resolved**: Multiple issues with exchange withdrawals (CoinEx, Magnum) creating double-spends and stuck transactions. kushti implemented fixes including: mempool filtering for double-spends, tuning explorer pool to store transactions longer, addressing fee/byte sorting issues. Magnum's 0.001 fee was too low for large transactions (15-17 inputs); recommended increasing to 0.01. Most issues resolved by October 9th.

- **ErgoMixer 3.0 released**: New version introduced covert addresses, Tor support, multiple node request distribution, backup/restore, data pruning, UI/UX improvements, backward compatibility, and security bug fix. Mixer uses blockchain to get parameters, enabling non-interactive privacy. Discussed renaming from "ErgoMixer" to "Erebus" (Greek god of darkness/shadow) or "Harpocrates" (god of silence/secrets) to better reflect it's a dark pool rather than traditional one-shot mixer.

- **Upcoming hard fork discussion**: Community considering PoW algorithm tweaks to make mining more memory-hard and ASIC-resistant, restoring home mining capability. kushti emphasized this would likely be the "second and maybe last chance to mine Ergo at home" as successful coins inevitably become dominated by specialized hardware. Fork also includes fixes and support for contractual layer evolution via soft-forks.

- **eUTXO and DEX design differences**: kushti explained that Uniswap-like AMM DEX would be "hard or does not make sense" on eUTXO model. Alternative DEX designs being developed for Ergo/Cardano that will create different business models than Ethereum DeFi. Specific designs to be shared after upcoming announcements.

- **Ergo tip bot deployed**: Community member Albermonte created Telegram tip bot using Telegraf.js and MongoDB, allowing ERG tips in chat. Initial password issues resolved. Bot uses master key for encryption, wallets hashed with user password. Default fee 0.001 ERG, minimum tip 0.003 ERG.

## Important Decisions or Announcements

- [@kushti_ru, msg#58678, 2020-10-10]: "Next week new app" - new application by anon_real to be released
- [@kushti_ru, msg#58052, 2020-10-10]: DEX update coming after new app release
- [@kushti_ru, msg#58053, 2020-10-10]: New partnerships to be announced
- [@kushti_ru, msg#58332, 2020-10-09]: "EF did not bribe gate.io, EF just sponsored airdrop + some other activities. Gate.io is so amazing then! And thanks community! It seems they contacted us after being bombed by user requests!"
- [@kushti_ru, msg#58335, 2020-10-09]: "A (free) listing on another small exchange is done and will be announced soon"
- [@kushti_ru, msg#58336, 2020-10-09]: "And we're in talks with other Tier1 exchanges"
- [@kushti_ru, msg#58913-58915, 2020-10-09]: "3.3.5 release things will be even better" for mempool/transaction handling
- [@kushti_ru, msg#59058, 2020-10-11]: Hard fork still in talks - "code is mostly done, some polishing, final agreements, and activation details are needed"
- [@kushti_ru, msg#59177, 2020-10-11]: NFT developments coming "sooner than expected"
- [@eilemust, msg#59133, 2020-10-11]: Updated ergoplatform.org/en/exchanges and ergoplatform.org/en/wallets pages

## Technical Q&A Worth Preserving

- **Q** (@Samoan Kipto): "Why would developers not create their own Oracles using Goguen on CARDANO? Why use ERG? What are the benefits?"
  **A** (community): Smart contracts not yet implemented on Cardano (Goguen in Q1 2021 pipeline). Oracle Pool is off-chain solution, possibly testing code with extended UTXO model. Approximately 1 year advantage.

- **Q** (community): "Can you explain what bulletproofs are?"
  **A** (@kushti_ru, msg#57125): "It's a kind of technique for zero knowledge which is allowing for some specific [statements] to be proven in zero-knowledge. For example Monero is using for range proofs. It's also possible to prove generic statements. So basically to use them as an alternative to SNARKs, and actually trustless alternatives. There is no trusted setup here in Bulletproof. So it's basically a specific form of a Sigma protocol." Working to have verification done in ErgoScript which would enable variety of zero-knowledge protocols alongside Ergo contracts.

- **Q** (community): "How does ERG market cap at 10% of Cardano bring the coin to $15?"
  **A** (@Overshield, msg#58808): Calculation: ~$3B Cardano market cap x 10% / ~20M ERGs circulating = $15 per ERG. Comparison: Chainlink is 10-15% of ETH market cap, Monero is $2B market cap (~$100 per ERG equivalent).

- **Q** (@David F): "I sent over 100 ergs to one address as a test from yoroi nightly.. then sent over rest of my ergs to same address about an hour later now it just says pending .. is it going to go through?"
  **A** (resolved): Transaction went through. Yoroi marks tx as "Failed" when it's out of mempool but block is not scanned yet - creates temporary confusion.

- **Q** (community): "What happens to spammers' transactions in the mempool if they're not picked up for a long time?"
  **A** (@kushti_ru, msg#57874): Miners sort transactions by fee/transaction byte. Transactions with too-low fees stay in mempool until eventually picked up or flushed. Node has mempool filters (can raise minimum propagation fee rates). Fee estimation API coming to help determine appropriate fees dynamically.

- **Q** (community): "Can same DDoS attack that happened to Bitcoin happen to Ergo?"
  **A** (@kushti_ru, msg#57874): Ergo doesn't have fee market like Bitcoin yet. During spam, users can just raise fees slightly above spammer to get prioritized. Reference client from version 4.0.44 has limits preventing nodes from downloading too many transactions from single peer. Mempool filters available for node operators.

## Links Shared

- [https://github.com/ergoplatform/ergoscript-by-example]: Ergo Playground for contracts with simulated blockchain and examples
- [https://scastie.scala-lang.org/KdWtOMjrTx2zb7wr2shPAA]: Interactive ErgoScript playground with simulated blockchain
- [https://www.ergoforum.org/t/a-simplest-stablecoin/413]: Simplest stablecoin design proposal
- [https://www.ergoforum.org/t/ergomixer-zerojoin-mixer-for-erg-and-tokens/318]: ErgoMixer ZeroJoin technical discussion
- [https://github.com/ergoMixer/ergoMixBack/releases]: ErgoMixer 3.0 release
- [https://eprint.iacr.org/2019/186.pdf]: Academic paper on Monero privacy/inference issues
- [https://www.gate.io/poll/votelist/51]: Gate.io voting poll for ERG listing
- [https://www.gate.io/en/article/17990]: Gate.io official ERG listing announcement
- [https://ergoplatform.org/en/blog/2020_09_25-nfts-on-ergo/]: NFTs on Ergo technical blog post
- [https://radicle.xyz/]: P2P GitHub alternative being considered
- [https://cypra.io/]: Cypra platform potentially allowing ERG earning
- [https://forms.gle/Z34NeK3mwZF8RxwT6]: Community exchange preference survey (not EF endorsed)

## Unresolved Questions

- Ledger hardware wallet integration timeline remains uncertain - @kushti_ru noted "In progress still" with mention of potentially starting Trezor support in parallel
- Exchange listing fees/strategy: discussions around Binance, Kraken, OKEx, Huobi, Kucoin but no concrete decisions. Kucoin noted as "asking for a ton of money"
- Hard fork activation timing and final details still being negotiated for PoW algorithm tweaks
- Website restructure needed but method unclear - @kushti_ru asked "The question is how?"
- Stablecoin timeline has ETA but @kushti_ru noted "not sure it can be made public though atm"
- Fee estimation API "under review" but implementation timeline not specified
- Mobile Yoroi support timeline not specified beyond "soon"