---
title: "Ergo Developer Chat — 2025-W52"
date_start: "2025-12-22"
date_end: "2025-12-28"
type: telegram_weekly
channel: developer
week: "2025-W52"
source: telegram
message_count: 100
categories: [technical, wallet, defi, ecosystem, nft]
key_terms: [testnet, Hetzner, server migration, explorer, infrastructure, wallet-app, "PR #208", bounty, testing, release candidate, ChainCash, Basis, reserves API, tracker, redemption, sub-blocks, devnet, whitepaper, protocol research, node panel]
---
# Ergo Developer Chat Summary — 2025-W52
**Period:** 2025-12-22 to 2026-01-04  
**Participants:** 12 | **Messages Reviewed:** 100

---

## Key Topics Discussed

- **Infrastructure Migration**: Old Hetzner testnet server (195.201.82.115) decommissioned; testnet explorer, API, and GraphQL fully migrated to 128.253.41.110. Dashboard updated at https://infra-p2p.ergoplatform.com/cgi-bin/dashboard.cgi.

- **Ergo Wallet App 2.5 Release Candidate**: PR #208 merged with feature #188; testing and review requested. Bounty collection available for contributors.

- **Sub-blocks Devnet Testing**: kushti advancing input/ordering blocks research with devnet testing; peers being invited for feedback. Whitepaper finishing; planned to send for peer review.

- **ChainCash/Basis**: Fixed tracker box and reserves API; `/reserves` endpoint now functional. Redemption testing underway; promotional materials in progress.

- **USE Stablecoin**: DORT buyback offchain bot fixed; requires rescan before buyback testing can proceed.

- **Node Panel Dark Mode & NFT Viewer**: ArØhβΣ submitting PR #2288 with dark mode and NFT/token viewer. Explorer API fallback for light nodes; tokenId metadata pulled via `/blockchain/token/byId/<tokenId>` endpoint.

- **Xergon (Local LLM Node Integration)**: Encrypted local stats, restructured API for token amounts/ERG, added LLM badges. Seeking beta testers; requires decent CPU/GPU. Lithos Panel planned for post-Lithos Client 3.0 release.

- **Ergo Vanity Address GPU Generation**: arkadia released erg-vanity-gpu (early stage); searches start of address, case-sensitive. Performance: ~790k-1.3M searches/sec on GPU rigs. Only develop branch tested; nightly Rust dependency.

- **Decentralized Dapps on Ergo (IPFS-hosted)**:
  - **SIGHT**: Censorship-resistant anonymous reporting using blockchain-stored tokens, client-side PoW spam prevention, neighborhood-level GPS truncation, ~$0.01/report cost.
  - **SAY**: P2P social platform with token-based posts (SAY-{timestamp}), PoW anti-spam, on-chain follows via SAYFOLLOW tokens, 0.001 ERG/post, ErgoPay mobile wallet integration.
  - **Ephemeral Messenger v1.1**: Self-destructing on-chain messages with configurable lifetime, incentivized cleanup (earn ERG burning expired tokens), nation-state proof encryption passphrases, smart contract at 4HPn1j7Q26Y5PpqAqTH2gmKKPi8DT2b9JrpYqCgaeyc72hB4Vr4a6nQjkt3jAUZNKDcE32oN.

- **Wallet Analytics Tools**: cannon_q released Ergo Wallet Statement (bank/brokerage-style statement view) with monthly stacking charts, LP pool identification, storage rent forecasting, NFT categorization (including Cyberverse).

---

## Important Decisions or Announcements

