# Ergo General Chat — 2021-W32b Summary
**Period:** 2021-08-11 to 2021-08-12

---

## Key Topics Discussed

- **Spectrum DEX (ErgoDEX) Beta Launch**: The ErgoDEX team launched the first eUTXO DEX beta on 2021-08-11, using test tokens (WT_ERG, WT_ADA, Erdoge, Kushti) on Ergo testnet. Users required Yoroi Nightly and the dApp connector (Chrome/Brave only, no Firefox). Key UX issues identified included high slippage on volatile test token pairs, orders hanging due to price movement, submitted-status deposits stalling, and balances not updating without manual refresh.

- **eUTXO Parallel Transaction Limitations**: Community discussion clarified that eUTXO architecture means operations within a single pool are chained sequentially, but operations across different pools are processed in parallel. Yoroi wallet at the time could not handle chained transactions, limiting users to one pending transaction at a time.

- **Erdoge/Kushti Meme Tokens**: Community-created native tokens used as test assets for the Spectrum DEX beta. Ron created Erdoge (500,000 supply) and the tokens were distributed freely for educational/testing purposes. Price volatility on the Erdoge/Kushti pair caused most swap orders to fail due to slippage, which Ilya Oskin acknowledged as an inherent issue with meaningless test tokens.

- **Audio NFTs on Ergo Auction House**: Community members Noah and Gazza began minting original audio NFTs on the Ergo Auction House, marking an early exploration of audio NFT use cases on Ergo. Noah noted investing significantly in professional audio equipment and software for production.

- **Ergo as First eUTXO DEX**: Discussion confirmed ErgoDEX was the first DEX on any eUTXO chain, and noted Ergo was pioneering the Yoroi dApp connector work that would benefit the broader Cardano ecosystem.

- **Ergo Supply Clarification**: Repeated community questions about Ergo's supply were answered: circulating supply ~40M at the time, max supply 97M, fully mined approximately 6 years from mid-2021.

- **Binance Listing Discussion**: Community consensus expressed that Ergo was not pursuing a Binance listing due to cost (millions required) and a preference for organic growth. The team did not want to give Binance control over volume. Recent listings on KuCoin, Gate.io, Bitcoin.com, and Changelly were noted.

---

## Important Decisions or Announcements

