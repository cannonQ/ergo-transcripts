# Ergo General Chat — 2024-W29 Summary
## Period: 2024-07-15 to 2024-07-21

---

## Key Topics Discussed

### Mining Pool Consolidation & Security
kushti and community members discussed the concerning concentration of hashrate on dxpool, approaching 50%+1 attack scenario. Multiple participants urged miners to diversify to smaller pools (Sigmanauts pool, SkyHarbor) to mitigate centralization risk. Lithos Protocol was cited as a potential long-term solution to GPU mining centralization.

### Sub-blocks & Block Pulsation Proposal
kushti outlined a proposal for sub-blocks (smaller transaction batches released faster within blocks) without changing the main 2-minute block time. Miners would vote on sub-block pulsation frequency. Unlike blocks, sub-blocks share block height. Expected to improve mempool chaining UX and transaction settlement speed within a block, with devnet targeting late August pending final miner pubkey-in-scripts implementation.

### Sigma Chains & Merge-Mining Sidechains
Technical discussion on Sigma Chains framework for merge-mined sidechains with Bitcoin and other chains. Trade-offs discussed: faster block times require careful security consideration; DarkFi as a privacy-focused sidechain option was mentioned but noted as potentially unpopular due to zkas language. Design details to be published; framework allows customizable block times (proposed 10-15 second minimum for public p2p networks).

### Oracle Pools v1 & v2 + Palmyra Ecosystem
Dan Friedman (via Armeanio recap) explained Oracle Pool v2 running for Dexy Gold with GORT rewards. Palmyra's use of Chainlink oracles + Winter Protocol for proof-of-reserve warehouse receipts for decentralized trade financing. Plan to build native Ergo oracles using token sale capital; broader strategy to use multiple oracle providers (including Ergo oracles) rather than single-vendor lock-in.

### Mempool Chaining in Nautilus
Armeanio raised prioritization question: should Nautilus focus on mempool chaining support (requires new indexed node relay backend), mobile UI revamp, or Machina Finance development. Community feedback prioritized mempool chaining + mobile UX before Machina to improve user experience and adoption.

### Sigmanauts Mining DAO Revenue Streams
Marc the Shark and qx() outlined current and planned revenue: Sigmanauts mining pool operational; SigmaLock and ephemeral messaging coming soon; Auction House NFT-based merch store in development; future UI takeover of SkyHarbor with maintenance fees. Merch system will integrate with miner IDs for layaway via mining rewards.

### ChainCash Development
Dusek's top-up reserve transaction builder completed and merged (PR #45). Community discussion on LETS implementation on top of ChainCash; minimal server API and command-line client needed for initial trust-based circle testing. Timeline: 2-3 weeks for skilled developers to issue/send notes.

### SigmaUSD Refund Issues & Wallet Bugs
Jack Σ reported persistent "Minimal ERG value not met" error on sigmausd.io refund page despite having 6.7 ERG. Root cause: insufficient ERG in Nautilus proxy address. Solution: send 0.01 ERG to proxy address to cover transaction fee.

### Community Marketing & Visibility
Debate over hiring external marketing (Max from Whiteboard Crypto suggested but rejected due to cost and pump-focused approach). qx() and community pivoted to grassroots marketing leveraging existing dApps (Rosen Bridge, Cyberverse, DuckPools, CruxFinance). Sigmanauts established ErgoSocials Telegram group for coordinated community outreach. Discussion about Rareevo conference attendance (free but self-funded travel).

### TVL & Cross-Chain Bridging Implications
Jack Σ asked whether bridged assets (e.g., Ergo to Cardano) count toward TVL on both chains or one. Answer: locked on Ergo in bridge; increases TVL of destination chain's DeFi products. Noted potential for "too much" outflow but acknowledged as normal bridge mechanics.

---

## Important Decisions or Announcements

