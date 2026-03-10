---
title: "Ergo General Chat — 2021-W46"
date_start: "2021-11-15"
date_end: "2021-11-21"
type: telegram_weekly
channel: general
week: "2021-W46"
source: telegram
message_count: 0
categories: [community, ecosystem, defi, wallet, bridges, mining, marketing, technical, nft, governance]
key_terms: [COMET, meme coin, community values, fun vs serious, AMA, weekly updates, Kushti, Dan Friedman, YouTube, Binance, exchange listings, market access, liquidity, ErgoDex, eUTXO, AMM, liquidity pools, launch, Yoroi, dApp connector]
---
## Key Topics Discussed

- **Weekly AMA with kushti and Dan Friedman**: The first weekly Ergo AMA was held on November 19th, 2021 at 13:00 UTC via YouTube live stream. Technical difficulties with bandwidth caused the stream to freeze initially, requiring a switch to audio-only format via Telegram. The AMA covered topics including Binance listing progress, marketing plans, oracle pools, Ledger integration status, wallet development, NIPoPoWs, eUTXO limitations, emission schedule soft fork, Bitcoin interoperability via Taproot, Hydra implementation potential, and developer education initiatives.

- **Bitcoin Taproot Upgrade and Ergo Integration**: Discussion of how Bitcoin's Taproot upgrade (adding BIP340 Schnorr signatures and simple Sigma protocols) enables interoperability with Ergo, potentially allowing private cross-chain atomic swaps and sidechaining. Implementation requires work on Schnorr adaptor signatures, with documentation available but need for developers with high-level cryptography skills. AnetaBTC project announced aiming to bring wrapped BTC to Ergo and Cardano in a decentralized, trustless manner using Ergo's Sigma protocols.

- **GetBlok Decentralized Mining Pool Launch**: Ergo's first decentralized smart contract-based mining pool went live, developed from ErgoHack. The pool offers traditional mining with smart contract integration for transparent payment distribution, subpooling features for groups to combine hashpower in solo mining efforts, and high-performance distributed architecture in global regions. The pool successfully completed a raffle to fund initial operations.

- **ErgoDEX Launch and Issues**: ErgoDEX officially launched as the first DEX on eUTXO architecture. Users experienced issues with Yoroi dApp connector version 0.7.501 breaking compatibility with ErgoDEX. The fix was released but stuck in Chrome store review process before being approved. Discussion of missing features like APY display, transaction history tracking, and the need for better documentation and UI improvements.

- **Wallet Development Progress**: iOS wallet (Android port) entered private beta testing phase with release expected around Christmas. Yoroi dApp connector issues being addressed. Discussion of the need to improve ErgoWallet or reduce reliance on Yoroi given performance issues with many transactions. ErgoPay planned to reduce dependence on Yoroi dApp connector.

- **Marketing and Business Development with Dan Friedman**: Dan Friedman outlined plans including: hiring marketing firm for professional campaigns, working toward Binance and other Tier 1 exchange listings (no specific timeline given), market making services (same firm used by ETC and COTI), establishing Ergo presence on other DEXes like PancakeSwap and Uniswap (timeline of weeks to months), building bridges to other chains, and creating educational content and developer programs.

- **Oracle Pools Development**: Discussion of Oracle Pool v1 (run by EF members and community) and Oracle Pool v2 (running for Dexy Gold with GORT rewards). Plans mentioned to potentially use capital from token sales to build out Ergo oracle infrastructure and tooling, making them more secure and native to Ergo ecosystem. Oracle pools positioned as alternative/complement to Chainlink.

- **Emission Schedule Soft Fork**: Community discussion ongoing about soft forking the emission schedule to extend miner rewards beyond 2027. Requires miner voting for approval. Reddit post linked discussing the update process.

- **Storage Rent Mechanism**: Clarification that Ergo isn't deflationary like Bitcoin because storage rent mechanism gradually recycles inaccessible ERG (from lost keys) back into circulating supply, preventing permanent loss of coins.

## Important Decisions or Announcements

