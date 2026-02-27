# Ergo General Chat — 2024-W09 Summary

## Key Topics Discussed

- **ChainCash & Collateral Mechanisms**: Discussion of ChainCash white paper mechanics, particularly concerns about non-backed notes and off-chain collateral redemption guarantees. @kushti_ru clarified the system supports multiple models: fully-backed (Hawala-style), fractional-reserve, and community-level LETS currencies.

- **SigmaUSD Protocol Dynamics & BearWhale Activity**: Extensive discussion of a major whale ("BearWhale") minting ~540k SigmaUSD at high Reserve Ratio (~800%), dumping ERG to depress price, then redeeming at profit. Multiple proposals emerged: per-epoch minting limits, time locks, dividend mechanisms, and oracle price tracking improvements. @kushti_ru noted limits per oracle cycle would help but acknowledged trade-offs.

- **Rosen Bridge Cross-Chain Integration**: Updates on Bitcoin chain implementation, EVM RPC extractor, Bitcoin UTXO selection, and guard service WID hash fixes. Discussion of rsERG pricing parity and arbitrage opportunities between Cardano DEX and centralized exchanges.

- **MEXC Exchange Listing Raffle**: Community-funded raffle to raise 28,000 ERG (~$70k USD equivalent) for MEXC listing. Raffle completed in ~5 days with 567 contributors, raising 28,518 ERG (101.85% funded). Discussed surplus handling, airdrop mechanisms, and raffle v2 design with fee justification questions.

- **SigmaRSV as Short-Term Speculation Tool**: @kushti_ru repeatedly emphasized SigmaRSV should not be HODLed—users should exit once profitable given manipulation risks. Reserve Ratio dropped from 800% to 600% as community reacted to BearWhale exploit pattern.

- **Dexy Protocol & Dexy Gold**: Private UI testing progressing well; public testing to begin soon. Per-day limits on minting mentioned to prevent manipulation similar to SigmaUSD attacks.

