---
title: "Ergo Developer Chat — 2024-W15"
date_start: "2024-04-08"
date_end: "2024-04-14"
type: telegram_weekly
channel: developer
week: "2024-W15"
source: telegram
message_count: 78
categories: [technical, bridges, ecosystem, nft, defi, mining, governance]
key_terms: [EIP-5, AppKit, sigmastate-interpreter, contract finalization, rocksdb, node release, EIP-50, NBits encoding, versioned serialization, tss-sign function, ECDSA, signatureRecovery, guard-service, rosen-chains, metadata registry, token metadata, EIP-4, Nautilus wallet, CI validation, ergo-lib-go]
---
# Ergo Developer Chat Summary — 2024-W15
**Period:** 2024-04-08 to 2024-04-14  
**Messages Processed:** 78  
**Participants:** 6 active developers

---

## Key Topics Discussed

- **EIP-5 Support in AppKit & Sigma State**: Multiple developers awaiting EIP-5 support in sigmastate-interpreter to finalize smart contracts. @luivatra (Paideia) flagged this as blocking contract deployment; @kushti confirmed Sigma v5.0.14 released with progress on EIP-50 implementation.

- **Node API Mempool Filtering**: @Pulsarz identified that `/blockchain/box/unspent/byAddress` endpoint with `includeUnconfirmed=true` does not exclude boxes being spent in mempool, breaking UTXO selection for transaction chaining. @kushti noted PR #2131 addresses this with `excludeMempoolSpent` flag but stalled due to limit/offset parameter complications.

- **Sigma 6.0 Development**: @kushti outlined NBits encoding/decoding as EIP-50 example material and published SigmaChains video. Working on compact Sigma protocols support; versioned serialization needed for deserialization fixes.

- **Rosen Bridge Updates**: TSS sign function improvements (ECDSA support), guard-service and TSS packages under review. Rosenet repository now public. Rosen SDK design and requirements in active discussion.

- **Token & Contract Metadata Registry**: @capt_nemo429 (Nautilus team) building metadata registry with CI validation and REST API serving; @luivatra (Paideia) previously worked on contract metadata registry. @Pgr456 recommended separating metadata files repository from server implementation.

- **Lithos Protocol & Mining**: Custom stratum implementation near completion. Sigmanauts mining pool upgraded server, updated MiningCore config (PPLNS n=0.5), and published hashrate checker on webpage.

- **PoW JPGs NFT Collection**: @maritsaart released 3-year project with hexspeak SHA-256, IPFS CID v0, token ID, and minting TX ID all mined on GPU/CPU. Each NFT has 4 proof-of-work values with EIP-0024 V1 royalty standard.

- **Offchain Multisig Exchange Concept**: @c8 designing L1 offchain exchange using time-limited multisig (`exchangePK && userPK` with maxLockHeight timeout) and client-side wallet. @kushti provided signing algorithm gist and directed to Zero-Knowledge Treasury reference implementation.

- **Ergo-lib-go Released**: @Pgr456 completed v0.26.0 wrapper for sigma-rust C bindings in Go, supporting full sigma-rust v0.26 feature set (except REST API). Platform support matrix available in repository; transaction/token examples in progress.

---

## Important Decisions or Announcements

