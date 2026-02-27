# Ergo General Chat — Week 2025-W31 Summary

## Key Topics Discussed

- **Banxa Fiat Onramp Launch**: ERG became available for purchase on Banxa checkout (checkout.banxa.com), providing KYC-based fiat-to-ERG conversion. Integration with Nautilus wallet added this week.

- **VoltPay Multi-Chain Swaps**: HQΣr (@HQ3rr) promoted VoltPay (voltpay.store) as a non-custodial tool enabling swaps between major chains (BTC, ADA, CKB, etc.) for ERG without CEX intermediaries. Tested positively with sub-2% total fees including network costs.

- **Lithos Protocol Fraud Proofs**: Completed testing for all fraud proof contracts; difficulty contract remains in final development. Stratum changes underway to support certain mining software. Testnet launch targeted after off-chain code completion.

- **Sub-Blocks & Merge-Mining Sidechains**: kushti clarified that sub-blocks (input blocks) provide transaction fee income plus merge-mining rewards from sidechains, with no separate coin reward. Whitepaper draft circulated for feedback; airdrop to ERG holders proposed.

- **Global Transfer Policies (GTPs)**: kushti announced feasibility of introducing GTPs to Ergo via soft-fork—enabling programmable blacklists/whitelists, tax enforcement, and reserve thresholds at the application level without first-class protocol changes.

- **Proof of Merch**: @ProofOfMerch.store launched, enabling SigmaUSD-denominated purchases (shirts, mugs, socks) at stable prices via Mew Bank integration. Marketed as a CEX-free shopping alternative.

- **Mew Finance Ecosystem Expansion**: Audio player for Cyberverse soundtracks in development; widget embedding system shipped with iframe-based integration, custom color schemes, and 300+ coin support.

- **Handshake Domain & Namebase Transition**: HQΣr confirmed possession of .erg top-level domain anchored in Handshake root zone. Discussion of Handshake ecosystem post-Namecheap acquisition; ShakeStation.io positioned as competing nameserver.

- **GitCircles Roadmap**: kusht shared roadmap for decentralized community currency platform; referred to as "Currencies for digital communities to the rescue."

