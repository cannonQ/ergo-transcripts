# Ergo General Chat — 2024-W50 Summary

## Key Topics Discussed

- **Quantum Computing & Cryptographic Resilience**: Extensive discussion of Google's Willow quantum computer announcement and its implications for blockchain security. kushti clarified that Ergo's PoW consensus is quantum-secure (unlike PoS systems), but digital signature schemes face future risk. The conversation centered on timeline uncertainty and perception risk rather than imminent technical threat. (@kushti, msgs#531754–532025, 2024-12-09 to 2024-12-11)

- **Wallet Improvements & Chained Transactions**: Community requested support for chained transactions in Ergo Wallet and mobile wallet development. Minotaur Wallet does not yet support transaction chaining; indexed node preference recommended for better mempool reliability. (@HQΣr, @Unknown, @E M, msgs#531564–531572, 2024-12-09)

- **Post-Quantum Signature Migration**: kushti discussed NIST-standardized post-quantum signature schemes and their blockchain overhead. All major options present size/speed tradeoffs; Ergo could pursue a post-quantum sidechain exodus path if needed. (@kushti, msgs#531864–531927, 2024-12-10)

- **Storage Rent & Box Consolidation**: Technical clarification that ~100 UTXO boxes is a practical consolidation threshold; storage rent poses no issue for 4 years, but node software can struggle with very large box counts. (@cannon_q, @cafebedouin.org, msgs#533081, 533085, 2024-12-15)

- **ErgoSanta & MewFinance Ecosystem Growth**: MewFinance launched ErgoSanta (blockchain Santa/wishes dApp), MewFund (community liquidity bootstrapping), and MewMart (now with Gluon support). MewDex expanded verified token support via Rosen Bridge asset list. (@HQΣr, msg#531740, 2024-12-09)

- **Spectrum SDK & DEX Development**: Dexy AMM contracts merged into Spectrum SDK; TradeHouse raised funds for order book + AMM liquidity integration. (@Ergo NEWS, msg#531740, 2024-12-09)

- **DuckPools v2 Framework & Multi-Asset Collateral**: DuckPools v2 enables multiple assets as loan collateral via SmartReserves smart contract layer. Future DEX upgrade (multi-asset single-step trades) needed for full feature viability; timeline undefined but parallel development planned. (@kushti, msg#532061, 2024-12-11)

- **Paideia DAO Fee Reduction Passed**: Paideia governance proposal to reduce DAO creation fee from 50,000 to lower amount, and proposal creation fee from 500 to lower amount, passed with 99.3% YES (383.89B YES / 2.75B NO). (@kushti, msg#532133, 2024-12-11)

- **ErgoPay Server Architecture**: Clarification that "ErgoPay server" is an unsigned transaction server (HTTP + Redis/DB backend) that serves transactions too large for QR codes. (@Luivatra, msg#531644, 2024-12-09)

- **ErgoHack 9 Winners Announced**: Satergo Offline Vault (1st), Stable Benefaction Platform (2nd), Last Byte Bar (3rd). Minotaur Wallet received special recognition. Videos released on Ergo YouTube channel. (@Ergo NEWS, msg#531854; @Andy L, msgs#532087–532097, 2024-12-10 to 2024-12-11)

- **Sigma 6.0 Sub-Blocks Development**: kushti confirmed 6.0 code complete and under polish/testing; updated EIP and core sub-blocks code expected this month (December 2024). Sub-blocks testnet planned with community participation encouraged. (@kushti, msgs#531949, 532018, 2024-12-10 to 2024-12-11)

- **Ergo Foundation Grant for Mining Ecosystem**: EF approved $24,000 grant for Comprehensive Ergo Mining Ecosystem Development & Community Expansion over 12 months, focusing on infrastructure decentralization and education. (@Ergo NEWS, msg#531740, 2024-12-09)

- **SigUSD Adoption & Yield Strategy**: Discussion of 25% APY available via DuckPools, SigUSD expansion campaign, and potential on-ramp via Rosen Bridge → Nautilus → Spectrum → SigmaUSD.io → ErgoMixer → DuckPools deposit. Key challenge: onboarding centralized stablecoin users to non-custodial alternatives. (@The Horticulturalist, msgs#532510–532529, 2024-12-13)

- **AI-Powered Content Creation**: Community experimenting with NotebookLM for generating podcast-style audio from Ergo manifesto and technical documents. (@TMR.ΣRG, msgs#532183–532227, 2024-12-11 to 2024-12-12)

- **Ergo Threads Presence**: Ergo now on Threads social platform (@ergo_platform). (@Unknown, msg#532203, 2024-12-11)

---

## Important Decisions or Announcements

- [@kushti, msg#531545, 2024-12-09]: Published forum article "Money Ownership In The Age Of Programmable Money" as draft for upcoming Ergo Book; seeking contributor feedback and community polish.

- [@Ergo NEWS, msg#531740, 2024-12-09]: Ergo Ecosystem Weekly Update summary—MewFinance extensions, Nautilus v0.15.0 released, Dexy AMM merged into Spectrum SDK, $24K mining grant approved, TradeHouse funding raised, Sigma 6.0 testnet milestone approaching.

- [@kushti, msg#532133, 2024-12-11]: Paideia DAO fee adjustment proposal passed: YES 99.3% (383.89B), NO 0.7% (2.75B).

- [@Andy L, msg#532087 to 532097, 2024-12-11]: ErgoHack 9 video releases: Satergo Offline Vault, Bene (Stable Benefaction), Last Byte Bar posted; remaining project videos coming.

- [@kushti, msg#531949, 2024-12-10]: Sigma 6.0 polish/testing phase; sub-blocks code and EIP expected completion this month (December).

- [@qx(), msg#532323 to 532324, 2024-12-12]: Weekly AMA scheduled with kushti and Armeanio; "see you soon!" announcement.

---

## Technical Q&A Worth Preserving

- **Q** (@Patato, msg#531668): How do I calculate Base64 text file size in a UTXO box? Does a 3 KB Base64 file weigh the same in a box, or is there conversion?  
  **A** (@cafebedouin.org, msg#532136): SafeW has ErgoMixer links, but it still requires local execution. Easier to run ErgoMixer directly.

- **Q** (@Unknown, msg#531564): Ergo Wallet needs chained transactions—ability to send multiple transactions sequentially without waiting.  
  **A** (@HQΣr, @E M, msg#531566-531569): Minotaur does support some chaining, but fails frequently. Currently Minotaur does not fully support chained transactions. Indexed node preference improves reliability (@Luivatra, msg#531572).

- **Q** (@Unknown, msg#531577): Switched to indexed node for chained transactions; haven't tested yet.  
  **A** (@Luivatra, msg#531572): Mobile wallets should prefer indexed nodes only; Explorer has dodgy mempool, causing chained transaction failures.

- **Q** (@cafebedouin.org, msg#531618): Is there a generic ErgoPay server (like Explorer) that doesn't require each project to host a backend?  
  **A** (@Luivatra, msg#531644): "ErgoPay server" is an unsigned TX server (HTTP + Redis/DB). Unsigned transactions are often too large for QR codes, so the QR points to a URL serving the actual unsigned transaction. This is typically an HTTP server with backend storage.

- **Q** (@cafebedouin.org, msg#531627): Can I modify SigmaFi front-end to use their ErgoPay backend?  
  **A** (@cafebedouin.org, msg#531627): Question beyond technical depth; likely choice made by project developers.

- **Q** (@Nabz, msg#531818): Can ErgoMixer be integrated into a wallet app?  
  **A** (@Glasgow, msg#531820): ErgoMixer is integrated into SafeW but requires local execution. SigmaJoin is the answer for non-local operation (https://docs.ergoplatform.com/eco/sigmajoin/).

- **Q** (@Unknown, msg#532135): Is ErgoMixer integrated into any wallet like Satergo?  
  **A** (@cafebedouin.org, msg#532136): SafeW has links to ErgoMixer but still requires local execution. (@kushti, msg#531865): SafeW has mixing support; ErgoMixer can be considered a wallet with minting/redeeming SigUSD / SigRSV, stealth addresses, etc.

- **Q** (@Unknown, msg#532299): How to track TVL of Rosen assets on chains outside of Ergo?  
  **A** (@cannon_q, msg#532300): Use app.rosen.tech.

- **Q** (@Unknown, msg#532603-532617): GPU DAG size for Ergo mining; will 4GB cards become obsolete?  
  **A** (@Unknown, msgs#532605-532617): Memory table exceeded 4GB a while back. Estimate: DAG reaches limits around 2026–2027 per minerstat.com DAG calculator (https://minerstat.com/dag-size-calculator). Try and find out if your card handles it; no guarantee.

- **Q** (@Unknown, msg#532650): DAG size projections for Ergo CUDA miners?  
  **A** (@Unknown, msg#532650): ~4/14/2026 estimated based on growth rate.

- **Q** (@DrTwentyOne, msg#532661): Where to find mining setup info, best hardware for Ergo?  
  **A** (@Glasgow, msgs#532662-532663): See https://docs.ergoplatform.com/mining/setup/join/ and join @ergo_mining Telegram.

- **Q** (@Richi, msg#532530-532533): Can ergo.watch exchange price charts add longer time scales (90 days, 1 year, lifetime) instead of just 30 days?  
  **A** (@Chris, msg#532537): Check ergo.watch/charts under exchanges section for available timeframes.

- **Q** (@HelixEvo, msg#532836): Best way to loan off BTC currently?  
  **A** (@cannon_q, msg#532837-532838): duckpools.io; deposit BTC (wrapped via Rosen Bridge via app.rosen.tech) and wait for borrowers.

- **Q** (@Ace, msg#532264): Can Rosen Bridge bridge USDT and USDC in addition to BTC?  
  **A** (Unresolved; no direct answer provided in chat.)

- **Q** (@A, msg#532308): Where can I buy Ergo?  
  **A** (@kushti, msg#532310-532312): Check ergoplatform.org or CoinGecko. Also check rserg in addition to ergo on CoinGecko.

- **Q** (@HelixEvo, msg#533056): Anyone still developing the Discord tipper bot?  
  **A** (Unresolved; ErgoTipBot in Telegram operates; Discord bot status unclear.)

---

## Links Shared

- [https://www.ergoforum.org/t/money-ownership-in-the-age-of-programmable-money/5018]: kushti's forum article on programmable money ownership; draft for Ergo Book.

- [https://eprint.iacr.org/2018/213]: Post-quantum crypto migration paper shared by kushti.

- [https://eprint.iacr.org/2021/715.pdf]: Horus keyless wallet scheme (Witness Encryption based) discussed by kushti.

- [https://blog.cloudflare.com/another-look-at-pq-signatures/]: Comparison of post-quantum signature schemes; kushti notes all options suboptimal for blockchains.

- [https://eprint.iacr.org/2019/501.pdf]: Recent k-sum problem hardness result in quantum computing context.

- [https://mewfinance.com/]: MewFinance ecosystem (DEX, MewMart, MewDex, MewFund).

- [https://fund.mewfinance.com/contribute]: ErgoSanta community funding campaign.

- [https://sigmashop.net/]: Sigma Shop (not explicitly linked but referenced for Mac Pro 65 ERG sale).

- [https://ergoauctions.org/artwork/30550c65f897ceb37beeb1a71d616d85c8740ce3d7fb16f9125e7af19b6b41cd]: Ergo Auctions NFT art platform (Maritsa Art #30).

- [https://app.rosen.tech/]: Rosen Bridge asset tracking and TVL monitoring.

- [https://duckpools.io/]: DuckPools v2 lending/borrowing platform.

- [https://ergo.watch/charts]: Ergo price monitoring with exchange data.

- [https://minerstat.com/dag-size-calculator]: DAG size calculator for GPU mining projections.

- [https://docs.ergoplatform.com/mining/setup/join/]: Official Ergo mining setup documentation.

- [https://docs.ergoplatform.com/eco/sigmajoin/]: SigmaJoin documentation for non-local mixing.

- [https://notebooklm.google.com/]: Google NotebookLM for AI podcast generation from documents/links.

- [https://www.youtube.com/watch?v=2cV0V_GOX5Q]: Weekly AMA livestream (kushti & Armeanio).

- [https://www.youtube.com/watch?v=fk8ZFvNFDYc]: kushti video on free banking and ChainCash.

- [https://youtu.be/UyoFBn3-v9w]: Satergo Offline Vault (ErgoHack 9 winner).

- [https://youtu.be/KYdE_jiDq80]: Bene / Stable Benefaction Platform (ErgoHack 9 2nd place).

- [https://youtu.be/C6U6W48Noq8]: Last Byte Bar (ErgoHack 9 3rd place).

- [https://youtube.com/playlist?list=PL8-KVrs6vXLSLB1xnuL62EJ3jhbZtoG9L]: Ergo YouTube playlist (all ErgoHack 9 videos).

- [https://github.com/spectrum-finance/ergo-dex-sdk-js/pull/45]: Dexy AMM contracts merged into Spectrum SDK.

- [https://hq3r.medium.com/bootstrapping-cross-chain-liquidity-on-ergo-c2db5b4e271d]: HQer & Richie proposal on cross-chain liquidity bootstrapping.

- [https://rosen.tech/]: Rosen Bridge official site.

- [https://www.pattern.global/]: Pattern Team (formerly Microflow) site.

- [https://snapshot.box/#/s:hbot-ncp.eth/proposal/0xfadaff16d98d15f7ac87861ab6bd6eb7d3c2c6533cbc3b242992563aa1569c48]: HummingBot community proposal (Pattern Team + Rosen Bridge Ergo Connector).

- [https://ergoraffle.com/raffle/show/d4437501a3900893d375c253572047deae062f5a037