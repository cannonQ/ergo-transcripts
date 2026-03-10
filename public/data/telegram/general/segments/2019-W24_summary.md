---
title: "Ergo General Chat — 2019-W24"
date_start: "2019-06-10"
date_end: "2019-06-16"
type: telegram_weekly
channel: general
week: "2019-W24"
source: telegram
message_count: 454
categories: [mining, technical, ecosystem, governance, community, marketing]
key_terms: [RTX 2080, GTX 1080 Ti, GPU selection, hashrate, mining rig, AutoLykos, ASIC resistant, pool resistant, decentralization, solo mining, node setup, wallet initialization, swagger API, apiKeyHash, mnemonic configuration, miner compilation, CUDA, Visual Studio, OpenSSL, Windows build]
---
# Ergo General Chat — Week 2019-W24 Summary

## Key Topics Discussed

- **Autolykos Mining Algorithm**: Pool-resistant, GPU-friendly proof of work algorithm requiring >= 3GB VRAM. NVIDIA support live on testnet; AMD miner development in progress, expected shortly after mainnet launch.

- **GPU Mining Hardware & Setup**: GTX 1070/1080/1080 Ti and RTX 2080 Ti identified as suitable miners. Discussion of prehashing on/off modes depending on available GPU memory; typical hashrates 12–20 MH/s on GTX 1060–1070 hardware. CPU mining possible but inefficient.

- **Node & Wallet Configuration**: Multiple users struggled with mnemonic phrase handling, mnemonicPass field, and wallet initialization via Swagger API. Consensus emerged: testMnemonic should be commented in node config with actual mnemonic phrase; mnemonicPass should be empty string if no password set.

- **EFYT to ERG Swap Mechanism**: After mainnet launch, Waves DEX gateway will enable EFYT holders to swap 1:1 with native ERG tokens minted from mining rewards. Treasury will purchase and burn all EFYT received. Timing tied to Waves team delivery of gateway.

