---
title: "Ergo General Chat — 2025-W30"
date_start: "2025-07-21"
date_end: "2025-07-27"
type: telegram_weekly
channel: general
week: "2025-W30"
source: telegram
message_count: 0
categories: [technical, mining, ecosystem, defi, governance, wallet, community]
key_terms: [sub-blocks, mining, block propagation, orphan reduction, bandwidth, Lithos, mining pools, difficulty fraud, on-chain, LITHOS token, Sigma 6.0, protocol upgrade, flexibility, ErgoHack X, Game of Prompts, CodeUTXO, Cortex, hackathon, MEXC, withdrawals]
---
# Ergo General Chat — 2025-W30 Summary

## Key Topics Discussed

- **Lithos Protocol development**: Storage rent contract testing completed; NISP Fraud Proof contracts tested; difficulty contract in progress to prevent miners from setting difficulty values after mining; emission contract and configuration contracts underway; initial research on Lithos BTC implementation on Braid. [@kushti khushi, msg#568288, 2025-07-21]

- **Sub-blocks and network speed improvements**: Community discussion revived on sub-blocks design, Prism, and PoEM approaches to reduce bandwidth, orphan blocks, and fork splits while maintaining fast block guarantees. Implementation sketches exist but need coordination; process expected to take 3-6 months before general use. [@mx via DiscordBridge, msgs#568285, #568456-457, 2025-07-21 to 2025-07-23]

- **Merge-mined sidechains**: Miners invest in SHA-256 hashing machines; extending that security umbrella sideways via merge-mined sidechains is beneficial for business and security. BIP 301 referenced as relevant framework; improved sidechaining over Bitcoin's less-clear security model. [@Armeanio, msgs#568290-293, 2025-07-21]

- **Rosen Bridge partnerships and cross-chain strategy**: Palmyra ecosystem utilizing Rosen Bridge for multi-chain integration; Chainlink partnership for proof of reserve and on-chain warehouse receipts in decentralized trade financing; plan to build out Ergo-native Oracle Pools v1 and v2 (for Dexy Gold with GORT rewards). Multiple oracle providers planned, not exclusive to Chainlink. [@Armeanio, msgs#568290-673, 2025-07-24]

- **MewFinance locking mechanism**: MewLock deployed at lock.mewfinance.com with UI improvements (box names, descriptions, USD value sorting); 3% fee on withdrawal; Josh's offer: lock 100 ERG for 10 years, receive 50 ERG back immediately (47% profit after 3% fee). [@HQΣr, msgs#568620, #568779, #569053, 2025-07-24 to 2025-07-26]

- **Storage rent consolidation**: Old mining wallets experiencing ~0.09 ERG deductions every 2 weeks due to storage rent on UTXOs older than 4 years. Consolidation via MewFinance tools or Nautilus wallet refreshes timer; unreclaimed ERG cannot be recovered. [@HQΣr, msgs#568112-121, #569127, 2025-07-26]

- **CoolDogeCoin validator project**: New token (10M supply) with validator nodes, zero-knowledge proofs, and Raspberry Pi support; tokenomics: 45% validator treasury, 30% burn, 10% dev fund, 5% liquidity, 10% airdrop; Q3 2025 launch, Q4 game launch, Q1 2026 liquidity pool. DAO governance proposed with multisig wallet controls. [@Saphuza, msgs#568864-869, #569033-041, #569208-280, 2025-07-24 to 2025-07-27]

- **VoltPay interchain swaps**: Cross-chain swaps (XMR→ERG, ADA→ERG, ETH→ERG, etc.) using background CEX liquidity; ~300 trading routes; testing phase active with real transactions reported successful. [@HQΣr, msgs#568410, #568704-705, 2025-07-23 to 2025-07-24]

- **Ergo Community Zoom meeting**: July 24, 2025 @ 1pm UTC as replacement for standard AMA format; broad community roundtable discussion. [@qx(), msg#568482-483, 2025-07-23]

- **ErgoHack X winners announced**: Game of Prompts (1st), CodeUTXO (2nd), Cortex (3rd); community vote counted as one judge; Pulse, Pattern, RustChain noted as community favorites. [@Ergo NEWS, msg#568415, 2025-07-23]

- **Sigma protocol verification capability**: Ergo supports sigma-protocol verification via low-level group operations; compressed sigma protocols implemented before Bulletproofs; novel 2025 IACR results enable many zero-knowledge proofs efficiently (including BitVM-like techniques) with better failure-path handling. [@kushti khushi, msgs#568969-973, 2025-07-25]

- **Infrastructure DAO v1 creation**: Sigmanauts DAO proposal for 50k Paideia allocation to create Ergo Infrastructure DAO; goal is geo-load-balanced Ergo infrastructure via DAO membership. Move away from Cloudflare; p2p infrastructure setup required. [@qx(), msgs#568335-336, #568352, 2025-07-21 to 2025-07-22]

- **Miner governance and release process**: All protocol updates after "hardening" fork voted on by miners only; discussion of multisig for release signing in 2025; GitHub trust issues to be revisited. [@kushti khushi, msgs#568953-957, 2025-07-25]

---

## Important Decisions or Announcements

- [@kushti khushi, msg#568288, 2025-07-21]: Lithos Protocol whitepaper in progress; storage rent contract testing finished; difficulty fraud-prevention contract development underway.

- [@qx(), msg#568335, 2025-07-21]: Sigmanauts DAO proposal: 50k Paideia for Ergo Infrastructure DAO creation; voting ends in 7 days.

- [@kushti khushi, msg#568368, 2025-07-22]: Technical analysis posts welcome **in trading groups**, not in general channel.

- [@kushti khushi, msg#568370, 2025-07-22]: Machina Finance real-time order aggregator backend in development; usable version expected in ~3 weeks.

- [@qx(), msg#568482-483, 2025-07-23]: Ergo Community Zoom chat July 24 @ 1pm UTC replacing standard AMA; all welcome.

- [@Ergo NEWS $ERG, msg#568415, 2025-07-23]: ErgoHack X concluded; Game of Prompts, CodeUTXO, Cortex announced as top 3.

- [@kushti khushi, msg#568885, 2025-07-25]: MEXC withdrawals reopened.

- [@HQΣr, msg#569053, 2025-07-26]: MewLock deployed with updated UI (box names, descriptions, USD sorting).

- [@Saphuza, msg#569034-037, 2025-07-25 to 2025-07-26]: CoolDogeCoin whitepaper released; validator treasury being locked in smart contract for launch.

- [@qx(), msg#569136, 2025-07-26]: Backup Ergo Explorer going down for reboot.

- [@HQΣr, msg#569300, 2025-07-27]: VoltPay Telegram group created for feedback and event updates; https://t.me/VoltPay0

---

## Technical Q&A Worth Preserving

- **Q** (@ibilbo69, msg#568297): Has MEXC announced when withdrawals will resume?
  **A** (@Glasgow, msg#568314): Hoping for fix by Friday (targeting week of 2025-07-21).
  **Follow-up** (@kushti khushi, msg#568885): MEXC withdrawals opened 2025-07-25.

- **Q** (@Man ish, msg#568252): When sub-blocks?
  **A** (@mx via DiscordBridge, msg#568285): Depends on node support for merge-mined sub-blocks; mainnet nodes possible next month; better low-level testing then; full ecosystem adoption 3-6 months for new dApps/tweaking; expected process 3-6 months total.

- **Q** (@Chris Ray, msg#568839): Is this an automated bridge (referencing Ergo application viability)?
  **A** (@Chris Ray, msg#568856-858): Good assumptions are manageable to some extent; question everything principle applied.

- **Q** (@kenan5593 via DiscordBridge, msg#569111): Is my ERG being burned from my wallet? (~0.09 ERG every 2 weeks).
  **A** (@HQΣr, msg#569112-113): Storage rent—old blocks (>4 years) need consolidation via MewFinance tools or mobile wallet.
  **Follow-up** (@D7🐳, msg#569117, #569119): Once reclaimed by network, ERG cannot be recovered; consolidate remaining UTXOs to refresh timer; boxes <0.14 ERG consumed entirely if holding tokens.

- **Q** (@kenan5593 via DiscordBridge, msg#569166): Seed phrase is 12 words, not 14; ErgoPay QR not working on phone.
  **A** (@HQΣr, msgs#569169-202): Verify imported address matches and funds present; consolidate via mobile wallet dApps → consolidation feature; verify all funds transferred to new secure wallet created in official Ergo Wallet app (Android/iOS).

- **Q** (@Eramehr, msg#569109): What exchange for Ergo to fiat?
  **A** (@D7🐳, msg#569110): KuCoin to USDT, then Binance P2P for fiat; no direct fiat ramps for Ergo yet.

- **Q** (@A, msgs#568699-700): How does interchain swap work? Where does liquidity come from?
  **A** (@HQΣr, msg#568704-705): Swaps via background CEX activity; uses Swapter and Exolix; Monero tunnel and other services for routing.

- **Q** (@Saphuza, msgs#568807-812): Did I send correct XMR amount (.1555 vs .155)? Transaction waited 1 hour.
  **A** (@HQΣr, msg#568822): Use voltpay.store for tracking trades.
  **Follow-up** (@Saphuza, msg#568842): Received ERGs despite minor overages; VoltPay staff accommodated; first refund processed.

- **Q** (@D7🐳, msg#569067): Can Mew Lock add direct staking from locked box (yield while locked)?
  **A** (@HQΣr, msg#569068-069): Can build proxy on top checking locks with emissions; question is: where does yield source from?
  **Follow-up** (@D7🐳, msg#569070): Yield from community/DAO allocation, protocol fees, or partner token emissions.

- **Q** (@Saphuza, msg#569058): Ergo tools install issue (/packages error).
  **A** (@HQΣr, msg#569089): Aco in vacation; HQ working on 5 things; will troubleshoot later.

- **Q** (@kushti khushi, msg#568969-971): Can Ergo do zero-knowledge proofs efficiently?
  **A** (@kushti khushi, msgs#568969-973): Sigma-protocol verification supported via low-level group ops; compressed sigma protocols predate Bulletproofs; 2025 IACR results show many ZK proofs possible with efficiency; BitVM-like techniques enable everything with better failure handling.

---

## Links Shared

- [https://docs.ergoplatform.com/uses/use-cases-overview/](https://docs.ergoplatform.com/uses/use-cases-overview/): Ergo use cases documentation. [@Glasgow, msg#568274, 2025-07-21]

- [https://lock.mewfinance.com/](https://lock.mewfinance.com/): MewLock locking mechanism for ERG and tokens; UI updated with box names, descriptions, sorting. [@HQΣr, msgs#568620, #569053, 2025-07-24 to 2025-07-26]

- [https://paideia.im/](https://paideia.im/): Paideia DAO platform for Sigmanauts proposals. [@qx(), msg#568336, 2025-07-21]

- [https://infra-p2p.ergoplatform.com/cgi-bin/dashboard.cgi](https://infra-p2p.ergoplatform.com/cgi-bin/dashboard.cgi): Dashboard for API/node/explorer/GraphQL and testnet node status. [@qx(), msg#568875, 2025-07-24]

- [https://tools.mewfinance.com/](https://tools.mewfinance.com/): MewFinance tools for UTXO consolidation. [@HQΣr, msg#568116, 2025-07-26]

- [https://flowpay-rho.vercel.app/buycrypto](https://flowpay-rho.vercel.app/buycrypto): Cross-chain swap interface (testing phase). [@HQΣr, msg#568694, 2025-07-24]

- [https://voltpay.store](https://voltpay.store): VoltPay interchain swap platform for ERG-to-fiat and crypto-to-crypto. [@HQΣr, msg#568822, 2025-07-24]

- [https://t.me/VoltPay0](https://t.me/VoltPay0): VoltPay Telegram group for feedback and event updates. [@HQΣr, msg#569300, 2025-07-27]

- [https://eprint.iacr.org/2025/515](https://eprint.iacr.org/2025/515): Novel 2025 IACR paper on zero-knowledge proofs applicable to Ergo. [@kushti khushi, msg#568969, 2025-07-25]

- [https://github.com/Kaisar31-coder/ai-assistant-manager-ergohack10](https://github.com/Kaisar31-coder/ai-assistant-manager-ergohack10): AI Assistant Manager ErgoHack X project (missed deadline); checks destination wallet for scam risk. [@D7🐳, msg#569018, 2025-07-25]

- [https://gist.github.com/NickCragg](https://gist.github.com/NickCragg): CoolDogeCoin validator node code; Raspberry Pi support; airdrop for beta testing. [@Saphuza, msg#568864, #569278, 2025-07-24 to 2025-07-27]

- [https://docs.google.com/document/d/1dkmpdcv-c28uYFDi2UJCcp1EUykAXtU7jiQOmFNy4N4/edit](https://docs.google.com/document/d/1dkmpdcv-c28uYFDi2UJCcp1EUykAXtU7jiQOmFNy4N4/edit): CoolDogeCoin whitepaper. [@Saphuza, msg#569034, 2025-07-25]

- [https://celaut-project.github.io/](https://celaut-project.github.io/): Celaut landing page (ErgoHack X project). [@Josemi via DiscordBridge, msg#568989, 2025-07-25]

- [https://game-of-prompts.github.io/](https://game-of-prompts.github.io/): Game of Prompts landing page (ErgoHack X winner). [@Josemi via DiscordBridge, msg#568989, 2025-07-25]

---

## Unresolved Questions

- **Sub-block implementation timeline**: Exact sequence for mainnet rollout, testnet parameter tweaking, and ecosystem dApp adaptation remains TBD; community discussion group for testing parameters needed (volunteers sought). [@kushti khushi, 2025-07-24]

- **GitHub security and release governance**: Trust issues in GitHub raised; decision on multisig release signing deferred to 2025; review of GitHub rules planned but no timeline set. [@kushti khushi, msg#568957, 2025-07-25]

- **Ergo-