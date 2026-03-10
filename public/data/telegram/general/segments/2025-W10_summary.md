---
title: "Ergo General Chat — 2025-W10"
date_start: "2025-03-03"
date_end: "2025-03-09"
type: telegram_weekly
channel: general
week: "2025-W10"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat Summary — 2025-W10 (2025-03-03 to 2025-03-09)

## Key Topics Discussed

- **Dogecoin Sigma-chain integration**: Charles Hoskinson proposed forking Dogecoin to implement Sigma-chain technology from Ergo, creating a trustless bridge and exposing millions to Ergo. Debate centered on whether this is beneficial collaboration or Ergo being used without direct benefit [@kushti khushi, msg#549213-549214; msg#549339; msg#549191-549193].

- **Mining hashrate sustainability**: Significant concern that halving of block rewards (45→18 ERG, soon to 9 ERG) will cause 6x decline in mining profitability without price appreciation. Community debated whether Lithos Protocol, storage rent, and DeFi opportunities can offset losses [@Unknown, msg#549201-549255; msg#549270-549281].

- **Binance listing via community vote**: Binance announced new community voting mechanism for token listings. Multiple participants flagged this as Ergo's best CEX opportunity and called for coordinated campaign [@kushti khushi, msg#549662; @Ergo Boy, msg#549927-549931].

- **Sub-blocks and protocol speedup**: Discussion of sub-blocks as one component of broader speed/throughput improvements; confirmed as part of longer-term plan but not immediate focus [@kushti khushi, msg#549565-549571; @Windblow, msg#549563].

- **Monero bridging and Edwards25519 multisig**: Exploration of trustless pegging mechanisms for Monero via Rosen Bridge; requires Edwards25519 multisig infrastructure and watcher/guard scanning [@kushti khushi, msg#549676; @Armeanio, msg#549688-549695].

- **ChainCash submission and Ergo Book**: kushti submitted ChainCash paper; announced intention to collaboratively develop "Ergo Book" (appears to be technical documentation or whitepaper compilation) [@kushti khushi, msg#549859].

- **Ergo Node for Android revival**: Community member resurrected ErgoNodeAndroid project with one-click installation after fixing year-old dependency issues. Interest flagged for p2pod video series on full/light/mobile nodes [@kushti khushi, msg#549501-549504].

- **ErgoPay server maintenance and wallet UX**: ErgoPay server has been down ~2 weeks; debate over QR code slideshow approach (Keystone-style) vs URL protocol schemes (ergo-tx://) vs JSON import. No consensus but recognition that current implementation has fundamental limitations [@HQΣr, msg#548849; @Pulsarz, msg#548870-549034; @Pgr456, msg#548901-549008].

- **Watcher UI and node software versions**: Update issued: Watcher 2.2.1 required; node 3.1.1 release fixed bug in 3.01. Manual TX refund executed for GARD's DAO to return slashed permits from failed bridge transaction [@qx(), msg#548976-548979; msg#549351].

- **Sigma protocols for bulletproofs and zero-knowledge**: kushti explained bulletproofs as compact Sigma protocols enabling zero-knowledge range proofs without trusted setup; potential to verify arbitrary statements in ErgoScript, opening new dApp possibilities [@kushti khushi, msg#548995; extended in earlier AMA segment].

- **Palmyra and Chainlink partnership scope**: Clarified that Palmyra uses Chainlink proof-of-reserve + Winter Protocol for on-chain warehouse receipts tied to IoT sensors; not exclusive—Ergo oracles and other solutions will also be integrated; goal is decentralized trade financing framework [@Armeanio, msg#549356; relevant from prior townhall].

---

## Important Decisions or Announcements

- [@kushti khushi, msg#549339, 2025-03-04]: "From the tweet it seems it is about forking doge or building a sigmachain from Doge snapshot. Lets see. Stay tuned!" — Confirmed Doge Sigma-chain proposal is still under exploration, not a fork of Ergo itself.

- [@kushti khushi, msg#549676, 2025-03-07]: Asked @mhs_sam and @Armeanio for help evaluating Monero design for bridging possibilities—indicates active R&D into cross-chain interop for privacy coins.

- [@kushti khushi, msg#549859, 2025-03-09]: "Submitted ChainCash paper yesterday, now time to work collectively on the Ergo Book" — Major documentation/technical writing initiative underway.

- [@Binance, referenced msg#549662, 2025-03-07]: Community voting for new token listings re-enabled; Ergo community flagged as high-priority participation opportunity.

- [@qx(), msg#549536-549537, 2025-03-05]: Announced Ergo PoW Town Hall for 2025-03-06 1pm UTC; focus on "Ergo as Endgame for Crypto" and ecosystem governance. Recording posted; summary: "We are still so early… network effects will be felt over time" [@TMR.ΣRG, msg#549603].

- [@HQΣr, msg#549209, 2025-03-04]: Suggested forwarding Sigma-chain educational videos to Charles Hoskinson to facilitate Doge partnership discussion.

- [@Pulsarz, msg#548870-548881, 2025-03-03]: Proposed bounty for mobile wallet QR code slideshow support (gas cost reduction, no external service dependency); @HQΣr called for specific bounty amount.

---

## Technical Q&A Worth Preserving

- **Q** (@Flying Pig, msg#548911): How do you create a reduced transaction, and is that how Nautilus consumes it?  
  **A** (@Aco Šmrkas, msg#548915-548916): Use `ReducedTransaction.from_unsigned_tx()` in ergolib on normal unsigned TX. Nautilus uses normal TX; reduced is only for ErgoPay. (@HQΣr clarified: Nautilus uses BigJSON instead of reducing.)

- **Q** (@Jack Σ, msg#549254): Is hashrate drop a security problem for Ergo? What's an acceptable minimum? How does Ergo's ASIC-resistant GPU mining compare to ASIC chains on security?  
  **A** (@Unknown, msg#549255): Current ~10 Th; if emission drops 6x without price change, would drop 6x. 1.5 Th would allow 51% attack with ~500-600 Gh. Storage rent offsets some lost revenue. Context: Mining is more decentralized than ASIC chains; threshold depends on value at risk.

- **Q** (@Jack Σ, msg#549248): Can Lithos Protocol be used by other PoW chains?  
  **A** (@Jack Σ, msg#549264): Lithos should support storage rent so pools don't need to. (@cannon_q clarified: Lithos is an abstracted mining pool; adoption depends on pool integration.)

- **Q** (@Σddie Lin, msg#549189-549192): Will Sigma-chain use Ergo's coin or its own? Will Doge fork have other connections to Ergo?  
  **A** (@Richi, msg#549190-549193): Sigma-chain is a contractual layer of Ergo. Doge can fork to become Sigma-chain, keep own coin, get trustless bridge to Ergo; "couple million people will check what Ergo is" via bridge but no other mandatory connections.

- **Q** (@Unknown, msg#549298): What do you propose given mining capitulation risks?  
  **A** (@Unknown, msg#549301-549314): Accept Charles' help for price growth to 4-5 USD; temporary decision as paths converge then diverge. Ergo must take what it deserves via cooperation, not wait passively. (@kushti cautioned: don't rely on single big guy; better to collaborate with IOG researchers on high-performance PoW protocols, Sigma-chains, etc.).

- **Q** (@kushti khushi, msg#549505): Lightning swaps or lightning implementation on Ergo? Is this viable?  
  **A** (@kushti khushi, msg#549505): No, community only did adaptor signature demo swap with Bitcoin Cash (Jason Davies, few years ago). LN TVL is low even on Bitcoin. More interested in Ark, Cashu, Fedimint. Ergo capabilities allow better off-chain cash solutions on top of on-chain reserves.

- **Q** (@Joseph, msg#549441-549442): How is Ergo community resolving direction/priorities? Are there voting systems?  
  **A** (@kushti khushi, msg#549444-549445): Multiple commercial entities and non-profit orgs with loose coordination; townhalls (like one scheduled). Community voting on dev priorities would be beneficial but how to implement remains open. Voting on wishlist isn't binding; developers can propose any code anyway.

- **Q** (@Marc the Shark, msg#549389): Why do people say Ergo+Cardano work well together because both are eUTXO? Doesn't Rosen Bridge work with any chain?  
  **A** (Implicit): eUTXO alignment simplifies smart contract interaction and state management, but Rosen is chain-agnostic; eUTXO is convenience, not requirement.

---

## Links Shared

- [https://ergohub.xyz/]: ErgoPlatform hub
- [https://github.com/HelixEvo/ergo-node]: Auto-updating Ergo node script
- [https://github.com/rustinmyeye/ErgoNodeAndroid]: Revived Ergo Node for Android (one-click install)
- [https://github.com/taurushq-io/frost-ed25519]: FROST threshold scheme for Ed25519 (referenced for Monero bridging)
- [https://www.tiktok.com/t/ZT29ExD8K/, https://youtu.be/_uIv53UftBw]: Cheese Enthusiast content (wallet/dApp demos)
- [https://www.marketoracle.co.uk/Article1113.html]: Historical crypto/monetary philosophy (shared by kushti; suggested figure would be "good Ergonaut")
- [https://www.cryptopolitan.com/charles-hoskinson-did-not-lobby-for-cardano/]: Charles Hoskinson lobbying denial article
- [https://x.com/HouseofChimera/status/1897612733220016307]: AI agents development hint (referenced by Diederick)
- [https://www.coinbase.com/blog/Coinbase-acquires-team-to-accelerate-privacy-efforts-on-Base]: Coinbase acquires Iron Fish team (privacy focus but KYC-mining history flagged as risk)
- [https://nostr.band/note1aelp589ud3vem3nfu2whdjeqzn479ya3dsfccca59d479f7hyt0qtg3fjl]: Nostr post (referenced regarding mining concerns)
- [https://cointelegraph.com/news/binance-community-voting-mechanism-token-listings]: Binance community voting mechanism re-launched
- [https://t.me/ERGtrading]: Original Ergo trading Telegram group

---

## Unresolved Questions

- **Doge Sigma-chain execution model**: Will Doge fork or run as sidechain? Who funds development? What governance ensures Ergo isn't exploited? [@Richi, @kushti indicate "stay tuned"; no confirmed roadmap shared].

- **Mining profitability sustainability**: If price doesn't reach 4-5 USD before emission halving in ~March 2026, what's the contingency? Storage rent economics still TBD at scale [@Unknown msg#549267, msg#549316; @cannon_q optimistic on DeFi utility but no concrete numbers].

- **Binance listing campaign**: Has community organized formal strategy for voting? Who will lead outreach? Timeline for vote start? [@Ergo Boy called it "legitimate shot" but no coordination framework announced].

- **Scala 3 migration scope**: What's the timeline and risk for upgrading core node/contract stack? (@kushti mentioned PRs opened; Snowman Jason summarized benefits/tradeoffs but no timeline given [@msg#549434, msg#549443-549446]).

- **Monero Edwards25519 bridging design**: What exactly is needed—just multisig overlay, or deeper protocol integration? (@kushti asked @Armeanio for design review; conversation paused pending review [@msg#549676-549695]).

- **QR slideshow wallet standard**: Will mobile wallets adopt; is there consensus on protocol? (@Pulsarz suggested bounty approach; no commitment or budget set [@msg#548881]).

- **Ergo Book scope and timeline**: What's included—technical papers, SDK guides, philosophy? Who contributes? Deadline? [@kushti announced but no details [@msg#549859]).

- **Community governance voting mechanism**: How to enable binding dev priority votes without forking or requiring miner veto? [@kushti framed as open design problem [@msg#549445]).

---

## Community Observations

- **Echo chamber breakout concern**: Persistent theme that Ergo's technical superiority doesn't matter without narrative/marketing reach; Doge partnership seen as leverage for visibility, not crutch [@Multiple, msg#549223, msg#549383-549385, msg#549450-549452].

- **Ideological tension**: "Libertarian purist" vs "pragmatist" split evident—some resist relying on Charles/Elon optics; others argue visibility is prerequisite for miner sustainability [@cafebedouin.org msg#549329, msg#549345; vs @K msg#549304-549310; @kushti msg#549307].

- **PoEM (Proof of Emission Message) clarification**: Not applicable to isolated network islands, only helps resolve forks with competing chains; faster convergence rule [@kushti, msg#549062].

- **Merchant/RWA voting use case sketch**: @€rgonauta detailed ambitious on-chain voting infrastructure (30M votes in 11h via ERG+NFT+mixer for anonymity; 90k ERG fees to foundation/devs). Recognized as "feverish delirium" but flagged security concerns unaddressed [@msg#549833-549841].

- **Cyberverse gaming environment**: Minor excitement around metaverse integration; @qx() tested as "Kushti" avatar; @Ich Binsnicht joked about Elon being "best player everywhere" [@msg#549878-549890].