- **Mainnet Launch Status**: Target date June 20, 2019 confirmed (msg#8411). Security audit ongoing. Potential 1-week postponement possible if Waves gateway delayed. Exchange integrations progressing; Tidex announced; Binance/other listings dependent on successful negotiations.

- **Storage Rent & Emission**: Block reward and 720-block delay discussed. Reward emission curve documented in blog post (msg#8589 references emission schedule); treasury distribution ~30 months post-launch.

---

## Important Decisions or Announcements

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#8270, 2019-06-13]: EFYT listed on Tidex Exchange; native ERG to be listed after mainnet launch.

- [@Dmitry, msg#8171, 2019-06-12]: Waves DEX gateway delivery is critical path item; Ergo launch may be postponed up to ~1 week if gateway unavailable.

- [@Dmitry, msg#8174, 2019-06-12]: Mainnet launch may be postponed no more than one week if blocking issues arise.

- [@Unknown, msg#8391, 2019-06-14]: External developer team promised AMD miner demonstration within one week (by ~2019-06-21).

- [@Unknown, msg#8393, 2019-06-14]: Security audit in progress; launch expected to be "pretty raw" (minimal polish).

---

## Technical Q&A Worth Preserving

- **Q** (@Overcooked Panda, msg#8067): Wallet initialization returns 403 error when calling wallet init API.
  **A** (@Ilya Oskin, msg#8072): Ensure `apiKeyHash` is configured and corresponding `apiKey` header is present in request.

- **Q** (@Unknown, msg#8075): ImportError on Python script — no module named secrets.
  **A** (@Ilya Oskin, msg#8076): Use Python >= 3.6.

- **Q** (@CryptoTeller | TREEINCAT, msg#8035): What prevents a group from operating 1000s of machines, each mining independently?
  **A** (@Unknown, msg#8042): Autolykos reduces hardware advantages; 90% majority voting and soft-forking prevents centralized takeover. Design philosophy prioritizes decentralized mining over pool operators.

- **Q** (@Rejinderi, msg#8214): GTX 1070 CUDA error code 2 (out of memory).
  **A** (@Rejinderi, msg#8214): Set `keepPrehash` to `false` in miner config for GPUs with < 8GB VRAM.

- **Q** (@Unknown, msg#8206): "Generated and received public keys don't match" miner error.
  **A** (@Unknown, msg#8212, msg#8496): Comment in `testMnemonic` field in node config with the actual mnemonic phrase used during wallet initialization.

- **Q** (@Unknown, msg#8461): Wallet initialized with mnemonic, unlocked, but miner reports address mismatch.
  **A** (@ponte, msg#8474; @Unknown, msg#8496): Verify mnemonic is correctly set in node config. If wallet has mnemonic password, add `"mnemonicpass": "yourpass"` to miner config.

- **Q** (@Unknown, msg#8526): Do newly mined coins require 720-block maturation before visible balance?
  **A** (Implicit from context, msg#8506–8515): Balance/unconfirmed balance API call can show immature coins; 720-block delay applies to spending.

- **Q** (@Ilya Cherevkov, msg#8565): Can Ergo be mined on OS X?
  **A** (@Unknown, msg#8566): CUDA miner only supported on Linux and Windows. AMD miner in development.

- **Q** (@Unknown, msg#8520): Is it normal that MSG changes per block but B (difficulty?) stays same?
  **A** (Implicit): MSG is the block message/nonce; block difficulty adjusts dynamically to maintain ~2-minute block time.

---

## Links Shared

- [https://ergoplatform.org/blog/2019_05_07_mining/](https://ergoplatform.org/blog/2019_05_07_mining/): GPU mining tutorial (Windows).
- [https://github.com/ergoplatform/ergo/wiki/Wallet-documentation](https://github.com/ergoplatform/ergo/wiki/Wallet-documentation): Wallet setup and API docs.
- [http://127.0.0.1:9052/swagger](http://127.0.0.1:9052/swagger): Local node Swagger UI for wallet/mining operations.
- [https://github.com/ergoplatform/ergo/wiki/Set-up-a-full-node](https://github.com/ergoplatform/ergo/wiki/Set-up-a-full-node): Full node setup guide.
- [https://github.com/ergoplatform/ergo-js](https://github.com/ergoplatform/ergo-js): JavaScript library (note: not Java as user requested).
- [https://github.com/ergoplatform/Autolykos-GPU-miner](https://github.com/ergoplatform/Autolykos-GPU-miner): GPU miner repository and README.
- [https://ergoplatform.org/en/blog/2019_05_20-curve/](https://ergoplatform.org/en/blog/2019_05_20-curve/): EFYT emission curve and swap mechanism documentation.
- [https://twitter.com/ergoplatformorg/status/1139164264168591362](https://twitter.com/twitter.com/ergoplatformorg/status/1139164264168591362): Official mainnet launch delay announcement (June 28 instead of June 20).
- [https://bitcointalk.org/index.php?topic=5150971](https://bitcointalk.org/index.php?topic=5150971): Ergo thread on BitcoinTalk.
- [https://t.me/ergonews](https://t.me/ergonews): Ergo News Telegram channel.
- [https://docs.ergoplatform.com/ErgoPow.pdf](https://docs.ergoplatform.com/ErgoPow.pdf): Autolykos algorithm whitepaper.
- [https://yadi.sk/d/bwjB8wwSHpjEnw](https://yadi.sk/d/bwjB8wwSHpjEnw): Pre-compiled Windows miner binary (Yandex Disk link, msg#8304).

---

## Unresolved Questions

- **AMD Miner Timeline**: Exact release date not confirmed; "shortly after mainnet" promised but dependent on external developer team delivery (msg#8391).
  
- **Exchange Listing Announcements**: As of 2019-06-15, only Tidex confirmed; other integrations (Binance, etc.) in negotiation but not publicly announced yet (msg#8419, msg#8239).

- **Noob-Friendly Setup**: User asked if "noob friendly for mass adoption" setup exists (msg#8568). Answer deferred with "not yet" (msg#8573).

- **Cloud Mining & Private Key Security**: Discussion of mining contracts and outsourced mining flagged as risky due to private key exposure (msg#8090, msg#8282, msg#8395), but no secure protocol proposed.

- **Public Forum/Community Archive**: User requested permanent forum for historical discussion vs. Telegram ephemera (msg#8277). Acknowledged but not committed to.

---

**Summary**: Week 2019-W24 was dominated by testnet mining troubleshooting, EFYT/ERG swap mechanism clarification, and mainnet launch countdown (initially June 20, later confirmed June 28 with potential further delays pending Waves gateway). Autolykos pool-resistance and wallet mnemonic handling were the most technically substantive topics. AMD miner and exchange integrations remain in-flight blockers.