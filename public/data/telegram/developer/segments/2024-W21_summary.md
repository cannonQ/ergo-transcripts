# Ergo Developer Chat Summary — 2024-W21
**Period:** 2024-05-20 to 2024-05-26  
**Participants:** 11  
**Messages:** 68

---

## Key Topics Discussed

### ErgoScript and Sigma Protocol Development (v5.0 → v6.0)
- **Unsigned BigInt Implementation**: @kushti introduced `UBigInt` (or `UnsignedBigInt`) to support 256-bit and potentially 512-bit unsigned integers for cryptographic operations (secp256k1 field arithmetic, modular exponentiation). Addresses limitations in current signed 256-bit BigInt enforcement. Related to Schnorr signature validation and Bulletproofs verification.
- **ErgoTree Versioning**: `ErgoTree` version > 0 requires size bits to be serialized; `substConstants` function was broken for versions > 0 (fixed in v6.0). Version 0 remains available for compatibility.
- **Sigma Compiler Refactoring**: Merged to v5.x; v6.0 PR ready for review. Improves ErgoScript contract compilation, including support for boxes in registers and contract template parameter placeholders.

### Reference Client & Protocol R&D
- **v5.0.22 Release Candidate**: Three remaining PRs (#2146, #2156, #2158) before release. Option[] serializer completed; `deserializeTo` implementation nearing completion.
- **EIP-50 Updated**: Standards alignment work in progress.
- **ErgoHack Topic Selected**: Trustless relay contracts for Bitcoin and SigmaChains, sidechaining, and Bitcoin hashrate derivatives.

### Dexy Protocol
- Contract rechecking underway; documenting parameters and evaluating update actions for intervention workflows.

### Ledger Integration
- All app-related tasks completed; integration and unit tests pending.

### ErgoDevs DAO Structure
- Leadership model: kushti (R&D + Scala), dusek (Rust development). Open positions: Tooling Lead, Infrastructure Lead, Treasury/Fundraising, Business Development, Marketing, Education.

### Nautilus Wallet (Manifest v3 Migration)
- Migration mostly complete; fixing wallet ↔ dApp bridge context invalidation after inactivity. First beta release pending; dApp developers should verify compatibility before stable release.

### Paideia DAO Platform
- Create DAO frontend finished; debugging intermittent backend halt. EIP-5 contract standard integration complete with 90% test runtime reduction. Automatic ErgoScript recompilation on file change during development. Soft launch target: end June / early July.

### Crystal Pool (L1 Real-time Order-Based DEX)
- Buy and swap contracts completed with vitests. Forum post published explaining concept, risks, and security model. Positioned as order book alternative to AMM-based DEXes.

### Rosen Bridge
- **Bitcoin Integration**: RPC scanner integrated; Bitcoin calculator added to asset calculator.
- **Bitcoin Runes Support**: Four solutions evaluated, narrowed to two. Optimizing transaction costs while maintaining bridge compatibility.
- **Raffle V2**: Service, Inactive, and TicketRepo contracts in progress.

### Sigmanauts
- Welcomed new Sig-Cans: ergo_turkey, jumeijumei, nemonaut, Psyclops.
- NSFW token filtering discussions; repository of known NSFW/scam tokens proposed for wallet integration.
- Marketing and ErgoHack promotion ongoing.
- Cornell Blockchain conference payment coordinated.

### Token Projects
- **Token-Bouncer v1.1.0**: Direct token ID table entry; batch removal (`!bounce_all`); bug fix needed for ErgOne wallet sending.
- **Shadowpool**: Buy contract, swap contract, vitests; forum explanation pending.
- **Reputation System**: Forum post published explaining basic concepts.
- **Crux Finance**: Backend token search by partial name implemented.
- **Blitz TCG**: First edition card collection testnet copy minted for burn testing.

### Community Tooling
- **Ergo Node Terminal Installer**: Simple TUI script for node setup without manual .conf editing (by @aggergakker).

---

## Important Decisions or Announcements

- [@kushti, msg#27051, 2024-05-22]: Selected **trustless relay contracts** as ErgoHack topic (Bitcoin/SigmaChains sidechaining, Bitcoin hashrate derivatives).
- [@ergomorphic, msg#27050, 2024-05-22]: Sigma v6.0 work includes boxes in registers support, ContractTemplate placeholder generation, and Global.serialize implementation.
- [@kushti, msg#27051, 2024-05-22]: **v5.0.22 release imminent** pending review of PRs #2156 and #2158.
- [@capt_nemo429, msg#27060, 2024-05-22]: Nautilus **first beta release pending** after bridge context invalidation fix.
- [@luivatra, msg#27069, 2024-05-22]: Paideia **soft launch target: end June / early July** with EIP-5 contract integration and 90% test runtime improvement.
- [@c8, msg#27077, 2024-05-22]: Crystal Pool forum post published outlining L1 order-based DEX model.
- [@vorujack, msg#27080, 2024-05-22]: Bitcoin RPC scanner integrated into Rosen Bridge; two Runes solutions under optimization.

---

## Technical Q&A Worth Preserving

### ErgoScript and BigInt

- **Q** (@luivatra, msg#27028): "Is it intentional that the ErgoScript function substConstants does not include the size/contentlength uint in the output even if the input bytes have it defined?"
  **A** (@ergomorphic, msg#27040): "No, this was overlooked, good catch. Created an issue for v6.0, shouldn't be hard to fix."

- **Q** (@luivatra, msg#27041): "What is the difference between using ErgoTree version 0 and version 2?"
  **A** (@ergomorphic, msg#27042): "For version > 0 size bit is required and hence size itself expected to be serialized. So far there is no difference, all v5.0 ErgoTree operations are available for all versions. But this might change with v6.0, so dApp better be explicit about which versions they create."

- **Q** (@dΣathgripson, msg#27076): "Does this mean we won't be limited by JavaBigIntegerMax anymore and can use full 256 bit values in ErgoScript?"
  **A** (@kushti, msg#27086): Limit is in Sigma's BigInt type enforcing signed 256-bit values with <=255 bit operation results. For Schnorr validation, offchain code must iterate to discard values requiring 256 bits (examples: ChainCash and Rosen). UBigInt implementation will need tests for non-trivial examples (Sigma protocols, Bulletproofs verification).

- **Q** (@kushti, msg#27057): "How can 512 bits help you with secp256k1?"
  **A** (@ergomorphic, msg#27058-27059): "It will cover this use case as any 256-bit integer is also 512-bit integer. So you can represent q, p, then do x mod q with 512 bits."

- **Q** (@kushti, msg#27068): Caution on performance: "One of the deadliest attacks against Eth back in 2016 was on mispriced exp for 256 bits"
  **A** (@ergomorphic, msg#27071): "The cost parameters should be chosen based on profiling. The profiling infrastructure from v5.0 can be reused. Complexity of each operation on UBigInt can be properly approximated. Potential for attack is proportional to approximation mistake, limited due to max data size of 512 bits."

### Autolykos2

- **Q** (@Kartik, msg#27083-27084): "In src where is the top level function of Autolykos2 implemented? Is there any unit tests available for Autolykos2?"
  **A** (@kushti, msg#27088): Specification: https://www.docdroid.net/mcoitvK/ergopow-pdf. Implementation: https://github.com/ergoplatform/ergo/blob/1a417f44459e78acdb4edf6cc00f6d594494faf0/ergo-core/src/main/scala/org/ergoplatform/mining/AutolykosPowScheme.scala#L38. Tests: AutolykosPowSchemeSpec.

### Smart Contract Application Design

- **Q** (@justblake3911, msg#27082): Seeking design guidance on a faucet-like smart contract that distributes Lightning tokens to new users via Babel Fees plugin. Questions: Can contract query transactions to prevent wallet draining? Should this use smart contracts?
  **A** (@kushti, msg#27089): "I guess you mostly need for an example of an app working with a wallet at this point?"

### Wallet & Node Configuration

- **Q** (@sandboxlab, msg#27091): "If a node is a wallet and can store my coins, would it be a good idea to make it my primary wallet where I mine to and hold them?"
  **A** (@cafebedouin, msg#27094): "The wallet software is primarily an interface. You can use multiple interfaces for the same Ergo address. So, use what you like."
  **Additional context** (@Paul, msg#27096-27097): Useful for programmatic interaction. Prefers mining to cold wallet or Nautilus for swapping.

---

## Links Shared

- [Autolykos v2 Specification](https://www.docdroid.net/mcoitvK/ergopow-pdf): Official PoW scheme documentation.
- [Autolykos Implementation](https://github.com/ergoplatform/ergo/blob/1a417f44459e78acdb4edf6cc00f6d594494faf0/ergo-core/src/main/scala/org/ergoplatform/mining/AutolykosPowScheme.scala#L38): Scala reference implementation with AutolykosPowSchemeSpec tests.
- [Sigmanauts Meeting Minutes (2024-05-19)](https://sigmanauts.com/minutes/2024-05-19-meeting/): Treasury liquidation strategy, hackathon planning, NSFW token filtering discussions.
- [Paideia EIP-5 Contract Example](https://github.com/paideiadao/paideia-sdk/tree/documentation/src/main/resources/ergoscript/ActionSendFundsBasic/latest): Contract template and corresponding JSON.
- [Crystal Pool Forum Post](https://www.ergoforum.org/t/crystalpool-l1-realtime-orderbased-exchange/4783): L1 order-based DEX model, value proposition, contracts, risk analysis.
- [Reputation System Forum Post](https://www.ergoforum.org/t/reputation-system/4782): Basic concepts explanation.
- [Token-Bouncer v1.1.0 Release](https://github.com/rustinmyeye/token-bouncer/releases/tag/v1.1.0): Token ID table entry and batch removal.
- [Ergo Node Terminal Installer](https://github.com/Itaggergaard/Ergo-node-TUI-installer): TUI setup without manual .conf editing.
- [Ergo Smart Contract Examples](https://github.com/ergoplatform/ergoscript-by-example/tree/main): Reference implementations.
- [Sigma Protocol Cookbook](https://raw.githubusercontent.com/kushti/scapi-cookbook/master/SDK_Pseudocode.pdf): Section 2 provides non-trivial examples for Bulletproofs verification testing.

### GitHub PRs & Issues (v5.x & v6.0 Development)

- [#986](https://github.com/ScorexFoundation/sigmastate-interpreter/pull/986): Sigma Compiler refactoring (merged v5.x).
- [#987](https://github.com/ScorexFoundation/sigmastate-interpreter/pull/987): Sigma Compiler refactoring v6.0 (ready for review).
- [#971](https://github.com/ScorexFoundation/sigmastate-interpreter/pull/971): Boxes in registers support.
- [#977](https://github.com/ScorexFoundation/sigmastate-interpreter/pull/977): ContractTemplate placeholder generation.
- [#979](https://github.com/ScorexFoundation/sigmastate-interpreter/pull/979): deserializeTo implementation (final polishing).
- [#985](https://github.com/ScorexFoundation/sigmastate-interpreter/pull/985): v6.0 test upgrades.
- [#989](https://github.com/ScorexFoundation/sigmastate-interpreter/pull/989): Global.serialize for v6.0 (WIP on tests).
- [#990](https://github.com/ScorexFoundation/sigmastate-interpreter/pull/990): Option[] serializer for v6.0.
- [#991](https://github.com/ScorexFoundation/sigmastate-interpreter/issues/991): Opened by @kushti; details not provided in chat.
- [#992, #993, #981](https://github.com/ScorexFoundation/sigmastate-interpreter/issues): Created towards v6.0.
- [#994](https://github.com/ScorexFoundation/sigmastate-interpreter/issues/994): substConstants size bit issue (v6.0).
- [ergo#2146](https://github.com/ergoplatform/ergo/pull/2146): Merged to v5.0.22.
- [ergo#2156, #2158](https://github.com/ergoplatform/ergo/pull/2156): Pending v5.0.22 release.
- [#954](https://github.com/ScorexFoundation/sigmastate-interpreter/pull/954): Approved and merged.
- [Rosen Bridge RPC Scanner](https://github.com/rosen-bridge/watcher/commit/7290dcf0e6359b9d8fd661251260dc33557517f5): Bitcoin RPC integration.
- [Rosen Bridge Bitcoin Calculator](https://github.com/rosen-bridge/ui/commit/a1d67b297653813d45de0439caedafec6bdf4ed5): Asset calculator extension.

---

## Unresolved Questions

- **Unsigned BigInt Performance**: @kushti flagged concerns about mispriced exponentiation attacks (Eth 2016 precedent). @ergomorphic confirmed profiling-based cost parameters will mitigate, but actual benchmarking on UBigInt operations still needed (@kushti msg#27063).
- **512-bit Use Cases**: @ergomorphic proposed 512-bit support; @kushti questioned necessity for secp256k1. Resolution: Cover 256-bit as subset of 512-bit for modular operations, but real-world use case validation pending.
- **UBigInt Naming**: Debated between `UBigInt` and `UnsignedBigInt`; @ergomorphic suggested `UBigInt` as U-prefix is typical for numeric types. Final decision not documented in chat.
- **Paideia Backend Intermittent Bug**: Halts DAO creation; restart temporarily fixes. Root cause undiagnosed (@luivatra msg#27069).
- **Token-Bouncer ErgOne Bug**: Program gets stuck if ErgOne enters wallet; all other tokens work. Fix required but not yet implemented (@Unknown msg#27064).
- **NSFW Token Filtering Standard**: EIP-0024 "explicit" flag exists, but wallets (Nautilus, SkyHarbor) haven't fully implemented filtering. Community proposing external repository; implementation approach TBD (@Paul msg#27066, Unknown msg#27061).
- **Runes Optimization**: Two solutions under testing; cost minimization and TypeScript library compatibility still being improved (@vorujack msg#27080).
- **Fleet SDK Node/Explorer API**: @mgpai requested library links; response not provided in chat segment (@mgpai msg#27100).

---

## Note on Activity Level

This week's chat reflects steady incremental progress on v5.0.22 release, v6.0 development (Sigma/ErgoScript), and ecosystem projects (Paideia, Crystal Pool,