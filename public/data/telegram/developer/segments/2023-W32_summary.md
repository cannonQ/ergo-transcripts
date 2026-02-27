# Ergo Developer Chat Summary — 2023-W32
**Period:** 2023-08-07 to 2023-08-20  
**Messages reviewed:** 108  
**Participants:** 17

---

## Key Topics Discussed

- **P2P Protocol & Magic Number Handling**: Discussion of proper stream closure and error handling when receiving invalid magic numbers in Ergo's P2P layer. Consensus that connections should be closed on invalid magic bytes, similar to node behavior.

- **Ergonnection P2P Library Development**: @Aberg released improved versions with better disconnection handling, fixed testnet magic constant, and preparation for Maven Central release.

- **ErgoScript Type System**: @kushti demonstrated auto-upcast behavior in ErgoScript, showing how `toBigInt` operations on `Long` values are automatically promoted to `SBigInt`.

- **Fee Market & Spam Protection**: Detailed discussion of mempool behavior during spam attacks, fee estimation APIs, and configurable minimum propagation fee rates to prevent low-fee transaction flooding.

- **UX Debate on Fee Handling**: Spanish community requested fees be deducted from sent amount (e.g., send 100 ERG minus fees = 100 received) rather than separate fee. Developers rejected this as poor UX and impractical for variable fees.

- **P2P Library Stream Handling**: Investigation into empty magic bytes being received from streams, determined to result from stream closure or EOF conditions, not valid protocol violations.

- **Testnet Availability**: @kushti clarified that Painet is currently the only testnet available for testing.

---

## Important Decisions or Announcements

- [@Aberg Satergo dev, msg#16560, 2023-08-16]: Ergonnection P2P library updated with improved magic byte handling and stream closure handling; testing requested from @Luivatra.

- [@Aberg Satergo dev, msg#16575, 2023-08-16]: Ergonnection P2P library released with new version handling disconnections better, fixed testnet magic constant, Maven Central release approaching.

- [@kushti khushi, msg#16496, 2023-08-14]: Committed to reviewing long-pending explorer-frontend PR #194 that had been waiting 3 weeks.

- [@Yulius Kristianto, msg#16610-16611, 2023-08-18]: Special Elite Mission completed on ErgoTipper NFT support, enabling P2P NFT trading via tipper bots.

---

## Technical Q&A Worth Preserving

**Q** (@Aberg Satergo dev, msg#16487): When a wrong magic number is received in P2P communication, should the connection be closed? Currently throws exception and leaves stream unreadable.  
**A** (@kushti khushi, msg#16490): Yes, close the connection. The node bans the peer for that behavior.

**Q** (@Aberg Satergo dev, msg#16491): Is there any valid scenario where a wrong magic number could be received?  
**A** (@kushti khushi, msg#16493): Possibly from a testnet node if connecting to testnet; normally should not occur.

**Q** (@Aberg Satergo dev, msg#16503-16507): How can the beginning of a message (magic number) be empty?  
**A** (@Aberg Satergo dev, msg#16507): Stream closure or EOF reached. The `readNBytes()` method returns a smaller array on EOF without throwing exception. First 4 bytes being empty means no message at all.

**Q** (@Luivatra, msg#16536): How to chain across multiple mempools if part of the chain is not present in the same mempool?  
**A** (@qx(), msg#16538): Acknowledged as valid constraint; no detailed solution provided in this segment.

**Q** (@MavΣrickBg, msg#16517): Is ergo-vanitygen script secure and how does it search for specific address patterns?  
**A** (@kushti khushi, msg#16525): Answered in developer support channel (details not included in this segment).

**Q** (@zhang zee, msg#16453): Is there an equation for calculating liquidity tokens received when depositing x and y tokens using SPF protocol?  
*Unresolved in this segment.*

**Q** (@HQΣr, msg#16645): Spanish community requests fees be deducted from amount sent rather than added separately.  
**A** (@Pulsarz, @qx()): Rejected as terrible UX. If sending 100 ERG, receiver must receive 100 ERG. Variable fees make this impractical.

---

## Links Shared

- [GitHub PR #174 - Ergo Wallet App](https://github.com/ergoplatform/ergo-wallet-app/pull/174): Wallet feature implementation, forwarded to ErgoWalletApp Telegram instance.

- [GitHub PR #194 - Explorer Frontend](https://github.com/ergoplatform/explorer-frontend/pull/194): Long-pending frontend PR awaiting team review (3+ weeks pending as of 2023-08-14).

- [GitHub PR #68 - SigmaUSD](https://github.com/anon-real/sigma-usd/pull/68): SigmaUSD contract update requiring review.

- [GitHub PR #95 - EIPs](https://github.com/ergoplatform/eips/pull/95): Ergo Improvement Proposal requesting review from @ergomorphic and @alex_slesarenko.

- [Ergo Vanitygen v1.0](https://github.com/jellymlg/ergo-vanitygen/releases/tag/v1.0): Address vanity generator tool; security review requested.

- [YouTube: HODLcoin Ergo Explanation](https://www.youtube.com/watch?v=D7L7h7EOIow): Tutorial explaining HODLcoin implementation on Ergo.

- [Ergo Documentation - Android Development](https://docs.ergoplatform.com/dev/stack/android/): Gradle tutorial and mobile app resources.

- [TabbyLabs Medium - TabbyPOS Weekly Update](https://tabbylab.medium.com/tabbypos-weekly-update-12-jul-2023-e6789dd049ff): Weekly development progress update.

- [GitHub PR - Comet Wallet Indonesia Translation](https://github.com/TypChaos/Comet-wallet/pull/1): Localization effort for Indonesian-speaking users.

- [GitHub PR #18 - ErgoTipper Tokens](https://github.com/Luivatra/ergotipper-tokens/pull/18): NFT trading support via tipper bots.

- [Telegram - Ergo Dev Support](https://t.me/ergodevsupport): Official developer support channel for build and compilation questions.

- [Telegram - Ergo Wallet App](https://t.me/ErgoWalletApp): Official Ergo Wallet App support channel.

---

## Unresolved Questions

- **SPF Protocol Liquidity Calculation** (@zhang zee, msg#16453): Formula for calculating liquidity tokens from x and y deposit amounts using SPF protocol—not addressed in segment.

- **Stream Magic Byte Emptiness Root Cause** (@Luivatra, msg#16500, 16509): @Luivatra reports occasionally receiving empty magic bytes from own node; root cause not conclusively identified (likely EOF/stream closure, but context-specific scenario unclear).

- **Explorer Node Endpoint Errors** (@Aco Šmrkas, msg#16569): Unspecified error occurring occasionally on both official and community nodes—details not provided in segment.

- **Fee Estimation API Usage** (@kushti khushi, msg#16348): Fee estimation API exists but is not tested and not used by applications; status of testing and adoption unclear.