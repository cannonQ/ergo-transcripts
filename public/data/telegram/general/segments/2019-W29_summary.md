---
title: "Ergo General Chat — 2019-W29"
date_start: "2019-07-15"
date_end: "2019-07-21"
type: telegram_weekly
channel: general
week: "2019-W29"
source: telegram
message_count: 203
categories: [bridges, technical, mining, ecosystem, defi]
key_terms: [EFYT, ERG, gateway, Waves, swap, redemption, token conversion, node, configuration, mainnet, API key, wallet unlock, Java, REST API, mining, hashrate, 1080ti, GPU, RX47, pool]
---
# Ergo General Chat — 2019-W29 Summary

## Key Topics Discussed

- **EFYT to ERG Gateway Testing & Operations**: The Waves platform gateway for converting EFYT tokens to native ERG coins was under active testing during this period, with minimum 0.1 ERG and maximum 50,000 ERG per transaction. Early users successfully demonstrated deposit and withdrawal functionality.

- **Node Configuration & Setup**: Multiple users asked about proper Ergo node configuration on Ubuntu/Windows, wallet initialization, API key authentication via Blake2b hashing, memory allocation (recommended `-Xmx4G` flag), and REST API access on ports 9052 (testnet) and 9053 (mainnet).

- **Mining Hardware Requirements**: Discussion confirmed that CPU mining was not viable; GPU mining (RTX 1080 Ti reporting ~35–40 MH/s, AMD RX 47/48/57/58 reporting ~19–20 MH/s) was the practical minimum. No mining pool existed yet; solo mining required direct hashrate calculation.

- **EFYT Supply & Token Economics**: Questions raised about the 1:1 conversion ratio between EFYT (Waves token) and ERG (native coin) and why circulating supply was <10% of total. Community directed users to the supply curve blog post for details.

- **Exchange Listings**: Tidex.com was confirmed as the primary exchange with trading volume; Vindax.com (Vietnam-based, top 60 CMCap) also offered listing services. Discussion of OTC markets and DEX access.

- **Gateway Confirmation Requirements**: Concern raised that Tidex required 200 block confirmations for Ergo deposits, which users found excessive; this was flagged as a configuration issue on Tidex's end.

---

## Important Decisions or Announcements

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#12391-12392, 2019-07-25]: Rosen Gateway went live for testing with 0.1–50,000 ERG per transaction; official announcement to follow.

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#12444, 2019-07-25]: ERG/EFYT exchange on Waves DEX announced; team to place 1:1 conversion orders. Note: ERG exchanged from EFYT cannot be converted back.

