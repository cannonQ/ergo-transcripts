# Ergo General Chat — 2023-W11 Summary

## Key Topics Discussed

- **Rosen Bridge Testing & Architecture**: Public testnet launching the following week (after 2023-03-15), with test token distribution to Sigmanauts first, then public via ErgoFaucet after one week. Uses a two-layer architecture: Watchers monitor and report events; Guards verify and sign multi-sig transactions. Current configuration uses ~10 guards with m-of-n threshold scheme. Bridge not designed for speed (80+ minutes per Cardano <> Ergo transfer) but for security; further optimizations possible with faster block times and more watchers/guards.

- **eUTXO Model Explanation**: Ergo uses eUTXO (extended UTXO), not simple UTXO. UTXOs function as programmable "banknotes" with arbitrary values and embedded contracts. Users cannot add to existing boxes; transactions must consume old boxes and create new ones. DCA-ing creates many small boxes requiring occasional consolidation to avoid storage rent issues after 4 years of inactivity (32 years for full claim). Storage rent applies to ERG, not tokens—allowing tokens to be preserved indefinitely if box is spent before rent claims ERG.

- **SigmaFi Growth**: TVL crossed $13.3K by 2023-03-17, growing >$1K/day. Uses babel fees infrastructure for simplified liquidity provision.

- **ErgoMixer Privacy Features**: Supports discrete box sizes (10/50/100/250 ERG), multiple mixing rounds (30/60/90/180), covert addresses for automated mixing above threshold, and hops through normal addresses before mixing. Sigma protocols enable composable zero-knowledge proofs without trusted setup—alternative to SNARKs. Stealth addresses coming soon for private dApp interactions.

- **Oracle Pools**: v1 live with EF members + external operators. v2 in development for Dexy Gold with GORT rewards. Design: https://github.com/Emurgo/Emurgo-Research/blob/master/oracles/Oracle-Pools.md. Four watchers needed for consensus before notifying guards.

- **Ergo Summit: Cypherpunk Finance** (2023-03-18 to 2023-03-19): 14-video showcase of ErgoHack projects. Featured projects: Lilium (NFT minting/distribution), Ergo Tizen (web-compatible light node for wearables), PermaErgo (Permaculture RealFi), Analog Ergo (cross-chain atomic swap marketplace), Sigma Subscriptions (subscription framework), SigmaO (options trading EIP-4 tokens), Lithos (collateralized mining pool contracts), Ergo Explorer UI improvements, SingleTxSwap (Discord-native token swapping).

- **Storage Rent Protocol Edge Case**: Tokens in boxes with minimal ERG face burn risk if rent depletes ERG before 32 years. Community discussion ongoing on protocol-level solutions vs. smart contract/wallet-level workarounds (vaults, increased base ERG per box). Consensus that user-facing solutions must be automatic/transparent.

- **Ledger Integration**: Ergo app now available on Ledger after latest firmware update; integrates with Nautilus wallet. Memory limitation on Ledger causes 20-token-ID transaction limit (not 20 tokens total, but 20 different token IDs per TX).

- **Babel Fees**: Infrastructure exists for liquidity provision without direct ERG payment. Discussion of applying to tip bot; not yet prioritized.

- **Spectrum DEX Issues**: ErgoPay integration causing loading indefinitely for mobile Terminus users; appears to be recent UI change. Workaround: use desktop or reload.

- **New York BitLicense Pressure**: Kucoin, CoinEx facing regulatory scrutiny; may IP-ban NY users. Community discussing VPN strategies; DEXes (Bisq, Spectrum) remain accessible without KYC.

## Important Decisions or Announcements

