# Ergo General Chat — 2024-W37 Summary

## Key Topics Discussed

- **Storage Rent Collection Live**: Storage rent mechanism activated on mainnet. Sigmanauts Mining Pool now collecting rent; dashboard at sigmaspace.io tracks upcoming rent obligations across boxes. [@qx(), msg#513485-513675, 2024-09-09 onwards]

- **Node Release Pipeline (5.0.23 → 5.1.0 → 6.0)**: Version 5.0.23 finalized and under review; 5.1.0 to follow immediately after. 6.0 devnet coming with unsigned big integers, higher-order functions, options, and headers serialization. [@kushti, msg#514146-514153, 2024-09-13]

- **Paideia Mainnet Strategy**: Cornell AAP students DAO launched on testnet (B Paideia). Plan to keep B Paideia and mainnet Paideia running in parallel for one year, then migrate users. Concerns raised about dual-token complexity; no solution finalized. [@qx(), msg#513469-513478, 2024-09-09]

- **Rosen Bridge Integration**: UI for ETH bridging with Rosen leaked. Users can now wrap rsnBTC and rsnADA on DuckPools via SigmaFi. [@qx(), msg#513484, 2024-09-09]

- **Sub-blocks Research & Scalability**: kushti planning detailed scalability analysis for forum. Sub-blocks flagged as leading candidate for throughput improvements; candidate block regeneration improvements in 5.0.24. [@kushti, msg#514359, 2024-09-15; msg#513787-513792]

- **Indexed Node Advocacy**: Community noting indexed node capability underutilized across crypto; improved node version checks and availability detection being added. [@Luivatra, @Pulsarz, msg#514135-514145, 2024-09-13]

- **Stable Order Apprenticeship Programme**: New mentorship program launching to help developers implement ideas like HODLcoin. Seeking experienced Ergo devs to mentor. [@kushti, msg#513972, 2024-09-12]

- **SigmaUSD Collateral Ratio & Minting**: Bank unlock needed to mint SigmaUSD directly; currently at ~358% RR, needs 400%. Secondary market trading via Spectrum preferred until bank unlocked. [@Glasgow, msg#513517-513531, 2024-09-09]

## Important Decisions or Announcements

- [@qx(), msg#513485, 2024-09-09]: **Storage rent collected on mainnet test** — Block found, rent successfully extracted from 2 boxes in 9g wallet; change boxes returned with 4-year timer reset.

- [@kushti, msg#513773, 2024-09-10]: **Weekly Ergo Developers chat scheduled** — Wed, Sep 11th, 1PM UTC on ErgoDevelopers Telegram/Discord to discuss 5.0.23 & 5.0.24 releases, 6.0 protocol soft-fork, and dApp development feedback.

- [@Ergo NEWS, msg#514377, 2024-09-15]: **Ecosystem Weekly Update** — 5.0.23 under review; 6.0 devnet imminent; Cornell DAO on Paideia; storage rent dashboard live; Sigmanauts pool collecting rent; Stable Order apprenticeships open; ChainCash notes redemption support; Satergo Ledger support in progress; Rosen ETH bridging UI leaked.

- [@qx(), msg#513809, 2024-09-10]: **Public outreach push** — Call to spread word on announcements (storage rent, platform updates).

- [@kushti, msg#514298, 2024-09-14]: **Armeanio (Rosen Bridge) update posted** — Reference to ongoing work on Rosen Bridge integrations.

- [@qx(), msg#514435, 2024-09-15]: **Dev update video recording underway** — Will post shortly after recording.

## Technical Q&A Worth Preserving

- **Q** (@Cheese, msg#513782): Why can non-miners fully spend smaller storage rent UTXOs but not claim larger ones where only the fee is removed?
  **A** (@kushti, msg#513784-513787): Former case has no propagation issue (creation height set to expected block height); latter case is hard for non-miners without candidate block regeneration (coming in 5.0.24). HEIGHT set to last block + 1 during mempool check in recent versions, but without candidate regeneration still hard to include in next block.

- **Q** (@Cheese, msg#513791): Will miners rationally exclude low-fee rent transactions, wasting opportunity?
  **A** (@kushti, msg#513792): Over time, as emissions decline, protocol itself will enforce miners to care; currently miners should join Sigmanauts pool to collect maximum storage rent. [@Cheese, msg#513793]

- **Q** (@qx(), msg#513586-513590): How do UTXO consolidation and box age work in practice?
  **A** (@qx()): Each deposit goes into own box; sending may combine multiple boxes, destroying them and creating change box. Normal usage prevents old boxes; check age in Nautilus and Minotaur wallets. Can consolidate to reset 4-year rent timer.

- **Q** (@Flying Pig, msg#513643): What happens to locked LP tokens after 4 years if not traded?
  **A** (@qx(), msg#513697): Could fix by requiring ERGs deposited in box when locking that exceed storage rent × years locked. [@Gazza, msg#513695]: Contracts cannot create UTXOs that skip storage rent; every UTXO affected. Locking feature designed for few months to a year, not 4+ years.

- **Q** (@HQΣr, msg#513621): Will consolidation remove storage rent obligation?
  **A** (@Pgr456): ctrl+F browser search; every wallet is "somewhere" on rent list. Need search bar feature eventually.

- **Q** (@qx(), msg#513739-513757): Best setup for multiple mining pools with redundancy?
  **A** (@qx()): Use different wallets per pool; MiningCore uses whatever ERGs in wallet for payout. Run two nodes (one backup) with single MiningCore instance to avoid conflicts. Node corruption most likely failure point.

- **Q** (@kushti, msg#514318): Does hosting Ergo node with extra indexes as Tor service make sense?
  **A**: [Unresolved; posed as strategic question]

## Links Shared

- [https://sigmaspace.io/en/storage-rent]: Storage rent dashboard tracking upcoming obligations and 24h/7d/30d overview.
- [https://app.paideia.im/cornellaapdao24-25]: Cornell AAP students DAO on Paideia testnet.
- [https://docs.stability.nexus/about-us/the-stable-order/join-the-stable-order/apprenticeship]: Stable Order apprenticeship programme details.
- [https://github.com/ChainCashLabs/chaincash-rs]: ChainCash with notes redemption API support.
- [https://satergo.com]: Satergo wallet with Ledger support in development.
- [https://x.com/Arc11x/status/1833162664505221533]: Rosen Bridge ETH bridging UI leak.
- [https://www.ergoforum.org/t/ergo-after-central-banks/4852]: "Ergo: After Central Banks" positioning article.
- [https://github.com/ergoplatform/ergo/pull/2169]: 5.0.23 release candidate for testing.
- [https://x.com/ergo_platform/status/1833548938575560845]: Official Ergo platform announcement (referenced by qx, msg#513766).
- [https://x.com/ergo_platform/status/1835532526900646399]: Latest platform announcement with dev update link (referenced by qx, msg#514446).
- [https://sigmanauts.com/podcast/]: Podcast archive of today's AMA.
- [https://www.pokernow.club/mtt/bober-poker-night-21-PQub9Ys_EI]: Bober Poker Night tournament (Sep 12, 7PM UTC).
- [https://github.com/Lolliedieb/lolMiner-releases/releases/tag/1.89]: lolMiner 1.89 release with Autolykos improvements.
- [https://www.theregister.com/2014/11/20/lohan_sponsor_nxt/]: 2014 NXT space mission article (kushti reference).
- [https://kushti.github.io/]: kushti's personal site with papers (launched 2024-09-13).

## Unresolved Questions

- **Scalability path**: Sub-blocks vs. layer 2 vs. sidechains debate ongoing; kushti committed to publishing detailed forum analysis but decision deferred. [@kushti, msg#514359, 2024-09-15; @dayumbbbb msg#514347 betting on sub-blocks]

- **Paideia dual-token complexity**: How to handle B Paideia → mainnet Paideia transition elegantly; concern that switch within months will be harder than gradual upgrade. [@qx(), msg#513475, 2024-09-09]

- **Indexed node as Tor service**: Strategic feasibility not discussed. [@kushti, msg#514318, 2024-09-14]

- **Node version Docker tagging**: Debate on whether `latest` tag should stay 5.0.x or track new versions; months-long support window planned but approach not finalized. [@Pulsarz, @kushti, msg#514150-514153, 2024-09-13]

- **RocksDB Docker image**: Requested but status unclear; kushti to check publication path. [@Pulsarz, msg#514163, 2024-09-13]

- **CoinGecko rsERG listing**: Submission denied; requires "proof of affiliation with official team." Strategy for resubmission unclear. [@Unknown, msg#513872-513873, 2024-09-11]

- **Ergo Names status**: kushti noted mgPai said "done" but confirmation pending during developer chat. [@kushti, msg#513798, 2024-09-10]