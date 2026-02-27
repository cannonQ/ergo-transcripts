# Ergo General Chat — 2025-W21 Summary

## Key Topics Discussed

### Sub-blocks Implementation & Performance
Sub-blocks devnet is now live. Discussion centered on block time implications: faster blocks could affect contracts relying on block height vs. timestamp for logic, and parameter optimization requires community testing on testnet with difficulty adjustments and empirical observation before mainnet deployment.

### Dexy Protocol Deployment
DexyGold mainnet contracts deployed with 1000 ERG bootstrapped in liquidity pool and 100 ERG in bank. Private UI under testing; public UI will be released after testing phase completes.

### Pulse Decentralized Chat (ergochats.vercel.app)
HQΣr developed and released Pulse, an on-chain decentralized chat platform with encrypted messaging, stealth addresses, reputation system (upvote/downvote), direct tipping in ERG and tokens, AI assistant integration, IPFS image upload planned, and private encrypted rooms. Architecture stores messages in UTXO boxes with minimal ERG (0.0004 per message); future work includes translation, livestream, and enhanced encryption.

### Privacy & Mixing
Discussion on covert addresses, Ergo Mixer, and privacy sidechains. Covert addresses provide one-time receive addresses but don't hide amounts or on-chain flows; large payments remain traceable without additional mixing. Stealth addresses and ring signatures potential integration with Pulse highlighted. Long-term roadmap includes exploring DarkFi, Midnight, or Aleo for private sidechain option.

### Community Currency & P2P Value Exchange
kushti proposed using community currency models with Ergo as a neutral settlement layer—IOUs (digitally signed notes) redeemable within timeframes via Basis or similar on-chain reserves. Example: Alice and Bob trade GPU hours with IOUs cleared through service reciprocity or on-chain conversion. Potential to onboard millions of digital natives creating value without VC/scam intermediaries.

### Hashrate Decline & 51% Attack Concerns
Community raised concerns about falling hashrate making Ergo vulnerable to rental-based 51% attacks (estimated $500–$10k/hour cost). Responses emphasized: attack profitability is low without liquidity targets, CEX double-spends would be quickly blocked, and macroeconomic recovery timescales (not crypto cycle timescales) are relevant for PoW security assessment.

### Rosen Bridge Integration & Cross-Chain Strategy
Armeanio reported Rosen Bridge making progress on Bitcoin and Dogecoin implementations with documentation improvements. Firo multisig support confirmed; Rosen can facilitate integration without requiring Firo's own implementation. Emphasis on practical, responsible deployment approach rather than rushing.

### Handshake Domains (.erg, .mew, .tmr TLDs)
Community member gifted Handshake top-level domains: .tmr (to tmr.erg), .grayman, .ergo, .mew. Handshake names are decentralized DNS, not just wallet addresses (via HIP-2). Discussion of decentralized subdomains as NFTs on Ergo (bounty: 5K ERG for Rosen Bridge HNS integration).

### ErgoHack X Registration & Activity
ErgoHack X (05/25–06/01) registration open. Projects registered in channels: #sigma-quest, #rust-chain, #codeutxo, #pattern, #web3lancer, #game-of-prompts. Honeypot Kickstart reached 100% funding (200 ERG from 8 contributors).

### Monetary Philosophy & Market Dynamics
kushti emphasized distinction between "making money" (productive mining/creation) and "fooling someone to convert fiat to fiat" (scam behavior). Crypto industry lacks serious thought on monetary transformation; Ergo positioned as one of few "islands of sanity." Discussion: need to bridge investor sentiment (price/liquidity) with developer vision (sound money, utility) without tribalism.

### Ecosystem Partnerships & Use Cases
- Lenfi: rsERG now borrowable asset
- Dexy Gold: Oracle Pool v1 & v2 (GORT rewards)
- Use cases: barter/exchange networks (low-hanging fruit), services before goods, decentralized trade financing via Palmyra + Chainlink proof-of-reserve + IoT sensors
- ChainLink oracles chosen for network size and function breadth; multi-oracle support planned (including native Ergo oracles)

## Important Decisions or Announcements

