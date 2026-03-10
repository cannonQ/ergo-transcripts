---
title: "Ergo General Chat — 2021-W19 (Part A)"
date_start: "2021-05-10"
date_end: "2021-05-16"
type: telegram_weekly
channel: general
week: "2021-W19"
part: "a"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2021-W19a Summary
**Period:** 2021-05-10 to 2021-05-12

---

## Key Topics Discussed

- **ErgoDEX Launch & Architecture**: ErgoDEX AMM launched its landing page (ergodex.io) on May 10. Discussion confirmed it will operate across two networks (Ergo and Cardano), with ERG as the utility token on Ergo and ADA on Cardano. AMM portion targeted for June, with order book functionality to follow. No separate governance token confirmed, though community speculated about one.

- **SigmaUSD / SigmaRSV Bear Whale Activity**: A whale was actively minting SigmaRSV to short ERG via the SigmaUSD protocol, then exiting positions. kushti repeatedly urged SigmaRSV holders to redeem profits. Reserve ratio reached 401%, and the net cost to the whale was primarily opportunity cost (~110k ERG lost in potential gains) plus fees.

- **eUTXO Smart Contract Architecture vs. Ethereum**: Armeanio explained that Ergo's eUTXO model keeps most smart contract logic off-chain, with each stage verified on-chain, contrasting with Ethereum's on-chain logic execution that generates gas fees. This was framed as key to Ergo's low-cost transactions.

- **Gravity Protocol & Cross-Chain Interoperability**: Armeanio noted Gravity bridge was approximately one month from completion, which would allow ERG to be wrapped/ported to Ethereum and BSC. Ergo.meta sidechain/L2 framework also mentioned as in development, potentially giving Ergo Polkadot-like multi-chain capabilities.

- **Cardano DEX Landscape & ErgoDEX Positioning**: Community compared ErgoDEX to Cardano-native DEX projects (SundaeSwap, Yayswap, Cardax, Minswap). ErgoDEX was noted as the only battle-tested option built on years of eUTXO work. Yayswap flagged as red flags (private sale, empty GitHub, anonymous team, fake Catalyst votes); Cardax also scrutinized for private sale.

- **dcspark Departure from Emurgo**: Robert Kornacki, Nico Arqueros, and Sebastien Guillemot left Emurgo to form dcspark. Ron paraphrased Kornacki: ~80% of eUTXO work is interchangeable between Cardano and Ergo; dcspark intends to build tooling benefiting both chains but will establish on Cardano first.

- **Ergo Oracle Pools & Chainlink**: Ergo's oracle pools were noted as the oracle solution recognized by IOHK (versus C3/Charli3, which was not listed in IOHK's essential-cardano list and launched as an ERC-20 token, raising red flags).

- **Exchange Issues (CoinEx, Gate.io, Hotbit, Bitmart)**: Persistent deposit/withdrawal delays across multiple exchanges during the period. CoinEx attributed to server scaling issues under crypto market volume spikes (subsidiary of ViaBTC). Hotbit was still recovering from a hack. Bitmart had unresolved ERG deposit issues for at least one user spanning over a month.

- **Ledger & Cold Storage Support**: Klaus noted Ledger support was expected in 1–2 months. Armeanio confirmed Ledger could already be used for ERG via Waves Exchange, and that the Tesseract team was working on native Ledger support with milestones being tracked.

- **Yoroi ERG Wallet Limitations**: ERG wallet only available on Yoroi desktop browser extension at this time — not mobile. Restoring an ERG wallet on Yoroi mobile creates an ADA Shelley wallet instead (noted as a bug). "Send All Assets" button in Yoroi warned as dangerous — sends all tokens including SigmaUSD/SigmaRSV.

---

## Important Decisions or Announcements

