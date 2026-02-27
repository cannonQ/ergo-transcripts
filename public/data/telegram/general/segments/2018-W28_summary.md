# Ergo General Chat Summary — 2018-W28

## Key Topics Discussed

- **MainNet launch timeline**: TestNet progress cannot be pinned to a calendar, but MainNet launch expected by Q4 2018. No pre-mine planned; swap of EFYT tokens to ERG and ERGOdata will occur as coins are mined via 10% foundation tax.

- **EFYT token swap mechanism**: Critical unresolved design question about how and when EFYT holders can redeem tokens for mainnet ERG/ERGOdata. Multiple fair distribution models proposed but none finalized.

- **Proof-of-work algorithm flexibility**: Ergo will initially use Equihash but with custom parameters. Alternative PoW functions being considered pre-mainnet, including schemes based on proof-of-data-possession. Non-outsourcable mining being researched.

- **Ergo's smart contract capability**: Confirmed that Ergo will execute smart contracts; Alexander (kushti) has extensive history with smart contract protocol design.

- **Security and wallet design**: Discussion of local encryption (seed + password), JavaScript transaction signing without exposing private keys, and the role of dedicated devices vs hardware wallets. Waves DEX doesn't hold user funds; all signing is local.

- **Project positioning vs Cardano**: Ergo has past association with IOHK but is an independent project with no formal relationship to Cardano or ADA.

## Important Decisions or Announcements

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#3677, 2018-07-09]: EFYT will swap to ERG and ERGOdata (1:1) after MainNet launch.

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#3678, 2018-07-09]: Other exchanges will follow after MainNet, plus "a few surprises to be released."

- [@Unknown, msg#3761, 2018-07-11]: Equihash parameters will be custom; alternative PoW schemes (including non-outsourcable designs) will be evaluated before mainnet prototype.

- [@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#3798, 2018-07-11]: Exact EFYT swap mechanism is not yet defined; will be worked on going forward.

- [@Unknown, msg#3814, 2018-07-12]: Emission curve is final; economic model and wallet are still in development. Voting system will allow miners to adjust tens of parameters post-launch.

## Technical Q&A Worth Preserving

- **Q** (@Crypto Bunny 🐜, msg#3656): Will Ergo be able to execute smart contracts?  
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#3657): Certainly. Alexander has a long history with smart contracts protocol.

- **Q** (@Kamer, msg#3685): When is Ergo tradable?  
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#3689–#3690): EFYT is tradable now on Waves. ERG will need MainNet launch before applying for exchanges.

- **Q** (@Unknown, msg#3758): Given Equihash ASICs and recent 51% attacks on ZenCash, what are Ergo's countermeasures?  
  **A** (@Unknown, msg#3761): Equihash parameters will be custom (per the original paper). Alternative PoW schemes based on proof-of-data-possession are being researched. Non-outsourcable mining is being studied.

- **Q** (@Unknown, msg#3772–#3776): How will EFYT→on-chain coin distribution work? Do miners choose between cash/data chains?  
  **A** (@Unknown, msg#3779): 1 Σ-Cash + 1 Σ-Data per 1 EFYT while coins are mined gradually on mainnet.

- **Q** (@Alexey Kiselev, msg#3720): Why 2FA on a local wallet?  
  **A** (@Alexey Kiselev, msg#3720): Waves DEX doesn't access your wallet. Seed is locally encrypted; transactions signed in JavaScript and transmitted without revealing keys.

- **Q** (@Unknown, msg#3792): Who decides who can swap EFYT first?  
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#3798): Not yet defined; will be worked on.

## Links Shared

- [https://www.ergoplatform.org/tech.html]: Initial technical information page.

- [https://github.com/ergoplatform/ergo]: Source repository; TestNet releases also here.

- [https://www.ergoplatform.org/news_list.html]: News archive.

- [https://www.ergoplatform.org/qa_2018_02_06.html]: Q&A document covering EFYT swap mechanism and coin distribution (msg#3667, #3788).

- [https://www.ergoplatform.org/news_emission_curve.html]: Emission curve specification (msg#3703, #3836).

- [https://bitcointalk.org/index.php?topic=2076657.msg41617247#msg41617247]: BitcoinTalk thread (msg#3660).

- [https://bitcointalk.org/index.php?topic=2076657.msg42119211#msg42119211]: Weekly update (msg#3904).

- [https://nipopows.com]: NIPoPoWs paper (msg#3781).

- [http://fc18.ifca.ai/bitcoin/papers/bitcoin18-final18.pdf]: Bitcoin research paper (msg#3781).

- [https://eprint.iacr.org/2016/994]: Academic preprint (msg#3781).

- [https://arxiv.org/pdf/1603.07926.pdf]: Proof-of-data-possession research (msg#3761).

- [https://github.com/ergoplatform/ergo/issues/218]: Discussion on mining pool resistance (msg#3761).

- [https://twitter.com/ergoplatformorg/status/1015180725182697473]: Twitter announcement linking to BitcoinTalk (msg#3658).

- [https://twitter.com/Beautyon_/status/991099071313121287]: Referenced tweet on sound money (msg#3742).

## Unresolved Questions

- **EFYT swap fairness and timing**: Multiple models proposed (e.g., collect taxes until enough supply exists, start at 50% supply, use dynamic tax rates) but no final mechanism chosen. Who gets priority? How to prevent ZEC-style launch chaos? (@Unknown, msg#3792–#3843; @𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#3798).

- **Economic model finalization**: Foundation governance, voting systems, parameter adjustment mechanisms, and how mining taxes evolve post-swap all still TBD (@Unknown, msg#3814).

- **Wallet design**: Not yet finalized (@Unknown, msg#3814).

- **PoW algorithm selection**: Custom Equihash parameters vs. alternative schemes (proof-of-data-possession, non-outsourcable designs) still under evaluation; no decision made pre-mainnet prototype (@Unknown, msg#3761).

---

**Summary**: This week's chat focused on onboarding new community members, explaining EFYT mechanics, and deep-diving into the fairness problem of token distribution post-launch. MainNet Q4 2018 remains the target; most critical systems (wallet, economic model, swap mechanism) are still in design. The community engaged constructively on EFYT distribution alternatives; several proposals gained traction but none were adopted. Technical discussions centered on PoW algorithm flexibility and security practices.