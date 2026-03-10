---
title: "Ergo General Chat — 2023-W04"
date_start: "2023-01-23"
date_end: "2023-01-29"
type: telegram_weekly
channel: general
week: "2023-W04"
source: telegram
message_count: 484
categories: [community, wallet, defi, bridges, technical, governance, ecosystem, marketing]
key_terms: [ErgoHack VI, hackathon, registration, prize pool, SigUSD, ErgoPad, Yoroi, migration, February 28, Nautilus, SafeW, Terminus, seed phrase, duckpools, ErgoLend, collateralization, pool lending, p2p lending, Spectrum, SPF]
---
# Ergo General Chat Summary — 2023-W04 (Jan 23–29)

## Key Topics Discussed

- **Yoroi Wallet Sunset**: Yoroi support for Ergo ending February 28, 2023. Users must migrate to alternative wallets (Nautilus, SafeW, Terminus, Satergo) using their seed phrases.

- **ErgoHack VI – Cypherpunk Finance**: Registration open Jan 19–Feb 21; hackathon runs Feb 8–22. Prize pool: 18k SigmaUSD + 300k ErgoPad tokens.

- **Spectrum Finance IDO ($SPF)**: Community round contribution period began Jan 26; 37% sold within 24 hours. Utility includes off-chain executor fees, Spectrum Networks validator rewards, and protocol fee reduction.

- **DuckPools IDO**: Pool-based lending platform for ERG and native assets launching on ErgoPad. Staker round whitelist live.

- **Storage Rent & NFT Safety**: Community discussion on whether NFTs in low-ERG UTXOs face risk of loss to miners. EIP-68 proposed to burn singleton tokens instead of claiming them; debate ongoing on whether retroactive or auto-consolidation UX solutions are preferable.

- **Rosen Bridge Status**: Active development on plasma layer; soft testnet available at soft.rosen.tech (warned as unfinished; funds risk). No official mainnet launch date confirmed.

- **Lithos Protocol**: Community attention on GPU mining protocol; Twitter Space co-hosted by Sigmaverse.

- **Speech & Communication**: Comment raised that kushti's technical explanations contain many filler words ("uhm", "yeah"), making content harder for non-native English speakers to follow. Suggestions: live translation, subtitles, or Russian with English voiceover.

## Important Decisions or Announcements

