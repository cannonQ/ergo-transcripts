---
title: "Ergo Developer Chat — 2024-W49"
date_start: "2024-12-02"
date_end: "2024-12-08"
type: telegram_weekly
channel: developer
week: "2024-W49"
source: telegram
message_count: 224
categories: [technical, defi, nft, wallet, ecosystem, mining, community]
key_terms: [AVL trees, metadata hashing, context variables, sigmastate-js, Fleet SDK, SigmaUSD, bank v2, contract deployment, testnet, oracle pool, 6.0 release, sigmastate-interpreter, PR reviews, RC2 release, protocol upgrade, Fleet, mainnet/testnet, compiler flag, network parameter, PK() function]
---
# Ergo Developer Chat Summary — 2024-W49

## Key Topics Discussed

- **AVL+ Tree Support in Fleet SDK**: Extended discussion on implementing AVL+ tree operations in JavaScript/Fleet, with developers exploring how to construct trees offchain, create lookup proofs, and pass them as context variables to ErgoScript contracts. Key challenge: no existing AVL utilities in ergo-lib-wasm; solution involves sigmastate-js or building dedicated Fleet packages.

- **6.0 Protocol Soft-Fork Updates**: kushti announced immediate focus on AVL tree semantics fixes (insert/update operations) and new `insertOrUpdate` operation via PR #1038. Minor remaining work includes tree.insert error handling, three final PRs for 6.0 activation, and testing serialization versioning across the codebase.

- **SigmaUSD Bank v2 Deployment**: Bank contract v2 deployed to testnet with 0.5% per-oracle-update mint/redeem limits (~16k SigmaUSD per epoch at current collateralization). Community debate emerged over adequacy of this limit for users; proposal to pair v2 with dynamic fee mechanism tied to Oracle Pool v2 upgrade for reward distribution to operators.