- [@Glasgow, msg#185756, 2021-08-11]: ErgoDEX beta officially launched — first eUTXO DEX — requiring Yoroi Nightly, dApp connector, and test tokens. Blog post published at ergoplatform.org.
- [@Ilya Oskin, msg#185835, 2021-08-11]: Erdoge/Kushti pool validation bug fixed.
- [@Ilya Oskin, msg#185988, 2021-08-11]: UI validation issue causing swap errors fixed.
- [@Armeanio, msg#187484, 2021-08-12]: Weekly dev update published, including news of hardware wallet support for ERG (Ledger integration referenced in dev update link).
- [@Glasgow, msg#185870, 2021-08-11]: Confirmed users will be able to create custom liquidity pools with any Ergo native token once ErgoDEX goes live.
- [@Ilya Oskin, msg#185798, 2021-08-11]: Confirmed ability to create custom liquidity pairs (e.g. Erdoge/ERG) will be available in the live release.

---

## Technical Q&A Worth Preserving

- **Q** (@Unknown): Are transactions on the DEX single-threaded/blocking? Can you fire off multiple transactions while one is pending?
  **A** (@Ilya Oskin, msg#185656): All operations with a single pool are chained sequentially. Operations across different pools are processed in parallel.

- **Q** (@Unknown): Is the parallel transaction limitation a product of eUTXO?
  **A** (@Glasgow, msg#185646 / @Dmitry Usov, msg#185647): Yes, eUTXO architecture — however, transactions can be chained together in the same block.

- **Q** (@Unknown): Why did my swap debit the sell-side asset but not credit the buy-side?
  **A** (@Ilya Oskin, msg#185706): Price slipped beyond the minimum output defined in your order due to high volatility of test tokens. The order remains pending until price conditions are met. Increasing slippage tolerance will help.

- **Q** (@Unknown): How does a user know their order will not be executed?
  **A** (@Ilya Oskin, msg#185721): Refunds are always available for non-executed orders and can be initiated directly from the UI.

- **Q** (@A, msg#185650): Is the single-transaction limitation why Yoroi won't allow a new transaction until a pending one is confirmed?
  **A** (@Dmitry Usov, msg#185654): Yes — Yoroi cannot do chained transactions, which is why only one transaction can be sent at a time.

- **Q** (@Unknown): Is Ergo the first eUTXO coin with a DEX?
  **A** (@Gazza, msg#185675): Yes, first eUTXO DEX. (@Ron, msg#185677): Also notable that Ergo is pioneering the Yoroi dApp connector work with wide-reaching implications for the Cardano ecosystem.

- **Q** (@Unknown): Will Bitcoin function on the DEX once Taproot is activated?
  **A**: Not directly answered, though Taproot activation was noted as relevant context by community.

- **Q** (@blake starky, msg#186674): After minting a token on ergoutils.org, is it possible to change the decimal point?
  **A** (@Ron, msg#186711): No — just mint a new token.

- **Q** (@Lorem, msg#186240): To provide liquidity on ErgoDEX, do I need both tokens in a pair?
  **A** (@Glasgow, msg#186243 / msg#186271): Yes — both tokens are required in equal value. The DEX could swap one side for you first if needed.

---

## Links Shared

- [https://ergoplatform.org/en/blog/2021-08-11-ergodex-beta/]: Official ErgoDEX beta launch blog post with setup instructions for Yoroi Nightly and dApp connector.
- [https://beta.ergodex.io/]: ErgoDEX beta frontend URL.
- [https://github.com/ergolabs/ergo-dex-frontend/issues]: GitHub issues tracker for ErgoDEX frontend bug reports.
- [https://docs.google.com/forms/d/e/1FAIpQLSf_5UOe5ZupBCrlWjpyEQVLpJnqsN8Ah3fjiMnzd5SRLFRTbQ/viewform]: ErgoDEX feedback form for bugs and improvement proposals.
- [https://www.reddit.com/r/ergonauts/comments/p2mg10/ergodex_beta_launch_competition_know_your_risks/]: Reddit competition for ErgoDEX beta launch — source for obtaining Erdoge tokens.
- [https://sigmaverse.io/]: Ergo dApps directory — noted as needing ErgoDEX added.
- [https://t.me/ergodex_community]: ErgoDEX community Telegram group.
- [https://ergoplatform.org/en/blog/2021-08-04-the-ergonaut-handbook/]: The Ergonaut Handbook — recommended reading for new community members.
- [https://ergoplatform.org/en/blog/2021-04-21-wrapassets-announces-integration-with-ergodex/]: Wrap Assets integration announcement with ErgoDEX, relevant to cross-chain functionality.
- [https://gravity.tech/]: Gravity protocol enabling cross-chain swaps and communication with Ergo.
- [https://curiaregiscrypto.medium.com/whats-going-on-behing-the-screens-ergo-weekly-dev-update-august-11th-2f43c84e232a]: Weekly dev update August 11th including hardware wallet news.
- [https://ergoauctions.org/#/auction/specific/33132ba0c8ad87d20ab62e96a803487aaee86cf6275188cbf9046c1afc01a7ef]: First in ErgQuotes audio NFT series by Noah.
- [https://ergoauctions.org/#/auction/specific/edf82106f830b7861c3cca52c9032c034e2292356df1ccdbeb7c21b140e0ab50]: Original audio NFT by Gazza — guitar track.
- [https://github.com/MrStahlfelge/ergo-wallet-android]: Ergo Android wallet GitHub repository.
- [https://api.ergoplatform.com/api/v1/tokens/fbbaac7337d051c10fc3da0ccb864f4d32d40027551e1c3ea3ce361f39b91e40]: API endpoint for Kushti token metadata.
- [https://www.reddit.com/r/ergonauts/wiki/faq]: Ergo FAQ on Reddit.
- [https://t.me/ErgoTokenCentre]: Ergo Token Centre Telegram — for obtaining test tokens.

---

## Unresolved Questions

- **Non-blocking/parallel transactions in ErgoDEX UI**: Community flagged that single-threaded transaction UX is not standard expected behavior. The question of when/whether the ErgoDEX frontend would support chained or parallel transaction submission was raised but not resolved.
- **Order expiry/failure notification**: Users noted there was no clear mechanism to notify them when an order would not be executed (other than checking status manually). Flagged as needing a better UX solution beyond timeout.
- **WT_ADA balance not updating after swap**: @blake starky reported swap deducted WT_ADA but did not increase WT_ERG balance, even after adjusting slippage and fees. Not resolved in thread.
- **Yoroi dApp connector Firefox support**: Confirmed unavailable — no timeline given for Firefox extension.
- **ErgoDEX beta duration**: No official end date for the beta was communicated.
- **Sending multiple different assets simultaneously in Yoroi**: Flagged as a needed feature; noted as potentially draining ERG if attempted incorrectly. No resolution or timeline provided.