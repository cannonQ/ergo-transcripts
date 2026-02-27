# Ergo General Chat — 2019-W19 Summary

## Key Topics Discussed

- **Mining on Testnet**: Participants confirmed that mining was active only on testnet (CUDA GPU miners for Nvidia; AMD support not yet available). A 720-block (~1 day) delay existed between block minting and reward availability. [@Dmitry, msg#7052]

- **Mainnet Launch Postponement**: Mainnet launch was postponed from initial timeline to **June 20, 2019** due to testing delays and security audit requirements. [@Dmitry, msg#6989]

- **EFYT Token Distribution & Mainnet Swap**: 100K EFYT were distributed proportionally to WCT (Waves Community Token) holders. Treasury funds (approximately 815K tokens held by issuer) would be distributed over ~7 months post-mainnet launch; untouched treasury tokens would not be swapped to mainnet. [@Dmitry, msg#7161; @Unknown, msg#7188, msg#7191, msg#7194]

- **Self-Reproducing Coins & Storage Rent Model**: Users noted the elegance of Ergo's self-reproducing coins model for managing dynamic state and discussed box lifespan (~4 years) in relation to blockchain bloat mitigation and NIPoPoWs. [@Unknown, msg#7063–7065]

- **ErgoScript & Smart Contracts**: Early discussions on posting transactions with custom ErgoScript on testnet, including use of `/wallet/p2s_address` and `/wallet/p2sh_address` API methods. [@Unknown, msg#7074–7075; @Kirill, msg#7076]

- **Contractual Money Definition**: Ongoing debate about the precise legal and technical definition of "contractual money" and the nature of the ERG token, with reference to whitepaper section 7. [@And, msg#7132, msg#7162, msg#7166; @Dmitry, msg#7153, msg#7163]

- **Mining Algorithm & Hardware**: Ergo uses Autolykos PoW algorithm (referenced in ErgoPow PDF). OpenSSL compilation issues identified (1.0.x vs 1.1.x compatibility). [@Unknown, msg#7129; @Dmitry, msg#7097–7102]

- **Wallet Persistence Bug**: Initial wallet builds did not persist data to disk; balance showed zero after restart even after restoring from seed phrase. Persistent wallet was under review. [@Ilya Oskin, msg#7154, msg#7156]

- **Testnet Explorer Issues**: Testnet explorer frontend temporarily unavailable due to block format changes in testnet 2.0; blocks accessible only via API. [@Dmitry, msg#7013, msg#7015]

---

## Important Decisions or Announcements

- [@Dmitry, msg#6989, 2019-05-08]: Mainnet launch postponed to **June 20, 2019** due to testing delays and security audit.

- [@Dmitry, msg#7161, 2019-05-16]: **100K EFYT distributed** to WCT holders proportionally (no ongoing airdrops planned).

- [@Dmitry, msg#7102, 2019-05-14]: OpenSSL 1.1 support prioritized for compiler toolchain.

- [@Unknown, msg#7188, 2019-05-17]: EFYT distribution from treasury to take ~7 months post-mainnet.

- [@Unknown, msg#7197, 2019-05-17]: Community voting system for treasury fund allocation under development; details TBD.

---

## Technical Q&A Worth Preserving

- **Q** (@Unknown, msg#7050): GPU miner found solutions but wallet shows zero balance. Is the solution posting slower than other miners?
  **A** (@Dmitry, msg#7052): 720-block (~1 day) delay between minted block and reward availability. Wait for the reward to mature.

- **Q** (@Unknown, msg#7074): Can transactions with custom ErgoScript be posted on testnet?
  **A** (@Kirill, msg#7076): Yes, use `/wallet/p2s_address` API method to create an address with a script. Relationship to `/wallet/p2sh_address` not clarified.

- **Q** (@Rejinderi, msg#7099): Compilation failing on Ubuntu 18.04. How to downgrade OpenSSL?
  **A** (@Andrey Andreev, msg#7105): `sudo apt install libcurl3 libcurl-openssl1.0-dev libssl1.0-dev && make`

- **Q** (@Александр Кравцов, msg#7152): Mined ERG visible in balance, but disappears after wallet restart. Restoring from seed gives identical addresses repeatedly—is this correct?
  **A** (@Ilya Oskin, msg#7154–7156): Wallet not persistent in current build; restoring from seed only recovers keys, requiring blockchain rescan for balance display.

- **Q** (@Unknown, msg#7189–7190): CMC lists 397,300 circulating supply. Will non-distributed treasury tokens be burned?
  **A** (@Unknown, msg#7191): CMC data outdated. Treasury funds (815K EFYT) will not be swapped to mainnet after full EFYT distribution.

- **Q** (@toni, msg#7212): How many transactions per second can Ergo handle?
  **A** (@Unknown, msg#7213): Core idea is raising TPS without compromising blockchain assumptions; block size and other parameters adjustable by miners, with payment network solutions handling additional throughput.

- **Q** (@Unknown, msg#7195): How will community voting on treasury funds work? Will staking be involved?
  **A** (@Unknown, msg#7197): Community voting system under development; details to follow from core developers.

---

## Links Shared

- [https://twitter.com/ergoplatformorg/status/1125793560987566080]: Announcement of mainnet postponement to June 20.

- [https://testnet.ergoplatform.com]: Testnet explorer (frontend under reconstruction at time of discussion).

- [https://api-testnet.ergoplatform.com/blocks/7ed45f39c3b3ac87a07532f90f20a67c0cc617bbb8d366ae258cc26626b67b14]: Testnet API for block retrieval.

- [https://www.ergoplatform.org/news_emission_curve.html]: Emission curve & coin supply info (link later confirmed as moved).

- [https://github.com/ScorexFoundation/sigmastate-interpreter/blob/master/src/main/scala/org/ergoplatform/mining/emission/EmissionRules.scala#L67]: Emission rules source code.

- [https://github.com/ScorexFoundation/sigmastate-interpreter/tree/2b4b07a17a026cc176289a843d8a24223c8176c5/src/test/scala/sigmastate/utxo/examples]: ErgoScript test examples.

- [https://docs.ergoplatform.com/teaser.pdf]: High-level project overview.

- [https://docs.ergoplatform.com/ErgoPow.pdf]: Autolykos PoW algorithm specification.

- [https://docs.ergoplatform.com/whitepaper.pdf]: Full whitepaper with contractual money definition (section 7).

- [http://dev.pywaves.org/assets/725Yv9oceWsB4GsYwyy4A52kEwyVrL5avubkeChSnL46]: EFYT circulating & total supply tracker.

- [https://twitter.com/ergoplatformorg/status/1129418672290902019]: Treasury fund timeline details.

- [https://twitter.com/chepurnoy/status/1129415171812802561]: Additional core team update.

- [https://ergoplatform.org]: New project website.

- [https://ergoplatform.org/docs/whitepaper.pdf]: Whitepaper direct link.

---

## Unresolved Questions

- **OpenSSL 1.1 Support Timeline**: Will support for OpenSSL 1.1.x be available before mainnet launch on June 20? [@Rejinderi, msg#7168] — Marked as prioritized but no delivery date confirmed.

- **Wallet Persistence**: When will the persistent wallet implementation be available? [@Ilya Oskin, msg#7154] — Under review, no timeline given.

- **Community Voting Mechanism**: Exact design and staking/governance model for treasury fund distribution TBD. [@Unknown, msg#7195–7197]

- **Coda Protocol Comparison**: Request for comparative analysis between Ergo and Coda Protocol. [@pietrod, msg#6973] — Acknowledged as different architectures (Coda single-block-generator vs. Ergo permissionless) but no detailed comparison article provided.

- **AMD GPU Mining Support**: Timeline for AMD GPU miner support not specified. [@Unknown, msg#6979; @Dmitry, msg#6980] — "Not yet, unfortunately."

- **Chinese Market Expansion**: Community interest in Chinese exchange listing and localization mentioned but no commitment timeline. [@Unknown, msg#7146–7148]