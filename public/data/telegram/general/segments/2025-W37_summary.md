# Ergo General Chat — Week 2025-W37 Summary

## Key Topics Discussed

- **Scam Token Airdrop Prevention**: qx() announced community-maintained scam token lists synced with ErgoExplorer, integrated into Nautilus wallet hiding features. Discussion of "dusting" scammer wallets with worthless tokens to lock them up and slow distribution. [@qx(), msg#573777, 2025-09-09]

- **SigmaUSD Collateralization & De-pegging Risk**: Community discussion on SigmaUSD's over-collateralization (4$+ backing per SigmaUSD), transparent peg breaking points, and comparison to UST collapse. [@Glasgow, msg#573889, 2025-09-10]

- **Ergo's Positioning as Global Neutral Reserve Asset**: kushti outlined strategic vision for Ergo as active (not passive) reserve asset enabling derivatives and smart reserves, targeting three niches: AI/P2P network economies, community currencies with global reserve tooling, and programmable money for digital free banking. [@kushti, msg#574082, 2025-09-11]

- **Dexy Protocol Development & Pool Updates**: Dexy tests showing strong results; discussion of Oracle Pool v1/v2 architecture, potential GluonUSD and DexyUSD launches pending pool testnet updates. [@kushti, msg#574124, 2025-09-12]

- **Mesh Network & Disaster Recovery Solutions**: Discussion of off-chain and low-internet transaction solutions using mesh networks (Bluetooth, WiFi antennas with solar). NIPoPoWs and trustless relays for partial outages; Basis cash and LETS for temporary full outages (1-3 days). [@kushti, @HQ3rr, msg#574074, msg#574052-574067, 2025-09-11]

- **Exchange Partnerships & Market Strategy**: josh proposed digital asset treasury (DAT) approach with large exchange buying 25-35% stake over months, citing kushti's criticism that Ergo should already be top 10 and comparing to BNB's 126B market cap achievement via similar strategies. [@josh, msg#574219-574277, 2025-09-12]

- **Nautilus Wallet & Mobile Security Concerns**: Armeanio raised concerns about mobile wallet gatekeeping (Apple/Google app store control), private RPC monitoring, and permissioned environments as under-appreciated control circuits; preference for flat P2P tools. [@Armeanio, msg#574214-574215, 2025-09-12]

- **Community Fundraising (Raffle) with Apple/Google Pay**: Grayman proposed zero-friction fiat-to-onchain fundraising for raffles targeting social media users with Apple/Google Pay, with 5% payout to charities. [@Grayman, msg#574028-574033, 2025-09-11]

- **Lykos DAO Development**: LIFΣ OF IF₳ reported platform rollout 70% complete on website, UI toolkit and pitch deck finalized, with remote assignment Sep 13-23. Returning to wrap website and digital brochures for October tokenomic configuration and seed round voting. [@LIFΣ OF IF₳, msg#574155, 2025-09-12]

- **SigmaLok Initial UI Release**: qx() announced SigmaLok initial UI build launched and looking great. [@qx(), msg#574164, 2025-09-12]

## Important Decisions or Announcements

- [@qx(), msg#573777, 2025-09-09]: Announced scam token hiding integration in Nautilus via community-maintained git repository synced with ErgoExplorer; users can burn scam tokens in Terminus/Ergo Mobile wallet.

- [@Andy L, msg#573765, 2025-09-09]: Community Chat continuing in place of Weekly Update/AMA; sessions held Thursdays 13:00 UTC on Zoom and YouTube Live.

- [@kushti, msg#574082, 2025-09-11]: Posted comprehensive strategic analysis positioning Ergo as global neutral reserve asset with three target niches: AI/P2P economies, community currencies, programmable money for digital free banking.

- [@kushti, msg#574151-574152, 2025-09-12]: Kushti donation campaign (2000 ERG goal) reaching 99.75% funded (1995 ERG), earmarked for Oracle Pool updates and ecosystem bounties.

- [@LIFΣ OF IF₳, msg#574155, 2025-09-12]: Lykos platform 70% website complete; remote assignment Sep 13-23 with limited comms; resuming post-travel to finalize website/brochures for October tokenomic voting and seed round.

- [@qx(), msg#574164, 2025-09-12]: SigmaLok initial UI build released.

- [@Yulius Kristianto, msg#574422-574423, 2025-09-14]: Added Javanese language support to Nautilus Wallet repository (PR #316).

## Technical Q&A Worth Preserving

- **Q** (@Alx, msg#573870): How to buy SigmaUSD directly without intermediary or high slippage on Spectrum DEX?
  **A** (@kushti, msg#573881): "sometimes on DEX you can get better offer" than 2% fee on direct purchases. (@kushti, msg#573868): Can also mint from ErgoMixer desktop app.

- **Q** (@Alx, msg#573886): What are chances of SigmaUSD de-pegging like UST/Terra?
  **A** (@Glasgow, msg#573889): SigmaUSD over-collateralized (4$+ per SigmaUSD); explicit breaking point visible; no bank-run incentive unlike UST; Luna supply didn't depend on Ergo ecosystem usage.

- **Q** (@TMR.ΣRG, msg#574076-574077): How do off-chain transaction solutions work during partial/full outages? Where is data stored? How prevent double spending? How verify post-recovery?
  **A** (@kushti, msg#574074): Partial outage: parties with Internet connectivity broadcast NIPoPoWs, new headers, and transactions with proofs. Full temporary outage (1-3 days): use off-chain cash like Basis or credit-based LETS, redeem when restored.

- **Q** (@gg, msg#573784): "trying to liquidate a sifmafi loan but get an error"
  **A** (@kushti, msg#573794): Forwarded to SigmaFi group on Telegram.

- **Q** (@iVacuum, msg#574087): Unable to connect to Sigmanauts mining pool due to "invalid peer certificate: expired"
  **A** (@Affable Villain, msg#574093): Directed to Sigmanauts mining pool Telegram support group.

- **Q** (@Ergochampion, msg#573994): Fastest way for American to get ERG with debit card?
  **A** (@DiscordBridge/GabGno, msg#573995): Onramp to ADA and swap for rsERG; CoinEx with VPN. (@HQΣr, msg#573998): Can also use voltpay.store.

- **Q** (@gg, msg#573795-573796): Concerns about scammers; uncertainty whether real kushti or fake
  **A** (@qx(), msg#573803): Pro tip—add verified regulars to Telegram contacts with "- REAL" suffix for verification. (@kushti, msg#573799): Confirmed multiple fake qx() and kushti accounts exist.

- **Q** (@Jessie Jane, msg#574078): "wen subblocks?"
  **A** (@kushti, msg#574083): Need to test devnet p2p protocol thoroughly (few days), then extend current writings into whitepaper for community discussion.

## Links Shared

- [https://vxtwitter.com/chepurnoy/status/1965000958683062470]: kushti shares X post (content not specified)
- [https://x.com/erg_armeanio/status/1965063227701891371]: Armeanio X post
- [https://jdstaerk.substack.com/p/we-just-found-malicious-code-in-the]: Giufa shares article on malicious code discovery
- [https://medium.com/@curiaregiscrypto/why-blockchains-without-storage-fees-are-unsustainable-bd907f71d27c]: Medium article on storage rent necessity
- [https://x.com/chepurnoy/status/1965165198341537980]: kushti shares X post on storage fees
- [https://x.com/Graymanland/status/1965793330090172709]: Grayman's "Deep thoughts" on Federal Reserve vs apolitical money systems
- [https://vxtwitter.com/Graymanland/status/1965796425394245983]: Grayman X post
- [https://x.com/erg_armeanio/status/1965819825823035625]: Armeanio X post
- [https://x.com/erg_armeanio/status/1965821920076783965]: Armeanio X post
- [https://x.com/erg_armeanio/status/1965822456498962805]: Armeanio X post
- [https://youtu.be/IkgaMFjo_lI]: Grayman shares YouTube video
- [https://x.com/ergo2top10/status/1965734839279288625]: kushti shares X post on Ergo top 10 discussion
- [https://x.com/mrtn_ergo/status/1965851550456181122]: kushti shares X post
- [https://youtu.be/ABvjpZp1N2Y]: Not Jumei shares YouTube video
- [https://x.com/marklg/status/1961008002343071858]: Ruben shares Kraken/Mark Glasgow X post on exchange partnerships
- [https://x.com/erg_armeanio/status/1966897358790345213]: Armeanio X post
- [https://x.com/erg_armeanio/status/1966906323158937780]: Armeanio X post
- [https://medium.com/@curiaregiscrypto/the-future-of-ergo-platform-decentralized-credit-and-payments-with-basis-and-chaincash-7477f94d81a8]: Medium article on Basis and ChainCash future
- [https://x.com/erg_armeanio/status/1966982994985709654]: Armeanio X post
- [https://www.youtube.com/watch?v=OgNFwXC4I6M&list=PLetv3SCC-r3aIIYw89HKH8-1vngYpgYf3]: Grayman shares YouTube playlist
- [https://x.com/marklg/status/1963402660049993784]: Ruben shares Mark Glasgow X post re: Kraken interest
- [https://www.youtube.com/live/c9qP-_tC0X0]: YouTube Community Chat link (2025-09-11)
- [https://sigmanauts.com/podcast/]: Ergo Podcast archive with direct downloads
- [https://www.ergoforum.org/t/ergo-precious-metal-expansion-using-p2p-transfers-paideia-dao-and-dexygold/5230/2]: Forum post on Ergo precious metal expansion via Paideia DAO and Dexy Gold
- [https://github.com/nautls/nautilus-wallet/pull/316]: Nautilus Wallet PR #316 (Javanese language support)
- [https://coinmarketleague.com/coin/ergo]: CoinMarket League Ergo voting (multiple calls to vote)

## Unresolved Questions

- **Sub-blocks implementation timeline**: kushti indicated need to test devnet p2p protocol before discussing sub-blocks whitepaper; no concrete timeline given. [@kushti, msg#574083, 2025-09-11]

- **Oracle Pool v2 (Dexy Gold) reward structure**: Discussion ongoing on GORT rewards and pool update mechanics; full v2 launch pending testnet validation and community input. [@kushti, msg#574124, 2025-09-12]

- **Mobile wallet security & app store gatekeeping**: Armeanio raised concerns about Apple/Google chokepoints but no concrete mitigation strategy proposed; remains open debate. [@Armeanio, msg#574214-574215, 2025-09-12]

- **Ergo-Kraken partnership momentum**: Ruben cited historical interest from Kraken (multiple nods over past year) but no formal partnership or investment announced; fundraising raffle for Kraken listing never materialized. [@Ruben, msg#574403-574405, 2025-09-14]

- **Ergo101.org replacement**: Yulius Kristianto flagged ergo101.org domain unreachable; unclear who owns it or whether content is archived elsewhere. [@Yulius, msg#574181-574195, 2025-09-12]

- **Exchange listing strategy with "smart money"**: josh proposed DAT/reserve asset partnership with major exchange; kushti acknowledged approach sounds reasonable but no committed action plan or exchange engagement named. [@josh, @kushti, msg#574219-574402, 2025-09-12-2025-09-14]

- **Sigmanauts mining pool certificate issue**: iVacuum reported expired peer certificate error; directed to Telegram support but no root cause or ETA for fix documented. [@iVacuum, msg#574087, 2025-09-12]