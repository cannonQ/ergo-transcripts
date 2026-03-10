---
title: "Ergo General Chat — 2022-W32"
date_start: "2022-08-08"
date_end: "2022-08-14"
type: telegram_weekly
channel: general
week: "2022-W32"
source: telegram
message_count: 1589
categories: [governance, ecosystem, technical, bridges, wallet, defi, marketing, mining, community]
key_terms: [tornado cash, sanctions, arrest, privacy, ergomixer, regulation, ergodex, spectrum, rebrand, crosschain, L2, node, 4.0.37, 4.0.38, sync, voting, bootstrap, night owl, casino, rng]
---
# Ergo General Chat — 2022-W32 Summary
## Period: 2022-08-08 to 2022-08-14

---

## Key Topics Discussed

- **Tornado Cash sanctions and privacy implications**: Following the arrest of a Tornado Cash developer in the Netherlands, extensive discussion about risks to privacy protocols like ErgoMixer. Concerns raised about whether devs could face legal jeopardy, whether fees constitute "profiting from laundering," and how Ergo's non-custodial UTXO-based mixer differs from Tornado Cash's fixed-address Ethereum contract. [@kushti, msg#295891] noted that Ergo's mixing protocol uses UTXOs with varying contract patterns, making it harder to sanction specific addresses.

- **ErgoDEX rebranding to Spectrum**: ErgoDEX officially rebranded to Spectrum and launched new website at spectrum.fi. The rebrand reflects cross-chain ambitions as the team prepares for Cardano bridge integration and future L2 development. Twitter handle is @Spectrumlabs_ (with underscore due to name availability).

- **Storage rent mechanism clarification**: Multiple new users asked about storage rent. Confirmed that rent only applies after 4 years of UTXO inactivity, is negligible (~0.14 ERG per box), and can be reset by consolidating UTXOs or moving funds. Wallets are expected to implement warnings before rent becomes an issue.

- **Night Owl Casino development update**: AMA with Night Owl team (@TheRealErgoGod, @Supremedacos) revealed they're switching RNG source from ETH block hashes to drand.love (30-second intervals). Platform will use SigUSD-pegged OWL token for stable gambling. No NFT collection planned initially. Regulatory concerns addressed by staying platform-focused and working with legal counsel.

- **Price pump analysis**: ERG experienced significant price increase (~29-30% in 24 hours). Community attributed this to: Max Maher YouTube video (1M+ subscribers) titled "I Found The Secret To The Next 100X Crypto" mentioning Ergo at 9:17, Flux parallel asset announcement, ETH merge date finalization driving miner interest, and reduced sell pressure from EIP-27 block reward reduction.

- **SigmaUSD/SigRSV mechanics**: Clarified that SigRSV is NOT a leveraged long on ERG price alone, but a leveraged position on both ERG price AND protocol adoption. Fee accumulation is minimal; main value comes from treasury share. [@kushti, msg#295846] noted the zero-sum nature: "if someone is exiting before you with profit, you are exiting from RSV at loss."

---

## Important Decisions or Announcements

- [@CW, msg#295702, 2022-08-12]: Hash It Out podcast AMA held with Night Owl team, Frosty from anetaBTC, and Glasgow discussing gaming, bridges, and ecosystem development.

- [@Gazza ｜WON'T DM, msg#296146, 2022-08-12]: ErgoDEX officially rebranded to Spectrum Labs. New website launched at https://spectrum.fi/

- [@kushti, msg#296308, 2022-08-12]: kushti urged community support for anon-real's raffle funding Auction House v2 and Ergo Team development: https://ergoraffle.com/raffle/show/648ac70eb11400e684ad3367825941e01a1ec536e4fd1f8478cf9ae94bab9b19

- [@Aberg Satergo dev, msg#296727, 2022-08-13]: Satergo v1.4.1 released with fixes for node updating on Windows, transaction sending restrictions until sync, and addition of Portuguese translation.

- [@kushti, msg#295754, 2022-08-09]: Node version 4.0.37 released with significant performance improvements (~43% faster sync on Raspberry Pi, DB size ~10GB lighter).

- [@kushti, msg#295859, 2022-08-12]: Proposed organizing discussions with privacy-focused projects (Firo, Pirate Chain) regarding regulatory landscape post-Tornado Cash sanctions.

---

## Technical Q&A Worth Preserving

- **Q** (@Marcos Antonio): Does storage rent mean I need to leave ERG to maintain my wallet?
  **A** (@cafebedouin, msg#295007): Storage rent only kicks in after 4 years of inactivity. Simply send all assets to one address once before four years to consolidate into one UTXO box and reset the storage rent timer.

- **Q** (@Sylv): How compatible is Ergo for ETH miners transitioning equipment?
  **A** (@Glasgow, msg#296654, msg#296656): Autolykos is based on the equihash paper. ETH hashrate that isn't ASICs will run well on Ergo. It's changing a line in a config file, assuming GPUs and Autolykos compatible mining software.

- **Q** (@DrTwentyOne, msg#296668): Trying to build Ergo wallet on cold machine but ./gradlew tries to download from internet.
  **A** (@MrStahlfelge, msg#296680): Build on internet-connected machine and transfer the build output (desktop/build/libs) to cold machine. Then run with `java -jar <file.jar>`

- **Q** (@blake starky, msg#296498): DApp requires substantial API calls every few minutes. Should we host our own node?
  **A** (@Aberg Satergo dev, msg#296500): You need to host explorer AND full node for yourself. Use ergo-bootstrap: https://github.com/ergoplatform/ergo-bootstrap

- **Q** (@unknown): How many addresses can I obtain from one private key in Ergo?
  **A** (@MrStahlfelge, msg#296451): Not really an upper limit. Ergo uses elliptic curve cryptography to derive addresses similar to Bitcoin's HD wallet system.

- **Q** (@Marco, msg#296902): Is it useful to run 2 nodes on same computer (normal node + Satergo)?
  **A** (@cardelayno, msg#296908): You'd need to configure different ports since Satergo uses default already.

- **Q** (@qx(), msg#297028): Token prices sometimes don't update in Ergo Mobile Wallet.
  **A** (@MrStahlfelge, msg#297039, msg#297049): Pulls from ErgoDEX/Spectrum for last 24h and sometimes not all prices returned, probably when there were no trades. [@qx(), msg#297046] shared better endpoint: https://api.ergodex.io/v1/amm/markets?from=1653075262280

---

## Links Shared

- [https://ergoraffle.com/raffle/show/648ac70eb11400e684ad3367825941e01a1ec536e4fd1f8478cf9ae94bab9b19]: Raffle by anon-real to fund Auction House v2 and Ergo Team project development (2397 ERG goal)
- [https://spectrum.fi/]: New ErgoDEX rebrand website and DEX interface
- [https://curiaregiscrypto.medium.com/personal-thoughts-pow-post-eth-c6088e192891]: Armeanio's article on PoW landscape post-ETH merge
- [https://youtu.be/8GxrKBWWtk4]: Max Maher video "I Found The Secret To The Next 100X Crypto" mentioning Ergo at 9:17 timestamp
- [https://www.fiod.nl/arrest-of-suspected-developer-of-tornado-cash/]: Official FIOD statement on Tornado Cash developer arrest
- [https://satergo.com]: Satergo wallet v1.4.1 release
- [https://drand.love]: Random number generation service Night Owl plans to use for RNG
- [https://getkaching.xyz]: Ka-ching bot webhook setup for Ergo blockchain events
- [https://github.com/zkastn/ergo-raffle-bot]: Open source code for Ergo raffle notification bot
- [https://github.com/ergoplatform/ergo-bootstrap]: Ergo bootstrap for hosting explorer + node
- [https://ergo.watch/metrics/addresses]: Ergo address metrics (note: ergo.watch was out of sync during this period)
- [https://docs.ergoplatform.com/node/install/]: Node installation documentation
- [https://ergoplatform.org/en/blog/2022-02-18-ergo-explainer-storage-rent/]: Storage rent explainer article

---

## Unresolved Questions

- **Tornado Cash implications**: Ongoing uncertainty about whether similar actions could target ErgoMixer or other privacy tools. [@kushti, msg#295875] noted that protocols incentivizing liquidity provision for mixing (like JoinMarket) could be next targets. No clear regulatory framework established yet.

- **Trezor hardware wallet support**: [@Aberg Satergo dev, msg#295879, msg#296890] confirmed Trezor is not accepting new coin submissions and sideloading is not possible on Trezor hardware, making support unlikely. Ledger integration is progressing for Nautilus and Satergo.

- **Explorer performance concerns**: [@Snowman Jason, msg#296269] raised concerns about explorer needing upgrades if user base grows significantly. Explorer lite being developed but timeline unclear. ergo.watch was out of sync for most of this week.

- **Flux parallel asset benefits**: [@unknown, msg#296626] asked about practical benefits of Flux parallel assets on Ergo. [@MrStahlfelge, msg#296726] explained you can pay for Flux network services with ERG instead of going through CEX, but full integration details unclear.

- **ErgoDEX/Spectrum token economics**: [@Sylv, msg#296578] asked about Spectrum native token plans. Confirmed token coming in future as base token for L2 Spectrum Network, but timeline and tokenomics not specified.

- **Tier 1 exchange listing**: Multiple users asked about timing. Under NDA, no updates provided. [@Glasgow, msg#295313] reiterated "We have no control over listing date."