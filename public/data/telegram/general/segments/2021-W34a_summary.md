---
title: "Ergo General Chat — 2021-W34 (Part A)"
date_start: "2021-08-23"
date_end: "2021-08-29"
type: telegram_weekly
channel: general
week: "2021-W34"
part: "a"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2021-W34a Summary
**Period:** 2021-08-23 to 2021-08-25

---

## Key Topics Discussed

- **Exchange options and onboarding**: Extensive community-driven Q&A about where to buy ERG (KuCoin, CoinEx, Gate.io, Bitcoin.com, CoinEx recommended for no-KYC), withdrawal fees (KuCoin 0.01 ERG, CoinEx 0.1 ERG, Gate.io 0.5 ERG, Hotbit 1 ERG), and network selection when depositing (BTC network vs. ERC20/TRC20 for USDT transfers).

- **Wallet ecosystem status**: Android Ergo Wallet (by @MrStahlfelge) confirmed as the primary Android solution; Yoroi browser extension supports Ergo but mobile Yoroi does not yet; iOS wallet not yet available. Paper wallet alpha testing announced by @anon_br. Ledger integration in progress via Tesseract team (Attest Input method implemented and working).

- **ErgoDEX status and design**: Community discussion of ErgoDEX's order book model (partial fills, full slippage control, total depth transparency) as a differentiator from AMM-based DEXes like SundaeSwap. No dedicated governance token planned — ERG is the native token. Cross-chain functionality with Cardano highlighted. Beta UI noted as a work in progress.

- **SigmaUSD bearwhale mechanics**: Detailed explanation of the recurring bearwhale strategy: (1) mint SigmaUSD, (2) dump ERG to suppress price, (3) redeem SigmaUSD for more ERG if successful. Community noted the bearwhale had not succeeded since ERG was ~$2. The reserve ratio dropped below 800% during this period.

- **Ledger/cold storage progress**: @anon_br shared a Tesseract team update that the Attest Input method on Ledger hardware is implemented and working, extracting ERG and token amounts and signing transactions. @MrStahlfelge noted a separate cold storage solution for Android in collaboration with @morphic, with an EIP open for review.

- **Ergo tokenomics and emission schedule**: Community discussion around the 6-year emission schedule, storage rent mechanics (lost ERG re-enters circulation via storage rent after 4 years of box inactivity), and the deflationary character of ERG post-emission. Noted as a potentially significant differentiator from Bitcoin's emission model.

- **Schnorr atomic swaps with Bitcoin**: @glasgowm noted that trustless Schnorr-based cross-chain atomic swaps between Ergo and Bitcoin would become possible after Bitcoin's Taproot fork in November 2021, enabling BTC to be brought into Ergo's Sigma protocol financial contracts without custodial wrapping.

- **Ergo Raffle approaching mainnet**: @OxCapitulation shared developer update stating Raffle tests on local mainnet were nearly complete, with mainnet release targeted for end of that week (late August 2021). Testnet testing had failed due to infrastructure issues with transaction mining.

- **Ergo's unique cryptographic capabilities (Sigma protocols)**: @glasgowm explained that Sigma protocols enable capabilities no other platform currently supports: trustless LETS systems, multisig with no signer disclosure, trustless payment networks, and real ring signatures preserving zero knowledge — beyond just ErgoMixer.

- **Speed improvements / sub-blocks discussion**: @kushti (referenced indirectly via community discussion) noted that with a concrete set of on-chain applications now deployed (GARD protocols, Rosen Bridge, Oracle Pools, Spectrum DEX, AMM pool contracts, Trade House, lending contracts, SigmaUSD), it is now feasible to meaningfully optimize throughput via sub-blocks or other layer-2 approaches, since the transaction profile is known.

- **Gravity/GTON bridge**: Community noted the Gravity bridge (GTON) as a mechanism for bringing wrapped tokens to Ergo, enabling cross-chain smart contract use cases on Ergo before native trustless swaps are live.

---

## Important Decisions or Announcements

