# Ergo General Chat — 2022-W04 Summary
**Period:** 2022-01-24 to 2022-01-30  
**Total Messages:** 1,424 | **Active Participants:** 155+

---

## Key Topics Discussed

- **KuCoin and CoinEx Withdrawal Issues**: Extended maintenance problems across both exchanges throughout the week. KuCoin experienced repeated issues with ERG deposits/withdrawals; CoinEx had wallet maintenance that lasted until at least 2022-01-30. kushti and team were debugging with KuCoin support.

- **Yoroi Wallet Performance Crisis**: Widespread sync failures, unresponsiveness, and dApp connector limitations. Nightly version required for ErgoDex access but caused slow transactions (3+ hours reported). Major bottleneck for ecosystem UX.

- **Nautilus Wallet Early Adoption**: Community praised new browser extension wallet for speed, responsive development, and clean UI. Positioned as Yoroi alternative. dApp connector support in development.

- **Ledger Hardware Wallet Support**: Armeanio reported completion of debugging (finished ~2022-01-25). Planned rollout to Yoroi and Nautilus for integration. Critical missing piece before major exchange listings.

- **NETA Token Airdrop and Listing**: ErgoDex airdrop distributed to users who performed swaps. NETA listed 2022-01-27. Explorer traffic spike from airdrop swap activity caused temporary node issues.

- **Storage Rent Mechanism**: Questions raised about dormant wallet fees (0.14 ERG per inactive box after 4 years). Users clarified that only boxes without ERG pay from token reserves; movement resets timer.

- **Spectrum DEX (Cardano Integration)**: ErgoDex testnet on Cardano expected in few weeks, mainnet weeks after. Initial launch will support ADA-native token pairs (Djed, Genius Yield announced). Cross-chain bridge (Rosen Bridge) planned for Q2 2022.

- **Proof-of-Vote (EIP-0027) Voting**: GetBlok's POV token framework discussed. Tokens minted for this specific vote; future votes will require new token generation. All tokens from EIP-0027 will be burned after voting.

- **Palmyra and Oracle Partnerships**: Dan Friedman discussed Winter Protocol, Chainlink integration for proof-of-reserve on warehouse receipts. Plan to invest capital from token sale into building native Ergo Oracle Pools (v1 and v2 with GORT rewards).

- **Autolykos Mining Algorithm Efficiency**: Ergo is ASIC-resistant via memory-hardening. GPU-friendly mining (Autolykos, not Autolykos DAO as sometimes misspoken). Discussion on energy efficiency vs PoS chains remained contested; no consensus reached.

