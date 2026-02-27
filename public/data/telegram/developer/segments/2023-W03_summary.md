# Ergo Developer Chat — 2023-W03 Summary

## Key Topics Discussed

- **Ergo Protocol Reference Client Updates**: kushti released v5.0.6 of the reference client during this period, following the earlier v5.0.5 release.

- **Language Choice for Ergo**: Discussion of why Scala was chosen for Ergo components rather than more popular languages. kushti cited better expressiveness and noted that some components (like AVL+ trees with batched proofs) were contributed by developers less familiar with Scala, including Prof. Reyzin who primarily used C++.

- **Dexy Protocol Testing**: scalahub reported active work on testing Dexy and implementing tests for "Extract to future" operations, with kushti indicating potential merge and release targeting the following week.

- **Block Header Format & Proof Validation**: kushti worked on documenting Ergo block header format and sorting headers during proof generation, comparing approaches with Rust implementation.

- **Price Feed Sources for Oracles**: Extended discussion on price data sourcing for oracle integration, with Aberg evaluating APIs from metals-api.com, CoinGecko, and direct exchange APIs (KuCoin, CoinEx), noting trade-offs between single points of failure, market coverage (USD/USDT vs BTC pairs), and API rate limits.

- **Explorer Frontend**: kushti clarified that an alternative explorer frontend was created by gagarin55 as an alternative interface to existing explorer backend.

## Important Decisions or Announcements

- [@kushti, msg#10219, 2023-01-16]: Ergo protocol reference client v5.0.6 released
  https://github.com/ergoplatform/ergo/releases/tag/v5.0.6

- [@CW, msg#10267, 2023-01-19]: Fortnightly community discussion scheduled for Fri Jan 20 at 2 PM UTC in #development channel to discuss roadmap to node version 6.0

- [@kushti, msg#10401, 2023-01-25]: Dexy Protocol release targeted for next week following testing and polishing phase

## Technical Q&A Worth Preserving

- **Q** (@Aberg, msg#10230): Why were most Ergo components written in Scala rather than more popular languages like Java? Is it performance or expressiveness?
  **A** (@kushti, msg#10232): Better expressiveness. Some parts were written by developers not familiar with Scala beforehand—Prof. Reyzin implemented AVL+ trees with batched proofs and primarily used C++ before.

- **Q** (@Aberg, msg#10306): Did you fix the get peers filter that got broken a few months ago?
  **A** (@kushti, msg#10307): Taika is working on it.

- **Q** (@kushti, msg#10329): How should box ID be handled in contract design?
  **A** (@kushti, msg#10329): ID is a hash of box contents.

- **Q** (@kushti, msg#10332): How to handle byte array iteration in contracts?
  **A** (@kushti, msg#10332): Simplest option is to put bytes array in a register and iterate over it.

- **Q** (@HQΣr, msg#10442): What should the API call be to fetch ErgoLaunchpad project by ID?
  **A** (@Luivatra, msg#10443): Use `https://api.ergopad.io/projects/16` (simple REST endpoint rather than filters parameter).

- **Q** (@Luigi, msg#10485): Getting error "Unable to define external address. Specify it manually in scorex.network.declaredAddress" when running node.
  **A** (@Aberg, msg#10486-10488): Not resolved in chat; Aberg suggested using Satergo instead for easier setup.

## Links Shared

- [https://github.com/ergoplatform/ergo/releases/tag/v5.0.6]: Ergo protocol reference client v5.0.6 release notes

- [https://www.ietf.org/archive/id/draft-irtf-cfrg-frost-12.html]: FROST (Flexible Round-Optimized Schnorr Threshold) signature scheme draft specification shared by kushti

- [https://www.ergoforum.org/t/ergo-block-header-format/4185]: Ergo block header format documentation

- [https://github.com/kushti/dexy-stable/blob/master/code/src/test/scala/dexy/ExtractSpec.scala]: Dexy Protocol "Extract to future" operation test cases

- [https://github.com/Satergo/Satergo/blob/master/src/main/java/com/satergo/extra/PriceSource.java]: Satergo price source implementation showing KuCoin and CoinEx exchange integration examples

- [https://metals-api.com/]: Metals price API (used by Chainlink and Forbes) evaluated for oracle price feeds

## Unresolved Questions

- **Oracle Price Feed Sourcing**: No final consensus on optimal price data source architecture. Open trade-offs between API rate limits (50-100 requests/month for most services), market pair coverage (BTC vs USD/USDT), reliability of sources (concerns raised about Tether backing and Bitfinex), and single points of failure.

- **Node Configuration for Offchain Bots**: Luigi unable to resolve external address declaration error when running reference node documentation approach; discussion inconclusive on whether root cause is configuration or documentation gap.

- **Block Time Parameter Optimization**: kushti flagged that many dApps rely on block height rather than timestamp, creating complexity for faster block time improvements; optimization strategy left open pending community testnet validation.