- [@chrom, msg#364496, 2023-01-23]: ErgoHack VI announced with 18k SigmaUSD + 300k ErgoPad prize pool; registration Jan 19–Feb 21.

- [@CW, msg#364646, 2023-01-24]: Community chats moving from Telegram/Discord to Reddit for decentralized lending protocols discussion; allows async responses across timezones.

- [@glasgowm, msg#364648, 2023-01-24]: ErgoHack main chat bridged to Telegram (t.me/ErgoHack) for Discord-free access.

- [@Ergo NEWS, msg#364671, 2023-01-24]: PSA urging Yoroi users to migrate before Feb 28; high priority.

- [@Armeanio, msg#364750, msg#364758–759, 2023-01-25]: Exploring takeover of Yoroi backend post-sunset to allow extended migration window; keeping in-wallet exit door open given legacy users still appear years later (e.g., from CoinBarn 2019/2020).

- [@Aberg, msg#365106, 2023-01-27]: Confirmed max derived addresses in Ergo wallet: 2^31–1 (2,147,483,647) — signed 32-bit integer limit.

- [@Cheese, msg#365417–420, 2023-01-28]: Storage rent issues are primarily UX, not protocol failure; proposed wallet auto-consolidation via chained transactions and UI alerts as practical solutions.

## Technical Q&A Worth Preserving

- **Q** (@HelixEvo, msg#365097): What is the maximum number of derived addresses an Ergo wallet can have?  
  **A** (@Aberg, msg#365106): 2^31–1 (2,147,483,647) — the signed 32-bit integer limit.

- **Q** (@Rj, msg#364843): Can Ergo send to thousands of addresses simultaneously?  
  **A** (@Rj, msg#364843): Yes, Ergo can send up to thousands of addresses at the same time.

- **Q** (@gg, msg#365400): Can NFTs unmoved for 4 years be drained by storage rent?  
  **A** (@Unknown, msg#365401): If the UTXO has sufficient ERG (≈0.14 ERG), NFTs are safe for centuries. If insufficient, miners can claim the UTXO. EIP-68 proposes burning singleton tokens instead.

- **Q** (@Unknown, msg#365465): If a UTXO is expired and ERG is insufficient for storage rent, can miners claim only ERG or all assets?  
  **A** (@Koutelier, msg#365466–467): Miners claim ~0.14 ERG per transaction; tokens are unaffected. With 1 ERG, it takes ~32 years for miners to empty the UTXO.

- **Q** (@Unknown, msg#365459): How can I burn tokens (not ERG)?  
  **A** (@Koutelier, msg#365460–462): Use token minter tool; be cautious — burned tokens cannot be restored. Tokens sent to dead addresses cannot be reclaimed by miners (only ERG is subject to storage rent).

- **Q** (@Tommy, msg#365229): Which wallet should I migrate to from Yoroi, and what is the process?  
  **A** (@Unknown, msg#365230–231): Nautilus or SafeW (Chrome/Brave), or Ergo Wallet (Android) / Terminus (iPhone). Simplest: restore the same seed phrase in a new wallet; no need to send funds.

- **Q** (@Unknown, msg#365485): Has Koinly improved Ergo integration?  
  **A** (@lexymon, msg#365485): Yes; Koinly switched Ergo integration to "in progress". (@TMR.ΣRG, msg#365425–432): CSV import workaround documented: export from SafeW, restructure headers (date, sent amount, sent currency, received amount, received currency, fee amount, fee currency, txn hash), upload to Koinly.

- **Q** (@Unknown, msg#365492): Is Spectrum Networks a sidechain?  
  **A** (unresolved): Mentioned as related to $SPF utility but no technical definition provided in thread.

- **Q** (@kushti, msg#364678–680, 2023-01-24): What caused Yoroi disk overflow and is it resolved?  
  **A** (@kushti, msg#364680): Disk overflow on server; issue should now be fixed. (@MrStahlfelge, msg#364681): Yoroi uses one default node but can auto-detect others.

## Links Shared

- [https://www.ergohack.io/](https://www.ergohack.io/): ErgoHack VI registration & details.
- [https://docs.ergoplatform.com/ergo-foundation-2022/](https://docs.ergoplatform.com/ergo-foundation-2022/): Ergo Foundation 2022 Transparency Report.
- [https://youtu.be/UjLUvOhjPDI](https://youtu.be/UjLUvOhjPDI): Weekly Update & AMA (Jan 26, 2023).
- [https://rss.com/podcasts/erg/](https://rss.com/podcasts/erg/): Ergo Platform AMAs on multiple platforms (RSS feed).
- [https://youtu.be/TsaxuI6dBSs](https://youtu.be/TsaxuI6dBSs): Weekly Dev Update (Jan 22, 2023).
- [https://youtu.be/yovb9jhQpgM](https://youtu.be/yovb9jhQpgM) & [https://anchor.fm/thesigmacast](https://anchor.fm/thesigmacast): Hash It Out w/CW (Ergo Hackathons episode).
- [https://vxtwitter.com/sigmaverse_ergo/status/1615513141563256833](https://vxtwitter.com/sigmaverse_ergo/status/1615513141563256833): Sigmaverse Twitter Space w/Lithos Protocol.
- [https://github.com/Lithos-Protocol/LitePaper](https://github.com/Lithos-Protocol/LitePaper): Lithos Protocol documentation.
- [https://t.me/LITHOS_Protocol](https://t.me/LITHOS_Protocol): Lithos Protocol Telegram.
- [https://www.reddit.com/r/ergonauts/comments/10j58ip/community_chat_tuesdays_decentralized_lending/](https://www.reddit.com/r/ergonauts/comments/10j58ip/community_chat_tuesdays_decentralized_lending/): Community Chat (Tuesdays) on Reddit for decentralized lending discussion.
- [https://app.spectrum.fi/ergo/swap](https://app.spectrum.fi/ergo/swap): Spectrum DEX.
- [https://soft.rosen.tech/](https://soft.rosen.tech/): Rosen Bridge soft testnet (⚠️ unfinished; funds at risk).
- [https://www.ergopad.io/whitelist/duckpools/staker](https://www.ergopad.io/whitelist/duckpools/staker): DuckPools staker round whitelist.
- [https://ido.spectrum.fi](https://ido.spectrum.fi): Spectrum Finance IDO platform.
- [https://twitter.com/i/spaces/1RDGlaLlXymJL](https://twitter.com/i/spaces/1RDGlaLlXymJL): Weekly Ergo Update Twitter Space (Jan 26, 2023).
- [https://youtu.be/YMv1x1ZOlzo](https://youtu.be/YMv1x1ZOlzo): Hash It Out episode on ErgoHack hackathons.
- [https://anchor.fm/thesigmacast/episodes/PaideaDAO---Integration-of-DAOs-in-Real-World-Businesses-e1u2ctr](https://anchor.fm/thesigmacast/episodes/PaideaDAO---Integration-of-DAOs-in-Real-World-Businesses-e1u2ctr): Sigma Podcast – Paideia DAO Twitter Space recap.
- [https://www.vxtwitter.com/CardanoProxies/status/1619711971267432448](https://www.vxtwitter.com/CardanoProxies/status/1619711971267432448): Cardano Proxies weekly Ergo↔Cardano Space (Sundays 7PM UTC).
- [https://github.com/ergoplatform/eips/pull/68](https://github.com/ergoplatform/eips/pull/68): EIP-68 — Singleton token burning proposal.
- [https://ergoplatform.org/en/blog/2022-02-18-ergo-explainer-storage-rent/](https://ergoplatform.org/en/blog/2022-02-18-ergo-explainer-storage-rent/): Storage rent explainer.
- [https://thierrym1212.github.io/tokenminter/index.html](https://thierrym1212.github.io/tokenminter/index.html): Token minter tool.
- [https://t.me/ergo_mining](https://t.me/ergo_mining): Ergo Mining Telegram group.
- [https://t.me/ErgoSocials](https://t.me/ErgoSocials): Ergo ecosystem marketing/updates community channel.
- [https://rankmywallet.com/](https://rankmywallet.com/): DCA portfolio tracker.
- [https://twitter.com/ErgoClips/status/1617215631362822146](https://twitter.com/ErgoClips/status/1617215631362822146): ErgoClips – kushti speech example (filler words observation).

## Unresolved Questions

- **Rosen Bridge mainnet timeline**: No confirmed launch date; development ongoing (plasma layer).
- **Spectrum Networks definition**: Mentioned as $SPF utility but technical architecture (sidechain vs. layer 2) not clarified.
- **Storage rent + NFT safety trade-off**: EIP-68 debate unresolved — burning vs. claiming; community split on whether retroactive tax or UX auto-consolidation is better solution.
- **kushti's English fluency for public communication**: Observation raised; no formal response or plan to address (e.g., live translation, subtitles).
- **Koinly Ergo integration timeline**: Switched to "in progress" as of week; expected completion date unclear.
- **Yoroi backend takeover post-sunset**: Armeanio exploring possibility; status TBD.