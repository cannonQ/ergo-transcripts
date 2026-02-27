# Ergo General Chat Summary — 2019-W51

## Key Topics Discussed

- **Wallet Storage & Safety**: Discussion of private key storage for ERG, comparison to BTC/ETH, evaluation of web wallets (Magnum) vs. node-based solutions. Concerns raised about security trade-offs for adoption.

- **Mining Hardware & Node Requirements**: Queries about mining profitability, GPU requirements (GTX 1060, GTX 1070), power consumption, and feasibility of running nodes on low-resource hardware (Raspberry Pi). Data provided: ~40,000 GTX 1070 equivalents active on network; full node sync requires ~1.1GB RAM, light node ~1GB RAM.

- **Autolykos GPU Miner Binaries**: Community discussion of precompiled miner builds for Windows and AMD. Security warning issued: self-compilation from source recommended due to private key handling in mining operations.

- **Browser Extension Wallet**: Launch of light wallet extension (Coinbarn) submitted to Chrome store; entered manual review stage due to cryptocurrency plugin scrutiny. Developer build installation documented.

- **Smart Contract Security**: Claims about Ergo's smart contract security posture compared to Bitcoin clones and other platforms. Assertion that Ergo should offer "richer functionality" including privacy via Sigma protocols, with potential to be "real winner in this category" by end of 2020 with proper tooling & formal verification support.

- **Emission Schedule & Token Supply**: Questions about max supply (infinite vs. capped), circulating supply discrepancies between CoinMarketCap (5M) and actual, and unlock timelines for developer-locked coins.

## Important Decisions or Announcements

- [@Unknown, msg#15568, 2019-12-18]: **Ergo Cast grant approved** — "Ergo Cast is the first grant approved by the Ergo Foundation with existing squad :)"

- [@Dmitry, msg#15638, 2019-12-20]: **Browser extension developer build available** — Published instructions for manual Chrome installation via GitHub; official Chrome store review in progress.

- [@Unknown, msg#15620, 2019-12-19]: **Light wallet under review** — "Looks like light wallet for browser is under review already 👍"

## Technical Q&A Worth Preserving

- **Q** (@KJSDNGlksdnnds, msg#15449, 2019-12-16): Can I use a private key for storing ERGs like BTC or ETH?  
  **A** (@Unknown, msg#15497): Web wallet option available (Magnum); self-custody via private key also possible.

- **Q** (@KJSDNGlksdnnds, msg#15495, 2019-12-16): How can Ergo be popular if coins can't be stored safely without running a node?  
  **A** (@Sonny | Does Not Know, msg#15497): Web wallets exist as alternative (e.g., Magnum); though noted as "least option" for security.

- **Q** (@ANGELpool, msg#15529–15530, 2019-12-17): Mining power requirements, internet stability needs, Raspberry Pi viability, hardware/OS recommendations?  
  **A** (@Unknown, msg#15532–15534): Full node requires ~1GB RAM, ~25% CPU during sync (74 min); light node ~1GB RAM, 25 min sync. Raspberry Pi feasible for light node; hardware demands modest. Newer version (3.2.0) promised with reduced memory footprint.

- **Q** (@Pepeger, msg#15548, 2019-12-18): Is testnet available? How to set up CPU miner for testnet?  
  **A** (@Unknown, msg#15551): Testnet operational; GPU mining also possible.

- **Q** (@scalahub, msg#15578, 2019-12-18): Are precompiled miner binaries officially supported?  
  **A** (@Dmitry, msg#15585, 2019-12-19): No. "It is always better to compile by yourself from sources as far as miner operates with your private keys."

- **Q** (@Unknown, msg#15611, 2019-12-19): Can we say Ergo has the most secure smart contracts?  
  **A** (@Unknown, msg#15612–15614): Bitcoin clones offer simplicity; Ergo offers "richer functionality" including privacy via Sigma protocols. By end of 2020, Ergo has chance to be "real winner in this category" given solid model, tooling support, and formal verification capability.

- **Q** (@Dim, msg#15700, 2019-12-21): Which wallets support Ergo?  
  **A** (@Unknown, msg#15701): Magnum wallet supported.

- **Q** (@Unknown, msg#15709, 2019-12-22): Why is CMC circulating supply only 5M? Is it excluding dev-locked coins?  
  **A**: Not explicitly answered; implicit: yes, dev-locked coins excluded.

## Links Shared

- [EmissionRules.scala](https://github.com/ScorexFoundation/sigmastate-interpreter/blob/98c27448da29d7cb7521d378080d5c52c13b76c3/sigmastate/src/main/scala/org/ergoplatform/mining/emission/EmissionRules.scala): Ergo emission curve implementation (msg#15493)

- [Autolykos GPU Win64 Binary](https://github.com/rsmmnt/AutolykosGPUWin64binary): Precompiled Windows GPU miner (msg#15580)

- [Coinbarn Extension Developer Build](https://github.com/coinbarn/coinbarn-extension#running-developer-build-in-chrome-browser): Instructions for manual Chrome installation of light wallet (msg#15638)

- [Ergo Forum](https://www.ergoforum.org): Official community forum (msg#15703)

- [Magnum Wallet](https://magnumwallet.co): Web-based wallet supporting ERG (msg#15701)

## Unresolved Questions

- **Unlock Timeline**: @Unknown (msg#15711) requested viewable unlock schedule for dev-locked coins; no response provided.

- **EFYT Migration**: @scalahub (msg#15707) asked whether there is reason to keep EFYT on Waves instead of migrating to ERG at 1:1 rate; no resolution recorded.

- **Magnum Open-Source Status**: @Andrey Andreev (msg#15527) questioned whether Magnum is truly open-source, noting absence of public source links; not resolved.

- **Chrome Store Review Timeline**: No ETA provided for completion of Ergo extension manual review process.