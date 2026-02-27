# Ergo General Chat — 2019-W26 Summary

## Key Topics Discussed

- **Mainnet Launch Postponement**: Mainnet release initially scheduled for June 28 was postponed to Monday, July 1, 2019, 10:00 AM UTC to allow two additional days for Ergo core testing.

- **Node Setup and Wallet Configuration**: Multiple community members struggled with node configuration, API key hash generation, and wallet initialization via Swagger. The process required creating a config file (ergo.conf), generating an API key hash using Blake2b-256, and authorizing the node with a corresponding secret.

- **Mining Preparation**: Community extensively discussed GPU miner (CUDA) availability, with AMD miner promised by mainnet launch "if all goes well." CPU mining was confirmed as possible but suboptimal. Miners needed to compile the Autolykos miner from source and generate mnemonics/public key hex before launch.

- **Storage Rent and Treasury**: Storage rent mechanism explained as a way to return lost coins to circulation and prevent deflation. Treasury contains 4,330,791.5 ERG with scheduled releases: 7.5 ERG/block for 2 years, then declining amounts for 3-month periods, funding development for 2.5 years.

- **EFYT Token Swap Mechanism**: Pre-mined EFYT tokens on Waves blockchain would be gradually swapped for ERG during the first year post-mainnet via treasury unlocking and market orders, but exact mechanics remained unconfirmed at week's end.

- **ErgoScript and Complex Smart Contracts**: Swagger UI enabled simple transactions but complex ErgoScript contracts required additional tooling not yet implemented. User-friendly complex script support was deferred to post-mainnet launch.

- **Breaking Changes in Release 3.0.0**: Version 3.0.0 (released June 28) introduced stricter limits on box/script sizes and increased instruction costs for security hardening. This was technically a breaking change, but team clarified it was security-focused and testing could continue with same config on updated jar.

## Important Decisions or Announcements

