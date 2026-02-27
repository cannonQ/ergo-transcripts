# Ergo General Chat — 2021-W17 (April 26 – May 2, 2021)

## Key Topics Discussed

- **Cardano metadata and regulatory concerns**: Discussion around Cardano's ability to attach metadata to transactions and interoperability with permissioned ledgers. Some community members raised concerns about potential regulatory capture; others clarified that optional metadata doesn't compromise the base layer's permissionlessness and that Cardano aims to support both regulated and unregulated use cases.

- **ErgoDEX development progress**: Core contracts nearing completion, UI development started. Aiming to launch on Ergo first, then be available on Cardano from Alonzo launch. Project Catalyst proposal submitted for Plutus port. No separate token needed; possible governance token for contract updates managed by community members. Expected timeline: 1-2 months for Ergo launch, 3-4 months for full UI if Catalyst funded.

- **Oracle pool architecture**: Ergo oracle pools use multi-stage contracts with hierarchical trust scores rather than token staking. Bad oracles receive low trust scores and no fees. ADA/USD oracle pool was deprecated after testing phase; ERG/USD pool remains active. Discussion of advantages over Chainlink including Link drain prevention and suitability for UTXO chains.

- **SigmaUSD/SigRSV mechanics**: Community explanations of how the stablecoin protocol works, reserve ratios, redemption mechanisms, and risks. SigRSV holders exposed to volatility but can profit when reserve ratio is healthy. Large "bearwhale" holder continues to influence dynamics.

- **Exchange issues and listings**: Hotbit suffered cyberattack, all wallets disabled for 7-14 days recovery; team confirmed funds are safe. BitMart showed artificially high ERG price ($17-70) due to disabled deposits/withdrawals causing isolated market. Gate.io and CoinEx recommended as most reliable current options. Business development team in discussions with larger exchanges under NDA.

- **Manifesto release**: Ergo Manifesto published emphasizing cypherpunk values, fair launch principles, resistance to money weaponization, and contrast with CBDCs. Well-received by community as articulation of project philosophy.

- **Mining and emission schedule**: Ergo emission curve continues for ~6 more years from 2021. Storage rent mechanism designed to sustain network security after primary emission ends. No halving events; smooth emission curve with tail emission considerations.

- **NFT minting and auctions**: Community members actively minting NFTs and using Ergo Auction House. Discussion of how to verify NFT media integrity, custody practices, and limitations of current metadata/preview systems.

## Important Decisions or Announcements

