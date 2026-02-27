# Ergo General Chat Summary — 2024-W27

## Key Topics Discussed

- **Ergoversary Celebration & Core Protocol Research**: kushti outlined research into faster confirmations including Parallel PoW, Prism, and sub-block specifications. Also discussed better fork choice rules adaptable to variable difficulty and non-breaking changes for sidechain/Bitcoin-NG constructions. Better-Than-Money (Chaum) and ChainCash were compared as privacy-focused monetary experiments.

- **Oracle Pool Economics & Development**: CW flagged Oracle Pools v2 as under-resourced, citing chicken-egg problem where dApps need oracles and oracles need dApp demand. Discussion on GORT reward economics to incentivize oracle cooperatives. Pulsarz noted fixed interval constraints in current oracle feeds and complexity of multi-asset pooling.

- **Sidechain & Cross-Chain Interoperability**: kushti discussed trustless relay techniques, Bitcoin UTXO mapping to Ergo UTXOs via Blink light clients, and merge-mined sidechain constructions (BIP 301-style). Noted isomorphic binding with Bitcoin using trustless relays and tx parsing as building blocks.

- **Faster Confirmations & Block Time Trade-offs**: kushti identified timestamp/block-height dependencies as architectural constraints for faster blocks. Discussed RBF (replace-by-fee) guarantees in sub-blocks, mempool security risks, and that concrete dApp design patterns must guide optimization rather than theoretical throughput.

- **Preconfirmations & Intent Architectures**: kushti raised questions about Ethereal-style preconfirmations (Ethalik/intents) and whether validators can guarantee inclusion within predefined time ranges, and conflict scenarios if two validators receive payment for conflicting tx preconfs.

- **DeFi Tooling & Library Gaps**: Discussion on ergpy mempool awareness, unconfirmed asset filtering, and daisy-chaining transactions. Fleet SDK documentation gaps noted; Pulsarz flagged open GitHub issue #2093 (node API mempool awareness) and PR #2131 as solutions.

- **Spectrum DEX vs Crooks**: HQ3rr clarified Crooks Finance is a lighter variant of Spectrum with same off-chain bot instances but fine-tuning, blacklisted assets, and UI optimizations for speed. Both run same bot infrastructure with different UX/asset lists.

- **Wallet Design & Mobile Ecosystem**: Discussion on Flutter (Cake Wallet, Vespr) for cross-platform support with proper FFI for sigma-rust. Mobile wallet reamp requests focus on unconfirmed spending fixes and matching industry standards rather than new features. HQ3rr noted ~80% desktop/Android vs 18-20% iOS usage in Ergo ecosystem.

- **Stablecoin & RWA Integration**: Dan Friedman detailed Palmyra/Winter Protocol use of Chainlink oracles for proof of reserve on-chain warehouse receipts, bonded warehouse collateralization for decentralized trade financing, and multi-asset hedging for FX risk (e.g., AUD/USD). Gluon Gold mainnet expected "in weeks" per Bruno Woltzenlogel Paleo.

- **ErgoHack VIII Winners & Ecosystem Projects**: Crystal Pool (self-custodial orderbook), DuckPools (options trading), and Analog Ergo (Lightning ↔ Ergo atomic swaps) highlighted. Trade House (partial-fill DEX) unveiled. Bober token LP unlock snapshots and airdrops ongoing.

- **Mining & ASIC Resistance**: Armeanio discussed hardware manufacturer centralization risks (50%+ hashpower pre-release testing) on other chains, noting Autolykos v3 as defense if ASICs appear. qx() flagged corporate hash consolidation as community killer.

- **Sigma Protocols & Zero-Knowledge Proofs**: kushti explained bulletproofs for zero-knowledge range proofs and generic statements without trusted setup. Groth one-out-of-many and compact Sigma protocols enable hybrid contracts (on-chain verification with off-chain proof data, avoiding disclosure of sensitive data).

- **Consensus & PoW Fork Choice**: Dionysis Zindros presented PoEM ('Better Proof of Work Fork Choice Rule'). kushti noted it's implementable in new client versions without breaking old clients if non-block-structure-changing.

- **UTXO Summit & DeFi Design**: kushti proposed UTXO Summit next (vs degen summit) to address "unbubbling" and showcase concrete UTXO dApp design patterns, emphasizing real applications over theoretical throughput.

- **CrooksFinance & Real-World Use Cases**: HQ3rr building custom UI for asset trading (rsADA, rsBTC) with cross-chain bridges. Concept: loan rsADA on Ergo, bridge to Cardano, buy native assets, profit, repay. Bitcoin too volatile for lock games due to volatility.

