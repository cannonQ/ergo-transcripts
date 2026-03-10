---
title: "Ergo General Chat — 2020-W44"
date_start: "2020-10-26"
date_end: "2020-11-01"
type: telegram_weekly
channel: general
week: "2020-W44"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — Week 2020-W44 Summary

## Key Topics Discussed

- **Waves/Gravity Partnership**: Ergo integrating with Waves' Gravity network for cross-chain DeFi and decentralized oracles. Gravity acts as a gateway framework for multi-chain interoperability ([msg#62365, #62380, #62389]).

- **Emission Schedule & Mining Economics**: Month 16 of 8-year emission began Nov 1st. First 2 years represent most aggressive emission, then rapid decline. Discussion of ASIC resistance, mining democratization via hard fork, and community outreach to mining pools ([msg#62463, #62466, #62770-#62774]).

- **Auction House Development**: First auction completed at 1027 ERG. Feature updates include auto-extending auction duration. Plans for non-node wallet integration without dApp bridge requirement ([msg#62632, #62725, #62743]).

- **Stablecoin Integration Roadmap**: Emurgo/Yoroi team building stablecoin backed by ERG collateral. Dependency chain: Ergo Connector → Sigma Rust library → Oracle connection → Yoroi integration → stablecoin release. Marked as "beginning of extended-UTXO DeFi era" ([msg#62999, #63001]).

- **Network Infrastructure Issues**: Explorer nodes experienced DDoS and resync issues causing intermittent downtime. Hotbit underwent wallet migration. One explorer node re-syncing, other handling traffic; expected 2-hour resolution ([msg#63012, #63491, #63510]).

- **Exchange Listing Quality**: Community flagged Citex as scam exchange with manipulated volume/pricing; team removed from official site. Discussion of proper data sources: CoinGecko (accurate circulating supply) preferred over CoinMarketCap ([msg#63556, #63570, #63574]).

- **Zero-Knowledge Proof Integration**: kushti exploring bulletproof verification in ErgoScript for zero-knowledge statements without trusted setup. Potential for generic statements, verifiable credentials, and hybrid on-chain/off-chain contracts ([msg#62653-#62662, research ongoing]).

- **DEX Design Discussion**: Community debate on DEX problems (liquidity, gas fees, decentralization, limit orders, speed). Order book model (Trade House/Auction House) vs AMM design trade-offs explored ([msg#62637-#62652]).

- **Sidechain Construction & Merge Mining**: kushti discussing theoretical improvements over Bitcoin's BIP 301. Trustless relay mechanisms, mainchain emission contracts rewarding sidechain data delivery, ASIC-resistant design tensions ([msg#62739, #62765-#62791]).

- **Website & Documentation Overhaul**: New ergoplatform.org navigation launched with improved Developer menu structure. ERGO 101 resource site created by community. Multilingual localization request (German, Russian, Spanish, French) ([msg#63576, #63581]).

---

## Important Decisions or Announcements

- [@kushti, msg#62739, 2020-10-27]: "Hardfork details will be provided within few days. In short, it will be about making mining democratic again, and fixing some things (not very critical atm)."

- [@kushti, msg#62721, 2020-10-27]: Ergo developed by community with no VC backing or ICO (Treasury exists). Community-based marketing group active; gate.io approached after community requests.

- [@Armeanio, msg#63384-#63393, 2020-10-31]: Bitcoin mempool severely congested (5+ hour waits between exchanges); Ergo transfers to Yoroi complete in minutes, positioning as superior UX alternative.

- [@Dmitry Usov, msg#63556, 2020-11-01]: Citex removed from official ergoplatform.org site due to scam behavior (fake volume, price manipulation).

- [@Dmitry Usov, msg#63576, 2020-11-01]: Major website navigation update released at ergoplatform.org with improved developer resources access.

- [@Unknown, msg#63583, 2020-11-01]: New roadmap infographic coming this month, should include planned basics for 2021.

---

## Technical Q&A Worth Preserving

**Q** (@Tri Origin, msg#62333): Can I open my ERG from Magnum wallet in another wallet using seed phrase and private key?
**A** (@Unknown, msg#62339): Magnum uses non-standard BIP derivation path. Other wallets restoring same seed phrase would generate different addresses unless forced to match exact Magnum settings. Recommendation: create new mnemonic in Yoroi instead.

**Q** (@Tri Origin, msg#62374): Can I import Magnum private key into Yoroi?
**A** (@kushti, msg#62396-#62397): No. Yoroi does not support non-BIP44 wallet imports. Create new mnemonic in Yoroi.

**Q** (@Unknown, msg#62673): Could auction house serve as OTC venue for miners selling large ERG blocks to accumulators, bypassing low order book depth on exchanges?
**A** (@kushti, msg#62675-#62684): "After stablecoin done, possible for sure and actually very interesting... like trustless OTC. If stablecoin delivered before DEX, then yes."

**Q** (@David F, msg#62959): How do I set up an Oracle Pool?
**A** (@Unknown, msg#62960): Guide available at https://github.com/ergoplatform/oracle-core

**Q** (@Dom1nant, msg#62941): Will ERG token be used in DEX? Gain anything holding ERG?
**A** (@Unknown, msg#62950): "You'll be able to 'lock in' your ergs when stablecoin released to mint it, essentially staking."

**Q** (@David F, msg#62968): What benefit from setting up Oracle Pool? Get ERG over time?
**A** (Implied): Oracle Pool v1 run by EF members + outside parties; v2 running for Dexy Gold with GORT rewards ([msg#62676-#62678]).

**Q** (@ThV 1403, msg#63438-#63446): Transfer from Coinex taking 60+ minutes. Hash: d0799cf84bc865732886a115017b2ad9c40f509bb389e2ca8cd40ae20962dd59
**A** (@Mohammad, @✖️plc, msg#63450, #63630): Explorer confirmed transaction successful; network delays expected during resync periods.

**Q** (@Unknown, msg#63619): When tokens get delisted from exchange, does exchange keep the tokens?
**A** (@Richi, msg#63620-#63623): Exchanges normally allow withdrawal period before delisting. Blockchain can request delisting; exchange should close trading pairs but allow withdrawals.

---

## Links Shared

- [Gravity Protocol framework](https://gravity.tech/): Cross-chain integration framework (mentioned msg#62382)
- [Ergo Auction House forum discussion](https://www.ergoforum.org/t/some-details-about-ergo-auction-house/428/4): Feature updates and future plans (msg#62742)
- [Portable & Reusable UTXO dApp Standard](https://www.ergoforum.org/t/building-a-portable-and-reusable-par-utxo-dapp-standard/441): Technical standard proposal (msg#62540)
- [TX Assembler Service (bypassing node requirement for dApps)](https://www.ergoforum.org/t/tx-assembler-service-bypassing-node-requirement-for-dapps/443): Accessibility improvement (msg#63023)
- [Oracle Core repository](https://github.com/ergoplatform/oracle-core): Guide for setting up Oracle Pools (msg#62960)
- [Ergo URL Wallet](https://erg.urlwallet.org/): Experimental wallet with private key encoded in URL (msg#63014)
- [Ergo Explorer](https://explorer.ergoplatform.com/en/stats): Network statistics and transaction verification
- [ErgoSocials Telegram group](https://t.me/ErgoSocials): Community-based marketing (msg#62724)
- [ERG Trading Telegram](https://t.me/ERGtrading): Designated channel for price/speculation discussion
- [ERGO 101 community resource](https://ergo101.org): Non-dev friendly ecosystem overview (msg#63581)
- [Updated ergoplatform.org](https://ergoplatform.org): Redesigned navigation with improved developer menu (msg#63576)
- [Awesome Ergo GitHub](https://github.com/ergoplatform/awesome-ergo): Curated resources for developers (msg#63495)

---

## Unresolved Questions

- **Bulletproof verification scope**: kushti exploring zero-knowledge proof integration in ErgoScript but full capabilities/timeline unclear ([msg#62653]).
- **Hard fork specifics**: Announced for "democratic mining" and unspecified "fixes" but detailed technical spec deferred ([msg#62739]).
- **Stablecoin release date**: Marked as Q4 2020 or Q1 2021, but dependency chain (Connector → Sigma Rust → Oracle → integration) suggests potential slippage ([msg#62958, #62999]).
- **Sidechain merge-mining implementation**: Theoretical improvements to BIP 301 discussed but no committed timeline or testnet availability mentioned ([msg#62739-#62791]).
- **Mining pool outreach**: kushti calling for community help contacting pools and mining software devs, but unclear if coordinated effort underway ([msg#62770-#62774]).
- **CoinMarketCap Citex exclusion**: Team wants removal but CMC bot exclusions temporary/ineffective; no permanent solution identified ([msg#63574-#63575]).
- **Multilingual website support**: Community requested German, Russian, Spanish, French localization but no commitment/timeline provided ([msg#63609]).
- **Mobile Yoroi for Ergo**: Users asking when mobile app available; no response captured ([msg#63196, #63477]).

---

## Notable Community Sentiment

- **Fundamentals bullish, price action discouraging**: Multiple community members (esp. David F) expressing frustration that market undervalues project despite announcements (Waves partnership, Yoroi integration, Oracle Pools, Dexy). Price stuck ~$0.40-$0.50 on legitimate exchanges despite 8x+ ATH ([msg#62928, #62956, #63277-#63285]).
- **Exchange quality concerns**: Citex manipulating price discovery; Hotbit repeatedly on maintenance; limited liquidity. CoinGecko more reliable than CoinMarketCap ([msg#63465, #63528-#63570]).
- **Early-adopter confidence**: Long-term holders (ponte, David F, Erik) emphasizing project maturity, research quality, and organic adoption strategy over short-term hype ([msg#63480, #63552-#63553, #63609]).