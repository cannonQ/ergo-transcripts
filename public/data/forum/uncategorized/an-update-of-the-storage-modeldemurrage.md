---
title: An update of the storage model/demurrage
description: 'ErgoForum discussion: An update of the storage model/demurrage'
tags:
- addresses
- box
- eip
- emission-schedule
- ergoforum
- ergoscript
- eutxo
- minimum-transaction-fee
- storage-rent
- transaction
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/an-update-of-the-storage-model-demurrage/4568
created: '2023-11-20'
last_activity: '2023-11-20'
posts_count: 1
views: 255
likes: 5
glossary_hits:
- Addresses
- Box
- EIP
- Emission schedule
- ErgoScript
- Minimum transaction fee
- Storage rent
- Transaction
- eUTXO
---

# An update of the storage model/demurrage

> **Forum thread:** [https://ergoforum.org/t/an-update-of-the-storage-model-demurrage/4568](https://ergoforum.org/t/an-update-of-the-storage-model-demurrage/4568)
> **Category:** Uncategorized | **Created:** 2023-11-20 | **Posts:** 1 | **Views:** 255

**Related concepts:** Addresses, Box, EIP, Emission schedule, ErgoScript, Minimum transaction fee, Storage rent, Transaction, eUTXO

---

### Post #1 — @run4usdx (2023-11-20)

Firstly, this idea is a brain storm when chatting with guys on discord of ergo general channel. but I think it is worth of recording it here. It is about the upgrade design of ergo’s special design–the storage rent or so called demurrage.

we all know at now, ergo’s demurrage is a special charge fee of expired box accounting 0.14 erg every 4 years and every single utxo box. but this model dosen’t fit the requirement of recyling those big box with much erg money. for a 100 erg box, based on the current design, miners have to spent 2857 years to exhaust this rich box. so, during the chat, i have a new idea considering the composability of eutxo model.

let’s think how ergo’s miner rewards work? yeah, you know it is based on the emission box and with EIP27 hardfork, we now have re-emission box to secure the network to 2040. in my mind, this is the best design of ergo, everything beyond the consensus layer is governed by smart contract, really beatiful. so, why not combine the smart contract with demurrage? so my design is below.

Firs of all, the expired box will be taxed and recyled every 4 year, the tax amount is determined by the parameter “tax” voted by miners, its initial value is 0.14 erg. and then, the recycle method is also determined by parameters voted by miners, they consists of “entrance\_threshold”, “recycle\_percentage”,“lower\_cap”,and “recycle\_duration”. the recycle logic is determined by the pseduo code below:

```ergoscript
recyle_value=box's R0-tax-entrance_threshold;
if(recyle_value>0) {
	if (recyle_value*recycle_percentage>lower_cap) {
		//the recyle_value will be divided into two part:
		part1=recyle_value*recycle_percentage;
		part2=recyle_value*(1-recycle_percentage);
	}
	else{
		//the recyle_value will be divided into two part:
		part1=min(lower_cap,recyle_value);
		part2=(recyle_value-lower_cap)>0 ? recyle_value-lower_cap : 0;
	{
)
else{ do nothing}
```

part2 will be saved into the refreshed box;

part1 will be sent to a new box (which i call it recyle\_guranteed\_box) guaranteed by a smart contract. this smart contract guaranteed that:

```ergoscript
{
  if the owner of the original box figure out his private key at any time, the owner can reclaim the rest amount of this box.
  if no owner claims the box, then every 1 year or 2 years, anybody can refresh this recyle_guranteed_box by sending its R0/recycle_duration part value to the re-emission contract to get a small amount of tips, of course, the transaction fee is coverd in this recyle_guranteed_box too. and the most important, we can also design a non-linear curve for the refresh method now that its implemented by ergoscript.
  at the same time, we may design a signal box for the owner to simplify the wallet indexer code. this box is used by the owner to reclaim his money back.
}
```

Now,let me elaborate this design using a simple example.  
think there is one guy having a box containing 100 erg in a single utxo box, but one day he forget his key. then four years later, the box should be demurraged. at that time, the demurrage parameter is:  
tax=0.14,  
entrance\_threshold=1,  
recycle\_percentage=50%,  
lower\_cap=1,  
recycle\_duration=10,  
so this box will be taxed 0.14 erg, and then,  
the recyle\_value=100-0.14-1=98.86  
so the rest erg will be recyled.

part1=98.86*50%=49.43  
part2=98.86*(1-50%)=49.43

so the refreshed box has part2+entrance\_threshold=49.43+1=50.43 ergs.  
and for the recyle\_guranteed\_box, every 1 year or 2 years, one man can send 49.43/10=4.943 erg to the re-emission box to get a small amount of tips.  
if this poor guy after 2 years figures out his private key, he can still get 50.43+49.43-4.943=94.917 ergs. wow, lucky guy.

this is the application of ergo’s most beautiful part – the composability. all the above can be implemented using ergoscript.  
if nobody mentions this design again, maybe one day i will write an eip for this design.

for a normal man with big amount of ergs and not so active on chain, if he wants to keep his money safe, I figure out a method. that is the auto-refresh bank service.

It is all known, ergo is a smart contract based bank, and, if you are a whale, if there is one day, demurrage is really important and hot, there must be one kind of service online, that is you put your money into a bank contract, every 3.9 years, batcher will refresh your box with an extra refresh fee to those batchers. I think this a new revenue for active guys. if one day ergo is really hot, this on-chain service must have its market.

But the best way for a normal address is to refresh the box in time.
