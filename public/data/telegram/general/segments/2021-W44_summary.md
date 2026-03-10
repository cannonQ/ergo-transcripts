---
title: "Ergo General Chat — 2021-W44"
date_start: "2021-11-01"
date_end: "2021-11-07"
type: telegram_weekly
channel: general
week: "2021-W44"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat Summary — 2021-W44
**Period:** 2021-11-01 to 2021-11-07  
**Messages Processed:** ~1414

---

## Key Topics Discussed

- **Ergo–Conceal (CCX) Partnership**: Privacy-focused partnership announced enabling trustless swaps via Schnorr signatures and HLTC; planned simple bridge at launch with future advanced cryptographic methods [@Glasgow｜WON'T DM, msg#225697, 2021-11-01].

- **ErgoDex Launch & UI Refresh**: Platform launch scheduled for Monday (2021-11-08) with new UI on mainnet; no order book functionality in first release, AMM only [@Gazza ｜WON'T DM, msg#227210, 2021-11-07].

- **Ergo Foundation Logo Selection**: New foundation logo announced after public submissions and voting; winner announced [@Glasgow｜WON'T DM, msg#226352, 2021-11-03].

- **NIPoPoWs & Sigma Protocols**: Discussion of bulletproofs, zero-knowledge proofs, and range proofs as trustless alternatives to SNARKs without trusted setup; verification possible directly in ErgoScript [@kushti, msg#226117, 2021-11-02].

- **Storage Rent & Blockchain Scaling**: Clarification that Ergo's storage rent mechanism and UTXO model enable scaling without hard forks; layer 2 solutions (sidechains, microblocks) under consideration but not urgent given current transaction load [@kushti, msg#226443, 2021-11-03].

- **Mining Updates Post-ETH2.0**: Block time increased to ~193 seconds following recent mining algorithm adjustments; community preparing for influx of GPU miners after Ethereum transition [@Glasgow｜WON'T DM, msg#227427, 2021-11-07].

- **Yoroi Wallet Issues**: Persistent synchronization problems reported across Chrome/Firefox; workaround involves wallet resync and manual fee adjustment; iOS port in progress via Emurgo [@Glasgow｜WON'T DM, msg#226255, 2021-11-03].

- **CoinEx Withdrawal Delays**: Widespread reports of ERG withdrawals stuck in "passed" status without TXID for 12+ hours; exchange appears to have node/technical issues; support tickets recommended [@Glasgow｜WON'T DM, msg#227448, 2021-11-07].

- **AppKit & ErgoScript Development Resources**: GitHub examples and ErgoTool source code available but documentation sparse; mnemonic password vs. seed phrase clarified [@anon_br, msg#226515, 2021-11-03; @ArØhβΣ @Arohbe 🍪, msg#226965, 2021-11-05].

- **Palmyra & Chainlink Partnership**: Dan Friedman outlined Palmyra's use of Chainlink proof-of-reserve for decentralized trade finance via on-chain warehouse receipts with IoT sensors; plan to build native Ergo Oracle Pools alongside Chainlink integration [@Armeanio, msg#226020, 2021-11-02].

---

## Important Decisions or Announcements

- [@Glasgow｜WON'T DM, msg#226352, 2021-11-03]: Ergo Foundation incorporated as legal entity; new logo winner announced following community vote.

- [@Glasgow｜WON'T DM, msg#225987, 2021-11-02]: Good Whale Fund announced offering grant money for dApp development; applications open on Ergo Foundation site.

- [@Glasgow｜WON'T DM, msg#227121, 2021-11-05]: Backend Scala Engineer position posted; interested candidates directed to team@ergoplatform.org.

- [@Chris Ray (Won't DM First), msg#226999, 2021-11-05]: ErgoLend team seeking community ambassadors; V1 release date and ErgoScript learning sessions to be announced; ambassadors will help design ambassador program.

- [@Glasgow｜WON'T DM, msg#226485, 2021-11-03]: Exchange listings confirmed in discussions ("under NDA"); no timeframe given.

- [@Ilya Oskin, msg#227478, 2021-11-07]: Yoroi dApp Connector not ready for ErgoDex launch; users will use Yoroi Nightly; working with Emurgo to accelerate stable Yoroi release.

---

## Technical Q&A Worth Preserving

### ErgoScript & AppKit

- **Q** (@Aberg Satergo dev, msg#226166, 2021-11-02): Can't find documentation on EIP-3, which is required for transacting.  
  **A** (@Glasgow｜WON'T DM, msg#226170, 2021-11-02): See example at https://github.com/aslesarenko/ergo-appkit-examples; also provided https://ergoplatform.org/en/blog/2019_12_03_top5/

- **Q** (@Aberg Satergo dev, msg#226174, 2021-11-02): Can't use remote nodes with `withEIP3Secret` method; how to provide runtime values?  
  **A** (@MrStahlfelge | Won't DM, msg#226187, 2021-11-02): API key not needed for several APIs; leave blank.

- **Q** (@Aberg Satergo dev, msg#226963, 2021-11-05): What is "mnemonic password" vs. seed phrase?  
  **A** (@ArØhβΣ @Arohbe 🍪, msg#226965, 2021-11-05): It's an optional password for further encryption of wallet file; can be left blank and will still restore if not initially set.

- **Q** (@Aberg Satergo dev, msg#226016, 2021-11-05): Restoring mnemonic phrase on full node gives different address than `Address.fromMnemonic()` in code; doesn't appear on testnet explorer.  
  **A** (@Aberg Satergo dev, msg#226969, 2021-11-05): It's used in `Mnemonic.toSeed(mnemonic, mnemonicPassOpt)` — likely mnemonic password handling.

### Wallet & Address Generation

- **Q** (@Mongo | Will never DM you, msg#226481, 2021-11-03): When generating new address, is old one still usable? Are they connected to same wallet?  
  **A** (@anon_br Σ, msg#226515, 2021-11-03): Addresses are derived from your public key, all connected to same wallet.

### Privacy & Mixing

- **Q** (@theta decay, msg#226203, 2021-11-02): How is ErgoMixer different from Samurai's Whirlpool and Wasabi's CoinJoin?  
  **A** (@Glasgow｜WON'T DM, msg#226219, 2021-11-03): See https://ergonaut.space/en/ErgoMixer — ErgoMixer is non-interactive, non-custodial token mixer (world-first); works with any native or wrapped token on Ergo.

### Proof-of-Work & Scaling

- **Q** (@Siavash, msg#226369, 2021-11-03): How many transactions can Ergo process per second?  
  **A** (@Glasgow｜WON'T DM, msg#226370, 2021-11-03): Ergo has smart contracts and bundles thousands of transactions into one; comparison with simple TPS doesn't apply. More analysis coming with v5.

- **Q** (@A, msg#226421, 2021-11-03): If Ergo was highly used (half Ethereum's level), would it have scaling issues as-is?  
  **A** (@Unknown, msg#226377, 2021-11-03): Chain scales as-is with current set of contracts (Rosen, Oracle Pools, Spectrum, lending). Layer 2 solutions being considered but not urgent given real transaction profile analysis needed.

### Mining & Hardware

- **Q** (@CryptoSalvador🧁, msg#226074, 2021-11-02): How to mine Ergo with Mac or PC if GPU incompatible?  
  **A** (@Андрей, msg#226089, 2021-11-02): Use HiveOS and teamredminer (for AMD).

- **Q** (@Wolf9466, msg#227313, 2021-11-06): Is Ergo more profitable to mine than ETH on FPGA?  
  **A** (self-report): Yes, according to WhatToMine, FPGA mining more profitable for Ergo now.

### Exchange & Custody Issues

- **Q** (@Krun, msg#226900, 2021-11-05): How long does ERG deposit take on Gate.io?  
  **A** (@Glasgow｜WON'T DM, msg#226902, 2021-11-05): Gate.io requires 100 confirmations, which takes a long time; check explorer.

- **Q** (@Unknown, msg#226937, 2021-11-06): Why can't withdraw from CoinEx to Yoroi after 10+ hours?  
  **A** (@Glasgow｜WON'T DM, msg#227450, 2021-11-07): CoinEx likely resyncing node; technical issue on their side; no TX sent yet. Suggest support ticket and wait 1-2 days (weekend).

### NFTs & Native Assets

- **Q** (@Tony, msg#227401, 2021-11-07): Yoroi Nightly has no assets tab; should use Yoroi Classic?  
  **A** (@Glasgow｜WON'T DM, msg#227402, 2021-11-07): Assets tab exists in Nightly; appears only after receiving first native asset.

---

## Links Shared

- [https://ergoplatform.org/en/wallets/](https://ergoplatform.org/en/wallets/): Official wallet list.
- [https://yoroi-wallet.com/](https://yoroi-wallet.com/): Yoroi web wallet extension.
- [https://ergoplatform.org/en/blog/2021-11-01-ergo-ccx-a-new-partnership/](https://ergoplatform.org/en/blog/2021-11-01-ergo-ccx-a-new-partnership/): CCX partnership announcement.
- [https://ergonaut.space/en/roadmap](https://ergonaut.space/en/roadmap): Ergo roadmap & milestones.
- [https://ergonaut.space/en/ErgoMixer](https://ergonaut.space/en/ErgoMixer): ErgoMixer documentation.
- [https://charts.cointrader.pro/charts.html?coin=ERGO%3AUSD](https://charts.cointrader.pro/charts.html?coin=ERGO%3AUSD): ERG/USD all-time chart.
- [https://explorer.ergoplatform.com/](https://explorer.ergoplatform.com/): Ergo Explorer.
- [https://ergoscan.io/](https://ergoscan.io/): Alternative Ergo Explorer.
- [https://github.com/ergoplatform/ergoscript-by-example](https://github.com/ergoplatform/ergoscript-by-example): ErgoScript examples repository.
- [https://github.com/ergoplatform/ergo/wiki/ErgoScript-Overview](https://github.com/ergoplatform/ergo/wiki/ErgoScript-Overview): ErgoScript overview.
- [https://ergoplatform.org/en/blog/2021-10-29-ergo-ecosystem-scaling-solutions/](https://ergoplatform.org/en/blog/2021-10-29-ergo-ecosystem-scaling-solutions/): Scaling solutions blog post.
- [https://ergopad.io/](https://ergopad.io/): ErgoPad launchpad (community-led, wallet in beta).
- [https://github.com/mhssamadani/ErgoProfitSharingDapp](https://github.com/mhssamadani/ErgoProfitSharingDapp): ErgoMixer profit-sharing dApp (contracts in review).
- [https://beta.ergodex.io](https://beta.ergodex.io): ErgoDex beta (requires Yoroi Nightly).
- [https://t.me/ergodex_community](https://t.me/ergodex_community): ErgoDex community Telegram.
- [https://github.com/aslesarenko/ergo-appkit-examples](https://github.com/aslesarenko/ergo-appkit-examples): AppKit examples.
- [https://github.com/ergoplatform/ergo-tool](https://github.com/ergoplatform/ergo-tool): ErgoTool source code.
- [https://ergoplatform.org/en/blog/2019_12_31_ergo_tool/](https://ergoplatform.org/en/blog/2019_12_31_ergo_tool/): ErgoTool documentation.
- [https://glasgowm148.github.io/ergodocs/](https://glasgowm148.github.io/ergodocs/): Glasgow's Ergo docs.
- [https://github.com/ergoplatform/ergo-appkit](https://github.com/ergoplatform/ergo-appkit): Ergo AppKit.
- [https://github.com/Ergo-Lend/ergo-lend-documentation](https://github.com/Ergo-Lend/ergo-lend-documentation): ErgoLend documentation.
- [https://ergoplatform.org/en/blog/2021-11-05-ergo-blockchain-tokenomics-and-finance/](https://ergoplatform.org/en/blog/2021-11-05-ergo-blockchain-tokenomics-and-finance/): Ergo tokenomics and finance blog post.
- [https://ergofaucet.org/](https://ergofaucet.org/): Ergo faucet (for testnet tokens & meme coins).
- [https://sigmaverse.io](https://sigmaverse.io): Sigmaverse dApp directory.
- [https://conceal.network/](https://conceal.network/): Conceal Network (CCX) homepage.
- [https://www.reddit.com/r/ergonauts/comments/qn1d4b/grassroots_marketing_final_vote/](https://www.reddit.com/r/ergonauts/comments/qn1d4b/grassroots_marketing_final_vote/): Marketing ad campaign vote (final voting results showed ErgoDex UI leading, Charles Hoskinson second).
- [https://ergoplatform.org/en/careers/2021-09-14-backend-scala-engineer/](https://ergoplatform.org/en/careers/2021-09-14-backend-scala-engineer/): Ergo Foundation backend Scala engineer job posting.

---

## Unresolved Questions

- **Binance Listing Timeline**: Confirmed discussions under NDA but no timeline disclosed; community speculation ongoing [@Unknown, msg#226550, 2021-11-03].

- **Yoroi dApp Connector Stable Release**: ETA unclear; working with Emurgo but no timeline given [@Ilya Oskin, msg#227478, 2021-11-07].

- **Order Book DEX Functionality**: When (if) order book features will launch post-UI refresh unclear; "hard" to implement per core team [@Glasgow｜WON'T DM, msg#227209, 2021-11-06].

- **ErgoScript Learning Course**: Release date TBD; Haskell_plus mentioned course development on Twitter but full public availability uncertain [@Unknown, msg#226991, 2021-11-05].

- **Palmyra Oracle Pool Buildout**: Whether Ergo Foundation will fund native Ergo Oracle Pools (v1 & v2) vs. relying on Chain