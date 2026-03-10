---
title: "Ergo General Chat — 2020-W04"
date_start: "2020-01-20"
date_end: "2020-01-26"
type: telegram_weekly
channel: general
week: "2020-W04"
source: telegram
message_count: 96
categories: [community, technical, ecosystem, governance]
key_terms: [Discord, Slack, community platform, migration, Raspberry Pi, node, memory constraints, 1GB RAM, light nodes, full node, node sync, configuration, headersHeight, UTXO, jar release, mainnet, exchange listing, Binance, Kucoin, Huobi]
---
# Ergo General Chat — Week 2020-W04 Summary

## Key Topics Discussed

- **Discord vs. Slack platform preference**: Multiple participants expressed preference for Discord over Slack as the community communication platform, citing better features and usability for the project.

- **Running Ergo nodes on Raspberry Pi**: Extended discussion about feasibility and resource constraints of running full and light nodes on Raspberry Pi hardware (1GB RAM Model B+), including specific memory allocation testing and Java configuration optimization.

- **Light nodes and blockchain scalability**: Discussion of how light node capabilities are necessary for decentralized blockchain operations on resource-constrained hardware, with comparisons to Ethereum and other networks.

- **Exchange listing and market liquidity**: Community discussion about the need for ERG listing on major exchanges (Kucoin, Huobi, Binance) and current trading available primarily on Tidex, with expressions of confidence in future market cycles.

- **Smart contract governance for ICOs**: Proposal for using ErgoScript to create escrow mechanisms for ICO releases tied to roadmap completion milestones to prevent exit scams and enforce community consensus.

## Important Announcements

- [@Unknown, msg#16424, 2020-01-21]: kushti shared Twitter post about Ergo development progress.

- [@Ergo Foundation, msg#16518, 2020-01-25]: Official Ergo Foundation website launched at ergoplatform.org.

- [@Unknown, msg#16467, 2020-01-23]: Official announcement of new Ergo release via Twitter.

- [@filippounits, msg#16561-16564, 2020-01-30]: Successfully configured and deployed light node on Raspberry Pi with memory optimization (Xmx512m flag), published configuration at https://gist.github.com/kushti/1b9434e12b051a2db5b22e62a8d85cdb.

- [@Unknown, msg#16625, 2020-02-02]: Ergo Foundation social media announcement regarding project developments.

## Technical Q&A Worth Preserving

- **Q** (@Unknown, msg#16461): What are the specific things to probe/test on Raspberry Pi Model B+ (1.4GHz Cortex-A53, 1GB RAM) for running an Ergo node?
  **A** (@Unknown, msg#16470, msg#16483): Running on 1GB RAM will cause issues; light nodes are needed for RPi feasibility. Full nodes are too resource-intensive. Generator/pool nodes run primarily on VPS or dedicated servers.

- **Q** (@Unknown, msg#16473): Are you limiting memory yourself when running the node?
  **A** (@filippounits, msg#16567): Successfully running full node with `java -jar -Xmx512m ergo-3.2.1.jar —mainnet -c ergo.conf` configuration, achieving sync progress after 12 hours with "stateType": "utxo".

- **Q** (@hawky, msg#16496-msg#16499): Similar Raspberry Pi node running experience from LTO/Waves projects — shared patch documentation.
  **A** (@hawky, msg#16502): The patch uses pure Java version to avoid architecture compatibility issues on ARM-based systems.

- **Q** (@Unknown, msg#16629): Is it possible to create escrow mechanisms in ICOs using ErgoScript to release payments based on roadmap completion?
  **A** (@Unknown, msg#16635): ErgoScript's flexible capabilities enable governance-enforced ICO contracts with community voting thresholds (e.g., 51% agreement on roadmap completion). This is a novel application not widely seen in other smart contract platforms.

- **Q** (@Unknown, msg#16630): Doesn't Ergo lack governance mechanisms (unlike Tezos), making the project dependent on the Ergo Foundation for development?
  **A** (@Unknown, msg#16633): Governance mechanisms are being researched; community consensus voting with thresholds could be implemented in smart contracts once solutions are realized.

## Links Shared

- [https://twitter.com/ergoplatformorg/status/1219176302969790465]: Ergo Foundation official announcement (2020-01-20)

- [https://twitter.com/chepurnoy/status/1219527770897899520]: kushti development update (2020-01-21)

- [https://github.com/ergoplatform/ergo/releases]: Official Ergo releases for Raspberry Pi deployment testing (2020-01-22)

- [https://github.com/ergoplatform/ergo/issues/972#issuecomment-577488907]: GitHub issue report on Raspberry Pi node deployment with technical details (2020-01-23)

- [https://docs.ltonetwork.com/public-node/mining-staking/node-raspberry-pi-expert]: LTO Network Raspberry Pi node guide (2020-01-23, referenced for comparative troubleshooting)

- [https://gist.github.com/kushti/1b9434e12b051a2db5b22e62a8d85cdb]: kushti's Ergo light node configuration for Raspberry Pi (2020-01-30)

- [https://twitter.com/FilippoUnits/status/1223156793473454080]: filippounits' public node sync progress update (2020-01-31)

- [https://ergocast.io/episode/2019-year-in-review/]: ErgoPlus year-in-review podcast episode (2020-01-30)

- [https://www.ergofoundation.org/]: Ergo Foundation official website launch (2020-01-25)

- [https://twitter.com/ergoplatformorg/status/1224028515340890113]: Ergo Foundation announcement (2020-02-02)

## Unresolved Questions

- **Light node specification and roadmap**: Timeline and technical requirements for official light node implementation not confirmed; community awaiting official release.

- **Exchange listings**: Multiple requests for Kucoin, Huobi, or Binance listings remain unanswered; current liquidity limited to Tidex.

- **ICO governance mechanisms**: While ErgoScript's capability for escrow-based roadmap enforcement was discussed, implementation status and community appetite unclear.

- **Governance model for protocol evolution**: Whether Ergo will adopt formal on-chain governance voting (like Tezos) remains undecided as of this period.