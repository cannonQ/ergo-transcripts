# Ergo General Chat — Week 2024-W45 Summary

## Key Topics Discussed

- **Sigma 6.0 Development**: kushti completing final PR for Sigma 6.0 interpreter ([msg#524154](msg#524154)), with EIP proposal and sub-blocks work to follow. Tests and contributions needed.

- **Paideia Mainnet Deployment**: Paideia DAO went live on mainnet ([msg#523984](msg#523984)); "Paideia Membership" token issued ([msg#524512](msg#524512)). Community discussion ongoing about launch stability and outreach.

- **Sigmanauts DAO Formation**: New DAO structure created ([msg#523984](msg#523984)); mining pool infrastructure formalized at sigmanauts.com.

- **Ledger Hardware Wallet Support**: Ledger Stax/Flex app-ergo PR under review by Ledger team ([msg#523984](msg#523984)); discussion of Nano S/S Plus limitations and device compatibility with Ergo.

- **Rosen Bridge Growth**: rsERG/ETH pool on Uniswap expanding; mining pools (WoolyPooly) proposing idle ETH liquidity ([msg#523984](msg#523984)). Roadmap includes Bitcoin Cash and TRON integrations ([msg#524902](msg#524902)).

- **SigmaUSD Reserve Ratio**: SigUSD bank RR exceeded 500%, enabling hedging and lending opportunities in SigmaFi and DuckPools ([msg#524861](msg#524861)). SigRSV profitability noted as area for improvement.

- **ErgoHack IX Results**: 9 projects submitted including Stable Benefaction Platform, Satergo Offline Vault, Minotaur Wallet improvements, OnErgo, and 3D Explorer ([msg#523984](msg#523984)).

- **Node 5.1.0 Release**: Ergo node version finalized and under review ([msg#523984](msg#523984)).

- **Privacy & Mixer History**: Discussion of ErgoMixer origins (anon92048, anon2020*), stealth addresses, and ErgonautNFT honoring anonymous contributors ([msg#524166](msg#524166)–[msg#524171](msg#524171)). Jason Davies identified security vulnerabilities in early versions.

- **Wallet UX & Mobile Support**: Mobile wallet (Mr Stahlfelge's Ergo Mobile) no longer actively maintained; ErgoPay standard discussed as solution for non-browser wallet dApp integration ([msg#523994](msg#523994)–[msg#524010](msg#524010)).

- **DEX Liquidity & Trading**: Order book DEXes (Trade House, Auction House) highlighted as superior to AMMs for transparency and slippage control ([msg#524340](msg#524340)). Spectrum DEX and MewFinance volume tracked; rsERG/ETH liquidity concerns noted.

- **CEX Listing Spam**: Multiple CEX listing agents (BingX, MEXC, Cexeslisting) contacted with standard listing proposals; community consensus that homework not done and fees inflated (40K typical) ([msg#524611](msg#524611)–[msg#524748](msg#524748)).

- **SigmaSpace Explorer**: Address search bug fixed; CSV/data download feature added to backlog ([msg#524281](msg#524281)–[msg#524283](msg#524283)).

- **Storage Rent & Wallet Security**: Discussion of Terminus wallet requiring spending password to view mnemonic phrase; security justification provided (seed phrase encryption) ([msg#524517](msg#524517)–[msg#524559](msg#524559)).

- **Bearwhale & SigmaUSD V1 Exploit**: Historical investigation of Bearwhale's frontrunning attack on SigmaUSD V1 contract; V2 added slower oracle updates as mitigation ([msg#524401](msg#524401)–[msg#524482](msg#524482)).

- **Sidechains & Sub-blocks Roadmap**: kushti indicating readiness to discuss merge-mined sidechains and sub-block implementations post-Sigma 6.0 EIP ([msg#524480](msg#524480)).

## Important Decisions or Announcements

- [@kushti, msg#524154, 2024-11-05]: Sigma 6.0 PR completion expected end of week; EIP proposal to miners pending; sub-blocks work to commence following week. Contributions and tests solicited.

- [@Ergo NEWS $ERG, msg#523984, 2024-11-04]: ErgoHack IX concluded with 9 submissions; Paideia Mainnet deployed; Sigmanauts DAO created; Node 5.1.0 finalized; Ledger Stax/Flex support in review.

- [@qx(), msg#524242–msg#524243, 2024-11-06]: ergo.aap.cornell.edu GraphQL endpoint upgraded to v0.5.3 with history support in Nautilus.

- [@Pgr456, msg#524283, 2024-11-07]: SigmaSpace explorer restarted; CSV/data download feature added to backlog.

- [@kushti, msg#524861, 2024-11-10]: SigmaUSD bank RR >500%; recommendation to address SigRSV profit generation.

- [@CW, msg#524902, 2024-11-10]: Rosen Bridge roadmap: Bitcoin Cash (simpler integration) and TRON (stablecoin haven) next targets after DOGE and Runes.

- [@qx(), msg#525008–msg#525010, 2024-11-10]: Upcoming event with open floor and community-driven agenda.

## Technical Q&A Worth Preserving

- **Q** (@Mewbie, msg#524161): Who created ErgoMixer?  
  **A** (@kushti, msg#524166–msg#524172): anon92048 developed v1 (1990s-style interface); anon2020* created improved version with stealth addresses. Jason Davies identified vulnerabilities in initial contracts; contributions documented in Ergonaut NFT (token ID 000000002306564c7b03a78b76a2ce1d9d4e748ddf462cb73cc30b48e43e6e44).

- **Q** (@Mewbie, msg#524178): Does ErgoTipBot hide wallets by design?  
  **A** (@kushti, msg#524183–msg#524191): No privacy by design; all wallets visible in mempool. Stealth address-based tip bot theoretically possible but of limited utility since withdrawals are traceable. Tip wallet balances function as local currency circuits.

- **Q** (@cannon_q, msg#524055): [Context of scammer discussion]  
  **A** (@cannon_q, msg#524339–msg#524340): Spectrum DEX (ergodex.io, hosted by Spectrum Finance) and MewFinance (run by Anon_BR and HQx, known ecosystem members) are trusted DEX UIs. Recommended: host own Spectrum UI from GitHub for maximum security. Unknown hosted frontends pose risk of UI-level transaction hijacking.

- **Q** (@Steve F, msg#524517): Why does Terminus wallet require spending password to view mnemonic phrase?  
  **A** (@kushti, msg#524518, msg#524522): Mnemonic likely encrypted with spending password. (@Patato, msg#524539): Encryption protects against phone unlock compromise; if device is unlocked, attacker cannot extract seed without spending password.

- **Q** (@Ich Binsnicht, msg#524254): Where to find bridged asset statistics on Rosen Bridge?  
  **A** (@cannon_q, msg#524255): https://app.rosen.tech/assets tracks cross-chain liquidity.

- **Q** (@Mewbie, msg#524389): Is it possible to track ERG → SigmaUSD → ERG transactions?  
  **A** (@Flying Pig, msg#524401–msg#524420): Bearwhale case study shows old V1 SigmaUSD contract vulnerability (frontrunning oracle). V2 mitigated with slower oracle updates. Bearwhale ultimately lost ~170K ERG. No known privacy vulnerabilities in current version.

- **Q** (@Jack Σ, msg#524347): Idea: incentivize amateur miners with network perks (faster txns, lower fees) linked to wallet mining activity.  
  **A** (@Jack Σ, msg#524350): Compared to torrenting systems rewarding upload contributors; suggests sustainable decentralized mining incentive model.

- **Q** (@Marc the Shark, msg#524973): Non-crypto analogy for native tokens?  
  **A** (@TMR.ΣRG, msg#524989–msg#524999): Water-level float mechanism (toilet tank analogy) for stablecoin reserves; USDC as entry point explaining collateral backing; broader: native tokens enable transaction fees, miner rewards, and custom creator-defined use cases. Distinction: stablecoins vs. other native tokens (Comet, RSN, etc.).

- **Q** (@Unknown, msg#524922–msg#524932): Updates on ERG-USDT liquidity on Ethereum; will anyone provide more liquidity?  
  **A** (@kushti, msg#524930, msg#524938): Not controlling liquidity providers; various community efforts ongoing but no firm commitments. Recommends capital deployment by community members.

## Links Shared

- [https://github.com/ergoplatform/sigmastate-interpreter/pull/997](https://github.com/ergoplatform/sigmastate-interpreter/pull/997): Sigma 6.0 final PR (kushti, msg#524154)

- [https://ergoplatform.org/en/blog/2020-11-17-introducing-the-ergonaut-the-ergo-foundation-nft-sale/](https://ergoplatform.org/en/blog/2020-11-17-introducing-the-ergonaut-the-ergo-foundation-nft-sale/): Ergonaut NFT documentation (kushti, msg#524171)

- [https://blog.plutomonkey.com/2020/04/ergomix-vulnerability/](https://blog.plutomonkey.com/2020/04/ergomix-vulnerability/): Jason Davies initial ErgoMixer vulnerability report (kushti, msg#524174)

- [https://blog.plutomonkey.com/2020/09/another-ergomix-vulnerability/](https://blog.plutomonkey.com/2020/09/another-ergomix-vulnerability/): Jason Davies follow-up vulnerability disclosure (kushti, msg#524176)

- [https://sigmanauts.com/mining/](https://sigmanauts.com/mining/): Sigmanauts mining pool infrastructure (cannon_q, msg#524693)

- [https://app.rosen.tech/assets](https://app.rosen.tech/assets): Rosen Bridge bridged asset statistics (cannon_q, msg#524255)

- [https://www.youtube.com/watch?v=0bhPTk9hdGI](https://www.youtube.com/watch?v=0bhPTk9hdGI): P2Podcast new episode (TMR.ΣRG, msg#524017)

- [https://youtube.com/live/403jxWjWRkk](https://youtube.com/live/403jxWjWRkk): Ergo AMA livestream (Andy L, msg#524337)

- [https://www.ergodex.io/](https://www.ergodex.io/): Spectrum DEX hosted UI (Spectrum Finance, cannon_q, msg#524340)

- [https://dex.mewfinance.com/ergo](https://dex.mewfinance.com/ergo): MewFinance DEX (canon_q, msg#524340)

- [https://store.mewfinance.com/](https://store.mewfinance.com/): MewFinance merchandise store, GPU sales (kushti, msg#524916)

- [https://sigmaspace.io/](https://sigmaspace.io/): SigmaSpace blockchain explorer (referenced msg#524269 onwards)

- [https://x.com/RosenBridge_erg/status/1855681959583957088](https://x.com/RosenBridge_erg/status/1855681959583957088): Rosen Bridge roadmap (Bitcoin Cash, TRON next; CW, msg#524902)

- [https://x.com/ergo_platform/status/1855728389510083005](https://x.com/ergo_platform/status/1855728389510083005): Ergo Platform announcement (qx(), msg#524963)

- [https://iris.to/ergo](https://iris.to/ergo): Ergo on Nostr (Unknown, msg#524885)

## Unresolved Questions

- **Sigma 6.0 Testing & Contributions**: EIP proposal and community testnet for parameter tweaking (block time, difficulty) solicited but no firm timeline for sub-blocks implementation or community participation confirmation ([msg#524154](msg#524154), [msg#524480](msg#524480)).

- **SigRSV Profit Generation**: Flagged for improvement but no concrete proposal or developer assignment ([msg#524861](msg#524861)).

- **ERG-USDT Liquidity on Ethereum**: Insufficient LP depth on Uniswap; community-led solutions discussed but no actionable plan ([msg#524922](msg#524922)–[msg#524938](msg#524938)).

- **Paideia Launch Stability & Outreach**: Mainnet deployment confirmed but community discussion ongoing regarding marketing strategy and feature readiness ([msg#524305](msg#524305)).

- **Mobile Wallet dApp Integration**: ErgoPay standard identified as workaround but no clear path to native mobile dApp browser support ([msg#523998](msg#523998)–[msg#524015](msg#524015)).

- **Bearwhale Identity Investigation**: Mewbie began transaction analysis but kushti requested formal forum/article format; investigation archived without conclusions ([msg#524486](msg#524486)–[msg#524490](msg#524490)).

- **ErgoNames Progress**: Mentioned as unanswered in community questions; no update provided ([msg#524882](msg#524882)).

- **New Year Ergo Event Planning**: Speculation about anniversary video event around new year emission reduction; no confirmation from organizers ([msg#524911](msg#524911)).