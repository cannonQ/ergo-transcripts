# Ergo General Chat — 2026-W01 Summary

## Key Topics Discussed

### Subblocks Development & Protocol Upgrades
kushti reported the subblocks whitepaper draft is under development with a planned release around January 2-3, with devnet currently under testing. The implementation combines subblocks with non-democratic leadership and community push to drive progress. Subblocks are critical for combining with anonymity features, non-custodial design, and Autolykos v2 for competing as p2p cash products.

### $USE Stablecoin Integration & Liquidity
Richi announced $USE has launched concentrated liquidity pools on Binance Smart Chain with USDT pairs, with plans for rsERG/USDT and rsUSE/USDT pairs potentially on Coinbase via Solana chain. Sufficient liquidity exists at 0.05% fees; next steps include analytics pages and "full integration frenzy" across platforms.

### Rosen Bridge & Palmyra Ecosystem
Dan Friedman detailed Rosen Bridge integration with Chainlink for proof-of-reserve and on-chain warehouse receipts supporting decentralized trade financing. The ecosystem is building multiple oracle layers (Oracle Pool v1 and v2 running for Dexy Gold with GORT rewards) with plans to invest in native Ergo oracles.

### Community-Built dApps (SIGHT, SAY, Ephemeral Messenger)
qx() released three fully decentralized, IPFS-hosted applications:
- **SIGHT**: Anonymous reporting tool using Proof-of-Work spam prevention and GPS-tagged tokens (~$0.01 per report)
- **SAY**: Twitter alternative with token-based posts, follow lists stored on-chain, ErgoPay wallet integration
- **Ephemeral Messenger v1.1**: Self-destructing on-chain messages with vanity or passphrase-encrypted modes; burners earn ERG rewards

### Block Reward Reduction & Emission Trajectory
A block reward reduction occurred during the week, bringing Ergo's inflation below both ADA's and USD inflation rates. Ergo will reach stable 3 ERG/block for 20 years after one more reduction, with inflation falling below 1% by June 2026. Mining security now depends on market activity and community conviction rather than rewards alone.

### Mobile Wallet Compatibility Issues
Users reported Ergo Mobile Wallet showing incompatibility warnings on Google Play despite working on Android 16/latest versions. Actual issue appears to be Play Store device filtering for backward compatibility; workaround is direct GitHub APK download. Minotaur wallet confirmed as alternative; Nautilus available as browser extension via Lemur on Android.

### Mining & Autolykos Security
Discussion around Autolykos protection against ASIC/FPGA attacks. Existing memory-hard and frequency-hopping requirements make ASIC development uneconomical; FPGA bitstream maintenance costs remain prohibitive. Long-term algorithm upgrade path exists but not immediately needed.

### Community Moderation Framework
qx() established formal community rules (GitHub repo: `andrehafner/ergo_socials_framework`) with enforceable Discord/Telegram standards. Grayman appointed admin; moderation focused on preventing spam and personal attacks while preserving "chaos" and off-topic discussion balance. Proposed soft-alert bot using local LLM via Ollama for rule violations.

## Important Decisions or Announcements

