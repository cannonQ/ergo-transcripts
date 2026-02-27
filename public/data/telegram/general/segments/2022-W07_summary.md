# Ergo General Chat — Week 2022-W07 Summary

## Key Topics Discussed

- **EIP-0027 Soft Fork Proposal**: Community debated the emission schedule extension proposal. Miners vote on reducing block rewards from 66 ERG to 54 ERG to extend mining sustainability. Vote threshold: >90% miner support required. Major pools signaled support; GetBlok reached ~82-90% approval by week's end.

- **Proof of Verification (PoV) and Native Asset Mining**: @Armeanio highlighted the significance of allowing miners to receive native tokens alongside ERG block rewards through pools like GetBlok. This enables project token launches based on proof of work, creating additional revenue streams for miners beyond base rewards.

- **NIPoPoWs Implementation Progress**: @kushti reported NIPoPoW proofs and verification are stabilized; P2P messages and database support for UTXO set snapshots ready; integration work remaining. Enables efficient light clients and sidechaining.

- **Block Time and Scaling**: Discussion on whether Ergo's 2-minute block time should be adjustable. @kushti clarified that changing it would require very hard fork affecting NIPoPoW security; sub-block confirmation protocols (Bitcoin-NG, Flux) planned as alternative for faster finality without changing block time.

- **Cardano Bridge Status**: Bridge to Cardano in R&D phase, targeted for Q2 2022 but not straightforward. Separate from Rosen Bridge general EVM bridging efforts.

- **Wallet and Mixer Integration**: Ledger support implemented in Nautilus, SafeW, and Satergo; signing bug fix pending. ErgoMixer now integrated into SafeW wallet. Withdrawal function for tip bot flagged as "dusty to-do list item."

- **Storage Rent and Fee Mechanisms**: Discussion of mempool filters, fee estimation APIs, and spam protection. Reference client v4.0.44+ implements limits on transactions downloaded from single peer to mitigate spam attacks.

- **Node Synchronization Issues**: Several users reported node sync stalling around block 400k-570k on Manjaro Linux. Recommended solutions: reduce connection pool (max 10), lower Xmx to 3GB, use Java 11, try alternative Linux distros or Raspberry Pi with pre-synced database.

## Important Decisions or Announcements

