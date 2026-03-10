---
title: "Ergo Developer Chat — 2025-W18"
date_start: "2025-04-28"
date_end: "2025-05-04"
type: telegram_weekly
channel: developer
week: "2025-W18"
source: telegram
message_count: 50
categories: [technical, wallet, governance, ecosystem]
key_terms: [explorer, indexing, tokenid, unspent boxes, node API, 5.0.26, bug fix, release planning, ASAP, "github issue #2210", multisig, Nautilus wallet, JSON-RPC, EIP-12, wallet communication protocol, 6.0 protocol, soft-fork, Sigmachains, L2, input/ordering blocks EIP]
---
# Ergo Developer Chat — 2025-W18 Summary

## Key Topics Discussed

- **Explorer indexing issues with token queries**: Multiple nodes showing inconsistent unspent box counts for the same token ID (e.g., SPF tokens showing >10,000 on local node vs. 189 on public node). Related to potential issues in version 5.0.25.

- **Core protocol development roadmap**: Discussion of post-sub-blocks priorities including Sigmachains development support, extending Sigma to off-chain and sidechain environments, and improved developer tooling for ErgoScript debugging and off-chain code handling.

- **Wallet library maturity in Sigma Rust**: Community identified that Sigma Rust lacks a properly implemented, higher-level wallet library—currently too low-level for application adoption. Noted need for cleaner frameworks handling off-chain code, streaming-based updates (vs. polling), and rollback handling.

- **Node API improvements for UTXO queries**: Developers flagged that the `/blockchain/box/unspent/byAddress` endpoint does not return full box contents, forcing inefficient double-polling. Request for optional `includeUnconfirmed` and `excludeMempoolSpent` parameters, plus address field consistency between confirmed and unconfirmed transactions.

- **ErgoScript debugging tooling**: Acknowledged gap in developer experience; kushti asked what current tutorials and new dev workflows look like, indicating awareness of disconnect in onboarding resources.

- **Nautilus multisig capabilities**: anon_br deferred multisig implementation to v1.3.0 due to other workload; flagged broader concern about EIP-12 becoming a "growing Frankenstein" and proposed considering a new JSON-RPC protocol (MetaMask-like) for wallet communication.

## Important Decisions or Announcements

- [@kushti khushi, msg#34143, 2025-04-28]: Explorer indexing issues should be fixed; confirmed issues with 5.0.25 pending investigation.

- [@kushti khushi, msg#34149, 2025-04-29]: **Weekly Ergo Developers chat scheduled Wed, April 30th, 1PM UTC** to discuss development tool news, financial contract feedback, 6.0 protocol soft-fork, input/ordering blocks EIP, Sigmachains, L2 and research topics.

- [@kushti khushi, msg#34176, 2025-05-02]: Release plan: **5.0.26 targeted for next week, followed by 6.0.0**. PR #2204 under review; 6.0.0 PR in sigma under review and being improved.

- [@Glasgow, msg#34156-34157, 2025-04-30]: awesome-ergo repo refresh in progress; DeepWiki documentation indexed for main Ergo repos at https://deepwiki.com/ergoplatform.

## Technical Q&A Worth Preserving

- **Q** (@c8, msg#34180): Is there a node API that returns latest confirmed UTXO, disregarding mempool?
  **A** (@Flying Pig (™), msg#34190): Use `POST /blockchain/box/unspent/byAddress` with `includeUnconfirmed=false&excludeMempoolSpent=false` parameters.

- **Q** (@MGpai, msg#34168): What is the state of ErgoScript debugging?
  **A** (@kushti khushi, msg#34169): Asked if novamon was available (implied ongoing work, not resolved in chat).

- **Q** (@c8, msg#34161): What would a properly implemented Sigma Rust wallet library look like?
  **A** (@Colby Cellador, msg#34162): Suggested exploring app use cases first; c8 agreed to share attempts once revisiting native wallet builds (msg#34163).

- **Q** (@zargarzadehmoein, msg#34178): Are you planning to address issue #2210 in version 5.0.26?
  **A** (@Colby Cellador, msg#34179): Focused on fixing it, but no fix yet as of 2025-05-03.

- **Q** (@zargarzadehmoein, msg#34186): How was the token ID indexing issue reproduced?
  **A** (@Colby Cellador, msg#34189): Will DM steps to add logs/change log level on reporter's node for diagnostics.

- **Q** (@dusek, msg#34195): Potential bug in dlog_protocol.rs—`r.public_key` should already be multiplied by generator, not multiplied again? (flagged as observation requiring review)

## Links Shared

- [https://deepwiki.com/ergoplatform/sigmastate-interpreter/1-overview]: DeepWiki documentation for Sigma State Interpreter overview
- [https://deepwiki.com/ergoplatform]: Central index for all main Ergo repository DeepWiki documentation
- [https://github.com/ergoplatform/awesome-ergo]: awesome-ergo repo refresh in progress
- [https://github.com/ergoplatform/ergo/issues/2210]: Critical issue with 5.0.25 (indexing/token box count inconsistency)
- [https://github.com/ergoplatform/ergo/pull/2204]: PR under review by kushti (related to issue #2210)
- [https://github.com/Moria-Finance/nautilus-wallet]: Nautilus wallet repository (multisig capability discussion)
- [https://github.com/ergoplatform/ergo/pull/2210]: dusek's observation on dlog_protocol.rs generator multiplication
- [https://node.sigmaspace.io/blockchain/box/unspent/byTokenId/78263e5613557e129f075f0a241287e09c4204be76ad53d77d6e7feebcccb001?offset=0&limit=100]: Public node showing indexing inconsistency
- [https://node.ergopool.io/blockchain/box/unspent/byTokenId/78263e5613557e129f075f0a241287e09c4204be76ad53d77d6e7feebcccb001?offset=0&limit=100]: Another public node with same indexing issue

## Unresolved Questions

- **Cause of explorer indexing discrepancy** (msg#34139–34186): Multiple nodes returning inconsistent unspent box counts for the same token. Reproduced on sigmaspace.io and ergopool.io nodes but not locally. Root cause under investigation pending log analysis.

- **EIP-12 wallet protocol refactor** (msg#34151): anon_br noted EIP-12 becoming "a growing Frankenstein" and proposed new JSON-RPC protocol for wallet communication, but no decision or timeline set.

- **ErgoScript debugging tool status** (msg#34168–34169): State of tooling unclear; kushti indicated potential disconnect from current dev experience/tutorials.

- **Sigma Rust wallet library design** (msg#34161–34163): High-level API design not finalized; c8 to revisit and share concrete proposals based on native wallet building experience.