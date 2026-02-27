# Ergo General Chat Summary — Week 2023-W44 (Oct 30 – Nov 5)

## Key Topics Discussed

### CoinMarketCap (CMC) Data Integrity Crisis
A major confrontation erupted after CMC demanded $5,000 to fix circulating supply data that had been wrong for 2+ years. The issue: CMC's chart combined EFYT (a 2017 pre-launch token on Waves) with mainnet ERG in a single price history, misleading users into thinking Ergo peaked in 2017 and stagnated. After public Twitter pressure, CMC fixed the circulating supply but retaliated by posting a contentious warning banner claiming Ergo was responsible for the error. The Ergo team and community pushed back hard, citing 2+ years of ignored emails with correct data, and the situation escalated with media coverage. CMC later posted a vindictive response and subsequently removed community news articles from the Ergo page in apparent spite. Multiple projects (Radix, Nano, Kaspa) reported similar pay-to-play listing fee extortion.

### Palmyra Platform & Winter Protocol (Multi-Chain Strategy)
Dan Friedman and team clarified Palmyra's direction: the Winter Protocol (for tokenizing real-world commodities) runs on Ergo and uses Ergo NFTs for traceability; the PALM token will launch on Cardano (mid-2024) and be bridged to Ergo via Rosen. This is not abandonment of Ergo—just pragmatic multi-chain funding. The PALM token has three utilities: rebate system from transaction fees, oracle network incentives (01X partnership), and a grant treasury similar to ErgoHacks. Compliance requirements drove the IDO pivot from ErgoPad to Cardano, but core protocol development remains Ergo-centric. Some community members questioned why the token couldn't launch on Spectrum DEX directly (as Rosen did), but the team emphasized PALM is primarily a fundraising vehicle for when the platform scales.

### Rosen Bridge Launch & Cardano Summit Presence
kushti and core team presented Rosen design concepts in Dubai (Nov 4). The bridge went live in early November on Spectrum DEX (RSN token) and achieved ~$1M TVL within 2 days—a significant achievement for Ergo relative to previous token launches. Rosen enables cross-chain liquidity between Ergo, Cardano, and potentially other chains via non-Wormhole trustless pegging. Armeanio noted the EF supported a Cardano Catalyst proposal for Rosen that secured ~850k ADA, demonstrating ecosystem cooperation.

### Efficient Frontier Market-Making Proposal
Ben Villalobos pitched a loan-and-option (L&O) deal for Ergo: EF borrows X ERG, EF provides liquidity on CEXes, Efficient Frontier profits from price premium options if targets are hit. Initial proposal suggested 400k + 300k + 300k ERG loans, but analysis revealed this was based on market cap alone without understanding the EF's actual treasury (~$2M in docs). Community feedback was constructive but skeptical—Ben acknowledged poor pre-research and promised a revised, more transparent offer. The deal highlights the tension between cheap CEX listings via "growth" companies and the risk of misaligned incentives.

### Mining Block Speed & Scaling Discussion (6.0 Testnet)
kushti opened discussion on potential block time improvements. The main tension: some contracts rely on block height rather than timestamps for timing logic. Changing block time could break logic or require careful migration. A 6.0 testnet is being set up; volunteers are invited to tweak parameters, run the testnet, and do "scientific observations" comparing performance before/after. No final decision made—it's exploratory and requires community testing capacity.

### Spectrum DEX, Trade House, & Auction House Design
qx() gave a deep overview of order book vs. AMM design on Ergo. Trade House (order book) allows total transparency of depth, full control over slippage, and partial order fills—users can pick exact price levels and quantities. Spectrum (AMM, x*y=const) works well for certain cases but has impermanent loss for LPs. Auction House allows time-decaying bids and complex execution conditions. These tools coexist: some prefer order books (especially institutional traders), others prefer AMM simplicity. C8 and others are exploring cross-pool liquidity sharing between Spectrum and Trade House.

### EFYT / Ergo Fair Launch History
Historical clarification on EFYT airdrop: it was a 2017 free airdrop to Waves community (proportional to WCT balance or similar), used to fund 2 years of pre-mainnet development. The EF's allocation was partially sold OTC to private non-US investors and later via waves/tidex/magnum to cover fiat costs. After mainnet launch (July 2019), OTC sales of ERG resumed. CEX listings consumed ~70% of budget post-launch. The swap from EFYT to ERG was available for a limited window; unclaimed tokens were considered donations. kushti: "Free, number of tokens was proportional to waves community token balance or something like that, but it was not announced at all."

