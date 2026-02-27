# Ergo Developer Chat — 2025-W16 Summary

## Key Topics Discussed

- **Sub-blocks Implementation**: kushti detailed progress on sub-blocks EIP support, including p2p protocol testing with multiple peers, transaction validation for class 1/2 transactions (those reading timestamp, miner pubkey, or votes), and block formation. Public devnet/testnet deployment planned after validation work completes.

- **Ergo Protocol 6.0 Finalization**: All planned PRs merged; 6.0 is finalized with a fix for preventing injection of big integers >256 bits via Autolykos v1 solution deserialization. RC5 released and undergoing final audit.

- **Keystone Hardware Wallet Integration**: Pgr456 working on custom serialization schema for unparsed ErgoTree support in reduced transactions, with address display from unparsed trees and signing workflow adjustments.

- **Nautilus Wallet Internationalization**: Completed i18n support with en-US dictionary finished, pt-BR translation done, and custom pluralization rules added for languages like Russian that require singular/paucal/plural forms.

- **Rosen Bridge Expansion**: Doge integration nearing completion despite API rate-limiting issues; Bitcoin Runes integration requires resolving Schnorr signature support for Taproot addresses (investigating Bitcoin-Core and FROST solutions). QA testing expanded to 3-4 week milestone.

- **Oracle Core 2.0.3**: Released without node scans; Oracle Pool v2 operational with Dexy Gold rewards (GORT).

- **Dexy Protocol**: Mainnet tokens reminted; contracts being prepared for private testing before public announcement.

- **Celaut Project**: Status unclear—Josemi reports still in testing/fixing phase; main blocker is "packaging" into service specification.

## Important Decisions or Announcements

