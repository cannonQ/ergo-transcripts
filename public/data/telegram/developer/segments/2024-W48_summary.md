---
title: "Ergo Developer Chat — 2024-W48"
date_start: "2024-11-25"
date_end: "2024-12-01"
type: telegram_weekly
channel: developer
week: "2024-W48"
source: telegram
message_count: 183
categories: [technical, defi, nft, wallet, governance, community, ecosystem]
key_terms: [6.0 soft-fork, EIP-50, protocol upgrade, Schnorr signatures, Bulletproofs, EIP-5, compiler, contract templates, template compiler, equalBoxExcept, register comparison, compiler sugar, box equality, testnet, node sync, peer banning, network configuration, SigmaUSD, pool, bank]
---
# Ergo Developer Chat Summary — 2024-W48

## Key Topics Discussed

- **Schnorr Signature Verification in ErgoScript**: kushti released forum post on validating Schnorr signatures, with more complex protocol validation becoming efficient after 6.0 release, including potential Bulletproofs support.

- **6.0 Soft-Fork Protocol Update**: Multiple PRs finalized for 6.0 release including script execution tests, EIP-50 documentation, and soft-fork proposal published. Key changes enable more efficient signature verification and complex protocol validation.

- **ERG-UTXO Index/Tree-Based DEX Design**: Luivatra discussed hybrid L2 DEX concept using AVL trees for balance tracking with on-chain settlement, exploring more efficient alternative to transaction chaining for order matching.

- **EIP-5 ErgoScript Template Compiler**: Luivatra published forum post on contract templating with template variables, addressing compiler-level pattern reduction. Discussions on CLI compiler output to EIP-5 JSON format, assigned as GitHub issue.

- **Random Number Generation for NFTs**: c8e4d2a demonstrated 2-step NFT minting process using mint block height + next block header ID as unpredictable seed, noting miners could theoretically manipulate but not economically viable for low-value NFTs.

- **Bulletproofs Range Check Implementation**: kushti assigned bounty for finishing Bulletproofs range check example script, needed to demonstrate zero-knowledge capabilities in 6.0.

- **Nautilus 0-Conf Workflow**: anon_BR confirmed 0-confirmation workflow is stable and merged, releasing as experimental opt-in feature next week, plus Ledger embedded app nearing security audit phase.

- **SigmaUSD Testnet Deployment**: kushti working on bootstrap request generation and testnet deployment, preparing for pool and bank setup.

- **Lithos Protocol Fraud Proofs**: Cheese Enthusiast finished fraud proof contracts for NISPs (invalid PoW, header validation, NISP rules), continuing work on transaction collateral and NISP-specific proofs.

- **Celaut Service Infrastructure**: Jossemii implemented remote Git repository compilation, service gas/firewall controls, and dev fee KyA mentions for Celaut and Bene platforms.

- **Sigmanauts DAO Migration**: Community moved from beta-Paideia to mainnet Paideia, established new treasury multisig (Luivatra, CannonQ, Marc the Shark, Jake the Snake, Grayman, CW, qx()), and setup Bluesky social presence.

## Important Decisions or Announcements

