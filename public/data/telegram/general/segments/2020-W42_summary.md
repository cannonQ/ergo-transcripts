---
title: "Ergo General Chat — 2020-W42"
date_start: "2020-10-12"
date_end: "2020-10-18"
type: telegram_weekly
channel: general
week: "2020-W42"
source: telegram
message_count: 1162
categories: [nft, wallet, ecosystem, technical, defi, mining, bridges, community]
key_terms: [auction house, NFT, anon_real, collectibles, smart contracts, Yoroi, EMURGO, mobile, browser extension, dApp bridge, Gate.io, Coinex, liquidity, orderbook, exchange withdrawal issues, double-spend, transaction assembly, withdrawal, technical support, stablecoin]
---
# Ergo General Chat — 2020-W42 Summary

## Key Topics Discussed

- **Exchange Listings & Liquidity**: Multiple exchanges discussed (Gate.io, Coinex, Hotbit, Kucoin, Binance). Coinex experienced persistent withdrawal issues with double-spend problems in transaction assembly; team worked with their tech support to resolve. Gate.io listing had good order book depth after voting campaign. Community debated whether new listings would help or dilute liquidity.

- **Yoroi Wallet Integration**: Yoroi browser extension already supports ERG; mobile support coming soon. Discussed as gateway for Ergo dApps. Ledger hardware wallet support in progress but delayed; Jason noted he'd submit test wallet for audit soon.

- **Ergo Auction House (NFT Marketplace)**: Released Friday 2020-10-16 by anon_real. First dApp implementation of auction contracts from ErgoForum (Oct 2019). Features 2% fee model tied to NFT business tokens; coordinator can sell business rights via NFT. Currently requires running a node; Yoroi integration planned. Vanity token ID being auctioned as first collectible, with proceeds supporting DEX development.

- **DEX Development**: New team formed (anons + kushti) to prioritize DEX after Auction House. Discussed that UTXO model makes AMM (Uniswap-style) replication difficult; order-book-based DEX more viable for Ergo's design. Community noted this as core competitive differentiator vs. account-based chains.

- **Stablecoin (Algorithmic, Collateralized by ERG)**: kushti revealed will be collateralized algo stablecoin, improved on known design. Looking for partners/whales to seed reserves. Details to be revealed by stablecoin team later.

