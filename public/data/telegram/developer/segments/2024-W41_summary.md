# Ergo Developer Chat Summary — 2024-W41

## Key Topics Discussed

- **Ergo 6.0 Protocol Development**: kushti implemented `Some` and `None` constructors for Option types and is rechecking AVL+ tree operation semantics before finalizing the proposal for miner voting. Multiple PRs are in polishing/testing stages with activation details pending.

- **Sigma 6.0.0-alpha2 Release**: The reference client release containing all planned Sigma 6.0.0 features was shipped, with 5.0.23 released in parallel and 5.1.0 planned for Friday.

- **AppKit Library Improvements**: Aberg identified critical inconsistencies in AppKit (arrays vs. lists, naming conventions, empty token list restrictions) and obsolete dependencies causing lifecycle management issues. Multiple PRs submitted to address API consistency and introduce Gradle build system.

- **SigmaUSD Storage Rent Risk**: kushti discovered the update contract box NFT can be storage rented in ~7 months and initiated voting on contract update with potential key burning.

- **Dexy Protocol Payout Updates**: Payout contract updated; whitepaper update needed before mainnet deployment pending team availability.

- **Nautilus Wallet 0-Conf**: anon_BR confirmed everything is in place for zero-confirmation setup with alpha release planned for the Abyss channel.

- **Paideia DAO Context Variable Workaround**: Luivatra confirmed a max 4 context variable workaround resolves deployment issues, though variable ordering from JSON serialization remains a known limitation.

- **Celaut Project Documentation & Testing**: jossemii reported documentation ready for review with multi-node testing underway; Benefactor Platform contract implementation begun following Bruno's review suggestions.

- **Lithos Protocol NISP Testing**: Cheese Enthusiast restarted transaction building work with functional approach to optimize UTXO/transaction handling for optimistic evaluation.

- **Satergo v1.8.0 Release**: Aberg released desktop wallet with 4 new tools (airdrop, consolidate UTXOs, burn tokens, transact everything), token prices from ErgoDEX, multi-address sending, and accessibility improvements.

- **Sigmanauts Mining Pool Beta**: Marc the Shark reported miner ID beta testing live at ergominers.com with Mining Swap background operation and SHARK token distribution; UI finalization and voting on mint price (3 ERG suggested) pending.

- **Ergo Explorer VPS Setup Guide**: qx() working on video tutorial covering Docker installation, Node sync, explorer deployment, nginx configuration, and Let's Encrypt HTTPS setup.

- **Weak Consensus Research**: kushti evaluated posted research on blockchain-less payments, noting it's a suitable candidate for Layer 2 digital bearer certificate passing but less relevant for on-chain consensus; ScritCash provided as comparable reference.

## Important Decisions or Announcements