- [@kushti, msg#559908, 2025-05-21]: "All the Dexy mainnet contracts deployed"
- [@kushti, msg#559909, 2025-05-21]: "Bootstrapped 1000 ERG in the LP, 100 in the bank"
- [@kushti, msg#560032-560033, 2025-05-20]: "Honeypot Kickstart" reached 100% funding (200 ERG)
- [@HQΣr, msg#560653, 2025-05-24]: Pulse stealth user & inbox testing open; requests bug reports
- [@HQΣr, msg#560688, 2025-05-24]: Pulse full feature announcement — decentralized chat with tipping, private inbox, AI assistant, multi-room support
- [@DiscordBridge (Glasgow), msg#559748, 2025-05-19]: "The first few Ergohack projects registered now have channels & descriptions available"
- [@kushti, msg#560722, 2025-05-25]: "Private ui is under testing" (Dexy)
- [@qx(), msg#560746, 2025-05-25]: New sign-up link for 2025 Ergo Meetup (non-GitHub option provided)

## Technical Q&A Worth Preserving

- **Q** (@Grayman, msg#560119): "So all these messages are in boxes with minimal ERG... They will all get erased in 4 years?" (storage rent concern)
  **A** (@HQΣr, msg#560123): "not actually, boxes are empty so they are not applicable for storage rent no?" (empty boxes exempt from storage rent decay)

- **Q** (@Grayman, msg#560540-544): Can covert addresses hide transaction flows if amounts are large and later consolidated?
  **A** (@Patato, msg#560555 & @TMR.ΣRG, msg#560561): Covert addresses provide one-time receives but amounts and on-chain flows remain public; large payments traceable unless mixed in steps; mixer provides box selection to separate outputs across multiple addresses.

- **Q** (@HQΣr, msg#560860): How to hide or encrypt a room ID on-chain for private chat?
  **A** (@c8, msg#560906): "that's the basic value proposition of private public key crypto. you can encode data with someones pub key and only he with private key can decode." (PGP/GPG model applied to chat rooms)

- **Q** (@HQΣr, msg#560581-582): What contracts needed to integrate mixer with Pulse? Mixer, stealth address, ring signature?
  **A** (@HQΣr, reply + @Patato, @Richi): Exploration in progress; stealth addresses and mixer encryption can integrate. Ring signatures research ongoing.

- **Q** (@Ergochampion, msg#559903): "What hardware wallets does ergo have full support on?"
  **A** (@Pulsarz, msg#559904): "Ledger" (with Keystone coming soon per @cannon_q, msg#559921)

- **Q** (@mrtn_ergo, msg#560532): "how is Chain Cash comparable to CKB (Nervos)?" (regarding trust generation in peer-to-peer networks)
  **A** (@kushti): No explicit response, but noted in msg#560839 as topic for future Ergo Book tutorials on bootstrap scenarios

- **Q** (@TMR.ΣRG, msg#560625): "so side chains compete for hash power. I guess I assumed autolykos would do both simultaneously"
  **A** (@mx, msg#560592): "Private merge-mined sidechain would encourage miners to focus main computational power on Ergo while still providing additional income" (clarifies merge-mining model)

## Links Shared

- [ergochats.vercel.app](https://ergochats.vercel.app/): Pulse decentralized chat on Ergo blockchain (primary project link, shared multiple times)
- [https://x.com/chepurnoy/status/1924401895499497655](https://x.com/chepurnoy/status/1924401895499497655): kushti's post on positioning (msg#559741)
- [https://x.com/mhs_sam/status/1924435699031261502](https://x.com/mhs_sam/status/1924435699031261502): Raffle v2 progress update (msg#559746)
- [https://ergohack.io/register/](https://ergohack.io/register/): ErgoHack X registration
- [https://coinmarketleague.com/coin/home](https://coinmarketleague.com/coin/home): Ergo voting link (multiple shares by Yulius Kristianto)
- [https://www.ergoforum.org/t/basis-a-foundational-on-chain-reserve-approach-to-support-a-variety-of-offchain-protocols/5153](https://www.ergoforum.org/t/basis-a-foundational-on-chain-reserve-approach-to-support-a-variety-of-offchain-protocols/5153): Basis reserve contract proposal (msg#559830)
- [https://x.com/ERG_Armeanio/status/1924565371891441838](https://x.com/ERG_Armeanio/status/1924565371891441838): Armeanio's ecosystem thread (msg#559875)
- [https://x.com/ThatOtherFella_/status/1923698620412633219](https://x.com/ThatOtherFella_/status/1923698620412633219): (linked by kushti, msg#559877)
- [https://youtube.com/watch?v=EGcp_T3AiWk](https://youtube.com/watch?v=EGcp_T3AiWk): Handshake presentation by Johnny Wu (msg#560184)
- [https://HNS.sh](https://HNS.sh): Handshake resources (msg#560186)
- [https://Shakeshift.com](https://Shakeshift.com): Handshake explorer (msg#560186)
- [https://handshake.org](https://handshake.org): Official Handshake website (msg#560186)
- [https://x.com/discosolaris/status/1925214725731684502](https://x.com/discosolaris/status/1925214725731684502): DiscoSolaris discussion thread (msg#560194)
- [https://x.com/fernandofalci/status/1925206183444394406](https://x.com/fernandofalci/status/1925206183444394406): Additional Handshake resources (msg#560189)
- [https://bobwallet.io/](https://bobwallet.io/): Non-custodial Handshake wallet (msg#560174)
- [https://shakestation.io/](https://shakestation.io/): Handshake wallet/platform (msg#560172, owner is HandshakeJesus)
- [https://simplex.chat/docs/simplex.html](https://simplex.chat/docs/simplex.chat/docs/simplex.html): SimpleX Chat protocol comparison (msg#560614)
- [https://github.com/reputation-systems/comment-system-design](https://github.com/reputation-systems/comment-system-design): Beene comment/reputation system design (msg#560232)
- [https://x.com/NeuralYogi/status/1925619813134619079](https://x.com/NeuralYogi/status/1925619813134619079): Neural Yogi on video generation (msg#560322)
- [https://x.com/AngryTomtweets/status/1925478743881261214](https://x.com/AngryTomtweets/status/1925478743881261214): Thread on video tech (msg#560331)
- [https://youtu.be/OBxSGzq9SiM](https://youtu.be/OBxSGzq9SiM): Sub-blocks video ("It's Fast") (msg#560295)
- [https://x.com/LenfiOfficial/status/1925199019405349292](https://x.com/LenfiOfficial/status/1925199019405349292): rsERG on Lenfi announcement (msg#560284)
- [https://x.com/NeuralYogi/status/1925601387284455644](https://x.com/NeuralYogi/status/1925601387284455644): Neural Yogi marketing thread (msg#560303)
- [https://deepmind.google/models/veo/](https://deepmind.google/models/veo/): Google Veo AI video generation (msg#560313)
- [https://x.com/binji_x/status/1907455987365126554](https://x.com/binji_x/status/1907455987365126554): Thread on tokenized bonds & banks (msg#560364)
- [https://x.com/mrtn_ergo/status/1926036468931133854](https://x.com/mrtn_ergo/status/1926036468931133854): Martín Ergo privacy/censorship thread (msg#560526)
- [https://x.com/discosolaris/status/1926266340186161454](https://x.com/discosolaris/status/1926266340186161454): DiscoSolaris thread (msg#560622)
- [https://www.playlab.ai/project/cmb2amonq02puolii7omrjvex](https://www.playlab.ai/project/cmb2amonq02puolii7omrjvex): LLM-guided starter kit for ErgoHack (vibe coding) (msg#560633)
- [https://x.com/chepurnoy/status/1925830132117184740](https://x.com/chepurnoy/status/1925830132117184740): kushti's post (msg#560374)
- [https://x.com/HQ3r_erg/status/1926414479614513362](https://x.com/HQ3r_erg/status/1926414479614513362): Pulse full announcement thread (msg#560687)
- [https://docs.google.com/forms/d/e/1FAIpQLSd3n_T6VIzVRagFhx6OAfCNVPleIFy4_fLZysHGqcuJlV1KOg/viewform](https://docs.google.com/forms/d/e/1FAIpQLSd3n_T6VIzVRagFhx6OAfCNVPleIFy4_fLZysHGqcuJlV1KOg/viewform): Ergo Meetup 2025 sign-up form (non-GitHub) (msg#560746)
- [https://x.com/chepurnoy/status/1926755029106507817](https://x.com/chepurnoy/status/1926755029106507817): kushti's late-week post (msg#560775)

## Unresolved Questions

- **Sub-blocks parameter optimization timing & community testing scope**: No concrete deadline set; "soon" mentioned but requires coordinated testnet experiments with difficulty/block-time tweaking before mainnet decision.
- **Private sidechain technology choice**: kushti flagged DarkFi, Midnight, Aleo as potential candidates but no decision made on which integration to pursue first.
- **Pulse IPFS integration & livestream feature**: HQΣr asked community but not yet implemented; depends on ERGohack outcome.
- **Pulse current encryption strength**: HQΣr acknowledged (msg#560620) "current encryption is shit, i need to study new ways" — cryptography audit/hardening pending.
- **Rosen Bridge HNS integration