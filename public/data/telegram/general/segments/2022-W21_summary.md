# Ergo General Chat — 2022-W21 Summary

## Key Topics Discussed

- **EIP-27 Activation & Emission Reduction**: EIP-27 was locked in and activated at block 777,272 (approximately June 21st). This represents a soft fork handled through governance, with emission reduced by 20%. The remainder of supply will be sent to a reemission smart contract.
  
- **Ledger Hardware Wallet Support**: Nautilus wallet gained Ledger Nano S support (finalized, side-loadable). Ledger Nano X support awaits approval from Ledger HQ, expected within a few weeks.

- **Palmyra & Dan Friedman's Commodity Trade Finance Initiative**: Dan Friedman publicly presented ZenGate (Palmyra's decentralized trade financing component), targeting Sri Lanka and Eastern Europe. The project uses Chainlink oracles, IoT sensors, and on-chain warehouse receipts for proof of reserve in commodity financing. Three sub-projects were introduced: ComDex (most developed), and other infrastructure pieces still in research phase.

- **ErgoMixer Privacy & Premine Concerns**: Community discussion clarified that less than 1.5M ERG has ever been mixed through ErgoMixer. Proof of no premine is verifiable on-chain; mainnet launched July 2019 with 93.4M ERG for public mining and 4.3M for treasury.

- **Cold Wallet QR Code Complexity Issues**: User with 250+ boxes (fragmented UTXO set) encountered "cost exceeds limit 1000000" errors when trying to send 1600+ ERG via cold wallet, requiring 41+ QR codes. Root cause: transaction complexity tied to input box count, not ERG amount. Fix requires consolidation before cold device signing or splitting sends into smaller amounts.

- **Oracle Pools v1 & v2**: Two Oracle Pool instances operational—one run by the Foundation, one running for Dexy Gold with GORT rewards. Palmyra plans to invest in building out native Ergo oracles with improved security and tooling.

- **DeFi Infrastructure Progress**: Trade House (order book DEX), Spectrum (AMM), and Auction House contracts operational on-chain. Discussion of potential speed improvements (microblocks, sidechains, layer 2) deferred pending concrete application requirements.

- **ErgoScript & Zero-Knowledge Proofs**: kushti discussed bulletproofs for zero-knowledge statements, verification in ErgoScript, and potential for hybrid on-chain/off-chain contracts with privacy preservation. Groth one-out-of-many and Sigma protocols applicable to verifiable credentials.

- **Merge-Mined Sidechains**: kushti outlined sidechain construction possibilities with trustless pegging via smart contracts, emission rewards for mainchain miners delivering sidechain data. Work still being published to forum; BIP 301 comparisons discussed.

- **GetBlok Pool Milestone**: GetBlok achieved a significant hashrate migration test milestone (exact numbers not stated but framed as underestimated in impact).

---

## Important Decisions or Announcements

