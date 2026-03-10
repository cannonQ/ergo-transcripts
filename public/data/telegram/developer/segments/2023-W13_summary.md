---
title: "Ergo Developer Chat — 2023-W13"
date_start: "2023-03-27"
date_end: "2023-04-02"
type: telegram_weekly
channel: developer
week: "2023-W13"
source: telegram
message_count: 56
categories: [technical, nft, defi]
key_terms: [remote node, explorer, peer list, Satergo, ergohack library, PostgreSQL btree index, hash index, ergo_tree, node_outputs, index row size, buffer page, mempool, double spending, transaction replacement, minimum fee, config box, ECDSA, EdDSA, threshold signature, security disclosure]
---
# Ergo Developer Chat — 2023-W13 Summary

## Key Topics Discussed

- **Remote node functionality in Satergo**: Discussion of accessing Ergo nodes and explorers for data retrieval; Aberg noted that remote node functionality exists but hasn't been prioritized, and suggested using the ErgoHack 4 library as an alternative solution.

- **PostgreSQL index performance issues**: Multiple developers encountered B-tree index size limitations when indexing large ErgoTree values in the `node_outputs` table. The workaround identified is to use hash indexes instead of B-tree indexes for the `ergo_tree` column.

- **Paideia contract size**: Luivatra's Paideia contracts were flagged as "a bit big," causing downstream issues with UTXO tracking and explorer performance.

- **NFT bulk minting**: kushti inquired about tools for bulk NFT minting; HQΣr mentioned mgPai, Lithos, and Auction House v3 as having minting capabilities.

- **Total Value Locked (TVL) tracking and dApp metrics**: Discussion of aggregating TVL across Ergo dApps (SigmaUSD, ErgoPad, Spectrum, Auction House, SkyHarbor, SoFi, and others). DefiLlama was mentioned as a partial source but doesn't capture all Ergo projects yet. Flying Pig published a custom SQL query to extract TVL from smart contracts across 3200+ addresses.

- **Smart contract identification and indexing**: Discussion of whether smart contracts have built-in identifiers to track which projects they belong to, and whether APIs like ErgoWatch can be used to aggregate contract balances.

## Important Decisions or Announcements

- [@kushti khushi, msg#11984-11987, 2023-03-31]: Recommended switching from B-tree to hash indexes for `node_outputs__address` and `node_outputs__ergo_tree` to resolve PostgreSQL index row size errors. Provided specific SQL syntax.

- [@Flying Pig (™), msg#12117, 2023-04-05]: Published a custom SQL query for extracting TVL in USD from Ergo smart contracts, covering ERG, SigmaUSD, SPF, Neta, Paideia, ErgoPad, and EGIO. Query results and CSV available in GitHub repository.

## Technical Q&A Worth Preserving

- **Q** (@Luivatra, msg#11980): Should minimum fee be read from a config box data input to avoid issues if minimum fee changes?  
  **A** (@kushti khushi, msg#11981): "Could be read from config box provided as data input?"  
  **Follow-up** (@Luivatra, msg#11982): "yeah, will probably do that, either that or just a context var, could be he isnt smart enough to change the context var"

- **Q** (@Flying Pig (™), msg#12072): Is there a way to extract all smart contract addresses?  
  **A** (@kushti khushi, msg#12073): "Explorer db schema has some table for addresses I guess"

- **Q** (@HQΣr, msg#12077): Can the ErgoWatch API be used to fetch total ERG in smart contracts?  
  **A** (implied feasible by msg#12078 request for test contract address)

- **Q** (@HQΣr, msg#12098): Do smart contracts have any kind of identifier to know which project they belong to?  
  **A**: Unresolved in chat; context suggests contract addresses can be manually mapped or require external metadata.

## Links Shared

- [https://medium.com/@iofinnet/security-disclosure-for-ecdsa-and-eddsa-threshold-signature-schemes-4e969af7155b](https://medium.com/@iofinnet/security-disclosure-for-ecdsa-and-eddsa-threshold-signature-schemes-4e969af7155b): Security disclosure on threshold signature schemes (msg#11941)

- [https://defillama.com/chain/Ergo?currency=USD](https://defillama.com/chain/Ergo?currency=USD): DefiLlama Ergo chain metrics (msg#12041)

- [https://github.com/ergopad/danaides](https://github.com/ergopad/danaides): ErgoPad blockchain indexer for custom database ingestion (msg#12085)

- [https://github.com/FlyingPig69/Ergo_Explorer_Queries/blob/main/contracts_TVL.sql](https://github.com/FlyingPig69/Ergo_Explorer_Queries/blob/main/contracts_TVL.sql): Custom SQL query for extracting smart contract TVL in USD (msg#12117)

- [https://www.ergoforum.org/t/buying-back-tokens-from-liqudity-pool/4275](https://www.ergoforum.org/t/buying-back-tokens-from-liqudity-pool/4275): Forum discussion on token buyback contracts from liquidity pools (msg#12142)

## Unresolved Questions

- How to properly identify which project a smart contract address belongs to without external metadata/registry  
- Whether DefiLlama will eventually index all Ergo dApps or if a dedicated Ergo TVL dashboard is needed  
- Root cause of UTXO tracker freezing when indexing large Paideia contracts — whether it's purely a PostgreSQL schema issue or contract complexity  
- Whether Satergo's remote node functionality will be prioritized as a user-facing feature