- [@MHS_SAM, msg#373036, 2023-03-16]: Rosen Bridge public beta test launch next week with test token distribution to Sigmanauts, then public via ErgoFaucet one week later.

- [@MHS_SAM, msg#373039, 2023-03-16]: Testing now in "malicious actions" phase (forks, DoS, data source malfunctions); some unfixed bugs in pre-deployed version will be addressed post-launch.

- [@kushti, msg#372381, 2023-03-14]: Next emission reduction in ~27 days; memtable size increase for Autolykos PoW in ~17 days (~5% increase, still within 4GB).

- [@Gazza, msg#372599, 2023-03-14]: Paideia MVP (April 2023) includes: DAO creation, staking, profit sharing, governance, treasury management, configurable parameters, whitelist control, contract upgrades.

- [@CW, msg#372354, 2023-03-14]: Ergo Summit: Cypherpunk Finance announced for 2023-03-18 to 2023-03-19, showcasing 14 ErgoHack projects.

- [@Glasgow, msg#373849, 2023-03-15]: Liquid Mining "cloud mining" claim flagged as spam/scam; unaffiliated with EF.

- [@kushti, msg#373090, 2023-03-16]: SigmaFi TVL crossed $10K milestone.

- [@MHS_SAM, msg#373052, 2023-03-16]: Rosen guard set will start small (~10 guards at Cardano Era); guards must lock Rosen tokens to join; more guards added as Rosen expands to new blockchains.

## Technical Q&A Worth Preserving

- **Q** (@Hassen, msg#373353): Is IP address linked to Ergo transactions like on Ethereum?  
  **A** (@qx, msg#373357): No; Ergo is a public ledger but provides stronger privacy via mixer and Sigma protocols. Ring signatures via Sigma allow proving transaction knowledge without revealing which output is yours from a set.

- **Q** (@Hassen, msg#373364): How are ring signatures implemented in Ergo vs. Monero?  
  **A** (@Misfit, msg#373393): Ergo combines public keys with one being yours and signs with your private key; observers cannot identify which public key is yours among many. No need for other users to also use rings—all UTXOs provide possible decoys.

- **Q** (@A P, msg#373092): Should I consolidate DCA'd boxes? Advantages/disadvantages?  
  **A** (@qx, msg#373095-373098): Yes. Advantage: dApps may refuse fragmented boxes; storage rent charged per box after 4 years. Disadvantage: minimal if consolidating regularly.

- **Q** (@qx, msg#373085): [Super Dumb Explanation of eUTXO consolidation]  
  **A** Boxes are like pockets holding money; cannot add to existing pocket, must spend and create new one. Mining creates many $1 boxes requiring consolidation into single box.

- **Q** (@A P, msg#373100): Is storage rent per box or per wallet? Better via DEX or CEX?  
  **A** (@qx, msg#373102-373106): Per box. Consolidate by sending all assets to yourself from same wallet (no CEX needed); Terminus/Minotaur make this easy.

- **Q** (@Hassen, msg#373226): Is Ergo available on Ledger?  
  **A** (@Glasgow, msg#373237): Yes; ensure latest firmware, search in manager.

- **Q** (@HelixEvo, msg#374087): How does Ledger Ergo app work? Create wallet + passphrase + encrypt?  
  **A** [Unresolved; technical details deferred to documentation]

- **Q** (@qx, msg#373764-373771): Clarification on 20-token TX limit.  
  **A** (@Armeanio): Limit is 20 different token IDs per TX (not 20 total tokens). Example: 1M Comet + 15 NFTs + 1k ErgoPad + 1k SPF = 19 IDs ✓; thousands of one token = 1 ID.

- **Q** (@S. Dbros, msg#374212): Will Guards be publicly known? How many Guards needed for TX? Will guards provide liquidity? Staking pools?  
  **A** (@qx, msg#373213): No user-provided liquidity needed. 1:1 locking system: original tokens locked on source chain, wrapped tokens created on target. Only exact amount can be minted; unlocking requires reciprocal deposit on source chain.

- **Q** (@Flying Pig, msg#373127-373155): Storage rent risk for NFTs in low-ERG boxes—how to solve?  
  **A** [Debate unresolved; proposals include: rent only claims ERG (not tokens), protocol-level protection for boxes with tokens, smart contract vaults with auto-renewal]

- **Q** (@Hassen, msg#373419): What is Ergo? Single sentence?  
  **A** (@Misfit, msg#373435): "Ergo features a proof-of-work blockchain, smart contracts, Sigma protocols, advanced cryptography, eUTXO model, built-in oracles, zero-knowledge proofs, flexible monetary policy, storage rent, NIPoPoWs, and ErgoScript."

## Links Shared

- [https://ergcube.com/](https://ergcube.com/): Ergo ecosystem dashboard with ranked wallets, news, projects, ranked by community votes.

- [https://github.com/Emurgo/Emurgo-Research/blob/master/oracles/Oracle-Pools.md](https://github.com/Emurgo/Emurgo-Research/blob/master/oracles/Oracle-Pools.md): Oracle Pools design specification.

- [https://sigmafi.app/](https://sigmafi.app/): SigmaFi lending protocol with TVL tracking.

- [https://app.spectrum.fi](https://app.spectrum.fi): Spectrum DEX (had recent ErgoPay integration issues on mobile).

- [https://docs.ergoplatform.com/dev/scs/sigma/](https://docs.ergoplatform.com/dev/scs/sigma/): Sigma protocols documentation (composable zero-knowledge proofs).

- [https://docs.ergoplatform.com/dev/crypto/zerojoin/](https://docs.ergoplatform.com/dev/crypto/zerojoin/): Zero-join/mixer cryptographic primitives.

- [https://www.youtube.com/playlist?list=PL8-KVrs6vXLSplfL5Xd5VSZK_TPSyHgy-](https://www.youtube.com/playlist?list=PL8-KVrs6vXLSplfL5Xd5VSZK_TPSyHgy-): Ergo Summit: Cypherpunk Finance video playlist.

- [https://youtube.com/live/0ldT0QXX5PY](https://youtube.com/live/0ldT0QXX5PY): Ergo Weekly Update & AMA (2023-03-16, 1 PM UTC).

- [https://medium.com/@rosenbridgeerg/introducing-the-rosen-bridge-a-distributed-network-for-cross-chain-settlement-92b577bd8a27](https://medium.com/@rosenbridgeerg/introducing-the-rosen-bridge-a-distributed-network-for-cross-chain-settlement-92b577bd8a27): Rosen Bridge architecture overview.

- [https://github.com/rustinmyeye/ErgoMixerAndroid](https://github.com/rustinmyeye/ErgoMixerAndroid): ErgoMixer Android app (v0.1.0+ in testing).

- [https://github.com/rustinmyeye/ErgoNodeAndroid/releases/tag/v0.1.2](https://github.com/rustinmyeye/ErgoNodeAndroid/releases/tag/v0.1.2): Ergo Node Android app.

- [https://ergoplatform.org/en/blog/2020_03_20_ergo_mixer/](https://ergoplatform.org/en/blog/2020_03_20_ergo_mixer/): ErgoMixer technical blog post.

- [https://docs.ergoplatform.com/dev/protocol/why/](https://docs.ergoplatform.com/dev/protocol/why/): "Why Ergo?" protocol design rationale.

- [https://github.com/rosen-bridge#concept-and-assumptions](https://github.com/rosen-bridge#concept-and-assumptions): Rosen Bridge two-layer architecture (Watchers + Guards).

- [https://github.com/danieloravec/ergo-token-swap](https://github.com/danieloravec/ergo-token-swap): Single TX Swap implementation reference.

- [https://matrix.to/#/#ergo-platform:matrix.org](https://matrix.to/#/#ergo-platform:matrix.org): Ergo Matrix chat (bridged to Telegram/Discord).

- [https://github.com/42wim/matterbridge](https://github.com/42wim/matterbridge): Telegram<>Discord<>Matrix bridge used in Ergo ecosystem.

## Unresolved Questions

- **Storage rent protocol handling of NFTs in low-ERG boxes**: Should protocol prevent token burn, or rely on wallets/smart contracts to maintain minimum ERG? No consensus reached; ongoing design discussion.

- **Ledger 20-token TX limit workaround**: Is this a limitation of Ledger S/Plus only, or also affects Stax? Deferred for confirmation.

- **Rosen Bridge speed/latency**: Current design targets 80+ minutes for security; feasibility of faster confirmation with increased watchers/guards and faster block times not fully explored.

- **Babel fees for tip bot**: Luivatra has not prioritized; unclear if technically or politically unfavorable.

- **Stealth addresses ETA**: "Coming soon" mentioned but no release timeline given.

- **Trust Wallet integration**: Ergo not yet in top 100 by market cap on CoinGecko, hence ineligible for Trust Wallet integration. No roadmap to achieve threshold.

- **KYC requirement on Kucoin/CoinEx for USA users**: Conflicting reports; some claim no KYC needed for pair trading; regulatory status in flux post-NYDFS BitLicense pressure.

---

**Statistics:**
- **Active participants**: 55+ unique speakers
- **Date range**: 2023-03-13 to 2023-03-19
- **Total messages processed**: 1110
- **Primary topics**: Rosen Bridge, eUTXO model, mixer privacy, oracle pools, ErgoHack summit, storage rent edge cases, Ledger integration, regulatory pressure