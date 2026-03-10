---
title: "Ergo Developer Chat — 2023-W19"
date_start: "2023-05-08"
date_end: "2023-05-14"
type: telegram_weekly
channel: developer
week: "2023-W19"
source: telegram
message_count: 104
categories: [technical, governance, ecosystem, wallet, mining]
key_terms: [storage rent, UTXO collection, miner incentives, garbage collection, racing, EIP, tx fee script, anyone-can-spend, standardization, blockchain API, JSON strings, POST body, API endpoint, Ergonodes.net, node infrastructure, port forwarding, version market share, Yoroi wallet recovery, BIP32, ExtendedSecretKey]
---
# Ergo Developer Chat Summary — 2023-W19
**Period:** 2023-05-08 to 2023-05-14

---

## Key Topics Discussed

- **Storage rent collection mechanics**: Discussion of how miners can collect storage rent from expired UTXOs, with consensus that small Ergo-oriented pools will likely lead collection efforts. Racing to collect rent is economically equivalent to sharing profits with outsourced garbage collection agents at equilibrium.

- **EIP proposal for fee scripts**: kushti proposed making transaction fee scripts default to "true" (anyone-can-spend), simplifying fee collection logic.

- **Node API improvements**: Multiple discussions about blockchain API limitations, particularly that endpoints don't accept JSON strings in POST bodies and lack support for parameterized address queries with minimum block height filtering.

- **Yoroi wallet key recovery**: Extensive technical troubleshooting around recovering funds from a broken Yoroi wallet instance by decrypting and deriving BIP32 keys using AppKit, resolved by correctly handling the 0-byte prefix on private keys.

- **Ergonodes.net updates**: Improvements to node statistics dashboard including better visualization of version market share and planned period-based chart filtering (30d, 90d, all-time).

---

## Important Decisions or Announcements

- [@kushti khushi, msg#13314, 2023-05-08]: Proposed EIP to make transaction fee script default to "true" to simplify collection logic and allow miners or outsourced agents to collect fees flexibly.

- [@Aberg Satergo dev, msg#13345, 2023-05-10]: **Ergonodes.net improvements shipped**: Better wording for node risks, port-forwarding guides added, improved chart interactivity. Upcoming: period-based filtering for historical data views.

- [@Aberg Satergo dev, msg#13551-13552, 2023-05-14]: **Yoroi wallet recovery tool developed**: Successfully recovered ERG and tokens from broken Yoroi wallet; tool to be published on GitHub.

---

## Technical Q&A Worth Preserving

- **Q** (@bbb carzy, msg#13368): How is the notify parameter value (14474011154664524427946373126085988481658748083205070504932198000989 = 8G) calculated in NBMINER for Ergo mining?
  **A**: No direct answer provided in this segment; likely requires consultation with NBMINER documentation or mining pool docs.

- **Q** (@Unknown, msg#13319): Are there analysis tools available to scan and determine which UTXOs (and contents) will be available for collection at a certain block height?
  **A** (@Unknown, msg#13322): No longer possible via direct scanning in recent versions due to protocol constraints.

- **Q** (@Unknown, msg#13384): How to convert a p2pk address to SigmaProposition and serialize using ergo-lib-wasm or FleetSDK (analogous to AppKit)?
  **A** (@kushti khushi, msg#13405): For wallet addresses, use by-height indexing for efficient lookups. For arbitrary addresses, requires blockchain API support for address queries with minimum block height parameters (currently missing).

- **Q** (@Aberg Satergo dev, msg#13447-13451): How to sign a transaction with a 78-byte BIP32 private key recovered from a decrypted Yoroi wallet?
  **A** (@Aberg Satergo dev, msg#13551): The 78-byte key includes a 0-byte prefix identifying it as a private key. Solution: `Arrays.copyOfRange(bip32Data.keyData(), 1, 33)` extracts the 32-byte private key; then use `ExtendedSecretKey(privateKey, chainCode, false, DerivationPath.MasterPath())` and derive the target path. The key is pre-derived to the change level, so only child derivation is needed.

- **Q** (@Aberg Satergo dev, msg#13483-13488): How to properly derive EIP-3 addresses using derivation path `"m/44'/429'/0'/0/0"` with AppKit?
  **A** (@kushti khushi, msg#13541-13543): Create master key with `DerivationPath.MasterPath()`, then derive: `extMasterKey.derive(DerivationPath.fromEncoded("m/44'/429'/0'/0/0").get()).publicKey().key()`. Do not pass the full derivation path to the ExtendedSecretKey constructor; derive incrementally instead.

- **Q** (@qx(), msg#13370): Is the token minting batcher down?
  **A**: No explicit answer; anon_br was asked but response not recorded in segment.

---

## Links Shared

- [https://github.com/ThierryM1212/blobs-topia](https://github.com/ThierryM1212/blobs-topia): Described as "a gem for any dev" by @Unknown; appears to be a useful utility repository.

- [https://www.youtube.com/watch?v=r2G4ed2E4QY](https://www.youtube.com/watch?v=r2G4ed2E4QY): Java Newscast #48 on compact headers memory optimization; Aberg asked kushti whether this future Java update would be useful for Ergo.

- [https://github.com/Satergo/Satergo/blob/master/wallet-format.md](https://github.com/Satergo/Satergo/blob/master/wallet-format.md): Satergo's wallet format specification; referenced by Aberg as documentation.

---

## Unresolved Questions

- **Node API design**: The blockchain API still lacks support for parameterized address queries with minimum block height filtering. Status: acknowledged as important but not yet prioritized.

- **Derivation path discrepancies**: Aberg encountered differences between addresses generated from Yoroi's seed vs. those derived manually using AppKit, attributed to incorrect initial derivation path handling (resolved in conversation but may recur for others).

- **NBMINER difficulty calculation**: The formula for converting difficulty into pool notify parameters (specifically the 8G value) remains unexplained; would benefit from mining pool documentation or NBMINER source clarification.