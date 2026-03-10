---
title: "Ergo General Chat — 2023-W23"
date_start: "2023-06-05"
date_end: "2023-06-11"
type: telegram_weekly
channel: general
week: "2023-W23"
source: telegram
message_count: 1042
categories: [technical, bridges, defi, wallet, governance, ecosystem, community]
key_terms: [explorer, API, token search, NFT data, hex conversion, Rosen Bridge, Cardano, wrapped tokens, public beta, EVM chains, Spectrum Network, Cardano DEX, liquidity, marketing, whitepaper, Yoroi, seed phrase recovery, Nautilus, Ergo Wallet, migration]
---
# Ergo General Chat — 2023-W23 Summary

## Key Topics Discussed

- **Ergo Explorer API & Token Search**: Community members discussed improvements to Ergo Explorer's token search functionality, including case-insensitive searching, multi-token info retrieval, and UTF-8 representation issues in register fields. The v1 API at `api.ergo.aap.cornell.edu` was recommended over the deprecated v0 API.

- **Oracle Pools and Rosen Bridge**: Oracle Pools v1 and v2 were discussed as essential infrastructure. Oracle Pool v1 includes Ergo Foundation members and external participants; v2 involves running for Dexy Gold with GORT rewards. Rosen Bridge is in public beta testing at `beta.rosen.tech` for Cardano integration.

- **Wallet Issues & Solutions**: Yoroi wallet support for Ergo has been discontinued due to poor implementation. Community tool "Yoroi Ergo Wallet Recover" was released to help users extract funds from broken Yoroi wallets. Ledger Ergo app exists in developer mode but awaits official audit/release. Nautilus, Satergo, and Ergo Wallet are recommended alternatives.

- **Storage Rent & Demurrage Maximalism**: Extended discussion on storage rent as Ergo's unique monetary policy. Community member dayumbbbb advocated for demurrage awareness and created meme content promoting Ergo's deflationary economics.

- **Privacy & Mixer Usage**: Detailed technical discussion on Ergo Mixer's effectiveness. Consensus: more mixing rounds + higher participant count = better privacy. Security depends on chain analysis difficulty, not round count alone. Integration into Nautilus could increase adoption.

- **Spectrum DEX & Cardano Integration**: Spectrum Finance is preparing to launch on Cardano with an order book–based DEX model. Rosen Bridge will enable wrapped token trading between chains before native swaps are possible. Full launch and TVL strategy discussed.

- **Palmyra & Oracle Integration**: Dan Friedman (Palmyra lead) discussed Chainlink partnership for proof of reserve, using IoT devices (cameras, weight sensors, motion sensors) to enable trustless warehouse receipts for decentralized trade financing. Plans to build out native Ergo Oracle Pools with capital from token sale.

- **Ergo Security & SEC Compliance**: Ergo's eUTXO model and lack of US CEX listing provide regulatory protection. No public ICO (airdrop to Waves users only), no premine, no promises of returns—structure likely passes Howey test. Ergo remains unaffected by recent US exchange actions.

- **Block Speed & Scalability Improvements**: kushti indicated speed improvements will be discussed post-Ergoversary. Possible approaches include sub-blocks, sidechains, layer 2 solutions. Current focus on concrete use cases (Spectrum, Rosen, Oracle Pools) before optimization.

- **ErgoScript & Zero-Knowledge Proofs**: kushti discussed using bulletproofs in ErgoScript verification, enabling range proofs, verifiable credentials, and hybrid contracts with zero-knowledge statements. This opens possibilities for privacy-preserving smart contracts.

- **Hardware Wallet Development**: Ledger Ergo app in developer mode since early 2022. Works reliably but awaits official audit. Security consideration: disabling/re-enabling Android PIN requires wallet restore due to OS-level encryption key handling.

- **GPU Mining & Autolykos**: ASIC resistance remains core priority. Mining parameter tweaks (block time, difficulty) being tested on testnet. Community channels exist for those interested in collaborative testing.

- **Satergo Wallet Theming**: Custom CSS theming enabled for Satergo. Community contest launched offering 5M $COMET tokens for best custom theme.

---

## Important Decisions or Announcements

