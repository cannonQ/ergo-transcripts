# Ergo General Chat — 2024-W20 Summary

## Key Topics Discussed

- **Storage Rent / Demurrage Economics**: Extended philosophical discussion on demurrage as Ergo's distinctive monetary feature, contrasting fixed supply (100M ERG) with Bitcoin's approaching-zero circulating supply. Explored demurrage's dual role in controlling inflation and UTXO scalability. [@dayumbbbb, multiple msgs across 2024-05-14]

- **Sigma 6.0 Development**: Implementation of mod Q operations and big integer semantics beginning Monday. Last major non-trivial piece before broader rollout. [@kushti, msg#492804, 2024-05-18]

- **VC Investment & Token Distribution**: Discussion of why VCs struggle with Ergo — inability to sell massive token allocations at discount (PoW mining distribution vs. PoS staking printer control), and EF/developer "skin in the game" concerns. Development DAO proposed as offset mechanism. [@Armeanio, msgs#492412-417, 2024-05-15]

- **Bitcoin Smart Layer via Rosen Bridge**: Exploration of DeFi use cases for Bitcoin collateral (stablecoins, yield farming) using ErgoScript, eUTXO model, Sigma Protocols, and trustless Rosen Bridge transfers. [@Ergo NEWS, msg#492657, 2024-05-17]

- **Privacy Wallet UX Gap**: Critique that ecosystem lacks wallets with fine-grained spending/change address controls necessary to preserve mixer privacy gains through DeFi. Nautilus destroys privacy by default; SAFEW attempts control but has bugs and limited dApp-connector support. [@Unknown, msg#492913 et seq., 2024-05-19]

- **ErgoHack VIII & Additional Prizes Raffle**: Prize pool raffle created; Sigmanauts to vote on reward allocation. [kushti, msg#492564-565, 2024-05-16]

- **Trustless Bitcoin Relay**: kushti exploring on-chain Bitcoin header relay as potential project direction. [@kushti, msgs#492812, 492816, 2024-05-18]

- **Multi-Language SDK Development**: Call for Rust, Go, TypeScript library improvements beyond existing Scala core. Need for app developers, privacy explorers, and ideologists. [@kushti, msg#492737, 2024-05-17]

---

## Important Decisions or Announcements

- [@kushti, msg#492564-565, 2024-05-16]: **ErgoHack VIII Prize Raffle Live** — Raffle created for additional prizes; community can vote on reward distribution via Sigmanauts governance.

- [@Armeanio, msg#492576, 2024-05-16]: **Ergo Devs DAO Donation** — Armeanio publicly donated 7k+ ERG to Ergo Devs DAO (Good Things DAO token).

- [@kushti, msg#492804-805, 2024-05-18]: **Sigma 6.0 Timeline** — Last major implementation piece (mod Q ops, big integer semantics) starting Monday; other issues expected to be "more or less straightforward."

- [@Aco Šmrkas, msg#492551, 2024-05-16]: **NSFW NFT Reporting System** — ErgExplorer implements NSFW content reporting and auto-hiding for newly minted NFT images with manual reveal option. API endpoint provided for developers.

- [@kushti, msg#492648-649, 2024-05-17]: **Weekly Dev Schedule** — kushti's availability noted; will join chat "in few hours" after coding work.

---

## Technical Q&A Worth Preserving

- **Q** (@Unknown, msg#492085): If demurrage is adjustable by miners, couldn't a 51% attack adjust it to zero seconds and instantly seize all coins?
  **A** (@Pulsarz, msg#492086-087): Network voting requires 90% consensus, not 51%. [@dayumbbbb, msg#492089-090]: Parameters have upper and lower limits; miners would theoretically push to limits due to game theory, but limits exist precisely for this reason.

- **Q** (@Jack Σ, msg#492420): If supply decreases while demand stays the same, shouldn't price rise?
  **A** (@Şerafettin Bayrakdar, msg#492421): Yes, price must move upward; otherwise something is structurally wrong.

- **Q** (@Jack Σ, msg#492423): Is high UTXO concentration (100+ wallets holding 100k+ ERG) problematic?
  **A** [@Şerafettin Bayrakdar, msg#492424]: Declined to answer as non-team member; directed to Ergo team directly.

- **Q** (@Flying Pig, msg#492929, 2024-05-19): Can wallets support: (1) choose sender address(es), (2) choose change address, (3) multi-address sends?
  **A** [@Unknown, msg#492933, 2024-05-19]: SAFEW attempts this but has bugs and poor dApp support. [@Flying Pig, msg#492940]: Terminus mobile supports it but not multiple sender addresses. Minotaur supports all three in desktop mode.

- **Q** (@Unknown, msg#492967, 2024-05-19): Why is change address problematic for privacy?
  **A** [@Unknown, msg#492967]: Even with spending controls, change address reveals transaction structure and links addresses.

- **Q** (@blake starky, msg#492983, 2024-05-19): How do you maintain privacy with the mixer long-term?
  **A**: Option is to send/receive within mixer itself (self-custody); mixer maintains boxes holding ERG/SigmaUSD for extended periods awaiting withdrawal address. Limitation: mixer only supports fixed-size box withdrawal, not custom amounts.

- **Q** (@Şerafettin Bayrakdar, msg#492428, 2024-05-15): Why are there so many wallet applications in Ergo? Shouldn't they consolidate?
  **A** [@kii, msg#492461-462, 2024-05-15]: Multiple wallets represent healthy competition (like physical wallets). Different UX/features suit different needs — Nautilus for simplicity + NFT viewing, Minotaur for multisig. All use same underlying addresses; choice depends on user preference and required features.

---

## Links Shared

- [https://twitter.com/RosenBridge_erg/status/1789997900006662621](https://twitter.com/RosenBridge_erg/status/1789997900006662621): Rosen Bridge announcement [@CW, msg#492084]

- [https://docs.ergoplatform.com/mining/governance/](https://docs.ergoplatform.com/mining/governance/): Ergo governance documentation on mining parameters [@Pulsarz, msg#492087]

- [https://explorer.ergoplatform.com/en/transactions/0a56be630fdaf424c17d6bddecffeccb0589180d4664b02f866a3a60ae0a5e98](https://explorer.ergoplatform.com/en/transactions/0a56be630fdaf424c17d6bddecffeccb0589180d4664b02f866a3a60ae0a5e98): Airdrop test transaction [@kushti, msg#492169]

- [https://discord.gg/JyxsBvjqWs](https://discord.gg/JyxsBvjqWs): SkyHarbor Discord invite [@qx(), msg#492116]

- [https://ergoplatform.org/en/get-erg/#Exchanges](https://ergoplatform.org/en/get-erg/#Exchanges): Ergo exchange list [@qx(), msg#492135]

- [https://www.youtube.com/watch?v=zDhS1E_Wma8](https://www.youtube.com/watch?v=zDhS1E_Wma8): Dev Update live stream [@qx(), msg#492139]

- [https://youtube.com/live/8pG9qR7CxbU](https://youtube.com/live/8pG9qR7CxbU): Weekly Update AMA with kushti & qx() [@Andy L, msg#492562]

- [https://ergoraffle.com/raffle/show/91547b4f55a049553dc8629c246431dd904ed16565a1ed859b59f7cbe6e92514](https://ergoraffle.com/raffle/show/91547b4f55a049553dc8629c246431dd904ed16565a1ed859b59f7cbe6e92514): ErgoHack VIII Additional Prizes raffle [@kushti, msg#492564]

- [https://docs.stability.nexus/about-us/the-stable-order/knights-and-benefactors](https://docs.stability.nexus/about-us/the-stable-order/knights-and-benefactors): Benefaction alternative to VC investment model [@Bruno, msg#492537]

- [https://docs.stability.nexus/about-us/the-stable-order/cats](https://docs.stability.nexus/about-us/the-stable-order/cats): Cats documentation (Stable Order) [@Bruno, msg#492537]

- [https://api.ergexplorer.com/tokens/checkNsfw?id=...](https://api.ergexplorer.com/tokens/checkNsfw?id=...): ErgExplorer NSFW detection API [@Aco Šmrkas, msg#492551]

- [https://docs.ergoplatform.com/eco/sigmajoin/](https://docs.ergoplatform.com/eco/sigmajoin/): SigmaJoin privacy documentation [@Glasgow, msg#492999]

- [https://twitter.com/DjedAlliance/status/1790816289193173257](https://twitter.com/DjedAlliance/status/1790816289193173257): Catalyst proposals benefiting SigmaUSD, Gluon, hodlCoin [@Bruno, msg#492471]

- [https://x.com/ergo_platform/status/1792395121054671215](https://x.com/ergo_platform/status/1792395121054671215): Ergo Platform announcement [@qx(), msg#493013]

---

## Unresolved Questions

- **Privacy wallet standardization**: No consensus reached on whether privacy-preserving wallets should consolidate or remain fragmented. Gap between mixer capabilities and dApp UX for spending/change address control remains unaddressed. [@Unknown, 2024-05-19]

- **Bitcoin integration depth**: Unclear whether trustless Bitcoin relay will be pursued or sidechain constructions prioritized. kushti listed both as potential directions but no commitment made. [@kushti, msgs#492812-816, 2024-05-18]

- **VC approach for Ergo**: Development DAO proposed as offset to VC concerns, but no vote or formal adoption announced. Remains exploratory. [@Armeanio, msg#492412, 2024-05-15]

- **Wallet consolidation feasibility**: User request for single unified wallet application vs. ecosystem preference for modular competition. No resolution path clarified. [@Şerafettin Bayrakdar, msg#492428, 2024-05-15]

- **Sigma 6.0 timeline precision**: "Hopefully straightforward" qualifier on remaining issues suggests uncertainty; no hard delivery date provided. [@kushti, msg#492805, 2024-05-18]

---

## Ecosystem Highlights

- **ErgoHack VIII momentum**: Prize raffle 30% funded by 2024-05-19, with Sigmanauts governance on reward distribution signaling community engagement.
- **Turkish regulatory clarity**: Dr. Ömer İleri statement on Turkey's crypto bill clarifies that Turkish residents retain rights to use foreign platforms; no ban on transactions. [@Şerafettin Bayrakdar, msgs#492607-611, 2024-05-16]
- **Developer onboarding**: kushti explicitly invited developers across multiple skill sets (Rust/Go/TypeScript, app builders, philosophers, ideologists) to contribute, reflecting ecosystem expansion beyond Scala core. [@kushti, msg#492737, 2024-05-17]