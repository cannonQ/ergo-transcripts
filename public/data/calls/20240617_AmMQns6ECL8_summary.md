# Ergo Blockchain Community Call Summary

**Date:** June 17, 2024  
**Topic:** Rosen Port | sangeet24 | ErgoHack VIII

## Executive Summary

Sangi24 presented Rosenport, a complementary solution to the existing Rosen Bridge that addresses high fee barriers for smaller cross-chain transactions. The project uses batch bridging to enable users with small amounts (under $2,000) to avoid the current $10 minimum fee structure by pooling transactions together until they reach the $2,000 threshold required for the Rosen Bridge's 0.5% fee tier. The team has completed technical architecture and UI design, with public testing planned for mid-July and full release targeted for end of July 2024.

The presentation included a detailed demo of the user interface, showcasing how users can initiate small transactions (like $87 worth of reserve Bitcoin) and monitor batch progress. Rosenport is positioned as an inclusive solution that makes cross-chain bridging accessible to smaller holders while building on top of the existing Rosen Bridge infrastructure rather than competing with it.

## Key Discussion Points

• **Problem identification**: Current Rosen Bridge charges $10 minimum fee for transactions under $2,000, making small transfers cost-prohibitive
• **Batch bridging solution**: Aggregates multiple small transactions until reaching $2,000 threshold to qualify for 0.5% fee structure
• **User experience design**: Simple interface showing batch status, average wait times, and transaction history
• **Technical implementation**: Working with Rosen team to develop Rosen SDK as core component
• **Multi-chain support**: Will implement all future networks that Rosen Bridge adds (Bitcoin network next)
• **Development timeline**: Public testing mid-July, public release end of July 2024
• **Withdrawal feature**: Users can withdraw from batches before execution if needed

## Decisions Made

• Public testing phase scheduled for mid-July 2024
• Full public release targeted for end of July 2024
• Will implement all future Rosen Bridge network additions
• Team will continue gathering user feedback for UI improvements
• No claiming process required - streamlined user experience

## Notable Quotes

> "This is not a competition against the Rosen Bridge, rather a complementary system being built on top of it. We call it the Rosenport for this reason." - **Sangi24**

> "Ten can be quite a big amount when you want to just maybe bridge over $50." - **Sangi24**

> "The first step is smaller holders can participate in the Ergo ecosystem. It's inclusive to everyone." - **Sangi24**

## Participants

• **Sangi24** - Project lead and presenter, Rosenport development team
• **Key888** - Rosenport development team member (mentioned)
• **Hammerman** - Rosenport development team member (mentioned)

*Note: This was primarily a presentation format with Sangi24 as the sole speaker during the recorded portion.*