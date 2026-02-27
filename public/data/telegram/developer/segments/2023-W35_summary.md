# Ergo Developer Chat Summary — 2023-W35

## Key Topics Discussed

- **Ergo 5.0.14 Reference Client Release**: Core protocol update released with bug fixes and improvements to the reference implementation.

- **ErgoHack VII & Ergo Summit**: October 13-15, 2023 hackathon announced with 18K SigmaUSD prize pool focused on "The Future of Finance and the Path to Adoption." Includes immediate follow-up Ergo Summit.

- **GreasyCEX Mission #2 (Greasy Royale)**: GCX fundraising initiative targeting MEXC listing, with ~200 NFTs, confirmed tokenomics, and 100% NFT reward distribution for donors. Mission #1 generated 2,464 ERG raised, 2,554 HodlERG3 burned, and significant ecosystem volume.

- **Palmyra Ecosystem Progress**: Rosen Bridge cross-chain deployment imminent for Cardano; Paideia DAO public beta weeks away; Spectrum Finance expanded to Cardano with cross-chain swap roadmap.

- **Storage Rent & Timestamp Implementation**: Discussion around validation context parity between mempool and block assembly, with storage rent collectible by anyone as side effect. Timestamp semantics considered (now() vs. last header timestamp).

- **FPGA Mining Efficiency**: Current FPGA producing 3.1 MH/s; Intel processors at ~2.0 MH/s noted as most efficient; table growth % tuning identified as safe parameter for optimization without risk.

- **ErgoScript Compiler Separation**: Sigma repository develop branch now separates ErgoScript compiler from protocol implementation, enabling lighter-weight Java applications without full sigmastate (8 MB).

- **Python Developer Tooling**: ErgPy adoption growing among novice developers; discussion of TX builder alternatives (archived JDE repository); gaps identified in box selection and UTXO discovery via ErgPy.

- **Node Database Corruption & Auto-Repair**: kushti requesting corrupted database samples for auto-repair feature in next release; no guarantee of success noted.

- **API Endpoint Issues**: Ergo Explorer TX count discrepancy (3 higher than Aneta/Cornell explorers consistently); JSON streaming endpoint parsing issues identified (objects not wrapped in array brackets or separated by commas).

