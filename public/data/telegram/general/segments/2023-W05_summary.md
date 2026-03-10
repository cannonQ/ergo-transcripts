---
title: "Ergo General Chat — 2023-W05"
date_start: "2023-01-30"
date_end: "2023-02-05"
type: telegram_weekly
channel: general
week: "2023-W05"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2023-W05 Summary

## Key Topics Discussed

- **DuckPools lending platform**: Pool-based lending where lenders deposit ERG into shared pools and borrowers collateralize loans. Contrasts with peer-to-peer models like SigmaFi. IDO running on ErgoPad with staker round contributions closing Feb 9.

- **SigmaUSD (SigRSV/SigUSD) mechanics**: Deep explanation of reserve ratio dynamics—SigRSV is a claim on minted SigUSD; ratio changes affect holder value. More SigUSD minting dilutes SigRSV; price of ERG and reserve ratio movement are key factors. Entry/exit timing and reserve ratio monitoring critical to profitability.

- **Dexy Protocol design**: Stablecoin pegged to any asset (USD, gold, etc.) without a reserve token like SigRSV. Uses Liquidity Pool with oracle feedback—minting allowed when oracle price > LP price; swapping incentivized when LP < oracle. No trusted setup required; arbitrage keeps peg.

- **Rosen Bridge status**: Memory leak in Sigma Rust fixed via PRs from @greenhat. Private tests underway; public testnet deployment pending successful completion. UI for Watchers and Guards in early frontend development. Branches synced GitHub/GitLab for transparency. ErgoFaucet updated for test token distribution.

- **Minotaur Wallet bugs & EIP-42 multisig**: Three bugs found (macOS copy/paste, network deselection crash, xpub crash in multisig). Fixes releasing tonight/tomorrow. EIP-42 published allowing other wallets to add multisig support based on EIP-11.

- **Storage consolidation for miners**: Excessive boxes created by mining payouts cause wallet/dApp failures. Solutions: send consolidation txs to own address in batches, use Ergo Mobile Wallet's consolidation dApp weekly, or set higher mining pool payouts.

- **Lending vs. staking**: Collateralized lending (DuckPools, SigmaFi) offers non-taxable leverage vs. selling crypto. Borrow stables against ERG, buy more ERG with borrowed funds (leverage), or use for legitimate borrowing without credit checks. SigmaFi uses any token (including NFTs) as collateral; DuckPools requires ERG collateral.

- **Chainlink partnership for Palmyra**: Using proof of reserve and Chainlink's oracle network for on-chain warehouse receipts in trade financing. IoT devices (weight sensors, cameras, motion sensors) provide continuous proof-of-existence for commodities. Not zero-sum with other oracles; plan to build native Ergo oracles from raised capital.

- **ErgoNames (Ergonames)**: Ergo's version of Cardano's ADAhandle. Account verification via on-chain handle ownership. Early-stage project with active development; minting/reservation mechanics TBD.

- **Spectrum DEX liquidity & Dexy Gold**: SigUSD/ERG largest pool on Spectrum. Oracle Pool v2 running for Dexy Gold with GORT rewards. Emphasis on composability—Spectrum pools shareable with other protocols.

- **Speed improvements & block time**: Community discussion of faster blocks/reduced block time. Considerations: block height vs. timestamp-based logic, difficulty adjustments, emission contracts. 6.0 testnet available for parameter tweaking; interested developers should DM @kushti.

- **Order book DEXes (Trade House/Auction House)**: Peer-to-peer order books allow partial fills, full price transparency, full slippage control vs. AMMs. Partial order fills create refund boxes with leftover assets. Contrast with Spectrum (AMM); both models valid for different use cases.

- **Sidechaining & merge mining**: BIP-301 style improvements for trustless relay and sidechain data delivery. Mainchain miners rewarded for delivering sidechain data; potential for CPU/GPU mining on sidechains while earning mainchain block rewards.

- **Bulletproofs & zero-knowledge proofs in ErgoScript**: Bulletproofs (compact Sigma protocols, no trusted setup) usable for range proofs and generic statements. ErgoScript verification possible; enables verifiable credentials, privacy-preserving contracts. Opens "whole new world" of zero-knowledge statement combinations with Ergo contracts.

- **PoW security philosophy**: Ergo's conservative design choices documented by @kushti. PoW preferred over PoS for decentralization; no validator set concentration risk. Mining accessible to variety of hardware.

- **DeFi industry concerns**: Unrealistic APY claims, regulation, centralized exchange fee structures. Fee estimation API in Ergo node exists but underutilized by dApps. Spam protection via minimum propagation fee rates in node config.

- **Ergo's technical differentiation**: NIPoPoWs, light client support with full security, discrete log-based zero-knowledge proofs, ErgoScript Turing-completeness, multi-stage contracts, settlement layer capability. Positioned as "excellent evolution" of PoW + smart contracts (not revolutionary per community debate).

