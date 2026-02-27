# Ergo General Chat — 2024-W41 Summary

## Key Topics Discussed

- **Sigma 6.0 Protocol Release**: kushti completed the final PR for Sigma 6.0 and released protocol client 6.0.0-alpha2 with all planned features. Sub-blocks integration planned via velvet fork followed by soft fork after activation, with security proof still pending.

- **Local Currency & Demurrage**: kushti explored creating Ergo-powered local currencies with demurrage features, noting Japan has 800+ local currencies with varying legal frameworks. Potential to reach "Buffet guy" for adoption was discussed.

- **Transaction Throughput & Optimization**: Discussion on whether Palmyra's NFT generation will strain Ergo's network capacity. Network participants noted sub-blocks can scale throughput while maintaining p2p consensus, and miners can optimize by batching transactions and managing box sizes (up to 96kb per transaction on miner side).

- **VC-Free Ecosystem Positioning**: kushti asserted Ergo is likely the only VC-free blockchain, contrasting with Cardano (which had pre-launch funding). Community discussed fair alternatives to VC games: fair initial mining offerings, emission contracts, auction coins, and Oracle Pools v2 with GORT rewards.

- **Emission Contracts & Fundraising Tools**: kushti proposed on-chain emission contract tools as alternative to VC-backed token sales. Armeanio requested UX specification; kushti outlined frequency, amount, decay function, and distribution rules as core parameters. cannor_q suggested mine-then-claim-after-period mechanics.

- **Rosen Bridge Ethereum Integration**: CW announced multi-step Ethereum bridge deployment: Administration → Infrastructure (Guards + Watchers) → Private Testing → Public UI launch. Includes new Ethereum-based dApps access (e.g., Cyberverse via Rosen + MewFinance).

- **MewFinance Platform Expansion**: HQΣr announced trade history reports added to MewDex, IPFS minting integrated into MewTools (formerly Ergo Essentials), and Mew theme added to ErgExplorer. MEW token integrated into tipperbot ecosystem.

- **Ledger Hardware Wallet Support**: kushti confirmed Ledger Stax and Flex integration reportedly done, pending third-party audit after Ledger's functional testing. Considering prioritization between Keystone and Tangem support.

- **eUTXO Security Vulnerabilities**: CW shared research on DeFi vulnerabilities in eUTXO model. kushti acknowledged awareness of 2 known attack vectors and proposed forum post on popular security issues in eUTXO designs.

- **Paideia DAO Progress**: kushti forwarded update that context variable workaround contracts completed, contract work for issue #232 finished with passing tests, now in final on-chain testing phase.

## Important Decisions or Announcements

