# Ergo General Chat — 2019-W49 Summary
**Period:** 2019-12-02 to 2019-12-15  
**Activity Level:** Low-to-moderate; primarily announcements, exchange listings discussion, and wallet development updates

---

## Key Topics Discussed

- **Supply/Circulation Data Clarification**: Discussion about discrepancies between CoinMarketCap and CoinGecko supply figures. CoinMarketCap was showing circulating supply as total supply due to the treasury contract being slowly unlocked. Current supply at the time was 8,327,325 ERG per Ergo Explorer.

- **JavaScript Library Rewrite for In-Browser Wallets**: [@Dmitry, msg#15163] announced completion of a JavaScript library rewrite, reporting it was faster to rewrite the old library than add new functions. This enables easier browser-based wallet setup.

- **Exchange Integration Issues**: Multiple users reported problems with Tidex deposits requiring 100+ confirmations and experiencing significant delays (10+ hours with 230+ confirmations). Discussion about the need for real decentralized exchanges as an alternative to centralized venues.

- **Atomic Swap & DEX Vision**: [@Unknown, msg#15327] proposed leveraging atomic swaps as the core foundation for building an innovative DEX on Ergo, with protocols supporting off-chain transactions posted to blockchain alongside exchange transactions.

---

## Important Decisions or Announcements

- **[@Unknown, msg#15102, 2019-12-02]**: CoinMarketCap and CoinGecko updated descriptions; Ergo described as "Resilient Platform for Contractual Money" with focus on efficient, secure financial contract implementation using Autolykos PoW, ErgoScript, Sigma protocols, and support for light nodes and dApps.

- **[@Unknown, msg#15168, 2019-12-04]**: Clarified official branding: "Ergo" for the platform, "ERG" for the currency unit.

- **[@Unknown, msg#15180, 2019-12-05]**: Charles Hoskinson (Cardano/Ethereum co-founder) gave public recognition in a surprise AMA, stating Ergo is "one of the most interesting projects in the history of the crypto-currency space" and praising work on AVL trees, non-outsourceable puzzles, and Sigma protocols.

- **[@Alexandre - GAINS, msg#15250–15251, 2019-12-10]**: Announced upcoming AMA with Ergo on December 12, 2019 at noon UTC in GAINS Discussion channel; 1000 ERG prize pool (10 winners, $460 value at the time).

- **[@Unknown, msg#15275–15276, 2019-12-12]**: AMA took place as scheduled on December 12; question submission moved to GAINS Discussion channel for prize eligibility.

- **[@Alexandre - GAINS, msg#15426, 2019-12-14]**: Post-AMA summary published highlighting Ergo as PoW-based digital gold with support for custom tokens, cryptographic protocols, and financial contracts; noted involvement of PhDs and recognition from Charles Hoskinson and Sasha Ivanov. Noted Hotbit distribution delays.

---

## Technical Q&A Worth Preserving

- **Q** (@Pepeger, msg#15139–#15160): Testnet node synchronization issue — local testnode stuck in "active synchronization" status with only headers loaded, no blocks. Unable to perform wallet operations.  
  **A** (@Unknown, implied resolution msg#15156–#15160): Issue resolved by correctly setting block storage directory; node began downloading full blocks after correcting configuration. Active synchronization status indicates UI wallet operations unavailable until sync completes.

- **Q** (@Kingsley Odion, msg#15257): "What is made ERGs a wallet and not cryptocurrency. What is the standard future of ERGs?"  
  **A**: Not directly answered in log, but context from msg#15102 clarifies: ERG is the native currency and transaction/storage fee medium for the Ergo network, not merely a wallet token.

- **Q** (@KJSDNGlksdnnds, msg#15438–#15446): Is it safe to hold ERG on Waves?  
  **A** (@Dmitry, msg#15446–#15447): Risk exists that Erg-Waves gateway could be hacked, abandoned, or Waves blockchain could fail, rendering wrapped ERG worthless. However, using a hardware wallet mitigates account compromise risk. Safer to hold native ERG.

---

## Links Shared

- [https://explorer.ergoplatform.com/en/charts](https://explorer.ergoplatform.com/en/charts): Ergo Explorer — real-time supply and network statistics
- [https://whattomine.com](https://whattomine.com): Mining profitability comparison tool
- [https://www.worldcoinindex.com](https://www.worldcoinindex.com), [https://www.livecoinwatch.com](https://www.livecoinwatch.com), [https://bravenewcoin.com](https://bravenewcoin.com), [https://www.cryptocompare.com](https://www.cryptocompare.com), [https://coincap.io](https://coincap.io), [https://coincodex.com](https://coincodex.com), [https://coinpaprika.com](https://coinpaprika.com): Alternative market data aggregators for Ergo listing/update
- [https://www.transifex.com](https://www.transifex.com): Translation platform tool recommended for Ergo localization efforts
- [https://bitcoingarden.org/forum/](https://bitcoingarden.org/forum/): Bitcoin Garden forum (noted as alternative community resource)
- [https://bitcointalk.org/index.php?topic=5209442](https://bitcointalk.org/index.php?topic=5209442): Italian Ergo thread on Bitcointalk
- [https://www.youtube.com/watch?v=lxTeoSN02T4&t=1910](https://www.youtube.com/watch?v=lxTeoSN02T4&t=1910): Charles Hoskinson Surprise AMA (December 5, 2019) — contains public endorsement of Ergo
- [https://twitter.com/GainsAssociates/status/1204406021805891585](https://twitter.com/GainsAssociates/status/1204406021805891585): GAINS AMA announcement and prize details

---

## Unresolved Questions

- **Exchange Integration**: Tidex deposit issues with 100+ confirmations and multi-hour delays remained unresolved at week's end (msgs #15339–#15349); user reported potential scam, ticket unresponded for 12+ hours.

- **Confirmation Requirements**: Exact confirmation requirements for ProBit and other exchanges unclear; only Tidex documented (100 confirmations). Community noted general need for faster DEX alternative.

- **CoinMarketCap Data Accuracy**: Ongoing issue with CoinMarketCap displaying supply incorrectly; unclear if it was ever fully corrected during this period.

---

## Additional Context

This was a relatively quiet week centered around external validation (Charles Hoskinson endorsement), community onboarding (Italian members joining), and infrastructure/wallet work. No major protocol changes, governance votes, or core development updates were discussed. The GAINS AMA appeared to be a milestone community engagement event but specific technical details from that session are not captured in this log segment.