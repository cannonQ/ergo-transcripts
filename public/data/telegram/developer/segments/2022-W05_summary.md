# Ergo Developer Chat Summary — 2022-W05
## Period: 2022-02-02 to 2022-02-13

---

## Key Topics Discussed

- **Discord/Telegram Bridge for Development Channel**: Discussion of channel bridging between Ergo Discord (#development) and Telegram to provide access parity for developers not on Discord.

- **Satergo Wallet Development**: Aberg announced significant improvements including application size reduction (100 MB → 50 MB), password confirmation security features, installer preparation, NFT viewing support, and transaction history viewing within the wallet.

- **Ergo Explorer Backend Sync Performance**: Critical issue identified with explorer backend synchronization taking ~2 weeks on virtual infrastructure. kushti ordered a more powerful server expected to reduce sync time to 3-4 days. GetBlok raising concerns about delayed payouts during sync downtime.

- **Node Wallet Derivation Scheme Complexity**: Historical context revealed: node wallet derivation has diverged across versions (pre-Yoroi used different scheme), Coinbarn and Yoroi had different implementations. kushti flagged node wallet derivation logic as "already a nightmare."

- **WebAssembly Support Gap in Ergo dApps**: Aberg raised concern that Ergo dApp websites unnecessarily require WebAssembly without providing asm.js fallbacks, blocking embedded browser integration in wallets.

- **UTXO Snapshot Bootstrapping**: kushti mentioned bootstrapping with UTXO snapshot is in progress (likely to speed future node synchronization).

- **Extended Public Key to Address Conversion**: Aberg investigated conversion of `org.ergoplatform.wallet.secrets.ExtendedPublicKey` to address format; found method exists in sigma-rust (`ExtPubKey.to_address`) but not in ergo-wallet library.

---

## Important Decisions or Announcements

- [@Aberg Satergo dev, msg#372, 2022-02-06]: **Satergo Release Updates**
  - Halved application size (~100 MB → ~50 MB)
  - Password confirmation on sending transactions
  - Installers in preparation
  - NFT viewing support in progress
  - Transaction history and status tracking coming soon

- [@kushti khushi, msg#459, 2022-02-08]: **Explorer Backend Server Upgrade**
  - Ordered new powerful server for explorer backend
  - Expected to sync in 3-4 days (vs. current ~2 weeks)

- [@Aberg Satergo dev, msg#425, 2022-02-08]: **Satergo 0.0.3 Release Delayed**
  - Delaying release pending resolution of a wallet security/derivation issue (details not fully elaborated in this chat segment)

---

## Technical Q&A Worth Preserving

- **Q** (@Aberg Satergo dev, msg#360): Why do Ergo dApp websites require WebAssembly when many embedded browsers don't support it, and why aren't asm.js fallbacks provided?
  **A** (implicit): No direct answer provided; flagged as a developer experience gap.

- **Q** (@Aberg Satergo dev, msg#597-598): How can one convert `org.ergoplatform.wallet.secrets.ExtendedPublicKey` to an address in ergo-wallet library?
  **A** (@Aberg Satergo dev, msg#598): Method exists in sigma-rust (`ExtPubKey.to_address`) but not in ergo-wallet. (@Aberg Satergo dev, msg#599): Self-resolved through investigation.

- **Q** (@Aberg Satergo dev, msg#592-593): What are the network type IDs and how do they relate to address prefixes?
  **A** (implicit): Aberg identified the issue was unrelated; values exist but location in documentation unclear.

- **Q** (@Luivatra, msg#436): Comment on explorer backend sync time requirements.
  **A** (@Luivatra, msg#440, msg#442): Syncing started after NETA launch issues, currently at 600k blocks. Running on VM may have throttling. @ergopad_leif is managing the instance; ways to improve sync exist but haven't been prioritized.

- **Q** (@AllCloudy | GetBlok.io, msg#454): Can anything be done short-term to alleviate explorer backend sync delays affecting POV (proof-of-value) efforts?
  **A** (@kushti khushi, msg#455, msg#459): Could use scan-based approach short-term; ordered powerful server for 3-4 day sync long-term. (@AllCloudy, msg#460): 3-4 days still unacceptable for uninterrupted payouts; exploring alternative with abchris.

---

## Links Shared

- [https://twitter.com/pjsstator/status/1489966875232686083]: Twitter link shared by Jennie D (2022-02-05); context not specified in chat.

- [https://twitter.com/DanielTetsuyama/status/1489971231692836864]: Twitter link shared by Jennie D (2022-02-05); context not specified in chat.

- [https://twitter.com/Luivatra/status/1490431103693467648]: kushti shared Luivatra's tweet (2022-02-06); Luivatra thanked them; content context unclear.

- [https://github.com/ergoplatform/explorer-backend]: Repository for Ergo Explorer backend, referenced by Arohbe (msg#438) as focal point for sync performance discussion.

---

## Unresolved Questions

- **WebAssembly Fallback Strategy**: No resolution on why Ergo dApps don't provide asm.js fallbacks or whether this will be addressed.

- **Wallet Derivation Path Complexity**: kushti identified node wallet derivation as a "nightmare" across versions but no fix or refactoring timeline proposed.

- **Short-term Explorer Backend Relief**: GetBlok's need for faster payouts during explorer sync unresolved; partial mitigation via scan-based approach mentioned but not confirmed.

- **Network Type ID Documentation**: Aberg resolved their specific case but broader documentation gap for network type IDs vs. address prefixes not formally addressed.

- **UTXO Snapshot Bootstrapping Timeline**: kushti mentioned snapshot bootstrapping is "in progress" but no ETA provided.

---

**Note**: This week was moderately active with focused technical discussions on wallet development, explorer infrastructure, and library API gaps. No major protocol changes or ecosystem announcements were discussed in this segment.