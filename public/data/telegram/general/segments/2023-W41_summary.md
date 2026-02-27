# Ergo General Chat — 2023-W41 Summary

## Key Topics Discussed

- **Block Time & Performance**: Extended discussion on slow block confirmations (average 2 minutes with frequent 10-15 minute outliers creating poor UX). kushti confirmed weak blocks are in R&D phase with no ETA; implementation may take at least a year. The issue affects dApp usability significantly.

- **Weak Blocks & Consensus**: kushti outlined the scalability plan: weak blocks at 1/128th difficulty (~1 per second), with transactions weakly confirmed in ~20 seconds after majority hashrate commitment. Sidechains could provide incentivization for weak block reporting. Still in research phase with several unresolved consensus-level questions.

- **Demurrage & Storage Rent**: New participants questioned how storage rent works (0.13 ERG per UTXO every 4 years). Clarified that tokens can be claimed if insufficient ERG balance; wallets consolidate UTXOs automatically. HostFat (Bitcointalk forum admin) joined and initially misunderstood the mechanism.

- **Exchange Listings**: CoinEx resumed ERG withdrawals after node migration (announced to complete within the week). Huobi still suspended due to storage rent breaking their withdrawal system. Multiple discussions about T1 exchange strategy and MEXC raffle effectiveness.

- **Rosen Bridge**: Joseph Armeanio detailed the Chainlink partnership for proof of reserve via Winter Protocol, warehouse receipt issuance on-chain, and IoT device integration for commodity auditing. Plan to build out Ergo-native oracles with capital from token sale. Oracle Pool v1 (EF members + external) and v2 (Dexy Gold with GORT rewards) exist.

- **ErgoHack VII**: "Future of Finance" hackathon Oct 13-15 with 9 teams registered, prize pool of 9000 SigmaUSD (1st), 5000 (2nd), 4000 (3rd). Captain Nemo's Metamask Snap plugin for Ergo mentioned as one project; Auction Coin undergoing updates during hackathon.

- **Twitter/X Handle Transfer**: Sigmanauts voted to rename their account from @Sigmanauts to @ergo_platform to consolidate community presence. Old ETC account (@Ergo_Platform_X) temporarily reactivated for handle transfer but unclear if it will be deactivated again or repurposed.

- **Spectrum Finance Donation**: Ergo Foundation received 30 million SPF tokens (3% of supply, valued at $1.6M). Discussed potential for SPF to become validators and deploy funds into Ergo ecosystem.

- **SigmaFi vs DuckPools**: Community comparing lending protocols; SigmaFi seen as simpler/lower-risk (single borrower-lender pairs), DuckPools newer but functional. SigmaFi bonds offering ~50% APY on SigmaUSD with 150% collateralization ratios.

- **Stealth Addresses & Privacy**: anon2020 testing stealth addresses on mainnet with proportional reward splitting across multiple stages (possible mixer enhancement for privacy). Implementation allows funds to "bleed off" gradually across transactions rather than exit all at once.

- **Crux Finance IDO**: Contribution period ends Oct 18; promises advanced portfolio tools beyond MyErgExplorer with Phase 2 to include SigmaFi support.

## Important Decisions or Announcements