---

## Important Decisions or Announcements

- [@kushti, msg#500971, 2024-07-01]: "Happy Ergversary dear Ergonauts!" — 5-year anniversary celebration kickoff with dev updates, Twitter Spaces on future of PoW, and video series throughout week.

- [@Ergo NEWS $ERG, msg#500011, 2024-07-01]: ErgoHack VIII winners announced: Crystal Pool (orderbook DEX), DuckPools (options), Analog Ergo (Lightning atomic swaps).

- [@Bruno Woltzenlogel Paleo, msg#500521, 2024-07-03]: Gluon Gold stablecoin mainnet launch expected "in just weeks"; calls for Catalyst votes on related proposals.

- [@MavΣrickBg (bober), msg#500388, 2024-07-02]: ERG and Bober airdrops for 1st LP unlock snapshot completed; 40% ERG to dev wallet, 30% to personal wallet. Transparent Google Sheets published.

- [@kushti, msg#501174, 2024-07-06]: ErgoDevs DAO donations multisig address published: `2BggBDgr9nBXyMpT5NbZf1QRN2pfHmzJxWwcfGEsgqzs94TEJv5GmtKTjmew74DjoTjTULa2A4RjJW6qGvniFm29KZKZ4attHxSZxuq1hQnXbURvoYm7jkHHzrd4ZF9u29cgHZczv2LWNiHoU6seFkC73JvGkT1khxkzRatPwDZ6aP87VPV6F4b1XmsitCB2DoKCYEtgtP1yCXmDhfSgdzDatn4SjSfZkxysggBH3TzJqTzZkqn8pp1DeAdiPJ1JZr8KeUGpnjkpjddoc`

- [@kushti, msg#501158, 2024-07-06]: Chat requests consolidated: (1) multisig support in sigma-js, (2) multisig documentation for sigma-rust, (3) mainnet flag by default for ergo.jar.

- [@kushti, msg#501407-501408, 2024-07-07]: Decided to plan UTXO Summit (vs degen summit) to address ecosystem "unbubbling" and design patterns.

- [@Luivatra, msg#501186, 2024-07-06]: Paideia beta finishing; going live "soon" (exact date unspecified).

---

## Technical Q&A Worth Preserving

- **Q** (@Jack Σ, msg#500695, 2024-07-04): "Lithos is dependent on Ergo sidechain implementation? I mean Lithos cannot finish before sidechains are done right?"  
  **A** (implied no direct answer; context: Lithos Protocol development ongoing in parallel).

- **Q** (@Pulsarz, msg#500364-365, 2024-07-02): Does the node API account for boxes being spent in mempool?  
  **A** (@Pulsarz, msg#500365-366): "It doesn't account for boxes being spent in mempool. So can't daisy chain by default atm." References GitHub issue #2093 and PR #2131 as pending solutions.

- **Q** (@Unknown, msg#500259-260, 2024-07-02): How do you keep on top of new PoW research?  
  **A** (@kushti, msg#500274): Found papers while researching PoW generally.

- **Q** (@kushti, msg#500550-551, 2024-07-03): Regarding demurrage — "Means bitcoins in old UTXOs are more expensive than in fresh ones?"  
  **A** (@kushti, msg#500552): "As they have privilege of no demurrage."

- **Q** (@cannon_q, msg#500943, 2024-07-06): "So oracles should be punished for providing incorrect data?"  
  **A** (kushti raises design question; no final answer given — flagged as unresolved).

- **Q** (@Unknown, msg#500970, 2024-07-06): How is sigma-Rust for [bulletproof verification support]?  
  **A** (kushti inquires but no direct answer provided in transcript).

- **Q** (@kushti, msg#501025, 2024-07-06): Should mainnet flag always override config for NIPoPoWs?  
  **A** (implied: mainnet can be made default, NIPoPoWs behavior unclear).

- **Q** (@Ilya Oskin, msg#501346-351, 2024-07-07): "Not clear to me yet how preconfirmations can guarantee inclusion of a TX within predefined time range. How can validator know he will be able to produce a block any time soon?"  
  **A** (kushti, msg#501353): Raises conflict scenario: "Yes, what if I pay two validators for preconf of conflicting transactions?" — unresolved design problem.

- **Q** (@Pgr456, msg#501002, 2024-07-06): If Marshall Islands DAO LLC KYCs one member and governance votes to publish sensitive dApp (e.g., mixer), can that member be held liable if sued?  
  **A** (cannon_q, msg#501003): "Those are questions to be sorted out, right? But they need to be brought up and addressed."

- **Q** (@Luivatra, msg#501193, 2024-07-06): How are substConstants used in practice? Any design patterns for forum documentation?  
  **A** (@Luivatra, msg#501197): "I store default templates for treasury contract in Paideia DAO config, so default template can be updated through proposal. When new DAO created it uses substConst on template to verify treasury contract in new DAO config."

- **Q** (@HQΣr, msg#500489-490, 2024-07-03): Can you use ChatGPT/Claude for smart contract development?  
  **A** (@HQΣr, msg#500489): "I used @ldgaetano for SC. We don't need AI." (msg#500490): "Claude is good for frontend though."

---

## Links Shared

- [https://youtu.be/deXi73K4Z0k](https://youtu.be/deXi73K4Z0k): kushti — Sigma Trees foundation for smart money (Ergoversary Day 1)
- [https://youtu.be/riUXWElYV5I](https://youtu.be/riUXWElYV5I): anon_real & Auction House team — Trade House decentralized orderbook exchange with partial filling
- [https://youtu.be/G7ApGjum5CQ](https://youtu.be/G7ApGjum5CQ): Hash It Out podcast (Ergoversary Day 4)
- [https://youtu.be/lkyQMO5DZAQ](https://youtu.be/lkyQMO5DZAQ): Bruno Woltzenlogel Paleo — Gluon Gold stablecoin update (Ergoversary Day 3)
- [https://youtu.be/8aCsjk6ziAU](https://youtu.be/8aCsjk6ziAU): kushti — Ergo's journey & optimistic 5-year vision (Ergoversary Day 4)
- [https://youtu.be/xg-T2v-3UPI](https://youtu.be/xg-T2v-3UPI): Lukas Aumayr — Blink: Optimal Proof of Proof-of-Work O(1) light client
- [https://youtu.be/r16nibO68E4](https://youtu.be/r16nibO68E4): Dionysis Zindros — PoEM: Better Proof of Work Fork Choice Rule
- [https://youtu.be/9zLUyX8oZIM](https://youtu.be/9zLUyX8oZIM): UTXO Stack & Nervos RGB++ protocol — Bitcoin L2 with native Turing-complete capabilities
- [https://deco-education.github.io/deco-docs/docs/intro](https://deco-education.github.io/deco-docs/docs/intro): DECO education documentation
- [https://www.youtube.com/@decoeducation9394](https://www.youtube.com/@decoeducation9394): DECO YouTube education channel
- [https://eprint.iacr.org/2023/1663.pdf](https://eprint.iacr.org/2023/1663.pdf): "Proof-of-Work-Based Consensus in Expected-Constant Time" — m-for-1 PoWs & Chain-King Consensus
- [https://arxiv.org/pdf/2406.05568](https://arxiv.org/pdf/2406.05568): SAMM: Sharded Automated Market Makers (UTXO-relevant)
- [https://chaum.com/wp-content/uploads/2023/11/Better-than-money.pdf](https://chaum.com/wp-content/uploads/2023/11/Better-than-money.pdf): Chaum — Better-Than-Money (privacy-focused monetary design)
- [https://github.com/ergoplatform/ergo/issues/2093](https://github.com/ergoplatform/ergo/issues/2093): GitHub issue — Node API mempool awareness for address boxes
- [https://github.com/ergoplatform/ergo/issues/2144](https://github.com/ergoplatform/ergo/issues/2144): Pulsarz — Related mempool filtering request
- [https://github.com/ergoplatform/ergo/pull/2131](https://github.com/ergoplatform/ergo/pull/2131): Open PR — mempool support in node API
- [https://github.com/nautls/nautilus-wallet/blob/master/public/icons/assets/hodlerg3.svg](https://github.com/nautls/nautilus-wallet/blob/master/public/icons/assets/hodlerg3.svg): qx() — HodlERG3 token icon submission (Nautilus)
- [https://github.com/spectrum-finance/token-logos/pull/63/commits/ccc8b98e3c255cb43d78e222d4ead047db6baa55](https://github.com/spectrum-finance/token-logos/pull/63/commits/ccc8b98e3c255cb43d78e222d4ead047db6baa55): qx() — HodlERG3 token logo PR (Spectrum)
- [https://github.com/spectrum-finance/token-logos/pull/69](https://github.com/spectrum-finance/token-logos/pull/69): Spectrum logo PR — Walrus & other assets nuked in merge
- [https://dex.crooks-fi.com/](https://dex.crooks-fi.com/): CrooksFinance DEX frontend
- [https://www.pokernow.club/games/pglQzJ469XmeGupaZJBYtztlF](https://www.pokernow.club/games/pglQzJ469XmeGupaZJBYtztl