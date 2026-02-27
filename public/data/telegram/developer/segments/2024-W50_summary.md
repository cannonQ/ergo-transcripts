# Ergo Developer Chat Summary — 2024-W50

## Key Topics Discussed

- **Tree-based versioning for 6.0 protocol update**: kushti implemented versioning based on ErgoTree version rather than just script version, because semantics of operations change in 6.0 (e.g., lazy evaluation in `opt.getOrElse(default)`). New operations and unsigned big int type will be v3-only.

- **NFT authenticity verification pattern**: Discussion of how to verify an NFT was minted by a specific contract without relying on historical blockchain data. The pattern involves using a "recipe contract" or "certificate box" — if an NFT token ID matches a box ID from a contract execution, authenticity is guaranteed by Ergo's token semantics.

- **Sigma Rust deterministic nonces**: PRs #781 and #782 approved for merging after kushti's review, implementing deterministic nonce handling in signature protocols.

- **Sub-blocks implementation**: kushti called for contributors willing to work on sub-blocks implementation, offering bounties for tests and implementations.

- **Lithos Protocol progress**: Optimistic evaluation contracts for NIPoPoWs in progress; designing optimistic rollup for share proofs and miner payments. 3-month activation timeline acceptable — voting would start now, activation in March.

- **Sigmanauts treasury and governance**: Second multi-sig formed; DAO formation in Marshall Islands proceeding (price increased but still viable); Paideia proposal for MEW token payment being voted on.

- **Cyberverse Christmas event**: Major update with new animations (running, dancing, fishing, mining), Ronin wallet integration, improved Ergo wallet login (no CYPX/ERG requirement), and seasonal Santa shop with candy-based rewards.

- **Node connectivity issue on mainnet**: Node 213 experiencing connection overload — possible DDoS or automated connection flooding. Multiple node operators reported instability for 24+ hours.

## Important Decisions or Announcements

