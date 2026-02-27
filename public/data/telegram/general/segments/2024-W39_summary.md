# Ergo General Chat — 2024-W39 Summary

## Key Topics Discussed

- **ErgoHack IX (UI/UX & Mining)**: Announced for October 25-31, 2024 in Discord. Community brainstorming ideas in dev channels; kushti proposed stealth address-based anonymous voting as idea #8. Focus on improving wallet UX and mining solutions.

- **Rosen Bridge Ethereum Testing**: Semi-public testing phase initiated; watcher-service versions prior to 3.0.0 support ended this week. Volunteers needed for final round of testing (30+ testers).

- **ChainCash Server Testing**: kushti, Dusek, and Jumei testing note passing with a Rust server; real reserve bounty offered for testers.

- **Mew Finance Marketplace "Phygital" Section**: Launched NFTs tied to physical merchandise (Ergo stickers, hats, apparel). qx() managing first merchandise sale automation via simple API capturing payment addresses.

- **Stealth Addresses & Privacy**: Discussion on scanning speed bottleneck (~1ms per test, limiting mobile wallet support). Stealth address creation currently requires Mixer; no direct Minotaur support yet.

- **Sub-blocks & Speed Improvements**: kushti presented Prism blockchain inspiration for current sub-blocks work (input and ordering blocks). Emphasized research-driven development with security proofs (GKL-15 or Prism-style). 6.0.0-alpha2 planned for early next week; 3-month voting period for 6.0 activation; sub-blocks devnet version in few weeks.

- **Sigmanauts Mining Pool Beta**: Testing swap feature allowing miners to mint/burn miner ID tokens at dev.ergominers.com.

- **Dexy Audit & Protocol**: First audit results from 4Eyes received; team addressing findings. High transmutation fees (11.6%) for GAUC→GAU conversion when reserve ratio drops.

- **SigmaO Options Protocol**: Community expressed limited interest due to complexity; HQ3r noted it requires off-chain bot and is underutilized. Potential rehash as 2025 ErgoHack idea.

- **Regional Community Building**: Giufa proposed electing Ergo representatives per linguistic territory (India, China, France, Italy, Spain, Turkey, Russia, Japan) with KOL/influencer partnerships and reward incentives to boost non-English adoption.

- **Wallet & Token Creation UX**: Broly suggested improving Terminus wallet (iOS support) and simplifying token creation (Solana-level ease). HQ3r pointed to tools.ergexplorer.com for fast minting.

- **FAKU Project**: Dan Friedman announced FAKU as internal nickname for development initiative (clarified not to be confused with other uses).

---

## Important Decisions or Announcements

