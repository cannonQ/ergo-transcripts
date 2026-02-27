# Ergo General Chat — 2024-W35 Summary

## Key Topics Discussed

- **Ergo 6.0.0 Alpha Release**: kushti released the reference protocol client v6.0.0-alpha0 for devnets, signaling active development progress on the core protocol.

- **Messaging Platform Alternatives**: Community discussed potential moves away from Telegram due to privacy concerns, considering IRC, Matrix 2.0, and DarkIRC, with mixed consensus on viability for ecosystem cohesion.

- **Gluon Gold SDK Development**: Bruno announced the Gluon Gold SDK as a pre-condition for the roadmap, with contributors earning gluons and membership in The Stable Order. A configuration error in the initial raffle was identified and corrected.

- **MewFinance UI and Mart Launch**: HQΣr promoted the new MewFinance UI at mart.mewfinance.com with feature previews and marketplace functionality.

- **Rosen Bridge eRSN Token**: New emission token (eRSN) issued for Rosen Bridge with 250M supply; Armeanio noted parallel work on BigInt refactor, EVM integration, UI improvements, and eRSN enhancements.

- **ChainCash Mechanics**: Glasgow clarified that ChainCash operates as a protocol for issuing non-fungible notes backed by trust, collateral, or tokenized assets. Notes gain fungibility through service tokens or conversion to crypto. Practical examples include commodity producers issuing notes instead of loans and local community exchange systems (LETS).

- **Java/Scala Compatibility Issues**: Multiple users reported runtime errors after Java updates (22.0.2 incompatible with Scala 2.12.0). Solution: upgrade Scala to 2.12.19 and manage versions via SDKMAN.

- **ErgoSphere Node Runner**: Patato attempted to deploy ErgoSphere; encountered empty UI after login and missing .ergo folder, later attempted node syncing via snapshot with storage corruption issues.

- **Sub-blocks and Block Speed**: kushti indicated sub-blocks and protocol optimizations were under discussion post-Ergoversary, requiring testnet tweaking and community participation. Block height dependencies create constraints when reducing block time.