- [@Dmitry Usov, msg#129801, 2021-05-10]: ErgoDEX landing page (ergodex.io) released publicly for the first time.
- [@yasha, msg#130331, 2021-05-11]: Official ErgoDEX Telegram channel created: https://t.me/ergodex
- [@Armeanio, msg#131255, 2021-05-12]: First of three business development goals achieved — SigmaUSD payment gateway live via cryptocurrencycheckout.com; two more in progress.
- [@Armeanio, msg#131214, 2021-05-11]: ErgoDEX roadmap confirmed: AMM first (June ETA), order book UI to follow with additional pieces.
- [@Armeanio, msg#131222, 2021-05-11]: Gravity bridge ~1 month from completion; Ergo.meta sidechain/L2 framework in development.
- [@Armeanio, msg#131289, 2021-05-12]: Native Ledger support being developed by Tesseract team with community-reported milestones; ERG usable on Ledger today via Waves Exchange.
- [@kushti, msg#129537–129538, 2021-05-10]: Proposed "Buy ERG" button in Yoroi (analogous to "Buy ADA" button), soliciting community feedback.
- [@Rick McCracken, msg#129540, 2021-05-10]: Alex Chepurnoy (kushti) interview on Cardano Live at 16:00 UTC; later published to Spotify and other podcast platforms.
- [@Glasgow, msg#129604, 2021-05-10]: ErgoDEX confirmed to launch AMM-swap-style DEX in June with additional features to follow.
- [@Orhan, msg#131775, 2021-05-12]: ErgoMixer blog post published: https://ergoplatform.org/en/blog/2021-05-12-ergomixer/
- [@Dmitry Usov, msg#131535, 2021-05-12]: Brazil Telegram group created: https://t.me/ergobrazil

---

## Technical Q&A Worth Preserving

- **Q** (@Unknown): What makes ErgoDEX smart contracts cheaper than Ethereum?
  **A** (@Armeanio, msg#131202, 2021-05-11): Ergo uses multi-stage contracts where most logic is off-chain but each stage is verified on-chain. Traditional Ethereum smart contracts dump all logic on-chain and charge gas to process it. Reference: https://youtu.be/g3FlM_WOwBU

- **Q** (@Unknown): How does ErgoDEX handle two networks (Ergo and Cardano)?
  **A** (@Dmitry Usov, msg#131824–131828, 2021-05-12): One DEX operates across two networks. On the Ergo network, ERG is the utility token for fees. On the Cardano network, ADA is the utility token. When providing liquidity (e.g., ADA/ERG pair), users will need to specify which network.

- **Q** (@Unknown): Is Ergo vulnerable to a 51% attack?
  **A** (@Glasgow, msg#131893, 2021-05-12): Risk is lower on Ergo because there are no off-ramps for renting hash. More pools will be added as the network grows. Full discussion: https://www.reddit.com/r/ergonauts/comments/mgpnb7/51_attack_possibilities

- **Q** (@Unknown): What is the relationship between Ergo and Cardano technically?
  **A** (@Armeanio, msg#131226, 2021-05-11): Ergo was first to market with eUTXO multi-stage smart contracts. ErgoScript is Scala-based; Plutus is Haskell-based, but the smart contract frameworks are very similar (~80% interchangeable per dcspark's Kornacki). IOHK/Emurgo partnered with Ergo partly because blueprints proven in ErgoScript should translate to Haskell. NIPoPoWs are specific to proof-of-work and not applicable to Cardano.

- **Q** (@Unknown): Why does Ergo use PoW instead of PoS?
  **A** (community, msg#131682, 2021-05-12): See: https://curiaregiscrypto.medium.com/ergo-why-proof-of-work-47c9b25fae70. PoW enables features like NIPoPoWs that are not possible on PoS systems.

- **Q** (@Unknown): Can other public chains like Ethereum use Ergo's Oracle Pools?
  **A** (implied via Armeanio msg#131222): Gravity bridge will allow ERG and Ergo services to be accessible from Ethereum and BSC once complete (~1 month from 2021-05-11).

- **Q** (@Unknown): Are there plans for a native token for ErgoDEX (like UNI for Uniswap)?
  **A** (@Ron, msg#131162; @Klaus, msg#131429; @Glasgow, msg#131389, 2021-05-11): Unconfirmed. Test tokens observed in pool contracts were for testing only. No separate governance token announced; ERG serves as the base fee token on Ergo network.

- **Q** (@Mint LkV, msg#131867): Will ERG be used to pay fees on ErgoDEX on the Cardano network?
  **A** (@Glasgow, msg#131871, 2021-05-12): Fees are paid in the underlying asset — ERG for Ergo network, ADA for Cardano network.

- **Q** (@Ron, msg#130943): Is there multi-asset (native token) support on Ergo?
  **A** (@Glasgow, msg#130949, 2021-05-11): Yes, available today via https://ergoutils.org/#/token

---

## Links Shared

- [https://ergodex.io/]: ErgoDEX landing page, launched May 10, 2021
- [https://t.me/ergodex]: Official ErgoDEX Telegram channel, created May 11, 2021
- [https://twitter.com/ErgoDex]: Official ErgoDEX Twitter account
- [https://ergoplatform.org/en/blog/2021-05-10-defi-ecosystem/]: Ergo DeFi ecosystem overview blog post
- [https://ergoplatform.org/en/blog/2021-05-12-ergomixer/]: ErgoMixer explainer article, praised for accessibility to non-technical readers
- [https://ergoplatform.org/en/blog/2021-05-09-ergo-platform-roadmap/]: Official Ergo Platform roadmap
- [https://ergoplatform.org/en/blog/2021-04-06-ergodex-model-amm-and-order-book-type-exchange/]: ErgoDEX AMM and order book model explanation
- [https://github.com/ergoplatform/eips/blob/eip14/eip-0014.md]: EIP-14, covering ErgoDEX liquidity tokens
- [https://ergonaut.space/ergodex.pdf]: ErgoDEX technical overview document
- [https://ergonaut.space/Cardano]: Ergo–Cardano relationship explainer on community wiki
- [https://www.dcspark.io/]: dcspark — new company formed by Kornacki, Arqueros, Guillemot after leaving Emurgo
- [https://www.reddit.com/r/ergonauts/comments/na2s40/special_announcement_by_nico_seba_and_robert/]: dcspark announcement on r/ergonauts
- [https://github.com/input-output-hk/essential-cardano/blob/main/essential-cardano-list.md#oracles]: IOHK's official list of recognized oracle providers for Cardano (Ergo listed; C3/Charli3 absent)
- [https://cryptocurrencycheckout.com/coin/sigmausd]: SigmaUSD payment gateway via Cryptocurrency Checkout
- [https://ergoutils.org/#/token]: Tool for creating Ergo native tokens
- [https://curiaregiscrypto.medium.com/ergo-why-proof-of-work-47c9b25fae70]: Article explaining Ergo's PoW design rationale
- [https://youtu.be/g3FlM_WOwBU]: Video explaining eUTXO smart contract model (linked by Armeanio)
- [https://open.spotify.com/episode/1O5vAQralIXGUWW168F32t]: Rick McCracken's Cardano Live interview with kushti, available on Spotify
- [https://www.reddit.com/r/ergonauts/comments/mgpnb7/51_attack_possibilities]: Community analysis of 51% attack risk on Ergo
- [https://ergoauctions.org/#/auction/active?type=picture]: Ergo NFT Auction House
- [https://www.ergo-treasure-hunt.org/]: Ergo Treasure Hunt — Season 1 NFT auctions starting May 15
- [https://ergoplatform.org/en/blog/2021-04-26-the-ergo-manifesto/]: Ergo Manifesto
- [https://ergoplatform.org/en/exchanges/]: Official Ergo exchange listing page
- [https://ergoplatform.org/en/blog/2020-08-31-ergos-oracle-pools-and-what-they-mean-for-the-ecosystem/]: Oracle Pools explainer blog post

---

## Unresolved Questions

- **ErgoDEX governance token**: Community debate unresolved — screenshot of apparent token activity posted to Twitter sparked speculation, but no official confirmation of a governance/LP token separate from ERG. Klaus suggested test tokens were for testing only.
- **"Buy ERG" button in Yoroi**: kushti proposed and polled community; no confirmed timeline or decision from Emurgo/development team.
- **51% attack risk**: Multiple community members flagged concentration of mining in a small number of pools as an ongoing concern. Glasgow noted lower risk due to no hash rental market, but no formal mitigation plan announced.
- **Bitmart ERG deposits**: At least one user (GSPP) reported ERG deposit stuck for over a month on Bitmart with no resolution from their support; Dmitry Usov confirmed it as a general Bitmart issue but directed to @ergosupport with no resolution in thread.
- **Ron's 650k SigmaRSV sent to CoinEx accidentally**: Armeanio offered to contact CoinEx on his behalf; outcome not confirmed in this log period.
- **ErgoDEX on Cardano timeline**: AMM on Ergo confirmed for June, but Cardano port timeline explicitly not confirmed — contingent on Alonzo upgrade and Yoroi dApp connector completion.
- **Yoroi dApp connector status**: Sebastien Guillemot (who was working on it) left Emurgo; Bardamug believed it was in beta testing with the Ergo team, but no official confirmation.
- **C3/Charli3 legitimacy**: Community divided — Ron argued it's a scam based on ERC-20 launch, absence from IOHK's oracle list, and Cardstarter association; others noted Charli3 may have some legitimacy. Unresolved.