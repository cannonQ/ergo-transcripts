# Ergo General Chat — 2021-W48 Summary

## Key Topics Discussed

- **Wallet Infrastructure & UX Issues**: Yoroi Nightly experiencing persistent slowness and transaction display bugs; Android wallet recommended as alternative; iOS wallet in open beta testing via TestFlight; community discussing need for dedicated browser extension wallet independent of Yoroi.

- **Emission Reduction Soft Fork Proposal**: Community debating block reward reduction (X=12, X=15, or X=21 variants) to extend mining incentives beyond 8-year schedule; miners expressing concerns about profitability post-reduction if price doesn't appreciate; storage rent discussed as long-term miner income source but unproven in practice.

- **Kairon Labs Market Maker Partnership**: Ergo Foundation engaged Kairon Labs to improve liquidity and trading volume as prerequisite for Binance/tier-1 exchange listings; partnership announced via Bloomberg and Yahoo Finance; positioning Ergo as not yet ready for Binance due to liquidity/volume requirements.

- **Spectrum DEX Development**: ErgoDex Cardano version delayed to mid-January 2022; backend and JavaScript SDK implementation consuming December; order book vs. AMM design discussion; partial fill support and multiple upgrade keys discussed.

- **Oracle Pools & Waves Enterprise Partnership**: Decentralized Oracle Pools v1 (with EF members) and v2 (for Dexy Gold with GORT rewards) operational; Waves Enterprise partnership for on-chain warehouse receipts using Chainlink oracles and IoT sensors (weight, motion, camera) for trade financing use case.

- **ErgoScript & Zero-Knowledge Proofs**: Bulletproofs integration into ErgoScript for verification on-chain; discussion of compact Sigma protocols, Groth one-out-of-many proofs, and trustless alternatives to SNARKs; applications in verifiable credentials and hybrid contracts with privacy.

- **Network Performance & Speed Improvements**: Community drafting proposals for microblocks, sidechains, and layer-2 solutions; block time adjustment concerns raised (affecting emission, timestamp-based contracts); test net setup for parameter tweaking; high difficulty expected post-ETH 2.0 PoW merge.

- **SigmaUSD Stability & Reserve Mechanics**: SigmaRSV locking at 400% reserve ratio; 2% internal protocol fee on minting/redeeming (vs. 8.5% for DAI); discussion that SigmaRSV cannot be liquidated but redemption blocked if reserve depletes; safe for holding during crashes.

- **Meme Tokens & Ecosystem Activity**: ErdDoge (500k supply, creator holds none) and Luna Dog tokens launched on Spectrum DEX; discussion of Ergo Raffle for fundraising/NFT minting; user confusion about token supply decimals.

- **Development Velocity & Marketing**: Weekly developer updates starting (AMA format, ~63 mins); monthly dev update video format introduced for recurring cadence; Kairon Labs and Dan Friedman (business dev) arrival improving external communication; marketing firm engagement noted; anetaBTC project gaining traction with subreddit and Reddit tip bot integration.

## Important Decisions or Announcements