- [@ergo_platform, msg#516860, 2024-09-24]: **ErgoHack IX** launched with theme "Advancing UI/UX Design & Mining Solutions on Ergo" (Oct 25-31, 2024, Discord); prizes TBC.

- [@Armeanio, msg#516102, 2024-09-25]: **Rosen Bridge final testing phase** requires 30+ volunteers; testbed to be made privately available in ~2 days.

- [@HQΣr, msg#516691, 2024-09-28]: **Sigmanauts mining pool** beta-testing mining reward swap; live at dev.ergominers.com.

- [@Yulius Kristianto, msg#516901, 2024-09-24]: **Javanese language support added to Ergo Wallet App** (PR #183 merged); Satergo deployment in progress.

- [@qx(), msg#516373, 2024-09-26]: **First Sigmanauts merchandise (MMGA Hat #001)** sold and shipping; token-based 1:1 redemption via MewFinance Marketplace.

- [@kushti khushi, msg#516292, 2024-09-26]: **6.0.0-alpha2** planned for "end of next week"; voting and activation details in forum post (TBD).

- [@kushti khushi, msg#516328, 2024-09-26]: **6.0.0-alpha2 early release** possible for early next week.

- [@kushti khushi, msg#516488, 2024-09-26]: **ChainCash server testing** open; testers needed to build Rust server and send curl requests; real reserve bounty offered.

- [@ergo_platform / Ergo NEWS, msg#516846, 2024-09-29]: **Weekly ecosystem update**: Dexy first audit completed; ergo-graphql 0.5.2 and Nautilus 0.14.1 released; Sigmaspace.io API expanded.

- [@kushti khushi, msg#516535, 2024-09-27]: **Proposed educational series** starting November on blockchain foundations (hash functions, PoW, ADS, Sigma protocols, P2P, UTXO, ErgoScript, client modes, protocol rules, emission, storage rent).

---

## Technical Q&A Worth Preserving

- **Q** (@HQΣr, msg#516048): "Wen easy stealth address creation?"
  **A** (@kushti khushi, msg#516049): "Where? The main issue is not address creation, but scanning, which is quite slow process as you need to test every stealth payment on the way, and the test is about 1 ms roughly. That is what stopping popular non desktop wallets I suppose. But for scenarios like voting you can scan fast, as you need to scan only voting group transactions."

- **Q** (@HQΣr, msg#516054): "How can someone none mixer user, get a stealth address?"
  **A** (@kushti khushi, msg#516052): "I guess so, no Minotaur support yet"

- **Q** (@HQΣr, msg#516051): "How do we creat a stealth address at current state? From mixer?"
  **A** (@kushti khushi, msg#516052): "I guess so, no Minotaur support yet"

- **Q** (@Pgr456, msg#516581): "How to handle/filter spam and scams? And name hijacking/front running?" (re: decentralized Sigmaverse)
  **A** (@HQΣr, msg#516583): "Payment for listing and Blacklist in the froentend for potencial scams"

- **Q** (@Pgr456, msg#516585): "But how does this make the experience better..." (challenging on-chain NFT/payment approach vs. current PR review system)
  **A** (@HQΣr, msg#516586): "Current system Is not being mantained .... So we need something , and i agree that the current setup Is the best but i dont see Any incentives for a person to Mantain it"

- **Q** (@ThatOtherFella, msg#516679): "so Btc never implemented this? You say 'inspired' but how similar are Ergos subblocks to Prism?"
  **A** (@kushti khushi, msg#516668-673): Sub-blocks inspired by Prism; Prism claims 70k TPS in datacenter testbed (no real network launched); importance of proof of security (GKL-15 or Prism-style); principles: flat P2P, non-breaking research-driven development, prioritize non-consensus over consensus.

- **Q** (@V, msg#516329): "where do you see ergo in the future. Is it a dead project?"
  **A** (@kushti khushi, msg#516335): "Funny to ask me if I work more than fulltime on a 'dead project'... I see Ergo as a movement, as creating tools for p2p financial interactions and free banking digital currencies within a 'project' is not possible, simply... But it also depends on movement's efforts."

- **Q** (@Jordan Mack, msg#516146): "What I mean by payment gateway is a service, typically centralized, that a developer can integrate..." (re: Ergo payment support)
  **A** (@kushti khushi, msg#516193): "Please try https://cryptocurrencycheckout.com/coin/ergo"

---

## Links Shared

- [https://ergohack.io/register/]: ErgoHack IX registration page.
- [https://ergohack.io/]: ErgoHack IX schedule and details.
- [https://mart.mewfinance.com/explore?category=Phygital]: Mew Finance Marketplace phygical section (merchandise NFTs).
- [https://dev.ergominers.com]: Sigmanauts mining pool beta testing (miner ID token swap).
- [https://t.me/rosenbridge_erg]: Rosen Bridge Telegram group (testing traces).
- [https://api.sigmaspace.io/docs#/]: Sigmaspace.io API endpoints documentation.
- [https://tools.ergexplorer.com]: Fast token minting tool (mentioned by HQ3r).
- [https://cypxmarketplace.vercel.app/]: Cyberverse marketplace (alternative to MewMart).
- [https://gluon.gold]: Gluon Gold trading/info.
- [https://ergoauctions.org/trade?pair=ERG-SigUSD]: Ergo Auctions order book DEX.
- [https://dex.crooks-fi.com]: CruxFinance DEX.
- [https://github.com/K-Singh/Sigma-Finance/tree/master/contracts]: SigmaFi lender-side (OpenOffer) contract implementations.
- [https://github.com/ergoplatform/ergo-wallet-app/pull/183]: Ergo Wallet App Javanese language support PR.
- [https://m.youtube.com/watch?v=gTJyDtuWvUQ]: Prism blockchain presentation (sub-blocks inspiration).
- [https://m.youtube.com/watch?v=vbYkz5CBMas]: "Voice of Memphis" (referenced by kushti).
- [https://www.youtube.com/watch?v=-LLOSG8N3Dk]: Video guide (context unclear, shared by Patato).
- [https://www.youtube.com/watch?v=SXi_zoW-Wr4]: Video guide on sending BTC to Ergo over Rosen (Patato).
- [https://cryptocurrencycheckout.com/coin/ergo]: Crypto payment gateway supporting Ergo.
- [https://www.instagram.com/ergoplatformindonesia]: Ergo Indonesia Instagram.
- [https://t.me/ErgoSocials]: Ergo community marketing group.
- [https://t.me/ErgoDevelopers]: Ergo Developers Telegram.

---

## Unresolved Questions

- **6.0 activation timeline**: Voting and mainnet activation will take 3 months (msg#516296); exact details and forum post TBD.

- **Sub-blocks mainnet deployment**: Initial devnet in "few weeks," but full mainnet timeline not confirmed.

- **Stealth address mobile support**: Scanning speed (1ms per test) remains bottleneck; no concrete fix or timeline stated.

- **Sigmanauts pool mining reward swap**: Live at dev.ergominers.com but broader rollout/finalization timeline unclear.

- **Sigmaspace watcher API endpoints**: In progress for Rosen Bridge watcher configuration compatibility (msg#516846).

- **SigmaO revival**: kushti floated as 2025 ErgoHack idea but no lead developer or funding confirmed (msg#516574-575).

- **Decentralized Sigmaverse redesign**: HQ3r questioned viability (~5k estimate for redevelopment) and infrastructure approach (token-based listings vs. PR reviews) remains unresolved (msg#516577-587).

- **Educational series on blockchain foundations**: kushti proposed November start date; no confirmed instructors, curriculum, or platform finalized (msg#516535).

- **Regional KOL/influencer partnerships**: Giufa's proposal to recruit crypto influencers per linguistic zone lacks implementation plan or EF endorsement.

- **Rosen public testbed timeline**: "in 2 days or so" (msg#516102, 2024-09-25); follow-up status not documented in this week's chat.

- **Dexy audit remediation**: First 4Eyes results received; specific findings and remediation timeline TBD (msg#516846).