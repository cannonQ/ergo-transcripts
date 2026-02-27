# Ergo General Chat Summary — 2020-W39 (Sept 21–27)

## Key Topics Discussed

- **Autolykos V2 Activation**: Testnet deployment confirmed with updated AMD miner support. Collateral for mining reduced from 130 ERG to 65 ERG (@kushti, msg#53450–53451).

- **Node & Wallet Updates**: Node 3.3.4 dashboard and wallet page updates in progress; EIP-3 support for address compatibility with Yoroi and CoinBarn announced (@kushti, msg#53453, msg#53456).

- **Ledger Signing API**: Python implementation completed; Web demo still in development (@kushti, msg#53454).

- **Desktop Wallet Pre-announcement**: ErgoWallet desktop client available for testing on GitHub (gagarin55) (@kushti, msg#53455).

- **Privacy & UTXOs**: Privacy protocols more effective on UTXO model vs. account model due to ability to formalize information leak prevention (@kushti, msg#53345–53346).

- **Storage Rent & Blockchain Bloat**: On-chain garbage collection mechanism reduces bloat and creates profitability incentives (@Unknown, msg#53817).

- **ASIC Resistance**: Community contributions ongoing to prevent ASIC centralization; outcome of hard fork TBD (@Unknown, msg#53817).

- **Oracle Pools Architecture**: Two versions in development—v1 (EF members + external partners) and v2 running for Dexy Gold with GORT rewards (@Unknown, msg#53417; kusht, msg#53250).

- **Proof-of-Work-Backed Tokens (NFTs)**: Concept demonstrated—PoW value can be tokenized on-chain for sybil-resistant identity and reputation systems (@kushti, msg#53856–53858).

- **Bonding Curves & ErgoMixer Tokenomics**: Discussion of curve design on Ergo and ErgoMixer profit mechanisms posted to forum (@kushti, msg#53907, msg#53909).

- **Extended UTXO Advantages**: UTXO model prevents double-spending attacks inherent to account model; soft-fork activation requires ~90% network consensus (@Unknown, msg#54274).

- **Privacy vs. Monero**: Ergo claims superior privacy to early Monero under high mixer usage; ring inference attacks less viable; amounts remain visible (@kushti, msg#53758–53759).

- **Emission Schedule**: Currently 75 ERG per block (~2-minute blocks). Drops 3 ERG every 3 months starting July 2021; reaches zero in 2027. Total supply capped at 100M ERG (@Damon AndTheSea, msg#53320).

- **KuCoin Security Incident**: $150M breach on Sept 26 (msg#54004). Ergo not listed on KuCoin at time of incident (@Unknown, msg#54028, msg#54030).

- **DarkFund0**: ZK fund for privacy applications announced on forum (@kushti, msg#53993).

---

## Important Decisions or Announcements

- [@kushti, msg#53450, 2020-09-23]: **Autolykos V2 now activated on testnet**. Pool collateral minimized to 65 ERG.

- [@kushti, msg#53453, 2020-09-23]: **Node 3.3.4 will have EIP-3 support** for address compatibility with Yoroi and CoinBarn.

- [@kushti, msg#53455, 2020-09-23]: **New desktop wallet pre-announced** (ErgoWallet by gagarin55).

- [@kushti, msg#53782, 2020-09-24]: **Arab/Persian community**: improvements already being discussed.

- [@kushti, msg#53832, 2020-09-24]: **Russian legalization (not crackdown)**: crypto must be reported since Jan 1; likely taxed on sale. KYC exchanges become riskier.

- [@kushti, msg#54219, 2020-09-27]: **NIPoPoWs bootstrapping planned** (coming months). Will enable fast wallet sync in minutes with easy binary installation.

- [@kushti, msg#54249–54251, 2020-09-27]: **Community event announcement imminent**. "Time for DeFi protocols lego and tokenomics is coming."

---

## Technical Q&A Worth Preserving

- **Q** (@Mike [CANUK], msg#53528): Java node on Windows crashing with memory exception after 1.5 days at 2/3 sync.  
  **A** (@Unknown, msg#53536): Use `java -jar -Xmx4G -Dlogback.stdout.level=INFO ergo-xxx.jar --mainnet -c settings.conf`. Adjust heap and log level as needed.

- **Q** (@Cheng.alph, msg#53371): Why is privacy less possible on account model?  
  **A** (@kushti, msg#53345–53346): Because inference scenarios around account state leaks cannot be formally prevented; UTXOs avoid this by design.

- **Q** (@OxCapitulation, msg#53811–53813): How does Ergo tackle chain bloat and ASIC centralization vs. Bitcoin?  
  **A** (@Unknown, msg#53817): Storage rent enables profitable on-chain garbage collection; community-driven ASIC resistance efforts ongoing.

- **Q** (@ニック ᴏʟᴇᴜᴍ, msg#54266–54271): How does Ergo prevent 51% attacks?  
  **A** (@Unknown, msg#54274): Soft-fork approach requires ~90% consensus for new features; old nodes skip validation and continue operating. Miners can adjust parameters independently.

- **Q** (@Sid, msg#54272): Can incrementing nonce prevent double-spending?  
  **A** (implied): Yes—Ethereum uses public nonce per account; Ergo's UTXO model avoids this problem structurally.

- **Q** (@Unknown, msg#53545–53546): What wallets safely store ERG?  
  **A** (@instructorReno & @Kookster, msg#54165, msg#54095): Magnum, CoinBarn (desktop), Panel (in node). Ledger support in development. Yoroi (~60 days away, msg#54097). WavesDEX gateway for ledger now (@Kookster, msg#54095).

---

## Links Shared

- [https://nipopows.com/](https://nipopows.com/): NIPoPoWs (non-interactive proofs of work) technical resource (@Unknown, msg#53860).

- [https://www.ergoforum.org/t/proof-of-work-backed-tokens/224/](https://www.ergoforum.org/t/proof-of-work-backed-tokens/224/): PoW-backed token/NFT concept discussion (@kushti, msg#53857).

- [https://www.ergoforum.org/t/simple-bonding-curves/397](https://www.ergoforum.org/t/simple-bonding-curves/397): Bonding curve design on Ergo (@kushti, msg#53907).

- [https://www.ergoforum.org/t/ergomixer-tokens-business/396/2](https://www.ergoforum.org/t/ergomixer-tokens-business/396/2): ErgoMixer tokenomics & profit mechanics (@kushti, msg#53909).

- [https://eprint.iacr.org/2019/186.pdf](https://eprint.iacr.org/2019/186.pdf): Privacy inference attack paper referenced in Monero comparison (@kushti, msg#53758).

- [https://ergoplatform.org/en/blog/2020-09-25-nfts-on-ergo/](https://ergoplatform.org/en/blog/2020-09-25-nfts-on-ergo/): NFT launch announcement with example transaction (@Unknown, msg#53872).

- [https://www.ergoforum.org/t/darkfund0-zk-fund-for-privacy-applications/398](https://www.ergoforum.org/t/darkfund0-zk-fund-for-privacy-applications/398): DarkFund0 zero-knowledge privacy fund (@kushti, msg#53993).

- [https://explorer.ergoplatform.com/en/](https://explorer.ergoplatform.com/en/): Ergo Explorer for blockchain stats (@Unknown, msg#53995).

- [https://twitter.com/paoloardoino/status/1309771801581494272](https://twitter.com/paoloardoino/status/1309771801581494272): Paolo Ardoino (Tether) tweet referenced in CBDC discussion (@kushti, msg#54110).

- [https://decrypt.co/43015/cryptocurrency-exchange-kucoin-likely-hacked-reports](https://decrypt.co/43015/cryptocurrency-exchange-kucoin-likely-hacked-reports): KuCoin hack coverage (@Unknown, msg#54025).

- [https://github.com/ErgoWallet/ergowallet-desktop](https://github.com/ErgoWallet/ergowallet-desktop): ErgoWallet desktop wallet repository (gagarin55) (@kushti, msg#53455).

---

## Unresolved Questions

- **Ledger Hardware Wallet Support**: Target timeline unclear; "in the works" but Yoroi integration mentioned as nearer-term (msg#54095, msg#54097).

- **Top-Tier Exchange Listing**: Why only sketchy exchanges (Hotbit, Tidex, CoinEx)? Listing fees cited as barrier, but no confirmed Binance/KuCoin/Kraken timeline. KuCoin hack (Sept 25) eliminated that option short-term (@Unknown, msg#54324).

- **Community Event Timing**: Announcement expected "in coming months" but specifics TBD—whether related to exchanges, ZK fund, or other (@kushti, msg#54249).

- **Staking Mechanism**: "Some plans" mentioned but no details or ETA given (@kushti, msg#54250).

- **Desktop Wallet Timeline**: ErgoWallet pre-announced on GitHub but no release date stated (@kushti, msg#53455).

- **Soft-Fork vs. Hard-Fork Decision**: Autolykos V2 deployment strategy (rolling out on mainnet vs. coordinated hard fork) not explicitly resolved in chat.

- **Emission Policy Immutability**: Confirmed that emission schedule cannot be changed ("code is law") but long-term sustainability of 2027 zero emission discussed only theoretically (@kushti, msg#53591–53593).