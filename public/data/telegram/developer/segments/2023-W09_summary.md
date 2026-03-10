---
title: "Ergo Developer Chat — 2023-W09"
date_start: "2023-02-27"
date_end: "2023-03-05"
type: telegram_weekly
channel: developer
week: "2023-W09"
source: telegram
message_count: 75
categories: [technical, defi, ecosystem, wallet]
key_terms: [pagination, API limits, box retrieval, UTXO, performance, appkit, package separation, modular projects, retrofit, on-chain polls, voting tokens, token burn, expiration, manipulation prevention, Paizo, React, frontend, project completion, scroll option, tabs]
---
# Ergo Developer Chat Summary — 2023-W09

## Key Topics Discussed

- **API Box Retrieval Limits & Pagination**  
  Discussion of forced limits on box retrieval in explorer APIs vs. node APIs. Pagination is slow; developers want ability to request all boxes without artificial limits, though large responses (500 MB+) are theoretically possible but unlikely given 30 GB total blockchain size.

- **AppKit Explorer Configuration (TestNet)**  
  AppKit defaults to public explorer URL, which was stuck at Feb 8 for testnet. Users needed ability to specify custom explorer endpoints independent of node configuration. Solution: pass custom RestApiErgoClient.

- **Box Registers & Data Storage**  
  Technical exploration of writing custom data to box registers using AppKit (Python). Use case: storing file fragments across multiple boxes with metadata in registers (collection ID, part count, sequence number). Token ID is automatically stored in R2.

- **On-Chain Polling System Design**  
  Proposed decentralized poll mechanism without dApp connection: assign voting tokens to addresses (one token per option), prevent double-voting via token burn after use, integrate with explorer API to display vote counts. Debate over authentication method (Discord rejected; captcha alternative proposed).

- **NextJS + FleetSDK Transaction Signing**  
  Incompatibility between React and NextJS when building unsigned transactions: `.toPlainObject()` fails in NextJS environment. Solution: use `.toEIP12Object()` instead.

- **Satergo Testnet Node Update**  
  Default Ergo testnet host (ergoplatform's node) frozen for ~1 month. Satergo switching to alternate testnet host in unreleased build.

## Important Decisions or Announcements

- [@kushti khushi, msg#11318, 2023-03-03]: Bounty set for [GitHub issue #1965](https://github.com/ergoplatform/ergo/issues/1965)

- [@Aberg Satergo dev, msg#11554, 2023-03-08]: Satergo unreleased updates:
  - Fixed node log level setting (broken by recent Ergo node changes)
  - Added VM argument configuration (RAM limits)
  - CoinGecko price source now supports all fiat currencies
  - Changed default testnet host (ergoplatform node stuck since ~Feb 8)
  - Translations updated

## Technical Q&A Worth Preserving

- **Q** (@Flying Pig): Does AppKit get boxes from explorer? If so, can we change explorer URL in TestNet like we do with node?  
  **A** (@Aberg Satergo dev, msg#11471): Yes. Pass custom `RestApiErgoClient` endpoint to AppKit rather than relying on default.

- **Q** (@Flying Pig): How do we write data to box registers using AppKit (Python)? The GitHub docs are 3 years outdated.  
  **A** (@Luivatra, msg#11480): Token ID is already written to R2. For custom data: construct output with `setAdditionalRegisters()` in transaction builder (see FleetSDK docs example).

- **Q** (@sh₳d0w): Same transaction signing code works in React but fails in NextJS—extension window doesn't open after object is passed.  
  **A** (@sh₳d0w, msg#11460): Use `.toEIP12Object()` instead of `.toPlainObject()` when building transactions in NextJS environment.

- **Q** (@HQΣr): How do we prevent multiple-address voting manipulation in on-chain poll system?  
  **A** (@Aberg Satergo dev, msg#11430): Use cascading CAPTCHA (10 CAPTCHAs in sequence, each harder than the last) as gate for token distribution. Alternatively, gate distribution via faucet or external authentication.

- **Q** (@Flying Pig): Can we store files on-chain by splitting into multiple boxes with tokens linking them, using registers for binary data?  
  **A** (@Luivatra, msg#11496): Tokens hold no data themselves. Store data in box registers and pass box ID of first box in chain to recipient—simpler than token linking mechanism.

## Links Shared

- [GitHub: RetrofitUtil workaround file](https://github.com/ergoplatform/ergo-appkit/blob/197a7c724cb7c36a9227a81cfa8626c6f912ffd1/java-client-generated/src/main/java/retrofit2/RetrofitUtil.java): Violates package separation; removal in progress
- [Satergo Telegram log discussion](https://t.me/Satergo/6769): Log level info messages still leaking
- [GitHub: ergode project](https://github.com/ross-weir/ergode): Response to "What is this project?" question
- [GitHub issue #1965](https://github.com/ergoplatform/ergo/issues/1965): Bounty set
- [Public TestNet Node](http://213.239.193.208:9052): Aberg-maintained testnet endpoint
- [FleetSDK Transaction Building Docs](https://fleet-sdk.github.io/docs/transaction-building): Official reference for transaction construction in NextJS
- [Payment Portal Example](https://thierrym1212.github.io/paymentportal/pay.html): Reference implementation for voting integration

## Unresolved Questions

- Why only one of multiple tabs is scrollable in HQΣr's UI component, not others—suspected requires different table naming for scroll container. (@HQΣr, msg#11239)
- Exact mechanism for incremental blake2b calculation in AppKit libraries (@kushti khushi, msg#11588) — flagged as blocking some work