# Ergo General Chat — 2022-W14 Summary

## Key Topics Discussed

- **ErgoPulse & Community AMA**: Major video featuring Charles Hoskinson, kushti, DanielTetsuyama, and Armeanio discussing Ergo, Cardano, and blockchain industry direction. Pre-recorded in Dubai with Charles asking Armeanio frequently for his perspective [@glasgowm, msg#267020, 2022-04-04; @TMR.ΣRG, msg#267072].

- **EIP-27 (Emission Reduction & Storage Rent)**: First indicative vote completed; testing underway on DevNet with final voting and activation procedure refined. No block height fixed yet; 724k was example only. Miners will need accounting changes and pools must prepare [@Glasgow, msg#268231; @kushti, msg#268896, 2022-04-10].

- **Wallet Issues & Nautilus Adoption**: Yoroi experiencing widespread hanging/sync issues; Nautilus emerging as stable replacement. Community directed to restore seeds in Nautilus and disable Yoroi plugin [@glasgowm, msg#267055, 267062, 267068; @Unknown, msg#268689].

- **Ledger Integration**: Still in final bug-fix phase after developer relocation from Ukraine. Backend released; binding library and wallet integration ongoing [@glasgowm, msg#267846, msg#268144, 2022-04-08].

- **ErgoDex Token & Liquidity Pools**: Token details still secret; all early LPs will receive airdrop. ErgoDex live on Ergo chain (beta August 2021), Cardano launch in 2-3 weeks [@Gazza, msg#267170, msg#267195, msg#267201, msg#267229].

- **Storage Rent Mechanics**: Boxes taxed only if unmoved for 4 years; receiving mining rewards does not reset clock. Tax applied per unmoved UTXO [@Glasgow, msg#268308, msg#268300].

- **Privacy & Mixer Development**: ErgoMixer tokenization in progress; optional like Monero but being integrated into wallets/dApps. Night Owl Casino targeting summer 2022 for mixer integration [@TMR.ΣRG, msg#267282, msg#267291].

- **Rosen Bridge Status**: Master Developer working on implementation; Cardano first deployment expected. Chris Ray speculates 3-month timeline but unconfirmed [@Chris Ray, msg#268912, 2022-04-10].

- **ErgoPad & ErgoGames Launches**: ErgoGames.io launching on ErgoPad; Night Owl Casino launching as first casino on Ergo. Both receiving ecosystem attention [@Unknown, msg#267394; @RETRO, msg#267620].

- **Mining Profitability & GPU Market Shift**: Xilinx C1100 FPGA ROI under 1 year at current difficulty/price. Difficulty swings as hashrate moves between Ethereum and Ergo [@Wolf9466, msg#267451-457, 2022-04-05; @Pongko, msg#267578].

## Important Decisions or Announcements

- [@Glasgow, msg#267020, 2022-04-04]: ErgoPulse video released on YouTube (https://youtu.be/k9a3SYV6FJA); major ecosystem milestone featuring Charles Hoskinson roundtable.

- [@kushti, msg#268896, 2022-04-10]: Working on EIP-27 issues identified in testnet; no hard deadline announced.

- [@Glasgow, msg#268844-847, 2022-04-10]: EIP-27 activation procedure revised: final voting required with 90% support within any epoch before activation, tested on DevNet, moving to another testnet round.

- [@Armeanio, msg#268902, 2022-04-10]: Ergo credit card idea under investigation (no timeline given).

- [@Andy L, msg#268050, 2022-04-07]: Ecosystem Promo Week announced for early May; deadline for submissions April 21. Open to projects, tooling, wallets, dApps (NFTs excluded).

- [@Dmitry Usov, msg#267422-429, 2022-04-05]: ErgoPay dApp connector integration in progress for SigmaUSD; Nautilus prioritized, Yoroi and mobile wallet support planned; considering "ergo pay" button for mobile UX.

## Technical Q&A Worth Preserving

- **Q** (@Pongko, msg#267571): Why does Ergo difficulty decrease when nethash increases?
  **A** (@Glasgow, msg#267572): Linked to Autolykos difficulty adjustment mechanism (https://docs.ergoplatform.com/dev/protocol/autolykos/#difficulty-adjustment).

- **Q** (@Veyloris, msg#267524): Can Nautilus extension show current ERG price or only USD total?
  **A** (@Daskre, msg#267534): Hover over USD balance to see ERG/USD conversion.

- **Q** (@Misfit Toy, msg#267644): How does ErgoMixer work?
  **A** (@Glasgow, msg#267652): Puts ERG in box with other ERG, mixes them all, passes along. See blog for details (https://ergoplatform.org/en/blog/2021-05-19-ergo-what-are-bitcoin-mixers/).

- **Q** (@Misfit Toy, msg#267656): If I give someone a receive address, can they see assets in other wallet addresses?
  **A** (@Glasgow, msg#267666): No, unless obvious transaction chain between them exists.

- **Q** (@Aatrox, msg#268820): How to send funds from Ergo paper wallet without restoring it?
  **A** (@Kallo Shaman, msg#268838): Must prove seed phrase ownership; paper wallet alone insufficient. Restore in offline Android wallet or Nautilus, or use cold storage with two devices (offline + read-only).

- **Q** (@S S, msg#267197-225): Will ERG holders receive airdrop for Spectrum DEX token?
  **A** (@Glasgow, msg#267223): ERG is layer-1, cannot be governance token. Airdrops for early LPs—best strategy is to add liquidity or swap and deposit.

- **Q** (@Fabulaowski, msg#268300): Does receiving mining rewards reset the storage rent 4-year clock?
  **A** (@Unknown, msg#268305): No; receiving funds does not reset unmoved UTXO timer.

- **Q** (@Unknown, msg#268152-155): Is personal phone safe for storing crypto? Do keyloggers exist for mobile?
  **A** (@Glasgow, msg#268154-155): Mobile currently safest option; has cold storage support with second device. Keyloggers exist but rare; unlikely unless personally targeted.

## Links Shared

- [https://youtu.be/k9a3SYV6FJA]: ErgoPulse video with Charles Hoskinson, kushti, DanielTetsuyama, Armeanio (pre-recorded in Dubai).
- [https://youtu.be/3h-5YcrHh80]: Weekly AMA with Dan and kushti (2022-04-08, discussing EIP-27 at 22:57).
- [https://youtu.be/LyyD-clUvyI]: Recommended introduction video for newcomers.
- [https://sigmaverse.io/]: Project ecosystem listing (~60+ projects, many not yet listed).
- [https://ergonaut.space/en/Guides/Mining]: Mining guide.
- [https://docs.ergoplatform.com/dev/protocol/autolykos/#difficulty-adjustment]: Autolykos difficulty mechanism.
- [https://ergoplatform.org/en/blog/2021-05-19-ergo-what-are-bitcoin-mixers/]: ErgoMixer explanation.
- [https://www.reddit.com/r/ergonauts/comments/tyymax/tracking_storage_rent_potential/]: Storage rent tracking analysis (Reddit).
- [https://ergodex.io/]: Spectrum DEX live app.
- [https://app.ergodex.io/swap]: ErgoDex swap interface.
- [https://ergoplatform.org/en/blog/2022-03-17-mining-ergo-on-windows/]: Windows mining setup guide.
- [https://github.com/ergolabs/ergo-dex-asset-icons]: ErgoDex token icon submissions.
- [https://dav009.medium.com/ergo-101-side-tooling-for-building-dapps-on-ergo-c71889d56826]: Ergo 101 dApp development tooling guide (DeCo member).
- [https://www.youtube.com/watch?v=IHj4mH9is18]: ErgoGames × ErgoPad AMA.
- [https://youtu.be/maau3TDC19k]: Ergo Wallet cold storage setup tutorial.
- [https://t.me/ergodex_community]: ErgoDex community Telegram.
- [https://t.me/ErgoTrading]: Ergo trading discussion (price/speculation).
- [https://t.me/erg_mining]: Ergo mining support Telegram.
- [https://t.me/ergo_news]: Announcements channel.
- [https://www.ergoforum.org/t/d-meshkov-is-leaving-ergo-core]: Forum post on D. Meshkov leaving after mainnet launch.
- [https://medium.com/@NightOwlCasino/the-pioneers-night-owls-first-four-games-31dc6406a5f8]: Night Owl Casino games article.
- [https://twitter.com/proofofergo/status/1512436350259187713]: Storage rent Reddit post link (Twitter share).
- [https://ergoplatform.org/en/mobile_wallets/]: Official Ergo mobile wallets.
- [https://github.com/ergoplatform/ergo-wallet-android/releases]: Ergo Wallet Android releases.

## Unresolved Questions

- **EIP-27 Timeline**: No fixed block height or activation date confirmed. Testing continues; community confusion remains high. (@Arakashan, msg#268256; @Unknown, msg#268346).

- **Ledger Hardware Wallet**: Still awaited; developer working on final bug-fixes after relocation. Binding library and wallet integration incomplete. No ETA provided.

- **Rosen Bridge Deployment Order**: Chris Ray speculates Cardano first, but unconfirmed. Chain priority (Solana, Harmony, Flux, Raven) unclear.

- **Top-Tier Exchange Listings**: Recurring question; no official announcements. Binance, KuCoin mentioned but no confirmed news (@Unknown, msg#268892-895; @🔥🅼 🆁 - 🅵 🅰 🆉🔥, msg#268911, 2022-04-10).

- **ErgoDex Token Distribution Snapshot Date**: All LPs will be rewarded but no exact snapshot block/date announced. (@S S, msg#267225).

- **Unified Language for ErgoScript**: Question raised whether Ergo will adopt single language (like Scala) for both on-chain (ErgoTree) and off-chain code compilation, but no response recorded (@Unknown, msg#268931).

- **Ergo Credit Card Initiative**: Under investigation but no timeline given (@Armeanio, msg#268902).

- **Storage Rent Constant Rate vs. Block-by-Block**: Terminology clarified as "per UTXO if unmoved for 4 years" but exact fee calculation mechanism not fully detailed in chat.