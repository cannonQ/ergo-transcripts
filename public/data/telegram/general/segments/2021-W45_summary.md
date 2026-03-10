---
title: "Ergo General Chat — 2021-W45"
date_start: "2021-11-08"
date_end: "2021-11-14"
type: telegram_weekly
channel: general
week: "2021-W45"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — Week 2021-W45 Summary

## Key Topics Discussed

- **ErgoDex Launch & Status**: ErgoDex moved out of beta on mainnet (not testnet). UI launched, with AMM pools live for ERG/SigmaUSD and ERG/SigmaRSV. Order book DEX (most technically and legally complex component) estimated for Q2 2022. Concentrated liquidity feature planned for Q1 2022. eUTXO architecture allows wallets to send one transaction per block—a problem solved by ErgoDex before it was widely discussed.

- **Auction House v2 Release**: Ergo Auctions v2 launched with mint-and-auction-in-one-place functionality, built-in royalty support, and improved UI. Artist guidelines published. V1 deprecation in progress. Some requests for content moderation and NSFW filtering noted but unresolved.

- **CoinEx Withdrawal Issues**: Prolonged wallet maintenance problems spanning ~9 days (2021-11-08 to 2021-11-14). Withdrawals suspended, restarted briefly, then suspended again. Pattern of sketchy behavior flagged: false "close time" reporting; stuck transactions; 37+ hours of hidden downtime. Community advised caution; some users migrating to KuCoin via USDT/TRC20.

- **Ledger Hardware Wallet Integration**: Development status: Tesseract backend completed (May–Sep 2021), now in Yoroi frontend integration stage. Early alpha available for devs. Timeline: "a mile off" but actively being worked on by Emurgo dev with Ergo Foundation support.

- **Wallet Ecosystem**: Android wallet (by community member) supports cold-wallet mode, getting ported to iOS. Via Wallet works on iOS but doesn't support native assets (SigmaUSD, tokens). Yoroi Nightly required for ErgoDex access (standard Yoroi extension not yet compatible—expected in "a couple of weeks"). Paper wallet and cold-wallet options available as interim solutions.

- **Strategic Advisor Appointment**: Dan Friedman (IOHK business developer, helped launch Cardano ICO in Japan) appointed as advisor to Ergo Foundation board. Bloomberg announcement 2021-11-10. Signals serious marketing push and business development focus.

- **Yoroi dApp Connector Branded "Powered by Ergo"**: Ergo Foundation developed the Yoroi dApp Connector; after dcspark spun off, Ergo Foundation assigned full-time developer to Emurgo for Yoroi integration. Connector used by Sundae Swap (Cardano) and other DEXes, giving Ergo visibility beyond its ecosystem.

- **Emission Schedule & Treasury Debate**: kushti's proposal for slower emission retargeting (soft fork) under community discussion. Treasury reward reduction progressing: 7.5 ERG → 4.5 ERG → 1.5 ERG. Community vote mechanism to be formalized; mining pools currently vote on behalf of miners; smart pools in development may return direct miner voting.

- **Rosen Bridge Development**: Cross-chain bridge to Ethereum, BSC, Solana planned before Cardano (due to PAB maturity issues). Wormhole integration for trustless cross-chain support mentioned. No timeline given.

- **Oracle Pools**: Oracle Pool v1 (ERG/USD, ERG/ETH) operational for weeks. Oracle Pool v2 running for Dexy Gold with GORT rewards. Plans to build out native Ergo oracles using Chainlink partnership as template; Palmyra ecosystem focus.

- **Bulletproofs & Zero-Knowledge Contracts**: kushti exploring bulletproof verification in ErgoScript. Goal: enable compact Sigma protocols for range proofs and generic zero-knowledge statements without trusted setup. Applications: verifiable credentials, privacy-preserving DeFi, hybrid on-chain execution with revealing only needed data.

- **Storage Rent & Demurrage**: Mentioned as mechanism being designed; no finalized implementation. Community discussions ongoing on forum.

- **Testnet Status**: Testnet explorer shows last block 3 days old (as of 2021-11-14). Requires miners to keep alive; dev discussions on Discord/Matrix.

- **Node Syncing & Performance**: Initial sync takes 6–8 hours on decent hardware. Database ~10GB. Light node support and UTXO snapshots in development (v4.0.17+). v4.0.16 includes edge case bug fixes; users experiencing API key errors advised to upgrade.

## Important Decisions or Announcements

