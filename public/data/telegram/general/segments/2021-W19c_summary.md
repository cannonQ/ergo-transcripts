# Ergo General Chat — 2021-W19c Summary
**Period:** 2021-05-14 to 2021-05-16

---

## Key Topics Discussed

- **Exchange Listing NDAs and Upcoming Announcements**: Armeanio confirmed Ergo was in NDA-bound discussions with multiple exchanges, with the first NDA expected to lift on Monday (2021-05-17). Community speculation centered on KuCoin as one candidate. Multiple announcements were anticipated across the coming week.

- **SigmaUSD Reserve Ratio Risk and Bearwhale Activity**: Ongoing warnings were issued to SigmaRSV holders about asymmetric risk due to an extreme reserve ratio (reported above 2300%). The "bearwhale" — a large actor who had been attempting to manipulate the AgeUSD protocol — was reported to have exited, leaving ERG in the reserve. kushti and Armeanio repeatedly urged SigRSV holders to redeem profits. The V1 SigmaRSV redemption issue was also raised: users stuck in V1 were limited by low reserve, with a maximum of ~16,383 RSV redeemable at a time.

- **ERG Mining Profitability**: ERG was noted as the most profitable coin to mine at the time. Discussion covered GPU compatibility (4GB+ required), pool selection (Herominers, Nanopool both mentioned, with Nanopool facing reported hashrate inflation issues), and HiveOS flight sheet configuration. The Autolykos PoW algorithm was referenced as memory-hard.

- **Wallet Support Status**: Yoroi desktop browser extension was confirmed as the primary wallet for ERG. Mobile Yoroi (iOS/Android) did not yet support Ergo. A Buy ERG button integration via Changelly was described as forthcoming. The full node wallet was also available with setup documentation on GitHub.

- **Hotbit Withdrawal Issues**: Hotbit had suspended ERG withdrawals following a security incident, with restoration tentatively expected around 2021-05-21. Users were advised to submit support tickets and avoid Hotbit for ERG in the meantime.

- **Ergo–Cardano Relationship**: Multiple new users asked about the connection. Community members explained the shared eUTXO model, kushti's background at IOHK, and the complementary nature of Ergo (PoW) and Cardano (PoS), including planned cross-chain liquidity sharing post-Cardano smart contracts.

- **ErgoDEX and Cardano Smart Contracts**: Users asked about buying ErgoDEX tokens; community clarified ErgoDEX has no separate governance token and uses ERG and ADA. A Cardano Catalyst proposal for ErgoDEX's Plutus port was shared. Cross-chain swaps were noted as dependent on Cardano smart contract deployment (~August 2021).

- **Developer Team Size**: Clarified that kushti had recently onboarded ~15 new developers, with 8 people working solely on ErgoDEX, countering the GitHub impression of a small team.

---

## Important Decisions or Announcements

