## Key Topics Discussed

- **BigInt Storage in Registers**: Discussion on storing BigInt values in ErgoScript registers. kushti noted that BigInt can be provided in context extension for signature checks within contracts, with similar application to registers.

- **Peer Discovery and Network Health**: Extended debate over peer propagation logic in node PR #1867. Aberg flagged that the handshake filter was filtering out long-connected peers instead of dead peers. kushti argued the long-term peer set propagates correctly due to periodic random replacement, proposing handshake-based filtering over 12-hour windows instead.

- **Simple Gaming Backend Architecture**: Grand Gambit sought guidance on building a coinflip game backend with 1 ERG → 2 ERG payout logic. Unknown suggested liquidity pool incentive models (citing Obolflip's design) and bet cap structures as better alternatives to simple winner-takes-all from a reserve pool.

- **Frontend Developer Recruitment**: Discussion of frontend engineering needs across ecosystem projects. SLT backend team (via kii) announced backend completion and crowdfunding pipeline, seeking frontend engineers to keep pace with backend development.

## Important Decisions or Announcements

- [@Ilya Oskin, msg#8378, 2022-11-07]: Explorer backend release 9.17.4 published; notified all running explorer instances to update.
- [@kushti khushi, msg#8462, 2022-11-09]: Version 5.0.3 node release planned for next day.
- [@kii, msg#8525, 2022-11-13]: SLT backend complete and operational; backend team moving into crowdfunding; actively seeking frontend engineers.

## Technical Q&A Worth Preserving

- **Q** (@Ilya Oskin, msg#8381): Can BigInt values be stored in registers?
  **A** (@kushti khushi, msg#8384): BigInt can be provided in context extension for signature checks within contracts. Registers should work the same way. (@Moein Zargarzadeh and @mhs_sam can provide technical details on bridge implementations.)

- **Q** (@Grand Gambit, msg#8498–8500): How do I build a backend for a simple coinflip game that receives 1 ERG and pays 2 ERG on win?
  **A** (@Unknown, msg#8517–8518): Suggested liquidity pool incentive model (like Obolflip's 24-hour bet cycles with winner pools) or scaling bet/payout based on available liquidity, rather than a simple reserve-depletion model.

## Links Shared

- [https://github.com/ergoplatform/explorer-backend/releases/tag/9.17.4](https://github.com/ergoplatform/explorer-backend/releases/tag/9.17.4): Explorer backend release notes.
- [https://github.com/ergoplatform/ergo/pull/1867](https://github.com/ergoplatform/ergo/pull/1867): Peer discovery/propagation PR under review; handshake filter behavior debated.
- [https://github.com/ergoplatform/ergo/pull/1867/files#diff-e80d90679b19dea0358f1220dca1e4f98319d8910011b4b4c46bd51dd5fa12a4](https://github.com/ergoplatform/ergo/pull/1867/files#diff-e80d90679b19dea0358f1220dca1e4f98319d8910011b4b4c46bd51dd5fa12a4): Specific diff highlighting PeerManager.scala changes.

## Unresolved Questions

- **Peer Propagation Logic**: Aberg flagged that PR #1867's handshake-based filter may still propagate dead peers. kushti's response that long-term propagation is "correct" was not fully convincing to Aberg; resolution status unclear.
- **DECO Acronym Clarification**: @Armeanio and @qx() debated whether "DECO" means "Decentralized Oracle," "Art Deco," or something else. @kii resolved it as "Decentralized Collaboration," but the confusion suggests internal terminology may need documentation.