- [@kushti, msg#587034, 2025-12-29]: Confirmed block reward reduction achieved; Ergo inflation now below ADA and USD rates within 7 days
- [@kushti, msg#587075, 2025-12-29]: Made Grayman admin
- [@qx(), msg#587053, 2025-12-29]: Enforcing Ergo community guidelines from website as full mod with pinned rules
- [@Richi [MANA], msg#587505, 2026-01-01]: $USE/USDT concentrated liquidity pool live on BSC with potential expansion to Coinbase
- [@qx(), msg#587587, 2026-01-02]: Released SIGHT (anonymous reporting) and SAY (p2p social) as free IPFS-hosted applications
- [@kushti, msg#587567, 2026-01-02]: Published Matrix whitepaper draft (sub-blocks/input-blocks) to GitHub
- [@HQΣr, msg#587605, 2026-01-03]: MewPump token launch platform live; first token deployed
- [@qx(), msg#587689, 2026-01-04]: Ephemeral Messenger v1.1 released with passphrase encryption; burn incentives working

## Technical Q&A Worth Preserving

- **Q** (@Cheese, msg#587553): If fees are paid through the TRUE contract, is the miner expected to reject transactions which attempt to spend the fee UTXO of another previous transaction?
  **A** (@kushti, msg#587555): Yes, should prioritize his own logically

- **Q** (@fiqihalam32, msg#587812): Is Lithos Protocol suitable for mining with a gaming PC that has 1 GPU instead of mining rigs?
  **A** (@GabGno, msg#587844): Yes! The card can mine without needing to rely on a centralized pool operation, yet be as profitable

- **Q** (@T Mas, msg#587448): What countermeasures are available if Autolykos is cracked (e.g., ASIC development like XMR's X9)?
  **A** (@ArØhβΣ @Arohbe 🍪, msg#587452): Many built-in features prevent most ASIC devs. Memory cost makes hardware uneconomical; FPGAs more plausible but require bitstream maintenance and good chips at reasonable cost

- **Q** (@Unknown, msg#587317): Are you packaging Ergo wallet for F-Droid? Trying to build locally with F-Droid server.
  **A** (@Unknown, msg#587704, msg#587705): Will attempt again; currently built for Android 13; can optimize for newest versions and submit PR

- **Q** (@qx(), msg#587690): Can mining pools code in ephemeral message burn logic, order their burn TX instead of someone else's, and give extra to miners?
  **A** (@qx()): Normies could compete by increasing burn TX amount; technical feasibility confirmed but not answered by Cheese Enthusiast

## Links Shared

- [https://curiaregiscrypto.medium.com/ergos-vision-for-sovereign-money-26f520426c05]: Joe Armeanio's article on Ergo's p2p money vision and taxonomy
- [https://github.com/ergoplatform/ergo/blob/weak-blocks/papers/inputblocks/main.pdf]: Matrix/sub-blocks whitepaper (input blocks design)
- [https://github.com/andrehafner/ergo_socials_framework]: Community social guidelines framework (used for moderation standards)
- [https://docs.ergoplatform.com/contribute/standards/guidelines/]: Ergo Foundation community guidelines
- [https://docs.ergoplatform.com/uses/cbdc/]: Ergo CBDC use case documentation
- [https://bafybeihrrvliydi5a7bipybprvv2yezf3doevsdpzasezujmms6nap7mbi.ipfs.dweb.link/]: SIGHT v1 (anonymous reporting)
- [https://bafybeicooo2vkq3t3x47yvhkgqzdt3ana54xhdpglattqchumkckxc7usu.ipfs.dweb.link]: SAY v1 (p2p social network)
- [https://bafkreic6o4mlp3g3lmlsqai76tfmtiyuzaripgrz422xgfm5lmcf2wlj2q.ipfs.dweb.link/]: Ephemeral Messenger v1.0 (self-destructing messages)
- [https://bafkreibqyazalnfuw7ojlwtahsjoijgxqv2eq4dcgyfnfc4ati2k4mihbm.ipfs.dweb.link/]: Ephemeral Messenger v1.1 (with passphrase encryption)
- [https://mewpump.vercel.app/]: MewPump meme token launch platform
- [https://sigmao.cc]: SigmaO options portal (UI refresh in progress)
- [https://ergoplatform.org/en/get-erg/#Wallets]: Official wallet page (Ergo Mobile, Minotaur, Nautilus, Safew listed)
- [https://github.com/ergoplatform/ergo-wallet-app/releases]: Ergo Mobile Wallet APK releases
- [https://github.com/minotaur-ergo/minotaur-wallet]: Minotaur wallet GitHub (Android Studio build)
- [https://youtu.be/zVKtvaLDwjE]: 2026 New Year AMA video (kushti, Richi, Armeanio)
- [https://youtu.be/tV5UilNUYRY]: Grayman's discussion of 2026 roadmap
- [https://youtu.be/1L0z-Gw2HII]: qx(), Joe, Luca discussion (Gluon mechanism, precious metals)
- [https://memevsmeme.degens.world/events]: Degens World meme creation event
- [https://minerstat.com/dag-size-calculator]: DAG size calculator (GPU mining lifespan estimates)
- [https://x.com/lithosprotocol/status/2006411722467229921]: Lithos Protocol announcement
- [https://x.com/StableUSE/status/2007921987415617627]: $USE liquidity announcement

## Unresolved Questions

- Subblocks whitepaper publication date shifted from late Dec to "around Jan 2-3" due to Stability Workshop trip and development complexity — exact release still TBD
- Formal security audit timeline for EXLE (Ergo Lend) not addressed; HQ3rr recommended testnet approach with test tokens before mainnet
- Ergo wallet Android 16 Play Store compatibility warning root cause not fully resolved — appears to be Play Store device filtering, but dev team engagement level unclear
- MewPump first token launch governance structure (DAO, community voting) not detailed
- Fleet SDK integration for seed import and one-click signing without Nautilus required: @HQΣr flagged as needed but no ETA given
- SAY/SIGHT encryption improvements beyond vanity mode still in development; user feedback on UX not yet collected at scale

---

**Notable Context:**
- mx (Discord bridge user) exhibited erratic behavior early week (Dec 29–Jan 1), including trolling, personal attacks, and off-topic rants; community and kushti redirected focus to Ergo fundamentals. By Jan 1, mx expressed gratitude and commitment to community, suggesting stress-related outburst.
- Turkish Ergonaut community mod (rootz) flagged as needing support due to 12-day hospitalization for mental health; kushti asked for community prayers/support.
- New Year video (Jan 1) featured kushti, Richi, and Joe discussing p2p money, Lithos mining, Gluon mechanics, and market outlook — positioned as optimistic on 2026 ecosystem growth despite bearish price sentiment.