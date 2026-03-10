---
title: "Ergo General Chat — 2022-W09"
date_start: "2022-02-28"
date_end: "2022-03-06"
type: telegram_weekly
channel: general
week: "2022-W09"
source: telegram
message_count: 692
categories: [governance, wallet, defi, bridges, ecosystem, technical, community, mining]
key_terms: [EIP-27, soft fork, miner voting, block reward, testnet, emission, Ledger, Nautilus wallet, P2S signing, Ukraine war impact, Nautilus, Yoroi, wallet performance, UX improvements, ErgoDEX, liquidity pools, slippage, pending transactions, refund mechanism, Rosen bridge]
---
# Ergo General Chat — 2022-W09 Summary

## Key Topics Discussed

- **EIP-27 (Soft Fork) Voting & Activation**: All major mining pools (GetBlok, Nanopool, and others) voted in support of EIP-27. Voting passed with ~90% miner consensus. Testing on testnet underway with mainnet activation pending kushti's completion of testnet work. The proposal extends block emission and adjusts miner rewards.

- **Wallet Ecosystem Evolution**: Nautilus wallet gaining significant traction as replacement for slow/abandoned Yoroi. Multiple users reported smooth experience with ErgoDex integration. SAFEW wallet available on Firefox with advanced features (token minting/burning via transaction builder). Ledger integration delayed due to dev relocation from Ukraine; P2S signing support still needed.

- **SigmaUSD Collateralization Crisis**: SigmaUSD contract locked due to reserve ratio dropping below required threshold. Users unable to mint new SigmaUSD; SigRSV needed to restore ratio. Discussion of need for community whale to restore liquidity.

- **Rosen Bridge Architecture**: Ergo-centric cross-chain bridge design using native multisig capabilities. Two guardian signature sets: one for settling cross-chain transfers, one for block-height-based security checks before asset release. Different approach from traditional wrapped-token models.

- **Palmyra & Chainlink Oracle Partnership**: Proof-of-reserve functionality via Chainlink for decentralized trade financing. On-chain warehouse receipts using IoT devices (cameras, weight/motion sensors) for continuous commodity verification. Plan to build out native Ergo oracles as secondary solution alongside Chainlink.

- **Storage Rent & Network Economics**: Questions raised about demurrage mechanism and its impact on transaction behavior. No detailed resolution provided in this week's chat.

- **Speed Improvements & Microblocks**: Tentative discussions around faster block times, though hard constraints exist (timestamp-based smart contracts and emission schedules tied to block height). Community interest in testnet parameter experimentation; kushti indicated willingness to support efforts if someone champions it.

- **ErgoHack IV Theme**: Decentralization focus — full nodes, simplified wallet UIs (Daedalus-style), P2P infrastructure, multiple DEX/Oracle Pool instances, distributed explorer backends.

- **Explorer Centralization**: Single instance of Ergo Explorer identified as most centralized component of ecosystem. ErgoHack IV opportunity to build redundant/local instances.

## Important Decisions or Announcements

