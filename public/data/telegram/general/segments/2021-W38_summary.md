---
title: "Ergo General Chat — 2021-W38"
date_start: "2021-09-20"
date_end: "2021-09-26"
type: telegram_weekly
channel: general
week: "2021-W38"
source: telegram
message_count: 2204
categories: [ecosystem, defi, wallet, mining, technical, nft, community]
key_terms: [Cardano Summit, UTXO Alliance, partnership, announcement, Chainlink, oracle, competition, integration, price feeds, ErgoDEX, token, governance, liquidity, beta, Cardano, SigmaUSD, SigRSV, reserve ratio, collateral, AgeUSD]
---
# Ergo General Chat — 2021-W38 Summary
**Period:** 2021-09-20 to 2021-09-26

---

## Key Topics Discussed

- **Cardano Summit Ergo Appearances**: Alex Chepurnoy (kushti) presented at the Cardano Summit on September 26th discussing UTXO model interoperability and cross-chain collaboration. ErgoDEX was also mentioned in a DeFi panel on the impact stage. The UTXO Alliance was announced, bringing together Ergo, Cardano, Alephium, Nervos, and Topl for joint research and development on UTXO-based blockchain technology.

- **Chainlink Partnership with Cardano**: Cardano announced integration with Chainlink oracles for price feeds, causing community concern about Ergo's oracle role. Multiple admins clarified that Cardano plans to use multiple oracle providers (Chainlink, Wolfram, Ergo) as complementary services. Ergo oracle pools organize data from various sources including Chainlink feeds, and are better suited for complex data beyond simple price feeds.

- **Storage Rent Mechanism**: Extended discussion about Ergo's storage rent system charging 0.14 ERG per box after 4 years of inactivity. Native tokens in inactive boxes would be lost/recycled back into circulation. Users can prevent this by sending a transaction every 3-4 years. Concerns raised about NFTs and tokens being lost, with suggestions for automatic transaction systems.

- **ErgoDEX Tokenomics**: Repeated clarifications that ErgoDEX currently has no governance token. If added later, it will be distributed to minimize plutocracy, with fees paid natively in ERG (on Ergo) or ADA (on Cardano). Beta DEX is live on Ergo at beta.ergodex.io.

- **Mining Pool Announcements**: F2Pool (2nd largest Bitcoin pool, 3rd largest Ethereum pool) launched Ergo mining with 0% fees. WoolyPooly decreased block confirmations from 720 to 32 for faster payouts. Community emphasis on distributing hashrate across pools.

- **Wallet Security Incidents**: Two users reported losing funds after entering seed phrases on compromised systems or phishing sites. One lost 200k ADA, another lost ERG. Community emphasized: never enter seeds on digital devices, use hardware wallets, and be extremely cautious of anyone requesting seed phrases.

---

## Important Decisions or Announcements

