# Ergo General Chat — 2021-W08a Summary
**Period:** 2021-02-22 to 2021-02-26

---

## Key Topics Discussed

- **SigmaUSD / SigmaRSV Launch (AgeUSD Protocol):** The SigmaUSD stablecoin contract was deployed on-chain on 2021-02-25, with the UI going live at sigmausd.io. The launch saw immediate heavy demand, causing frequent transaction failures due to eUTXO throughput limitations. Over 500,000 ERG was locked in the reserve within hours of launch, with ~$1.9M in reserve by end of day.

- **SigmaUSD/SigmaRSV Mechanics:** Extensive community discussion on how the AgeUSD protocol works. SigmaRSV is a leveraged long on ERG (reserve providers); SigmaUSD is a stablecoin pegged to $1 backed by ERG collateral. The reserve ratio must stay between 400%–800%; below 400% SigmaUSD minting halts, above 800% SigmaRSV minting halts (the 800% cap was not enforced during the bootstrap period, which runs until block 450,000). A 1% protocol fee on all transactions goes back into the reserve; a 0.25% UI fee also applies. No liquidations exist for either side.

- **eUTXO Throughput Limitations:** Developer Robert Kornacki (via Discord, relayed by glasgowm) explained that the UTXO model and young dApp design patterns limit transaction throughput, causing the minting failures. High-level solutions involving asynchronous eUTXO protocols are under research but not yet ready for implementation.

- **BitMart and BiKi Exchange Listings:** ERG listed on BitMart on 2021-02-24 (ERG/BTC and ERG/USDT pairs). BiKi exchange also announced a listing around 2021-02-25. Trading volume was modest initially. Withdrawals on BitMart were under maintenance for several days post-listing.

- **Ergo Wallet & Ledger Hardware Wallet Support:** Community discussed the lack of Ledger hardware wallet support for ERG in Yoroi. Support was on the roadmap (Q1 2021) but a community developer tasked with implementation had not yet delivered. Workaround: use Waves DEX with Ledger to secure ERG.

- **Miner Voting on Network Parameters:** Explained that pools and solo miners can vote on block size and other parameters via their node configs. A parameter change requires 50%+ of blocks in a 1,024-block epoch to signal for it, resulting in a 1% change per epoch.

- **Oracle Pools and SigmaUSD:** Clarification that Oracle Pool v1 feeds ERG/USD price data into the SigmaUSD contract. Oracle Pool v2 (running for Dexy Gold with GORT rewards) also discussed. Plans mentioned to build out Ergo-native oracles further.

- **ergonaut.space Community Wiki Launch:** glasgowm launched a community wiki/resource site backed by Git, open for community editing in Markdown with a visual editor. Included a SigmaUSD explainer that became widely referenced during launch week.

---

## Important Decisions or Announcements

