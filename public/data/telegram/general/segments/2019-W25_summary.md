---
title: "Ergo General Chat — 2019-W25"
date_start: "2019-06-17"
date_end: "2019-06-23"
type: telegram_weekly
channel: general
week: "2019-W25"
source: telegram
message_count: 558
categories: [governance, mining, technical, wallet, defi, ecosystem, community]
key_terms: [mainnet launch, June 28, postponed, security audit, AMD miner, GPU mining, NVIDIA, GTX 1070, RTX 2070, CUDA, miner.exe, configuration, external developers, GPU support, ready by launch, full node, wallet initialization, mnemonic, seed string, synchronization]
---
# Ergo General Chat — 2019-W25 Summary
**Period:** 2019-06-17 to 2019-06-23  
**Messages:** 558 | **Participants:** 37

---

## Key Topics Discussed

- **Mainnet Launch Status**: Postponed from June 20 to June 28, 2019. AMD miner readiness was a blocking concern; external developers were expected to deliver "this week" (msg#8760).

- **GPU Mining Setup**: Extensive discussion of Autolykos GPU miner configuration on Windows and Linux, with recurring issues around CUDA installation, memory requirements (≥3GB; 8GB recommended), and prehash optimization.

- **Node Configuration & Wallet Management**: Multiple users struggled with wallet initialization, synchronization status checks, node config files, and the relationship between mnemonicPass and API key hashing.

- **Storage Rent & Economic Model**: Storage fees explained as a mechanism to control state size, enable coin recovery from lost keys, and provide post-emission miner rewards (msg#8962).

- **Token Swap Mechanics (EFYT → ERG)**: EFYT will swap 1:1 to ERG at mainnet launch. ErgoData token will be distributed 2:1 to EFYT holders, possibly as a sidechain after 2–3 years (msgs#9283–9285).

- **Atomic Exchange & DEX Design**: Core protocol includes atomic exchange; off-chain protocols allow transactions to be bundled with exchange in a single on-chain post—described as "DEX of DEXes" (msg#8637).

- **Privacy Features**: Non-interactive tumblers and mixing using protocol-level mechanisms without third-party custodians (msg#8639).

---

## Important Decisions or Announcements

- [@Unknown, msg#8780, 2019-06-19]: Mainnet launch date officially June 28, 2019 (postponed from June 20).

- [@Unknown, msg#8760, 2019-06-18]: AMD miner expected from external developers "this week."

- [@Unknown, msg#8932, 2019-06-20]: EFYT currently trades on Waves and Tidex; ERG will be tradable after mainnet + 24 hours (when miners can spend rewards).

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#8791, 2019-06-19]: Adoption priorities: MainNet + mining instructions + AMD support + standalone wallet over Reddit/Discord at this stage.

- [@Unknown, msg#8962, 2019-06-20]: Storage fee parameters will be adjustable by miners post-launch; developers will only propose changes, not enforce them.

---

## Technical Q&A Worth Preserving

### Wallet & Node Sync

- **Q** (@Sergei Mironov, msg#8654): Transaction visible on blockchain but wallet balance remains zero.  
  **A** (@Unknown, msg#8656): If using wallet version <2.1.2, must resync and create new addresses due to database format changes.

- **Q** (@CUTE Orca, msg#8826): How to verify node sync status?  
  **A** (@Unknown, msg#8827–8830): Use endpoint `http://127.0.0.1:9052/info`; headers should reach ~74,099 before full-height sync begins (~3 hours).

- **Q** (@Ilya Oskin, msg#8691): Mined blocks but no balance?  
  **A** (@Ilya Oskin, msg#8694): Miner rewards are locked for 720 blocks; coins belong to a special p2s address derived from script, not user's deterministic address (msg#8696).

### Mining Configuration

- **Q** (@Rimov R, msg#9006): Build error: `openssl/bn.h: No such file or directory`  
  **A** (@Unknown, msg#9028): Use OpenSSL v1.0.2s (full installer, 23MB) instead of source-only versions; ensure `C:\OpenSSL\include\openssl\bn.h` path exists.

- **Q** (@CUTE Orca, msg#8814): Should `useExternalMiner` be true?  
  **A** (@Unknown, msg#8819): Set `mining = true` for CPU-only; `useExternalMiner = true` to use GPU miner.

- **Q** (@Unknown, msg#8728): "Generated and received public keys do not match" error in Autolykos GPU miner.  
  **A** (@Unknown, msg#8730): If wallet initialized with `mnemonicPass`, reinitialize with empty `mnemonicPass: ""`.

- **Q** (@ponte, msg#9191): How to send testnet ERG after achieving balance?  
  **A** (@Unknown, msg#9193–9194): Use Swagger endpoint `/wallet/walletPaymentTransactionGenerateAndSend` with recipient address and value (1000000000 = 1 ERG with 8 decimals).

### Memory & Performance

- **Q** (@Max f, msg#8873): Can Autolykos be optimized for 6GB GPUs?  
  **A** (@Unknown, msg#8874): Keeprehash requires ~7.85GB minimum; simultaneous system use is impractical on 6GB cards.

- **Q** (@ponte, msg#8869): GPU using 7775/8116 MiB but no prehash output.  
  **A** (@Unknown, msg#8871): Minimum memory threshold for keepPrehash is ~7,850,000,000 bytes (~7.81GB); miner allocates ~7,810,000,000 bytes.

### Protocol & Economics

- **Q** (@UpwindStrategy, msg#8949–8951): Does storage rent incur annual wallet fees? Will 100M future supply dilute current valuation?  
  **A** (@Unknown, msg#8962): Storage fees reward miners and prevent deflation; miners adjust parameters post-launch. Future supply inflation should be factored into valuation models.

---

## Links Shared

- [Ergo Mining Tutorial (Windows x64)](https://ergoplatform.org/blog/2019_05_07_mining/): Official setup guide.

- [Ergo First Year Token (EFYT) Emission Curve](https://ergoplatform.org/en/blog/2019_05_20-curve/): Token distribution schedule; EFYT = 10% of Year 1 ERG supply.

- [Ergo Wallet Documentation](https://ergoplatform.org/en/blog/2019_06_04_wallet-documentation/): Mnemonic/seed initialization and wallet lifecycle.

- [GitHub Ergo Mining Wiki](https://github.com/ergoplatform/ergo/wiki/Mining): Cross-platform mining setup.

- [GitHub Set-up Full Node](https://github.com/ergoplatform/ergo/wiki/Set-up-a-full-node): Node installation and configuration.

- [Reference Configuration Files](https://github.com/ergoplatform/ergo/tree/master/src/main/resources): Default and sample configs (testnet.conf, local.conf.sample).

- [Testnet Release Downloads](https://github.com/ergoplatform/ergo/releases): JAR builds (e.g., ergo-testnet-2.1.2.jar).

- [Ergo on Tidex Exchange](https://tidex.com/): EFYT trading pair (BTC).

- [Waves DEX EFYT Pair](https://waves.exchange/): Alternative EFYT liquidity.

---

## Unresolved Questions

- **AMD Miner Availability**: External developers promised delivery "this week" (June 18), but no delivery confirmation before week end; status remains unclear for June 28 launch window.

- **Discord Channel**: Multiple requests for a Discord server (msgs#8687, #8789, #9325–#9328). Moderator indicated "not yet" as of June 21; no decision announced.

- **Mainnet Launch Time**: June 28 confirmed as date, but no specific UTC timestamp provided; community asked (msg#9166) but answer was "we don't know yet."

- **Node Stability**: One user reported node crashes after 1–2 days with timeout errors (msg#9226). Suggestion to move data folder out of /tmp, but root cause not identified.

- **Wallet Balance Recovery**: Several users (Rimov R, CUTE Orca) unable to unlock wallets or access mining rewards despite following instructions; logs and configuration mismatches not fully resolved within chat.

- **ErgoData Sidechain Timing**: Planned 2–3 years post-mainnet if demand exists; format (Ergo sidechain vs. Waves token) undecided.

---

**Notes:**
- Week dominated by pre-mainnet infrastructure troubleshooting; minimal protocol design discussion.
- User support was ad-hoc and scattered across many configuration edge cases.
- Price discussion emerged late week (msgs#9259–#9316) but was redirected as off-topic per channel policy.