- [@Armeanio, msg#123064, 2021-04-27]: New ErgoForum category created specifically for community guides and tutorials at https://www.ergoforum.org/c/community-tutorials/16. Video contest ongoing through mid-May.

- [@Glasgow｜WON'T DM, msg#122922-122929, 2021-04-26]: FAQ and deep-dive resources consolidated at https://www.reddit.com/r/ergonauts/comments/mye6xh/faq/ and https://thecryptodrip.com/ergo-deep-dive/

- [@kushti, msg#124567, 2021-04-30]: Announced Ergo.Meta framework for unified design patterns for off-chain and sidechain solutions via Twitter.

- [@Glasgow｜WON'T DM, msg#123091, 2021-04-27]: Ergo Manifesto published at https://ergoplatform.org/en/blog/2021-04-26-the-ergo-manifesto/

- [@kushti, msg#123653, 2021-04-28]: Blog post comparing Chainlink oracles vs Ergo oracle pools published at https://ergoplatform.org/en/blog/2021-04-27-chainlink-oracles-vs-ergo-oracle-pools/

- [@Armeanio, msg#124124-124127, 2021-04-29]: Reached out to BitMart contact regarding deposit/withdrawal issues affecting community members.

- [@Klaus, msg#125143, 2021-05-01]: Marketing director Angie Har hired by Ergo Foundation at end of March/beginning of April from treasury funds.

## Technical Q&A Worth Preserving

- **Q** (@multiple): How does SigmaUSD reserve work and what are the risks?
  **A** (@Glasgow｜WON'T DM, @DD RUFF, @Kallo Shaman, msg#124474-124495): SigmaUSD provides stable value; SigRSV absorbs volatility. Main SigRSV risk is inability to redeem when reserve ratio drops below 400%. LP risk is impermanent loss on CoinEx AMM pools. Bearwhale dynamic creates redemption challenges.

- **Q** (@multiple): What's the timeline for ErgoDEX launch?
  **A** (@Glasgow｜WON'T DM, @Dmitry Usov, msg#123294-125404): Core contracts essentially complete, UI development started. Aiming for 1-2 months on Ergo, will be live on Cardano when Alonzo launches. 3-4 months for full UI if Catalyst proposal funded. Will feature both AMM and order book with shared liquidity.

- **Q** (@Team Team, msg#123336-123361): How do oracle pools incentivize good behavior without staking?
  **A** (@Glasgow｜WON'T DM, msg#123361): Uses multi-stage contracts to create hierarchical trust scores. Incentive is the fee for oracle service. Bad oracles get low trust scores and no fees; no upfront staking required.

- **Q** (@btt, msg#124541-124568): Why would Cardano need multiple oracle solutions (Ergo, Wolfram, Charli3, etc.)?
  **A** (@Glasgow｜WON'T DM, msg#124569): Cardano's approach is to have multiple oracle providers and let developers choose based on quality, needs, and trust scores. Competition drives quality.

- **Q** (@Brandon, msg#125136): Do exchanges require ERG reserves upfront for listings?
  **A** (Unresolved in this period, but noted as question about listing mechanics)

- **Q** (@Jim James, msg#125378): Will ErgoDEX on Cardano directly impact ERG value?
  **A** (@Kallo Shaman, msg#125380): Successfully implemented oracles and DEX should greatly increase ERG price through utility and demand.

- **Q** (@ChRoNiC, msg#125442-125461): Ergo wallet not sending transactions, shows ID but no network confirmation.
  **A** (@Glasgow｜WON'T DM, msg#125448-125454): Community-made wallet issue. Import seed words into Yoroi browser extension to recover funds. Change addresses may not show up immediately in Yoroi but funds are accessible.

## Links Shared

- [https://ergoplatform.org/en/blog/2021-04-26-the-ergo-manifesto/]: Ergo Manifesto articulating cypherpunk values and project philosophy
- [https://ergoplatform.org/en/blog/2021-04-27-chainlink-oracles-vs-ergo-oracle-pools/]: Technical comparison of Chainlink oracles vs Ergo oracle pools
- [https://thecryptodrip.com/ergo-deep-dive/]: Comprehensive deep dive article on Ergo platform
- [https://ergonaut.space/ergodex.pdf]: ErgoDEX technical whitepaper/roadmap
- [https://cardano.ideascale.com/a/dtd/ErgoDex-Plutus-Port/352410-48088]: Project Catalyst proposal for ErgoDEX Plutus port
- [https://www.ergoforum.org/c/community-tutorials/16]: New forum category for community tutorials and guides
- [https://github.com/Emurgo/yoroi-ergo-connector]: Yoroi-Ergo dApp connector repository for JavaScript integration
- [https://github.com/ergoplatform/eips/pull/23]: EIP pull request for dApp connector specification
- [https://explorer.ergoplatform.com/en/oracle-pools-list]: Live oracle pools list on Ergo Explorer
- [https://sigmausd.io/#/]: SigmaUSD stablecoin interface
- [https://youtu.be/QcNZYhAa2xU]: Video explaining Cardano and Ergo relationship
- [https://youtu.be/R9oGODRlluk]: Tutorial video covering Ergo basics and wallet setup
- [https://ercwl.medium.com/whats-wrong-with-the-chainlink-2-0-whitepaper-for-simpletons-d50f27049464]: Critique of Chainlink 2.0 whitepaper

## Unresolved Questions

- **Emurgo oracle pool status** (msg#125374-125408): ADA/USD oracle pool no longer appears in explorer list. Confirmed as deprecated after testing phase by @Marek M, but broader implications for Emurgo/Cardano oracle collaboration unclear.

- **ErgoDEX governance token** (msg#125030-125040): Conflicting information about whether ErgoDEX will have a token. @Glasgow clarified no token needed for operation, possible governance token for contract update council, but full tokenomics not detailed.

- **Charli3 relationship** (msg#125192, 125338-125347): Community questions about "first decentralized oracle on Cardano" claim by Charli3 project and how it relates to Ergo oracle pools. Competitive positioning unclear.

- **Exchange listing timeline** (msg#124186-124187, 125069-125077): Kucoin rumored but no confirmation. Team in discussions with "large exchanges" under NDA per previous announcements. Community debate about whether Binance listing would be beneficial at current stage.

- **BitMart deposit/withdrawal status** (msg#125133, 125173, 125375): ERG deposits and withdrawals suspended on BitMart causing artificial price discrepancies. No resolution timeline provided despite multiple inquiries.

- **Marketing strategy execution** (msg#125137-125156): Tension between organic growth philosophy and need for awareness. Angie Har hired as marketing director but strategy/deliverables not yet publicly detailed. Community self-organized in @ergosocials channel but guidelines/coordination unclear.

- **Hotbit recovery timeline** (msg#124947-125550): Hotbit claimed 7-14 days for recovery from cyberattack. Community uncertain about actual timeline and whether to continue using exchange after recovery.