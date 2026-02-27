# Ergo General Chat — 2025-W27 Summary

## Key Topics Discussed

- **Ergoversary 2025 Content Series**: Week-long celebration of Ergo's 6th anniversary (July 1, 2019) featuring video presentations from ecosystem projects including Lithos Protocol, Palmyra, Bene, SigmaFi, Gluon, BlitzTCG, Rosen Bridge, Proof of Merch, and others.

- **Storage Rent Dynamics & Fee Wars**: Extended discussion about competitive storage rent collection behavior among bots. Storage_Hunter raised concerns about Replace-by-Fee (RBF) escalation destroying rent value and proposed a capped RBF step-size rule (≤0.0001 ERG per replacement). Counter-arguments noted mining pools (especially Herominers) can now claim rent directly, making individual bot competition moot once pools implement it.

- **Ergo 6.0 Soft Fork Voting**: Voting initiated July 6, 2025 for protocol upgrade including BigInt support, improved Merkle tree handling, faster proof verification, cross-input inspection, new developer APIs, and governance parameterization. Voting threshold is 90%; expected to activate within one epoch.

- **Sub-blocks Implementation Progress**: kushti confirmed recent fixes and optimizations to sub-blocks; testnet available with reduced block times (estimated 2-minute blocks with sub-blocks resolving in seconds). Emphasized this requires community participation in DevNet testing.

- **Double Merge-Mined Sidechains**: kushti discussed BitVM2/3-powered trustless peg designs combining double merge-mined Bitcoin + Ergo sidechain construction as competitive response to layer 2 and sidechain narratives.

- **GPU Mining & Nicehash KYC**: Discussion about hashrate availability on Nicehash dropping significantly (only ~0.26 TH available) due to mandatory KYC implementation deterring miners. kushti compared current conditions to 2013–2014 CPU mining era, noting 100x more capital available now but concentration risks remain lower.

- **Storage Rent vs. Node Operator Incentives**: Prolonged debate on whether non-mining node operators should be compensated. Consensus emerged that storage rent is primarily a UTXO space optimization mechanism benefiting miners; non-mining nodes have other incentive models (batching, research, supporting projects like Rosen watchers). kushti stressed need for constructive proposals addressing sybil-resistance without PoW in permissionless settings.

- **AI Development & Rust Tooling**: Community discussion on Claude effectiveness for Rust development, with mixed feedback. Patato shared success building 22K-line SCypher project with Claude 3/4 under strict architectural guidance. Concerns raised about AI hallucinations, edge-case flaws, and false security sense; emphasis on TDD approach (write tests first, then code to pass tests).

- **ErgoHack X Project Voting**: Community vote for favorite ErgoHack X project underway, with Cortex GPU Miner receiving advocacy as tool to lower mining barriers via AI-driven tuning. Concerns from riceandbeans about AI hype-washing; Glasgow countered with examples of real utility (graphic design, documentation, VEO video generation).

- **Cross-Chain Integration & MEXC Withdrawals**: Withdrawal issues on MEXC noted; Glasgow indicated resolution expected in 2–3 weeks. Discussion of bridged rsERG availability on Cardano DEXes (Uniswap, PancakeSwap) and T1 exchanges now preferring L2 tokens on existing chains with 10K+ holders.

## Important Decisions or Announcements

