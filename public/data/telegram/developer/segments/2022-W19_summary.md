# Ergo Developer Chat Summary — 2022-W19

**Period:** 2022-05-09 to 2022-06-19  
**Participants:** 10 developers  
**Focus:** Node development, EIP-27 activation, AppKit API changes, wallet integration, ErgoScript debugging

---

## Key Topics Discussed

- **Node Sync Issues & EIP-27 Activation**
  [@kushti, msg#2786, 2022-05-25]: Version 4.0.30 released with sync progress bar and header application fixes. EIP-27 locked in with ~92.68% hashrate support (949 votes); miners must update before activation. Next release will remove `eip27Supported` flag.

- **AppKit API Migration**
  Deprecation of `ctx.getUnspentBoxesFor()` and removal of `BoxOperations.selectTop()`. Replacement pattern uses `BoxOperations.createForSender()` with `ExplorerAndPoolUnspentBoxesLoader()` and `.loadTop()`.

- **Extended Public Key Derivation**
  [@Aberg, msg#2738-2740, 2022-05-20]: Solved derivation of child addresses from extended public key without secret key access using `parentKey.child(index)` on `ExtendedPublicKey`.

- **Wallet Integration with Koinly**
  [@Unknown, msg#2673, 2022-05-16]: Explored integrating Ergo into Koinly using read-only wallet keys (available in mobile wallet) and native token support, similar to Eternl on Cardano.

- **EIP-27 Re-emission Mechanism**
  [@kushti, msg#3213-3215, 2022-06-17]: Re-emission logic: count re-emission tokens in transaction inputs, send corresponding nanoERGs to re-emission proxy contract, burn re-emission tokens. 1 re-emission token ≈ 1 nanoERG.

- **Dexy Protocol Development**
  [@kushti, msg#2786, 2022-05-25]: Writing paper and discussing contracts with @scalahub.

- **Satergo Wallet Development**
  [@Aberg, msg#2892, 2022-06-01]: ErgoSock library (P2P connection without HTTP API) finished and ready for release. Satergo stable release 3 in final refinement stages.

---

## Important Decisions or Announcements

- [@kushti, msg#2786, 2022-05-25]: **EIP-27 Locked In** — 949 votes, ~92.68% hashrate support. Miner update required before activation.

- [@kushti, msg#2938, 2022-06-02]: **Testnet Node Update Required** — Update to 4.0.31 due to [GitHub issue #1726](https://github.com/ergoplatform/ergo/issues/1726).

- [@kushti, msg#2751, 2022-05-22]: PR review backlog sufficient for next 3-4 releases.

- [@kushti, msg#3050, 2022-06-10]: Offered to mark releases as pre-release to help Satergo's automatic node downloader distinguish stable from testnet versions.

- [@Aberg, msg#2892, 2022-06-01]: ErgoSock library release imminent; Satergo stable release 3 approaching.

---

## Technical Q&A Worth Preserving

**Q** (@Aberg, msg#2738): How to derive child addresses from extended public key without access to secret key?
**A** (@Aberg, msg#2740): Use `ExtendedPublicKey.child(index)` pattern:
```java
ExtendedPublicKey parentKey = ((ExtendedSecretKey) rootSecret.derive(DerivationPath.fromEncoded("m/44'/429'/0'/0").get())).publicKey();
P2PKAddress.apply(parentKey.child(0).key(), new ErgoAddressEncoder(...))
```

**Q** (@Aberg, msg#3126): What replaces `BoxOperations.selectTop` in updated AppKit?
**A** (@MrStahlfelge, msg#3134): Use `BoxOperations` instance with `.loadTop()`. Deprecated method moved to `BlockchainDataSource`.

**Q** (@MrStahlfelge, msg#3138): Sample usage of `getUnspentBoxesFor` replacement?
**A** (@MrStahlfelge, msg#3140):
```scala
val boxesToSpent = BoxOperations.createForSender(buyerAddress, ctx)
  .withInputBoxesLoader(
    ExplorerAndPoolUnspentBoxesLoader().withAllowChainedTx(true)
  )
  .withFeeAmount(minerFee)
  .withAmountToSpend(amountToSend)
  .loadTop()
```

**Q** (@Luivatra, msg#2545): How do miners get ERG rewards?
**A** (@Luivatra, implied context): Discussed in relation to oracle pool rewards.

**Q** (@zhang zee, msg#3186): In atomic exchange example from ErgoScript paper, does Alice get token back and Bob get 100 ERG back after signing?
**A** Unresolved in chat — technical question about box script semantics.

**Q** (@zhang zee, msg#3187): Is `propositionbytes` of a box equivalent to `PK.propBytes` for single-owner boxes?
**A** Unresolved — clarification sought on box ownership representation.

**Q** (@zhang zee, msg#3188): Does emission contract genesis box require signing at every block, and is it on-chain or off-chain?
**A** Unresolved — no response in chat.

**Q** (@Aberg, msg#3225): Ergofaucet requires Discord login; need testnet ERG?
**A** (@MrStahlfelge, msg#3226): Offered to send testnet tokens directly.

**Q** (@MrStahlfelge, msg#3222): Can ergopay showcase mint tokens on testnet?
**A** Affirmative — ergopay showcase available for testnet token minting.

---

## Links Shared

- [github.com/ergoplatform/ergo/issues/1702](https://github.com/ergoplatform/ergo/issues/1702): Node height stuck at 746,557 issue [@kushti, msg#2547, 2022-05-10]

- [github.com/ergoplatform/ergo/issues/1726](https://github.com/ergoplatform/ergo/issues/1726): Testnet node issue requiring 4.0.31 update [@kushti, msg#2938, 2022-06-02]

- [github.com/ergoplatform/ergo/releases/tag/testnet-sync](https://github.com/ergoplatform/ergo/releases/tag/testnet-sync): Problematic testnet release affecting Satergo downloader [@Aberg, msg#3043, 2022-06-09]

- [koinly.io/integrations/eternl/](https://koinly.io/integrations/eternl/): Reference for Eternl wallet xpub key integration pattern [@Unknown, msg#2673, 2022-05-16]

---

## Unresolved Questions

- **ErgoScript Paper Ambiguity** [@zhang zee, msg#3186-3189, 2022-06-15]: Atomic exchange example semantics — whether boxes return to original owners or swap. Also: `propositionbytes` semantics and emission contract signing requirements.

- **Wallet Burning Prevention** [@Luivatra, msg#3062-3073, 2022-06-10]: Discussion about preventing accidental token burns in wallet UIs — whether showing burned amounts and using signing screens is sufficient, or if contract-level constraints are needed. Concern raised that ErgoPad staking depends on current burn behavior.

- **Human-Readable ERGoScript Format** [@Luivatra, msg#3119, 2022-06-13]: Current pretty-print output for ErgoScript "is a stretch" for readability; noted potential for better formatting but no solution proposed.

- **Testnet Token Sourcing** [@Aberg, msg#3217-3225, 2022-06-18]: Ergofaucet changed to require Discord login, complicating testnet token acquisition — resolved ad-hoc via direct peer transfers.

---

## Notes

- **API Breaking Changes**: AppKit 4.0.9 update introduced significant refactoring. Developers on earlier versions should review `BoxOperations` and `BlockchainDataSource` migration patterns.

- **Release Tagging Issue**: GitHub release tagging for testnet vs. stable needed refinement to prevent automatic downloaders from pulling pre-release versions.

- **Emission Contract Clarity Needed**: Multiple ErgoScript specification questions suggest documentation gaps around box semantics, proposition bytes, and contract signing lifecycle.