- [@kushti, msg#396233, 2023-06-06]: Demurrage awareness and monetary policy discussion confirmed as underemphasized in community priorities.

- [@qx(), msg#396343, 2023-06-07]: "Yoroi Ergo Wallet Recover" tool released to help users extract funds from broken Yoroi wallet instances without seed phrase.

- [@Gazza, msg#396615-616, 2023-06-08]: Rosen Bridge public beta live at `beta.rosen.tech/#/bridge` with Cardano integration active for testing.

- [@kushti, msg#396527, 2023-06-07]: Rosen Bridge R&D includes multi-key guard solutions for DAO/team-based guards; Catalyst Fund 10 proposal under preparation.

- [@Gazza, msg#396623, 2023-06-08]: Spectrum Finance launch thread on Cardano DEX with marketing strategy to be released.

- [@Koutelier, msg#396782, 2023-06-08]: $COMET contest announced — 5M tokens for best Satergo custom theme, 1-week deadline.

- [@qx(), msg#396343, 2023-06-07]: Satergo Ergopay test version released on GitHub branch; enables dApp integration (Spectrum, ErgoPad) via mobile wallet signing.

- [@CW, msg#397228, 2023-06-10]: Chinese Telegram community AMA scheduled: June 12, 9 AM UTC with kushti, Mark Glasgow, Justin Simpson.

- [@HQΣr, msg#396477, 2023-06-07]: Token pages now accessible on Ergocube (`ergcube.com/index.php?do=cat&category=tokens`).

- [@Unknown, msg#396339, 2023-06-07]: Erg Explorer development update released with significant improvements.

- [@qx(), msg#397480-481, 2023-06-11]: Live stream planned for June 11, ~1 PM UTC to play 300 ERG at Grand Gambit casino (community challenge to help GG after exploit).

---

## Technical Q&A Worth Preserving

- **Q** (@HQΣr, msg#395902): Any endpoint giving creation height and list of all minted tokens?
  **A** (@qx(), msg#395923): Two commands: (1) `https://api.ergo.aap.cornell.edu/api/v1/tokens?limit=100&offset=0` (2) `https://api.ergo.aap.cornell.edu/api/v1/boxes/[BOXID]`

- **Q** (@Aco, msg#395897): Does v1 API have endpoint for getting token NFT data (R7, R8, R9 registers)?
  **A** (@Aberg, msg#395899-900): You must get the mint box directly; registers are not part of tokens, they're in the mint box itself.

- **Q** (@Aco, msg#395901): Hex conversion of register fields produces strange characters.
  **A** (@qx(), msg#395904, @Aberg, msg#395909): Use UTF-8 compatible hex-to-string conversion (not ASCII-only). Ergo Explorer and ergonfts.org use workarounds like `.substring(2)` on serialized values—avoid this pattern.

- **Q** (@Flying Pig, msg#397273): What's the real security difference between 30, 60, 90 mixer rounds?
  **A** (@qx(), msg#397318-341): Security depends on **participant density**, not round count. More rounds + more concurrent users = harder chain analysis. Exact amount exited per round is less important than total mixing population. Best practice: hold mixed funds in dead wallet, split exits, avoid amount-matching patterns, push leftovers back through mixer.

- **Q** (@João, msg#397385-409): Where to securely store ERG since Ledger app is taking forever?
  **A** (@qx(), msg#397389-393, @Flying Pig, msg#397432): Ledger Ergo app works in developer mode (in use 1+ year with minor non-critical bugs). Alternatively: Satergo, Nautilus, or Ergo Mobile Wallet. For Ergo Mobile: encrypted phone lock mode prevents access if passcode removed (OS-level security, not wallet bug).

- **Q** (@MrStahlfelge, msg#397036): Does changing Android PIN blow away private keys in Ergo wallet?
  **A** (@MrStahlfelge, msg#397036-038): Disabling PIN (then re-enabling) destroys encrypted keys used for mnemonic protection; changing PIN is safe. This is intentional Android security (prevents social engineering of fingerprint/PIN changes). Wallet cannot access re-encrypted keys after PIN reset.

- **Q** (@Cristian, msg#396979-981): Can Ergo Mixer prevent wallet correlation between addresses?
  **A** (@Unknown, msg#396980): Yes, but requires large mixer population for effective privacy. Low utilization makes correlation easier. Integration into Nautilus expected to increase usage.

- **Q** (@Velvia, msg#397138): Could Ergo use Minotaur consensus if GPU mining becomes expensive?
  **A** (@Unknown, msg#397140): Would require complete redesign from ground up; not feasible mid-protocol.

- **Q** (@blake starky, msg#397542-544): Is Ergo written in Scala or Rust?
  **A** (implicit): Originally Scala; team confirmed Scala remains the implementation language (Google's Bard provided incorrect information suggesting 2019 Rust switch).

---

## Links Shared

- [https://ergoraffle.com](https://ergoraffle.com): Community raffle platform for fundraising; Kenyan cooperative loan drive raised 2,880+ ERG.

- [https://api.ergo.aap.cornell.edu/api/v1/docs](https://api.ergo.aap.cornell.edu/api/v1/docs) & [http://128.253.41.49:9053/swagger](http://128.253.41.49:9053/swagger): Official Ergo node API documentation and indexed node endpoint.

- [https://beta.rosen.tech](https://beta.rosen.tech): Rosen Bridge public beta for Cardano integration testing.

- [https://ergcube.com/index.php?do=cat&category=tokens](https://ergcube.com/index.php?do=cat&category=tokens): Token pages with swap/buy/sell tabs.

- [https://glasgowm148.github.io/Themis/](https://glasgowm148.github.io/Themis/): Mark Glasgow's tokenomics visualizer (Ergo emission tracking).

- [https://twitter.com/SpectrumLabs_/status/1666417701508509697](https://twitter.com/SpectrumLabs_/status/1666417701508509697): Ilya's Twitter Spaces on Spectrum Network architecture.

- [https://www.ergoforum.org/t/know-your-assumptions/4198/5](https://www.ergoforum.org/t/know-your-assumptions/4198/5): kushti's forum post on protocol assumptions (referenced in speed improvement discussion).

- [https://twitter.com/chepurnoy/status/1667642760852119554](https://twitter.com/chepurnoy/status/1667642760852119554): kushti's cross-post on Ergo immunity to layer-0 Ethereum attacks.

- [https://appliedcrypto.ethz.ch/content/dam/ethz/special-interest/infk/inst-infsec/appliedcrypto/research/TavernaPaterson-SnappingSnapSync.pdf](https://appliedcrypto.ethz.ch/content/dam/ethz/special-interest/infk/inst-infsec/appliedcrypto/research/TavernaPaterson-SnappingSnapSync.pdf): Academic paper on Ethereum pre-merge layer-0 attacks.

- [https://eprint.iacr.org/2022/104](https://eprint.iacr.org/2022/104): Minotaur consensus mechanism paper (referenced for potential future mining algorithm).

- [https://t.me/ergoplatform_CH](https://t.me/ergoplatform_CH): Chinese Telegram community (hosting kushti AMA June 12).

- [https://docs.ergoplatform.com/dev/wallet/payments/ergopay/ergo-pay/](https://docs.ergoplatform.com/dev/wallet/payments/ergopay/ergo-pay/): ErgoPay documentation for mobile dApp integration.

- [https://ergoplatform.substack.com/p/ergo-platform-monthly-wrap-up-may](https://ergoplatform.substack.com/p/ergo-platform-monthly-wrap-up-may): May 2023 monthly wrap-up with ecosystem updates.

---

## Unresolved Questions

- **Ledger Ergo App Official Release**: When will Ledger conduct security audit and release Ergo app beyond developer mode? No timeline given; depends on Ergo mainstream adoption and Ledger prioritization.

- **Block Speed Improvements**: Which approach (sub-blocks, sidechains, layer 2) will be prioritized? Post-Ergoversary discussion planned but not committed.

- **Spectrum Network Launch**: Full mainnet launch date and TVL/liquidity strategy for Cardano-side DEX not specified.

- **Palmyra/Rosen Bridge Full Launch**: Public launch date for Rosen Bridge mainnet (beta only) remains unconfirmed. Dan indicated 2023 but with caveats ("can't speak to that as it isn't our solution").

- **Native Ergo Oracle Pools**: Timeline for building out dedicated Ergo oracle infrastructure (beyond v1/v2) unclear; depends on Palmyra funding allocation.

- **Mixer Adoption & Integration**: Will Nautilus integrate Ergo Mixer? Flagged as beneficial but no committed timeline.

- **Ergo's Consensus Mechanism**: Could Ergo adopt hybrid PoW+PoS (e.g., Minotaur)? Community explored benefits (security, voting democratization) but dismissed as non-viable mid-protocol.

- **Storage Rent Rate Adjustments**: If faster blocks or increased throughput is adopted, how would storage rent parameters change? Not addressed in discussions.

---

## Notable Community Activities

- **Ergo Raffle for Kenyan Cooperative**: Fundraiser for interest-free loans in Kenya raised 2,880 ERG by week's end. kushti proposed issuing "Goodness" token (1:1 to donations) to governance a DAO controlling repayments.

- **Grand Gambit Casino Exploit**: 600 ERG stolen via smart contract exploit. qx() offered 300 ERG recompense; Grand Gambit refused; qx() plans livestream using 300 ERG at GG to help absorb losses.

- **Demurrage Advocacy**: dayumbbbb created meme content promoting Ergo's demurrage/storage rent as primary differentiator. Themes included "Demurrage Maximalism" and criticism of PoS governance centralizing yield to stakers.

- **Chinese Community Engagement**: Ergo Foundation planning dedicated AMA in Chinese Telegram (June 12) with kushti, Mark Glasgow, Justin Simpson to strengthen CN community.

- **Satergo Custom Theme Contest**: Community encouraged to create custom CSS themes; winner receives 5M $COMET tokens.