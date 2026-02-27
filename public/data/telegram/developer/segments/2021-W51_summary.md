# Ergo Developer Chat Summary — 2021-W51
**Period:** 2021-12-22 to 2021-12-26  
**Participants:** 8 (Aberg, Glasgow, Ilya, Ilya Oskin, Luivatra, Unknown, anon_br, kushti)  
**Message Count:** 66

---

## Key Topics Discussed

- **Blockchain data access methods**: Discussion of extracting full chain data via CSV; web scraping Ergo Explorer vs. running local explorer backend vs. using node JSON API; binary format of raw node data storage.

- **Wallet authentication and address verification**: Using dApp Connector's `ergo.sign_data` for backend wallet ownership confirmation; distinguishing between confirmed balance and address ownership verification.

- **Node version management in release artifacts**: Configuration files (mainnet.conf, application.conf) inconsistently updated across releases; version field critical for wallet update mechanisms.

- **Node discovery in wallet infrastructure**: Remote node support in wallets; concern about centralization patterns in existing solutions (MetaMask, Yoroi, Ergo Android).

---

## Important Decisions or Announcements

- [@kushti khushi, msg#85, 2021-12-24]: Acknowledged version-update issue as requiring a more robust solution beyond manual preprocessing; commits attempted to update version everywhere for version candidates.

---

## Technical Q&A Worth Preserving

**Q** (@Unknown, msg#18): What's the best way to get a CSV of the full chain?  
**A** (@Aberg, msg#43): Spamming the public Ergo Explorer API would stress it too much and take excessive time due to network delays. Alternatives: run the explorer backend locally, or access node data in JSON format directly.

**Q** (@Unknown, msg#33): How do you read raw data from a node?  
**A** (@Aberg, msg#36): It's a binary format. [@Unknown, msg#41] suggests trying the API first instead.

**Q** (@Ilya, msg#87–91): How to verify wallet ownership for backend API authentication? Use case: OAuth2-like flow with Yoroi Nightly for user profile updates.  
**A** (@Ilya Oskin, msg#90): Ask user to sign something to verify address ownership; optionally verify address has blockchain transactions.  
**A** (@anon_br Σ, msg#100): Use dApp Connector's `ergo.sign_data` per EIP-0012 for signature-based verification.

**Q** (@Aberg, msg#108–109): How is node discovery done? Concern: wallet's remote node support should not default to centralized nodes like MetaMask/Yoroi/Ergo Android.  
**A**: No direct response provided in chat segment.

**Q** (@Unknown, msg#101): CSV fields needed for chain analysis?  
**A** (@Unknown, msg#101): Height, timestamp, transaction count, miner, reward, difficulty, size.  
**A** (@kushti, msg#103): Pull from node in JSON format.  
**A** (@Aberg, msg#104–106): These fields don't require full blockchain—use API; acknowledged misunderstanding that full transaction data was needed.

**Q** (@Ilya, msg#94–95): What is "confirmed balance" and how to confirm address ownership on backend?  
**A** (@Aberg, msg#96): Confirmed balance = coins verified to belong to an address (not what's needed for ownership verification).  
**A** (@Aberg, msg#99): Address ownership confirmation not possible with current wallets; requires signature-based solution.

---

## Links Shared

- [https://github.com/zackbalbin/ErgoTutorials](https://github.com/zackbalbin/ErgoTutorials): Step-by-step Ergo tutorials with detailed code examples (by author also working on ERG domain services).

- [https://github.com/ergoplatform/explorer-backend](https://github.com/ergoplatform/explorer-backend): Ergo Explorer backend source; recommended for local chain data access instead of API scraping.

- [https://github.com/ergoplatform/eips/blob/b70f406ad9f3cb7088407857820660558250db73/eip-0012.md#ergosign_dataaddr-address-message-string-promisestring](https://github.com/ergoplatform/eips/blob/b70f406ad9f3cb7088407857820660558250db73/eip-0012.md#ergosign_dataaddr-address-message-string-promisestring): EIP-0012 dApp Connector specification; defines `ergo.sign_data` for address verification.

- [https://ergo.watch/](https://ergo.watch/): Chain analysis tools resource.

- [https://dav009.medium.com/learning-ergo-101-development-workflow-aa17dd63ef6](https://dav009.medium.com/learning-ergo-101-development-workflow-aa17dd63ef6): "Learning Ergo 101: Development Workflow" article; noted as "really good" resource.

---

## Unresolved Questions

- **Node version consistency in releases** [@Aberg, msg#63–65]: How to automate or reliably ensure version fields are synchronized across all configuration files (mainnet.conf, application.conf) on release? Suggested solution: automated preprocessing or version file added at build time—status unresolved.

- **Node discovery architecture** [@Aberg, msg#108–109]: No specific answer given for decentralized node discovery pattern to replace centralized node defaults.

- **Address ownership verification on backend without signatures** [@Ilya, msg#98–99]: Current wallets cannot support address ownership verification; gap flagged but no roadmap discussed.