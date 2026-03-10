---
title: "Ergo General Chat — 2023-W45"
date_start: "2023-11-06"
date_end: "2023-11-12"
type: telegram_weekly
channel: general
week: "2023-W45"
source: telegram
message_count: 1404
categories: [technical, marketing, bridges, governance, ecosystem, defi, nft, community, mining]
key_terms: [sub-blocks, weak-blocks, swift-blocks, block naming, terminology, CMC, ergogate, circulating supply, data integrity, platform fees, Rosen Bridge, RSN token, cross-chain, Cardano, watchers, multisig, sub-block rewards, emission schedule, miner incentives, sidechain rewards]
---
# Ergo General Chat — 2023-W45 Summary

## Key Topics Discussed

### Sub-blocks (weak blocks) nomenclature and design
Extensive discussion on naming conventions for faster confirmation blocks. Community debated "weak blocks," "swift blocks," "sub-blocks," and other alternatives. Final decision: **sub-blocks** is the approved name. Design confirmed as 1/128th of main block size (~1.27 MB currently, miner-votable). Miners receive rewards for sub-block creation; elegant reward mechanism already designed by kushti using ErgoScript programmability. Expected behavior: ~10 sub-blocks between main blocks with ~20-second confirmation times.

### Rosen Bridge token launch and bridge readiness
Rosen Bridge (RSN) token listed on Spectrum DEX and CoinGecko. Bridge itself described as "days or weeks away" from launch. Designed as cross-chain oracle protocol with Watchers (validators) rewarded for settled transfers and penalized for fraud. Requires ~$1K collateral each in RSN and ERG. Initial support for Cardano and Bitcoin; multi-signature wallet support chains can be added eventually.

### CoinMarketCap (CMC) controversy ("Ergogate")
CMC placed libelous disclaimer about EFYT (Ergo Foundation Year Token) on Ergo's listing page. Charged $5K fee to remove false information (alleged extortion). Community mobilized social media response. Glasgow negotiated privately with CMC; developer acknowledged error, apologized, and explained $5K was for advertorial service (not data correction). Situation partially de-escalated; chart still split but spiteful messaging noted as ongoing issue.

### Demurrage as primary marketing narrative
@dayumbbbb championed demurrage as Ergo's unique value proposition: only blockchain with "future-proof" monetary policy maintaining fixed circulating supply at infinity (inverse of Bitcoin's tendency toward zero). Positioned as "the only viable reserve currency" differentiating Ergo from VC-heavy, high-inflation competitors. Proposed "Quadfecta" framework: scalability (S-blocks) + decentralization (PoW) + demurrage + robustness.

### Storage rent and emission schedule
Monthly EF outgoings ~1-2 days of mining rewards. Treasury at ~412k-420k ERG; EF has not sold ERG, only distributed to devs and bounties. Emission drops to 3 ERG/block March 2026. No crisis expected; rather marks end of accumulation phase. Treasury depletion symbolizes transition to ecosystem-funded development model.

### Sigma unit nomenclature proposal
@dayumbbbb proposed calling 10^-8 ERG a "SIGMA" (or "sig") to parallel Bitcoin's "satoshi" naming. 100 million SIGMAs = 1 ERG. Promoted UX convenience over SI correctness; noted nanoerg (10^-9) exists for technical purposes but sig/sat analogy drives user adoption. Community responded positively; tips increasingly denominated in SIGMAs as meme evolved into practical suggestion.

### Developer talent and Scala language barriers
Discussion that Scala (reference client language) deters mainstream developer adoption. @dayumbbbb advocated for future Rust implementation paralleling Kaspa's 1-year rewrite effort. Counter-argument: SDKs exist in Java, JavaScript, and Rust; most dApp developers never touch node code. Consensus: alternative implementation welcome but not urgent; focus remains dApp ecosystem over core node rewrites.

### Mineralization dynamics (difficulty adjustment & hash distribution)
@JL raised concerns about Ergo's difficulty adjustment algorithm (DAA) being "band-aid fix" post-Ethereum-merge. Suggested coordination with miners to formalize issue via EIP. @qx() offered to host Spaces discussion for miners to draft formal proposal. @R and @luivatra pushed back: no concrete evidence of problem presented yet; Twitter/Telegram insufficient for structured governance work.

