# Ergo General Chat Summary — 2019-W23

## Key Topics Discussed

- **MainNet Launch Status & Security Audit**: MainNet planned for June 20, 2019, pending successful security audit results and clean TestNet environment validation. Launch date contingent on audit completion and no blocking issues discovered.

- **Mining Hardware & Configuration**: Discussion of GPU suitability for Autolykos mining; Nvidia 1070/1080 recommended as best performers. CUDA architecture codes documented (e.g., sm_60 for GTX 1080 Ti). Multi-GPU miner exists but test.out tool only benchmarks single GPU per run.

- **Node Setup & Requirements**: Recommended specs: 4 GB RAM, 2 CPU cores, 80 GB SSD. Node supports both Linux and Windows (via JVM). Latest testnet client (post-2.1.0) has address generation bug (9-character prefix instead of 3W); reversion to 2.1.0 resolves issue.

- **Transaction Building & Serialization**: ErgoScript register serialization (e.g., R4) requires Sigma serialization format; user-friendly tooling for this workflow not yet available. Removing registers from JSON payload allows basic transaction construction via Swagger API.

- **EFYT Token Swap Mechanics**: EFYT (Waves platform token) swaps to ERG post-MainNet via gateway; process takes ~6 months as swap fund = 10% of block rewards. Users must manually execute swap; exchanges (Waves DEX) will not auto-swap. Only EFYT on Waves DEX currently.

- **Block Height vs Timestamp Dependencies**: Some dApps rely on block height rather than timestamp; faster block times would affect these mechanisms and emission contracts. Timestamp-based contracts would adapt more easily to increased block speed.

- **Charles Hoskinson & IOHK Connection**: Ergo core developers worked with IOHK/Charles Hoskinson on Scorex precursor. Professional relationship; not a primary reason for his public support. IOHK received 100,000 EFYT airdrop divided among multiple developers.

## Important Decisions or Announcements

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#7523, 2019-06-03]: Launch date pending security audit results and clean TestNet environment; if favorable, June 20 date held.

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#7525, 2019-06-03]: Magnum wallet will support ERG after MainNet launch.