- [@kushti, msg#30728, 2024-10-09]: Ergo protocol client 6.0.0-alpha2 released with all planned Sigma 6.0.0 features.

- [@kushti khushi, msg#30735, 2024-10-10]: Ergo protocol reference client 5.0.23 released; 5.1.0 planned for Friday.

- [@Aberg Satergo dev, msg#30717, 2024-10-09]: Satergo v1.8.0 released with airdrop, token consolidation, burn, and multi-address transaction tools.

- [@Marc the Shark, msg#30719, 2024-10-09]: Sigmanauts Mining Pool beta testing live with SHARK token distribution; mint price vote and bonus distribution frequency vote pending.

- [@Luivatra, msg#30712, 2024-10-09]: Paideia context variable workaround completed and test cases passing; final on-chain testing in progress.

- [@arobsn, msg#30713, 2024-10-09]: Nautilus 0-conf setup complete; alpha release planned for Abyss channel this week.

## Technical Q&A Worth Preserving

- **Q** (@Aberg Satergo dev, msg#30720): What use cases does AppKit not cover?
  **A** (@Aberg Satergo dev, msg#30740): Internal API required for context extensions, externally-signed transactions, private key (vs. seed) usage, and serialization handling.

- **Q** (@Aberg Satergo dev, msg#30736-30739): What are AppKit design issues?
  **A** (@Aberg Satergo dev): API inconsistency (arrays vs. lists, naming conventions), non-empty token list requirement breaking builder pattern, vulnerable/obsolete dependencies (explorer-api, node-api clients) causing 5-minute lifecycle issues, unnecessary java.sql module inclusion, and mixed Java/Scala codebase.

- **Q** (@Cheese Enthusiast, msg#30641): Is scrypto working with Scala 2.13?
  **A** (@kushti, msg#30643): Clarified whether scrypto 3.0.0 is published for Scala 2.13 (question left open pending publication status).

- **Q** (@Luivatra, msg#30725): Is plasma library still working well on latest AppKit updates?
  **A** (@Luivatra, msg#30726): Yes, no issues; checking AppKit version.

- **Q** (@jossemii): Can order-less consensus work for reputation systems using local spend proofs without global agreement?
  **A** (@kushti, msg#30730-31): Consensus signatures on transactions are inefficient; suggests blockchain-less payments (ScritCash model) or local payment networks with PoD/DBC minting from on-chain UTXOs as alternatives.

- **Q** (@kushti khushi, msg#30745): Can someone send non-ERG tokens to testnet address for Ledger testing?
  **A** (@Michael, msg#30749): Affirmed willingness to send tokens (no specific response quoted).

- **Q** (@Aberg Satergo dev, msg#30752): Can we have a sigmastate release depending on non-snapshot scrypto?
  **A** (@kushti, msg#30769): Agreed; also noted need to include `executefromvar` test per morphic review.

- **Q** (@Aberg Satergo dev, msg#30758-762): What Java module name should sigmastate use for Automatic-Module-Name?
  **A** (@Aberg Satergo dev, msg#30762): Suggested "org.ergoplatform.sigmastate" but deferred naming decision to maintainers.

- **Q** (@Luivatra, msg#30777): Could Scala side provide context variable ID ordering to avoid reordering issues?
  **A** (@Luivatra, msg#30779): Attempted but JSON serialization/deserialization still corrupts ordering; workaround remains max 4 context variables.

## Links Shared

- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/1026]: Global.some and Global.none constructor PR for Ergo 6.0
- [https://github.com/ScorexFoundation/sigmastate-interpreter/pull/1027]: 6.0.0-alpha2 merge PR
- [https://www.ergoforum.org/t/sigmausd-bank-contract-update-and-keys-burning/4874]: SigmaUSD storage rent voting thread
- [https://github.com/paideiadao/paideia-sdk/issues/232]: Paideia context variable contract issue
- [https://ergominers.com]: Sigmanauts Mining Pool beta miner ID testing
- [https://github.com/ergoplatform/ergo-appkit/pull/241]: AppKit API consistency PR
- [https://github.com/ergoplatform/ergo-appkit/pull/243]: AppKit follow-up PR
- [https://github.com/ergoplatform/ergo-appkit/issues/242]: Java module-info.java compatibility issue
- [https://github.com/ScorexFoundation/sigmastate-interpreter/issues/1028]: Automatic-Module-Name addition issue
- [https://github.com/ccgarant/ergo-full-node-raspi/pull/12]: Semi-automatic Ergo node version update script (CCG-dev branch)
- [https://gist.github.com/kushti/5793c40b7615ad99916a4de125b0e149]: Fixed compilation test for multi-TX fee collection
- [https://github.com/scritcash/scrit-whitepaper/blob/master/scrit-whitepaper.pdf]: ScritCash reference for Layer 2 payment networks
- [https://pod.network/blog/wait-why-do-we-need-consensus-again]: Weak consensus research paper discussion (Dionysis Zindros commentary linked in msg#30664)

## Unresolved Questions

- **Scrypto Scala 2.13 publication status**: Not confirmed whether scrypto 3.0.0 is published for Scala 2.13 or timeline.
- **AppKit migration to Gradle**: Aberg proposed switching from SBT to Gradle for consistency; decision pending on acceptance of suggestion (@kushti, msg#30743).
- **Automatic-Module-Name for sigma dependencies**: Naming convention for sigmastate, debox, scorex-util, scrypto, and ergo-wallet Java module names TBD.
- **Paideia context variable ordering**: JSON serialization corrupts variable order from Scala side; 4-variable workaround confirmed but root cause unresolved.
- **Dexy mainnet deployment timeline**: Whitepaper update pending team availability; no deployment date set.
- **Ergo 6.0 activation proposal**: Miner voting proposal finalization pending test completion and rechecking; specific activation block/timestamp TBD.