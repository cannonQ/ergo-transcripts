---
title: "Ergo General Chat — 2023-W12"
date_start: "2023-03-20"
date_end: "2023-03-26"
type: telegram_weekly
channel: general
week: "2023-W12"
source: telegram
message_count: 875
categories: [bridges, defi, wallet, ecosystem, technical, governance, community]
key_terms: [Rosen Bridge, private testing, public testing, mainnet, cross-chain, Spectrum Finance, yield farming, liquidity provision, APY, testing, Dexy, stablecoin, DexyUSD, frontend, oracle pools, Nautilus, Ledger, hardware wallet, developer mode, official release]
---
# Ergo General Chat — 2023-W12 Summary

## Key Topics Discussed

- **Rosen Bridge Testing**: Private testing phase initiated this week with community members; public testing to follow if successful. Expected progression: private → public → mainnet launch.

- **Spectrum Finance Yield Farming**: Yield farming feature undergoing stress testing with positive results; expected public release within days. Feature allows additional incentives on liquidity provision beyond swap fees.

- **Dexy Protocol Development**: Frontend work ongoing; expectations that Dexy will "change the game" similar to how SigmaUSD did. Backend code by @code_for_uss to be open-sourced soon.

- **Ledger Support Status**: Ergo app remains in developer mode only on Ledger; some users report ability to sideload without developer mode enabled, but official release pending.

- **Storage Rent & User Awareness**: Community concern raised about users losing valuable NFTs/tokens after 4 years if wallets contain no ERG; wallets should warn users at creation time rather than rely on education.

- **Ergo Website UX**: Wallet information poorly presented on official Ergo website; suggestions made to prioritize end-user experience over miner information and improve wallet discovery (GitHub links deter non-technical users).

- **Developer Activity Metrics**: Past week: 28 active repos, 122 commits, 22 active developers. Past month: 74 repos, 621 commits, 46 devs. Past year: 379 repos, 6653 commits, 184 devs.

- **AnETA Project Criticism**: Community divided on AnETA's direction—shifting focus from wrapping protocol to NFTs/airdrops/staking, then back to wrapping with unclear roadmap. Some view lack of focus and vague communication as ethically questionable given LISO/NFT investments.

- **ErgoScript Learning Curve**: New developers find ErgoScript difficult; suggestions made that eUTXO model must be understood before learning ErgoScript language itself. Solidity bridge proposed but deemed ineffective without foundational knowledge.

- **Ledger 20-Token Limit Issue**: Ledger wallet can't handle UTXOs with 20+ different tokens; change boxes and airdrops can trigger this limit, making wallets temporarily inaccessible. Affects users with NFTs from IDOs/airdrops.

- **Token Voting & DAO Creation**: Simple on-chain voting possible via token creation; Ergo API easier to query than Cardano for token holder tracking. Paideia DAO tools available for community governance.

## Important Decisions or Announcements

