# Ergo General Chat — 2022-W18 Summary
**Period:** 2022-05-02 to 2022-05-08 | **Messages:** 906 | **Participants:** 101

---

## Key Topics Discussed

- **EIP-27 Emission Schedule Activation**: New emission rules approved for block #777,217 (expected ~June 21). Requires ~90% mining hashrate support. Extends Ergo emission by ~17.38 years and reduces immediate block rewards while funding long-term miner sustainability contracts. [@kushti, msg#274034, 2022-05-05]

- **Spectrum DEX and Cross-Chain Liquidity**: ErgoDex's Spectrum is an L2 sidechain project enabling cross-chain liquidity pools (native ADA/native ERG) with no wrapping. Uses Roll-dPoS consensus with CoSi (collective signing) for faster block negotiations (O(log n) vs O(n)). Technical paper forthcoming. [@Unknown, msg#273582, 2022-05-04]

- **Ledger Hardware Wallet Integration**: Ledger Nano S support for Ergo is in closed beta testing within Nautilus wallet on Linux/macOS. p2s bug fix completed; public release imminent. [@Glasgow, msg#273997, 2022-05-05]

- **Storage Rent Mechanism**: Users questioned how boxes identified for storage rent are processed. Miners can process old boxes and collect rent fees (0.001 ERG mentioned). [@HelixEvo, msg#272914, 2022-05-02]

- **ErgoHack Fest DeFi Marathon**: Largest prize pool yet. Seeking complete dApps, not just smart contracts—frontend/UI work valued equally. Topics include Djed protocol, Oracle Pools v2, DexyUSD, YieldDAO, StealthAddresses mixer, community DAOs (LETS), p2p tools, and developer libraries (wallet connectors, TX builders). Team formation begins May 9; applications open ~1 week after. [@kushti, msg#273804-273827, 2022-05-05]

- **Frontend Developer Experience Gap**: Community consensus that ErgoScript knowledge is abundant but dApp frontend integration (wallet connectors, transaction builders) lacks tutorials/libraries. Developers repeatedly asked for Nautilus/SAFEW connection examples and React component libraries. [@Koutelier, msg#273853-274091, 2022-05-05-06]

- **NIPoPoWs and Zero-Knowledge Proofs**: kushti proposing Bulletproofs verification in ErgoScript for range proofs and generic statements. Can serve as trustless alternative to SNARKs. Enables hybrid contracts with on-chain verification and sensitive data kept off-chain. [@kushti, msg#273789-273871, 2022-05-05]

- **p2p Trading and Order Books**: Trade House (order book DEX) contrasted with AMM pools. Order books offer full transparency of depth/liquidity, control over slippage, and partial order fills; eliminate impermanent loss but require matching. Spectrum pools mentioned as alternative. [@qx, msg#273885-274032, 2022-05-05]

- **Sidechain Construction (merge-mined)**: kushti discussing improved sidechaining via trustless pegging using smart contracts, drawing from BIP 301 research. Emission contracts reward mainchain miners for delivering sidechain data. Ergo-specific improvements possible but still under discussion. [@kushti, msg#273923-274024, 2022-05-04-05]

- **LETS (Local Exchange Trading System)**: Community initiating first Ergo LETS group in Discord. Addresses trust issues in p2p trading via reputation/community mechanisms. [@Ile, msg#273922, 2022-05-05]

- **New Website and Sigmaverse.io Launch**: ergoplatform.org redesigned with improved UI/UX. Sigmaverse.io now lists all mining pools in mining section + miners handbook. Dev Tools section next. Spotlighting section lacks scroll affordance (under review). [@Unknown, msg#273666-273676, 2022-05-04]

- **Aneta Angel NFT Mint Stress Test**: Mass NFT minting temporarily overloaded Ergo Explorer, testing network capacity. Demonstrated Ergo's ability to handle volume without breaking (unlike other chains). [@Unknown, msg#272973, 2022-05-02]

- **Wallets and Key Management**: Yoroi wallet deprecated/broken for Ergo—users unable to sync or export seed phrases. Community recommends Nautilus, SAFEW, or Ergo Mobile Wallet instead. Ledger integration underway. [@hoodieonwho, msg#274320-274340, 2022-05-07]

---

## Important Decisions or Announcements

- [@kushti, msg#273019, 2022-05-02]: EIP-27 activation announced for block #777,217 with new emission schedule.

- [@Glasgow, msg#273997, 2022-05-05]: **Ledger Nano S integration with Nautilus is in private beta testing** (Linux/macOS). Invite available to users with Nano S.

- [@Armeanio, msg#274451, 2022-05-07]: Major exchange integration **~80% complete**; launch depends on their engineers' pace. Team working to announce timing ASAP.

- [@Andy L, msg#273004, 2022-05-02]: **Ergo Ecosystem Promo Week moved to end of May** (was conflict with ErgoHack timing); deadline extended to allow more video submissions.

- [@kushti, msg#273805-273807, 2022-05-05]: **ErgoHack Fest announced as "DeFi Marathon"** with co-sponsorship from ErgoPad (first time). Djed Foundation co-organization fell through; Djed research still welcomed.

- [@Glasgow, msg#273218, 2022-05-03]: **ErgoSocials and Contributors Programme open** for copywriters/editors seeking to contribute to ecosystem.

- [@Unknown, msg#273523, 2022-05-04]: **Comet refundable ICO live**—token sale with 3-year refund window for any reason.

- [@kushti, msg#274149, 2022-05-05]: greenhat opened **EIP task for bootstrapping Oracle Pools command** in oracle-core repo (GitHub issue #17).

- [@MrStahlfelge, msg#274171, 2022-05-06]: **Working on declarative UI system for mobile wallets**; adoption by dApp developers TBD.

- [@Ilya, msg#274178, 2022-05-06]: **Writing high-level abstraction library over Sigma Rust for FE transaction building**; repo to be shared soon.

---

## Technical Q&A Worth Preserving

- **Q** (@HelixEvo, msg#272914): How does storage rent processing work? Does a miner identify old boxes, open them, take a processing fee, and shift to a new box?
  **A** (@Unknown): Miners process old boxes and collect storage rent fees (mechanism confirmed but details sparse in chat).

- **Q** (@co met, msg#273035): Is Ergo capable of multiple token transfers in a single transaction?
  **A** (@Unknown, msg#273041-273044): Yes. You can send different tokens/amounts to each address, but requires a script or multiple transactions. Called "chained transactions."

- **Q** (@Fabulaowski, msg#273752): Which wallet is created/recommended by core team for safety?
  **A** (@MrStahlfelge, msg#273761): Ergo Mobile Wallet and Ergo Node Wallet are made and audited by core team.

- **Q** (@HelixEvo, msg#273156): Is Ergo Explorer behind Cloudflare? How is it load-balanced—multiple instances with geo LB?
  **A** (@Glasgow, msg#273161): Unsure of backend architecture; doesn't have access.

- **Q** (@A, msg#274243): How does impermanent loss work in liquidity provision? If you provide equal-value pairs and one asset doubles, do you withdraw less of the doubled asset?
  **A** (implied in discussion): Yes—you receive less of the appreciated asset due to AMM constant product mechanics, creating IL despite being "in profit" in USD.

- **Q** (@Koutelier, msg#274091-274115): How do I add Nautilus/mobile wallet to a website for dApp integration? Any tutorials?
  **A** (@Koutelier, msg#274095, @Chris Ray, msg#274112): No formal library/tutorial exists yet. Workaround: use ErgoPad's frontend as reference. Suggested for ErgoHack submission.

- **Q** (@Unknown, msg#273588): Are IoT devices part of NIPoPoWs or post-NIPoPoWs implementation?
  **A** (@Gazza, msg#273590-273591): IoT was origin of consensus method (allows high churn/many participants). Spectrum uses modified version; no phones necessarily involved—origin context only.

- **Q** (@Koutelier, msg#274056-274058): Does the token-minter tool teach how to add connect-wallet buttons to websites?
  **A** (@Koutelier): No—it's a static page for minting/burning. Doesn't walk through Nautilus integration. Basic tutorials on YouTube for ETH exist; Ergo equivalent needed.

- **Q** (@gg, msg#274017): What is the Minotaur paper on mixing PoW & PoS, and what does it mean for Ergo?
  **A** (@Unknown, msg#274020-274025, @Chris Ray, msg#274026): Minotaur is its own blockchain protocol from scratch (not Ergo+Cardano hybrid). Multi-asset research; PG (@pgwadas) understands it best. Could inform L2 design thinking.

- **Q** (@Dani, msg#273821): Will frontend progress (UI/UX) be considered equally with ErgoScript progress during judging?
  **A** (@kushti, msg#273824-273825): Yes, frontend is very important now. Some past projects had contracts but no backend/UI; completion valued.

- **Q** (@Richi, msg#274434): How many blocks signaled EIP-27 in the last voting epoch?
  **A** (unresolved in chat—no answer provided).

---

## Links Shared

- **EIP-27 Forum Post & Details**: https://www.ergoforum.org/t/eip-27-mainnet-activation-voting-and-final-details/3585 [@kushti, msg#273019, 2022-05-02; @Ergo NEWS, msg#273455, 2022-05-04]

- **Ergo Whitepaper / Manifesto**: https://ergoplatform.org (referenced by @RETRO, msg#273694, for project ethos)

- **ErgoHack Fest Info**: https://ergohack.io [@Andy L, msg#273005, 2022-05-02; @Ergo NEWS, msg#273548, 2022-05-04]

- **ErgoPad Project Update**: https://ergopad.medium.com/ergopad-project-update-9-bc288cbb4a81 [@Glasgow, msg#273597, 2022-05-04]

- **Ergo Explorer**: https://ergoexplorer.org (mentioned in wallet/tx context)

- **SkyHarbor NFT Marketplace**: https://www.skyharbor.io/ [@Chris Ray, msg#273030, 2022-05-02]

- **Ergo Auctions**: https://ergoauctions.org [@Chris Ray, msg#273031, 2022-05-02]

- **Sigmaverse.io**: https://sigmaverse.io (mining pools, miners handbook) [@Unknown, msg#273106, 2022-05-02]

- **Rosen Bridge Overview Video**: https://youtu.be/Xsiy-yPJQ6w [@CW, msg#274672, 2022-05-08]

- **Developer Update Video**: https://m.youtube.com/watch?v=LUcFmqXnOZk [@Andy L, msg#274658, 2022-05-08]

- **Ergo Headless dApp Framework**: https://ergoplatform.org/en/blog/2020-12-08-ergo-headless-dapp-framework-now-available/ [@kushti, msg#273840, 2022-05-05]

- **Ergo Headless Dev Docs**: https://docs.ergoplatform.com/dev/stack/headless/ [@kushti, msg#273844, 2022-05-05]

- **Token Minter Tool (GitHub)**: https://github.com/ThierryM1212/ergo-token-minter [@kushti, msg#274055, 2022-05-05]

- **Oracle Pools Bootstrap Task (GitHub)**: https://github.com/ergoplatform/oracle-core/issues/17 [@kushti, msg#274149, 2022-05-05]

- **ColivingDAO Whitepaper**: https://colivingdao.io [@Louis, msg#272948, 2022-05-02]

- **Comet Refundable ICO**: https://thecomettoken.com/ICO [@Unknown, msg#273523, 2022-05-04]

- **The Mom Test (Book)**: https://www.amazon.com/The-Mom-Test-Rob-Fitzpatrick-audiobook/dp/B07RJZKZ7F (product design feedback methodology) [@Ilya, msg#274187, 2022-05-06]

- **Ergo Contributing Guide**: https://ergonaut.space/en/Ergo/Contributing [@Glasgow, msg#273218, 2022-05-03]

- **Ergo Node Setup Guide**: https://github.com/ergoplatform/ergo/wiki/Set-up-a-full-node [@Unknown, msg#273601, 2022-05-04]

- **Roll-dPoS Research Paper**: https://www.semanticscholar.org/paper/Roll-DPoS%3A-A-Randomized-Delegated-Proof-of-Stake-of-Team/9b7991e8a84bd2119513899faae50838aad2db78 [@Gazza, msg#273579, 2022-05-04]

---

## Unresolved Questions

- **Yoroi Wallet Status**: Is Yoroi permanently deprecated for Ergo, or will it be fixed? Community consensus is it's broken and should not be used, but no official EOL statement found in chat. [@hoodieonwho, msg#274320-274340, 2022-05-07]

- **Spectrum L2 Consensus Details**: Technical paper promised but not yet published. Relationship between Roll-dPoS, CoSi, and IoT-inspired design unclear to many. [@Unknown, msg#273573-273595, 2022-05-04]

- **Exchange "Tier 1" Definition**: Disagreement over what constitutes a "Tier 1" exchange. Dan called upcoming exchange "Tier 1"; Joseph and Glasgow did not explicitly confirm. Community expects clarity on CEX scale/importance before launch. [@Ergo Boy, msg#274441-274489, 2022-05-07]

- **Oracle Pools v2 Launch Timeline**: Discussion about running Dexy Gold and court rewards, but no confirmed launch date. [@kushti, msg#273823, 2022-05-05]

- **Frontend Library for Nautilus**: Chris Ray and Koutelier debated whether core team should build a wallet-connector React library or if community should submit it to ErgoHack. No decision made; flagged as high-priority gap. [@Chris Ray, msg#274082-274112, 2022-05-05-06]

- **Minotaur Protocol Scope**: Is Minotaur a separate blockchain or a Layer 2? What is its relationship to Ergo? Suggested asking PG directly on Twitter; no Ergo-specific details emerged. [@gg, msg#274017-274025, 2022-05-05]

- **Spender-Signed Currency Proposal**: kushti mentioned composing proposal based on Saito peer-to-peer money paper. Concept not explained; deferred. [@kushti, msg#273928-273931, 2022-05-05]

- **DDoS/Spam Protection