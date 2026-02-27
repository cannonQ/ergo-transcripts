# Ergo Developer Chat Summary — 2023-W18 (May 1-7)

## Key Topics Discussed

- **EIP URI Fragment Design & Escaping**: Discussion of `#` character handling in ErgoPayment URI specification (EIP), comparing escape sequences vs. plain text support, with debate over backward compatibility and URI RFC compliance. Implementations need tolerance for both valid and invalid formats.

- **Node Version Updates & Statistics**: Release of Ergo 5.0.10; tracking adoption via Satergo's 4-hour auto-update check revealed only ~20 nodes updated within the observation window, suggesting slow adoption among node operators.

- **OpenAPI Code Generation Issues**: Challenges generating correct Go/C# client code from Ergo node's OpenAPI specification using Swagger Codegen vs. OpenAPI Generator, with quoted vs. unquoted JSON string handling for address parameters causing endpoint failures.

- **Blockchain Endpoint Testing**: `/blockchain/balance` endpoint failures traced to unindexed nodes (indexing offset 0) returning "Wrong address format" errors; Swagger UI docs were using testnet addresses, compounding confusion during testing.

- **EIP-27 Pay-2-Reemission Implementation**: kushti announced active merge of pay-2-reemission boxes with reemission contracts per EIP-27, consolidating miner reward payouts to script-controlled boxes.

- **Lightning Network & Payment Channels on Ergo**: kushti noted Ergo had ErgoTree capabilities since 2017 to support LN constructions; Eclair client modification needed for Ergo support, requiring RPCs adapted from Bitcoin.

- **Lithos Mining Pool Design**: Discussion of Lithos Protocol goals for small miners—pool-level consistency while preserving individual block winner's transaction processing rights (even for sub-1GH/s miners).

## Important Decisions or Announcements

- [@kushti khushi, msg#12999, 2023-05-01]: Ergo v5.0.10 released
- [@Aberg Satergo dev, msg#13025, 2023-05-01]: 20 nodes updated to 5.0.10 within ~4 hours of tracking
- [@Unknown, msg#13095-13096, 2023-05-03]: EXLE V1 crowdfunding dApp live in limited beta; frontend awaiting Nautilus JSON transaction integration before public launch; Kenya received first interest-free loan from kushti
- [@kushti khushi, msg#13236, 2023-05-05]: EIP-27 pay-2-reemission merge active on mainnet

## Technical Q&A Worth Preserving

- **Q** (@Aberg Satergo dev, msg#13031): How is sigmastate refactoring progressing to decouple SigmaBoolean from compiler dependencies?
  **A** (inferred context): Awaiting response; unclear if work continues post-msg.

- **Q** (@Aberg Satergo dev, msg#13036): Which AppKit artifact should be used for eUTXO tree deserialization only?
  **A** (no explicit response): Thread trails off; likely requires consultation with AppKit maintainers.

- **Q** (@kii, msg#13067): Is there an Oracle Pool for USD-to-ERG pricing?
  **A** (@Aberg Satergo dev, msg#13068): Native Oracle Pool may be desired but not confirmed as existing; suggestion made to build one.

- **Q** (@HQΣr, msg#13081): SigmaFi needs unique order links and endpoint for total lent-by-lender queries.
  **A** (no response): Feature request flagged; appears unresolved.

- **Q** (@Aberg Satergo dev, msg#13161): Can POST endpoints accepting addresses support JSON string values (quoted and unquoted)?
  **A** (no response from @⭐️Fanta⭐️): Requested for backward compatibility; status unclear.

- **Q** (@Aberg Satergo dev, msg#13104-13114): How to generate correct Go client code from Ergo node OpenAPI spec?
  **A** (@Aberg Satergo dev, msg#13113-13114): OpenAPI Generator with `--skip-validate-spec` flag produced compilable code; Swagger Codegen was generating invalid "AllOf*" classes. Go-lang Swagger Codegen generator appears buggy.

- **Q** (@Aberg Satergo dev, msg#13189-13191): Why does `/blockchain/balance` fail with "Wrong address format"?
  **A** (@qx(), msg#13146 onwards; @Aberg Satergo dev, msg#13189-13191): Failures traced to unindexed nodes (indexing offset=0) and HTTP client quoting address strings; nodes indexed 0/5 behaved differently than 0/10.

## Links Shared

- [https://github.com/ergoplatform/ergo/releases/tag/v5.0.10]: Ergo node v5.0.10 release
- [https://github.com/ergoplatform/ergo/blob/master/src/main/resources/mainnet.conf#L83]: Mainnet node peer configuration with version placeholder discussion
- [https://github.com/OpenAPITools/openapi-generator]: OpenAPI Generator (community-driven fork of Swagger Codegen)
- [https://explorer.ergoplatform.com/en/addresses/22WkKc...]: Reemission contract address processing EIP-27 pay-2-reemission merges
- [https://twitter.com/anon_real_anon/status/1588055119765311488]: Reference to anon_real analysis (context not provided in chat)
- [https://t.me/ergodevsupport]: Telegram Ergo dev support channel (non-Discord)
- [https://t.me/ergoscriptsupport]: Telegram ErgoScript support channel (non-Discord)

## Unresolved Questions

- **sigmastate refactoring status**: No confirmation on timeline for decoupling SigmaBoolean from compiler dependencies (msg#13031).
- **SigmaFi link generation & lender stats API**: Requested in msg#13081; no implementer assigned.
- **POST endpoint JSON address parsing**: Feature request to support quoted JSON strings in address parameters (msg#13161); awaiting implementer response.
- **Native Ergo Oracle Pool**: Desired but confirmation of existence unclear; potential build-out proposal left open (msg#13067-13068).
- **Lithos small-miner transaction processing guarantees**: Design goals discussed but implementation details not formalized (msg#13287).