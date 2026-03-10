---
title: "Ergo General Chat — 2026-W06"
date_start: "2026-02-02"
date_end: "2026-02-08"
type: telegram_weekly
channel: general
week: "2026-W06"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2026-W06 Summary

## Key Topics Discussed

- **Reddit AMA on ErgoBook**: Scheduled for February 5th at 17:00 UTC. Discussion included timing, promotion strategy on Twitter/Reddit, and coordination among kushti, Joe Armeanio, Grayman, qx(), and others. Multiple announcements made across platforms.

- **Demurrage Processing & Chain Cleanup**: Over 38,000 ERG claimed during demurrage processing of old boxes; 17.7M ERG in rebuilt boxes with ~0.2% demurrage charge overall. Discussion of efficiency as a chain bloat mitigation method.

- **Bene vs Ergo Raffle v1**: Josemi clarified differences—Bene uses Proof of Funding Tokens (proportional to contributions) vs Raffle's winner-based incentives. Bene supports multi-asset contributions (ERG or other tokens, not both in same campaign). UI improvements planned to allow multiple tokens per campaign.

- **Stablecoin Dynamics (SigmaUSD, Dexy, USE)**: Discussion of SigmaUSD depegging upward to ~$1.07-$1.08 due to reserve ratio mechanics below 400% threshold preventing minting. Contrast with Dexy's market-responsive approach and USE's multi-chain capabilities. Grayman noted lack of liquidity (<1000 wallets with 10k+ ERG) as underlying constraint.

- **Mobile Wallet UX for Non-Technical Users**: Grayman proposed encrypted key export via passphrase + email backup to eliminate seed phrase burden. Debate on whether custodial email-based recovery increases or decreases risk. Existing solutions referenced: Satergo (passphrase support), Zelcore, Minotaur (BIP39 passphrase), nostr apps.

- **Paper Wallet Security**: Patato55 forked Ergo paper wallet with BIP39 passphrase support, verified against Satergo. Obfuscation section intentionally distorts seed phrase text when folded for physical security against casual viewing.

- **ErgoAuth Implementation (EIP-0028)**: bmfink resolved Terminus iOS wallet authentication issues; published Wallet-Authentication Guide for ClawdBot/OpenClaw Gateway using ErgoAuth + HTTPS session management. Desktop (Nautilus) worked correctly; mobile required debugging.

- **Sub-blocks Development**: Still in testing phase with recent changes/redeployments. Not yet mainnet-ready.

- **Node & Infrastructure Outages (2026-02-08)**: Multiple systems down including Spectrum Finance, ErgoDEX API, Crux Finance, Cyberverse, Sigmanauts Mining Calculator. Arohbe published ergostatus.degens.world status dashboard with Telegram bot integration.

- **AI & Cryptography Alignment**: kushti shared quote on AI's preference for cryptographic proofs over institutional trust ("We trust the Hash, not the Human"). Discussion of long-term thinking in protocol design vs short-term fiat-credit-based planning horizons.

- **Rosen Bridge & Cardano Collaboration**: Cardano Over Coffee Twitter Space held 2026-02-03. Armeanio discussed Rosen Bridge integration proposals for Fund 15. Audio available via Sigmanauts Podcast (normalized by rustinmyeye).

## Important Decisions or Announcements