- [@kushti, msg#566318, 2025-07-06]: Voting for 6.0.0 has been started.

- [@kushti, msg#566314, 2025-07-06]: Emission rate reduction confirmed — network now at 12 ERG/block (down from previous 15 ERG/block).

- [@Aco Šmrkas, msg#565827, 2025-07-01]: Proof of Merch launched live; merchandise (shirts, mugs, socks) purchasable with SigmaUSD at 20% introductory discount. (https://proofofmerch.store)

- [@kushti, msg#565753, 2025-06-30]: Sub-blocks DevNet testing open; config and seed node details provided for community participation.

- [@Ergo NEWS $ERG, msg#565767, 2025-07-01]: Ergoversary opening video live (Joseph Armeanio & kushti discussion on crypto state and Ergo's future).

- [@Pgr456, msg#566326, 2025-07-06]: Offering to redeploy voting tracker (votes.sigmaspace.io) for 6.0 voting visibility.

- [@Richi [MANA], msg#566361, 2025-07-06]: 6.0 fork expected to activate before next epoch completion (90% voting threshold met early).

## Technical Q&A Worth Preserving

- **Q** (@LouisLibre): Do sub-block transactions risk non-confirmation, or just longer wait times?
  **A** (@kushti, msg#566177): Transactions depending on block data (e.g., Ergo emission contract using miner pubkey) must go into ordering blocks only. Regular transactions included in input block + referenced by ordering block chain are always included; no risk of dropping.

- **Q** (@LouisLibre): Will regular p2pk transactions in sub-blocks always reach ordering blocks?
  **A** (@kushti, msg#566201-566202): Once a transaction is included in an input block and an ordering block references that input block, the transaction is always included. Input blocks function identically to regular blocks in this respect.

- **Q** (@Matt): Doesn't Ergo's GPU mining create 51% attack vulnerability? Why don't exchanges cite this?
  **A** (@Glasgow, msg#566170): Never formally raised as concern. No rational incentive at current scale; cost/logistics/liquidity/defensive responses eliminate economic motivation. If truly cheap, attackers would already exploit it. (@Matt, msg#566220-566224): Double-spend is theoretical prize, but defensive infrastructure and reputational damage strip practical incentive.

- **Q** (@Matt): How does security budget sustain with GPU mining vs. CPU/ASIC alternatives?
  **A** (@kushti, msg#566174): GPU mining has 100x more capital available than 2013–2014 CPU era; mining incentive structures much stronger now. (@Armeanio, msg#566271-566272): PoW most profitable when redirecting excess resource capacity; many CPU farms reuse old hardware on second life.

- **Q** (@Ergochampion): Can someone start a new sidechain and miners merge-mine both Ergo and that chain simultaneously?
  **A** (Unresolved — implied yes based on double merge-mined sidechain discussion, but no explicit confirmation in transcript.)

- **Q** (@Richi [MANA]): Were voting requirements same for 6.0 as 2022 fork voting?
  **A** (@Richi, msg#566361): Yes, 90% requirement; shorter epoch this time but does not affect threshold activation.

- **Q** (@Patato): How effective is Claude for Rust development?
  **A** (@Patato, msg#566034): Extremely effective if you guide it properly — define clear goals, constraints, design decisions upfront, create detailed implementation plans, break into reversible stages. Achieved 22K-line professional-grade project. (@riceandbeans, msg#566030-566031): Works but hallucinates frequently; prefer hand-writing code.

- **Q** (@kushti): How is Claude for Rust dev specifically?
  **A** (@riceandbeans, msg#566030): Not terrible; use it almost daily but greatly prefer hand-writing. Hallucinates a lot still.

- **Q** (@eddy): Why is ergo.watch emission rate tracker stuck at 3.1 days?
  **A** (@Richi [MANA], msg#566364): Service node needs restart.

## Links Shared

- [https://ergonaut.space/id/manifesto-malaysian]: Ergo Manifesto in Malaysian language (translated by Yulius Kristianto).

- [https://coinmarketleague.com/coin/ergo]: Voting link for Ergo on CoinMarketLeague.

- [https://www.ergoforum.org/t/6-0-soft-fork-proposal/5005]: 6.0 soft-fork proposal forum discussion with detailed rationale.

- [https://gist.github.com/kushti/8f0753c454cab46244dbaee3b4d842c8]: Sub-blocks DevNet configuration.

- [https://github.com/ergoplatform/ergo/pull/2055]: Sub-blocks implementation PR (latest commit for testing).

- [http://213.239.193.208:9058/info]: Sub-blocks DevNet seed node API.

- [https://proofofmerch.store]: Proof of Merch storefront (SigmaUSD-payable merchandise).

- [https://proofofmerch.store/shops/mew-finance]: MewFinance shop on Proof of Merch.

- [https://gluon.gold]: New Gluon UI (in progress).

- [https://www.youtube.com/watch?v=m6CEAdaYRME]: Ergoversary Opening — Joseph & kushti.

- [https://youtube.com/live/Ku3fHTUagEs]: Ergoversary Special - Weekly Update & AMA - July 1st (livestream link).

- [https://x.com/chepurnoy/status/1939816631867159015]: kushti's X post on double merge-mined Bitcoin + Ergo sidechain via BitVM2/3.

- [https://votes.sigmaspace.io/]: 2022 voting tracker (being redeployed for 6.0 voting by Pgr456).

- [https://ergo.watch/dashboards/emission]: Ergo.watch emission rate dashboard.

- [https://www.youtube.com/watch?v=PHY7JnLrK5o]: kushti presentation on Ergo storage optimization features.

- [https://www.youtube.com/watch?v=s05ypkSC7gk]: kushti storage optimization presentation (continued).

- [https://www.youtube.com/watch?v=OUjxar1WCmo]: kushti storage optimization presentation (continued).

- [https://arxiv.org/pdf/1603.07926]: "Rollerchains" research paper (kushti, msg#566214) on incentivizing miners to store blockchain suffix.

- [https://t.me/ErgoYield]: Ergo Yield Telegram channel (yield strategies discussion).

- [https://www.ergoforum.org/t/a-framework-for-ai-sovereignty-on-ergo-the-aletheia-protocol-whitepaper/5183]: Aletheia Protocol whitepaper (AI sovereignty on Ergo).

## Unresolved Questions

- **Storage Rent & Fee Wars**: If mining pools fully implement on-chain rent collection, will individual bot competition completely cease? What coordination mechanism prevents pools from undercutting each other once saturated?

- **Node Operator Compensation**: No consensus reached on whether/how non-mining node operators should be rewarded. Design space remains open — light nodes vs. full archival nodes, stateless validation, suffix-only storage, or alternative incentive models (batching, API micropayments).

- **Sidechain Merge-Mining**: Mechanics of double merge-mined Ergo sidechains remain conceptual; actual construction details and miner incentive structure not fully detailed in chat.

- **MEXC Withdrawal Fix Timeline**: Specifically what technical issue caused withdrawal failures and exact ETA unclear; Glasgow estimated 2–3 weeks as of July 6.

- **ErgoHack X Community Vote**: Voting format unclear — can participants vote for multiple projects or single choice? Rankings vs. binary voting not explicitly stated.

- **6.0 Voting Activation**: Will voting complete and fork activate before July 7? Richi expected yes, but no explicit confirmation posted after activation.