- [@kushti, msg#31898, 2024-12-10]: Weekly Ergo Developers chat scheduled Wed Dec 11th, 1PM UTC; focus on financial contracts feedback and 6.0 protocol soft-fork update discussion.

- [@cheeseenthusiast, msg#31928, 2024-12-11]: Prefers activation in January or February for 6.0, but okay with 3-month timeline; DevNet releases working well for testing.

- [@kushti, msg#31985, 2024-12-13]: Calling for contributors to sub-blocks implementation; will create issues with bounties.

- [@Unknown, msg#31942, 2024-12-11]: Sigmanauts DAO updates: new Paideia proposal for MEW payment, community guidelines published, Ergo Platform joined Mastodon and Threads.

- [@DiscordBridge, msg#31994-31995, 2024-12-14]: Cyberverse 2024-12-13 and 2024-12-14 patch notes released with extensive feature additions (animations, wallet integrations, Christmas event).

## Technical Q&A Worth Preserving

- **Q** (@Aberg Satergo dev, msg#31875): Should I use AES-128 or AES-256 for wallet encryption? How many PBKDF2 rounds for encryption (vs. password storage)?
  **A** (@kushti khushi, msg#31879): 128-bit is acceptable unless you anticipate quantum computer threats; for rounds, consult standards or library functions (e.g., OWASP guidelines, which typically recommend 600,000+ iterations for passwords; encryption key derivation may differ).

- **Q** (@Aberg Satergo dev, msg#31876): Should IV and PBKDF2 salt be the same 12 bytes or separate?
  **A** (@kushti khushi, msg#31877-31878): Reusing bytes is not recommended; better to derive IV and salt separately per cryptographic best practices.

- **Q** (@c8e4d2a, msg#31957): In ErgoScript, how can I verify an NFT was minted by a specific contract?
  **A** (@ldgaetano, msg#31960-31962): Pass the issuer box as a context variable and check that its box ID matches the NFT ID. Due to Ergo's token semantics, if the NFT ID equals the spent box ID, that box must have existed and been used for minting.

- **Q** (@c8e4d2a, msg#31963-31965): Can I verify in ErgoScript that an old NFT was minted from a specific contract, without offchain data?
  **A** (@kushti, msg#31984): Use an issuance contract with 433 monster tokens. On minting, create a receipt UTXO with "false" (unspendable) contract, NFT ID, and token reference. Evolution contract can use this receipt as a data input for validation.

- **Q** (@Christophe Garant, msg#31941): Best way to scrape Rosen Bridge wallet transactions — Swagger or SDKs?
  **A** (@kushti, msg#31946): Asked for clarification on use case (dust collection implied).

- **Q** (@c8e4d2a, msg#31967): Will the contract fail if I pass a made-up tampered box as context?
  **A** (@ldgaetano, msg#31968): Yes, because box ID is a hash of contents. Creating a fake box with the same ID as an existing one is computationally infeasible.

- **Q** (@Ahmet, msg#31949): What do transactions in this Oracle Pool wallet mean?
  **A** (@kushti, msg#31950-31953): This is the Oracle Pool contract at epoch preparation stage, running since 2021. See EIP-29 PR.

- **Q** (@dusek_, msg#31980): How should we handle serialization of registers/context extensions for ErgoTree versioning?
  **A** (@kushti, msg#31983): Serializers should still check for activated script version (not tree version).

## Links Shared

- [https://stackoverflow.com/questions/48709703/reusing-pbkdf2-salt-for-aes-gcm-as-iv-dangerous](https://stackoverflow.com/questions/48709703/reusing-pbkdf2-salt-for-aes-gcm-as-iv-dangerous): Discussion of reusing PBKDF2 salt as IV (not recommended).

- [https://github.com/ergoplatform/sigma-rust/pull/782](https://github.com/ergoplatform/sigma-rust/pull/782): Sigma Rust PR for deterministic nonces (approved).

- [https://github.com/ergoplatform/sigma-rust/pull/781](https://github.com/ergoplatform/sigma-rust/pull/781): Sigma Rust deterministic nonces PR (approved by kushti).

- [http://74.69.128.24:9052/panel/](http://74.69.128.24:9052/panel/): qx()'s PAInet 2.0 testnet node panel.

- [https://github.com/SavonarolaLabs/exle-svelte](https://github.com/SavonarolaLabs/exle-svelte): Exle UI refactor in Svelte with Figma specs.

- [https://github.com/SavonarolaLabs/mempool_server](https://github.com/SavonarolaLabs/mempool_server): Mempool/address history socket subscription service (experimental).

- [https://hashmon.xyz/](https://hashmon.xyz/): Hashmon project page (monster NFT game).

- [https://thecomettoken.com/](https://thecomettoken.com/): Comet token simplified website.

- [https://escript.online](https://escript.online): ErgoScript compiler with testnet flag support.

- [https://github.com/ergoplatform/eips/pull/29/files](https://github.com/ergoplatform/eips/pull/29/files): Oracle Pool v2 EIP proposal.

- [https://github.com/moon-miner/bash-BIP39-seed-cypher](https://github.com/moon-miner/bash-BIP39-seed-cypher): SCypher — BIP39 seed phrase encryption tool using bash and Perfect Shuffle algorithm.

- [https://github.com/Telefragged/off-the-grid](https://github.com/Telefragged/off-the-grid): Off-the-Grid custom bots (mentioned by Ahmet).

- [https://www.ergoforum.org/t/ergoscript-design-patterns/222/23](https://www.ergoforum.org/t/ergoscript-design-patterns/222/23): ErgoScript design pattern for NFT authenticity by @anon_real, used in Auction House royalties.

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1043](https://github.com/ergoplatform/sigmastate-interpreter/pull/1043): Tree-based versioning implementation in SigmaState interpreter.

- [https://github.com/ergoplatform/ergo/pull/2193](https://github.com/ergoplatform/ergo/pull/2193): Ergo node PR (under review by fantaerik).

- [https://github.com/mgpai22/ergo-streaming](https://github.com/mgpai22/ergo-streaming): ErgoStreaming tool by mgpai.

- [https://app.paideia.im/sigmanauts/proposal/pay-jumei-for-the-mew-c6620cb4-9527-4d60-b2ab-69697ecf28e3](https://app.paideia.im/sigmanauts/proposal/pay-jumei-for-the-mew-c6620cb4-9527-4d60-b2ab-69697ecf28e3): Paideia proposal for MEW token payment to Jumei.

- [https://sigmanauts.com/community-guidelines/](https://sigmanauts.com/community-guidelines/): Sigmanauts DAO community guidelines.

- [https://sigmanauts.com/minutes/2024-12-08-meeting/](https://sigmanauts.com/minutes/2024-12-08-meeting/): Sigmanauts meeting transcript.

- [https://github.com/sigmanauts/docs/tree/main/guide](https://github.com/sigmanauts/docs/tree/main/guide): Sigmanauts GitHub organization docs and guide.

- [https://mastodon.world/@ergoplatform](https://mastodon.world/@ergoplatform): Ergo Platform on Mastodon.

- [https://www.threads.net/@ergo_platform](https://www.threads.net/@ergo_platform): Ergo Platform on Threads.

- [https://storage.googleapis.com/ergo-cms-media/paper_26_a875144ecd/paper_26_a875144ecd.pdf](https://storage.googleapis.com/ergo-cms-media/paper_26_a875144ecd/paper_26_a875144ecd.pdf): UTXO model research paper (multistage contracts reference).

- [https://savonarolalabs.github.io/exle-svelte/](https://savonarolalabs.github.io/exle-svelte/): Exle landing page (Svelte version).

## Unresolved Questions

- **Node 213 overload investigation** [@kushti, msg#32004]: Constant connection flooding every few milliseconds to mainnet node 213; originating IP, attack vector, and mitigation strategy unclear. Luivatra, MGpai, Moein, and others investigating. Blacklist/filtering features may not be integrated.

- **Whether PBKDF2 iterations should be variable** [@Aberg Satergo dev, msg#31883]: Should iteration count be stored unencrypted in wallet format to allow updates without format version bump? Still deciding between hardcoding vs. variability.

- **Optimal tree versioning scope for 6.0** [@dusek_, msg#31980]: Finalizing whether all register/context extension serialization follows tree version or script version. kushti suggested script version for serializers.

- **Sub-blocks vs. other scaling solutions** [@kushti, msg#31931-31975]: Multiple speed improvement proposals exist (microblocks, sidechains, layer 2); path forward to be chosen via community discussion post-Ergoversary, starting with drafts/sketches.

- **Monster evolution contract design** [@c8e4d2a, msg#31979]: Still deciding whether to unify all minting/evolution logic in one contract or split into separate contracts for clarity to new developers.

---

**Activity Level**: Moderate technical discussion focused on 6.0 protocol update, NFT smart contract patterns, and ecosystem updates (Cyberverse, Sigmanauts governance). Some infrastructure issues flagged but not fully resolved.