# Ergo General Chat — 2023-W01 Summary

## Key Topics Discussed

- **Ledger Support Release**: Ledger Ergo app launched in Developer Mode with 20-token-per-transaction limitation due to Nano S memory constraints. Full public release pending final testing by Ledger team.

- **Yoroi Wallet Deprecation**: EMURGO announced dropping Ergo support from Yoroi. Existing wallets continue functioning but new wallet creation disabled. Community transitioning to Nautilus, SafeW, Minotaur, and ErgoWallet.

- **Spectrum DEX Yield Farming**: Yield farming feature nearly complete for Ergo mainnet launch, configurable by projects with parameters for emission amount and duration. Cardano version coming later. Expected to reduce sell pressure and increase ERG liquidity pools.

- **Grid Trading & Arbitrage**: kushti experimenting with decentralized grid trading via smart contracts, achieving 16 ERG profit on 1,500 ERG test over one month. Interest in developing outsourceable grid contracts and smart orders using open-source patterns.

- **Block Reward Emission Reduction**: Next reduction scheduled ~block 914400 (early January 2023): 45 ERG → 42 ERG/block. Historical context: 75 ERG (2020) → current trajectory → ~3 ERG/block by 2027 via linear schedule.

- **Mempool & Costing Issues**: kushti investigating 4.x and 5.x node behavior holding invalid transactions; Explorer showing stale mempool data from mixed-version node pool. Correlation to pool mining configuration differences noted.

- **Oracle Pools v1 & v2**: Oracle Pool v1 operational (EF members + external); Oracle Pool v2 running for Dexy Gold with GORT rewards. Plan to build native Ergo oracles with capital from fundraising; Chainlink partnership announced for proof-of-reserve via Winter Protocol.

- **Palmyra & Rosen Bridge Integration**: Dan Friedman discussing decentralized trade financing using on-chain warehouse receipts, IoT sensors, and oracle feeds (Chainlink initially, expanding to Ergo oracles). Palmyra ecosystem built on Ergo, no multi-chain exclusivity concerns.

- **Speed Optimization Discussions**: Community discussing faster block times, microblocks, sidechains, and layer 2. Consensus that concrete use-case-driven design needed before optimization; 3.0 second block time affects timestamp-dependent contracts.

- **Storage Rent & Miner Rewards**: Chris Ray proposing smart contract mechanism rewarding long-term miners (18+ months) with percentage of storage rent distribution. Community debate on fairness, but acknowledged as novel incentive structure.

- **Security & Proof-of-Work**: kushti sharing thoughts on Prism protocol for scalability and smooth mining rewards. Discussion of NIPoPoWs, trustless sidechains, and BIP 301 merge-mining constructions.

- **Monetary Policy & CBDCs**: Extended discussion on weaponization of programmable money, central bank digital currencies, and connection to Ergo's mandate for economic freedom. Nigeria cash withdrawal restrictions cited as cautionary example.

- **Dexy Protocol & Stablecoin**: Community engaged in Dexy logo voting process via ErgoCube; discussion of protocol mechanics for stablecoin stability.

---

## Important Decisions or Announcements