- **Ledger Support**: Being ported to new SDK; progress tracked at [GitHub](https://github.com/tesseract-one/ledger-app-ergo/tree/new-sdk).

- **Early Mining Distribution & Whale Concentration**: @Mewbie conducted deep analysis of early mining wallets, identifying ~5-7M ERG distributed among early miners (2019-2020). Debate over whether concentration is healthy; @kushti_ru noted protocols cannot distinguish individuals, so tax-based solutions would be trivial to bypass via smart contract splitting.

- **Sub-Blocks Development Status**: @kushti_ru listed as topic for future roundtable discussion post-Ergoversary; not confirmed for 6.0 testnet yet.

- **Bulletproofs & Zero-Knowledge Proofs in ErgoScript**: @kushti_ru confirmed bulletproof verification in ErgoScript is being explored; enables trustless alternatives to SNARKs without trusted setup. Groth one-out-of-many and similar protocols could be used in contracts.

---

## Important Decisions or Announcements

- [@kushti_ru, msg#477693, 2024-02-29]: **MEXC raffle officially started today** with community-driven fundraising model.

- [@qx(), msg#477813, 2024-02-27]: Confirmed official Ergo Platform Twitter promotion of MEXC raffle; Yasha Black (Spectrum founder) composed tweet promising 20k views.

- [@Yulius Kristianto, msg#478725, 2024-03-01]: **CyberPixel (CYPX) token listed on CoinGecko** (powered by Ergo blockchain).

- [@kushti_ru, msg#478237, 2024-02-29]: **Gluon protocol will impose extremely high fees for large cashouts** to prevent similar manipulation attacks as SigmaUSD.

- [@kushti_ru, msg#478376, 2024-02-29]: **Two mitigation options for SigmaUSD manipulation proposed**: per-oracle-epoch limits or dividend mechanism by Bruno (protocol author).

- [@Dan Friedman, msg#478674, 2024-03-01]: **First batch of Ceylon cinnamon tokenized via Ergo delivered**—real-world asset integration milestone.

- [@HQΣr, msg#478595, 2024-02-28]: **Dexy Gold private UI testing going well**; public testing to start "later today or tomorrow" with transactions chaining as remaining fix.

- [@qx(), msg#479378-379, 2024-03-03]: **MEXC listing raffle officially completed**—28,518 ERG raised from 567 contributors in ~5 days (101.85% funded).

---

## Technical Q&A Worth Preserving

- **Q** (@Velvia, msg#478224): Why don't light wallets and mobile wallets incorporate NIPoPoWs, or mix of Satergo and Minotaur with built-in mixer?
  **A** (@Velvia, msg#478225-226): No direct answer provided; topic flagged as UX/wallet architecture design question.

- **Q** (@Jesper Agger, msg#476996-998): In ChainCash, doesn't allowing note issuance without collateral incentivize meme coins? How do off-chain assets get redeemed if bad actors refuse to pay?
  **A** (@kushti_ru, msg#477025): ChainCash operates as P2P network with interacting subnetworks—users choose risk level (fully backed, fractional reserve, or community LETS). Redemption enforced by user acceptance decisions and reputation.

- **Q** (@MGpai, msg#478437-438): Can the SigmaUSD bank script be updated completely? Who holds update power?
  **A** (@kushti_ru, msg#478439-440): 5 multisig keys control updates. Plan to burn keys eventually but not yet completed. (@kushti_ru, msg#478444): Keys held by kushti, Armeanio, and others.

- **Q** (@Patato, msg#478789): ErgoWallet not showing NFT images despite IPFS being accessible.
  **A** (@HQΣr, msg#478790): Ergo wallet historically doesn't show images consistently; issue flagged as regression (worked previously).

- **Q** (@Patato, msg#478679): Mobile wallet not recognizing Ergo raffle QR code for ErgoPay.
  **A** (@Hasnain, msg#478680): Confirmed issue—manually entering address required. Likely QR code compatibility issue.

- **Q** (@Velvia, msg#478836): How should SigmaUSD oracle price track Cardano-side rsERG liquidity vs. CEX prices?
  **A** (@Velvia, msg#478836): Implied discussion open; no resolution in logs.

- **Q** (@Eddie Moralez, msg#478919): Does raffle account for ERG price appreciation since start? Who keeps excess if ERG rises significantly?
  **A** (@kushti_ru, msg#478962): Excess should be kept as buffer for future listings or returned per community governance. Discussion flagged as needing formal decision.

- **Q** (@Chris Ray, msg#479009-010): Can MEXC airdrop recipients be onboarded via NFT drop to new wallet creators?
  **A** (@HQΣr, msg#479011-012): Raffle service provides contributor address list; airdrop will be CSV-based direct distribution to those addresses (no external threat).

- **Q** (@Windblow, msg#478015): Where are Ergo RPC/blockchain data API docs?
  **A** (@Glasgow, msg#478019): [docs.ergoplatform.com/dev/interact/](https://docs.ergoplatform.com/dev/interact/), [OpenAPI Swagger docs](https://docs.ergoplatform.com/node/swagger/openapi/)

---

## Links Shared

- [ergonaut.space/ru/Ergo/manifesto](https://ergonaut.space/ru/Ergo/manifesto): Russian translation of Ergo Manifesto (restored after domain expiry issues)
- [ergexplorer.com](https://ergexplorer.com): Ergo blockchain explorer for TX history
- [ergo.watch/sigmausd](https://ergo.watch/sigmausd): SigmaUSD protocol metrics
- [defillama.com/protocol/sigmausd](https://defillama.com/protocol/sigmausd?denomination=ERG): SigmaUSD TVL tracking
- [cruxfinance.io/tokens](https://cruxfinance.io/tokens): Token filtering and metrics
- [ergo.getgrist.com](https://ergo.getgrist.com/jf9KPR1HUDJH/Project-Management/p/27): Non-KYC CEX list
- [github.com/tesseract-one/ledger-app-ergo](https://github.com/tesseract-one/ledger-app-ergo/tree/new-sdk): Ledger integration in new SDK branch
- [ergoforum.org/t/ergodevs-r-d-dao-for-ergo-core/4663](https://www.ergoforum.org/t/ergodevs-r-d-dao-for-ergo-core/4663): ErgoDevs R&D DAO roadmap
- [github.com/ergoplatform/eips/blob/master/eip-0015.md](https://github.com/ergoplatform/eips/blob/master/eip-0015.md): SigmaUSD protocol specification (on-chain & off-chain)
- [github.com/anon-real/sigma-usd](https://github.com/anon-real/sigma-usd): SigmaUSD client reference implementation
- [sigmausd.io](https://sigmausd.io): SigmaUSD protocol UI
- [ergoraffle.com](https://ergoraffle.com): Ergo community raffle platform
- [t.me/rosenbridge_erg](https://t.me/rosenbridge_erg): Rosen Bridge Telegram channel
- [t.me/ergcubeswaps](https://t.me/ergcubeswaps): ErgoCube transaction scraper alerts
- [t.me/ErgoWhaleAlert](https://t.me/ErgoWhaleAlert): Ergo whale transaction alerts
- [t.me/SigmaUSD](https://t.me/SigmaUSD): SigmaUSD protocol discussion group
- [t.me/ErgoRaffleAlerts](https://t.me/ErgoRaffleAlerts): Dedicated raffle update alerts channel
- [open.spotify.com/show/514V9XfuvkagmH1yCt84qK](https://open.spotify.com/show/514V9XfuvkagmH1yCt84qK): Ergo Podcast (audio format)
- [twitter.com/HouseofChimera/status/1762864946759508345](https://twitter.com/HouseofChimera/status/1762864946759508345): Overview of Ergo core features
- [twitter.com/chottyksv](https://twitter.com/chottyksv): Chris V (community member) Twitter
- [twitter.com/CometMooning](https://twitter.com/CometMooning): Comet token community tracking
- [twitter.com/RosenBridge_erg](https://twitter.com/RosenBridge_erg): Rosen Bridge official updates
- [twitter.com/IOHK_Charles](https://twitter.com/IOHK_Charles): Charles Hoskinson (IOG) endorsement of Ergo
- [twitter.com/LiliumErgo](https://twitter.com/LiliumErgo): Lilium (community project) updates
- [ergo.aap.cornell.edu/graphql](https://graphql.ergo.aap.cornell.edu): GraphQL endpoint (qx() provided alternative)

---

## Unresolved Questions

- **SigmaUSD Manipulation Mitigation**: Multiple proposals (per-epoch limits, time locks, dividend mechanisms) discussed but no consensus on preferred approach. @kushti_ru acknowledged trade-offs but deferred design decision. [msg#478376, msg#478392-412]

- **Raffle Excess Fund Handling**: If ERG price continues rising before raffle closure, how should surplus above 28,000 ERG target be allocated (EF treasury, refund to contributors, fund next listing)? Discussion acknowledged but no formal decision. [msg#478950-965]

- **Raffle v2 Fee Structure**: @MHS_SAM raised questions about 5% service fee justification when EF/Sigmanauts may hold equity in raffle v2 tokens—no resolution provided. [msg#479017]

- **Sub-Blocks Development**: @Ian Lee asked about sub-block progress; no substantive update beyond mention of testnet discussions planned post-Ergoversary. [msg#479366-368]

- **BearWhale Identity & Mitigation**: Community debated whether BearWhale is early miner or separate actor; proposed coordinated "good whale" counter-positioning but no mechanism implemented. Identity unconfirmed; Mewbie provided wallet analysis but no doxxing. [msg#478484-539]

- **Ledger Wallet ETA**: New SDK port in progress but no timeline given for release. [msg#478270]

- **SigmaRSV Long-Term Viability**: @kushti_ru recommends short-term speculation only, but community debate over whether protocol should support longer-term holding remains open. [msg#478722-723]