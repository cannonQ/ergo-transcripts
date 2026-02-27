# Ergo General Chat Summary — 2021-W47

## Key Topics Discussed

- **DDoS Attack and Node Security**: kushti warned operators running public nodes to close port 9053 or move API to another port due to an active DoS attack. This complements memory limits and spam protection added in v4.0.44. Storage rent parameters and mempool filters can be adjusted to mitigate spam. [@kushti khushi, msg#232103–232440]

- **Emission Schedule Soft Fork Proposal**: A proposed change to block reward distribution: reduce block rewards by 21 ERG until reaching 24 ERG floor, then send remaining to re-emission contract at 3 ERG/block long-tail. Aims to reduce inflation pressure and extend mining revenue window. Implementation would require voting and occurs around block 700k (~101 days away at time of discussion). [@Glasgow, msg#232582–232610]

- **ErgoDex Cardano Integration Delay**: Originally scheduled before year-end, now targeting mid-January 2022 due to transaction assembly and JavaScript SDK implementation complexity. Will feature wrapped ERG and its own DEX token. [@Gazza, msg#232902]

- **Atomic Composability at Scale**: Discussion of whether eUTXO model can maintain atomic composability when implementing L2 solutions like Hydra. Consensus that plasma rollups and cross-head communication enable this; not a blocker. [@Glasgow, msg#233031–233037]

- **Storage Rent Mechanism**: Storage rent base fee is 0.14 ERG per UTXO and is adjustable. This is a key component of long-term sustainability and prevents mempool spam without relying on external solutions. [@Glasgow, msg#232693]

- **RandomNumberGenerator Oracle Discussion**: Explored using blockchain-derived randomness (box IDs, block IDs as hash outputs) vs. oracle-provided RNG. Raffle documentation discusses pros/cons. Hard problem: generating unmanipulable randomness. [@Glasgow, msg#232012–232016, msg#232440]

- **Wallet Ecosystem Expansion**: Multiple wallets in development or deployed: Ergo Wallet (Android → iOS), Minotaur, Yoroi (desktop), Ledger (coming soon), Nautilus, safew, Satergo. Desktop wallet supports both full node and remote node modes. [@Glasgow, msg#232147–232153; @Aberg, msg#232231–232235]

- **Mixer Tokenization**: Mixer is being tokenized; basic mix costs ~0.2 ERG with sliding scale up to ~1 ERG for higher rounds (30+ rounds sufficient for most use cases). [@TMR.ΣRG, msg#233035]

- **Marketing and Market Making**: Ergo Foundation hired marketing talents and signed contracts with a marketing agency and market maker (Kairon Labs, previously used by COTI). Goal to improve volume and exchange liquidity. [@Kevin, msg#232664–232665; @Glasgow, msg#232284–232285]

- **Scaling Solutions**: Ergo pursuing level 1 optimizations (NIPoPoWs, storage rent, more efficient node sync) before committing to L2 winners. No intention to sacrifice atomic composability. Multiple L2 domains may coexist (Lightning, Hydra, plasma rollups, sidechains via merge mining). [@Glasgow, msg#233031–233036; @kushti, msg#233228–233237]

- **anetaBTC Bridge**: Non-custodial Bitcoin bridge leveraging Taproot and Sigma protocols (unlike WBTC's centralized model). Enables trustless pegging and atomic swaps. Uses Winter Protocol and Chainlink oracles for proof-of-reserve. [@Frosty, msg#233411–233412; @TMR.ΣRG, msg#233402–233413]

---

## Important Decisions or Announcements

- [@Armeanio, msg#232513, 2021-11-24]: Weekly update videos and blog posts starting Sundays (ongoing commitment).
- [@Glasgow, msg#232284, 2021-11-24]: Kairon Labs signed as market maker to improve ERG liquidity.
- [@Gazza, msg#232902, 2021-11-26]: ErgoDex Cardano integration pushed from Q4 2021 to mid-January 2022.
- [@Gazza, msg#232680, 2021-11-25]: Yoroi Nightly update released, fixing swap/liquidity issues for ErgoDEX users.
- [@Glasgow, msg#232747, 2021-11-25]: Wormhole expected to finish Q4; multiple bridges (including SOL) hoped for Q1 2022.
- [@Armeanio, msg#233521, 2021-11-28]: Exploring dedicated Sigmaverse page/tab for miner tools and resources.
- [@Kevin, msg#233107–233109, 2021-11-26]: Weekly AMA scheduled with ecosystem and commercial updates.

---

## Technical Q&A Worth Preserving

- **Q** (@Paulo, msg#232437): Is there a full node light wallet using NIPoPoWs in development?
  **A** (@Glasgow, msg#232438): "Yeah NIPoPoW stuff is the focus now. UTXO set snapshots in next update maybe and groundwork for SPV clients is being done in sigma-rust"

- **Q** (@nitche, msg#232007): Is a random number generator oracle possible in Ergo?
  **A** (@Glasgow, msg#232012): Yes, but trust is an issue. Can use blockchain data (box/block IDs) as seeds, or joint RNG protocols like RanDAO. Raffle documentation covers pros/cons in "Raffle Winner" section.

- **Q** (@Noah, msg#232689): What is the starting storage rent fee (for not moving ERG for 4 years)?
  **A** (@Glasgow, msg#232693): "0.14 erg per UTXO - but is adjustable"

- **Q** (@Ilya, msg#232761): Is there a basic web extension wallet with open source code?
  **A** (@Glasgow, msg#232762–232770): Yoroi (https://github.com/Emurgo/yoroi-frontend) and dApp connector are open source. CoinBarn also available but code needs updating.

- **Q** (@Odiseus, msg#233171): What incentives would encourage node operators to run thousands of nodes for network stability?
  **A** (@Gazza, msg#233174): "You need to run a full node to do things like the DEX backend bots and be an oracle pool provider. These both have incentives so I think it will not be an issue."

- **Q** (@Odiseus, msg#233181): How can I modify my node to provide oracle pool / DEX backend functions?
  **A** (@Unknown, msg#233183–233184): Check GitHub oracle-core repository: https://github.com/Luivatra/oracle-core/tree/eth-connector

- **Q** (@Fifajs, msg#232946): Does ERG have the same fees if price increases 20-100x?
  **A** (@Glasgow, msg#232955): Fees are in ERG terms, so increasing price does not directly increase transaction cost in fiat. However, miners may raise mempool minimums if ERG value rises significantly.

- **Q** (@TMR.ΣRG, msg#233402): What is special about Taproot for bridges? How is anetaBTC different from WBTC on Ethereum?
  **A** (@Unknown, msg#233405; @Frosty, msg#233411): Taproot enables atomic swaps using Sigma protocols (similar to Ergo's). anetaBTC is non-custodial (unlike WBTC controlled by BitGo). Enables p2p, multi-sig, and anonymous swaps.

- **Q** (@Unknown, msg#233024): Where is the Ergo trading channel?
  **A** (@Glasgow, msg#233028): !chats (bot command lists all regional and specialized channels, including trading)

---

## Links Shared

- [https://ergoplatform.org/en/blog/2021-11-23-ergo-inflation-and-the-importance-of-a-store-of-value/]: Blog post explaining the emission soft fork proposal and long-term value preservation.
- [https://www.ergoforum.org/t/emission-soft-fork-proposal/2996]: Forum thread with full details on the emission schedule change.
- [https://github.com/ErgoRaffle/raffle-documentation#raffle-winner]: Raffle documentation covering randomness seed selection and pros/cons.
- [https://ergoplatform.org/en/blog/2021-11-17-bitcoin-taproot-upgrade-and-ergos-sigma-protocols/]: Blog post explaining how Taproot and Sigma protocols enable non-custodial Bitcoin bridges.
- [https://ergoplatform.org/en/blog/2021-10-29-ergo-ecosystem-scaling-solutions/]: Overview of scaling solutions: L0, L1, and L2 approaches.
- [https://kaironlabs.com/]: Market maker company working with Ergo.
- [https://ergopad.io/]: LaunchPad platform for Ergo ecosystem projects (community-built from ErgoHack 2).
- [https://sigmaverse.io/]: Ergo dApp hub (updated with new dApps and payment portal).
- [https://ergonaut.space/en/Mining]: Community mining resources page.
- [https://github.com/Luivatra/oracle-core/tree/eth-connector]: Oracle pool core implementation.
- [https://app.ergodex.io/swap]: Live ErgoDEX swap application.
- [https://explorer.ergoplatform.com/en/charts]: Ergo blockchain explorer with on-chain metrics.
- [https://ergo.watch/]: Emission tracking and blockchain data dashboard.
- [https://ergopaperwallet.org/]: Open-source paper wallet generator.
- [https://t.me/+tj_fd2fi04E5MTUx]: anetaBTC Telegram community group.

---

## Unresolved Questions

- **Node incentivization**: While oracle pools and DEX bot operators have incentives, the broader question of how to incentivize thousands of casual node runners (beyond ideological commitment) remains open. [@Odiseus, msg#233171–233180]
- **ErgoDex Cardano timeline finality**: Mid-January 2022 stated as target but flagged as "looking like" due to ongoing SDK work. No hard commit. [@Gazza, msg#232902]
- **Marketing impact quantification**: Difficulty in measuring ROI of community translations (e.g., Manifesto to Hindi). Acknowledged as valuable for inclusion but impact remains unclear. [@Hamilton Filho, msg#232778–232797]
- **Atomic composability in production L2s**: Theory is solid but no deployed example on Ergo yet. How it behaves under real cross-head communication on Hydra TBD. [@Glasgow, msg#233037]
- **Emission soft fork voting timeline**: Block 700k arrival is ~101 days, but voting window (30 days) + activation (30 days) means actual fork timing still dependent on community signaling. [@Richi, msg#232613]
- **Full node sync performance on constrained hardware**: Raspberry Pi 4 support planned (aarch64) but no confirmed ETA or benchmark data shared. [@Aberg, msg#233185–233203]

---

## Additional Context

**Price & Market Sentiment**: Consistent discussion of downward price pressure throughout week (Nov 22–28), with community reassurance that long-term fundamentals remain strong. Price swings tied to broader market corrections, not Ergo-specific developments. No technical impact on protocol.

**Community Engagement**: High participation in Ergoversary planning, anetaBTC Catalyst proposal (community paying 1 ERG per constructive comment), and NFT auctions. Evidence of organic ecosystem building independent of price action.