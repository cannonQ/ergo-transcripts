# Ergo General Chat — 2020-W22 Summary
**Period:** 2020-05-25 to 2020-05-31  
**Key Participants:** kushti (core dev), Jason Davies (pool dev), bez, scalahub, others

---

## Key Topics Discussed

- **Forking Policies & "Hardening" Fork**: kushti outlined a potential hard fork batching memory-hardness improvements to Autolykos, JIT costing for scripts, storage rent period reduction (4 to 2 years), and security fixes. Fork is proposed to avoid future forks and harden the network economically.

- **Storage Rent Economics**: Discussion on reducing storage rent collection period from 4 years to 2 years to improve long-term economic stability. Concern raised about sudden changes causing issues for long-lived contracts; consensus emerged that 2 years should be a hard minimum.

- **Autolykos Memory-Hardness**: Proposed modification to Autolykos PoW to improve memory-hardness properties and make ASIC resistance more robust. Requires community discussion but seems to have developer support.

- **JIT Costing for Scripts**: @morphic proposed just-in-time costing mechanism for ErgoScript execution to replace fixed costs, improving economic efficiency.

- **Pool Development & Pool-Resistance**: Jason Davies working on decentralized pool using collateral contracts to overcome Autolykos pool-resistance. @kushti cited https://blog.plutomonkey.com/2020/05/collateral-based-pool-for-ergo/ as reference implementation approach.

- **Mixer for Stablecoins**: Testing underway for token mixer from anon92048; kushti noted this enables stablecoin mixing, a significant use case.

- **Wallet Ecosystem Expansion**: CoinBarn Chrome extension live, Magnum Wallet available, Cypra (privacy/swaps-oriented) in development, Ledger support grant awarded and in progress.

- **Node Releases & Stability**: v3.2.5 released with connectivity improvements, v3.2.6 released, v3.2.7 with new features under testing. Tidex node issues being investigated (fork handling in v3.2.3).

- **ErgoScript IDE**: Jason Davies working on IDE for ErgoScript allowing experimentation and visual inspection of contract execution; initially targeted at developers, eventual plug-and-play aspirations.

- **Exchange Support & Arbitrage**: Discussion on why miners prefer Tidex (no-KYC, lower taker fees). kushti noted arbitrage opportunities exist around Ergo across exchanges; TradingView integration desired but exchanges must provide data feed.

---

## Important Decisions or Announcements