- [@kushti, msg#518627]: Finishing last planned PR for Sigma 6.0, then checks and activation details (2024-10-07)

- [@kushti, msg#519263]: Ergo protocol client 6.0.0-alpha2 released with all planned Sigma 6.0.0 features (2024-10-09)

- [@kushti, msg#519303]: Ergo protocol reference client 5.0.23 released (2024-10-10)

- [@kushti, msg#519176-177]: Sub-blocks will be introduced via velvet fork, then locked in via soft fork after 6.0 activation; protocol remains research-based, not hype-driven (2024-10-09)

- [@CW, msg#519759]: Ethereum bridge implementation steps announced: Administration → Infrastructure → Testing → Public UI (2024-10-12)

- [@HQΣr, msg#519397]: Ergo Essentials rebranding to MewTools with IPFS minting integration and EIP standard compliance (2024-10-10)

- [@kushti, msg#519862]: Ledger Stax and Flex integration reportedly done, checking integration into codebase (2024-10-13)

- [@kushti, msg#519896]: Planning forum post on known security issues in eUTXO designs (2024-10-13)

- [@qx(), msg#519812]: Dev updates to be compressed and published solo, featuring dApps when guests unavailable (2024-10-13)

## Technical Q&A Worth Preserving

- **Q** (@Unknown): Isn't it illegal to create your own local currency?  
  **A** (@kushti, msg#518544): Depends on jurisdiction. Japan is very relaxed with 800+ local currencies. Most jurisdictions need legal tricks.

- **Q** (@cannon_q, msg#518555): How do Palmyra's NFT generation and transaction batching work? Are they maximizing front-end optimization per block?  
  **A** (@HQΣr, msg#518557): Tested 15k transactions, then reduced to 1k in node settings. Block capacity depends on transaction count and block size limits.

- **Q** (@HQΣr, msg#518573): Is performance-based vesting via smart contract hard to implement?  
  **A** (@HQΣr, msg#518574): Similar to Blockify implementation; involves sigmalock. Larger ecosystem requires new smart contracts and mechanisms.

- **Q** (@Unknown, msg#519181): How long until sub-blocks enable faster wallet-to-wallet transfers (currently 10-20 min)?  
  **A** (@kushti, msg#519176): Sub-blocks introduced via velvet fork, locked via soft fork post-6.0. Security proof still needed. Timeframe unspecified.

- **Q** (@cannon_q, msg#518851): Does COIN token get 50% of USDC profit from Agora?  
  **A** (@cannon_q): Not disclosed; highlights unfair money printing centralization.

- **Q** (@HQΣr, msg#518922-946): Should IDOs use SigmaUSD instead of ERG to hedge volatility?  
  **A** (@kushti, msg#518945): Nothing prevents raising in gold tokens or SigmaUSD. HQΣr warned arbitrage bots will spam (most based on SigmaUSD); Will be chaotic.

- **Q** (@Marty ErgoPad, msg#519201-202): Why is SigmaUSD not 1:1 with USD?  
  **A** (@kushti, msg#519207): 2.5% slippage per side (~4-5% round trip) is on par with daily volatility. Bank and DEX pricing comparable based on available liquidity.

- **Q** (@Patato, msg#519904): Can quantum computers crack custom 24-word seed phrases with invented non-dictionary words?  
  **A** (@kushti, msg#519905-906): Quantum computers will break secrets derived from seeds efficiently; no need to iterate over seed space when discrete log problem is solved.

- **Q** (@DrTwentyOne, msg#519784): Why does ErgoExplorer take forever to load wallet balances?  
  **A** (@HQΣr, msg#519786; @Pulsarz, msg#519787): Alternative explorers available: ErgExplorer.com and sigmaspace.io perform better. Main explorer search feature is broken.

## Links Shared

- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/1026]: Last PR for Sigma 6.0 (kusht, msg#519154)

- [https://github.com/ergoplatform/ergo/releases/tag/v6.0.0-alpha2]: Ergo protocol client 6.0.0-alpha2 release (kusht, msg#519263)

- [https://github.com/ergoplatform/ergo/releases/tag/v5.0.24]: Ergo protocol reference client 5.0.24 release (Ergo NEWS, msg#519893)

- [https://github.com/ergoplatform/ergo/releases/tag/v5.0.23]: Ergo protocol reference client 5.0.23 release (kushti, msg#519303)

- [https://ergohack.io/register/]: ErgoHack IX registration (multiple, 2024-10-09 & 2024-10-13)

- [https://www.ergoforum.org/t/decentralized-mining-and-non-interactive-share-proofs/4860]: Forum post on decentralized mining (kushti forwarding Cheese Enthusiast, msg#519383)

- [https://www.justice.gov/usao-ma/pr/eighteen-individuals-and-entities-charged-international-operation-targeting-widespread]: U.S. criminal charges against market makers/VCs (kushti, msg#519389)

- [http://alma.di.uoa.gr/node/616]: DeFi vulnerabilities in eUTXO model research paper (CW, msg#519894)

- [https://cardano.ideascale.com/c/idea/130114]: Rosen Bridge proposal for SUI network on Cardano Catalyst Fund 13 (Glasgow, msg#519170)

- [https://x.com/roundtablespace/status/1844357387261521994]: Dan Friedman (Palmyra/Zengate) activity in Argentina (T F, msg#519357)

- [https://docs.ergoplatform.com/roadmap/#ergo-timeline]: Ergo roadmap timeline (Glasgow, msg#519197)

- [https://www.youtube.com/watch?v=9jlA6eizQIc]: Weekly dev update video (Ergo NEWS, msg#519893)

## Unresolved Questions

- **Sub-blocks timeframe**: When exactly will sub-blocks be activated? kushti stated security proof still pending (msg#519176); no ETA provided.

- **Keystone vs. Tangem prioritization**: kushti unsure which hardware wallet to prioritize next after Ledger integration (msg#519868-869).

- **Emission contract UX specification**: Armeanio called it "open question" (msg#519834); kushti outlined parameters but no prototype or timeline given.

- **eUTXO security vulnerability disclosure**: kushti identified 2 known attack vectors but did not detail them; forum post planned but timing unclear (msg#519896-897).

- **Community vision for Ergo 2030**: kushti called for discussion on long-term community vision but no mechanism or timeline established (msg#519154).

- **Palmyra transaction load capacity**: Dan expressed uncertainty on whether Ergo can handle potential surge from Palmyra success (implied from CannonQ msg#518552); unresolved.

- **Explorer search feature**: Issue noted as broken but no GitHub issue filed or assigned (kushti, msg#519866; Pulsarz, msg#519872).

- **SigUSD bank liquidity for token sales**: HQΣr flagged arbitrage bot spam risk if projects raise in SigmaUSD (msg#518946-947); mitigation not discussed.