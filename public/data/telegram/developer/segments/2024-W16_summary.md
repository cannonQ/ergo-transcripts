---
title: "Ergo Developer Chat — 2024-W16"
date_start: "2024-04-15"
date_end: "2024-04-21"
type: telegram_weekly
channel: developer
week: "2024-W16"
source: telegram
message_count: 80
categories: [technical, wallet, governance, bridges, ecosystem, defi]
key_terms: [Sigma 6.0, EIP-50, ErgoTree, ErgoScript, method support, nbits encoding, UTXO management, box selection, SAFEW, Nautilus, privacy, dapp connector, derivation path, Autolykos2, verification, mining, Fleet SDK, ProveDLog, blind prover, Sigmanauts DAO]
---
# Ergo Developer Chat Summary — 2024-W16

## Key Topics Discussed

- **Sigma 6.0 Feature Development**: kushti published EIP-50 draft with instructions for implementing new Sigma type methods; first bounty issues created for contributors on nbits encoding and Autolykos2 verification in ErgoScript/ErgoTree.

- **UTXO Selection & Privacy in Wallets**: Extended discussion on wallet tooling for fine-grained UTXO control post-mixing; SAFEW identified as most capable tool with expert mode and tx builder, but lacks dApp connector support and has some bugs in address deselection.

- **Fleet SDK ProveDlog Implementation**: Nautilus team completed blind prover for `ProveDlog` in `@fleet-sdk/wallet`; reviews open.

- **ErgoStateContext & Block Headers**: Multiple developers asked about ErgoStateContext purpose in sigma-rust; clarified it contains PreHeader and recent block headers (10 blocks), required for contract execution and accessed via GraphQL API.

- **Storage Rent Collection**: Confirmed that storage rent collection is technically possible but operationally minimal (~400 ERG/year calculated); requires custom node middleware at pool level; mgPai clarified they were joking about collecting it currently.

- **Ledger Hardware Wallet Issue**: User reported Ledger fails to sign combined `proveDlog` && dataInput validation scripts despite each working individually; Nautilus works fine with same script — debugging ongoing.

- **Rosen Bridge Infrastructure**: Scaling tests initiated on rosenet; total locked asset calculator integrated; TSS and minimum-fee updates; OP_RETURN structure improvements for Bitcoin interop.

- **Paideia & Plasma Toolkit Updates**: Updated to EIP-5 with AppKit support; PR submitted for Plasma Toolkit integration.

- **Holdbox Memecoin Integration**: Created smart contract for Erdoge integration with 4-year unlock or 100x price unlock; works for any memecoin.

## Important Decisions or Announcements