- [@qx(), msg#438114, 2023-10-10]: Twitter/X handle migration complete: Sigmanauts account (@Sigmanauts) renamed to @ergo_platform with 600k+ followers intact. Old account temporarily parked as @Ergo_Platform_X.

- [@Glasgow｜WON'T DM, msg#438252, 2023-10-11]: CoinEx node migration and wallet compatibility work underway; ERG deposit/withdrawal expected to resume within the week.

- [@Ergo NEWS $ERG, msg#437737, 2023-10-09]: Spectrum Finance donated 30M SPF tokens (3% supply, ~$1.6M value) to Ergo Foundation.

- [@Glasgow｜WON'T DM, msg#438678, 2023-10-12]: New Telegram community format tested at https://t.me/ErgoPlatformCommunity; separate Ergohack chat created for weekend event.

- [@qx(), msg#438900, 2023-10-13]: Discover Ergo rewards campaign launched via ErgoTipperBot; 47 accounts receiving tips over 24 hours testing Luivatra's tipper bot infrastructure.

- [@kushti khushi, msg#438403, 2023-10-12]: TO wallet online; collecting dust continuously without special handling.

- [@Chris Ray (Won't DM First), msg#439465, 2023-10-15]: Halloween costume competition announced with crypto basket prizes; NFT-themed rules to be finalized.

## Technical Q&A Worth Preserving

- **Q** (@Marty ErgoPad): How can 15-second block times be achieved without compromising security?
  **A** (@kushti khushi): Expected block delay cannot change (affects emission, existing contracts). Ethereum ran 17s average by paying uncle blocks but had fairness compromises (citations: https://eprint.iacr.org/2022/1020.pdf). Weak blocks are the feasible path, not raw block time reduction.

- **Q** (@W || Mafia): What does R&D phase mean for weak blocks?
  **A** (@Glasgow｜WON'T DM): Research too early-stage to estimate timeline; unforeseen obstacles could arise making it infeasible or requiring major changes.

- **Q** (@Marty ErgoPad): What's the rough plan for block time improvement?
  **A** (@Unknown, citing kushti's forum post): Weak blocks with 1/128 difficulty (1 per second), cut-through transaction ID propagation, ~20 second weak confirmation after majority hashrate, sidechain commitment incentivization. [Source: https://www.ergoforum.org/t/a-scalability-plan-for-ergo/226/5]

- **Q** (@Flying Pig): Analysis of block time variance?
  **A** (@Flying Pig): 20% of blocks are ≥3 minutes (roughly every 5th block); compounded UX pain when chaining transactions.

- **Q** (@HostFat): How much of a user's balance can demurrage claim?
  **A** (@Unknown): ~0.13 ERG per UTXO every 4 years; if balance insufficient, any tokens in the box can cover the fee. Wallets prevent accidental drainage via consolidation.

- **Q** (@anon_br Σ): Workaround for Sigma Rust unavailable in Metamask plugin environment?
  **A** (@anon_br Σ): Testing Sigma.JS; if issues arise, will implement Ergo's signature schema in JavaScript.

- **Q** (@Me): How do stealth addresses work on Ergo?
  **A** (@qx()): One-time disposable addresses generated per transaction, linked to recipient's actual address but unique and untraceably traced. [Potential mixer enhancement: proportional bleed-off across stages rather than atomic exit.]

- **Q** (@Me): Can you send messages with transactions?
  **A** (@Me): Yes, via "purpose" box in Ergo Mobile Wallet; message viewable in transaction history. First Bitcoin block had a message; ErgoTree supports OP_RETURNs equivalents.

## Links Shared

- [https://www.ergoforum.org/t/auction-coin-auction-based-emission-and-degen-finance-autonomous-machine/4287](https://www.ergoforum.org/t/auction-coin-auction-based-emission-and-degen-finance-autonomous-machine/4287): AuctionCoin token issuance (emission-based autonomous machine)

- [https://www.youtube.com/watch?v=Z-7p4_AMRvA](https://www.youtube.com/watch?v=Z-7p4_AMRvA): Ergo Weekly Developer Update (Rosen Bridge, Nautilus, community projects)

- [https://vxtwitter.com/Sigmanauts/status/1711386379937038845](https://vxtwitter.com/Sigmanauts/status/1711386379937038845): Sigmanauts voting recap (pre-handle change)

- [https://www.ergoforum.org/t/a-scalability-plan-for-ergo/226/5](https://www.ergoforum.org/t/a-scalability-plan-for-ergo/226/5): kushti's weak blocks & sidechain scalability roadmap

- [https://ergohack.io/](https://ergohack.io/): ErgoHack VII registration & details

- [https://ergoplatform.org/en/news/ErgoHack-7-Update-Prize-Pool/](https://ergoplatform.org/en/news/ErgoHack-7-Update-Prize-Pool/): ErgoHack VII prize pool article

- [https://www.youtube.com/watch?v=4jwBnKwhLOQ](https://www.youtube.com/watch?v=4jwBnKwhLOQ): Joseph Armeanio's welcome message for ErgoHack VII

- [https://t.me/ErgoPlatformCommunity](https://t.me/ErgoPlatformCommunity): New Telegram community format for Ergo

- [https://docs.ergoplatform.com/mining/rent/rent-fees/](https://docs.ergoplatform.com/mining/rent/rent-fees/): Storage rent documentation

- [https://eprint.iacr.org/2022/1020.pdf](https://eprint.iacr.org/2022/1020.pdf): Academic paper on uncle block fairness compromises (cited by kushti)

- [https://scholar.archive.org/work/zqyevs2od5aqngiv33ulk4z73y/access/wayback/https://dl.acm.org/doi/pdf/10.1145/3490486.3538250](https://scholar.archive.org/work/zqyevs2od5aqngiv33ulk4z73y/access/wayback/https://dl.acm.org/doi/pdf/10.1145/3490486.3538250): Pool exploitation analysis (referenced by kushti)

- [https://hodlbox.xyz/](https://hodlbox.xyz/): HodlBox demo (force-hodl smart contract for ERG locking)

- [https://github.com/SavonarolaLabs/hodlbox-xyz](https://github.com/SavonarolaLabs/hodlbox-xyz): HodlBox source code (ErgoHack VII project)

- [https://www.ergopad.io/contribute/cruxfinance/staker](https://www.ergopad.io/contribute/cruxfinance/staker): Crux Finance IDO contribution form (closes Oct 18)

- [https://github.com/paideiadao/paideia-app/issues](https://github.com/paideiadao/paideia-app/issues): Paideia bounty program (React/TypeScript bug fixes)

- [https://sigmaverse.io/](https://sigmaverse.io/): Sigmaverse (Ergo dApp ecosystem listing)

- [https://ergexplorer.com/](https://ergexplorer.com/): ErgExplorer (alternative to Ergo Explorer for TX tracking)

- [https://stealthex.io/?to=erg](https://stealthex.io/?to=erg): StealthEX (non-KYC, privacy-focused swap)

- [https://docs.google.com/forms/d/e/1FAIpQLSd79efhamR5sxK5yMt6oxOzSP4F-ZCMUvkYLo0NwvB1OoA8Ww/viewform](https://docs.google.com/forms/d/e/1FAIpQLSd79efhamR5sxK5yMt6oxOzSP4F-ZCMUvkYLo0NwvB1OoA8Ww/viewform): CommEX token listing poll (call for "Ergo" submissions)

- [https://twitter.com/ZengateGlobal/status/1712649978789941314](https://twitter.com/ZengateGlobal/status/1712649978789941314): Palmyra meeting announcement

- [https://monerosuite.org/](https://monerosuite.org/): Monero Suite (privacy tool; shared as inspiration for Ergo privacy features)

- [https://armada-alliance.com/docs/ergo-developer-guides/](https://armada-alliance.com/docs/ergo-developer-guides/): Armada Alliance Ergo developer guides

- [https://ergoauctions.org/artwork/6183680b1c4caaf8ede8c60dc5128e38417bc5b656321388b22baa43a9d150c2](https://ergoauctions.org/artwork/6183680b1c4caaf8ede8c60dc5128e38417bc5b656321388b22baa43a9d150c2): GORT escalation auction

## Unresolved Questions

- **Weak blocks ETA**: kushti stated R&D phase with several open questions around consensus-level commitment and incentivization. No timeline provided; at least 1 year estimated by community guesses.

- **Raw block time reduction feasibility**: kushti argues expected block delay (2 minutes) is immutable due to contract dependencies and emission; reducing it would break existing dApps. Community debate unresolved on whether this is a technical blocker or design choice.

- **Huobi ERG withdrawal resumption**: Storage rent broke their node. No specific date given; Glasgow pushing for prioritization.

- **Old Twitter handle (@Ergo_Platform_X) disposition**: Account reactivated for handle transfer, but unclear if it will be deactivated again, given to ETC, archived, or repurposed.

- **Auction Coin public launch**: kushti asked about public updates; mentioned work done for ErgoHack but details TBD (anon said info coming during hackathon).

- **Rosen Bridge launch date**: Multiple mentions of "imminent" launch but no confirmed date in chat.

- **Limit orders on Ergo**: @Me requested feature; Chris Ray suggested community should build it (bounty potential mentioned but not formalized).

---

**Note**: This week featured strong technical depth on block time trade-offs, storage rent mechanics, and bridge/oracle architecture. Price discussion and off-topic chatter were frequent but minimal substantive content was lost due to moderation and topic discipline.