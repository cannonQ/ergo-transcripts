---
title: "Ergo General Chat — 2021-W08 (Part B)"
date_start: "2021-02-22"
date_end: "2021-02-28"
type: telegram_weekly
channel: general
week: "2021-W08"
part: "b"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat — 2021-W08b Summary (2021-02-26 to 2021-02-28)

**Context:** This period covers the first 72 hours after the SigmaUSD/SigmaRSV launch, generating enormous community activity around understanding the AgeUSD protocol mechanics.

---

## Key Topics Discussed

- **SigmaUSD/SigmaRSV Launch (Day 1–3):** The primary focus of the entire period. The community experienced high transaction failure rates due to network demand, with multiple failed minting attempts before success. The ergonaut.space wiki and sigmausd.io dashboard were the primary references. Key friction: Yoroi's UI did not show SigRSV/SigUSD balances on the main screen — only accessible via the Send tab dropdown.

- **SigmaRSV vs. Holding ERG — Economic Mechanics:** Extensive community debate around whether SigmaRSV is simply a "leveraged long on ERG." Clarified by multiple participants: SigmaRSV is a call option on the reserve (a % ownership of ERG locked in the contract), not a direct price bet. Reserve growth depends on protocol usage (fees from minting/redeeming SigmaUSD), not just ERG price appreciation. The 1% fee per transaction goes to the reserve, benefiting SigmaRSV holders.

- **Bootstrap Period / Block 450,000 Cap:** During the bootstrap period (until block ~450,000, estimated ~March 12), SigmaRSV minting is uncapped — the reserve ratio has no 800% ceiling. This dilutes SigmaRSV pricing relative to ERG/USD changes. Post-cap, the 400%–800% reserve ratio range will be enforced, locking behavior when ratio falls below 400% (no redemption) or above 800% (no new SigmaRSV minting).

- **Reserve Ratio Mechanics and Locking:** When reserve ratio falls below 400%, SigmaRSV redemption is disabled (alternative to liquidation). When above 800%, new SigmaRSV cannot be minted. Multiple users observed the contract locked at ~388% during this period. Clarified: the lock is temporary and recoverable, not a protocol failure.

- **Yoroi "Send All" Token Loss Warning:** Critical UX issue identified: using Yoroi's "send all ERG" function will also send all SigmaRSV/SigmaUSD tokens in the same wallet to the destination address. If sent to an exchange that doesn't support Ergo native tokens, those tokens are effectively lost. Dmitry Usov flagged this to Yoroi developers.

- **Reserve Ratio Formula:** Community worked out that the reserve ratio displayed on sigmausd.io is calculated as: `(s_SigRSV * p_SigRSV + s_SigUSD * p_SigUSD) / (s_SigUSD * p_SigUSD) * 100` — i.e., total reserve value divided by SigUSD obligations. The ERG used to mint SigUSD is part of the reserve, explaining why naive calculations were off by exactly 100%.

- **UTXO Volume Inflation:** The $1.2 billion "contract volume" figure cited from the explorer was clarified by Glasgow as an artifact of UTXO accounting — each new transaction added to an existing UTXO inflates the total received figure. Actual contract balance was ~$5m USD at the time.

- **SigmaUSD as DeFi Foundation:** Armeanio framed SigmaUSD as analogous to MakerDAO's role for Ethereum — a foundational stablecoin enabling lending, derivatives, and liquidity provision. The 2.5% fee is competitive vs. MakerDAO's 8.5%. Future utility (ErgoDEX, liquidity pools) is required for SigmaRSV to generate meaningful fee-based returns.

- **ErgoMixer Now Supports SigmaUSD/SigmaRSV:** Announced by kushti relaying from anon_real — the ErgoMixer was updated to support mixing of SigmaUSD and SigmaRSV tokens without requiring a client update.

- **Exchange Issues (CoinEx, Gate.io, HotBit):** Multiple users reported slow or stuck ERG withdrawals from exchanges during this period, attributed to exchange-side processing delays rather than Ergo network issues. Gate.io had an extended outage for ERG withdrawals (~8 hours for some users). CoinEx reported as having 0.1 ERG withdrawal fee.

- **ErgoDEX / Spectrum DEX Roadmap:** Confirmed as targeted for 2021 (partial), with full delivery expected early 2022. Described as critical for SigmaUSD utility — miners need a DEX to exit ERG into SigmaUSD without going through centralized exchanges.

---

## Important Decisions or Announcements

