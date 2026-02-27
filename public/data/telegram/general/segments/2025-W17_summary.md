# Ergo General Chat — 2025-W17 Summary

## Key Topics Discussed

- **Sub-blocks Implementation Progress**: kushti reported that support for disallowing transactions reading certain header candidate fields (timestamp, miner pubkey, votes) is complete in Sigma. Block candidate generation is being reworked, with public devnet or testnet deployment expected within 7–10 days. Full implementation roadmap includes AVL+ tree diffs, in-memory persistence, new transaction fee script, and efficiency improvements toward mainnet.

- **Ledger Hardware Wallet Integration**: Ergo app is now out of developer mode on Ledger Live (v0.0.7) and officially audited. Token limit set to 100 per transaction on newer devices; older Nano S units no longer supported. Users must still use Nautilus browser extension wallet for Ledger signing, not the Ledger Live app itself.

- **6.0 Protocol Release**: Version 6.0.0 codebase is finalized and under review (>16k lines of code changes). Soft-fork nature increases complexity. New capabilities enabled include Bitcoin trustless relays, Lithos, verification of bulletproofs, log-size ring signatures, and compact Sigma protocols. Mining node voting start height to be announced in coming days.

- **Ecosystem Roadmap & DexyUSD**: Community chat held on 2025-04-25 to discuss "Ecosystem roadmap 2025+: core development, new dApps, AI, interfaces, tooling for adoption." DexyUSD liquidity pool updates and launch flagged as critical for increasing ERG demand and TVL. rsERG listing on Kraken discussed as wrapped-token option while native integration remains unlikely in near term.

- **Sidechain & Merge-Mining Strategy**: Discussion of merged-mined sidechains that could reward both Ergo miners and Cardano SPOs. Question raised whether merged-mined sidechain could also be a Cardano partner chain for Midnight network integration. No consensus reached; flagged for further exploration after 6.0.

- **Nautilus Wallet UX & Multisig**: Multisig support planned at dApp connector level first, then full support with communication protocol (like Minotaur). Mnemonic confirmation screen in recent update flagged as UX friction by c8. Token registry and Ledger compatibility broadly praised.

- **Chainlink Partnership for Palmyra**: Dan Friedman outlined proof-of-reserve integration via Chainlink for decentralized trade financing. IoT devices (cameras, weight/motion sensors) coupled with on-chain oracle to issue warehouse receipts. Plan to utilize multiple oracles including Ergo oracles; capital from token sale earmarked to build out Ergo Oracle infrastructure.

- **CoinEx Deposit Processing**: kushti clarified that CoinEx will process deposits after maintenance; exchange was hacked in Sept 2023 and sent 2M ERG to original cold wallet few days ago.

- **Ouinex Exchange Listing Initiative**: Community member (LifeOfIFA) coordinating introduction between Ouinex CEO and Ergo core team (kushti, Armeanio, qx(), CannonQ). Group created for discussion; listing criteria still TBD.

## Important Decisions or Announcements

