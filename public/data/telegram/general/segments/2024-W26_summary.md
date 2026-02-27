# Ergo General Chat — 2024-W26 Summary

## Key Topics Discussed

- **Ergoversary Celebration (July 1)**: Major content release planned including ecosystem updates from Rosen Bridge, Trade House, Palmyra, Paideia, Lithos Protocol; research contributions from Dionysis Zindros and Lukas Aumayr on fork choice rules and light clients; videos from Bruno W on Gluon and djed alliance, guest content from Nervos on RGB++; first episode of P2Podcast; Kushti presenting on Sigma Trees and "The Next 5 Years of Ergo" [@Andy L, msg#499570]

- **Spam/DDoS Attack Mitigation**: Discussion of Cardano mempool spam attack and Ergo's defenses. Ergo has fee market, mempool filters, p2p layer protections (since v4.0.42), and fee estimation API. Node operators can raise minimum propagation fee rates to prevent spammers from entering mempool [@kushti, msgs#499487, #499492, #499493, #499504, #499505]

- **Nautilus Wallet Updates**: Version 0.10.4 released with Abyss features now included; normal (gold) version auto-updates; canary version is separate [@qx(), msgs#499522, #499531-#499533]

- **rsBTC and SPF Lending Pools**: All tests complete, UI integrations ready. Minor UX issues with Nautilus Wallet integration (users needing reconnect on page refresh) caused Saturday UTC launch delay. Now live on DuckPools [@kushti, msg#499687; @Σddie Lin, msg#499859]

- **Node Peering**: Confirmed that increased peer connections after making node reachable is normal behavior [@Unknown, msg#499681]

- **Mixer Configuration**: Mixer relies on configured nodes; default nodes provided can be replaced with user's own nodes for better privacy. Single node mixer still functional but multiple nodes preferred [@kushti, msgs#499936-#499938]

- **Wallet Seed Phrase Recovery**: Adrian recovered lost ERG wallet (540 ERG) after discovering typo in one seed phrase word; Mewbie had similar experience with "expect" vs "except" [@Adrián, msgs#499588-#499617; @Mewbie, msg#499611]

- **Fund12 Catalyst Proposals**: Bruno W organizing Djed Alliance coordination to identify and promote Ergo-related Catalyst Fund12 proposals [@Bruno Woltzenlogel Paleo, msg#499730]

## Important Decisions or Announcements

- [@Andy L, msg#499570, 2024-06-26]: Major Ergoversary content release July 1 featuring ecosystem updates, research papers, and developer videos
- [@kushti, msg#499687, 2024-06-27]: rsBTC and SPF lending pools launching Saturday UTC (delayed from Friday due to Nautilus Wallet UX issues)
- [@Σddie Lin, msg#499859, 2024-06-29]: rsBTC and SPF pools now live on DuckPools with lending, borrowing, trading, and arbitrage functionality
- [@MavΣrickBg (bober), msg#499907, 2024-06-30]: Ergo has applied to Kraken's new listing form; one developer applied for Kraken position to help with Ergo integration
- [@Aberg Satergo dev, msg#499563, 2024-06-26]: Satergo calling BIP39 passphrase feature "advanced options" to match existing wallet UX patterns
- [@kushti, msg#499519, reply to #499472, 2024-06-25]: Moon Miner logo apparel is rarely used now (reason unclear)

## Technical Q&A Worth Preserving

- **Q** (@HQΣr, msg#499361): How to add JAR to BAT and BAT to Docker for node deployment?
  **A** (implicit context): Standard Docker containerization workflow for Ergo node packaging

- **Q** (@HQΣr, msg#499447): Challenge of building for non-developers vs. developers
  **A** (@HQΣr): "Build for noobs, not for devs" — wallet UX must prioritize accessibility over developer preferences

- **Q** (@Odiseus Me, msg#499680): Is it normal for peer count to increase after making node reachable?
  **A** (@Unknown, msg#499681): Yes, increasing peer connections are the sign that the node is actually reachable

- **Q** (@Alien, msg#499915): Are mixer.conf node addresses required and which ones enable mixing?
  **A** (@kushti, msg#499936): Mixer relies on configured nodes; defaults provided can be replaced with own nodes for privacy. Single node can mix but multiple preferred.

- **Q** (@Adrián, msg#499588): Can't access ERG wallet with seed phrase from Ergo Wallet App
  **A** (@MavΣrickBg, @Mewbie): Check each word against BIP-39 wordlist; seed phrase typos (even 1 character) cause total wallet mismatch. Adrian recovered wallet after finding typo.

- **Q** (@Unknown, msg#499478): How does Ergo handle DDoS aside from hashrate increases?
  **A** (@kushti, msgs#499487, #499492-#499505): Fee market prevents spam; mempool filters allow raising minimum propagation fees; p2p protections since v4.0.42 prevent single peer from flooding neighbors; fee estimation API available (underutilized); RBF by default better than Bitcoin

- **Q** (@Aberg Satergo dev, msg#499547): Better terminology: "BIP39 passphrase" or "mnemonic password"?
  **A** (@Aberg, msg#499563): "Advanced options" — more consistent with existing wallet implementations than both alternatives

## Links Shared

- [https://duckpools.io/](https://duckpools.io/): rsBTC and SPF lending pools now live
- [https://youtu.be/gXOWqIvWg5M](https://youtu.be/gXOWqIvWg5M): Ergoversary celebration content announcement
- [https://youtube.com/live/uGb4ylD5ISY](https://youtube.com/live/uGb4ylD5ISY): Weekly Ergo AMA livestream (June 27)
- [https://www.youtube.com/watch?v=vWEQtHl3pXo](https://www.youtube.com/watch?v=vWEQtHl3pXo): P2Podcast episode 1 (TMRERG and Marc the Shark)
- [https://x.com/DjedAlliance](https://x.com/DjedAlliance): Djed Alliance Twitter (coordinating Fund12 Catalyst proposals)
- [https://docs.ergoplatform.com/mining/setup/join/](https://docs.ergoplatform.com/mining/setup/join/): Ergo mining setup and joining guide
- [https://github.com/bitcoin/bips/master/bip-0039/english.txt](https://github.com/bitcoin/bips/master/bip-0039/english.txt): BIP-39 English wordlist for seed phrase validation
- [https://github.com/ergoplatform/ergo/blob/master/ergo-wallet/src/main/resources/wordlist/english.txt](https://github.com/ergoplatform/ergo/blob/master/ergo-wallet/src/main/resources/wordlist/english.txt): Ergo-specific English wordlist for seed validation
- [https://app.tminusone.pro/#/tokens/17100](https://app.tminusone.pro/#/tokens/17100): Token tracking tool for Dexy Gold
- [https://t.me/ERGtrading](https://t.me/ERGtrading): Trading discussion Telegram channel

## Unresolved Questions

- Why has the Moon Miner logo apparel become rarely used? (kushti notes it went away but reason unclear) [@kushti, msg#499519]
- What is the optimal block time for Ergo layer 1 optimizations? (Discussed as pending technical decision pending community testnet feedback) [@kushti, msgs#499685-#499941]
- Will Kraken integration happen and on what timeline? (One dev applied for position; no confirmed timeline) [@MavΣrickBg, msg#499907]
- Specific timeline for layer 2 sidechains implementation? (Sketches and PRs exist but path forward still being decided) [@kushti, msg#499754]