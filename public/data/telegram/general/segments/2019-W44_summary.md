---
title: "Ergo General Chat — 2019-W44"
date_start: "2019-10-28"
date_end: "2019-11-03"
type: telegram_weekly
channel: general
week: "2019-W44"
source: telegram
message_count: 122
categories: [wallet, mining, governance, ecosystem, community, technical]
key_terms: [EFYT, ERG, Waves DEX, token swap, "1:1 exchange", node, mining, Raspberry Pi, memory requirements, blockchain sync, mining pool, pool contract, decentralized mining, 6-7 weeks ETA, development fund, 740K EFYT, 2.8M ERG, voting, threshold signature, treasury]
---
# Ergo General Chat — 2019-W44 Summary

## Key Topics Discussed

- **EFYT to ERG Token Swap & Exchange Listings**
  Waves DEX supports direct 1:1 swap of EFYT to ERG tokens. ProBit Exchange was newly listed as a trading venue. Community discussed exchange timelines and liquidity concerns.

- **Mining & Pool Development**
  Mining pool contract ETA ~6-7 weeks. Community discussed mining difficulty, decentralized pool research, and tutorials for CPU/GPU mining on Autolykos. Mining requires no programming knowledge.

- **Development Fund Governance**
  6-member Development Fund Board established with 2-out-of-3 threshold signature control. Fund holds ~740K EFYTs (post-swap: ~2.9M ERG). Monthly spend <20K EFYT. Proposal for majority voting (4/6) on spending approvals. Fund has outstanding Bitcoin debt from conferences/events incurred before mainnet liquidity.

- **Node Infrastructure & Wallet Support**
  Discussion of running Ergo nodes on limited hardware (Raspberry Pi 3, Core2Duo). Pre-synced blockchain data transfer recommended. Magnum Wallet compatibility with Ergo Core mnemonics (with limitations on script-backed outputs). 720-block maturity delay for mined coins.

- **Communication Channels & Community Structure**
  Debate over expanding from Telegram to Discord/Forum/Reddit. Consensus that Telegram + Forum + GitHub sufficient for current community size. Suggestion to improve ergoforum.org as primary development discussion venue.

- **Governance & Treasury Models**
  Decred cited as governance precedent (% of block rewards to treasury, community voting). Noted that Ergo miners retain ultimate consensus power over protocol changes.

## Important Decisions or Announcements

- [@Unknown, msg#14677, 2019-11-06]: Development Fund Board established with 6 members (kushti, morphic, mobybit, Martin-mx, Justin, Mentalist420). 2-out-of-3 multisig control. 4-out-of-6 voting threshold for spending approval.

- [@Unknown, msg#14725, 2019-11-06]: Mining pool contract delivery estimated 6-7 weeks (from BitcoinTalk reference).

- [@Unknown, msg#14682, 2019-11-06]: Development Fund debt in Bitcoin justified by need for BTC-denominated event/conference expenses during pre-mainnet liquidity phase.

## Technical Q&A Worth Preserving

- **Q** (@Al, msg#14662): How to re-sync wallet?
  **A** (@Dmitry Usov, msg#14663–14664): Delete `.ergo/wallet` directory in the node startup directory.

- **Q** (@god, msg#14694): Can Magnum Wallet import mnemonics from Ergo Core wallet?
  **A** (@Ilya Oskin, msg#14695): Yes. **Note** (@Unknown, msg#14696–14697): Not compatible with mined coins or script-backed outputs, as Magnum does not support scripts.

- **Q** (@god, msg#14731–14732): Received error 403 "authentication not authorized" when querying wallet balance via API.
  **A** (@Unknown, msg#14733): Reference Ergo REST API documentation at GitHub wiki.

- **Q** (@god, msg#14734): Mined ERG visible in explorer but not in local wallet query; node always running.
  **A** (@Dmitry, msg#14736): 720-block maturity delay applies before mined coins appear in wallet balance.

- **Q** (@god, msg#14720): Mining difficulty perceived as high; request for simplified mining and decentralized pool research.
  **A** (@Unknown, msg#14725): Pool contract (which will address this) ETA ~6-7 weeks.

- **Q** (@Unknown, msg#14811): Seeking efficient public/private key generation without full node sync or desktop app.
  **A** (Not resolved in segment; links to YouTube tutorial provided.)

## Links Shared

- [https://ergoplatform.org/en/blog/2019_08_07_amd/]: AMD GPU mining instructions
- [https://ergoplatform.org/en/blog/2019_05_07_mining/]: Windows mining setup guide
- [t.me/ergo_mining]: Ergo mining Telegram channel
- [https://www.ergoforum.org/t/development-fund-board/124]: Development Fund Board proposal forum (noted as private/access-restricted during chat)
- [https://github.com/ergoplatform/ergo/wiki/Ergo-REST-API]: Ergo REST API documentation
- [https://explorer.ergoplatform.com/en/addresses/88dhgzEuTXaUZuG4dHc1BEHQiaV6c1YYuwyvSJsToiMHtVTXAkQxuVAvxsjLSzjxSJBfwE9NxEVsNX1e]: Example mined block address on explorer
- [https://bitcointalk.org/index.php?topic=5150971.msg52994320#msg52994320]: BitcoinTalk mining pool ETA reference
- [https://youtu.be/hBNIGLKhuc4]: Paper wallet / offline key generation video tutorial

## Unresolved Questions

- **CMC Circulating Supply Discrepancy** (@Jason Davies, msg#14769): CoinMarketCap treating treasury as non-circulating. Response notes treasury contract gradually unlocking but no definitive resolution on CMC update timeline.

- **Node Sync Threshold Issue** (@god, msg#14700, msg#14702): Two nodes syncing only to block height 87,080. Suspected network regionalization (Chinese network partition). Resolution status unclear; diagnostic logs shared privately but not concluded in public chat.

- **Paper Wallet / Offline Key Generation** (@Unknown, msg#14811): User seeking browser-based or non-node key generation. Mentalist420 shared YouTube tutorial but no native Ergo tool link confirmed.

---

**Summary**: Week 44 was primarily operational and community-infrastructure focused. Core technical progress flagged: mining pool contract 6–7 weeks out; Development Fund governance framework announced with multisig + voting structure. Spam of exchange/wallet migration questions (EFYT↔ERG swap on Waves, Magnum compat) and infrastructure troubleshooting (node sync, wallet maturity delays). No major protocol or ErgoScript feature discussions; focus on ecosystem onboarding and governance maturity.