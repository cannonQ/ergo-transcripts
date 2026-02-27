# Ergo Developer Chat Summary — 2024-W22
**Period:** 2024-05-27 to 2024-06-02  
**Participants:** 11 core developers and contributors

---

## Key Topics Discussed

- **UnsignedBigInt Implementation in ErgoScript** (@kushti, msg#27145): 256-bit bigint construction completed; encountered issue with existing monomorphic "exp" method of GroupElement during Schnorr verification work. Work continuing post-ErgoHack.

- **Trustless Bitcoin Relay for ErgoHack** (@kushti, msg#27145): Contracts mostly complete for Bitcoin transaction inclusion proof validation; currently working on tests and managing Kiosk/AppKit version compatibility.

- **Dexy Protocol Extract Action** (@kushti, msg#27145): Extract-to-the-future action tested on testnet; considering intervention script updates and documenting parameters for mainnet launch.

- **Sigma v6.0 Numeric Methods** (@ergomorphic, msg#27146): Completed BigInt serialization checks, Numeric.toBigEndianBytes implementation, SubstConstants fixes, and Global.serialize costing. Multiple PRs merged; refactoring queued for 6.x releases.

- **Contract Template (EIP-5) Support** (@luivatra, msg#27153): Published comprehensive guide for EIP-5 Ergo contract template format with SigmaTemplateCompiler; js and Scala.js already support JSON deserialization; Appkit issue opened for parity (@ergomorphic, msg#27168).

- **CrystalPool L1 Trading** (@c8, msg#27148-27149): Real-time order-based DEX enabled by time-limited multisigs. Refined transaction validation workflow—client validates unsigned transactions server-side before background signing. Web UI and in-memory contract UTXO database complete; pool service APIs (`/boxes`, `/swap-transactions/create`, `/swap-transactions/sign`) implemented.

- **Paideia DAO Framework** (@luivatra, msg#27150): Fixed database bug causing incorrect token position display; reopened DAO creation despite unresolved intermittent bug; improved error logging with repeat counters to reduce log spam; contracts and documentation finalization ongoing.

- **Rosen Bridge Multi-Chain Expansion** (@moein_z, msg#27173-27174): Address extractor refactoring under review; Bitcoin RPC data extractor bug fixed; minimum fee updated to use NFT only; EVM RPC network and chain implementations under review; keygen-service preparation for ECDSA key generation ceremony; BTC launch test underway with parallel event testing.

- **Analog Ergo Atomic Swaps** (@deathgripson, msg#27164): Swap state reloading functional with client-side minimization; UI-REST API interactions reduced for backend state management; price API integrations and code refactoring planned. Ergo↔BTC-Lightning POC: regtest/testnet environment setup; preimage processing and contract integration in progress.

- **Blitz TCG** (@LowKeyNerd, msg#27147): Skyharbor integration nearly complete; pack sale ongoing; game updates rolling out; playtesting scheduled; developer temporarily unavailable for major relocation.

- **Crux DeFi & Paideia** (@luivatra, msg#27150): Database bug identified and temporarily fixed; error logging improvements; beta DAO creation reopened.

- **Reputation System** (@jossemii, msg#27151): Bitcoin network added to Sigma Reputation Panel; RPC server implementation similar to original runes library; validation phase in progress.

- **Satergo Wallet Localization** (@Yulius, msg#27189-27190): Indonesian and Malaysian translation updates merged.

---

## Important Decisions or Announcements

- [@kushti, msg#27145, 2024-05-29]: **UnsignedBigInt PR finalizing; EIP-50 issues and v6.0 method list will be finalized after completion.** Versioning strategy being reconsidered per PR #962 discussion; merge order: versioning → option[]/header serialization → new methods. No refactoring PRs for v6.0 until all feature PRs merged and audited.

- [@ergomorphic, msg#27139, 2024-05-29]: Refactoring minimized to only necessary v6.0 items (e.g., required for numeric method additions).

- [@kushti, msg#27191, 2024-06-01]: PR #2162 approved and merged; PR #2158 and #2160 pending review from @mgpai, @ccellado, @fantaerik, @ergomorphic.

- [@luivatra, msg#27150, 2024-05-29]: **Paideia remains in beta; users advised not to deposit significant funds.** DAO creation reopened despite unfixed intermittent bug; monitoring active for root cause discovery.

- [@luivatra, msg#27163, 2024-05-29]: EIP-5 support requested in JS and Rust toolkits to match existing Scala/AppKit support.

---

## Technical Q&A Worth Preserving

- **Q** (@justblake3911, msg#27124): For application functionality (wallet-to-wallet asset distribution), do I need a full node with API calls, or are smart contracts necessary? Would a flowchart help?  
  **A** (@justblake3911 self-answer, msg#27137): Running a full Ergo node with node wallet and POST requests to Swagger API `/wallet/payment/send` for initial distributions appears sufficient. Node wallet holds asset tokens and ERG for fees.

- **Q** (@Unknown, msg#27178): Does a grid training bot need a full archive node or pruned node?  
  **A** (@mgpai, msg#27179-27182): Ergo uses indexing on full nodes (no separate "archive node" concept). Pruned nodes do not work properly with wallets currently; full node with enabled wallet (mnemonic generation/restoration) required.

- **Q** (@HQΣr, msg#27186): Can multiple services (Duckpools offchain bots, GORT oracle) run on a single node wallet?  
  *(No answer provided in transcript)*

- **Q** (@deathgripson, msg#27195): Why does `fromBase64` work but `fromBase16` throws "not found in env" error?  
  **A** (@kushti, msg#27210): Using older compiler version; `fromBase16` introduced recently. Update compiler to latest version.

- **Q** (@HQΣr, msg#27197): How to convert public key to address and vice versa?  
  **A** (@Aco, msg#27204-27205, FleetSDK example):
  ```javascript
  // Pubkey → Address (network type 0)
  let address = fleetSDK.ErgoAddress.fromPublicKey('029...81', 0);
  
  // Address → Pubkey
  function addressToPubkey(address) {
    let ergoAddress = fleetSDK.ErgoAddress.fromBase58(address);
    return fleetSDK.SSigmaProp(fleetSDK.SGroupElement(ergoAddress.getPublicKeys()[0])).toHex();
  }
  ```

- **Q** (@deathgripson, msg#27213): What is the `ergo.jar` file in ErgoPy? Is it the Sigma state interpreter?  
  **A** (@mgpai, msg#27215): That jar is old and custom-built for ErgoPy, not the latest Sigma state interpreter.

---

## Links Shared

- [github.com/ScorexFoundation/sigmastate-interpreter/pull/979](https://github.com/ScorexFoundation/sigmastate-interpreter/pull/979): PR requiring finalization (based on prior PRs).
- [github.com/ScorexFoundation/sigmastate-interpreter/pull/984](https://github.com/ScorexFoundation/sigmastate-interpreter/pull/984): Numeric.toBigEndianBytes implementation for v6.0.
- [github.com/ScorexFoundation/sigmastate-interpreter/pull/987](https://github.com/ScorexFoundation/sigmastate-interpreter/pull/987): SigmaCompiler refactoring (merged).
- [github.com/ScorexFoundation/sigmastate-interpreter/pull/996](https://github.com/ScorexFoundation/sigmastate-interpreter/pull/996): BigInt serialization check.
- [github.com/ScorexFoundation/sigmastate-interpreter/pull/997](https://github.com/ScorexFoundation/sigmastate-interpreter/pull/997): UnsignedBigInt implementation (in progress).
- [github.com/ScorexFoundation/sigmastate-interpreter/pull/999](https://github.com/ScorexFoundation/sigmastate-interpreter/pull/999): Trivial method addition for ContractTemplate JSON deserialization.
- [github.com/ergoplatform/ergo/pull/2142](https://github.com/ergoplatform/ergo/pull/2142): AppKit release dependency (v5.0.22 release pending).
- [github.com/ergoplatform/ergo/pull/2146](https://github.com/ergoplatform/ergo/pull/2146): Node test for deserialization/validation.
- [github.com/ergoplatform/ergo/pull/2158](https://github.com/ergoplatform/ergo/pull/2158): Pending review.
- [github.com/ergoplatform/ergo/pull/2160](https://github.com/ergoplatform/ergo/pull/2160): Pending review.
- [github.com/ergoplatform/ergo/pull/2162](https://github.com/ergoplatform/ergo/pull/2162): Merged (approved by kushti).
- [github.com/SavonarolaLabs/crystal-pool](https://github.com/SavonarolaLabs/crystal-pool): CrystalPool L1 DEX implementation.
- [www.ergoforum.org/t/crystalpool-l1-realtime-orderbased-exchange/4783](https://www.ergoforum.org/t/crystalpool-l1-realtime-orderbased-exchange/4783): CrystalPool security design discussion.
- [reddit.com/r/ergonauts/comments/1d3brx4/ergohack_8_updates/](https://www.reddit.com/r/ergonauts/comments/1d3brx4/ergohack_8_updates/): ErgoHack VIII progress roundup.
- [github.com/Satergo/Satergo/pull/22](https://github.com/Satergo/Satergo/pull/22): Satergo wallet Indonesian/Malaysian localization.
- [github.com/rosen-bridge/scanner](https://github.com/rosen-bridge/scanner): Rosen Bridge address extractor refactoring.
- [github.com/ross-weir/ergohack-sidechain/tree/main/contracts/relay](https://github.com/ross-weir/ergohack-sidechain/tree/main/contracts/relay): Bitcoin relay contracts for ErgoHack.
- [ergoplatform.org docs on Global.fromBase16](https://docs.ergoplatform.com/dev/scs/sigma/lang-spec/#predefined-global-functions): ErgoScript predefined functions specification.
- [github.com/ergoplatform/ergo-appkit](https://github.com/ergoplatform/ergo-appkit): Source of `ergo.jar` for ErgoPy.
- [github.com/Satergo/Satergo/blob/cf7c7fd.../WalletKey.java#L250](https://github.com/Satergo/Satergo/blob/cf7c7fd0302be6eec7df02e745e38817c04a38c7/src/main/java/com/satergo/WalletKey.java#L250): Satergo public key to address conversion example.

---

## Unresolved Questions

- **Refactoring strategy for v6.0:** Exact scope of versioning-related refactoring still being determined (@kushti, msg#27110).
- **EIP-5 Rust toolkit support:** Requested but no implementation committed (@luivatra, msg#27163).
- **Intermittent Paideia DAO bug:** Root cause unidentified; temporary fix deployed; investigation ongoing (@luivatra, msg#27150).
- **Multiple services on single node wallet:** Whether Duckpools offchain bots and GORT oracle can coexist on one node wallet—raised by @HQΣr but unanswered.
- **CrystalPool security audit:** Forum discussion open for security feedback but no formal audit timeline announced (@c8, msg#27149).