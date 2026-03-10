---
title: "Ergo General Chat — 2018-W25"
date_start: "2018-06-18"
date_end: "2018-06-24"
type: telegram_weekly
channel: general
week: "2018-W25"
source: telegram
message_count: 73
categories: [technical, mining, community]
key_terms: [testnet, unstable, nodes, bug fix, release, twin chains, PoW, PoS, Sigma-Cash, Sigma-Data, sidechains, nipopows, node configuration, conf file, well known peers, dependencies, mining, wallet, transactions, testnet updates]
---
# Ergo General Chat — Week 2018-W25 Summary

## Key Topics Discussed

- **Testnet Stability & Node Operations**: The testnet was experiencing instability during this period, with a fix expected in a new release. Community members were setting up test nodes with custom configurations and successfully connecting to well-known peers.

- **Dual Chain Architecture (Σ-Cash & Σ-Data)**: Clarification that Ergo is pursuing a PoW-only dual chain model (not PoW+PoS as initially speculated), with both Σ-Cash and Σ-Data chains using PoW and supporting sidechains. Different parameters allow for data-intensive applications on one chain while maintaining cash functionality on another.

- **NIPoPoWs & Academic Research**: Significant emphasis on the scientific foundation of Ergo, with unpublished papers in development. The NIPoPoWs protocol (https://nipopows.com) was highlighted as foundational work.

- **Mining Roadmap**: Mining capability was confirmed to be coming later in 2018 — not yet available during testnet phase.

- **Wallet & Transaction Features**: Testnet version lacked wallet functionality, limiting ability for community members to generate transactions. Resolution promised in upcoming updates.

- **Scorex Framework**: Clarification that Ergo created and continues to develop Scorex, which serves as the framework underlying the Ergo Platform.

## Important Decisions or Announcements

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#3469, 2018-06-28]: Mining will be possible later in the year.

- [@𝖒𝖊𝖓𝖟𝖆𝖑𝖎𝖘𝖙կշօ, msg#3473, 2018-06-28]: Current testnet version does not include wallet feature; transaction generation for the public will be resolved in upcoming updates.

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#3482, 2018-06-29]: Friday update posted to BitcoinTalk with project progress.

- [@Unknown, msg#3435, 2018-06-22]: TwinsCoin is separate research co-authored by kushti; Σ-Cash and Σ-Data will both be PoW (not dual PoW/PoS).

## Technical Q&A Worth Preserving

- **Q** (@Kirill, msg#3459): How to launch a test node with non-default parameters? Is there an example .conf file?
  **A** (@ponte, msg#3460 → Kirill, msg#3462): Reference the application.conf file in the repository source tree at `/src/main/resources/application.conf`, and consult the Node Configuration File wiki.

- **Q** (@Kirill, msg#3464): How to create private and public keys from seed and obtain testnet tokens for transactions?
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#3473): Not yet possible in current testnet version due to lack of wallet feature; resolution promised in upcoming updates.

- **Q** (@ponte, msg#3461): Unable to connect to "well known peers" — what is the issue?
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#3474): Ensure clean installation and all dependencies updated; if error persists, provide logs for debugging. (@ponte, msg#3477): New well-known peers list resolved the issue.

- **Q** (@Unknown, msg#3502): Is Ergo built from Scorex?
  **A** (@Unknown, msg#3504): Ergo created Scorex; it continues to be developed and serves as a great framework for the Ergo Platform.

- **Q** (@Waylay, msg#3434): Is Ergo pursuing twin chains — PoW and PoS?
  **A** (@Unknown, msg#3435): TwinsCoin is different research co-authored by kushti; Σ-Cash and Σ-Data will both be PoW.

- **Q** (@Unknown, msg#3439): How does the dual chain mechanism compare to VRC/VRM dual chain?
  **A** (@Unknown, msg#3440): Both chains share the same underlying tech and support sidechains. Σ-Cash can be released conditionally based on events in Σ-Data, enabling data-intensive applications with different parameters.

## Links Shared

- [https://nipopows.com](https://nipopows.com): NIPoPoWs protocol — foundational academic work.

- [https://github.com/ergoplatform/ergo/wiki/Node-Configuration-File](https://github.com/ergoplatform/ergo/wiki/Node-Configuration-File): Node configuration documentation.

- [https://github.com/ergoplatform/ergo/blob/master/src/main/resources/application.conf](https://github.com/ergoplatform/ergo/blob/master/src/main/resources/application.conf): Example configuration file for test node setup.

- [https://bitcointalk.org/index.php?topic=2076657.msg41161478#msg41161478](https://bitcointalk.org/index.php?topic=2076657.msg41161478#msg41161478): Official project updates and whitepaper/roadmap reference.

- [https://twitter.com/ergoplatformorg](https://twitter.com/ergoplatformorg): Official project Twitter account (multiple tweets linked for announcements).

- [https://twitter.com/DmitryMeshkov](https://twitter.com/DmitryMeshkov): Developer updates and community engagement.

- [https://twitter.com/paddyucl](https://twitter.com/paddyucl): "OffTheChain" event coverage.

- [https://www.youtube.com/watch?v=sUxh6wO_Z00](https://www.youtube.com/watch?v=sUxh6wO_Z00): Video content (updated link provided).

- [https://www.youtube.com/watch?v=oxxnrN97F2o](https://www.youtube.com/watch?v=oxxnrN97F2o): Replacement video link.

## Unresolved Questions

None identified in this chat segment. Most technical questions were resolved through reference to documentation or clarification of pending features.

---

**Activity Level**: Moderate — primarily infrastructure setup discussions and clarifications on architecture. Community was small and technically engaged. Emphasis on scientific rigor and academic foundations rather than marketing or speculation.