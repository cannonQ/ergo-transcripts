---
title: "Ergo General Chat — 2022-W43"
date_start: "2022-10-24"
date_end: "2022-10-30"
type: telegram_weekly
channel: general
week: "2022-W43"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2022-W43 Summary

## Key Topics Discussed

- **Ledger Wallet Integration**: Community questioned status of Ledger support for Ergo. No resolution provided; appears pending mutual coordination between Ledger and Ergo teams. Multiple users requesting updates [@Ian Lee, msg#340076; #340066].

- **Reference Client 5.0.0 Release**: Ergo NEWS announced significant network efficiency improvements through hybrid costing (AOT and JIT), faster script execution, and improved block space utilization. Expected to increase transaction throughput after activation [@Ergo NEWS, msg#340227].

- **Spectrum DEX Liquidity Mining Protocol**: Yasha Black (Spectrum Labs) shared LM (yield farming) protocol specification and contracts for community review. Liquidity mining is coming to the platform [@kushti khushi, msg#341103].

- **Rosen Bridge Development**: Ongoing private testnet development. No major updates this week due to team member illness; weekly dev updates continue Wednesdays in Discord [@Foeniculum NFTs, msg#340405-#340411; chrom, msg#341204].

- **Oracle Pool v2 and Dexy Gold**: v2 being developed with GORT rewards system, waiting for testnet launch. v1 runs alongside supporting Dexy Gold stablecoin [@Luivatra, msg#341162-#341163].

- **Layer 2 Scaling Discussion**: kushti confirmed block size and cost can be raised via miner voting. Current limits already higher than launch. Post-5.0 activation, limits expected to increase 5-10x as contract cost is main throughput bottleneck [@kushti khushi, msg#341446-#341447].

- **Storage Rent Mechanism**: Clarified as primarily dust prevention and chain bloat mitigation, not miner income optimization. Transaction fees paid for transacting; storage rent for storing. Both create incentives [@Luivatra, msg#341094; msg#341100].

- **Auction House (AHT) Token Launch**: Only 50% of seed round tokens acquired due to difficult market. Team deciding whether to put full liquidity or reduce to 50% for development funding. Trading pair now live on Spectrum [@Unknown, msg#340233; msg#340274].

- **Privacy on Ergo**: Community discussion on privacy-by-default vs. transparency-by-default. Mixer exists; suggestions for integrating mixer as dApp or within wallets. Stealth addresses and wrapped assets on privacy chains (e.g., Conceal) discussed as alternatives [@qx(), msg#340247-#340253; msg#340281-#340284].

- **ERG Cannot Be Burned**: Technical clarification that ERG cannot be burned due to storage rent mechanism. Any burn attempt would require redirecting ERG to transaction fees or back to originating address [@Koutelier, msg#340744-#340745; Ian Lee, msg#340771].

- **Explorer UI/UX Improvements**: Requests include simplified view for non-devs, dark mode, JavaScript-free mode, search dropdown for item type, emission schedule display, and Glassnode-style analytics. Address search flexibility issue noted [@qx(), msg#340099; Aberg, msg#340594; gg, msg#341027-#341030].

- **Extended UTXO Model Benefits**: Armeanio and others explained finite state machines, UTXO privacy advantages (one-time objects), and difference from global state (Ethereum model). Enables Turing-complete contracts while avoiding global state knowledge requirement [@Armeanio, msg#341487-#341503; Unknown, msg#341498-#341513].

- **Blitz TCG Cross-Chain Mechanics**: Game launching on both Ergo and Cardano. Likely separate implementations per chain rather than trustless cross-chain matching due to complexity [@Unknown, msg#340118; Luivatra, msg#340122-#340123].

## Important Decisions or Announcements

- [@Ergo NEWS, msg#340227, 2022-10-25]: Reference Client 5.0.0 released with hybrid costing and 5-10x effective throughput increase post-activation.

- [@Unknown, msg#340274, 2022-10-25]: AHT/$ERG trading pair now live on Spectrum DEX.

- [@Koutelier, msg#341434-#341438, 2022-10-30]: Lottery smart contracts completed; ready for next dev update. Community advised to prepare COMET tokens.

- [@kushti khushi, msg#341446-#341447, 2022-10-30]: Confirmed miner voting controls block size/cost. 5.0 activation will effectively raise limits 5-10x as contract execution becomes primary bottleneck.

## Technical Q&A Worth Preserving

- **Q** (@Ian Lee, msg#340076): Who is responsible for Ledger integration delay — Ledger or Ergo side?
  **A** (@Luivatra, msg#340077): Both parties are at different points in time; mutually pending on each other.

- **Q** (@Unknown, msg#340734): Can a smart contract automatically burn sent funds to an address, or is ERG storage required?
  **A** (@MrStahlfelge, msg#340742): Possible but ERG must be taken by anyone; alternatively redirect to tx fees or back to originating address.

- **Q** (@qx(), msg#340247): How could a mixer be integrated as a transparent dApp inside wallets?
  **A** (@qx(), msg#340251-#340253): Send TX to mixer from Nautilus, receive key to pick up funds. No webpage involved. Could allow mining directly to mixer into private wallet.

- **Q** (@Odiseus Me, msg#341076): With box consolidation tools, will miners lose storage rent incentives?
  **A** (@Luivatra, msg#341094): Storage rent is for chain dust prevention, not miner income. Bonus if collected. Both transaction fees and storage rent create incentives.

- **Q** (@Hassen, msg#341485): What does UTXO mean by "one-time objects" and "formalise privacy leaks"?
  **A** (@Armeanio, msg#341503; Unknown, msg#341498-#341507): UTXO allows spent/unspent true/false vs. knowing entire account state. Each TX only touches UTXOs involved, not global state.

- **Q** (@gg, msg#341259): Is SQL useful for blockchain development?
  **A** (@Luivatra, msg#341270): Yes; blockchain is slow so SQL caches chain data. Ergo Explorer uses PostgreSQL for indexing.

## Links Shared

- [https://ergo.watch/metrics/utxos](https://ergo.watch/metrics/utxos): UTXO metrics dashboard for chain analysis.

- [https://explorer.ergoplatform.com/en/oracle-pools-list](https://explorer.ergoplatform.com/en/oracle-pools-list): List of active Oracle Pools.

- [https://curiaregiscrypto.medium.com/eip-37-update-9-26-25ea3a4f221f](https://curiaregiscrypto.medium.com/eip-37-update-9-26-25ea3a4f221f): EIP-37 runaway hashrate fix explanation.

- [https://sigmausd.io/#/refund](https://sigmausd.io/#/refund): SigmaUSD protocol refund page.

- [https://github.com/spectrum-finance/ergo-dex/blob/lq-mining-protocol/protocols/LqMiningSimple.md](https://github.com/spectrum-finance/ergo-dex/blob/lq-mining-protocol/protocols/LqMiningSimple.md): Spectrum LM protocol specification.

- [https://github.com/spectrum-finance/ergo-dex/tree/lq-mining-protocol/contracts/lqmining/simple](https://github.com/spectrum-finance/ergo-dex/tree/lq-mining-protocol/contracts/lqmining/simple): Spectrum LM contract implementations.

- [https://youtu.be/h98U0MoWxbM](https://youtu.be/h98U0MoWxbM): Weekly Update & AMA with Dan Friedman, CW, and kushti (2022-10-27).

- [https://youtu.be/3Z8nexX8P5A](https://youtu.be/3Z8nexX8P5A): Hash It Out episode with CW and Armeanio discussing blockchain fundamentals.

- [https://ergoplatform.org/en/discover/#Documents](https://ergoplatform.org/en/discover/#Documents): Ergo whitepaper and documentation archive.

- [https://ergonaut.space/en/whitepaper](https://ergonaut.space/en/whitepaper): Community-hosted whitepaper link.

- [https://t.me/ErgoLayer2](https://t.me/ErgoLayer2): Telegram group for layer 2 solutions discussion.

- [https://obolflip.app.runonflux.io/](https://obolflip.app.runonflux.io/): Obol flip betting contract (mentioned for gambling mechanics).

- [https://twitter.com/anetaBTC/status/1584910525187637251](https://twitter.com/anetaBTC/status/1584910525187637251): eBTC wrapping testnet announcement.

- [https://twitter.com/ergopadofficial/status/1585289998013644803](https://twitter.com/ergopadofficial/status/1585289998013644803): ErgoPad survey on first dApp used.

- [https://www.ergopad.io/whitelist/cyberverse/staker](https://www.ergopad.io/whitelist/cyberverse/staker): Cyberverse staker whitelist signup.

- [https://www.reddit.com/r/CryptoCurrency/comments/yfo6p7/coingeckos_secret_ranking/](https://www.reddit.com/r/CryptoCurrency/comments/yfo6p7/coingeckos_secret_ranking/): CoinGecko ranking methodology discussion (Ergo now #50).

## Unresolved Questions

- **Ledger Integration Timeline**: Status unclear; appears stuck in mutual coordination loop between Ledger team and Ergo ecosystem [@Ian Lee, msg#340076; Armeanio, msg#340326].

- **Privacy-by-Default Implementation**: Community raised but no concrete proposal emerged for integrating privacy at protocol level or via dApp layer [@qx(), msg#340241-#340253; kushti khushi, msg#340273].

- **Storage Rent as Long-Term Miner Incentive**: With box consolidation tools becoming standard, open question whether storage rent will remain meaningful income source post-adoption [@Odiseus Me, msg#341076-#341083; Klaus, msg#341087-#341097].

- **Layer 2 Technology Decision**: Plasma library and Spectrum solutions both proposed; no community consensus on preferred approach [@glasgowm, msg#341238; msg#341246].

- **Ergo Verification Badges on Social Media**: Community requested official verification to reduce scam group visibility, but tension raised between decentralization ethos and practical onboarding needs [@RETRO, msg#341186-#341189; Chris Ray, msg#341193].

- **Night Owl Launch Timing**: Mentioned as "1-2 weeks away" but no confirmed date [@HQΣr, msg#341363].

- **Emission Schedule / Long-term Mining Viability**: kushti confirmed difficulty can be adjusted via miner voting, but long-term incentive sustainability after tail emission phase not explicitly discussed.