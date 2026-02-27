## Key Topics Discussed

- **Changelly Listing Delay**: The Changelly listing originally planned for mid-August was delayed to August 31st due to technical issues on Changelly's side preventing the ERG asset from running properly on their engine.

- **Ergo Staking via Mixer**: Discussion of upcoming "staking" functionality where users can provide liquidity to ErgoMixer by locking ERG that the mixer uses for mixing transactions, earning fees without impermanent loss. This is a proof-of-work chain implementing staking-like rewards through dApp tokenization.

- **ErgoDEX Beta Testing**: Community members actively testing the ErgoDEX beta at beta.ergodex.io using Yoroi Nightly and the dApp connector. Testing focused on token-to-token (T2T) swaps, with native-to-token (N2T) contracts mentioned as next phase.

- **Gravity/Graviton Integration**: Ergo's integration with Gravity protocol for cross-chain interoperability is nearly complete. Gravity provides oracle aggregation and bridging, while Graviton offers liquidity mining. SUSY Gateway will enable sending ERG/SigmaUSD to ETH and other chains with tokens locked on source chain and issued on destination.

- **Ledger Hardware Wallet Support**: Ledger integration is in final stages with the Tesseract team implementing Attest Input method on device, which extracts ERG and token amounts and signs transactions. Expected to support both Nano S and X.

- **Payment Channels Without Multisignatures**: Kushti shared a forum post proposing a method for payment channels using dummy tokens to track multiple payments with single signature, enabling more efficient micropayment systems.