- [@Dmitry, msg#9622, 2019-06-26]: Mainnet release postponed from June 28 to Monday, July 1, 10:00 AM UTC for additional core testing.

- [@Dmitry, msg#9688, 2019-06-26]: Ergo's Autolykos algorithm is ASIC-resistant by design to prevent centralization.

- [@mentalist420, msg#9751, 2019-06-27]: Plans confirmed for listing on exchanges beyond Waves after mainnet launch; Tidex announced as available from early beginning.

- [@Dmitry, msg#9866, 2019-06-29]: Magnum and SWFT wallets will be available soon after mainnet launch.

- [@Dmitry, msg#9781, 2019-06-28]: Call for long-term Ergo node operators willing to be added to mainnet config as seed nodes.

## Technical Q&A Worth Preserving

- **Q** (@Dmitry V, msg#9395): How to create complex transactions like those in ErgoScript tutorials using Swagger UI?
  **A** (@Dmitry, msg#9396): Currently difficult; user-friendly complex scripts support will be implemented after mainnet launch.

- **Q** (@Obi, msg#9427): Getting 403 forbidden error when calling `/wallet/init`.
  **A** (@Unknown, msg#9433): Need to set API hash key in config file (using Blake2b-256 script from wiki), then authorize node with corresponding secret. Use Swagger to interact after authorization.

- **Q** (@Dmitry V, msg#9518): Where is rigorous specification for VM and block format?
  **A** (@Unknown, msg#9518 context): Only examples and computational model clues available; full spec needed for independent reimplementation without reverse engineering.

- **Q** (@Unknown, msg#9500): Why doesn't testnet explorer recognize 3W addresses?
  **A** (@Dmitry Usov, msg#9503): Explorer doesn't support address searching. (@Unknown, msg#9509): Addresses displayed differently in explorer "with some magic probably to hide miner better."

- **Q** (@Unknown, msg#9504): Confusing decimals in balance display.
  **A** (@Unknown, msg#9505): Divide values by 1,000,000,000 (using smallest denomination to avoid floating-point precision issues).

- **Q** (@Obi, msg#9537): How to obtain 80-character explorer format address instead of 52-character wallet address?
  **A** (@Dmitry Usov, msg#9503 context): Unclear response; addresses appear in different formats in different interfaces.

- **Q** (@Adit Gupta, msg#9460): To spend coins on mainnet, do I need both light wallet and full node?
  **A** (Implicit): Full node sufficient; wallet functionality accessible via node API after launch.

- **Q** (@T, msg#9458): Running full node makes IP publicly visible?
  **A** (No direct answer provided).

- **Q** (@Sherlock Shi, msg#9727): After mining block in testnet, can't see new balance in wallet.
  **A** (@Unknown, msg#9734): Balance visible in `/mining/miningReadMinerRewardAddress`; mined block rewards take 720 blocks (~2 days) before they become spendable.

- **Q** (@Unknown, msg#9772): What happens when all coins are mined in 8 years?
  **A** (@Unknown, msg#9774): Storage rent continues providing miner rewards after emission ends. Fees are changeable by miners; Ergo launches with minimum parameters. After mainnet, team has no direct influence—only proposing fixes.

- **Q** (@Unknown, msg#9776): Initial storage fee amount and dormancy period?
  **A** (No direct answer; @Unknown, msg#9779 hints at 4-year dormancy threshold, @scalahub, msg#9788 notes whitepaper says rent deducted but balance remains).

- **Q** (@CryptoTeller, msg#9969): What values for `pass` and `mnemonicPass` in POST to `/wallet/init`?
  **A** (@Unknown, msg#9975): For mainnet, generate mnemonic with miner (not wallet) to get pubkeyhex. Mine without wallet setup; node receives boot settings at launch, then API becomes accessible for restore command.

- **Q** (@Sykoboy, msg#9849): How to compile node from source?
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#9851): Follow mining guide. (@Alex Slesarenko, msg#9857): Reduce logging with `java -jar -Xmx4G -Dlogback.stdout.level=WARN ergo.jar --testnet -c ergo.conf` (levels: TRACE | DEBUG | INFO | WARN | ERROR).

- **Q** (@CryptoTeller, msg#10014): Java heap size error on Windows: "could not reserve enough space for 3145728KB object heap"?
  **A** (@Unknown, msg#10021): 32-bit JRE installed; must use 64-bit Java.

## Links Shared

- [https://ergoplatform.org/en/blog/2019_05_20-curve/](https://ergoplatform.org/en/blog/2019_05_20-curve/): Emission curve and EFYT swap mechanism documentation.

- [https://github.com/ergoplatform/ergo/wiki/Set-up-a-full-node](https://github.com/ergoplatform/ergo/wiki/Set-up-a-full-node): Complete full node setup instructions.

- [https://github.com/ergoplatform/ergo/blob/master/src/main/resources/nodeTestnet/application.conf](https://github.com/ergoplatform/ergo/blob/master/src/main/resources/nodeTestnet/application.conf): Reference testnet configuration file.

- [https://github.com/ergoplatform/ergo/tree/master/src/main/resources](https://github.com/ergoplatform/ergo/tree/master/src/main/resources): All configuration files (mainnet, testnet, samples).

- [https://ergoplatform.org/en/blog/2019_05_07_mining/](https://ergoplatform.org/en/blog/2019_05_07_mining/): Autolykos GPU miner compilation guide.

- [https://testnet.ergoplatform.com/](https://testnet.ergoplatform.com/): Testnet explorer.

- [https://ergoplatform.org/en/blog/2019_06_28_mainnet-bootstrap/](https://ergoplatform.org/en/blog/2019_06_28_mainnet-bootstrap/): Mainnet bootstrap instructions (miner setup, pubkeyhex generation).

- [https://twitter.com/ergoplatformorg/status/1143824003632685056](https://twitter.com/ergoplatformorg/status/1143824003632685056): Official mainnet postponement announcement.

- [https://t.me/ergo_mining](https://t.me/ergo_mining): Dedicated Ergo mining Telegram channel for miner-specific questions.

- [http://dev.pywaves.org/assets/725Yv9oceWsB4GsYwyy4A52kEwyVrL5avubkeChSnL46](http://dev.pywaves.org/assets/725Yv9oceWsB4GsYwyy4A52kEwyVrL5avubkeChSnL46): EFYT token supply information on Waves blockchain.

- [https://ergoplatform.org/cn/faq/](https://ergoplatform.org/cn/faq/): Chinese FAQ (referenced for mining questions).

- [https://t.me/ergoplatform_CH](https://t.me/ergoplatform_CH): Chinese language Ergo Telegram group.

- [https://github.com/ergoplatform/ergo/releases/tag/v3.0.0](https://github.com/ergoplatform/ergo/releases/tag/v3.0.0): Release 3.0.0 with breaking changes announced June 28.

## Unresolved Questions

- Exact mechanics of EFYT-to-ERG swap during first year (treasury order release vs. market-based mechanism) left vague; @Unknown (msg#9895) stated "exact details are unknown at this moment."

- Whether complex ErgoScript contracts could be deployed pre-mainnet or only post-launch; deferred to post-launch tooling.

- AMD GPU miner availability by mainnet launch—promised "if all goes well" but not confirmed shipped before July 1.

- Address format discrepancy: 52-character Wallet addresses (3W...) vs. 80-character explorer addresses; @Obi raised twice (msg#9537, msg#9648) without clear resolution.

- Governance mechanism for changing protocol parameters (block size, storage rent, difficulty) post-mainnet—described as "changeable by miners" but exact governance process not specified.

- NTP (Network Time Protocol) integration for Windows nodes (@Unknown, msg#10036: "you don't have ntp as a Windows user") left as warning rather than resolved issue.