- [@Snowman Jason, msg#257421, 2022-02-28]: EIP-27 voting mostly finalized with major pools in support; voting still open on GetBlok but decision already made for their participation.

- [@AllCloudy | GetBlok.io, msg#257427, 2022-02-28]: GetBlok voting closed; decision made to support EIP-27.

- [@kushti khushi, msg#257339, 2022-02-28]: ErgoTeam deliberately diluted over time since 2019; no centralized headquarters by design. Team distributed across Moscow, Singapore, Colorado, Indiana, Scotland, Israel, Beijing.

- [@Dmitry Usov, msg#257948, 2022-03-04]: New Ergo Explorer frontend released with redesigned main page and updated blocks view; backend infrastructure scaling underway.

- [@Armeanio, msg#257976-257977, 2022-03-04]: Ledger integration team wrapping up P2S signing support within one week; some devs had to relocate families from Ukraine, causing delays.

- [@Andy L, msg#257917, 2022-03-03]: Summit quiz contest concluded; 10 winners selected from perfect answers, receiving 10 ERG each.

- [@CW, msg#258231, 2022-03-05]: ErgoHack IV focus confirmed as decentralization; priorities include full node wallets, P2P utilization, multiple dApp/explorer instances.

- [@kushti khushi, msg#258291-258293, 2022-03-06]: EIP-27 activation process: gauge voting complete → testnet activation (in progress) → mainnet activation (pending).

## Technical Q&A Worth Preserving

- **Q** (@Митяй, msg#257287): Created new address in Paper Wallet; Ergo Explorer returns "Unrecognized search pattern" error and Yoroi cannot restore wallet before first transaction.
  **A** (@Dmitry Usov, msg#257293): Requires at least one transaction + sync time for explorer nodes to recognize address.

- **Q** (@HungryGhosT, msg#257503): Getting "400 - Undefined error during stacking"; waiting 15 minutes didn't resolve.
  **A** (@Luivatra, msg#257519): Issue likely ErgoPad-specific; refer to @ergopad_chat for support.

- **Q** (@Kaan, msg#257686-257687): Added liquidity to ErgoDex but cannot see position; long transaction time suspected.
  **A** (@Gazza, msg#258714, msg#258034): Check "recent transaction" page (clock icon, top right). If pending and stuck due to price slippage, click 3-dots menu, select "refund", then resubmit swap with higher slippage (recommend 5%). Nautilus wallet recommended over Yoroi for smoother experience.

- **Q** (@Sviatoslove, msg#258091): YOROI transaction showing "SUBMITTED" for 2+ hours; does this mean failed?
  **A** (No direct response; inferred from patterns): Likely still pending; similar issues resolved by refunding and resubmitting with adjusted slippage.

- **Q** (@Koutelier, msg#257637-257651): Node sync error "Failed to connect to /1.1.1.1.1" and "Got GetReaders request in state (None,None,None,None)"; persists after 15 min and overnight wait.
  **A** (@Glasgow, msg#257652): Error normal during DB startup first few minutes. If persistent, try fresh directory. Version 4.0.24 should resolve more issues. Last resort: post issue to GitHub.

- **Q** (@Arcadian Computers, msg#258205): API call to check current hashing rate from full node running on Linux?
  **A** (No response recorded in this segment).

- **Q** (@ExInfernis, msg#258296): Why is Yoroi for Ergo so slow compared to Cardano Yoroi?
  **A** (@Unknown, msg#258297): Yoroi Ergo largely abandoned; community switched to Nautilus wallet which is significantly faster.

- **Q** (@Ian Lee, msg#258265): Does higher hashrate (more miners) increase network TPS in addition to security/decentralization?
  **A** (@Glasgow, msg#258271): Block time averages 2 minutes (controlled by consensus rules, not hashrate). TPS scaling happens at application/off-chain layer, not affected by hashrate.

- **Q** (@binocry, msg#258409): Possible to create bridge or atomic swap for LTC and Monero?
  **A** (No direct response; Aberg reacted positively to Monero mention but no commitment given).

- **Q** (@vidicmu, msg#258411): How to find staked ERGOPAD amount in Nautilus when showing zero?
  **A** (@vidicmu): Multiple UTXO addresses in wallet; cycle through each using "Change wallet address" until staked amount appears.

## Links Shared

- [https://docs.ergoplatform.com/dev/wallet/]: Official Ergo wallet documentation with Ledger support status.
- [https://sigmausd.io/]: SigmaUSD contract interface.
- [https://docs.ergodex.io/docs/user-guides/nautilus-quick-start]: Nautilus quick-start guide for ErgoDex users.
- [https://twitter.com/sigmaverse_ergo/status/...]: Contributions and ecosystem updates (multiple instances shared).
- [https://ergopad.medium.com/introducingpaideia-74a7fc03bf42]: Paideia project introduction.
- [https://docs.google.com/document/d/1G8iN_9sFJ3k5UuSAIbRHdkUIhqVGhpmeA_XQXVyZW94/]: Paideia whitepaper.
- [https://docs.google.com/spreadsheets/d/1ReMuHvrn-ZNIAkk7F0fezmWEvjWeYzUg8PNfXyEwNm4/]: Paideia tokenomics.
- [https://ergopad.medium.com/announcing-the-paideia-token-release-on-ergopad-e7c79af8173f]: Paideia token release announcement.
- [https://feedback.blockfolio.com/coin-requests/p/sigusd]: BlockFolio/FTX listing request for SigmaUSD (6 votes after 1 year; community push for support).
- [https://github.com/ergoplatform/explorer-frontend/issues]: Ergo Explorer frontend bug reporting.
- [https://youtu.be/YR0jkbMLaAY]: SAFEW transaction builder demo — token minting.
- [https://youtu.be/OcyziMIXTtk]: SAFEW transaction builder demo — token burning.
- [https://explorer.ergoplatform.com/en]: Updated Ergo Explorer with new main page.
- [https://link.medium.com/hDVE5yudbnb]: Blog post on decentralized DeFi design (Fantom context).
- [https://twitter.com/daedalus_angels/status/1500510216072347649]: Commentary on Fantom/Andre Cronje situation.
- [https://ergoraffle.com/raffle/show/1906eef5f695adb07f928b2898cc8691c5d52b50d3f1493b897cf23cf32edec8]: Ergo Film Part 02 production raffle (36 ERG + 20 ERG direct donation raised so far).
- [https://t.me/ergodex_community]: ErgoDex Telegram community (corrected link; Twitter version was truncated).
- [https://t.me/ergo_mining]: Ergo mining community chat.
- [https://t.me/ergopad_chat]: ErgoPad-specific support channel.
- [https://t.me/SigmaUSD]: SigmaUSD discussion channel.
- [https://photos.google.com/share/AF1QipNarFQkRDnUOZFmQsoCLLXZgGME1oDkyPN8Z3FjVPI1Xn5zX__rbQ9EBBuqYWnDOQ?key=eFFpN2xqbF9ORVVkdG1Ub2w4a0w3QkhkMkgxeGpR]: Community storage for project assets (CNC-machined Ergo items).

## Unresolved Questions

- **EIP-27 Exact Activation Date**: Mainnet activation timeline not specified; depends on testnet completion. No target epoch or date announced.

- **SigmaUSD Liquidity Crisis**: Ratio locked; discussion of needing SigRSV whale but no concrete plan to restore collateralization.

- **Microblocks & Faster Blocks**: Interest expressed but no consensus on viability given timestamp/emission constraints. Technical exploration deferred to potential ErgoHack IV projects or future dev initiative.

- **Yoroi Ergo Development Status**: Described as "abandoned" but no official statement on whether Emourgo will resume maintenance or if community fork is planned.

- **Full Node Ledger Support**: P2S signing still in progress; family relocation delays prevent firm ETA beyond "within one week" (as of 2022-03-04).

- **Explorer Decentralization**: Identified as priority for ErgoHack IV but no existing alternative infrastructure announced.

- **Ruby/Python SDK Availability**: No updates on language-specific AppKit bindings announced this week.

---

**Summary Notes:**
- Week dominated by EIP-27 voting finalization and continued focus on wallet/infrastructure improvements.
- Humanitarian crisis (Ukraine) mentioned multiple times; at least one ledger dev relocating, community expressed concern for team safety.
- Price discussion minimal (relegated to off-topic); focus remained technical.
- Community actively troubleshooting wallet/DEX UX issues; Nautilus adoption accelerating as Yoroi friction increases.