- [@kushti, msg#34041, 2025-04-15]: Sigma 6.0 finalized after merging PR #1047.

- [@kushti, msg#34071, 2025-04-18]: Ergo protocol reference client v6.0.0-RC5 released; expected to be identical to final release pending mainnet voting height and ongoing audit.

- [@kushti, msg#34083 & msg#34086, 2025-04-21–22]: Updated Sigma dependency to 5.0.15 in 5.0.26; doing final review for release.

- [@kushti, msg#34103, 2025-04-23]: 6.0 finalized with fix for big integer injection vulnerability.

- [@kushti, msg#34106, 2025-04-23]: Oracle core v2.0.3 released, no longer using node scans.

- [@Marc the Shark, msg#34058, 2025-04-16]: Sigmanauts Mining Pool dashboard live at ergominers.com; iOS app, MRP UI, and Mining Wave API enhancements in development.

- [@Luivatra, msg#34056, 2025-04-16]: Token2Token support for CruxFinance expected before next dev update.

- [@Bruno, msg#34129, 2025-04-26]: AOSSIE participating in Google Summer of Code for 10th consecutive year; 3 Ergo-related projects possible; seeking additional mentors (flexible time commitment).

- [@arobsn, msg#34118 & msg#34121, 2025-04-23]: Nautilus i18n support complete; pluralization rules added for complex languages.

## Technical Q&A Worth Preserving

- **Q** (@Marc the Shark, msg#34039): API call to `localhost:9053/blockchain/box/byTokenId/0cd8c9f416e5b1ca9f986a7f10a84191dfb85941619e49e53c0dc30ebf83324b` for Comet token returns nothing. Node issue or API problem?
  **A** (@kushti, msg#34040): Verify node is on 5.0.25/5.1.2 and index was built with that version; previous versions lost info on processing rollbacks.

- **Q** (@anon_br, msg#34031): How to handle ErgoTree header versioning in transaction serialization when inputs cannot be touched?
  **A** (@anon_br, msg#34031): Extend box serialization schema with VLQ field before ErgoTree (ignored during hashing/signing); create signing map like Ledger where client specifies keys per input.

- **Q** (@Pgr456, msg#34091): How to get base58 address representation from unparsed ErgoTree without parsing?
  **A** (@arobsn, msg#34096): Address encoding: `base58(headByte + ergoTreeBytes + checksum)` where checksum = first 4 bytes of blake2b256 hash. Provides NetworkPrefix/AddressTypePrefix definitions and code references.

- **Q** (@Pgr456, msg#34105): Does ReducedTransaction avoid evaluation while UnsignedTransaction requires it?
  **A** (@arobsn, msg#34108): ReducedTransaction doesn't require evaluation in minified sigma-rust; only proof bytes generated regardless of format.

- **Q** (@c8, msg#34119): How to handle Russian pluralization (3 forms: singular, paucal, plural) in i18n?
  **A** (@arobsn, msg#34121): Custom pluralization rules added; use format `{n} неделя | {n} недели | {n} недель` with optional zero case prefix.

- **Q** (@kushti, msg#34082): How to handle transactions reading block timestamp, miner pubkey, or votes during sub-blocks inclusion?
  **A** (@kushti, msg#34087): Support implemented in Sigma for disallowing these field reads; exceptions thrown during validation distinguish class 1/2 transactions; no need to scan trees.

- **Q** (@kushti, msg#34088): How computations metered and pricing determined in Celaut?
  **A** (@Josemi, msg#34090): Detailed response posted in forum thread (https://www.ergoforum.org/t/how-are-computations-metered-and-pricing-determined-on-celaut/5140).

## Links Shared

- [https://github.com/Satergo/Satergo/pull/31]: Satergo wallet translation updates (Indonesian, Javanese, Malaysian).

- [https://www.coincarp.com/id/currencies/peperg/]: PepERG listing on Cryptocurrency Tracking Service.

- [http://ergominers.com/]: Sigmanauts Mining Pool dashboard.

- [https://preview--cosmic-miner-verse-ui.lovable.app/]: MRP UI prototype.

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1047]: Sigma 6.0 finalization PR (merged).

- [https://github.com/ergoplatform/ergo/releases/tag/v6.0.0-RC5]: Ergo node 6.0.0-RC5 release.

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/930]: Comprehensive 6.0 PR with big integer injection fix (under review).

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1069]: Sub-blocks transaction class validation PR.

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1066]: Protocol reference client fix PR (merged).

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1062]: Sigma 5.0.16 release candidate (awaiting more tests).

- [https://github.com/ergoplatform/ergo/pull/2204]: Node 5.0.26 review PR.

- [https://github.com/KeystoneHQ/keystone-sdk-base/blob/master/packages/ur-registry-ergo/tests/ErgoSignRequest.test.ts]: Keystone Ergo signing request example with serialized reduced transaction.

- [https://github.com/KeystoneHQ/keystone-sdk-usb]: Keystone SDK for USB custom serialization.

- [https://github.com/ergoplatform/oracle-core/releases/tag/v2.0.3]: Oracle core v2.0.3 release.

- [https://hackernoon.com/bridging-ai-and-blockchain-developing-a-plugin-for-chatgpt]: Article on ChatGPT plugin for blockchain.

- [https://x.com/avslesarenko/status/1666739591053815809]: Twitter reference for AI training on Ergo.

- [https://www.ergoforum.org/t/how-are-computations-metered-and-pricing-determined-on-celaut/5140]: Celaut metering and pricing forum discussion.

- [https://github.com/nautls/nautilus-wallet/pull/280]: Nautilus pt-BR internationalization PR.

- [https://github.com/nautls/nautilus-wallet/pull/281]: Nautilus custom pluralization rules PR.

- [https://github.com/fleet-sdk/fleet/blob/548e2b11ec39bde1b685d4e7ab8a8cfc2e5c1aff/packages/core/src/models/ergoAddress.ts#L36-L53]: Fleet SDK address type prefix determination.

- [https://github.com/ergoplatform/sigma-rust/blob/f2e64bb7f11b117f7012694461f13e00ff0986e8/bindings/ergo-lib-c-core/src/address.rs#L143-L149]: Sigma Rust network prefix definition.

- [https://github.com/ergoplatform/sigma-rust/blob/f2e64bb7f11b117f7012694461f13e00ff0986e8/bindings/ergo-lib-c-core/src/address.rs#L171-L178]: Sigma Rust address type prefix definition.

- [https://github.com/networkspore/netnotes-engine/tree/main/src/main/resources/contracts/dex]: Netnotes-engine experimental DEX contract drafts.

- [https://deepwiki.com/ergoplatform/ergo/1-ergo-node-overview]: DeepWiki Ergo node overview.

- [https://deepwiki.com/fleet-sdk/fleet]: DeepWiki Fleet SDK documentation.

## Unresolved Questions

- **Sub-blocks devnet/testnet timeline**: kusht working on validation & block formation; no confirmed deployment date given (@kushti, msg#34101, 2025-04-23).

- **Keystone signing schema finalization**: Pgr456 still adjusting serialization and testing address display before signature testing (@Pgr456, msg#34112, 2025-04-23).

- **Rosen Bridge Schnorr support for Runes**: Two potential solutions under investigation (Bitcoin-Core vs. FROST); no decision made (@ZzZzBYE, msg#34114, 2025-04-23).

- **Block candidate generation in sub-blocks**: dusek questioned approach during (sub)block assembly; kushti replied work in progress (@dusek & @kushti, msg#34125–34128, 2025-04-24–25).

- **Celaut service specification packaging**: Josemi reports this remains the main blocker; no ETA (@Josemi, msg#34067, 2025-04-16).

---

**Total messages processed:** 93  
**Active technical contributors:** kushti, anon_br (arobsn), Pgr456, Marc the Shark, Luivatra, c8, iospore, dusek, ZzZzBYE, Bruno  
**Week characterized by:** Finalization of 6.0 protocol, sub-blocks validation progress, wallet/bridge integration work, i18n infrastructure improvements.