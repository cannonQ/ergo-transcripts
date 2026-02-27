# Ergo General Chat — 2025-W03 Summary

## Key Topics Discussed

- **Ergo 6.0 Release**: Audit completion, testnet launch, and mainnet deployment timeline discussed. Currently under audit and fixes; finish audit, testnet launch, and mainnet launch are next steps [@kushti khushi, msg#539594, 2025-01-13].

- **Sub-blocks Implementation**: EIP draft published with prototyping code. Node miner-based devnet implementation, pool stratum updates, testnet deployment, and mainnet deployment planned [@kushti khushi, msg#539595, 2025-01-13].

- **Layer 2 & Sidechains (Sigmachains)**: Initial sketches for lightning-like and rollup contracts exist; Lithos rollup design unpublished. Need to find L2 architectures suitable for established Ergo DeFi and identify partners for sigma-chain development [@kushti khushi, msg#539595, 2025-01-13].

- **Sigma-Rust Implementation**: 6.0 implementation in progress. Costing and performance improvements needed; compatibility with reference implementation and alternative clients to be started [@kushti khushi, msg#539595, 2025-01-13].

- **Keystone Hardware Wallet Integration**: Transaction parsing and user display complete; final signing steps and SDK integration in progress. UI integration being worked on; Nautilus and other wallet integrations to follow [@kushti khushi, msg#540245, 2025-01-17; @Pgr456, msg#540245].

- **Dexy Protocol Audit**: Contract audit completed. Audit report available [@Ergo NEWS $ERG, msg#539732, 2025-01-13].

- **Rosen Bridge Progress**: Doge-related changes under final review; Binance tests progressing with invalid scenario testing; newly refactored packages for Ergo multisig and transaction agreement being integrated [@Ergo NEWS $ERG, msg#539732, 2025-01-13].

- **SigmaUSD Direct Interaction (ergfi.xyz)**: New UI allowing direct interaction with SigmaUSD bank contract, bypassing proxy contracts. Users execute Algo Stable Contract directly—values shown are 1:1 values received. 0-conf transactions can be enabled in Nautilus [@c8, msg#540049-540053, 2025-01-16].

- **MewFinance Trading Campaigns**: Asset Trade Volume Challenge live; testing with FAKU token. Initial UI for trading.mewfinance.com live with campaign tracking and real-time leaderboard [@HQΣr, msg#539866, 2025-01-15; msg#540413, 2025-01-19].

- **Emission Reduction & Algorithmic Monetary Policy**: Discussion on how emission reduction and demurrage impact Ergo protocol and projects built on it. "Algorithmic Monetary Policies in Ergo and their observed and projected impacts" proposed as discussion topic [@kushti khushi, msg#539845-539847, 2025-01-15].

- **Protocol Voting & Network Governance**: ERG hodlers should understand voting mechanisms; voting requires securing the network (mining). Discussion on programmable protocol and community voice [@Chris Ray, msg#539850, 2025-01-15].

- **Storage Rent & UX Impact**: Subblocks will reduce transaction failure time from 6 minutes to 2 seconds (17,900% UX improvement); removing repeated password input in Nautilus will further improve experience (5 sec → 0.4 sec). Mempool will shift from PvP to cooperative model [@c8, msg#540477-540480, 2025-01-19].

- **Paideia DAO Creation**: DAO creation cost lowered from 100k to 50k Paideia. UI tooltips being added to help users set up custom DAOs [@Luivatra, msg#539880, 2025-01-15; @HQΣr, msg#539883, 2025-01-15].

- **CoinGecko Data Issues**: Market cap and circulating supply for Ergo tokens missing on CoinGecko; based on Spectrum API and circulating supply API for each token. Spectrum still not renamed to ErgoDEX on CG despite splitting into Splash DEX and ErgoDEX [@Yulius Kristianto, msg#540423-540428, 2025-01-19].

- **SmartWallet vs Proxy Contracts**: Proxy contracts serve mobile/dumb wallets by handling contract interactions on behalf of users. Smart wallets will eventually eliminate this need by allowing wallets to understand and execute smart contracts directly [@c8, msg#540095-540096, 2025-01-16].

- **Hummingbot Integration**: Rosen forked Hummingbot and built connector for ErgoDex; vote by Hummingbot DAO successful. DAO now funds integration of PR into official platform and maintains going forward [@cannon_q, msg#540017, 2025-01-16].

## Important Decisions or Announcements

- [@kushti khushi, msg#539594-539595, 2025-01-13]: Core track roadmap for 2025 published—6.0 completion, sub-blocks implementation, L2/sidechain research, and Sigma-Rust improvements prioritized. Needs: L2 researchers, Sigma protocol designers, testers for sub-blocks, and business development for sidechain partnerships.

- [@Ergo NEWS $ERG, msg#539732, 2025-01-13]: Ledger integration audit contract signed; Keystone integration parsing/signing complete; Rosen Bridge Doge changes under final review; Dexy contract audit completed.

- [@kushti khushi, msg#539878, 2025-01-15]: Raffle launched to raise ERG for 6.0 code audit (https://ergoraffle.com/raffle/show/850d0c68a883b1d6822148fc20708948e0aa97a768fb976ce3b20fad878ef89a). Already found issues via community testing.

- [@kushti khushi, msg#539867, 2025-01-15]: Two public nodes rescanned with latest fixes; users running Rosen watchers, SafeW wallets, etc. should switch to alternative nodes. New extra index being set up at http://159.89.116.15:11088/.

- [@c8, msg#540041-540043, 2025-01-16]: ergfi.xyz (direct SigmaUSD interaction UI) live; 50 ERG reward for stress-testing via spamming 0-conf transactions. Requires local indexed node to run locally.

- [@cannon_q, msg#539976, 2025-01-16]: Ergo Bounties GitHub listing created (https://github.com/ErgoDevs/Ergo-Bounties) to consolidate open issues across ecosystem for visibility and faster resolution.

- [@HQΣr, msg#540413, 2025-01-19]: Initial UI for trading.mewfinance.com live with campaign tracking and real-time leaderboard; fine-tuning frontend for official launch.

- [@c8, msg#540430, 2025-01-19]: CoinGecko listing/data issues are "post-subblock issues" and not priority now. Solutions require subblocks and mempool subscriptions; infrastructure already exists to assemble properly.

## Technical Q&A Worth Preserving

- **Q** (@Abdulkrem, msg#539589): Is it possible to have a Solana bridge in Rosen?
  **A** (@Giufa OnliאΣ｜WON'T DM, msg#539597): Of course yes.

- **Q** (@kushti khushi, msg#539879): Can you see everything before paying 100k Paideia for DAO creation?
  **A** (@cannon_q, msg#539886): Yes, you can see all parameters listed before publishing DAO.

- **Q** (@A P, msg#539887): Is Keystone integration for new wallet/address in Keystone itself, or can we connect existing wallet with hardware wallet?
  **A** (@Pgr456, msg#539958): Yes Nautilus integration is planned and Satergo integration should also be possible.

- **Q** (@Alex, msg#540047): What does "direct interaction" mean in the context of SigmaUSD?
  **A** (@c8, msg#540049-540053): Direct interaction executes the Algo Stable Contract directly (you send ERG, get SigmaUSD back). Proxy contracts add a middleman. Advantage: you see directly in wallet what you send to Bank and what you get—no need to trust proxy contract. Values shown are 1:1 with what you receive.

- **Q** (@Alex, msg#540055): What do you mean by smart wallet?
  **A** (@c8, msg#540058): A smart wallet can do multisigs with friends inside the wallet and interact with DeFi contracts directly.

- **Q** (@Alex, msg#540062): Why wasn't direct interaction the default for SigmaUSD?
  **A** (@c8, msg#540069): Because UI builder wanted to serve as many different wallets as possible. Proxy contracts support dumb (mobile) wallets; smart wallets will eliminate the need.

- **Q** (@Alex, msg#540074): Why bother with proxy contracts when you can develop wallets to understand smart contracts?
  **A** (@c8, msg#540078): Because each additional contract takes time to implement inside the wallet, and wallet devs have deeper tech work to do.

- **Q** (@kii, msg#540205): Does ergfi.xyz interact with SigmaUSD bank directly?
  **A** (@c8, msg#540049): Yes, it executes the Algo Stable Contract directly.

- **Q** (@Rj, msg#540213): Does it also charge 2% fee on top?
  **A** (@c8, msg#540049-540051): Direct interaction means no proxy markup—1:1 values.

- **Q** (@Alex, msg#540124): Only issue is volatility of perceived value—hard to make it functional money.
  **A** (@cannon_q, msg#540125): Thus stables and other financial instruments and derivatives.

- **Q** (@cafebedouin.org, msg#540326): What are Solana's hardware requirements to run a node, and given those requirements, why choose blockchain over centralized database?
  **A** (implicit): Solana requires Google to warehouse data; centralization contradicts blockchain principles.

## Links Shared

- [https://youtu.be/9QneAIjfKhM]: "Ergo in 2025" video by kushti and Joe Armeanio (@Andy L, msg#539596, 2025-01-13)
- [https://drive.proton.me/urls/G02VA40J30#DAGrAJaMBrR9]: Dexy contract audit report (@Ergo NEWS $ERG, msg#539732, 2025-01-13)
- [https://github.com/ConnecMent/arbit]: ARB bot for running across MewFinance/ErgoDex and other DEXes (@kushti khushi, msg#539682, 2025-01-13)
- [https://x.com/ergo_armeanio/status/1878904353022730261]: Rosen Bridge updates (@kushti khushi, msg#539696, 2025-01-13)
- [https://ergoraffle.com/raffle/show/850d0c68a883b1d6822148fc20708948e0aa97a768fb976ce3b20fad878ef89a]: 6.0 audit fundraiser raffle (@kushti khushi, msg#539878, 2025-01-15)
- [https://dex.mewfinance.com/ergo/farm]: MewFinance yield opportunities (@cannon_q, msg#539702, 2025-01-13)
- [https://t.me/MewFinance]: MewFinance Telegram (@HQΣr, msg#539616, 2025-01-13)
- [https://youtube.com/live/Md5rk7kWlm0] then [https://youtube.com/live/A-ib0Npcg2c?feature=share]: Weekly Ergo AMA featuring mgpai, kushti, and qx() (@Andy L, msg#539936, msg#539978; @qx(), msg#539989, 2025-01-16)
- [https://github.com/ErgoDevs/Ergo-Bounties]: Ergo Bounties consolidated listing (@cannon_q, msg#539976, 2025-01-16)
- [https://ergfi.xyz/]: Direct SigmaUSD interaction UI (@c8, msg#540042, 2025-01-16)
- [https://escript.online/]: ErgoScript editor/compiler (@c8, msg#540082, 2025-01-16)
- [https://ergoauctions.org/artwork/a504f8a10a893d5b336ea01af45468cbd5722305479968bd0d326ae5783d8e36]: Petroglyph #15 NFT auction (@Maritsa Art, msg#540220, 2025-01-17)
- [https://www.ergoforum.org/t/ergo-escrow-craigslist-improvement-for-real-fi/4236]: Forum discussion on Ergo Escrow for real-world finance use cases (@kushti khushi, msg#540246, 2025-01-17)
- [https://trading.mewfinance.com/]: MewFinance trading UI with campaign tracking (initial launch) (@HQΣr, msg#540413, 2025-01-19)
- [https://loops.video/]: Decentralized TikTok alternative (@Glasgow｜WON'T DM, msg#540960, 2025-01-16)

## Unresolved Questions

- **L2/Sidechain Architecture**: Which L2 designs best fit existing Ergo DeFi, and which teams might partner on sigma-chain development? [@kushti khushi, msg#539595, 2025-01-13]

- **Emission Reduction Party Details**: Date and time for "emission reduction party" to discuss algorithmic monetary policies not yet scheduled. [@kushti khushi, msg#539845; @Chris Ray, msg#539848, 2025-01-15]

- **Keystone Nautilus Integration Timeline**: Wallet connection and SDK finalization needed before Nautilus integration can start; no ETA given. [@Pgr456, msg#539958, 2025-01-16]

- **Spectrum → ErgoDEX Rename on CoinGecko**: Still not updated despite Spectrum Finance splitting into Splash DEX and ErgoDEX. Status of communication with CG unclear. [@Yulius Kristianto, msg#540424-540428, 2025-01-19]

- **Oracle Pool v2 Launch Timing**: Dan mentioned "two weeks or so" for Oracle Pool v2 launch channel; external partner integration awaited. [@Armeanio, msg#540021-540023, 2025-01-16]

- **Subblocks Testnet Timeline**: "Hopefully next week" to run local miner-based devnets with properly packed transactions; specific date not confirmed. [@kushti khushi, msg#540447, 2025-01-19]

---

**Data Quality Notes:**
- Week had moderate activity (352 messages, 48 participants) with significant technical content from core developers (kushti, c8, Pgr456).
- Heavy focus on 2025 roadmap planning, hardware wallet integration, and Layer 2 research.
- CoinGecko listing and token metadata issues flagged as non-urgent (post-subblock priority).
- Subblocks repeatedly cited as foundational for UX and infrastructure improvements across ecosystem.