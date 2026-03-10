---
title: "Ergo General Chat — 2023-W28"
date_start: "2023-07-10"
date_end: "2023-07-16"
type: telegram_weekly
channel: general
week: "2023-W28"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2023-W28 Summary

## Key Topics Discussed

- **Rosen Bridge Development Update**: MHS_SAM reported significant progress on Rosen Bridge public launch setup, with most contract addresses and config boxes created. Watcher and Guard apps are under final development and will be released within days. Watcher collateral mechanism added to mitigate Sybil attacks - watchers must lock ERG and RSN to receive permits. TSS-API sign scenario implemented and tested successfully, keygen scenario implementation begun.

- **UTXO Snapshot Bootstrapping (v5.0.12)**: Node sync speeds dramatically improved with UTXO snapshot support. Full sync now takes 20-30 minutes compared to previous 12+ hours. Kushti confirmed snapshots provide full node security based on formal verification from https://eprint.iacr.org/2018/129.pdf. Discussion on whether snapshots should be default, with consensus that full history nodes still valuable for indexing and AVL tree rebuilding.

- **Oracle Pools v2 Architecture**: Major upgrade shifts to single pool box design with minted reward tokens (GORT - Gold Oracle Reward Token) replacing ERG rewards. Oracle operation significantly simplified with all commands manageable via CLI parameters. Prometheus/Grafana metrics added. 25 oracle operator target with incentivization via buyback contract funded by 0.2% of Dexy/Gluon minting fees purchasing GORT from LP.

- **Dexy Stablecoin Launch Plan**: Public testnet targeted for late July 2023. Dexy designed with strict but continuous minting capability to prevent whale manipulation like Neutrino crash. Will use Oracle v2 with GORT rewards. Main contract ready, fee contract under consideration (2-3 weeks estimated). Plan to expand beyond gold to other commodities if oracle economics prove viable.

- **Gluon Stablecoin Design**: Bruno Paleo explained Gluon removes discontinuities from Djed/SigmaUSD design (no min/max reserve ratio hard limits). Uses progressively higher fees for large transactions similar to AMM slippage. Reserve ratio can naturally float to market-preferred level rather than artificial 400-800% range. First deployment may target Silver instead of Gold to avoid oracle fragmentation while sharing Gold oracle with Dexy.

- **SigmaFi Bond Market Activity**: Multiple large bond requests posted with 38% APR over 18-24 month terms. Discussion of SigmaFi as superior alternative to traditional banking - trustless, no KYC, no jurisdiction limits, up to 38% yields on USD deposits. Single borrower (9i97VpdQp9tkmthmzNvGJgNBsVDP1bZN1m1KJgEXBbofLDxJBk6) posted ~6000 SigUSD in loan requests backed by 9810 ERG collateral.

- **Block Time and Scaling Discussion**: Hobithole raised question about faster block times. Kushti explained changing from 2-minute blocks would break monetary policy, NIPoPoWs, and require extensive security review. Alternative path: improve p2p block propagation and explore sub-block confirmation protocols after NIPoPoW bootstrapping implemented. Bitcoin-NG considered in 2017, may revisit soft-forkable sub-block proposals.

- **Node Syncing Performance**: Community successfully tested Satergo with new snapshot bootstrapping. Aberg working on Ergopay and Ledger integration for upcoming Satergo release. Discussion of making oracle operation as easy as running Satergo node. qx() suggested virtual box Ubuntu desktop VM image with pre-installed node/explorer/oracle for easier community participation.

- **Exchange Situation for US Users**: Extensive discussion of KuCoin and CoinEx closing US operations July 15. Community identified alternatives: TradeOgre (no KYC), SimpleSwap.io, StealthEX, ChangeNOW for swaps. BitMart confirmed not accepting US users. Sugon Deez shared workaround using foreign ID for KYC. Growing sentiment that US regulatory environment hostile to crypto.

