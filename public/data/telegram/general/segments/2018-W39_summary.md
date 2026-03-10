---
title: "Ergo General Chat — 2018-W39"
date_start: "2018-09-24"
date_end: "2018-09-30"
type: telegram_weekly
channel: general
week: "2018-W39"
source: telegram
message_count: 55
categories: [governance, technical, mining, marketing]
key_terms: [supply policy, emission curve, token distribution, max supply, current supply, testnet, node setup, config file, peer connection, docker, swagger API, mining, testnet version 1.6.1, POW, mainnet prototype, release timeline, ICO, airdrop, premine, POW minting]
---
# Ergo General Chat Summary — 2018-W39 (2018-09-24 to 2018-09-29)

## Key Topics Discussed

- **Token Supply & Emission Policy**: Discussion of max token supply vs. circulating supply; clarification that initial token airdrop to Waves holders is not technically a "pre-mine" since founders' rewards and team allocations operate outside standard PoW emission ([msg#4485-4495](https://example.com)).

- **Testnet v1.6.1 Release & Node Setup**: Availability of testnet v1.6.1 for experimentation; configuration file requirements and node synchronization process documented; users reporting successful node startup and syncing ([msg#4497-4530](https://example.com)).

- **Sigma State Language (ErgoScript) Readiness**: Confirmation that sigma state language is already available on testnet with working examples for asset atomic exchange contracts ([msg#4531-4534](https://example.com)).

- **Proof of Work Finalization**: PoW algorithm remains the final component to be completed; testnet 2/mainnet prototype identified as next phase after v1.7 (which will include new fee approach) ([msg#4522](https://example.com)).

## Important Decisions or Announcements

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#4516, 2018-09-26]: TestNet v1.6.1 released 2 days prior; additional TestNet version planned before mining becomes available.

- [@Unknown, msg#4522, 2018-09-26]: Next version 1.7 will include new fees approach; full PoW finalization deferred to testnet 2/mainnet prototype phase.

- [@Unknown, msg#4529, 2018-09-26]: Docker instructions pointing to old p2p port flagged for update.

- [@Unknown, msg#4530, 2018-09-26]: CoinMarketCap information is outdated and requires full refresh with current emission data.

## Technical Q&A Worth Preserving

- **Q** (@Unknown, msg#4492-4493): Are the tokens airdropped to Waves holders technically a "pre-mine" if they bypass PoW minting?
  **A** (@Unknown, msg#4494): Founders' rewards/team tax are also not mined; interpretation depends on how you define initial distribution mechanisms.

- **Q** (@Unknown, msg#4503): Node fails to connect to testnet with "Failed to connect to :" error.
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#4504): Configuration file must be set correctly; (later clarified by msg#4521 that latest config available on GitHub, default API port 9052).

- **Q** (@Unknown, msg#4500): Is documentation available for testnet?
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#4502): All available documentation on GitHub; `-help` command provides implementation details.

- **Q** (@Unknown, msg#4531): Will smart contracts be available during testnet 2/mainnet prototype?
  **A** (@Unknown, msg#4532-4534): Sigma state language already on testnet with working examples for atomic swap contracts available.

## Links Shared

- [https://github.com/ergoplatform/ergo/releases/tag/v1.6.1](https://github.com/ergoplatform/ergo/releases/tag/v1.6.1): TestNet v1.6.1 release
- [http://dev.pywaves.org/assets/725Yv9oceWsB4GsYwyy4A52kEwyVrL5avubkeChSnL46](http://dev.pywaves.org/assets/725Yv9oceWsB4GsYwyy4A52kEwyVrL5avubkeChSnL46): Current token distribution list for initial Waves-based $EFYT token
- [https://www.ergoplatform.org/news_emission_curve.html](https://www.ergoplatform.org/news_emission_curve.html): Emission curve documentation
- [https://github.com/ergoplatform/ergo/blob/master/src/main/resources/application.conf](https://github.com/ergoplatform/ergo/blob/master/src/main/resources/application.conf): Latest node configuration template
- [https://github.com/ScorexFoundation/sigmastate-interpreter/tree/11004c58f3f86aa51f60aaeb060c3e8da0c6d146/src/test/scala/sigmastate/utxo/examples](https://github.com/ScorexFoundation/sigmastate-interpreter/tree/11004c58f3f86aa51f60aaeb060c3e8da0c6d146/src/test/scala/sigmastate/utxo/examples): Sigma state language examples including asset atomic exchange contracts

## Unresolved Questions

- Exact timeline for mining availability on testnet (flagged as "not yet" but dependent on completion of intermediate testnet versions)
- Full scope of fee mechanism changes in v1.7
- Status of peer 209.97.138.187 which was reported down at time of discussion