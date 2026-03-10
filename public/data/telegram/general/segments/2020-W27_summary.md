---
title: "Ergo General Chat — 2020-W27"
date_start: "2020-06-29"
date_end: "2020-07-05"
type: telegram_weekly
channel: general
week: "2020-W27"
source: telegram
message_count: 339
categories: [technical, mining, governance, wallet, defi, ecosystem, community, marketing]
key_terms: [Autolykos, memory-hardness, pool-resistant mining, ASIC, GPU, FPGA, exploit, GPU mining, HBM FPGA, professional lineup GPUs, hashrate, solo mining, pool mining, hard fork, memory-hardness fix, network upgrade, miner poll, Yoroi wallet, Coinbarn, Magnum wallet]
---
# Ergo General Chat — 2020-W27 Summary

## Key Topics Discussed

- **Autolykos pool-resistance design and mining centralization**: Discussion of whether Autolykos achieves its goal of preventing pool centralization. Consensus that you cannot forbid hardware purchases or private pool creation; the real challenge is preventing one large actor from dominating. Small miners were outcompeted at launch due to lack of optimized software access, not inherent algorithmic flaws.

- **Memory-hardness fix proposal and HBM FPGAs**: Debate over whether to implement memory-hardness improvements to Autolykos. HBM FPGAs (Osprey Mining ECU50) now competitive with GPUs; hard fork will signal this. Poll suggested to gauge miner preference. Current memory requirements: 0 GB with excessive prehash computation, or 2-6 GB post-HF with prehash.

- **Storage rent and fee market**: Network still heavily subsidized (0.813% of block rewards from transaction fees). Protocol needs ~1000x increase: 10x from transaction count, 10x from fee per TX, 10x from storage rent implementation.

- **Wallet ecosystem development**: Coinbarn and Magnum wallets available; Yoroi integration coming in "two months" (July-August timeline). Waves.exchange supports Ledger but requires trust in Waves gateways. Running a full node is a viable alternative.

- **Exchange listing strategy**: Team pursuing tier-2 exchanges (CoinEx, MXC, Bibox, TradeOgre) before major exchanges. Large exchanges charge $100–500K listing fees and typically require prior big exchange listings. CoinEx backed by ViaBTC mining pool, focused on PoW coins; MXC traffic predominantly Chinese; Persian community preference for CoinEx noted.

- **Emurgo partnership and Oracle Pools**: Oracle Pool v1 running with EF members and others; Oracle Pool v2 underway for Dexy Gold with GORT rewards. Plans to invest capital from token sale to build native Ergo Oracle infrastructure and tooling.

- **Smart contract innovation**: Unknown developer(s) testing new smart contracts on-chain (TX b0c5c993...). Long scripts with multiple assets and registers; appears to involve token mixing. ErgoTree pretty-printing and parsing tools exist but no convenient disassembler yet.

## Important Decisions or Announcements

