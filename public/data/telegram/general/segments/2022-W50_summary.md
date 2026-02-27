# Ergo General Chat Summary — 2022-W50 (Dec 12–18)

## Key Topics Discussed

- **Storage Rent Implementation & Mechanism**: Detailed discussion of Ergo's storage rent feature (~0.14 ERG per byte per 4 years), how it functions, timing (July 1, 2023 launch), and potential risks to NFT-based access keys. The community explored mitigation strategies including auction mechanisms for seized assets, burning proposals (EIP-33/68), and wallet-level warnings.

- **Ledger Hardware Wallet Support**: Community confirmed Ledger integration is in testing phase with updates to test cases on ledger GitHub. Status: not yet officially released; sideloading possible since May 2022 but awaiting official launch expected in 2023.

- **Mining & ASIC/FPGA Resistance**: Wolf9466 provided deep technical explanation of GPU vs. FPGA efficiency for mining, memory table resistance mechanisms in Autolykos, and RandomX as an ASIC-resistant algorithm. Community chat scheduled for Dec 20 to discuss FPGA/ASIC resistance and Useful Proof of Work.

- **Ergo Improvement Proposals (EIPs)**: EIP-37 (difficulty adjustment) confirmed as successfully implemented to address block time death spiral post-merge mining. EIP-33/68 proposals discussed regarding token burning for storage rent collection on sensitive assets.

- **DEX Development**: Auction House v3 dark mode preview shown. Order book DEXes (Trade House, Spectrum) discussed as alternative to AMMs, with user control over slippage and transparency benefits highlighted.

- **Merge Mining & Sidechains**: kushti discussed sidechain construction publications, trustless pegging via smart contracts, and comparison to Bitcoin BIP-301 approach. Emphasis on Ergo-specific improvements over legacy merge mining designs.

- **Community Engagement & Marketing**: Flying Pig raised concern that ecosystem focus on protocol marketing lacks simple user-facing content and real-use-case examples. Discussion centered on EF role (L1 development) vs. project role (user acquisition) and need for marketing repository during bull market.

- **Palmyra / ZenGate & Chainlink Partnership**: Dan Friedman outlined use of Chainlink oracles for proof-of-reserve in on-chain warehouse receipts for decentralized trade financing. Plans to build native Ergo oracles with capital from token sale.

- **Speed Improvements & 6.0 Roadmap**: kushti indicated community chats will discuss microblocks, sidechains, and faster confirmation protocols as alternatives to layer 2. Emphasis that optimization decisions require concrete use cases to avoid inefficiency.

- **Yoroi Wallet Sunset**: Confirmed Yoroi no longer actively maintained for Ergo; users directed to Nautilus or Ergo Mobile Wallet. Poor syncing and decision to discontinue support cited.

---

## Important Decisions or Announcements