- [@kushti, msg#555601, 2025-04-21]: Sub-blocks implementation now supports disallowing transactions from reading header candidate fields; switching to validate transactions and form sub-blocks per EIP.

- [@qx(), msg#555649, 2025-04-22]: Ergo officially out of developer mode on Ledger with v0.0.7 release.

- [@kushti, msg#555655, 2025-04-22]: Oracle Core v2.0.3 released.

- [@kushti, msg#555790, 2025-04-23]: Ergo Developers chat scheduled (2 hours from message).

- [@Glasgow, msg#555792, 2025-04-23]: Ledger dropping support for Nano S; Ergo app will not be available on that device.

- [@Ergo NEWS $ERG, msg#555810, 2025-04-23]: Ergo Wallet fully integrated with Ledger; app is audited and no longer requires Developer Mode on Ledger Live.

- [@kushti, msg#555906, 2025-04-24]: Proper sub-blocks transaction validation done with initial tests; block generation fix and review next.

- [@kushti, msg#556030, 2025-04-25]: Sub-blocks reworking complete; public devnet or testnet testing can start end of next week.

- [@kushti, msg#556035, 2025-04-25]: Community chat scheduled for 6 PM UTC on 2025-04-25 to discuss ecosystem roadmap.

- [@kushti, msg#556097, 2025-04-25]: Protocol state: 5.0.26 under review; 6.0.0 finalized and under review; sub-blocks devnet/testnet in 7–10 days.

- [@Andy L, msg#555892, 2025-04-24]: Weekly AMA cancelled due to participant unavailability; to resume next week.

## Technical Q&A Worth Preserving

- **Q** (@flying_pig): What is the token limit now for Ledger?
  **A** (@anon_br): Now it's 100 tokens per transaction; depends on device version. Nano S still maxes at 20 (but device no longer supported).

- **Q** (@dihe): Can't find Ergo when trying to receive ERG on Ledger Live.
  **A** (@pulsarz): Ergo is not on Ledger Live. Must use Nautilus browser extension wallet. Ergo app on Ledger is for hardware signing only, not asset management within Ledger Live.

- **Q** (@felipe): Enabled developer mode but Ergo app still not appearing on Ledger Nano S.
  **A** (@glasgow): App is out of developer mode now, so dev mode not needed. But Ledger is sunsetting Nano S support entirely. See: https://www.ledger.com/the-ledger-nano-s-sunset-the-next-phase-in-our-web3-hardware-journey

- **Q** (@bobmoris): Can we fully store assets on Ledger now?
  **A** (@hq3rr): 100 token max per transaction. (@anon_br clarification): Nautilus' change strategy prevents box size lockup; only way to get stuck is if you receive a transaction with >100 tokens from another party.

- **Q** (@matt-k [Discord]): How to set daemon username/password for MiningCore?
  **A** (@pluno [Discord]): Refer to Ergo node configuration documentation for ergo.conf daemon credentials setup.

- **Q** (@richi): Is listing rsERG on Kraken vs. native integration a business decision?
  **A** (@kushti): Mostly decided by Kraken; native integration not currently an option they'll discuss. (@cannon_q): Fireblocks or similar integration needed for many CEX/ramps; Ergo lacking this.

- **Q** (@richi): Should Ergo join Midnight network framework? Does it require consensus changes?
  **A** (@glasgow): Cardano is contacting about framework; shouldn't require consensus changes per AFAIK. Ergo more compatible out-the-box than Cardano. Also pushing for native integration via Lagon contact.

- **Q** (@K_Chan): Will sub-blocks greatly increase full node disk size?
  **A** (not directly answered; kushti implied infrastructure implications under active work).

- **Q** (@anon_br): Is it possible to have multisig without commitment sharing, like in Bitcoin on Ergo?
  **A** (@kushti): Can do token-based voting or custom sig validation including Bitcoin-style. Native threshold signature preserves ZK (outside signing ring unknown who signed); requires off-chain communication.

- **Q** (@anon_br): Will multisig be supported by Nautilus?
  **A** (@anon_br): Yes, planned. First at dApp connector level, then full support like Minotaur with communication protocol.

- **Q** (@tmr.σrg): Can you explain sidechains / sigmachains overview — how different from L2, what is possible?
  **A** (@kushti): Sidechains vs L2 use-case dependent. Reference: https://x.com/chepurnoy/status/1915836974411243805

- **Q** (@tmr.σrg): How flexible is sidechain construction? Can you build one for managing credentials/portfolios with admin undo capability?
  **A** (@kushti): Not directly addressed; implied flexibility exists but architecture-dependent.

- **Q** (@c8): What would be interesting about a p2p sidechain? Either very fast/cheap or ultra private?
  **A** (@kushti): Network latency constraints (900ms China-Argentina ping). Other approaches like Kaspa (included somewhere, then included worldwide) possible.

- **Q** (@tmr.σrg): Can you talk about sub-second finality, ultra-cheap tx sidechains with heavy hardware validator set?
  **A** (@c8): Yes possible, but requires some DAG approach without full history. (@kushti): Would require miners limited by geography.

- **Q** (@c8): Why use Rosen for DexyUSD liquidity strategy?
  **A** (@c8): Doesn't see Rosen's potential; maybe plugged in later. (@richi): Focus on rsDexyUSD/USDT pools on Binance chain, expand DexyUSD liquidity across chains (ADA, ERG, BNB, etc.).

- **Q** (@K_Chan): Where is the introduction about sub-block? Does it reward ERG?
  **A** (@cafe_ergo): https://docs.ergoplatform.com/uses/sidechains/subblocks/

- **Q** (@c8): Regarding Nautilus redesign — is mnemonic confirmation screen part of the update?
  **A** (msg#556428, c8): Confirmed; flagged as major UX friction that should be removed. Suggestion: focus on streaming UTXO, removing password barrier, browser-specific features.

## Links Shared

- [https://libsearch.ceu.edu/permalink/43CEU_INST/179qfpk/alma991003654059808861]: kushti's thesis on CirclesUBI Berlin Pilot Project and lessons learned on currency design.

- [https://www.livecoinwatch.com/price/Ergo-ERG]: Yulius repeated requests for community vote support.

- [https://github.com/ergoplatform/oracle-core/releases/tag/v2.0.3]: Oracle Core v2.0.3 release.

- [https://support.ledger.com/article/6892461437597-zd?redirect=false]: Ledger Ergo support article (out of dev mode).

- [https://x.com/Mew_finance/status/1914720432562831685]: MewMart update announcement (collection tracking, simplified listing/buying/offering).

- [https://www.ledger.com/the-ledger-nano-s-sunset-the-next-phase-in-our-web3-hardware-journey]: Ledger Nano S sunset details.

- [https://t.me/ErgoDevelopers]: Ergo Developers Telegram chat link.

- [https://x.com/ERG_Armeanio/status/1915466286831985124]: Armeanio's sidechain/Paideia DAO exploration post.

- [https://x.com/chepurnoy/status/1915836974411243805]: kushti's Twitter thread on sidechains/sigmachains overview.

- [https://ergohack.io/]: ErgoHack hackathon (Blockchain + AI).

- [https://docs.ergoplatform.com/uses/sidechains/subblocks/]: Sub-blocks documentation.

- [https://youtu.be/n6cBRx2Ie6A?si=pjIcWkyEls-UKZxn]: TMR.ΣRG rock music link (context unclear).

- [https://www.youtube.com/watch?v=9adRX96a_KE]: Simon's translation of Scott Bessent's speech on USD policy.

- [https://gitsummarize.com/]: AI tool for GitHub summarization (shared by cafe_ergo).

- [https://x.com/ergo_platform/status/1915774218425299087]: Twitter Spaces announcement for community chat.

- [https://coinmarketleague.com/coin/home?league=blockchain]: Voting platform for coin rankings.

- [https://mart.mewfinance.com/]: MewMart interface link.

- [https://github.com/nautls/nautilus-wallet/pull/285]: Nautilus German translation PR (Minotaur description contest).

## Unresolved Questions

- **6.0 Voting Timeline**: Exact block height for soft-fork voting activation not yet announced; kushti to set in "coming days."

- **Native Kraken Listing**: Whether Kraken will ever accept native ERG integration remains unresolved. Wrapped rsERG on Cardano is current path forward, but no firm timeline.

- **Midnight Network Integration**: Framework details from Cardano still unclear; requires more research and documentation on Cardano side. Consensus on whether Ergo should pursue integration not reached.

- **Merged-Mine Sidechain Economics**: Feature set and partner selection (e.g., Cardano SPOs) undefined. Deferred pending 6.0 completion and Cardano clarity.

- **DexyUSD Launch Timeline**: Described as "few months likely" with pool update challenges; no precise date given.

- **Nautilus Multisig UX**: Full communication protocol design for multisig not detailed; dApp connector level implementation prioritized first.

- **Ergo Marketing Structure**: Confusion in community about whether "Ergo Marketing Team" exists. Answer: Ergo Foundation marketing exists, plus community/user-driven efforts; no formal team-wide structure apparent.

- **Ouinex Listing Status**: Exchange due diligence in early stages; acceptance and integration terms still TBD.

- **Sub-blocks Disk Impact**: Full node storage implications of sub-blocks not quantified in chat.

- **Bulletproof Verification in ErgoScript**: kushti exploring feasibility of bulletproof verification done in ErgoScript; status still exploratory.