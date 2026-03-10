---
title: "Ergo General Chat — 2023-W36"
date_start: "2023-09-04"
date_end: "2023-09-10"
type: telegram_weekly
channel: general
week: "2023-W36"
source: telegram
message_count: 0
categories: [defi, technical, marketing, ecosystem, governance, mining, bridges, wallet, community, nft]
key_terms: [ergomixer, withdraw, transaction stuck, blocked mix, storage rent, demurrage, 4-year dormancy, miner revenue, Bitpanda, proof of work, staking misinformation, exchange listing, oracle-core v2.0.0, oracle pools, price oracles, Crux Finance, portfolio tracking, dApp aggregator, MVP, SigmaFi]
---
# Ergo General Chat Summary — 2023-W36

## Key Topics Discussed

- **Storage Rent Implementation**: Storage rent officially went live in July 2023. Users are charged 0.14 ERG for any UTXO that remains dormant for 4 years. Nautilus wallet now allows consolidation via the optimize wallet section. Miners can claim unspent boxes dormant for 4+ years as a new revenue stream. (@Glasgow, msg#427653; @DrTwentyOne, msg#427673)

- **Ergo Mixer (ErgoMixer) Issues**: User reported third mixing attempt stuck at round 11 with transaction generation blocked. Glasgow confirmed the problem and stated it would be fixed that day. (@Giufa, msg#427474-427476; @Glasgow, msg#427479)

- **Oracle Pools v2 Release**: Oracle Pools v2 stable release shipped. Discussions about GORT/ERG pool status and v2 reward distribution (running for Dexy Gold with GORT rewards). (@kushti, msg#428026; @Richi, msg#428123)

- **SigmaFi Lending Dashboard Caching**: User's lender dashboard didn't display active loan for hours despite transaction confirmed on-chain. Issue resolved after page refresh/cache clear, though root cause unclear since SigmaFi reads directly on-chain without indexer. (@qx(), msg#427930-428033)

- **Bitpanda Listing Inaccuracies**: Bitpanda incorrectly described Ergo as supporting staking and proof-of-stake in about page—marketplace material was incorrect. Correction needed on spotlight page alongside prices page. (@Flying Pig, msg#428213-428226; @Glasgow, msg#428223-428225)

- **Chainlink Partnership for Palmyra**: Palmyra (Zengate) integrating Chainlink oracles for proof-of-reserve and decentralized trade financing via on-chain warehouse receipts. Plans to build out native Ergo oracles as well. (@Armeanio, msg#428114-428311; Dan Friedman comments on integration details and ERC20 address confusion with exchanges)

- **Difficulty Adjustment & Mining Dynamics**: Discussion on Autolykos mining difficulty curve and pool-hopping behavior. Large entities enter at low difficulty, exit at high difficulty spikes, disadvantaging consistent miners. No consensus yet on protocol changes; miners would need to propose and implement via HF. (@rubens, msg#428638-428735; @qx(), msg#428644-428679)

- **AI-Generated Video Detection**: Community identified AI-generated narration in promotional Ergo video shared externally (hourone.ai suspected). Mouth-to-audio sync issues and unnatural pronunciation ("DeFi") were tells. (@Aberg, msg#427548-427579; @Flying Pig, msg#427577-427580)

- **Paideia MVP Testing**: Paideia closed private beta now accepting testers. Recent fixes: stake snapshot contract bug, reevaluation failure on quorum miss, and partial unstake prevention to avoid "profit sniping". Signup form available. (@Unknown, msg#428306; https://forms.gle/wvZjnR5Lxgydpuin8)

- **DuckPools Collateral Restrictions**: User questioned why DuckPools doesn't allow borrowing same asset as collateral (e.g., borrow ERG against ERG collateral). No liquidation risk in same-asset case but feature not supported. (@gg, msg#427976-427996)

- **ErgoHack VII Registration**: ErgoHack VII scheduled October 13-15, 2023 with 18K SigUSD prize pool. Registration open at https://ergohack.io/register/. (@Ergo NEWS, msg#428061)

- **Crux Finance Alpha MVP**: Crux Finance portfolio tracking and advanced charting for Ergo native tokens launched. Plans for dApp integration (Spectrum swaps, DuckPools, SigmaFi) and tax reporting subscription model (50% fees shared with CRUX holders). (@Unknown, msg#427510-427521; @Flying Pig, msg#427649)

- **Satergo Development**: Aberg working on Satergo. Channel mentions suggest ongoing wallet/dApp integration work. (@Aberg, msg#427548+)

- **Analog Ergo Atomic Swaps**: Deathgripson building EVM ↔ Ergo atomic swap CLI tooling to reduce code complexity and enable thorough security testing. Planned WebUI integration for ErgoHack. Full decentralized p2p rollout in progress. (@kushti, msg#428101)

- **ErgoPort Token Airdrop Tool**: mgPai's ErgoPy-based token transaction builder in development—accepts CSV (address, tokenid, amount), outputs pre-made Python file for airdrops. Public release planned with warnings. (@kushti, msg#428106)

- **NFT Collateral in SigmaFi**: First hodlERG3-backed SigmaFi loan appeared in market. 150 hodlERG3 (~$185 USD) + SHITCOIN KING token as collateral for 100 SigUSD (~$100 USD) loan at 10% APR/12 months. (@Unknown, msg#428460-428461)

- **Nautilus Refactoring & Machina Finance**: Nemo refactoring Nautilus for Google standard with CSS skins. Ongoing work on Machina Finance smart contracts. (@Armeanio, msg#428114)

- **Lithos Protocol Discussion**: Cheese (qx() alias context suggests) working on Lithos discussions—likely protocol or mining-related. (@Armeanio, msg#428115)

- **Community Ecosystem Picture Overhaul**: Lee TabbyPOS remaking Ergo ecosystem logos (~100+ logos remaining). Updates being added to shared Dropbox. (@Lee, msg#428152-428158)

- **Scammer Impersonation Wave**: Multiple fake "Glasgow" and "qx()" accounts attempted to DM users. qx() banned ~3-4 imposter accounts in one session. (@qx(), msg#427717-427830)

- **Browser Compatibility & Wallet Issues**: Chrome update broke app.spectrum.fi, hodlcoin.co.in, and sigmafi.app rendering. Clearing app data resolved issue. Nautilus not yet available on Microsoft Edge. Firefox recommended as alternative. (@Unknown, msg#427636-427652; @qx(), msg#427638-427639)

---

## Important Decisions or Announcements

- [@Glasgow, msg#427479, 2023-09-04]: "Problem isn't on your end. Should be fixed today" — ErgoMixer transaction stuck at round 11 confirmed as backend issue with imminent fix.

- [@Glasgow, msg#427509, 2023-09-04]: ErgoMixer confirmed working again after fix.

- [@Ergo NEWS, msg#427515, 2023-09-04]: StealthEX AMA with kushti (Alex Chepurnoy) scheduled Sept 5 at 3 PM UTC on Twitter Spaces, with 100 ERG contest.

- [@kushti, msg#428026, 2023-09-06]: Oracle Pools v2 stable release shipped — https://github.com/ergoplatform/oracle-core/releases/tag/v2.0.0

- [@Ergo NEWS, msg#428061, 2023-09-06]: ErgoHack VII announced — October 13-15, 2023, 18K SigUSD prize pool, registration open.

- [@Glasgow, msg#428155, 2023-09-07]: Confirmed Ergo Foundation received most of requested funding in ERG, possibly some USD as well; multisig being considered.

- [@Glasgow, msg#428223, msg#428225, 2023-09-07]: Bitpanda about page corrected hours before Flying Pig's report; correction on spotlight page may still be pending (cache issue on app/older URLs).

- [@Unknown, msg#428306, 2023-09-07]: Paideia MVP bug fixes released: stake snapshot contract optimized, reevaluation failure on quorum fixed, partial unstake now impossible to prevent profit sniping.

- [@Ergo NEWS, msg#428170, 2023-09-07]: Bitpanda listing announced — major European on/off ramp for ERG.

- [@qx(), msg#428695, 2023-09-09]: Sigmanauts Zoom meeting every Sunday at 3 PM UTC for mining/ecosystem discussions — https://cornell.zoom.us/j/96191098460?pwd=RkJFY1kybWQ5WS9pRHFCMnRmdUFOUT09

---

## Technical Q&A Worth Preserving

- **Q** (@Ahmad, msg#427478): "I need a contract address $ergo to add it to the Trust wallet"
  **A** (@Glasgow, msg#427480): "No contract address, we are a layer 1" — Ergo is a native layer-1 blockchain, not an EVM token.

- **Q** (@Giufa, msg#427476): ErgoMixer transaction stuck at "running / Transaction being generated" for days after "withdraw now" at round 11.
  **A** (@Glasgow, msg#427479): Backend issue, fixed same day.

- **Q** (@Unknown, msg#427636): "Google Chrome just did an update now my top Ergo sites app.spectrum.fi hodlcoin.co.in and sigmafi.app won't load correctly"
  **A** (@qx(), msg#427638-639): "clear app data 'from all time' in chrome settings and try again" — cache clear resolved rendering issues.

- **Q** (@DrTwentyOne, msg#427673): "Are you sure any user can avoid [storage rent] by performing transaction? It seems to me a wallet about one year old was charged when the 4 year period came up"
  **A** (@Glasgow, msg#427687): "Changing the period would require a HF, a change was proposed in the first year but didn't gain support" — 4-year dormancy period is hard-coded and would require hard fork to modify.

- **Q** (@Unknown, msg#427741): SigmaFi loan showing on-chain but not appearing in dashboard after 2 hours.
  **A** (@qx(), msg#427957-428033): "i see the tx with the 1200 sigusd going to the person and their 2000 ERG collateral going into the smart contract" — on-chain confirmed. Root cause unclear; suggested page cache issues, wallet disconnect/reconnect, incognito mode. Issue eventually resolved after several hours. Note: SigmaFi reads directly on-chain without precached indexer, so delay source remains unknown.

- **Q** (@gg, msg#427977): "Why duck pools doesn't allow borrowing in same asset than collateral? If u were bullish I'd want to borrow more Ergs against my Ergs"
  **A** (@gg, msg#427996): "Yeah but I'm thinking more like borrowing Ergs against Ergs so I don't have to worry about liquidation cause price fluctuates the same" — Feature request noted; no liquidation risk in same-asset lending but not yet implemented in DuckPools design.

- **Q** (@Unknown, msg#427819): How to verify SigmaFi transaction without original explorer link?
  **A** (@qx(), msg#427833-849): Step-by-step: (1) Click wallet name → Settings → copy EXPLORER URL → paste in browser. (2) Copy receive address from Nautilus. (3) Paste address in explorer search. (4) Scroll to last TX, click +1 to expand outputs. (5) Verify SigUSD sent.

- **Q** (@rubens, msg#428638-643): "Is there currently a debate about the problem with the difficulty or has it been decided to leave it as is? Large pools enter at low difficulty, leave at high spikes."
  **A** (@qx(), msg#428644-679): "What would your suggestion be ser? Much slower curve than this first correction (extending the reaction over more epochs)?" → "@qx(): I haven't heard any solutions or follow through from miners" → "Miners could change the min tx fee, and work towards a solution to prevent what you explained above." Consensus: This is standard PoW chain-hopping behavior. Miners have tools to change it but lack incentive. Pool operators could propose changes. Ergo developers prioritizing other work (reference node improvements, Dexy Gold, SigmaFi, Indexed node).

- **Q** (@Ian Lee, msg#428436): "Is storage rent already implemented by the mining pool?"
  **A** (@Unknown, msg#428438): "Not yet unfortunately. Ive been pinging several pools and it is not high priority for them it seems" — Pools have not prioritized claiming rent from dormant boxes despite July 2023 activation.

- **Q** (@Pulsarz, msg#428418-427): User had slow/wonky GQL endpoint; moved to new GQL but still slow. CORS issues on some instances?
  **A** (@Pulsarz, msg#428424-426): "Did he update yet? To the new gql? And still wonky? What is it?" → "some instances still have cors issues I think... Didnt test myself... And still slow... But cors shouldnt matter for nautilus" — CORS and speed issues persist on some GQL instances; Nautilus unaffected.

---

## Links Shared

- [https://t.me/GuapSwapCommunity/373](https://t.me/GuapSwapCommunity/373): GuapSwap v2 active development notice.

- [https://ergoplatform.substack.com/p/ergo-monthly-wrap-up-august](https://ergoplatform.substack.com/p/ergo-monthly-wrap-up-august): Ergo August 2023 monthly wrap-up.

- [https://www.youtube.com/watch?v=FOLjknHx5GI](https://www.youtube.com/watch?v=FOLjknHx5GI): Weekly Ergo update and AMA live stream (Sept 7, 1 PM UTC).

- [https://ergohack.io/](https://ergohack.io/): ErgoHack VII info and registration (Oct 13-15, 2023).

- [https://forms.gle/wvZjnR5Lxgydpuin8](https://forms.gle/wvZjnR5Lxgydpuin8): Paideia closed private beta MVP tester signup.

- [https://github.com/ergoplatform/oracle-core/releases/tag/v2.0.0](https://github.com/ergoplatform/oracle-core/releases/tag/v2.0.0): Oracle Pools v2 stable release.

- [https://github.com/duckpools/off-chain-bot/tree/master](https://github.com/duckpools/off-chain-bot/tree/master): DuckPools off-chain bot updated for simplified setup.

- [https://cornell.zoom.us/j/96191098460?pwd=RkJFY1kybWQ5WS9pRHFCMnRmdUFOUT09](https://cornell.zoom.us/j/96191098460?pwd=RkJFY1kybWQ5WS9pRHFCMnRmdUFOUT09): Sigmanauts weekly Zoom meeting (Sundays 3 PM UTC).

- [https://medium.com/@theergotimes/ergo-platform-updates-9b5207e33138](https://medium.com/@theergotimes/ergo-platform-updates-9b5207e33138): Ergo Times platform updates article (link not loading for some users).

- [https://cruxfinance.io](https://cruxfinance.io): Crux Finance Alpha MVP portfolio tracker.

- [https://ergoauctions.org/artwork/84b1786b9c2431a1adba58808b6a10be4eada0ecae1544ff2cccc667d33bf241](https://ergoauctions.org/artwork/84b1786b9c2431a1adba58808b6a10be4eada0ecae1544ff2cccc667d33bf241): Animated Sigmanauts NFT (comet variant, rare 1 of 3).

- [https://www.single-tx-swap.com/profile/9gChf3