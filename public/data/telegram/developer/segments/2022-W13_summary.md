---
title: "Ergo Developer Chat — 2022-W13"
date_start: "2022-03-28"
date_end: "2022-04-03"
type: telegram_weekly
channel: developer
week: "2022-W13"
source: telegram
message_count: 80
categories: [technical, bridges, wallet]
key_terms: [sync, stuck blocks, memory requirements, nbminer, block height 716799, P2P protocol, TCP handshake, message specification, peer connection, network messages, handshake, connection closure, DataInputStream, address encoding, port encoding, Rosen, guard set, staking, slashing, governance]
---
# Ergo Developer Chat Summary — 2022-W13
**Period:** 2022-03-28 to 2022-04-17  
**Participants:** 9 developers  
**Focus:** Protocol implementation, node synchronization issues, P2P documentation

---

## Key Topics Discussed

- **Network synchronization failures (late March)**: Multiple nodes experienced extended sync stalls (30+ minutes without blocks). Root cause traced to increased memory requirements a few blocks prior to emission decrease to 63 ERG. NBMiner did not account for these memory demands.

- **Rosen Bridge governance model**: Guard set participants must be known ecosystem actors with reputation and slashing incentive alignment. Game theory relies on staking and slashing incentives beyond basic action flow.

- **P2P protocol documentation gaps**: Ergo node protocol (TCP-based) is minimally documented in official docs. Protocol uses non-standard encoding patterns (e.g., address length + 4 bytes, port as unsigned int rather than unsigned short). These inconsistencies originated from legacy implementation choices.

- **Transaction confirmation limits**: Computational cost limit per block is 8M (votable by miners). Multiple chained transactions can exceed this despite low individual costs. JIT compilation (v5.0) expected to improve throughput significantly.

- **Node seeding centralization concern**: Current peer discovery relies on known seed peers. Lack of DNS seeds or DHT equivalent creates bootstrap vulnerability if known peers are DDoS'd. Historical IRC-based seeding was removed.

---

## Important Decisions or Announcements

- [@Aberg Satergo dev, msg#1982, 2022-04-13]: Pull request submitted for P2P protocol documentation with VLQ reader/writer implementation included.

- [@Cheese, msg#2044, 2022-04-15]: JIT compilation expected to substantially improve smart contract execution efficiency, anticipated in v5.0.

- [@code.for.uss, msg#2048, 2022-04-15]: Awaiting new forum post or documentation from Scalahub on SigmaUSD changes.

---

## Technical Q&A Worth Preserving

- **Q** (@Aberg Satergo dev, msg#1820): Where is Ergo's equivalent of Bitcoin's `getaddr` message documented in the node source?  
  **A** (@Aberg Satergo dev, msg#1823-1936): After reading Scala source code, implementer found that connection closed after mutual handshake exchange. Issue resolved: try-with-resources was prematurely closing the socket input stream when closing the DataInputStream.

- **Q** (@Aberg Satergo dev, msg#1937): Why does the node add 4 to the address length in the P2P handshake?  
  **A** (@Aberg Satergo dev, msg#1960-1961): Legacy encoding error—port bytes length was added to the IP address length value. Cannot be changed now due to backward compatibility.

- **Q** (@Luivatra, msg#2041): Is there a per-address per-block transaction confirmation limit? Chained transactions only confirm 3 at a time despite 20 being submitted.  
  **A** (@Cheese, msg#2042): Computational cost limit is 8M per block (votable by miners). Chaining 20 transactions likely exceeds this unless each transaction has very low script cost.

- **Q** (@Aberg Satergo dev, msg#2064): Is node seeding only done with known peers? Doesn't this create centralization risk if seed peers are DDoS'd?  
  **A** (@Aberg Satergo dev, msg#2072): IRC-based seeding used in old versions but was removed (depends on external IRC server availability). DNS seed equivalent not currently implemented for Ergo.

---

## Links Shared

- [https://docs.ergoplatform.com/dev/p2p/](https://docs.ergoplatform.com/dev/p2p/): Official Ergo P2P protocol documentation (minimal coverage of message specification).

- [https://blog.trailofbits.com/2022/04/13/part-1-coordinated-disclosure-of-vulnerabilities-affecting-girault-bulletproofs-and-plonk/](https://blog.trailofbits.com/2022/04/13/part-1-coordinated-disclosure-of-vulnerabilities-affecting-girault-bulletproofs-and-plonk/): Security disclosure relevant to bulletproof implementations.

- [https://github.com/ergoplatform/ergodocs/pull/9](https://github.com/ergoplatform/ergodocs/pull/9): PR adding comprehensive P2P protocol message specification documentation with VLQ encoding reference.

- [https://satsen.github.io/ergodocs/dev/p2p/network](https://satsen.github.io/ergodocs/dev/p2p/network): Rendered version of P2P network protocol documentation.

- [https://satergo.com](https://satergo.com): Satergo wallet/node tool with built-in node download, install, monitor, and updater (64-bit OS required, RPi4+ compatible).

- [https://docs.ergoplatform.com/dev/start/testnet/](https://docs.ergoplatform.com/dev/start/testnet/): Testnet documentation; GetBlock also runs a testnet instance.

---

## Unresolved Questions

- **Memory requirements and block validation**: What specifically caused the memory requirement increase several blocks before the stall on 2022-03-29? Was this a script cost explosion or storage requirement spike? (@kushti khushi acknowledged but no root cause analysis shared.)

- **P2P protocol completeness**: Multiple message types are not documented in official P2P specs. Search for `messageCode` in source yields incomplete results. Full audit of all message types still needed beyond handshake.

- **Port encoding standard**: Why is port encoded as `Int` (4 bytes) in P2P messages rather than `UShort` (2 bytes)? Accepted as legacy debt but rationale unclear.