- [@glasgowm, msg#359843, 2023-01-06]: **Ergo now on ledger!** Ledger app released in Developer Mode. Warning: do not send more than 20 tokens in one transaction or recovery required.

- [@Unknown, msg#359549, 2023-01-04]: Ledger merged new Ergo UI (app-ergo PR #7). Passed all functional tests; Ledger team validating production compatibility.

- [@Unknown, msg#359595-602, 2023-01-04]: Yoroi officially removing Ergo support. New wallet creation disabled immediately; existing wallets deprecated in future.

- [@Gazza, msg#359043-060, 2023-01-03]: Spectrum yield farming feature (incentivizing liquidity provision with additional token payouts) launching on Ergo mainnet first, Cardano later. Ergo deployment imminent.

- [@kushti, msg#359087-093, 2023-01-03]: Decentralized grid trading on Spectrum using smart contracts; also developing smart orders. Plans to open-source contracts and tracking rules.

- [@Dan Friedman (via Unknown), msg#359202-209, 2023-01-03]: Avalanche bridge frontend pending; Ergo Rosen Bridge "not far off." Chainlink partnership live for proof-of-reserve trade financing via Winter Protocol.

- [@Unknown, msg#359808-809, 2023-01-05]: **Block reward reduction in 3 days** (2023-01-08): 45 ERG/block → 42 ERG/block.

- [@Armeanio, msg#359681, 2023-01-05]: Position statement: Ergo ecosystem can adopt third-party solutions (e.g., Chainlink) without tribalism; Rosen Bridge enables multi-chain strategy.

- [@CW, msg#359826, 2023-01-06]: Community chat scheduled **Tuesday, January 10 @ 17:00 UTC** to discuss wallet transition post-Yoroi deprecation.

- [@chrom, msg#360313, 2023-01-08]: Weekly content summary: Dev Update, AMA, Sigma Update (Ep. 7), Hash It Out. Ergo x Cardano Twitter Space live.

---

## Technical Q&A Worth Preserving

- **Q** (@OxCapitulation, msg#359010-011): What can we do with optional indexes for explorer-like queries?
  **A** (@kushti, msg#359013-015): Many dApps can avoid Explorer dependency by relying on a group of nodes with additional indexes. Not all apps can switch (node becomes heavier), but good progress for lightweight dApp infrastructure.

- **Q** (@Pulsarz, msg#359157-158): Has there been analysis on transaction increase between old and new costing models? Mempool still filled despite improvements.
  **A** (@kushti, msg#359161-169, 185-190): 4.x and 5.x nodes holding invalid txs; 5.x downloading from 4.x. Pool settings filtering complex transactions post-merge. Explorer samples one of three 2miners nodes (varying versions). Needs coordination.

- **Q** (@qx(), msg#359027-031): What are grid bots and how can normal users run one? Will Spectrum support them?
  **A** (@Gazza, msg#359029-035): Grid bot UI would be beneficial. Spectrum discussions ongoing; possible integration using same liquidity pools. Currently yield farming taking priority.

- **Q** (@qx(), msg#359051-057): How long are tokens locked in yield farming? Can rewards be swapped via GuapSwap?
  **A** (@Gazza, msg#359053, 055-056): Configurable at creation; projects set emission amount and duration. Yes, GuapSwap integration enables pre-wallet reward swapping.

- **Q** (@qx(), msg#359067): How do exchanges provide ERG liquidity to users?
  **A** (@Unknown, msg#359067): Members depositing, buying on open market, and (implied) other methods not detailed.

- **Q** (@kushti, msg#359098): Is there writing on [previous technical topic]?
  **A** (@kushti, msg#359210): Checking closely now. [Incomplete, flagged for follow-up]

- **Q** (@Pulsarz, msg#359157): How much more txes in blocks with new costing?
  **A** (@kushti, msg#359161-169): Nodes holding invalidated txs; 4.x and 5.x both affected. Issue being fixed.

- **Q** (@anon_br, msg#359587-588): Ledger Ergo app deployment status?
  **A** (@anon_br, msg#359587-588): Successfully deployed on Ledger testing provider. Passed functional tests; pinging Ledger team for status.

- **Q** (@Ronnie, msg#359144-150): What does Ledger support mean exactly? Ledger Live integration or wallet-level signing support?
  **A** (@Unknown, msg#359146, 149): Ledger app required for transaction signing. Wallets implement Ledger signing once app available. Yes, wallets can use Ledger for signing.

- **Q** (@eπ, msg#359997, 360000): Can Nautilus export seed phrase? View transaction history?
  **A** (@Glasgow, msg#360001): No to both. (@Unknown, msg#360003): ErgoWallet supports seed export.

- **Q** (@T F, msg#360026-030): How do you run an oracle on Ergo? What's the maintenance and payment model?
  **A** (@Glasgow, msg#360028): oracle-core tool required; some dev skills needed for custom oracle types. Paid in oracle tokens (value TBD). Maintenance comparable to other continuous services. Price feed usable by any chain.

- **Q** (@zhang zee, msg#360322-346): How is LP token amount correlated to two tokens deposited in Spectrum pool? Relationship equation?
  **A** (@Unknown, msg#360326-337): LP token amount determined by pool math; already minted for existing pools. Can stake LP for Spectrum (SPF) rewards. Defi vaults and farming possible.

- **Q** (@Foyaz Sheikh, msg#359901, 906, 912, 922): How many ERG can Ledger hold? Is it safe? Will 20-token limit always apply?
  **A** (@Flying Pig, msg#359904, 910, 912-915, 919-921): No token count limit on holdings. 20-token *per transaction* limit (Nano S memory). Safe as seed phrase security. Accidental 20+ token TX requires Nautilus recovery. No ETA for limit removal; design enforced across all Ledger models.

---

## Links Shared

- [https://www.ergoforum.org/t/scalability-and-smooth-mining-rewards-for-ergo-with-prism/3954/10]: kushti's thoughts on Prism protocol for scalability and mining rewards.

- [https://twitter.com/chepurnoy/status/1610050586396721152]: kushti's Twitter post (context: technical discussion topic).

- [https://twitter.com/chepurnoy/status/1610280113853063169]: kushti technical announcement.

- [https://twitter.com/ergflip/status/1610294538060316676]: ErgoFlip roulette project launch showcase.

- [https://ergo.watch/]: Real-time wallet distribution and holder statistics.

- [https://rankmywallet.com/]: Alternative wallet ranking tool.

- [https://github.com/spectrum-finance/ergo-dex-backend]: Spectrum DEX offchain bot open-source code and configuration.

- [https://github.com/spectrum-finance/ergo-dex/blob/de-match/protocols/DeMatch.md]: DeMatch lottery-based executor protocol documentation.

- [https://docs.spectrum.fi/docs/user-guides/cardano-testnet/]: Spectrum Cardano testnet setup guide.

- [https://discord.gg/zKAQKpWJ]: Spectrum Discord invite.

- [https://ergoplatform.org/en/blog/Earning-ERG-in-2023-and-Beyond/]: TMR.ΣRG article on Ergo yield opportunities.

- [https://github.com/ergoplatform/oracle-core/blob/develop/docs/how_to_bootstrap.md]: oracle-core bootstrap documentation.

- [https://airtable.com/shrqrpH9y9VRorS4J/tblw7wsOQj5Fb2UzA/viwtozCLZv7cRYFCi/recijl1tVAXaQBWJA]: Ledger app listing status tracker.

- [https://twitter.com/DaGMan72/status/1611347200013119489]: Ledger Ergo setup instructions (hardware device guide).

- [https://github.com/K-Singh/Sigma-Finance]: Sigma Finance bond market implementation (in development).

- [https://docs.ergoplatform.com/mining/setup/solo/]: Solo mining calculator and documentation.

- [https://medium.com/@koutelier/how-to-install-ergo-on-ledger-device-developer-mode-72de2bcd1055]: Koutelier's comprehensive Ledger installation guide (Developer Mode).

- [https://ergcube.com/index.php?newsid=366]: ErgoCube Ledger installation guide with aesthetic formatting.

- [https://t.me/NautilusWallet]: Nautilus Wallet Telegram community group.

- [https://photos.app.goo.gl/HUMnfRjyFDyHSPhHA]: Ergo graphics and banner assets (Google Drive link).

- [https://twitter.com/paideiadao/status/1609938568259985408]: Paideia DAO 2022 milestones recap.

- [https://app.paideia.im/paideia/discussion/how-to-raise-funds-to-complete-paideia-mvp-44]: Paideia treasury management discussion forum.

- [https://twitter.com/paideiadao/status/1611080566618611726]: Paideia cross-chain Cardano launch announcement and Catalyst funding application.

- [https://youtu.be/LHh0o-yumk8]: Weekly Update & AMA (Jan 5, 2023).

- [https://youtu.be/k-VyHGXGnN0]: Hash It Out with CW: Ergo Looking Into 2023.

- [https://youtu.be/lViSf0kytE8]: The Sigma Update (Episode 7) with CW & qx().

- [https://youtu.be/t71sFhK1Bi8]: Weekly Developer Update (Jan 8, 2023).

- [https://rss.com/podcasts/erg/]: Ergo podcast RSS feed.

- [https://ergoplatform.org/en/get-erg/#Wallets]: Official wallet options and links.

- [https://cds.oette.info/ergo_diff.htm]: Ergo difficulty and hashrate historical data.

---

## Unresolved Questions

- **Ledger public release timeline**: When will Ledger Ergo app move from Developer Mode to official Ledger Manager release? (@iVacuum, msg#359739; @Aberg, msg#360045 joked "6 more months"; @theta decay msg#359729 indicates Ledger team still in "prod-like" testing and device verification phase).

- **20-token Ledger limit permanence**: Will Nano S token-per-transaction limit ever be lifted? (@Flying Pig, msg#359564-567) indicated Nano X memory difference but binary must be identical across models per Ledger policy.

- **Mempool stale data root cause**: Explorer showing outdated mempool due to sampling from mixed-version 2miners nodes; proper node pointer update pending (@kushti, msg#359185-190).

- **Pool mining configuration discrepancy**: Why are different pools using different node versions/configurations, filtering complex transactions? Coordination needed (@Pulsarz, msg#359163-180; @kushti, msg#359175-179).

- **Chainlink Ergo integration scope**: Will Ergo oracles be priority equal to Chainlink, or secondary? Fundraising plan for building out native oracles unclear (@Dan, msg#359134-137, commitment to "eventually" build out Ergo oracles).

- **Speed optimization direction**: Consensus on whether microblocks, sidechains, or layer 2 are priority; no formal roadmap decision confirmed despite extensive discussion (@kushti, msg#359201-212 indicating "drafts" to be revived post-Ergoversary).

- **ERG issuer and emission philosophy**: Long debate on whether current emission is sufficient, whether it drives price suppression, and sustainability of linear reduction schedule (@Mint, @Benny msg#359825-832). No consensus reached.

- **Nautilus seed phrase export feature**: Requested but marked as missing by design (no export, no transaction history). Feature request open but no confirmation of implementation plan.

- **Huobi exchange stability**: Reports of Justin Sun