- **Fleet Compiler Network Flag**: Network-aware compilation support added (PR #156) enabling testnet/mainnet address compilation in ErgoScript. PK() function uses network-specific encoders; toggle now functional for proper context handling.

- **NIPoPoWs Node Configuration**: Configuration examples provided for light nodes running NIPoPoWs bootstrap with UTXO set, including digest mode alternatives and dual bootstrap flags (nipopowBootstrap, utxoBootstrap).

- **Vanity Address Generation Performance**: Optimizations discussed reaching 10k+ addresses/second on consumer hardware (7800X3D); discussion of batch normalization and mnemonic-to-key bottlenecks; potential for 500k/sec with raw private key support (not yet widely wallet-supported).

- **Mempool Behavior & Spam Protection**: Clarified that rolled-back transactions resubmit to mempool with same transaction ID (hash of bytes); fee market dynamics and spam filtering via minimum propagation fees; fee estimation API exists but underutilized by applications.

- **Order Book DEXes vs AMM**: qx() advocated for Trade House's order book model over AMM liquidity pools, highlighting benefits: total transparency of depth/liquidity levels, full control over slippage, partial fill support, and peer-to-peer trading without intermediary fees.

---

## Important Decisions or Announcements

- [@kushti, msg#31682, 2024-12-03]: Weekly Ergo Developers chat scheduled Wed Dec 4, 1PM UTC to discuss 6.0 soft-fork, financial contracts feedback, and dApp development questions.

- [@kushti, msg#31694, 2024-12-03]: Decided to implement issue #908 (AVL tree.insert error handling) and add insertOrUpdate operation; both completed in PR #1038; flagged Plasma lib requires updates post-6.0 activation.

- [@kushti, msg#31707, 2024-12-04]: kushti confirmed AVL+ tree classes translated to sigmastate-js; Fleet support possible but JavaScript expertise needed.

- [@kushti, msg#31777, 2024-12-05]: 6.0.0-RC2 with insertOrUpdate and minor fixes releasing in few days, followed by public testnet activation.

- [@kushti, msg#31778, 2024-12-05]: SigmaUSD Bank v2 renamed to v3; deployment depends on UI support (TokenJay target: December).

- [@arobsn, msg#31775, 2024-12-05]: Network compiler flag for testnet/mainnet added to Fleet; snapshot build available for testing.

- [@kushti, msg#31805, 2024-12-06]: Bounties assigned to 6.0 PRs in sigma-rust; working on ErgoTree serializer versioning.

- [@Armeanio, msg#31744, 2024-12-04]: Shared Snapshot governance proposal link (Harmony Bot DAO).

- [@Sigmanauts Update, msg#31733, 2024-12-04]: New Sig-Can Yulius Kristianto welcomed; Paideia proposals passed for supERGeometry tokens and Sigmanauts Mining DAO donations; Wombo's rsERG liquidity bootstrap for Danzo (Cardano) casino succeeded (486.9 ERG raised).

- [@HQΣr, msg#31739–31740, 2024-12-04]: MewFinance launched Mew Fund (crowdfunding/LP bootstrapping), Cardano Tools, ErgoSanta refactor; multiple cross-chain campaigns active (rsDIS, rsSUGAR, etc.); Mew Mart added GLUON, rsDIS; MewDex token list updated.

- [@Marc the Shark, msg#31737, 2024-12-04]: Sigmanauts Mining Pool: Redis caching added, 12-hour bonus tracking; EF proposal approved; two back-to-back blocks mined. Hashmons: Mining Rights Protocol validation underway, tokens airdropped, emission contract ready for deployment.

- [@Luivatra, msg#31731, 2024-12-04]: Crux: Telegram bot for ERG prices launched; generic limit order contracts drafted (min price, optional executor, multi-venue matching engine via Spectrum/SigmaUSD/Trade House); DCA/grid bot expansion planned.

- [@jossemii, msg#31743, 2024-12-04]: Bene Fundraising Platform: UI and contract improvements; dev fee contract added.

- [@arobsn, msg#31728, 2024-12-04]: sigmastate-js only used by compiler package; planning dedicated Fleet package for AVL+ wrapper (or plasma-like library) ASAP.

- [@kushti, msg#31759, 2024-12-04]: SigmaUSD Bank v2 deployed to testnet; shared bank NFT, SigUSD, SigRSV, oracle pool NFT IDs; R6/R7 register configuration clarified; contract link provided.

- [@kushti, msg#31854, 2024-12-07]: Proposal to pair Bank v2 with Oracle Pool v2 upgrade; dynamic fee mechanism to replace static mint limits and reward operators.

---

## Technical Q&A Worth Preserving

- **Q** (@c8e4d2a, msg#31648): How are AVL trees implemented in ErgoScript with 159 static elements?
  **A** (@cheeseenthusiast, msg#31649): Tutorial provided at GetBlok Plasma documentation; some offchain differences when using Fleet compiler; Paideia contracts useful reference.

- **Q** (@c8e4d2a, msg#31657): Is it viable to store AVL tree hash in contract, provide tree in context var, and provide lookup proof?
  **A** (@cheeseenthusiast, msg#31658): Yes; register type AVLTree (32-byte digest) + lookup proofs in context vars is sufficient; tree itself not needed in context.

- **Q** (@c8e4d2a, msg#31695): What happens to NFTs/tokens in a box collected for storage rent if insufficient ERG remains?
  **A** (@Pgr456, msg#31696): Assets go to the party claiming the box. (@Pgr456, msg#31703): Claimer can choose to burn or keep; not automatic during collection step.

- **Q** (@c8e4d2a, msg#31708): How to work with AVL trees in JavaScript; ergo-lib-wasm-browser lacks AVL utilities?
  **A** (@kushti, msg#31711): Examples in offchain Bank (layer 2), ChainCash; plasma staking contract referenced; drafting possible.

- **Q** (@c8e4d2a, msg#31713): How to construct AVL tree in JavaScript and send as context variable?
  **A** (@kushti, msg#31720): AVL+ classes translated to sigmastate-js; should be possible via Fleet but JS expertise limited in core team.

- **Q** (@jossemii, msg#31754): Why does ErgoScript compilation fail with testnet addresses on mainnet context?
  **A** (@kushti, msg#31756): PK() function uses network-specific address encoder; testnet address in mainnet context causes encoder failure.

- **Q** (@c8e4d2a, msg#31755): Does Fleet compiler have mainnet/testnet option?
  **A** (@arobsn, msg#31775): Network flag added in PR #156; usage: `{ network: "testnet" }` option in compile function.

- **Q** (@iospore, msg#31821): What is minimum nanoERG for a box?
  **A** (@kushti, msg#31825): 360 nanoErg per byte; change boxes storing tokens require adequate ERG coverage.

- **Q** (@mgpai, msg#31819): Are transactions in full block queries returned in order?
  **A** (@Luivatra, msg#31824): Yes in experience, but not explicitly guaranteed. (@kushti, msg#31827): Confirmed yes.

- **Q** (@mgpai, msg#31829): Transaction ID sometimes differs between AppKit hash and node mempool; why?
  **A** (@kushti, msg#31831): Transaction bytes changed somehow; requires investigation of specific case.

- **Q** (@mgpai, msg#31812): Are rolled-back transactions resubmitted with different TXIDs?
  **A** (@kushti, msg#31826): No; transaction ID is hash of bytes, so same bytes = same ID.

- **Q** (@mgpai, msg#31789): On chain rollback, do transactions go back to mempool?
  **A** (@kushti, msg#31807): Yes, rolled-back transactions resubmitted to mempool.

- **Q** (@ldgaetano, msg#31865): What does 100K confirmations on explorer mean exactly?
  **A** (@mgpai, msg#31866): Confirmation count = number of blocks that have passed since block containing the tx.

- **Q** (@HQΣr, msg#31687): Who provides config file for NIPoPoWs node?
  **A** (@Unknown, msg#31688; @Michael, msg#31691; @kushti, msg#31693): Config examples provided for digest mode (stateless) and UTXO mode (stateful) with nipopowBootstrap flags.

- **Q** (@cheeseenthusiast, msg#31771): Any ErgoScript emission contracts (ERG or tokens)?
  **A** (@kushti, msg#31779): ERG emission defined via ErgoTree. (@cheeseenthusiast, msg#31780): Posted original contract conversion; multiple token emission contracts (market-based, fixed) from GetBlok era available.

- **Q** (@b_e_e_e_e_e, msg#31769): Does Fleet have encryption/decryption using public/private keys?
  **A** (@arobsn, msg#31785): No, out of lib scope; recommends noble-ciphers library. (@arobsn, msg#31788): Example repo linked; Fleet key generation compatible.

- **Q** (@dusek_, msg#31723): For insertOrUpdate, must both isInsertAllowed & isUpdateAllowed flags be set?
  **A** (@kushti, msg#31724): Yes; operation checks both flags and fails if either not set.

---

## Links Shared

- [https://docs.ergoplatform.com/node/install/manual/](https://docs.ergoplatform.com/node/install/manual/): Node installation guide (recommended first step for developers).

- [https://github.com/GetBlok-io/GetBlok-Plasma/blob/master/documents/AVL_Trees.MD](https://github.com/GetBlok-io/GetBlok-Plasma/blob/master/documents/AVL_Trees.MD): AVL+ tree tutorial by Cheese Enthusiast.

- [https://docs.ergoplatform.com/dev/lib/plasma/](https://docs.ergoplatform.com/dev/lib/plasma/): Plasma library documentation for offchain AVL tree operations.

- [https://www.ergoforum.org/t/offchain-bank-operating-at-layer-2/3367](https://www.ergoforum.org/t/offchain-bank-operating-at-layer-2/3367): Offchain Bank example (layer 2).

- [https://github.com/paideiadao/paideia-contracts/blob/main/paideia_contracts/contracts/plasma_staking/ergoscript/latest/plasmaStaking.es](https://github.com/paideiadao/paideia_contracts/blob/main/paideia_contracts/contracts/plasma_staking/ergoscript/latest/plasmaStaking.es): Plasma staking contract reference.

- [https://claude.ai/new](https://claude.ai/new): Claude AI recommended for learning Ergo concepts and ErgoScript help.

- [https://www.chatbase.co/chatbot-iframe/INAIfQ2ts4E6ykf4rseVu](https://www.chatbase.co/chatbot-iframe/INAIfQ2ts4E6ykf4rseVu): Chatbase bot trained on ErgoScript.

- [https://github.com/ergoplatform/sigmastate-interpreter/issues/908](https://github.com/ergoplatform/sigmastate-interpreter/issues/908): AVL tree.insert semantics issue (resolved in PR #1038).

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1038](https://github.com/ergoplatform/sigmastate-interpreter/pull/1038): AVL tree.insert error handling & insertOrUpdate operation PR.

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1021](https://github.com/ergoplatform/sigmastate-interpreter/pull/1021): Ready for review (6.0 blocker).

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1029](https://github.com/ergoplatform/sigmastate-interpreter/pull/1029): Final review needed for 6.0.

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1036](https://github.com/ergoplatform/sigmastate-interpreter/pull/1036): Review requested by kushti.

- [https://github.com/ergoplatform/ergo/pull/2193](https://github.com/ergoplatform/ergo/pull/2193): Node PR awaiting review (blocks development).

- [https://github.com/ergoplatform/ergo/pull/2191](https://github.com/ergoplatform/ergo/pull/2191): Node PR awaiting review.

- [https://github.com/ergoplatform/ergo/pull/2179](https://github.com/ergoplatform/ergo/pull/2179): README update PR.

- [https://github.com/ergoplatform/ergo/pull/2115](https://github.com/ergoplatform/ergo/pull/2115): RocksDB 5.1.0 node PR.

- [https://github.com/fleet-sdk/fleet/pull/156](https://github.com/fleet-sdk/fleet/pull/156): Network compiler flag for testnet/mainnet; snapshot build: `npm i https://pkg.pr.new/@fleet-sdk/compiler@156`.

- [https://github.com/kushti/sigmausd/blob/master/contracts/v2/bank.es](https://github.com/kushti/sigmausd/blob/master/contracts/v2/bank.es): SigmaUSD Bank v2 contract (deployed to testnet).

- [https://testnet.ergoplatform.com/en/transactions/c3265262d6f9c4aece0390dc23530e0eb3036c37f98680a4a14ef2c583140054](https://testnet.ergoplatform.com/en/transactions/c3265262d6f9c4aece0390dc23530e0eb3036c37f98680a4a14ef2c583140054): Bank v2 deployment transaction on testnet.

- [https://docs.ergoplatform.com/uses/sid