- [@kushti, msg#31434, 2024-11-25]: 6.0 Soft-Fork Proposal published: https://www.ergoforum.org/t/6-0-soft-fork-proposal/5005

- [@arobsn, msg#31491, 2024-11-27]: Nautilus 0-conf workflow merged and releasing next week as experimental opt-in feature; Ledger embedded app passed functional review, proceeding to security audit; Fleet SDK v0.8.0 released with deterministic transaction chaining.

- [@kushti, msg#31507, 2024-11-27]: Created GitHub issue for `equalBoxExcept` compiler-level sugar function to simplify box register comparison in contracts.

- [@kushti, msg#31511, 2024-11-27]: Assigned bounty for finishing Bulletproofs range check example script: https://github.com/ergoplatform/sigmastate-interpreter/issues/1032

- [@kushti, msg#31508, 2024-11-27]: Sigma 5.0.15 release plan finalized: executeFromVar + dependency updates only, finalizing today or tomorrow.

- [@Unknown, msg#31487, 2024-11-27]: Sigmanauts formally moved to mainnet Paideia, established treasury multisig, setup Bluesky presence, DAO proposal active for supERGeometry as new Sigmanauts member.

- [@kushti, msg#31546, 2024-11-28]: Oracle pool testnet deployed with min oracles set to 1, bank ready for update testing.

- [@cheeseenthusiast, msg#31520, 2024-11-27]: Lithos fraud proofs for NISPs completed (PoW, header, rule validation), continuing transaction collateral proofs post-vacation.

## Technical Q&A Worth Preserving

- **Q** (@Luivatra, msg#31441): Is L2 DEX with AVL tree balance tracking more efficient than transaction chaining?
  **A** (@kushti, msg#31436): As you can update tree root on-chain only periodically in optimistic case — yes, potentially more efficient but requires L2 centralization or optimistic rollup design.

- **Q** (@c8e4d2a, msg#31469): Are offset header IDs unpredictable enough for NFT randomness applications?
  **A** (@kushti, msg#31473): Big miner can affect randomness by redoing PoW instead of publishing block (Wesolowski paper), but not a concern here given NFT low value — economically infeasible to attack.

- **Q** (@arobsn, msg#31514): Could interpreter output variable values during execution for debugging (like `debug(SELF.R5[Long].get, "ergPricePerToken")`)?
  **A** (@kushti, msg#31515, msg#31518): Need compiler to create fake nodes, similar to Lisp's `inspect *`. Prover could register callback for debug values, output as JSON. IDEs could log in terminal, Fleet mock-chain could test internal values.

- **Q** (@kushti, msg#31498): Should compiler sugar function `equalBoxExcept` simplify box equality checks excluding specific registers?
  **A** (@luivatra, msg#31500): Yes, better than manual checks because easier to forget a field than to forget to exclude one. @arobsn (msg#31502): Very common use case, worth adding for code clarity and security.

- **Q** (@b_e_e_e_e_e, msg#31525, msg#31526): Would `equalBoxExcept` need exception handling for token differences (e.g., one extra token)?
  **A** (@b_e_e_e_e_e, msg#31526): Propose `equalBoxExceptTokensDiff(b1, b2, Coll((token1, 1)))` meaning b2 has 1 more token1 than b1.

- **Q** (@b_e_e_e_e_e, msg#31533): Can block height be converted to approximate timestamp? Is it every 2 minutes from genesis?
  **A** (@Luivatra, msg#31536): It's average, but shouldn't be taken as exact especially over shorter time periods due to drift.

- **Q** (@c8e4d2a, msg#31547): Could Nautilus add optional password caching on browser start, only requiring confirmation per transaction?
  **A** (@arobsn, msg#31549): Prioritizes security over UX; holding decrypted data long-term is concerning. Will study Metamask/Bitwarden approaches.

- **Q** (@b_e_e_e_e_e, msg#31577): What is the benefit of Fleet SDK v0.8.0 transaction chaining? Can chained transactions fit in same block?
  **A** (@c8e4d2a, msg#31578): Yes, as long as whole chain fits in next block (happens ~99.9% of the time).

- **Q** (@c8e4d2a, msg#31563-31591): How to enforce EIP-0004 NFT metadata for 159 unique NFTs without backend, using random number?
  **A** (@b_e_e_e_e_e, msg#31579-31590): Store metadata in data-input boxes or registers; can derive randomness from block header + NFT token ID. (@cheeseenthusiast, msg#31619): Hash concatenated register bytes, store 1-2 hashes in separate UTXOs, verify against random pick.

- **Q** (@c8e4d2a, msg#31590): How derive random number for NFT minting?
  **A** (@c8e4d2a, msg#31592-31593): 2-step process: mint Hashball NFT, then catch random monster using (HashballTokenId + NextBlockHeaderId) % 159 as index. Next block header unknown at mint time, so unpredictable.

- **Q** (@kushti, msg#31505): What is API rate limit for public node REST requests?
  **A** (@kushti, msg#31529): No explicit limit, maybe firewall has some — just don't DDoS it.

- **Q** (@ldgaetano, msg#31545): Is EIP-5 supported in Fleet SDK?
  **A** (implicit from context): Fleet SDK v0.8.0 released; EIP-5 compiler output support assigned as GitHub issue.

## Links Shared

- https://www.ergoforum.org/t/verifying-schnorr-signatures-in-ergoscript/3407 — kushti's post on validating Schnorr signatures in ErgoScript

- https://www.ergoforum.org/t/6-0-soft-fork-proposal/5005 — EIP-50 6.0 soft-fork proposal and discussion

- https://www.ergoforum.org/t/ergoscript-and-contract-templates-why-how-eip-5/5006 — Luivatra's EIP-5 post on ErgoScript templates and contract patterns

- https://github.com/ergoplatform/ergo/pull/2191 — PR for 5.0.25 release candidate (requested review)

- https://github.com/ergoplatform/sigmastate-interpreter/pull/1029 — 6.0 PR needing recheck

- https://github.com/ergoplatform/sigmastate-interpreter/pull/1021 — 6.0 PR requiring minor update

- https://github.com/ergoplatform/sigmastate-interpreter/pull/997 — 6.0 PR under review

- https://github.com/ergoplatform/ergo/pull/2152 — 6.0 script execution tests

- https://github.com/spectrum-finance/ergo-dex-sdk-js/pull/45 — Spectrum SDK update proposed by Dexy team

- https://github.com/ergoplatform/sigmastate-interpreter/issues/1032 — Bounty assigned for Bulletproofs range check example

- https://github.com/ergoplatform/sigmastate-interpreter/issues/1033 — EIP-5 CLI compiler issue created

- https://github.com/ergoplatform/sigmastate-interpreter/issues/1034 — `equalBoxExcept` sugar function issue

- https://github.com/sigmanauts/docs/tree/main/Sigmanauts%20Dev%20Updates — Weekly Sigmanauts update contributions

- https://github.com/The-Last-Byte-Bar/ergonaut-airdrop — Marc the Shark's multi-token airdrop code (Sigmanauts pool bonus distribution)

- https://www.3rgo.xyz/ — 3D UTXO model visualization tool (ErgoHack IX project)

- https://github.com/SavonarolaLabs/ergofi — c8e4d2a's opinionated stablecoin UI (SigmaUSD integration in progress)

- https://github.com/ergopad/pratir-backend — Lui's NFT breeding backend reference (for historical context on non-backend approach)

- https://bsky.app/profile/sigmanauts.com — Sigmanauts Bluesky account

- https://bsky.app/profile/ergoplatform.org — Ergo Platform Bluesky account

- https://bsky.app/profile/ergotipperbot.bsky.social — ErgoTipperBot ported to Bluesky

- https://app.paideia.im/sigmanauts/proposal/supergeometry-for-sigmanaut-86ce299e-b9dc-4c80-8eac-35c79e5ae617 — Active DAO proposal to make supERGeometry a Sigmanauts member

- https://fund.mewfinance.com/contribute — MewFinance fund for rsErg use case campaign

- https://discord.com/channels/668903786361651200/669989266478202917/1298638744366350426 — Fleet SDK transaction chaining usage example

## Unresolved Questions

- **equalBoxExcept implementation scope**: Discussions on whether to include token difference variants (msg#31525-31526) and compiler feasibility still ongoing.

- **Debug utility for ErgoScript variables**: Approach discussed (fake nodes, callback registration, JSON output) but implementation timeline and integration with escript.online not yet determined.

- **Testnet peer stability**: Node connectivity issues persisted through week (banned peers, port misconfigurations, explorer lagging since Nov 20). Issues resolved incrementally but underlying peer management robustness unclear.

- **Bulletproofs range check completion**: Bounty assigned (msg#31511) but no commitments yet on who will complete the example script or timeline.

- **L2 sidechain constructions publication**: kushti mentioned forum post coming soon but no firm date. BIP 301 comparison and merge-mine security analysis still pending publication.

- **Nautilus password caching UX**: arobsn prioritizing security research over implementation; no timeline for feature.

- **SpeedUp 6.0 performance improvements**: Block time reduction discussion flagged as important but marked for post-Ergoversary community discussion. Whether to pursue microblocks, sidechains, or other solutions still undecided.