- **Developer Learning Paths**: Discussion on whether formal education (ASP.NET/C# bootcamp curriculum) necessary vs. self-taught approach; consensus that language matters less than algorithms/data structures and understanding fundamentals.

## Important Decisions or Announcements

- [@kushti khushi, msg#17051, 2023-08-28]: ErgoHack VII officially announced with October 13-15 dates, 18K SigmaUSD prizes, and Ergo Summit follow-up.

- [@Austen Milbarge // GreasyCEX, msg#17185, 2023-09-06]: Greasy Royale Mission #2 confirmed for MEXC listing objective; 29-page NFT creative brief completed; ~200 individual NFTs with 100% reward distribution to donors.

- [@kushti khushi, msg#17070-17071, 2023-08-31]: Request for corrupted node database samples to implement auto-repair feature in upcoming release.

- [@Aberg Satergo dev, msg#17057-17058, 2023-08-31]: Raised concerns about API design complexity; identified issues with Scala/ProGuard minimization requiring full package exclusions.

## Technical Q&A Worth Preserving

- **Q** (@qx(), msg#17037-17039): Why does explorer.ergoplatform.com show 3 more TXs per day than Aneta BTC and Cornell explorers, which match each other?
  **A** (@qx(), msg#17039): Consistent 3-block discrepancy observed; root cause not immediately identified in conversation.

- **Q** (@Flying Pig (™), msg#17147): Need updated TX builder for Python (JDE archived, won't compile). Want simple JSON in/out for unsignedtx generation without complex code.
  **A** (@Glasgow｜WON'T DM, msg#17148): Recommended ErgPy with examples; (@qx(), msg#17197): Python file available as copy-paste for airdrop use.

- **Q** (@koukarin - Σ, msg#17154-17155): ErgPy missing boxes during distribution—shows lower balance than actual after manual sends. Script works only after manually consolidating all tokens to same address.
  **A** (implied): UTXO discovery gap in ErgPy; workaround is manual consolidation before distribution script.

- **Q** (@Luivatra, msg#17111): What will timestamp be for proposed feature?
  **A** (@kushti khushi, msg#17112-17113): Initially proposed `now()`, reconsidered to `last header's timestamp` (ultimately no change from current behavior).

- **Q** (@Luivatra, msg#17114): Storage rent TX creation implications of timestamp change?
  **A** (@Luivatra, msg#17122): This would help with making storage rent transactions.

- **Q** (@Aberg Satergo dev, msg#17337-17346): API endpoint returning JSON objects stream without array brackets or commas—needs fixing.
  **A** (@Pulsarz, msg#17344-17345): Confirmed stream format is intentional but acknowledged as annoying to parse; (@Aberg, msg#17347): Argued bugs should be fixed regardless of backwards-compatibility; (@Luivatra, msg#17349): Suggested API versioning (v2 endpoint) as solution.

- **Q** (@Gnawa Pirate, msg#17235): Is web development bootcamp (C#, ASP.NET, SQL, HTML5, CSS, JavaScript) good start for Ergo development?
  **A** (@Luivatra, msg#17241, msg#17245): Curriculum covers both frontend and backend well; language choice less important than algorithms/data structures; fundamentals transfer across languages.

## Links Shared

- [https://github.com/ergoplatform/ergo/releases/tag/v5.0.14]: Ergo 5.0.14 reference client release.

- [https://github.com/Eeysirhc/sigmabot/pull/79]: SigmaBot PR removing Hotbit exchange, adding more CEX integrations.

- [https://explorer.ergoplatform.com/]: Official Ergo Explorer (TX count discrepancy discussion).

- [https://ergo-explorer.anetabtc.io/]: Aneta BTC Ergo Explorer (baseline for comparison).

- [https://ergo.aap.cornell.edu/en/]: Cornell Ergo Explorer (baseline for comparison).

- [https://github.com/nautls/nautilus-wallet/pull/104]: Nautilus Wallet PR under review.

- [https://github.com/scalahub/jde/tree/main]: JDE TX builder (archived, compilation issues reported).

- [https://github.com/mgpai22/ergpy/blob/main/examples/example_1.py]: ErgPy Python examples for TX building.

- [https://bit.ly/45qbTVB]: ErgoHack VII registration and details.

- [https://ergohack.io/]: Official ErgoHack VII website.

- [https://ergohack.io/register/]: ErgoHack VII registration page.

- [https://github.com/pulsarz/FleetSharp]: FleetSharp C# library for Ergo development.

- [https://api.ergoplatform.com/api/v1/tokens?limit=100&offset=0&hideNfts=false]: API endpoint for token/NFT queries with JSON stream parsing issues.

- [https://github.com/ergoplatform/ergo/issues/2034]: GitHub issue for UTXO set scan feature (not yet implemented).

## Unresolved Questions

- **Node database corruption root cause**: @kushti requested samples but no resolution confirmed; auto-repair feature promised but not guaranteed to succeed.

- **ErgPy box selection / UTXO discovery gaps**: Workaround identified (manual consolidation) but underlying issue not resolved; affects distribution scripts.

- **Ergo Explorer TX count discrepancy**: Consistent 3-TX offset vs. other explorers; cause remains undiagnosed.

- **API endpoint JSON streaming format**: Debate over whether to fix (breaking change) or version (v2 endpoint); no decision recorded.

- **Storage rent collectibility & validation context**: Discussion of whether storage rent should be collectible by anyone initiated but implications not fully explored.

- **Block time speedup feasibility**: Timestamp dependency, block height contracts, and emission rate impacts discussed but no path forward agreed; testnet proposed for experimentation but needs champion to lead.