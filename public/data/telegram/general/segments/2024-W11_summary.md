---
title: "Ergo General Chat — 2024-W11"
date_start: "2024-03-11"
date_end: "2024-03-17"
type: telegram_weekly
channel: general
week: "2024-W11"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2024-W11 Summary

## Key Topics Discussed

- **MEXC Listing Progress**: Integration ongoing as of 2024-03-14. Multiple confirmations that the listing is moving forward but timeline details remain fluid. (@Glasgow｜WON'T DM, msg#481786; @Fabiano Medici, msg#481785)

- **Rosen Bridge v2 Update**: Guards blocking new event triggers during upgrade; users should expect 5-6 hour delays during migration phase. Watchers updating to v2 with unlock→update→lock procedure. (@HQΣr, msg#481484; msg#482231)

- **SigmaUSD Minting Limits**: Protocol update implementing 0.5% of reserves per oracle epoch minting cap to prevent large-scale manipulation by BearWhale. Discussion ongoing about whether 0.25% would be preferable. (@kushti, msg#481366; msg#481768; @Glasgow, msg#481544; @Mewbie, msg#481709)

- **BearWhale Attack Analysis**: Community investigation identified BearWhale's strategy: mint large SigmaUSD quantities, dump ERG on CEX to suppress price, exploit lagging oracle, then redeem at profit. Wallet tracking shows ~1.7M ERG across multiple addresses. (@Mewbie, msg#481734-msg#481737; @CW, msg#482029)

- **Mining Pool Development**: Sigmanauts Mining Pool launched with PPLN payouts, 1% fee to treasury, storage rent collection in development, and DAO-based governance planned via Paideia. (@qx(), msg#482406)

- **Nautilus Wallet v2 Release Candidate**: Multi-platform support (Mac/OSX/Win/Android/iOS), cold wallet, multisig, token minting/burning, SigmaUSD support, ErgoPay. Dynamic dApp setup and dApp connector planned. (@Glasgow, msg#481519-msg#481520)

- **UTXO Model Education**: Community clarification that Ergo "boxes" are UTXO outputs; miners often accumulate hundreds requiring consolidation; each transaction output creates a new box in recipient wallet. (@Glasgow, msg#481511; @qx(), msg#481512)

- **rsERG Arbitrage & Rosen Bridge**: Direct CEX-to-Rosen transfers risky; recommend transferring to personal wallet first. rsERG is 1:1 equivalent to mainnet ERG with bridge redemption option. Arbitrage mechanisms balance prices. (@qx(), msg#481078-msg#481083; @MortiX, msg#481804; @Unknown, msg#481926)

- **ChainCash Problem Statement**: Aims to solve inelasticity of money supply by enabling note issuance based on collateral/trust/reputation. (@Glasgow, msg#481086)

- **Storage Rent Implications**: Long-term concern about demurrage/storage rent (-3 to -4% YoY loss compounding over time) affecting liquidity and price discovery. (@dayumbbbb, msg#481936; msg#482398)

---

## Important Decisions or Announcements

- [@kushti, msg#481366, 2024-03-12]: Update key distribution announced; DarkSide holding keys will send to kushti "asap". Minting limits (0.5% of reserves per oracle epoch) sketched and proposed for community consensus on implementation.

- [@HQΣr, msg#481484, 2024-03-13]: Rosen Bridge v2 update timeline: new config tokens deployed, watchers blocked temporarily, user events queued for 5-6 hour processing window, guards updating to v2, UI in maintenance mode.

- [@Glasgow, msg#481519, 2024-03-13]: Minotaur v2 Release Candidate available with multisig, token minting/burning, SigmaUSD, ErgoPay; dynamic dApp setup and dApp connector planned.

- [@HQΣr, msg#482231, 2024-03-15]: Update in progress—do not unlock permits/collateral or perform watcher actions until next notice.

- [@qx(), msg#482406, 2024-03-16]: Sigmanauts Mining Pool launched (pool.ergo-sig-mining.net); 1% fee to treasury; storage rent collection in development; DAO governance via Paideia planned.

---

## Technical Q&A Worth Preserving

- **Q** (@Jack Σ, msg#481085): Can you explain what bulletproofs are and their use case?
  **A** (@kushti, msg#481094+): Bulletproofs are a zero-knowledge technique for specific statements (e.g. range proofs) without trusted setup, unlike SNARKs. Verification possible in ErgoScript; similar proofs like Groth one-out-of-many could be used for verifiable credentials and hybrid contracts combining zero-knowledge with on-chain execution.

- **Q** (@Jack Σ, msg#481941): Explain SigmaRSV—why it's not a HODL if SigmaUSD adoption increases and ERG appreciates.
  **A** (@TMR.ΣRG, msg#482019; @CW, msg#482023): Reserve can be drained if SigmaUSD holders exit at profit. SigmaRSV is PvP (player vs player) and protocol dynamic; allows BearWhale to mint maximum SigmaUSD when RR is high, dump ERG on CEX, exploit lagging oracle arbitrage.

- **Q** (@Buccoooo, msg#481923): If many people buy rsERG, does ERG price increase similarly to direct ERG purchases?
  **A** (@Unknown, msg#481926): rsERG is 1:1 equivalent—original ERG locked on mainnet, redeemable via bridge with fee. Arbitrage balances prices between chains automatically.

- **Q** (@Hollo, msg#482220): Restored wallet from seed phrase but balance not showing; address is different.
  **A** (@Aco Šmrkas, msg#482236): May have been created with Ergo node (mnemonic + passphrase); can only be restored that way. (@HQΣr, msg#482237): Check derived addresses in wallet.

- **Q** (@ニック, msg#481516): How does Ergo mixer work?
  **A** (@qx(), msg#481515): Video reference provided: https://www.youtube.com/watch?v=xutGmZ-4sWk

- **Q** (@Bye H8er, msg#482242): Can old tipper bot wallet be accessed with just password?
  **A** (@Glasgow, msg#482249): Yes, DM the bot and retrieve the seed.

- **Q** (@Jack Σ, msg#482110): Could ChainCash track hours instead of money for time banks?
  **A** (no response, but conceptually relevant): ChainCash flexibility suggests yes; referenced docs at https://docs.ergoplatform.com/uses/chaincash/

- **Q** (@qx(), msg#481090-msg#481091): Does mining other chains with GPU cause similar issues; do you have dual GPU system?
  **A** (discussion ongoing): Clarified GPU driver update may fix multi-GPU switching issues.

---

## Links Shared

- [https://docs.ergoplatform.com/uses/chaincash/#practical-example]: ChainCash practical example documentation.
- [https://www.intel.com/content/www/us/en/support/detect.html]: Intel driver detection tool (shared in GPU troubleshooting context).
- [https://api.ergo.watch/lists/addresses/by/balance?token_id=...]: ERG whale address list API (10k+ holders analysis).
- [https://api.ergo.watch/lists/addresses/by/balance?token_id=c95645836ca45f6923978e175b93305185406aa939b213c96e44b6645911d04f]: ERDOGE LP holders API.
- [https://explorer.ergoplatform.com/en/addresses/9iKFBBrryPhBYVGDKHuZQW7SuLfuTdUJtTPzecbQ5pQQzD4VykC]: Gate.io deposit wallet (requires ~100 confirmations).
- [https://github.com/minotaur-ergo/minotaur-wallet/releases]: Minotaur v2 RC release.
- [https://t.me/minotaur_ergo]: Minotaur wallet Telegram group.
- [https://www.youtube.com/watch?v=xutGmZ-4sWk]: Ergo mixer tutorial video (seedubya).
- [https://www.youtube.com/watch?v=elZxgEbi8VE]: Additional mixer/bridge video reference.
- [https://gist.github.com/kushti/3f34ed7d70cc6919c29f5bc65772b02e]: SigmaUSD bank contract with minting limits sketch.
- [https://t.me/crooksfi]: CrooksFinance Telegram (DEX on meme coins).
- [https://dash.ergo-sig-mining.net/]: Sigmanauts Mining Pool dashboard.
- [https://github.com/marctheshark3/sigmanaut-mining-pool-ui/tree/main]: Mining pool UI self-host Docker setup.
- [https://ergoauctions.org/user/9eufTekuDzgbUCvzkxBq7JA2pypVZ8FJDCRQhExJqHnVadMsv8x]: Alien Elixir recipe NFT auction series.
- [https://www.sigmao.cc/buy-tokens]: SigmaO token purchase interface.
- [https://www.youtube.com/watch?v=uLHqpjW3aDs]: Saphuza Alien Elixir promotional video (epilepsy warning).
- [https://podcasters.spotify.com/pod/show/ergopodcast/episodes/Dev-Update-March-17-2024--Rosen-Bridge--Sigmanauts--Paideia--THz-FM-and-more-e2h6hds]: Ergo Podcast Dev Update episode (March 17, 2024).

---

## Unresolved Questions

- **ErgoNames Vanity Addresses**: Status of ErgoNames rollout and whether vanity addresses or Sigmanauts reservations will be available. (@Chris Ray, msg#482423)

- **Ledger Native Integration**: "Wen ledger?" recurring question; dev mode currently only. (@DrTwentyOne, msg#481394; @Glasgow, msg#481359)

- **CMC/CoinGecko rsERG Counting**: Whether wrapped rsERG should count toward Ergo TVL/volumes on aggregators like CMC (policy inconsistency with WETH/WBTC). (@cannon_q, msg#482072; @Glasgow, msg#482081)

- **Rosen TVL Tracking**: DefiLlama not tracking Rosen collateral or bridged TVL; Rosen team working on feed per @cannon_q confirmation. (@Richi, msg#482053; @cannon_q, msg#482067)

- **Machina Finance Launch**: User inquiry "wen machina finance?" remains unanswered. (@Hasnain, msg#481794)

- **Hotbit Withdrawal**: Status of ERG withdrawal from defunct Hotbit exchange (shutdown June 2023). (@Renshi, msg#482051)

- **Minting Limit Consensus**: Community debate whether 0.5% or 0.25% reserve cap is optimal; awaiting update key holder decisions. (@Mewbie, msg#481709; @kushti, msg#481366)

- **Storage Rent Long-Term Impact**: Full implications of -3 to -4% YoY demurrage for liquidity and protocol sustainability not fully resolved. (@dayumbbbb, msg#481936-msg#481942)

---

**Week Activity Level**: Moderate. Strong technical discussion around Rosen Bridge v2 migration, SigmaUSD protocol limits, BearWhale analysis, and mining pool infrastructure. MEXC integration ongoing but not yet live. Community engagement on governance, wallet recovery, and ecosystem tooling.