- [@kushti0978, msg#26426, 2024-04-16]: Weekly Ergo Developers chat scheduled for Wednesday, April 17th, 1 PM UTC.

- [@Unknown, msg#26441, 2024-04-17]: **Sigmanauts DAO Proposals Passed**: Ergogo migration to Sigmanauts passed; 1000 ERG sent to 4Eyes for Sigma Lock development. Sigmanauts mining pool now ranked in top ten pools (35+ GH/s); listed on miningpoolstats.

- [@Unknown, msg#26441, 2024-04-17]: **Palmyra Donation**: Palmyra to donate $50k USD of PALM token to Sigmanauts Treasury.

- [@Unknown, msg#26441, 2024-04-17]: qx() representing Sigmanauts at Cornell Blockchain Conference; Sigmanauts web page updated with media section (Ergo podcast, Sigmacast, YouTube channels).

- [@Pgr456, msg#26442, 2024-04-17]: Released `ergo-lib-go` v0.26 supporting sigma-rust 0.26.0 bindings; enables transaction building, signing, token minting via Go.

## Technical Q&A Worth Preserving

- **Q** (@__daddychill__, msg#26399): Is there a wallet giving fine-grained UTXO control after mixing, since wallets mask boxes behind main address?  
  **A** (@Flying Pig, msg#26405, msg#26407, msg#26410, msg#26412): SAFEW allows tx building and address selection via expert mode + tx builder, but very slow UI. For dApp interaction: use ErgoPay cold wallet (offline seed on second phone, read-only address on hot phone; sign via QR). Nautilus lacks this; prefers Ledger support. Note: address selection in dApp context still limited by wallet architecture.

- **Q** (@__daddychill__, msg#26418): SAFEW has bugs when unselecting addresses (only works with all/main selected) and doesn't work with dApp connector. Can we add account-level dApp support?  
  **A** (@zkastn, msg#26416): Enable expert mode in settings → "open in tx builder" → select UTXOs directly; can export to JSON. Some bugs noted but feature exists.

- **Q** (@zkastn, msg#26417): [Shared stealth address contract reference for privacy](https://www.ergoforum.org/t/stealth-address-contract/255/4)

- **Q** (@mgpai, msg#26419–26421): Alephium released LSP (Language Server Protocol) for VS Code; should ErgoScript have this?  
  **A** (@kushti0978, msg#26424): Makes sense after Blockly support for no-code dApp dev; unlikely ErgoDevs DAO has resources currently.

- **Q** (@jossemii, msg#26467): What is ErgoStateContext's function in sigma-rust?  
  **A** (@c8, msg#26468–26469): Contains PreHeader + 10 recent block headers; obtained from GraphQL API then mapped into BlockHeaders and ErgoStateContext objects. Required for contract execution in transaction signing.  
  [@ergomorphic, msg#26470]: Represents recent blocks accessible in contracts; required for signing.

- **Q** (@krasaviceblasen, msg#26456): Ledger signs `proveDlog(currentUserPk)` individually and `CONTEXT.dataInputs(0).value > 0` individually, but fails when combined with &&. Works on Nautilus.  
  **A**: No resolution provided; marked as Ledger-specific issue requiring debugging.

- **Q** (@cafebedouin.org, msg#26457): Is anyone collecting storage rent? How much is available?  
  **A** (@mgpai, msg#26458, msg#26463–26465): Previously collected; currently very little (~400 ERG/year based on past calculation). Requires custom node middleware to collect at pool level.

## Links Shared

- [EIP-50 Draft (Sigma 6.0 Methods)](https://github.com/ergoplatform/eips/pull/100/files): Instructions for implementing new Sigma type methods; nbits encoding reference implementation.

- [Sigma 6.0 Bounty Issues](https://github.com/ScorexFoundation/sigmastate-interpreter/issues/964, https://github.com/ScorexFoundation/sigmastate-interpreter/issues/963, https://github.com/ScorexFoundation/sigmastate-interpreter/issues/675): Open bounties for contributors.

- [Autolykos2 Verification PR](https://github.com/ScorexFoundation/sigmastate-interpreter/issues/965): In progress.

- [Soft Fork Support Test](https://github.com/ergoplatform/ergo/pull/2146): Tests new method support during soft fork (90%+ miner voting).

- [SAFEW Wallet Repository](https://github.com/ThierryM1212/SAFEW): Privacy-focused wallet with TX builder and expert mode.

- [Stealth Address Contract](https://www.ergoforum.org/t/stealth-address-contract/255/4): Privacy contract reference.

- [Fleet SDK ProveDlog PR](https://github.com/fleet-sdk/fleet/pull/96): Blind prover implementation for Nautilus.

- [Paideia Plasma Toolkit PR](https://github.com/K-Singh/Plasma-Toolkit/pull/1): AppKit integration.

- [Holdbox Hodl Memecoin Contract](https://github.com/SavonarolaLabs/hodlbox-xyz/blob/main/src/lib/contract/hodl_meme.ts): Unlock after 4 years or 100x price.

- [Rosen Bridge GitHub](https://github.com/rosen-bridge/): Multiple repos with scaling, TSS, minimum-fee, and OP_RETURN updates.

- [ergo-lib-go Repository](https://pkg.go.dev/github.com/sigmaspace-io/ergo-lib-go): Go bindings for sigma-rust 0.26.0; examples in progress.

- [Oracle Core PR #328](https://github.com/ergoplatform/oracle-core/pull/328): Buyback issue fixes.

- [Block Headers GraphQL Query](https://gql.ergoplatform.com/): Fetch 10 most recent block headers for ErgoStateContext.

- [Fleet Serializer Import](https://github.com/SavonarolaLabs/fleet-serializer-import/commit/c88c0ed23204322fa8a87ac8ed9978fd254792c8): Example ErgoStateContext creation in JavaScript.

- [Miner Rewarder Backend Wallet](https://github.com/mgpai22/miner-rewarder/blob/main/src/rust/BackendWallet.ts): Reference implementation for ErgoStateContext usage.

- [Sigmanauts Discord](https://discord.gg/wa38bX57tY): "The Field" peer-to-pool pledging protocol DAO.

- [Cornell Blockchain Conference](https://www.cornellblockchainconference.com/): qx() speaking; Sigmanauts featured on homepage.

- [Miningpoolstats Ergo Rankings](https://miningpoolstats.stream/ergo): Sigmanauts pool ranked top ten.

## Unresolved Questions

- **Wallet dApp Connector Account Support**: Can SAFEW or Nautilus extend dApp connector to support account-level derivation paths instead of whole-wallet access? (@__daddychill__, ongoing concern for privacy users)

- **Ledger Hardware Wallet Script Verification Bug**: Why does Ledger fail combined `proveDlog && dataInput` scripts while Nautilus succeeds? (@krasaviceblasen, msg#26456 — no diagnosis provided)

- **Alephium LSP Adoption for ErgoScript**: Should ErgoScript get Language Server Protocol support for editors? (@mgpai, msg#26419–26421 — deferred to Blockly priority)

- **Storage Rent Collection Economics**: Is the ~400 ERG/year collection amount sufficient to justify pool-level implementation infrastructure? (@cafebedouin.org, msg#26457, msg#26461 — noted ambiguity in when/how it will be collected)

- **SAFEW Maintenance Status**: Is SAFEW still actively maintained? What is the status of reported bugs? (@__daddychill__, msg#26418 — @zkastn offered to document issues but dev activity unclear)