- **Minotaur Wallet Updates**: v3.0.1 released; ErgoPay support issue flagged in GitHub (#28); Keystone hardware wallet integration in progress (JSON serialization/deserialization for custom transaction format).

- **Fleet SDK & ergoc**: Fleet SDK v0.12.0 released with ErgoTree construction from ergoc JSON output and named constant replacement. ergoc v0.5.0 added JSON output support.

## Important Decisions or Announcements

- [@kushti, msg#569490, 2025-07-29]: **Proof of Merch live** — Merchandise store accepting SigmaUSD, 20% off launch promotion; positioned as stable-coin shopping without CEX conversion.

- [@kushti, msg#569477, 2025-07-29]: **Lithos Protocol progress** — All fraud proof contract testing complete; difficulty contract in final stages; testnet launch conditional on off-chain code completion.

- [@kushti, msg#569431-432, 2025-07-29]: **GitCircles roadmap published** — Repository updated with full roadmap; kushti spread via peer-to-peer groups.

- [@Glasgow, msg#569381, 2025-07-28]: **Banxa checkout live** — http://checkout.banxa.com accessible for ERG purchases.

- [@kushti, msg#569556-557, 2025-07-30]: **Nautilus Wallet & ergoc updates** — Banxa "Buy ERG" button added to Nautilus; Fleet SDK v0.12.0 released with ErgoTree JSON construction; ergoc v0.5.0 shipped.

- [@kushti, msg#569578, 2025-07-30]: **ergonodes.net domain/VPS expiration alert** — Required $185 USD (1 year); kushti announced donation received and restoration.

- [@kushti, msg#569869, 2025-08-01]: **ergonodes.net restored** — Domain and hosting back online after community funding.

- [@kushti, msg#569868, 2025-08-01]: **Global Transfer Policies feasibility confirmed** — Soft-fork mechanism identified for implementing programmable transfer controls on Ergo.

- [@HQΣr, msg#569971, 2025-08-03]: **VoltPay widget embedding system shipped** — Iframe-based swap integration with live preview generator, 300+ coin support, mobile-optimized.

## Technical Q&A Worth Preserving

- **Q** (@Krim, msg#569482): How will sub-blocks reward miners? Will there be a new token for sub-block mining?
  **A** (@cannon_q, msg#569483): No additional rewards for sub-blocks (input blocks). Miners earn transaction fees from input blocks; block reward (coin emission) only on standard ordering blocks. Merge-mining sidechains provide additional income.

- **Q** (@Man ish, msg#569528): Can a sidechain miner mine both BTC, Ergo, and sidechain coin simultaneously?
  **A** (@kushti, msg#569538): Yes—different options exist, including direct stablecoin mining without Babel fees. After Braid, Monero+Ergo merge-mining sidechain is feasible.

- **Q** (@Richi, msg#569870): Can Global Transfer Policies enforce address blacklists/whitelists and auto-burn unwanted tokens?
  **A** (@kushti, msg#569920): GTPs are generic—programmable logic for blacklists, whitelists, tax enforcement, reserve thresholds on tokens or UTXOs rooted in your UTXO. Operate at application level, not contract level; no first-class protocol citizens introduced.

- **Q** (@DiscordBridge/Kahnloc, msg#569507): Is GUAC just like SigmaRSV?
  **A** (@Luca D'Angelo, msg#569509, 569513): Basically yes—both tokenize bank equity. GUAC can be minted freely (no restrictions on GUAC levels); users receive both GAU and GAUC on deposit, can transmute GAU to GAUC via "Transmute from Gold" option.

- **Q** (@Man ish, msg#569531): Will sidechain transaction fees be paid in both ERG and sidechain coin?
  **A** (@kushti, msg#569529): Mining reward stability uncertain—fees may be ERG-only; sidechain-specific details TBD.

- **Q** (@D7🐳, msg#569789, 2025-08-02): Why does Minotaur wallet show "not connected" after connecting?
  **A** (@E M, msg#569923): Issue identified and reported in GitHub (#28); team working on fix. ErgoPay support flagged as problematic.

## Links Shared

- [http://checkout.banxa.com]: Banxa fiat onramp for ERG purchases (KYC required).
- [https://proofofmerch.store]: Proof of Merch merchandise store (SigmaUSD-denominated, 20% launch discount).
- [https://voltpay.store]: VoltPay non-custodial multi-chain swap tool (300+ coins, <2% fees tested).
- [https://flowpay-rho.vercel.app/embed]: VoltPay widget embedding system generator (live preview, copy-paste codes).
- [https://github.com/GitCircles/GitCircles-Roadmap/]: GitCircles community currency roadmap repository.
- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1070]: Scala sigma-rust refactoring PR (ccellado) targeting 6.0 release.
- [https://github.com/minotaur-ergo/minotaur-wallet/issues/28]: Minotaur ErgoPay support issue tracker.
- [https://open.substack.com/pub/fitzdoud/p/slipkit-20-building-a-cross-asset]: Fitz Doud Substack on Slipkit 2.0 cross-asset voucher platform via ChainCash.
- [https://www.ergoforum.org/t/sidechain-ideas-global-transfer-policies/5199/4]: Ergo Forum discussion on Global Transfer Policies soft-fork feasibility.
- [https://t.me/rosenbridge_erg]: Rosen Bridge Telegram group for integration bounty coordination.
- [https://discord.gg/GAZAx8qksw]: Discord for undisclosed project mentioned by cannon_q.

## Unresolved Questions

- **Sidechain fee structure**: Whether sidechain transaction fees will be denominated in ERG, sidechain coin, or both remains unconfirmed (@Man ish, msg#569531).

- **Sub-blocks reward mechanism details**: Precise incentive structure for miners on input blocks vs. ordering blocks not fully detailed in public discussion.

- **Lithos testnet launch timeline**: Conditional on off-chain code completion; no specific date provided (@kushti, msg#569477).

- **Global Transfer Policies implementation scope**: Whether GTPs will support cross-address rejection of blacklisted tokens (contingent settlement) remains exploratory (@Richi, msg#569870-871).

- **Minotaur ErgoPay compatibility**: Root cause of "not connected" state and ErgoPay support status unclear; fix in progress (@E M, msg#569923).

- **Merge-mining sidechain whitepaper feedback timeline**: Circulated for community review; status of consolidated feedback not reported.

---

**Activity Level**: Moderate to high. Week featured significant product launches (Banxa, Proof of Merch, VoltPay widget), protocol design updates (GTPs, sub-blocks clarifications), and infrastructure milestones (ergonodes restoration, Nautilus/Fleet updates). Scam warnings and user security discussions prominent.