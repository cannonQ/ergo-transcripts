---
title: "Ergo General Chat — 2020-W23"
date_start: "2020-06-01"
date_end: "2020-06-07"
type: telegram_weekly
channel: general
week: "2020-W23"
source: telegram
message_count: 93
categories: [ecosystem, technical, defi, wallet, marketing, governance, bridges, community]
key_terms: [airdrop, CoinsBit, distribution, token allocation, list verification, ErgoScript, Scala, smart contracts, developer education, syntax, version 3.2.7, protocol compatibility, client update, backward compatibility, mixer, tokens, privacy, ErgoForum, microwallet, URLwallet]
---
# Ergo General Chat Summary — 2020-W23 (2020-06-01 to 2020-06-07)

## Key Topics Discussed

- **Airdrop Distribution Timeline**: CoinsBit airdrop lists being cleaned up and sent back to exchange for distribution within few days. Lists were still under review over the weekend of June 1-2, with distribution expected to follow.

- **Client Version 3.2.7 Finalization**: Version 3.2.7 was finalized as a client update. The protocol itself had remained stable for 11 months (since 3.0.0), though running older versions would be inefficient.

- **Token Mixer Launch**: Tokens mixer implementation went online and was documented on the Ergo forum.

- **Lightweight Wallet**: A new microwallet (https://erg.urlwallet.org/) was released for lightweight interaction with Ergo, with caution against storing significant amounts there.

- **ErgoScript Learning Path**: Discussion on whether Scala knowledge is a prerequisite for learning ErgoScript. Consensus: not mandatory; 2-3 hours of basic Scala overview helpful but ErgoScript has its own syntax found in many modern languages.

- **Distributed Signatures Implementation**: Testing of distributed signatures was underway.

- **Exchange Listing Issues**: Delta app tracker not updating ERG price due to outdated ticker (EFYT) and stale trading pair data; community requested team contact Delta to add current ERG pairs from Hotbit, ProBit, or Citex.

- **Community Voting**: Ergo ranked #2 in Sistemkoin coin voting (KYC required); community encouraged to nominate Ergo in CoinDeal voting.

- **Explorer Updates**: Unconfirmed transaction interface merged into Ergo Explorer master branch, scheduled for deployment.

- **Site Search**: Search functionality added to ergoplatform.org.

## Important Decisions or Announcements

- [@kushti khushi, msg#35371, 2020-06-01]: Developers meeting scheduled over Discord on June 1, 13:00 UTC.

- [@kushti khushi, msg#35372, 2020-06-01]: General community meeting with updates scheduled for June 10, 13:00 UTC.

- [@kushti khushi, msg#35428, 2020-06-02]: Client version 3.2.7 finalized.

- [@kushti khushi, msg#35429, 2020-06-02]: General developers meeting scheduled for Wednesday (June 3), 13:00 UTC over Discord.

- [@Unknown, msg#35460, 2020-06-02]: CoinsBit airdrop list review and approval over weekend, distribution "probably next week"; exchange already holds coins.

- [@kushti khushi, msg#35497, 2020-06-03]: Tokens mixer is online.

- [@kushti khushi, msg#35508, 2020-06-03]: New microwallet released at https://erg.urlwallet.org/ for lightweight interaction; warning against storing significant amounts.

- [@kushti khushi, msg#35585-586, 2020-06-04]: Airdrop lists to be sent back to CoinsBit within nights or following day; CoinsBit will handle distribution.

- [@bez, msg#35645, 2020-06-05]: Team to reach out to Delta team via Telegram regarding ticker and price update issues.

- [@Dmitry Usov, msg#35603, 2020-06-04]: Unconfirmed transaction interface merged into Ergo Explorer master; deployment scheduled for following day.

- [@Dmitry Usov, msg#35738, 2020-06-07]: Site search added to https://ergoplatform.org/en/search/.

## Technical Q&A Worth Preserving

- **Q** (@Unknown): Is it good to learn Scala first before learning ErgoScript? Currently studying JavaScript as a beginner.
  
  **A** (@scalahub, msg#35481): Not mandatory but 2-3 hours of basic Scala overview helpful.
  
  **A** (@kushti khushi, msg#35483): Scala may not even be necessary; ErgoScript has similar syntax to many modern languages.

- **Q** (@Unknown, msg#35480): Relationship between client version and protocol stability.
  
  **A** (@kushti khushi, msg#35439-441): 3.2.7 is a client version; the protocol has been the same for 11 months. Theoretically older clients like 3.0.0 can still run, though inefficiently.

- **Q** (@Unknown, msg#35709-710): How can Ergo enable cross-chain token movement and mixing?
  
  **A** (@Unknown): Ergo has NIPoPoWs and potential to implement TxChain (https://eprint.iacr.org/2020/580), allowing blockchains to interact and trustlessly move tokens via wrapped tokens. ErgoMix requires multiple rounds, so pre-mixing or alternative solutions needed.

## Links Shared

- [https://twitter.com/ergoplatformorg/status/1267341526344126464]: Announcement regarding airdrop (2020-06-01).

- [https://twitter.com/chepurnoy/status/1267951650662219776]: Kushti's tweet (2020-06-02).

- [https://twitter.com/chepurnoy/status/1268073111267815426]: Post on ErgoScript syntax (2020-06-03).

- [https://www.ergoforum.org/t/tokens-mixer-is-done/219/4]: Tokens mixer forum discussion (2020-06-03).

- [https://twitter.com/ergoplatformorg/status/1268190088938369026]: General announcement (2020-06-03).

- [https://erg.urlwallet.org/]: New lightweight microwallet (2020-06-03).

- [https://sistemkoin.com/pages/coin-vote]: Sistemkoin coin voting page; Ergo ranked #2 (2020-06-05, KYC required).

- [https://twitter.com/coindealcom/status/1266308300469043201]: CoinDeal Ergo nomination voting (2020-06-05, repeated).

- [https://eprint.iacr.org/2020/580]: TxChain research paper referenced for cross-chain functionality (2020-06-06).

- [https://github.com/ergoplatform/awesome-ergo]: Ergo resources repository (multiple shares).

- [https://discord.com/invite/kj7s7nb]: Ergo Discord server (multiple shares).

- [https://www.ergoforum.org/]: Ergo Forum (multiple shares).

- [https://ergoplatform.org/en/blog/2020_02_12_welcome_to_smart_money/]: "Welcome to Smart Money" blog post (multiple shares).

- [https://ergoplatform.org/en/]: Ergo Platform website (multiple shares).

- [https://ergoplatform.org/en/search/]: New site search feature (2020-06-07).

## Unresolved Questions

- **Airdrop Distribution Exact Timeline**: Lists were being cleaned up as of June 2-5 with promised delivery "within few days" but no confirmed date given. Distribution dependent on CoinsBit's processing after list receipt.

- **Delta App Integration**: Exchange listing data issue flagged for team contact but no resolution timeline provided. Request made to add ERG pairs from Hotbit, ProBit, or Citex.

- **Cardano-Ergo Collaboration**: @Terri speculated that a DEX on Ergo going live might enable connections with Cardano (ADA), but no concrete plans discussed.

---

**Summary**: Week 23 was moderately active with focus on airdrop logistics, wallet tooling, and community outreach. Most discussions were operational (exchange listings, voting, distribution) rather than technical protocol development. Two developers' meetings occurred but chat logs show only announcements, not discussion details. Activity picked up mid-week around June 3-5 with exchange and voting coordination.