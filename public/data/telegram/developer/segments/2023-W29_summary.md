---
title: "Ergo Developer Chat — 2023-W29"
date_start: "2023-07-17"
date_end: "2023-07-23"
type: telegram_weekly
channel: developer
week: "2023-W29"
source: telegram
message_count: 113
categories: [technical, wallet, defi, marketing, ecosystem]
key_terms: [P2P, network modifiers, transaction listening, sigmastate-interpreter, maven central, ergo.watch API, ergopad API, token supply, market cap, vesting, staking, storage rent, monotonic creation height, box settlement, spectrum off-chain bots, translation, Lang_id.properties, Indonesian, Spanish, localization]
---
# Ergo Developer Chat Summary — 2023-W29

## Key Topics Discussed

- **Ergonnection P2P Library Development**: Aberg released a Java-based peer-to-peer node communication library with network modifier message handling, enabling real-time transaction listening and supporting block headers. The library was tested for network latency performance and is under review before Maven Central publication.

- **Storage Rent & Creation Height Enforcement**: Discussion of Monotonic creation height EIP (#39) and how it prevents cheating rent via arbitrary height setting. Identified that modified Spectrum bots historically set creation heights to zero, potentially affecting users.

- **GreasyCEX Mission #1 Development**: Completed paper draft with tokenomics confirmation, NFT collection ready for minting, and Spectrum listing approved. Mission launch planned for 3–4 weeks with peer review refinement ongoing.

- **DuckPools Protocol Updates**: SigmaUSD pool in private testing; SigmaRSV and QUACKS pools nearing private testing after off-chain bot and front-end scalability improvements. Protocol voting smart contracts near completion.

- **sigma.js Cross-Compilation**: Fleet SDK recently integrated sigma.js compiler package, enabling browser-based ErgoScript compilation—marked as a significant tooling advancement.

- **Antivirus False Positives on ErgoPool Oracle API**: Bitdefender flagging `oracle-core.ergopool.io/` as potentially dangerous—confirmed as false alert by ErgoPool maintainers (Moein Zargarzadeh). Issue under investigation; ErgExplorer confirmed not using the API.

## Important Decisions or Announcements

- [@Aberg Satergo dev, msg#15367, 2023-07-17]: Published Ergonnection library update on GitHub with transaction listener example; seeking community feedback before Maven Central release.

- [@Austen Milbarge // GreasyCEX, msg#15466, 2023-07-19]: GreasyCEX Mission #1 tokenomics finalized and programmable; NFT collection complete; official Spectrum DEX listing confirmed.

- [@Unknown, msg#15468, 2023-07-19]: DuckPools SigmaUSD pool entered private testing; SigmaRSV and QUACKS pools restructured for scalability; protocol voting contracts near completion.

- [@Aberg Satergo dev, msg#15498, 2023-07-20]: Released Ergonnection version with built-in Header support; tested and functional.

- [@Pulsarz, msg#15613–15620, 2023-07-22]: sigma.js now available and integrated into Fleet SDK; cross-compilation support enabled by kushti.

## Technical Q&A Worth Preserving

- **Q** (@Aberg Satergo dev, msg#15401, 2023-07-18): Why are ErgoBoxCandidate's tokens called "additionalTokens" rather than just "tokens"?
  **A** (@kushti khushi, msg#15402): "Additional/secondary" means non-native tokens (ERG is primary). Terminology kept for clarity.

- **Q** (@Aberg Satergo dev, msg#15403): Should additionalRegisters be renamed to just "registers"?
  **A** (@kushti khushi, msg#15404): No—all box fields (value, script, tokens, registers R0–R9) are registers. R0–R3 have fixed semantics; R4–R9 are custom. Keep "additionalRegisters" to distinguish custom registers.

- **Q** (@Luivatra, msg#15495, 2023-07-20): What data needed from Ergonnection for mempool transactions?
  **A** (@Luivatra, msg#15495): Block header ID and transaction ID only; rest fetchable via API.

- **Q** (@Aberg Satergo dev, msg#15493, 2023-07-20): What new block events are needed for Ergonnection?
  **A** (@Aberg Satergo dev, msg#15499): Network works via Inv messages (sent to all peers with ID/type), ModifierRequest (for content), and ModifierResponse (returns content). ErgoTransaction Inv IDs match transaction IDs; type checking required.

- **Q** (@HQΣr | Wont Dm 🐾 ⚡, msg#15359, 2023-07-17): Is there an API endpoint to filter transactions by token ID and sender/recipient pair?
  **A** (@ergomorphic [mentioned but not directly answered]): No direct answer in chat; question remains open.

- **Q** (@HQΣr | Wont Dm 🐾 ⚡, msg#15357, 2023-07-17): Is the marketcap calculation approach accurate for tokens with vesting and staking?
  **A** (Unresolved): Acknowledged need to account for vesting/staking but no solution provided in chat.

- **Q** (@Giufa OnliאΣ｜WON'T DM, msg#15660, 2023-07-23): Why is Bitdefender blocking oracle-core.ergopool.io?
  **A** (@Pulsarz, msg#15666; @Moein Zargarzadeh, msg#15673–15674): False alert; the endpoint is a public SigmaUSD oracle API. Correct endpoint: `https://oracle-core.ergopool.io/frontendData`.

## Links Shared

- [https://github.com/Satergo/Ergonnection](https://github.com/Satergo/Ergonnection): Aberg's Java P2P node communication library with transaction listener support.

- [https://github.com/ergoplatform/eips/blob/master/eip-0039.md](https://github.com/ergoplatform/eips/blob/master/eip-0039.md): Monotonic creation height EIP preventing rent cheating via arbitrary height setting.

- [https://github.com/fleet-sdk/fleet/tree/master/packages/compiler](https://github.com/fleet-sdk/fleet/tree/master/packages/compiler): Fleet SDK's sigma.js compiler integration for browser-based ErgoScript compilation.

- [https://www.ergoforum.org/t/storage-rent-details/256](https://www.ergoforum.org/t/storage-rent-details/256): Forum discussion on storage rent mechanics and creation height enforcement.

- [https://github.com/HigherOrderCO/Kindelia](https://github.com/HigherOrderCO/Kindelia): Linked by kushti (context minimal; appears unrelated to this week's core discussion).

- [https://github.com/Satergo/Satergo](https://github.com/Satergo/Satergo): Satergo wallet with translation contribution instructions in README.

## Unresolved Questions

- **API Endpoint for Token & Address Filtering**: Whether an API exists to filter transactions by token ID and sender/recipient pair remains unresolved (msg#15359).

- **Marketcap Calculation with Vesting/Staking**: How to incorporate vesting and staking into token supply/marketcap calculations for tools like MewMart remains open (msg#15357).

- **Antivirus False Positives Root Cause**: Bitdefender alert on ErgoPool oracle API confirmed as false; root cause investigation ongoing with ErgoPool maintainers (msgs#15660–15678).

- **Satergo Mining Pool Integration**: Whether Satergo can serve as a full node for mining pool operations requires separate mining pool software; no unified setup guide provided (msgs#15627–15628).