# Ergo General Chat — 2023-W35 Summary

## Key Topics Discussed

- **Spectrum Bloom (eUTXO-native DeFi framework)**: kushti announced Spectrum Bloom as a sustainable framework for decentralized finance on Cardano and Ergo, emphasizing true eUTXO potential, improved user experience, and MEV elimination. Whitepaper released for review.

- **MEXC Exchange Listing Fundraiser**: Community initiated $50K fundraiser for MEXC listing (ranked top 10 by volume). Debate emerged about whether ERG or USDT should be accepted; Alephium accepted USDT only to avoid sell pressure. Discussion highlighted concerns about exchange dumping on new listings.

- **Bitpanda Raffle Success**: Raffle funding for Bitpanda listing was completed; kushti indicated contact expected within days. Perceived as higher-value target than MEXC due to fiat on-ramp capability for non-KYC users in EU.

- **SigmaFi Bonds & Lending**: Multiple users explored P2P bond lending and collateralized borrowing. Discussed high-APR loan opportunities (35%+), collateralization ratios, and risk profiles compared to liquidity pools. Users noted early repayment behavior and strategy for stablecoin acquisition during bear market.

- **DuckPools Liquidation Mechanics**: Clarified liquidation thresholds—125% for standard pools, 140% for Quacks pool. Noted that documentation on the DuckPools website lacks clarity on these critical parameters.

- **Trade House / Order Book DEXes**: qx() explained significance of order book DEXes (Trade House, Auction House) vs AMMs—full transparency of depth/liquidity, precise slippage control, no impermanent loss, and better for discretionary traders. Compared favorably to Serum on Solana.

- **Speed & Scaling Improvements for Ergo**: kushti opened discussion on faster block times and layer 2 solutions. Noted that increasing block speed affects contracts tied to block height vs timestamp. Proposed testnet for community experimentation with parameters. Cautioned that without concrete application workloads, optimization is premature.

- **Siderchain & Merge-Mining Design**: Discussions on sidechains, improved sidechaining via trustless relaying (BIP 301 style), and merge-mining opportunities. Publications expected on forum soon. Contrast with Bitcoin's less clear security model.

- **Nautilius Wallet & ErgoExplorer**: Comparison between official Ergo Explorer (slow address search) and community ErgoExplorer (better UX, faster). Discussion of search functionality—official explorer lacks client-side address validation. Aberg recommended ErgoExplorer for address lookups.

- **Ergo Foundation Treasury & Runway**: Glasgow clarified EF has sufficient funds for ~3 years of operations (payments mostly in ERG, not liquidated). Additional income from project donations (SPF, others). Transparent multisig address shared: `2BggBDgr9n...` visible on ErgoExplorer.

- **Catalyst Fund 10 (Cardano)**: Community mobilized to vote on Ergo-related proposals: Paideia (DAO toolkit), Spectrum Network, zenGate/Rosen Bridge (SPO revenue), Djed Alliance (SigmaUSD/Gluon). Bruno compiled comprehensive list of voting links.

- **GreasyCEX Mission #2 (Greasy Royale)**: GCX released impact report for Mission #1 (2.2K ERG raised, 1.4K to Bitpanda, 2.5K HodlERG3 burned). Mission #2 in planning with NFT allocations, sponsorship opportunities, and "top secret functionality."

- **Paideia & Crux Finance Development**: Luivatra noted Crux MVP launched faster than expected (portfolio, token list, dynamic charts); Paideia delayed ~1 week due to backend/frontend coordination overhead. Crux built lean—no smart contracts, only frontend/backend work.

- **Satergo Wallet Updates**: Aberg confirmed latest Satergo v1.6.0 supports light nodes via NIPoPoWs. Reported slow sync issue being debugged (logs provided to kushti). ErgoExplorer praised for superior UX.

- **ZenGate / Palmyra & Trade Finance**: Dan (via Armeanio) discussed Chainlink partnership for proof of reserve and on-chain warehouse receipts. Proposed IoT sensors (cameras, weight sensors) for continuous commodity auditing. Emphasized not zero-sum game with oracles; plan to build out native Ergo oracles. Oracle Pool v1 (EF + external) and v2 (Dexy Gold with GORT rewards) in operation.

- **Mining & Autolykos Stability**: Multiple mentions of NiceHash concern (short-term hash rental, sell pressure). Community consensus: no significant hash on NiceHash currently; economically irrational attack given exit liquidity constraints. Foyaz Sheikh raised concerns about network security under bear market; R countered with hash rate math and economic incentives.

