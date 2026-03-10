---
title: "Ergo General Chat — 2022-W11"
date_start: "2022-03-14"
date_end: "2022-03-20"
type: telegram_weekly
channel: general
week: "2022-W11"
source: telegram
message_count: 0
categories: [technical, governance, defi, bridges, wallet, nft, ecosystem, mining, marketing, community]
key_terms: [PoW, PoS, energy consumption, legislation, FUD, EIP-27, block reward, 90% activation, testnet, soft fork, SigUSD, SigRSV, reserve ratio, minting, overcollateralization, stablecoin, money market, lending, oracle pools, collateral]
---
# Ergo General Chat Summary — 2022-W11 (2022-03-14 to 2022-03-20)

## Key Topics Discussed

- **EIP-27 Activation & Emission Schedule**: Mining reward reduction from 66 ERG to 54 ERG post-activation; soft fork (not hard fork) supported by 90%+ miner hashrate. Testing on testnet at block 188,000 with final epoch voting for mainnet activation expected soon. [@kushti, msg#260193-260202; @Glasgow, msg#260260]

- **SigmaUSD/SigmaRSV Reserve Ratio Crisis**: Reserve ratio dropped below 400% (healthy threshold ~400%+). Discussion on incentivizing RSV minting through dynamic fees, external token rewards, or improved UI/marketing rather than airdrops. Price trends and whale behavior affecting stability. [@Glasgow, msg#260904; @Armeanio, msg#260741]

- **DeFi Primitives & Stablecoin Design**: Extended community discussion on stablecoin backing options (commodity-pegged, energy-pegged, algorithmic), over-collateralization requirements, and alternatives to currency-based models. Mentions of Dexy Protocol updates, LETS systems, and spender-signed currencies. [@kushti, msg#260737-260846; @Armeanio, msg#260812-260926]

- **Rosen Bridge Security & Design**: Wormhole hack on Solana highlighted importance of Rosen Bridge's one-sided contract model for cross-chain safety. [@kushti, msg#260143]

- **ErgoLend & Undercollateralized Lending**: Single-lender ERG solution contracts written; SigmaUSD lending version in progress. Microfinance market potential ($304B by 2026). Real-world integration (RealFi) with Kenyan cooperatives using legal accountability. [@Chris Ray, msg#261046, msg#261069-261076]

- **Python SDK & ErgoAppKit**: Python wrapper via AppKit + JPype enabling Ergo development in Python; demonstrated with vesting contracts for Paideia presale. [@Glasgow, msg#260713]

- **Nautilus Wallet Hardware Support**: Waiting for Ledger team bug fix before hardware wallet integration on Ledger Live (code already implemented). [@Glasgow, msg#261824-261826]

- **Scaling Solutions Roadmap**: Discussion of sub-blocks, sidechains, layer 2 options, and when to prioritize each; consensus that concrete DeFi applications must exist before optimization. Faster blocks affect contracts dependent on block time/height. [@kushti, msg#260982-261005; @Glasgow, msg#261594]

- **Trade House (Order Book DEX) Significance**: Order book model provides full transparency of depth/liquidity, full slippage control, and peer-to-peer matching vs AMM; supports partial fills and non-custodial trading. [@qx(), msg#260809-260936]

- **Merge-Mined Sidechains & Construction**: Ergo-specific sidechain improvements beyond BIP 301; trustless pegging via smart contracts; emission contracts rewarding mainchain miners. [@kushti, msg#260982-261003]

- **Ergo Foundation Incorporation & Bank Approval**: Legal incorporation completed months ago; legal opinion obtained ~1 month prior; ~100 emails in to bank account approval process. [@Glasgow, msg#261248]

- **New Exchange Listings in Progress**: Team negotiating with exchange requiring their own Ergo wallet before public listing announcement (NDA-protected). [@Foeniculum NFTs, msg#261806-261808; @Armeanio, msg#261288]

---

## Important Decisions or Announcements

- [@kushti, msg#260202-260204, 2022-03-14]: EIP-27 soft fork activation procedure revised — final voting with 90% support threshold within any epoch before activation; tested on DevNet, moving to testnet activation at block 188,000.

- [@kushti, msg#260237-260239, 2022-03-15]: Atomic swap development confirmed; linked Rosen Bridge publication on security.

- [@Glasgow, msg#261248, 2022-03-18]: Ergo Foundation incorporation legally complete; awaiting bank account approval.

- [@CW, msg#261344, 2022-03-18]: Twitter Spaces announced (link shared).

- [@MrStahlfelge, msg#261620, 2022-03-19]: Transaction history UI/visibility improvements coming in next Nautilus wallet app version.

- [@Luivatra, msg#261325, 2022-03-18]: Paideia DAO platform moved from whitepaper to wireframes; practically complete UI design.

---

## Technical Q&A Worth Preserving

- **Q** (@Abdulkrem, msg#260071): How will Ergo deal with PoW energy consumption concerns?
  **A** (@Glasgow, msg#260079; @kushti, msg#260081-260088): PoW legislation is still debated in EU (MEPs vs member states). Tech efficiency improving; Ergo includes LETS for local trade carbon reduction. Ergo's design beauty: sound crypto assumptions, logical programmability for contractual money, diverse dev community.

- **Q** (@Jerry, msg#260092): What is the second vote in EIP-27 for?
  **A** (@kushti, msg#260096): First voting is non-binding; second causes activation.

- **Q** (@Max, msg#260144-260145): How does Rosen Bridge work with only a one-sided contract?
  **A** (@kushti, msg#260143): Crypto community pays little attention to security assumptions. Rosen Bridge is superior especially post-Wormhole hack on Solana.

- **Q** (@Unknown, msg#260170): Can NFTs be sent to Yoroi exchange addresses or only non-custodial wallets?
  **A** (@Unknown, msg#260200): NFTs can be sent to any Ergo address, but owner must use wallet with token support (Ergo Wallet, Nautilus, Yoroi). Exchange addresses will burn NFTs (ViaBridge confirmed to burn). Sender always succeeds; receiver ability depends on wallet.

- **Q** (@Unknown, msg#260711): Can Python devs build on Ergo?
  **A** (@Glasgow, msg#260713): Yes; AppKit + JPype + Stubgenj now supports Python. Python wrapper in development at ergopad-api repo to simplify Java hiding. Vesting contracts demonstrated.

- **Q** (@Unknown, msg#260727): Would a money market protocol (lend tokens, borrow SigmaUSD/tokens/ERG) be useful?
  **A** (@Abu Salih, msg#260730): Absolutely. [@kushti, msg#260734]: With over-collateralization. [@Chris Ray, msg#261046]: ErgoLend contracts ready; single-lender ERG solution almost ready; SigmaUSD lending next.

- **Q** (@kushti, msg#260734): Over-collateralization assumption?
  **A** (@Unknown, msg#260779; @Armeanio, msg#260781): Yes, probably safest approach to start.

- **Q** (@Unknown, msg#260884): Do Oracle Pools mint on demand per price, or only feed prices?
  **A** (@Glasgow, msg#260887): Oracle does price average/trust hierarchy. Another SC (like SigmaUSD) handles minting based on oracle data.

- **Q** (@Chris Ray, msg#261054): Thoughts on native credit scores via on-chain activity (loan repayment, yield farming, trading)?
  **A** (@TMR.ΣRG, msg#261059): Will develop eventually, especially with handles becoming popular. [@TMR.ΣRG, msg#261062]: DAO to score dApps trustability with rubric also interesting.

- **Q** (@Unknown, msg#261068): Can ErgoLend contracts be forked for collateralized lending?
  **A** (@Chris Ray, msg#261072): "I will fork them!! We are also building a collateralized lending option." Contracts meant to be open source.

- **Q** (@Chris Ray, msg#261073): Undercollateralized loans seem pointless in DeFi; aren't they risky?
  **A** (@Chris Ray, msg#261073): Microfinance market projected to reach $304B by 2026; much of that will be undercollateralized. It won't appeal to "degen Twitter" but is decentralized finance. RealFi solutions (Kenyan cooperatives filing with government for legal accountability) offer options.

- **Q** (@Steph K, msg#261034): Any undercollateralized lending attempts in Ergo space?
  **A** (@Marty, msg#261035; @Chris Ray, msg#261046): @Haskell_plus working on it. Contracts ready; API integration in progress; single-lender ERG solution almost ready.

- **Q** (@Ian Lee, msg#261881-261902): How does Ergo transaction prioritization work without gas? Will fees skyrocket at adoption scale?
  **A** (@Armeanio, msg#261882-261901): Priority based on fee/byte (cost per block space). Miners optimize space. Voluntary fee increase for priority (e.g., NFT bids). Computational cost is known pre-execution. Block size adjustable by vote (miners can increase capacity). At Ethereum-scale adoption, L2 solutions anticipated before on-chain fees explode. [@Armeanio, msg#261898]: Much computation in eUTXO is off-chain.

- **Q** (@Ian Lee, msg#261908): What will block reward be immediately after EIP-27 activation?
  **A** (@Armeanio, msg#261909): 54 ERG (kushti updating forum post tomorrow with exact dates/details). [@CW, msg#261912]: Also a 3-monthly, 3 ERG reduction.

- **Q** (@Thomas Eh, msg#261240): What is Ergo's relationship to Cardano?
  **A** (@Glasgow, msg#261243-261249): kushti was Scorex team lead at IOHK, left to build PoW with eUTXO model. Ergo partnered with Emurgo (AgeUSD/minimal Djed). Now in UTXO Alliance. Similar ethos (decentralization, research, social good, eUTXO); same code base origin; slightly different takes. Both peer-reviewed, publicly published research & specs.

---

## Links Shared

- [Twitter @ErgoFoundation dev update](https://twitter.com/ErgoFoundation/status/1503340174343823360): Announced 2022-03-14.
- [ergoplatform.org wallets documentation](https://docs.ergoplatform.org/dev/wallet/): Lists compatible wallets (Yoroi, Nautilus, SafeW, Ergo Wallet, Paper Wallet).
- [Rosen Bridge research](https://twitter.com/ergoplatformorg/status/1503542628436037640): Security-focused cross-chain design.
- [ErgoPad vesting contracts (GitHub)](https://github.com/ergo-pad/ergopad-api/blob/nft-locked-vesting/app/contracts/): NFTLockedVesting, proxyNFTLockedVesting, test cases.
- [Ergonaut Handbook](https://ergoplatform.org/en/blog/2021-08-04-the-ergonaut-handbook/): Community guide for starting with Ergo.
- [ErgoDex Medium: Cardano Launch](https://ergodex.medium.com/cardano-launch-how-why-and-wen-ba94036ee62a): Timeline for ErgoDex on Cardano.
- [Ergo Explorer payment request feature](https://explorer.ergoplatform.com/payment-request): Generate and share payment requests.
- [Ergo Manifesto](https://ergoplatform.org/en/blog/2021-04-26-the-ergo-manifesto/): Foundational vision document.
- [eUTXO documentation](https://docs.ergoplatform.com/dev/protocol/eutxo/): Technical advantages vs account model.
- [Scaling solutions](https://docs.ergoplatform.com/dev/protocol/scaling/): Overview of layer 2 & sidechain options.
- [Ergo vs Kadena comparisons (Reddit)](https://www.reddit.com/r/ergonauts/): Multiple threads discussing KDA differences.
- [Ergo vs Kadena Medium article](https://medium.com/@tritchcole/ergo-vs-kadena-656eb6f032fc): Technical comparison.
- [UTXO Alliance](https://utxo-alliance.org/): Cardano, Ergo, Nervos collaboration.
- [Mining pool stats](https://miningpoolstats.stream/ergo): Live pool participation and hash distribution.
- [SigmaVerse dApp ecosystem](https://sigmaverse.io/): Curated list of Ergo dApps.
- [ErgoPad stats/token charts](https://ergopad.io/token): Token price & performance tracking.
- [Ergonaut.space contributing guide](https://ergonaut.space/en/Ergo/Contributing): Community contribution opportunities.
- [Ergo Explorer advanced features](https://jimmyhoffa.github.io/ergo-market-charts/): Market charts and liquidity tracking.
- [SafeW browser extension (v0.4.5)](https://addons.mozilla.org/en-US/firefox/addon/safew/): Non-custodial wallet (Firefox). [GitHub zip for Chrome](https://github.com/ThierryM1212/SAFEW/releases/tag/v0.4.5).
- [Nautilus Wallet Telegram](https://t.me/NautilusWallet): Wallet-specific support & updates.
- [ErgoLend Telegram](https://t.me/ErgoLend): Project-specific discussion.
- [DeCo course Discord](https://discord.gg/ZBGHHWXC): ErgoScript developer course (Plutus Pioneers equivalent).
- [Ergo Foundation exchanges list](https://ergoplatform.org/en/exchanges/): Official exchange directory.
- [ErgoDex price app (Streamlit)](https://share.streamlit.io/eeysirhc/ergodex-price-app/main): Community-built DEX price tracker.
- [SkyHarbor NFT marketplace beta](https://www.skyharbor.io/): New ENFT community marketplace.
- [Ergo Trading Telegram](https://t.me/ERGtrading): Price discussion channel.
- [Japanese Ergo Telegram](https://t.me/ErgoPlatform_jp): Localized community group.
- [Turkish Ergo Telegram](https://t.me/ergoplatform_tr): Localized community group.
- [Aneta BTC Telegram](https://t.me/anetabtc): Project-specific group.
- [ErgoSanta/Erdoge Community](https://t.me/ErdogeCommunity): Meme token community.
- [AnetaBTC stats](https://bit.ly/3KJa8YP): AMA wrap-up with Dan & Armeanio highlights.
- [Ergo Foundation email](mailto:team@ergoplatform.org): Official partnership inquiries.
- [Proof-of-Trust consensus paper (IEEE)](https://ieeexplore.ieee.org/document/8332496): Academic reference for trust-based validation.
- [Ergo Curve research](https://ergoplatform.org/en/blog/2019_05_20-curve/): Early curve design discussion.
- [Treasury allocation details](https://docs.ergoplatform.com/): 4.43% of emission (2.5 year schedule); ZCash comparison.
- [Ledger Live pending](https://docs.ergoplatform.com/dev/wallet/): Hardware wallet integration in progress.
- [Bitcoin Magazine PoW article](https://twitter.com/bitcoinmagazine/status/1503384637741096969): Broader PoW sentiment.
- [WhatToMine](https://whattomine.com/): Mining profitability calculator (referenced for ERG ROI discussions).

---

## Unresolved Questions

- **SigmaRSV incentivization**: How to best incentivize RSV minting to restore 400%+ reserve ratio without