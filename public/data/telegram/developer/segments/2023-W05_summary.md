---
title: "Ergo Developer Chat — 2023-W05"
date_start: "2023-01-30"
date_end: "2023-02-05"
type: telegram_weekly
channel: developer
week: "2023-W05"
source: telegram
message_count: 73
categories: [technical, defi, mining, ecosystem, nft]
key_terms: [security, design philosophy, conservative approach, Spectrum, API, token prices, verified feeds, market data, market cap, token supply, price manipulation, LOVE token, GPU, DAG size, 3GB, mining capability, Dexy, soundness tests, bug fixes, test cases]
---
# Ergo Developer Chat Summary — 2023-W05

## Key Topics Discussed

- **Spectrum DEX API and token pricing**: Discussion of best practices for fetching token prices from Spectrum DEX, comparing verified vs. unverified feed endpoints and handling stale price data.

- **Token market cap inflation via low-liquidity pools**: Concern raised about how tokens with inflated supply and minimal liquidity can show artificially high valuations in wallets, exemplified by the "love token" case where a 50 ERG initial pool seeding resulted in tokens appearing to be worth $23,000.

- **Security assumptions in Bitcoin and Ergo**: kushti published a comprehensive text on security assumptions underpinning critical design choices in Ergo, addressing conservative vs. non-conservative trade-offs.

- **Dexy soundness and testing**: scalahub reported progress on test case development and bug fixes for the Dexy Protocol, with work tracked in the stable branch.

- **AppKit transaction signing**: Developers sought clarification on signing unsigned transactions using pre-computed signatures as byte arrays, resolved via internal AppKit APIs.

- **Node list discoverability and decentralization**: Debate over maintaining trusted node lists for peer discovery—tension between hardcoding nodes (decentralized but requires manual updates) vs. centralized aggregators (single point of failure).

- **ERG GPU mining and DAG size**: Question raised about whether GPUs with insufficient DAG size (e.g., <3 GB) can mine Ergo, and whether DAG size is a modifiable parameter.

- **Explorer database schema**: Clarification sought on whether the `box_id` field in the tokens table in Ergo Explorer's database reflects current UTXO location or historical box references (confirmed to be historical).

## Important Decisions or Announcements

- [@kushti, msg#10542, 2023-02-01]: Identified that failed transaction validation was due to inputs already being spent at broadcast time.

- [@Aberg, msg#10579, 2023-02-02]: Ergonodes.net version market share chart was fixed and older versions now collapsed into "Older" category in pie chart display.

- [@Aberg, msg#10607, 2023-02-02]: Resolved issue with signing unsigned transactions using AppKit.

## Technical Q&A Worth Preserving

- **Q** (@Aberg): What is the best way to get token prices from Spectrum DEX—should the API, Oracle Pool, Explorer, or Spectrum itself be used?
  **A** (@qx): Use the Spectrum DEX API directly. The endpoint `https://api.spectrum.fi/v1/amm/markets?from=1653075262280` returns all traded tokens; `https://api.spectrum.fi/v1/amm/pools/summary` returns verified tokens only (currently ~13 tokens). For stale tokens not traded recently, leave the timestamp parameter at the default epoch time and the API will backfill with the last known price.

- **Q** (@Aberg): How do I sign an UnsignedTransaction with a pre-computed signature as a byte array using AppKit?
  **A** (@Aberg, self-resolved via msg#10607): Use AppKit's internal APIs to construct a signed transaction object from the unsigned transaction and signature bytes, then use the resulting object for transacting.

- **Q** (@Flying Pig): In the Ergo Explorer database, does the `box_id` field in the tokens table reflect the current box location?
  **A** (@Flying Pig, self-resolved via msg#10611): No, `box_id` reflects the historical box in which the token was created. Repurposed one of the Explorer's own API queries to get current UTXO location.

- **Q** (@HQΣr): Can GPUs with DAG size smaller than required (e.g., <3 GB) mine Ergo, and can DAG size be modified?
  **A**: Left unresolved. Question pertains to Autolykos DAG requirements and parameter mutability.

- **Q** (@HQΣr): How to bulk query NFT projects from SkyHarbor and transform collection name data into backend objects for rating system integration?
  **A** (@Flying Pig): Suggested Python as the appropriate tool for data transformation and querying.

- **Q** (@MrStahlfelge): How should a wallet or application maintain a decentralized, trustworthy list of Ergo nodes for peer discovery without a single point of failure?
  **A** (@Aberg): Hardcode a set of known nodes in the application config (Bitcoin's approach) and allow users to discover additional peers via peer propagation. If hardcoded nodes go down, update the array in a new release. Alternatively, create a DNS seeder service similar to Bitcoin's. (@MrStahlfelge noted both solutions are weak: manual maintenance is slow and centralized aggregators are single points of failure.)

## Links Shared

- [https://www.ergoforum.org/t/know-your-assumptions/4198]: kushti's text on security assumptions in Bitcoin and Ergo design decisions.

- [https://api.spectrum.fi/v1/amm/markets?from=1653075262280]: Spectrum DEX API endpoint returning all traded token markets.

- [https://api.spectrum.fi/v1/amm/pools/summary]: Spectrum DEX API endpoint returning verified token pools only.

- [https://github.com/kushti/dexy-stable/tree/master/code/src/test/scala/dexy]: scalahub's work on Dexy Protocol soundness test cases and bug fixes.

- [https://ergonodes.net]: Node version market share analytics (recently fixed).

## Unresolved Questions

- **GPU mining with insufficient DAG size** (@HQΣr, msg#10559): Whether Autolykos allows GPUs with <3 GB DAG capacity to mine Ergo, and whether DAG size is a tunable protocol parameter.

- **Node list decentralization trade-off** (@MrStahlfelge, msgs#10626–#10642): Whether hardcoding nodes with manual updates or relying on a DNS seeder is truly a solution to trustless peer discovery, given that hardcoded node lists can become stale and rollout times are slow.