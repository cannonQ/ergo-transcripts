# Ergo General Chat — 2021-W21 Summary
## Period: 2021-05-24 to 2021-05-30

---

## Key Topics Discussed

- **Yoroi wallet syncing issues (May 26-30)**: Yoroi experienced significant syncing problems preventing users from seeing balances or sending transactions. Users reported needing 428+ confirmations for deposits to appear. The issue was resolved by Emurgo restarting their node infrastructure, not a code update. Users could verify actual balances via Ergo Explorer during downtime.

- **Exchange listings delayed**: Four CEX and two DEX listings remain pending, delayed by wallet integration issues on exchange side, not Ergo development. NDA prevents disclosure of specific exchanges. KuCoin rumored but unconfirmed. XT Exchange reached out directly in chat seeking listing discussion.

- **ErgoDEX governance token discussion**: Team debating whether governance token is necessary. If implemented, distribution would be fair via usage rewards (liquidity provision, swaps), not ICO/presale. Testing both approaches (with and without governance token) before deciding. Public beta launch targeted for first half of June 2021.

- **Storage rent mechanism clarification**: Addresses inactive for 4 years pay small fee (storage rent) to miners. This recirculates lost/abandoned coins and provides long-term miner incentive after emission ends. Users only need to move funds once every 4 years to avoid fee.

- **ErgoTip bot usage**: Community actively used tip bot for small ERG transfers. Minimum tip is 0.003 ERG, uses nanoerg denomination (10^-9). Bot creates wallets automatically; users must message bot to view mnemonic and withdraw.

- **Mining difficulty spike**: Network hashrate crossed 2 PH/s then reached 2.26 PH/s, significantly reducing individual miner profitability. Difficulty increase caused concern among smaller miners about profitability versus ETH mining.

- **SigmaUSD fee structure explanation**: 2 ERG fee when minting SigRSV goes directly into reserve to incentivize reserve providers and prevent manipulation. Fee is contract-specific, not general transaction fee. DAI has nearly double the fees. Transaction fees on Ergo network are only 0.0001 ERG.

- **Cardano relationship and independence**: Ergo is independent blockchain, not built on Cardano. Shared eUTXO model enables interoperability. ErgoDEX will launch on Ergo first (June), then Cardano after Goguen. Ergo success not dependent on Cardano success, though Cardano community awareness helps adoption.

- **Sundaeswap and Cardstarter skepticism**: Community expressed concerns about anonymous teams, lack of technical documentation, and cardstarter-funded projects. Highlighted Gero wallet team overlap with cardstarter CEO. Contrasted with Ergo/ErgoDEX transparency and working products.

- **Proof of Work defense**: Discussion around PoW energy concerns following Musk tweets. Ergo's Autolykos algorithm more efficient than Bitcoin's primitive design. Team emphasized PoS may require more total energy when governance overhead counted. New article published on Ergo's green PoW approach.

---

## Important Decisions or Announcements

