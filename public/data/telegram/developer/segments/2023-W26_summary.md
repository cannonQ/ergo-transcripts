# Ergo Developer Chat Summary — 2023-W26
**Period:** 2023-06-26 to 2023-07-09  
**Participants:** 15 | **Messages:** 175

---

## Key Topics Discussed

- **HodlERG Contract Exploit & Refund Process**: A bug in the HodlERG contract allowed an attacker to mint unlimited tokens and drain ~950 ERG from a Spectrum DEX liquidity pool. kushti initiated refunds to original holders via snapshot-based distribution, with manual compensation for LP providers. Discussion centered on preventing double-spending, handling scammer-received tokens, and ensuring fair allocation despite contract manipulation.

- **Ergo Explorer Development**: Aco Šmrkas released multiple updates including order token filtering, light CSS theme, testnet support, address book functionality, and server upgrades (to 1GB machine). Future work includes scraping, indexing, and visual refinements.

- **Fee Estimation & Mempool Management**: kushti and community discussed ERG fee estimation APIs, spam attack mitigation (minimum propagation fee rates, mempool filters), and block-picking mechanisms. Noted that current fee estimation tooling exists but is not widely used by applications.

- **Block Speed & Protocol Parameters**: Multi-part discussion on faster blocks/confirmation times. Concerns raised about impacts on block-height-dependent contracts and timestamps. kushti proposed a testnet for parameter tweaking (block time, difficulty) requiring community participation for scientific observation.

- **Oracle Pool v2 & Dexy Gold**: Dan Friedman outlined Chainlink partnership for proof-of-reserve and on-chain warehouse receipts for decentralized trade financing. Planned to build native Ergo Oracle Pools with improved security and tooling as part of Palmyra ecosystem.

- **Order Book DEX Design (Trade House & Auction House)**: qx() explained advantages of order books over AMMs: full transparency into liquidity depth, user control over slippage, partial order filling, peer-to-peer matching without impermanent loss. Noted superior UX compared to Spectrum's AMM pools for certain use cases.

---

## Important Decisions or Announcements

