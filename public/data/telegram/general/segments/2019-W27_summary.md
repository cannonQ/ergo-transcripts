---
title: "Ergo General Chat — 2019-W27"
date_start: "2019-07-01"
date_end: "2019-07-07"
type: telegram_weekly
channel: general
week: "2019-W27"
source: telegram
message_count: 1379
categories: [technical, mining, wallet, governance, ecosystem, community]
key_terms: [mainnet launch, node setup, configuration, bootstrap, genesis block, GPU mining, NVIDIA miner, Autolykos, AMD support, hashrate, difficulty retarget, wallet unlock, apiKeyHash, swagger, wallet initialization, mnemonic restore, reward address, rewardAddress, P2S address, 720 block delay]
---
# Ergo General Chat — 2019-W27 Summary
**Period:** 2019-07-01 to 2019-07-07

---

## Key Topics Discussed

- **Mainnet Launch (2019-07-01)**: Ergo mainnet went live at 10:00 AM UTC after initial difficulty calibration issues. An incorrect initial difficulty forced a 5-hour postponement while developers corrected genesis block parameters from `1200000000000` to `011765000000`.

- **GPU Mining & Autolykos**: Mining requires NVIDIA GPUs with ≥3GB VRAM; CUDA support only at launch. Prehash feature caused memory errors on some cards. Hashrate distributions showed 40-50 MH/s on RTX 2080Ti, ~40 MH/s on GTX 1080Ti, and ~31 MH/s on GTX 2070.

- **Pool Resistance Design**: Ergo implements pool-resistant mining to enforce solo mining; sharing private keys to pools is not supported. This led to early concerns about small miners being unable to find blocks competitively as hashrate reached 1+ TH/s by July 3.

- **Wallet & Node Setup Complexity**: Users struggled to initialize wallets, unlock nodes via Swagger, and configure apiKeyHash. Manual wallet initialization with mnemonics generated during setup was required; wallet remained locked until after mainnet bootstrap completed.

- **Block Rewards & Maturity**: Mining rewards (67.5 ERG per block after 7.5 ERG foundation share) require 720-block confirmation delay before spending. Initial supply reached ~300k ERG by July 3 with ~54k ERG mined daily.

- **EFYT to ERG Conversion Strategy**: Foundation plans 1:1 swap via Waves gateway with dynamic sell wall as treasury accumulates mined ERG. Swap timing dependent on sufficient ERG accumulation; initial treasury held ~30k ERG by July 3.

- **Exchange Listings**: Tidex listed ERG/BTC market immediately but with 200-confirmation deposit requirement (initial 10 then raised to 200). P2PB2B and Waves integration announced for ~2 weeks out. OTC Discord established for peer-to-peer trading.

- **Storage Rent & Emission Curve**: Block rewards remain 75 ERG (75 per block total) for 2+ years, then decline per emission schedule published in blog post. Whitepaper references storage rent mechanism design.

- **Node Synchronization Issues**: Users encountered `None.get` exceptions and full height stuck at null. Solution: delete `.ergo` directory and resync with latest mainnet version using `--mainnet` flag and corrected configuration.

---

## Important Decisions or Announcements

