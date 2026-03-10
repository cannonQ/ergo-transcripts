---
title: "Ergo Developer Chat — 2022-W36"
date_start: "2022-09-05"
date_end: "2022-09-11"
type: telegram_weekly
channel: developer
week: "2022-W36"
source: telegram
message_count: 80
categories: [technical, mining, ecosystem, defi]
key_terms: [mempool, double spending, transaction fees, rejection, Minergo, mining pools, GPU overclocking, web UI, pool statistics, Ergonodes.net, explorer API, GraphQL, UI deployment, node browsing, Akka, Spring Boot, Micronaut, Netty, JVM framework, servlet containers]
---
# Ergo Developer Chat — 2022-W36 Summary

## Key Topics Discussed

- **Mempool Double-Spend Rejection**: Transaction replacement requires higher fees; mempool stores only the higher-paying version of conflicting transactions. Feature has been in place for multiple versions [@kushti, msg#6230-6231, 2022-09-05].

- **Ergonodes.net Updates**: Added browse-all-nodes section; nodes with unavailable countries now display in top-10 country lists [@Aberg, msg#6292, 2022-09-07].

- **Explorer API Consolidation**: GetBlok.io deployed all three services (UI, API, GraphQL) with reverse proxy routing: "/" for UI, "/api" for API, "/graphql" for GraphQL [@AllCloudy, msg#6297-6298, 2022-09-07].

- **Node Framework Considerations**: Discussion of Akka TCP architecture in Ergo node; potential migration to Netty or alternative frameworks (Micronaut suggested) noted as future work. Scorex code merged into Ergo repo circa October 2021 and optimized for protocol needs [@kushti, msg#6325, msg#6385-6386, 2022-09-08 to 2022-09-11].

- **Oracle Pool R4 Register Encoding**: R4 register in Oracle Pool boxes stores price data in serialized SLong format; requires deserialization to retrieve actual price values [@zhang zee, msg#6409-6413, 2022-09-12].

- **AppKit Token Minting**: TokenId derived from first input box ID; examples available in AppKit wiki and ErgoPay example repository [@MrStahlfelge, msg#6420-6422, 2022-09-12].

- **Drifting Attack Vulnerability**: Short epochs vulnerable to timestamp manipulation attacks used to influence difficulty adjustments. Historical precedent exists from Verge 51% attack and Ethereum pool behavior [@kushti, msg#6517, msg#6541, 2022-09-15 to 2022-09-16].

- **Minergo.io Development**: New mining configuration tool in development to simplify GPU miner software assignment and overclocking settings discovery, addressing usability gaps in community spreadsheets [@Web Dev. Berthje, msg#6242-6269, 2022-09-06 to 2022-09-07].

## Important Decisions or Announcements

- [@Aberg, msg#6292, 2022-09-07]: Ergonodes.net updated with improved node browsing and filtering capabilities.

- [@AllCloudy, msg#6297, 2022-09-07]: Ergo Explorer API, UI, and GraphQL services consolidated under single reverse proxy infrastructure.

- [@Glasgow, msg#6434, 2022-09-12]: Marketing contact for advertising partnerships: `Angie@ergoplatform.org`.

- [@kushti, msg#6401, 2022-09-11]: Actively hunting for node-stalling edge cases; requests logs and block heights from affected node operators.

## Technical Q&A Worth Preserving

- **Q** (@zhang zee, msg#6406): How to reference Oracle Pool boxes and identify which register contains the current price?
  **A** (@kushti, implicit via msg#6409-6413): Price data stored in R4 register as serialized SLong format (e.g., "058cae88e301"). Requires deserialization; rendered value 238095238 represents price data that must be decoded contextually.

- **Q** (@zhang zee, msg#6419): When minting a token using AppKit, how to retrieve the tokenId?
  **A** (@MrStahlfelge, msg#6420-6422): TokenId equals the box ID of the first input. Examples available in AppKit wiki and ErgoPay example repository.

- **Q** (@zhang zee, msg#6532-6533): How to use `fold` in ErgoScript to sum array elements (e.g., A = [1,2,3,4,5])?
  **A** (@qx(), implicit via msg#6537): `fold` function in ErgoScript operates similarly to `reduce` in other languages—accumulates values across collection. (No full code example provided in log).

- **Q** (@zhang zee, msg#6539): Are there Oracle Pool build documents? Is it feasible to construct an on-chain oracle for sports match results?
  **A** (@kushti, msg#6541): No direct response to feasibility in log; kushti redirected to developer channel (msg#6562).

- **Q** (@Flying Pig, msg#6391-6402): Public node stuck on block 836448; logs show NTP timing issues. Behavior reproduced after restart.
  **A** (@kushti, msg#6398-6404): Suspected recent update; requested full logs and block height via DM for debugging. NTP warnings generally acceptable.

- **Q** (@Flying Pig, msg#6522-6523): Explorer stuck on block 840298 while node advanced to 840312.
  **A** (@Flying Pig, msg#6527): Self-reported as fixed; no upstream response on required local fixes recorded in log.

## Links Shared

- [Minergo.io](http://Minergo.io): Web-based GPU miner configuration tool with UI under development [@Web Dev. Berthje, msg#6269, 2022-09-07].

- [Ergonodes.net](http://Ergonodes.net): Ergo node registry with improved browsing and filtering [@Aberg, msg#6292, 2022-09-07].

## Unresolved Questions

- **Node Architecture Migration**: Long-term plan for transitioning Ergo node away from Akka TCP and actor model remains undefined; Netty and alternative JVM frameworks discussed as candidates but no decision recorded [@kushti, msg#6325, 2022-09-08].

- **Explorer Indexer Synchronization**: Lag between node block height and explorer indexer (observed multiple times in week) root cause not identified; potential load-balancing mitigation suggested but not confirmed [@Flying Pig, msg#6522-6527, 2022-09-15].

- **Oracle Pool Documentation**: No confirmed oracle build documentation referenced; feasibility of custom data feeds (e.g., sports results) left as open question [@zhang zee, msg#6539, 2022-09-16].

- **Algorithm Optimization for Rich List**: GetBlok.io flagged slow rich list algorithm requiring optimization [@Manh Tran, msg#6567-6569, 2022-09-18]; no response recorded.

---

**Activity Level**: Low (80 messages over 14 days). Mostly infrastructure updates, isolated technical support exchanges, and one new project introduction (Minergo). No protocol-level discussions or consensus-breaking proposals.