- [@kushti khushi, msg#37622, 2025-12-31]: **No devs chat scheduled for 2025-12-31 (New Year's Eve).**

- [@kushti khushi, msg#37561, 2025-12-23]: **Ergo Wallet App PR #208 merged**; bounty collection available for contributors (@Superellipse acknowledged).

- [@ArØhβΣ @Arohbe 🍪, msg#37606, 2025-12-27]: **Node panel dark mode & NFT viewer PR submitted** (#2288) pending toast notification fixes.

- [@kushti khushi, msg#37612, 2025-12-29]: **Sigma Rust PR #838 approved by dusek**; sufficient for new release (decision: proceed with release).

---

## Technical Q&A Worth Preserving

- **Q** (@Aco Šmrkas, msg#37559): How is Explorer height greater than Node height?  
  **A** (@qx(), msg#37560): Likely label swap error; will investigate after verification.

- **Q** (@kushti khushi, msg#37593): Is the NFT viewer using extra indices?  
  **A** (@ArØhβΣ @Arohbe 🍪, msg#37594): Uses fallback to Explorer API if no extra index present; cheated a little.

- **Q** (@kushti khushi, msg#37600): Explorer dependency in node is problematic from architecture perspective.  
  **A** (@ArØhβΣ @Arohbe 🍪, msg#37601, #37603): Proposed solution—NFT viewer defaults to `/blockchain/token/byId/<tokenId>` endpoint; if node not indexed, popup requests optional explorer URL. Always attempts local call first, falls back only if user-provided URL entered. Prevents forced dependency on single explorer instance.

- **Q** (@HQΣr | Wont Dm 🐾 ⚡, msg#37596–37599): Can node panel support multiple wallet switching?  
  **A** (@ArØhβΣ @Arohbe 🍪, msg#37598): Will investigate; clarified as switching between multiple addresses in node wallet.

- **Q** (@HQΣr | Wont Dm 🐾 ⚡, msg#37607): Why are transactions not appearing in mempool (shows 0 but multiple TXs present)?  
  **A** (@kushti khushi, msg#37608): Asks for clarification on which mempool; no resolution provided in chat.

- **Q** (@cannon_q, msg#37658): Best practice for pulling NFT images into a site/viewer?  
  **A** (@ArØhβΣ @Arohbe 🍪, msg#37659): Pull token metadata from Explorer or node by tokenId, convert metadata to IPFS CID, use `http://ipfs.io/ipfs` as prefix (most stable gateway versus alternatives).

---

## Links Shared

- [https://github.com/ergoplatform/ergo-wallet-app/pull/208]: Ergo Wallet App 2.5 RC PR with feature #188.
- [https://github.com/Scottcjn/Rustchain]: Rust blockchain implementation reference shared.
- [https://github.com/ArOhBeK/Xergon-Network]: Xergon local LLM node integration overview.
- [https://github.com/ergoplatform/ergo/pull/2288]: Node panel dark mode and NFT viewer PR.
- [https://github.com/arkadianet/erg-vanity-gpu]: GPU-accelerated Ergo vanity address generator.
- [https://github.com/ergoplatform/sigma-rust/pull/838]: Sigma Rust PR approved for release.
- [https://github.com/ergoplatform/explorer-frontend/pull/199]: Explorer frontend PR (noted: PR #200 exists with fake URL and missing file changes).
- [https://github.com/ergoplatform/ergo/blob/weak-blocks/papers/inputblocks/main.pdf]: Input blocks whitepaper (GitHub hosted).
- [https://bafybeia4ysvodk6yiiugukoibfroqysp6z6jsn4zykbwbgotclkdp7z4dy.ipfs.dweb.link/]: SIGHT (decentralized anonymous reporting) v1.1 on IPFS.
- [https://bafybeicooo2vkq3t3x47yvhkgqzdt3ana54xhdpglattqchumkckxc7usu.ipfs.dweb.link]: SAY (P2P social platform) on IPFS.
- [https://bafkreic6o4mlp3g3lmlsqai76tfmtiyuzaripgrz422xgfm5lmcf2wlj2q.ipfs.dweb.link/]: Ephemeral Messenger v1.0 on IPFS.
- [https://bafkreibqyazalnfuw7ojlwtahsjoijgxqv2eq4dcgyfnfc4ati2k4mihbm.ipfs.dweb.link/]: Ephemeral Messenger v1.1 (with encryption passcodes) on IPFS.
- [https://ergo-wallet-statement.vercel.app/]: Ergo Wallet Statement (bank-style analytics tool).
- [https://github.com/kushti/dexy-stable/tree/25d7e8dc1a6304be5cb02a4b8e9131e9bdd1f274]: USE stablecoin contract repository.

---

## Unresolved Questions

- **Mempool visibility issue** (@HQΣr | Wont Dm 🐾 ⚡, msg#37607): Transactions bouncing/not showing despite being present. Clarification on which mempool required; no follow-up resolution.

- **Multiple wallet support timeline** (@HQΣr | Wont Dm 🐾 ⚡, msg#37596): Feature requested for node panel; ArØhβΣ to "look into it" but no commitment or timeline provided.

- **Vanity address generation performance scaling**: arkadia reporting 1.3M searches/sec but estimates 3 months to find target address; feasibility of larger search spaces unresolved.

- **Ephemeral Messenger encryption roadmap** (@qx(), msg#37670): Currently in "vanity mode" (public key encryption); serious passphrase mode added in v1.1 but full zero-knowledge encryption status TBD.