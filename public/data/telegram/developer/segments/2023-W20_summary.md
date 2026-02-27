# Ergo Developer Chat Summary — 2023-W20
**Period:** 2023-05-15 to 2023-05-28  
**Messages analyzed:** 83  
**Unique participants:** 13

---

## Key Topics Discussed

- **Game development on Ergo:** Unknown user exploring NFT-based game mechanics (guns, bombs, gang members, maps as NFTs) with ErgoScript and asking about appropriate game engine choices. No technical resolution reached.

- **Wallet address formats & p2s addresses:** Glasgow clarified Pay-to-Script (p2s) address structures with documentation link; HQΣr asked about address validation updates.

- **Node API and blockchain indexing:** Aberg noted version 5.0.11 would introduce the blockchain index API; explored limitations of built-in node wallet functionality.

- **Smart contract proxies for transaction fees:** kii explained multisig and proxy box patterns for third-party fee management in transactions.

- **ErgoNames gift integration:** HQΣr proposed ability to gift ergo names by address input.

- **DuckPools development:** Partial repayments, liquidation fixes, and proxy contract issues resolved; all core contracts complete and ready for security audit.

- **ExLE (Nautilus wallet support):** Backend route for Nautilus wallet integration completed; UI work underway before main branch merge.

- **Erg Explorer (community alternative):** Aco Šmrkas announced public repo with transaction view, responsive mobile design, address/transaction search dropdown, and htaccess URL rewrite parity with official explorer.

- **Automated faucet/airdrop tooling:** User seeking automated presale/bowl distribution mechanism similar to Hosky or Comet; Pulsarzz building solution.

---

## Important Decisions or Announcements

- [@Aberg Satergo dev, msg#13753, 2023-05-21]: Version 5.0.11 identified as target release for blockchain index API enablement.

- [@Unknown (DuckPools), msg#13828, 2023-05-24]: All core smart contracts complete and functional; moving to extensive testing, security audit, treasury, and voting contracts. Private testing details to follow start of next week.

- [@Unknown (ExLE), msg#13830, 2023-05-24]: Nautilus wallet backend route live; merging to main branch after UI work completion.

- [@Aco Šmrkas, msg#13834, 2023-05-24]: Erg Explorer public repository launched with transaction views, mobile responsiveness, and URL parity with official explorer.

---

## Technical Q&A Worth Preserving

- **Q** (@Unknown, msg#13590): How to authenticate NFTs for in-game use—mark/convert NFTs to PNGs or authenticate via dApp payment?  
  **A** (@Unknown, msg#13591): Propose payment in custom token on dApp to mint playable NFT variant.

- **Q** (@Aberg Satergo dev, msg#13655, 2023-05-18): Has the issue with JSON string request bodies been fixed?  
  **A** (No response recorded)

- **Q** (@kii, msg#13736, 2023-05-21): How to handle third-party transaction fee signing?  
  **A** (@kii, msg#13736): Two patterns: (1) multisig where third party signs alongside user; (2) proxy box containing tx fee, restricting execution to contracts signed by authorized user—"like pre-tx fee."

- **Q** (@Glasgow｜WON'T DM, msg#13857, 2023-05-25): Pay-to-Script address implementation examples?  
  **A** (References provided): https://wallet.plutomonkey.com/p2s/ and Scala example in scastie.

- **Q** (@Unknown, msg#13876, 2023-05-26): How to automate faucet/presale distribution like Hosky doggy bowl or Comet?  
  **A** (@Glasgow｜WON'T DM, msg#13872): Shared ergo-faucet GitHub tool; Pulsarzz reportedly building custom solution.

---

## Links Shared

- [https://docs.ergoplatform.com/dev/wallet/address/](https://docs.ergoplatform.com/dev/wallet/address/): Ergo wallet address documentation (referenced by Glasgow for p2s format).

- [https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/interpreter/shared/src/main/scala/org/ergoplatform/ErgoAddress.scala](https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/interpreter/shared/src/main/scala/org/ergoplatform/ErgoAddress.scala): Sigma state interpreter—ErgoAddress implementation source.

- [https://github.com/Satergo/Satergo/blob/master/src/main/java/com/satergo/ergo/ErgoInterface.java#L67](https://github.com/Satergo/Satergo/blob/master/src/main/java/com/satergo/ergo/ErgoInterface.java#L67): Satergo wallet reference implementation for wallet interface patterns.

- [https://github.com/ergoplatform/ergo/pull/1859](https://github.com/ergoplatform/ergo/pull/1859): Pull request related to blockchain indexing API (referenced by Glasgow).

- [https://github.com/AcoSmrkas/ErgExplorer](https://github.com/AcoSmrkas/ErgExplorer): Erg Explorer community project—public repository.

- [https://ergexplorer.com](https://ergexplorer.com): Erg Explorer live instance with transaction/address search and QR code views.

- [https://wallet.plutomonkey.com/p2s/](https://wallet.plutomonkey.com/p2s/): Pay-to-Script address tool.

- [https://scastie.scala-lang.org/FzcCv7pzTb2lQAamWsv1MQ](https://scastie.scala-lang.org/FzcCv7pzTb2lQAamWsv1MQ): Scala p2s example (referenced by Glasgow).

- [https://github.com/zargarzadehm/ergo-faucet#how-to-add-any-assets-to-faucet](https://github.com/zargarzadehm/ergo-faucet#how-to-add-any-assets-to-faucet): Ergo faucet tool—asset addition guide.

- [https://t.me/spectrum_labs_community](https://t.me/spectrum_labs_community): Spectrum Labs Telegram community (directed for DEX/testnet discussions).

---

## Unresolved Questions

- **Game engine selection for Ergo NFT game:** Unknown user asked whether to use Flash, HTML, or other engines for game built on Ergo—no clear recommendation emerged. Contacted developers but no follow-up recorded.

- **JSON string request body issue:** Aberg asked whether a specific JSON request body handling issue had been fixed; no response documented.

- **ErgoNames gift feature feasibility:** HQΣr proposed "gift a ergonames" functionality but no technical discussion or commitment recorded.

- **Testnet testing guidance:** HQΣr requested a guide on testnet testing methodology (msg#13894, 2023-05-27)—directed to Spectrum channel with no local resolution.

---

## Notable Context

- **Satergo wallet:** Aberg (primary contributor) provided reference implementations and noted the built-in node wallet is "quite useless" for production use (msg#13768).
- **Development velocity:** DuckPools and ExLE projects both advanced significantly; Erg Explorer launched as community alternative to official explorer with URL parity.
- **Community tooling growth:** Multiple independently developed wallet/explorer/faucet tools gaining traction; integration work (Nautilus, fee estimation) ongoing.