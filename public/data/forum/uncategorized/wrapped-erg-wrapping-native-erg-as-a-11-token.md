---
title: 'Wrapped ERG: wrapping native ERG as a 1:1 token'
description: 'ErgoForum discussion: Wrapped ERG: wrapping native ERG as a 1:1 token'
tags:
- box
- ergo-explorer
- ergoforum
- ergoscript
- ergoscript-context
- invariant
- mempool
- native-tokens
- sigma-protocols
- token-id-rule
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/wrapped-erg-wrapping-native-erg-as-a-1-1-token/469
created: '2020-11-11'
last_activity: '2022-01-12'
posts_count: 5
views: 1294
likes: 15
glossary_hits:
- Box
- Ergo Explorer
- ErgoScript
- ErgoScript context
- Invariant
- Mempool
- Native tokens
- Sigma protocols
- Token ID rule
- Transaction
---

# Wrapped ERG: wrapping native ERG as a 1:1 token

> **Forum thread:** [https://ergoforum.org/t/wrapped-erg-wrapping-native-erg-as-a-1-1-token/469](https://ergoforum.org/t/wrapped-erg-wrapping-native-erg-as-a-1-1-token/469)
> **Category:** Uncategorized | **Created:** 2020-11-11 | **Posts:** 5 | **Views:** 1294

**Related concepts:** Box, Ergo Explorer, ErgoScript, ErgoScript context, Invariant, Mempool, Native tokens, Sigma protocols, Token ID rule, Transaction

---

### Post #1 — @jasondavies (2020-11-11)

Similar to “wrapped ETH”, I thought it might be interesting to wrap ERG as a token. In other words, create a token such that it can always be trustlessly exchanged 1:1 for native ERG.

I don’t see any immediate uses for this, but in theory, it could simplify applications that require special casing to handle native ERG vs tokens.

The [contract](https://wallet.plutomonkey.com/p2s/?source=ewoKICB2YWwgdG9rZW5faWQgPSBTRUxGLnRva2VucygwKS5fMTsKICB2YWwgc2VsZlNjcmlwdCA9IFNFTEYucHJvcG9zaXRpb25CeXRlczsKCiAgZGVmIHN1bShib3hlczogQ29sbFtCb3hdKSA9IHsKICAgIGJveGVzLmZvbGQoMEwsIHsoYTogTG9uZywgYjogQm94KSA9PgogICAgICBpZiAoYi5wcm9wb3NpdGlvbkJ5dGVzID09IHNlbGZTY3JpcHQgJiYgYi50b2tlbnMuc2l6ZSA+IDAgJiYgYi50b2tlbnMoMCkuXzEgPT0gdG9rZW5faWQpIHsKICAgICAgICBhICsgYi52YWx1ZSArIGIudG9rZW5zKDApLl8yCiAgICAgIH0gZWxzZSB7CiAgICAgICAgYQogICAgICB9CiAgICB9KQogIH07CgogIHNpZ21hUHJvcChzdW0oSU5QVVRTKSA9PSBzdW0oT1VUUFVUUykpCgp9) I came up with to perform the 1:1 trustless exchange is as follows:

```ergoscript
{
  val token_id = SELF.tokens(0)._1;
  val selfScript = SELF.propositionBytes;

  def sum(boxes: Coll[Box]) = {
    boxes.fold(0L, {(a: Long, b: Box) =>
      if (b.propositionBytes == selfScript &&
          b.tokens.size > 0 &&
          b.tokens(0)._1 == token_id) {
        a + b.value + b.tokens(0)._2
      } else {
        a
      }
    })
  };

  sigmaProp(sum(INPUTS) == sum(OUTPUTS))
}
```

This ensures that the invariant `sum(ERG) + sum(wrapped ERG)` holds separately for all protected inputs and all protected outputs.

I deployed this on mainnet using this transaction: [e9200a0f53abbe066618c511338bd96689fa3880c3628ad5596b98ca16f60bd9](https://explorer.ergoplatform.com/en/transactions/e9200a0f53abbe066618c511338bd96689fa3880c3628ad5596b98ca16f60bd9).

I minted a total of 100 million billion wrapped nanoERGs (100 million wrapped ERGs) represented by token ID `84cce9a993988110c45dfa5d51470f5850c6f6c6f6139b71fdccde03cbcd07bb` .

Anyone holding these tokens should always be able to exchange them at the ratio 1:1 for the equivalent amount in native nanoERGs.

The reason for the slightly complex script is that it might be useful to split a protected box into multiple protected boxes that can be used in parallel, or alternatively merge multiple boxes into fewer boxes.

Feedback welcome!

---

### Post #2 — @robert (2020-11-12)

Cool, though as you mentioned the use cases seem to be negligible since we have tokens as first class citizens along with Ergs, and so it’s likely going to only be some very very very specific edge use case if there are any.

Hmm, isn’t this current scheme potentially liable to a “dust attack”? Since you just check for input/output equality and allow people to merge/break up boxes, can’t a bad actor split up your ergs into individual boxes with 1 nanoErg each and make it costly to unwrap your tokens?

And in a similar fashion I guess a bad actor could also scan the mempool waiting for you to try and unwrap tokens, then issue a tx that literally changes nothing, but spends the box and keeps everything equal (tokens/regs/nanoErgs) but pays a higher fee to prevent you from unwrapping.

---

### Post #3 — @jasondavies (2020-11-12)

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/robert/48/8_2.png) robert:

> Cool, though as you mentioned the use cases seem to be negligible since we have tokens as first class citizens along with Ergs, and so it’s likely going to only be some very very very specific edge use case if there are any.

Yes, this is not so much about new use cases, but more for simplification of contracts that handle arbitrary tokens. The main example that comes to mind is simplifying ErgoMix: it could be simplified so that it only mixes tokens without specific handling for ERG. The other obvious example is any kind of DEX that handles on-chain exchange of tokens.

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/robert/48/8_2.png) robert:

> Hmm, isn’t this current scheme potentially liable to a “dust attack”? Since you just check for input/output equality and allow people to merge/break up boxes, can’t a bad actor split up your ergs into individual boxes with 1 nanoErg each and make it costly to unwrap your tokens?

Good point. I did think about this possibility! Note that each box has a minimum value (around 70,000 nERG in this case) so it wouldn’t work with 1 nERG per box. However, there is still some asymmetry in that the cost of splitting is much lower than the cost of merging. Perhaps splitting should be limited to `2 * INPUTS.size` to compensate for the asymmetry.

Alternatively, a fixed number of “exchange boxes” could be created when minting the token and splitting/merging could be prevented completely, but I feel this is less flexible, especially if the token is meant to be used extensively in the long term.

![](https://yyz2.discourse-cdn.com/flex030/user_avatar/www.ergoforum.org/robert/48/8_2.png) robert:

> And in a similar fashion I guess a bad actor could also scan the mempool waiting for you to try and unwrap tokens, then issue a tx that literally changes nothing, but spends the box and keeps everything equal (tokens/regs/nanoErgs) but pays a higher fee to prevent you from unwrapping.

This isn’t really specific to this contract: the same denial-of-service / replace-by-fee attack could be performed for any on-chain contracts where anyone can spend the box, but this is excessively expensive for the attacker and easily mitigated by spending the attacker’s output box. Good to keep in mind though.

---

### Post #4 — @mhs_sam (2020-11-14)

Nice! An immediate use case could be where ERG is required to be burnt and issued again. It is not possible with ERG but with w-ERG.  
for example, as a very raw idea, w-ERG could be useful to create a stable coin which works by burning ERG and issuing Ergo-USD at oracle price and then buying back and burning those Ergo-USDs at oracle price again.

---

### Post #5 — @Ergosmergo (2022-01-12)

Since it can take longer for transactions to be fully verified in ERGO then other chains such as some POS chains. I do see use for wrapped ERGO in the sense we could use wrapped ERGO to interact with some chains that have quicker transaction times. Kinda what ETH and Polygon are doing. The thing with wrapped ERGO on another chain POS it kinda makes the whole thing less decentralized by relaying on a L2 solution. Rather then relying on L2 solutions to solve all of ERGO’s problems we could use L2 solutions only as a convenience to the user.
