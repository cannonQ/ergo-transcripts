---
title: "Ergo Developer Chat — 2024-W05"
date_start: "2024-01-29"
date_end: "2024-02-04"
type: telegram_weekly
channel: developer
week: "2024-W05"
source: telegram
message_count: 134
categories: [technical, wallet, mining, ecosystem]
key_terms: [stealth addresses, point encoding, compressed points, bouncycastle, light node support, chained transactions, stealth address support, token sending, UTXO age, storage rent, demurrage, creationHeight, 1051200 blocks, explorer API, unspent boxes, sortDirection, blockchain queries, mining pools, address book, known miners]
---
# Ergo Developer Chat — 2024-W05 Summary

## Key Topics Discussed

- **Stealth Addresses**: Testing and implementation of stealth address functionality, including point encoding (compressed 33-byte format) and one-time address generation. Aberg tested sending transactions to kushti's stealth address to validate the feature before release.

- **Storage Rent / Demurrage**: Discussion of box age calculation for warning users about storage rent collection. Clarified that storage rent period is 1,051,200 blocks (~4 years), boxes are fully spent when collected (cannot be partially spent), and `creationHeight` is the relevant field for age calculation.

- **UTXO Querying APIs**: Exploration of Ergo Explorer API endpoints for fetching unspent boxes, including sorting direction (`desc`), pagination, and limitations of timestamp fields in API responses. Discussion of using `settlementHeight` vs `creationHeight` for age calculation.

- **Satergo v1.7.0 Release**: Feature release including light node support, chained transactions, stealth address support, improved UI, and token-sending without explicit ERG specification.

- **Monthly Active Wallets Metric**: Community effort to calculate MAW for Ergo, with debate over whether receiving-only wallets should count as "active" users.

---

## Important Decisions or Announcements

- [@Aberg Satergo dev, msg#24513, 2024-01-30]: **Satergo v1.7.0 released** with light node support, chained transactions, stealth address sending, copy TX ID, and design improvements. https://satergo.com

- [@Aberg Satergo dev, msg#24417-24418, 2024-01-29]: First successful stealth address transaction sent to kushti's test address and confirmed included in block.

- [@Yulius Kristianto, msg#24623, 2024-02-02]: Comet listed on CoinGecko and Ergo listed on CoinMarketLeague.

---

## Technical Q&A Worth Preserving

- **Q** (@Aberg): How should point encoding work for stealth addresses?
  **A** (@kushti, msg#24407): Points are compressed, 33-byte encoding identical to Bitcoin except infinity point is 33 zero bytes. Recommended using BouncyCastle's `getEncoded(boolean compressed)` method.

- **Q** (@Aberg, msg#24452): How to warn users about storage rent deadline for old boxes?
  **A** (@qx, msg#24493): Use explorer API `epBoxAge.pl` endpoint. Use `creationHeight` field to calculate age; boxes cannot persist beyond 4 years (1,051,200 blocks) as storage rent collection fully spends them.

- **Q** (@Aberg, msg#24485-486): What is the storage rent period in blocks?
  **A** (@qx, msg#24494): 1,051,200 blocks (4 years), plus potentially 720 blocks if accounting for leap year.

- **Q** (@Aberg, msg#24498): Does paying storage rent create a new box or modify existing?
  **A** (@qx, msg#24499-503): Storage rent collection spends the box regardless of remaining balance. UTXO model requires breaking the box and creating a new one; boxes cannot be partially spent.

- **Q** (@Aberg, msg#24444): Best practice for chained transactions when user submits before prior TX completes?
  **A** (@HQΣr, msg#24445): Chained transactions are viable; depends on submission target. Used this approach in ErgoSanta.

- **Q** (@Aberg, msg#24483-484): How to get current block height from API?
  **A** (@Aberg, msg#24484): Can fetch top 1 block and inspect height field.

- **Q** (@MGpai, msg#24545): How to identify which address belongs to which mining pool?
  **A** (@Flying Pig, msg#24547): Cross-reference against public miner lists and pool websites showing which blocks they solved. No official canonical mapping exists; relies on community-maintained lists.

- **Q** (@Glasgow, msg#24620): How to calculate Monthly Active Wallets for Ergo?
  **A** (@Pgr456, msg#24629): Query PostgreSQL explorer DB for addresses used as input in transactions (excluding receiving-only wallets to filter airdrop noise). Pgr456 provided refined query; Flying Pig recommended excluding receive-only to avoid inflated counts from airdrops.

---

## Links Shared

- [https://github.com/ergoMixer/stealth](https://github.com/ergoMixer/stealth): Stealth address implementation reference (App.js showing BigInt/hex encoding pattern)

- [https://api.ergoplatform.com/api/v1/docs/#operation/getApiV1BoxesUnspentByaddressP1](https://api.ergoplatform.com/api/v1/docs/#operation/getApiV1BoxesUnspentByaddressP1): Ergo Explorer UTXO API endpoints documentation

- [https://my.ergoport.dev/cgi-bin/epBoxAge.pl?a=ADDRESS](https://my.ergoport.dev/cgi-bin/epBoxAge.pl?a=ADDRESS): Box age calculator tool (qx()'s custom API)

- [https://ergexplorer.com/latest-blocks](https://ergexplorer.com/latest-blocks): Latest blocks with miner info

- [https://ergexplorer.com/addressbook#offset=0&type=mining-pool](https://ergexplorer.com/addressbook#offset=0&type=mining-pool): Mining pool address book (incomplete)

- [https://miningpoolstats.stream/ergo](https://miningpoolstats.stream/ergo): Mining pool statistics and hashrate data

- [https://github.com/FlyingPig69/ergo_serializer](https://github.com/FlyingPig69/ergo_serializer): Ergo transaction serialization library with numeral deserialization support (Python)

- [https://satergo.com](https://satergo.com): Satergo wallet v1.7.0 release

---

## Unresolved Questions

- **Wallet activity definition**: Ongoing debate whether receive-only wallets should count as "monthly active" users; no consensus reached on filtering criteria.

- **API timestamp field accuracy**: Aberg noted Explorer API documentation claims `timestamp` field exists but it doesn't actually return in response; workaround using `creationHeight` confirmed but underlying API inconsistency unresolved.

- **NIPoPoWs endpoint usage**: qx() discovered using a NIPoPoWs API endpoint (`nipopow/popowHeaderByHeight`) in their box age script but acknowledged this was "ass backwards" and couldn't recall original justification.

- **Official miner address registry**: No official canonical list of mining pool addresses exists; community relies on unofficial tracking and cross-referencing.