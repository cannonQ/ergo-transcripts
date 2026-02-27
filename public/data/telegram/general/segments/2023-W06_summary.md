# Ergo General Chat Summary — 2023-W06

## Key Topics Discussed

- **Rosen Bridge public testing**: Bridge team completed all tests, mild stress test (9 concurrent transfers) successful, final stress test with more concurrent transactions planned for end of week. Public testnet launch imminent.

- **ErgoHack VI - Cypherpunk Finance**: Hackathon launched 2023-02-08 with 18k SigmaUSD and 300k ErgoPad prize pool. 15+ project submissions by mid-week. Focus on cypherpunk philosophy and crypto first principles.

- **Spectrum DEX yield farming**: Yield farming rollout within 2 weeks pending final testing. No protocol fees charged—all fees go to liquidity providers and offchain bot providers.

- **SigmaFi lending platform**: Active loan market observed with multi-asset collateral. Lenders currently bear all liquidation risk; future v2 will support automated liquidation conditions based on custom parameters.

- **Nautilus wallet multisig**: Minotaur v1.1.2 released with bug fixes for multisig functionality.

- **Largest Ergo block**: 1132 KB block observed with 418 transactions (msg#367403). Discussion of block size metrics including proofs and extension sections.

- **Token burn functionality**: Ergo Mobile Wallet supports token burn operations via lighter integration.

- **Storage rent as emission substitute**: Community discussion of post-emission fee mechanism via storage rent after block rewards end (~2045+).

- **Fee estimation API**: Reference node implements fee estimation API (not widely tested), showing recommended fee for next block(s). Similar to Bitcoin wallet fee estimation.

## Important Decisions or Announcements

- [@kushti khushi, msg#366708, 2023-02-06]: ErgoHack VI Community Vote Fund raffle live at ergoraffle.com
- [@qx(), msg#366713, 2023-02-06]: Announced 50 ERG matching donation if raffle reaches +50 ERG within one hour
- [@Ergo NEWS $ERG, msg#366786, 2023-02-07]: ErgoHack VI - Cypherpunk Finance officially underway; welcome video by Armeanio released
- [@Gazza ｜WON'T DM, msg#367271, 2023-02-10]: Spectrum DEX yield farming expected within 2 weeks pending final testing
- [@Glasgow｜WON'T DM, msg#367221, 2023-02-09]: Ledger ERG support in security audit; release timeline pending
- [@Ergo NEWS $ERG, msg#367550, 2023-02-12]: Weekly Developer Update video published covering UTXO Set Snapshot, NIPoPoWs, Rosen Bridge, Oracles v2, Dexy, Sigma Rust, AppKit

## Technical Q&A Worth Preserving

- **Q** (@Ian Lee, msg#366929): Are there DEXes that do not cause impermanent loss?
  **A** (@Flying Pig (™), msg#367267): Liquidity pools inherently create price impact on large purchases; Ergo pools are smaller than other chains, making slippage more noticeable. Order book DEXes (Trade House) allow full control over execution price to mitigate slippage.

- **Q** (@Unknown, msg#367138): Isn't an Ergo EVM sidechain a good idea to onboard users?
  **A** (Implicit from context, msg#367140): No direct response; flagged as open question.

- **Q** (@Luivatra, msg#367227): How to verify user without transaction?
  **A** (@Luivatra, msg#367230): Refer to EIP-0028 for ergoauth pattern enabling user verification via signed message without on-chain transaction.

- **Q** (@Unknown, msg#367438-440): What are maximum inputs X and outputs Y in a single transaction where X = Y?
  **A** (Unresolved): Question posted but no answer provided in chat.

- **Q** (@Mh Mh, msg#367445): How will ERG fees work after all coins are mined (post-2045)?
  **A** (@Benny & @ThatOtherFella, msg#367450-451): Storage rent mechanism will replace block rewards; see ergoplatform.org storage rent explainer.

- **Q** (@Unknown, msg#367438): Contract deployment on Ergo—what's different from Ethereum?
  **A** (@kushti khushi, msg#367605-607): No distinction between contract and non-contract in Ergo (unlike Ethereum). Everything is a UTXO guarded by a script. Guard scripts are more powerful than Bitcoin but conceptually similar.

- **Q** (@Cheese, msg#367590): In SigmaFi, does all risk go to lender?
  **A** (@Cheese, msg#367591): Currently yes, but lenders will be able to add liquidation conditions in future version. Contract is already built; implementation work remaining.

- **Q** (@Jack Σ, msg#367593): Are there Ergo job/recruitment channels for developers?
  **A** (@chrom, msg#367597): Discord has job-bounties channel; Telegram has ErgoDevelopers channel (t.me/ErgoDevelopers). Introduce yourself with skills/interests in dev channels.

## Links Shared

- [ergoraffle.com raffle](https://ergoraffle.com/raffle/show/b312c002a0b1671a0089fabc2d1a028e5938d46b1b2180d7e480e760526408ce): ErgoHack VI Community Vote Fund raffle
- [Rosen Bridge UI preview (Reddit)](https://www.reddit.com/r/ergonauts/comments/10uifu0/rosen_bridge_ui_preview/): 100+ upvotes on community interest
- [ErgoHack VI registration](https://youtu.be/3QF7r4tikyI): Registration now open
- [ErgoHack VI welcome video](https://youtu.be/_9D3i2ykm8k): Introduction and welcome by Armeanio
- [Spectrum DEX bot announcement](https://twitter.com/SpectrumLabs_/status/1622565956743491588): Spectrum bot live
- [DuckPools ErgoPad staker round](https://www.ergopad.io/contribute/duckpools/staker): Staker round contribution form (sold out by 2023-02-10)
- [DuckPools public whitelist](https://www.ergopad.io/whitelist/duckpools/public): Public round whitelisting
- [Storage rent explainer](https://ergoplatform.org/en/blog/2022-02-18-ergo-explainer-storage-rent/): Technical explanation of storage rent mechanism
- [Sigma Rust WASM fix (PR #682)](https://github.com/ergoplatform/sigma-rust/pull/682): TC39 weak ref support for WASM bindgen
- [Minotaur wallet v1.1.2 release](https://github.com/minotaur-ergo/minotaur-wallet/releases/tag/v1.1.2): Multisig bug fixes
- [Ergo scalability discussion](https://ergoplatform.org/en/blog/2022-01-18-ergo-blockchain-scalability-and-adoption/): Forum post on layer 2 and scalability options
- [ErgoDevelopers Telegram](https://t.me/ErgoDevelopers): Development community channel
- [Weekly Developer Update](https://youtu.be/ftVRL3IyF1M): Core updates on UTXO snapshot, NIPoPoWs, Rosen Bridge, Oracles v2, Dexy, Sigma Rust, AppKit
- [EIP-0028 ergoauth](https://github.com/ergoplatform/eips/blob/5b1eeb1bff86960a10f0a4dcb35259679dadb434/eip-0028.md): User authentication without transaction
- [German Ergo group](https://t.me/ergoplatform_german): Regional language community

## Unresolved Questions

- **ErgoHack VI project list visibility** [@dayumbbbb, msg#366952]: Request for visible list of proposed projects; directed to Discord Ergohack section (msg#367050)
- **Maximum transaction inputs/outputs** [@Unknown, msg#367438-440]: Specific constraint on X and Y where X = Y—no answer provided
- **EVM sidechain development** [@Unknown, msg#367140]: Whether Ergo-EVM sidechain is in development—no explicit confirmation given
- **2025 bull cycle speculation** [@Fabulaowski, msg#367545-546]: Why 2025 specifically for price appreciation; answered with BTC halving cycle reference but not consensus
- **Cardano KYC for validators** [@Unknown, msg#367620-629]: Ongoing concern about IOG potentially adding optional KYC for Cardano validators; flagged as future risk if implemented before Voltaire governance goes live
- **Spectrum yield farming timeline** [@Pulsarz, msg#367270]: "Within 2 weeks" is tentative pending final testing (msg#367271)
- **Ledger ERG support** [@Glasgow｜WON'T DM, msg#367221]: Support is in security audit; release date TBD

---

**Note**: This week's chat was moderately active with strong focus on ErgoHack VI launch, Rosen Bridge progress, and DEX/lending platform updates. Price speculation and off-topic discussion were minimal compared to typical community chats.