# Ergo Developer Chat Summary — 2021-W52
**Period:** 2021-12-29 to 2022-01-09  
**Message Count:** 74  
**Active Participants:** 14

---

## Key Topics Discussed

- **Token Icon Mapping & Storage**: Discussion of where to source or store token icons for wallet implementations. Consensus emerged that on-chain storage is inefficient; IPFS or centralized servers with on-chain hashes are preferable. Aberg created a custom solution mapping token IDs to 36×36 SVG icons.

- **ErgoMixer Fee Mechanism & Privacy**: kushti explained that ErgoMixer users purchase fee tokens to participate in mixing, which are then paid to a fee emission contract. This design avoids privacy leaks that would occur with direct ERG mining fee payment. Fee tokens are sold above mining fee cost, generating revenue for mixer developers.

- **Liquidity & UX for ErgoMixer**: Community members debated the "Waterspout" proposal—a cross-dApp liquidity pool that would dynamically allocate LP between Spectrum DEX and ErgoMixer to improve mixer utilization and user experience. Consensus noted that permanent liquidity presence and improved UX are more critical than dynamic rebalancing mechanisms at this stage.

- **Node Syncing & Reference Client Updates**: kushti released version 4.0.20 as a candidate build with both UTXO and digest mode sync testing. Earlier 3.01 release contained a bug, prompting users to hold off until 3.1.1 or 4.0.20.

- **Mnemonic Password Terminology**: Aberg raised confusion around the term "mnemonic password" in wallet implementations and proposed alternative naming: "mnemonic salt," "shield," "lock," or "mask." kushti acknowledged the confusion but no final decision was recorded.

---

## Important Decisions or Announcements

- [@kushti khushi, msg#178, 2022-01-07]: **Version 4.0.20 released** with improved sync testing across UTXO and digest modes.

- [@Glasgow｜WON'T DM, msg#154, 2022-01-05]: **ErgoHack III Call for Proposals** — applications open until January 31, 2022.

- [@Aberg Satergo dev, msg#142–143, 2022-01-03]: Created public token icon resource at https://github.com/Satergo/Resources/tree/master/token-icons-36x36 with filename-as-ID mapping system, eliminating need for separate map files.

---

## Technical Q&A Worth Preserving

- **Q** (@Aberg Satergo dev, msg#116–118): Is there a public mapping of token icons to token addresses? Are icons stored on-chain?  
  **A** (@kushti khushi, msg#120): Most tokens have no icons even at minting time. Icons are not stored on-chain. (@MrStahlfelge, msg#123–125): An EIP proposal exists for preview pic metadata; images could be stored in payload or via IPFS/centralized servers with on-chain hashes.

- **Q** (@Aberg Satergo dev, msg#126): Where can unmapped token images be obtained right now for direct embedding?  
  **A** (@Capt. Nemo, msg#127): Nautilus Wallet asset logos: https://github.com/capt-nemo429/nautilus-wallet/blob/master/src/mappers/assetLogoMapper.ts and https://github.com/capt-nemo429/nautilus-wallet/tree/master/public/icons/assets. Also Ergo-dex frontend: https://github.com/ergolabs/ergo-dex-frontend/tree/master/src/assets/icons/tokens with better sizing at https://github.com/ergolabs/ergo-dex-frontend/blob/master/src/mappers/varifiedTokensMapper.ts.

- **Q** (@Unknown, msg#150): Is Radix Scrypto something entirely different from Ergo's Scrypto?  
  **A** (@Glasgow｜WON'T DM, msg#152): Yes; Scrypto is a cryptographic toolkit extracted from Scorex that Ergo uses. Radix reused the name.

- **Q** (@Unknown, msg#157–162): Waterspout proposal—can a liquidity aggregator dynamically shift LP from Spectrum DEX to ErgoMixer based on mixing demand?  
  **A** (@Unknown, msg#159–163): The liquidity rebalancing concept is sound, but permanent liquidity presence is more critical than dynamic shifts. Improved UX is the higher priority. Infrastructure should precede demand. Nautilus team contact recommended for mixer integration feedback.

- **Q** (@Unknown, msg#165): How does ErgoMixer fee structure preserve privacy?  
  **A** (@kushti khushi, msg#165–166): Mixer users buy fee tokens (not ERG directly) to participate. Fee tokens are paid to a fee emission contract that releases ERG for mining fees. This avoids privacy leaks from straightforward ERG fee payment. See forum discussion: https://www.ergoforum.org/t/paying-fee-in-ergomix-in-primary-tokens/73.

- **Q** (@Aberg Satergo dev, msg#179): Should "mnemonic password" be renamed for clarity (e.g., "mnemonic salt," "shield," "lock," "mask")?  
  **A** (@kushti khushi, msg#173): Acknowledged as confusing but no decision recorded.

---

## Links Shared

- [https://github.com/capt-nemo429/nautilus-wallet/blob/master/src/mappers/assetLogoMapper.ts]: Nautilus Wallet asset logo mapper
- [https://github.com/capt-nemo429/nautilus-wallet/tree/master/public/icons/assets]: Nautilus Wallet icon assets directory
- [https://github.com/ergolabs/ergo-dex-frontend/tree/master/src/assets/icons/tokens]: Spectrum DEX token icon assets
- [https://github.com/ergolabs/ergo-dex-frontend/blob/master/src/mappers/varifiedTokensMapper.ts]: Spectrum DEX verified tokens mapper
- [https://github.com/Satergo/Resources/tree/master/token-icons-36x36]: Aberg's custom token icons (36×36 SVG)
- [https://www.ergoforum.org/t/paying-fee-in-ergomix-in-primary-tokens/73]: Forum discussion on ErgoMixer fee token payment structure
- [https://twitter.com/ergomergoadargo/status/1478340725247033347]: Ergo Merge Mining announcement (shared by Jennie D)
- [https://www.reddit.com/r/ergonauts/comments/rwldsv/how_can_an_it_services_business_help_out_the/]: Reddit discussion on IT services contribution to Ergo ecosystem

---

## Unresolved Questions

- **Mnemonic Password Terminology** (@Aberg Satergo dev, msg#179, msg#203): Proposed alternatives ("salt," "shield," "lock," "mask") but no final naming decision was reached.

- **Token Icon Storage Standard**: While multiple sources were identified (Nautilus, Spectrum DEX, custom mappings), no consensus on a unified, protocol-level standard for token icon metadata emerged. EIP proposal mentioned but not formally tracked.

- **ErgoMixer UX Roadmap**: Waterspout and embedded mixer concepts discussed but timing and implementation owner remain undetermined.

---

## Notes

- **Low Development Activity**: This week contained primarily infrastructure/tooling discussion and ErgoHack III promotion rather than protocol-level development decisions.
- **ErgoTipperBot Testing**: Luivatra tested a new tipping bot with the "thisguyfucks" test token; wallet generation occasionally failed but was resolved by testing phase end.
- **Node Sync Focus**: kushti's primary focus was testing version 4.0.20 across multiple sync modes in preparation for stable release.