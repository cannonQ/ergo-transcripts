# Ergo Developer Chat — 2022-W27 Summary
**Period:** 2022-07-04 to 2022-07-15 | **Messages:** 62 | **Participants:** 7

---

## Key Topics Discussed

- **Testnet block parameters**: Discussion of 5-second block time testing, 720-block cooldown period, and impact on script recognition and fee mechanisms. [@kushti, msg#3838-3843, 2022-07-08]

- **Token limit bug in sigma-rust**: Maximum 255 tokens per box caused user loss of $30k. Debate over whether to fix at protocol level, wallet level, or transaction builder level. Affects browser extension wallets using sigma-rust library; Satergo and Ergo Android wallet unaffected. [@Aberg, Luivatra, msg#3946-3973, 2022-07-09]

- **BIP32 derivation flag**: Standard BIP32 derivation flag PR pending merge for months; flagged as important. [@Aberg, msg#3973, 2022-07-09]

- **Backwards compatibility philosophy**: Ergo favors soft forks and macroeconomic upgrades to maintain support for older nodes rather than hard breaks. [@Aberg, msg#3993-3997, 2022-07-09]

- **Seed phrase edge case**: Issue with problematic seed generation in wallet restoration; proposal to regenerate and compare against stored versions. [@Aberg, msg#4008, 2022-07-09]

- **Chat restructuring proposal**: Suggestion to split developer chat by core project domains (node + sigma interpreter, Explorer, sigma-rust). [@kushti, msg#4123-4126, 2022-07-12]

- **Fee market and spam protection**: Reference to spam attack from autumn 2020 involving unintentional transaction flooding; node mempool filters can raise minimum propagation fee rates to mitigate. [@kushti, Aberg, msg#4095+ context, 2022-07-08+]

---

## Important Decisions or Announcements

- [@kushti, msg#3644, 2022-07-04]: Testnet explorer is up and syncing

- [@Unknown, msg#3701, 2022-07-05]: Hackathon announced for Cardano/Ergo developers July 15th ([Build the Dip — TosiHack 2022](https://medium.com/@tosidrop/build-the-dip-tosihack-2022-b68dbc638b7c))

- [@Aberg, msg#3705, 2022-07-05]: Satergo pro tip — one-click updates with automatic checking for node runners

- [@kushti, msg#4196, 2022-07-15]: **BOUNTY ANNOUNCEMENT**: MHS_Sam offering 250 ERG for Ergo raffle bot implementation using ka-ching, with notifications for donation milestones, funding thresholds, winner announcement, and time-based alerts

---

## Technical Q&A Worth Preserving

- **Q** (@Luivatra, msg#3875): Is the 255-token limit stored in a short per EIP spec?
  **A** (@Luivatra, msg#3877): Yes, confirmed in comment

- **Q** (@Unknown, msg#3918-3919): Are there user risk solutions if 5-second blocks are deployed soon?
  **A** (implicit from thread): Community consensus needed; token limit fix prioritized at transaction builder/wallet level rather than protocol

- **Q** (@MrStahlfelge, msg#3949): Should wallet devs feel responsible for users affected by sigma-rust bugs?
  **A** (@Aberg, msg#3950): Responsibility unclear for bugs in upstream libraries (sigma-rust); Satergo developer doesn't own inner workings of boxes but implements per node source code logic

- **Q** (@MrStahlfelge, msg#3970): AppKit already has burning flag—would changes affect tools?
  **A** (@MrStahlfelge): Burning flag likely already in AppKit; minimal impact expected on downstream tools

- **Q** (@Aberg, msg#3973-3975): When will standard BIP32 derivation flag PR merge? (pending months)
  **A** (no response recorded): Flagged as blocking issue

- **Q** (@kushti, msg#4123): Do we need separate chats for different project areas?
  **A** (implicit proposal): Separate channels by core projects under discussion but not decided

- **Q** (@kushti, msg#4112-4114): What causes peer divergence in node sync? Cloud environment?
  **A** (@kushti, msg#4114): Proposes branching with fix; suggests testing in different environment

---

## Links Shared

- [Build the Dip — TosiHack 2022](https://medium.com/@tosidrop/build-the-dip-tosihack-2022-b68dbc638b7c): Cardano/Ergo hackathon announced for July 15, 2022

- [Whale Alerts on ErgoDex Example](https://t.co/a0aBo8qv9O): Working example of threshold-based trading alerts (referenced for raffle bot implementation pattern)

---

## Unresolved Questions

- **Token limit protocol change**: Is fixing the 255-token limit at protocol level viable, or must it be enforced at wallet/transaction builder level only? Security vs. backwards compatibility trade-off not fully resolved. [@Aberg, Luivatra, msg#3957-3973]

- **BIP32 standard derivation**: Why has the standard BIP32 derivation flag PR remained unmerged for months? Blocking status unclear. [@Aberg, msg#3973-3975]

- **Macroeconomic upgrade mechanism naming**: Aberg references a video on how fees can be changed via soft fork mechanism but doesn't recall the formal name. [@Aberg, msg#3994]

- **Chat structure**: No decision reached on whether to split developer chat by core project (node, Explorer, sigma-rust) to reduce expert repetition. [@kushti, msg#4123-4126]

- **Peer divergence root cause**: Investigation ongoing on why nodes on different peers diverge during sync; cloud environment suspected but not confirmed. [@kushti, msg#4112-4114]