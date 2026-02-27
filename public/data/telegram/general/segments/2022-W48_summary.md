# Ergo General Chat — 2022-W48 Summary
**Period:** 2022-11-28 to 2022-12-04  
**Message Volume:** 1,171 messages | **Participants:** 71

---

## Key Topics Discussed

### Node 5.0 Activation & Protocol Upgrade
- **5.0 soft fork** activated at block height 889,856 (2022-12-05), increasing transaction efficiency and throughput by optimizing smart contract execution. Enables more transactions per block without increasing block size.

### Sub-block Confirmations & Layer 1 Scaling
- **Bitcoin-NG & Prism architectures** discussed as potential paths for Ergo 6.0 roadmap; sub-blocks contain transaction data without advancing consensus/confirmation. Debate over whether they meaningfully reduce confirmation time vs. simply improving throughput. [@Armeanio, msg#350097]: Multiple EIPs to review; kushti planning discussions for next week.

### Merkle Trees vs. AVL Trees
- **Feature request raised** (msg#350114) to understand advantages of Merkle trees over AVL trees already used in Ergo. No resolution provided; flagged for later discussion.

### SigmaUSD (SigRSV) Economics & Funding Costs
- **Long-term RSV position risk**: funding rate of ~25.7% annually observed (msg#350256); RSV loses value relative to ERG over time absent price appreciation. Discussion highlights RSV as leveraged bet requiring careful risk management, not long-term hold.
- **Reserve pool mechanics** clarified: as SigmaUSD issuance increases, reserve pool grows proportionally, benefiting SigRSV holders (msg#350268).

### Spectrum DEX Layer 2 Sidechain
- **Spectrum sidechain network** planned to enable native asset swaps across chains (initially Ergo & Cardano) without wrapping. Differs from Rosen Bridge (wrapped tokens via multisig); spectrum maintains native assets on each chain while routing through sidechain liquidity pools (msg#350518-msg#350535).

### Oracle Pools v1 & v2
- **Oracle Pool v1**: run by EF members & community, providing reference price feeds.
- **Oracle Pool v2**: running for Dexy Gold with GORT rewards. Distinction between versions unclear from chat; no detailed comparison provided.

### Palmyra Ecosystem & Chainlink Partnership
- **ZenGate/Palmyra integration**: utilizing Chainlink proof-of-reserve functions via Winter Protocol proxy to issue on-chain warehouse receipts for decentralized trade financing. IoT devices (cameras, weight sensors, motion sensors) provide continuous proof-of-existence for commodities. Not zero-sum with other oracles; plan to build native Ergo oracles using raised capital (msg#350097-msg#350276).

### ErgoScript & Smart Contract Mutability
- **Immutable vs. mutable contracts**: immutable by default in Ergo unless explicitly coded with update mechanism (e.g., updateNFT). Update authorization via NFT held in wallet (e.g., SigmaUSD v2 governance tokens). Discussion around trustlessness: immutable contracts cannot fix exploits; mutable contracts introduce trust assumptions (msg#351355-msg#351463).

### Paideia DAO Infrastructure
- **DAO voting without human-in-loop**: when vote passes, smart contract changes deployed on-chain automatically. Enables multisig-style governance without relying on single person; foundational for trustless parameter/contract updates (msg#351470-msg#351476).

### Storage Rent & Demurrage
- **Storage rent weakness**: current rate practically only cleans dust; miners can increase in future. Gesell-inspired "demurrage effect" but very weak in practice (msg#350888).

### Difficulty Algorithm Adjustment (DAA) Debate
- **EIP review stalled**: new DAA proposed but community divided on necessity; miners losing hash rate to Kaspa but critics argue change is naive without proper technical grounding. No EIP proposed despite repeated calls. [@R, msg#350992, msg#350999]: Change would require hard fork; economic profitability issues trump algorithmic tweaks in bear market.

### Mining & Hash Rate Decline
- **Post-merge environment**: all PoW coins losing hash rate except Kaspa; Ergo affected by high electricity costs and speculative behavior. Miners switching based on profitability, not commitment. [@HQΣr, msg#350956]: Wait for mining content creators to resume coverage; community blamed for low adoption messaging.

### Bisq P2P DEX & ERG/BTC Pair
- **Bisq now live** with ERG/BTC trading pair (msg#350961); ranked #14 trading pair on Bisq. No KYC required; desktop app runs locally on P2P network. Cheaper spreads than centralized exchanges (0.0000808 BTC/ERG observed on Bisq vs. higher on CEX).

### CEX Listings & Trading Venues
- **Bitrue listing** announced (2022-12-01 10:00 UTC) for ERG/USDT pair (msg#350807, msg#350977).
- **KuCoin maintenance** (2022-12-04): ERG withdrawals halted during node upgrade; Babel fees feature being prepared.

### Babel Fees (Native Asset Transaction Fees)
- **Feature enabling users to pay transaction fees using native Ergo assets** instead of ERG, increasing accessibility for wallets holding only NFTs or native tokens (msg#350388).

### Sigma Rust & NIPoPoWs
- **NIPoPoW client implementation** in Sigma Rust but not yet used in wallets. [@greenhat mentioned; needs verification with greenhat per msg#350676.

### ErgoPay Integration & ErgoPay Backend Infrastructure
- **ErgoLend frontend work**: integrating ErgoPay for Kenyan borrowers dependent on mobile wallets; Nautilus wallet connection also in progress (msg#350718-msg#350720).

---

## Important Decisions or Announcements

- [@Armeanio, msg#350097, 2022-11-28]: Node 6.0 discussions to start after 5.0 activation. Multiple papers on sub-blocks, cryptographic primitives, and Merkle tree support to be reviewed.

- [@kushti, msg#350264, 2022-11-28]: Proposing regular bi-weekly or monthly chats on EIPs and protocol/ecosystem development; seeking community feedback.

- [@CW, msg#350807, 2022-11-30]: Bitrue listing announced for ERG/USDT (live 2022-12-01 10:00 UTC).

- [@Ergo NEWS, msg#350388, 2022-11-29]: Babel fees feature released, allowing users to pay transaction fees with native Ergo assets.

- [@Ergo NEWS, msg#350658, 2022-11-29]: Minotaur wallet team designed Ergo's first multisig wallet.

- [@Gazza, msg#350601, 2022-11-29]: SPF (Spectrum Finance) token airdrop, minting, and blockchain distribution announced; IDO to follow on ErgoPad.

- [@HQΣr, msg#351107, 2022-12-01]: $SPF confirmed as next IDO on ErgoPad.

- [@qx(), msg#351046, 2022-12-01]: Sigmanauts monthly meeting scheduled for 2nd of each month @ 2pm UTC; Sigmanaut candidates encouraged to apply.

- [@Ergo NEWS, msg#351222, 2022-12-02]: Node 5.0 activation at block height 889,856 (imminent, ~2022-12-05).

---

## Technical Q&A Worth Preserving

### Sub-blocks & Confirmation Time
- **Q** (@Unknown, msg#350104): "Do you have any good links i could read through?"
  **A** (@Hans, msg#350105): Bitcoin-NG (https://arxiv.org/abs/1510.02037v2), Prism (https://arxiv.org/abs/1810.08092).

- **Q** (@Unknown, msg#350112): "How does this work when smart contracts get involved. Could a swap tx happen (lets say erg -> SigmaUSD) in a microblock and then another swap from that sigUSD back to erg in the next microblock?"
  **A** (@Hans, msg#350132): "Yeah could happen, the transactions are still strictly ordered when consensus is achieved."

### Box Consolidation & UTXO Management
- **Q** (@Unknown, msg#350296): Error sending 40 ERG; balance shows 42 ERG.
  **A** (@CW, msg#350299): "Consolidate boxes." Wallet has 100-box input limit; dust from small payouts fragments wallets.

- **Q** (@Flying Pig, msg#350351): "What is the input box limit?"
  **A** (@MrStahlfelge, msg#350352): Wallet app uses 100 input boxes max; node accepts ~200. Actual size limits on input boxes restrict further (msg#350364).

### Smart Contract Mutability & Governance
- **Q** (@miwal, msg#351355): "Is there even a single example where [smart contracts are] trustless? For it to be true, we can't have developer private keys which can update the contract."
  **A** (@Glasgow, msg#351425): SigmaUSD v1 is immutable; SigmaUSD v2 has vote tokens for updates. DuckPools also immutable on deployment.

- **Q** (@miwal, msg#351428): "How do people usually (safely) store the key that can update the contract?"
  **A** (@Glasgow, msg#351431): "In their crypto wallets, it's a nft."

- **Q** (@miwal, msg#351469): "Do you mean Paideia goal is to allow a kind of multisig update mechanism (actually dao voting to allow smart contract updates)?"
  **A** (@Luivatra, msg#351470-msg#351471): "When a vote passes the change will be deployed on chain. So no human in the loop."

### Cross-chain & Bridge Mechanics
- **Q** (@gg, msg#350545): "Do you think that crypto is deflationary?"
  **A** (@qx(), msg#350482): "For Rosen you send your ADA to a multisig wallet and then on the erg side eADA is released to you. With Spectrum, it literally goes to a sidechain that talks to both chains, and your funds go from ERG - SIDECHAIN - ADA."

### Storage Rent & Demurrage
- **Q** (@eπ, msg#350880): "At the current rental rate it practically will only clean dust. But as I understand, miners can increase the rental fee in the future themselves?"
  **A** (@Glasgow, msg#350882): "Uses an avl tree, only the digest needs to be stored on chain."

### NIPoPoWs & Wallet Implementation
- **Q** (@Unknown, msg#350674): "I think for many, nipopows are one of the things that attracted us to Ergo. Great to see progress being made toward that end."
  **A** (@kushti, msg#350675): "I believe sigma-rust has some NIPoPoW client already, not used in wallets though. Need to check with greenhat."

### Bisq P2P DEX & KYC-free Trading
- **Q** (@Koutelier, msg#350136): "Which cex don't require kyc for withdraw or deposit fiat, and is there a way we can solve this?"
  **A** (@MrStahlfelge, msg#350137-msg#350138): "For withdrawal there should be simply none." Bisq is main one; supports ERG/BTC pair.

### Mining Profitability & Pool Loyalty
- **Q** (@Şerafettin Bayrakdar, msg#350773): "Is a loyalty reward given to the miner connected to the pool depending on the time he is connected to the pool?"
  **A** (@MrStahlfelge, msg#350779): "Woolypooly has such a system and is quite successful" (with reference to their payment distribution model).

---

## Links Shared

- [https://arxiv.org/abs/1510.02037v2]: Bitcoin-NG paper on sub-block confirmations.
- [https://arxiv.org/abs/1810.08092]: Prism paper on blockchain deconstructed into separate block purposes.
- [https://spectrumlabs.medium.com/spectrum-scaling-ergodex-beyond-layer-1-f3a23a6ba204]: Spectrum DEX Layer 2 sidechain architecture.
- [https://github.com/spectrum-finance/spectrum]: Spectrum Finance open-source Rust implementation.
- [https://github.com/ergoplatform/eips/blob/master/eip-0015.md]: EIP-0015 detailing updateNFT mechanism for contract upgrades.
- [https://github.com/ergoplatform/sips]: Ergo Improvement Proposals (SIPs) repository.
- [https://www.ergoforum.org/t/a-scalability-plan-for-ergo/226/4]: kushti's scalability plan discussion.
- [https://babygrenade.github.io/ergo-tokenautics-frontend/?token=SigRSV]: SigmaRSV holder analytics and distribution.
- [https://www.ergoforum.org/t/a-bisq-like-dex-to-trade-erg-for-fiat-or-btc-and-other-cryptcurrencies/4078]: MrStahlfelge's Bisq-like DEX proposal for ERG/fiat trading.
- [https://woolypooly.medium.com/wooly-payment-distribution-system-d299cede9c9d]: Woolypooly loyalty reward system for miners.
- [https://spectrumlabs.medium.com/spf-token-airdrop-minting-and-blockchain-distribution-289665cfb18f]: Spectrum Finance (SPF) token airdrop & distribution plan.
- [https://spectrumlabs.medium.com/spf-token-tokenomics-and-launch-ffaf1f56e22b]: SPF tokenomics & IDO launch details.
- [https://ergoplatform.org/en/blog/2022-03-25-storing-ergo-safew/]: SAFEW cold wallet guide with CSV export function.

---

## Unresolved Questions

### Sub-blocks & Confirmation Time Trade-offs
- **Status**: Open for 6.0 roadmap discussion.
- **Issue**: [@Gazza, msg#350121]: "Bitcoin NG does increase confirmation time massively?" challenged by [@Unknown, msg#350123]: "confirm that users should wait for propagation before considering microblock in chain, to avoid pruning by new key block."
- **Next Step**: kushti to facilitate research & EIP discussions post-5.0 activation.

### Merkle Trees vs. AVL Trees Feature
- **Status**: Feature request, no technical discussion.
- **Issue** [@Luivatra, msg#350114]: "What would merkle trees give over avl trees?"
- **Response** [@Armeanio, msg#350116]: "I can't remember it was a feature request."
- **Next Step**: Unclear; flagged for future consideration.

### Difficulty Algorithm (DAA) Adjustment
- **Status**: Contentious, no EIP submitted despite community complaints.
- **Issue**: Miners losing hash rate post-merge; some argue DAA should be tuned for profitability.
- **Criticism** [@R, msg#350992, msg#350999]: No technical EIP submitted; issue is economic (oversupply of hash relative to profitability), not algorithmic.
- **Next Step**: None; consensus that hard fork is not justified without proper EIP & technical grounding.

### Palmyra & Dexy Protocol Integration
- **Status**: Under discussion.
- **Issue** [@Unknown, msg#352078]: "Does Zengate have plans to use Dexy for Palmyra at all or is there another plan all together?"
- **Context**: Palmyra uses Chainlink for warehouse receipts; unclear if Dexy Gold will be integrated.
- **Next Step**: Tagged for next AMA.

### Layer 2 & Sharding vs. On-chain Optimization
- **Status**: Strategic decision pending.
- **Issue** [@kushti, msg#350670]: scalability options (sub-blocks, sidech