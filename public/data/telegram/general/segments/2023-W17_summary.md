---
title: "Ergo General Chat — 2023-W17"
date_start: "2023-04-24"
date_end: "2023-04-30"
type: telegram_weekly
channel: general
week: "2023-W17"
source: telegram
message_count: 933
categories: [bridges, defi, wallet, ecosystem, governance, nft, mining, community, technical]
key_terms: [Rosen Bridge, beta launch, cross-chain, ERG-ADA, HOSKY, COMET, SigmaFi, TVL growth, loan requests, SigUSD demand, collateralization, Spectrum Finance, yield farming, SPF token, Cardano AMM planned, SigmaFi alerts, loan notifications, bond matching, interest rates, Ledger Live]
---
# Ergo General Chat Summary — 2023-W17
**Period:** 2023-04-24 to 2023-04-30  
**Message Count:** 933 | **Participants:** 58+

---

## Key Topics Discussed

- **Rosen Bridge Public Beta Launch**  
  Rosen Bridge beta went live at beta.rosen.tech supporting ERG/Comet (Ergo) and ADA/HOSKY (Cardano). Bridge fees are dynamic (1% minimum 2 ERG), configurable for real launch. RSN token will receive bridge fees as emissions to watchers and guard set.

- **SigmaFi Explosive Growth & Demand**  
  SigmaFi TVL reached $160k+ in 24 hours with 100+ ERG-denominated loan requests at 100% APR. SigUSD shortage emerged as demand far outpaced supply (~617k SigUSD in circulation, few hundred k locked on Spectrum). Community discussing need to unlock bank via RSV minting.

- **Spectrum Finance Yield Farming Launch**  
  Spectrum YF went live on Ergo; Cardano AMM and Spectrum Network planned next. Current APY ~30% on ERG/SPF farm. Offchain bots executing yield farming transactions (Rust-based, separate from AMM bots written in Scala).

- **SigmaUSD Stablecoin Mechanics & Proposals**  
  Dual Mint proposal floated: allow simultaneous SigmaUSD and SigmaRSV minting when collateralization ratio <400% without ratio slippage. Fee structure discussed (2% RSV mint fee considered for adjustment). SigmaUSD depegging to $1.03 on Spectrum due to high demand from SigmaFi borrowers.

- **Mining Difficulty & Block Time Discussion**  
  Ongoing debate about post-merge epoch adjustment (temporary vs. permanent). K1 mining pool getting ~5% of blocks; large miner entry/exit still causes block time variance. Ravencoin's Dark Gravity Wave (DGW) algorithm proposed as alternative. No formal proposal yet, discussion stage.

- **Multisig vs. Schnorr Signatures**  
  Question raised whether Ergo uses script-based multisig verification (Bitcoin OP_CHECKMULTISIG style) or key aggregation (Schnorr/MuSig). Not conclusively answered in chat.

- **Smart Contract & Zero-Knowledge Protocols**  
  kushti explained bulletproofs as trustless zero-knowledge alternative to SNARKs; Groth one-out-of-many and verifiable credentials could be used in Ergo contracts. Combining ErgoScript with zero-knowledge statements opens new privacy + execution possibilities without full data disclosure.

- **Ledger Live Developer Mode for Ergo**  
  Dev mode transactions >20 tokens may have issues; no ETA on production. Community reports dev mode works fine for testing; transition timeline uncertain.

- **Nautilus Wallet Improvements**  
  Burn warning added after user accidentally burned NFTs. Dev mode available; multisig support discussed.

- **Rosen Bridge Token (RSN) & Governance**  
  Guards chosen initially via bootstrap, later by existing guard set. Watchers require RSN stake for permit tokens. Guards must buy/lock significant RSN in multisig. Token utility: fees go to Rosen Fund, RSN emissions reward watchers/guards, liquidity added to pools for market depth.

---

## Important Decisions or Announcements