- [@Armeanio, msg#135590, 2021-05-15]: "Ergo is getting listed on exchanges. I should be released from the first NDA Monday."
- [@Armeanio, msg#135592, 2021-05-15]: "I hope the next NDA [lifts] next week."
- [@Armeanio, msg#135594, 2021-05-15]: "I will release here first then everywhere else when I am able."
- [@Armeanio, msg#135598, 2021-05-15]: "I've talked to the community, listened and went to work for ergonauts. When I am free of the NDA I will post on the forum and then push it out across all the social channels."
- [@Armeanio, msg#137822, 2021-05-16]: "RSV holders need to take into account a rising asymmetric risk with recent price action. The bearwhale exited and left some ERG in the reserve, might be a good idea to take profit. Manage your risks and trade well."
- [@Glasgow, msg#136810, 2021-05-16]: "ERG is now the most profitable coin to mine."
- [@Glasgow, msg#137884, 2021-05-16]: "SigmaUSD oracle price is above market-price. If you're taking profits, consider using this to avoid dumping and help stabilise the reserve."

---

## Technical Q&A Worth Preserving

- **Q** (@Unknown): Is there a pre-sale for ErgoDEX?
  **A** (@Glasgow, msg#135445): "No presale."

- **Q** (@Unknown, msg#135474): How do I buy ErgoDEX?
  **A** (@Dmitry Usov, msg#135479): "You can't buy ErgoDEX, it doesn't have a token. It will use ERG and ADA."

- **Q** (@Unknown, msg#135791): Does Ergo's Autolykos have a DAG?
  **A** (implicit from context, msg#135795): Autolykos is a memory-hard PoW algorithm; it is not DAG-based.

- **Q** (@Unknown): Can ERG be staked?
  **A** (@Kevin, msg#135106): "Cannot [be staked]." Ergo is PoW only; yield opportunities would come via DeFi (SigmaUSD, ErgoDEX liquidity).

- **Q** (@Unknown, msg#135181): Why does SigmaUSD cost $7.10 for 1 ERG?
  **A** (community context): The oracle price lags the market price due to the oracle update mechanism; the SigmaUSD protocol uses an oracle price that can differ significantly from spot during rapid price moves.

- **Q** (@Unknown, msg#136841): Stuck with V1 SigmaRSV, cannot redeem via new AgeUSD — getting "InvalidReserveRatio" error.
  **A** (@Snowman Jason, msg#136868–136873): The reserve ratio is too high; maximum redeemable is ~16,383 SigmaRSV (~18 ERG) at a time. Redeem what is available now, then wait for SigmaUSD redemptions to lower the ratio before redeeming more. Remainder of V1 SigmaRSV may be stuck indefinitely if no SigmaUSD holders redeem.

- **Q** (@Kamy, msg#137016): Will I be able to swap ADA for ERG on ErgoDEX next month?
  **A** (@Glasgow, msg#137020, msg#137027): "No, ADA needs smart contracts for that." Sidechain development for shared liquidity and trustless swaps was scheduled to begin August 2021.

- **Q** (@Unknown, msg#136542): What will block rewards reduce to in July?
  **A** (@Glasgow, msg#137208): "Reduces by 3.5 ERG/block every 3 months from July onward."

- **Q** (@Unknown, msg#136762): How do I recover my Ergo wallet if my PC fails? (Yoroi with Ledger synced for ADA)
  **A** (@Unknown, msg#136767): "The Yoroi Ergo wallet is a different wallet with a different seed phrase. Write down the wallet seed immediately." The Ergo wallet in Yoroi is independent of the Ledger-backed ADA wallet.

- **Q** (@Joe D., msg#136369): Trying to implement a protocol using SigmaUSD on a website — where to start?
  **A** (@Unknown, msg#136377): Pointed to https://cryptocurrencycheckout.com/coin/sigmausd

- **Q** (@Unknown, msg#136196): Why is Ergo not showing up in Hotbit after a withdrawal?
  **A** (@Glasgow, msg#136196): "Issue on Hotbit's end" — Hotbit had suspended ERG wallet operations following a security incident.

- **Q** (@Jim James, msg#138249): Which wallet is most compatible with Ergo Auctions?
  **A** (@.Mtt, msg#138250): Yoroi (desktop) was recommended. Jim James confirmed it worked despite an initial warning on the tab.

---

## Links Shared

- [https://ergoplatform.org/en/blog/2021-04-26-the-ergo-manifesto/]: The Ergo Manifesto — core principles document
- [https://ergoplatform.org/en/blog/2021-02-05-building-ergo-how-the-ageusd-stablecoin-works/]: Technical explanation of the AgeUSD stablecoin protocol (SigmaUSD/SigmaRSV mechanics)
- [https://www.ergoforum.org/t/discuss-desired-future-exchange-listings/808]: Community forum thread on desired exchange listings — includes rationale for avoiding Binance initially
- [https://cardano.ideascale.com/a/dtd/ErgoDex-Plutus-Port/352410-48088]: Cardano Catalyst proposal for ErgoDEX Plutus port — free to vote
- [https://cardano.ideascale.com/a/dtd/Cardano-Connector-Metamask-like/352482-48088]: Catalyst proposal for a Cardano Connector (MetaMask-like) — eUTXO ecosystem tooling
- [https://ergoauctions.org/#/auction/specific/5bff8ac71aac34cb7ca78dd960d50d48e0ad1ed665d049600fcd722d55be782a]: Specific NFT auction listing on Ergo Auctions
- [https://github.com/ergoplatform/ergo/wiki/Set-up-a-full-node]: Official guide for setting up an Ergo full node
- [https://thecoinperspective.com/?c=ERG]: Market cap comparison tool for ERG price projections
- [https://ergonaut.space/]: Ergo community wiki — general reference
- [https://ergoplatform.org/en/blog/2021-04-19-youtube-video-competition/]: Ergo YouTube video competition announcement (deadline 2021-05-16)
- [https://github.com/ergoplatform/ergo/wiki/Set-up-a-full-node]: Full node setup documentation (Linux one-liner available)
- [https://www.ergoforum.org/t/interest-free-loan-contract/67]: ErgoForum post on interest-free loan contract design in ErgoScript
- [https://cryptocurrencycheckout.com/coin/sigmausd]: SigmaUSD checkout integration resource
- [https://blog.bancor.network/beginners-guide-to-getting-rekt-by-impermanent-loss-7c9510cb2f22]: Beginner's guide to impermanent loss (shared in context of SigmaUSD AMM risk)
- [https://forum.cardano.org/t/ergo-will-complement-cardano/45412]: Cardano Forum article on Ergo–Cardano complementarity
- [https://ergoplatform.org/en/mining/]: Official Ergo mining calculator page
- [https://youtu.be/NJp-iceP85A]: Community video about Ergo by Crypto Quokka (posted 2021-05-16)
- [https://youtu.be/0MDP4OH16mY]: New community YouTube video about Ergo (shared by Chris Ray)
- [https://twitter.com/ergoplatformorg/status/1393843734517792771]: Official Ergo Platform Twitter announcement (content not specified in chat)

---

## Unresolved Questions

- **V1 SigmaRSV stuck funds**: Users with large V1 SigmaRSV positions could not redeem due to reserve ratio constraints. No protocol-level fix was offered; the only path was waiting for SigmaUSD redemptions to lower the ratio. Long-term recovery remained uncertain.
- **Hotbit withdrawal restoration timeline**: Mentioned as "around the 21st" but unconfirmed. Users had no recourse beyond support tickets.
- **CoinEx BSC deposits suspended**: Multiple users reported BSC deposits not credited; CoinEx had suspended BSC node without public announcement. Resolution timeline unknown.
- **Ledger Live support for ERG**: Estimated "2–3 months" by one community member (msg#135490) but not confirmed by any team member.
- **Yoroi mobile ERG support**: Confirmed as coming with a Buy ERG button, but no firm date given.
- **Exchange listing identities**: NDA prevented disclosure; community speculated KuCoin but no confirmation. First announcement expected Monday 2021-05-17.
- **ErgoDEX launch timeline on Cardano**: Dependent on Cardano smart contract deployment; cross-chain liquidity start estimated August 2021 but not formally confirmed.
- **Nanopool hashrate inflation claims**: Raised by Jason Stoll (msg#137978, msg#137986) — alleged Nanopool inflates reported hashrates, reportedly "basically admitted" but never formally acknowledged. No resolution in thread.