- **AgeUSD/Djed Relationship**: Clarification that Djed (Cardano's stablecoin) is based on the AgeUSD protocol with SigmaUSD v2 fixes bundled in, but is a separate implementation for Cardano, not provided by Ergo directly.

## Important Decisions or Announcements

- [@Glasgow, msg#192278, 2021-08-20]: Changelly listing delayed to August 31st at latest due to technical issues preventing fast integration with their engine.

- [@kushti, msg#192987, 2021-08-21]: Posted payment channels without multisignatures proposal requesting community feedback: https://www.ergoforum.org/t/payment-channels-without-multisignatures/2219

- [@Armeanio, msg#192241, 2021-08-19]: Mining distribution improvement is short-term goal, aiming to get Nanopool below 40% hashrate. Hashrate growing and distribution improving per miningpoolstats.stream/ergo.

- [@Glasgow, msg#192318, 2021-08-21]: Multisig wallet documentation published explaining how multiple private keys can cooperatively control funds or provide second factor authentication.

- [@MrStahlfelge, msg#193854, 2021-08-22]: Token sending functionality now available on Android wallet beta channel for testing.

## Technical Q&A Worth Preserving

- **Q** (@RennyHodler): Once Nervos-Cardano bridge is live, will we be able to transact ERG cross-chain?
  **A** (@Glasgow): Via what mechanism? It will lay groundwork but CKB uses their own UTXO extension solution so requires different process. Ergo doing its own cross-chain R&D including LTC integration.

- **Q** (@user): How does Gravity/Graviton work with ERG?
  **A** (@Glasgow, msg#193093): Gravity is cross-chain oracle connecting blockchains and passing events between them, no separate token needed, fees in native token of each chain. SUSY Gateway built on top lets you send ERG/SigmaUSD to ETH addresses - tokens locked on source chain, issued on destination. Enables sending ETH tokens to Ergo to mix them, using ERG tokens in ETH DeFi, bringing assets to ErgoDEX.

- **Q** (@S B): How do you earn with ERG without staking or mining?
  **A** (@TMR.ΣRG, msg#194052): Can provide liquidity on CoinEx, or purchase SigmaRSV to go long on ERG while supporting the stablecoin. More LP opportunities when ErgoDEX launches. Future ErgoMixer staking will provide fee income.

- **Q** (@user): Is ERG deflationary and how to deal with inflation?
  **A** (@multiple): ERG has declining emissions (3 ERG reduction every 3 months starting year 2) reaching zero emissions in 6 years. Current ~42M supply going to 97M max. Emission schedule designed for security, not inflationary pressure compared to potential capital gains from low market cap.

- **Q** (@Muhammad Khairuddin): Minimum specs for running Ergo full node without mining?
  **A** (@Arohbe): Sync time varies 15min-15hrs depending on network speed. 50GB storage is sufficient. See setup guide: https://github.com/ergoplatform/ergo/wiki/Set-up-a-full-node

- **Q** (@user): When does block reward reduction happen?
  **A** (@Glasgow, msg#193648): Reductions started June 2021, happen every 3 months (not traditional halving - reduction of 3 ERG every period).

- **Q** (@user): Will ErgoDEX use SigmaUSD?
  **A** (@Hugo): Technically we could, and there's indication SigmaUSD will be used, but check ErgoDEX community for specifics.

## Links Shared

- [https://ergoplatform.org/en/blog/2021-08-16-ergo-graviton-partnership/]: Ergo and Graviton partnership announcement for multichain expansion and cross-chain liquidity
- [https://ergoplatform.org/en/blog/2021-08-19-initial-coin-offerings-on-ergodex-security-and-peace-of-mind/]: Blog post on ErgoDEX ICO security features and UTXO-based DeFi safety
- [https://www.ergoforum.org/t/a-solution-for-staking/1057]: Kushti's proposal for "staking" via ErgoMixer liquidity provision
- [https://www.ergoforum.org/t/payment-channels-without-multisignatures/2219]: Kushti's payment channels proposal requesting community feedback
- [https://github.com/ergoplatform/ergo/wiki/An-ICO-Example-On-Top-Of-Ergo]: Technical guide for conducting ICOs on Ergo platform
- [https://www.nasdaq.com/articles/should-you-or-anyone-buy-ergo-2021-08-21]: Nasdaq article covering Ergo
- [https://podcast.bitcoin.com/e1076-Alex-Kushti-Chepurnoy-Co-Founder-and-Core-Developer-Ergo-Platform]: Bitcoin.com podcast interview with kushti
- [https://beta.ergodex.io/]: Live ErgoDEX beta for testing
- [https://www.reddit.com/r/ergonauts/comments/p2z0lp/ergodex_performing_a_swap/]: Reddit guide with prerequisites for testing ErgoDEX beta
- [https://iohk.io/en/blog/posts/2021/08/18/djed-implementing-algorithmic-stablecoins-for-proven-price-stability/]: IOHK blog post on Djed stablecoin mentioning Ergo and SigmaUSD learnings
- [https://ergoplatform.org/en/blog/2019_05_20-curve/]: Emission curve explanation and EFYT history
- [https://eprint.iacr.org/2020/560.pdf]: ErgoMixer academic paper on mixing protocol
- [https://gravity.tech/]: Gravity protocol website
- [https://www.reddit.com/r/ergonauts/comments/p8rm8w/ergo_x_gravity/]: Reddit explainer on Ergo x Gravity integration
- [https://cryptoveyor.com/assets/ergo]: Community-built Ergo dashboard by flotothemoon
- [https://sigmaverse.io/]: Directory of live Ergo dApps
- [https://ergonaut.space/en/home]: Comprehensive Ergo ecosystem handbook
- [https://youtu.be/Xqbaf_Fdmxo]: Dan from Crypto Venture video covering ErgoDEX (released after delay, ~50k views)

## Unresolved Questions

- Exact timeline for Ledger integration completion and public release remains unspecified beyond "final stages"
- ErgoDEX mainnet launch date still not announced beyond "soon" - beta testing ongoing
- Changelly listing could potentially be delayed beyond August 31st if technical issues persist
- Oracle Pool integration improvements for Cardano need additional work - community suggestion to submit Catalyst proposal for easier implementation
- Whether Trezor hardware wallet support is planned (Ledger confirmed, Trezor status unknown)
- Storage rent activation timeline unclear - mentioned as future miner revenue but no specific implementation date
- Sidechains and merge-mining constructions in development but no concrete timelines provided