- [@kushti khushi, msg#101370, 2021-02-28]: ErgoMixer now supports SigmaUSD and SigmaRSV mixing — no client update needed, just relaunch mixer. (Relayed from anon_real via anon2020s.)
- [@Glasgow, msg#98505–98507, 2021-02-26]: SigmaRSV minting has no cap until block 450,000 (~1 month from launch); after that the contract locks to 400%–800% reserve ratio range and only SigmaUSD can be bought.
- [@Glasgow, msg#100384, 2021-02-27]: ergonaut.space handbook pushed to GitHub: https://github.com/glasgowm148/ergonaut-handbook — auto-syncs every 5 minutes.
- [@Glasgow, msg#99985, 2021-02-27]: ergonaut.space wiki registrations re-enabled for community contributors.
- [@Dmitry Usov, msg#100055, 2021-02-28]: Warning issued — do NOT send all ERGs from a wallet containing SigmaUSD/SigmaRSV tokens; tokens will be sent along and likely lost if destination is an unsupported exchange.
- [@kushti khushi, msg#100283, 2021-02-27]: Teased "something new is coming" regarding Yoroi dApp connector, described as in active development.
- [@Glasgow, msg#101176, 2021-02-28]: Confirmed Cardano is working on an AgeUSD port using Plutus — will be a separate implementation, not the same SigmaUSD tokens cross-chain.

---

## Technical Q&A Worth Preserving

- **Q** (@cymatic): How is the Reserve Ratio calculated? My formula `(s_SigRSV * p_SigRSV) / (s_SigUSD * p_SigUSD) * 100` is always off by exactly 100 from the displayed value.
  **A** (@Chris, msg#101504, 2021-02-28): The correct formula is `(s_SigRSV * p_SigRSV + s_SigUSD * p_SigUSD) / (s_SigUSD * p_SigUSD) * 100`. The ERG used to mint SigmaUSD is itself part of the reserve, so it must be included in the numerator. Source: https://github.com/Emurgo/age-usd/blob/main/ageusd-headless/src/equations.rs

- **Q** (@Glasgow, msg#99943): What does the $1.2 billion contract volume figure actually represent?
  **A** (@Glasgow, msg#99944, 2021-02-27): Due to UTXO accounting, volume figures double with each transaction appended to an existing UTXO. A $2m + $1 transaction results in a $4m+ total received figure. The metric is misleading for measuring actual economic throughput.

- **Q** (@Dmitry Usov, msg#100055): Why do tokens get lost when sending all ERG from Yoroi?
  **A** (@Glasgow, msg#100108, 2021-02-28): Yoroi's "send all" function does not differentiate between ERG and native tokens (SigmaRSV/SigmaUSD). All assets in the wallet are sent together. If the destination is an exchange that doesn't parse Ergo native tokens, those tokens are unrecoverable on that side. Fix was reported to Yoroi developers.

- **Q** (@Gregg, msg#100238): Is there no way to have a decentralized contract that sits waiting for any amount sent to it (like Ethereum)?
  **A** (@Glasgow, msg#100239–100240, 2021-02-27): Yoroi dApp connector is in development and will be ready in a few months — this will eliminate the current manual address-copy flow. No transfers needed once deployed.

- **Q** (@cymatic, msg#100877): With $1.2 billion contract volume and 0.25% dev fee, did the sigmausd.io frontend developers make ~$3 million?
  **A** (@Dmitry Usov, msg#99919, 2021-02-27): UI developers made approximately 3,000 ERG. The $1.2B figure was a bug in total received quantity tracking. Actual fee base was the ~$5m contract balance, yielding ~0.25% of that = ~3,000 ERG to the frontend.

- **Q** (@c8, msg#98535): What is the economic benefit of buying SigmaRSV early vs. later?
  **A** (@c8, msg#98535, 2021-02-26): Every time someone buys or sells SigmaUSD or SigmaRSV, they pay 1% that goes directly into the reserve, increasing the value of reserve tokens. Earlier holders capture a larger proportion of this compounding fee accumulation relative to total supply.

- **Q** (@Damon AndTheSea, msg#99390): What happens if the reserve stays below 400% for an extended period — are funds permanently locked?
  **A** (@Armeanio, msg#99419, 2021-02-26): If there is a max exodus of SigmaRSV, the contract locks. This creates the least diluted SigmaRSV entry point, incentivizing new capital to enter. The lock is always potentially recoverable — it is the alternative to forced liquidation, not equivalent to it.

- **Q** (multiple users): Why did SigmaRSV value not increase when ERG price went up 15%?
  **A** (@Glasgow, msg#101047, 2021-02-28): During the uncapped bootstrap period, the reserve ratio has no 800% ceiling, so SigmaRSV is subject to dilution. Additional ERG isn't created from price appreciation — new ERG enters the reserve only via transaction fees. The SigmaRSV/ERG ratio moves differently during bootstrap vs. post-cap operation.

- **Q** (@cymatic, msg#100092): Is the only reason to keep some ERG in a Yoroi wallet containing SigmaRSV to cover the 1.25% redemption fee?
  **A** (multiple, msg#100084–100097): Yes — you need ERG to pay the protocol fee when redeeming. You can always buy more ERG later if needed. The main risk is accidentally sending all ERG (and thus all tokens) to an exchange via "send all."

- **Q** (@Unknown, msg#101198): Does it make sense to mint SigmaRSV when ERG price is low, expecting it to rise?
  **A** (@c8, msg#101199–101201, 2021-02-28): ERG/USD price delta is not the only factor — reserve ratio at time of entry is equally important. At high reserve ratios (e.g., 6000% during bootstrap), SigmaRSV/ERG exchange rate was unfavorable even with price increases, due to dilution.

---

## Links Shared

- [https://sigmausd.io/#/]: SigmaUSD/SigmaRSV minting and redemption interface; primary dApp for the AgeUSD protocol on Ergo.
- [https://ergonaut.space/en/SigmaUSD]: Community wiki page covering SigmaUSD/SigmaRSV mechanics, ELI5 explanations, and risk disclosures. Editable by community with Glasgow's approval.
- [https://github.com/glasgowm148/ergonaut-handbook]: GitHub repo backing ergonaut.space, auto-synced every 5 minutes.
- [https://github.com/Emurgo/age-usd]: Official AgeUSD protocol repository including headless implementation and equations in Rust.
- [https://github.com/Emurgo/age-usd/blob/main/ageusd-headless/src/equations.rs]: Rust source for AgeUSD reserve ratio and pricing equations.
- [https://ergoplatform.org/en/blog/2021_02_26-sigmausd-released/]: Official EMURGO/Ergo announcement of SigmaUSD launch, noting ~$2.34M submitted on day one.
- [https://ergoplatform.org/en/blog/2021-02-05-building-ergo-how-the-ageusd-stablecoin-works/]: Technical blog post by Robert Kornacki explaining AgeUSD mechanics.
- [https://explorer.ergoplatform.com/en/addresses/2zYVHmdQD...]: SigmaUSD smart contract address on Ergo Explorer — used to verify reserve balance (Final Balance field; ignore Total Received due to UTXO inflation).
- [https://twitter.com/ergoplatformorg/status/1365677817686618112]: Official Ergo warning about the Yoroi "send all" token loss issue.
- [https://gravity.tech/]: Waves-based cross-chain protocol with an Ergo integration mentioned — enables ERC-20 interoperability.
- [https://twitter.com/kucoincom/status/1365678008393035793]: KuCoin community vote for next listing — community was campaigning for ERG.
- [https://twitter.com/NicoArqueros/status/1353201858232406018/photo/4]: Presentation slides showing Yoroi dApp connector development status.
- [https://twitter.com/veriumfellow/status/1366218102577455107]: Community article on SigmaUSD mechanics published by UpwindStrategy.
- [https://ergoauctions.org/#/auction/specific/28c0a69f...]: Active NFT auction on Ergo Auctions House.
- [https://www.youtube.com/watch?v=ASrLmrkDCgE]: Community video explaining SigmaUSD/SigmaRSV in layman's terms.

---

## Unresolved Questions

- **SigmaRSV post-bootstrap behavior:** Community could not fully model SigmaRSV returns because the uncapped bootstrap period makes the ERG/SigmaRSV ratio behave differently than it will post-block-450,000. Several participants noted it's impossible to accurately assess risk/reward until the cap is enforced.

- **Cardano AgeUSD port — relationship to SigmaUSD:** Whether Cardano's Plutus-based AgeUSD implementation would use the same SigmaUSD tokens (cross-chain) or create entirely separate tokens was left unresolved. Glasgow confirmed it will be a separate implementation; cross-chain token interoperability was not confirmed.

- **Liqwid Finance and SigmaUSD integration:** A screenshot was shared suggesting Liqwid Finance (Cardano lending protocol) might support SigmaUSD, but community members were uncertain whether this referred to Ergo-backed SigmaUSD or a future Cardano-native AgeUSD implementation. Left unconfirmed.

- **Fee estimation API:** kushti noted (via the glossary context) that Ergo node has a fee estimation API that is untested and unused by applications — flagged as something someone should test and integrate.

- **Yoroi mobile ERG support:** Confirmed as not yet available during this period; timeline not given.

- **Ledger hardware wallet support for ERG:** Confirmed as in progress but no timeline given.

- **Whether miners are actually using SigmaUSD:** Debated as a theoretical use case (miner sells ERG into SigmaUSD to reduce sell pressure and hedge volatility) but no evidence of actual adoption yet. Real utility awaits ErgoDEX and direct SigmaUSD liquidity.

- **SigmaRSV OTC market:** Seba Q proposed a community OTC for SigmaRSV tokens; no resolution on whether Yoroi supported token-to-token sends at the time.