- [@kushti khushi, msg#14863, 2023-07-04]: "I am now covering contract with tests, can cover phoenix as well" — commitment to test coverage for HodlERG and MewFinance contracts.

- [@Pulsarz, msg#14855, 2023-07-04]: "Exactly. People should be able to decide what to do themselves." — affirming voluntary refund process rather than forced redistribution.

- [@Aco Šmrkas, msg#14505, 2023-06-28]: Ergo Explorer update released with order filtering, light theme, and testnet support; server upgraded to 1GB machine.

- [@Aco Šmrkas, msg#14986, 2023-07-05]: Second Ergo Explorer update announced with address book, filtering, sorting, and visual improvements.

- [@Dan Friedman, 2023-07-03 (implied from context)]: Palmyra ecosystem planning to invest capital from token sale into building native Ergo Oracle Pools and supporting infrastructure.

---

## Technical Q&A Worth Preserving

- **Q** (@HQΣr, msg#14546): Can we use ChatGPT plugin to create "personal explorer assistant bot" on Telegram, similar to Ergo Explorer but with AI logic in backend?  
  **A** (@HQΣr, msg#14549): Proposed using Ergo Explorer API + backend AI logic rather than reimplementing.

- **Q** (@HQΣr, msg#14592–15015): How to create vesting keys for token airdrop to prevent immediate dumping?  
  **A** (implicit, no direct answer): Thread unresolved; vesting lock mechanisms would require custom smart contracts or time-locked boxes.

- **Q** (@Flying Pig, msg#14924): Can you reverse engineer a smart contract address/ErgoTree?  
  **A** (implied negative): No direct answer given; community noted difficulty in understanding opaque contracts even when on-chain. HodlERG hacker's 75 ERG locked in unknown contract remains unanalyzed.

- **Q** (@HQΣr, msg#15069): What are minimum node requirements after NIPoPoWs? Considering token incentive for mobile users running light nodes?  
  **A** (@kushti khushi, msg#15071): No explicit answer; kushti noted Explorer aggregates mempools from three nodes.

- **Q** (@Aco Šmrkas, msg#15002): Why does `/stats` endpoint return inconsistent `totalOutput` values (60M vs 80M ERG) on refreshes?  
  **A** (unresolved): Flagged as potential API bug; no fix confirmed.

- **Q** (@HQΣr, msg#14638): Why didn't kushti take the minted HodlERG tokens in the initial drainage?  
  **A** (@Glasgow, msg#14652): "Looks like they just nabbed the amount that was minted" — attacker extracted only freshly minted tokens, not the underlying ERG.

- **Q** (@Luivatra, msg#14918): Proxy vs. main contract architecture approach?  
  **A** (@Luivatra, msg#14918): "I usually write proxy from user pov and main contract from protocol pov. Proxy protects user, main protects protocol" — separation of concerns for security.

---

## Links Shared

- [Ergo Explorer Medium Update #1](https://medium.com/@ergexplorer/erg-explorer-development-update-one-step-closer-c85b828f7228): Token ordering, light theme, testnet support, visual updates.

- [Ergo Explorer GitHub](https://github.com/AcoSmrkas/ErgExplorer): Primary repository.

- [Ergo Explorer Medium Update #2](https://medium.com/@ergexplorer/erg-explorer-development-update-whats-your-address-e88eeac3b411): Address book, filtering, sorting, server upgrade.

- [ErgCube Holder List](https://ergcube.com/index.php?newsid=718): Used for tracking HodlERG holders and allocation verification post-exploit.

- [ErgCube Allocation Snapshot](https://ergcube.com/index.php?do=static&page=main2): Real-time allocation display (verified accurate by community).

- [Ergo.Watch API for Balance History](https://api.ergo.watch/addresses/[address]/balance/history): Used by HQΣr to audit HodlERG minting patterns and exploit timeline.

- [Ergo Explorer Block Explorer](https://explorer.ergoplatform.com): Referenced for transaction and address forensics throughout exploit recovery.

---

## Unresolved Questions

- **HodlERG Precision & TVL Mismatch**: Why does HodlERG's calculated TVL differ slightly from ERG locked (18+ ERG discrepancy)? Austen Milbarge notes intentional burn/remint cycles by users to test ratio mechanics; however, exact reconciliation method TBD.

- **Refund Distribution Mechanics**: How to fairly distribute refunds when some holders minted/burned multiple times, creating ambiguity in true initial investment? qx() proposed snapshot at block height before exploit, but implementation details pending.

- **Scammer Contract Mystery**: 75 ERG from HodlERG attacker locked in unknown smart contract with single transaction history. Purpose and unlock conditions unknown; community unable to reverse-engineer ErgoTree.

- **Fee Market Dynamics Under Spam**: Will raised minimum propagation fees adequately protect against DDoS without breaking legitimate low-fee transactions? kushti noted network "not that busy" currently, making live testing difficult.

- **Block Speed Testnet Participation**: Which community members will lead testnet parameter tweaking (block time, difficulty)? kushti offered Telegram invite for interested parties but no formal workstream established.

- **API Bug in Stats Endpoint**: Is `/stats` `totalOutput` inconsistency a caching issue, aggregation problem, or legitimate data divergence?

- **Palmyra Oracle Pool Funding**: How much capital will be allocated from token sale to build native Ergo Oracle Pools? Specific budget/timeline not confirmed.

---

## Context Notes

The week was dominated by the **HodlERG contract exploit** discovered ~2023-07-03, which overshadowed other development work. The incident showcased Ergo's transparency (on-chain forensics possible) but also vulnerabilities in early-stage DeFi contracts. kushti's swift refund commitment and community-led recovery effort restored confidence, though lessons on contract auditing and user protection mechanisms remain actively discussed.