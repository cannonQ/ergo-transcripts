# Ergo General Chat — 2025-W09 Summary

## Key Topics Discussed

- **Rosen Bridge BSC Integration**: Rosen Bridge officially integrated with Binance Smart Chain, enabling trustless cross-chain asset transfers and creating rsBNB/ERG trading pairs on MewDex. Multiple liquidity pools bootstrapped via MewFund with successful fundraising.

- **6.0 Soft-Fork Testnet Activation**: 6.0 soft-fork activated on testnet with protocol v4 blocks. Security audit fundraising ongoing via Ergo Raffle. RC2 release available for miners and node operators to test.

- **Ledger Hardware Wallet Support**: Ergo app for Ledger merged into main repository and expected in next Ledger release. Keystone hardware wallet support coming in March 2025.

- **Block Confirmation Speed & Storage Rent**: Discussion of faster block times, mempool behavior, and transaction confirmation variance. RBF (Replace-By-Fee) mechanics confirmed to operate on Ergo; transactions unconfirmed for ~2 minutes remain replaceable.

- **Consensus & Interoperability with Cardano**: Charles Hoskinson (IOHK) publicly mentioned Ergo as potential "partner chain" leveraging superior consensus mechanism. Discussion of merge-mined sidechains, NIPoPoWs, and Rosen-based interoperability frameworks.

- **Market Making & CEX Strategy**: Ongoing debate over liquidity allocation: centralized exchange MM (~$5k/month across MEXC, HTX, KuCoin) vs. DEX-native liquidity through Rosen. HTX confirmed useful for high-withdrawal KYC-free stacking (5 BTC/day limit).

- **MewFinance & Open-Source Philosophy**: HQ3rr defended MewFinance closed-source frontend and fee structure against criticism; emphasized distinction between UI licensing and smart contract transparency. Fee-gated dApps debate: closed UIs acceptable if backup skeleton explorer UIs exist; closed contracts viewed as higher concern.

- **ErgoFi UTXO Streaming & 0-Conf**: c8 detailed web wallet streaming architecture: real-time UTXO updates via EIP connector feature required to prevent password prompts per transaction. 0-conf viable for low-value txs; RBF and mempool timeout (~8 mins typical) constraints acknowledged.

- **Kraken Direct Engagement**: kushti confirmed direct talks with Dave from Kraken regarding FAKU token airdrop and listing possibilities. No commitments yet; speculative discussion of listing fees (potentially $1M–2M+ based on Bybit pricing sheet referenced).

- **Storage Rent & Demurrage**: Emergence of demurrage discussion in community; spontaneous Twitter adoption noted. Emission reduction (~40 days away) tied to long-term tokenomics narrative.

## Important Decisions or Announcements

