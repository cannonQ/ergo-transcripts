---
title: "Ergo General Chat — 2024-W22"
date_start: "2024-05-27"
date_end: "2024-06-02"
type: telegram_weekly
channel: general
week: "2024-W22"
source: telegram
message_count: 722
categories: [bridges, ecosystem, security, technical, wallet, governance, defi, community, marketing]
key_terms: [trustless relay, Bitcoin header validation, merkle proof, Bitcoin interoperability, Rosen Bridge, Bitcoin bridge, keygen ceremony, BTC transfer, ErgoHack VIII, Lightning Swaps, CrystalPool, "$40,000 prize pool", rsBTC, token scam, fraud prevention, ErgExplorer, node setup, Termux, Android node, 127.0.0.1]
---
# Ergo General Chat Summary — 2024-W22
**Period:** 2024-05-27 to 2024-06-02  
**Message Count:** 722  
**Primary Focus:** Bitcoin trustless relay completion, sidechain design, storage rent debate, Rosen Bridge progress, node setup support

---

## Key Topics Discussed

- **Trustless Bitcoin Relay & Merkle Proof Validation** ([@kushti, msg#494442, 2024-05-30]): Bitcoin microclient on Ergo enabling trustless interoperability with Bitcoin and SHA256 chains. Includes transaction inclusion Merkle proof validation, completing a core bridge primitive needed for cross-chain contracts.

- **Sidechain Constructions & Merge Mining** ([@Glasgow, msg#494057–494065, 2024-05-27]): Discussion of double merge-mined sidechains vs. trustless relays. Double merge mining allows a sidechain to act as a Bitcoin sidechain with commitments to both Bitcoin and sidechain UTXO sets on-chain; trustless relay uses smart contracts to store headers and verify transactions without mining involvement.

- **Rosen Bridge Bitcoin Support & Guard Keygen** ([@CW, msg#494192, 494281, 2024-05-28, 2024-06-02]): Successful keygen ceremony tests completed. Guard keygen ceremony imminent, followed by mainnet tests and official Bitcoin bridge launch. Guards and Watchers to update services for BTC support.

- **Storage Rent & Early Miner Wealth Distribution Debate** ([@Mewbie et al., msg#494546–494789, 2024-05-31–06-01]): Contentious discussion over whether early-mined ERG from 2019–2020 (accumulated via superior private mining software) should be subject to hard-fork seizure to fund Binance listing. Counter-arguments: (1) fair market competition, (2) devs never provided optimal public miner, (3) storage rent already captures idle value, (4) hard fork would cause exodus and price collapse. **Unresolved.**

- **Paideia DAO Beta & Error Logging Improvements** ([@kushti, msg#494272, 2024-05-29]): Improved error logging with repeat counters to reduce log spam. DAO creation opened despite intermittent bug still under investigation. Contracts and documentation finalizing. **Still beta — funds risk warning in place.**

- **Sigma 6.0 & Throughput Optimization** ([@kushti, msg#495107, 2024-06-01]): Post-Sigma 6.0 goal is to optimize throughput under flat p2p network assumptions. Discussion of sub-blocks (sub-blocks) as mechanism for burst handling around new block mining.

- **Gluon Gold Stablecoin Testnet Progress** ([@Bruno, msg#494668, 2024-05-31]): Testnet identified one bug (PR #10), multi-sig for treasury in development (PR #9). UI design refinement underway. **Mainnet ETA: TBD.**

- **Palmyra Ecosystem & Chainlink Oracle Partnership** ([@Armeanio, msg#494182–495064, multiple dates]): Chainlink integration for proof of reserve and on-chain warehouse receipts for decentralized trade financing. Plan to build native Ergo Oracle Pools (Oracle Pool v1 via EF members, Oracle Pool v2 running Dexy Gold). Funds from token sale to be invested in Oracle infrastructure and tooling.

- **ErgoHack VIII "Ergo as Smart Layer for Bitcoin"** ([@Ergo NEWS, msg#494360, 2024-05-30]): Running May 25–June 2 with ~$40k prize pool. Active projects: Lightning Swaps, CrystalPool (self-custodial exchange), OptionPools, Ephemeral Token Messaging, Moria Finance (rsBTC tools), Reputation System (Runes protocol), Mining BTC Swap, RNG.

- **Node Setup & Mobile/Raspberry Pi Deployment** ([@Alien et al., msg#494093–495292, ongoing]): Community members successfully running full/pruned nodes on Raspberry Pi, Android (Termux), and low-power hardware (Pentium 3 @ <10W). Configuration questions around API keys, port binding (127.0.0.1:9053), wallet restoration, and hidden directories (.ergo).

---

## Important Decisions or Announcements

- [@CW, msg#494192, 2024-05-28]: Rosen Bridge keygen docs under review; Guard keygen ceremony imminent before mainnet tests.

- [@CW, msg#494281, 2024-06-02]: Bitcoin bridge release countdown active; Guard keygen ceremony in coming days; Guards/Watchers to update for BTC support.

- [@kushti, msg#494272, 2024-05-29]: Paideia DAO creation reopened despite intermittent bug under investigation; beta warning maintained.

- [@kushti, msg#494442, 2024-05-30]: Trustless Bitcoin relay and transaction inclusion Merkle proof validation testing **complete**; relay contract **done and tested**.

- [@Ergo NEWS, msg#494360, 2024-05-30]: ErgoHack VIII formally launched with 12+ projects; $40k prize pool confirmed.

- [@Bruno, msg#494668, 2024-05-31]: Gluon Gold testnet has identified and is fixing bug in smart contract; UI improvements in progress.

---

## Technical Q&A Worth Preserving

### Bitcoin Relay & Sidechain Interoperability

- **Q** (@Unknown, msg#494066): Will trustless relay let us sign transactions onto the BTC chain, or is it more like a bridge?  
  **A** (@Glasgow, msg#494068): Need private key to sign. Trustless relay bridges info which you can use in smart contracts on each side.

- **Q** (@Unknown, msg#494062): Is trustless relay the same as double merge-mined sidechains?  
  **A** (@Glasgow, msg#494063–494065): No mining involved in trustless relay—uses smart contract to store Bitcoin headers and verify Bitcoin transactions. Double merge mining instead has sidechain acting as Bitcoin sidechain with commitments to both Bitcoin and sidechain UTXO sets written on-chain for rich applications on Bitcoin.

### Node Configuration & API Keys

- **Q** (@Alien, msg#494160, 494161): If someone accesses my Raspberry Pi, can they read my wallet mnemonic from ergoMixer.conf? Is my API key a string or the word I used?  
  **A** (@Glasgow, msg#494173, 494174): No ergomixer.conf file needed unless customizing mixer—that's hallucinating. API key is set on your node itself; don't run .conf with mixer unless necessary. Covert addresses accessible via web UI.

- **Q** (@Alien, msg#494074–494082): Does running a node make it visible to all wallets? Can I use my ISP address? Do I need to initialize a wallet to run a node?  
  **A** (@Aberg, msg#494113): Use 127.0.0.1 since node runs on phone itself. Wallet and node are separate; you can restore any wallet on a running node. Full sync takes time like mainnet.

- **Q** (@Alien, msg#494479–494499): Node address configuration for mobile wallet pointing to Android Termux node—correct syntax?  
  **A** (@qx(), msg#494489–494499): Use only `http://127.0.0.1:9053/` without `/panel` suffix or additional paths.

### Wallet Recovery & Tipperbot Access

- **Q** (@Bye H8er, msg#495155, 495199): Do tipperbots have recovery phrases? How do I restore a seed phrase correctly—do I include spaces?  
  **A** (@Unknown, msg#495198): DM @ErgoTipperBot and change seed phrase. Restore syntax: enter words with spaces, set spending password. (@Alien, msg#495215–495218): Restore words and spending password to unlock wallet; if balance differs, you've restored a different wallet—check notes for correct mnemonic.

### Node Configuration Syntax

- **Q** (@Alien, msg#495292): Is this ergo.conf syntax correct for Termux node deployment?  
  **A** (No direct response in transcript; context suggests testing in lab environment before production use.)

---

## Links Shared

- [Ergo Sidechain Constructions Docs](https://docs.ergoplatform.com/uses/sidechains/sigma-chains/#sidechain-constructions) ([@Glasgow, msg#494057]): Reference for Sigma Chain and merge-mined sidechain design.

- [Gluon Gold](https://gluon.gold) ([@Bruno, msg#494668]): Testnet UI and smart contract repository with active PRs #9 (multi-sig) and #10 (bug fix).

- [Stability Nexus Stable Order Docs](https://docs.stability.nexus/about-us/the-stable-order) ([@Bruno, msg#494422]): Details on Stable Order mechanics (incomplete, more to be added).

- [Supplementary Paper on EIP27 Forking](https://eprint.iacr.org/2021/577.pdf) ([@Glasgow, msg#494586]): Technical reference for EIP27 and fund redistribution process.

- [KYA PDF](https://github.com/kushti/kya/blob/master/kya.pdf) ([@kushti, msg#495024]): "Know Your Assumptions"—guide to verifying protocol cryptography.

- [Ergo Chatbot (General)](https://www.chatbase.co/chatbot-iframe/zxB2uzZfYoHIpA98eTzgM) ([@Glasgow, msg#494172]): Trained on Ergo docs and PDFs.

- [ErgoScript Chatbot](https://www.chatbase.co/chatbot-iframe/INAIfQ2ts4E6ykf4rseVu) ([@Glasgow, msg#494172]): Specialized chatbot for ErgoScript questions.

- [Sigmanauts Podcast](https://sigmanauts.com/podcast/) ([@Unknown, msg#494451]): Audio of weekly AMA (featuring mgPai, qx() on 2024-05-30).

- [Rosen Bridge Twitter – Keygen Ceremony Announcement](https://x.com/RosenBridge_erg/status/1795573838509695089) ([@CW, msg#494192]): Successful keygen tests; mainnet tests and launch imminent.

- [Rosen Bridge Twitter – BTC Bridge Countdown](https://x.com/RosenBridge_erg/status/1797372307104833799) ([@CW, msg#495281]): Guard keygen ceremony imminent; Guards/Watchers to update for BTC support.

- [ErgoHack VIII Overview](https://ergoplatform.org) ([@Ergo NEWS, msg#494360]): $40k prize pool; 12+ projects in "Ergo as Smart Layer for Bitcoin" theme.

- [Token-Bouncer Tool](https://github.com/rustinmyeye/token-bouncer) ([@Unknown, msg#494433]): Utility for cleaning up wallets with unwanted tokens (not recommended for wallets with sensitive access).

- [Ergo Platform Exchanges List](https://ergoplatform.org/en/get-erg/#Exchanges) ([@qx(), msg#494385]): Directory of CEXes/DEXes supporting ERG acquisition.

- [Cornell Blockchain Conference Panel](https://x.com/dadreboi) ([@qx(), msg#494858]): qx() spoke on blockchain panel.

- [CNFT Con Speaking](https://x.com/dadreboi) ([@qx(), msg#494854]): qx() and Rick at CNFT Con; Dan & Joe Armeanio also on stage.

---

## Unresolved Questions

- **Storage Rent & Early Miner Wealth Redistribution**: Should 12M ERG mined in 2019–2020 via superior private mining software be hard-forked and seized for ecosystem marketing (Binance listing)? Arguments for (fairness, ecosystem benefit) vs. against (breaking social contract, developer precedent, no obligation to distribute mining rewards equally). **No consensus reached; kushti recommends community vote mechanism; broader discussion deferred.** (msg#494546–494789)

- **Sigma 6.0 Performance & Block Time Changes**: How to safely increase throughput (via sub-blocks or alternative) without breaking timestamp-based smart contracts and emission schedules? Trade-offs between block time decrease and difficulty adjustment. (@kushti, msg#495107, msg#494908–494912) **Detailed design TBD; community discussion channel mentioned but not yet formalized.**

- **Gluon Gold Mainnet Timeline**: Bug fixed and multi-sig in development, but no ETA for mainnet launch. (@Bruno, msg#494668) **TBD.**

- **Oracle Pool v2 & Dexy Gold Status**: kushti asked progress on "Dexy Gold" ([@Pulsarz, msg#494675]), no response captured. (msg#494675) **TBD.**

- **Ergo Platform Website Status**: User reported ergoplatform.org not loading ([@Daniel, msg#495265–495269]); Pulsarz confirmed loading fine. Brief intermittent access issue—root cause unclear. (msg#495265–495269) **Likely transient; no formal follow-up.**

- **Marketing & Conference Presence**: Mewbie argued Ergo lacks sufficient conference presence and marketing to attract CEX listings. qx() countered with Cornell, CNFT Con, RARE booth, and Dubai speaking engagements. Debate over whether Sigmanauts' independent booth counts as "Ergo presence." (msg#494832–494869) **Ongoing ecosystem engagement discussion; no formal strategy update.**

- **Sub-Blocks Throughput Optimization**: Luivatra asked if sub-blocks help with burst handling and reduce main block size. (@kushti, msg#495157) **Yes, they help (confirmed), but detailed implementation and timing TBD.** (msg#495157)

---

## Community Sentiment & Observations

- **Node Decentralization Enthusiasm**: Multiple users (Alien, Unknown) successfully running full/pruned nodes on low-power hardware (Raspberry Pi, Pentium 3 @ <10W, Android Termux), with genuine curiosity about p2p infrastructure and self-sovereignty. Positive reception.

- **Bitcoin Integration Hype**: Clear excitement around trustless Bitcoin relay completion and imminent Rosen Bridge BTC support; seen as major ecosystem milestone.

- **DAO Participation Concerns**: Paideia open to DAO creation despite lingering bugs; concern about user capital safety in beta environment.

- **Early Wealth Distribution Tension**: Contentious debate suggests underlying concern about concentration of ERG in early miners' hands; counterargument that this is healthy market competition. **No resolution; structural issue flagged but not formalized into proposal.**