- [@kushti khushi, msg#502612, 2024-07-15]: Strongly discouraged mining on dxpool due to 50%+ hashrate concentration risk.

- [@MavΣrickBg (bober), msg#502613-614, 2024-07-15]: Announced Sigmanauts mining pool bonus reward program (1+ ERG weekly per miner).

- [@Armeanio, msg#502638, 2024-07-15]: Raised community prioritization question: mempool chaining backend, mobile Nautilus UI, or Machina Finance? Flying Pig prioritized mempool chaining + mobile first.

- [@Flying Pig (™), msg#502652, 2024-07-15]: Recommended prioritizing mempool chaining for UX, then mobile UI, before Machina to build user base.

- [@kushti khushi, msg#502677, 2024-07-15]: Oracle Core 2.0.2 released.

- [@Armeanio, msg#502712, 2024-07-16]: Reported ~50% progress on Palmyra contracts; rest is UI and JavaScript integration.

- [@Yulius Kristianto, msg#502726-727, 2024-07-16]: SigmaUSD now listed on CoinGecko via email helpdesk contact.

- [@kushti khushi, msg#502838, 2024-07-16]: Published SigmaChains technical deep-dive, pt. I on chain commitments: https://www.ergoforum.org/t/sigmachains-pt-1-chain-commitments/4817

- [@qx(), msg#503062-063, 2024-07-16]: Published Sigmanauts revenue roadmap: mining pool (live), SigmaLock (soon), ephemeral messaging (very soon), Auction House merch/NFTs (very soon), SkyHarbor UI takeover (not soon).

- [@Marc the Shark, msg#503135, 2024-07-17]: Sigmanauts Mining DAO officially created with ~12-13 tokens distributed; miner ID UI features finalized; beta testing imminent; integration with Bober's themes (fan clubs) in progress.

- [@kushti khushi, msg#503140, 2024-07-17]: Bug Bounty Program launched for Gluon Protocol implementation on Ergo (Gluon Gold) by Stable Order: https://news.stability.nexus/bug-bounty-program-for-gluon-on-ergo-0ca233ce2d9a

- [@kushti khushi, msg#503156, 2024-07-17]: No SigmaChains dedicated channel yet; development heavily dependent on external partners for "unbubbling" on multiple levels.

- [@kushti khushi, msg#503272-273, 2024-07-18]: Cheese (Lithos lead) confirmed mainnet launch November-December; 6.0 soft-fork prioritized over sub-blocks to support faster confirmations.

- [@kushti khushi, msg#503390, 2024-07-19]: Crystal Pool seeking +1 backend developer (Elixir + Rust stack) to replace JavaScript backend.

- [@kushti khushi, msg#503413, 2024-07-19]: ChainCash working on top-up reserve transactions; testnet transaction completed.

- [@kushti khushi, msg#503460, 2024-07-19]: Considering implementation of miner pubkey-in-scripts as final major issue; if minimal rework needed, devnet possible by late August.

- [@kushti khushi, msg#503798, 2024-07-20]: Called for community-based marketing; directed users to join ErgoSocials Telegram group for coordinated outreach.

- [@kushti khushi, msg#504000, 2024-07-21]: Keystone hardware wallet call scheduled 10 hours from msg timestamp.

---

## Technical Q&A Worth Preserving

### Sub-blocks & Block Height
- **Q** (@Richi [MANA], msg#503169): What is the fastest block time available while preserving SigmaChains properties?
  **A** (@kushti khushi, msg#503183): Cannot replicate Kaspa-style superfast blocks (network spam vulnerability). 15-second SigmaChain blocks viable for slower sidechains; 10-15s minimum for public p2p networks considering network hops. Slower designs (e.g., 15s) mitigate ZK verification and spam risks.

- **Q** (@The Horticulturalist, msg#503888): What would sub-block experience look like? Faster transaction confirms? Certain transactions faster? Can funds received in 10s sub-block be used immediately or wait for 2-min block?
  **A** (@kushti khushi, msg#503920-921): Blocks released at same speed; sub-blocks share block height. Sub-blocks enable faster transaction arrangement/preparation within a block, then sent as complete set.

- **Q** (@HQΣr, msg#503922-925): Are hardcoded heights tied to blocks? Do sub-blocks accelerate block production or block building?
  **A** (@kushti khushi, msg#503920-921): Sub-blocks accelerate block building, not block production. Miners vote on sub-block frequency; old propagation remains for backward compatibility.

### ChainCash & LETS Implementation
- **Q** (@Unknown, implied): How to implement LETS on ChainCash?
  **A** (@kushti khushi, msg#503473): LETS can be implemented on top of ChainCash: https://github.com/ChainCashLabs/chaincash/blob/master/docs/lets.md (Minimal server API + command-line client needed for initial trust-based circle testing; 2-3 weeks for skilled developers to issue/send notes).

### Mining Fee Mechanics
- **Q** (@Aco Šmrkas, msg#503317): Are Sigmanauts pool fees distributed immediately?
  **A** (@qx(), msg#503319): Depends on pool; otherwise ~24 hours until miner wallet collects from contract.
  **A** (@kushti khushi, msg#503320): 720-block delay in contract (ore accurate).

### SigmaUSD Refund Error
- **Q** (@Jack Σ, msg#503913): Getting "Minimal ERG value not met" error on SigmaUSD refund page with 6.7 ERG in wallet. How to solve?
  **A** (@Luivatra, msg#503918): Not enough ERG in proxy address.
  **A** (@Luivatra, msg#503929): Send 0.01 ERG to proxy address.
  **Result** (@Jack Σ, msg#503931): Worked.

### TVL & Bridging
- **Q** (@Jack Σ, msg#503982): When Ergo/Gluon Gold bridged to Cardano, where is TVL counted—both chains, Cardano only, or Ergo only?
  **A** (@kushti khushi, msg#504004): Locked on Ergo in bridge; increases TVL of Cardano DeFi products.

### Rust vs. Scala Interpreter Performance
- **Q** (implicit): How does Sigma Rust performance compare to Scala interpreter for ErgoScript execution?
  **A** (@kushti khushi, msg#502664-666): Rust can provide better performance if libsecp256k1 properly utilized, but Sigma Rust still significantly slower than Scala interpreter. "A lot of work ahead to match the interpreter even."

---

## Links Shared

- [https://github.com/marctheshark3/ergo-tx-factory]: Sigmanauts Mining DAO token swap code repository; ready for integration with mining-core (MC).

- [https://github.com/marctheshark3/ergo-fan-clubs]: Themeable fan club integration for miner ID dashboard.

- [https://www.ergoforum.org/t/sigmachains-pt-1-chain-commitments/4817]: kushti's SigmaChains technical deep-dive on chain commitments.

- [https://news.stability.nexus/bug-bounty-program-for-gluon-on-ergo-0ca233ce2d9a]: Bug Bounty Program for Gluon Gold (stablecoin pegged to gold) on Ergo.

- [https://github.com/ChainCashLabs/chaincash/blob/master/docs/lets.md]: LETS implementation documentation on ChainCash.

- [https://github.com/ChainCashLabs/chaincash-rs/pull/45]: ChainCash top-up reserve transaction builder PR (completed).

- [https://t.me/ErgoSocials]: Community-based marketing Telegram group (created for coordinated outreach).

- [https://cypxmarketplace.vercel.app]: CYPX marketplace (upgraded extension for MewMart alternative).

- [https://www.pokernow.club/mtt/bober-poker-night-11-QTHobXGAkb]: Bober Poker Night 11 (free-to-play tournament, 55 ERG reward pot).

- [https://x.com/NeuralYogi/status/1813619710254301306]: Kallo Shaman's Bober poker tournament promotion.

- [https://open.spotify.com/episode/4TXCU337NQVj3LU1Ctegg4]: Podcast on dollar demand creation via Bitcoin/stables (recommended by TMR.ΣRG).

---

## Unresolved Questions

- **Sub-block mining adjustability**: Exact mechanism for miners to vote on sub-block pulsation frequency remains TBD. kushti mentioned readjustable subblocks "per unit of time value" but implementation details deferred.

- **Miner pubkey-in-scripts finalization**: kushti identified this as "last big issue" blocking 6.0 devnet; status uncertain whether rework needed is "much" or "minimal."

- **Nautilus prioritization**: While Flying Pig recommended mempool chaining first, formal community decision/vote on Armeanio's three-option prioritization not shown as concluded.

- **Sigmanauts marketing hire**: Discussion of hiring full-time marketer (possibly Whiteboard Crypto) deferred pending revenue streams maturation (SigmaLock, ephemeral messaging launch).

- **Crystal Pool backend rewrite**: c8 seeking Elixir + Rust developer to replace JavaScript backend; no confirmed hire or timeline.

- **Oracle Pool v2 expansion**: While Dexy Gold running, broader plan to "build out" native Ergo oracles using Palmyra token sale capital lacks concrete timeline or resource allocation.

- **SkyHarbor UI takeover**: Sigmanauts plans to take over SkyHarbor UI branding and charge maintenance fees, but no roadmap/timeline provided.

- **Sigma Chains external partnerships**: kushti stated development "heavily dependent on external partners" but no named partners or MOU confirmed.

- **Lithos mainnet readiness**: Cheese confirmed Nov-Dec mainnet, but full feature parity and GPU mining optimization timeline unclear.

---

## Community Sentiment & Notes

- **Mining concentration anxiety**: Dominant concern; kushti and community actively discouraging dxpool use.
- **Marketing frustration**: Recurring theme; qx() and community emphasize grassroots dApp leveraging over paid influencers.
- **Price/investment complaints**: Relegated to baseless channel; core discussion focused on technical development and utility.
- **Transaction activity spike**: Misfit Toy noted daily transactions doubled (3-4k → 7k+) on 2024-07-21; cause attributed to HQΣr testing bots.