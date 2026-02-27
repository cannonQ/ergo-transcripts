# Ergo General Chat — Week 38 Summary (2025-09-15 to 2025-09-21)

## Key Topics Discussed

- **Sub-blocks and network performance**: kushti confirmed work on 6.0 activation and sub-block development. Discussion around block time reduction, timestamp/block height dependencies, and the trade-offs between faster confirmations and security considerations. Community showed interest in running testnets to experiment with parameters.

- **HTX delisting and exchange extortion**: HTX Global delisted ERG (along with AZERO, KMD, FIRO) under suspicious circumstances. Armeanio gathered evidence of bribery attempts ($100K demanded to avoid delisting), triggered by low-volume claims despite adequate spread and MM requirements. Multiple affected projects (Firo, Komodo, Vemp) reported similar treatment. Armeanio filed formal complaint with Monetary Authority of Singapore (MAS) and compiled findings on GitHub.

- **USE (Dexy USD) stablecoin launch**: New oracle pool and USD pricing mechanism in development instead of updating the legacy SigmaUSD pool. ChainCash-based options planned for future. Richi and Armeanio discussing capital efficiency, v3 concentrated liquidity, and Aerodrome partnerships. Group established at https://t.me/USE_stablecoin.

- **Rosen Bridge cross-chain integration**: Discussed as alternative to centralized exchanges. Plans to integrate with Komodo DEX, Cosmos/Osmosis, Cardano (Splash/Danogo leverage trading), and Bitcoin Lightning Network compatibility. Watchers and guard set governance via Paideia DAO. Potential expansion to Nervos and other ecosystems.

- **Ergo as partner chain to Cardano**: Charles Hoskinson mentioned potential merge-mining partnership structure. Discussions around interoperability benefits, liquidity pooling, and using Rosen Bridge to access multiple chains simultaneously. Link to leverage trading possibilities via Strike Finance on Cardano.

- **Mining and ecosystem sustainability**: CryptoxInfant raised concerns about break-even mining conditions (4-year loss sustained only by heat recovery). Discussion of liquidity crunch from exchange losses (TradeOgre ~163K ERG seized by Canadian law enforcement, HTX losses). Suggestions for mining pool setups and Sigmanauts pool support.

- **Chaincash and LETS (Lithos)**: Grayman exploring SilverCents (junk silver tokenization) as real-world collateral. Discussion of commodity-backed money vs. consumables (silver consumption industry problem). EC Riegel's trading circles ideas referenced as foundational to ChainCash design.

- **Ergo onboarding and swapping challenges**: Multiple users reported high fees on Rosen Bridge ($10+ minimum), Banxa server errors, and complexity for retail. Discussion of simpleswap as cheaper alternative. Need for debit card integration on Rosen, direct DEX API linking, and Cosmos IBC integration for cheaper settlement.

- **CEO/founder podcast proposal**: kushti proposed monthly podcast with industry figures (Yonatan Sompolinsky, Charles Hoskinson, Adam Back) to expand reach. Discussion of Satoshi Nakamoto identity (kushti examined C++ code of 50+ candidates, believes 2-3 people involved, dismisses Adam Back theory).

- **Thailand translation and community expansion**: J.username. planning to translate Ergo Manifesto and documentation into Thai, employ local community, potentially organize university hackathon with prize money. J.username. also interested in Ayahuasca retreat payment in ERG model.

- **Komodo partnership revival**: The Legend Captain (LooTz) from original BPSAA era reconnecting Ergo, Komodo, Firo under "ENDtheCEX" banner. Proposed built-in DEX functionality in wallets, shared order books across chains, #ENDtheCEX movement. Next meeting Friday 2025-09-26 at 4 PM EST.

---

## Important Decisions or Announcements

