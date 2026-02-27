# Ergo General Chat — 2023-W37 Summary

## Key Topics Discussed

- **Bitpanda Listing Launch**: Ergo successfully listed on Bitpanda on 2023-09-14. Initial trade-only mode; full deposit/withdrawal capability expected Q4/Q1 2024. Bitpanda operates as a brokerage sourcing liquidity from Gate.io.

- **CoinEx Security Breach**: CoinEx suffered a ~$27.8M hack on 2023-09-12 affecting multiple chains (ETH, TRON, Polygon). Ergo hot wallet remained intact; team moved funds to secure cold storage and maintained operations. Community advised to withdraw from centralized exchanges.

- **HodlERG3 Game + SigmaFi Loans**: Explosive adoption of collateralized lending using HodlERG3 (from Phoenix Finance's resurrected hodlcoin game). Multiple SigmaFi.app loans opened with HodlERG3 as collateral to borrow ERG—users leveraging the game's non-decreasing price mechanics. High interest rates (15% APR typical, some 38%+ on outlier loans).

- **Block Time / Speed Improvements Discussion**: Community discussion on reducing block time from 2 minutes. Kushti outlined weak blocks / sub-blocks approach (similar to Bitcoin NG microblocks). Key insight: final confirmation time for exchanges may remain constant regardless of block interval due to orphan risk and exchange confirmation requirements. Multiple wallet UX improvements proposed (unconfirmed balance display).

- **Rosen Bridge Infrastructure Workshop**: Kushti announced a Rosen-centric infrastructure hosting workshop scheduled for next week, to be recorded and released publicly.

- **Oracle Pools v2 + Dexy Gold**: Oracle Pool v2 live on mainnet running for Dexy Gold with GORT rewards. Oracle Pool v1 has EF members and external participants. Dexy Gold and Dexy stablecoin preparations underway with anti-whale protection and no minting blackout ranges (unlike SigmaUSD).

- **Palmyra + Chainlink Partnership**: Dan Friedman detailed Palmyra's use of Chainlink proof-of-reserve via proxy functions in Winter Protocol for on-chain warehouse receipts in decentralized trade financing. IoT devices (cameras, weight/motion sensors) provide continuous commodity proof-of-existence. Plan to integrate multiple oracles including native Ergo oracles; capital from token sale earmarked for building out Ergo oracle infrastructure.

- **Waves Ecosystem Collapse as Cautionary Tale**: Kushti highlighted Waves' centralized team control over L1, DeFi (Vires), and gateways (WXG-*) leading to catastrophic collapse. Waves team allegedly used vires lending protocol user funds to pump Waves token and print USDN stablecoin; SBF allegedly shorted them into failure. Ergo remained untouched; ERG-WXG delisting from WX Network until 2023-10-10.

- **P2SH vs P2S Script Addressing**: Glasgow clarified P2SH (pay-to-script-hash) vs P2S: P2SH stores only the Blake2b256 hash of the script on-chain, requiring off-chain script submission to spend. Useful for scripts >4KB (like large ErgoTree contracts). P2S stores full script on-chain. P2SH cheaper but riskier (lost script = lost funds); likely adoption only under high on-chain load.

- **Spectrum DEX on Cardano**: Spectrum launched on Cardano and achieved full node synchronization in ~10 minutes (mentioning NIPoPoWs efficiency).

- **Paideia DAO Treasury Management**: Paideia closed beta demonstrated automatic DAO treasury transfers post-vote on Ergo; Cardano deployment underway. Treasury management identified as critical transparency feature.

- **DuckPools Lending Protocol**: Relaunched after Phase 1 vulnerability fix; offers collateralized lending pools with open-source smart contracts and user guides.

---

## Important Decisions or Announcements

- [@Glasgow｜WON'T DM, msg#429865, 2023-09-14]: Bitpanda ERG listing is live.

- [@Glasgow｜WON'T DM, msg#429885, 2023-09-14]: Full deposit/withdrawal capability on Bitpanda expected Q4/Q1 2024.

- [@kushti khushi, msg#429998-429999, 2023-09-14]: Infrastructure hosting workshop scheduled for next week; Rosen-centric; will be recorded and released publicly.

- [@Armeanio, msg#429788, 2023-09-14]: Once Bitpanda listing is live, EF will attempt to arrange deposit/withdrawal functionality through the exchange.

- [@Unknown, msg#430263, 2023-09-15]: ERG-WXG delisting from WX Network; redemption procedure until 2023-10-10; support team to advise on swaps to original ERG token.

- [@Unknown, msg#431100, 2023-09-17]: Ergo Weekly Developer Update released covering Paideia, Crux, Rosen Bridge, Blitz TCG, BetNinja, THzFM and community projects (YouTube: https://youtu.be/geu-pnztEes).

---

## Technical Q&A Worth Preserving

- **Q** (@Unknown, msg#429446): What is P2SH and what is its use case?  
  **A** (@Unknown, msg#429446): In P2SH, the box is protected by a special predefined script which takes the first 192 bits of Blake2b256 hash of the script to be revealed when spending. Stores only hash on-chain, script submitted off-chain at spend time.

- **Q** (@Glasgow｜WON'T DM, msg#429450, reply to msg#429448): Why use P2SH over P2S?  
  **A** (@Glasgow｜WON'T DM, msg#429450): P2S easier to use. P2SH requires keeping contract off-chain; if lost, funds stuck forever. Makes dApps harder to use (others need contract). P2SH cheaper on-chain but won't see adoption until heavy on-chain load.

- **Q** (@Luivatra, msg#429458-459): Can P2SH be used for larger ErgoTree contracts?  
  **A** (@Luivatra, msg#429458-459): Yes. P2SH stores only the hash of the script in the box; the full ergotree can exceed 4KB and is stored off-chain. Developer had to split a contract >4KB, making P2SH relevant.

- **Q** (@Unknown, msg#429456): How does HodlERG3 work? Is value dictated by minting/burning?  
  **A** (implied via msg#429312): HodlERG3 is a zero-sum game where players deposit ERG, receive proportional hodlcoins. Un-hodlers pay fees accumulated in reserve. Price of hodlcoins vs underlying asset never decreases due to fee accumulation.

- **Q** (@prime, msg#429614): Does any hardware wallet fully support Ergo?  
  **A** (@Pulsarz, msg#429603): Ledger. (@Glasgow, msg#429624): Ledger or Yoroi in dev mode.

- **Q** (@Unknown, msg#429611): Is there an Ergo browser wallet extension?  
  **A** (@Pulsarz, msg#429615): Nautilus. (@Glasgow, msg#429621): Nautilus on Chrome Web Store.

- **Q** (@Unknown, msg#430128): Can I restore node wallet to Nautilus?  
  **A** (@qx(), msg#430131-135): Node wallets have mnemonic password at seed phrase end. Nautilus cannot restore those. Use Satergo (supports mnemonic passwords) or create new Nautilus wallet and send funds from node wallet.

- **Q** (@Odiseus Me, msg#429741): Does pruning reduce full node disk space? Any drawbacks?  
  **A** (@Glasgow, msg#429807): https://docs.ergoplatform.com/node/modes/pruned-full-node/ (docs reference provided).

- **Q** (@Edgar, msg#430431, msg#430434): Will devs reduce block time?  
  **A** (@Pulsarz, msg#430440-443, msg#430456-461): Weak blocks (sub-blocks) approach being explored, similar to Bitcoin NG. Implementation details TBD; Kushti to publish writeup. Unclear how fees will distribute between weak and full blocks.

- **Q** (@Pulsarz, msg#430469): What terminology does Bitcoin NG use for faster blocks?  
  **A** (@Kushti, msg#430490): Bitcoin NG calls them "microblocks"; Ergo uses "weak blocks" or "sub-blocks." Meaning differs: microblock = generated by same miner as key block.

- **Q** (@Unknown, msg#429652): If someone pays off SigmaFi loan early, do they pay less interest?  
  **A** (unresolved; no answer in transcript).

- **Q** (@Marty ErgoPad, msg#429543): How many block confirmations does SimpleSwap typically take?  
  **A** (@Glasgow, msg#429548, msg#430495): Depends on exchange backend. Kucoin typically requires 30 confirms. For Alephium, users saw ~20-30 confirms needed despite "fast" claims. Time-based rather than confirmation-count based analysis may be more relevant.

---

## Links Shared

- [https://twitter.com/ERG_Glasgow/status/1701185660365795621]: Glasgow's Twitter Ergo content.

- [https://cruxfinance.io]: CruxFinance alpha MVP (DeFi platform).

- [https://sigmafi.app]: SigmaFi lending protocol (live with HodlERG3 collateral support).

- [https://phoenixfi.app]: Phoenix Finance / HodlERG3 game (resurrected hodlcoin game).

- [https://ergoplatform.org/en/blog/2019_07_24_ergo_address/]: Ergo address types and P2SH explanation.

- [https://ergonaut.space/en/Guides/yield]: Ergo yield farming / staking guides.

- [https://twitter.com/coinexcom/status/1701645839901548874]: CoinEx security breach announcement (2023-09-12).

- [https://announcement.coinex.com/hc/en-us/articles/19187420867348-Latest-Progress-of-the-Hacking-Attack-on-Sep-12-2023-Updated-on-Sep-15-]: CoinEx official hack progress updates.

- [https://chrome.google.com/webstore/detail/nautilus-wallet/gjlmehlldlphhljhpnlddaodbjjcchai]: Nautilus wallet Chrome extension.

- [https://www.youtube.com/watch?v=7q3Jq_OvhKY]: Ledger hardware wallet support for Ergo (dev mode video).

- [https://anchor.fm/thesigmacast/episodes/Bitpanda-Spotlight-Ergo-e299m4j]: The SigmaCast podcast episode — Bitpanda Spotlight on Ergo.

- [https://twitter.com/coinexcom/status/1702294236735864955]: Bitpanda listing announcement (live).

- [https://support.bitpanda.com/hc/en-us/articles/360000046479-What-is-trade-only-mode-]: Bitpanda trade-only mode explanation.

- [https://docs.ergoplatform.com/node/modes/pruned-full-node/]: Ergo node pruning documentation.

- [https://github.com/aeternity/protocol/blob/master/consensus/bitcoin-ng.md]: Bitcoin NG consensus protocol reference.

- [https://mempool.space/]: Bitcoin mempool explorer (referenced for congestion metrics).

- [https://ergo.herominers.com/]: Herominers Ergo mining pool.

- [https://youtu.be/geu-pnztEes]: Ergo Weekly Developer Update (2023-09-17).

---

## Unresolved Questions

- **Block time reduction implementation details**: Weak blocks / sub-blocks approach confirmed; exact fee distribution model, orphan rate tolerance, and wallet UX updates pending Kushti's writeup. Community consensus formed that discussion itself across core devs, community devs, and regular users is valuable.

- **Early loan repayment interest calculation**: Whether SigmaFi.app charges prorated interest for early payoff or full interest (msg#429652 asked, not answered).

- **Ledger hardware wallet support status**: Satergo Ledger integration programmed but hardware communication non-functional; blocker unresolved (msg#431243-244 by Aberg).

- **Block time confirmation requirements for exchanges**: If block time reduced, will exchanges require proportionally more confirmations to maintain equivalent security? Discussed but no formal decision (msg#431245 by qx()).

- **Rosen Bridge launch timeline**: Infrastructure workshop scheduled; launch readiness TBD.

- **Dexy / Dexy Gold launch timeline**: Oracle Pools v2 live; Dexy Gold reward distribution and stablecoin mechanics being finalized.

---

## Sentiment & Community Health

- **Bear market frustration evident**: Multiple discussions about price (now ~$0.96 USD), ATH recovery, and accumulation strategies. Community sentiment remains constructive despite pessimism.

- **CoinEx hack normalized concerns about CEX risk**: Strong messaging around self-custody, non-custodial swaps (SimpleSwap, StealthEx, ChangeNow), and peer-to-peer alternatives.

- **Block time discussion healthy**: Despite some heated debate, Pulsarz noted it was "the most active the dev channel has been for a long time." Cross-functional participation (core devs, community devs, users) praised as rare and valuable for decentralized chains.

- **Developer participation steady**: Multiple ErgoHack announcements; Aberg working on light client without full node; qx() and Armeanio hosting regular AMAs and dev updates in structured format.