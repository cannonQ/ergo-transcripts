# Ergo General Chat — 2020-W09 Summary

## Key Topics Discussed

- **Node Setup and Configuration**: Community members troubleshooting full node deployment (3.2.1 version), including wallet access issues, config file setup, and systemd permission problems. Configuration shown with REST API binding and wallet secret storage paths.

- **Exchange Listings and Market Access**: Discussion of Ergo availability on Waves Exchange, ViteX, Tidex, and Hotbit with varying confirmation requirements (32-100 confirmations). Community interest in listings on Binance, Bittrex, and other major exchanges.

- **Community Growth and Marketing**: Recognition of 1,000+ member milestone in main group; discussion of marketing strategies including signature campaigns on Bitcointalk, ad banners, retweets with giveaways, and community-driven outreach via @ErgoSocials channel. Emphasis that marketing effort lags behind technical quality.

- **Waves Exchange Gateway**: Clarification that Coinomat-operated Ergo gateway on Waves is now maintained by Waves.Exchange team but remains "official."

- **GPU Mining Performance**: Query on GTX 1080 Ti hashrate (37.8411 MH/s reported); mention of superior performance from closed-source miner at erg.ezpool.io (~4x improvement).

- **Airdrop Campaign**: 0.5 ERG airdrop announced; community debate on legitimacy and value. Airdrop participation mechanics discussed (referral limits, task-based distribution vs. free drops).

- **Wallet Options**: Multiple wallet solutions mentioned: Coinbarn, Vite Wallet (50,000+ downloads on Google Play), mention of Magnum wallet support.

- **Scorex Framework History**: Detailed discussion of Scorex origin as modular blockchain framework used in NXT, adopted by Waves in early 2016, and now core to Ergo. Context: kushti was core dev of NXT and creator of Scorex; worked on Chainlink (smartcontract.com) and Cardano with IOHK.

- **Economic Model and Emission**: Debate on ~50 ERG/day emission schedule, whether currency debasement is sustainable, and relationship between emission and adoption. Argument that Ergo's new economic model allows aggressive emission; counterargument that linear emission independent of usage may not be viable long-term. Discussion of storage rent as deflationary mechanism.

- **NIPoPoWs and Protocol Innovation**: Passing mention that Ergo has NIPoPoWs (non-interactive proofs of proof-of-work), positioned as fair trade for Waves' earlier adoption of Scorex concepts.

## Important Decisions or Announcements

- [@bez, msg#17471, 2020-02-25]: Launched community-driven marketing channel @ErgoSocials for news spreading on Twitter and Reddit
- [@bez, msg#18516, 2020-02-29]: Reiterated call to help spread Ergo news via @ErgoSocials
- [Unknown, msg#18133, 2020-02-27]: Pointed to dedicated Bangladesh/India community group @ergoplatform_bangla_hindi (already 1,100+ users)
- [filippounits, msg#18012, 2020-02-27]: Noted @ergoplatform_bangla_hindi community exceeded 1,100 users

## Technical Q&A Worth Preserving

- **Q** (@NC, msg#17458): Tried to start 3.2.1 node from scratch but got "Failed to load key from wallet. Wallet is locked" and no panel/swagger access.  
  **A** (@Unknown, msg#17459): Panel not running likely means misconfigured. Check config file setup per [wiki](https://github.com/ergoplatform/ergo/wiki/Set-up-a-full-node); provided example config with `ergo.directory`, `node.mining`, wallet.secretStorage paths, and REST API binding.

- **Q** (@NC, msg#17462): Issue appeared only when node started as systemd unit, not in user TTY.  
  **A** (@NC, msg#17464): Issue was access rights (permissions problem with systemd service context).

- **Q** (@Vadim V, msg#18835): NVIDIA GTX 1080 Ti getting 37.8411 MH/s — is this normal?  
  **A** (@Unknown, msg#18837-18838): Open-source miners lag behind; [erg.ezpool.io](http://erg.ezpool.io) miner achieves ~4x better hashrate.

- **Q** (@xqanxxx, msg#18186): Should Ergo participate in Atomic Wallet's community voting program?  
  **A** (@xqanxxx, msg#18195): [Atomic Wallet voting](https://atomicwallet.io/voting) requires form submission with project info; escalated to @kushti_ru for decision.

- **Q** (@Unknown, msg#18919): Did Waves reject Scorex? If so, why?  
  **A** (@Unknown, msg#18921): Waves used first Scorex prototype (NXT consensus era) with kushti as core NXT dev and Scorex creator. Later Waves rebuilt completely for own needs. Subsequent Waves-Scorex divergence due to Waves rejecting light clients (feature conflicts) and Sigma protocols (regulatory concerns).

- **Q** (@Vadim V, msg#18949): Why ~50 ERG/day emission? Won't this debase currency until adoption scales?  
  **A** (@Unknown, msg#18950): Aggressive emission possible via Ergo's new economic model; adoption not a design constraint. Bitcoin future viability without emission also uncertain; Blockstream will ensure economic incentives.

## Links Shared

- [GitHub: Ergo Full Node Setup](https://github.com/ergoplatform/ergo/wiki/Set-up-a-full-node): Official wiki for node configuration and wallet setup
- [Waves Exchange](https://waves.exchange/): Official Ergo listing and trading venue
- [Atomic Wallet Community Voting](https://atomicwallet.io/voting): Community program for wallet integrations
- [Twitter: Ergo Platform (@ergoplatformorg)](https://twitter.com/ergoplatformorg): Official announcements (referenced status #1232693257945178114 re: Coinbarn wallet, #1233638422369034241, #1233866401192062978)
- [Ergo Blog: Medium of Exchange](https://ergoplatform.org/en/blog/2019_05_29-exchange/): Economic model discussion
- [erg.ezpool.io](http://erg.ezpool.io): High-performance GPU miner (claimed 4x improvement over open-source)

## Unresolved Questions

- **Marketing vs. Tech**: Consensus that Ergo's technology is solid but marketing lags behind competitors. Specific budget allocation for campaigns (@Unknown, msg#17545) and whether foundation will fund signature/banner campaigns unresolved.
- **Exchange Listing Strategy**: Interest in Binance and Bittrex listings noted but no confirmation of active pursuit; Atomic Wallet community voting flagged for potential consideration but no decision announced.
- **GPU Mining Centralization**: Concern raised (@Vadim V, msg#18839) that Ergo "lost its original idea to be distributed" due to closed-source miner dominance; no response from team on plans to address.
- **Emission Sustainability**: Fundamental debate on whether linear ~50 ERG/day emission is economically viable long-term when adoption demand is uncertain. kushti's position: new economic model + storage rent handle this; skeptic position: Bitcoin's future also unresolved.
- **Developer Fund Model**: @Unknown (msg#18672) proposed optional miner donation mechanism to fund dev work, noting soft-fork feasibility; no official response or roadmap item.
- **Wallet Support Parity**: Uncertainty whether all wallets (Magnum, Yoroi, etc.) properly support Ergo; some users reporting missing listings.

---

**Chat Quality Note**: This week was predominantly low-signal — mostly greetings, airdrop inquiries, and price/exchange discussion. Technical depth concentrated in node config troubleshooting, GPU mining performance query, and Scorex/economic model deep-dive (msgs #18919–18981). Community sentiment positive but impatient on marketing and exchange access.