- [@Armeanio, msg#210156, 2021-09-23]: F2Pool officially launched Ergo mining pool with 0% fee, marking entry of major Chinese mining infrastructure into Ergo ecosystem.

- [@Aleksandr Sh, msg#210654, 2021-09-24]: WoolyPooly reduced Ergo block confirmations from 720 to 32 blocks for faster payouts while maintaining 0.9% fee.

- [@kushti, msg#210729, 2021-09-24]: Ergo protocol reference client version 4.0.14 released at https://github.com/ergoplatform/ergo/releases/

- [@Armeanio, msg#210709, 2021-09-24]: Community content bounty program announced for Ergo-related content creation.

- [@Glasgow｜WON'T DM, msg#211600, 2021-09-26]: UTXO Alliance officially announced at https://utxo-alliance.org/ bringing together Ergo, Cardano, Alephium, Nervos, and Topl for collaborative UTXO research and development.

- [@Armeanio, msg#211650, 2021-09-26]: UTXO Alliance means "joint research, joint development, joint growth" with focus on sidechain/crosschain/offchain collaboration.

- [@Glasgow｜WON'T DM, msg#211232, 2021-09-25]: Charles Hoskinson announced Cardano will integrate data inputs via hard fork, allowing oracle pools to work natively on Cardano (currently requires metadata/box burning workaround).

---

## Technical Q&A Worth Preserving

- **Q** (@Lucas, msg#211027): How long does ergo node take to sync?
  **A** (@Unknown, msg#211028, msg#211034): 5+ hours is normal. At height 535000 should be done soon. Full sync can take significant time depending on hardware.

- **Q** (@Q, msg#210746): Why couldn't I find ERG/USDT pair on KuCoin mobile app?
  **A** (@ArØhβΣ @Arohbe, msg#210770): Browser version works. May be app-specific issue. Pair exists and is functional.

- **Q** (@Unknown, msg#211330): Is SigUSD/SigRSV usage on DEX tied to sigmausd.io reserve ratio?
  **A** (@Unknown, msg#211334): The SigmaUSD contract is separate from DEX liquidity pools. Allows for arbitrage opportunities between the two. May need more incentives to hold RSV.

- **Q** (@Hugir, msg#211486): What is Ergo contract address?
  **A** (@Gazza, msg#211491): There is none. Ergo is its own blockchain, not a token. Requires Ergo-specific wallet (Yoroi, Ergo Android, ViaWallet iOS).

- **Q** (@U A, msg#211379): What are incentives to run a full node?
  **A** (@Gazza, msg#211383): Helps decentralize network, gives access to full node wallet, provides developer tools for smart contract development. No direct financial rewards.

- **Q** (@cnvmakcmfmsmd, msg#210208): Is Ergo pure PoW?
  **A** (@Gazza, msg#210210): Yes, pure Proof of Work consensus with 2-minute average block time.

- **Q** (@Cheese, msg#211053): Can storage rent be bypassed?
  **A** (@Glasgow, msg#211434): Autolykos follows informal non-outsourceability definitions from academic papers. Formally correct NO schemes exist but are too inefficient for real-world use. Ergopool appeared as discussed in https://eprint.iacr.org/2020/044

- **Q** (@TMR.ΣRG, msg#211717): How do Ergo oracle operators get paid?
  **A** (@Glasgow, msg#211723-211725): Would need to pay in LINK and rebroadcast into ERG. Chainlink can be viewed as another data source. Spendable oracle inputs would be less efficient and require off-chain interaction for security.

---

## Links Shared

- [https://summit.cardano.org/](https://summit.cardano.org/): Cardano Summit registration and agenda
- [https://virtualsummit.cardano.org/](https://virtualsummit.cardano.org/): Virtual Cardano Summit access
- [https://www.youtube.com/watch?v=8kd6tjBDD7U](https://www.youtube.com/watch?v=8kd6tjBDD7U): Livestream of Cardano Summit main stage
- [https://utxo-alliance.org/](https://utxo-alliance.org/): UTXO Alliance official website
- [https://www.ergoforum.org/t/long-term-vision-for-ergo/2629](https://www.ergoforum.org/t/long-term-vision-for-ergo/2629): Long-term vision document for Ergo
- [https://www.ergoforum.org/t/storage-rent-details/256](https://www.ergoforum.org/t/storage-rent-details/256): Technical details on storage rent mechanism
- [https://www.ergoforum.org/t/a-solution-for-staking/1057](https://www.ergoforum.org/t/a-solution-for-staking/1057): Proposed staking-like solution for Ergo
- [https://ergoplatform.org/en/blog/2021-04-27-chainlink-oracles-vs-ergo-oracle-pools/](https://ergoplatform.org/en/blog/2021-04-27-chainlink-oracles-vs-ergo-oracle-pools/): Comparison of Chainlink and Ergo oracle architectures
- [https://veriumfellow.medium.com/oracle-special-4e36cfa6a852](https://veriumfellow.medium.com/oracle-special-4e36cfa6a852): Detailed article on Ergo oracle economics and design
- [https://curiaregiscrypto.medium.com/whats-going-on-behind-the-screens-ergo-weekly-dev-update-september-22nd-305222254967](https://curiaregiscrypto.medium.com/whats-going-on-behind-the-screens-ergo-weekly-dev-update-september-22nd-305222254967): Weekly developer update for September 22nd
- [https://ergoplatform.org/en/blog/2021-09-22-sigusd-and-sigrsv-a-how-to-guide/](https://ergoplatform.org/en/blog/2021-09-22-sigusd-and-sigrsv-a-how-to-guide/): New how-to guide for minting/redeeming SigmaUSD and SigmaRSV
- [https://moonboymerch.com](moonboymerch.com): First merchant natively accepting ERG payments for merchandise
- [https://ergo-pool.com/](https://ergo-pool.com/): Cardano stake pool paying rewards in ERG
- [https://beta.ergodex.io](beta.ergodex.io): Beta ErgoDEX interface for providing liquidity
- [https://sigusd.abchris.xyz/](https://sigusd.abchris.xyz/): SigmaUSD calculator for reserve ratios

---

## Unresolved Questions

- **Ledger Support Timeline**: Repeated questions about hardware wallet integration. Confirmed as "in development" for Yoroi integration but no specific release date given. Community strongly desires this for security.

- **ErgoDEX Governance Token**: If/when a governance token (potentially called ERGX) will be introduced remains unclear. Current stance is "may be added later as required" with fair distribution mechanisms.

- **Yoroi Nightly Features**: When ErgoDEX and other advanced features will move from Yoroi Nightly to main extension is unknown. Currently requires Yoroi Nightly for beta DEX access.

- **Cardano Data Inputs Hard Fork**: Charles announced Cardano will add data inputs to enable native oracle pools, but timeline for this hard fork was not specified.

- **Storage Rent Automated Solutions**: Community discussed need for dApp to automatically send transactions every 3 years to prevent storage rent collection, but no concrete development announced.

- **Ergo Oracles on Cardano**: While integration was discussed, specific implementation details and timeline for Ergo oracle pools operating on Cardano remain unclear beyond "will use multiple oracle providers."