- **Payment and Adoption**: Jack raised concerns about using ERG as a payment medium due to price volatility, advocating for ChainCash or SigmaUSD-based solutions. kushti noted Lightning faces similar adoption friction (Gresham's Law—spend weak money, hold strong money). ChainCash backed by collateral or trust could enable e-commerce and stablecoin integration.

- **CoinGecko Listing Rejections**: Yulius reported Bober and GIF tokens rejected for lacking organic volume and social traction; resubmission requested in 14 days.

## Important Decisions or Announcements

- [@kushti, msg#510774, 2024-08-26]: Ergo reference protocol client 6.0.0-Alpha-0 released for devnets.
- [@kushti, msg#511041, 2024-08-28]: Considering DarkIRC as messaging alternative due to strong anonymity and p2p decentralization.
- [@Bruno, msg#511061, 2024-08-28]: New properly configured Gluon Gold SDK raffle announced after config error correction.
- [@MavΣrickBg, msg#511348, 2024-08-30]: Appointed as admin of Ergo General chat by kushti.
- [@kushti, msg#511404, 2024-08-30]: Proposed Twitter Spaces schedule: Sep 5 (Building applications on Ergo: challenges and perspectives) and Sep 12 (Memetic power of Ergo—mascot, memes, manifesto).
- [@Armeanio, msg#511721, 2024-08-31]: BigInt refactor and testing nearing completion; team integrating EVM, UI improvements, eRSN improvements in parallel.
- [@Glasgow, msg#511761, 2024-09-01]: Provided ChainCash practical example: note issued by Ghana mining cooperative, accepted by government as tax payment, converted to Cedis, used for oil purchase, further traded for equipment.

## Technical Q&A Worth Preserving

- **Q** (@Shiv Chauhan, msg#510937): Can Ergo be mined with 4GB GPU anymore?
  **A** (@Unknown, msg#510938/510941): No, memory table exceeds 4GB. Need 6GB or larger. MinerStat DAG size display (3.55GB) is incorrect; refer to [DAG size spreadsheet](https://docs.google.com/spreadsheets/d/1c8fa4Qalf49WbdStwNaexLa4qOybwgvDBDiyzrIH9D4/edit?gid=0#gid=0).

- **Q** (@Patato, msg#510961): Java update broke ergo-vanitygen .jar execution with unspecified error.
  **A** (@Glasgow, msg#511012/511015): Path conflicts from Scala version mismatch. Solution: update Scala to 2.12.19, manage Java/Scala versions via [SDKMAN](https://sdkman.io/install/) to avoid Windows path issues.

- **Q** (@Patato, msg#511412): How to properly execute ergo-vanitygen with missing dependencies?
  **A** (@kushti, msg#511414-511418): Run without `-jar` flag; download scala-library.jar from Maven repository and execute per StackOverflow guidance.

- **Q** (@qx(), msg#511437-511443): What Java version required for ergo-vanitygen?
  **A** (@qx(), msg#511456): Java 11 works fine; newer versions (17/21/22) may have compatibility issues. Try vendor like Temurin or Dragonwell for v11.

- **Q** (@qx(), msg#511479-511480): Why rebuild ergo-vanitygen from source instead of using pre-compiled release?
  **A** (@qx(), msg#511486-511487): Pre-compiled releases available at [GitHub releases](https://github.com/jellymlg/ergo-vanitygen/releases); building from source unnecessary unless verifying integrity.

- **Q** (@Patato, msg#511506-511512): ErgoMixer docker container exits after restart; interface unreachable at 127.0.0.1:9000.
  **A** (@qx(), msg#511507-511510): Run command again; sometimes startup errors prevent UI container spawn. Watcher exhibits same behavior—rerunning resolves it.

- **Q** (@Patato, msg#511641-511643): ErgoSphere node runner shows black screen after login; missing .ergo folder.
  **A** (unresolved): Node apparently started per logs but no data directory created. Likely initialization or permission issue with install.sh.

- **Q** (@Patato, msg#511771-511776): How long to sync pruned full node via NIPoPoWs on USB drive?
  **A** (@Patato, msg#511792): ~7 hours estimated; GPU crashes may require restarts. Snapshot loading encountered corruption; recommended full natural sync instead.

- **Q** (@Alex, msg#511816-511819): Is there a dapp to create ChainCash notes? How do trust-backed notes work?
  **A** (@kushti, msg#511822): ChainCash is "assembly language layer for monetary systems"; dapps needed for low-hanging-fruit applications (e.g., local community LETS systems on L2).

- **Q** (@qx(), msg#511258-511269): What incentive exists for node operators to store large amounts of data? Risk of miner favoritism?
  **A** (@qx(), msg#511268-511269): Once clients pay for storage, miners incentivized to favor payers; subsequent dictation of terms becomes possible if relationship becomes dependency.

## Links Shared

- [Ergo 6.0.0-alpha0 Release](https://github.com/ergoplatform/ergo/releases/tag/v6.0.0-alpha0): DevNet reference client.
- [Gluon Gold Twitter Update](https://x.com/GluonStable/status/1828750923868569810): SDK announcement.
- [Gluon Gold Roadmap](https://github.com/orgs/StabilityNexus/projects/1): Pre-conditions and milestones.
- [Gluon Gold Corrected Raffle](https://x.com/GluonStable/status/1828860667039781147): Fixed 90% → charity distribution.
- [MewFinance Update](https://x.com/Mew_finance/status/1828903120245522513): New UI and marketplace features.
- [MewFinance Cross-Bridges Call](https://x.com/Mew_finance/status/1830238327985025461): Community support request.
- [SDKMAN Install](https://sdkman.io/install/): Java/Scala version manager for Linux.
- [ergo-vanitygen Releases](https://github.com/jellymlg/ergo-vanitygen/releases): Pre-compiled binaries.
- [Ergo GraphQL Servers](https://docs.ergoplatform.com/dev/stack/explorer/graphql/): List of available endpoints.
- [ChainCash Practical Examples](https://docs.ergoplatform.com/uses/chaincash/#practical-examples): Updated with commodity and trade scenarios.
- [DAG Size Spreadsheet](https://docs.google.com/spreadsheets/d/1c8fa4Qalf49WbdStwNaexLa4qOybwgvDBDiyzrIH9D4/): Ergo mining GPU memory requirements.
- [Ergo Roadmap](https://docs.ergoplatform.com/roadmap/#defi-ecosystem): Runes, BTC forks, Paideia, DexyGold, US access timelines.
- [TabbyPOS](https://x.com/tabbypos): Crypto payment integration project.

## Unresolved Questions

- **Messaging Migration**: No consensus on viable Telegram replacement balancing privacy, decentralization, and ecosystem cohesion. DarkIRC seen as too restrictive for 1% adoption.
- **ErgoSphere Deployment**: Black screen after login and missing data directory initialization root cause unidentified.
- **Node Snapshots on MinerOS**: Snapshot loading fails with corrupted CURRENT file; folder structure mismatch between systems unclear.
- **Sub-blocks Timeline**: kushti stated optimizations under discussion but no committed implementation date or testnet launch window provided.
- **ChainCash dApp Development**: kushti indicated need for "low-hanging-fruit" applications but specific candidates not named.
- **Block Speed Trade-offs**: Reducing block time requires auditing block height dependencies in smart contracts; scope of impact not quantified.
- **Rosen Bridge EVM**: Armeanio mentioned EVM integration in progress but no launch date or spec details shared.