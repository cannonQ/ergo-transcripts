---
title: Submit PoW solution to Ergo node
description: 'ErgoForum discussion: Submit PoW solution to Ergo node'
tags:
- difficulty-adjustment
- ergoforum
- ergoscript
- full-node
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/submit-pow-solution-to-ergo-node/4266
created: '2023-03-18'
last_activity: '2023-03-31'
posts_count: 2
views: 292
likes: 0
glossary_hits:
- Difficulty adjustment
- ErgoScript
- Full node
---

# Submit PoW solution to Ergo node

> **Forum thread:** [https://ergoforum.org/t/submit-pow-solution-to-ergo-node/4266](https://ergoforum.org/t/submit-pow-solution-to-ergo-node/4266)
> **Category:** Uncategorized | **Created:** 2023-03-18 | **Posts:** 2 | **Views:** 292

**Related concepts:** Difficulty adjustment, ErgoScript, Full node

---

### Post #1 — @Feche (2023-03-18)

I am trying to submit a PoW solution to the node but I have some problems/questions.  
I am sending the following data to ‘/mining/solution’

```ergoscript
const data =
    {
        pk: pk, 
        w: blockHash,
        n: nonce1,
        d: target
    }
```

Is this correct? I get the following error:

```ergoscript
curl -X POST "http://10.0.0.250:9053/mining/solution" -H "accept: application/json" -H "Content-Type: application/json" -d "{\"pk\":\"028db890e82ac002d0a35a58c039add6fd5e09433d399cfb906e33xxxxxxxxxxxxxx\",\"w\":\"0f03036485fec177a6ed9ae353aca3b3397eca2b07ce70a10c1877b3c8c8bb9c\",\"n\":\"d5ac1607994034c4\",\"d\":32199708657929542231435622529375625252308001641435781459345408}"

{
  "error" : 400,
  "reason" : "bad.request",
  "detail" : "requirement failed: Not enough bytes in the buffer: 33"
}
```

pk is the public key  
w is the blockhash  
n is the nonce  
b is the target difficulty of the network (3.xx P at this moment)

Do I have to modify something in ‘ergo.conf’? the values that I am passing are the correct ones?  
I know that the nonce does not meet network target but should’t I get another error instead?

If someone can help me I would appreciate it since there is little to no info on how to make this work.

---

### Post #2 — @glasgowm (2023-03-31)

Please join the mining chats if you haven’t managed to get this resolved yet [Community | Ergo Platform](https://ergoplatform.org/en/community/)
