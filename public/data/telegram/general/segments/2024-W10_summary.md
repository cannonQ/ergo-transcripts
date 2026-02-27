# Ergo General Chat — 2024-W10 Summary

## Key Topics Discussed

- **ErgOne (POCOCP) Token Listing & Raffle**: Community discussing Coingecko listing of ErgOne token, raffle mechanics (goal reached but continues), and preparations for MEXC exchange listing expected late March/early April. (@HQΣr, @Yulius Kristianto, @cannon_q)

- **MEXC Exchange Listing**: Integration process underway, expected 2-4 weeks (late March to early April). Involves hummingbot testing for market-making support. (@Hasnain, @cannon_q, @Glasgow)

- **Rosen Bridge EVM Expansion**: Rosen team receiving Catalyst funding for EVM expansion; community discussing bridge architecture, centralization concerns (comparison to Wormhole), and importance of trustless, decentralized design. (@Armeanio, @Glasgow, @HQΣr, @Rj)

- **Dexy Gold Testing**: Public testing data shared with testnet Nautilus wallet requirement. LP and Bank UIs available. (@kushti)

- **Block Time & Consistency Issues**: Community concern about block time fluctuations (3-5 blocks within a minute followed by 6+ minute blocks), impact on CEX confirmation times, and need for more consistent DAA (difficulty adjustment algorithm). (@CW, @Hasnain, @Glasgow)

- **Market Making & Liquidity**: Discussion of professional MM involvement, Sigmanauts vetting MM candidates, hummingbot testing on MEXC; community debate about MM decentralization vs. VC-backed chains. (@cannon_q, @Glasgow, @kushti)

- **UI/UX & Product Design**: User feedback that Ergo dApps lack polish despite strong tech; Spectrum DEX highlighted as gold standard for UI. Need for product designers in ecosystem. (@Alex, @TMR.ΣRG, @cannon_q)

- **Developer Updates & Content**: Dev update featuring SlumDoge Millionaire (unexpected guest with PoW/meme coin experience); discussion of marketing importance beyond pure tech. Emphasis on combining good tech with attractive packaging to reach mainstream. (@qx(), @CW, @Bye H8er)

- **Quantum Resistance**: Brief Q&A confirming PoW aspect is quantum-proof; Sigma protocols and signatures are not. Documentation referenced. (@kushti, @Glasgow)

- **Token Listing Growth**: CyberPixels (CYPX), ErgOne (POCOCP), and other native tokens being listed on Coingecko with community support. (@Yulius Kristianto)

---

## Important Decisions or Announcements

