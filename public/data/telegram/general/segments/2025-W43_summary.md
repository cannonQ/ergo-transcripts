# Ergo General Chat — 2025-W43 Summary

## Key Topics Discussed

- **Kadena Bankruptcy & PoW Economics**: Extended discussion on Kadena's failure to reach mining parity with premine allocation (not until 2033), framed as a critical failure of PoW economic distribution. Contrast drawn between public money creation (PoW emission) vs. private money (large premines/presales). [@kushti, msg#578972-579114; @Armeanio, msg#579027-579102]

- **Parity Metric for PoW Networks**: The concept of "parity" — when block rewards to miners equal the value distributed to presale/premine holders — discussed as the most important metric for open money. Ergo's rapid parity vs. Kadena's 14-year target highlighted. [@Armeanio, msg#579101-579102; @kushti, msg#579099-579111]

- **Contract Library & SDK Development**: kushti undertaking systematic review and vibe-coding of design patterns from ErgoForum (since 2019) and ErgoHack, with PRs submitted to sigmastate-interpreter for: Perpetual tokens, daily withdrawal limits, stealth addresses, whitelisted transfers, trustless hashrate oracle, bulletproof range proofs, Schnorr signature verification, and insurance contracts. [@kushti, msg#578601]

- **NIPoPoW Node Syncing**: Full node sync from scratch achievable in ~2 hours on Android (Google Pixel 8) using NIPoPoW bootstrap configuration + RocksDB, vs. 5 days full sync. Enables running personal nodes with Ergo Wallet using 127.0.0.1:9053. [@Unknown, msg#578653, 578717, 578722]

- **Rosen Bridge UX & Kadena Response**: Discussion of streamlined proof URI scheme to reduce copy-paste errors in bridge workflows. [@cannon_q, msg#578802; @Armeanio, msg#578798]

- **Mew Lending Protocol**: Peer-to-peer risk-based lending with collateral locking passed smart contract audit with no vulnerabilities. Mechanism: lender specifies asset, amount, block height, collateral requirement; borrower pays fee + locks collateral; lender can claim collateral if repayment fails. Frontend refinement underway. [@HQΣr, msg#579239]

- **Alephium Drama & Community Takedown Discussion**: Alephium team refusing to join Twitter Spaces for civil discourse on their governance transition. kushti proposed hosting roundtable with community-driven blockchains (Ergo, Nervos, Kaspa, Bitcoin Cash) vs. company-owned chains to discuss Kadena case. [@kushti, msg#578996-579020]

- **Banxa Fiat Ramp Integration**: US users can now buy/sell ERG through Banxa (except Hawaii, Louisiana, New York). Completes earlier community-funded Onramper integration. Brazil users require wallet integration for access. [@Ergo NEWS, msg#578872; @Glasgow, msg#578875, 578879]

- **Oracle Pool Moving Average Proposal**: Grayman proposed adding 50 & 200-day moving averages to gold oracle pool to improve stability and resilience against rogue data sources. Uses historical onchain data to attenuate damage from offline/compromised sources. [@Grayman, msg#579066-579080; Discord response msg#579182-579184]

- **Kadena Community Takeover Timeline**: ~25 people joined Kadena Twitter Spaces. Team funding pulled mid-vesting (premine coins locked 5 more years). Multiple entities (centralized & community-driven) interested in takeover; decision expected Monday. Team was not profitable, used monthly premine liquidation (~$2M/month) as cashflow. [@Phillip Scheindlinger, msg#579163-579174]

- **BIP39 Passphrase Support in Wallets**: Current support: Minotaur, Satergo (offline vault broken on Debian). Nautilus & Ergo Wallet node support but passphrase field hidden by default (design discussion ongoing). Community consensus treating it as anti-pattern; modularity in address generation needed across chains. [@Patato, msg#579214-579252; @Matt, msg#579230-579233; @kushti, msg#579237-579238]

- **Merchant BRICK Payments**: qx() deployed custom PoS software integrating BRICK payments at local store; checkout finalized in seconds reading from mempool. [@qx(), msg#579203, 579205]

---

## Important Decisions or Announcements

- **Mew Lending Audit Passed**: [@HQΣr, msg#579239, 2025-10-26] Peer-to-peer lending smart contract passed full audit with zero vulnerabilities; frontend refinement underway before release.

- **Banxa US Fiat Ramp Live**: [@Ergo NEWS $ERG, msg#578872, 2025-10-23] US users can purchase ERG directly through Banxa (excluding HI, LA, NY). Completes Onramper integration funded by community raffle.

- **kushti Vibe-Coding Contract Library**: [@kushti, msg#578601, 2025-10-20] Four PRs merged (Perpetual Token, Daily Withdrawal Limit, Stealth Address, Whitelisted Transfers); work-in-progress on Trustless Hashrate Oracle, Bulletproof Range Proofs, Schnorr Signature Verification. Goal: library of open-source contracts + tests for ErgoScript MCP and developer accessibility.

- **First Basis Reserve Deployed**: [@kushti, msg#578813, 2025-10-22] Basis reserve contract deployed on mainnet.

- **Watcher Monitor on Cloudflare**: [@kushti, msg#578620, 2025-10-21] Deployed on Cloudflare Workers; demo available at https://mute-mouse-2cd2.rbmonitor.workers.dev/ (password: TestPass123Demo). Local monitor taken down to avoid exceeding free tier limits.

- **Kadena Bankruptcy Confirmed**: [@Armeanio, msg#578586, 2025-10-20] AWS outage exposed Kadena infrastructure dependency; subsequent reports confirm funding pulled and team restructuring.

---

## Technical Q&A Worth Preserving

- **Q** (@kushti): "Why new address for LP creation?" / "why is the latter [box consolidation] needed to create the pool as well?"  
  **A** (@Aco Šmrkas, msg#578640-578641): Jank LP transaction creation code in DEX makes 2 chained txs that often fail if multiple boxes exist. Never investigated properly; consolidating to single address works around the issue.

- **Q** (@kushti): Regarding NIPoPoW node + UTXO set snapshot — "2 hrs for nipopow plus utxo set snapshot?"  
  **A** (@Unknown, msg#578717): Yes, 2 hours from start to finish including bootstrap + UTXO set, ready to use in Ergo Wallet immediately.

- **Q** (@HQΣr): Why user can't create LP pair in Nautilus?  
  **A** (@HQΣr, msg#578628, 578634): Requires signing 2 transactions to create new LP. Suggested consolidating wallet to single address; if error persists, check console logs.

- **Q** (@Grayman): "Why not increase security by having gold oracle pool also report 50 and 200 day moving averages?"  
  **A** (Discussion, msg#579066-579080, 579182-579184): Proposed storing historical onchain data to construct moving average; attenuates damage from rogue data sources. Discord response notes 200d data retention manageable; weighted averages across LBMA/Comex/Shanghai could improve resilience. Gold oracle currently depends on USD oracle (priced in dollars).

- **Q** (@Patato): "Is BIP39 passphrase support planned for Ergo Android and iOS wallets?"  
  **A** (@kushti, msg#579237-579238): Feature exists in Ergo Wallet node but discussed hiding passphrase field behind checkbox to align with industry trend rejecting BIP39 passphrases. Satergo supports it; Minotaur & Satergo offline vault limited. Modularity in address generation needed across chains (@Matt, msg#579231-579233).

- **Q** (@Dũng Nguyễn): Feedback request on HeadsOrTails contract (learning ErgoScript)  
  **A** (@kushti, msg#579004): Directed to ErgoDevelopers Telegram group for code review.

- **Q** (@K Chan): "How is progress on subblocks? Has user experience improved?"  
  **A** (@kushti, msg#579157-579158, 2025-10-25): Will provide update and roadmap thoughts later; expects lengthier, chaotic response at this point.

---

## Links Shared

- [GitHub PR #1082 — Perpetual Token](https://github.com/ergoplatform/sigmastate-interpreter/pull/1082): Contract implementation
- [GitHub PR #1083 — Daily Withdrawal Limit](https://github.com/ergoplatform/sigmastate-interpreter/pull/1083): Contract implementation
- [GitHub PR #1084 — Stealth Address](https://github.com/ergoplatform/sigmastate-interpreter/pull/1084): Contract implementation
- [GitHub PR #1080 — Whitelisted Transfers](https://github.com/ergoplatform/sigmastate-interpreter/pull/1080): Contract implementation
- [GitHub PR #1085 — Trustless Hashrate Oracle (WIP)](https://github.com/ergoplatform/sigmastate-interpreter/pull/1085): Work-in-progress
- [GitHub PR #1079 — Bulletproof Range Proof Verification (WIP)](https://github.com/ergoplatform/sigmastate-interpreter/pull/1079): Work-in-progress
- [Watcher Monitor Demo](https://mute-mouse-2cd2.rbmonitor.workers.dev/d/29S1sC6dImtgbSMmy0GOieUag3pkhUu1): Cloudflare deployment (password: TestPass123Demo)
- [ErgoNodeAndroid GitHub](https://github.com/rustinmyeye/ErgoNodeAndroid): Android NIPoPoW node with RocksDB support
- [Ergo Android NIPoPoW Install Guide](https://docs.ergoplatform.com/node/install/node-android/proot-rocksdb/?h=android): Manual setup instructions
- [Decode Crypto Distribution (Medium)](https://curiaregiscrypto.medium.com/decode-crypto-distribution-without-pie-charts-pie-charts-are-for-idiots-c4c9d61b93a1): Guide to analyzing tokenomics without pie charts
- [Understanding Parity Metric (Medium)](https://curiaregiscrypto.medium.com/understanding-the-impact-of-premines-and-presales-in-pow-cryptocurrencies-understanding-parity-a-6996518159ba): Analysis of premine/presale impact
- [Building Cathedrals Not Software (Medium)](https://medium.com/@frederik_62300/stop-building-software-start-making-cathedrals-db97f8a379b2): Foundational principle cited by kushti
- [YouTube Community Chat Recording](https://youtube.com/live/V1-Dcx9e56g): 2025-10-23 Ergo General Community Chat
- [ClaimRSN.tech](https://ift.tt/onK8vDz): Rosen Bridge RSN claim portal

---

## Unresolved Questions

- **Subblocks Roadmap Status**: kushti deferred detailed update on sub-blocks progress and user experience improvements (msg#579157-579158). Noted internal discussions ongoing but timing unclear.

- **Alephium Twitter Spaces Response**: Alephium team has not committed to joining proposed roundtable with community-driven chains; instead posted written responses. kushti indicated intent to proceed regardless (msg#579160-579161).

- **Kadena Community Takeover Entity**: Multiple interested parties (centralized and community-driven) competing to take over protocol. Decision expected Monday 2025-10-27 but unclear which model will prevail (msg#579167).

- **BIP39 Passphrase UX Decision**: Debate ongoing whether to surface passphrase field in Ergo Wallet or keep hidden by default. Industry trend rejecting feature; modularity discussion unresolved (msg#579237-579238).

- **Oracle Moving Average Implementation**: Grayman's 50/200-day moving average proposal for gold oracle pool remains theoretical discussion; no commitment or timeline for implementation.

- **Banxa Brazil Integration**: Glasgow noted Brazil users need wallet integration to access Banxa but no timeline given for that work (msg#578875, 578879).