- [@anon_br, msg#194965, 2021-08-23]: Tesseract team ledger update — "Implemented Attest Input method on the device. It works. Extracts ERG and token amounts and signs it, returning signed frames."
- [@anon_br, msg#196148, 2021-08-24]: Paper wallet alpha testing announced; help requested in `#paper-wallet-alpha` on Discord.
- [@anon_br, msg#196263, 2021-08-24]: Ergo Paper Wallet repository published at https://github.com/anon-br/ergo-paper-wallet
- [@MrStahlfelge, msg#194670, 2021-08-23]: Beta version of Android Ergo Wallet released with token support (display and send), enabling Auction House and SigmaUSD interaction.
- [@MrStahlfelge, msg#195442, 2021-08-23]: Cold storage EIP for Android wallet opened for community discussion at https://github.com/ergoplatform/eips/pull/36 — comparable to hardware wallet security without requiring a separate device.
- [@OxCapitulation, msg#196796, 2021-08-25]: Weekly dev update — Ergo Raffle targeting mainnet release by end of week (late August 2021); local mainnet tests running smoothly after testnet infrastructure failures.
- [@glasgowm, msg#195515, 2021-08-24]: Confirmed trustless Schnorr atomic swaps with Bitcoin planned post-Taproot fork (November 2021).
- [@Angie H, msg#195835, 2021-08-24]: Blog post published — Ergo network hashrate increased 6x in two months: https://ergoplatform.org/en/blog/2021-08-24-ergo-mining-be-a-part-of-our-growing-network/
- [@glasgowm, msg#195578, 2021-08-24]: PSA posted to r/ergonauts about bearwhale activity — 4M SigmaUSD minted.

---

## Technical Q&A Worth Preserving

- **Q** (@MrStahlfelge, msg#195453): How does token burning work in Ergo?
  **A** (@MrStahlfelge): Tokens in ingoing boxes of a transaction but not in outgoing boxes are burned. The Android wallet prevents this by ensuring all tokens going in also go out. Additionally, tokens can be burned by miners after four years if the box they are stored in does not have sufficient ERG to pay storage rent.

- **Q** (@Soberana, msg#196402): Could ERG be lost by holding in a wallet for more than 4 years?
  **A** (@Chris, msg#196531): Only a tiny amount (less than 1 ERG) is reclaimed when a box is untouched for 4 years. A single transaction resets the timer.

- **Q** (community, multiple): Why is Ergo better suited for DeFi than Cardano's chain specifically?
  **A** (@glasgowm, msg#195464): Ergo's Sigma protocols enable a true P2P system with privacy — no other platform can currently build trustless LETS systems, multisig with no signer disclosure, trustless payment networks, or ring signatures that preserve zero knowledge.

- **Q** (@MatrixMaarten, msg#195456): If ErgoDEX runs on both Ergo and Cardano chains, what incentivizes users to use the Ergo chain given potentially lower ADA fees?
  **A** (@glasgowm, msg#195479): Smart contract functionality will likely be utilized first via wrapped tokens through Gravity. The mixer would require a local app. Rich Sigma protocol contracts enable complex novel DeFi not possible on Cardano.

- **Q** (@Olli Tiainen, msg#195518): Is Schnorr atomic swap different from wrapped token bridging?
  **A** (@glasgowm, msg#195519): It is a more advanced and secure method that can be completely trustless, unlike custodial wrapping.

- **Q** (community): Does ErgoDEX have a governance token?
  **A** (@el Martino, msg#194790; @Unknown, msg#194841): No governance token is planned; ERG is the platform token. Fair distribution via liquidity provision is possible but no IDO planned.

- **Q** (@𝐁𝐥𝐚𝐞𝐳𝐝, msg#194554): Is there a withdrawal limit on KuCoin without KYC?
  **A** (@Craig R, msg#194557): 5 BTC per day.

- **Q** (community): What is the CoinEx withdrawal fee for ERG vs. KuCoin?
  **A** (@Andreas, msg#195416): CoinEx 0.1 ERG, KuCoin 0.01 ERG. CoinEx has better spread and volume; KuCoin has lower withdrawal fee.

- **Q** (@PalaZ, msg#196745): Why does the Ergo full node load a different wallet address when using the same 15-word Yoroi recovery phrase?
  **A**: Not directly answered in chat — left unresolved.

- **Q** (@OxCapitulation, msg#196799): Is Ergo Raffle solely a lottery, or can the random number generator be used for DeFi/smart contracts?
  **A** (@Peppers CK, msg#196804): Proof of concept — broader applicability implied but not elaborated.

---

## Links Shared

- [https://ergoplatform.org/en/blog/2021-07-21-ergodex-a-cross-chain-workhorse/]: ErgoDEX cross-chain design overview blog post
- [https://ergoplatform.org/en/wallets/]: Official Ergo wallets page including Android wallet
- [https://play.google.com/store/apps/details?id=org.ergoplatform.android]: Android Ergo Wallet by Benjamin Schulte on Google Play
- [https://github.com/ergoplatform/eips/pull/36]: EIP for Android cold storage solution (collaboration between @MrStahlfelge and @morphic)
- [https://drive.google.com/file/d/191C5maKYHSJ3pm5lvd4wIqvFydi8XKnc/view]: Tesseract Ledger integration demo — Attest Input method working
- [https://curiaregiscrypto.medium.com/whats-going-on-behind-the-screens-ergo-weekly-dev-update-august-18th-119684fcecf1]: Weekly developer update August 18th (posted by @OxCapitulation)
- [https://github.com/anon-br/ergo-paper-wallet]: Ergo Paper Wallet repository (alpha)
- [https://ergodex.io]: ErgoDEX website
- [https://sigmausd.io/#/]: SigmaUSD stablecoin dApp
- [https://sigmaverse.io/]: Ergo dApp ecosystem directory
- [https://ergonaut.space/en/home]: Comprehensive Ergo ecosystem handbook
- [https://ergoauctions.org/#/auction/active]: Ergo Auction House
- [https://ergoplatform.org/en/blog/2021-04-26-the-ergo-manifesto/]: The Ergo Manifesto
- [https://ergoplatform.org/en/blog/2021-08-24-ergo-mining-be-a-part-of-our-growing-network/]: Blog post on Ergo mining and hashrate growth
- [https://ergoplatform.org/en/blog/2021-08-19-initial-coin-offerings-on-ergodex-security-and-peace-of-mind/]: Blog post on ICO security via ErgoDEX
- [https://arxiv.org/pdf/1806.10116v1.pdf]: Peer-reviewed paper demonstrating Turing completeness of Ergo smart contracts
- [https://docs.google.com/spreadsheets/d/1c8fa4Qalf49WbdStwNaexLa4qOybwgvDBDiyzrIH9D4/edit]: ERG emission schedule spreadsheet
- [https://www.nasdaq.com/articles/should-you-or-anyone-buy-ergo-2021-08-21]: Nasdaq article on Ergo (notable mainstream finance coverage)
- [https://medium.com/crypto-garage/adaptor-signature-on-schnorr-cross-chain-atomic-swaps-3f41c8fb221b]: Technical article on Schnorr adaptor signatures for cross-chain atomic swaps
- [https://bitcoin.stackexchange.com/questions/77193/how-is-the-construction-of-atomic-swaps-improved-by-schnorr]: Bitcoin StackExchange on Schnorr atomic swap improvements
- [https://discord.gg/T4ZHuDf9]: Ergo Discord (public)
- [https://ergonfts.org]: Ergo NFT viewer — paste wallet address to view owned NFTs

---

## Unresolved Questions

- **Yoroi seed phrase compatibility with full node**: @PalaZ (msg#196745) asked why the same 15-word Yoroi recovery phrase loads a different address in the Ergo full node — not answered.
- **ErgoDEX yield farming rates**: Multiple users asked about expected LP returns on ErgoDEX; no concrete answer given. One user noted rates may not be high as devs are working on impermanent loss mitigation.
- **iOS wallet**: No iOS wallet in development as of this period; no timeline given.
- **Hotbit withdrawal fee reduction**: @glasgowm confirmed negotiations were "in the works" (msg#195539) but no timeline or outcome confirmed.
- **Binance listing**: Explicitly deprioritized by the team in favor of organic growth; community mixed on whether this remains correct given price action.
- **Ergo Raffle random number primitive reusability for DeFi**: @OxCapitulation raised whether the on-chain random number generation could be used beyond lottery use cases — not substantively answered.
- **Sub-blocks vs. sidechains path for throughput**: @kushti indicated both were under consideration with community discussion drafts to be revived post-Ergoversary, but no decision made.