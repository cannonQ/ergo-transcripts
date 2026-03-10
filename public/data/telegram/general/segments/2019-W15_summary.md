---
title: "Ergo General Chat — 2019-W15"
date_start: "2019-04-08"
date_end: "2019-04-14"
type: telegram_weekly
channel: general
week: "2019-W15"
source: telegram
message_count: 69
categories: [governance, mining, ecosystem, technical]
key_terms: [mainnet, token swap, EFYT, emission curve, security audit, May 26, Autolykos-GPU-miner, CUDA, NVIDIA drivers, compilation error, GTX1060, Ubuntu, exchange listing, Waves DEX, liquidity, EFYT trading, Autolykos, PoW, private key mining, mining pools]
---
# Ergo General Chat — 2019-W15 Summary

## Key Topics Discussed

- **Mainnet Launch & Exchange Listing**: Priority focus is ensuring smooth mainnet launch before token swap. EFYT listing on major exchanges (beyond Waves) is a must-have requirement before mainnet goes live, though currently hampered by testnet-only status.

- **GPU Mining (Autolykos)**: Multiple community members attempting to compile and run the Autolykos-GPU-miner on Ubuntu + NVIDIA hardware. Compilation errors related to CUDA and user-defined literal operators were reported and flagged as a known issue requiring fixes.

- **EFYT → ERG Token Swap**: Conversion timeline estimated at ~6 months post-mainnet. Swap mechanism and address preservation for future ErgoData sidechain distribution remains under discussion.

- **ErgoData Sidechain**: Originally planned as separate blockchain, now being repositioned as sidechain launching 2–3 years post-Ergo mainnet if demand justifies. EFYT holders will receive ErgoData tokens (EFYTD) before mainnet, with actual chain availability deferred.

- **Proof of Work Rationale**: PoW chosen over PoS to enable lightweight, truly decentralized validation without compromising functionality.

- **Mining Model Changes**: Autolykos algorithm requires miners to use their own private keys, fundamentally altering traditional mining pool business models and payout responsibility structures.

## Important Decisions or Announcements

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#6566, 2019-04-08]: Mainnet launch takes absolute priority; all other initiatives (exchange listings, etc.) deferred until after successful launch.

- [@Dmitry, msg#6567, 2019-04-08]: Ergo listing on at least one major liquid exchange confirmed as essential prerequisite before mainnet. EFYT unlikely to be listed outside Waves DEX.

- [@Dmitry, msg#6637, 2019-04-14]: Autolykos-GPU-miner compilation issues identified as known bug; acknowledged and flagged for fixes.

- [@Unknown, msg#6677, 2019-04-18]: PoW architecture chosen to enable "really light validation possible in a truly decentralized manner and without compromising functionality."

- [@Unknown, msg#6700, 2019-04-20]: ErgoData repositioned from separate chain to likely sidechain, development deferred 2–3 years pending demand validation and sidechain maturity.

## Technical Q&A Worth Preserving

- **Q** (@Unknown, msg#6579): Building single-GPU rig (GTX 1060 + 8GB RAM) for Ergo mining; seeking assistance with full node + miner setup.  
  **A** (@Dmitry, msg#6580): Offered open support for questions during setup.

- **Q** (@ponte, msg#6597–6605): CUDA compilation errors in Autolykos-GPU-miner (user-defined literal operator not found); suspected NVIDIA driver / CUDA installation issues.  
  **A** (@Dmitry, msg#6603, msg#6637): Confirmed node-side issues suspected; linked to GitHub issue #15 and committed to fixes. (@ponte verified hashcat works with same GPU, indicating CUDA availability; fresh Ubuntu + CUDA 10.1 + drivers 418.39 + gcc 7.3.0 still failed.)

- **Q** (@Unknown, msg#6695): Why would mining sites require private keys?  
  **A** (@Unknown, msg#6696): Autolykos requires miners to sign blocks with their own private keys; mining pools must handle fair payouts themselves, changing traditional mining business models.

- **Q** (@Unknown, msg#6699–msg#6707): Will EFYT holders receive ErgoData tokens (EFYTD)? How will address mapping work across 1-year swap period and 2–3-year sidechain development?  
  **A** (@Unknown, msg#6702, msg#6704, msg#6706): Yes, EFYTD sent pre-mainnet to EFYT holders. Token form (Ergo-native or Waves-based) to be decided before launch. Chain availability 2–3 years post-mainnet; sidechain architecture preferred over dual blockchains.

## Links Shared

- [https://ergoplatform.org/qa_2019_03_19.html]: Mainnet timeline and token swap details (referenced by Dmitry for launch schedule).

- [https://ergoplatform.org/news_emission_curve.html]: Ergo emission schedule and tokenomics.

- [https://docs.ergoplatform.com/ErgoPow.pdf]: Autolykos PoW algorithm specification (linked in response to PoW algo question).

- [https://github.com/ergoplatform/Autolykos-GPU-miner/issues/15]: Known GPU miner compilation issue tracker.

- [http://dev.pywaves.org/assets/725Yv9oceWsB4GsYwyy4A52kEwyVrL5avubkeChSnL46]: EFYT token supply tracking on Waves.

- [https://twitter.com/ergoplatformorg/status/1116331676374843392], [https://twitter.com/ergoplatformorg/status/1116736245261008896], [https://twitter.com/chepurnoy/status/1118860935412813825], [https://twitter.com/chepurnoy/status/1118948940790022145], [https://twitter.com/ergoplatformorg/status/1119274685806587907]: Official announcements and progress updates (exact content not provided in chat).

## Unresolved Questions

- **GPU Miner Compilation**: Root cause of Autolykos-GPU-miner CUDA errors not fully resolved in this chat segment; awaiting fixes from development team.

- **EFYT Address Preservation**: Mechanism for tracking EFYT holder addresses across 6-month swap window and 2–3-year ErgoData sidechain wait period not fully specified.

- **Mining Pool Models**: Exact contractual and payout mechanisms for pools operating under Autolykos private-key requirement left open for future standardization.