- [@Dmitry, msg#10384, 2019-07-01 05:29]: Launch postponed to 15:00 MSK (12:00 UTC) due to initial difficulty miscalibration.

- [@Dmitry, msg#10439, 2019-07-01 05:45]: Configuration correction: add `ergo.chain.initialDifficultyHex="011765000000"` and remove `.ergo` data directory before restart.

- [@Dmitry, msg#10530, 2019-07-01 06:04]: 8 blocks mined immediately post-correction; underestimated hashrate at launch (reached ~173 GH/s before first 2048-block difficulty recalculation).

- [@Dmitry, msg#10577, 2019-07-02 13:27]: First difficulty recalculation scheduled at block 2048, then every 1024 blocks thereafter.

- [@Evgeniya (Tidex), msg#11316, 2019-07-02 16:19]: Tidex listing confirmed with planned airdrop and promotional activities announced.

- [@mentalist420, msg#11323, 2019-07-02 16:23]: kushti writing withdrawal instructions in progress.

- [@mentalist420, msg#11342 & msg#11619, 2019-07-02 16:48]: EFYT/ERG 1:1 swap wall planned on Waves DEX pending sufficient ERG treasury accumulation.

- [@mentalist420, msg#11879, 2019-07-06 17:22]: No Discord channel active yet; Telegram remains primary platform.

---

## Technical Q&A Worth Preserving

**Node & Wallet Configuration**

- **Q** (@C0MM4ND M, msg#10096): How to get wallet address from testnet node and confirm availability on mainnet?
  **A** (@CryptoTeller | TREEINCAT, msg#10156): Cannot initialize wallet until mainnet launch; generate mnemonic for miner setup, restore wallet post-launch with mnemonic phrase.

- **Q** (@Emanuele, msg#10062): Trouble authorizing node Swagger with correct conf file.
  **A** (@CryptoTeller | TREEINCAT, msg#10070): Wallet authorization issues pre-launch; use miner-based setup instead.

- **Q** (@ponte, msg#10121): Should miner and node run on same machine; what IP address to use?
  **A** (@ponte, msg#10130): Use `127.0.0.1:9053` for local setup; use remote VPS public IP for distributed mining rigs.

- **Q** (@Max f, msg#10874): Getting 403 Forbidden on wallet init/unlock via Swagger despite correct apiKeyHash.
  **A** (@Ilya Oskin, msg#10883): apiKeyHash must be blake2b256 hash of secret; apiKey header must contain pre-image (plaintext secret), not the hash.

- **Q** (@Max f, msg#10896): Miner returning "Incorrect points" error with 0 MH/s on all cards.
  **A** (@Ilya Oskin, msg#10898): Verify minerPubKeyHex is set correctly; check for spaces or `0x` prefix in pubkey hex representation.

- **Q** (@Ilya Oskin, msg#10878-880): REST API wallet access returning 403 errors.
  **A** (@Ilya Oskin, msg#10883-884): Configure apiKeyHash with blake2b256 hash; pass apiKey as HTTP header, not GET parameter.

**Mining & Block Rewards**

- **Q** (@Angry Z, msg#10087): How to check if mining was successful; balance shows 500 error.
  **A** (@gunray, msg#10636 & msg#10637): Use `/mining/rewardAddress` API endpoint, then look up address on explorer.

- **Q** (@CryptoTeller | TREEINCAT, msg#10660): Estimated daily earnings with 40 MH/s at 0.8% of network hashrate.
  **A** (@reb0rn21, msg#10662): Hashrate estimate incorrect; network is 10-20x higher; estimate block time from orphan rate.

- **Q** (@KJSDNGlksdnnds, msg#10701): 805 blocks mined but only 25,725 ERG in supply; 75 ERG/block should yield 60,375 ERG.
  **A** (@Dmitry, msg#10713): Explorer bug at top; total is correct elsewhere.

- **Q** (@Rumato Estorsky, msg#10771): Formula for deducing hashrate from difficulty; is relationship linear?
  **A** (@Ilya Oskin, msg#10836): `Hashrate = Difficulty / blockIntervalSec` (linear relationship).

- **Q** (@C0MM4ND M, msg#10919): How to calculate miner reward in a block; no "value" or "reward" field in header?
  **A** [@mentalist420, msg#11276]: Detailed instructions posted in pinned message (link provided).

- **Q** (@Obi, msg#10907 & msg#11160): Mined block shows on explorer but balance not visible in Swagger; when can rewards be spent?
  **A** (@Ilya Oskin, msg#11161): 720-block maturity delay required before reward is spendable.

**Address & Transaction Formats**

- **Q** (@CryptoTeller | TREEINCAT, msg#10963): Relationship between rewardAddress and wallet address; how to check balance?
  **A** (@Obi, msg#10983): rewardAddress is mining payout address (P2S format starting with `88`); look up on explorer, then restore wallet with mnemonic to spend.

- **Q** (@C0MM4ND M, msg#10260): Why rewardAddress differs from /wallet/addresses in content and string length?
  **A** [@mentalist420, msg#11276]: See pinned withdrawal instructions for detailed explanation.

- **Q** (@Unknown, msg#11400): Is address starting with `9i` valid?
  **A** (No response recorded).

**Explorer & Blockchain Stats**

- **Q** (@Alexey Kiselev, msg#11473): How is transaction with 290k ERG output possible when total supply is 288k ERG?
  **A** (Flagged for kushti investigation; no resolution provided).

- **Q** (@Obi, msg#11294): Explorer stats page showing 855 blocks; is that total or 24-hour stats?
  **A** (@Alex Novak, msg#11295 & msg#11298): Stats tab shows blocks mined in past 24 hours, not cumulative total.

---

## Links Shared

- [Ergo Explorer Mainnet](https://explorer.ergoplatform.com/): Official block explorer; shows transaction data, address balances (after 720-block confirmation), and network statistics.

- [Ergo Platform Blog - Mainnet Bootstrap](https://ergoplatform.org/en/blog/2019_06_28_mainnet-bootstrap/): Official mainnet setup guide with node compilation and miner configuration.

- [Ergo Platform FAQ](https://ergoplatform.org/en/faq/): High-level project overview and frequently asked questions.

- [GitHub Ergo Node Wiki](https://github.com/ergoplatform/ergo/wiki): Node configuration, wallet documentation, and technical specifications.

- [GitHub Autolykos GPU Miner](https://github.com/ergoplatform/Autolykos-GPU-miner): Official GPU miner source code (CUDA, Nvidia only at launch).

- [GitHub Autolykos GPU Win64 Binary](https://github.com/rsmmnt/AutolykosGPUWin64binary): Community-compiled Windows miner binary.

- [Emission Curve & Supply Blog Post](https://ergoplatform.org/en/blog/2019_05_20-curve/): Detailed explanation of ERG emission schedule and long-term supply dynamics.

- [Tidex Exchange ERG Market](https://tidex.com/exchange/erg/btc): First exchange listing for ERG/BTC pair; deposits required 200 confirmations.

- [Magnum Wallet](https://app.magnumwallet.io/): Third-party web wallet supporting ERG; confirmed working by July 5.

- [Waves Platform Gateway Framework](https://github.com/wavesprotocol/waves-community-gateway): For development of Waves ↔ Ergo bridge (mentioned as self-service option).

- [PyWaves Asset Info - EFYT](http://dev.pywaves.org/assets/725Yv9oceWsB4GsYwyy4A52kEwyVrL5avubkeChSnL46): EFYT token ID on Waves for reference.

- [Ergo Mining Channel](https://t.me/ergo_mining): Dedicated Telegram group for mining-specific support and discussion.

- [Official Russian Community](https://t.me/ergoplatform_ru): Official Russian-language group (note: separate from unofficial alternatives).

- [Ergo OTC Discord](https://discord.gg/EQZK9XQ): Peer-to-peer trading channel (mentioned msg#10982, moved to Telegram later per msg#11529).

- [Discourse Forum Software](https://www.discourse.org/): Referenced as recommended modern forum platform for community (open-source, used by Zcash, Grin, Cardano).

---

## Unresolved Questions

- **AMD GPU Miner**: No AMD miner available at launch; only NVIDIA CUDA support. Status of AMD support timeline not announced.

- **Mining Pools**: Community interest in pool-resistant alternative implementations (e.g., decentralized pools); Rumato Estorsky indicated feasibility but noted >$10k R&D cost and security risk mitigation needs (msg#11648). No official pool development announced.

- **Waves Gateway Timeline**: ERG ↔ Waves gateway development mentioned as "down the road" (msg#11660); no concrete timeline provided. Foundation exploring EFYT/ERG 1:1 swap wall mechanics pending sufficient ERG accumulation.

- **Block Time Optimization**: Discussion on whether to increase block speed from 2 minutes to 15 seconds to improve small miner viability; no decision recorded. Requires parameter vote mechanism not yet implemented.

- **Desktop Wallet**: No official Windows or standalone desktop wallet released; users directed to Magnum (web), Nautilus (if available), or run full node. Linux users can compile node with built-in wallet.

- **Exchange Listings**: P2PB2B and Waves integration "~2 weeks out" but no confirmed dates. Coinlim and other exchanges inquiring about listing (msg#11695, msg#11749) but no responses recorded.

- **Alexey Kiselev Transaction Anomaly** (msg#11473): Explorer showed 290k ERG output but total supply was 288k ERG; flagged for investigation but resolution not documented in chat segment.

- **Wallet Lock on Unlock**: Some users reported wallet remaining locked even after `/wallet/unlock` API call succeeded; no definitive solution provided beyond node restart/data directory deletion.

- **Difficulty Recalculation Math**: Formula for hashrate from difficulty confirmed linear, but implications for long-term small miner participation debated without consensus.