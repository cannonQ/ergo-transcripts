# Ergo Community Call Summary: The Four States of a UTXO Transaction

**Call Date:** July 3, 2025  
**Call Title:** The Four states of a UTXO transaction | c8 | Ergoversary 2025

## Executive Summary

This community call focused on improving user experience in UTXO-based blockchain transactions by implementing a more sophisticated transaction state system. The presentation demonstrated how traditional blockchain interfaces with only two states (unconfirmed and confirmed) are insufficient for providing users with adequate feedback during transaction processing.

The call introduced a four-state transaction model that provides real-time feedback throughout the entire transaction lifecycle, from initial preparation through final confirmation or cancellation. This enhanced UX approach aims to keep users better informed about their transaction status, reducing confusion and improving overall platform usability on the Ergo blockchain.

## Key Discussion Points

• **Current limitations**: Traditional UTXO chains only show two transaction states (unconfirmed/confirmed), which is inadequate for good user experience

• **Four-state model introduction**: The new system includes Prepared, In Mempool, Confirmed, and Cancelled states

• **Visual feedback system**: Each state transition includes specific animations (double blinks, shake animations) and visual indicators (bar loaders, circular loaders, checkmarks, crosses)

• **Practical demonstration**: Used an ERG to Dexy Gold swap as a real-world example of the state transitions

• **Cancellation scenarios**: Identified five different ways transactions can be cancelled:
  - User cancellation in wallet
  - Mempool rejection
  - Transaction replacement through higher fees
  - Input box invalidation
  - Block reorganization after confirmation

• **Color-coded feedback**: Green highlighting for successful confirmations, red highlighting for cancellations

## Decisions Made

No specific decisions or action items were explicitly mentioned in this presentation-style call. The content appeared to be educational/informational rather than decision-making focused.

## Notable Quotes

• **"For a seamless user experience, this is not enough. We need at least four."** - AI presenter, emphasizing the inadequacy of traditional two-state transaction models

• **"A transaction can also be cancelled at any moment, either by the user or by the network."** - AI presenter, highlighting the dynamic nature of transaction states

• **"Always remember to provide real-time feedback to your users."** - AI presenter, concluding with the key takeaway about user experience principles

## Participants

• **AI Presenter** - Led the entire presentation, explaining the four-state transaction model and demonstrating the user interface concepts

*Note: This appears to have been a single-presenter educational session rather than a traditional community discussion call with multiple participants.*