- [@cannon_q, msg#590677, 2026-02-02]: Transcripts platform now includes 26 more meetings (76 total calls, 51+ hours of content); 500+ meetings remain to be processed. https://ergo-transcripts.vercel.app

- [@Josemi, msg#589707, 2026-02-02]: Bene allows ERG or single alternative token per campaign; plans to extend UI to support multiple tokens per campaign but still pending implementation.

- [@HQΣr, msg#590112, 2026-02-05]: Beta testing Pulse mobile wallet (Android APK). Requires seedphrase entry; keyboard input to rooms upon connection toast.

- [@Patato, msg#590443, 2026-02-07]: Forked Ergo Paper Wallet with BIP39 passphrase support, verified against Satergo. Standalone HTML available offline. https://github.com/moon-miner/ergo-paper-wallet, https://ergopaperwallet.vercel.app/

- [@bmfink, msg#590416, 2026-02-07]: Terminus wallet ErgoAuth authentication now working. Wallet-Authentication Guide published for ClawdBot Gateway HTTPS implementation.

- [@ArØhβΣ, msg#590490, 2026-02-08]: Published ergostatus.degens.world API status monitoring site with Telegram bot integration.

## Technical Q&A Worth Preserving

- **Q** (@saturn return, msg#589675): What price do miners consider profitable for mining ERG given cost vs reward?
  **A** (@T Mas, msg#589682): Depends on energy location (Germany expensive vs cheap regions). Home miners mine at loss using as heaters; commercial entities need positive margin to cover operating costs. Reference: hashrate.no for profit calculations.

- **Q** (@kushti, msg#589706): Main differences between Ergo Raffle v1 and Bene?
  **A** (@Josemi, msg#589707): Raffle has lottery incentive (one winner). Bene uses Proof of Funding Token (proportional contribution). Bene allows ERG or single other token; Raffle v1 ERG-only. Bene features: no server, on-chain campaign reviews.

- **Q** (@kushti, msg#589715): Can I create campaign accepting ERG + USE + SigmaUSD?
  **A** (@Josemi, msg#589712): No—must choose one asset per campaign. Three separate campaigns needed for hackathon example. UI update planned.

- **Q** (@bmfink, msg#590378): Terminus wallet shows "reply URL not on host" ErgoAuth error; Nautilus desktop works fine with same server.
  **A** (@bmfink, msg#590416): Resolved through debugging. Published Wallet-Authentication Guide with working implementation patterns. https://ipfs.io/ipfs/bafkreian2uemscp4kdozgyj2pah2stek2nf6t2abvnupiwq675cwe7px4a

- **Q** (@Grayman, msg#590180): Design proposal for mobile wallet: email verification, auto-wallet generation, encrypted passphrase backup of seed to email. Feasible UX?
  **A** (@Grayman, msg#590259 et seq.): Private key stays on device, encrypted export via passphrase. Recovery: new device + encrypted file + passphrase. Debate: email risk vs SIM jacking; existing systems (Satergo, Zelcore, Minotaur) have partial implementations. No fatal flaw identified.

- **Q** (@T Mas, msg#590500): Why did SigmaUSD depeg upward to $1.07-$1.08 during downmarket?
  **A** (@Richi, msg#590513): By design—cannot mint when reserve ratio <400%, but if price >$1.00 arbitrage blocked. Holders of existing SigUSD benefit. Contrast: Dexy holds peg better; USE more responsive.

- **Q** (@Ozzle, msg#590492): Why include actual seed phrase in paper wallet obfuscation section?
  **A** (@Patato, msg#590495): Intentional design—distorted text overlays real mnemonic when folded along dashes, creating visual confusion against casual viewing/photography. Not random; specifically warped.

## Links Shared

- [https://ergo-transcripts.vercel.app]: Cannon's transcripts archive—76 calls, 51+ hours indexed, searchable by topic/date
- [https://hashrate.no]: Mining profitability calculator referenced for ERG
- [https://sigmanauts.com/podcast/#episode-cardano-over-coffee-w-rosenbridge-erg]: Cardano Over Coffee Twitter Space recording with normalized audio
- [https://github.com/moon-miner/ergo-paper-wallet]: Patato's BIP39 passphrase-enabled paper wallet fork
- [https://ergopaperwallet.vercel.app/]: Deployed paper wallet generator
- [https://ipfs.io/ipfs/bafkreian2uemscp4kdozgyj2pah2stek2nf6t2abvnupiwq675cwe7px4a]: bmfink's Wallet-Authentication Guide (ErgoAuth + HTTPS session)
- [https://ergostatus.degens.world]: Arohbe's real-time API/infrastructure status dashboard
- [https://t.me/ERGtrading]: Official Ergo trading Telegram (promoted by kushti as alternative to removed Discord channel)
- [https://t.me/USE_stablecoin]: USE stablecoin community group
- [https://github.com/catena2w]: Catena's GitHub (pre-Ergo Scorex developer, currently inactive due to health issues)

## Unresolved Questions

- **Bene multi-asset campaigns**: UI update to support multiple tokens per campaign flagged as pending, not yet scheduled. (@Josemi, msg#589714)

- **Sub-blocks mainnet timeline**: Status unclear beyond "still testing with recent adjustments." No ETA provided. (@cannon_q, msg#590044)

- **SigmaUSD vs Dexy long-term dynamics**: Grayman noted asymmetry in AgeUSD protocol fascinating but unresolved—behavior on major price upswing untested. (@Grayman, msg#590515-527)

- **Mobile wallet passphrase UX adoption**: Proposed encrypted key backup design has no fatal flaw identified but no committed implementation. Existing partial solutions (Satergo, Minotaur) not unified. (@Grayman, msg#590229-327)

- **Pulse Android wallet development**: Beta testing ongoing; feature completeness and mainnet readiness TBD. (@HQΣr, msg#590112)

---

**Week Summary**: Heavy focus on stablecoin mechanics, wallet UX for non-technical users, and infrastructure/API status management. Demurrage processing working as intended; paper wallet tooling improved. ErgoAuth authentication debugged. Reddit AMA coordination successful but event-specific. No major protocol changes; sub-blocks still in testnet phase.