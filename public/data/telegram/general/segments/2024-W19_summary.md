# Ergo General Chat — 2024-W19 Summary

## Key Topics Discussed

- **demurrage as infinite scaling**: [@dayumbbbb, msg#491804, 2024-05-10] Demurrage enables infinite scaling by preventing both memory explosion (storage rent) and supply explosion/implosion, allowing Ergo to resist scale over time. Proposed as a unique marketing angle: "Blockchains, Infinitely Scalable."

- **Ergo 6.0 protocol update**: [@kushti, msg#491322, 2024-05-06] 6.0 provides (de)serialization support for all types (beneficial for rollups, sidechains, Lithos), nbits encoding (for trustless hashrate derivatives), and lays groundwork for post-6.0 work on compressed Sigma protocols and Bulletproofs verification.

- **Privacy vs. permissionlessness tension**: [@dayumbbbb, msg#491473, 2024-05-07] Core value proposition is freedom from permission, not privacy as end-goal; privacy is a side-effect. Discussion of how Bitcoin's shift from p2p cash to "digital gold" narrative erodes original ethos and attracts regulatory capture.

- **PoS bootstrapping without trusted token distribution**: [@kushti, msg#491234–237, 2024-05-06] Alternative to PoW/airdrop: embedded DeFi from genesis with all PoS tokens locked in LPs; new tokens obtained only by bridging from other chains. Raises chicken-egg problem of block generation.

- **Rosen Bridge security audit completion**: [@CW, msg#492014, 2024-05-12] Rosen Bridge has passed external security audit; official report pending.

- **PandaV access control project on Ergo**: [@HeroKoo, msg#492004–005, 2024-05-12] Uses Ergo NFTs as unique token IDs to generate QR access passes. Block confirmation time (2 min) only relevant during initial NFT card creation; actual access/exit stored in centralized DB.

- **Dexy LP contracts deployment**: [@kushti, msg#491323, 2024-05-06] LP contracts expected to deploy this week; update key holders needed before bank contracts can be deployed.

- **ChainCash on hold**: [@kushti, msg#491324, 2024-05-06] Sub-blocks and ChainCash persistence deferred to post-6.0; focus on finishing observable timeline deliverables first.

- **Marketing positioning**: [@kushti, msg#491474–475, 2024-05-07] Ergo community messaging focused on DeFi/NFT buzzwords rather than money/monetary innovation. Clear messaging about creating new forms of money (trustless but useful) needed to reach masses.

- **Sigmanaut mining pool adoption**: [@MavΣrickBg (bober), msg#491787, 2024-05-10] Increased ERG payouts and bonus ecosystem tokens offered vs. other pools; 0.9% fee. Migration recommended via @sig_mining channel.

- **Order book vs. AMM DEX design**: [@qx(), msg#491640+, 2024-05-09] Trade House (order book model) enables partial fills, full slippage control, and price transparency. Contrasted with AMM models; Spectrum DEX mentioned as AMM alternative.

- **Chainlink partnership for Palmyra**: [@Armeanio, msg#491456–487, 2024-05-07] Zero-sum game avoided by utilizing multiple oracle providers (Chainlink, Ergo oracles, others). Proof of reserve for on-chain warehouse receipts; IoT sensors (weight, motion, camera) verify commodity reserves for decentralized trade financing.

---

## Important Decisions or Announcements

- [@kushti, msg#491397, 2024-05-07]: Livestream at HTX exchange 2024-05-10 9am UTC on "SEC Carpet Bombing: Challenges and Implications for the Cryptocurrency Industry."

- [@kushti, msg#491322, 2024-05-06]: 6.0 development going well; ETA for detailed planning TBD pending resolution of current non-trivial issues.

- [@kushti, msg#491324, 2024-05-06]: **Roadmap clarification:**
  - **On hold**: sub-blocks (July target), p2p networking polish, ChainCash (writing/recruitment phase)
  - **Active**: 6.0 development, Dexy, 5.0.22 / 5.1.0 node releases

- [@Ergo NEWS $ERG, msg#491811, 2024-05-10]: **ErgoHack VIII announced** — "Ergo as a Smart Layer" (Bitcoin interoperability focus)
  - Prize pool: $18,000 ERG + RSN + $1,000 from secret sponsor (lending on UTXO chains)
  - Kick-off: 25 May | Submission: 2 June
  - Track ideas: Bitcoin-backed stablecoins, DeFi + Bitcoin, ZK-proofs, BTC-backed NFTs

- [@Mick (Blitz TCG), msg#491512, 2024-05-08]: Native marketplace launching on blitztcg.com; burn contract UI complete, users can soon burn cards for BLTZ tokens.

---

## Technical Q&A Worth Preserving

- **Q** (@Ich Binsnicht, msg#491263): Windows aarch64 vs x64 download choice?
  **A** (@qx(), msg#491264–267): aarch64 = ARM chip (M1/M2/M3 Mac running Windows VM); nearly impossible for native Windows ARM. Use x64 on standard Windows laptops/desktops.

- **Q** (@Rj, msg#491330): ELI5 version 6.0?
  **A** (@kushti, msg#491322): (de)serialization of all types, nbits encoding, support for trustless ZK verification (Bulletproofs, compressed Sigma protocols). See EIP-100 PR for details.

- **Q** (@Pulsarz, msg#491318): Is Dexy on hold pending 6.0?
  **A** (@kushti, msg#491323): No. LP contracts deploy this week; bank contracts follow once update key holders available.

- **Q** (@Şerafettin Bayrakdar, msg#491835–839): Can a single rig achieve 17 GH/s for Ergo mining? Are there ASICs?
  **A** (@Koutelier, msg#491841–842): No specific answer on ASIC availability given. Recommended: join Sigmanauts pool (0.9% fee, daily random bonus rewards).

- **Q** (@Unknown, msg#491992): Why use Ergo (2-min block time) for real-time access control (PandaV)?
  **A** (@HeroKoo, msg#492005): Block confirmation only matters for initial NFT card creation. Access/exit logging uses centralized DB, decoupling from Ergo's block cadence.

- **Q** (@qx(), msg#491862): Token holder list scripts available?
  **A** (@qx(), msg#491863–869): Built Perl script showing top 10,000 address holders. Test at https://my.ergoport.dev/cgi-bin/utilities/clean_holders.pl with token ID (e.g., CYPX: `01dce8a5632d19799950ff90bca3b5d0ca3ebfa8aaafd06f0cc6dd1e97150e7f`).

- **Q** (@Ian Lee, msg#491604–612): Lowest-slippage way to obtain $14k SigmaUSD?
  **A** (@Unknown/@R, msg#491607–615): Mint from treasury (2.6% fee) vs. CEX conversion (6–7% slippage). Proposed: wait for RSV/USDT pool or set order 1–2% above market and wait for fill.

---

## Links Shared

- [https://eprint.iacr.org/2018/078.pdf]: kushti's 2018 demurrage-related paper (msg#491208).
- [https://github.com/ergoplatform/eips/pull/100/files]: EIP-100 (6.0 protocol spec) PR (msg#491337).
- [https://satergo.com/]: Satergo light wallet + node setup (msg#491275–276).
- [https://www.htx.com/stream/38099/]: HTX livestream on SEC regulation (msg#491712).
- [https://tari.substack.com/p/tari-tokenomics] & [https://rfc.tari.com/RFC-0320_TurbineModel]: Tari "Turbine Model" (PoS blocks from buys, staking for txs) (msg#491240–241).
- [https://twitter.com/BoberErgo/status/1788163633257550234]: Weekly Bober Puzzle schedule (msg#491505).
- [https://blitztcg.com/]: Blitz TCG native marketplace launch (msg#491512).
- [https://rosen.tech]: Rosen Watcher info (msg#491580).
- [https://t.me/sig_mining]: Sigmanauts mining pool recruitment (msg#491789).
- [https://sigmaspace.io/en/token/[tokenID]]: Token holder explorer example (msg#491853).
- [https://my.ergoport.dev/cgi-bin/utilities/clean_holders.pl]: Perl script for top token holders (msg#491867).
- [https://dex.crooks-fi.com]: CruxFinance DEX (msg#492032).
- [https://t.me/ergoplatform_ES]: Official Spanish Ergo community (msg#491829).
- [https://t.me/ergoplatform_ptbr]: Official Portuguese-Brazilian Ergo community (msg#491186).

---

## Unresolved Questions

- **Sub-blocks / chain speed**: Multiple discussions ([@qx(), @kushti, msg#491324+]) about faster blocks, microblocks, sidechains, or layer 2 solutions to increase throughput. Prototyping deferred post-6.0; community interest flagged but no committed timeline.

- **Ergo oracle ecosystem maturity**: [@Armeanio, msg#491456+] planning to build native Ergo oracles but funding/timeline TBD. Two existing Oracle Pools (v1, v2 for Dexy Gold) insufficient for Palmyra's commodity-backed use case.

- **Marketing messaging alignment**: [@kushti, msg#491474–475] acknowledged gap between Ergo's monetary innovation narrative and community's typical DeFi/NFT messaging. No decision made on repositioning campaign.

- **ChainCash persistence implementation**: [@kushti, msg#491324] actively seeking Rust developers to finish persistence layer and first real tests; LETS implementation timeline unclear.

- **Faster block time / timestamp handling**: [@kushti, msg#491324+] technical debt around block height vs. timestamp-based contract logic if block speed increases. No decision on whether to increase speed or accept current 2-min cadence.

- **Blitz TCG marketplace fully on-chain?**: [@Mick, msg#491512] UI for burn contract shown; no detail on whether full marketplace order matching is on-chain or hybrid.

---

**Summary**: Week 2024-W19 focused on Ergo 6.0 finalizing, Dexy LP deployment, Palmyra/Rosen ecosystem progress, and community marketing gaps. Price volatility drew new/anxious users; mining pools gained focus. ErgoHack VIII announced. Few breaking technical issues; roadmap delays (ChainCash, sub-blocks) confirmed as post-6.0 work.