- [@Kookster, msg#12500, 2019-07-27]: First swap order executed successfully on Waves DEX.

---

## Technical Q&A Worth Preserving

- **Q** (@U S, msg#12223-12224): How to unlock wallet on Ubuntu 18 when starting a node? Can I CPU mine?
  **A** (@Unknown, msg#12226-12229): Authenticate with API key; CPU mining is not viable—need multiple GPUs to find a block monthly.

- **Q** (@Unknown, msg#12231): How to unlock wallet?
  **A** (@Unknown): Use Swagger UI for wallet unlock operations.

- **Q** (@Unknown, msg#12293-12294): Node running out of memory with 8 GB RAM while mining on same rig.
  **A** (@Unknown, msg#12296): Use `java -jar -Xmx4G your.jar --mainnet -c your.conf` to cap memory allocation.

- **Q** (@M, msg#12314-12316): Cannot find nodes/connections; are there known peers?
  **A** (@Unknown, msg#12317-12323): Peers defined in `mainnet.conf` on GitHub; use reference.conf as template and override specific settings in your config; default mainnet port is 9053.

- **Q** (@M, msg#12329-12356): How to initialize wallet and set API key?
  **A** (@Unknown, msg#12329-12362): Hash your API key secret using Blake2b (available at `/swagger#/utils/hashBlake2b`), place hash in config under `scorex.restApi.apiKeyHash`, restart node with config file.

- **Q** (@Unknown, msg#12305-12307): When will EFYT-to-ERG gateway open?
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖚𝖎𝖘𝖙կշօ, msg#12308): Waves team still testing the gateway; testing phase ended by 2019-07-25.

- **Q** (@Kookster, msg#12420): Is the maximum gateway deposit 50 ERG or 50,000?
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#12426): Maximum is 50,000 ERG (initially thought to be lower).

- **Q** (@Kookster, msg#12429): What is the issue with Tidex requiring 200 confirmations?
  **A** (implicit from discussion, msg#12433-12438): Configuration error on Tidex end; confirmation requirement was unexpectedly high; withdrawal from Tidex to Waves took ~17 minutes.

---

## Links Shared

- [ergoplatform.org/en/faq/](https://ergoplatform.org/en/faq/): Official FAQ section.
- [ergoplatform.org/en/blog/2019_05_20-curve/](https://ergoplatform.org/en/blog/2019_05_20-curve/): Supply curve and token economics details.
- [github.com/ergoplatform/ergo/blob/master/src/main/resources/mainnet.conf](https://github.com/ergoplatform/ergo/blob/master/src/main/resources/mainnet.conf): Mainnet peers and configuration template.
- [github.com/ergoplatform/ergo/blob/master/src/main/resources/reference.conf](https://github.com/ergoplatform/ergo/blob/master/src/main/resources/reference.conf): Reference configuration defaults.
- [github.com/ergoplatform/ergo/wiki/Ergo-REST-API](https://github.com/ergoplatform/ergo/wiki/Ergo-REST-API): REST API authentication guide.
- [github.com/ergoplatform/ergo/wiki/Wallet-documentation](https://github.com/ergoplatform/ergo/wiki/Wallet-documentation): Wallet initialization and operations.
- [twitter.com/chepurnoy/status/1151180483499368455](https://twitter.com/chepurnoy/status/1151180483499368455): kushti Twitter announcement (2019-07-16).
- [explorer.ergoplatform.com/transactions/b75aba92a79910ac88c5ef0fbab429fcfdc8fb1abc4f2fa320e5f97553eece63](https://explorer.ergoplatform.com/transactions/b75aba92a79910ac88c5ef0fbab429fcfdc8fb1abc4f2fa320e5f97553eece63): First successful gateway withdrawal example (Tidex → Waves).
- [explorer.ergoplatform.com/transactions/2601cda34cb6e5aa82fa5bfe155f80a4a1515bafa43ab684ce9b38aa103c7025](https://explorer.ergoplatform.com/transactions/2601cda34cb6e5aa82fa5bfe155f80a4a1515bafa43ab684ce9b38aa103c7025): Tidex deposit from Waves example.
- [client.wavesplatform.com/dex?assetId1=5dJj4Hn9t2Ve3tRpNGirUHy4yBK6qdJRAJYV21yPPuGz&assetId2=725Yv9oceWsB4GsYwyy4A52kEwyVrL5avubkeChSnL46](https://client.wavesplatform.com/dex?assetId1=5dJj4Hn9t2Ve3tRpNGirUHy4yBK6qdJRAJYV21yPPuGz&assetId2=725Yv9oceWsB4GsYwyy4A52kEwyVrL5avubkeChSnL46): Waves DEX trading pair (EFYT/ERG).

---

## Unresolved Questions

- **EFYT Exchange Rate Concerns** (msg#12206-12209): Question about whether 1:1 EFYT-to-ERG conversion would devalue EFYT tokens when large amounts of ERG enter circulation; no detailed analysis provided, though community confirmed EFYT had already declined in price.

- **Mining Block Reward Value** (msg#12472-12489): User reported receiving a mining reward with 0 value shown in explorer; root cause not diagnosed in chat.

- **Trivial Bug Bounty Status** (msg#12489): User asked if Ergo had a bug bounty program; no response recorded in this segment.