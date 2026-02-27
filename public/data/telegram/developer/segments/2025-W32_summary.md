# Ergo Developer Chat Summary — 2025-W32

## Key Topics Discussed

- **Sub-blocks development**: kushti advancing sub-blocks implementation with security audit, optimization, and documentation. Public testnet release planned after 6.0.1 with miner support [@kushti khushi, msg#35330].

- **Ergo Node 6.0.1 release**: Finalized and released this week. Includes PR#2235 (merged by mgPai) and PR#2222 reviews [@kushti khushi, msg#35344, msg#35381].

- **Sigma SDK v6.0.2**: Released for Ergo mainnet versions 6.x and 5.x [@kushti khushi, msg#35364].

- **ChainCash development**: Contract review completed by kushti with notes to Luca. Community discussions active. Investigating USD pool v1 to v2 upgrade [@kushti khushi, msg#35345-#35346].

- **Lithos Protocol progress**: Difficulty contract finished, fraud proof contracts completed off-chain, stratum optimizations for TRM users and NISP share tracking [@Michael, msg#35342].

- **Data inputs semantics**: Data inputs can only reference spent boxes within the same block; certificate pattern available for referencing spent boxes via script [@kushti khushi, msg#35311].

- **FleetSDK derivation path issue**: Incorrect BIP44 path (m/44'/429'/0/0/0 vs m/44'/429'/0'/0/0) caused address mismatch with mobile wallets. Resolved with PGR assistance [@HQΣr | Wont Dm 🐾 ⚡, msg#35322-#35325].

- **NFT storage rent handling**: When a box cannot cover storage rent, it is collected by the miner. If sufficient ERG remains, NFTs/tokens persist in newly recreated boxes [@Pgr456, msg#35338].

- **API schema standardization**: Swagger/OpenAPI examples inconsistent with responses (e.g., /transactions/unconfirmed/byTransactionId returning IndexedErgoTransaction missing numConfirmations). Fixed and redeployed on public testnet node [@kushti khushi, msg#35373-#35374].

- **sigmastate-interpreter branching**: Repository will adopt same branching rules as main node repo—master branch tracks latest release, no develop branch, release candidate PRs for each release [@kushti khushi, msg#35377].

## Important Decisions or Announcements

- [@kushti khushi, msg#35330, 2025-08-05]: Sub-blocks ready for public testnet with miner support after 6.0.1 release.

- [@kushti khushi, msg#35364, 2025-08-07]: **Sigma SDK v6.0.2 released** — https://github.com/ergoplatform/sigmastate-interpreter/releases/tag/v6.0.2

- [@kushti khushi, msg#35373, 2025-08-08]: Fixed OpenAPI schema issues and redeployed public testnet node for testing.

- [@kushti khushi, msg#35377, 2025-08-08]: sigmastate-interpreter repository branching rules aligned with main node repo (master = latest release, no develop, RC PRs per release).

- [@kushti khushi, msg#35381, 2025-08-09]: **Ergo protocol reference client 6.0.1 released** — https://github.com/ergoplatform/ergo/releases/tag/v6.0.1

- [@kushti khushi, msg#35380, 2025-08-09]: Ready to inject sub-blocks supporting mining nodes into public testnet with 6.0.1 release.

## Technical Q&A Worth Preserving

- **Q** (@Josemi, msg#35310): Can a data input reference a box that has already been spent?  
  **A** (@kushti khushi, msg#35311): Only in the same block. See forum discussion on data-inputs-semantics. For referencing spent boxes in script, use certificate pattern by anon-real.

- **Q** (@HQΣr | Wont Dm 🐾 ⚡, msg#35315-#35319): Generated FleetSDK address doesn't match imported one; neither appears in mobile wallet derived addresses.  
  **A** (@kushti khushi, msg#35323): Derivation path should be m/44'/429'/0'/0/0 (note the apostrophe after 0). [@HQΣr | Wont Dm 🐾 ⚡, msg#35325]: Resolved with PGR's help.

- **Q** (@kushti khushi, msg#35326): Can LLMs help write "core" code? Would extensive comments help? Where should security audits be marked?  
  **A** (@_, msg#35328): Use cline with repo-level directives to control LLM code generation quality.

- **Q** (@Josemi, msg#35336): What happens to an NFT when its box is spent due to storage rent?  
  **A** (@Pgr456, msg#35338 & @HQΣr | Wont Dm 🐾 ⚡, msg#35339): If box lacks funds for rent, it goes to storage rent collector. If sufficient ERG exists, NFT/tokens remain in newly recreated box.

- **Q** (@Luca D'Angelo, msg#35331): Is there a way to know what mode nodes are in? Would be useful visually.  
  **A** (@kushti khushi, msg#35332-#35333): Mode info announced during handshake; implementing visual indicator would be possible and valuable.

- **Q** (@Moein Zargarzadeh, msg#35370): Swagger examples incompatible with responses (e.g., /transactions/unconfirmed/byTransactionId schema changed, numConfirmations missing).  
  **A** (@kushti khushi, msg#35373-#35374): Fixed OpenAPI schema issues and redeployed. [@Moein Zargarzadeh, msg#35378]: Confirmed working; suggested adding mempool option to /blockchain/transaction/byId in future releases.

## Links Shared

- [https://www.ergoforum.org/t/data-inputs-semantics/654]: Data inputs semantics and block-scoped references.

- [https://www.ergoforum.org/t/ergoscript-design-patterns/222/23]: Certificate pattern for referencing spent boxes by anon-real.

- [https://github.com/ergoplatform/ergo/pull/2235]: PR#2235 (merged for 6.0.1).

- [https://github.com/ergoplatform/ergo/pull/2222]: PR#2222 finalization for 6.0.1 release.

- [https://github.com/ergoplatform/sigma-rust/pull/836]: SigmaBool serialization to base16 for reduced transactions (dusek).

- [https://www.ergoforum.org/t/p2p-currencies-digital-free-banking-and-better-money-labs-role-in-moving-things-forward/5217]: kushti's published ideas on P2P currencies and digital free banking.

- [https://t.me/chaincashtalks]: ChainCash community discussions Telegram group.

- [https://github.com/BetterMoneyLabs/chaincash-rs/issues/51]: Log2222 issue on ChainCash GitHub.

- [https://github.com/ergoplatform/sigmastate-interpreter/releases/tag/v6.0.2]: Sigma SDK v6.0.2 release.

- [http://159.89.116.15:11088/]: Public testnet node deployed for PR#2222 testing (available 2025-08-07 onward).

- [https://github.com/ergoplatform/ergo/releases/tag/v6.0.1]: Ergo protocol reference client 6.0.1 release.

- [https://x.com/ergo_platform/status/1953108576722899306]: Community AMA announcement.

- [https://x.com/chepurnoy/status/1954115631571214452]: kushti's X post (context not provided in logs).

## Unresolved Questions

- **Celaut node deployment on Ubuntu 24** [@kushti khushi, msg#35350, msg#35356]: Dependency compilation error with Python 3.12. Suggested workaround: downgrade to Python 3.11 [@Josemi, msg#35358]. Status: pending test.

- **PR#49 clarification** [@kushti khushi, msg#35357]: kushti asked gagarin55 about ErgoWallet desktop PR#49—no response in logs.

- **LLM usefulness for core code** [@kushti khushi, msg#35326]: Open question on whether LLMs can effectively write security-critical code with better comments and marked audit points. Partial workaround via cline directives identified; general approach TBD.