# Ergo General Chat — 2022-W03 Summary
## Period: 2022-01-17 to 2022-01-23

---

## Key Topics Discussed

- **Network DDOS/Stability Issue (2022-01-19 to 2022-01-20)**: Network experienced significant disruption initially suspected to be DDOS attack. Investigation revealed the anetaBTC airdrop transaction with 5000 outputs caused exhaustion on P2P layer due to large block size. kushti identified issue in 2016 Scorex codebase and released hotfix v4.0.21.1. Multiple mining pools (HeroMiners, 2miners, Nanopool) experienced orphaned blocks and sync issues during incident.

- **EIP-27 Emission Soft Fork Discussion**: Extended debate over EIP-27 proposal to extend emission schedule. Key points of contention: (1) whether miners-only voting is appropriate vs. including token holders, (2) whether extending emission is premature given limited data on transaction fees and storage rent revenue, (3) concerns about changing "social contract" vs. ensuring long-term network security. Some argued for waiting 2+ years to gather more data on fee revenue; others emphasized need for proactive approach to ensure miner incentives remain sufficient.

- **GetBlok Mining Pool Raffle and Governance Tokens**: GetBlok completed fundraising raffle (raised 250+ ERG) to support smaller pool decentralization. Introduced GetBlok Governance Tokens (GBGT) distributed via smart contract - miners receive 1 GBGT per 1 ERG mined, enabling proof-of-vote mechanism for pool governance decisions. This model offers potential template for future token distributions to miners and enhanced PoW governance mechanisms.

- **Storage Rent vs. Emission Extension Debate**: Technical discussion on whether storage rent adjustments (shortening 4-year period, enforcing compliance, charging continuous fees) would be preferable to emission schedule changes. Concerns raised that current storage rent can be subverted by wallet bots processing transactions every 3.99 years. Debate on whether storage rent should reward miners vs. nodes (since nodes store data). Current storage rent estimated ~0.13 ERG per UTXO after 4 years; would need 490x current transaction volume to provide 3 ERG/block from fees alone.

- **Wallet Development Progress**: Nautilus Wallet announced mixer integration and multi-asset sending capabilities in upcoming beta release. Satergo desktop wallet highlighted as full-node option. Yoroi continued experiencing performance issues; community anticipating Nautilus as replacement. Ergo Mobile Wallet (iOS) available via TestFlight with 90-day expiration cycle while awaiting Apple App Store approval (delayed by DUNS number verification).

- **ErgoDex and Cardano Launch Timeline**: ErgoDex operational on Ergo mainnet. Cardano mainnet launch and cross-chain bridge expected February 2022, with Yoroi dApp connector v5.0 required for full functionality (v4.9.2 current as of week end).

---

## Important Decisions or Announcements

