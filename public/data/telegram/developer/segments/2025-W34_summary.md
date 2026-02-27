# Ergo Developer Chat Summary — 2025-W34 (2025-08-18 to 2025-08-24)

## Key Topics Discussed

- **Sub-blocks Development**: kushti reported p2p layer rework ~90% complete for public testnet. Implementation includes low/high bandwidth modes dependent on input block contents; headers announced with 6-byte weak transaction IDs when input blocks have ≤3 transactions. More nuanced rules under development.

- **Spectrum DEX / Ergodex UI**: Discussion of repository branches and UI clarity. Patato confirmed the correct "ergodex" branch contains the latest UI version using Node V20; confirmed migration away from old Spectrum UI.

- **ErgoScript Nested Loop Performance**: Josemi reported "Maximum call stack size exceeded" error when executing ErgoScript with double loops (1000×5 iterations). Works at 100 iterations. Unresolved whether issue is JS implementation or contract complexity ceiling.

- **Keystone Hardware Wallet Integration**: Pgr456 reported functional PR for Keystone integration against Nautilus wallet now in review by anon_br; parallel work on Keystone firmware; full integration test with physical device planned next.

- **ChainCash / Basis Reserve Refund**: Completed refund mechanism allowing Basis reserve withdrawal 14,400 blocks after offline tracker announcement; discussion of apps/UIs underway in ChainCash group.

- **Game of Prompts Contract Development**: Josemi implementing cancel, resolve, and end game contract actions; testing with Fleet SDK mock-chain; learning mock-chain tooling (noted as "really useful").

- **Ergo 6.0 and 6.1.x Releases**: kushti planning post-6.0 SigmaSDK refactoring, reviewing open issues, and releasing 6.1.x (corresponding to 6.0.1) later in week.

