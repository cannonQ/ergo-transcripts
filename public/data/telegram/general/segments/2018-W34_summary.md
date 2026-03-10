---
title: "Ergo General Chat — 2018-W34"
date_start: "2018-08-20"
date_end: "2018-08-26"
type: telegram_weekly
channel: general
week: "2018-W34"
source: telegram
message_count: 87
categories: [technical, ecosystem, mining, wallet, governance, community]
key_terms: [testnet, explorer, ergoplatform.com, EFYT, ERGOcash, ERGOdata, dual blockchain, data storage, ASIC, hashrate, mining, hard fork, Monero, wallet prototype, privacy by design, mainnet, Q4 2018, PoW finalization, stateless clients, price]
---
# Ergo General Chat — 2018-W34 Summary

## Key Topics Discussed

- **Ergo Testnet Explorer**: A testnet explorer was deployed at `https://testnet.ergoplatform.com/` early in the week, providing initial visibility into blockchain operations.

- **EFYT Token Split Model**: The project announced a conceptual two-blockchain model where 1 EFYT = 1 ERG (cash) + 1 ERG (data), with the data chain designed for efficient data storage use cases via proof of storage concepts.

- **ASIC Resistance Strategy**: Ergo will pursue ASIC resistance but differ from Monero's approach by avoiding hard forks; the exact mechanism was not detailed in this week's discussion.

- **Mainnet Timeline & Releases**: Q4 2018 mainnet launch targeted, with intermediate prototype releases planned for wallet, fee model, system reconfiguration, and proof-of-work finalization before then.

- **Privacy-First Wallet Design**: An initial wallet prototype was demonstrated with privacy-by-design principles.

## Important Decisions or Announcements

- [@Dmitry, msg#4215, 2018-08-21]: Ergo will first optimize for currency use (cash chain), then later support data-intensive applications via a separately-configured data chain with efficient storage properties.

- [@Dmitry, msg#4216, 2018-08-21]: ASIC resistance will be implemented without hard forking, differentiating Ergo from Monero's approach.

- [@Unknown, msg#4303, 2018-08-25]: Mainnet scheduled for Q4 2018; final testnet prototype to arrive shortly before.

- [@Unknown, msg#4304, 2018-08-25]: Wallet, fee model, system reconfiguration, and PoW finalization releases are planned over "pretty few good months ahead."

## Technical Q&A Worth Preserving

- **Q** (@Unknown, msg#4214): Will Ergo block ASIC miners as Monero is attempting to do?
  **A** (@Dmitry, msg#4216): Yes, but not using Monero's hard-fork approach; methodology differs.

- **Q** (@Unknown, msg#4212): What is ERGOdata in the context of the 1 EFYT = 1 ERGOcash + 1 ERGOdata model?
  **A** (@Dmitry, msg#4215): Currently conceptual—a framework for using Ergo technology for efficient blockchain-based data storage. First release focuses on currency; data-storage optimizations will follow.

- **Q** (@Unknown, msg#4225): Will cash and data blockchains be traded separately, and what will their tickers be?
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#4226): Referred to Telegram message #4211 for details (content not included in this segment).

- **Q** (@Unknown, msg#4302): When will executable mining and wallet installation be available?
  **A** (@Unknown, msg#4305): Early stage grassroots project; mainnet estimated for end of year (Q4 2018) with no precise dates yet locked.

## Links Shared

- `https://testnet.ergoplatform.com/`: Ergo testnet blockchain explorer deployed early in the week.

- `https://twitter.com/InputOutputHK/status/1031519231504998401`: Input Output HK Twitter announcement (context unclear from chat).

- `https://twitter.com/ergoplatformorg/status/1033448169160552448`: Ergo Platform official Twitter update mid-week (content not specified).

- `https://twitter.com/Ergobug`: Personal Twitter handle of community member focused on Ergo advocacy.

## Unresolved Questions

- Exact mechanism for ASIC resistance without hard forks remained unspecified; implementation details to follow.

- Specific tickers and trading model for separate cash/data blockchains deferred; reference provided but not clarified in this segment.

- Data chain optimization timeline: "later" after currency chain maturity, but no specific roadmap date given.

---

**Summary**: Week 34, 2018 was light on structured technical discussion but included important clarification on the dual-blockchain vision, ASIC strategy differentiation, and Q4 mainnet targeting. Most substantive content came from @Dmitry and core team confirmations. The segment also contained substantial off-topic conversation about intermittent fasting, cryptocurrency market skepticism, and exchange criticism—noise relative to protocol development.