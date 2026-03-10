---
title: '"Script Slot"--Powering Ergo''s Composability to New Level'
description: 'ErgoForum discussion: "Script Slot"--Powering Ergo''s Composability
  to New Level'
tags:
- addresses
- box
- eip
- ergoforum
- ergoscript
- ergotree
- eutxo
- native-tokens
- nautilus
- registers
- spv
- storage-rent
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/script-slot-powering-ergos-composability-to-new-level/4577
created: '2023-11-27'
last_activity: '2023-12-07'
posts_count: 3
views: 291
likes: 0
glossary_hits:
- Addresses
- Box
- EIP
- ErgoScript
- ErgoTree
- Native tokens
- Nautilus
- Registers
- SPV
- Storage rent
- Transaction
- eUTXO
---

# "Script Slot"--Powering Ergo's Composability to New Level

> **Forum thread:** [https://ergoforum.org/t/script-slot-powering-ergos-composability-to-new-level/4577](https://ergoforum.org/t/script-slot-powering-ergos-composability-to-new-level/4577)
> **Category:** Uncategorized | **Created:** 2023-11-27 | **Posts:** 3 | **Views:** 291

**Related concepts:** Addresses, Box, EIP, ErgoScript, ErgoTree, Native tokens, Nautilus, Registers, SPV, Storage rent, Transaction, eUTXO

---

### Post #1 — @run4usdx (2023-11-27)

After deep thoughts, I still think it is worthful to record this kind of hard-fork which I call it “Script Slot”. This idea is inspired by Nervos CKB’s smart contract model which also uses the eUTXO model. The Link is here: [Script | Nervos CKB](https://docs.nervos.org/docs/reference/script/)

Ergo is using eUTXO model to build the smart contract. It really has great composability, while there is still a lost piece for the composability—the script’s composability.

Before thinking about how USDT-like coin and other NFT tokens with additional control logic can be realized on Ergo, I didn’t understand why CKB provides two kind of scripts in each UTXO—the lock-script and type-script. But then I understood.

Let’s take this kind of smart-contract into consideration and try to realize it:  
A new TempNFT on Ergo should be realized using Ergo-script. The script should guarantee the conditions below:

1. The TempNFT should have a register to record the transfer times, if the source address and destination address is not the same, the register adds 1.
2. The amount of TempNFT should comply the basic rule of Ergo’s native token.
3. Sometimes, the owner of the TempNFT wants to put this NFT on an Auction platform to be sold.  
   When the issuer created the NFT, the first condition was added and the second condition is intrinsic. And when you trade or transfer this NFT, the issuer wants to keep the first condition always working (and maybe more complex condition will be considered).

Then how to realize this? Especially the first condition. This leads to a requirements of the smart contract that the piece of script guaranteeing the first condition should always be included in the UTXO’s guard script. But when you change the piece of script that guaranteeing the trading condition like the third condition, you must modify the whole guard script lied in R1 of UTXO and there is no guarantee of inclusion of the first condition since you can not simply require that the successor output UTXO’s guard script lied in R1 should be the same as the original’s.

With respect to this requirement, Morphic gave me some solutions like below:  
“  
I think what you want is to check:

1. the spending condition of the output includes the given script (which is a logical expression, let’s call it P)
2. that P is included in the spending using && operation, i.e. it is always checked (like P && )
3. this condition P is always come as the first argument of &&
4. The rest of the output script can be arbitrary  
   If that is what you want, then I think you can implement all these checks.

With this approach you can create reproducible boxes which have both fixed condition P, and some other arbitrary logic connected with either && or || logical operations (or more complex logic)  
”  
In fact, this is a feasible workaround, it investigates the propositionBytes of the R1’s guard script individually, checking whether there is a specific piece of script code. Just like what Morphic replenished:  
“  
you can extract individual bytes at exact locations in propositionBytes and check operation codes (assuming the tree structure is fixed), like outBox.propositionBytes(23) == 99 && outBox.propositionBytes(24) == 115

In addition, if you know the output condition has to have && as the root of the expression, then you can check this is indeed the case by investigating individual bytes of outBox.propositionBytes.  
”  
So if using the method above, the issuer of the NFT must wrap the first condition with the expression that checking the existence of the first condition and names this wrapper logic as P and guarantee that your successor UTXO’s guard script is the form of “p && ” so that the transaction can be successfully executed.

But this method may be really a little tricky and hard to secure the correctness. You have to directly form a rule to organize the sequence of these code pieces. If the condition is more complex, it is really hard to use. So, this workaround is more flexible but less intuitional. Yes, the Service builder can code these output UTXO and transaction building logic in the front end and back end thus eliminating the UX complexity, but really not elegant.

So I propose another solution while requiring hard-fork to implement, the solution I called “Script Slot” is inspired by Nervos CKB. On CKB, the lock-script and type-script both will be executed and validated to secure the UTXO, lock-script focuses more on the ownership while the type-script focuses more on the User-Defined-Token’s additional control logic.

To implement this kind of “Script Slot” concept, I suggest change the R1 register’s type from Coll[Byte] to Coll[Coll[Byte]] and make each script mandatorily executed just like what lock-script and type-script do. Compared with CKB, this method provides more (>2) slots for mandatorily executed scripts, now that Ergo’s R2 register can hold at most 128 kinds of native tokens, so I suggest the max length of R1 coll is 256 (R1.\_0~R1.\_255) and if the length of R1 coll is 1 or 0, it represents the old type, this is for backward compatibility. eg: R1.\_0=R1.

In my opinion, the solution above is more succinct and easy to use. But Kushti has some concerns:  
“

1. what you are proposing is to have native support for && in form of providing multiple scripts which will be executed via &&. However, then a question is immediately arisen, why only && semantics for Coll[Coll[Byte]], not || or threshold, supported
2. There are no contracts for tokens in Ergo, as they would complicate all the light client protocols a lot. So you need to make a contract which will control tokens.  
   ”

For the first concern, I think “&&” is a more basic operation than “||” and “m out of n threshold”, so “&&” should be firstly considered and implemented, maybe using the solution above. But if there is more simple way to implement and easy to use, I am graceful. Maybe, more primitives added to Ergoscript to support this requirement are welcomed but I have no idea about this solution.

For the second concern. Considering the pump and fire of BRC20, I think it is normal and easy to design a specific wallet for specific coin or token, just like what UniSat is doing. And beyond this, more standards should be raised for native tokens with extra control logic, if possible, the issuer can publish a plugin (which will be used by general wallet like nautilus) to support their native token with extra logic. This is the problem of another EIP, but when we implement “script slot”, things will be more and more interesting. More value will be implemented on Ergo, just as what I said: USDT native on Ergo, they require that USDT should have a blacklist, well, implement the blacklist checking logic in R1.\_1, and using datainput UTXO to hold the blacklist. Although I really hate a coin with white or black list, but this is just an example to show the power of “Script Slot”.

For further consideration, if the “Script Slot” is implemented one day, maybe the recycle logic due to expiration of storage rent fee should also be changed. Currently, Ergoscript focus more on the ownership of UXTO while less on the native tokens’ extra control logic, so when the UTXO is recycled and those native token are sent into miners address, there is probably nothing serious. But when the “Script Slot” is implement, more and more native tokens will have its additional intrinsic control logic inherited from the very beginning, this time, when they are recycled, current recycling strategy will make these native tokens escaping from their intrinsic control logic, this maybe a little serious to the coin’s whole economical system. So, better solution is to just burn those native tokens when the expired UTXO is recycled.

Finally, this post just leaves a record for the Ergo community, and I hope more and more people can leave their ideas here and hear.

---

### Post #2 — @blaire2b256 (2023-12-05)

Thanks for posting this. It’s certainly got me thinking about programmable assets again and maybe you’d find this thread interesting too:  
[Programmable assets on Ergo](https://www.ergoforum.org/t/programmable-assets-on-ergo/4037)

---

### Post #3 — @run4usdx (2023-12-07)

here gives a “Slot Script”'s design:

```ergoscript
slot(0){
 //the main contract here
 ...
}
slot(1){
 //the first membership contract here
 ...
}
slot(2){
 //the second membership contract here
 ...
}
```

each slot’s ergoecript contract should be evaluated to be true so that this utxo box can be spent and all the slots share the same Registers and context Var.

the whole script should be compiled to serialized ergotree bytecode stored in R1. and there should be a specific opcode or bytecode for demiliter(I mean the seperator for each slot). and in ergoscript, R1.get will fetch all the ergotree bytecode and R1.\_1 will fetch the slot(0)'s bytecode.  
so in this design, we can access any slot of the script from any contract script.

and I hope the max number of script could be 16, which means its index is from 0 to 15. ofc, if the number of Register can be maximized to 16 is welcome since more registers may be needed in this design.

what’s more, a standard for script and the off-chain code for plugin in wallet both should be raised so that ERC20 and even more possibility can come true.