- [@kushti, msg#26331, 2024-04-10]: **Sigma v5.0.14 released**

- [@kushti, msg#26325, 2024-04-10]: **RocksDB branch merged into 5.1.0 release cycle**; will release 5.1.x from branches as pre-releases to keep 5.0.x as Docker default for months ahead

- [@kushti, msg#26325, 2024-04-10]: **EIP-50 draft published** at https://github.com/ergoplatform/eips/pull/100 with NBits encoding PR at https://github.com/ScorexFoundation/sigmastate-interpreter/pull/962

- [@DiscordBridge (Mick/BlitzTCG), msg#26326, 2024-04-10]: **Blitz TCG pack opening scheduled April 26** with launch video series live

- [@krasaviceblasen, msg#26328, 2024-04-10]: **DuckPools Phase 2 sale live** to fund v2 development with open-sourced DAO frameworks for community extension development

- [@Unknown (Sigmanauts), msg#26370, 2024-04-10]: **Sigmanauts mining pool webpage updated** with hashrate checker; pool fee 1% with initial 5 ERG treasury deposit; quarterly hosting cost billing (~$44/month)

- [@Pgr456, msg#26390, 2024-04-14]: **ergo-lib-go v0.26.0 released** — Go wrapper for sigma-rust C bindings supporting full v0.26 feature set

- [@Unknown (Sigmanauts), msg#26370, 2024-04-10]: **Multiple Sigmanauts DAO proposals active/passed**: $2,500 RareEVO allocation (passed), Sigma Lock vote (8 YES, 1 NO), Ergogo promotion (voting ~until Apr 12), Sig-Mining-Buffer (active)

---

## Technical Q&A Worth Preserving

- **Q** (@Pulsarz, msg#26347-26351): Does `/blockchain/box/unspent/byAddress` endpoint with `includeUnconfirmed=true` not excluding mempool-spent boxes make sense? Why can't proper UTXO transaction chaining work with Fleet + node API alone?  
  **A** (@kushti, msg#26352): "Sometimes you want to doublespend boxes spent by others." (@Luivatra, msg#26355): Alternative is using `/transactions/unconfirmed/byErgotree` + filtering confirmed UTXOs manually, but node API should handle this general use case.

- **Q** (@Pulsarz, msg#26353): Could `minConfirmations` parameter be added to `/blockchain/box/unspent` endpoint?  
  **A** (@kushti, msg#26357): Already implemented in PR #2131, not merged due to issues with `limit` and `offset` parameters; not included in 5.0.21 for same reason (msg#26360).

- **Q** (@Luivatra, msg#26318): Are you waiting for EIP-5 support in AppKit?  
  **A** (@Luivatra, msg#26320): "Most important is support for it in sigmastate I guess." (@ergomorphic, msg#26344): Can use AppKit version `1381ea75-SNAPSHOT` (based on Sigma v5.0.14).

- **Q** (@c8, msg#26376): Is it currently possible to sign a spending transaction from a `bobPK && alicePK` address without scripting using only 2x Ergo node API?  
  **A** (@kushti, msg#26377): Yes, possible by working with API via Swagger UI and JSONs. (@kushti, msg#26391): Published signing algorithm for 2-out-of-2 case with gist link; two messages of interaction needed; reference implementation in Zero-Knowledge Treasury (DistributedSigsServer).

- **Q** (@Pgr456, msg#26333): Are there plans for a standard token metadata registry like Cardano's?  
  **A** (@capt_nemo429, msg#26339): Nautilus team working on token and contract metadata registry with CI validation; found way to off-chain amend EIP-4 metadata but need wallet data signing support (blocked by Manifest v3 migration). (@luivatra, msg#26338): Previously worked on contract metadata registry.

- **Q** (@Pulsarz, msg#26346): What is expected from ErgoDevs DAO participants?  
  **A** (@kushti, msg#26378): "No concrete requirements atm, there is need to cover a lot, starting from tutorials, managing EIP, managing ErgoDevs DAO itself, to core development and research." (msg#26379): Better to invite everyone and see what can be covered.

---

## Links Shared

- [https://github.com/ScorexFoundation/sigmastate-interpreter/issues/956]: Issue for @ergomorphic review (msg#26315)

- [https://github.com/ScorexFoundation/sigmastate-interpreter/issues/956]: GitHub issue tracker for interpreter tasks (msg#26315)

- [https://github.com/ergoplatform/eips/pull/100]: **EIP-50 draft** for NBits encoding/decoding implementation as 6.0 material (msg#26325)

- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/962]: **Sigma PR for NBits encoding** (msg#26325)

- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/961]: Unused code elimination PR (msg#26325)

- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/932]: Boolean.toByte PR under review (msg#26325)

- [https://www.youtube.com/watch?v=Jj_Hg222s9Y]: **SigmaChains video** released (msg#26325)

- [https://www.youtube.com/watch?v=Khgd5aqZqBo]: **Blitz TCG launch video series** (msg#26326)

- [https://github.com/rosen-bridge/rosenet]: **Rosenet repository** now public (msg#26327)

- [https://dao.duckpools.io/ido]: **DuckPools Phase 2 IDO** (msg#26328)

- [https://github.com/sigmaspace-io/ergo-lib-go]: **ergo-lib-go v0.26.0** repository (msg#26390)

- [https://pkg.go.dev/github.com/sigmaspace-io/ergo-lib-go]: **ergo-lib-go package documentation** (msg#26390)

- [https://github.com/ergoplatform/ergo/issues/2144]: **Node API UTXO mempool filtering issue** filed by @Pulsarz (msg#26356)

- [https://github.com/ergoplatform/ergo/pull/2131]: **PR with excludeMempoolSpent flag** (msg#26357)

- [https://github.com/ergoplatform/ergo/pull/2101]: **PR ready for merging** using Sigma v5.0.14 (msg#26361)

- [https://sigmanauts.com/mining/]: **Sigmanauts mining pool webpage** with hashrate checker (msg#26370)

- [https://sigmanauts.com/minutes/2024-04-07-meeting/]: **Sigmanauts meeting minutes** (msg#26370)

- [https://ipfs.io/ipns/k51qzi5uqu5dmcgzuwz86d2q3w276s3oul284ixx0j9bskdimqvixmy6heartz]: **PoW JPGs collection** on IPFS with 3-year history (msg#26367)

- [https://ergexplorer.com/token#c0ffee11fe484d0c987c77636dc3cc429cef016a3dda31f51bd1cd85acb131f6]: **Example PoW JPG** (c0ffee token) visible in Ergo Explorer (msg#26368)

- [https://www.ergoforum.org/t/proof-of-work-backed-tokens/224]: **kushti's original PoW token proposal** (May 2020) (msg#26369)

- [https://github.com/anon-real/DistributedSigsServer]: **Zero-Knowledge Treasury reference** for generic multisig and node API interaction (msg#26391)

- [https://gist.github.com/kushti/270320175b8b0469d680d41ce13670b1]: **kushti's 2-out-of-2 signing algorithm** (msg#26391)

- [https://discord.gg/wa38bX57tY]: **"The Field" project Discord** for peer-to-pool pledging protocol (msg#26337)

- [https://github.com/ergoplatform/oracle-core/issues/327]: **Oracle Core buyback function issue** (msg#26330)

---

## Unresolved Questions

- **EIP-5 AppKit support timeline**: When will AppKit fully support EIP-5 after sigmastate implementation? (@Luivatra flagged as blocking Paideia contract finalization, msg#26318-26320)

- **Node API mempool filtering release**: Will `excludeMempoolSpent` flag be included in 5.0.22 or later? (@Pulsarz concerned about 5.0.21 missing it; @kushti cited limit/offset parameter complications, msg#26359-26360)

- **Token metadata registry separation**: Should metadata files and server implementation be in separate repositories? (@Pgr456 recommendation pending review, msg#26333-26341)

- **Sigma mining pool storage rent feature**: Still blocked on MiningCore node API issues; intermediary program being developed as workaround (@cheeseenthusiast, msg#26343)

- **Offchain exchange multisig implementation**: Requires testing of time-limited multisig script and verification of @kushti's signing algorithm on network (@c8 planning implementation, msg#26388-26391)

- **Lithos custom stratum completion**: No ETA for custom stratum release (@cheeseenthusiast, msg#26343)

---

## Community Metrics

- **Sigmanauts DAO Treasury** (as of msg#26370):
  - 29,250 ERG ($50k, 62%)
  - 4,000,000 THz ($21k, 28%)
  - 160,000 SPF ($7k, 9%)
  - 323,000 GCEX (0.5k)
  - **Total: ~$79,700**

- **Sigmanauts Mining Pool**:
  - Fee: 1%
  - Hosting cost: ~$44/month
  - PPLNS n: 0.5