- [@kushti, msg#255448, 2022-02-15]: Proposed spreading tokens to miners as fair distribution mechanism for new projects launching on Ergo.

- [@Armeanio, msg#255391-392, 2022-02-15]: Highlighted PoV/native token mining vectors opening "huge opportunities" — miners could earn project tokens directly without selling ERG, potentially recapturing value lost from EIP-0027 reduction.

- [@Glasgow, msg#255227-228, 2022-02-15]: Ledger integration status confirmed for Nautilus, SafeW, and Satergo; waiting on signing bug fix before full release.

- [@Andy L, msg#256015, 2022-02-17]: Ergo Summit AMA scheduled Feb 18 13:00 UTC featuring kushti, Dan Friedman, and Armeanio; live stream part 2 backup link provided at msg#256116 after technical issues.

- [@Glasgow, msg#255937, 2022-02-17]: All major mining pools support EIP-0027 soft fork.

- [@Glasgow, msg#255981-983, 2022-02-17]: ErgoMixer now integrated into SafeW wallet; Nautilus also implementing mixer.

## Technical Q&A Worth Preserving

- **Q** (@Unknown, msg#255518): Why is Ergo's 2-minute block time not adjustable as a parameter?
  **A** (@kushti, msg#255522, 255531): Not easy to change; NIPoPoWs lose security without adjustments. Would require very hard fork replacing NIPoPoWs with Flyclient or abandoning logspace SPV clients entirely. Sub-block confirmation protocols (Bitcoin-NG, Flux) planned as alternative.

- **Q** (@Unknown, msg#255549): Do sub-block confirmation protocols improve throughput/scalability as much as sharding, or mainly reduce finalization time?
  **A** (@kushti, msg#255561): Sub-block protocols optimize client bandwidth utilization, making bandwidth the bottleneck (aside of finalization reduction). Sharding spreads transactions across chains; crossshard transfers require proof sizes and security guarantees. Commit chains may be better alternative than sharding.

- **Q** (@Anton, msg#255833, 255868): Full node sync stops responding around block 400k-570k on Linux, eating entire CPU.
  **A** (@Glasgow, msg#255840, 255873-877): Reduce connection pool (try maxConnections=10), lower Xmx to 3GB, use Java 11, or switch Linux distro. Issues reported on Manjaro and Ubuntu; kvsync branch may help. Database corruption from unexpected shutdown causes "Got GetReaders request in state" error; consider pre-synced database on alternative OS.

- **Q** (@Unknown, msg#255517-518): Why is Ergo's block time not adjustable? Is composability on L2 more complex without faster blocks?
  **A** (@kushti, msg#255522): See technical answer above; sharding/sub-block protocols solve L2 composability better than reducing block time.

- **Q** (@Unknown, msg#255565): Why did Ethereum choose sharding for 2.0 while Ergo didn't?
  **A** (@Glasgow, msg#255566): Ethereum implemented L2 solutions first; sharding is L1 solution and more complex. Ergo can also implement sharding in future.

- **Q** (@Unknown, msg#255978): How long does ErgoMixer take? Does it wait for boxes if none in last 24h?
  **A** (@Glasgow, msg#255979): Depends on number of rounds configured; requires other users to mix with. Greater adoption will speed rounds. (@CW, msg#255980): Wallet integration will lower barrier to entry. (@Glasgow, msg#255981): Now in SafeW.

## Links Shared

- [https://docs.ergoplatform.com/contribute/]: Ergo contribution guidelines
- [https://docs.ergoplatform.com/events/ergohack/#ergohack-iii-privacy-security]: ErgoHack III submission overview
- [https://twitter.com/mrtn_vienna/status/1492985206739017733]: Twitter poll (context unclear)
- [https://twitter.com/nightowlcasino/status/1493212045801668610]: Night Owl Casino ErgoHack summary
- [https://explorer.ergoplatform.com/en/transactions/e2c4954665ccf87791f42983ae4f7031205c2e719709907cbf2ff09e5489d4b8]: 10K output airdrop transaction
- [https://ergopad.medium.com/introducingpaideia-74a7fc03bf42]: Paideia DAO introduction
- [https://www.ergoforum.org/t/emission-soft-fork-proposal/2996]: EIP-0027 soft fork forum discussion
- [https://ergoplatform.org/en/blog/2022-01-18-ergo-blockchain-scalability-and-adoption/]: Ergo scalability blog post
- [https://www.usenix.org/system/files/conference/nsdi16/nsdi16-paper-eyal.pdf]: Bitcoin-NG paper (sub-block confirmation)
- [https://eprint.iacr.org/2018/415.pdf]: Flux (sub-block protocol) paper
- [https://eprint.iacr.org/2021/1276]: Sharding survey paper
- [https://docs.ergoplatform.com/dev/protocol/scaling/]: Ergo scaling documentation
- [https://ergonaut.space/en/Guides/yield]: Yield farming guides for Ergo
- [https://docs.ergodex.io/docs/about-ergodex/intro]: ErgoDEX documentation
- [https://ergoplatform.org/en/exchanges/]: Official exchange list
- [https://docs.ergoplatform.com/uses/mixer/]: ErgoMixer documentation
- [https://docs.ergoplatform.com/node/platforms/]: Node setup guides by OS
- [https://ergofaucet.org]: Testnet faucet
- [https://twitter.com/GuapSwapErgo]: GuapSwap (miner payment token proxy)
- [https://zeamerch.com/collections/ergo]: Official Ergo merchandise store
- [https://youtu.be/z-6PNEq8dEs]: Ergo Summit AMA (Feb 18)
- [https://youtu.be/p3-XJHqsMWs]: AMA Part 2 (after restart)
- [https://youtu.be/EGcp_T3AiWk]: Johnny Wu on Handshake DNS (Ergo Summit)
- [https://youtu.be/2OrHmBaBn9E]: Dionysis Zindros on soft forks (Ergo Summit)
- [https://youtu.be/lvpBW31rVhw]: Ergo Summit premiere videos playlist
- [https://youtu.be/-l390QBcSIw]: Dev update video (Feb 20)
- [https://t.me/ergo_mining]: Ergo mining Telegram group
- [https://t.me/ergoplatform_ES]: Spanish-language Ergo group
- [https://t.me/ERGtrading]: Ergo trading channel
- [https://t.me/Ergopad_Idea_tech]: ErgoPad ideas/tech incubator
- [https://twitter.com/sigmaverse_ergo]: Sigmaverse (project aggregator) Twitter
- [https://www.reddit.com/r/ergonauts/comments/sxgkb0/]: DeCo/ErgoLearn graduation announcement

## Unresolved Questions

- **Block time adjustability**: Confirmed as requiring very hard fork; no timeline given for sub-block protocol implementation.

- **Cardano bridge timeline**: Q2 2022 target stated but explicitly noted "not straightforward"; no concrete milestone defined.

- **Node sync issues on specific platforms**: Workarounds identified (reduce connections, lower memory, switch distro) but root cause for Manjaro/Ubuntu not fully diagnosed.

- **Tip bot withdrawal function**: Flagged as needed but no ETA; users currently seed into external wallet to access funds.

- **Ledger signing bug**: Blocking full Ledger support in Nautilus/SafeW/Satergo; fix status not tracked.

- **ErgoMixer adoption rate**: Discussion noted adoption needed for faster rounds but no metrics or targets shared.

- **EIP-0027 alternative proposals**: Community member proposed ERG2 successor coin with new emission; rejected by core contributors as more problematic than original proposal; discussion left unresolved philosophically (PoW sustainability models).

---

**Summary**: Week centered on EIP-0027 emission vote and technical infrastructure updates. Summit kicked off with education-focused presentations. Mining pool PoV support and wallet/mixer integrations marked progress on ecosystem usability. Node sync issues on Linux remain partially unresolved.