- [@Dmitry, msg#7638, 2019-06-05]: TestNet remains in security audit and testing phase; MainNet launch targeted for June 20 if no problems found.

- [@Dmitry, msg#7679, 2019-06-05]: Latest release does not work with Java 8; fix incoming.

- [@Dmitry, msg#7618, 2019-06-04]: Registers field in JSON payload causing serialization errors; removing it allows transactions to work. GitHub issue #763 opened to fix OpenAPI examples.

- [@Unknown, msg#7758, 2019-06-07]: Website FAQ Telegram link bug will be fixed shortly.

- [@Rejinderi, msg#7857-7858, 2019-06-07]: Address generation bug confirmed in latest testnet client; addresses generated with 9-character prefix instead of 3W. Reversion to v2.1.0 resolves issue.

## Technical Q&A Worth Preserving

- **Q** (@Unknown, msg#7526): Is there a guide for building transactions in the node?
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#7528): Check the Tools section on ergoplatform.org website. For latest development, GitHub is the canonical source.

- **Q** (@CryptoTeller | TREEINCAT, msg#7537): Is scaling down to block size? Any sharding etc?
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖝𝖘𝖚𝖎𝖘𝖙կշօ, msg#7539): Refer to Foundational Papers on ergoplatform.org/documents/ for scalability research.

- **Q** (@ponte, msg#7568): Getting "ErgoTreeSerializer.deserialize" error when submitting transaction with R4 register data.
  **A** (@Ilya Oskin, msg#7604): Data must be serialized using Sigma serialization format; Scala implementation available but no user-friendly tooling yet. (@Dmitry, msg#7618): Remove registers field from JSON and transaction will work.

- **Q** (@Unknown, msg#7587): Should I use Equihash to gauge hash rate for Autolykos comparison?
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#7588): Could be good way to compare vs current TestNet hash rate.

- **Q** (@Adit Gupta, msg#7745): What does CUDA_COMPUTE_ARCH mean in GPU mining guide?
  **A** (@Unknown, msg#7754-7757): CUDA architecture code matching GPU model. For GTX 1080 Ti (Pascal architecture), use sm_60. Reference: NVIDIA CUDA docs and https://arnon.dk/matching-sm-architectures-arch-and-gencode-for-various-nvidia-cards/

- **Q** (@Adit Gupta, msg#7813-7814): When starting miner, only one GPU utilized; how to enable all?
  **A** (@Unknown, msg#7823): Check CUDA driver installation. (@Unknown, msg#7827-7828): Multi-GPU miner handles this automatically once test application (not test.exe) is replaced with actual miner.

- **Q** (@Rejinderi, msg#7799-7803): Miner returns "FAILED TO CREATE CANDIDATE" error with correct node address.
  **A** (@Rejinderi, msg#7804-7805): Node resync and redownload of testnet client resolved the issue.

- **Q** (@ponte, msg#7564): Cannot send transaction; balance shows but no token ID specified, resulting in error.
  **A** (@Unknown, msg#7565-7566): Check Swagger wallet API example at http://127.0.0.1:9052/swagger#/wallet/walletPaymentTransactionGenerateAndSend

- **Q** (@Rumato Estorsky, msg#7966-7969): test.out GPU benchmark shows 19 MH/s for 3 GPUs; why same as single GPU?
  **A** (@Dmitry, msg#7968): test.out prints per-GPU hashrate separately; total is sum of all. Verify log output shows per-GPU rates. (@Unknown, msg#7970): 19 MH/s is correct for single 1070 8GB without overclocking at keepPrehash=false.

- **Q** (@Overcooked Panda, msg#7982): Unclear about pass and mnemonic_pass parameters in /wallet/init API call.
  **A** (@scalahub, msg#7987-7989): Set both via the API call itself. Refer to blog documentation for specifications.

- **Q** (@Unknown, msg#7577): Does wallet balance show current height even with 0 balance?
  **A** (@ponte, msg#7579): Shows 0 balance with current height only if node is fully synched.

## Links Shared

- [ergoplatform.org/tools/](https://ergoplatform.org/tools/): Tools and utilities documentation.

- [ergoplatform.org/documents/](https://ergoplatform.org/documents/): Foundational Papers including scalability and consensus research.

- [https://ergoplatform.org/blog/2019_05_07_mining/](https://ergoplatform.org/blog/2019_05_07_mining/): GPU mining setup guide with step-by-step instructions.

- [https://docs.ergoplatform.com/ErgoPow.pdf](https://docs.ergoplatform.com/ErgoPow.pdf): Autolykos PoW scheme documentation.

- [https://github.com/ergoplatform/ergo/issues](https://github.com/ergoplatform/ergo/issues): GitHub issue tracker for bug reports.

- [https://github.com/ergoplatform/Autolykos-GPU-miner](https://github.com/ergoplatform/Autolykos-GPU-miner): GPU miner source and wiki.

- [https://github.com/ergoplatform/ergo/issues/763](https://github.com/ergoplatform/ergo/issues/763): GitHub issue for OpenAPI example fixes (register serialization).

- [https://twitter.com/ergoplatformorg/status/1135581427305779201](https://twitter.com/ergoplatformorg/status/1135581427305779201): Community Twitter engagement request.

- [https://youtu.be/zuosRSVxzoQ?t=3127](https://youtu.be/zuosRSVxzoQ?t=3127): Cardano Effect podcast episode featuring Ergo 2.5-minute shoutout.

- [https://twitter.com/chepurnoy/status/1137800291397656577](https://twitter.com/chepurnoy/status/1137800291397656577): Developer (kushti) Twitter update on project progress.

- [https://docs.nvidia.com/cuda/cuda-compiler-driver-nvcc/index.html#gpu-feature-list](https://docs.nvidia.com/cuda/cuda-compiler-driver-nvcc/index.html#gpu-feature-list): NVIDIA GPU feature and compute capability reference.

- [https://arnon.dk/matching-sm-architectures-arch-and-gencode-for-various-nvidia-cards/](https://arnon.dk/matching-sm-architectures-arch-and-gencode-for-various-nvidia-cards/): CUDA compute capability mapping for Nvidia GPUs.

- [http://127.0.0.1:9052/swagger](http://127.0.0.1:9052/swagger): Local Swagger API documentation for node wallet operations.

## Unresolved Questions

- **Faster Block Times Impact**: Whether increasing block speed would require consensus-breaking changes for height-dependent dApps and emission contracts; no formal proposal or decision recorded. (@Unknown, msg#7728): Concerns raised about audited version compatibility with subsequent protocol changes.

- **Scalability Approach**: Whether Ergo will pursue sharding, layer 2, sidechains, or other scaling solutions post-MainNet. Discussion referenced but no concrete roadmap shared.

- **Mining Pool Architecture**: Whether Autolykos anti-pooling mechanism will be circumvented; protocol prevents reward delegation to pool keys, but implementation workarounds not discussed.

- **Exchange Listing Timeline**: Talks ongoing with "multiple exchanges" but no specific commitments, timelines, or listing priorities confirmed. Fee structure cited as primary barrier for some exchanges.

- **Wallet Support & Portability**: Standalone wallet and MainNet-compatible node setup details promised "in due time" but deferred pending MainNet stabilization.

- **EFYT Swap Priority & Queue**: Order of EFYT-to-ERG redemption (FIFO vs other mechanism) unspecified; only ~6-month completion window confirmed.