### Ledger Hardware Wallet Support
Glasgow confirmed Ledger compatibility is in dev and expected to exit dev mode soon with one final fix and Ledger's final approval pending.

### Paideia DAO Beta Launch
Paideia public beta testing set for November 20, 2023. Luivatra (developer) confirmed ongoing work.

### $CRUX Token Launch on Spectrum
CRUX/ERG liquidity pair went live on Spectrum (Nov 1, 17:00 UTC). qx() auctioned a vesting key NFT (10,000 CRUX equivalent) starting at 100 ERG, with vesting distribution beginning March 31, 2024—an experimental "bonds" mechanism.

### Neta (cBTC) Staking & ERG Distribution
Frosty (Aneta Bitcoin) announced a governance vote to distribute 36k+ ERG to NETA stakers over 1 year (linear). This is incentivizing NETA staking by rewarding ERG holders who stake. ~66k ERG total in Aneta treasury (36k in wallet, 30k LPed on Spectrum). Revenue from cBTC trades is low currently but expected to grow.

### Demurrage Feature Recognition
@dayumbbbb highlighted Ergo's underrated demurrage mechanism: unlike Bitcoin (deflationary, supply → 0) or Solana (inflationary), Ergo enforces a fixed circulating supply via 4-year coin collection (Gesellian economics). Requested visualizations comparing Bitcoin, Ergo, and other chains' supply trajectories over time. Offered 100 ERG bounty for animated viz; mahatma_c accepted.

---

## Important Decisions or Announcements

