---
title: "Ergo General Chat — 2019-W18"
date_start: "2019-04-29"
date_end: "2019-05-05"
type: telegram_weekly
channel: general
week: "2019-W18"
source: telegram
message_count: 62
categories: [mining, governance, ecosystem, wallet, community]
key_terms: [mining, autolykos, miner setup, public key mismatch, wallet configuration, node synchronization, mainnet launch, May 26, security audit, timeline, exchange listing, waves exchange, confidential, NDA, stex, native wallet, UI wallet, mainnet, testnet, bug]
---
## Key Topics Discussed

- **MainNet Launch Timeline**: Security audit underway targeting May 26, 2019 launch date, though progress reported as slow.
- **Exchange Listings**: Post-MainNet, Ergo will pursue listings on multiple centralized exchanges beyond Waves; specific applications kept confidential under NDA.
- **Native Wallet Development**: UI wallet for Ergo planned by MainNet launch.
- **Testnet Mining Configuration**: Multiple users encountered wallet and miner synchronization issues, particularly with seed phrase handling and public key mismatches between node and Autolykos miner.

## Important Decisions or Announcements

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#6870, 2019-04-30]: Ergo will pursue additional centralized exchange listings after MainNet launch; specific exchanges under confidential NDA.
- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#6884, 2019-05-02]: Native UI wallet for ERG will be available by MainNet launch.
- [@Dmitry, msg#6879, 2019-05-02]: MainNet targeted for May 26, 2019 pending security audit completion.
- [@Dmitry, msg#6896, 2019-05-02]: Website rework underway to provide more project information.

## Technical Q&A Worth Preserving

- **Q** (@Unknown, msg#6881): Will Ergo have a UI wallet soon?
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#6884): Yes, a native wallet for ERG will be available by MainNet launch.

- **Q** (@Unknown, msg#6904): Does testnet have mining rewards?
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#6905): Rewards depend on vulnerability severity; otherwise no testnet rewards offered.

- **Q** (@Unknown, msg#6940-6944): Autolykos miner failing with "Generated and Received Public Keys do not match" error despite synced node and matching seeds.
  **A** (@Dmitry, msg#6947): With Ergo node 2.0.4, do not put seed in node configuration; instead initialize wallet via `/wallet/init` Swagger route and use the returned mnemonic seed in the miner. Leave `mnemonicPass` empty as miner does not yet support it.

- **Q** (@Unknown, msg#6949-6952): Mnemonic phrase copy-pasted into miner JSON and wallet unlocked, but still receiving public key mismatch error.
  **A** (@Dmitry, msg#6953-6954): Verify you are using the latest miner code, which was updated together with the node.

## Links Shared

- [https://twitter.com/ergoplatformorg/status/1119274685806587907](https://twitter.com/ergoplatformorg/status/1119274685806587907): Ergo project Twitter announcement.
- [https://twitter.com/ergoplatformorg/status/1124072071703740416](https://twitter.com/ergoplatformorg/status/1124072071703740416): Additional Ergo project update.
- [https://github.com/ergoplatform/ergo/wiki/Wallet-configuration](https://github.com/ergoplatform/ergo/wiki/Wallet-configuration): Wallet configuration documentation for Ergo node 2.0.4+.

## Unresolved Questions

- Exact timeline for security audit completion remains uncertain; audit reported as progressing slowly.
- Public identities of multiple "Unknown" users requesting mining and MainNet information not disclosed.
- Status of tutorial and documentation updates (with pictures) mentioned by @Dmitry as work-in-progress.