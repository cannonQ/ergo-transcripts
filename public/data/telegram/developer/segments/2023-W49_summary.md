---
title: "Ergo Developer Chat — 2023-W49"
date_start: "2023-12-04"
date_end: "2023-12-10"
type: telegram_weekly
channel: developer
week: "2023-W49"
source: telegram
message_count: 156
categories: [wallet, technical, ecosystem, nft, community, defi, bridges]
key_terms: [mobile wallet, Nautilus, manifest v3, cold storage, QR code signing, UTXO consolidation, box inputs, transaction size, 1k boxes, 96kb limit, JavaScript, i64 overflow, BigInt, token amounts, json-bigint library, ErgoPay, reduced transaction, Python AppKit, multiple addresses, server load]
---
# Ergo Developer Chat Summary — 2023-W49

## Key Topics Discussed

- **App size optimization for mobile**: Discussion around reducing Nautilus wallet app size to 6MB, with focus on framework dependencies and Java bytecode compilation approaches (RoboVM vs GraalVM).

- **Mobile wallet development**: Captain Nemo working on major Manifest V3 refactoring with future mobile version in mind. Pulsarz advocated for Keystone-style QR code cold storage integration and scanning workflows.

- **UTXO consolidation**: HQΣr reported 1240-1400 UTXO boxes accumulating from GreasyCEX mission and dev fees; Flying Pig confirmed up to ~1000 boxes can fit in single transaction (max 96kb dependent on contents). Noted max inputs increased after node 5.0.

- **JavaScript BigInt precision bug with token amounts**: Critical issue where i64 token amounts (e.g., `9223372036854776000`) exceed JavaScript's 58-bit integer precision, causing parsing failures. Root cause identified as JSON deserialization rounding; solution requires json-bigint library and fetching as bytes-to-UTF8-string pipeline.

- **ErgoPay integration challenges**: Aco Šmrkas struggled with server resource constraints (512MB VPS running JVM-based tools), limited WASM bindings to i64, and fragmentation across Fleet, FleetSharp, Java AppKit, ErgoPy, and WASM libraries—none offering complete functionality.

- **Node indexing regression in 5.0.15-5.0.16**: Multiple nodes stuck at specific heights after Sigma serializer "fix" in 5.0.15. kushti identified the culprit in rollback logic; restarting fixed some cases; 5.0.17 dockerfile fix released.

- **Airdrop tooling**: qx() linked Flying Pig's YAAT (can handle massive outputs) and mgPai's ErgoPy (limit ~1000 outputs/tx); qx() also built CSV-to-TX builder for ErgoPy.

- **ErgoSanta 2023 charity campaign**: HQΣr announced NFT-based gift exchange with message submission, key-based chest opening (0.001 ERG + 1 key), and reward distribution. Seeking prize donations (ERG, tokens, NFTs, vouchers) from projects.

## Important Decisions or Announcements

