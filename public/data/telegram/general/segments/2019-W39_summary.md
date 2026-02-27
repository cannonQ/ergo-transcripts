# Ergo General Chat Summary — 2019-W39

## Key Topics Discussed

- **ERG/EFYT Swap Mechanics**: Weekly swap walls to distribute mined ERG, p2p exchange on Waves where EFYT/ERG ratio occasionally dips below 1:1. Swaps continue long-term; users can defer conversion indefinitely but should stay engaged with their investment.

- **Wallet Integration & dApp Infrastructure**: EIP-1 enhancement protocol will enable dApps (like crowdfunding CLI tools) to build on Ergo without embedding in browser extensions. Magnum wallet supports ERG on web but not yet on Android mobile app.

- **ERG Exchange Listings & Trading**: ERG live on Bisq (peer-to-peer Bitcoin exchange) and Tidex. Withdrawal confirmation times vary by exchange; Tidex support typically responds within 24 hours with occasional 21-hour delays reported.

- **Smart Contract Presentation Materials**: Presentation/slides created explaining how smart contracts work on Ergo; community requested YouTube upload for easier sharing.

- **ErgoScript Whitepaper Ideas**: Discussion of P2S (pay-to-script) addresses allowing exchanges to recover withdrawn funds within 24-hour window before user control transfers.

## Important Announcements

- [@MHS_SAM, msg#13932, 2019-09-28]: Ergo presentation scheduled at Iran Blockchain Summit

- [@Unknown, msg#13905-13906, 2019-09-27]: Weekly ERG swap walls continue indefinitely as mining accumulates supply to distribute

## Technical Q&A Worth Preserving

- **Q** (@Unknown, msg#13874): Are there plans to implement P2S addresses allowing exchanges to recover withdrawn funds up to 24 hours, with user control transferring after that window?
  **A** (@Unknown, msg#13882): Expected but unfortunately not yet prioritized; mentioned as concept in ErgoScript whitepapers.

- **Q** (@scalahub, msg#13884): Has anyone tested Bisq for ERG trading?
  **A** (@Jason Davies, msg#13885-13887): ERG is live on Bisq; no completed trades yet. Integration doesn't require tight wallet coupling—users verify ERG transfer on explorer before releasing BTC security deposit; disputes also resolved via explorer verification.

- **Q** (@Noah, msg#13883): Does Magnum wallet mobile app (Android) support ERG?
  **A** (Implicit from context): Magnum web supports ERG but Android app does not yet (supports only 7 coins).

- **Q** (@Unknown, msg#13867): Why is ERG transfer speed very slow?
  **A** (@𝖒𝖊𝖓𝖙𝖆𝖑𝖎𝖘𝖙կշօ, msg#13870): Normal behavior; each exchange sets its own confirmation requirement thresholds before accepting transfers.

## Links Shared

- [Twitter: @chepurnoy/status/1175818607172956160](https://twitter.com/chepurnoy/status/1175818607172956160): kushti update (context not specified in chat)

- [Twitter: @ergoplatformorg/status/1176087124891844608](https://twitter.com/ergoplatformorg/status/1176087124891844608): Ergo Foundation announcement (context not specified)

- [Twitter: @ergoplatformorg/status/1176122539401261056](https://twitter.com/ergoplatformorg/status/1176122539401261056): Ergo Foundation update (context not specified)

- [Twitter: @mhs_sam/status/1177833837621055489](https://twitter.com/mhs_sam/status/1177833837621055489): Iran Blockchain Summit presentation notice

- [Twitter: @mhs_sam/status/1178261573057617921/photo/1](https://twitter.com/mhs_sam/status/1178261573057617921/photo/1): Summit event photo/coverage

- [Ergo Forum: ergoscript-playground-using-kiosk](https://www.ergoforum.org/t/ergoscript-playground-using-kiosk/96): ErgoScript Playground implementation discussion

## Unresolved Questions

- Will smart contract presentation/slides be uploaded to YouTube for easier community sharing? (@Unknown, msg#13896)

- What is the long-term plan for P2S exchange recovery addresses mentioned in ErgoScript whitepaper? (msg#13874-13882)

- Will Magnum wallet Android app eventually support ERG? (msg#13883)

- Ergo Explorer response times reportedly slow — performance issue flagged but not resolved (@Андрюхин, msg#13879)

---

**Note**: This week was primarily activity-based (exchange listings, presentations, swap operations) with limited protocol-level technical discussion. Most exchanges addressed operational or wallet integration questions rather than core Ergo design topics.