# Ergo Developer Chat — Week 2025-W41 Summary

## Key Topics Discussed

- **6.0 Mainnet Activation**: 6.0 protocol soft-fork activated successfully on mainnet; 6.0 and 5.0 nodes are in consensus, mining network operating normally [@kushti khushi, msg#36185, 2025-10-06]

- **Sub-blocks Development**: Whitepaper in progress, implementation work ongoing in node wallet with simple test cases passing; call for help to build JAR from custom git branch for devnet testing [@kushti khushi, msg#36223, msg#36240, 2025-10-08]

- **SigmaSDK Examples**: Four new ErgoScript contract examples added: whitelisted transfers, stealth address contract, wallet with daily withdrawal limit, perpetual token; trustless hashrate oracle PR needs polishing [@kushti khushi, msg#36224, 2025-10-08]

- **ChainCash/Basis Tracker**: Prototype testing underway, some actions working well, some not; browser wallet implementation starting in JavaScript [@kushti khushi, msg#36232, 2025-10-08]

- **Bitcoin Checkpoints & Cross-Chain Consensus**: Exploring velvet forkable checkpoints on other blockchains (Bitcoin priority) to strengthen consensus without requiring majority miner support [@kushti khushi, msg#36238, 2025-10-08]

- **Privacy Features Roadmap**: Discussion flagged on next steps to make zero-knowledge features more accessible and live on Ergo [@DiscordBridge (Jayedii), msg#36262, 2025-10-09]

- **Gluon Gold Blockers**: Two open issues preventing progress; timing is critical as gold is at all-time high while crypto markets crash [@DiscordBridge (Bruno), msg#36276, msg#36277, 2025-10-11]

- **ErgoScript Context Variables vs. Registers**: Clarification on distinction: registers fixed at box creation, context extension variables provided during spending [@kushti khushi, msg#36283, 2025-10-11]

## Important Decisions or Announcements

- [@kushti khushi, msg#36185, 2025-10-06]: **6.0 Protocol Activated** — Mainnet activation complete; reference: https://www.ergoforum.org/t/6-0-soft-fork-proposal/5005

- [@kushti khushi, msg#36195, 2025-10-06]: **1st Stability Workshop CFP** — Hybrid event, Jaipur/remote, Dec 15; paper deadline Oct 19; https://workshop.stability.nexus

- [@kushti khushi, msg#36207, 2025-10-07]: **Sub-blocks Devnet Setup** — Instructions to follow; config updates needed

- [@kushti khushi, msg#36256, 2025-10-09]: **Chat Moderation Statement** — Explicitly asked for cessation of off-topic/incorrect posts regarding blockchain finality claims

## Technical Q&A Worth Preserving

- **Q** (@Dũng Nguyễn, msg#36190): Where are coinbase transactions in an Ergo block?
  **A** (@kushti khushi, msg#36210): Ergo has flat design; no coinbase transactions—instead genesis state UTXO protected by emission contract. Ordinary transaction charges from it (usually first in block but not required). Reference: https://explorer.ergoplatform.com/en/blocks/c6b0bf24c53cb1034d7e2490dc42441a4fb41a8255dd75e8bcaf1d51768e3891/transactions

- **Q** (@Dũng Nguyễn, msg#36212): Why does block show +21 ERG when reward reduced to 9 ERG?
  **A** (@HQΣr, msg#36213–36215): Emission reduction schedule in effect. References: https://ergo.watch/dashboards/emission and https://docs.ergoplatform.com/mining/standards/eip27/#eip27-and-the-adjustment-of-ergos-emission-schedule

- **Q** (@Josemi, msg#36281): What is the difference between box context variables (getVar) and box registers?
  **A** (@kushti khushi, msg#36283): Register values are fixed at box creation time; context extension variables are provided during box spending. Reference: https://docs.ergoplatform.com/dev/scs/global-functions/#getvar

- **Q** (@Amh, msg#36230): How can projects be funded to incentivize builders on Ergo?
  **A** (@Josemi, msg#36231): Multiple options: ErgoRaffle (smart contract with percentage randomness), Mew Fund (centralized with many options), Stability Nexus' Beene (smart contract p2p, currently ERG-to-custom-token only)

## Links Shared

- https://www.ergoforum.org/t/6-0-soft-fork-proposal/5005 — 6.0 soft-fork proposal
- https://workshop.stability.nexus — 1st Stability Workshop website
- https://easychair.org/cfp/STABILITY-2025 — Full CFP submission
- https://ergo.watch/dashboards/emission — Emission reduction dashboard
- https://docs.ergoplatform.com/mining/standards/eip27/#eip27-and-the-adjustment-of-ergos-emission-schedule — EIP-27 emission adjustment standard
- https://explorer.ergoplatform.com/en/blocks/c6b0bf24c53cb1034d7e2490dc42441a4fb41a8255dd75e8bcaf1d51768e3891/transactions — Example block transactions
- https://github.com/ergoplatform/sigmastate-interpreter/pull/1080 — Whitelisted transfers example
- https://github.com/ergoplatform/sigmastate-interpreter/pull/1084 — Stealth address contract example
- https://github.com/ergoplatform/sigmastate-interpreter/pull/1083 — Wallet with daily withdrawal limit example
- https://github.com/ergoplatform/sigmastate-interpreter/pull/1082 — Perpetual token example
- https://github.com/ergoplatform/sigmastate-interpreter/pull/1085 — Trustless hashrate oracle (needs polishing)
- https://github.com/GitCircles/GitCircles-Github/issues/11 — GitCircles deployment issue
- https://github.com/GitCircles/GitCircles-Github/issues/7 — GitCircles implementation issue
- https://x.com/chepurnoy/status/1975692152463364598 — kushti's X post on 6.0 activation
- https://x.com/erg_armeanio/status/1975948581405364323 — Armeanio's X post (cross-chain discussion context)
- https://docs.ergoplatform.com/dev/scs/global-functions/#getvar — ErgoScript context variable documentation
- https://www.youtube.com/watch?v=FlSTE7PVDik — Video (context unclear from chat)
- https://github.com/rustinmyeye/ergo-node-interface — Mobile node interface panel
- https://docs.ergoplatform.com/learn/ — Ergo documentation learning portal

## Unresolved Questions

- **Sub-blocks Devnet Timeline**: @kushti indicated config updates needed before providing instructions; status unclear as of 2025-10-08 [@kushti khushi, msg#36207, msg#36240]

- **Privacy Features Accessibility**: Jayedii asks what are the "next steps to bring these features more accessible / live" but no concrete response given [@DiscordBridge (Jayedii), msg#36262, 2025-10-09]

- **Gluon Gold Issue 51**: After PR to fix issues 48 & 50, issue 51 remains unresolved; unclear if truly fixed or requires further investigation [@DiscordBridge (Michael, Bruno, arkadia), msg#36286–36291, 2025-10-12]

- **Polygon Rio Claims Debate**: kushti and community disagreed with Polygon's claim of "no reorgs" and "near-instant finality"; kushti stated "Nakamoto consensus could be optimal solution" and "no better solutions are known" but did not elaborate on formal proof status [@kushti khushi, msg#36257–36259, 2025-10-09]

- **Bene Token Support**: @kushti asked how Beene is doing; @Josemi reported functionality in place and more testing needed, but full status unclear [@kushti khushi, msg#36239; @Josemi, msg#36242, 2025-10-08]