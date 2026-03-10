---
title: "Ergo General Chat — 2021-W34 (Part B)"
date_start: "2021-08-23"
date_end: "2021-08-29"
type: telegram_weekly
channel: general
week: "2021-W34"
part: "b"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2021-W34b Summary
**Period:** 2021-08-25 to 2021-08-29

---

## Key Topics Discussed

- **Storage Rent as "smelting" mechanism**: Armeanio described storage rent as recycling lost coins and dust back into circulating ERG supply, contrasting it with mining. Noted its role in incentivizing miners post-emission and reducing state bloat ("on-chain garbage collection").

- **ErgoDEX development status**: Community discussion confirmed AMM functionality was complete and nearing release, with order book DEX planned for approximately Q1 2022. The beta testnet (mint.ergodex.io) was active but experiencing intermittent issues with pool fetching and minting.

- **Ledger hardware wallet support**: Tesseract team published source code and API documentation for the Ergo Ledger app. Sign method implemented for P2PK inputs; fee/amount calculation working but UI incomplete. Described as available for developer testing but not yet public release.

- **NIPoPoWs blog post**: Ergo Foundation published an article on NIPoPoW applications for light clients and sidechains, shared widely in the chat as a key piece of infrastructure education.

- **Ergo Oracle Pools vs. Chainlink**: Community discussion comparing Ergo's Oracle Pool architecture (direct on-chain data access, no token required for data consumption) against Chainlink's model (requires LINK token purchase to access data). Oracle Pool v2 noted as in development to accommodate Cardano's eUTXO data model constraints.

