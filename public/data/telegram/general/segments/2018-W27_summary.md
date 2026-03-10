---
title: "Ergo General Chat — 2018-W27"
date_start: "2018-07-02"
date_end: "2018-07-08"
type: telegram_weekly
channel: general
week: "2018-W27"
source: telegram
message_count: 56
categories: [technical, governance, ecosystem, marketing, wallet]
key_terms: [non-interactive proofs, proof-of-work, superblocks, node storage, testnet, node setup, bootstrapping, GitHub releases, faucet, Docker, OutOfMemoryError, JVM heap, -Xmx parameter, container memory, roadmap, mainnet launch, Q4 2018, testnet updates, production environment, tokens support]
---
# Ergo General Chat — 2018-W27 Summary

## Key Topics Discussed

- **NIPoPoWs (Non-Interactive Proofs of Proof-of-Work)**: User inquired about Ergo's support for NIPoPoWs and how nodes track superblocks and references to older blocks. Confirmed that full nodes maintain this data, while light-full nodes most likely do not.

- **TestNet Infrastructure & Node Setup**: Early testnet users encountered issues running nodes in Docker environments, particularly Java heap memory exhaustion and network connectivity problems. Developers provided guidance on JVM memory configuration and Dockerfile modifications.

- **TestNet Faucet & Token Distribution**: Clarified that during early testnet phase, transactions were created internally by developers. Mining capability for testnet ERG would be available in an upcoming version.

- **Scorex Framework**: Confirmed Ergo created Scorex, which remains actively developed as a core framework supporting Ergo Platform.

- **Token Support & Atomic Swaps**: Announced that the next release would include native token support and atomic ERG-token exchange functionality at the protocol level.

- **Built-in Node Wallet**: Confirmed a built-in wallet for the node client was planned as the next development step (though without GUI initially).

## Important Decisions or Announcements

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#3624, 2018-07-04]: MainNet launch targeted for Q4 2018, pending successful completion of two more testnet updates that would bring environment as close as possible to production specifications.

- [@Unknown, msg#3628, 2018-07-04]: Next release would include token support and atomic ERG-token exchange in core protocol. Reference: https://bitcointalk.org/index.php?topic=2076657.msg41161478#msg41161478

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#3549, 2018-07-02]: Reddit channel created but will be made public at a later date.

## Technical Q&A Worth Preserving

- **Q** (@Komninos, msg#3542): Does a node store which blocks are superblocks and for each of them references to older ones?
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#3544-3545): Full nodes yes; light-full nodes most likely not.

- **Q** (@Komninos, msg#3569): How to configure JVM memory limits for Docker containers?
  **A** (@Alexey Kiselev, msg#3571-3572): Docker containers see all host memory as available. Modify the Dockerfile to add `-Xmx` parameter to line 13 to constrain heap allocation.

- **Q** (@Komninos, msg#3553): Will nodes be able to bootstrap?
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖚𝖘𝖘𝖆𝖙կշօ, msg#3554): Yes, follow GitHub instructions or wait for upcoming update.

- **Q** (@Komninos, msg#3625): What is the relationship between Ergo and Scorex?
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖚𝖘𝖘𝖆𝖙կշօ, msg#3626): Ergo created Scorex, still being developed, serves as framework for Ergo Platform.

- **Q** (@Kirill, msg#3632): Can testnet features be tested interactively or is it read-only mode?
  **A** (@Dmitry, msg#3633): Difficult without code modification; built-in node wallet planned as next development step.

## Links Shared

- [https://github.com/ergoplatform/ergo/releases]: Latest Ergo testnet releases
- [https://www.ergoplatform.org/reach_us.html]: Contact/community information
- [https://bitcointalk.org/index.php?topic=2076657.msg41161478#msg41161478]: Details on upcoming token support and atomic swap features
- [https://youtu.be/7aflmniKI5s?t=569]: Video content (timestamp provided)
- [https://twitter.com/ergoplatformorg/status/1015180725182697473]: Official Ergo Platform Twitter announcement

## Unresolved Questions

- Memory requirements for testnet nodes unclear — user with 3 GB RAM experienced crashes even after JVM tuning; root cause of network-related crash on second attempt not fully diagnosed (flagged as pending developer investigation).

- Social media integration on official website incomplete at time of discussion — GitHub and Telegram links not prominently featured in website footer as of early July 2018.