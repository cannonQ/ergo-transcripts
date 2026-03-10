---
title: "Ergo Developer Chat — 2025-W05"
date_start: "2025-01-27"
date_end: "2025-02-02"
type: telegram_weekly
channel: developer
week: "2025-W05"
source: telegram
message_count: 89
categories: [technical, defi, wallet, mining, nft, ecosystem, community]
key_terms: [6.0 protocol, testnet activation, voting, soft-fork, input blocks, ordering, mempool chaining, subblocks, DexyGold, LP swap, liquidity tokens, ergfi, stablecoin, Fleet SDK, ZigZag encoding, SInt type, sigmastate-js, Nautilus, TransactionSign component, Drawer]
---
# Ergo Developer Chat Summary — 2025-W05

## Key Topics Discussed

- **6.0 Protocol Activation & Input/Ordering Blocks (EIP)**: kushti reported transactions packed into input blocks with ordering structures, API endpoints added (`/blocks/bestInputBlock`, `/blocks/bestInputChain`), and Sigma issues fixed. Ready for public testnet activation.

- **Dexy Gold Integration & UX Design**: c8 demonstrated three-part UI concept (swap interface, mempool/history, UTXO stats) emphasizing radical simplification—treating all interactions as unified swap interfaces regardless of underlying bank/pool mechanics. LP token actions progressing (1 of 5 library-level actions complete).

- **Fleet SDK & Nautilus Wallet Improvements**: v0.8.2 released with fixed ZigZag encoding for SInt type, fuzzing tests, and sigmastate-js serializer comparison. Nautilus underwent major rework of TransactionSign component, migrated from Dialog to Drawer for mobile UX, with goal of using Capacitor for mobile port.

- **ChainCash L2 Research**: Refund-related registers/actions removed in favor of note redemption; note registration contract being added; L2 options under investigation.

- **Keystone Hardware Wallet Integration**: Firmware mostly complete, Rust SDK and JavaScript Base SDK awaiting Keystone team review. Remaining: Web SDK, Web USB SDK, integration into Nautilus and Satergo.

- **SigmaUSD Oracle Pool Updates**: Testnet oracle pool updated to V1 with contract allowing v2 migration. Mainnet update planned with continued discussions on limits.

- **Satergo Wallet**: Format update complete; pending Android signer app APK release and native binaries for hidapi (Ledger support).

- **Minotaur 2.4.0 Release**: Token detail display on signing pages, multiple token burning support, improved transaction box display with comma-separated values, animated QR code scanning.

- **Mining Pool & Token Distribution**: Sigmanauts pool deployed MRP Token Flight (Flame Shards to miners holding Ignifox), receiving 2M rsDIS from Disco Solaris team, demurrage software causing disk space/downtime issues.

- **Celaut Project & Bene**: Service payment system ideas and classification features in progress; Bene UI fixes finalizing for v1 before v2 improvements.

---

## Important Decisions or Announcements

