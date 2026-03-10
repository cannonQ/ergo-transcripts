---
title: "Ergo General Chat — 2024-W46"
date_start: "2024-11-11"
date_end: "2024-11-17"
type: telegram_weekly
channel: general
week: "2024-W46"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2024-W46 Summary

## Key Topics Discussed

- **SigmaUSD v1 vs v2 redemption issues**: Users reported stuck redemption transactions on the old v1 interface (old.sigmausd.io). UI selection matters — mobile wallet works reliably, web interface (sigmausd.io) has assembly issues. Refund button and reconnecting wallet as dApp connector are workarounds. [@kushti, msg#525053, 525286; @Flying Pig, msg#525288]

- **Mobile wallet UX/UI modernization**: Community pushed for aesthetic overhaul of Ergo Mobile Wallet. Current design perceived as outdated (2015-era aesthetic). Nautilus and Minotaur wallets mentioned as alternatives with better UX, but Ergo Mobile still functional. Modern design language needed for user onboarding. [@Pluto, msgs#525029–525096; @cannon_q, msg#525113]

- **Rosen Bridge liquidity and cross-chain flows**: rsERG on Cardano showing healthy arbitrage volume (~$145k in 24h). Bridge expansion to Dogecoin and BSC confirmed. Cross-chain arbitrage strategies emerging (dump on CEX → bridge to Cardano → swap ADA → profit). Community debated whether liquidity bootstrapping requires temporary EF support. [@Flying Pig, msg#526340, 526362; @Rj, msg#525897; @kusht, msg#526366]

- **Sub-blocks protocol upgrade**: Still in active development. No ETA without finished spec/EIP, but timeline is "months not years." kushti has modified node generating sub-blocks; processing stubs and votable parameter (number of subblocks per block) done. UI experience will arrive before full deployment. Soft-fork likely final step. [@kushti, msgs#525720–525734]

- **Ergo scalability roadmap**: Multi-output transactions (15,000+ outputs per tx in live environment), input ordering (sub-blocks with <1sec times), layer 2 solutions, sidechains, and faster confirmation protocols all under consideration. No magic bullet — concrete applications needed to optimize solutions. [@cannon_q, msg#527041; @kushti, msg#527035]

- **ErgoPad sunset**: After 3 years, ErgoPad team shut down service. Staking contracts immutable on-chain; newer projects use off-chain bots for retry logic. Discussion around launchpad innovation—meme launchpads viewed as temporary degen experiment. Community crowdfunding via Paideia DAO proposed as alternative. [@HQ3rr, msgs#525909–525945; @kushti, msg#525971]

- **Ergo Book compilation**: kushti compiling community forum posts, articles, papers into single Markdown reference covering ideological roots (Ergo Manifesto, Grassroots), money programmability, CBDC critique, sidechain/L2 constructions. Contributions sought (writing, proofreading, translation). French translation offered by Giufa. [@kushti, msg#526844; @Giufa, msg#526850]

- **Random Coin and Hashrate Coin proposals**: kushti proposed trustless oracle primitives: (1) RandomCoin with price walking based on pseudorandom header bits; (2) HashrateCoin synthetic for tracking mining hashrate. Both leverage PoW entropy. Casino-like mechanics with DexyRandom, GluonRandom variants discussed. [@kushti, msgs#526218, 526227, 526406]

- **Marketing consolidation call**: Community marketing call scheduled Nov 15, 4pm UTC. Goal: sync multiple ongoing initiatives (Sigmanauts, ErgoPad revival, MewFinance, etc.) on unified strategy. Open floor for pain points and grassroots campaigns. [@kushti, msgs#526737, 526802; @BΣΣ, msg#526187]

- **Ledger hardware wallet integration**: Keystone integration in progress by Pgr456. Currently blocked on sigma-rust library changes. "Hopefully finished this year" if all works out. Ledger Nano S/Plus integration also ongoing; Keystone preferred for airgapped QR-based signing. [@Pgr456, msgs#525784–525799]

- **Nautilus dApp Connector documentation**: First comprehensive Nautilus dApp Connector docs published at https://docs.nautiluswallet.com with feedback requested. [@kushti, msg#525338]

- **Paideia mainnet launch**: Paideia DAO governance quietly went live on mainnet at https://app.paideia.im/. Old test DAOs available at beta.paideia.im. Community already casting votes. [@Ergo NEWS, msg#527098; @iVacuum, msg#526493]

- **Sigma 6.0.0-RC1 release imminent**: Final candidate going live today. kushti merging PRs, fixing tests. Major version with mempool improvements noted. [@kushti, msg#526882, 527091]

- **Mining Swaps Payments live**: Sigmanauts Mining Pool now distributing bonus rewards via in-pool swaps. qx() and Koutelier donated ~19.5M COMET combined to seed bonus pool. [@Marc the Shark, msgs#525631–525636; @qx(), msgs#525676–525689]

- **Byson/BitVM bridge discourse**: Community discussion on BitVM (Bitcoin zk bridge) vs Rosen assumptions. BitVM uses zk-challenge games for withdrawal validation; Rosen uses dual-layer multisig with slashing. BitVM still whitepaper-stage; Rosen live. Armeanio cautious on ZK performance (log(n) pairing checks on Bitcoin without pairing curves). [@Armeanio, msgs#526070, 526145; @Matt, msg#526160]

- **Cross-chain launchpad and DeFi expansion**: HQ3rr proposing "community liquidity bootstrapping" via MewDex with modular support for Rosen-wrapped assets. Interest in meme launchpad but current DEX not ideal. Discussion of Ergo-exclusive vs cross-chain mentality—conclusion: both needed. [@HQ3rr, msgs#525952, 526624; @kushti, msg#527032]

- **Kaspa protocol technical discussion**: New community member concerned about Kaspa's history and protocol soundness. kushti confirmed prior knowledge of Yonatan (Kaspa founder) since 2016, and vouched for technical integrity after "lost blocks" incident. Input flags retained for future programmability. Potential for Rosen bridge to Kaspa if multisig support added. [@Gad, msgs#527036–527087; @kushti, msgs#527050–527069]

- **Argentina remittance/PoW adoption insights**: Louis reported observing real-world crypto adoption in Buenos Aires—food shops offering same discounts for cash vs crypto due to card processing fees (6–10%) + government brute tax (6%). Multiple retailers using simplefi.tech for USDT-to-stablecoin conversion. Takeaway: people want **ownership**, not privacy. Crypto as payment rail competing with broken legacy systems. [@LouisLibre, msgs#526925–526938]

- **CBDC and monetary programmability as marketing angle**: kushti proposing anti-CBDC messaging as emerging narrative, with Ergo positioned as defining programmable money ownership vs government control. Mentions Elon's demurrage interest (flat DOGE supply = forever decreasing) as mass-market angle. [@kushti, msgs#526215, 526416, 526195–526197]

## Important Decisions or Announcements

- [@kushti, msg#525021, 2024-11-11]: Recommended trying Nautilus wallet for SigmaUSD redemption issues if encountering UI bugs on web interface.

- [@Ergo NEWS, msg#525025, 2024-11-11]: **Weekly update**: Rosen Bridge integrated BSC and Dogecoin (testing/deployment phase); Rosenet p2p network testing successful; SigmaO.cc relaunched; Keystone hardware integration ongoing; Ledger integration in progress; c8e4d2a created live mempool visualization; ErgoDevs working on Ledger integration (received functional review, addressing feedback).

- [@HQΣr, msg#525392, 2024-11-12]: Established ErgoSanta 2024 donation wallet: `9eq54XD5C7o78HgxyZ94SjNzhoesp4FCczAgggzqCnUBcFFBGkv`

- [@kushti, msg#525576, 2024-11-13]: **Developer chat** scheduled for next 30 mins in #development channel.

- [@kushti, msg#525737, 2024-11-13]: Urged participation in **Friday community call on marketing** (Nov 15, 4pm UTC) to sync multiple ongoing ecosystem initiatives.

- [@Ergo NEWS, msg#527098, 2024-11-17]: **Weekly update**: Community call on Nov 15 successful; more calls planned; Nautilus documentation published; Ledger UI improvements in progress; ergo-graphql v0.5.3 released; **Sigma 6.0.0-RC1 finalized and releasing**; **Paideia mainnet launched** (https://app.paideia.im/); ErgoPad shutdown confirmed after 3 years; Mining Swaps Payments live on Sigmanauts Pool; Field (peer-to-pool pledging) in private testing; ErgoHack IX roundup published.

- [@Marc the Shark, msg#526029, 2024-11-14]: Announced **Sigmanauts Mining Pool dashboard release** with custom mining visualizations and real-time stats.

- [@MavΣrickBg, msg#526601, 2024-11-16]: **Bober Game Night** (Monopoly) scheduled Nov 17, 7pm UTC; 30 BOBER entry fee (~2 ERG); 50% to winner, 50% to dev fund.

- [@qx(), msg#526126, 2024-11-14]: **Community Zoom call** Nov 15, 4pm UTC—ID: 954 3704 1424, Passcode: 705788.

- [@qx(), msg#526256, 2024-11-15]: Promoted **community vote** on CyberVerse (Paideia governance).

- [@HQΣr, msg#526978, 2024-11-17]: **ErgoSanta 2024 announcement**—contributions open to same wallet; rules same as last year; prior year inbox at santa.mewfinance.com/inbox.

- [@kushti, msg#526882, 2024-11-17]: **Sigma 6.0.0-RC1 release today**—final candidate version.

## Technical Q&A Worth Preserving

- **Q** (@Jack Σ): When redeeming SigRSV, transaction gets stuck or fails after an hour. Is the contract lacking ERG funds?
  **A** (@Rj, @kushti): Multiple concurrent redeemers may cause conflicts; oracle price changes might block; try higher miner fee. Try Nautilus wallet. (@glasgowm): Use refund button in menu; disconnect and reconnect wallet as dApp connector instead of manual connect. (@Flying Pig): sigmausd.io web interface has persistent tx assembly issues—mobile wallet is reliable alternative.

- **Q** (@K Chan): How to configure full node for mining? Mining rewards address differs from usual wallet address?
  **A** (@kushti): Mining rewards sent to special contract with 720-block timelock. (@Glasgow): See FAQ https://docs.ergoplatform.com/mining/setup/solo-faq/#why-do-my-rewards-go-to-a-different-address

- **Q** (@S N): How long for Ergo to appear on major CEXes like Binance?
  **A** (@kushti): Depends; TradeOgre 1 day, most CEXes 1–1.5 months.

- **Q** (@Unknown): Why do mempool transactions fail to confirm after multiple retries?
  **A** (@kushti): Version 4.0.44+ has spam limits—won't download too many txs from single peer. Use multiple peers. Fee markets exist; raise minimum propagation fee to block spammers. Spam txs timeout after time T and dump from mempool. (@Flying Pig): Ergopad staking had direct contract interaction—simultaneous unstakes collide. Newer contracts use off-chain bots for retries. Mempool support now better.

- **Q** (@企鹅杀手): dApps on Ergo frequently fail and run slow. Why?
  **A** (@qx()): Contract design issues, not chain issues. Ergopad staking used old method; newer contracts fixed it. Unreliable dApps self-correct via market forces. (@Luivatra): Proxy approach has tradeoffs; Paideia returned to direct interaction with better mempool support.

- **Q** (@Pluto): How to improve Ergo Mobile Wallet UI/UX?
  **A** (@cannon_q): Start with aesthetics. Could integrate dApp section (like CruxFinance). Alephium and Vespr wallets are reference designs. Nautilus mobile coming "2 weeks" (joke). (@kushti): Need to pass specific design requirements to ErgoDevs DAO or Mr S. Check Nautilus, Minotaur, Nau wallets for reference.

- **Q** (@Ollie): When will ERG be supported on Keystone hardware wallet?
  **A** (@Pgr456): Made progress but blocked on sigma-rust changes. Hoping to finish "this year" (late 2024). QR-based airgapped signing is advantage over Ledger.

- **Q** (@Unknown): Changed phone, restored seed phrase, wallet shows 0 ERG but old phone has balance. Same address?
  **A** (@Patato): Check wallet address on explorer—if balance shows there, issue is node connection. Tap magic wand icon in node URL settings to auto-fetch working nodes. Check if multiple derived addresses active (different paths). (@Pulsarz): Try restoring in Nautilus browser extension as sanity check.

- **Q** (@Biscuitz): Can I buy ERG in USA with Coinbase wallet?
  **A** (@qx()): No direct Coinbase onramp. Best path: (1) Buy ADA on Coinbase → swap on Splash DEX to rsERG (stay on Cardano), or bridge to Ergo via Rosen; (2) Buy ADA → use simpleswap.io to swap to ERG. (@qx()): Also available on TradeOgre.

- **Q** (@Unknown): Is Blobtopia game suitable for Ergo mainnet?
  **A** (@Unknown): Proof-of-concept works but block confirmation delays kill UX. Good candidate for sub-blocks testing.

- **Q** (@Gad): Why does Kaspa retain input flags if Bitcoin Script is stripped?
  **A** (@kushti): Unclear from code inspection. Future-proofing for programmability? (ChatGPT answer dismissed by @HQ3rr: "We don't do GPT.") kushti noted it's non-obvious and worth asking Kaspa team directly.

## Links Shared

- [https://sigmausd.io/#/reservecoin]: SigmaUSD v2 redemption interface (has issues; mobile wallet preferred).
- [https://old.sigmausd.io/]: Old SigmaUSD v1 interface (deprecated; avoid).
- [https://docs.nautiluswallet.com]: Nautilus wallet dApp Connector technical documentation.
- [https://github.com/minotaur-ergo/minotaur-wallet]: Minotaur wallet GitHub (iOS + Android, not on app stores yet).
- [https://docs.ergoplatform.com/mining/setup/solo-node/]: Ergo solo mining setup docs.
- [https://docs.ergoplatform.com/mining/setup/solo-faq/#why-do-my-rewards-go-to-a-different-address]: FAQ on mining reward address timelock.
- [https://www.ergoforum.org/t/a-scalability-plan-for-ergo/226]: Scalability plan forum post.
- [https://docs.ergoplatform.com/dev/protocol/scaling/]: Ergo scaling documentation.
- [https://app.paideia.im/]: Paideia mainnet DAO governance platform.
- [https://beta.paideia.im]: Paideia legacy testnet DAOs.
- [https://sigmanauts.com/mining]: Sigmanauts