- **XRP Ruling Impact**: Judge ruled XRP programmatic sales not securities, but institutional sales were. Armeanio noted ruling non-binding and likely to be retried, so not long-term clarity. Ripple distinction reinforces Ergo's fair launch model advantage. Discussion that VCs and exchange VC funds potentially impacted.

- **Marketing and Influencer Strategy**: Community debate on ProTheDoge Twitter engagement (~280k followers). Mixed feelings about engagement farming vs genuine exposure. Discussion of paid influencer costs ($25k previously mentioned). Consensus that community-driven marketing and organic growth via technical excellence preferred over paid shilling. Community raffle for marketing machine raised funds (4K ERG needed to complete).

- **Bass and ErgoCube Situations**: Some community concern about Bass token developer disappearing and ErgoCube website going offline. Clarification that neither were true rugpulls - both have 1000+ ERG in liquidity. ErgoCube functionality replaced by other tools (ergwatch, explorer). Discussion of proper token launch practices and community standards.

- **Tangem Hardware Wallet Integration**: Glasgow confirmed discussions with Tangem CTO for Ergo integration. Tangem is NFC card-based self-custody wallet. Community excitement about additional hardware wallet option beyond Ledger support coming to Satergo.

## Important Decisions or Announcements

- [@kushti, msg#408741, 2023-07-14]: Dexy public testnet launch targeted for late July 2023
- [@kushti, msg#408769, 2023-07-14]: Oracle v2 Gold pool will have 25 operators - current 8 testers fixed, 10-12 from USD pool invited, remaining positions sold with funds to LP
- [@kushti, msg#408826-830, 2023-07-14]: GORT tokenomics - 0.2% of minting fees to buyback contract, targeting 0.016 ERG per GORT price in LP, additional emission contract to pay devs for first 2 years
- [@Dennis Zadorozhnyi, msg#408759, 2023-07-14]: Oracle v2 only has one test remaining (dexy buyback box withdrawal), otherwise ready for launch
- [@Bruno Paleo, msg#408743, 2023-07-14]: hodlERG v2 relaunch details coming in few days, check hodlCoinGame telegram
- [@kushti, msg#408877, 2023-07-14]: Auction Coin implementation ongoing, wait for updates
- [@MHS_SAM, msg#407784, 2023-07-12]: Rosen Bridge Watcher and Guard apps releasing in days
- [@kushti, msg#408261-262, 2023-07-11]: BitMart does not accept US citizens despite ERG listing
- [@Armeanio, msg#408809, 2023-07-11]: Ergo Foundation 2.5 years remaining at current spend rate (~7.1M spent over 4.5 years)

## Technical Q&A Worth Preserving

- **Q** (@Hobithole, msg#408811): Can you make block times faster on L1 Ergo without compromising safety?
  **A** (@kushti, msg#408822): Not safe currently due to mempool transaction processing. 15 sec like Ethereum was insecure (2016 attacks showed). Better approach: improve p2p block propagation and explore sub-block confirmation protocols after NIPoPoW bootstrapping.

- **Q** (@Hobithole, msg#408852): Would changing block time require recalculating security assumptions?
  **A** (@kushti, msg#408851): Yes, and would break monetary policy, NIPoPoW proofs, and many other things. Hard to review all impacts.

- **Q** (@Flying Pig, msg#408489): If everyone ran bootstrapped node, would historic transactions be lost?
  **A** (@kushti, msg#408492): Yes theoretically, but how realistic is that assumption? Projects like Paideia and Crux need history, others will run full history nodes for indexing needs.

- **Q** (@Luivatra, msg#408495): Why does Paideia need full history?
  **A** (@Luivatra, msg#408495): To be able to rebuild AVL trees.

- **Q** (@kushti, msg#408494): Will Paideia DAO have deposit contract?
  **A** (@Luivatra, msg#408506): Yes treasury contract, but will have "upgrade" path to allow moving funds from old to new contracts.

- **Q** (@Armeanio, msg#408740): What Oracle v2 upgrades are you most excited about?
  **A** (@Dennis Zadorozhnyi, msg#408753): Single pool box design and reward tokens replacing ERG. Plus simplified operation - all commands through CLI parameters, added Prometheus/Grafana metrics.

- **Q** (@Armeanio, msg#408745): What advantages does Gluon have vs AgeUSD protocol?
  **A** (@Bruno Paleo, msg#408749): Removes min/max reserve ratio discontinuities that cause UX problems (like reservecoin holders unable to sell in certain situations). Gluon designed to eliminate all discontinuities.

- **Q** (@R, msg#408738): Will Dexy have unlimited liquidity unlike SigmaUSD?
  **A** (@kushti, msg#408746): Dexy will be strict but allow continuous small minting. Big whale mints impossible. Neutrino and other crashes show whale mints at the top are problematic.

- **Q** (@Armeanio, msg#408747): Potential to expand Dexy beyond gold?
  **A** (@Bruno Paleo, msg#408755): Limited by cost of running oracles. With Oracle v2 reward mechanism, protocols can reward oracle operators making new pegs sustainable.

- **Q** (@kushti, msg#408865): Is the market rational about estimating risks?
  **A** (@Bruno Paleo, msg#408876): In Gluon, irrational actors can reduce reserve ratio by swapping for high fees, but: 1) high fees benefit existing holders, 2) rational holders can exit if ratio gets too low, which improves ratio.

- **Q** (@Richi, msg#408780): Should Gluon have asymmetric fees - lower for reserve coin vs stablecoin minting?
  **A** (@Bruno Paleo, msg#408801): Considered having 4 different parameters for each operation. Never considered cashback due to gaming concerns. Will think about more fine-grained fee structure based on this suggestion.

- **Q** (@Unknown, msg#408605): What happens if I full sync with snapshots then disable snapshots?
  **A** (@kushti, msg#408719): Need clarification - disable storing snapshots or want to resync? Different outcomes.

- **Q** (@Hobithole, msg#408352): How do I sync with snapshots?
  **A** (@qx, msg#408354-355): Modify config file, check release notes of 5.0.12 or search for Noah's post with instructions.

- **Q** (@NoahErgo, msg#408751): What is left to test in Oracle v2?
  **A** (@Dennis Zadorozhnyi, msg#408759): Only dexy buyback box withdrawal of reward tokens. Otherwise ready.

- **Q** (@Armeanio, msg#408766): How to address Oracle v2 adoption barriers?
  **A** (@Dennis Zadorozhnyi, msg#408784): Need to convey running oracle no more challenging than running node technology-wise. Requires minimal resources, can run on same machine as node.

- **Q** (@Armeanio, msg#408805): Is GUI for oracle participation being considered?
  **A** (@Dennis Zadorozhnyi, msg#408812): Not currently, but interesting idea. With oracle running as service, browser UI for commands/status possible. Already have REST API so low-hanging fruit.

- **Q** (@kushti, msg#408815): Doesn't moving average + latest price in oracle complicate security re: gaming?
  **A** (@Bruno Paleo, msg#408821): Maybe, but superficially seems to reduce gaming since protocol chooses better value. Haven't explored secondary effects on other users thoroughly.

- **Q** (@CW, msg#408889): Have incentives been improved in v2 to avoid dusty payments?
  **A** (@Dennis Zadorozhnyi, msg#408892): Yes, a lot. No more ERG rewards. Each pool has own reward tokens accumulated in oracle's box.

- **Q** (@soysor, msg#408900): Is reward token redemption out of scope for Oracle v2?
  **A** (@Dennis Zadorozhnyi, msg#408901): Exactly! Up to each pool operator to decide redemption mechanism.

- **Q** (@Pulsarz, msg#408557): Can bootstrapped node still download history later?
  **A** (@Pulsarz, msg#408561): Yes, edit conf and delete data folder to restart full sync.

- **Q** (@Hassen, msg#408678): Do native cryptos have contract addresses like BTC or ETH?
  **A** (@NoahErgo, msg#408681-692): No, Ergo is not ERC-20 so no contract address. In account model like Ethereum, tokens exist in contract addresses. In eUTXO model, tokens are their own pieces that move wallet to wallet.

- **Q** (@Hobithole, msg#408696): Can Ethereum smart contracts be censored so tokens are censored?
  **A** (@Pulsarz, msg#408707-708): Yes, people used to approve large spending limits on ETH. When contract exploits found, wallets got drained of approved tokens.

- **Q** (@Hobithole, msg#408701): Is ErgoScript better for programming safe dApps?
  **A** (@Pulsarz, msg#408705): At least contracts can't take your funds without user interaction, unlike Ethereum's approval mechanism.

## Links Shared

- https://ergoraffle.com/raffle/show/1c7afc6e6c8ceea827f98d2b26fa1795c1632b58ea518948c7ba394ccb63c159: Community marketing machine raffle (4K ERG remaining needed)
- https://eprint.iacr.org/2018/129.pdf: Formal verification paper proving UTXO snapshot bootstrapping creates full nodes with negligible security risk
- https://sigmafi.app/#/: SigmaFi peer-to-peer bond platform
- https://t.me/hodlCoinGame: hodlERG v2 relaunch updates channel
- https://www.ergoforum.org/t/auction-coin-auction-based-emission-and-degen-finance-autonomous-machine/4287: Auction Coin proposal for degen finance
- https://github.com/ergoplatform/oracle-core/milestones: Oracle v2 development milestones
- https://github.com/ergoplatform/ergo/releases/tag/v5.0.12: Node v5.0.12 release notes with snapshot bootstrapping
- https://ergonodes.net/list: Ergo node network status
- https://ergo.watch/metrics: Ergo blockchain metrics
- https://appliedcrypto.ethz.ch/content/dam/ethz/special-interest/infk/inst-infsec/appliedcrypto/research/TavernaPaterson-SnappingSnapSync.pdf: Paper on Ethereum snap sync attacks
- https://docs.ergoplatform.com/node/install/node-android/: Tutorial for running Ergo node on Android
- https://ergosphere.cloud/: Umbrel-type solution for Ergo infrastructure
- https://tangem.com/en/: Tangem hardware wallet
- https://docs.cruxfinance.io/token-details/token-utility: Crux Finance token utility documentation
- https://t.me/SigmaFiAlert: SigmaFi bond request alerts channel
- https://revoke.cash: Site to check and revoke Ethereum token approvals
- https://ostrich.work/: Nostr-based job board
- https://ergonaut.space/en/Guides/yield: Ergo yield opportunities guide
- https://satergo.com/: Satergo full node wallet
- https://youtu.be/68d5_3vkXO4: Tutorial connecting Satergo to Spectrum DEX
- https://t.me/ergopad_chat: ErgoPad community chat

## Unresolved Questions

- Oracle pool v2 integration with existing Paideia and other dApps requiring indexing - how will snapshot nodes vs full history nodes work in practice?
- Optimal GORT token price and whether buyback mechanism will provide sufficient incentives for 25 oracle operators
- Whether Gluon reserve ratio will naturally converge to safe level or if market irrationality could drive it dangerously low
- Timeline for Gluon smart contracts completion (dependent on Kii's availability)
- Auction Coin implementation status and release timeline
- Whether to make UTXO snapshot bootstrapping default in node config vs requiring manual config changes
- Long-term sustainability of full history nodes if most users switch to snapshot bootstrapping
- Sub-block confirmation protocol research and soft-fork implementation feasibility
- Tangem wallet integration timeline and token support details
- US exchange situation - whether any major US-accessible exchanges will list ERG given regulatory environment
- Whether community should pursue paid influencer marketing or continue organic/grassroots approach
- Rubic DEX integration timeline and grant potential