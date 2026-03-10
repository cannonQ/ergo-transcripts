---
title: "Ergo Developer Chat — 2026-W06"
date_start: "2026-02-02"
date_end: "2026-02-08"
type: telegram_weekly
channel: developer
week: "2026-W06"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo Developer Chat Summary — 2026-W06

## Key Topics Discussed

- **Sub-blocks Testing & Devnet Launch**: Devnet relaunched with 60s average ordering block delay and 60 input blocks per ordering block. Currently running with 3-4 mining peers. Code improvements and documentation updates in progress. [@kushti khushi, msg#38284, 2026-02-04]

- **Ergo Protocol Release Pipeline (6.0.3 & 6.0.4)**: Multiple PRs under review; #2252 and #2290 ready for community review. Plan to extract sub-blocks related PRs one-by-one after these releases. [@kushti khushi, msg#38286, 2026-02-04]

- **Schnorr Signature Endpoint**: New `/utils/schnorrSign` endpoint added to allow generation of Schnorr signatures for arbitrary messages using node wallet keys. Useful for off-chain applications working with Schnorr signature verification contracts. [@kushti khushi, msg#38312, 2026-02-05]

- **Fleet SDK Ghost Register Issue**: User reported UTXO register values (R5) changing between local representation and node validation. Root cause identified as input selection: Fleet prioritizes older inputs by default unless `ensureInclusion: true` is set. [@anon_br, msg#38320, 2026-02-05]

- **Nautilus Wallet Signing Error**: Complex transaction signing failed with "invalid public key" error in Nautilus despite working via node endpoint. Issue under investigation; likely related to Nautilus secret/input selection logic. [@kushti khushi, msg#38251; anon_br, msg#38319, 2026-02-05]

- **Ergo Book Project**: Converting from existing articles to mdbook format for simplified publishing and self-hosting. Current structure published at GitHub; contributions welcomed (no LLM-generated content). Reddit AMA planned with contributors (Grayman, Armeanio, kushti). [@kushti khushi, msg#38291, 2026-02-04]

- **Spectrum DEX Backend Outages**: Both `dex-api.sigmaspace.io` and `api.spectrum.fi` were down due to API cache exceeding RAM; sigmaspace restored, monitoring added. [@Pgr456, msg#38351, 2026-02-07]

- **NFT Viewer Privacy Concerns**: Node NFT viewer implementation may expose user IP addresses when rendering external URLs (IPFS or otherwise) from NFT R9 register. Being split from other PR; privacy implications under review. [@kushti khushi, msg#38278; Arohbe, msg#38325, 2026-02-04]

- **Storage Rent Demurrage Tracking**: Built live tracker showing 441K+ storage rent claims with mobile-friendly interface, updated every 15 minutes. Discussion of claiming imbalance patterns planned. [@cannon_q, msg#38292, 2026-02-04]

- **Game of Prompts (GoP)**: Platform for creating AI robot competitions through Ergo contracts. Ongoing testing and refinement cycle. [@Josemi, msg#38300, 2026-02-04]

- **ErgoAuth EIP-0028 Implementation Issue on Terminus**: iOS wallet showing "reply URL not on host" error despite matching hostnames in ergoauth:// URL and replyToUrl. Desktop Nautilus works correctly with same server. [@bmfink, msg#38354, 2026-02-07]

## Important Decisions or Announcements

- [@kushti khushi, msg#38284, 2026-02-04]: Sub-blocks devnet relaunched with 60s ordering block delay; code improvements and documentation in progress.

- [@kushti khushi, msg#38286, 2026-02-04]: Release plan: 6.0.3 & 6.0.4 in upcoming weeks, then sub-blocks PRs extracted for review incrementally.

- [@kushti khushi, msg#38312, 2026-02-05]: New Schnorr signature endpoint (`/utils/schnorrSign`) ready for review; supports off-chain contract verification use cases.

- [@Arohbe, msg#38328, 2026-02-04]: NFT Viewer feature complete; will be split from dark mode PR and open-sourced this weekend.

- [@cannon_q, msg#38303, 2026-02-04]: SigmaVerse repository moved to Degens-World GitHub org; contributors have write access to expand dApp listings.

- [@Patato, msg#38373, 2026-02-07]: Forked Ergo Paper Wallet with BIP39 passphrase support; verified against Satergo; all UI languages updated.

## Technical Q&A Worth Preserving

- **Q** (@Josemi, msg#38267): How can R5 register values differ between Fleet SDK representation and node validation? UTXO shows same value locally but node reports different values in diagnostic info.
  
  **A** (@anon_br, msg#38320): Input selection is likely the issue. Fleet prioritizes older inputs by default. Use `.from(parseBox(game.box), { ensureInclusion: true })` to enforce contract input selection. Alternatively, enable Developer Mode in Nautilus to inspect exact signing JSON.

- **Q** (@Pulsarz, msg#38385): How to convert an ErgoTree to template hash?
  
  **A** (@kushti khushi, msg#38407): No dedicated node endpoint needed; get the tree from P2S and strip constants to generate template. Cannon_q provided Python scripts in recent weeks as working reference. [@cannon_q, msg#38395]

- **Q** (@Pulsarz, msg#38390): Why is there no node API function to convert contract ErgoTree to template hash, given it's just an ErgoTree without constants?
  
  **A** (@cannon_q, msg#38409): ErgoDex labs tools available at `ergolabs.degens.world/tools`; template hash generation can be done via custom scripts or LLM-assisted code generation.

- **Q** (@HQΣr, msg#38380): Transactions being submitted and receiving TXIDs but not appearing in Ergo Explorer for hours.
  
  **A** (@kushti khushi, msg#38405): Likely double-spending scenario with lower fee than already in mempool. [@HQΣr, msg#38408]: Resolved by using node endpoints directly instead of Explorer submit endpoint.

- **Q** (@Netim, msg#38314–315): Node stuck at height 5812 after database reset and re-sync.
  
  **A** (@kushti khushi, msg#38338): Logs needed for diagnosis; investigating invalid input block header generation on 213 node. [@Netim, msg#38317]: Logs provided via Google Drive.

- **Q** (@Moein Zargarzadeh, msg#38348): Both Spectrum backend APIs down.
  
  **A** (@Pgr456, msg#38351): API cache exceeding RAM; sigmaspace restored and will be monitored. Health check API methods needed for monitoring infrastructure.

## Links Shared

- [GitHub #2252 PR](https://github.com/ergoplatform/ergo/pull/2252): Needed for 6.0.3; testnet nodes with current version.

- [GitHub #2290 PR](https://github.com/ergoplatform/ergo/pull/2290): New `/utils/schnorrSign` endpoint for Schnorr signature generation.

- [GitHub #2291 PR](https://github.com/ergoplatform/ergo/pull/2291): Release plan for 6.0.3 & 6.0.4.

- [GitHub #2288 PR](https://github.com/ergoplatform/ergo/pull/2288): NFT Viewer implementation (privacy concerns flagged).

- [Ergo Book](https://github.com/kushti/ergo-book/blob/master/src/SUMMARY.md): mdbook format conversion with contributor call for Reddit AMA participation.

- [Ergo Transcripts](https://ergo-transcripts.vercel.app/): 58+ hours of Ergo content with SRT files in progress.

- [Storage Rent Demurrage Tracker](https://srtracker.degens.world/): Live storage rent claims analysis with 441K+ cataloged claims.

- [Game of Prompts](https://t.me/unstopbots): Telegram group for AI robot competition platform on Ergo contracts.

- [Degens-World SigmaVerse](https://github.com/Degens-World/sigmaverse): Community-maintained dApp registry now accepting contributions.

- [ErgoDex Labs Tools](https://ergolabs.degens.world/tools): Template hash conversion and other contract utilities.

- [Ergo Paper Wallet Fork](https://github.com/moon-miner/ergo-paper-wallet): BIP39 passphrase support; live at ergopaperwallet.vercel.app.

- [Degens-World GitHub Org](https://github.com/Degens-World): New community development hub coordinating Cyberverse, ErgoLabs, and related projects.

- [EIP-0028 Spec](https://www.ergoforum.org/t/verifying-schnorr-signatures-in-ergoscript/3407): Reference for Schnorr signature verification contracts.

- [Sigma-Rust PR #843](https://github.com/ergoplatform/sigma-rust/pull/843): Map behavior consistency alignment with Scala code.

- [Spectrum API Status](https://dex-api.sigmaspace.io): Monitored for cache/RAM issues.

## Unresolved Questions

- **NFT Viewer IP Tracking**: Implementation can expose node IP when rendering external URLs from NFT R9 register. Privacy model and mitigation strategy TBD before merge. [@kushti khushi, msg#38278]

- **Terminus ErgoAuth "Not on Host" Error**: Persistent issue on iOS despite matching hostnames in ergoauth:// URL and replyToUrl. Desktop Nautilus works correctly. Root cause and sigmaBoolean format requirements unclear. [@bmfink, msg#38354]

- **Sub-blocks Speed Improvements**: Discussion of whether to implement microblocks, sidechains, or on-chain optimizations for faster confirmations. Consensus on needing concrete application patterns before optimization. [@kushti khushi, msg#38284–286]

- **Dexy Gold Oracle v2 Reward Distribution**: V2 details and GORT reward mechanics mentioned but not fully specified. [@kushti khushi, msg#38295]

- **SigmaVerse Deployment Process**: Current deployment methodology unclear (GitHub-based vs. manual additions). Needs clarification before opening contributor access. [@qx(), msg#38341–343]

- **Handshake (HNS) Public API**: Query on working HNS public API returning JSON block height for multi-chain monitoring dashboard. [@Odiseus Me, msg#38353]