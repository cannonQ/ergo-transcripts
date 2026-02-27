# Ergo General Chat — 2020-W34 Summary
**Period:** 2020-08-17 to 2020-08-23 | **Messages:** 779

---

## Key Topics Discussed

- **Autolykos Protocol & k-sum Problem**: kushti explained that Autolykos is based on the well-studied k-sum hard problem, providing cryptographic foundation for Ergo's proof-of-work algorithm.

- **Oracle Pools Design**: Discussion of Ergo's Oracle Pools model as an alternative to centralized oracle solutions like Chainlink, with proof of concept targeted for end of August 2020.

- **Mixer Implementation (ZeroJoin)**: The Ergomixer incorporating ZeroJoin was presented as a live privacy implementation. Latest update includes covert address feature for automatic mixing after threshold is reached, with plans for token mixing, Tor integration, and stealth address implementation.

- **Wallet Support Roadmap**: Yoroi wallet integration confirmed for September-October timeline. Ledger hardware wallet support also in progress as a priority for community comfort with holding ERG off-exchange.

- **Exchange Liquidity & Wash Trading**: Community discussion of order book manipulation and potential fake volume on HotBit and CoinEx, with hidden order functionality noted as explanation for sell wall behavior.

- **TPS Improvements**: kushti reported 2.5X increase in transaction throughput over 14 months, with continued potential for improvement through protocol voting mechanisms.

- **Distributed Signatures Application**: Anonymous contributor proposed "Zero-Knowledge Treasury" application based on distributed signatures, offering privacy-preserving DAO functionality on-chain.

---

## Important Decisions or Announcements

