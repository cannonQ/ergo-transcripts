---
title: "Ergo General Chat — 2020-W43"
date_start: "2020-10-19"
date_end: "2020-10-25"
type: telegram_weekly
channel: general
week: "2020-W43"
source: telegram
message_count: 1112
categories: [defi, nft, wallet, mining, ecosystem, technical, bridges, community, governance]
key_terms: [stablecoin, collateralization, Yoroi integration, reserve protocol, algorithmic stablecoin, ergoauctions.org, NFT auction, 555 ERG, node operator access, ErgoWallet, desktop wallet, Windows bugs, Magnum migration, BIP44 derivation, mining difficulty, hash rate, emission reduction, July 2021, miner profitability, DEX]
---
# Ergo General Chat Summary — 2020-W43

## Key Topics Discussed

- **NFT Auctions on Ergo**: First NFT auction launched via ergoauctions.org, starting at 555 ERG and rising to 907 ERG by week's end. Node operators initially required to participate; Yoroi integration planned within months.

- **Stablecoin Protocol Development**: New stablecoin design inspired by lesser-known research paper with novel additions to fix protocol holes. Simpler than MakerDAO, less vulnerable to blockchain congestion. Less collateralization dependency theoretically possible but trust trade-offs exist. Minting mechanism via ERG collateral planned for Yoroi UI integration.

- **Oracle Pools and Data Feeds**: Oracle Pool v1 operational with EF members and external participants. Oracle Pool v2 running for Dexy Gold with GORT rewards. Plans to build native Ergo oracles with capital from token sale to improve security and tooling for use cases like Palmyra trade financing.

- **ErgoMixer Legal Status**: Non-custodial, non-coordinated local UI; users interact directly with blockchain protocol. FinCEN ruling on mixers applies only to custodial/coordinated services. Ergo is not a privacy coin, so mixing is an application rather than core feature—differentiates from privacy coins facing regulatory pressure.

- **DEX Development**: Multiple DEX projects in development—both AMM and order book models. Impermanent loss inherent to Uniswap-style design; Ergo can combine AMM and OB models easily due to eUTXO architecture. Uneven token distribution (Balancer model) and insurance approaches (Bancor) noted as IL mitigation strategies.

- **ErgoWallet Desktop Release**: New desktop wallet (ergowallet.io) launched, supporting ERG and tokens. Compatible with Yoroi and node 3.3.4+ mnemonics using BIP44 derivation. Early-stage: Windows has input field bugs under investigation; macOS binaries pending. Magnum wallet users advised to migrate (Magnum uses non-BIP44 derivation).

- **Node & Wallet Compatibility**: Ergo node 3.3.4+ and Yoroi now compatible. Mnemonic passphrase field available in node but rarely used by wallets (unused BIP39 feature). Derivation path: m/44'/429'/0'/0/0. Panel UI had issues asking for mnemonic pass; Swagger API alternative available.

- **Emission Schedule and Mining Difficulty**: No halving event; emission decreases by 3 ERG every 3 months starting July 1, 2021. Difficulty already increased ~10x since March 2020 due to hashrate growth. Difficulty adjustment independent of emission but both affect miner profitability over time.

- **Storage Rent and Long-Term Sustainability**: Storage rent mechanism ensures miners earn fees even after block rewards end. Novel economic model distinguishes Ergo from pure PoW coins relying solely on block rewards.

- **Sidechain and Merge Mining Plans**: BIP 301 construct being researched for trustless pegging. Merge-mined sidechains allow miners to earn both Ergo and sidechain tokens; emission contracts reward mainchain miners for delivering sidechain data. Improved sidechaining compared to Bitcoin BIP 301 possible due to Ergo-specific constructions.

## Important Decisions or Announcements

