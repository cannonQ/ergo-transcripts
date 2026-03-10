---
title: "Ergo General Chat — 2020-W30"
date_start: "2020-07-20"
date_end: "2020-07-26"
type: telegram_weekly
channel: general
week: "2020-W30"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat Summary — 2020-W30 (July 20–26)

## Key Topics Discussed

- **Explorer infrastructure crisis**: Explorer nodes experienced bugs causing UTXO data loss; traffic switched to replica. Bug fixed mid-week; later DDoS attack (mostly from Russian IPs) required API blocking and rate-limiting improvements [@kushti khushi, msg#40265, msg#40340, msg#40410].

- **Exchange listings momentum**: Coinex listing confirmed with 35,000 ERG promotional pool. Deposit window opened July 24; trading began July 28. Also discussed tier-1 exchange prospects (Binance, Huobi, OKEx) and challenges around listing fees [@kushti khushi, msg#40564, msg#40730; msg#41417].

- **Oracle Pools specification release**: Emurgo published formal Oracle Pools smart contract specification following EIP-6 standard. Covers epoch mechanics, state machines, and governance-slash-pool design [@unknown, msg#41090–41094, msg#41124].

- **Wallet integrations accelerating**: Yoroi integration with Ergo confirmed; BIP-44 support discussed for backward compatibility. Multiple wallets in development: Cypra.io, independent contributor wallets with inbuilt nodes, one with NIPoPoWs-based bootstrapping [@kushti khushi, msg#40982; msg#41300–41310].

- **2020 roadmap expansion**: Original roadmap items (distributed signatures, mixer, DEX, crowdfunding UI, Ledger support) largely complete or under review. New additions: smart-contract mining pools (ergopool.io), oracle pools, stablecoin, dApp signing protocol [@kushti khushi, msg#41478].

- **Emission schedule & tokenomics**: Total supply ~98M ERG over 8 years; current circulating ~20M. Treasury and emission both smart contracts with multi-sig protection. Discussed immutability of monetary policy; no changes in hard fork [@kushti khushi, msg#40266, msg#40355; msg#40888–40890].

- **Privacy-preserving DeFi thesis**: Community consensus that Ergo's niche is anon DeFi via Sigma protocols. Mixer completed by anons; potential for privacy-preserving voting, auctions, and on-chain credentials [@kushti khushi, msg#40351; msg#40879].

- **Storage rent & extended UTXO model**: Ergo positions itself as "decentralized crypto computer" (vs. Ethereum's "decentralized computer") with Sigma protocols, built-in atomic exchanges, and ability to host protocols like Monero with better privacy guarantees [@unknown, msg#40879].

---

## Important Decisions or Announcements

- [@kushti khushi, msg#40266, 2020-07-20]: Hard fork approaching with minimal monetary policy changes; improved PoW memory-hardness (ASIC/cheap GPU resistance), security fixes, contractual layer soft-fork improvements.

- [@unknown, msg#40289, 2020-07-20]: Stable coin and oracle pools research goals for 2020; token mixing already in development by anons.

- [@kushti khushi, msg#40434–40435, 2020-07-21]: Ergo Foundation willing to continue grant for ErgoCast; seeking new host.

- [@unknown, msg#40469, 2020-07-21]: Three community members nominated to join Ergo Foundation; voting results pending.

- [@unknown, msg#40477, 2020-07-21]: Two competitions announced: sponsored mining software competition and visionary articles competition on crypto utility.

- [@kushti khushi, msg#40564, 2020-07-22]: Coinex won community voting over MXC and BiBox.

- [@unknown, msg#40604, 2020-07-22]: Mainnet with promises already launched (unlike many projects); now focused on dApp development.

- [@kushti khushi, msg#41046, 2020-07-23]: Core developer relocating for concentrated offline development; community encouraged toward promotion efforts.

- [@kushti khushi, msg#41478, 2020-07-26]: 2020 roadmap enhanced by incoming developers and Emurgo partnership; additions include mining pools, oracle pools, stablecoin, dApp signing protocol; 2021 roadmap to address scalability, privacy applications, LETS.

---

## Technical Q&A Worth Preserving

- **Q** (@Buccoooo, msg#40270): Can someone answer [specific question about Oracle Pools requiring new token]?
  **A** (@unknown, msg#40281): Oracle Pools don't require new token; research part of broader stable coin project for Ergo and Cardano.

- **Q** (@Jason Lasky | hubway fractal, msg#40291): Why isn't ERG on Binance/Bittrex? Custom chain/native token?
  **A** (@Oz, msg#40293–40295): They don't yet know about Ergo; most trading currently on Tidex, HotBit. No KYC required on HotBit.

- **Q** (@Unknown, msg#40326): How does additional ERC20 token complicate Oracle Pools?
  **A** (@unknown, msg#40327): ERGs used for collateral/slash stake. LINK-like token adds cost/complexity with zero value.

- **Q** (@Unknown, msg#40334): What drives "number go up"? App lockup? Stablecoin effect on token economics?
  **A** (@unknown, msg#40336–40339): Oracle pools core infrastructure (not direct effect). Stablecoin will lock ERG; collateral providers earn potential returns exceeding hold-only strategy.

- **Q** (@cypheryield, msg#40343): How does collateral lockup yield work in PoW (vs. PoS like Waves Neutrino)?
  **A** (@unknown, msg#40363–40365): Collateral providers bet on asset appreciation; gains absorbed by collateral, losses buffered; stablecoin holders assume fixed collateral ratio.

- **Q** (@Unknown, msg#40387): Are atomic swaps possible on Ergo?
  **A** (@unknown, msg#40391): Atomic exchange built in core for tokens; full DEX very possible; can be privacy-preserving.

- **Q** (@Jason Lasky | hubway fractal, msg#40399): If ERG not stable, can't be collateral—how exchange between stable collateral and account credits?
  **A** (@kushti khushi, msg#40464): Collateral only avoids freeriding in permissionless LETS; stability not essential.

- **Q** (@Unknown, msg#40412): Why DDoS in first place?
  **A** (@kushti khushi, msg#40414): Amateurish—sending API requests through proxies; preparing for harder attacks.

- **Q** (@Milo Knowz, msg#40419): Does Citex require KYC?
  **A** (@kushti khushi, msg#40420–40421): Don't use Citex now; use HotBit (no KYC) or ProBit.

- **Q** (@Unknown, msg#40991): What is ERGO smart contract address?
  **A** (@kushti khushi, msg#40992–40995): Proof-of-Work cryptocurrency designed from scratch (not ERC20 token).

- **Q** (@Unknown, msg#41002): Are there rewards for debugging Ergo?
  **A** (@kushti khushi, msg#41003): Yes; what can you do? [Technical stack inquiry].

- **Q** (@Velvia, msg#41276): Getting error when creating wallet in Windows (per video guide).
  **A** (@kushti khushi, msg#41281–41282): Use Oracle JDK >= 9 or OpenJDK to avoid strong crypto license issues.

- **Q** (@Velvia, msg#41299): Can restore Ergo wallet mnemonic seed in Yoroi?
  **A** (@unknown, msg#41300): Initial release uses BIP44 external chain only for backward compatibility; no import/export standard yet, but Yoroi can add if standard developed.

- **Q** (@Unknown, msg#41363): Does Ergo work like an oracle?
  [No direct answer recorded; context suggests confusion about Oracle Pools vs. platform function.]

- **Q** (@Unknown, msg#41422–41423): Following DeFi hype (Yearn/Curve)? Liquidity mining in pipeline?
  **A** (@unknown, msg#41446): Ergo will lag in marketing chasing; big builders arriving; need ecosystem first (browser plugin, stables). [@unknown, msg#41447–41451]: LM nice idea but need ecosystem; mixer UI + cross-chain swaps (ETH, BTC) via Ergo would be awesome; anons work on token mixing; no active work on swaps/gateways yet.

- **Q** (@Ollie [THREE Pool], msg#41425): Is Ergo dumping as much as CMC shows?
  **A** (@Oz, msg#41428): Just Citex fake volume; HotBit shows true price. [@Kookster, msg#41437]: Big dump on HotBit; price recovered temporarily but order book extremely thin.

---

## Links Shared

- [https://tidex.com/exchange/erg/btc](https://tidex.com/exchange/erg/btc): Tidex trading pair (noted as ref link).
- [https://ergoplatform.org/en/use_cases/](https://ergoplatform.org/en/use_cases/): Official use cases page.
- [https://www.ergoforum.org/c/ecosystem-development/9](https://www.ergoforum.org/c/ecosystem-development/9): Ecosystem development forum category.
- [https://www.ergoforum.org/c/research-and-development/7](https://www.ergoforum.org/c/research-and-development/7): Research & development forum.
- [https://www.ergoforum.org/t/oracle-pools-a-new-oracle-model/263](https://www.ergoforum.org/t/oracle-pools-a-new-oracle-model/263): Oracle Pools forum thread (core research).
- [https://twitter.com/nlw/status/1285228293453733890](https://twitter.com/nlw/status/1285228293453733890): Tweet on local currency systems.
- [https://www.localitytokens.info](https://www.localitytokens.info): Locality Tokens project (cross-chain DeFi with localization).
- [https://ergoplatform.org/docs/teaser.pdf](https://ergoplatform.org/docs/teaser.pdf): Ergo teaser document.
- [https://twitter.com/ergoplatformorg/status/1279083727893790720](https://twitter.com/ergoplatformorg/status/1279083727893790720): Monthly digest announcement.
- [https://medium.com/gains-associates/ergo-telegram-quiz-ama-june-13-8d77c48eca98](https://medium.com/gains-associates/ergo-telegram-quiz-ama-june-13-8d77c48eca98): June 13 Telegram AMA writeup.
- [https://ergoplatform.org/en/blog/2020_03_20_ergo_mixer/](https://ergoplatform.org/en/blog/2020_03_20_ergo_mixer/): ErgoMix mixer blog post.
- [https://announcement.coinex.com/hc/en-us/articles/360046643071-ERG-Launched-Deposit-Trade-to-Share-35-000-ERG](https://announcement.coinex.com/hc/en-us/articles/360046643071-ERG-Launched-Deposit-Trade-to-Share-35-000-ERG): Coinex listing announcement with deposit/trading details and event rules.
- [https://www.coingecko.com/en/coins/ergo](https://www.coingecko.com/en/coins/ergo): CoinGecko Ergo page (noted as authoritative for supply).
- [https://github.com/ergoplatform/awesome-ergo](https://github.com/ergoplatform/awesome-ergo): Awesome Ergo resources.
- [https://twitter.com/chepurnoy/status/1285579142310887424](https://twitter.com/chepurnoy/status/1285579142310887424): Kushti tweet (context not detailed).
- [https://ergoplatform.org/en/blog/2019_05_29-exchange/](https://ergoplatform.org/en/blog/2019_05_29-exchange/): LETS exchange blog post.
- [https://emurgo.io/en/blog/emurgo-to-partner-with-ergo-and-build-blockchain-based-decentralized-financial-solutions](https://emurgo.io/en/blog/emurgo-to-partner-with-ergo-and-build-blockchain-based-decentralized-financial-solutions): Emurgo-Ergo partnership & Yoroi integration announcement.
- [https://github.com/Emurgo/Emurgo-Research/blob/master/ergo/Governance-Stake-Slashing-Pool-Spec.md](https://github.com/Emurgo/Emurgo-Research/blob/master/ergo/Governance-Stake-Slashing-Pool-Spec.md): Oracle Pools formal specification (EIP-6 format).
- [https://twitter.com/emurgo_io/status/1286347725886427136](https://twitter.com/emurgo_io/status/1286347725886427136): Emurgo announcement of Oracle Pools spec release.
- [https://ergopool.io](https://ergopool.io): Smart-contract mining pool (launching).
- [https://cypra.io/](https://cypra.io/): Cypra wallet development.
- [https://github.com/ergoplatform/ergo/wiki/Set-up-a-full-node](https://github.com/ergoplatform/ergo/wiki/Set-up-a-full-node): Full node setup guide.
- [https://github.com/rsmmnt/AutolykosGPUWin64binary](https://github.com/rsmmnt/AutolykosGPUWin64binary): Autolykos GPU miner binary (Windows).
- [https://www.reddit.com/r/CryptoMoonShots/comments/hvzxar/big_defi_project_under_radar/](https://www.reddit.com/r/CryptoMoonShots/comments/hvzxar/big_defi_project_under_radar/): Reddit CryptoMoonShots post on Ergo.
- [https://boards.4channel.org/biz/thread/20624527/the-next-10x-defi-project](https://boards.4channel.org/biz/thread/20624527/the-next-10x-defi-project): 4chan /biz/ thread on Ergo as 10x DeFi project.
- [https://www.ergoforum.org/t/ergocast-looking-for-new-host/279](https://www.ergoforum.org/t/ergocast-looking-for-new-host/279): ErgoCast host recruitment thread.
- [https://www.ergoforum.org/t/ergo-platform-ecosystem-digest-june-2020/268](https://www.ergoforum.org/t/ergo-platform-ecosystem-digest-june-2020/268): June 2020 ecosystem digest (monthly format example).
- [https://twitter.com/coinexcom/status/1286483691582173184](https://twitter.com/coinexcom/status/1286483691582173184): Coinex confirmation tweet.
- [https://www.youtube.com/watch?v=fpEDJ1CM6ns](https://www.youtube.com/watch?v=fpEDJ1CM6ns): YouTube video (full node or wallet tutorial).
- [https://twitter.com/ergoplatformorg/status/1286739050259525632](https://twitter.com/ergoplatformorg/status/1286739050259525632): Ergo official announcement.
-