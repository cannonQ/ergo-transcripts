# Ergo Developer Chat Summary — 2024-W06

## Key Topics Discussed

- **Ergoversary cross-chain speaker recruitment**: kushti organizing speakers and project leaders across Flux, Ergo, Kadena, and Alephium for Twitter Spaces event; ecosystem representation prioritized [@kushti khushi, msg#24801, 2024-02-08]

- **dApp ecosystem quality and incentives**: Discussion on whether speed improvements or functional application count matters more; consensus that polished interfaces, dedicated teams, and lower incentive barriers are blocking adoption [@Alex, @Paul, multiple messages, 2024-02-06]

- **Skillshare/marketplace platform concept**: Proposal for LETS-based payment platform allowing developers to share courses or hire freelancers (graphic designers, product managers, developers) to build on Ergo [@Alex, msg#24797-24798, 2024-02-07]

- **Pre-genesis UTXO set discovery**: Investigation into treasury and emission boxes created before genesis block; determined hardcoded in protocol but not indexed by explorers [@kushti khushi + dusek_, msg#24860-24862, 2024-02-10]

- **Ergonodes.net concurrency improvements**: Rewrite of node crawler concurrency logic to prevent periodic scanning failures [@Aberg, msg#24771, 2024-02-07]

- **AppKit JDK version guidance**: Clarification on Java runtime environment requirements for AppKit development [@Paul, @Aberg, 2024-02-11]

---

## Important Decisions or Announcements

- [@kushti khushi, msg#24801, 2024-02-08]: Cross-chain Spaces event confirmed with Flux, Ergo, Kadena, Alephium; actively recruiting core devs, ecosystem devs, and non-dev project leaders as speakers
- [@Aberg, msg#24915, 2024-02-11]: Recommendation to use JDK 21 (latest) for AppKit; other versions no longer maintained except for business support

---

## Technical Q&A Worth Preserving

- **Q** (@Paul): What JRE/JDK version should be used for AppKit development? Documentation mentions 7-8 but uncertain if that's outdated.
  **A** (@Aberg): Use JDK 21 (latest). Use OpenJDK from adoptium.net unless you need GraalVM-specific features. Earlier versions have no updates except for business support [@Aberg, msg#24915-24916, 2024-02-11]

- **Q** (@Alex): Is it already possible to create blockchain dApp indices using oracles? For example, an index of all DeFi token dApps on Ethereum, but tradeable via Ergo (like MSCI blockchain indices)?
  **A** (@Alex, self-response): Found existing projects but acknowledged lack of detailed information [@Alex, msg#24750, msg#24758, 2024-02-07]

- **Q** (@dusek_): Why does the treasury allocation transaction show no inputs in explorers despite having an input in the node?
  **A** (@kushti): This is the first transaction spending the treasury box created in pre-genesis state. Explorer only accounts boxes created in blocks; the protocol knows 3 pre-genesis boxes (emission, treasury, proof-of-no-premine) hardcoded in the UTXO set [@kushti khushi, msg#24862, 2024-02-10]

---

## Links Shared

- [ergonodes.net](http://ergonodes.net): Node crawler status monitoring; recently rewrote concurrency logic (HTTP only, not HTTPS)
- [https://x.com/RunOnFlux/status/1755326437370810615](https://x.com/RunOnFlux/status/1755326437370810615): Ergoversary cross-chain Twitter Spaces announcement
- [https://api.ergoplatform.com/info/supply](https://api.ergoplatform.com/info/supply): ERG supply endpoint
- [https://ergexplorer.com/transactions#e179f12156061c04d375f599bd8aea7ea5e704fab2d95300efb2d87460d60b83](https://ergexplorer.com/transactions#e179f12156061c04d375f599bd8aea7ea5e704fab2d95300efb2d87460d60b83): Treasury allocation transaction with pre-genesis input issue
- [adoptium.net](https://adoptium.net): Recommended OpenJDK distribution

---

## Unresolved Questions

- **dApp marketplace platform resourcing** [@Alex, msg#24798]: Volunteer willing to lead UX/UI and design systems; seeking frontend and backend developers—funding and team commitment status unclear
- **AppKit example projects** [@Paul, msg#24919]: Request for starter examples beyond FrozeCoin; user found some weeks prior but unable to relocate
- **Skillshare platform incentive mechanics** [@Alex, msg#24797]: Proposed using LETS or alternative stablecoins; exact token choice and conversion mechanism not finalized