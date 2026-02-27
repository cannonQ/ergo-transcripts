## Key Topics Discussed

- **hodlERG Exploit and Resolution**: A vulnerability was discovered in the hodlERG smart contract that allowed minting of tokens without proper ERG backing. Community member Krasavice Blasen white-hat exploited the contract and drained ~90k ERG to prevent malicious exploitation. All users were refunded their ERG, with kushti personally compensating the LP provider whose liquidity was affected. The vulnerability was traced to a commit that made reserveDelta correct but broke a validation check, which was then removed as it appeared tautological.

- **hodlERG v2 Development**: Following the exploit, the team is working on hodlERG v2 with improved security. Multiple audits, additional negative tests, and thorough code review are being conducted before relaunch. The concept remains popular with community members requesting variations including higher fee tiers (69.420% "Dan Edition") and hodl versions for other tokens.

- **Ergoversary Summit Content**: Week featured continued promotion of Ergoversary Summit presentations covering various ecosystem topics including DexyGold, Gluon protocol (new Djed iteration), lending on Ergo, NFTs, GuapSwap, Gaming, and hodlERG implementation. Videos featured core developers and community builders explaining technical implementations and future roadmaps.

- **Exchange Listing Challenges**: Extensive discussion about lack of US exchange access after KuCoin implementing KYC. Community debated alternatives (TradeOgre, SevenSeas, CoinEx) and challenges around liquidity depth and user experience. Consensus that current regulatory environment makes new CEX listings risky and expensive, with focus shifting to Rosen Bridge and DEX solutions.

- **Block Time and Scaling Discussion**: Debate about Ergo's 2-minute block time being slow for modern L1 chains. Community discussed trade-offs between security, decentralization, and speed. kushti indicated multiple drafts for improvements (sub-blocks, microblocks, sidechains) exist and will be revisited, with concrete application set making optimization easier than empty chains.

- **Storage Rent Activation**: Storage rent mechanism set to activate July 20th (mentioned multiple times). Community reminded to consolidate UTXOs before activation. Discussion of storage rent as non-retroactive feature and potential for miner governance to adjust parameters within protocol limits.

- **Rosen Bridge Development Progress**: Major update showing backend refactor nearly complete with new TSS integration. Watcher and Guard UI development finishing within days/week. Short testing period planned before mainnet launch. Spectrum and Zengate announced as launch accelerators. ETA approximately 2-3 weeks from messages.

## Important Decisions or Announcements

- [@Krasavice Blasen, msg#405614, 2023-07-03]: White-hat exploited hodlERG contract vulnerability, secured ~90k ERG, and coordinated refunds to all users through collaboration with core developers
- [@kushti, msg#405678, 2023-07-03]: Published detailed postmortem of hodlERG vulnerability explaining how bug was introduced through commit meant to fix different issue, with test implementation and fix committed
- [@kushti, msg#405918, 2023-07-03]: Confirmed few more audits and tests needed before hodlERG relaunch, made first two negative tests
- [@kushti, msg#404496, 2023-07-04]: Announced completion of NiPoPoW bootstrapping branch, ready for review next day
- [@mhs_sam via Glasgow, msg#404785, 2023-07-05]: Rosen Bridge backend refactor almost done, frontend finishing next week, then short testing period before launch
- [@kushti, msg#404977, 2023-07-05]: Published 35th dev update, noted last one with Cardano AMM in development
- [@Dan Friedman, msg#405940, 2023-07-09]: Announced Catalyst proposal for Rosen Bridge adoption promotion within Cardano ecosystem, requesting 850k ADA

## Technical Q&A Worth Preserving

- **Q** (@TMR.ΣRG): Say we have a large pile of unwanted tokens subject to rent but nobody wants them. Is there a way to get rid of them or will they pile up in a queue?
  **A** (@Unknown): Can just burn them

- **Q** (@Unknown): Can hodlerg v2 be called antiderivative or derivative dual, because it builds TVL down rather than on top?
  **A** (No direct answer given, concept noted as interesting dual to ponzi)

- **Q** (@Reek): What is the benefit of putting your Ergo into the hodlERG pool?
  **A** (@Hobithole): Early exiters lose money through 3% fee that goes to remaining holders. Mathematically impossible for hodlERG price to decrease relative to ERG over time. Later exiters benefit from accumulated fees.

- **Q** (@louissaberhagen): Should storage rent be non-retroactive so new rates don't propagate to old UTXOs?
  **A** (@louissaberhagen): Believes UTXO storage rent rate should be locked to epoch it was created in for proper planning and property rights protection

- **Q** (@Hobithole): Have you reviewed the smart contracts for SigmaFi.App?
  **A** (@kushti, msg#405673): Yes, reviewed few versions. Not a guarantee of security though.

- **Q** (@cryptoblack): Will ergo blockchain have fast transactions?
  **A** (@qx()): Current layer probably remains at 2 mins to avoid smart contract issues. Sidechains and layer 2 solutions will provide fast tx times in future.

- **Q** (@*E*): If emissions will be zero, will we still need GPU for hash power?
  **A** (Implied yes - mining continues for transaction fees and any tail emission/storage rent rewards)

- **Q** (@Arthur): Is there ETA when Nautilus will support transaction history and CSV export?
  **A** (@CW): Nemo working on it, trying to find implementation that doesn't slow down UX. Workaround is restoring in SafeW for CSV.

## Links Shared

- [https://github.com/kushti/dexy-stable/blob/master/src/test/scala/hodl/HodlCoinSpecification.scala]: First negative test for hodlERG vulnerability
- [https://github.com/pulsarz/hodlcoin-contracts/pull/2/files]: Fixed hodlERG vulnerability commit
- [https://github.com/pulsarz/hodlcoin-contracts/blob/fix-treasury-exploit/hodlERG.es]: Latest hodlERG contract version with fix
- [https://medium.com/@zenGate/rosen-bridge-zengate-global-and-spectrum-launch-accelerator-announcement-73c4702eb3a7]: Rosen Bridge launch accelerator announcement with Spectrum and Zengate
- [https://sigmafi.app/#/]: SigmaFi peer-to-peer bonds dApp
- [https://deadit.github.io/paizo/]: Community tool for overview (context unclear)
- [https://cardano.ideascale.com/c/idea/103037]: Catalyst proposal for Rosen Bridge adoption promotion (850k ADA)
- [https://ergo.watch/emission]: Emission schedule and reduction timeline
- [https://tokenjay.app/app/#sigusd]: Alternative SigUSD redemption interface
- [https://localcoinswap.com/]: P2P exchange suggested for SigmaUSD trading
- [https://transak.com/integrate-transak]: Fiat onramp integration option (4% fee for US)
- [https://ergcube.com]: Community token statistics and tracking tool

## Unresolved Questions

- Whether to implement multiple hodlERG variants with different fee structures (3%, 7.77%, 69.420%)
- Timeline for hodlERG v2 mainnet relaunch beyond "after more audits and tests"
- Exact mechanism and timeline for potential block time improvements (sub-blocks vs microblocks vs sidechains)
- Whether to enable hodlERG tipping in ErgoTipperBot
- How to best address exchange listing challenges for US users long-term
- Whether Ergo should pursue faster block times on base layer or rely entirely on L2 solutions
- Implementation details for potential node fee to incentivize running nodes
- Spectrum Network scaling solution timeline