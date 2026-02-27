# Ergo Developer Chat Summary — 2023-W45

## Key Topics Discussed

- **Box creation height and storage**: Discussion of why precise creation height cannot be stored directly in a box and requires external storage solutions. Height is consensus-checked at current block level but poses technical constraints for smart contract use.

- **Sub-blocks (weak blocks) naming convention**: Proposal to distinguish weak blocks as "blocks" and full blocks as "Blocks" for clarity in protocol terminology.

- **P2P vs. dApp protocol layers**: Exploration of how peer-to-peer protocols might separate from dApp interaction layers, with uncertainty about fast confirmation feasibility for DEXes under such architecture.

- **ErgOne content protocol improvements**: Voting-for-content period moved from first to last day of month; all users now get 1 free point to submit content; October rewards distribution imminent with automated consolidation scripts; rewards halving from 5000 to 2500 $ErgOne starting next month.

- **Spectrum DEX LP redemption bug**: Reports that clicking LP redemption was redirecting users to all pools view instead of enabling redemption/deposit; workaround found with 5.0 v interface.

- **Token minting constraints in Ergo**: Only one unique token per transaction; inputs must be unspent; first input boxId becomes token ID; cannot reuse same box for multiple minting operations.

- **Sigmastate repository architecture**: Debate over whether sigmastate-interpreter should be merged into main Ergo repo; consensus that it should remain separate due to different development process, JavaScript module dependencies, and cyclic dependency risks.

- **Node snapshots telemetry**: Question about determining how many nodes are running with snapshots enabled—appVersion only reflects build version, not feature flags.

- **Auction House fee adjustment**: Fees increased from 2% to 3% to cover dev expenses and increase profit-sharing rewards for AHT stakers; price-per-token display improved and verified token process added.

- **EIP review bottleneck**: Multiple EIPs awaiting merge; kushti flagged need for reviewing and requesting clarification on merge blockers.

## Important Decisions or Announcements

- [@qx(), msg#21192, 2023-11-11]: Auction House fees increasing from 2% to 3%; improved LP display (price per token, verified tokens); Twitter announcement planned before deployment.

- [@Giufa OnliאΣ｜WON'T DM, msg#20997, 2023-11-08]: ErgOne voting period moved to last day of month; free content submission point for all registered users (no free vote points); October rewards distribution next week; rewards halving begins next month (5000 → 2500 $ErgOne).

- [@kushti khushi, msg#21359, 2023-11-16]: Call for EIP review assistance; flagged too many EIPs pending merge.

- [@kushti khushi, msg#21448, 2023-11-17]: Mainnet parameters will be changed over time via voting mechanism.

## Technical Q&A Worth Preserving

- **Q** (@Austen Milbarge // GreasyCEX, msg#20917): Can someone point me to summary of the Sub Blocks (weak blocks) and how they work?
  **A** (@HQΣr, msg#20905-20907): Proposed that weak blocks and full blocks be named differently ("blocks" vs "Blocks"); noted that implementing fast confirmation for DEXes via P2P layer for users vs. dApp protocol layer would be complex; thoughts still exploratory.

- **Q** (@Pulsarz, msg#21125): Can you mint multiple tokens in one transaction?
  **A** (@Pulsarz, msg#21126-21131): Only one unique token per TX with arbitrary amount; cannot create duplicate tokens; minting TX spends input boxes, so same box cannot be reused; box ID of first input becomes token ID.

- **Q** (implied, msg#21128): How does UTXO-based token creation work?
  **A** (@Luivatra, msg#21139, msg#21142): EIP-4 is the metadata standard for token minting and describes these constraints.

- **Q** (@qx(), msg#21426): Is there an easy way to determine how many nodes are running with snapshots enabled?
  **A** (@qx(), msg#21428-21429): appVersion only reflects build version, not feature enablement; no direct telemetry for snapshot status.

- **Q** (implied, msg#21190): Should sigmastate-interpreter be moved into main Ergo repo?
  **A** (@Aberg Satergo dev, msg#21296, msg#21301): No; sigmastate is independently versioned, contains JavaScript module dependencies, and would create cyclic dependencies. Development processes are too different.

- **Q** (@kushti khushi, msg#21359-21365): What is preventing EIP merges? What is needed?
  **A** (unresolved): kushti requested clarification on blockers but no substantive answer provided in this segment.

- **Q** (@Aberg Satergo dev, msg#21244): 404 link in Satergo solo mining pool—needs testing. Why does wallet initialization seem required on node?
  **A** (unresolved): Fix applied; reason for wallet initialization requirement not explained.

- **Q** (@HQΣr, msg#21093-21094): LP redeem option sending users back to all pools instead of redeeming. Is this a UI bug?
  **A** (@Gazza, msg#21122): Requested GitHub Discord ticket for tracking; (@HQΣr, msg#21094) noted 5.0 v interface works as workaround.

## Links Shared

- [http://176.9.15.237:9052/info](http://176.9.15.237:9052/info) and [http://213.239.193.208:9052/info](http://213.239.193.208:9052/info): Node info endpoints shared by @kushti khushi (msg#21017, 2023-11-08).

- [https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/docs/LangSpec.md#avltree](https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/docs/LangSpec.md#avltree): AVL tree specification reference (@Luivatra, msg#21123, 2023-11-10).

- [https://docs.ergoplatform.com/dev/protocol/transactions/](https://docs.ergoplatform.com/dev/protocol/transactions/): Ergo UTXO and transaction protocol documentation (@Pulsarz, msg#21135, 2023-11-10).

- [https://docs.ergoplatform.com/mining/governance/](https://docs.ergoplatform.com/mining/governance/): Ergo mining governance documentation (@CW, msg#21479, 2023-11-18).

## Unresolved Questions

- Why does initializing a wallet on the node appear to be required for Satergo solo mining pool functionality? (@Aberg Satergo dev, msg#21244)

- What specific reviews or revisions are blocking multiple EIP merges? (@kushti khushi, msg#21359-21365, 2023-11-16)

- Can a fast-confirmation protocol layer for dApps be cleanly separated from peer-to-peer user layer? Is it feasible for DEX operations? (@HQΣr, msg#20905-20907, 2023-11-07)

- What is the root cause and timeline for LP redemption redirect bug on Spectrum DEX? (@HQΣr, msg#21093-21094, 2023-11-09)