- [@Captain Nemo, msg#22435, 2023-12-06]: Mobile Nautilus version in active development with major Manifest V3 refactoring already underway.

- [@kushti, msg#22384, 2023-12-04]: ergo-core publishing added to release.yaml; artifact will be published on 5.0.16 release.

- [@kushti, msg#22770, 2023-12-17]: Fixed dockerfile in 5.0.17 and i2066 branch (addressing indexing regression).

- [@glasgowm, msg#22546, 2023-12-11]: Made Yulius (chris45new) admin on ergonaut.space for Indonesian translation work.

- [@HQΣr, msg#22676, 2023-12-14]: **ErgoSanta 2023** live — Telegram bot-driven NFT Santa chest. Contributing projects receive logo placement, social media mentions, and ad placement on Ergo Explorer.

## Technical Q&A Worth Preserving

**Q** (@Aco Šmrkas, msg#22581): How to parse token amounts larger than i64 max value (`9223372036854776000` vs `9223372036854775807`) using ergo-lib-wasm when TokenAmount.from_i64() only accepts i64?

**A** (@Pulsarz, @Luivatra, multiple): Root cause is JavaScript's 58-bit integer precision. Solution: fetch API response as bytes → convert to UTF-8 string → parse with `json-bigint` library. Issue parallels [GitHub #1900](https://github.com/ergoplatform/ergo/issues/1900); signed 64-bit is sufficient in ref client with overflow checks. (msg#22664, msg#22667)

---

**Q** (@Pulsarz, msg#22420): Can mobile wallets support Keystone-style QR code signing (sign TX on air-gapped device, show signed TX QR codes back to desktop)?

**A** (@Pulsarz, msg#22421): Had hardware (pre-Keystone rebrand), worked fine. Feature would be excellent for Nautilus mobile when available. (Noted as future enhancement.)

---

**Q** (@HQΣr, msg#22506): How to consolidate 1240 UTXO boxes efficiently?

**A** (@Flying Pig, msg#22519): Restore wallet in Nautilus, send to self or split into multiple TXs. Can comfortably send ~1000 boxes per TX (content-dependent, max 96kb). Mobile only does 80, Nautilus 200; should consolidate higher. (@Luivatra, msg#22520 noted max inputs increased post-node 5.0.)

---

**Q** (@Lee, msg#22524): Tools for mass airdrop (ERG to multiple addresses with different amounts)?

**A** (@qx(), msg#22525): Recommended YAAT (Flying Pig, handles massive outputs), ErgoPy (mgPai, ~1000 outputs/TX limit), and CSV-to-TX builder tool. (msg#22525-22529)

---

**Q** (@Aco Šmrkas, msg#22560): Easiest way to get reduced transaction for ErgoPay with Python + AppKit JAR without server crashing under load?

**A** (@Aco responded msg#22562 that solution was provided; impl details not fully captured in chat.)

---

**Q** (@Aco Šmrkas, msg#22570): How to restrict ErgoPay user selection to single address instead of multiple?

**A** (@Aco answered his own question, msg#22570): Use POST pre-check to URL with `#P2PK_ADDRESS#` replaced by `"multiple_check"`. 2xx return code allows multiple selection; non-2xx blocks it.

---

**Q** (@CW, msg#22474): Can someone add indexing status field to node panel?

**A** (@Flying Pig, msg#22476): Query endpoint `http://node_url/blockchain/indexedHeight` for current indexed height.

---

## Links Shared

- [YAAT (Yet Another Airdrop Tool)](https://github.com/FlyingPig69/YAAT/): Mass output airdrop builder by Flying Pig.

- [ErgoPy](https://github.com/mgpai22/ergopy): Token builder and transaction construction for ~1000 outputs (mgPai).

- [CSV-to-TX builder](https://my.ergoport.dev/cgi-bin/txbuilder/): qx()-built frontend for ErgoPy token airdrops.

- [ErgoScript Timed Fund Example](https://github.com/ergoplatform/ergoscript-by-example/blob/main/timedFund.md): Referenced by Pulsarz for contract examples.

- [Node.js BigInt JSON parsing issue](https://stackoverflow.com/questions/18755125/node-js-is-there-any-proper-way-to-parse-json-with-large-numbers-long-bigin): Stack Overflow thread explaining 58-bit JS integer limitation.

- [Ledger NPM package compromise](https://news.ycombinator.com/item?id=38641211): Aberg flagged supply chain vulnerability in Ledger's NPM.

- [Ergo GitHub issue #1900](https://github.com/ergoplatform/ergo/issues/1900): Similar signed 64-bit overflow discussion; referenced by kushti in token amount context.

- [Rosen Bridge Documentation (Bahasa Indonesia)](implicit, msg#22767): Yulius completed Indonesian translation of Rosen Bridge docs.

## Unresolved Questions

- **Node 5.0.15-5.0.16 indexing regression root cause**: kushti identified Sigma serializer "fix" in 5.0.15 as cause, but exact commit/logic flow not fully detailed in chat. 5.0.17 dockerfile fix released; unclear if root cause code regression also fixed or only deployment fixed.

- **GraalVM vs RoboVM for mobile Ergo apps**: Aberg asked why RoboVM preferred, MrStahlfelge answered "because it works" without technical justification. No resolution on which is optimal for Satergo or other projects.

- **Remaining WASM library gaps**: Aco noted after 2 days trying Fleet, FleetSharp, Java AppKit, ErgoPy, and WASM—none had all pieces needed. Specific missing functionality not itemized; likely needs feature request tracking.

- **Spectrum YF staking token overflow**: Pulsarz mentioned "Spectrum yf staking token strikes again" (msg#22627) re: large number issue, but no follow-up resolution in chat.