- [@kushti, msg#233748, 2021-11-30]: Emission reduction proposal and community consensus needed for soft fork; variants discussed at [ergoforum.org/t/emission-soft-fork-proposal](https://www.ergoforum.org/t/emission-soft-fork-proposal/2996/23).

- [@Gazza/Glasgow, msg#234015, 2021-12-01]: Kairon Labs hired as market maker; Ergo Foundation nearly incorporated as legal entity; Dan Friedman (IOG business development) joined team.

- [@Armeanio, msg#234748, 2021-12-03]: Willing to rotate onto AMAs as needed alongside kushti; video interview with Ilya (ErgoDex) coming Monday.

- [@Gazza, msg#234854, 2021-12-03]: ADA/ERG liquidity pair on ErgoDex coming "next year" (mid-January 2022 if all goes well).

- [@Ilya, msg#234370, 2021-12-02]: ErgoDex Cardano deployment delayed to mid-January; JavaScript SDK work consuming December.

- [@Glasgow/Gazza, msg#234731-234734, 2021-12-03]: Dan Friedman (in AMA) clarified that listing on Binance today would be problematic; Kairon Labs preparing infrastructure for future tier-1 listing.

- [@MrStahlfelge, msg#234562, 2021-12-02]: iOS wallet (Ergo Android Wallet) only task remaining: Touch ID/Face ID support before 1.0 release; nightly release with features at msg#234561.

- [@Vince/ErgoPad, msg#234195, 2021-12-01]: ErgoPad announced as first Ergo launchpad; seed sale in weeks; CEO AMA scheduled Saturday Dec 4; goal to be catalyst for bringing Ergo into top 10.

## Technical Q&A Worth Preserving

- **Q** (@Unknown): Can I stake ERG? (@msg#234300)  
  **A** (@Unknown): ERG is proof of work, no staking; can provide liquidity to DEX pools (with impermanent loss risk).

- **Q** (@Fabulaowski): Can Ergo smart contracts have privacy? (@msg#234076)  
  **A** (@Glasgow): Yes, Ergo Mixer app built for privacy; stealth pool contract tested; any token can potentially be mixed; SigmaUSD mintable through mixer.

- **Q** (@Grandify): Can fractional NFTs be created on Ergo? (@msg#233895)  
  **A** (@kushti, msg#233905): Fractionalization possible via auction house or token minting; creates multiple instances or fractional shares of single NFT.

- **Q** (@sparehead): Can I be liquidated if SigmaRSV price falls? (@msg#234905)  
  **A** (@Unknown): No liquidation; worst case is inability to redeem if reserve depletes below 400%.

- **Q** (@Karim): What is the difference between L0, L1, L2 in Ergo architecture? (@msg#235216)  
  **A** (@Glasgow): L0 = peer-to-peer network layer; L1 = on-chain/application layer (consensus + computation combined); L2 = off-chain. [Scaling docs](http://docs.ergoplatform.org/dev/protocol/scaling/).

- **Q** (@Tu Nguyen): Why does Yoroi show "submitted" for NFT transfer 1+ hours? (@msg#234375)  
  **A** (@Glasgow, msg#234388): Check explorer; Yoroi Nightly needs refreshing often; funds typically arrive but Yoroi fails to display them.

- **Q** (@Unknown): How many confirmations does KuCoin require for ADA deposits? (@msg#235247-235250)  
  **A** (@Unknown): ~100 confirmations; check ADA deposit page for exact requirement.

- **Q** (@Luigi): Error when opening Ergo node: "Unable to access jarfile ergo-4.0.16.jar" (@msg#235266)  
  **A** (@Unknown): Execute command in same folder as jar file; verify filename matches exactly.

- **Q** (@Rootardio): How are custom tokens created on Ergo programmatically? (@msg#235317-235326)  
  **A** (@Green_Diamond): Ergo has native tokens (like Cardano native tokens, unlike ERC-20); use [ergoutils.org](https://ergoutils.org/#/token) or AppKit for creation.

- **Q** (@error): Why are nodes stuck at block 635394 with 1-hour delay? (@msg#235384-235419)  
  **A** (@kushti): Block candidate generation issue in node; investigating; issue resolved by node resync shortly after.

## Links Shared

- [ergoforum.org/t/update-erg-emission-and-hardforks-policy/3015](https://www.ergoforum.org/t/update-erg-emission-and-hardforks-policy/3015): Emission discussion pinned by kushti.
- [ergoforum.org/t/emission-soft-fork-proposal/2996/23](https://www.ergoforum.org/t/emission-soft-fork-proposal/2996/23): Emission variants discussion.
- [YouTube: Ergo Weekly Dev Update & AMA](https://www.youtube.com/watch?v=Rcv25WQ0lwQ): Live AMA stream (msg#234441, recurring Thursday).
- [YouTube: Dev Update 2021-12-03](https://youtu.be/DSNZVaiFm_E): Weekly developer update with index (msg#235223).
- [ergoraffle.com](https://ergoraffle.com/): Raffle platform for fundraising/NFT drops.
- [ergoutilis.org](https://ergoutilis.org/): Token creation and airdrop tools.
- [docs.ergoplatform.org/dev/scs/ergoscript/](http://docs.ergoplatform.org/dev/scs/ergoscript/): ErgoScript documentation.
- [github.com/ergoplatform/ergoscript-by-example](https://github.com/ergoplatform/ergoscript-by-example): ErgoScript examples.
- [docs.ergoplatform.org/dev/stack/appkit/](http://docs.ergoplatform.org/dev/stack/appkit/): AppKit documentation.
- [docs.ergoplatform.org/node/](http://docs.ergoplatform.org/node/): Node setup instructions.
- [anarplex.net: Toward a Private Digital Economy](https://anarplex.net/hosted/files/Toward_A_Private_Digital_Economy/index.html): Privacy in finance whitepaper.
- [reddit.com/r/anetaBTC](https://www.reddit.com/r/anetaBTC/): anetaBTC subreddit (community-managed).
- [Phemex Academy: What is Ergo](https://phemex.com/academy/what-is-ergo): Educational content.
- [Waves Enterprise & Ergo partnership](https://wavesenterprise.com/media/waves-enterprise-and-ergo-bring-more-secured-blockchain-data-oracles-to-enterprise-blockchain): Oracle pools and trade finance.
- [TestFlight: iOS Ergo Wallet Beta](https://testflight.apple.com/join/MRyG2qfm): iOS wallet beta testing link (msg#235146).
- [ergopad.io](https://ergopad.io/): ErgoPad launchpad website.
- [t.me/ergopad_chat](https://t.me/ergopad_chat): ErgoPad community discussion.

## Unresolved Questions

- **Exact Binance listing timeline**: Kairon Labs prep work ongoing but no specific date; Dan Friedman clarified listing *today* would be problematic; community expecting "soon" but no confirmed ETA.

- **SigmaUSD fee reduction**: 2% fee discussed as high for users; no announcement of parameter adjustment or governance vote scheduled.

- **Yoroi long-term strategy**: Will Ergo Foundation fix Yoroi or build independent browser extension? Armeanio indicated help for Yoroi + community wallet development but no clear prioritization.

- **Emission soft fork activation**: Community consensus still forming; miners concerned about profitability post-reduction; no block height proposed yet.

- **Privacy smart contracts UI/UX**: Mixer functional but requires local execution; no timeline for dApp-integrated mixing or incentive structure for mixer node operators.

- **Node implementation diversity**: Wolf9466 noted lack of multiple node implementations (msg#235403) as vulnerability; no alternative implementations announced (Scala/Rust reference client only).

- **Storage rent activation & sufficiency**: Discussed as miners' long-term income but no active use cases or testing; adoption rate and adequacy uncertain.