- [@Armeanio, msg#146413, 2021-05-26]: Four new CEXes and two DEXes confirmed for listing, waiting on wallet integration from exchange dev teams. Timeline dependent on exchange side, not Ergo.

- [@Ilya Oskin, msg#146317, 2021-05-26]: ErgoDEX public beta available in June (first half). AMM functionality is first focus.

- [@Armeanio, msg#147492, 2021-05-27]: ErgoDEX team testing both with and without governance token to determine best approach. Governance would be minimal and inactive most of the time if implemented.

- [@kushti khushi, msg#146114, 2021-05-26]: Dexy USD stablecoin design published on forum for feedback - new simplest stablecoin design proposal.

- [@Snowman Jason, msg#148351, 2021-05-30]: Ledger hardware wallet support approximately 2 months away (July 2021 target).

- [@Dmitry Usov, msg#148050, 2021-05-30]: Users experiencing Yoroi issues asked to create issues on GitHub: https://github.com/Emurgo/yoroi-frontend/issues

- [@Armeanio, msg#148305, 2021-05-30]: Exchanges working to reverse transactions where users incorrectly sent SigmaUSD, SigRSV, or NFTs. Emurgo/exchanges collaborating on asset support for reversals.

- [@Unknown, msg#148398, 2021-05-27]: Ergo Platform published article on energy efficiency and green PoW: https://ergoplatform.org/en/blog/2021-05-27-ergo-secure-and-green-blockchain-1/

---

## Technical Q&A Worth Preserving

- **Q** (@Nick, msg#147475): How does network retrieve storage rent fee without address owner performing transaction?
  **A**: Question remained unanswered in this chat segment.

- **Q** (@Jon, msg#148278): Ergo doesn't have gas like Ethereum. How does it work if network becomes saturated?
  **A** (@c8, msg#148279): Simple transaction fee market on layer 1. Miners can adjust fees.

- **Q** (@Lukas, msg#148257): How many TPS does Ergo do? Will it clog like ETH?
  **A** (@Snowman Jason, msg#148277): One transaction can send to 500 wallets. kushti has mentioned knowledge to implement solutions if massive adoption causes issues. Upgrades would be implemented before problems arise with steady growth.

- **Q** (@JCFishing, msg#148315): Will ErgoDEX require two separate liquidity pools for ERG/ADA pair (one on Ergo chain, one on Cardano chain)?
  **A** (@Dmitry Usov, msg#148318): Not a concern for current development phase. Shared liquidity is on roadmap but research ongoing. Focus is on getting DEX launched first.

- **Q** (@Hasnain, msg#148088): Is full Ergo node setup process overwhelming for newcomers?
  **A** (@Snowman Jason, msg#148090): Yes, takes 1-2 days to download. Mobile wallet support approximately 2 months away. Yoroi is simpler option.

- **Q** (Multiple users): How long for ERG to appear in Yoroi from exchange?
  **A** (@Tom Fitz, msg#148233): ERG arrives on blockchain quickly (2min block time). Yoroi sync issues were separate frontend problem. Always verify on Ergo Explorer with wallet address.

- **Q** (@Jeronimo Backes, msg#148840): Why is SigmaUSD/SigRSV so expensive (2 ERG fee)?
  **A** (@Glasgow, msg#148849 / @Chris Ray, msg#148842): Cost prevents manipulation and grows reserve. Fee goes to reserve, not to Ergo. Incentivizes SigRSV minting. DAI fees almost double. Fee not based on ERG market value.

- **Q** (@Subliminal D, msg#148553): Is Ergo going to transition to PoS eventually?
  **A** (@Ron, msg#148554-148557): No plans for PoS transition. NiPoPoW features still being developed to push PoW to limits. Ergo will be most technologically advanced PoW chain.

---

## Links Shared

- [https://ergoplatform.org/en/exchanges/]: Official exchange listing page
- [https://ergonaut.space/]: Community wiki and documentation hub
- [https://sigmaverse.io/]: Directory of live Ergo dApps including ErgoMixer, SigmaUSD, Auction House
- [https://explorer.ergoplatform.com/en/]: Blockchain explorer for verifying transactions and balances
- [https://ergodex.io/]: ErgoDEX landing page
- [https://ergoplatform.org/en/blog/2021-05-13-bearwhale-saga/]: Bearwhale Saga article explaining SigmaUSD stress test
- [https://ergoplatform.org/en/blog/2021-04-26-the-ergo-manifesto/]: Ergo Manifesto
- [https://ergoplatform.org/en/blog/2021-04-27-chainlink-oracles-vs-ergo-oracle-pools/]: Article comparing Chainlink to Ergo Oracle Pools
- [https://www.ergoforum.org/t/dexy-usd-simplest-stablecoin-design/1430]: kushti's new Dexy USD stablecoin proposal
- [https://ergoplatform.org/en/blog/2021-05-27-ergo-secure-and-green-blockchain-1/]: Article on Ergo's energy-efficient PoW and green blockchain approach
- [https://github.com/Emurgo/yoroi-frontend/issues/2109]: GitHub issue tracking Yoroi sync problems (marked resolved)
- [https://www.ergoforum.org/t/a-solution-for-staking/1057]: Forum post on staking via ErgoMixer concept
- [https://forum.cardano.org/t/ergo-will-complement-cardano/45412]: Cardano forum article explaining Ergo/Cardano relationship
- [https://ergoplatform.org/en/blog/2021-05-07-ledger-network-integrates-ergo-network/]: Announcement of Ledger integration (in progress, ~2 months from May)
- [https://ergoplatform.org/en/blog/2019_05_20-curve/]: Explanation of Ergo First Year Token (EFYT) vs mainnet launch
- [https://whattomine.com/]: Mining profitability calculator
- [https://t.me/ergobrazil]: Brazilian Portuguese regional chat
- [https://t.me/ergoplatform_ES]: Spanish regional chat
- [https://t.me/ErgoPortuguese]: Portuguese regional chat
- [https://t.me/ergoplatformru]: Russian regional chat
- [https://t.me/ergo_mining]: Mining-specific chat
- [https://t.me/ERGtrading]: Price and trading discussion chat
- [https://t.me/SigmaUSD]: SigmaUSD-specific chat
- [https://t.me/ergosupport]: Technical support chat
- [https://t.me/ErgoSocials]: Marketing and social media coordination chat
- [https://twitter.com/ergoplatformorg]: Official Ergo Twitter
- [https://discord.com/invite/kj7s7nb]: Official Ergo Discord
- [https://poolpartynodes.com/ergo-merchant-shop/]: BPSAA member merchandise shop including Ergo items
- [https://swop.fi/]: Waves-based DEX with ERG/USDN pool for liquidity staking
- [https://youtu.be/flC5j6zAmHI]: Video guide on buying ERG (linked multiple times)
- [https://ergnomes.io/]: ERGnomes NFT project website
- [https://ergoauctions.org/]: Ergo Auction House for NFTs
- [https://ergonfts.org/]: NFT viewer/directory
- [https://reddit.com/r/ergonauts/comments/mye6xh/faq/]: Comprehensive Ergo FAQ on Reddit
- [https://vitalik.ca/general/2021/05/23/scaling.html]: Vitalik article on scaling (user shared for discussion)
- [https://thecoinperspective.com/?c=ERG]: Market cap comparison tool for ERG price modeling

---

## Unresolved Questions

- Exact timeline for 4 CEX + 2 DEX listings still unknown, dependent on exchange-side wallet integration completion
- Whether ErgoDEX will implement governance token remains undecided; team testing both approaches
- Shared liquidity between Ergo and Cardano versions of ErgoDEX still in research phase
- Storage rent retrieval mechanism (how network collects fee without user transaction) not explained in detail
- Long-term staking mechanism via ErgoMixer concept exists in forum but implementation timeline unclear
- Mobile wallet support timeline vague ("approximately 2 months" stated multiple times)
- How to retrieve ERG sent to address types Yoroi doesn't recognize (some users reported address parsing errors)
- Exact fee reduction strategy if ERG price increases significantly (miners can adjust but no formal mechanism discussed)