- [@kushti0978, msg#32758-32763, 2025-01-29]: **Sigma issues all fixed—proceed with public testnet 6.0 activation.** Voting/activation will take ~4 days on testnet settings.

- [@c8e4d2a, msg#32781, 2025-01-29]: **"This year we go for #1 L1 UX: add mempool chaining, support sub-blocks or shut your website down."** Emphasis on not frustrating users with UX limitations.

- [@vorujack, msg#32780, 2025-01-29]: **Minotaur 2.4.0 released** with token detail display, multiple token burning, improved transaction display.

- [@Pgr456, msg#32840, 2025-02-01]: **SigmaSpace/Keystone integration: "2 Rosen weeks"** (ETA for next phase).

- [@c8e4d2a, msg#32807-32822, 2025-01-29]: **Dexy UI philosophy finalized—unified swap interface** treating pools and banks equivalently under the hood; radically simplified to "tokens in, exact tokens out, swap button."

---

## Technical Q&A Worth Preserving

- **Q** (@c8e4d2a, msg#32778): If all LP tokens land in the pool during mint, the pool stops working forever—`val supplyLpIn = $initialLp - lpReservesIn._2` prevents further minting. Is this a bug?
  
  **A** (@Michael, msg#32782-32783): False—bank can remove Dexy from LP to restore peg via extraction transactions.

- **Q** (@c8e4d2a, msg#32790): How does Dexy Gold work without bots setting R7 in tracking boxes? Should this be headless or p2p with user incentives?
  
  **A** (@kushti0978, msg#32805): I have such bots, and @code_for_uss likely does too. (@c8e4d2a, msg#32791): Needs more development to determine if all interactions can work without bots.

- **Q** (@c8e4d2a, msg#32812): Why doesn't ErgoPayloadExpose xpub/(list of addresses with at least one UTXO) by default?
  
  **A**: Unresolved—no response recorded.

- **Q** (@c8e4d2a, msg#32820): Does the Dexy UI just have a swap interface with the app working with bank or pool under the hood?
  
  **A** (@c8e4d2a, msg#32821-32822): **Yes—in UTXO everything is a simple swap interface if presented properly.**

- **Q** (@HQΣr, msg#32831): ergo.watch had custom endpoints (balance by timestamp, tokenid filtering). Are these available in the full node? Requesting `/transactions?tokenid=xx&timestamp=` sorting.
  
  **A** (@kushti khushi, msg#32832): Would require storing lots of historical data. (@Luivatra, msg#32834): Not good design for node codebase—that's explorer DB responsibility. (@Pulsarz, msg#32837): Run the ergo.watch indexer instead (though may be explorer-dependent now).

- **Q** (@mohsen6070, msg#32841): When signing TX that doesn't need wallet key, getting "Unable to find the corresponding secret for input 2." Calling `prover.signTransaction(tx, [])`.
  
  **A** (@mgpai, msg#32846): Provided example code showing proper Fleet SDK transaction building with `ErgoHDKey.fromMnemonic()` and passing rootKey array to `prover.signTransaction()`.

---

## Links Shared

- [https://github.com/ChainCashLabs/chaincash/pull/10]: ChainCash PR removing refund-related registers/actions, replacing with note redemption.

- [https://github.com/KeystoneHQ/keystone-sdk-rust/pull/105]: Keystone Rust SDK awaiting review.

- [https://github.com/KeystoneHQ/keystone-sdk-base/pull/185]: Keystone JavaScript Base SDK awaiting review.

- [https://github.com/kushti/dexy-stable/blob/7199cde0f4accafde743d411ee62a468b64d31bc/contracts/lp/pool/mint.es#L27]: Dexy LP mint contract showing liquidity token supply calculation.

- [https://github.com/The-Last-Byte-Bar/Token-Flight]: MRP Token Flight codebase (containerized automated airdrops).

- [https://github.com/The-Last-Byte-Bar/Nurse-Shark-Bot]: Nurse Shark monitoring bot for pool transactions and LLM-integrated wallet activity queries.

- [https://github.com/The-Last-Byte-Bar/Thresher/tree/main]: RL Agent DEX trading bot project.

- [https://github.com/minotaur-ergo/minotaur-wallet/releases/tag/v2.4.0]: Minotaur 2.4.0 release notes.

- [https://github.com/ErgoDevs/Ergo-Bounties/tree/main]: Bounties updated (Keystone Wallet Integration: 3,000 ERG; Fleet SDK Tutorials: 775 SigmaUSD; total pool: 28,074.21 ERG as of Jan 30).

- [https://github.com/ergoplatform/ergo-node-interface-rust/pull/23]: Rust node interface PR approved by kushti, awaiting review and release from dusek_.

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/1036]: Sigma protocol PR awaiting review.

---

## Unresolved Questions

- **ErgoPayload xpub exposure**: Why doesn't ErgoPayload expose xpub or address lists with UTXOs by default? (msg#32812)

- **Dexy bot requirement**: Can Dexy Gold function without bots setting R7 in tracking boxes, or is headless/p2p with user incentives necessary? Needs further development. (msg#32790-32791)

- **Historical balance API**: How to efficiently expose historical balances and token snapshots? Deferred as explorer/indexer responsibility, not node. (msg#32831-32834)

- **6.0 testnet activation timeline**: Voting will take ~4 days, but when does deployment to public testnet begin? Needs coordinator identification. (msg#32753)

- **Dexy bank/pool dynamic**: Under what conditions does the bank remove Dexy from LP pools to restore peg? Mechanism not fully detailed. (msg#32782-32783)