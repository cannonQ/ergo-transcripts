## Key Topics Discussed

- **Scala/Java compatibility in Android development**: Discussion of Scala 2.11/2.12 variants in Ergo libraries, JDK versions on Android devices, and whether devices need to support older Java versions (API level 26+) for Ergo wallet development.

- **Embedded browser in Satergo**: Aberg attempted to implement an embedded browser using JavaFX but found WebAssembly disabled in the webkit-based implementation, deciding it was overkill for the wallet.

- **JNI bindings in Sigma Rust**: Aberg questioned whether sigma-rust's JNI bindings were necessary when pure Java/Scala implementations exist, particularly for Android development.

- **Transaction cancellation on Ergo**: Discussion of whether transactions in the mempool can be cancelled before confirmation, with consensus that true cancellation doesn't exist but spending the same input boxes in a new transaction can effectively supersede an unconfirmed transaction.

- **Mempool spam protection**: Explanation of how Ergo nodes handle spam transactions—they timeout and flush after ~10-40 blocks if not picked up, and miners naturally filter low-fee transactions when demand exists.

## Important Decisions or Announcements

- [@kushti, msg#4935, 2022-08-08]: Ergo protocol reference client version 4.0.37 released
- [@Aberg, msg#5110, 2022-08-13]: Satergo v1.4.1 released with node update fixes, synced sending restrictions, Portuguese translation, and address renaming fixes
- [@kushti, msg#5178, 2022-08-14]: Merged PR #1806 to the Ergo repository (after approval from mewtoshi)

## Technical Q&A Worth Preserving

- **Q** (@Unknown, msg#5016): "If I send a transaction to mempool, is there any way to cancel the transaction before confirmed?"
  **A** (@MrStahlfelge, msg#5022): "You can expect it to be cancelled in most cases if you use the same input boxes." Unconfirmed transactions using identical inputs will be superseded by newer transactions spending those same boxes.

- **Q** (@Odiseus Me, msg#5019): "Does it make sense to have a feature that would allow one to cancel a tx before it enters the mempool—by creating a delay (similar to Gmail)?"
  **A** (@kushti, msg#5025): "Could be done but in most cases will cause inconvenience just." Implementation would require wallet-level changes and adds complexity for rare use cases.

- **Q** (@kii, msg#5028): "In cases where smart contracts force sending to one address, once the box is spent it can't be unspent in the mempool unless the contract fails when the block updates—correct?"
  **A** (@MrStahlfelge, msg#5029): "Exactly, we don't have a true cancel."

- **Q** (@Aberg, msg#4968): "Any reason sigma-rust has JNI bindings?"
  **A** (@greenhat, implicit): JNI bindings enable native performance for Android, though pure Java/Scala implementations are also available.

- **Q** (@Aberg, msg#4975): "Did 2.12 update to a new JDK? I think Android is on JDK 11 now?"
  **A** (@MrStahlfelge, msg#4980): JDK 11 is the current LTS that Android development tools settle on; no upgrade of device JREs occurred, though API level 26+ supports later Java APIs like `java.time`.

## Links Shared

- [https://github.com/ergoplatform/ergo/releases/tag/v4.0.37]: Ergo protocol reference client v4.0.37 release notes
- [https://endoflife.date/java]: Java LTS and support lifecycle reference
- [https://arstechnica.com/tech-policy/2016/01/android-n-switches-to-openjdk-google-tells-oracle-it-is-protected-by-the-gpl/]: Article on Android's move to OpenJDK and GPL protection
- [https://developer.android.com/reference/java/time/package-summary]: Android documentation for `java.time` API availability (API level 26+)
- [https://github.com/ergoplatform/ergo/pull/1806]: GitHub PR #1806 (merged)
- [https://satergo.com]: Satergo v1.4.1 release with full changelog

## Unresolved Questions

- Whether dropping Scala 2.11 support for Android is necessary or if maintaining compatibility with older devices (pre-API 26) remains a priority
- How Ergo's fee estimation API (mentioned but not fully implemented) should be better utilized by wallet applications for user-facing fee suggestions