- [@kushti, msg#34582, 2020-05-26]: Ergo Platform reference client v3.2.5 released (recommended update)

- [@kushti, msg#34589, 2020-05-26]: Ergo Platform general community chat scheduled for Wed 13:00 UTC

- [@kushti, msg#34730, 2020-05-26]: CoinsBit reached out; will distribute airdrop ERGs within 7 days after approval

- [@kushti, msg#34907, 2020-05-27]: Proposed fork termed "Hardening" fork to batch multiple improvements

- [@kushti, msg#34949, 2020-05-27]: v3.2.4 and v3.2.5 released; v3.2.6 and v3.3.0 in pipeline; distributed signatures support coming to node

- [@kushti, msg#34313, 2020-05-31]: v3.2.6 released https://github.com/ergoplatform/ergo/releases/tag/v3.2.6

- [@kushti, msg#35318, 2020-05-31]: v3.2.7 with new features under testing; general devs chat scheduled for Wed

- [@filippounits, msg#35335, 2020-05-31]: Ledger Nano X support in progress; developer received DevFund grant for implementation

---

## Technical Q&A Worth Preserving

- **Q** (@Unknown, msg#34880): Are Ergo smart contracts safer because they are non-Turing-complete?  
  **A** (@kushti, msg#34887): The language is not non-Turing, but the blockchain is. Bitcoin is non-Turing but Ergo is theoretically Turing-complete across multiple transactions.

- **Q** (@Unknown, msg#34893): Is Turing-completeness the main focus of Ergo?  
  **A** (@Jason Davies, msg#34893): Ergo is theoretically Turing-complete across multiple transactions but Turing-completeness is not the main focus.

- **Q** (@Unknown, msg#34901): How does non-Turing language open doors for DeFi?  
  **A** (@Unknown): (Implicit in discussion) Non-Turing constraints enable predictability and security properties beneficial for DeFi contracts.

- **Q** (@Unknown, msg#34914): Is storage rent a parameter miners can vote on?  
  **A** (@kushti, msg#34917; @Jason Davies, msg#34918-19): Miners cannot change the period; they can adjust fee coefficient within limits. Proposal is hard fork to change period from 4 to 2 years.

- **Q** (@Unknown, msg#34924-25): If storage rent period changes via fork, can miners immediately take rent from all old boxes?  
  **A** (@kushti, msg#34926-27; @Jason Davies, msg#34929): Miners can do anything via hard fork, but soft fork requires discussion of limitations. Contract designers should expect storage rent and design accordingly.

- **Q** (@Cheng.alph, msg#34970): What about pool-resistance discussions?  
  **A** (@Cheng.alph, msg#34974): Core devs working on special pools. (Later clarified: pool-resistance built-in but overcome via collateral contracts.)

- **Q** (@Unknown, msg#34976): Is pooling possible after fork? How is it restricted?  
  **A** (@kushti, msg#34980): Miners need private key access (can run away with block), but Ergo's contract capabilities allow pooling via collateral contracts (reference: https://blog.plutomonkey.com/2020/05/collateral-based-pool-for-ergo/).

- **Q** (@Unknown, msg#35088): Can developers determine cost of deploying smart contracts in Ergo unlike Ethereum?  
  **A** (@kushti, msg#35102): Cost is defined by protocol, but associated fee is not; fee is matter of agreement between users and miners (not protocol-mandated like Ethereum).

- **Q** (@Marek M, msg#35087): How large is Ergo blockchain?  
  **A** (@Unknown, msg#35089): ~1.3 GB as of May 28, 2020.

---

## Links Shared

- [https://www.coingecko.com/en/coins/ergo](https://www.coingecko.com/en/coins/ergo): Price reference

- [https://ergoplatform.org/en/blog/2020_02_12_welcome_to_smart_money/](https://ergoplatform.org/en/blog/2020_02_12_welcome_to_smart_money/): Welcome to Smart Money blog post

- [https://github.com/ergoplatform/awesome-ergo](https://github.com/ergoplatform/awesome-ergo): Awesome Ergo resources

- [https://www.ergoforum.org/](https://www.ergoforum.org/): Ergo Forum

- [https://blog.plutomonkey.com/2020/05/collateral-based-pool-for-ergo/](https://blog.plutomonkey.com/2020/05/collateral-based-pool-for-ergo/): Collateral-based pooling design for Ergo (referenced by kushti)

- [https://github.com/ergoplatform/ergo/issues/1100](https://github.com/ergoplatform/ergo/issues/1100): Memory-hardness fork discussion (GitHub issue)

- [https://www.ergoforum.org/t/a-scalability-plan-for-ergo/226](https://www.ergoforum.org/t/a-scalability-plan-for-ergo/226): Scalability plan for Ergo

- [https://github.com/ergoplatform/ergo/releases/tag/v3.2.5](https://github.com/ergoplatform/ergo/releases/tag/v3.2.5): v3.2.5 release notes

- [https://github.com/ergoplatform/ergo/releases/tag/v3.2.6](https://github.com/ergoplatform/ergo/releases/tag/v3.2.6): v3.2.6 release notes

- [https://twitter.com/chepurnoy/status/1265391016372305921](https://twitter.com/chepurnoy/status/1265391016372305921): kushti tweet on mixer progress

- [https://twitter.com/coindealcom/status/1266308300469043201](https://twitter.com/coindealcom/status/1266308300469043201): CoinDeal nomination campaign

- [https://www.ergoforum.org/t/ergo-platform-ecosystem-digest-may-2020/230](https://www.ergoforum.org/t/ergo-platform-ecosystem-digest-may-2020/230): Ergo Platform Ecosystem Digest — May 2020

---

## Unresolved Questions

- **Timing of "Hardening" Fork**: No firm date set; depends on community discussion and miner feedback. kushti stated it is "not final" and awaits broader consensus.

- **Storage Rent Period Finality**: Whether 2 years is truly the final target or if soft-forkable period changes (2/3/4/5 years) will be implemented remains open.

- **Ledger Support Timeline**: In progress via DevFund grant but no delivery date specified.

- **v3.2.7 Release Date**: Described as "under testing" with no ETA given.

- **Decentralized Pool Launch**: Jason Davies stated "not yet" as of May 27; Monday (May 31) target mentioned by kushti but no confirmation of actual launch.

- **CoinsBit Airdrop Distribution**: Contingent on list approval "over the weekend" (May 29-30) with distribution to follow "next week" (week of June 1). Multiple participants asked about timing throughout the week; dates remained fluid.

- **Privacy-Preserving Auctions**: kushti mentioned "would be cleaner," implying under research; no implementation timeline provided.

- **Better Oracle Designs**: "Works in progress" and "to be announced soon" per kushti, but no specifics disclosed.