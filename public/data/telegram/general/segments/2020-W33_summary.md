# Ergo General Chat — 2020-W33 Summary

## Key Topics Discussed

- **Oracle Pools Development**: Emurgo partnering with Ergo to build Oracle Pools as an alternative to Chainlink, with the goal of creating a decentralized oracle system that is currency-agnostic and more cost-effective than existing solutions.

- **UTXO Model vs Account Model**: Discussion of Ergo's UTXO-based scripting capabilities compared to Ethereum's account model, with examples showing Ergo enables more expressive smart contracts (rock-paper-scissors contract comparison).

- **Mixer Release**: Ergo v2 Mixer released with "excess deposit will be considered as donation" mechanism; v3.3.1 finalization in progress by kushti.

- **Exchange Listings & Liquidity**: Ongoing discussions about Binance listing prospects, current liquidity issues on Hotbit/Probit/Tidex, and price discrepancies (Citex skewing market cap by ~25%). EF confirmed talking with major exchanges.

- **Wallet & Hardware Support**: Ledger integration in progress (Jason Davies working on it); Yoroi wallet support expected within 30 days; Magnum, Coinbarn, node-panel cited as current options.

- **Emission Schedule**: 80 million ERG over 8 years with no inflation after Year 8 (mainnet launch July 1, 2019); fixed supply, no ICO/IPO/premine model.

- **DeFi vs Traditional Finance Philosophy**: Discussion of Ergo's non-standard DeFi entry (mixer, oracle pools, token support) and the philosophical position that public blockchains should only support economically viable financial applications long-term.

- **Soft-Forkability & Self-Amendment**: Ergo's on-chain miner voting protocol allows parameter changes (block size, storage fees) without hard forks; emphasis on network adaptability without trusted intermediaries.

- **Block Time & Scalability**: Current 2-minute block time, 854K max block size (being voted to increase). Discussion of scalability plans, layer 2 options, and whether faster blocks are necessary given concrete DeFi application profiles.

## Important Decisions or Announcements