- [@kushti khushi, msg#548025, 2025-03-02]: **Emission reduction in approximately 40 days** — major tokenomics milestone approaching.

- [@ergo_platform (via msg#547434), 2025-02-25]: **6.0 RC2 release available** for testnet mining and node testing; final audit ongoing before mainnet release and miner voting.

- [@kushti khushi, msg#547905–msg#547907, 2025-02-27]: **Ledger Ergo app merged** — PR #11 merged to ledger-app-ergo repository; expected in next Ledger release.

- [@HQΣr | Wont Dm 🐾 ⚡, msg#547780, 2025-02-26]: **Keystone hardware wallet support shipping March 2025** with discounted pricing available for late adopters.

- [@Rosen Bridge (via msg#547434), 2025-02-25]: **Rosen Bridge—BSC integration live**; rsBNB/ERG pair trading on MewDex with successful LP fundraising via MewFund.

- [@qx(), msg#548010, 2025-02-28]: **ergo.aap.cornell.edu back online with RocksDB upgrade** — faster performance on new database backend.

- [@kushti khushi, msg#548460, 2025-03-02]: **Upcoming community events announced**:
  - Mar 6: Community townhall "Ergo as the Endgame for Crypto"
  - Mar 13–14: Twitter Spaces "Programmable reserve assets, and quest for better money on top of them"

- [@HQΣr | Wont Dm 🐾 ⚡, msg#548247–msg#548249, 2025-03-01]: **MewFund API & webhook implementation underway** to display all contributions on-chain for transparency; concerns addressed re: honeypot allegations.

## Technical Q&A Worth Preserving

- **Q** (@He Purchased?, msg#547915): "Could not register the request. Cannot convert undefined to a bigint" error when buying SigmaRSV on Spectrum DEX.
  **A** (@c8, msg#547927–msg#547928): Issue typically from wrong website. Use ergfi.xyz or Spectrum DEX direct link; wrong GraphQL endpoint in Nautilus settings can cause type conversion errors.

- **Q** (@Unknown, msg#548017): How to access GoodThingsDAO chat?
  **A** (@Unknown, msg#548017): Beta Paideia instance: `https://beta.paideia.im/goodthingsdao/discussion/welcome-please-read-1466d42f-8a82-412e-8669-8ea5b09da6b2`

- **Q** (@Unknown, msg#547997): Password requirement per transaction — feasibility of session-based spending limits (like credit card tap limits)?
  **A** (@c8, msg#547999): Second major Nautilus change needed is streaming UTXO updates. Session-based limits could work but require EIP connector feature for streaming balance updates to UI.

- **Q** (@c8, msg#547821): Double-spend risk over time horizons?
  **A** (@c8, msg#547821): Value-dependent: 1 BTC tx requires ~1 week on Bitcoin for low risk; ~2 seconds average case acceptable for Ergo given RBF mechanics. Transaction unconfirmed >2 min remains replaceable.

- **Q** (@Pulsarz, msg#547836–msg#547847): Transaction inclusion variance — when does mempool refresh happen?
  **A** (@Pulsarz, msg#547839–msg#547847): PR periodically refreshes mempool state for next block candidate. Minimum inclusion reduced from 2 blocks to 1; variance due to block time randomness significant factor.

- **Q** (@Unknown, msg#548001): Is ergfi.xyz streaming real-time UTXO updates?
  **A** (@c8, msg#548076): Bottom-left active transaction feed yes; top-right user balance experimental. Optimal architecture is web wallet connector EIP streaming user balance to dApp.

- **Q** (@HQΣr | Wont Dm 🐾 ⚡, msg#547825–msg#547826): Does ErgFi use last confirmed state for fee handling?
  **A** (@HQΣr | Wont Dm 🐾 ⚡, msg#547826): Implied yes; fee wheel mechanism designed to "fight" unconfirmed state issues.

- **Q** (@Unknown, msg#548341): Can API key hash be changed in node config for security?
  **A** (@kushti khushi, msg#548432): Set new key hash in node configuration file. (@Patato, msg#548348): Alternatively change API key hash in node config, you're good.

## Links Shared

- [https://fund.mewfinance.com/contribute]: MewFund campaign for rsBNB/ERG LP on Ergo side; contributors receive LP tokens if successful, refund if target missed.

- [https://trading.mewfinance.com/token?tokenId=050322548722d36f094e341f59ed93eb22118b363eb4efe8c461a52c4d93e2c3]: rsBNB/ERG pair tracking, price metrics, and stats on MewDex.

- [https://trading.mewfinance.com/campaigns]: MewDex DEX campaign with 500 MEW reward for highest trading volume.

- [https://testnet.ergoplatform.com/]: Ergo testnet explorer showing 6.0 block protocol v4.

- [https://github.com/ergoplatform/ergo/releases/tag/v6.0.0-RC2]: 6.0 RC2 release for testnet mining and node testing.

- [https://github.com/LedgerHQ/app-ergo/pull/11]: Ledger Ergo app PR #11 merged; expected in next Ledger release.

- [https://github.com/SavonarolaLabs/ergofi]: ErgFi repository with Dexy Protocol functionality support.

- [http://nodeview.xyz/]: Thin node-based explorer with new features.

- [https://njump.me/naddr1qqxnzde5xqenxwfj8yunzd3sqgsrl7kr5my9n6423nwaktrsq2nwzzenal4e95p9k9826mu294jkv4crqsqqqa28tlufgp]: Nostr proposal for anonymous event relaying (kushti share).

- [https://ergoraffle.com/raffle/show/850d0c68a883b1d6822148fc20708948e0aa97a768fb976ce3b20fad878ef89a]: 6.0 security audit fundraising raffle.

- [https://chromewebstore.google.com/detail/nautilus-abyss/moaohjebjfiodfiegjnjkbnalepemcpf]: Redesigned Nautilus Abyss version for testing (arobsn).

- [https://ergfi.xyz/]: Recommended UI for SigmaRSV trading (stable interface).

- [https://www.ergodex.io/ergo/swap?base=...&quote=...&initialPoolId=...]: Spectrum DEX direct swap link for SigmaRSV.

- [https://beta.paideia.im/goodthingsdao/discussion/welcome-please-read-1466d42f-8a82-412e-8669-8ea5b09da6b2]: GoodThingsDAO Paideia discussion forum.

- [https://sigmanauts.com/mining/]: Sigmanauts mining pool info and bonus token details.

- [https://www.youtube.com/watch?v=nYqX9VC6mYw]: Ergo dev update video (Feb 24).

- [https://www.youtube.com/watch?v=jXYo3RkUOvs]: Ergo dev update video (Feb 16).

- [https://www.youtube.com/watch?v=XPOZj2yWU_o]: P2P podcast "Ergo, AI, and Player vs Environment".

- [https://blockworks.co/news/bull-market-pullback]: Bull-market pullback terminology reference.

- [https://x.com/StabilityNexus/status/1895434482217558043]: kushti talk on stablecoin regulatory incoherence (ETH Denver Monday).

- [https://x.com/IOHK_Charles/status/1896280148124778998]: Charles Hoskinson mention of Cardano partner chains.

- [https://www.youtube.com/live/H4dqe9G7KJY]: Cardano video explaining partner chain concept (Richi reference).

- [https://x.com/chepurnoy/status/1896366479920259581]: kushti tweet (context unclear from excerpt).

- [https://x.com/chepurnoy/status/1896372894953099359]: kushti tweet (context unclear from excerpt).

## Unresolved Questions

- **CEX Listing Path**: Kraken talks initiated but no commitment; Bybit listing fee estimates ($1M–$2M+) discussed but unconfirmed. Binance listing still discussed as goal but no official pathway confirmed.

- **Rosen Bridge Maturity & Risk**: Opinion split on timing to withdraw market-making from centralized exchanges in favor of Rosen-based DEX liquidity. When is Rosen "proven enough"? No consensus timeline.

- **MewFinance Open-Source Expectations**: c8 raised concerns about closed-source UI and potential forking with 0% fees; HQ3rr countered with business sustainability arguments. Philosophical debate unresolved: is UI licensing acceptable if contracts are open, or are both required?

- **Storage Rent as Feature vs. Bug**: Demurrage/storage rent enthusiasm rising in community, but unclear if protocol-level incentive alignment or governance plan exists to manage long-term implications of "dormant UTXO cleanup."

- **Block Time Acceleration for 6.0**: Discussion of faster blocks (reducing 120s block time) noted as possible enhancement but design constraints (block height vs. timestamp dependencies) identified. No RFC or formal proposal yet; kushti seeking interested contributors to testnet experimentation.

- **Sidechain Construction Publication**: kushti mentioned sidechaining constructions "soon to be published" on forum, including merge-mined sidechain designs and trustless relay mechanics, but no release date given.

- **Hardware Wallet Support Timeline**: Ledger confirmed merged but no exact mainnet release date. Keystone announced March 2025 but no specific date; support for flex/stax models confirmed but other details TBD.

- **Consensus "Partner Chain" Definition**: Charles Hoskinson's "partner chain" term remains vague in Ergo context. Relationship could mean Rosen interop, dual-mining sidechains, or shared reserve assets — no formal specification.