- [@kushti, msg#574821, 2025-09-16]: Ergo Raffle fundraising for development completed; first 1,000 ERG bounty assigned to Sigma Rust issue #193. Spending plan to follow.

- [@kushti, msg#574852-#574866, 2025-09-16]: Confirmed v2 launch planned before perpetuals DEX integration on Cardano chains. Sub-blocks development to proceed.

- [@kushti, msg#575021, 2025-09-17]: USE group established; focus on capital efficiency through v3 concentrated liquidity and Aerodrome partnerships.

- [@Armeanio, msg#575163, 2025-09-17]: Filed formal notice to Huobi (HTX) and will file complaint with Monetary Authority of Singapore (MAS) regarding crypto-related misconduct, with findings to be published on GitHub.

- [@Armeanio, msg#575319, msg#575320, 2025-09-18]: Sent Rosen Bridge contribution standards to Komodo and BPSAA projects for review; inviting old ecosystem projects to integrate.

- [@Andy L, msg#574928 & msg#575043, 2025-09-16-17]: Weekly Community Chat continues Thursdays 13:00 UTC (replacing traditional AMA format). Zoom + YouTube live stream. Next session 2025-09-18 completed.

- [@qx() et al., msg#575258, 2025-09-18]: Community Chat concluded with positive feedback on discussion quality; marketing focus on Reddit/X engagement for HTX narrative.

- [@kushti, msg#575226, 2025-09-18]: Pushed for ERG promotion before CZ's involvement; community rallying on marketing initiatives.

- [@The Legend Captain, msg#575348-#575353, 2025-09-18]: KOMODO weekly show revival; kushti confirmed availability for appearance Friday 2025-09-26 at 4 PM EST to discuss Ergo and Rosen Bridge integration.

- [@MHS_SAM, msg#575465, 2025-09-19]: Cardano founder Charles Hoskinson article published calling Ergo "spiritual successor to Bitcoin" amid HTX controversy.

---

## Technical Q&A Worth Preserving

- **Q** (@HQΣr, msg#574944): Can subblocks lower transaction costs on Rosen Bridge for micro-transfers to enable micro-swaps directly in ERG on exchanges?
  **A** (@kushti, msg#575009, & discussion): Will provide detailed response on forum during developer chat; encouraged participation. Subblocks expected to improve throughput and fee economics.

- **Q** (@J.username., msg#575038): Can Rosen fees become dynamic based on traffic/demand?
  **A** (@Richi, msg#575039): Stablecoins require fixed low fees; trading fees on base protocol and other tokens can be variable per LP preference. Potential for v3 concentrated liquidity at 0.05% on USE/USDC pairs (Aerodrome).

- **Q** (@cannon_q, msg#575575): What is the federated guard set in Rosen Bridge?
  **A** (@cannon_q, msg#575664): Known entities/projects in Ergo ecosystem. See docs at https://docs.ergoplatform.com/eco/rosen/
  **A** (@Armeanio, msg#575665-#575670): Built, ran, and watched by community. Initially permissioned (bootstrap phase). Proof of work in governance sense—whoever sacrifices time/energy. New guards can be voted in via DAO.

- **Q** (@Shai Deshe, msg#575642): How does PoS bridging work?
  **A** (@cannon_q, msg#575650): Watchers stake RSN token + ERG to become reporters scanning transactions on participant chains. Federated guard set approves and releases wrapped tokens. Currently: Ergo, Cardano, Ethereum, BSC, Doge, Bitcoin. Runes testing live. Nervos exploring.

- **Q** (@Team Team, msg#575727): Do you support hardware wallets and are they safe?
  **A** (@cannon_q, msg#575729): Ledger supported; Keystone coming soon.

- **Q** (@iVacuum, msg#575417): What is blocking ERG integration with Strike on Cardano?
  **A** (@iVacuum, msg#575418): Liquidity. Seeking ADA holders or LP providers to meet TVL targets.

- **Q** (@DiscordBridge/CryptoxInfant, msg#575944-#575970): Why is Rosen Bridge economically inefficient for small swaps vs. centralized alternatives like SimpleSwap?
  **A** (@Affable Villain, msg#574967): Rosen Bridge isn't a swap service; should trade ADA for rsERG with far less price impact than 10%. Discussion flagged architectural questions about native ERG liquidity and fee structure.

- **Q** (@DrBlirpblorp/Shai Deshe, msg#575296 & podcast discussion): How does PoS differ from PoW in terms of economic incentives and sustainability?
  **A** (@cannon_q, msg#575609): PoS: rich get richer by maintaining stake (no further input cost). PoW: continuous hardware/software development required; new resource extraction every block. Fundamental difference in incentive structure.

---

## Links Shared

- [https://github.com/nautls/nautilus-wallet/pull/316]: Nautilus Wallet PR #316 with Javanese language support (Yulius Kristianto development update).

- [https://t.me/chaincashtalks]: ChainCash and Basis dedicated Telegram group.

- [https://t.me/USE_stablecoin]: USE (Dexy USD) stablecoin group (newly established).

- [https://ergoraffle.com/raffle/show/885e980940cefb415455495aa1e4bd52ea932d08cdef5200bd7928f84cdd59d2]: Ergo Raffle fundraising for development.

- [https://github.com/ergoplatform/sigma-rust/issues/193]: Sigma Rust bounty issue ($1,000 ERG).

- [https://www.kompasiana.com/chris45/68c833cec925c4475b170cb2/masa-depan-platform-ergo-kredit-dan-pembayaran-terdesentralisasi-dengan-chaincash-dan-basis]: Indonesian translation of Armeanio's medium article on Ergo, ChainCash, and Basis.

- [https://x.com/erg_armeanio/status/1967715210124574895]: Armeanio's political vs. apolitical money framing.

- [https://x.com/chepurnoy/status/1968246288073265604 & #1968796029504966751]: kushti's posts on sub-blocks and fractal pruning with UTXO set commitments/NIPoPoWs.

- [https://x.com/IOHK_Charles/status/1968352745531818380]: Charles Hoskinson on partner chains (Cardano).

- [https://x.com/ergo_platform/status/1968357748497858979]: Ergo Platform response/engagement post.

- [https://x.com/lopp/status/1968046030714442211]: Jameson Lopp on TradeOgre seizure.

- [https://www.therage.co/tradeogre-theft/]: The Rage coverage of TradeOgre seizure (163,564.46 ERG).

- [https://curiaregiscrypto.medium.com/empowering-communities-from-bitcoins-vision-of-decentralized-money-to-ergos-digital-credit-unions-44912fc798d8]: Armeanio's Medium article: "From Bitcoin's Vision to Ergo's Digital Credit Unions."

- [https://beyondmoney.net/2009/09/07/the-legacy-of-e-c-riegel/]: EC Riegel legacy and trading circles concept.

- [https://docs.ergoplatform.com/eco/rosen/]: Official Rosen Bridge documentation.

- [https://app.paideia.im/rosenguardsetv1]: Rosen Guard Set DAO on Paideia (open to public voting).

- [https://curiaregiscrypto.medium.com/demurrage-on-ergo-some-long-term-benefits-87fbb5b0f472]: Armeanio's Medium article on storage rent demurrage benefits.

- [https://x.com/danogofinance/status/1969759770480624111]: Danogo Finance (Cardano) leverage trading partner announcement.

- [https://fund.mewfinance.com/contribute]: MewFinance crowdfund for developer contributions.

- [https://youtu.be/eZXS8Jpkiac]: CannonQ YouTube link (context unclear from messages).

- [https://www.youtube.com/live/N989MASGm0M]: Dr. Blirpblorp (Shai Deshe) live podcast on PoS/PoW economics and Rosen Bridge (8+ hours).

- [https://youtube.com/live/R2wYw5lFP3Y]: Ergo Community Chat stream link.

- [https://thecryptobasic.com/2025/09/19/...]: "Cardano founder backs Ergo, calls it spiritual successor to Bitcoin amid HTX delisting."

- [https://coinmarketleague.com/coin/ergo]: CoinMarketLeague voting page (Ergo ranked #3 in week 37).

- [https://www.ergoforum.org/t/integrating-usps-approved-postal-providers-fedex-authorized-shipcenters-iot-and-decentralized-robots-for-enhanced-logistics/5238]: CryptoxInfant forum post on USPS/FedEx integration for logistics.

- [https://voltpay.store]: VoltPay on-ramp service (mentioned as superior to Banxa).

- [https://www.asterdex.com/en]: Aster DEX (CZ's perp DEX on BNB chain; potential rsERG listing).

---

## Unresolved Questions

- **Subblock parameters optimization**: Community expressed interest in running 6.0 testnet to gather scientific observations on block speed, difficulty, and emission effects. Leadership needed to coordinate test net participants and collate results. (@kushti flagged need for passionate volunteers; DM kushti to join).

- **Storage rent implementation details**: Discussion of garbage collection and dead UTXO cleanup mechanism, but no detailed technical spec shared in chat; linked to Alexander Slesarenko's engineering trade-off comments.

- **Komodo integration timeline**: kushti asked "what is Komodo up to these days?" and LooTz described revival under #ENDtheCEX banner with built-in DEX in wallet. No concrete timeline or API/technical spec for Ergo-Komodo integration confirmed.

- **Cosmos/Osmosis integration**: CryptoxInfant raised multiple times; no response from Armeanio or core team on feasibility, timeline, or IBC bridging approach. User offered 500-1K ERG LP if possible.

- **Keystone hardware wallet support**: cannon_q indicated "soon(TM)" but no ETA. @Team Team waiting for confirmation.

- **TradeOgre fund recovery**: Law enforcement seized 163K+ ERG; Canadian government holding assets. No clarity on whether funds will be returned, auctioned, or frozen long-term (kushti joked "10 years like Mt. Gox").

- **HTX litigation and complaint status**: Armeanio filing with MAS; no updates on response timeline or coordination with other affected projects (Firo, Komodo, Vemp) for joint action.

- **Danogo Finance USE listing**: Richi identified as real opportunity; no confirmation of next steps or timeline for submission.

- **Biconomy exchange listing**: Kyle from Biconomy reached out (msg#575734); no response recorded in chat. Contact point unclear.

- **Podcast guest coordination**: kushti proposed monthly show with major figures (Charles, Yonatan, Adam Back); no confirmation of production timeline, host, or booking progress.

- **SilverCents implementation**: Grayman writing up system description; pending feedback on blockchain integration and LETS mechanism design. No timeline for launch.

- **EC Riegel integration with ChainCash**: kushti discovered Riegel in 2024; discussion of trading circles parallels, but no concrete architectural decisions yet about how to implement Riegel's ideas on Ergo.

- **