- **ErgoDex on Cardano Differentiators**: Order book DEX model, cross-chain liquidity, refundable ICO contracts (vs SundaeSwap's closed licenced scooper model). Multiple EVM chain bridges planned post-Solana (estimated ~2 weeks between bridge deployments).

---

## Important Decisions or Announcements

- [@Armeanio, msg#250780, 2022-01-25]: Ledger app debugging finished "today" — rollout within a week ideally.

- [@Armeanio, msg#250793, 2022-01-25]: Contacted Yoroi and Nautilus wallet developers to pull and test Ledger integration.

- [@Gazza, msg#250375, 2022-01-24]: Spectrum DEX fully released on Ergo; Cardano testnet in next few weeks, mainnet a few weeks after.

- [@Gazza, msg#250638, 2022-01-25]: Same timeline confirmed for Spectrum on Cardano testnet.

- [@CW, msg#250430, 2022-01-24]: Once Solana bridge (SuSy) complete, same tooling reusable for EVM chain bridges; ~2 weeks between subsequent bridge completions.

- [@Dmitry Usov, msg#251525, 2022-01-27]: New Ergo Explorer main page ending development; SigmaVerse UI improvements follow.

- [@Dmitry Usov, msg#251547, 2022-01-28]: New explorer hoped to go live in February if all goes well.

- [@MrStahlfelge, msg#251824, 2022-01-29]: Minted Android/iOS wallet token on testnet using ErgoPay; description references wallet development in progress.

- [@Dan Friedman, msg#251237, 2022-01-27]: Requesting community feedback on Nautilus wallet UX — "what was good, what was not so good."

---

## Technical Q&A Worth Preserving

- **Q** (@Ian Lee, msg#250501): How does running nodes help Ergo? What advantages for node operators?  
  **A** (@Unknown, msg#250509-510): Enables custom node wallet commands; one step away from running an oracle.

- **Q** (@Unknown, msg#250620): Can NETA be traded on ErgoDex? If not, when?  
  **A** (@Unknown, msg#251403): Not yet, but will be listed tomorrow (2022-01-27 timeline).

- **Q** (@T F, msg#250709): Why would running a full Ergo node benefit the blockchain and oracle pools?  
  **A** (@TMR.ΣRG, msg#250721): Full nodes validate transactions and relay to other nodes, increasing decentralization. No direct rewards, but enables private/secure txn sending, solo mining, oracle pool operation, ErgoDex bot running — all with monetary rewards. Reference: Satergo wallet.

- **Q** (@Veyloris, msg#250374): How many confirmations needed for tokens on ErgoDex?  
  **A** (@Unknown, implied): Wallet must be synced; confirmation count not critical beyond network sync.

- **Q** (@PalaZ, msg#251673): How to find my public key?  
  **A** (@Gazza, msg#251675): In Yoroi, Settings → Wallet → Export; public key shown there.

- **Q** (@United4life, msg#251072): Will I lose ERG if my Yoroi wallet is dormant for 4 years?  
  **A** (@A, msg#251074-75): Not all — 0.14 ERG per inactive box charged as storage rent (assumes dead wallet). Network fee mechanism.

- **Q** (@Klaus, msg#251649): Can I sell same NFT twice? Ethical barriers?  
  **A** (@Klaus, msg#251646): Second NFT has different asset ID (different token). Only ethical barrier unless artist announced "1 of 10" beforehand. Laws may change; trust remains essential in art.

- **Q** (@Hasnain, msg#251755): Can 12-word seed phrase be restored in Android wallet?  
  **A** (@Unknown, msg#251757): Yes, Ergo Wallet on Android by Ben supports restoration.

- **Q** (@SebiVagyok, msg#252129): Which wallet has "send all" feature?  
  **A** (@Dani, msg#252132): Ergo Wallet (mobile) supports send all tokens at once.

- **Q** (@A, msg#251315-316): Are new voting tokens released before each vote? Are they distinguishable from previous ones?  
  **A** (@ArØhβΣ @Arohbe, msg#251323, 251325): EIP-0027 tokens specific to this vote. Future votes require new tokens. All EIP-0027 tokens usable for voting; excess will be burned.

- **Q** (@Unknown, msg#251911): What determines NETA price on ErgoDex if no limit orders exist?  
  **A** (@Affable Villain, msg#251913-914): AMM (Automated Market Maker). Price moves up when people buy, down when they sell.

---

## Links Shared

- [https://docs.ergoplatform.com/dev/protocol/eutxo/](https://docs.ergoplatform.com/dev/protocol/eutxo/): eUTXO explanation vs accounting model

- [https://docs.ergoplatform.com/dev/protocol/scaling/](https://docs.ergoplatform.com/dev/protocol/scaling/): Scaling solutions for eUTXO (gas vs transaction fees)

- [https://ergonaut.space/en/Guides/yield](https://ergonaut.space/en/Guides/yield): Ergo yield strategies and earning returns (non-staking options)

- [https://ergoplatform.org/en/wallets/](https://ergoplatform.org/en/wallets/): Official wallet list and downloads

- [https://satergo.com](https://satergo.com): Satergo wallet with full node option

- [https://tokenminter.ergo.ga/burn.html](https://tokenminter.ergo.ga/burn.html): Token burner dApp

- [https://explorer.ergoplatform.com/en/oracle-pools-list](https://explorer.ergoplatform.com/en/oracle-pools-list): List of active Oracle Pools on Ergo

- [https://chrome.google.com/webstore/detail/nautilus/gjlmehlldlphhljhpnlddaodbjjcchai](https://chrome.google.com/webstore/detail/nautilus/gjlmehlldlphhljhpnlddaodbjjcchai): Nautilus Wallet Chrome extension (verified)

- [https://t.me/NautilusWallet](https://t.me/NautilusWallet): Nautilus Wallet Telegram community

- [https://github.com/JSONLewis/SundaeSwap](https://github.com/JSONLewis/SundaeSwap): SundaeSwap GitHub (noted as empty/non-transparent)

- [https://susy.one/](https://susy.one/): SuSy bridge (Solana bridge tooling)

- [https://conceal.network/](https://conceal.network/): Conceal Network (CCX) — building bridge to Ergo

- [https://linktr.ee/NightOwlCasino](https://linktr.ee/NightOwlCasino): Night Owl Casino (first decentralized casino on Ergo, coming)

- [https://ergodex.medium.com/reasons-of-network-issues-on-january-28th-20113ef960a5](https://ergodex.medium.com/reasons-of-network-issues-on-january-28th-20113ef960a5): Explorer node incident analysis (NETA listing traffic spike 2022-01-28)

- [https://medium.com/@anetaBTC/neta-tokenomics-55629989de2b](https://medium.com/@anetaBTC/neta-tokenomics-55629989de2b): NETA tokenomics

- [https://twitter.com/getblok_io/status/1484747277679874051](https://twitter.com/getblok_io/status/1484747277679874051): GetBlok POV voting framework flow diagram

---

## Unresolved Questions & Debates

- **Proof-of-Work vs Proof-of-Stake**: Extended debate (msg#251045 onwards) on PoW energy efficiency, scalability, and centralization. No consensus reached. PoS advocates cited energy concerns; PoW defenders cited Autolykos efficiency and Ergo's memory-hardening. Centralization trade-offs remain contested.

- **Storage Rent Exponential Decay**: [@€rgonauta, msg#251842]: Proposed exponential fee structure for dormant wallets (increasing percentages over time). Raised concern that 100-year-old lost wallets retaining ERG contradicts community fund logic. No team response recorded.

- **Explorer Centralization**: [@A, msg#251089-90]: If only Ergo Foundation's explorer node works reliably, is this a decentralization weakness? Acknowledged as concern (msg#252093: "it is"), but no mitigation plan discussed. New replica being added as temporary fix.

- **Coinex ERG Deposits Stuck**: [@Rastimonac, msg#252051, 2022-01-30]: Deposits made 2022-01-28 still unconfirmed as of 2022-01-30. Exchange support unresponsive. No official update provided.

- **Yoroi Seed Phrase Restoration Bug**: [@Unknown, msg#251903, 2022-01-29]: Yoroi made user re-restore wallet; seed phrase restored to different address with zero balance. May indicate scam or wallet bug. Status unknown — flagged to support, no resolution recorded.

- **ErgoDex + Cardano Differentiation**: [@Unknown, msg#252152, 2022-01-30]: Questions whether ErgoDex on Cardano launch delay reflects genuine improvement vs market readiness. Team responses focused on features (order book, cross-chain) rather than timeline justification.

- **Mobile Wallet Derivation Inconsistency**: [@Hasnain, msg#251758-775]: Restored 12-word seed on Android Ergo Wallet produced different address than Yoroi and Nautilus. Suggested workaround (derive more addresses in settings) not confirmed as resolving the issue. MrStahlfelge investigating derivation path matching.

- **Ledger Support ETA Uncertainty**: Despite Armeanio's "within a week" statement (msg#250780), exact rollout date and wallet(s) receiving support simultaneously remains unclear. Integration dependency on Yoroi/Nautilus developers' review timeline unspecified.

---

## Community Observations

- **Scammer Prevalence**: Repeated warnings about DM scammers impersonating admins. Users baited scammers successfully (msg#251187: asking for seed phrase reversed scam). Official guidance: block immediately, never respond to unsolicited DMs, use @ergosupport for legitimate help.

- **Exchange Liquidity Concerns**: Multiple users noted difficulty buying ERG in certain jurisdictions (US users needing BTC intermediary). TradeOgre and KuCoin mentioned as primary options, though KuCoin fees sometimes high. CoinEx cited as having constant maintenance issues.

- **Wallet UX as Major Bottleneck**: Near-universal frustration with Yoroi (even Nightly) creating friction for ErgoDex and broader adoption. Nautilus emergence framed as "savior" (msg#251243-245). Consensus that wallet stability prerequisite to major exchange listing.

- **Charles Hoskinson (Cardano founder) Endorsement**: Twitter Spaces shilling (2022-01-25) where CH stated if he had $1M, he'd buy Ergo. Community noted undervaluation and appreciated external validation, though impact on price and adoption unclear.

---

## Summary

Week 2022-W04 was dominated by **infrastructure pain points** (Yoroi, exchange maintenance) offsetting positive technical progress (Ledger completion, Spectrum testnet timeline, NETA airdrop). **Nautilus wallet emergence** and **Palmyra/Oracle partnership expansion** represented ecosystem maturation, but real growth hinged on resolving wallet UX and exchange liquidity bottlenecks. **No major protocol upgrades or critical bugs reported**, but operational friction with centralized touchpoints (exchanges, Yoroi) exposed scaling and UX gaps before broader adoption.