- **GitCircles FHE Proposal**: bro_etiket proposed fully homomorphic encryption integration; FHE GitHub issue opened for future consideration (https://github.com/GitCircles/GitCircles-Roadmap/issues/1).

- **Cyberverse V2 Crates System**: Pixel reported live Crates V2 NFT earning/opening system with CyberCitizen holders, CYPX token integration, key shards, crafting, and tiered rarity drops (common–legendary).

- **Mock-chain Documentation Gap**: kushti identified lack of formal mock-chain documentation; arobsn confirmed only code examples exist and flagged as high-priority documentation need.

## Important Decisions or Announcements

- [@kushti, msg#35575, 2025-08-21]: Sub-blocks p2p rework 90%+ complete in initial form, changes pushed to branch; public testnet testing via CPU mining to begin Friday.

- [@kushti, msg#35581, 2025-08-22]: Sub-blocks devnet relaunched with updated seed node (http://213.239.193.208:9058/info).

- [@Patato, msg#35486, 2025-08-18]: Corrected Spectrum DEX installation script; switched to "ergodex" branch for latest UI (Node V20); removed non-working single-line installation instruction.

- [@kushti, msg#35520, 2025-08-19]: Weekly Ergo Developers chat scheduled Wednesday, Aug 20, 1PM UTC; call for feedback on financial contracts and discussion of 6.0 protocol soft-fork, sub-blocks, sidechains, and L2 research.

- [@kushti, msg#35544, 2025-08-20]: Published compilation of contribution opportunities; Rust developers needed across multiple projects (https://www.ergoforum.org/t/call-for-action-building-peer-to-peer-economies-and-free-banking-on-ergo/5221).

- [@Pgr456, msg#35556, 2025-08-20]: Keystone hardware wallet integration PR with Nautilus opened and in review; firmware work in parallel; full device integration test next.

## Technical Q&A Worth Preserving

- **Q** (@Josemi, msg#35508): "Maximum call stack size exceeded" error when executing ErgoScript with nested double loops (1000×5 iterations). Is this a JS implementation issue or contract complexity ceiling?
  **A** (@anon_br, msg#35540): Asked for clarification—is this running on mock-chain? (Josemi confirmed mock-chain at msg#35545; no resolution provided in segment.)

- **Q** (@Pgr456, msg#35588): Is it possible to access current chain parameters like minValuePerByte in ErgoScript to calculate size of Col[byte]?
  **A** (@kushti, msg#35593): No direct access, but trustless oracle possible. Every 1024 blocks (voting epoch), parameters written to block extension section; contract can update parameters via Merkle proof validation against such block headers.

- **Q** (@Josemi, msg#35549): How is mock-chain testing documented?
  **A** (@arobsn, msg#35555): No formal documentation exists; only code examples available. Flagged as high-priority documentation need.

- **Q** (@Josemi, msg#35602): How to add token logo to Nautilus wallet—from mint box registry or manual source code addition?
  **A** (@Patato, msg#35605; @Unknown, msg#35607): Add .png file to `/public/icons/assets` directory and map token ID in `src/mappers/assetIconMap.ts`.

- **Q** (@Pgr456, msg#35590): What ErgoScript functions and language features are available in new version?
  **A** (@kushti, msg#35594): Directed to EIP-100 PR documentation (https://github.com/ergoplatform/eips/pull/100/files).

- **Q** (@kushti, msg#35575): Can anyone stress-test testnet with transaction spam when needed?
  **A** (@Luivatra, msg#35576): Proposed creating script to generate one transaction per second, runnable on multiple nodes as stress test.

- **Q** (@Aco Šmrkas, msg#35582): Is there node documentation for sub-blocks?
  **A** (@kushti, msg#35592): Four new API methods added to `/blocks` section:
    - `GET /blocks/bestInputBlock` — returns best ordering and input block IDs
    - `GET /blocks/bestInputChain` — returns array of best input block chain IDs
    - `GET /blocks/{id}/inputBlockTransactions` — returns input block transactions
    - `GET /blocks/{id}/inputBlockTransactionIds` — returns input block transaction IDs

## Links Shared

- [https://github.com/moon-miner/feeless-Ergodex-run-script]: Spectrum DEX installation script (one-line install command did not work for Josemi).

- [https://www.ergodex.io/ergo/swap]: Spectrum DEX UI (current production UI; repo status unclear).

- [https://github.com/GitCircles/GitCircles-Roadmap/]: GitCircles project roadmap.

- [https://github.com/GitCircles/GitCircles-Roadmap/issues/1]: FHE (Fully Homomorphic Encryption) proposal for GitCircles.

- [https://www.ergoforum.org/t/call-for-action-building-peer-to-peer-economies-and-free-banking-on-ergo/5221]: Call for contributions—compilation of R&D efforts seeking Rust developers.

- [https://discord.com/channels/668903786361651200/669989266478202917/1406255003999539200]: Mock-chain example usage (from Discord message archive).

- [https://github.com/nautls/nautilus-wallet/tree/master/public/icons/assets]: Nautilus wallet token icon directory.

- [https://github.com/nautls/nautilus-wallet/blob/master/src%2Fmappers%2FassetIconMap.ts]: Nautilus wallet asset icon mapping file.

- [https://github.com/ergoplatform/eips/pull/100/files]: EIP-100 PR with documentation on new ErgoScript functions/features.

- [http://213.239.193.208:9058/info]: Sub-blocks devnet seed node (relaunched 2025-08-22).

- [https://724fad5f74bb.ngrok-free.app/info]: Patato's sub-blocks devnet node (api key: "hello", wallet password: "hello").

- [https://x.com/chepurnoy/status/1959726009353187736]: kushti X post (link shared 2025-08-24; content not included in segment).

## Unresolved Questions

- **ErgoScript nested loop stack overflow**: Root cause unclear—whether JS AppKit implementation limitation or genuine contract complexity ceiling. Requires deeper debugging with @anon_br.

- **Spectrum DEX repository public status**: Josemi asked if current production UI repo is public; Patato could not locate it—status TBD.

- **Mock-chain documentation**: Identified as urgent need; no timeline given for formal docs.

- **Sub-blocks API completeness**: kushti requested feedback on whether four new `/blocks` API methods are sufficient; open for additional feature requests.

- **Input block transaction propagation rules**: kushti noted "more nuanced rules" for low/high bandwidth modes under development; specifics not finalized.

- **Keystone/Nautilus full integration test**: Pgr456 flagged as "next up" but no completion timeline provided.