- **Social media dApp**: @Jerry building DeFi-focused social media on Ergo (similar to Twitter/Facebook). Planning tipping bot integration, fund sending for services, Ergonames verification, user feedback on features.

---

## Important Decisions or Announcements

- [@Armeanio, msg#366126, 2023-02-02]: Ergo Weekly Update & AMA live stream announced for Thursdays 1 PM UTC with YouTube + Twitter Spaces broadcast.

- [@CW, msg#366023, 2023-02-01]: Weekly developer update stream scheduled with preparation for community questions.

- [@chrom, msg#366036, 2023-02-01]: ErgoHack VI: Cypherpunk Finance registration open; weekly updates Thursdays 13 UTC.

- [@Foeniculum NFTs, msg#366195, 2023-02-02]: Cross-chain stablecoin space with Cardano projects (Indigo, Mehen) confirmed; seeking Ergo speakers for SigUSD/Dexy discussion.

- [@Unknown, msg#366301, 2023-02-03]: DuckPools staker round on ErgoPad closing in 10 hours (form closes Feb 9).

- [@Unknown, msg#366563, 2023-02-05]: Ergo Weekly Developer Update published covering UTXO Set Snapshot, NIPoPoWs, Oracles v2, Dexy, Sigma Rust, Rosen Bridge, Minotaur Wallet.

- [@qx(), msg#366499, 2023-02-04]: Sigmanauts video covering Minotaur multisig setup, SigRSV/USD/Dexy clarification, community marketing update (editing in progress).

---

## Technical Q&A Worth Preserving

- **Q** (@Man ish, msg#365624): How do I convert seed phrase to private key for Zelcore wallet?
  **A** (@Aberg Satergo dev, msg#365628): Zelcore is custodial (exchange-like); seed phrase is secret and shouldn't be shared. Non-custodial wallets generate private keys from seed.

- **Q** (@Man ish, msg#366086-366089): Wallet consolidation for miners—how to send all ERG to self?
  **A** (@Gazza, msg#366090-366099): Do multiple smaller transactions to own address instead of one large tx to avoid input limits. Ergo Mobile Wallet has box consolidation dApp—run weekly to prevent mining box accumulation.

- **Q** (@HelixEvo, msg#365716): Difference between DuckPools and Sigma Finance?
  **A** (@qx(), msg#365718): DuckPools = pooled lending (all lenders into big pool); SigmaFi = P2P (specific loan proposals). Both can involve shorting if borrowing stables against ERG.

- **Q** (@HelixEvo, msg#365720): If loan 1 ERG, convert to USDT, but ERG drops—am I liquidated?
  **A** (@qx(), msg#365721): Can happen both ways; depends on collateralization model. SigmaFi uses date-based liquidation; DuckPools uses ratio-based.

- **Q** (@HelixEvo, msg#365926): Why post more collateral than borrowed amount (overcollateralization)?
  **A** (@HQΣr, msg#365928): For short-term trading leverage; also for non-taxable borrowing (vs. selling assets).

- **Q** (@TMR.ΣRG, msg#365946): Why borrow stables against crypto instead of swapping?
  **A** (@TMR.ΣRG, msg#365985-365953): Borrowing is not a taxable event; keeps your ERG exposure while accessing USD. Leverage strategy: borrow stables, buy more ERG, profit on upside (and downside).

- **Q** (@David, msg#365869): If lender in ErgoLend loans 10k ERG @ 5%, what if interest can't be paid?
  **A** (@Unknown, msg#365870): ErgoLend is uncollateralized; no repayment = loss. SigmaFi (collateralized, date-based) allows liquidation. DuckPools (collateralized, ratio-based) allows liquidation if collateral drops below threshold.

- **Q** (@Zack Balbin, msg#365850): Ergonames progress?
  **A** (@Zack Balbin, msg#365850): Successfully minting + AVL tree insertion in same TX. Hardening contracts + backend resilience needed; no error handling currently (system crashes on error).

- **Q** (@gg, msg#365848): Does SigmaFi support liquidations?
  **A** (@Unknown, msg#365849): Liquidation based on repayment date; collateral liquidated if not repaid before deadline.

- **Q** (@eπ, msg#366171): How does Dexy work (simple explanation)?
  **A** (@qx(), msg#366192): Mint Dexy when oracle price > LP price; sell to LP. Reverse: swap ERG for Dexy when LP < oracle, sell back to LP when it catches up. No reserve token (unlike SigRSV).

- **Q** (@eπ, msg#366207): When minting Dexy—oracle higher or lower than LP?
  **A** (@qx(), msg#366209-366211): Mint when oracle > LP price. Minting happens via emissions contract (one-way swap, ERG → Dexy).

- **Q** (@qx(), msg#366041-366044): What is SigRSV really?
  **A** (@qx(), msg#366041-366044): SigRSV = claim to SigUSD pile. More SigRSV minted = less your SigRSV worth. More SigUSD minted = more your SigRSV worth. Essentially a call option on SigRSV:SigUSD ratio improving before you exit.

- **Q** (@Gabriel, msg#366024): Do SigRSV holders receive fees from SigUSD ↔ ERG conversions?
  **A** (@qx(), msg#366025-366041): No; fees added to ERG reserve. SigRSV value depends on reserve ratio changes—only profitable if you exit before others and ratio improves.

- **Q** (@MatrixMaarten, msg#366170): How to sign transaction with Ledger in Nautilus?
  **A** (@Foeniculum NFTs, msg#366180-181): Ask in Nautilus Telegram (https://t.me/NautilusWallet).

- **Q** (@Unknown, msg#366515): How to move Flux from CEX to Nautilus on Ergo?
  **A** (@qx(), msg#366519): Flux on Ergo is parallel asset (not wrapped). Must swap in Flux wallet for Ergo version first, then send to Nautilus.

- **Q** (@Hassen, msg#366529): Is Ergo compatible with EVM or IBC chains?
  **A** (No direct answer given; implies Rosen Bridge for cross-chain, not native EVM/IBC).

- **Q** (@eπ, msg#366450-366451): If wrapping ADA with Rosen Bridge, what happens to staking rewards?
  **A** (Unresolved; @qx() says "need to look into it").

- **Q** (@Unknown, msg#366544-366549): If bullish on ERG, do I buy SigRSV?
  **A** (@qx(), msg#366546): More complex; need to exit before others, believe SigUSD will be minted while you hold SigRSV, and avoid too many other SigRSV entrants. High-risk timing strategy. Safer to just hold ERG.

---

## Links Shared

- [https://www.ergoforum.org/t/know-your-assumptions/4198]: Security assumptions in Bitcoin and Ergo by @kushti (Jan 31, 2023).

- [https://sigmafi.app/#/]: SigmaFi peer-to-peer lending platform (in public beta).

- [https://twitter.com/ERGnomes/status/1620777232817090565]: Rosen UI screenshots (described as "sexy").

- [https://ergopad.io/whitelist/duckpools/staker]: DuckPools staker round whitelisting & contribution form.

- [https://anchor.fm/thesigmacast/episodes/zenGate-Community-Call--Updates-e1u9ijm]: Sigmacast podcast episode: zenGate (Palmyra) Twitter Space audio.

- [https://m.youtube.com/watch?v=84hf8sOe5Cc]: Previous ErgoHack project (dumdumdum) referenced for social media dApp feature ideas.

- [https://github.com/kii-dot/dumdumdum]: GitHub repo for prior social media dApp prototype.

- [https://www.duckpools.io/]: DuckPools landing page.

- [https://docs.ergoplatform.com/eco/dexy/]: Dexy documentation (older but referenced for protocol overview).

- [https://spectrum.fi/]: Spectrum DEX for SigUSD minting/swapping.

- [https://sigmausd.io/#/stablecoin]: Alternative SigUSD minting interface.

- [https://tokenjay.app/app/#ageusd]: Another SigUSD/AgeUSD minting interface.

- [https://ergoplatform.org/en/blog/Earning-ERG-in-2023-and-Beyond/]: Blog post on passive income opportunities in Ergo.

- [https://youtu.be/JEliJ4K1CIA]: The Sigma Update (ep 10)—Minotaur multisig, SigRSV/Dexy, community update.

- [https://youtu.be/rvnl5tMQ-pY]: Hash It Out w/CW ft Noah & Armeanio—State of DeFi in Crypto.

- [https://youtu.be/uJdki_VeZmw]: Ergo Weekly Developer Update (Feb 5, 2023).

- [https://rss.com/podcasts/erg/]: Ergo podcast RSS feed.

- [https://ergohack.io/]: ErgoHack VI registration page.

- [https://youtube.com/live/g2EiYUe-QnU]: Weekly Update & AMA live stream (Feb 2, 2023).

- [https://twitter.com/i/spaces/1ynJOakWDgZKR]: Twitter Spaces link for weekly AMA.

- [https://t.me/Buddychatergo]: Telegram channel for BuddyChat social media dApp project.

- [https://t.me/NautilusWallet]: Nautilus Wallet Telegram support channel.

- [https://linktr.ee/duckpools]: DuckPools all links (Discord, Twitter, etc.).

- [https://ergoraffle.com/raffle/show/b312c002a0b1671a0089fabc2d1a028e5938d46b1b2180d7e480e760526408ce]: Ergo Raffle for ErgoHack VI fundraising.

- [https://github.com/ergoplatform/eips