- [@CW, msg#354043, 2022-12-12]: Storage Rent community chat scheduled Tuesday Dec 13, 17:00 UTC.
- [@kushti khushi, msg#354116, 2022-12-13]: Storage Rent discussion chat on Discord/Telegram with details on mechanics and avoidance.
- [@qx(), msg#354255, 2022-12-13]: EIP-33 Token Burning discussion published; https://github.com/ergoplatform/eips/pull/68
- [@kushti khushi, msg#354264, 2022-12-13]: Ergo is the only blockchain with clean storage rent implementation from day one.
- [@CW, msg#354292, 2022-12-13]: At current fee (0.14 ERG), if 1 ERG in box, it takes 32 years for miner to consume at rent collection.
- [@Glasgow｜WON'T DM, msg#354298, 2022-12-13]: CKB (Nervos) also has state rent; https://docs.nervos.org/docs/basics/concepts/economics/
- [@Unknown, msg#354930, 2022-12-15]: ZenGate's Palmyra IDO announced on ErgoPad.
- [@CW, msg#355012, 2022-12-15]: Announcement of weekly community chats alternating between EIPs and Road to 6.0 on Fridays, 14:00 UTC.
- [@CW, msg#355303, 2022-12-17]: Community chat on FPGA/ASIC resistance and Useful Proof of Work scheduled Tuesday Dec 20, 17:00 UTC.

---

## Technical Q&A Worth Preserving

**Storage Rent & Box Management**

- **Q** (@Ian Lee, msg#354000): I transferred all ERG from my wallet to my own wallet but transaction stuck at pending. Why?
  **A** (@CW, msg#354002–354003): Waiting for block confirmation.

- **Q** (@Ian Lee, msg#354975): Who has exact date for first box storage rent trigger?
  **A** (@CW, msg#354977, msg#354981): July 1, 2023 (4 years after mainnet launch).

- **Q** (@Ian Lee, msg#353983): Will there be a dApp to view globally how many wallets/ERG will be triggered by storage rent?
  **A** (@CW, msg#353984, msg#353988): Ergo Wallet does it locally via dApps > Box Consolidation, but no global tool exists yet.

- **Q** (@Ian Lee, msg#353991): What if my box has more than 100 boxes?
  **A** (@CW, msg#353992–msg#353993): Need multiple transfers; Ergo Wallet limits TXs to 100 inputs. 150 boxes = 2 TXs.

- **Q** (@qx(), msg#354122): If I get inputs via transfers to my wallet, am I still at risk since old boxes haven't moved?
  **A** (@kushti khushi, msg#354124): Yes; every unspent output after 4 years can be charged by a miner per storage rent subprotocol.

- **Q** (@qx(), msg#354136): Can storage rent fee be modified in future with EIP?
  **A** (@Unknown, msg#354202): Yes, requires soft fork.

- **Q** (@theta decay, msg#354238): Would collateral attached to NFT TXs discourage spam and ensure rent payments?
  **A** (@Unknown, msg#354239): dApp developers could implement this voluntarily if desired.

- **Q** (@qx(), msg#354249): If box has insufficient ERG, are all assets (NFTs, tokens) taken at once?
  **A** (@kushti khushi, msg#354253): Yes, when box value cannot cover storage rent.

- **Q** (@CW, msg#354292): At current fee, how long before 1 ERG in a box gets consumed?
  **A** (@CW, msg#354292): 32 years (if not interacted with at all).

**Mining & Hardware**

- **Q** (@ApophisRO, msg#355559–msg#355560): Are there ASICs or FPGAs for ERG?
  **A** (@CW, msg#355563): Wolf has played with FPGAs but encountered stability issues. Ergo's memory table adjusts periodically to resist dedicated hardware.

- **Q** (@Unknown, msg#355475): Why are FPGAs more efficient than GPUs for mining?
  **A** (@Wolf9466, msg#355477–msg#355479): GPUs use general-purpose instructions (e.g., XOR takes 4 cycles); FPGAs can implement same in 1 cycle. Trade-off: FPGAs clock lower but achieve better efficiency for hardware-friendly algorithms like Keccak.

- **Q** (@Reek, msg#355464): What are FPGAs used for beyond mining?
  **A** (@Wolf9466, msg#355466–msg#355468): Learning (college), prototyping chips, and instant data conversion. Used when exact timing/speed is critical.

- **Q** (@Unknown, msg#355503): Can you overrun VGPRs/SGPRs if code generates no lag?
  **A** (@Wolf9466, msg#355508–msg#355511): You don't "overrun" them, but can use more of the 256 VGPRs per lane. Using fewer allows more workloads to occupy CU if anything stalls (e.g., memory load).

**Protocol & Scaling**

- **Q** (@Blargh, msg#354830–msg#354833): Can blockchain trilemma be solved to achieve global adoption without sacrificing decentralization/security?
  **A** (@Armeanio, msg#354841): Join AMA to discuss; also mentioned off-chain solutions and layer 2 as potential paths.

- **Q** (@Blargh, msg#354842): Can off-chain transactions compromise trustless cryptographic guarantees?
  **A** (@Armeanio, msg#354846): Off-chain aspects can be designed to maintain on-chain verification; not inherently compromising.

- **Q** (@kushti khushi, msg#354226): Why allow any assets to never be charged rent (avoiding spam)?
  **A** (@kushti khushi, msg#354226): No assets should be exempt; otherwise spam data storage becomes free.

**Wallets & Integration**

- **Q** (@David Wong, msg#354570): Is Yoroi wallet safe for storing Ergo?
  **A** (@Unknown, msg#354571, msg#354574–msg#354575): Do not use Yoroi; poor syncing and eventual discontinuation expected. Use Nautilus for similar experience.

- **Q** (@MatrixMaarten, msg#355161–msg#355164): When will Ledger support ERG?
  **A** (@Flying Pig, msg#355166–msg#355170): Ledger testing in progress; sideloading possible since May 2022. Official release expected in 2023.

**DEX & Trading**

- **Q** (@qx(), msg#354128–msg#354131): How does order book DEX differ from AMM and reduce slippage concerns?
  **A** (@qx(), msg#354131 implies): Order books provide full control over execution price and slippage; no impermanent loss as with AMMs.

---

## Links Shared

- [https://ergoplatform.org/en/blog/2022-02-18-ergo-explainer-storage-rent/]: Ergo storage rent explainer blog post.
- [https://docs.ergoplatform.com/mining/rent/]: Official documentation on storage rent.
- [https://github.com/ergoplatform/eips/pull/68]: EIP-33 Token Burning proposal discussion.
- [https://docs.nervos.org/docs/basics/concepts/economics/]: Nervos CKB state rent economics (comparison to Ergo).
- [https://twitter.com/ZengateGlobal/status/1602868558505345024]: ART TV coverage of Palmyra/ZenGate MOU signing.
- [https://twitter.com/ergopadofficial/status/1603469224197951495]: Palmyra IDO on ErgoPad announcement.
- [https://youtu.be/1LAo_J2FnPo]: Dev Update - December 11, 2022 (Weekly Sunday).
- [https://youtu.be/o7hPZsjPv8E]: Weekly Update & AMA (Thursdays, 13:00 UTC).
- [https://youtu.be/wnKA1wkzT-0]: Hash It Out episode w/ CW, Armeanio, Noah, qx() (CEX Proof of Reserves/Liabilities).
- [https://youtu.be/N3nj-kmkArg]: The Sigma Update (Episode 3).
- [https://docs.bisq.network/getting-started.html]: Bisq decentralized exchange documentation.
- [https://github.com/OhGodAPet/wolfamdvolt]: Wolf9466's AMD GPU voltage tuning tool.
- [https://twitter.com/Haskell_plus/status/1604198942563917824]: Exle private testing update.
- [https://youtu.be/KdLJKPJdM7w]: Hash It Out episode on NFT utility.
- [https://www.blobs-topia.fun]: Blobtopia game (kushti's blob).
- [https://ergoraffle.com]: Ergo Raffle platform.
- [https://emporas.io]: Emporas multi-vendor platform (now accepts ERG/native tokens, 5% discount).
- [https://t.me/Ergo_Chats]: Official Ergo Chats channel list.

---

## Unresolved Questions

- **Storage Rent & NFT Access Keys**: How should NFT-based access keys be protected from collection during storage rent? Proposed solutions include auctions, burning, or wallet-level communication of rent deadlines—no consensus reached.
  
- **Global Storage Rent Visualization Tool**: Community expressed need for dApp showing real-time/projected rent collection when July 2023 trigger occurs. kushti acknowledged a tool existed but couldn't recall where.

- **Ergo Oracles Native Implementation**: Dan Friedman flagged plan to build native Ergo oracles with token sale capital, but timeline and scope (v2 iteration) remain TBD.

- **Microblocks / Sidechains / Faster Confirmations**: kushti stated community chats will discuss these post-Ergoversary, but no draft implementation timeline confirmed.

- **ErgoPad / Spectrum Finance Token Launch**: Koutelier mentioned Spectrum will launch token via ErgoPad and is on Cardano testnet, but exact date unconfirmed.

- **Marketing Content Repository**: Flying Pig proposed structured marketing materials (use cases, infographics, shareable links) for community but unclear who/how this will be built during bear market.

---

**Chat Activity**: 1,070 messages over 7 days. Heavy discussion on storage rent mechanics (Dec 13 AMA), mining/hardware (Dec 17–18), and ecosystem projects. Moderate price speculation and off-topic chatter typical of bear market bear markets, muted by focus on technical topics.