- [@CW, msg#384866, 2023-04-26]: **Poker Royale cross-chain tournament** announced for 2023-04-29 with $2000+ prize pool, 300 spots, free to join. Registration open at pokernow.club; Kadena mining club Discord for prize claims.

- [@Unknown, msg#384926, 2023-04-26]: **Rosen Bridge public beta live** at beta.rosen.tech; ERG↔ADA bridge operational with HOSKY (Cardano) and COMET (Ergo) test assets.

- [@Gazza, msg#385098, 2023-04-27]: **Spectrum Finance Yield Farming launched** 2023-04-28 09:00 UTC. Deposits open; farming programs active.

- [@Lee # TabbyPOS, msg#385028, 2023-04-27]: **Dexy created new Twitter account** @Dexy_Ergo; stablecoin project activity signaling.

- [@CW, msg#385773, 2023-04-29]: **SigmaFi alerts spike**: Multiple 100% APR loan requests fulfilled within minutes; TVL jumped 60% in single day ($100k → $160k).

- [@Armeanio, msg#385498, 2023-04-29]: **Dual Mint proposal** for SigmaUSD/SigmaRSV simultaneous minting when ratio <400%; increases minting flexibility without ratio slippage.

- [@Richi, msg#385782, 2023-04-29]: **SigUSD protocol enhancements planned**:  
  - Double mint (RSV + SigUSD) / double burn  
  - RSV mint cashback instead of fee  
  - 0% UI fee for direct SigUSD interaction in dApps (SigmaFi, DuckPools)

---

## Technical Q&A Worth Preserving

- **Q** (@dayumbbbb, msg#384822): "Does Ergo multisig work via script verification of multiple signatures, or Schnorr key aggregation (MuSig style)?"  
  **A** (No conclusive answer provided in chat)

- **Q** (@A, msg#385373): "On SigmaFi loans, can you pay back early or monthly, or must you wait until term end?"  
  **A** (@HQΣr, msg#385375-376): "You can pay back whenever you want, but in full. After term ends, lender must liquidate the bond from lending dashboard to release collateral. If you miss the block height deadline, you cannot pay back."

- **Q** (@kii, msg#384344): "Ledger Live developer mode reliability — are there hiccups in sending/receiving or just TX issues >20 tokens?"  
  **A** (@Me, msg#384345): "Dev mode works fine" (no detailed specifics on token limit issues).

- **Q** (@gg, msg#385987): "Rosen Bridge fee structure — why 2 ERG on 3 ERG minimum transfer?"  
  **A** (@qx(), msg#385993-996): "1% dynamic fee (min 2 ERG) + network fee. At 3 ERG, you receive 3 ADA on Cardano; 2 ERG covers fees. Gets better at higher transfers." (Clarified fee scales with amount sent.)

- **Q** (@Spencer, msg#384976): "ERG bridge to Cardano not showing in wallet after hours?"  
  **A** (@Spencer, msg#384977): Self-resolved after few minutes; asset appeared in Yoroi and Eternl wallets.

- **Q** (@Unknown, msg#385448): "What's the use case for ERG-collateralized ERG loans on SigmaFi without liquid staking?"  
  **A** (@qx(), msg#385455-456): "Leverage if you expect SPF > ERG; or price speculation. Possibly user error/misunderstanding."

- **Q** (@A, msg#385470-471): "SigmaFi loan risks asymmetrical — borrower profits if ERG moons, lender takes loss if ERG crashes?"  
  **A** (@Unknown, msg#385473): "Assumptions transparent; users knowingly accept trade risk. Price volatility is the only risk (no hidden mechanics)."

- **Q** (@Benny, msg#385522-523): "What was the lowest ERG price in bear market — $1.10 or $1.30?"  
  **A** (@lexymon, msg#385524): "Two higher lows printed on daily; $1.10 was the low so far."

---

## Links Shared

- [https://beta.rosen.tech](https://beta.rosen.tech): Rosen Bridge public beta (ERG↔ADA testnet).
- [https://ergcube.com/](https://ergcube.com/): Community dashboard for tokens, SigmaFi bonds, ecosystem tracking.
- [https://sigmafi.app](https://sigmafi.app): P2P lending protocol (loan requests, bonds, active loans).
- [https://t.me/SigmaFiAlert](https://t.me/SigmaFiAlert): SigmaFi Telegram alert channel (real-time bond notifications).
- [https://pokernow.club/mtt/poker-royale-QEc5ZRquX-](https://pokernow.club/mtt/poker-royale-QEc5ZRquX-): Cross-chain poker tournament registration.
- [https://twitter.com/paideiadao](https://twitter.com/paideiadao): Paideia DAO Twitter (governance & Cardano launch plans).
- [https://api.sigmaexplorer.org/swagger/index.html](https://api.sigmaexplorer.org/swagger/index.html): SigmaExplorer API documentation.
- [https://coinguides.org/ravencoin-difficulty-algorithm-dgw/](https://coinguides.org/ravencoin-difficulty-algorithm-dgw/): Dark Gravity Wave difficulty algo reference (mining discussion).
- [https://www.sevenseas.exchange/market/SIGUSD-USDT](https://www.sevenseas.exchange/market/SIGUSD-USDT): Seven Seas SigmaUSD↔USDT trading pair.

---

## Unresolved Questions

- **Mining difficulty adjustment**: Post-merge epoch length change intended as temporary or permanent? No consensus; proposal stage for DGW or alternatives. (@Unknown, msg#385568-605)
- **Multisig implementation**: Exact mechanism (script vs. Schnorr) not clarified in chat.
- **SigmaUSD supply bottleneck**: How to incentivize RSV minting to unlock bank and increase SigmaUSD circulation? Community flagged but no formal solution proposed. (@CW, msg#385818-819)
- **Direct loan links on SigmaFi**: UI feature request to share specific loan/order URLs; noted as UI limitation, no ETA. (@TMR.ΣRG, msg#385988)
- **Ledger Live Ergo integration**: Production ETA unknown; dev mode status unclear for long-term use. (@kii, msg#384353)
- **Mining algorithm vulnerability**: Can large miners still exploit variable block times at shorter intervals? Debate ongoing but no formal analysis shared. (@Unknown, msg#385605; @R, msg#385611)

---

## Notable Community Dynamics

- **SigmaFi adoption surge**: Rapid growth from ~$100k to $160k+ TVL in 24 hours driven by 100% APR loan requests and SigUSD scarcity. High-interest loans taken within minutes of posting.
- **Yield farming momentum**: Spectrum YF launch well-received; 30% APY early returns driving liquidity.
- **Cross-chain enthusiasm**: Rosen Bridge beta getting positive feedback; successful bridge tests reported (ERG→ADA→Cardano wallets).
- **Mining community engagement**: Discussion of difficulty adjustment proposals; interest in formal proposals but limited participation from core mining voices.
- **Developer capacity notes**: Aberg noted managing multiple projects (Satergo, jledger, Ergonnection, ergonodes.net, stratum4ergo library, custom programming language) — ecosystem scaling via distributed volunteer effort.