## Key Topics Discussed

- **Ergo Oracle Pools and Cardano Compatibility**: Extended discussion clarified that Ergo Oracle Pools are not currently compatible with Cardano mainnet due to Cardano's lack of read-only data inputs (data inputs). Ergo added data inputs to solve the problem of burning UTXOs when reading external data. A workaround exists via metadata slots (nut.link implementation) but is inefficient. Cardano may add read-only inputs in future iterations post-Alonzo launch, which would enable native Ergo Oracle Pool integration.

- **ErgoDEX Development Milestone**: Basic AMM contracts successfully ported to Plutus (Cardano's smart contract language). Code committed to GitHub showing progress toward cross-chain DEX functionality. Initial Ergo-side launch expected this month (July 2021), with Cardano integration planned after Alonzo mainnet launch.

- **SigmaUSD/SigRSV v1 Token Issues**: Multiple users reported issues with v1 reserve coins (SigRSV) unable to redeem due to empty reserve. CoinEx had delayed sending v1 tokens for months; when finally returned, reserve was depleted. Armeanio manually facilitated exits by minting v1 SigmaUSD to temporarily increase reserve ratio. Discussion of relaunching v1 contract with new oracle to solve lingering redemption issues.

- **Ledger Hardware Wallet Support Delays**: Developer (Tesseract/Yehor) reported significant delays fighting with Ledger SDK, compiler settings, BOLOS compatibility, and poor documentation. Build environment setup consumed the week's work; actual Ergo-specific code not yet written. Timeline appears to be months rather than weeks from completion.

- **Tip Bot Functionality Issues**: Multiple reports of tip bot transactions not completing or taking extended time. Investigation suggested node issues or mempool problems. Bot functionality restored after troubleshooting, but intermittent issues persisted throughout the week.

## Important Decisions or Announcements

- [@glasgowm, msg#164660, 2021-07-17]: "ErgoDEX recently passed a major development milestone. The basic AMM contracts have been successfully ported to Plutus. ErgoDEX is committed to transparency and open code." Code available at https://github.com/ergolabs/cardano-dex/blob/develop/src/Proxy/Contract/OnChain.hs

- [@Armeanio, msg#164428, 2021-07-16]: CoinEx announced new official policy to never support non-native assets after extended effort to return mistakenly sent SigRSV/SigmaUSD tokens. Warning added to deposit interface.

- [@Armeanio, msg#164455, 2021-07-16]: Yoroi multi-stage verification warning for "send all" button expected to go live in coming weeks to prevent users accidentally sending tokens to unsupported addresses.

- [@Angie H, msg#164659, 2021-07-17]: Published How-To Guide for ergoutils.org covering visual/audio NFT minting and custom token creation.

- [@Armeanio, msg#163162, 2021-07-14]: All four announced exchanges (Changelly, Changelly Pro, Bitcoin.com, plus unnamed tier-1) actively working on ERG integration with no concrete launch dates yet.

## Technical Q&A Worth Preserving

- **Q** (@Bowser): In the Oracle Pools are fees paid in ERG, i.e. will it create additional demand for the token?
  **A** (@Lorem, msg#164776): ErgoDEX will require ERG/ADA collateral to mint SigmaUSD. Oracle Pools built on Ergo, so fee collectors will likely want payment in ERG. DEX will drive token demand; Oracle Pools very likely will as well.

- **Q** (@user): Can Ergo Oracle Pools work with Cardano?
  **A** (@Ilya Oskin, msg#163557): Ergo Oracle Pools aren't compatible with Cardano. (@Glasgow, msg#164143): Cardano can't read external input without burning a box. Ergo added data inputs to solve this; Cardano lacks this feature currently.

- **Q** (@Rpalet, msg#164593): Why can't I redeem my SigmaRSV to ERG?
  **A** (@Armeanio, msg#164426-164431): V1 reserve nearly empty due to delayed CoinEx returns. Will manually mint v1 SigmaUSD to temporarily increase reserve ratio and facilitate exit. PM for coordination.

- **Q** (@Kelvin A.): Is it possible to stake Ergo?
  **A** (@.Mtt, msg#164813): Staking no, but providing liquidity and earning from it yes. Available on CoinEx and coming to ErgoDEX this week.

- **Q** (@user): What is "ported to Plutus"?
  **A** (@Armeanio, msg#164670): In software engineering, porting is adapting software to achieve the same function in a different environment than originally designed. (@Glasgow, msg#164667): Plutus is Cardano's smart-contract language based on Haskell.

- **Q** (@Buccoooo): Should I create a new wallet after entering CoinBarn seed into Yoroi?
  **A** (Implied best practice): Yes, if seed phrase was entered into any web interface, consider it potentially compromised and migrate funds to fresh wallet.

## Links Shared

- [https://github.com/ergolabs/cardano-dex/blob/develop/src/Proxy/Contract/OnChain.hs]: ErgoDEX Plutus contract code showing AMM implementation ported to Cardano
- [https://ergoplatform.org/en/blog/2021-07-13-updated-2021-roadmap-from-kushti/]: Updated 2021 roadmap from kushti covering node improvements, sub-blocks, faster confirmations, sidechains, and Yoroi dApp connector
- [https://ergoplatform.org/en/blog/2021-07-14-why-choose-crypto-blockchain-a-better-way-to-bank/]: Article on blockchain as alternative to centralized banking
- [https://ergoplatform.org/en/blog/2021-07-16-ergoutils-a-how-to-guide/]: Guide for minting visual/audio NFTs and creating custom tokens using ergoutils.org
- [https://cardanoupdates.com/docs/255f71e1-458d-47e2-8504-3f25c729b44e]: Robert Kornacki's article explaining data inputs and why Cardano lacks efficient oracle implementation
- [https://nut.link/]: Current Cardano oracle implementation using metadata slot workaround (inefficient, burns UTXOs)
- [https://veriumfellow.medium.com/what-will-ergo-bring-to-cardano-2f7ae911a9bd]: Article explaining Ergo-Cardano relationship and planned integrations
- [https://github.com/NazeriMahdi2001/Raffle-Doc]: ErgoHack project implementing raffle/50-50 contracts with documentation
- [https://ergodex.io/]: ErgoDEX website with team info and roadmap
- [https://moonboymerch.com/collections/peppers-x-moonboy-merch]: First business accepting ERG as payment (Moonboy Merch apparel)
- [https://gridsourced.com/defi/ergo/]: Interview with Armeanio covering Ergo's DeFi vision and roadmap

## Unresolved Questions

- **Exchange Listings**: Fourth unnamed "tier-1/top-10" exchange still not revealed. Integration testing ongoing for all four announced exchanges (Changelly, Changelly Pro, Bitcoin.com, plus unnamed) with no concrete launch dates.

- **ErgoDEX Launch Date**: "Initial launch this month" (July 2021) stated but no specific date. Unclear if referring to beta/testnet or mainnet launch. Full Cardano integration dependent on Alonzo mainnet and Yoroi dApp connector completion.

- **Ledger Support Timeline**: Development environment setup consumed week's work; actual implementation not yet started. No revised timeline provided beyond "delays happen in development."

- **Oracle Pool Economics**: Debate about whether oracle data consumers will pay fees in ERG vs. other tokens. Mechanism for cross-chain oracle fee payment not fully specified.

- **V1 SigmaUSD/SigRSV Future**: Discussion of relaunching v1 contract with new oracle to handle remaining stuck tokens, but no concrete plan or timeline announced.

- **Cardano Read-Only Inputs**: Whether/when Cardano will add data input functionality remains uncertain. IOHK has not committed to implementing this feature despite it being necessary for efficient oracle integration.