- [@glasgow|WON'T DM, msg#277843, 2022-05-25]: EIP-27 locked in and will activate at block 777,272 (~June 21st).

- [@Dan Friedman, msg#277900, 2022-05-25]: Publicly presented Palmyra/ZenGate initiative for decentralized commodity trade financing with Chainlink partnership.

- [@Chris Ray, msg#278231, 2022-05-27]: First loan proposal received for ErgoLend (Exle) from Kenya; webpage facelift nearly complete.

- [@glasgow|WON'T DM, msg#278177, 2022-05-27]: Ledger Nano S app finalized and side-loadable; Nano X awaiting Ledger app store approval.

- [@Unknown, msg#278041, 2022-05-26]: DeCo Layman class final presentations completed; ErgoScript course presentations scheduled for next day.

- [@Unknown, msg#278140, 2022-05-26]: GetBlok pool announced significant hashrate milestone (tweet link shared).

- [@Chris Ray, msg#278910, 2022-05-25]: EXLE/ERG trading pair went live on Spectrum DEX (ErgoPad announcement).

---

## Technical Q&A Worth Preserving

- **Q** (@Aatrox, msg#277487): How many ERG can cold wallet send? Attempted 1600+ ERG but required 41 QR codes and failed with "cost of transaction 1003959 exceeds limit 1000000" error.
  
  **A** (@MrStahlfelge, msg#277513–277515): The problem is box fragmentation, not ERG amount. A provider receiving many small transactions would accumulate many boxes; solution is to either consolidate to a hot wallet before cold transfer or use a file transfer mode (under consideration). Every input box increases QR code size; QR codes have ~3 KB limit.
  
  **Update** (@Aatrox, msg#277563–277565): Through testing, found maximum of 12 boxes can be sent in one cold wallet transaction (10 QR codes); 11+ QR codes triggers the error. Increasing transaction fee does not solve the issue.

- **Q** (@gg, msg#277669–277672): If SigmaUSD reserves fall below 100%, do SigmaUSD holders redeem but SigmaRSV holders lose everything? Can't redeem below 400% collateralization, only on Spectrum DEX.
  
  **A** (@TMR.ΣRG, msg#277670–277671): Correct—RSV holders take the loss first. However, SigmaUSD holders would likely redeem much sooner as reserves approach danger, improving reserves before complete collapse. Redemption limited to Spectrum DEX where liquidity is currently low.

- **Q** (@Shiv Chauhan, msg#278218–278227): Can Ergo function as a Bitcoin sidechain? Is there a project doing this already?
  
  **A** (@glasgow|WON'T DM, msg#278220–278222): Yes, it's possible but "yet to be explored." (@Unknown, msg#278228): Ergo giving utility to BTC has been a concept from early on; NIPoPoWs compatibility, Lightning Network integration, and ANETA are relevant. No existing Bitcoin sidechain identified in discussion.

- **Q** (@Stan, msg#278198): After sending POST request to testnet with transaction in body, received TX ID but balance didn't change and transaction never appeared. Will mainnet behave the same? Should transaction be manually pushed to mempool?
  
  **A** (@MrStahlfelge, msg#278199): Transaction can be submitted but discarded quickly if malformed (e.g., no fee). Recommend checking fee configuration.

- **Q** (@Fabulaowski, msg#278087–278099): Cardano has 24-word seed phrase, Ergo has 15. Why not longer phrases? Would extra words make wallet more secure?
  
  **A** (@glasgow|WON'T DM, msg#278089): 15 words = 160 bits entropy, which is sufficient. (@MrStahlfelge, msg#278091): Mobile app supports up to 100 words if desired. (@MrStahlfelge, msg#278101): Extra words only improve security if they have good randomness; if manually chosen or patterned, entropy actually decreases. (@Unknown, msg#278102): Humans are poor random generators; program-generated seeds are more secure than manually-selected word combinations.

- **Q** (@Fabulaowski, msg#278267–278270): Why is transaction confirmation taking 30+ minutes?
  
  **A** (@Gazza, msg#278268): Block time averages 2 minutes but can be longer or shorter; half-hour delays are within normal variance for a few blocks.

- **Q** (@Unknown, msg#278451–msg#278458): For solo ERGO mining, does renting hashpower provide better returns? Is it "set and forget" like pool mining?
  
  **A** (@glasgow|WON'T DM, msg#278457): Renting hash is usually more expensive than just buying the coins outright. Solo mining is viable but not significantly different from pools—both require patience.

---

## Links Shared

- [https://github.com/aragogi/Stealth-doc]: ErgoHack 3 winner—stealth addresses implementation (requires follow-up on current status).

- [https://twitter.com/luigi_mara/status/1528662159969992704]: Community poll on Ergo raffle refunds after venue cancellation in Sardinia.

- [https://ergoitaly.it/sigmaverse]: Sigmaverse Italian language version.

- [https://ergonfts.org/]: Ergo NFT marketplace.

- [https://github.com/gnuion/ergofund-frontend]: Abandoned frontend for ErgoFund (suggested for community contribution).

- [https://www.youtube.com/watch?v=OUjxar1WCmo]: Detailed NIPoPoWs discussion (recommended reference).

- [https://twitter.com/NautilusWallet/status/1528240330591547392]: Ledger Nano S support announcement with GIF.

- [https://crypto.news/sigusd-ergo-algorithmic-stablecoin-crypto/]: SigmaUSD explainer article.

- [https://twitter.com/NightOwlCasino/status/1529162719026454531]: Night Owl Casino dApp announcement (likely feature release).

- [https://youtu.be/u_mrCC-xziU]: GetBlok & Comet pool announcement (duration/details not provided in chat).

- [https://twitter.com/QingTranslator/status/1529319159481323520]: wCCX (wrapped concealed messages) ErgoDex listing discussion.

- [https://youtu.be/KUg2Zee4EmE]: Dan Friedman background/journey video (referenced for context on Palmyra vision).

- [https://golfgl.de/ergopayshowcase/#burn-token]: Token burn address/utility reference.

- [https://safew.io/]: SafeW wallet (mentioned for burn mode functionality).

- [https://docs.google.com/forms/d/e/1FAIpQLSchi75ju9oajbov3sYC_q2bmI9yiR6x2oQmVU6WGMAEcfXiRQ/viewform]: Community survey (context not specified in chat).

- [https://ergoplatform.org/en/discover/#Documents]: Ergo research papers and documentation index.

- [https://www.youtube.com/watch?v=5bhlaprXqYc]: Video linked by glasgow (context not specified; likely recent development update).

- [https://ergoauctions.org/#/auction/active?type=all]: Ergo NFT auctions marketplace.

- [https://www.skyharbor.io]: SkyHarbor Ergo NFT marketplace (recommended for newcomers; vetted collections).

- [https://t.me/ErgoNFTs]: Ergo NFT community Telegram (for artist information and sales).

- [https://t.me/NautilusWallet]: Nautilus Wallet support Telegram.

- [https://twitter.com/ergoplatformorg/status/1529591424651436032]: Ergo Foundation announcement (context not detailed in chat).

---

## Unresolved Questions

- **Stealth Addresses Status**: ErgoHack 3 winner produced stealth address documentation, but implementation status unclear—CW noted needing to "read up on the latest."

- **Second T1 CEX Listing Timing**: Multiple users asked for ETA on second major exchange listing. Answer: "all in the hands of the exchange now"; integration underway but no firm date given (could be May or June 2022, no certainty).

- **Merge-Mined Sidechain Construction**: kushti indicated sidechain work "still being published to forum" with ongoing discussions about micro-blocks vs. layer 2 vs. sidechains as speed improvement path. No concrete proposal or timeline provided.

- **Oracle Pools Native Ergo Build**: Dan Friedman indicated plans to invest capital in building out Ergo-native oracles with tooling, but no timeline or resource allocation specifics provided.

- **Fee Market & Mempool Spam Handling**: Discussion of spam attack vectors (DDoS, low-fee transactions, mixers) identified mitigation strategies (fee estimation API, mempool filters, reference client spam limits) but noted that fee estimation API "is not even tested" and not used by applications.

- **Cold Wallet Fragmentation Long-Term Solution**: MrStahlfelge committed to adding an error message before QR codes are shown (rather than after signing) and considering automatic consolidation on every transaction, but no implementation timeline provided.

- **Bitcoin Sidechain/Layer 2 Potential**: kushti confirmed it's "possible" but "yet to be explored" with no roadmap or active development team assigned.

- **Speed Improvements (Faster Blocks/Microblocks)**: kushti deferred concrete discussion of block time reduction, citing need for concrete application requirements first and noting security implications of timestamp-based contracts. A testnet is set up but "needs somebody to lead it"—open for community participation.

- **Palmyra ComDex Development Phase**: Dan indicated ComDex is "most developed" of Palmyra sub-projects, but specific implementation details, testnet availability, or launch dates not provided beyond "more information to come."

---

## Notable Community Dynamics

- **Scammer Impersonation Wave**: Multiple reports of fake accounts impersonating Noah, Gazza, and other community members in DMs offering trading or wallet help. Community developed informal verification via Gazza's signature GIF responses.

- **EIP-27 as Governance Success Story**: Community emphasized that soft fork activation via governance during bear market is noteworthy—"in bear market you appreciate such things and keep building."

- **Miner Migration Expectations Mixed**: Discussion of Ethereum merge impact on GPU hashrate migration to Ergo. Some pessimism ("SOAT migration test is absolute flop") but acknowledgment that profitability-driven mining is rational; miners may trade-mine ETH→ERG instead of direct mining.

- **Cold Wallet UX Problem**: Fragmented UTXO distribution created practical pain point for users; identified as systemic issue for service providers receiving many micro-transactions, flagged for protocol/wallet-level solutions.