- [@kushti, msg#248595, 2022-01-20]: Released Ergo node hotfix v4.0.21.1 addressing P2P layer exhaustion issue caused by large transaction blocks
- [@kushti, msg#248414/248415, 2022-01-19]: GetBlok raffle achieved fundraising goal; 3 days remaining to support pool
- [@Armeanio, msg#248312, 2022-01-19]: Ergo Foundation working on Apple App Store compliance - DUNS number issue delaying commercial developer account for iOS wallet
- [@ArØhβΣ @Arohbe, msg#249561-249563, 2022-01-21]: GetBlok announced successful raffle completion; introduced GetBlok Governance Token (GBGT) distribution mechanism for miner voting
- [@Andy L, msg#249157/249316, 2022-01-20/2022-01-21]: Weekly Update and AMA scheduled for Friday 21st 13:00 UTC
- [@kushti, msg#248928, 2022-01-20]: Confirmed transaction fee contracts are not part of protocol, opening possibility for pooling fees into re-emission contract as alternative to EIP-27

---

## Technical Q&A Worth Preserving

- **Q** (@Ilya, msg#249417): "Let's say there is a small country's economy running on ergo and all transactions are simple client to business payments, but you have thousands of those in a second. It's important for a business to get an instant confirmation of a successful payment. What would be the right way to implement that?"
  **A** (@Marty ErgoPad, msg#249425-249427): "You use layer 2 for this. Things like zk rollups. Batch transactions. You satisfy hundreds or thousands of transactions per second, then only submit once to the blockchain (which is too slow otherwise). It's like a business cashing out at the end of the day."

- **Q** (@Ilya, msg#249374): "Can two signed transactions that was signed by two different people be concatenated to a single tx?"
  **A** (@kushti, msg#249401-249402): "Utxo not much worse with tps in case of simple payments... For bulk payments utxo is more efficient as per-transaction overhead compressed linearly to number of payments. However, utxo is more expressive, e.g. inputs can be of different users, and in case of accounts you need for smart contracts to do things which are trivial in utxo model."

- **Q** (@A, msg#248895-248896): "So storage rent should be paid to nodes not to miners? Nodes don't have much incentives maybe that's where storage rent should go"
  **A** (@kushti, msg#249408-249410): "Yes, you save space on the blockchain, pay smaller fee, and could be privacy gains also. The latter depends though." [Discussion notes data storage is one thing, dust collection is another; both serve different purposes]

- **Q** (Discussion on EIP-27 timing): "Why change emission schedule now with limited data?"
  **A** (@Glasgow, msg#248187): "Storage rent takes from -4 years so not quite 4 to figure it out." [@CW, msg#248933]: "To get 3 erg a block via transaction fees requires roughly 490x in daily transactions. From 5000 tx a day to 100,000 (20x) is still only 100 erg reward a day or .14erg a block."

- **Q** (@Grand Gambit, msg#248967): "I think you guys need to get a very detailed explanation of ErgoMixer"
  **A** (@kushti, msg#248970-248972): "Anon2020s not good about promoting it. We had few articles and vids back in 2020. Need to post again it seems. These days we can spend few months easily I guess repeating some things from 2019-20."

---

## Links Shared

- [https://github.com/ergoplatform/ergo/releases/tag/v4.0.21.1]: Node hotfix v4.0.21.1 release addressing P2P layer issue
- [https://github.com/ergoplatform/ergo/pull/1586#issue-1109163126]: Pull request details for P2P layer fix
- [https://ergoraffle.com/raffle/show/b19f4846795d66903e9b97b3363e413bb5d18d4015ca01e9c0cf579b806ec33b]: GetBlok fundraising raffle (closed successfully)
- [https://explorer.ergoplatform.com/en/transactions/4268e2bf73cb9b8e7e36ed04da8fe6759dd723f164b3ca2ff43c3e406c9c6995]: AnetaBTC 5000-output transaction that triggered network issues
- [https://www.ergoforum.org/t/indicative-voting-for-eip-27-soft-fork-proposal/3259]: EIP-27 soft fork voting discussion thread
- [https://eprint.iacr.org/2017/232.pdf]: Academic paper on Ergo's approach to PoW/PoS hybrid (referenced in emission debate)
- [https://www.lopp.net/pdf/A-model-for-Bitcoins-security-and-the-declining-block-subsidy-v1.05.pdf]: Research on security and block subsidies in PoW chains
- [https://ergoplatform.org/en/blog/2022-01-18-ergo-blockchain-scalability-and-adoption/]: Blog post on Ergo scalability and layer 2 solutions
- [http://docs.ergoplatform.org/dev/protocol/scaling/]: Protocol documentation on scaling approaches
- [https://www.ergoforum.org/t/storage-rent-details/256]: Detailed storage rent formula and mechanics
- [https://ergonaut.space/en/Guides/yield]: Guide to yield farming options on Ergo
- [https://ergonaut.space/en/Guides/Mining]: Mining setup guide
- [https://github.com/ergoplatform/ergo-wallet-app/issues/79]: EIP describing mobile wallet dApp connector implementation
- [https://github.com/abchrisxyz/OraclePoolHub]: Community member building oracle pool infrastructure for ErgoHack
- [https://medium.com/@noahergo/deep-dive-on-waves-enterprise-x-ergo-partnership-26a3a8574bcb]: Deep dive on Waves Enterprise x Ergo Oracle Pools partnership
- [https://wavesenterprise.com/media/waves-enterprise-and-ergo-bring-more-secured-blockchain-data-oracles-to-enterprise-blockchain]: Waves Enterprise x Ergo oracle announcement
- [https://www.reddit.com/r/ergonauts/comments/sb3gxp/roundup_current_development_in_the_ergo_ecosystem/]: Comprehensive roundup of current Ergo ecosystem developments
- [https://www.youtube.com/watch?v=n_7HhY8lvwc]: Weekly developer update (Jan 21, 2022) hosted by Joe Armeanio
- [https://twitter.com/NautilusWallet/status/1483945246962577410]: Nautilus Wallet announcement on mixer integration

---

## Unresolved Questions

- **Exchange Withdrawal Issues**: KuCoin and CoinEx disabled ERG withdrawals for "maintenance" on 2022-01-21/22. Multiple users reported missing withdrawals with invalid transaction hashes. KuCoin stated resolution expected Monday (2022-01-24) but issue persisted through week end. Gate.io withdrawals functioning normally.

- **Ledger Hardware Wallet Integration Timeline**: Multiple inquiries about Ledger support timeline. Response indicated development progressing after third-party bug fix, with binding library expected ready for ErgoHack (no specific date given). Some speculation integration might be announced during ErgoHack III.

- **Yoroi dApp Connector v5.0 Release**: Required for ErgoDex Cardano integration. v4.9.2 current as of week end; v5.0 release date not specified beyond "should be coming out of beta" and "hopefully February" for Cardano mainnet launch.

- **Token Holder Voting in Soft Forks**: Extensive discussion on whether ERG holders should have voting rights in protocol changes vs. miner-only voting. Technical feasibility of on-chain token holder voting acknowledged as complex; potential solutions discussed (proof-of-vote mechanisms, mining pool profit-sharing with stakers) but no concrete implementation proposed. [@kushti, msg#248921]: "That is true, the only question is how to do onchain voting" for token holders.

- **Post-Emission Security Model**: Ongoing debate whether storage rent + transaction fees will adequately sustain miner incentives after emission ends. Concerns raised about enforceability of storage rent (can be subverted by automated wallet transactions every 3.99 years). Alternative proposals discussed but not resolved: (1) pooling transaction fees into re-emission contract, (2) shortening storage rent period, (3) continuous storage fee vs. 4-year cliff, (4) sidechain fees as additional revenue source.