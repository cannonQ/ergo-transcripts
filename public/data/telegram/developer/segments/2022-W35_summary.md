# Ergo Developer Chat Summary — 2022-W35

## Key Topics Discussed

- **Testnet Node Issues**: Multiple users experienced connectivity and synchronization problems with Ergo testnet nodes (v4.0.41), including peer connection failures and blockchain download stalling. Resolution required upgrading to prerelease v5.0.0.

- **Contract Design for Auctions**: Discussion on whether auction/option contracts should support bidding mechanisms. EIP-31 already exists for bid contracts; current design follows accept/reject rather than offer-counter-offer patterns.

- **Testnet Infrastructure Stability**: The 5.0.0 testnet became unstable due to breaking changes during EIP-27 rollout, with consideration given to either creating a new testnet with different parameters or adopting the community-run "bloknet" as official testnet.

- **Block Time Parameter Tuning**: Kushti raised whether the testnet should switch to longer block times (30 seconds instead of 5 seconds) to improve stability and mining reward predictability.

## Important Decisions or Announcements

- [@kushti khushi, msg#6057, 2022-09-02]: Ergo protocol reference client **v4.0.42 released** — https://github.com/ergoplatform/ergo/releases/tag/v4.0.42

- [@Aberg Satergo dev, msg#6021–6022, 2022-08-31]: Fixed Ergonodes dashboard charts (landscape mobile display) and updated top 10 node table to handle nodes with unavailable country data.

- [@MrStahlfelge | Won't DM, msg#6089, 2022-09-03]: **iOS wallet published by Palmyra** (formerly referred to as "zengate")

- [@Aberg Satergo dev, msg#6043 & msg#6047, 2022-09-02]: Official guidance that testnet requires **v5.0.0 prerelease**, not v4.0.41.

- [@kushti khushi, msg#6197–msg#6211, 2022-09-04]: Decision framework on testnet parameters—considering whether to adopt bloknet as "official" testnet or create new testnet instance; 5.0.0 testnet became "mess" due to EIP-27 breaking changes.

## Technical Q&A Worth Preserving

- **Q** (@Odiseus Me, msg#5931): Would it be possible to add an option in the contract for a potential buyer to offer a price and for the seller to accept?
  
  **A** (@MrStahlfelge | Won't DM, msg#5932): No, that would be a bid contract and **EIP-31 already exists for that**. Current design doesn't support offer-counter-offer; follow EIP-31 specification instead.

---

- **Q** (@Odiseus Me, msg#5937): What would one do if one wants to offer at price X or best offer above Y?
  
  **A** (implicit from EIP-31 reference): Not directly addressed, but directed to EIP-31 bid contract specification.

---

- **Q** (@zhang zee, msg#6036–msg#6040): Testnet node failing to connect to peers (Connection refused on port 9020), though ping succeeds. Using v4.0.41.
  
  **A** (@Aberg Satergo dev, msg#6043): You need **prerelease v5.0.0 for testnet**, not v4.0.41.

---

- **Q** (@zhang zee, msg#6055): Why does the node still connect to port 9020 after changing the peers port to 9021?
  
  **A** (@zhang zee, msg#6056, self-resolved): User determined it was misconfiguration on their end.

---

- **Q** (@zhang zee, msg#6107): How can I use Nautilus to connect to testnet?
  
  **A** (@Aberg Satergo dev, msg#6116): **Use Satergo instead—it supports changing the explorer endpoint**, allowing connection to custom testnets.

---

- **Q** (@zhang zee, msg#6124–msg#6126): Testnet addresses don't match mainnet prefix pattern (mainnet starts with 9h, 9i).
  
  **A** (implicit from Aberg's suggestion): Address prefixes differ between networks by design; Satergo handles both automatically.

---

- **Q** (@zhang zee, msg#6149): How to mine on your own node?
  
  **A**: Not answered in chat segment.

---

- **Q** (@kushti khushi, msg#6186): What are bloknet params now? Should we switch to it? 5-second blocks seem tough.
  
  **A** (@kushti khushi, msg#6189–msg#6193): **Bloknet already implements longer block times**; could become "official" testnet. Non-standard mining reward delay is problematic, but bloknet could serve as replacement.

---

- **Q** (@Koutelier || WONT DM, msg#6161): What does it mean "they got burned"? (in context of transaction analysis)
  
  **A** (@Luivatra, msg#6166): Can't burn ERG—it's just a weird p2s address (pay-to-script address). ERG cannot be destroyed; the address is merely non-standard.

## Links Shared

- [https://twitter.com/koutelier/status/1564324054999437312?s=20&t=M79B3RZ9jG1y1EpzvTEkJQ]: Instructions on sideloading Ergo Ledger app to Nano S Plus (by @Koutelier || WONT DM, 2022-08-29)

- [https://github.com/ergoplatform/ergo/releases/tag/v4.0.42]: Ergo protocol reference client v4.0.42 release (announced @kushti khushi, 2022-09-02)

## Unresolved Questions

- **Block time parameters for testnet**: Should the official testnet adopt 30-second blocks instead of 5-second blocks? Or should bloknet be formally recognized as the official testnet? (**@kushti khushi, msg#6186–msg#6197**, 2022-09-04)

- **Mining setup on local nodes**: Process for mining on a custom testnet node not clarified (**@zhang zee, msg#6149**, 2022-09-03)

- **Auction contract design trade-offs**: How buyers should express conditional offers (price X or best above Y) given that full bidding requires EIP-31 compliance; intermediate UX patterns not discussed (**@Odiseus Me, msg#5937**, 2022-08-29)

---

**Overall Assessment**: Week 2022-W35 was dominated by testnet infrastructure issues and operational troubleshooting. Primary technical discussion centered on node synchronization, wallet integration, and long-term testnet architecture decisions. Limited high-level protocol or dApp development discussion.