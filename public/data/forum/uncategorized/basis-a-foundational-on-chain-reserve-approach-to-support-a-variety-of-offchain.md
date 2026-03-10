---
title: Basis, a foundational on-chain reserve approach to support a variety of offchain
  protocols
description: 'ErgoForum discussion: Basis, a foundational on-chain reserve approach
  to support a variety of offchain protocols'
tags:
- addresses
- amm
- avl-tree
- box
- chaincash
- ergoforum
- ergoscript-context
- liquidation
- native-tokens
- nipopow
- oracle-pools
- registers
- ring-signatures
- rosen-bridge
- sigma-chains
- stealth-addresses
- transaction
- uncategorized
- utxo-set-snapshot
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/basis-a-foundational-on-chain-reserve-approach-to-support-a-variety-of-offchain-protocols/5153
created: '2025-05-05'
last_activity: '2026-02-21'
posts_count: 3
views: 619
likes: 9
glossary_hits:
- AMM
- AVL tree
- Addresses
- Box
- ChainCash
- ErgoScript context
- Liquidation
- Native tokens
- NiPoPoW
- Oracle pools
- Registers
- Ring signatures
- Rosen Bridge
- Sigma Chains
- Stealth Addresses
- Transaction
- UTXO Set Snapshot
---

# Basis, a foundational on-chain reserve approach to support a variety of offchain protocols

