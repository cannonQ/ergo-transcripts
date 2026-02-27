# Ergo General Chat — 2020-W26 Summary

## Key Topics Discussed

- **Oracle Pools research and design**: Emurgo and Ergo Foundation jointly released the Oracle Pools specification as a novel approach to decentralized oracles using the extended UTXO model. Oracle Pools address limitations in existing systems (notably Chainlink) by using the blockchain's native currency for stake, implementing epochs for scheduling, stake slashing disincentives, and hierarchical aggregation of oracle data.

- **Hard fork planning**: Core developers proposed a hard fork with four main changes: improved memory-hardness of PoW, storage rent period reduction from 4 years to 3 years, AIT-to-JIT costing switch in contracts, and unpublished security fixes. End-user impact would be minimal.

- **Emurgo partnership**: Joint research partnership announced with Emurgo to build blockchain-based DeFi solutions, including Ergo support in Yoroi wallet, dApp support in Yoroi, and collaborative "hot stuff" research (details TBD at week's end).

- **ErgoMixer and ErgoScript applications**: Command-line and GUI versions of the trustless mixer released. Discussion of using Generalized Schnorr Proofs as a foundation for cryptographic protocol applications beyond mixing.

- **Node and tooling development**: Node version 3.3.0 coming with improved dApp support. Sigma Rust in progress to enable Ergo signing on mobile devices for complex contracts. Threshold signatures (not just multisigs) being documented for wallets.

- **Exchange listings and liquidity**: Multiple listings announced (Sistemkoin, CoinsBit, etc.). Discussion of volume quality on Waves DEX, Tidex, HotBit, Probit; warnings about shady exchanges (Citex) and KYC policies (Sistemkoin to Turkey, CoinsBit).

- **Mining pools**: ErgoPools and EZPools referenced; EZPools shut down temporarily. Solo mining at ~40 MH/s estimated at ~260 days to block with then-current difficulty.

- **Foundation membership and community growth**: Call for applications to Ergo Foundation membership. Emphasis on recruiting app developers and expanding community in decentralized manner.

---

## Important Decisions or Announcements

- [@kushti, msg#37631, 2020-06-22]: Ergo Platform Reference Client 3.2.7 released.
- [@kushti, msg#37635, 2020-06-22]: Community chat scheduled for Wednesday, 13:00 UTC.
- [@kushti, msg#37764-37791, 2020-06-24]: Hard-fork proposals and roadmap discussed in community chat: memory-hardness improvement, storage rent reduction, AIT→JIT switch, security fixes. Emphasis on Ergo as community-driven project.
- [@Unknown, msg#37915-37918, 2020-06-26]: Oracle Pools first publicly released following Emurgo partnership. Research document published at https://github.com/Emurgo/Emurgo-Research/blob/master/oracles/Oracle-Pools.md
- [@kushti, msg#37858, 2020-06-25]: kushti will present at Cardano Virtual Summit on July 3rd (time TBD).
- [@kushti, msg#37894, 2020-06-26]: Call for Ergo Foundation membership applications; formal details to follow.

---

## Technical Q&A Worth Preserving

- **Q** (@Phil, msg#37775): Is there an exact date for Ergo integration to Yoroi wallet?
  **A** (@kushti, msg#37776): That should be announced by Emurgo.

- **Q** (@Kookster, msg#37793-37794): Can you provide further comment on "Some new hot stuff done jointly w. Emurgo"?
  **A** (@Unknown, msg#37796): Something will be released either end of that week or start of next week as a showcase of what is to come.

- **Q** (@b j, msg#37880): How is Ergo different from other chains? What does it solve?
  **A** (@kushti, msg#37889): Classic PoW cryptocurrency with unique features: powerful financial contracts in strict Bitcoin-like model, Generalized Schnorr Proofs for cryptographic protocol applications (ErgoMixer as first example), stateless clients, efficient SPV clients, storage rent.

- **Q** (@b j, msg#37881): Do you have any partners which use Ergo?
  **A** (@kushti, msg#37884, msg#37886): Anonymous developers making mixers; partnership with Emurgo to build DeFi jointly (reference: https://emurgo.io/blog/emurgo-to-partner-with-ergo-and-build-blockchain-based-decentralized-financial-solutions).

- **Q** (@Franco, msg#37959): How many days to mine a block at ~40 MH/s?
  **A** (@kushti, msg#37969): ~260 days; better to wait for a pool.

- **Q** (@Kookster, msg#37925): Broken links in Oracle Pools conclusion paragraph.
  **A** (@Unknown, msg#37926): `/en/` appears to be the problem in one link.

- **Q** (@Dreamweaver, msg#38016): Is Oracle Pool still at concept/research stage or is there a product ready?
  **A** (@scalahub, msg#38018): Ergo mainnet has been live for over a year; Oracle Pool is already under development.

- **Q** (@Bullish Teddy, msg#38047): Will there be instructions for token swaps in the hard fork?
  **A** (@Kookster, msg#38049): Don't think swap will be necessary.

---

## Links Shared

- [https://github.com/ergoplatform/awesome-ergo]: Awesome Ergo resources repository.
- [https://www.ergoforum.org/]: Ergo Platform forum.
- [https://discord.com/invite/kj7s7nb]: Ergo Discord server.
- [https://twitter.com/chepurnoy/status/1274980310128701444]: kushti tweet (context unclear from excerpt).
- [https://messari.io/asset/ergo]: Messari Ergo page (listed as incomplete/empty in msg#37673).
- [https://twitter.com/QWQiao/status/1275224844158844928]: kushti retweet on community-driven projects.
- [https://emurgo.io/en/blog/emurgo-to-partner-with-ergo-and-build-blockchain-based-decentralized-financial-solutions]: EMURGO partnership announcement.
- [https://github.com/ergoplatform/ergo-dex/]: Command-line ERG DEX repository.
- [https://github.com/ergoplatform/ergo/releases/tag/v3.2.7]: Reference Client 3.2.7 release.
- [https://www.youtube.com/watch?v=Vhh_GeBPOhs]: Preview of kushti's Cardano Virtual Summit presentation.
- [https://github.com/Emurgo/Emurgo-Research/blob/master/oracles/Oracle-Pools.md]: Oracle Pools specification and design document.
- [https://medium.com/@RossUlbricht/remaking-the-maker-protocol-4b29f879f11]: Ross Ulbricht article on Maker Protocol (shared by kushti, msg#37970).
- [https://ergoplatform.org/en/foundation/]: Ergo Foundation grants and membership information.
- [https://www.ergoforum.org/t/oracle-pools-a-new-oracle-model/263]: Forum discussion thread on Oracle Pools with detailed ChainLink comparison.
- [https://github.com/ergoplatform/ergo/issues/1100]: GitHub issue on PoW fixes and community proposals.
- [https://cardanosummit.iohk.io]: Cardano Virtual Summit speaker list.

---

## Unresolved Questions

- **Hard-fork timeline**: ETA on hard fork not finalized. Depends on miner voting and approval.
- **Specific Emurgo "hot stuff"**: Details withheld until release; only confirmed to arrive end of week or following Monday.
- **Yoroi integration date**: Exact timeline deferred to Emurgo announcement.
- **Mining pool operational status**: ErgoPools claimed to be "supposed to be operational" but status unclear; EZPools shut down "until further notice."
- **Node 3.3.0 release schedule**: Announced as "coming" with no firm date given.
- **Sigma Rust for mobile**: In progress; no delivery date provided.
- **Fee market and spam protection mechanisms**: Discussed but implementation details deferred for future documentation.