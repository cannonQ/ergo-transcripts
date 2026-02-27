# Ergo Developer Chat Summary — 2022-W46
**Period:** 2022-11-14 to 2022-11-20  
**Message Count:** 67 | **Active Participants:** 14

---

## Key Topics Discussed

- **IPv6 Node Support**: Critical infrastructure gap identified — zero reachable IPv6 nodes on the network, blocking IPv6-only users from joining. Configuration workaround documented (`declaredAddress` field), with multiple community members beginning to run IPv6-accessible nodes.

- **Backend vs. Smart Contract Trade-offs**: Discussion on ErgoFlip project about whether to implement as backend service or verifiable smart contract, with concerns raised about trust assumptions when funds are sent upfront to backend servers.

- **TOR Integration for P2P Network**: kushti flagged proper TOR implementation as an open problem. Current protocol only broadcasts IP addresses, not onion domains. Bitcoin's approach noted as precedent but not yet examined.

- **Node Discovery & Reachability**: Distinction clarified between reachable nodes (accepting incoming connections) vs. unreachable nodes (broadcasted by peers but not open). Protocol limitation identified: peer info format doesn't support multiple public addresses per node; would require new protocol field or feature.

- **Transaction Validation & Mempool Management**: Troubleshooting discussion on transaction invalidation, mempool behavior, and fee-based transaction selection under spam conditions. Reference to design patterns and trustless oracle contracts from forum.

- **Token Minting & Bridge Strategy (SPF)**: Proposal to mint 2 billion tokens (1B on each chain) with 1B locked into Rosen Bridge once ready, enabling native token support on both sides rather than wrapped tokens.

---

## Important Decisions or Announcements

- [@kushti, msg#8603, 2022-11-15]: **Ergo protocol reference client 5.0.3 released** — https://github.com/ergoplatform/ergo/releases/tag/v5.0.3

- [@Aberg, msg#8581, 2022-11-14]: IPv6 node successfully deployed by Scot; guidance provided to other node operators on configuration.

- [@Ilya Oskin, msg#8629, 2022-11-16]: Closed PR on asset burning mechanism due to serious flaw; team consensus to pursue "vault" approach with @anon_br refinement.

---

## Technical Q&A Worth Preserving

- **Q** (@Grand Gambit, msg#8569): Any guide on how to make a server that sends ERG and receives them, or a random token?
  **A** (@kii, msg#8589): "Let me get back to you tonight" — deferred to DM to avoid chat flooding.

- **Q** (@Aberg, msg#8587): How can a node broadcast multiple public addresses?
  **A** (@Aberg, msg#8587): "You can't at the moment. The peer information format in the protocol doesn't allow you to write multiple public addresses. Either a new field or a new peer feature ("extra addresses") needs to be added."

- **Q** (@Aberg, msg#8593): How are TOR nodes broadcasted in Bitcoin if Ergo only supports IP broadcasting?
  **A** (Unresolved): Highlighted as open question; @kushti flagged TOR documentation as needed.

- **Q** (@Odiseus Me, msg#8608): Can a node connect via TOR and still be reachable? What's the benefit of reachable vs. unreachable?
  **A** (@Aberg, msg#8619): "Reachable nodes are nodes that can be connected to. It has nothing to do with the web. Unreachable nodes are those broadcasted by other nodes, but that are not open for incoming connections."

- **Q** (@HQΣr, msg#8744): Is there a way to create a QR code of a product where scanning and completing a TX automatically sends the product to the buyer's wallet?
  **A** (@MrStahlfelge, msg#8745-8746): "Yes, see EIP-25. Or EIP-20 if your product is a token."

- **Q** (@kushti, msg#8676-8677): Debugging transaction issues — is it staying in mempool? If not, grep logs by TX ID.

---

## Links Shared

- [https://github.com/ergoplatform/eips/pull/84](https://github.com/ergoplatform/eips/pull/84): EIP proposal (status: closed)
- [https://www.ergoforum.org/t/ergoscript-design-patterns/222/23?u=kushti](https://www.ergoforum.org/t/ergoscript-design-patterns/222/23?u=kushti): ErgoScript design patterns for tackling oracle/validation issues
- [https://www.ergoforum.org/t/trustless-oracle-contracts/3793](https://www.ergoforum.org/t/trustless-oracle-contracts/3793): Trustless oracle contract discussion
- [https://thierrym1212.github.io/paymentportal/index.html?currency=ERG#](https://thierrym1212.github.io/paymentportal/index.html?currency=ERG#): Payment portal example for product-to-wallet TX flow
- [https://github.com/ergoplatform/ergo/releases/tag/v5.0.3](https://github.com/ergoplatform/ergo/releases/tag/v5.0.3): Ergo v5.0.3 release

---

## Unresolved Questions

- **TOR Protocol Integration**: How should TOR onion domains be properly integrated into Ergo's P2P peer discovery? Documentation needed. (@kushti, msg#8604-8605)

- **Multiple Public Addresses per Node**: Protocol-level issue requiring new field or peer feature to support nodes with multiple reachable addresses (IPv4 + IPv6, or primary + secondary). (@Aberg, msg#8587)

- **IPv6 Node Reachability**: Why do reachable IPv6 nodes not consistently appear on ergonodes.net after configuration? (@Odiseus Me, msg#8600)

- **Asset Burning vs. Vault Approach**: Trade-offs between direct asset burning vs. vault-based mechanism for token supply management across chains. (PR closed; refinement deferred to @anon_br)

---

## Notes

- Low-activity week with focus on infrastructure/node operations rather than protocol-level changes.
- ErgoFlip (coin flip project) emerged as active frontend development opportunity; contributors coordinated via Discord DMs to avoid chat spam.
- Community demonstrated strong self-organization on IPv6 infrastructure gap without waiting for official directive.