- [@Glasgow｜WON'T DM, msg#228559, 2021-11-10]: Dan Friedman appointed strategic advisor to Ergo Foundation board; former IOHK business developer; Bloomberg press release published.

- [@Armeanio, msg#228362, 2021-11-09]: "After the dcspark crew spun off their own company, the Ergo Foundation has a full time developer working with Emurgo on Yoroi." Full-time Ergo dev now embedded with Emurgo.

- [@Glasgow｜WON'T DM, msg#228233, 2021-11-09]: Auction House v2 launched; artist guidelines published; new URL https://ergoauctions.org.

- [@Unknown, msg#228286, 2021-11-09]: ErgoDex roadmap: Concentrated liquidity Q1 2022 → Order book DEX Q2 2022. Research on interoperability hasn't started yet. UI delivered (no more beta interfaces).

- [@Glasgow｜WON'T DM, msg#228877, 2021-11-11]: Token burn feature now live at https://tokenminter.ergo.ga/burn.html; SigmaUSD and all tokens burnable.

- [@Unknown, msg#228991, 2021-11-11]: Ergopad.io updated: users can now connect Ergo wallet and view asset dashboard.

- [@Glasgow｜WON'T DM, msg#228936, 2021-11-11]: Emission debate linked to kushti's proposal for slower schedule: https://www.reddit.com/r/ergonauts/comments/qpzzcl/kushtis_proposal_for_slower_emission_schedule/

## Technical Q&A Worth Preserving

- **Q** (@Mongo | Will never DM you, msg#227871): "Are tx fees set in stone, say erg shoots up to 5-10k would tx fees still be 0.001 erg?"
  **A** (@TMR.ΣRG, msg#227872): "Nope, they can be voted on by miners"

- **Q** (@Ian Lee, msg#228142): "I noticed ergo auction website is very slow to load up. Like just now I tried to load auction website, it took around 1 minute to load up."
  **A** (@Glasgow｜WON'T DM, msg#228143): "loads in a couple seconds for me - v2 is being switched on" (Note: v2 was experiencing DDoS attack 2021-11-10)

- **Q** (@ニック ᴏʟᴇᴜᴍ, msg#228507): "Let's imagine you are an investor with $1M to invest. Will you trust a beta android wallet over a hardware device?"
  **A** (@Glasgow｜WON'T DM, msg#228510): "dev from jan ran away, tessaract implemented the backend may-sep or something and yoroi dev has been integrating into the front-end past few weeks"

- **Q** (@TMR.ΣRG, msg#228236): "eutxo allows wallets to only send one txn per block. was solved in 2019 lol"
  **A** (@Andy L, msg#228237): "something that ergodex fixed before it was even talked about"

- **Q** (@Unknown, msg#228363-228365): "Is it by design that when you preform a swap on ergodex your erg balance will go to 0 until the transaction is finalized?"
  **A** (@TMR.ΣRG, msg#228371): "eutxo sends the full box amount and returns the unspent amount" → Clarification needed: this should be in dApp UX documentation for new users to prevent alarm.

- **Q** (@Wolf9466, msg#228944-228946): "Are there any bounties for stuff like Autolykos2 implementations/test vectors/other related stuff?"
  **A** (@Glasgow｜WON'T DM, msg#228945): "Not specifically but if you have ideas you can always email a proposal directly to team@ergoplatform.org" → Note: Wolf9466's test vectors already credited in official docs.

- **Q** (@John Seastar3, msg#229109): "The full node wallet actually looks difficult to set up... are there other options?"
  **A** (@TMR.ΣRG, msg#229112): "via wallet works on IOS, but doesnt support native assets. The android wallet was created by a community member and has gotten good reviews. It can even be set up to work as a cold wallet. I also hear it's getting ported over to IOS"

- **Q** (@John Seastar3, msg#229118): "Via wallet let me add ERG easily. Are you speaking of ADA when you say 'native assets'?"
  **A** (@TMR.ΣRG, msg#229119): "no, i mean like sigUSD, sigRSV, or tokens like erdoge"

- **Q** (@Unknown, msg#228977-228978): "Ergo support how much TPS?"
  **A** (@Unknown, msg#228978): "Complicated answer, since each tx can also carry out hundreds of outputs" → https://ergoplatform.org/en/blog/2021-10-29-ergo-ecosystem-scaling-solutions/ has scaling details.

- **Q** (@Ilya, msg#228438): "I found out that Ergo transactions are relatively slow. Is it because the block size, epoch length?"
  **A** (@Glasgow｜WON'T DM, msg#228439): "block time of 2 minutes"

- **Q** (@Minh Hòa 🦴, msg#229451-229452): "What is the best wallet for erg on mobile that I can be able to store my ergo and buy nfts? Can erg also be staked?"
  **A** (@First Last, msg#229453-229454): "No [staking], but ErgoLend is a dApp being worked on... You can also be a liquidity provider for ErgoDex and earn trading fees"

- **Q** (@Unknown, msg#228280): "Ergo is a token on BEP20 network?"
  **A** (@Unknown, msg#228280): "We have our own blockchain, it is not a token"

## Links Shared

- [https://ergoplatform.org/en/wallets/]: Official wallet list with all supported options
- [https://ergonaut.space/en/roadmap]: Community-maintained roadmap
- [https://ergoplatform.org/en/blog/2021-06-09-building-ergo-ergoscript/]: ErgoScript building guide
- [https://ergoplatform.org/en/blog/2020-10-12-learn-ergoscript-by-example/]: Learn ErgoScript by example
- [https://beincrypto.com/learn/ergo-crypto/]: BeInCrypto comprehensive Ergo overview
- [https://beincrypto.com/learn/ergodex/]: BeInCrypto ErgoDex guide (noted as having some inaccuracies on token details)
- [http://docs.ergoplatform.org/dev/scs/ergoscript/]: Official ErgoScript documentation
- [https://www.ergoforum.org/t/ergo-emission-details-retargeting-via-a-soft-fork/2778]: Emission retargeting proposal forum post
- [https://www.ergoforum.org/t/auction-house-v2/2931]: Auction House v2 general post
- [https://www.ergoforum.org/t/artist-guideline/2929]: Artist guidelines for Auction House v2
- [https://ergoauctions.org]: Auction House v2 live site
- [https://app.ergodex.io]: ErgoDex main app
- [https://beta.ergodex.io]: ErgoDex beta interface (legacy)
- [https://tokenminter.ergo.ga/burn.html]: Token burn tool
- [https://explorer.ergoplatform.com/en/oracle-pools-list]: Oracle pools tracker
- [https://ergoplatform.org/en/blog/2021-10-29-ergo-ecosystem-scaling-solutions/]: Ergo scaling solutions overview
- [https://ergonfts.org]: NFT portfolio tracker
- [https://sigmaverse.io]: dApps directory
- [https://t.me/ergo_news]: Ergo news Telegram channel
- [https://t.me/ergodex_community]: ErgoDex community chat (not announcements-only)
- [https://t.me/ergosupport]: Ergo support Telegram
- [https://reddit.com/r/ergonauts/]: r/ergonauts subreddit
- [https://github.com/ergoplatform/grow-ergo]: Ergo bounties repository
- [https://matrix.to/#/!VVhziMYmbJHLJiqlQc:matrix.org?via=matrix.org]: Matrix bridge for chat
- [ircs://agora.anarplex.net:14716/#ergo]: IRC secure tunnel
- [irc://agora3cdw6kdty5y.onion:6667/#ergo]: Tor IRC endpoint
- [https://www.ergoforum.org/t/magnum-wallet-closing-in-20-days/468]: Magnum wallet migration guide
- [https://www.youtube.com/watch?v=VjOZSPgkBl8]: Magnum wallet recovery video
- [https://www.ergoforum.org/t/bounties-for-dapp-examples/2946]: dApp example bounties
- [https://ergopad.io]: ErgoPad launchpad (in development)
- [https://t.me/ErgoLend]: ErgoLend project chat
- [https://t.me/ergopad_chat]: ErgoPad project chat

## Unresolved Questions

- **Ledger Timeline**: No firm release date for Ledger support; "early alpha" available but integration still in progress with Yoroi/Emurgo.

- **Regular Yoroi Compatibility with ErgoDex**: Expected "in a couple of weeks" (as of 2021-11-14) but no commit/PR timeline given.

- **CoinEx Withdrawal Reliability**: Pattern of maintenance and failures flagged but no official Ergo Foundation statement on whether to recommend users avoid the exchange.

- **NSFW Content on Auction House**: Discussed as a challenge for decentralized systems. MrStahlfelge suggested user-flagging + auto-blur model. No implementation decided. Luivatra mentioned AI classification as option but not adopted.

- **Audio/Video NFT Minting on v2**: Ergo Utils disabled this feature upon v2 launch. Method to mint audio/video NFTs on new Auction House unclear.

- **Testnet Viability**: Last block 3 days old (2021-11-14). Requires miners to sustain. No plan announced to restart or maintain it actively.

- **Emission Reduction Implementation Timing**: When will the first lock-up period (4 years of non-movement required for miner rewards) be enabled? Kushti noted it's "planned before emission ends" but no date. Voting mechanism still informal.

- **Rosen Bridge Cardano Timeline**: Cross-chain bridge to Cardano delayed pending PAB maturity. No target quarter given.

- **Storage Rent / Demurrage Finalization**: Design phase ongoing; implementation details TBD.

- **ErgoDex Native Token**: Will ErgoDex have its own governance token? No announcement; CW noted it will use ERG for tx fees but "no info yet" on separate token.

- **Binance Listing**: Discussed repeatedly. No announcement; all discussions under NDA per community members.