### Governance and EF funding model
Discussion on sustainability post-treasury depletion. Consensus: EF never dumped ERG; monthly outlays are minimal relative to mining rewards. Alternative funding mechanisms exist (GARD protocols, DuckPools lending, Paideia DAO). Kushti reportedly volunteering without salary >1 year; community confidence in protocol resilience post-EF.

## Important Decisions or Announcements

- [@kushti, msg#446942, 2023-11-07]: Renamed "week blocks" to **"sub-blocks"** in codebase; confirmed final nomenclature decision.
- [@HQ3rr, msg#446490-#446502, 2023-11-06]: Proposed and received community approval for "Blocks" (main) / "blocks" (sub) capitalization distinction; requested name memorialization in block headers (humorous).
- [@Rosen Bridge team, msg#447742, 2023-11-10]: **Rosen Bridge (RSN) token listed on CoinGecko**; https://www.coingecko.com/en/coins/rosen-bridge
- [@Glasgow, msg#447975-#447979, 2023-11-10]: Confirmed CMC negotiations ongoing; Rush (CMC CEO) working with EF devs in DMs; circulating supply chart separation remains unresolved pending developer feedback.
- [@Armeanio, msg#449579, 2023-11-12]: Discussed removing mixer fee from Rosen, shifting to service model for supported RSN tokens.

## Technical Q&A Worth Preserving

**Storage rent and sub-block rewards:**
- **Q** (@Jayson, msg#447014-#447025): How are sub-block miners rewarded if emission schedule is fixed? Doesn't paying ERG expand supply?
  **A** (@Richi, msg#447026): kushti discussed elegant reward mechanism during recent AMA using ErgoScript programmability; no supply expansion needed. [Reference video: https://www.youtube.com/live/yuy5uWMtcOg?si=n6lnN89aJAqJK73x&t=1804, timestamp ~30:00-40:00]

**Sub-block size limits:**
- **Q** (@Richi, msg#447601): What size limits are modeled for sub-blocks? Will miners vote to increase like main blocks?
  **A** (@dayumbbbb, msg#447603-#447607): Currently 1,271,009 bytes (~1.27 MB); miners can vote incrementally to increase. Cannot be 8 MB like main blocks.

**NIPoPoWs and weak block security:**
- **Q** (@lexymon, msg#446467): What are security tradeoffs of weak blocks?
  **A** (@Me, msg#446468): Weak blocks useful for lower-security applications (e.g., gaming); full blocks for critical operations. Wallet UX can surface checkboxes for security preference vs. confirmation speed.

**Transaction confirmation variance:**
- **Q** (@Ian Lee, msg#447085-#447090): Why did my transaction take 10 minutes to confirm when blocks are 2 minutes?
  **A** (@Glasgow, msg#447107 & @Flying Pig, msg#447108-#447110): Block times aren't deterministic (based on mining luck, not clock time). Explorer timestamp reflects when mining started, not completion. Sub-blocks won't speed existing block confirmation (only improve granularity for dApps choosing lower security).

**Difficulty adjustment algorithm concerns:**
- **Q** (@JL, msg#448558-#448560): Is DAA a "band-aid" causing hash swings? Evidence vs. baseless speculation?
  **A** (@R & @Luivatra, msg#448562-#448563): Old DAA still active when Ethereum mining existed; no concrete evidence provided. Propose formal EIP + data analysis before attribution to malice vs. regional electricity cost cycles.

**Ergonames and ordinals:**
- **Q** (@dayumbbbb, msg#447224-#447238): How do Ergonames work on UTXO model? Like ordinals?
  **A** (@Unknown, msg#447227): Send transaction to ~LouisLibre if you hold the ~louisLibre NFT; goes to your wallet. NFT-based name service (anti-privacy but popular on other chains).

**NFT uniqueness enforcement:**
- **Q** (@Mar Bondicat, msg#447712): How prevent NFT content copy-paste if it's on UTXO?
  **A** (@Pulsarz, msg#447715): Reference EIP-34 (live on Auction House); leverages ErgoScript + register data structures to enforce uniqueness.

**Rosen collateral requirements:**
- **Q** (@Feng Qing, msg#449268): How participate as Watcher? Collateral amount?
  **A** (@Glasgow, msg#449270): ~$1K each of RSN and ERG; exact amount TBD.

## Links Shared

- [https://ergoplatform.substack.com/p/ergo-monthly-wrap-up-october](https://ergoplatform.substack.com/p/ergo-monthly-wrap-up-october): October monthly wrap-up (2023)
- [https://ergcube.com/](https://ergcube.com/): Aggregated directory of all Ergo ecosystem projects
- [https://www.coingecko.com/en/coins/ergo](https://www.coingecko.com/en/coins/ergo): CoinGecko Ergo listing; tokenomics tab now available for community submission
- [https://rosen.tech/](https://rosen.tech/): Rosen Bridge official site; collateral, Watcher setup, documentation
- [https://d.id/data/ergo.bit](https://d.id/data/ergo.bit): Ergo .bit DID namespace (Nervos delegation); $0.99/year for second-level DIDs; community expressed low interest due to Paideia DAO competing for governance
- [https://github.com/ChainCashLabs/chaincash](https://github.com/ChainCashLabs/chaincash): ChainCash repository and documentation
- [https://www.youtube.com/live/yuy5uWMtcOg?si=n6lnN89aJAqJK73x&t=1804](https://www.youtube.com/live/yuy5uWMtcOg?si=n6lnN89aJAqJK73x&t=1804): kushti AMA discussing sub-block reward mechanics (~30:00-40:00)
- [https://github.com/ergoplatform/eips/blob/master/eip-0034.md](https://github.com/ergoplatform/eips/blob/master/eip-0034.md): EIP-34 NFT standard (live on Auction House)
- [https://github.com/ergoplatform/ergo/pull/2055/files](https://github.com/ergoplatform/ergo/pull/2055/files): Sigma Pool GitHub PR (miner-friendly pooling alternative to parasitic pools)
- [https://www.coingecko.com/en/coins/rosen-bridge](https://www.coingecko.com/en/coins/rosen-bridge): Rosen Bridge (RSN) token on CoinGecko
- [https://t.me/ergoplatform_ptbr](https://t.me/ergoplatform_ptbr): Portuguese Ergo community Telegram (requires join approval)
- [https://ergexplorer.com/](https://ergexplorer.com/): Alternative Ergo Explorer (preferred by some community members over official)
- [https://ergo.watch/emission](https://ergo.watch/emission): Ergo emission tracking dashboard
- [https://blockpit.io/blog/krypto-steuererklaerung-anleitung-deutschland/](https://blockpit.io/blog/krypto-steuererklaerung-anleitung-deutschland/): German crypto tax guidance (discusses hold-to-earn exemptions)
- [https://docs.ergoplatform.com/dev/scs/ergoscript-primer/](https://docs.ergoplatform.com/dev/scs/ergoscript-primer/): ErgoScript primer documentation
- [https://ergoplatform.org/en/news/The-Ergo-Foundation-Path-to-a-Robust-Digital-Ecosystem/](https://ergoplatform.org/en/news/The-Ergo-Foundation-Path-to-a-Robust-Digital-Ecosystem/): EF post on post-treasury transition strategy

## Unresolved Questions

- **Sub-block reward source**: Mechanism confirmed designed but full implementation details (emission curve, treasury vs. miner-generated, time-locking) not publicly detailed yet.
- **CMC chart split reversal**: Whether CMC will restore unified chart remains TBD; EF taking cautious approach per Glasgow.
- **Rosen Bridge launch date**: "Days or weeks away" repeated; exact ETA still 2-week™️ standard.
- **DAA vulnerability legitimacy**: @JL claims post-merge band-aid; @R/Luivatra demand formal EIP + data. No formal review scheduled.
- **Rust node implementation viability**: @dayumbbbb proposed; @Luivatra skeptical of necessity. No foundation commitment or funding model proposed.
- **Scala developer recruitment**: Ongoing tension: core team prefers 1% purists; market reality demands accessibility. No resolution path defined.
- **Paideia DAO vs. .bit governance**: Community showed low interest in Nervos .bit for Ergo governance once Paideia launches; unclear if .bit will be abandoned or co-exist.
- **EF post-depletion structure**: Treasury exhaustion timeline clear; successor funding model (community DAO, bounty system, CCS equivalent) not formalized.
- **Demurrage narrative adoption**: @dayumbbbb pushing hard; unclear if foundation/marketing will make it primary messaging pillar vs. supporting feature.
- **SIGMA unit standardization**: Community meme evolved to practical proposal; no wallet/explorer integration timeline.