- [@kushti, msg#445691-445702, 2023-11-04]: Core dev stance on CMC recovery: "Is recovery possible without a grease? Mostly focused on coding these days so missed most of messages maybe, but from what I've seen no such chance given by completely corrupt cmc… And if the question is about whether me personally, Joe personally or EF is going to grease, then the answer is no."

- [@Armeanio, msg#446212, 2023-11-05]: "My goal is to not be extorted… We already have spent 70% of the treasury for crypto related services vs development, at some point enough is enough."

- [@Dan Friedman, msg#443937-443953, 2023-10-30]: Full clarification on Palmyra/Zen Gate: Winter Protocol runs on Ergo; PALM token is Cardano-native and bridged via Rosen; presale pivot is due to compliance, not abandonment of Ergo. "Mass adoption of Ergo will come from mainstream adoption, which is what Palmyra is doing for it."

- [@Glasgow, msg#444179, 2023-10-31]: CMC's circulating supply update finally pushed through after public pressure campaign; however, CMC added retaliatory warning banner.

- [@qx(), msg#444273, 2023-10-31]: "Just wanna say thank you to the ergonauts on twitter today...you were relentless and awesome. It really shows what the power of organized community can do."

- [@Luca D'Angelo, msg#443998, 2023-10-30]: "The core WINTER protocol is entirely developed on Ergo… would not work that well on Cardano due to tx cost."

- [@Unknown, msg#444471, 2023-11-01]: Paideia public beta testing November 20, 2023.

- [@kushti, msg#445421, 2023-11-04]: Rosen Bridge presentation at Dubai Ergo Community Meetup.

---

## Technical Q&A Worth Preserving

- **Q** (@rubens, msg#444562-566, 2023-11-02): How do I set up a mining address for the Sigmanauts pool?  
  **A** (@qx(), msg#444580): "see the pin in the telegram channel for the mining address for sigs mining (alpha still)"

- **Q** (@norluc, msg#444934, 2023-11-03): Is there a guide on how to mine ERG for complete noobs?  
  **A** (no direct response in log; community points to Sigmanauts pool setup)

- **Q** (@lexymon & others, msg#445582-707, 2023-11-04): Should EFYT and ERG price charts be combined or separated on CMC?  
  **A** (@qx(), msg#445612-613): "I look at it this way. I have a basket of ten apples. I tell you in six months each apple can be exchanged for one orange in a basket of 500 oranges. This is not the same value of a token imho… It's literally apples and oranges in the same chart."  
  Consensus: EFYT was a different launch (Waves, 2017), different supply conditions, different market. Charts should be separate but data preserved.

- **Q** (@Rj, msg#445148, 2023-11-03): ELI5 Midnight protocol?  
  **A** (no substantive response in log; topic dropped)

- **Q** (@Unknown, msg#444410, 2023-10-31): Why isn't the EF reaching out to market makers / Efficient Frontier team?  
  **A** (@Ben Villalobos, msg#444361-368): "we spoke, he asked me to email from our official domain which I did but never received a response, perhaps team is busy? Generally we prefer to do calls as it's easier for us to explain our value add."

- **Q** (@Jayson, msg#445635-688, 2023-11-04): Doesn't EFYT's 1:1 swap to ERG make them equivalent for charting purposes?  
  **A** (@qx(), msg#445696): "If 100 people tried to get 10 apples vs 100 people tried to get 500 oranges, which price would be higher. I completely understand what you're saying and it makes sense if it happened on the same chain, but I feel it can't be compared to an emission or mining contract considering it's a completely different project via TS/Emissions/etc."

- **Q** (@Rj, msg#445191-192, 2023-11-03): Did Alephium pay for their MEXC listing?  
  **A** (@Pulsarz, msg#444657-890, context of CMC drama): Alephium reported facing same pay-to-play scheme from MEXC; negotiating fees.

---

## Links Shared

- [https://vxtwitter.com/ergo_platform/status/1720106203273970013](CMC accountability check—qx() posts CoinMarketCap's $5k API integration fee demand) — Oct 30

- [https://ergoauctions.org/artwork/fbdc07049a2e2e0d9f11030f27f6d452ca3e3b6c70eb3c691ef9af5e08e24e8f](CRUX vesting token auction on Ergo Auction House, starting 100 ERG) — Nov 1

- [https://docs.cruxfinance.io/token-details/tokenomics](CruxFinance token launch whitepaper) — Oct 30

- [https://docs.ergoplatform.com/ergo-foundation-2022/#treasury](Ergo Foundation 2022 treasury documentation) — Nov 2

- [https://ergoplatform.org/en/blog/Ergo%E2%80%99s-Rosen-Bridge-A-New-and-Better-Way-to-Interact-Cross-Chain/](Rosen Bridge announcement & technical overview) — Nov 3

- [https://governance.anetabtc.io/t/governance-vote-4-cneta-neta-staking-and-share-350-000-ada/30](NETA staking governance vote, 36k ERG airdrop proposal) — Nov 5

- [https://twitter.com/CoinMarketCap/status/1720961627300794609](CoinMarketCap CEO response to Ergo and community pressure) — Nov 4

- [https://youtu.be/GdYpxVQ1BZs?feature=shared](Armeanio video response to CMC accusations) — Nov 4

- [https://nitter.net/zachxbt/status/1720961400313373127](zachxbt (blockchain security researcher) commentary on CMC extortion) — Nov 4

- [https://twitch.tv/xkilver](Kilver playing Cyberverse on Twitch) — Nov 5

---

## Unresolved Questions

- **CMC resolution path**: How will CMC respond to public pressure? Will they fix the EFYT/ERG chart separation or continue with the warning banner and retaliation?

- **Market-making deal terms**: Ben (Efficient Frontier) promised a revised L&O offer after understanding Ergo's actual treasury; details pending internal team review.

- **Block speed / 6.0 testnet**: No final decision on whether to reduce block time. Testing and "scientific observations" needed from community volunteers before path forward is chosen.

- **Decentralized CMC alternative**: Discussed need for decentralized price data infrastructure; Luivatra noted handling CMC-scale data decentralizedly is non-trivial; suggested GitHub PR-based model (like DefiLlama) as compromise. Could be ErgoHack VIII proposal.

- **Ledger wallet final approval**: Glasgow said "one last fix then final approval" but no timeline given.

- **Rosen bridge to Cardano timeline**: Presented in Dubai; no hard launch date confirmed in chat.

- **PALM token launch on Cardano**: Planned for mid-2024, but no specific date confirmed.

- **Efficient Frontier partnership**: Ben to provide revised proposal and trial offer; waiting for internal team alignment and community feedback on revised terms.

- **Weak blocks per block (6.0 proposal)**: PR mentions 128 weak blocks per block, but kushti not yet available to clarify exact design / timeline.

---

## Notable Community Moments

- **Troll capitulation (Nov 3)**: "Azfire" and "The Traceless" brought FUD about Ergo being "dead" and compared to Solana; community responded with facts and humor. Azfire announced selling at a loss; Pulsarz called it "capitulation" / bottom signal.

- **Ben Villalobos reception**: Market-making pitch evolved from skepticism to respect after he acknowledged poor pre-research and committed to transparency. Community appreciated honesty and open discussion.

- **Feng Qing arrival**: Long-term believer from China who held through bear, replaced BTC/ETH with ERG; community welcomed and tipped with love tokens.

- **ErgoHack VIII idea**: Decentralized, GitHub-based price data aggregator (alternative to CMC/CoinGecko) proposed as solution to centralized data gatekeeping.