- [@kushti, msg#43780, 2020-08-17]: Ergo protocol reference client 3.3.1 finalized and released this week.

- [@kushti, msg#44251, 2020-08-19]: Ergo protocol reference client 3.3.1 officially released.

- [@kushti, msg#43878, 2020-08-18]: EMURGO's Robert Kornacki appointed as new board member of Ergo Foundation (announcement of partnership maturation).

- [@Unknown, msg#44734, 2020-08-22]: Ergo Explorer 2.0.0 released.

- [@Unknown, msg#44736, 2020-08-22]: ZeroJoin paper accepted to CBT 2020 workshop; mixer implementation uses this specification.

- [@Unknown, msg#44280, 2020-08-19]: Ergo Foundation willing to issue bounties for significant ecosystem contributions; ErgoCast podcast host position open for interested community member.

- [@kushti, msg#44163, 2020-08-19]: Emission schedule assessment: "Now emission does not look to be aggressive at all."

---

## Technical Q&A Worth Preserving

- **Q** (@Kduderino, msg#43779): Having problems withdrawing ERG from HotBit to CoinBarn wallet; address validation failing.
  **A** (@kushti, msg#43792): Issue was mining script address (non-standard format for standard wallets).

- **Q** (@iason, msg#44180): Is ETH-ERG integration planned? Could ERG be listed on Uniswap?
  **A** (@Jason Davies, msg#44181-182): ETH-ERG integration would require wrapped ERG on Ethereum for Uniswap compatibility; alternatively, Ergo's DEX can wrap ETH on Ergo and compete with Uniswap.

- **Q** (@Unknown, msg#44396): Do ergopools prevent 51% attacks?
  **A** (@Unknown, msg#44401): Cryptocurrency design assumes 51% honest mining; protection depends on community response (rewriting code/forking). Miners generally support diverse ideas rather than attack chains. Possibility of 51% attack is considered a feature for decentralized governance.

- **Q** (@Unknown, msg#44422): What insignificant apps could complement Ergo for coding practice?
  **A** (@kushti, msg#44425-450): Applications needed include mixer improvements, Zero-Knowledge Treasury, wallets, and privacy-preserving dApps. Stack flexibility offered: Java/Scala for core contributions, Rust projects also available (sigma-rust, crowdfunding-cli, oracle pools, desktop wallet in development). Internship opportunities available for students; weekly dev chats on Discord Wednesdays 1PM UTC.

- **Q** (@Ollie [THREE Pool], msg#44674): Can Ergo enable anonymous token swaps (e.g., ADA to privacy coins)?
  **A** (Implied from mixer discussion): Mixer and privacy features enable this through covert addresses and token mixing (planned expansion).

---

## Links Shared

- [https://ergoplatform.org/en/blog/2020-08-17-ergos-vision-for-defi-ergo-vs-cbdcs/]: Vision statement on Ergo's DeFi approach versus CBDCs.

- [https://github.com/ergoplatform/ergo/pull/1171]: Protocol reference client 3.3.1 PR.

- [https://github.com/ergoplatform/ergo/releases/tag/v3.3.1]: Client 3.3.1 release notes.

- [https://emurgo.io/blog/emurgo-head-of-rd-robert-kornacki-appointed-to-ergo-foundation-board]: EMURGO announcement of Kornacki appointment.

- [https://www.ergoforum.org/t/oracle-pools-a-new-oracle-model/263]: Oracle Pools specification and design discussion.

- [https://twitter.com/Ergobug/status/1292569319428300801]: Mixer announcement with ZeroJoin implementation.

- [https://eprint.iacr.org/2020/560]: ZeroJoin research paper (CBT 2020 workshop).

- [https://www.ergoforum.org/t/ergo-cast-looking-for-new-host/279/3]: ErgoCast podcast host position announcement.

- [https://ergoplatform.org/en/blog/2020-08-04-ergo-roadmap-for-2020/]: 2020 roadmap with milestones on track.

- [https://www.ergoforum.org/t/app-on-distributed-signatures/342]: Distributed signatures application proposal (Zero-Knowledge Treasury).

- [https://www.ergoforum.org/t/daily-ergo-facts/166]: Community-maintained daily Ergo facts thread (80+ entries by week end).

- [https://ergoplatform.org/en/blog/2020-08-20-the-evolution-of-programmable-money/]: Essay on programmable money evolution.

- [https://github.com/ergoplatform/explorer-backend/releases/tag/2.0.0]: Ergo Explorer 2.0.0 release.

- [https://twitter.com/chepurnoy/status/1296723105327579136]: TPS improvement metrics (2.5X in 14 months).

- [https://discord.gg/kj7s7nb]: Ergo Discord community.

- [https://ergoplatform.org/en/wallets/]: Wallet options page.

- [https://eprint.iacr.org/2020/044.pdf]: Reward theft risk in mining pools paper.

---

## Unresolved Questions

- **Oracle Pools PoC Timeline**: kushti stated "depends not on me" regarding proof of concept delivery (msg#44365), confirming August 2020 target but noting Ergo philosophy of underpromising/overdelivering. Community asked for confirmation of end-of-month delivery (msg#44371) — no firm commitment given.

- **Ledger Support ETA**: Mentioned as roadmap item but no specific timeline provided; community flagged as high-priority need.

- **Larger Exchange Listing**: kushti noted "we're in talks with a little bit now. Likely a new community voting will happen" (msg#43817) but no exchanges confirmed or timeline given. Community expressed frustration with liquidity on small exchanges.

- **Marketing Strategy**: Debate over announcements-of-announcements (msg#43832-857). Oz argued hyping community growth is inevitable; unknown responder advocated quality over quantity. Unresolved philosophical difference.

- **Cardano-Ergo Interop Status**: Question raised about Shelley compatibility (msg#44749); Kookster replied "No connection to Shelley" and "Won't be any possible interoperability until Goguen" but Goguen timeline itself TBD.

- **Emission Sustainability**: kushti's statement that emission "does not look aggressive at all" (msg#44163) sparked discussion but no detailed analysis provided in chat.

---

## Community & Ecosystem Notes

- **Anonymous Contributions**: High-value anons active — anon92048 (initial mixer, C++ background), anon2020s (mixer improvements, covert addresses), anon contributors on distributed signatures app. kushti proposed "PoW-based NFT monument" to honor anon contributors (msg#44322).

- **Cardano Connection Leverage**: Robert Kornacki (EMURGO Head of R&D, Ergo Foundation board member) positioned as bridge to Cardano ecosystem. Yoroi integration seen as key unlock for ADA holder adoption.

- **Developer Recruitment**: kushti actively mentoring entry-level developers; internship opportunities offered for students. Discord dev chats emphasized as central coordination (Wednesdays 1PM UTC).

- **Price Action**: Week showed sustained recovery from 2000 sats (earlier) → 5000 sats (resistance broken by msg#44120) → 5300+ sats (closing range). Discussion of hidden orders, market maker bots, and suppression walls on HotBit. Community concern about low liquidity justified by ~$132K-$1.3M daily volume range.