- [@Gazza_SP, msg#374315, 2023-03-20]: Yield farming for Spectrum Finance officially being tested and "going really well" with successful stress tests.

- [@qx(), msg#374805, 2023-03-22]: Rosen Bridge small testing group starting in a few days, then expanded testing after that.

- [@Gazza_SP, msg#374271, 2023-03-24]: Private testing of Rosen Bridge happening this week with community members.

- [@kushti, msg#374493, 2023-03-20]: Testnet explorer now shows XAU oracle pool state powered by Oracle Pools v2.

- [@Glasgow, msg#374949, 2023-03-23]: Ergo ecosystem developer statistics—past year: 379 active repositories, 6,653 commits, 184 active developers.

- [@kushti, msg#375327-375328, 2023-03-24]: Dexy repo management clarified—contracts/tests imported after extensive reviews and testing; ChainCash remains hackathon-level with missing details; kusHti sole contributor to both for now.

- [@CW, msg#375260, 2023-03-24]: ErgoHack VI community voting results: Ergo Tizen (gold), Lithos (silver), Explorer UI (bronze) selected for community fund distribution (653 votes from 272 members).

- [@HQΣr, msg#374653, 2023-03-21]: Ergcube.com back online; v2.0 in development; switched to more advanced/expensive server with funding for several years.

## Technical Q&A Worth Preserving

- **Q** (@Mahdyar, msg#375972): "How does storage rent return coins with lost keys into circulation if wallets with lost keys don't perform transactions?"
  **A** (@Glasgow, msg#374973): "The age of the box is taken from the last tx, so it'd be liable for rent ~4yrs after being sent to that address."

- **Q** (@Mahdyar, msg#374974): "Does storage rent mean 1 ERG in my wallet will be less after 4 years?"
  **A** (@Glasgow, msg#374975): "Only if it remains unmoved, timer resets each time you make a tx."

- **Q** (@Flying_Pig, msg#375510): "If you have 1 ERG, how long until it's gone?"
  **A** (@Flying_Pig, msg#375512): "If you have 1 ERG it will take 32 years before it's gone."

- **Q** (@Mahdyar, msg#375520): "What if tokens lack ERG—can miners remove all tokens on Ergo?"
  **A** (@Flying_Pig, msg#375522): "You are correct. If there are tokens left in the box and no ERG to pay for the rent the tokens will go to miners."

- **Q** (@PalaZ, msg#375407): "What is a SigmaProp? What do you mean with Sigma Proposition?"
  **A** (@Luivatra, msg#375408): "You need to understand eUTXO before looking at ErgoScript, the mistake many make is go straight to ErgoScript."

- **Q** (@MatrixMaarten, msg#375630): "Is there something I can read on Ergo's origin, how the network survived 51% attacks, fair launch?"
  **A** (@Flying_Pig, msg#375637): "The genesis block contains proof of no premine (link to a news article, and the blockhash of Bitcoin and I think Ethereum)."

- **Q** (@MrStahlfelge, msg#375541, regarding box consolidation): Is it possible to consolidate boxes on iOS?
  **A** (@MrStahlfelge, msg#375653): "In theory it is possible, in practice it is possible only on Android and we need some more stuff to be done first. When using the mobile wallet boxes are consolidated on every transaction made though."

- **Q** (@Flying_Pig, msg#375440): "What determines which watchers are involved in a Rosen event?"
  **A** (@MHS_SAM, msg#375442): "Each chain has its own set of watchers. Being a watcher is as easy as running the watcher code and obtaining reporting permits by locking Rosen tokens. Reporting is two-step: commit to event, then reveal when enough commitments present."

- **Q** (@Unknown, msg#375319): "Kushti owns Dexy and ChainCash repos, commits straight to master—is there a review process?"
  **A** (@kushti, msg#375327): Dexy contracts imported after extensive reviews/testing; now polishing. ChainCash remains hackathon-level; kushti is sole contributor currently.

- **Q** (@qx(), msg#375721-375722): "How can I scan the chain to find who is holding my DAO voting token?"
  **A** (@qx(), msg#375752): Provided direct Ergo Explorer API example: `https://ergo-explorer.anetabtc.io/api/v1/boxes/unspent/byTokenId/[TOKEN_ID]` with offset pagination explained.

- **Q** (@Mahdyar, msg#375482): "Which wallet imports private keys in addition to seed phrase?"
  **A** (@Aberg, msg#375489): Referenced `.wallets` command (wallet list); implied none currently support direct private key import beyond seed phrase restoration.

## Links Shared

- [https://github.com/capt-nemo429/nautilus-wallet]: Nautilus wallet GitHub repository
- [https://twitter.com/ergopadofficial/status/1637568734398119938]: ErgoPad official announcement
- [https://github.com/glasgowm148/ergoscripts]: Glasgow's Ergo installation and management scripts
- [https://ergoplatform.org/en/get-erg/#Wallets]: Official Ergo Platform wallet page with links to Firefox/Chrome extensions
- [https://ergonaut.space/en/home]: Ergonaut community wiki
- [https://www.dropbox.com/sh/jionpgnj89eod2f/AAC5S1vnOwO3gm2vRYOmDBQ-a?dl=0]: Dropbox with Ergo graphics, images, videos, GIFs for promotion
- [https://testnet.ergoplatform.com/en/oracle-pool-state/dexyerg]: Testnet explorer showing XAU oracle pool state (Oracle Pools v2)
- [https://vxtwitter.com/ZengateGlobal/status/1638166550577553408?s=20]: Palmyra (formerly Zengate) AMA announcement
- [https://github.com/ergoplatform/awesome-ergo]: Awesome Ergo repository (noted as outdated for wallets section)
- [https://ergcube.com]: ErgoCube dApp directory; wallet section at `/index.php?do=cat&category=wallets`
- [https://github.com/rosen-bridge]: Rosen Bridge GitHub documentation
- [https://docs.ergoplatform.com/uses/blocked_web/]: Ergo documentation on offline blockchain operation
- [https://github.com/ScorexFoundation/sigmastate-interpreter/blob/develop/docs/LangSpec.md]: Sigma/ErgoScript language specification
- [https://github.com/ergoplatform/ergoweb/issues]: Official Ergo website GitHub issues tracker
- [https://github.com/danieloravec/ergo-token-swap]: Ergo token swap tool (in active development)
- [https://sigmafi.app]: SigmaFi lending/collateral protocol dApp
- [https://duckpools.io]: DuckPools liquidity pooling dApp
- [https://skyharbor.io]: SkyHarbor marketplace/options protocol
- [https://ergopad.io]: ErgoPad IDO/launchpad platform
- [https://tokenjay.app/app/#sales]: TokenJay P2P Ergo trading platform
- [https://bisq.network/]: Bisq decentralized P2P exchange (for ERG/BTC trades with escrow)
- [https://ergo-explorer.anetabtc.io/api/v1/boxes/unspent/byTokenId/[TOKEN_ID]]: Ergo Explorer API for querying token holders
- [https://anchor.fm/thesigmacast]: The SigmaCast Podcast
- [https://rss.com/podcasts/erg/]: Ergo podcast RSS feed
- [https://youtube.com/live/MEkuZ-0m2HQ]: Ergo Weekly Update & AMA live stream (2023-03-23 1 PM UTC)
- [https://twitter.com/i/spaces/1BdGYyMlnegGX]: Ergo Twitter Spaces broadcast of weekly update
- [https://strawpoll.com/polls/poy9WkABpgJ/results]: ErgoHack VI community voting results
- [https://youtu.be/nK2ZBsLCGIU]: Kushti world tour presentation (Ergo origins/design)
- [https://youtu.be/playlist?list=PL8-KVrs6vXLSplfL5Xd5VSZK_TPSyHgy-]: Cypherpunk Finance Summit video playlist

## Unresolved Questions

- **Ledger Official Release Timeline**: Ergo app remains in developer mode despite some users reporting successful sideloading. Official release date unclear; @Glasgow noted Ledger is "slow" and Ergo won't pay to accelerate (@Flying_Pig, msg#375517).

- **Storage Rent NFT Loss Mitigation**: Community recognized risk of valuable NFTs being lost to miners if box lacks ERG for 4+ years. Solutions debated (wallet warnings, bot notifications, consolidation features) but no consensus reached on implementation priority.

- **Wallet Import of Private Keys**: No wallet currently supports direct private key import; only seed phrase restoration available. Unresolved whether wallets should add this feature.

- **ChainCash Public Repository Timeline**: @kushti noted ChainCash code will be open-sourced with vague "soon (TM)" timeline; backend code availability also pending.

- **Dexy Backend Code Release**: Backend code by @code_for_uss "will be open sourced soon (TM)" but no specific date given.

- **Rosen Bridge Guard Selection Process**: Initial era will have small guard set (likely 2 reserved for team); later eras allow guard set itself to decide new members. Community questioned decentralization balance but no formal governance proposal finalized.

- **Spectrum CMC/CoinGecko Listing**: @Gazza noted "been pushing since we launched token" but no response from aggregators yet (@Gazza, msg#375596).

- **ErgoScript Learning Resources**: Community consensus that documentation exists but is insufficient for beginners; debate ongoing about whether to support Solidity-to-ErgoScript bridge vs. improving fundamental eUTXO education.

---

## Context Notes

- **Week Tone**: Generally positive; Rosen Bridge imminent testing energized community. AnETA criticism surfaced philosophical concerns about open-source ethos and focus, but represented minority view.
- **Developer Activity**: Strong metrics show sustained ecosystem growth with 184 active developers year-to-date.
- **User Experience Focus**: Multiple discussions centered on onboarding friction (website, wallet discovery, storage rent awareness), indicating maturation concerns as adoption grows.