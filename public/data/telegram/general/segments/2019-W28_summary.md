---
title: "Ergo General Chat — 2019-W28"
date_start: "2019-07-08"
date_end: "2019-07-14"
type: telegram_weekly
channel: general
week: "2019-W28"
source: telegram
message_count: 148
categories: [community, ecosystem, mining, wallet, technical]
key_terms: [discourse, forum, bitcointalk, user-friendly, token supply, inflation rate, emission, EFYT, WAVES, Tidex, SWFT, P2PB2B, Waves gateway, DEX, Bione Exchange, GPU miner, Autolykos, mining pool, mainnet, hashrate]
---
# Ergo General Chat — 2019-W28 Summary

## Key Topics Discussed

- **Token Economics & Supply Confusion**: Multiple users asked about ERG token supply discrepancies across CoinGecko (2M), CMC (5M), and whitepaper (10M). Clarified that EFYT (Waves asset) and ERG (mainnet native coin) are separate tokens with different supplies; EFYT will swap to ERG 1:1 via gateway once enabled.

- **Mainnet Launch & Mining**: Ergo mainnet is live with block mining available. Users reported initial wallet sync issues with version 3.0.2 affecting balance updates for mined blocks, with version 3.0.1 performing more reliably.

- **Exchange Listings & Gateway**: SWFT, P2PB2B, and Waves gateway announced as coming soon. Bione Exchange inquired about listing; team indicated self-listing possible with technical support provided.

- **Node & Wallet Sync Issues**: Version 3.0.2 introduced optimization that caused wallet balance height to lag behind block height, not updating confirmed balances after 720 confirmations reliably. Users recommended downgrading to 3.0.1 or reimporting wallets on clean installs.

- **Community Forum Infrastructure**: Discussion of implementing Discourse (used by Zcash, Brave, and others) for long-form discussions vs. current Telegram-only format.

- **Pool Security & Design**: Discussion of open-source pool implementations (ergoPool, Autolykos GPU miner) with warnings about private key exposure in hard-coded pool binaries and recommendation to limit to trusted friends.

## Important Decisions or Announcements

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#11983, 2019-07-09]: EFYT (Waves) and ERG (mainnet) will be swappable 1:1 via two-way gateway once enabled; EFYT will not be discontinued in foreseeable future.

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#11988, 2019-07-09]: Exchange roadmap includes Tidex (live), SWFT, P2PB2B, and Waves gateway as announced listings.

- [@C0MM4ND M, msg#12110, 2019-07-12]: ergoPool and Autolykos GPU miner open-sourced on GitHub.

- [@Ilya Oskin, msg#12165-12167, 2019-07-13]: Acknowledged wallet balance height sync bug in 3.0.2; investigation initiated. Optimization in 3.0.2 changed behavior to scan only blocks containing user transactions.

## Technical Q&A Worth Preserving

- **Q** (@Unknown): Where can I find token economics, yearly inflation rate, and total supply for ERG?
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#11983): EFYT (Waves asset) and ERG (Ergo mainnet native coin) are separate tokens with different supplies. EFYT and ERG will swap 1:1 via gateway once enabled. See emission schedule at ergoplatform.org/blog/2019_05_20-curve/.

- **Q** (@Unknown): Why does wallet show "height" field lower than full node height, and balance not updated despite 720 confirmations?
  **A** (@Ilya Oskin, msg#12160): In 3.0.2, wallet scans only blocks containing transactions related to user addresses, so 'height' shows the last block with a user transaction, not the network's full height.

- **Q** (@reb0rn21): How can wallet rescan mined blocks if balance doesn't update after 720 confirmations?
  **A** (@Ilya Oskin, msg#12143): Ensure wallet is unlocked; if node is synced and wallet unlocked, rewards cannot be skipped. Version 3.0.1 recommended if 3.0.2 fails to show balance updates.

- **Q** (@NC): Where should I start to develop a mobile wallet for Ergo?
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#12080): Contact @kushti_ru for wallet development guidance.

- **Q** (@Dmytro): Why can't I withdraw ERG from Tidex?
  **A** (@Dmytro, msg#12182): Tidex uses a gateway for withdrawals; gateway was non-functional at time of inquiry.

- **Q** (@Sergei Mironov): Why is the hashrate distribution chart no longer visible in block explorer?
  **A** (@Alexey Kiselev, msg#11942): No substantive answer provided; reason unclear.

## Links Shared

- [https://ergoplatform.org/blog/2019_05_20-curve/]: Emission schedule and token economics details.
- [https://bitcointalk.org/index.php?topic=5150971]: General information about Ergo token.
- [https://explorer.ergoplatform.com/en/stats]: Mainnet mining stats and block explorer.
- [https://explorer.ergoplatform.com/en/addresses/88dhgzEuTXaUUTogqSKo8pm3aiwP6pNEXnPECt4HjscHDve1TEF1LCqg7ZsrgpRKpLNAsqcrFbukNYF4]: User's mined address with delayed balance confirmation (2040+ confirmations).
- [https://github.com/maoxs2/ergoPool]: Open-source ergoPool implementation.
- [https://github.com/maoxs2/Autolykos-GPU-miner]: Open-source Autolykos GPU miner.
- [https://ergoplatform.org/en/blog/2019_07_03_mining_withdrawal/]: Mining withdrawal and wallet sync documentation.
- [https://twitter.com/ergoplatformorg/status/1148565579743318016]: Twitter announcement (content not specified).
- [https://twitter.com/Magnum_Wallet/status/1148948899618598915]: Magnum Wallet integration announcement.
- [https://play.google.com/store/apps/details?id=com.magnum.wallet]: Magnum Wallet Android app link.

## Unresolved Questions

- **Wallet sync issue in 3.0.2**: Root cause of balance height lagging behind block height unclear; Ilya Oskin flagged for investigation but no resolution provided during this period.
- **Hashrate chart removal**: Reason for disappearance of hashrate distribution chart in block explorer not explained.
- **Gateway timing**: No ETA provided for when two-way EFYT ↔ ERG gateway would be operational.
- **Forum infrastructure decision**: Discussion of adopting Discourse ongoing; no decision announced.
- **Mining rewards confirmation delay**: Why confirmed mined blocks (720+ confirmations) sometimes don't appear in wallet balance—root cause not fully resolved; users advised to use 3.0.1 as workaround.