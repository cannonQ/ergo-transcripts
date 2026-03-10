---
title: "Ergo General Chat — 2021-W52"
date_start: "2021-12-27"
date_end: "2022-01-02"
type: telegram_weekly
channel: general
week: "2021-W52"
source: telegram
message_count: 0
categories: []
key_terms: []
---
# Ergo General Chat Summary — 2021-W52
**Period:** 2021-12-27 to 2022-01-02  
**Total Messages Processed:** 1,412

---

## Key Topics Discussed

- **Emission Soft Fork Proposal (EIP-0027)**: Extended emission schedule from ~2028 to 2057 to ensure long-term miner incentives and ecosystem sustainability. Vote ends approximately March 5, 2022 (block #699,393). Community response generally positive after forum discussion, with miners understanding the rationale.

- **Mining Rewards Reduction**: First actual reduction to miner block rewards occurred at block 655,200 (2022-01-02), reducing from 67.5 to 66 ERG per block. Earlier reductions came from foundation allocation; this is the first reduction affecting active miners directly.

- **Susy Bridge Development**: Integration with Susy (Solana bridge) progressing; bridge code complete and tested in localnet. Oracle integration from Ergo side nearly finished; minor delays expected until January 2nd when Susy team availability resumes.

- **ErgoDEX Status & Issues**: Restored after brief incident (2022-01-02). Yoroi nightly compatibility issues ongoing; working with Emurgo to resolve. Users report transaction display bugs; advised to check Ergo Explorer for truth of state.

- **Storage Rent Economics**: Post-emission sustainability hinges on storage rent revenue. Concern raised that 40x growth in UTXO set size may be required by end of emission (~2057) to match current block reward value. Timeline and feasibility being discussed.

- **Wallet Development**: iOS Ergo Wallet in TestFlight (verified account issue with Apple; Ergo Foundation pursuing organizational account). Android wallet fully operational. Nautilus and Satergo (desktop, v0.0.2 released 2021-12-31) in active development. Hardware wallet (Ledger) support not yet implemented; MrStahlfelge argues mobile cold wallet superior to hardware devices in cost/security tradeoff.

- **ErgoScript & Smart Contract Verification**: Bulletproofs and Sigma protocol zero-knowledge proofs being integrated into ErgoScript. Supports verifiable credentials and hybrid contracts with off-chain computation. Potential to enable non-interactive, non-custodial mixing of native tokens—unique capability.

- **Palmyra & Chainlink Partnership**: Trade financing use case leveraging on-chain warehouse receipts via Chainlink oracles and IoT devices (weight sensors, cameras, motion detection). Decentralized framework for proof of reserve; not zero-sum game with other oracle solutions. Plan to build native Ergo Oracle Pools alongside Chainlink integration.

- **Layer 2 & Scaling**: No rollups/sharding implemented yet as of Jan 2, 2022. Plasma and rollup research ongoing; tutorials expected. Sub-block confirmation protocols and various L2 solutions (Lightning Network, generic sidechains) discussed as paths forward.

- **Transaction Processing Throughput**: TPS is "vanity metric" per kushti. Current mainnet ~47.5 tx/sec possible; design allows for 20-50x improvements at L0 via efficiency. Multi-layer approach: L0 (node optimization), L1 (extension framework for sharding/Hydra/macroblock protocols), L2 (off-chain settlement).

- **UTXO vs. Account Model**: UTXO enables off-chain heavy lifting validated on-chain; eliminates unpredictable "gas" fees. Flash loans impossible on UTXO model—removes class of exploits seen on Ethereum. Privacy is optional, not protocol-enforced.

- **Autolykos Mining**: GPU-resistant protocol; no ASIC miners (yet). Energy efficient (~180W for 230 MH). Concern that ASICs may emerge in future, but decentralization currently superior to chains with ASIC dominance (e.g., Kadena).

- **ErgoHack III**: Applications open Jan 4–31, 2022. Privacy and Security focus.

- **Satergo Desktop Wallet**: v0.0.2 released. Embedded full node; supports all node API calls. Seeking tutorials and multi-language documentation. GitHub: https://github.com/Satergo/Satergo

---

## Important Decisions or Announcements

- [@kushti, msg#242511, 2022-01-02]: "We just had first mining rewards reduction, from 67.5 to 66 ERG per block, starting from block 655200"

- [@Armeanio, msg#242385, 2022-01-01]: General support observed for emission soft fork; pool positions being documented as data arrives.

- [@MrStahlfelge, msg#242361, 2021-12-29]: Ergo Foundation pursuing organizational account with Apple to enable mainstream iOS App Store release (currently TestFlight only due to individual account restrictions).

- [@Aberg Satergo dev, msg#242060, 2021-12-31]: "Satergo v0.0.2 (Desktop wallet for Ergo) has been released! https://satergo.com"

- [@Glasgow, msg#242087, 2021-12-31]: Tweet announcement: "As we bid farewell to 2021, we thank you all for your support, feedback, and participation in building the #Ergo Platform! We hope you have a wonderful New Year's and we look forward to all that 2022 will bring."

- [@Armeanio, msg#242451, 2021-12-30]: Working on ecosystem video with kushti for end-of-year summary; weekly dev update planned for Sunday.

- [@Brandon, msg#242458, 2021-12-29]: Susy bridge status: code complete, tested in localnet, awaiting oracle integration completion post-Jan 2.

---

## Technical Q&A Worth Preserving

- **Q** (@andrew): "Is ergo wallet for mobiles safer than keeping the coins in exchanges like gate and kucoin?"  
  **A** (@Dani): "Yes! Always safer to have your Ergo in a wallet where you own and know the keys!"

- **Q** (@andrew): "So basically Ergo is not the classic PoW, but an updated version of the concept. Is that eUTXO model more environment friendly?"  
  **A** (@Unknown): "The environmental friendliness is not to do with eUTXO, but rather how the mining protocol Autolykos only allows for GPU mining."

- **Q** (@Adano): "How many transactions/sec can ERG chain process?"  
  **A** (@Armeanio): "TPS is somewhat of a vanity metric. UTXOs support multiple outputs in a single transaction. With transaction chaining it also adds a layer of complexity. For maximum throughput Ergo is designed to support multiple L2 solutions. L1 is designed to be a settlement layer."

- **Q** (@Adano): "Can ergo back at 18$ next year?"  
  **A** (@Unknown): "If Bitcoin bull market resumes as expected, for sure."

- **Q** (@CW, replying to wallet restoration): "Nope, just there to help identify you've entered your seed properly. Like Jose said don't answer dms, I'm sure you'll get them offering a heap of help from scammers"

- **Q** (@Jennie D): "Since the dexes are decentralized or, for those which are, the price that gets reported by places such as coinmarketcap isn't affected right? And if this is true, once dexes get more and more space, the disconnect between actual price and reported price could be major, right?"  
  **A** (@Klaus): "Coingecko also includes the prices of tokens on major dexes (sushi, pancake, uni,...) in their information. So there shouldn't be a problem. Arbitrage trading should prevent large price differences between different exchanges."

- **Q** (@Ilya): "I've issued a new token via ErgoUtils. quantity: 100,000, Decimals: 1. It appear everywhere (Explorer, Utils) as 100,000. In Yoroi I see 10,000. Bug or feature?"  
  **A** (@Unknown): "When it says 'quantity' it means the smallest unit. So if you want to make 100k tokens with 1 decimal, you need to tell ergoutils the quantity is 100k*10 = 1 million. Yoroi has it right; the wording is weird in ergoutils."

- **Q** (@ニック): "HW wallet support is actually holding back anyone from buying erg in any significant amounts. I dare not hold more erg at this point."  
  **A** (@MrStahlfelge): "What's the difference? Using an Android device is getting more for less bucks. Ledger is around 100$, as is a low end Android device which has an actually useable screen. Plus, it's able to run an actually open sourced OS." [Reference: https://youtu.be/maau3TDC19k]

- **Q** (@Adano): "Does that mean that each erg token has a 'serial number'? Why is it problem in the real life? What is the disadvantage of account-based thing?"  
  **A** (@Glasgow): "UTXO is just a chain of transactions, heavy lifting is done off-chain and then validated on-chain. ETH does all the heavy lifting on-chain hence the extortionate fees. UTXO provides superior: Privacy (one-time objects), Scalability (parallel tx processing), Interoperability (off-chain/sidechain protocols), Transaction Cost Predictability (no gas)."

---

## Links Shared

- [https://ergoplatform.org/en/exchanges/]: List of centralized exchanges where ERG can be purchased (Kucoin, CoinEx, Gate.io; no Binance yet).

- [https://www.ergoforum.org/t/emission-soft-fork-proposal/2996]: Official forum thread with detailed emission soft fork (EIP-0027) proposal discussion.

- [https://ergoplatform.org/en/blog/2021-04-26-the-ergo-manifesto/]: Ergo Manifesto defining core project principles (no premine, fair launch, privacy options, PoW, community-driven).

- [https://ergonaut.space/en/home]: Ergonaut Handbook (community documentation; rewrite in progress targeting ELI5 explanations).

- [https://docs.ergoplatform.org]: Official Ergo Platform documentation (moving content from Ergonaut Handbook).

- [https://github.com/Satergo/Satergo]: Satergo desktop wallet source code (open source).

- [http://t.me/SatergoWallet]: Satergo wallet Telegram community group.

- [https://sigmaverse.io/]: Ergo ecosystem dApp index/explorer showing all projects building on Ergo.

- [https://ergotutorials.com/]: Video tutorials for Ergo (referenced for wallet setup guides; TTS voice noted by Aberg).

- [https://youtu.be/maau3TDC19k]: MrStahlfelge's video demonstrating Android cold wallet workflow (offline signing via QR codes).

- [https://ergoplatform.org/en/blog/2021-12-30-ergo-platform-2021-year-in-review/]: Year-in-review blog post mentioning website rebranding, partnership announcements, wallet launches, dApp ecosystem growth planned for 2022.

- [https://twitter.com/anetabtc/status/1477275860029816832]: AnetaBTC partnership announcement with Kyber Network (wBTC creators); wrapped Bitcoin protocol integration.

- [https://ergoplatform.org/en/blog/2021-12-21-ios-ergo-wallet-how-to-guide/]: Guide for accessing iOS Ergo Wallet via TestFlight.

- [https://ergoplatform.org/en/mobile_wallets/]: Official list of mobile wallet options (Android, iOS TestFlight status).

- [https://docs.ergodex.io/docs/protocol-overview/fees]: ErgoDEX protocol fee structure (~0.02 ERG per swap).

---

## Unresolved Questions

- **Hardware Wallet Support Timeline**: When will Ledger/Trezor integration be available? No concrete ETA given; noted as deprioritized vs. mobile solutions. Andrew estimated "end of 22 if we're lucky" (msg#242713).

- **Cardano DeFi Migration**: Can Ergo market itself to stalled Cardano DeFi projects (Ardana, MELD)? No clear strategy; consensus that direct recruitment ineffective; cross-chain development partnerships suggested as better path (msg#242649–242656).

- **Storage Rent Revenue Sufficiency**: Will storage rent truly compensate miners post-emission? Glasgow noted 40x UTXO set growth required by ~2057; technical feasibility and incentive timing unresolved (msg#242029–242035).

- **Sub-block Confirmation Protocol**: Design and implementation status of faster confirmation protocols mentioned but not detailed; prototype expected in 2022 (msg#242276–242277).

- **Yoroi Long-term Support**: Will Yoroi receive fundamental updates for Ergo (esp. large tx history handling)? CW expressed frustration ("much needed updates") but no roadmap provided (msg#241637).

- **Satergo Oracle Connector Integration**: Can Oracle Pool operators use Satergo's embedded node? API key injection and wallet unlock UI features flagged as missing; Aberg considering additions but implementation unclear (msg#242374–242437).

- **Emission Vote Details**: Exact voting mechanism for miners unclear; how exactly do mining pools signal votes? Mentioned as miner decision but mechanics not detailed (msg#241989–241990).

---

## Notable Community Activity

- **Development Momentum**: Satergo desktop wallet released; Susy bridge nearing completion; ErgoDEX operational despite brief outages. Multiple dApps announced or progressing (ErgoPad, AnetaBTC, Machina Finance, ERGnomes).

- **Soft Fork Support**: After forum debate in late Dec, consensus shifted positive. Most mining pools leaning toward approval based on community feedback. Miners recognize need for long-term protocol sustainability.

- **Cross-chain Partnerships**: Kyber (wBTC), Chainlink (Palmyra trade finance), Solana bridge (Susy), UTXO Alliance (Cardano/Nervos). Positioning Ergo as neutral infrastructure layer rather than competitor.

- **Price Volatility Discussion**: Multiple newcomers confused by $18→$5 drop. Community response consistent: accumulation opportunity, PoW fundamentals sound, long-term project, market cycles normal.

---

## Minor Items

- **Node Version**: v4.0.19 released (msg#242232).
- **First Emission Reduction Occurred**: Block 655,200 (2022-01-02); 67.5 → 66 ERG/block.
- **Token Issuance Clarification**: ErgoUtils quantity field represents smallest divisible unit (scaled by decimals), not display amount.
- **DDoS/Spam Protection**: Reference client v4.0.44+ includes mempool filters and propagation fee rate controls.