- [@kushti, msg#38091, 2020-06-29]: Talk scheduled at Cardano Virtual Summit, July 3rd, 15:00 UTC on "Main Auditorium" track.

- [@kushti, msg#38576, 2020-07-04]: Version 3.3.0 coming soon; new airdrop planned for full-node runners plus lottery app integration.

- [@Kookster, msg#38344, 2020-07-01]: Ergo mining pool going live the next day (July 2nd).

- [@kushti, msg#38463, 2020-07-02]: Development status: 3.3.0 finalized under review; distributed signatures need polishing; EIP-3 (BIP-44) support implementation started; 4.0 features implementation started.

- [@kushti, msg#38499–msg#38501, 2020-07-03]: Final exchange decision to be made by Ergo Foundation. For Ravencoin (comparison): MXC #3 by CMC liquidity; CoinEx comparable with Gate.io and OKEx.

## Technical Q&A Worth Preserving

- **Q** (@Ollie [THREE Pool], msg#38314): For a $15K+ buy order, should I use limit orders to avoid slippage on Tidex?
  **A** (@Kookster, msg#38315–msg#38321): Do not market buy. A 150K ERG order was filled on Tidex earlier in the week; suggest 2300–2500 sat range. Limit orders will fill within 24 hours.

- **Q** (@SRV, msg#38627): Is TPS a bottleneck for Ergo smart contracts? How many contracts can execute per block?
  **A** (@kushti, msg#38628): TPS already raised +80% by miners during year one. Offchain protocols can resolve contractual agreements faster. Average block delay: 2 minutes.

- **Q** (@Unknown, msg#38641): Do we have a disassembler equivalent for ErgoTree?
  **A** (@kushti, msg#38643): No convenient one exists yet. Current method: parse + pretty-print (recently completed), then inspect manually.

- **Q** (@Ollie, msg#38601): How can I earn passive income on ERG holdings? Is mining viable for non-technical users?
  **A** (@Unknown, msg#38602): ERG is a Proof of Work blockchain. Staking does not exist. Mining requires GPUs; simple passive earning is not available for non-miners.

- **Q** (@Unknown, msg#38071–msg#38072): How does Autolykos prevent ASIC dominance if one actor can buy many GPUs or HBM FPGAs?
  **A** (@kushti, msg#38071–msg#38072): Autolykos reduces hardware advantage asymmetry and enables GPU competition with HBM FPGAs. However, private pools cannot be forbidden—only software optimizations and market dynamics can limit centralization.

## Links Shared

- [https://github.com/ergoplatform/ergo/issues/1100#issuecomment-624792780]: Discussion on pool-resistance and mining centralization concerns.

- [https://github.com/zack-bitcoin/amoveo-docs/blob/master/other_blockchains/proof_of_stake.md]: Amoveo (Zack Hess) paper on impossibility of Proof of Stake.

- [https://cardanosummit.iohk.io/images/virtual-summit-agenda.pdf]: Cardano Virtual Summit agenda (kushti's talk listed).

- [https://ergoplatform.org/en/blog/2020_02_12_welcome_to_smart_money/]: "Welcome to Smart Money" blog post.

- [https://github.com/ergoplatform/awesome-ergo]: Awesome Ergo resources repository.

- [https://github.com/ergoplatform/ergo/wiki/Set-up-a-full-node]: Wiki guide for setting up a full Ergo node.

- [https://ergoplatform.org/en/blog/2020_06_30_ergo_emurgo_oracles/]: Emurgo partnership and Oracle Pools announcement (July 1st).

- [https://www.ergoforum.org/]: Ergo Forum (general discussion and proposals).

- [https://twitter.com/chepurnoy/status/1277994487244107776]: kushti's Twitter — Summit talk announcement.

- [https://twitter.com/chepurnoy/status/1278726572674072577]: Exchange discussion/announcements.

- [https://twitter.com/ergoplatformorg/status/1278259980966166532]: Birthday announcement (July 1st anniversary).

- [https://explorer.ergoplatform.com/en/issued-tokens]: Ergo Explorer — issued tokens list (including "coinsbit" tracking token).

- [https://explorer.ergoplatform.com/en/transactions/b0c5c993a433d8f389b127853fa03be588c3a06e7e39e19015da254364dc0f73]: Unknown smart contract transaction (token mixing suspected).

- [https://www.youtube.com/channel/UC7cht_rw6ofX3wTirrQG8kw]: Ergo YouTube channel with presentation archives.

- [https://dev.pywaves.org/assets/725Yv9oceWsB4GsYwyy4A52kEwyVrL5avubkeChSnL46]: EFYT token swap tracking (Waves network).

- [https://www.ergoforum.org/t/lets-sign-collectively-distributed-signatures-api/259/3]: Forum discussion on distributed signatures API.

## Unresolved Questions

- **Memory-hardness fix timing**: New poll promised but not yet conducted. Unclear whether HF will proceed before or after FPGAs gain significant hashrate.

- **Optimized open-source miner**: Community requested; @Unknown noted need for ASIC producers to develop future PoW algorithms, implying external R&D required.

- **Airdrop filtering criteria**: ~30% of EFYT claimants filtered out for invalid Telegram handles or non-membership. @kushti offered to manually reimburse via mixer but process not systematized.

- **Cardano stablecoin integration**: @Ollie speculated whether Cardano stablecoin would use Ergo; no confirmation given.

- **Fee estimation API adoption**: API exists but "not even tested"; @kushti flagged as task needing community testing.

- **Smart contract discovery**: Identity of developers testing token mixing contract unknown; reverse-engineering needed.

---

**Note**: This week marked Ergo's first anniversary (July 1, 2020) and the Cardano Virtual Summit talk. Mining discussion dominated technical discourse. Exchange listing strategy shifted toward tier-2 platforms due to major exchange listing costs. Wallet integrations (Yoroi, Coinbarn, Magnum) matured, reducing custody friction for new users.