> **Forum thread:** [https://ergoforum.org/t/basis-a-foundational-on-chain-reserve-approach-to-support-a-variety-of-offchain-protocols/5153](https://ergoforum.org/t/basis-a-foundational-on-chain-reserve-approach-to-support-a-variety-of-offchain-protocols/5153)
> **Category:** Uncategorized | **Created:** 2025-05-05 | **Posts:** 3 | **Views:** 619

**Related concepts:** AMM, AVL tree, Addresses, Box, ChainCash, ErgoScript context, Liquidation, Native tokens, NiPoPoW, Oracle pools, Registers, Ring signatures, Rosen Bridge, Sigma Chains, Stealth Addresses, Transaction, UTXO Set Snapshot

---

### Post #1 — @kushti (2025-05-05)

In this post I am going to describe Basis, an onchain contract which may serve very different offchain applications. Basis is just about providing reserves, and ERGs (or other tokens) may be redeemed from a reserve if a note, which just a message amount to redeem along with unique note ID, is signed by a reserve holder along with offchain state tracker (a centralized server, or a federation). Double spending of a note is prevented by storing a tree of IDs of notes being spent, contract is checking that a note ID is added to the tree on redemption.

This simple structure is allowing for many possibilities. Offchain cash structure could be very different: virtual TXOs, signed notes produced in different ways etc. Offchain money can be fully backed or have only fractional reserve. Tracking environments could also be very different: p2p (when offchain state tracker is a counterparty), centralized servers, federated trackers or even sidechains.

There are also many ways to extend the basic contract. For example, it is possible to use blind signatures to get private offchain cash; it is possible to extend contract to support multiple trackers for the same reserve, etc.

Contract can be found at [chaincash/contracts/offchain/reserve.es at master · ChainCashLabs/chaincash · GitHub](https://github.com/ChainCashLabs/chaincash/blob/master/contracts/offchain/reserve.es)

---

### Post #2 — @kushti (2025-09-08)

The provided initial design was not friendly to micropayments (when there is need to merge multiple notes before redemption), and had some other issues. After some thoughts I’ve came to a bit different design which is provided below:

# Basis - offchain IOU money for digital economies and communities

In this writing, we propose Basis, efficient offchain cash system, backed by on-chain reserves but also allowing for creating credit (unbacked IOU money). Its use cases are now thought as follows:

* micropayments, such as payments for content, services, resources usage in p2p and distributed systems. Notable difference from Lightning / FediMint / Cashu etc is that here a service can be provided on credit (within certain limits), which would boost growth for many services, allow for globally working alternative to free trial, and so on.
* community currencies, which can be about small circles where there is trust to each other, using fully unbacked offchain cash, more complex environments using fully or partially backed cash, potentially with tokenized local reserves (such as gold and silver) etc

Such use cases would definitely win from simple but secure design, no on-chain fees, and no need to work with blockchain at all before need to back issued cash or redeem cash for blockchain asssets.

But there can be more use cases discovered with time!

## Basis Design

As we have offchain cash with possibility to create credit (unbacked money), we have need to track all the money in form of IOU (I Owe You) notes issued by an issuer, for all the issuers. In comparison with fully on-chain ChainCash design, we have to deal with some security relaxation in the case of offchain notes.

As a simple but pretty secure solution, the following design is proposed, which can then be improved in many directions (see “Future Extensions” section):

* every participant has a public key over elliptic curve supported by Ergo blockchain (Secp256k1, the same curve is used in Bitcoin)
* only reserves are on-chain. A reserve can be created at any time. A reserve is bound to public key of its owner. Anyone (presumably, owner in most cases) can top the reserve up. Owner can withdraw any amount from the reserve, in two steps (on-chain transactions), first, the owner is announcing that he is going to withdraw, and two weeks after  
  the withdrawal may be completed (or cancelled at any time).
* for keeping offchain cash ledgers, we have trackers. Anyone can launch a tracker service (just running open-source software on top of powerful enough hardware is needed for that). With time a tracker is getting trust and userbase if behaves honestly. The design is trying to minimize trust in tracker. For example, a tracker cant redeem IOU notes made  
  to other parties, as they are signed, and the signature is check in redemption on-chain contract. If tracker is disappearing, after some period last tracker state snapshot committed on-chain becomes redeemable without it. If tracker is starting censoring notes associated with a public key, by not including them into on-chain update, it is still possible to redeem them. There could be different improvements to the tracker design, see “Future Extensions” section.
* IOU note from A to B is represented as (B\_pubkey, amount, timestamp, sig\_A) record, where amount is the **total** amount of A’s debt before B, timestamp is timestamp of latest payment from A to B, and sig\_A is a signature for (B\_pubkey, amount, nonce). Only one updateable note is stored by a tracker, and redeemable onchain. Thus a tracker is storing  
  (amount, timestamp) pairs for all A->B debt relationships. The tracker commits on-chain to the data by storing a digest of a tree where hash(A ++ B) acts as a key, and (amount, timestamp) acts as a value.
* If A has on-chain reserve, B may redeem offchain from A->B note, by providing proof of (amount, timestamp). Reserve contract UTXO is storing tree of hash(AB) → timestamp pairs. It is impossible to withdraw a note with timestamp <= redeemed again. After on-chain redemption, A and B should contact offchain to deduct before next payment from A to B done. A note may be redeemed only one week after creation (timestamp of last block is one week ahead of timestamp in the note, at least), thus for services it makes sense to have a lot of rotating keys.

## Security Assumptions

We assume that tracker is honestly collecting and announcing notes it has. However, malicious trackers may deviate from honest behaviour.

Tracker can simply go offline, but then the latest state committed on-chain is still redeemable.

Tracker may remove debt notes of protocol participants. This problem can be tackled with the anti-censorship protection from “Future Extensions” section.

## Future Extensions

* Anti-Censorship Protection

If tracker is starting censoring notes associated with a public key, by not including them into on-chain update, it is still possible to redeem them with anti-censorship protection. For that, tracker box should be protected with a contract which has condition to include spent tracker input’s id into a tree stored in a register. Then tracker is storing commitment to all it previous states, basically, and we can use that to add a condition to the reserve contract to allow withdrawal of a note which was tracked before but not tracked now, and also not withdrawn.

* Federated trackers

Instead of a single tracker, we may have federation, like done in Oracle Pools, or double layered federation like done in Rosen bridge.

* Tracking sidechains

As a continuation of federation tracker idea, we may have tracking sidechains, for example, merged-mined sidechains, to reduce multisig security to majority-of-Ergo-hashrate-following-sidechain security.

* Programmable cash

We may store redeeming condition script hash instead of recipient pubkey just in IOU notes, and add the condition to other redeeming conditions in onchain redemption action.

* Multi-tracker reserve

Possible to have reserve contract with support for multiple reserves, put under AVL+ tree or just in collection if there are few of them.

For most reserves that does not make sense probably, but multi-tracker reserves can be used as gateways between different trackers, to rebalance liquidity etc.

* Privacy

Not hard to do withdrawals to stealth addresses.

## Contract

Can be found at [chaincash/contracts/offchain/basis.es at master · BetterMoneyLabs/chaincash · GitHub](https://github.com/BetterMoneyLabs/chaincash/blob/master/contracts/offchain/basis.es)

And up-to-date version of this writing can be found at [chaincash/contracts/offchain/basis.md at master · BetterMoneyLabs/chaincash · GitHub](https://github.com/BetterMoneyLabs/chaincash/blob/master/contracts/offchain/basis.md)

---

### Post #3 — @kushti (2026-02-21)

I’ve reworked contracts and reformulated tracker’s role heavily recently.

How does it work now:

* a tracker holds cumulative A → B debt (as positive ever increasing number).  
  A key->value dictionary is used to store the data as hash(A\_pubkey || B\_pubkey) → totalDebt,  
  where totalDebt is the cumulative amount of debt A owes to B.
  + to make a (new payment) to B, A is taking current AB record, increasing cumulative debt,  
    signing the updated record (message: hash(A||B) || totalDebt) and sending it to the tracker.
  + tracker is periodically committing to its state (dictionary) by posting its digest on chain  
    via an AVL tree in register R5. The tree stores hash(A||B) → totalDebt mappings.
  + at any moment it is possible to redeem A’s debt to B by calling redemption action of the reserve contract below.  
    The contract tracks cumulative amount of debt already redeemed for each (owner, receiver) pair in an AVL tree.  
    Redemption requires BOTH reserve owner’s signature AND tracker’s signature on message: hash(ownerKey||receiverKey) || totalDebt.  
    The tracker signature guarantees that the offchain state is consistent and prevents double-spending.  
    Additionally, the contract verifies that totalDebt is committed in the tracker’s AVL tree (context var #8 provides lookup proof).
  + to redeem: B contacts tracker to obtain signature on the debt note, then presents reserve owner’s signature  
    (from original IOU note) and tracker’s signature to the on-chain contract along with AVL tree proofs:
    - proof for reserve tree lookup (context var #7, optional for first redemption)
    - proof for tracker tree lookup (context var #8, required)
  + always possible to top up the reserve. To redeem partially, reserve holder can make an offchain payment to self (A → A)  
    updating the cumulative debt, then redeem the desired amount.

Debt Transfer (Novation):

* The scheme supports transferring debt obligations between creditors with debtor consent.
* Example: A owes debt to B. B wants to buy from C. If A agrees, A’s debt to B can be decreased  
  and A’s debt to C can be increased by the same amount.
* Process:
  1. B initiates transfer: requests to transfer amount X from debt(A->B) to debt(A->C)
  2. A signs the transfer: message includes hash(A||B), hash(A||C), and transfer amount X
  3. Tracker verifies: debt(A->B) >= X, then updates both records atomically
  4. Tracker commits: posts updated AVL tree with decreased debt(A->B) and increased debt(A->C)
* This allows debt to circulate in the network: A’s credit with B can be used to pay C,  
  effectively making debt notes transferrable with debtor consent.
* Benefits:
  + Enables triangular trade: A->B->C becomes A->C (B is paid by debt transfer)
  + Reduces need for on-chain redemption: debt can be re-assigned offchain
  + Maintains security: debtor must consent, tracker must verify and commit

Security analysis and the role of the tracker:

* the usual problem is that A can pay to B and then create a note from A to self and redeem. Solved by tracker solely.
* double spending of a note is not possible by contract design (AVL tree tracks cumulative redeemed amounts).
* tracker cannot steal funds as both owner and tracker signatures are required for redemption.
* tracker can re-order redemption transactions, potentially affecting outcome for undercollateralized notes.
* debt transfer security:
  + debtor (A) must sign: prevents unauthorized transfer of debt obligation
  + tracker verifies source debt exists: prevents creating debt(A->C) without sufficient debt(A->B)
  + atomic update: both decrease(A->B) and increase(A->C) happen together or not at all
  + tracker cannot forge transfer: requires A’s signature on transfer message

Normal workflow:

* A is willing to buy some services from B. A asks B whether debt notes (IOU) are accepted as payment.  
  This can be done non-interactively if B publishes their acceptance predicate.
* If A’s debt note is acceptable, A creates an IOU note with cumulative debt amount and signs it  
  (signature on message: hash(A\_pubkey || B\_pubkey) || totalDebt). A sends the note to the tracker.
* The tracker verifies the note against its state, updates its internal ledger, and provides a signature  
  on the same message. This tracker signature is required for on-chain redemption.
* A sends both signatures (A’s and tracker’s) to B. B now holds a valid, redeemable IOU note.
* At any time, B can redeem the debt by presenting both signatures to the reserve contract along with  
  an AVL tree proof showing the cumulative redeemed amount. The contract verifies both signatures and  
  ensures the redeemed amount doesn’t exceed (totalDebt - alreadyRedeemed).
* At any time, A can make another payment to B by signing a message with increased cumulative debt amount.
* A can refund by redeeming like B (in pseudonymous environments, A may have multiple keys).  
  B should always track collateralization level and can prepare redemption transactions in advance.

Debt Transfer Workflow (Triangular Trade):

* Scenario: A owes 10 ERG to B. B wants to buy 5 ERG worth of services from C.
* Step 1: B proposes to C that B will pay via debt transfer from A. C agrees.
* Step 2: B requests transfer from tracker: decrease debt(A->B) by 5 ERG, increase debt(A->C) by 5 ERG.
* Step 3: Tracker notifies A of the transfer request. A verifies the purchase (B->C) and signs approval.
* Step 4: A’s signature message: hash(A||B) || hash(A||C) || 5000000000L (transfer amount)
* Step 5: Tracker verifies: debt(A->B) >= 5 ERG, A’s signature is valid.
* Step 6: Tracker atomically updates: debt(A->B) -= 5 ERG, debt(A->C) += 5 ERG.
* Step 7: Tracker posts updated AVL tree commitment on-chain.
* Result: B is paid (debt reduced), C is creditor (new debt created), A owes C instead of B.
* C can now redeem from A’s reserve or further transfer the debt to D (with A’s consent).

Tracker’s role here is to guarantee fairness of payments. Tracker can’t steal A’s onchain funds as A’s signature is  
required. Tracker cannot enable double-redemption as the contract tracks cumulative redeemed amounts in AVL tree.  
Tracker can re-order redemption transactions though, potentially affecting outcome for B when a note is  
undercollateralized. Tracker can be a centralized entity or a federation.

There could be a lot of trackers around the world. Some could be global, some serving local trade. Thus the whole  
system could be seen as a network of different tracker-centered networks, with Ergo blockchain being a neutral  
global trustless financial layer connecting different networks.

With some trust involved in managing redemption process, some pros are coming:

* no on-chain fees for offchain transactions. Suitable for micropayments.
* Unlike other offchain cash schemes (Lightning, Cashu/Fedimint etc), transactions can be done with no  
  collateralization first. Or there could be payment on credit and then on-chain reserve being created  
  to pay for services already provided. Could provide nice alternative to free trials etc.

Examples and demos:

Example of AI agents self-sovereign economy:

* repo maintainer agent A is looking for new issues since last scan, picking one to work on,  
  and choose agent candidates set with needed skills (frontend, backend, testing, etc)
* after having corresponding PR merged, A will have reward in git tokens, but it doesnt have it at this point.  
  so it is reaching agents offering to accept a debt note
* let’s assume some agent B is found and agreed to make a work on credit. He is sending work done to A ,  
  A is checking it with another agent C (paying with debt note as well) and opening a PR after all
* when PR is merged, A is getting paid in git tokens, he may convert them into ERG in a liquidity pool, for example  
  and create an on-chain reserve. B and C now can exchange promisory notes for ERG using the reserve smart contract

Example with Debt Transfer (Triangular Trade):

* Agent A (repo maintainer) owes 10 ERG to Agent B (frontend dev) for completed work.
* Agent A needs testing work from Agent C (tester) but hasn’t created reserve yet.
* Agent B needs testing work from Agent C (5 ERG worth).
* Instead of B paying C separately, they use debt transfer:
  + B requests: transfer 5 ERG from debt(A->B) to debt(A->C)
  + A verifies B’s work was satisfactory and approves the transfer
  + Tracker updates: debt(A->B) = 5 ERG, debt(A->C) = 5 ERG
* Result: B effectively paid C using A’s debt obligation. A now owes C directly.
* When A creates reserve, both B and C can redeem their respective portions.
* This creates a chain of trust: A’s creditworthiness backs payments to B and C.

Example of digital trading in occasionaly connected area:

* imagine some area which is mostly disconnected from the internet but having connection occasionally
* but it has a local tracker
* so traders in the area can trade still, creating credit. When credit limits are exceeded (i.e. no more trust  
  could be given), on-chain reserves can be used, with redemption transactions to be collected by the tracker.  
  Once there is even super-slow Internet connection, tracker can send them with getting lean confirmations  
  via NiPoPoWs ( similarly to [(E)mail Client for Limited or Blocked Internet - Research and Development - Ergo Community Forum](https://www.ergoforum.org/t/e-mail-client-for-limited-or-blocked-internet/134) )

Current version of the contract can be found @ <https://raw.githubusercontent.com/BetterMoneyLabs/chaincash/refs/heads/master/contracts/offchain/basis.es> ( or basis.es in [GitHub - BetterMoneyLabs/chaincash: ChainCash - elastic peer-to-peer money collectively backed by blockchain assets and trust](https://github.com/BetterMoneyLabs/chaincash) , commit cb972c0f9bc96653e5d7f765dad22d89d2647651 )
