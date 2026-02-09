# Gluon Gold on Ergo - Community Call Summary

**Call Date:** July 3, 2024  
**Call Title:** Gluon Gold on Ergo | Bruno Woltzenlogel Paleo | Ergoversary Summit 2024

## Executive Summary

Bruno Woltzenlogel Paleo provided a comprehensive development update on Gluon Gold, exactly one year after first presenting the Gluon stablecoin concept at the fourth Ergo anniversary. The presentation focused on the significant progress made in implementing Gluon Gold on Ergo - a stablecoin pegged to gold rather than USD. The protocol has been successfully deployed on Ergo's testnet for three months and is preparing for mainnet launch within the coming weeks.

The Gluon protocol introduces an innovative approach to stablecoin mechanics with four nuclear physics-inspired operations: fission (minting both stable and volatile coins simultaneously), fusion (redeeming both types simultaneously), and transmutation (converting between stable and volatile coins in either direction). This design maintains reserve ratio stability while allowing users flexibility through transmutation operations. Key achievements include a complete UI redesign, treasury feature implementation, bug fixes, and successful funding through an Ergo Raffle to support SDK development.

## Key Discussion Points

• **Protocol Mechanics**: Four operations inspired by nuclear physics - fission, fusion, and bidirectional transmutation between GAO (stable) and GALC (volatile) tokens
• **Testnet Deployment**: Successfully running for 3 months at gluon.gold with new UI design by Hammerman and implementation by Anastasia
• **Mainnet Parameters**: 1 gram gold peg, ERG backing, 14-day volume period, 0.66 fusion ratio, minimum 1.5 reserve ratio
• **Fee Structure**: Oracle fee (0.1%), optional UI fee (0-0.4%), declining treasury fee (0.5% to 0%), internal fees (1% base, up to 51% for extreme transmutations)
• **Recent Developments**: Logo design competition won by Lama Del Rey, UI redesign, treasury features, bug fixes by kushti and Luca
• **Funding Success**: Ergo Raffle successfully funded SDK development by Anon Real, with contributors eligible for GLUON contribution tokens
• **Marketing Plans**: Massive campaign with 200+ top-tier media PRs guided by Angie from Ergo, pending mainnet launch

## Decisions Made

• Mainnet launch parameters finalized: 1 gram gold peg, 14-day volume period, 0.66 fusion ratio, declining treasury fee structure
• Treasury fee set to decline linearly from 0.5% to 0% over 10 million ERG in revenue
• Oracle operators will be incentivized with 0.1% fees (improvement over SigmaUSD's free-riding model)
• Marketing campaign will commence only after mainnet launch
• SDK development funded through Ergo Raffle proceeds

## Notable Quotes

> "Gluon Gold and as far as I know also Dexy Gold will both be incentivizing the Oracle operator, so hopefully the Oracle will be more sustainable." - **Bruno** (highlighting the improvement over SigmaUSD's oracle sustainability issues)

> "So it was a bug related to using the wrong price in the volume calculation for one of the transmutation operations." - **Bruno** (describing the bug fix completed by kushti and Luca)

> "So this means that, for example, if the entire supply is only GAL and there's no GALC in circulation and you want to convert all that GAL to GALC, you will end up paying 51% in fees, but that's a very extreme case." - **Bruno** (explaining the variable transmutation fee structure)

## Participants

• **Bruno Woltzenlogel Paleo** - Lead presenter and Gluon protocol developer
• **Alexander Chepurnoy (kushti)** - Core developer (mentioned as collaborator)
• **Sanjit** - Development team member (mentioned as collaborator)
• **Luca** - Developer working on treasury features and bug fixes
• **Hammerman** - UI designer for the new interface
• **Anastasia** - Developer implementing the UI redesign
• **Anon Real** - Developer working on SDK implementation
• **Lama Del Rey** - Logo design competition winner