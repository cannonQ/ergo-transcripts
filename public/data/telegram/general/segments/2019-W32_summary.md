---
title: "Ergo General Chat — 2019-W32"
date_start: "2019-08-05"
date_end: "2019-08-11"
type: telegram_weekly
channel: general
week: "2019-W32"
source: telegram
message_count: 146
categories: [wallet, technical, ecosystem, mining, community]
key_terms: [wallet API, transaction sending, tx fee, unconfirmed transactions, change address, registers, box, asset type, issue type, ErgoScript, EFYT, token swap, "1:1 swap", Waves exchange, circulating tokens, solo mining, hashrate database, 51% attack, mining farms, network security]
---
# Ergo General Chat — Week 2019-W32 Summary
**Period:** 2019-08-05 to 2019-08-18  
**Active Participants:** 14  
**Message Count:** 146

---

## Key Topics Discussed

- **Wallet API & Transaction Construction**: Multiple users asked about sending transactions via wallet API, determining transaction fees, and handling registers in payment generation. Default fee documented as 1,000,000 nanoERG with examples provided.

- **Token Swap (EFYT → ERG)**: Discussion of ongoing 1:1 swap mechanism on Waves platform for early EFYT holders to migrate to ERG mainnet. No hard deadline announced; swap expected to remain active for "quite some time."

- **Mining Concerns & Network Security**: Community raised concerns about mining centralization, particularly after observation of suspicious hashrate activity (blocks 23830-32838 with identical timestamps). Debate over whether small home miners could profitably participate alongside large farms.

- **Wallet Synchronization Issues**: User reported 4-day sync failure and discussed mnemonic management across multiple nodes, leading to balance discrepancies.

- **Certificate Expiry**: SSL certificate issue reported affecting multiple users accessing node endpoints.

- **Exchange Listings**: Anticipation of new exchange listings and events announced for following week.

---

## Important Decisions or Announcements

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#13071-13072, 2019-08-17]: New exchange listing news and ecosystem events expected "next week"

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#13076, 2019-08-17]: Network hashrate reported at 1.17 TH/s as of chat date

- [@𝖒𝖊𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#13071, 2019-08-17]: No definitive end date for EFYT-to-ERG swap; community assured it would remain active for extended period

---

## Technical Q&A Worth Preserving

**Transaction Fee & Structure:**
- **Q** (@Unknown, msg#12698): "How to determine the tx's fee?"
  **A** (@Unknown, msg#12701-12704): Default fee is 1,000,000 nanoERG. When sending maximum amount, must deduct fee from value. Example: `wallet/payment/send` with `[{"address": "AddressYouWantToSendTo", "value": 1000000000}]` sends 1 ERG with default fee.

**Box Registers & Assets:**
- **Q** (@Unknown, msg#12696): "What does registers mean in wallet/payment/generate?"
  **A**: Referred to forum documentation (msg#12702): https://www.ergoforum.org/t/ergo-terminology-a-box-and-a-register/32

**Asset Detection:**
- **Q** (@Unknown, msg#12720): "A assets length of zero means ergo?"
  **A**: Implicit yes — zero-length assets array indicates ERG (no custom tokens in box).

**Wallet Recovery & Mnemonic Management:**
- **Q** (@Unknown, msg#12784): "How to view the current change address and how to know if an address is from my own mnemonic?"
  **A**: Addressed indirectly; user discovered issue was incorrect change address configuration (msg#12783). Using same mnemonic across multiple nodes can cause balance discrepancies (msg#12796).

**Lightweight Wallet Architecture:**
- **Q** (@Unknown, msg#12810): "Many other anonymous currency projects implement lightweight wallet by separate wallet application, just like Grin—how does Ergo approach this?"
  **A**: No direct response recorded; topic flagged but not resolved in this week's chat.

---

## Links Shared

- [https://www.ergoforum.org/t/ergo-terminology-a-box-and-a-register/32]: Official documentation on boxes and registers (msg#12702)

- [https://explorer.ergoplatform.com/en/stats]: Ergo network statistics & hashrate monitoring (msg#13076)

- [https://ergoplatform.org/en/blog/2019_05_20-curve/]: EFYT token official announcement (msg#13083)

- [http://dev.pywaves.org/assets/5dJj4Hn9t2Ve3tRpNGirUHy4yBK6qdJRAJYV21yPPuGz]: ERG mainnet token ID (msg#13084)

- [Twitter: ergoplatformorg/status/1158830052894814209](https://twitter.com/ergoplatformorg/status/1158830052894814209) (msg#12734)

- [Twitter: ergoplatformorg/status/1159521489101709317](https://twitter.com/ergoplatformorg/status/1159521489101709317) (msg#12751)

- [Twitter: CryptoGlobeInfo/status/1161933060654411776](https://twitter.com/CryptoGlobeInfo/status/1161933060654411776) (msg#12853)

---

## Unresolved Questions

- **51% Attack Feasibility**: After suspicious mining activity (identical block timestamps), community questioned whether attacker could sustain >50% hashrate attack. Debate left open whether such attack remained feasible threat (msg#12865-12870).

- **Small Home Miner Viability**: Extended discussion (msg#12832-12839) on whether Ergo's mining model could sustainably support small home miners via future contracts, or if pool/farm dominance was inevitable. Acknowledged as "vital" but unresolved.

- **CMC Listing Status**: @Unknown asked if listing on CoinMarketCap was in progress (msg#12848); no response recorded.

- **Lightweight Wallet Implementation**: How Ergo plans to implement lightweight wallet architecture separate from node, similar to Grin approach (msg#12810).

- **Node Rescan Mechanism**: Multiple users asked how to rescan blocks from specific height; answers referenced source code inspection but no clear API documented (msg#12798-12800).

- **Bakkt & Market Impact**: Brief mention of Bakkt launch (msg#12922) with no follow-up discussion on implications for Ergo or PoW mining ecosystem.

---

## Operational Notes

- **Certificate Issue**: SSL certificate expiry affecting node access—status of resolution not documented in this chat segment.
- **Network Stability**: One user reported 19 hours without block with 9.5 GH/s hashrate (msg#12860); underlying cause not explained.
- **Mining Pool Centralization**: Acknowledged concern but no announced protocol changes or mitigation strategies discussed.