- **Bulletproofs & Zero-Knowledge Protocols**: kushti explained bulletproofs as trustless alternatives to SNARKs for range proofs and generic statements. Verification via ErgoScript enables hybrid contracts combining proofs with on-chain logic—powerful for privacy-preserving and data-sensitive contracts.

## Important Decisions or Announcements

- [@kushti, msg#425490, 2023-08-28]: Ergo protocol reference client 5.0.14 released.

- [@kushti, msg#425704, 2023-08-29]: Spectrum Bloom framework announced—sustainable eUTXO-native DeFi on Cardano and Ergo. Whitepaper: https://spectrum.fi/spectrum_bloom_wp.pdf

- [@Ergo NEWS, msg#425892, 2023-08-30]: Mining AMA scheduled for Friday, Sept 1 at 1 PM UTC with kushti and Yevgenij Yurtsev.

- [@Ergo NEWS, msg#425922, 2023-08-30]: MEXC listing fundraiser announced ($50K target, community donation-driven).

- [@Glasgow, msg#426136, 2023-08-30]: New EF multisig for token allocations; first distribution heading to Sigmanauts soon.

- [@Armeanio, msg#425574, 2023-08-28]: Bitpanda integration in progress; stress testing underway.

- [@Richi, msg#426344, 2023-08-31]: Bitpanda contact expected within days (confirmed during AMA).

- [@Pulsarz, msg#426666, 2023-09-01]: Reference to spam/attack attempts; moderation confirmed no action needed (bots cannot pass verification).

- [@Luivatra, msg#426798, msg#426802, 2023-09-02]: Crux Finance alpha MVP launched; Paideia frontend slightly delayed but backend prioritized for resource efficiency.

- [@Ergo NEWS, msg#427360, 2023-09-03]: Weekly developer update published (Paideia, Crux, Rosen Bridge, Chain Cash, Sigma, Nautilus, THz.FM, Rest-API/UExplorer, GreasyCEX, Zengate).

## Technical Q&A Worth Preserving

- **Q** (@gg, msg#425786): When do DuckPools liquidate collateral?
  **A** (@qx, msg#425788-790): Liquidation triggered when collateral-to-loan ratio falls below threshold; watch for price movement and interest spikes. Auto-liquidation risk requires active monitoring. Thresholds: 125% standard pools, 140% Quacks (per @Unknown, msg#425792).

- **Q** (@Unknown, msg#425801): How does DuckPools collateral/borrowing compare to LENFI (Cardano)?
  **A** (@qx, implied; @Unknown confirms): Borrower locks overcollateralized asset, pays upfront fee + interest. ERG can continue yield farming while borrowed. Liquidation thresholds protect lender if asset price tanks.

- **Q** (@Velvia, msg#425827): Satergo won't sync with NIPoPoWs enabled.
  **A** (@kushti, msg#425828-832): Restart may help; logs requested for debugging. (@Aberg, msg#425880): If on latest version, issue likely in node, not wallet.

- **Q** (@Son Nguyen, msg#425520): How much is Ergo's current treasury?
  **A** (@Glasgow, msg#425530): Linked in EF 2022 transparency report.

- **Q** (@Unknown, msg#426532): Where to buy/sell bonds on SigmaFi?
  **A** (@Me, msg#426573): SigmaFi.App is on-chain P2P lending. Unlike DuckPools (pooled), bonds are between two individuals. Wallet always linked to loan; front-end shutdown doesn't affect repayment.

- **Q** (@Unknown, msg#426556): Risk comparison: bonds vs liquidity pools? Can use hardware wallet? What if SigmaFi shuts down?
  **A** (@Me, msg#426573-576): Bonds are very low risk from security perspective. Yes, Nautilus supports hardware wallets on SigmaFi. On-chain contracts ensure repayment even if front-end vanishes; collateral returns automatically.

- **Q** (@HelixEvo, msg#426516): Official Ergo Explorer is slow.
  **A** (@Aberg, msg#426517): Use ergexplorer instead (made by Aco). (@Pulsarz, msg#426542): Official search does full database scan instead of client-side address validation; sigmaexplorer implements smarter search.

- **Q** (@Pulsarz, msg#426523-533): Why is official Ergo Explorer search so slow?
  **A** (@Pulsarz, msg#426525-542): Could do client-side address validation (zero DB calls) before searching. Explorer data model doesn't scale; suggestion to verify addresses first, then route to `/address` page.

- **Q** (@Unknown, msg#426558): Is SigmaFi.App run by Ergo Foundation?
  **A** (@Luivatra, msg#426560): No; it's open source and community-run. You can run it yourself if needed.

- **Q** (@Unknown, msg#426703-712): Are Sigma Valley land NFTs legit? What was mint price?
  **A** (@Unknown, msg#426709): Flagged as risky; NFT collection unverified on SkyHarbor. Implicit caution against using unverified NFT collateral for large loans.

- **Q** (@Unknown, msg#426723): Preferred loan size/duration on SigmaFi?
  **A** (@Unknown, msg#426720): Prefers ERG loans, 12-18 month terms, up to 7500 ERG capacity. P2P bonds better psychologically than liquidity pools.

- **Q** (@F, msg#427249): How to view transaction history in Nautilus wallet?
  **A** (No direct answer in logs; implied: Nautilus has built-in TX history view).

## Links Shared

- [https://spectrum.fi/spectrum_bloom_wp.pdf]: Spectrum Bloom whitepaper (eUTXO-native DeFi framework).

- [https://docs.ergoplatform.com/ergo-foundation-2022/]: Ergo Foundation 2022 transparency report (treasury linked here).

- [https://ergohack.io/]: ErgoHack 7 announcement & project submission for upcoming hackathon.

- [https://sigmafi.app]: SigmaFi P2P bond lending and borrowing dApp.

- [https://ergexplorer.com/]: Community-built Ergo Explorer (faster, better UX than official).

- [https://cardano.ideascale.com/c/idea/103022]: Paideia—DAO management software (Catalyst Fund 10 proposal).

- [https://cardano.ideascale.com/c/idea/103037]: zenGate x Rosen Bridge—SPO revenue (Catalyst Fund 10 proposal).

- [https://cardano.ideascale.com/c/idea/106402, /106392, /106377]: Spectrum Network proposals (Catalyst Fund 10).

- [https://cardano.ideascale.com/c/idea/102821, /c/idea/107106]: Additional zenGate proposals (Catalyst Fund 10).

- [https://cardano.ideascale.com/c/idea/105933]: Djed Alliance proposal—SigmaUSD, SigmaGold, Gluon (Catalyst Fund 10).

- [https://youtu.be/VM97CCoFseg]: Ergo Platform weekly AMA livestream (Aug 31, 1 PM UTC).

- [https://youtu.be/d9Sf-TVoHKI]: Weekly developer update (Sept 3).

- [https://vxtwitter.com/SpectrumLabs_/status/1696235144095359468]: Spectrum community post (referenced in chat).

- [https://bit.ly/45sFOfV]: MEXC listing fundraiser details.

- [https://bit.ly/45OK2OD]: Spectrum Catalyst Fund 10 proposal link.

- [https://github.com/Eeysirhc/sigmabot/pull/79]: Sigmabot PR (translation/bot improvements).

- [https://github.com/pulsarz/sigmaexplorer/]: SigmaExplorer repository (alternative explorer).

## Unresolved Questions

- **MEXC Listing Timeline & Currency**: Clarification needed on whether MEXC will accept ERG or require USDT. Community concerned about 50K ERG sell pressure vs Alephium's USDT-only approach.

- **Satergo NIPoPoWs Sync Issue**: Root cause of slow sync with light nodes enabled still being debugged; logs sent to kushti but no resolution confirmed by week's end.

- **Block Speed & Contract Compatibility**: If block time is decreased, which contracts depend on block height vs timestamp? Full audit needed before implementation.

- **Ergo Foundation Runway Precision**: Glasgow stated ~3 years; Pulsarz calculated 5-6 months under current burn rate. Discrepancy unclear (possibly difference in burn estimate or use of project donations).

- **EF Multisig Token Allocation**: Initial allocation to Sigmanauts confirmed, but full allocation schedule and amounts TBD.

- **SigmaFi Loan Default Mechanics**: If borrower defaults and collateral is seized, how/when does lender receive it? Smart contract auto-execution implied but not explicitly confirmed.

- **Rosen Bridge Cardano Integration Timeline**: When will ERG↔ADA swaps be live on Spectrum Fi (or other DEX)?

- **NIPoPoWs vs Full Sync Trade-offs**: Light node adoption benefits vs any security/latency trade-offs not fully explored.

---

**Notes:**
- Price discussion filtered out (predominantly sub-$1 bear market sentiment).
- Off-topic banter, memes, and personal discussions (e.g., Indonesia vs Western dating culture) excluded.
- Moderator warnings (qx to Yulius) noted but not expanded.
- Community health: Active development despite bear market; strong emphasis on transparency from EF and project teams.