- **Coinex Withdrawal Issues**: Double-spend bug where simultaneous withdrawals generated conflicting transactions. Caused user stress (msg#59388, #59406, #59472). kushti tested multiple withdrawals simultaneously (msg#59878) and confirmed issue resolved by mid-chat.

- **Mining & Network Hash Rate**: Hash rate increased from 14.38 TH/s (7 days prior) to 22.31 TH/s (msg#59531, #59535). Discussed relationship between miner emission and price: ~37.5 ERG/minute currently; emission reduces July 2021. Community speculated large farms with optimized setups mine profitably while others may break even.

- **Proof of No Premine**: Uses news headlines (Brexit articles, Xinhua, Vedomosti) + Bitcoin/Ethereum block IDs as randomness source. Verifiable in genesis block.

- **Performance Improvements**: Bitcoin-NG or Flux-like constructions discussed for weak confirmations (~10-20 seconds) without hardfork, but scheduled for 2021-22. No immediate block time reduction planned due to reliance by dApps on block height/timestamp assumptions.

- **Partnership Announcements**: Chainlink partnership for Palmyra project (decentralized trade financing with on-chain warehouse receipts + IoT sensors). Oracle Pools v1 has EF + external members; v2 runs Dexy Gold with GORT rewards. First interoperability partnership (non-Cardano) to be announced next week.

---

## Important Decisions or Announcements

- [@kushti, msg#59286, 2020-10-12]: New exchange listing to be announced within few days.

- [@kushti, msg#60294-60295, 2020-10-16]: Auction House release confirmed for Friday (2020-10-16).

- [@kushti, msg#60308, 2020-10-16]: [Auction House blog post published](https://ergoplatform.org/en/blog/2020-10-16-announcing-the-auction-house-nft-marketplace-on-ergo/)

- [@kushti, msg#60361, 2020-10-16]: Top priorities identified: (1) Tokens shown in Yoroi, (2) Yoroi/wallet APIs for external apps, (3) Node ease-of-use (binaries, NIPoPoWs bootstrapping).

- [@kushti, msg#60135, 2020-10-15]: One admin removed for removing messages without reason; now 13 admins (was 14).

- [@kushti, msg#60149, 2020-10-15]: DEX team formed after Auction House; DEX is top priority after AH release.

- [@kushti, msg#60234-235, 2020-10-15]: First interoperability partnership announcement coming next week (not Cardano).

---

## Technical Q&A Worth Preserving

- **Q** (@Hedges, msg#60071): Sent ERG from node wallet but not visible in Yoroi.
  **A** (@kushti, msg#60108): Is your wallet (node) synced? Node sync status check: `127.0.0.1:9053/info` — block ID should change. If not changing, send logs from ergo.log for debugging. (@kushti offered ERG donation for non-trivial issues found.)

- **Q** (@mensrea, msg#60106): Why can't Ergo replicate Uniswap-style DEX?
  **A** (@kushti, msg#60125): UTXO model makes it hard to share global state (current price/reserves) between UTXOs. Workarounds exist but UX compromises. Ergo can pioneer novel UTXO-based DEX designs instead of replication. Different designs can achieve same goals.

- **Q** (@Unknown, msg#60112): What stablecoin category is Ergo building?
  **A** (@kushti, msg#60126): Collateralized algorithmic stablecoin, based on known design but improved in many aspects. More details TBD.

- **Q** (@Unknown, msg#59483): Is double-spending by Coinex bad for exchange or whole Ergo chain?
  **A** (@kushti, msg#59484-486): Double-spend txs cannot get into blocks. One withdrawal enters blocks; others rejected by chain. No risk to Ergo consensus.

- **Q** (@ニック ᴏʟᴇᴦᴍ, msg#59445): When will Yoroi work like MetaMask for dApps?
  **A** (@Unknown, msg#59447): Ergo devs working on it; Seba was discussing. Later (@kushti, msg#60361): Yoroi + other wallet APIs for external apps are top priority.

- **Q** (@Unknown, msg#60491): How does Ergo node wallet differ from exchange withdrawal?
  **A** (@Unknown, msg#60415): Node wallet inbuilt; Yoroi support also planned. (From msg#59376 context: node wallet shown in new dApp interface screenshot.)

- **Q** (@David F, msg#60387): What NFT is being auctioned in Auction House launch?
  **A** (@kushti, msg#60391): Vanity ID token + collectible value (reportedly first vanity token) issued by anon_real + charity proceeds (anon_real helping build DEXes).

---

## Links Shared

- [Ergo Explorer](https://explorer.ergoplatform.com/en/): Block explorer with oracle pool lists, hash rate distribution charts.
- [GitHub Ergo Awesome](https://github.com/ergoplatform/awesome-ergo): Community resource list.
- [Ergo Forum](https://www.ergoforum.org/): Discussion forum; contains auction contract design (Oct 2019), contributor donation list, roadmap discussions.
- [ErgoForum: Running a Business on Top of Ergo](https://www.ergoforum.org/t/running-a-business-on-top-of-ergo/423): kushti post on business models.
- [ErgoForum: Auctions on Ergo (Oct 2019)](https://www.ergoforum.org/t/auctions-on-ergo/122): Original auction protocol design.
- [ErgoForum: Some Details About Ergo Auction House](https://www.ergoforum.org/t/some-details-about-ergo-auction-house/428): anon_real technical details on auction contracts and fee model.
- [ErgoForum: Decentralized Community Moderation](https://www.ergoforum.org/t/decentralized-community-moderation/424): Complaints about message removal; kushti investigated mod logs.
- [Auction House Notable Collectibles](https://www.ergoforum.org/t/auction-house-nft-marketplace-notable-collectibles/429): Tracking first auctioned NFTs.
- [Ergo Auction House GitHub](https://github.com/anon-real/ErgoAuctionHouse): Self-hosted version (recommended for security over HTTP hosted version).
- [Yoroi Gateway to Ergo dApps Blog](https://ergoplatform.org/en/blog/2020-10-09-yoroi-your-gateway-to-ergo-dapps/): Announced Yoroi integration for Ergo.
- [Learn ErgoScript by Example (Playground)](https://ergoplatform.org/en/blog/2020-10-12-learn-ergoscript-by-example/): Just-launched Ergo Playground for writing/testing ErgoScript.
- [Ergo NFTs Blog](https://ergoplatform.org/en/blog/2020-09-25-nfts-on-ergo/): NFT design overview.
- [Dust Identity](https://dustidentity.com/): Referenced for physical object authentication via surface grain (atomic arrangement on synthetics/diamond layer).
- [Crypto Rich Interview Part 1](https://twitter.com/CryptoRichYT/status/1317052468359028736): Interview with kushti on Ergo fundamentals.
- [Crypto Rich Interview Part 2](https://twitter.com/CryptoRichYT/status/1317054406291054592): Continuation.
- [Blockfolio Polarity DEX Vote](https://blockfolio.canny.io/exchange-requests/p/polarityexchange): Polarity cross-chain DEX (BPSAA member, includes Ergo).
- [EIP-23 PR: Yoroi dApp Support](https://github.com/ergoplatform/eips/pull/23/): Proposed Yoroi MetaMask-like dApp connector (was being worked on).
- [Gate.io Ergo Survey](https://docs.google.com/forms/d/e/1FAIpQLSd99Q2OTUy_Lxqpt-1YXLMm1KQrLAuL7zDimgyGWqiBwkdt_A/viewform?usp=sf_link): Community voting on preferred exchanges (Binance/Coinbase removed to prevent skew).
- [Coinsbit Exchange](https://coinsbit.io/trade/ERG_BTC): Already listed ERG at start of chat period.
- [ORC (formerly OP_RETURN) Token Standard](https://github.com/ergoplatform/eips/): Referenced in contract discussions.
- [Ergo GitHub Issues #1212](https://github.com/ergoplatform/ergo/issues/1212): Bug reported by jclarkv.
- [Oracle Pools Research](https://www.ergoforum.org/t/oracle-pools-a-new-oracle-model/263): EF + Emurgo + Cardano collaboration.
- [Mixer v3](https://twitter.com/Ergobug/status/1292569319428300801): ErgoMixer working; mobile watcher in development.
- [Slate.host (Filecoin UI)](https://slate.host/): Discussed for meme/media management example.

---

## Unresolved Questions

- **Cardano-Ergo Interoperability Scope**: How deeply will Oracle Pools (v1/v2) be integrated with Cardano vs. independent development? Will Cardano build own oracles or use Ergo's? (@Unknown, msg#60819 asks directly; kushti noted he'll "propose cooperation on DEXes" but IOHK pursuing own path — msg#60406).

- **Wallet dApp API Timeline**: When will Yoroi + other wallets have external dApp APIs beyond node-only access? Marked top priority but no ETA given.

- **Stablecoin Reserve Partners**: Who are the "partners/whales" kushti mentioned for seeding reserves? Details TBD by stablecoin team.

- **Node Ease-of-Use Improvements**: Binary distribution + NIPoPoW bootstrapping flagged as needed but no release date. Impact on node operator count unknown.

- **Interoperability Partner Identity**: First partnership (non-Cardano) announcement "next week" — identity withheld as of 2020-10-15.

- **Performance Scaling Plan Finalization**: Bitcoin-NG/Flux block time reduction scheduled "2021-22" but no detailed RFC or community vote yet.

- **DEX Fee/Incentive Structure**: High-level design (order-book) confirmed but fee schedule, liquidity mining, and AMM hybrid possibilities not detailed.

---

## Notable Community Observations

- **Exchange Dynamics**: Users noted miners may be selling OTC to whales/funds rather than on public markets (msg#60408), explaining fewer visible dumps despite high hash rate growth.

- **Proof-of-Work Credibility**: Repeated acknowledgment that Ergo's non-outsourceable PoW + ASIC resistance promotes decentralization vs. mining concentration risk (msg#60705 referenced hash distribution chart).

- **Charles Hoskinson Framing**: Debate over whether Hoskinson's "experimental" description was dismissive or complimentary. General consensus: he respects kushti's work but emphasizes Ergo as proof-of-concept for UTXO-extended models on PoW (not production-ready for mainstream adoption yet) — msg#59807-59835.

- **Price & Adoption Decoupling**: Community acknowledged better tech ≠ adoption; Monero/Zcash didn't displace despite privacy superiority. Ergo needs dApp ecosystem + liquidity growth + influencers (msg#60772, #60746 counter-argument on upside convexity).