- **SigmaUSD / Djed relationship**: Community members clarified that Djed (Cardano's stablecoin) is based on the ageUSD protocol that Ergo co-developed with Emurgo. The two stablecoins operate independently but cross-chain liquidity via ErgoDEX was identified as a future possibility.

- **Ergo paper wallet alpha**: anon_br announced the first Ergo paper wallet in alpha testing, seeking community help with testing, code auditing, and text review.

- **Ergo tokenomics and storage rent**: Multiple explanations given to new community members: fixed supply of ~97.7M ERG, block rewards reduced by 3 ERG every 90 days, with miners ultimately sustained by transaction fees and storage rent post-emission (~6 years from 2021).

- **Ergo–Cardano relationship**: Repeated explanations that Ergo is an independent PoW blockchain; kushti (Alexander Chepurnoy) previously worked with IOHK; both chains use eUTXO model; ErgoDEX is being ported to Cardano via Plutus.

- **Ergo Android wallet (MrStahlfelge)**: Developer clarified that every line of code is reviewed by morphic (core developer), offering higher trust assurance than Yoroi for mobile users.

---

## Important Decisions or Announcements

- [@Glasgow, msg#197376, 2021-08-26]: Tesseract team published Ledger app source code at https://github.com/tesseract-one/ledger-app-ergo; API docs available for wallet developer testing. Sign method works for P2PK inputs.

- [@Glasgow, msg#198427, 2021-08-28]: ErgoDEX mainnet interface live at https://ergodex.io/

- [@Glasgow, msg#199073, 2021-08-29]: Ergo launchpad (via Raffle mechanism) expected to go live within "next few days/weeks."

- [@Glasgow, msg#198068, 2021-08-27]: KuCoin AMA with Ergo confirmed for 2021-08-30 at 16:00 UTC; 116 ERG prize pool.

- [@Armeanio, msg#198530, 2021-08-28]: New mining pool added — beepool.com listing Ergo.

- [@anon_br, msg#197389, 2021-08-26]: First Ergo paper wallet released in alpha at https://anon-br.github.io/ergo-paper-wallet/; seeking community testing and code audit.

- [@CW, msg#197817, 2021-08-27]: Blog post published on NIPoPoW applications for light clients and sidechains: https://ergoplatform.org/en/blog/2021-08-26-nipopow-applications-light-clients-and-side-chains/

- [@chrom, msg#199014, 2021-08-29]: ErgoDEX tweet indicating new update/progress (https://twitter.com/ErgoDex/status/1432054206899306515).

---

## Technical Q&A Worth Preserving

- **Q** (@koukarin): All ERG will be minted in ~8 years, leaving only transaction fees for miners — is the entire protocol dependent on mass adoption?
  **A** (@Unknown, msg#198152-198153): Two additional mechanisms exist: (1) storage rent — miners charge rent on UTXOs inactive for 4+ years, recycling lost/dust coins back into supply; (2) if ERG appreciates significantly, even small nominal fees become economically meaningful.

- **Q** (@Unknown, msg#198166): Does storage rent reduce state bloat?
  **A** (@Unknown, msg#198167-198169): Yes — described as "on-chain garbage collection." UTXOs that can no longer pay rent are removed from the UTXO set, returning coins to circulation and reducing blockchain state size.

- **Q** (@MrStahlfelge, msg#197366): How is the Android Ergo wallet reviewed/trusted?
  **A** (@MrStahlfelge, msg#197366): Code is developed by MrStahlfelge and every line reviewed by morphic (core developer). Uses a four-eyes review process.

- **Q** (@GoodHabits.xml, msg#197162): Why do BSC and ETH share wallet addresses despite being different blockchains?
  **A** (@Unknown, msg#197147, msg#197164): BSC and ETH share the same address derivation scheme (secp256k1). Ergo uses a different scheme entirely. Cross-chain movement requires a bridge (e.g., Graviton) to tokenize ERG on other chains — sending ERG directly to an ETH address would result in permanent loss.

- **Q** (@J H, msg#198287-198288): Can Ergo oracle pools compete with Chainlink, which is blockchain-agnostic and battle-tested?
  **A** (@CW, msg#198362-198365): Anyone can deploy an oracle on Ergo now (https://explorer.ergoplatform.com/en/oracle-pools-list). Oracle Pool v2 is in development to address Cardano's eUTXO constraint of data-only inputs. The pool model aggregates multiple data points rather than single app calls, improving reliability without a separate token for data access.

- **Q** (@Sea Native, msg#199213): How is ERG used within ErgoDEX?
  **A** (@Unknown, msg#199214; @TMR.ΣRG, msg#199215-199216): ERG is used for swaps, liquidity provision, and powers the oracle pools underlying DEX pricing. No separate DEX governance token at launch; one may be introduced later via community decision.

- **Q** (@Maxim, msg#199221-199224): What is Ergo's transactions per second?
  **A** (@TMR.ΣRG, msg#199226; @Brandon, msg#199227-199229): TPS is not a straightforward metric for Ergo. Multi-recipient transactions and batching allow many logical transactions to settle as a single on-chain transaction. ~50 tx/sec on-chain is sufficient as a settlement layer; layer 2 solutions (sidechains, state channels) handle throughput scaling above that.

- **Q** (@T C, msg#197283): Is staking planned for Ergo given its PoW design?
  **A** (@Unknown, msg#197286-197287): No native PoS staking. Passive income options include: liquidity provision on ErgoDEX (with impermanent loss risk), SigmaUSD protocol participation, and potentially fee-sharing mechanisms if community-proposed smart contract staking is implemented.

---

## Links Shared

- [https://github.com/tesseract-one/ledger-app-ergo]: Ledger app source code for Ergo — alpha/developer testing stage
- [https://docs.google.com/document/d/1IOOypX75xbvjKGNYGWTGiu8VasiefdkVWV35JJuxERw/edit?usp=sharing]: API documentation for Ergo Ledger app from Tesseract team
- [https://anon-br.github.io/ergo-paper-wallet/]: Live alpha version of first Ergo paper wallet by anon_br
- [https://github.com/anon-br/ergo-paper-wallet]: Source code for Ergo paper wallet
- [https://ergoplatform.org/en/blog/2021-08-26-nipopow-applications-light-clients-and-side-chains/]: Blog post on NIPoPoW applications for light clients and sidechains
- [https://ergodex.io/]: ErgoDEX mainnet interface
- [https://ergoplatform.org/en/blog/2021-04-27-chainlink-oracles-vs-ergo-oracle-pools/]: Comparison article: Chainlink oracles vs. Ergo Oracle Pools
- [https://explorer.ergoplatform.com/en/oracle-pools-list]: Live list of active oracle pools on Ergo
- [https://ergo.watch/emission]: Ergo emission schedule tracker
- [https://ergoplatform.org/news_emission_curve.html]: Ergo emission curve explanation
- [https://explorer.ergoplatform.com/en/rich-list]: Ergo rich list — top holders by address
- [https://ergoplatform.org/en/blog/2021-04-26-the-ergo-manifesto/]: The Ergo Manifesto
- [https://ergoplatform.org/en/blog/2021-08-04-the-ergonaut-handbook/]: Ergonaut handbook for new community members
- [https://ergonaut.space/en/home]: Community knowledge base
- [https://ergosites.github.io/]: Ergo infographics and simplified explainers
- [https://ergoplatform.org/en/blog/2019_05_20-curve/]: Ergo emission curve technical blog post
- [https://curiaregiscrypto.medium.com/whats-going-on-behind-the-screens-ergo-weekly-dev-update-august-25th-3fbcceeb55d8]: Weekly developer update for August 25th (includes Ledger/Tesseract update)
- [https://ergoplatform.org/en/blog/2021-05-10-defi-ecosystem/]: Ergo DeFi ecosystem overview including Oracle Pool architecture
- [https://ergoplatform.org/pl/blog/2020_04_21_ergo_positioning/]: Ergo positioning blog (includes storage rent / garbage collection description)
- [https://ergonaut.space/en/Cardano]: Ergo–Cardano relationship explained
- [https://k1pool.com/pool/erg]: K1 mining pool for Ergo (shared by Armeanio)
- [https://www.beepool.com/coindetail/ergo]: New Ergo mining pool — beepool
- [https://miningpoolstats.stream/ergo]: Mining pool hashrate distribution stats
- [https://whattomine.com/coins/340-erg-autolykos]: WhatToMine calculator for Ergo/Autolykos
- [https://ergo.herominers.com/]: Herominers Ergo calculator

---

## Unresolved Questions

- **Ledger public release timeline**: No date given; described as available for developer testing with known UI limitations. Public alpha not yet announced.

- **ErgoDEX mainnet launch date**: AMM functionality confirmed complete but no specific launch date given for public mainnet with real assets.

- **Yoroi "Buy ERG" button**: Multiple community members asked about this feature; no confirmed timeline provided.

- **Yoroi dApp connector for Ergo**: Noted as still on the "nightly" build only (msg#198614), not in stable release.

- **Why Emurgo took down their ADA/ERG oracle pool**: Raised by JCFishing (msg#198374); no answer given.

- **ErgoDEX governance token**: Flagged as a possible future addition if community decides to deploy one; no commitment made.

- **Orion Protocol integration**: JCFishing raised the question of whether Ergo would integrate with Orion Protocol for CEX liquidity aggregation (msg#197932). Glasgow said he would forward to Armeanio; no follow-up recorded in this period.

- **Binance/Coinbase listing**: Repeatedly asked; community consensus is that fair-launch mechanics make this a slow process dependent on exchange initiative, not Ergo Foundation outreach. No NDA-covered announcements confirmed (Armeanio referenced NDA on unspecified listings, msg#198959).