- [@kushti, msg#42850, 2020-08-10]: Mixer v2 deployed with excess deposit donation mechanism.
- [@kushti, msg#42948, 2020-08-11]: P2P layer rework and NIPoPoWs bootstrapping in progress; documenting "nodes with bootstrapping in minutes."
- [@kushti, msg#43265, 2020-08-13]: Ergo v3.3.1 will be finalized; version contains bug fix (v3.01 had issue, users advised to hold off initially, then v2.2.1 released for Watcher UI).
- [@kushti, msg#43301, 2020-08-13]: Published blog post "Building Ergo: Our Vision for DeFi" by Cassius.
- [@Dmitry Usov, msg#43494, 2020-08-15]: Fixed broken "specifications" link on FAQ page.
- [@filippounits, msg#43588-43591, 2020-08-15]: EF confirmed ongoing talks with more exchanges; no ICO/IPO/premine; funding via Ergo Treasury for development sustainability.

## Technical Q&A Worth Preserving

- **Q** (@Unknown): How does Ergo compare to Ethereum in terms of smart contract capability?
  **A** (@Jason Davies, msg#42832): Ergo uses UTXO model (like Bitcoin) with advanced ErgoScript, enabling more powerful "programmable money" than Bitcoin while avoiding Ethereum's account-model pitfalls.

- **Q** (@Unknown): What is the difference between Ergo and Chainlink?
  **A** (@Jason Davies, msg#43421-43425): Ergo is a full blockchain platform for smart contracts; Chainlink is an oracle network (ERC677 token). Ergo can embed Oracle Pools natively. ERG serves as both miner reward and contract collateral (similar to ETH).

- **Q** (@Unknown): Is token rebalancing (like Ampleforth) possible on Ergo?
  **A** (@Jason Davies, msg#43476-43487): Yes, feasible via pricing oracle in rebase operation. However, cannot directly change token balances in wallets—must use internal multiplier (similar to AMPL's approach). Exchanges may struggle with open order semantics during rebasing.

- **Q** (@Unknown): Will Ergo's fees rise with congestion like Bitcoin?
  **A** (@Jason Davies, msg#43434-43440): Fee model is transaction-size based (Bitcoin-like). Block size can be increased by miner voting (unlike Bitcoin's fixed limit), reducing pressure. Currently 4x Bitcoin TPS capacity; max block size 854K and being voted upward.

- **Q** (@Ziyod Abdullayev): What are CPU/power usage numbers for mining Ergo?
  **A** (@ponte, msg#43506-43512): Autolykos algorithm requires GPU computing. Specific metrics TBD; directed to #ergo_mining channel on Telegram/Discord for detailed specs.

- **Q** (@Unknown): Can ERG be stored on Ledger/Trezor?
  **A** (@Jason Davies, msg#43446; @filippounits, msg#43584): Ledger integration in progress (Jason Davies working on it). Link to dev discussion: https://t.me/ergoplatform/43418

- **Q** (@scalahub): How are ErgoScript tests written?
  **A** (@scalahub, msg#42893-42894): No standalone compiler yet. Tests written as ScalaTest modules. Compilation via Node REST API or "ErgoScript playground by plutomonkey." Developer tools/debuggers in progress.

## Links Shared

- [https://ergoplatform.org/en/blog/2020_02_12_welcome_to_smart_money/]: Core Ergo value proposition ("Smart Money").
- [https://www.ergoforum.org/t/oracle-pools-a-new-oracle-model/263]: Oracle Pools research and specification.
- [https://gist.github.com/scalahub/2687001f9c5b877a0e6d4321723781aa]: Rock-paper-scissors smart contract in Ergo (comparison with Ethereum version).
- [https://emurgo.io/blog/emurgo-to-partner-with-ergo-and-build-blockchain-based-decentralized-financial-solutions]: Emurgo partnership announcement.
- [https://twitter.com/ergoplatformorg/status/1270356174525927424]: Twitter thread on Emurgo partnership details.
- [https://www.ergoforum.org/t/a-scalability-plan-for-ergo/226]: Scalability roadmap and layer 2 considerations.
- [https://ergoplatform.org/en/blog/2020-08-04-ergo-roadmap-for-2020/]: 2020 roadmap.
- [https://ergoplatform.org/en/blog/2019_05_20-curve/]: Emission curve and token distribution details.
- [https://ergoplatform.org/en/blog/2020-08-13-building-ergo-our-vision-for-defi/]: Vision for DeFi on Ergo (by Cassius).
- [https://ergoplatform.org/en/wallets/]: Wallet support page.
- [https://ergoplatform.org/en/faq/]: FAQ (specifications link was broken, fixed by msg#43494).
- [https://www.coingecko.com/en/coins/ergo]: Accurate market cap data (preferred over CMC).
- [https://api.ergoplatform.com/info/supply]: Correct circulating supply API.
- [https://www.ergoforum.org/t/ideas-from-the-community-and-bounties/327]: Community bounties and grant opportunities.
- [https://www.ergoforum.org/t/ergo-do-not-be-shy/334]: Community feedback thread on Ergo positioning.
- [https://github.com/ergoplatform/awesome-ergo]: GitHub awesome-ergo resource list.
- [https://explorer.ergoplatform.com/en/]: Ergo Explorer (official blockchain explorer).
- [https://t.me/ergo_mining]: Telegram mining channel.
- [https://discord.gg/Et9zCz]: Discord mining channel.

## Unresolved Questions

- **Binance listing timeline**: EF confirmed ongoing discussions but no commitment or ETA provided (msg#42928, msg#43108-43116). Community debate on whether Binance listing is necessary vs. natural ecosystem growth.
- **Specific Autolykos mining metrics**: CPU/power consumption per coin and farm ROI calculations not provided in chat; users directed to mining channels.
- **When will Yoroi Wallet support Ergo?**: Stated as "within 30 days" (msg#43373) but no confirmed date given.
- **Reproducible builds for releases**: kushti flagged issue #845 as prerequisite; targeting v3.3.x but no concrete timeline (msg#42926).
- **Block time parameter changes**: Discussion of faster blocks/microblocks raised but whether a testnet for 6.0 will proceed depends on community leadership (msg#42982, msg#43011).
- **Fee market behavior under extreme spam**: While spam protection mechanisms exist (v4.0.44+), no detailed analysis of worst-case fee dynamics during sustained attacks.

---

**Note**: This week saw strong community interest driven by Emurgo partnership visibility, early positioning ahead of Goguen-era Cardano integration, and growing DeFi attention. Price activity ($0.25→$0.46 range) attracted new participants, many from Cardano community. Technical discussions were high-quality but mostly reactive to user questions rather than core development announcements.