- [@HQΣr, msg#479471, 2024-03-04]: Upfront payment for ErgOne MEXC listing integration to begin soon
- [@Glasgow, msg#479537, 2024-03-04]: EVM funding provided by Catalyst; Sigmanauts have proposal to boost liquidity from ISPO ADA
- [@Hasnain, msg#480227, 2024-03-08]: MEXC integration process started, listing expected around late March/early April
- [@kushti, msg#480150, 2024-03-07]: ladopixel created sample web app using Fleet SDK with token creation, ERG/NFT sending, and token burning examples
- [@kushti, msg#480779, 2024-03-05]: Good Things DAO token officially issued on Paideia for zero-interest uncollateralized lending DAO management
- [@qx(), msg#480311, 2024-03-08]: Dev update featuring developer with experience in "side of crypto that ergo is not quite dug into yet" (later revealed to focus on PoW/mining and meme culture)
- [@qx(), msg#480334, 2024-03-08]: Dev update video releasing Sunday morning (2024-03-09)

---

## Technical Q&A Worth Preserving

- **Q** (@Son Nguyen, msg#480612): Is there a way to lock 1K-2K ERG for 10 years?
  **A** (@qx(), msg#480644): Create temp wallet, send ERG to it, create loan offer of 1 COMET with 1000 ERG collateral at 0% for 10 years, fulfill from permanent wallet with 1 COMET, then discard temp wallet keys. Liquidate after 10 years. Requires defeating opportunistic loan fulfillment during off-peak hours (3am-6am EST). Also see HodlBox (@qx(), msg#480613-623) which locks tokens bound to address but unlocks 10/15/24.

- **Q** (@gg, msg#480676): If I mint rsERG with 1 BTC, am I the only one who can recover it? Or can anyone with rsERG recover BTC?
  **A** (@qx(), msg#480681-688): You don't mint rsERG with BTC; you lock BTC in multisig wallet on Bitcoin side and receive rsBTC on Ergo side. Equal amount of BTC always locked in multisig as rsBTC released on Ergo. rsBTC is yours to use; there's no "minting" relationship — it's a wrapped bridged asset.

- **Q** (@Alien, msg#480953): Transaction shows "done" but I didn't receive 7.8 ERG on Spectrum sell order.
  **A** (@Snowman Jason, msg#480955-956): Check upper right corner clock button — transaction likely in queue because price fluctuated beyond your bid scope. Can cancel or wait for price to return to your bid level.

- **Q** (@Luigi, msg#480982): Do PepErg, Ergdoge use smart contracts?
  **A** (@kii, msg#480983): No. Tokens work differently in UTXO system; much more secure than account-based (Ethereum). Use minting directly or auction house/SkyHarbor for NFT linking.

- **Q** (@Alien, msg#480966): Is there a way to build a bot to arbitrage between DEX and CEX?
  **A** (@qx(), msg#480967-968): Hummingbot supports this but doesn't yet support Spectrum DEX.

- **Q** (@Steph K, msg#480562): Did 2-year-old legal opinion lay foundation for US CEX listings? Has any US exchange given feedback?
  **A** (@Glasgow, msg#480564): Legal opinion sent to most applicants, requested by some. Big exchanges do their own internal legal review anyway; opinion checks a box but isn't roadblock. Other constraints exist depending on exchange.

- **Q** (@Anonymous, msg#480539): Is Ergo blockchain quantum proof?
  **A** (@Richi, msg#480541) / (@Glasgow, msg#480563): PoW aspect is quantum-proof. Sigma protocols and signatures are not. See https://docs.ergoplatform.com/faq/#quantum

- **Q** (@Hasnain, msg#480750): Why can't exchanges consider sub-blocks for confirmation when implemented?
  **A** (@CW, msg#480752): They could, but confirmation requirement would become ~1200 sub-blocks, defeating the purpose of improvement.

---

## Links Shared

- [https://dexy.interface-ggd.pages.dev/]: Dexy public testing LP UI
- [https://dexy-test.dexygold.com/]: Dexy public testing Bank UI
- [https://github.com/nautls/nautilus-wallet/releases/tag/v0.9.2]: Testnet Nautilus wallet (v0.9.2) needed for Dexy testing
- [https://github.com/ladopixel/fleetERG]: Fleet SDK sample web app with token creation, ERG/NFT transfers, token burning
- [https://explorer.ergoplatform.com/en/token/3503ba6ce5d8bc1332229284c95fff15cf3c1d0b463fdfd6f3c9b57b7af09fe3]: Good Things DAO Token on Ergo Explorer
- [https://ergoauctions.org/artwork/7b5b967cd1e11d9a2c6640532ca24c45aba65bfbd76df8b0d857a324e76e70c0]: Sigmanauts Treasury Auction (alien art NFT)
- [https://t.me/alientokenergo]: Alien Token on Ergo community Telegram
- [https://ergonaut.space/en/Ergo/manifesto]: Ergo Manifesto translation bounties (Dutch translation quality check requested)
- [https://www.reddit.com/r/ergonauts/comments/1b1catz/ecosystem_development_roadmaps/]: Ergo ecosystem development roadmaps
- [https://docs.ergoplatform.com/eco/rosen/rosen-watcher/#collateral-permits-and-reporting]: Rosen Watcher collateral permits documentation
- [https://t.me/ErgoKrakenFundraiser]: Kraken listing fundraiser discussion group
- [https://hodlbox.xyz]: HodlBox token locking service (1-year lock from ErgoHack date ~10/15/24)
- [https://twitter.com/HouseofChimera/status/1765320674854227981]: House of Chimera article shared
- [https://spectrum_labs_community]: Spectrum DEX community support Telegram

---

## Unresolved Questions

- **Block Time Consistency**: No definitive solution proposed for DAA (difficulty adjustment algorithm) improvements to reduce wild block time fluctuations. Community wants faster average confirmation but acknowledges tradeoffs. (@CW, @Hasnain)

- **Kraken Listing Cost & Timeline**: Discussions about Kraken fundraiser but no confirmed fee or launch date. Community debating whether to fundraise at current price (~$2-3) vs. waiting for higher price. (@Mark, @Aco, @Glasgow)

- **Hodlbox 10-Year Lock**: @qx() noted Hodlbox appears to unlock 10/15/24 (1-year from ErgoHack), not variable; unclear if contracts support custom durations. (@qx(), @TMR.ΣRG, msg#480619-636)

- **Product Designer Hiring**: @Alex expressed interest in joining Rosen Bridge team as product designer; no confirmation of open positions or hiring process. (@Alex, msg#480464-465)

- **Alien Token 👽 Utility**: Multiple community members asked about use cases for alien poop token; only responses were faucet, tip bot, and potential meme/format marketplace (not implemented). (@Saphuza, msg#480510-513)

- **Dog Emoji Token Support**: Chat appears to auto-delete messages with dog emoji; @Glasgow noted it was added to grep filter after spam but offered to remove. Exact reason and whether it will be removed unclear. (@Velvia, @Glasgow, msg#480898-901)

- **Spectrum DEX Verification Status**: @Saphuza mentioned PR for 👽 token verification pending but unclear on timeline or approval process. (@Saphuza, msg#480512)