- [@Andy L, msg#231206, 2021-11-19]: Weekly AMAs with kushti and Dan Friedman will occur every Friday at 13:00 UTC going forward on YouTube

- [@Armeanio, msg#231737, 2021-11-21]: New weekly developer update video format launched, ~20 minutes every Sunday covering ecosystem developments

- [@Glasgow｜WON'T DM, msg#231768, 2021-11-21]: AMA transcript published to r/ergonauts for those who missed the live stream

- [@ArØhβΣ @Arohbe, msg#231526, 2021-11-19]: GetBlok decentralized mining pool officially launched and went live

- [@Gazza ｜WON'T DM, msg#231598/231599, 2021-11-20]: Yoroi dApp connector fix confirmed working, new Yoroi Nightly version approved and released

- [@Glasgow｜WON'T DM, msg#231391, 2021-11-19]: iOS wallet in private beta testing, release expected around Christmas timeframe

## Technical Q&A Worth Preserving

- **Q** (@YaMaN, msg#231011): Is it too hard to improve ErgoWallet instead of relying on Yoroi? Yoroi has bad performance for Ergo, doesn't have Android/iOS support, wallet is slow and freezes with many transactions, dApp connector takes too long to update.
  **A** (@Glasgow｜WON'T DM, msg#231024): ErgoWallet isn't made by Ergo team, it's a community wallet that's been unmaintained since late 2019. Node/wallet improvement is one of the main focuses. ErgoPay is planned so Yoroi dApp connector won't be needed.

- **Q** (@Unknown, msg#231091): Is there anything in the timeline to begin work on Ergo → Bitcoin interoperability?
  **A** (@Armeanio, msg#231636/231640): The path is known with decent documentation. Requires high-level cryptography skills to create Schnorr adaptor signatures. Looking for developers with that ability. Komodo has been market leader in atomic swaps (came from NXT community, now BPSAA partner). Some testing done in 2020 but more work needed.

- **Q** (@Unknown, msg#231546): How much power do core devs have over ERG? Can devs change parameters and everyone running a node will update?
  **A** (@Gazza ｜WON'T DM, msg#231548): No, needs to be voted on by miners. (@Gazza ｜WON'T DM, msg#231552): Believes it's full node solo miners but not 100% certain on exact voting mechanism.

- **Q** (@Tommy, msg#231384): When can we expect a solution to hold ERG and earn rewards like COTI treasury staking?
  **A** (@Glasgow｜WON'T DM, msg#231386/231387): Ergo is PoW not PoS. Closest thing is Profit Sharing solution in development. Other options include ErgoDEX AMM pools, SigmaUSD/SigmaRSV, CoinEx AMM pool, gate.io AMM pool, and KuCoin Grid-Bots (with understanding of impermanent loss risks).

- **Q** (@Crypto Quokka, msg#231185): How fast can we implement Hydra after Cardano implements it?
  **A** (Discussed in AMA): Ergo has extension section in code allowing implementation of wide variety of scaling solutions including Hydra. Can be done with velvet or soft forks.

- **Q** (@Jesper Agger, msg#231029): Any thoughts on the ASIC issue for Autolykos?
  **A** (@kushti_ru, in AMA): Mentioned FPGAs (field programmable gate arrays) as consideration alongside GPUs in mining discussion.

- **Q** (@Ilya, msg#231732): Why are some addresses in Ergo Explorer so long?
  **A** (@Ilya Oskin, msg#231733/231735): PayToScript (P2S) addresses. A P2S address is essentially a serialized script, so its length isn't fixed.

- **Q** (@Unknown, msg#231428): What about profitability of decentralized mining pools? What about latency? Are such pools similar to traditional ones?
  **A** (@ArØhβΣ @Arohbe, msg#231432): Profitability can technically be controlled through the pool. Will offer traditional mining with smart contract integration for transparent block payout distribution vs pool operator having complete control. Providing subpooling features for groups to combine hashpower in solo mining. Architecture is high-performance distributed in global regions for low latency. Not similar to traditional pools - brings much higher level of transparency and user interaction.

## Links Shared

- [https://www.youtube.com/watch?v=_2HwYDTfzbE]: First weekly AMA recording with kushti and Dan Friedman (audio-only due to technical issues)
- [https://ergoplatform.org/en/blog/2021-11-17-bitcoin-taproot-upgrade-and-ergos-sigma-protocols/]: Blog post explaining Bitcoin's Taproot upgrade and implications for Ergo interoperability
- [https://ergoplatform.org/en/blog/2021-11-19-ergo-smartpools-and-decentralized-mining/]: Blog post announcing GetBlok decentralized mining pool launch
- [https://www.anetabtc.io/]: AnetaBTC project website for wrapping BTC on Ergo and Cardano
- [https://twitter.com/AdaverseTCA/status/1460276416164077570]: Adaverse interview with kushti and Armeanio
- [https://twitter.com/DanielTetsuyama]: Dan Friedman's Twitter for contact
- [https://medium.com/crypto-garage/adaptor-signature-schnorr-signature-and-ecdsa-da0663c2adc4]: Technical article on adaptor signatures and Schnorr signatures
- [https://www.reddit.com/r/ergonauts/comments/qwr0aw/emission_softfork_update/]: Reddit post on emission schedule soft fork update
- [https://www.reddit.com/r/ergonauts/comments/qyv73g/ama_transcript_with_kushti_and_daniel_friedman/]: Full AMA transcript
- [https://www.reddit.com/r/ergonauts/comments/quaxgq/list_of_ergo_projects_still_in_dev_that_you_might/]: Community-compiled list of Ergo projects in development
- [https://www.reddit.com/r/ergonauts/comments/qyczj4/announcing_ergolearn_come_learn_the_beginnings_of/]: ErgoLearn announcement for developer education program
- [http://docs.ergoplatform.org/dev/scs/ergoscript/]: ErgoScript by example documentation
- [https://github.com/anon-real/ergo-js-template]: Ergo JavaScript template for dApp development
- [https://ergo.getblok.io/]: GetBlok decentralized mining pool
- [https://www.youtube.com/watch?v=4kyFAqPcjYA]: Weekly developer update video by Armeanio
- [https://ergoplatform.org/en/wallets/]: Official Ergo wallets page
- [https://github.com/ergoplatform/ergo/wiki/Set-up-a-full-node]: Full node setup guide

## Unresolved Questions

- Exact timeline for Binance and other Tier 1 exchange listings remains unclear - Dan Friedman indicated work is ongoing with experts hired to help with the process but no specific dates given
- Name of the market making company Dan Friedman mentioned in AMA was cut off in recording - only noted it's the same firm used by ETC and COTI
- How quickly bridges to other chains (PancakeSwap, Uniswap) can be completed - Dan indicated "weeks to months" but no firm timeline
- Details on how Ergo Foundation will be structured and funded long-term
- Specific implementation details for ErgoPay to reduce Yoroi dApp connector dependence
- Whether Hydra can be implemented on Ergo and how quickly after Cardano implementation
- Exact mechanism for miner voting on protocol changes like emission schedule soft fork
- Timeline for additional oracle pools beyond Dexy Gold
- Developer education program (ErgoLearn) structure and scheduling details still being worked out