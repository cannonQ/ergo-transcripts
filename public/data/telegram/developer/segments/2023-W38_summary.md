---
title: "Ergo Developer Chat — 2023-W38"
date_start: "2023-09-18"
date_end: "2023-09-24"
type: telegram_weekly
channel: developer
week: "2023-W38"
source: telegram
message_count: 74
categories: [technical, wallet, mining, nft, ecosystem]
key_terms: [flash loans, oracle manipulation, onchain oracles, Spectrum, duckpools, minValuePerByte, token boxes, nanoErgs, p2pk, seed phrase, private key, hierarchical deterministic, HD wallets, storage rent, mining pool, Sig pool, burn test, payout, Greasy Royale, NFT production]
---
# Ergo Developer Chat Summary — 2023-W38
**Period:** 2023-09-18 to 2023-09-22 | **Messages:** 74 | **Participants:** 10

---

## Key Topics Discussed

- **Flash loans and oracle manipulation risk**: [@kushti, msg#18562] raised concern that DuckPools using Spectrum DEX opens the protocol to flash loan attacks that could manipulate on-chain oracles. Discussion explored whether flash loans are feasible in Ergo's UTXO model. [@Armeanio, msg#18603] characterized flash loans in mark-to-market asset classes as "pretty retarded" when used as a base for other financial products, suggesting this would be good material for a Hash It Out discussion.

- **Sigmanauts mining pool development**: [@qx(), msg#18781–18795] announced upcoming Sigmanauts pool with storage rent integration in ~1–2 weeks. Currently running a burn test to verify block hits and payouts before UI design and public launch. [@Cheese Enthusiast] is helping integrate storage rent capture.

- **Minimum ERG value per box**: [@Flying Pig (™), msg#18726–18740] tested minimum ERG requirements for token-containing boxes. Found that 0.00001 ERG fails with "minValuePerByte * outputSize" constraint; 0.00004 ERG worked. [@Luivatra, msg#18756] provided formula reference: box size in bytes × 360 nanoErgs (from Paideia state code).

- **Satergo vs. CLI node distribution**: [@Aberg, msg#18933–18978] expressed concern that installable CLI node binaries could worsen outdated node deployments. Advocated for Satergo as separate node runner tool that auto-updates without restarting the app. Discussed JDeploy approach (auto-update capability, larger JRE footprint) and macOS signing/distribution complexities.

- **HD wallet key derivation**: [@Aberg, msg#18748–18751] clarified that Ergo nodes do not store or output seed phrases—only the derived private key. Seed phrase → private key conversion is one-way (cannot reverse); the node implements hierarchical deterministic (HD) key derivation with one master key generating multiple child addresses.

---

## Important Decisions or Announcements

- [@qx(), msg#18781–18794, 2023-09-19]: Sigmanauts mining pool **burn test phase** active; target ~2 weeks to integrate storage rent capture and open to public with UI. Test pool accepting volunteers.

- [@Austen Milbarge // GreasyCEX, msg#18878, 2023-09-20]: **GreasyCEX (GCX) Greasy Royale Mission #2** progressing: Greasy Royale Paper public version complete; 100-character NFT production 50% done; website update 50% done. Seven mission sponsors confirmed. AMA scheduled 2023-09-23 co-hosted by qx(). Full mission launch target: week after Vegas NFT conference.

- [@kushti, msg#18889–18892, 2023-09-20]: Confirmed that requested node API method has no demand yet; contributors should open a GitHub issue for inclusion in a future version.

---

## Technical Q&A Worth Preserving

- **Q** (@Flying Pig (™), msg#18736): What is the minimum ERG value a box with a token must contain?  
  **A** (@Flying Pig (™), msg#18740; @Luivatra, msg#18756): Minimum enforced by: `minValuePerByte × outputSize` nanoErgs. Testing showed 0.00001 ERG fails; 0.00004 ERG succeeds. Formula: box size in bytes × 360 nanoErgs (from Paideia state code).

- **Q** (@Flying Pig (™), msg#18722): Is a seed phrase stored in the node?  
  **A** (@Aberg, msg#18722–18751): No seed phrase storage; only the derived private key is stored. Seed phrase → private key is one-way (cannot reverse). Node implements HD (hierarchical deterministic) key derivation where one parent/master key generates multiple child addresses.

- **Q** (@qx(), msg#18579–18580): How would flash loans work on Ergo given the UTXO model?  
  **A** (implicit, msg#18593): Ethereum DeFi architecture enables flash loans via contract state mutation in a single block; Ergo's transaction-based model (three txs with intermediate outputs) has different mechanics. [@Armeanio, msg#18603] noted the financial product risk is acute when flash loans underpin a mark-to-market asset class.

---

## Links Shared

- [https://github.com/Luivatra/ergotipper-tokens/pull/19]: PR adding Gluon Token to tipper bot (mentioned by @Yulius Kristianto, msg#18852).

- **Paideia state code** (referenced @Luivatra, msg#18756): Contains box size calculation formula (bytes × 360).

---

## Unresolved Questions

- **Oracle manipulation via flash loans**: [@kushti, msg#18562] flagged risk but no consensus reached on whether Ergo's UTXO model is inherently safer. Suggested as candidate for Hash It Out discussion.

- **Node binary distribution strategy**: [@Aberg, msg#18933–18978] raised unresolved tension between ease-of-use (installable CLI binaries) and node freshness (automatic updates via Satergo-style wrapper). No decision recorded.

- **macOS DMG signing for Satergo**: [@Aberg, msg#18954–18959] noted lack of macOS for developer, subscription cost, and potential malware-loophole concerns with generic installer approach. Status unclear.

---

**Notes:**
- Week was lower-activity (74 messages across 10 participants); dominated by technical tooling discussion and mining pool logistics.
- No protocol changes or ERPs discussed.