- [@kushti, msg#93946, 2021-02-23]: Confirmed SigmaUSD would launch on Thursday (2021-02-25), pending agreement among key contributors.
- [@kushti, msg#94101, 2021-02-23]: Announced new Ergo Support group at https://t.me/ergosupport with a secretary (Rohan) to route issues to appropriate developers.
- [@kushti, msg#94102, 2021-02-23]: Reminder that no Ergo team member will DM users first; scammers are active.
- [@glasgowm, msg#94387, 2021-02-24]: Launched community wiki at https://ergonaut.space/ — open to community contributions, backed to Git.
- [@glasgowm, msg#95211, 2021-02-25]: Announced SigmaUSD UI is live at https://www.sigmausd.io/#/
- [@kushti, msg#94797, 2021-02-25]: Shared BiKi exchange listing announcement: https://twitter.com/BiKiEnglish/status/1364870117360689154
- [@glasgowm, msg#95333, 2021-02-25]: Relayed statement from Robert Kornacki (Discord) explaining eUTXO throughput limitations causing minting failures, noting asynchronous eUTXO protocols are under research.
- [@scalahub, msg#96483, 2021-02-26]: Confirmed the bootstrap period (no 800% cap on SigmaRSV minting) runs until block 450,000.
- [@Armeanio, msg#94886, 2021-02-25]: Confirmed SigmaUSD launch was scheduled for that day, "if the weather is clear."
- [@glasgowm, msg#95430, 2021-02-25]: Confirmed SigmaRSV minting is uncapped for approximately one month (bootstrap period).
- [@glasgowm, msg#98222, 2021-02-26]: Reported $1.9M locked in the SigmaUSD reserve.

---

## Technical Q&A Worth Preserving

- **Q** (@Kyle R): Where are SigmaUSD and SigmaRSV stored?
  **A** (@glasgowm, msg#93975): They are stored in Yoroi. When you connect a wallet and mint, the tokens are automatically stored in that wallet. SigmaRSV appears as a selectable asset in the Yoroi Send tab dropdown.

- **Q** (@Allll🦴, msg#94379): Error encountered when using ErgoMixer.
  **A** (@Dmitry Usov, msg#94381): ErgoMixer issues should be directed to anon_real on Discord. kushti is responsible for the node, not the applications.

- **Q** (@A, msg#93731): How does miner voting on proposals work — pools only or all miners?
  **A** (@Unknown, msg#93733/93735): Solo miners and pools can vote through their node configs. Raising or lowering a parameter limit requires 50%+ of blocks within a 1,024-block epoch to signal; the parameter then changes by 1% in the next epoch.

- **Q** (@c8, msg#95187): How is the initial price of SigmaRSV calculated?
  **A** (@glasgowm, msg#95188): Not fully specified; probably just a ratio. (No definitive answer given — see unresolved questions.)

- **Q** (@Klaus, msg#95432): If I mint SigmaRSV, can I get back fewer ERG than I put in (ignoring fees)?
  **A** (@glasgowm, msg#95433): Yes — SigmaRSV and SigmaUSD are distinct. If ERG price drops 30%, RSV holders lose ERG when redeeming. SigmaUSD holders receive the same USD value but fewer ERG if the price rises (and more ERG if price falls). No liquidations occur in either case.

- **Q** (@Chris, msg#94755): Can SigmaRSV holders get unlimited ERG out if the price rises dramatically?
  **A** (@Chris, msg#94755): No — the extra ERG comes only from what SigmaUSD minters "lose" when redeeming their stablecoin at a higher ERG price. With the RSV/SIG ratio maintained between 4x and 8x, the theoretical maximum extra ERG gain is approximately 25% of the initial ERG deposited.
  **A** (@glasgowm, msg#98264, quoting Robert Kornacki): There is no theoretical maximum technically — fees from SigmaUSD minting/redeeming accumulate in the reserve and the outcome depends on when you entered, when you exit, and oracle price fluctuations.

- **Q** (@Yusuf, msg#97618): Are there conditions under which SigmaRSV holders cannot redeem?
  **A** (@Dmitry Usov, msg#97625): You can redeem as long as the reserve ratio is above 400%. Currently at 7,100%+, redemption is open.

- **Q** (@Chris, msg#96742): Can SigmaRSV holders withdraw at any time?
  **A** (@Chris, msg#96742): Yes, as long as the reserve ratio (RSV/SIG) does not drop below 400%.

- **Q** (@scalahub, msg#96481): Is the 800% cap on SigmaRSV minting enforced during the bootstrap period?
  **A** (@scalahub, msg#96483): No cap enforced until block 450,000.

- **Q** (@Rodrigo Pacini, msg#96740): Can SigmaRSV holders only withdraw when in profit?
  **A** (@Chris, msg#96742): No — you can withdraw at any time as long as the reserve ratio stays above 400%; however, if ERG price has dropped since you minted, you will receive fewer ERG.

- **Q** (@Snowman Jason, msg#95278): If you lose your browser cache and the sigmausd.io wallet address, how do you access your SigmaUSD position?
  **A** (@Unknown, msg#95282): As long as you have your Yoroi wallet (seed phrase), you can re-enter the same receiving address. The SigmaRSV tokens live on-chain in the Yoroi wallet, not in browser storage.

- **Q** (@EMonty, msg#95316): What address do I enter in the "Set Wallet" field on sigmausd.io?
  **A** (@glasgowm, msg#95318): The Ergo address (from Yoroi) where you want your SigmaRSV/SigmaUSD returned and from which you'll cash out. Must be an ERG address — not an ADA address and not an exchange address.

- **Q** (@Fingers Crossed, msg#98402): Why do SigmaRSV providers (reserve side) also pay the 1% fee — aren't they providing the service?
  **A** (@Unknown, msg#98438): The fee is needed to incentivize holding and to fund the reserve mechanism for both sides.

- **Q** (@chrom / community): What is the difference between Oracle Pool v1 and Oracle Pool v2?
  **A** (@kushti, msg#95501, implicit + community discussion): Oracle Pool v1 runs the ERG/USD price feed used by SigmaUSD, operated by Ergo Foundation members and some outside contributors. Oracle Pool v2 runs for Dexy Gold with GORT rewards. Plans exist to expand Ergo-native oracle infrastructure.

- **Q** (@yernar, msg#93402): Bug report — 15-word recovery phrase disappears after 3–5 seconds in wallet version 4.0.7.
  **A** (@Dmitry Usov, msg#93405/93406): Update your node version — this bug is already fixed in later releases.
  **A** (@scalahub, msg#93404): Known issue; if no ERG has been sent to the address yet, reinitialize with the new version. Always save the recovery phrase immediately.

---

## Links Shared

- [https://www.sigmausd.io/#/]: SigmaUSD dApp UI — mint/redeem SigmaUSD and SigmaRSV
- [https://ergonaut.space/]: Community wiki/resource site launched by glasgowm; open for contributions
- [https://ergonaut.space/en/SigmaUSD]: SigmaUSD explainer on the community wiki — widely referenced during launch
- [https://github.com/anon-real/sigma-usd]: SigmaUSD source code (for self-hosting/verification)
- [https://github.com/Emurgo/age-usd/blob/main/docs/stories.md]: AgeUSD protocol user stories — recommended reading for understanding SigmaRSV/SigmaUSD mechanics
- [https://github.com/Emurgo/age-usd/tree/main/docs]: Full AgeUSD documentation
- [https://explorer.ergoplatform.com/en/addresses/2zYVHmdQDGtyyZfeqFPdMFqWzMdK299yCj5uDJjiSxRgpHyjiV3mVfZCimFbEVkNkCuypT1khjhupnEb6af3ztdatgag24UzLjW7heidiBF4MqK42TBZC1mLNcm851kvjaEwMsm8bnT2ZwJ6g18ZdDtdKTqEq7KBtp9gkvXiScoNNrA55JhC5o1ZdKRfjRqKMsfWBqmUqTNZfLXy62ddoP8oGT6HafqzKp9YLdSr172KYsnJoK3MhRciMG3McYHfkCFzT3fgNiaTosEtDKUSxaDEmY3r6eTF5H1QmYdkDfEe9AGxzjPgcwR19CfTkuGt8Xg3iUnLRciZ6hVBJc642qDR1EBjY8g7sAtestKYxRLKvUrjV9o3rbFccpgREynwf63mHUZ2jFnuuP2YfeJZdhPf6eK7dnLQ6HDkq5JBd76G7ErB17V1yCr7J6DrC6m47B8aY1XU5fFFQ6Hy6fJm7jzb5DHdn3U4V3TdUM5WwMe6hAmTBz3kFtJBKAiqTw5g53doV7CuUWqC9fTKhGo3BYfXtjFCxeJLwxsXx91s5MWT4tST4XBFnoJP6SZKkfuW7ZvtRbcgpVsz37X6o7YxitwNzaDNmkR9GVLU1XK4cQZjfBijQrTXTTApXnq6wPzzvHTgKyxVuQdDcniEDcgQwttTX4mqooCqxshjy79XL3sFCSTxh4Pjm9UjCgq9daTn83Ro2LnHHifaMjXpFGAbySvqwNvxwBHJnsTXKh2fRggxLDLVobBUfq7DxssPfSaeF4exmdU3mhtuhVhFxAaUVY3LBigWcm4642GtzECVmFRLy1y96m7utcqBiMoyNDy8K3hrM6uzpnA5VYuC6s3jqYp6wZ95QCcRyc3roZL6qTrRXiJupiwYXL3FA1THXPAXLm3PgM7VosJth3bj]: SigmaUSD contract address on Ergo Explorer — shared by kushti for transparency/verification
- [https://sigmaverse.io/]: Updated Ergo dApp directory (updated 2021-02-26)
- [https://support.bmx.fund/hc/en-us/articles/1260802411229]: BitMart ERG listing announcement
- [https://support.bmx.fund/hc/en-us/articles/1260802893249]: BitMart notice on adjusted ERG listing time
- [https://support.bmx.fund/hc/en-us/articles/1260802955890]: BitMart deposit bonus and net buying competition for ERG listing
- [https://miningpoolstats.stream/ergo]: Live Ergo mining pool statistics
- [https://t.me/ergosupport]: New Ergo Support Telegram group (announced by kushti)
- [https://t.me/ergo_mining]: Ergo mining Telegram group
- [https://ergoplatform.org/en/exchanges/]: Official list of exchanges listing ERG

---

## Unresolved Questions

- **Initial SigmaRSV price calculation:** How the initial SigmaRSV price per token is determined was not definitively answered (msg#95187–95188).
- **SigmaRSV exact profit formula at scale:** Community asked what happens to RSV holders if ERG 10x or 100x in price. Answers were inconsistent — initially a "max 25%" figure was cited, later contradicted by Robert Kornacki (via glasgowm) saying there is no theoretical maximum. The exact math under various scenarios was not resolved in-chat.
- **SigmaRSV/SigmaUSD OTC and exchange listing:** Whether SigmaRSV would be traded on exchanges or OTC was raised (msg#95401) but not resolved.
- **SigmaUSD utility without Cardano integration:** Several users asked how SigmaUSD gains utility if the Cardano AgeUSD implementation uses its own adaUSD rather than SigmaUSD tokens directly. Not fully resolved — answer was that the protocol would be used on Cardano but the specific token interoperability remained unclear (msg#96023–96048).
- **Increasing Yoroi transaction fee:** A user asked how to increase the miner fee in Yoroi to prioritize transactions during congestion. Dmitry Usov confirmed Yoroi does not currently support custom fee setting (msg#97643–97687).
- **eUTXO throughput solution timeline:** The asynchronous eUTXO protocol research needed to resolve SigmaUSD's concurrency/throughput issues was acknowledged as ongoing with no timeline given (msg#95333).
- **Ledger hardware wallet support for ERG:** On the Q1 2021 roadmap but a community developer had not delivered; no updated timeline provided (msg#94370, msg#95145).
- **Safari/iOS compatibility for sigmausd.io:** Confirmed broken on Safari (iOS and desktop) due to missing WASM datatype support in Apple's engines. No fix timeline given; Firefox on Android confirmed working (msg#94950–95254).