- [@kushti, msg#61019, 2020-10-19]: Tomorrow one exchange listing (small, free); 1 partnership this week hopefully; next week will be busy.

- [@kushti, msg#61019, 2020-10-19]: Vietnamese community AMA October 27th announced.

- [@kushti, msg#61094-61098, 2020-10-19]: Devs should prepare write-up and video for hard fork; greenhat & morphic will not create them; kushti has time after NY.

- [@Unknown (Robert K), msg#61008-61009, 2020-10-19]: Full stablecoin protocol with UI inside Yoroi being released; details coming soon.

- [@kushti, msg#61162-61163, 2020-10-20]: BTCNEXT exchange listing announced with ERG/BTC pair now live.

- [@kushti, msg#61164, 2020-10-20]: ErgoMixer explained as non-custodial local UI; FinCEN ruling doesn't apply.

- [@kushti, msg#61331, 2020-10-20]: Next AMA with Vietnamese community announced.

- [@kushti, msg#61589, 2020-10-22]: v3.3.5 release coming tonight or tomorrow (GitHub PR #1225).

- [@Unknown, msg#61756-61757, 2020-10-22]: Yoroi and node panel compatible from 3.3.4 version onward.

- [@kushti, msg#61760, 2020-10-22]: Interop partnership announcement Monday; another announcement Monday as well.

- [@kushti, msg#61883, 2020-10-23]: v3.3.5 released.

- [@kushti, msg#61893-61898, 2020-10-23]: ErgoWallet desktop wallet launched at ergowallet.io; supports ERG & tokens; BIP44 compatible; more features to be announced.

- [@Unknown, msg#61997, 2020-10-23]: Awesome Ergo list heavily updated on GitHub.

- [@Unknown, msg#62031, 2020-10-23]: Pumpkin carving contest: 1st 300 ERG, 2nd 200 ERG, 3rd 100 ERG; rules: freestyle, no AI/deepfakes; deadline November 1st.

- [@kushti, msg#62174-62175, 2020-10-24]: Students produced PoC implementations with benchmarks for hash-based authenticated data structures for blockchain scalability.

- [@Dmitry, msg#62121, 2020-10-24]: ErgoWallet macOS version available on Google Drive; coming to GitHub soon.

## Technical Q&A Worth Preserving

- **Q** (@Unknown): Why do Yoroi and node panel show different wallet addresses when restoring the same seed phrase?
  **A** (@kushti & @Dmitry): Version compatibility issue. 3.3.4+ should match; check derivation path m/44'/429'/0'/0/0. Panel may ask for mnemonic passphrase (BIP39 feature Yoroi doesn't use), affecting derivation. Try Swagger API restore with blank mnemonicPass if panel is broken.

- **Q** (@Unknown): What's the node log file size when fully synced? Can it be deleted?
  **A** (@kushti): Logs are events written by node; can delete anytime. Size depends on log level (DEBUG=large, ERROR=smallest). Change with `-Dlogback.stdout.level=INFO` flag.

- **Q** (@Unknown): How long to fully sync Ergo node?
  **A** (@Unknown): Few hours currently, but optimizable; work already underway.

- **Q** (@Joonatan): Which parameters affect mining difficulty?
  **A** (@Unknown): Difficulty independent; starts next summer emission drops 3 ERG every 3 months. Difficulty increases as hashrate increases (marginally harder for all miners). Set by network, not adjusted by admin—result of environment & miner count.

- **Q** (@Rodrigo): Is Ergo developing a DEX? AMM or order book? Thoughts on impermanent loss mitigation?
  **A** (@kushti): Yes, both AMM and OB DEXes in development. IL inherent to Uni-like design but okay for liquidity providers; happens on CEXes too. Ergo can combine AMM + OB easily. Balancer (uneven distributions), Bancor (IL insurance), Mooniswap (adjusted incentives) are options; approach still being determined.

- **Q** (@Unknown): Can I send ERG from CoinEx to Yoroi wallet?
  **A** (@Unknown): Yes, no problem. Send small amount first to verify.

- **Q** (@Ohi): Can I create ErgoWallet using Magnum wallet mnemonic?
  **A** (@kushti): No; Magnum uses non-BIP44 derivation. ErgoWallet, Yoroi, CoinBarn, and node 3.3.4+ all use BIP44 and are compatible with each other.

- **Q** (@Unknown): Is there Trezor support?
  **A** (@kushti): Not yet.

- **Q** (@Rodrigo): Will DEXes be implemented for Cardano as well?
  **A** (@kushti): Not sure; Emurgo works on DEXes, not certain of Cardano plans.

- **Q** (@Unknown): What makes Ergo unique vs. Cardano, Flow, Polkadot?
  **A** (@Unknown via msg#62107): eUTXO model with non-interactive zero-knowledge proofs (Sigma Protocols) core to platform. Data inputs in eUTXO model. Atomic exchange built in for custom tokens. No other blockchain currently combines these; would need to clone entire Ergo to replicate. Many future projects likely to adopt eUTXO alone, some add Sigma Protocols, but full stack rare.

- **Q** (@Unknown): How many ERG to enter top 100 richest addresses?
  **A** (@kushti): Currently 49k ERG for top 100. Rich list at explorer.ergoplatform.com/en/rich-list.

## Links Shared

- [ergoplatform.org/en/news](https://ergoplatform.org/en/news): Official news and announcements.
- [ergoauctions.org](http://ergoauctions.org): NFT auction platform.
- [ergoplatform.org/en/blog/2020-10-19-the-first-ergo-nft-auction-is-under-way](https://ergoplatform.org/en/blog/2020-10-19-the-first-ergo-nft-auction-is-under-way): First NFT auction announcement.
- [explorer.ergoplatform.com/en/rich-list](https://explorer.ergoplatform.com/en/rich-list): Top address holders.
- [explorer.ergoplatform.com/en/charts/difficulty](https://explorer.ergoplatform.com/en/charts/difficulty): Mining difficulty metrics.
- [github.com/ergoplatform/ergo/wiki/P2P-Handshaking](https://github.com/ergoplatform/ergo/wiki/P2P-Handshaking): P2P protocol documentation.
- [github.com/ergoplatform/ergo/releases/tag/v3.3.5](https://github.com/ergoplatform/ergo/releases/tag/v3.3.5): v3.3.5 release notes.
- [github.com/ergoplatform/awesome-ergo](https://github.com/ergoplatform/awesome-ergo): Curated Ergo resources list (heavily updated 2020-10-23).
- [ergowallet.io](https://ergowallet.io): New desktop wallet.
- [ergoplatform.org/en/blog/2019_05_20-curve](https://ergoplatform.org/en/blog/2019_05_20-curve): Emission curve explanation.
- [twitter.com/chepurnoy](https://twitter.com/chepurnoy): kushti's Twitter for announcements.
- [youtube.com/watch?v=FbwLwuWNcNA](https://www.youtube.com/watch?v=FbwLwuWNcNA): Detailed interview on Ergo features.
- [youtu.be/DgztoNDFG8U](https://youtu.be/DgztoNDFG8U): ErgoMixer tutorial.
- [ergoplatform.org/en/foundation](https://ergoplatform.org/en/foundation): Foundation information.
- [discord.com/invite/kj7s7nb](https://discord.com/invite/kj7s7nb): Discord invite (mining discussions).
- [t.me/ergoplatform_IR](https://t.me/ergoplatform_IR): Persian community Telegram.
- [reserve.org/protocol](https://reserve.org/protocol): Reserve Protocol explanation (stablecoin reference).
- [btcnext.io](https://www.btcnext.io/coin-info/erg): BTCNEXT exchange listing.
- [gj.com/trade/ergusdt](https://gj.com/trade/ergusdt): GJ.com trading pair (KYC required on USDT withdrawals; 5 ERG fee noted).

## Unresolved Questions

- **Stablecoin Airdrop**: Will current ERG holders receive airdrop of new stablecoin? Details deferred ("details will be soon"); tier system or holders reward token proposed but not confirmed.

- **Exchange Listing Strategy**: Binance listing debated; kushti noted no market makers, no ICO, organic growth. Community discussed merits vs. risks of large CEX listing.

- **Partnership Details**: Multiple announcements of partnerships "this week" or "Monday" made but specifics not revealed in chat (message limits or embargo likely). Interop partnership specifically mentioned as coming Monday 2020-10-22.

- **DEX Impermanent Loss Solution**: Exact IL mitigation strategy for Ergo DEX not finalized; multiple approaches discussed (Balancer, Bancor, Mooniswap) but no commitment to specific model.

- **macOS and Windows Wallet Support**: ErgoWallet has Windows input bugs and lacks macOS binaries; both under development but ETA unclear.

- **Ledger Hardware Wallet Support**: ETA unknown; not yet available.

- **Cardano Integration**: Unclear if Ergo DEXes will be ported to Cardano or if Emurgo is building separate Cardano solutions.

- **HyperChain/L2 Scalability**: Sub-blocks and microblocks discussed as potential improvements, but no clear roadmap; needs community champion to lead testnet efforts.