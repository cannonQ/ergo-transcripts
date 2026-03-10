---
title: Ergoscript and contract templates - why & how (EIP-5)
description: 'ErgoForum discussion: Ergoscript and contract templates - why & how
  (EIP-5)'
tags:
- addresses
- appkit
- box
- dev
- eip
- ergoforum
- ergoscript
- ergotree
- sigma-protocols
- sigmastate-interpreter
category: forum
forum_category: Development
source: ergoforum
source_url: https://ergoforum.org/t/ergoscript-and-contract-templates-why-how-eip-5/5006
created: '2024-11-26'
last_activity: '2024-11-26'
posts_count: 1
views: 84
likes: 4
glossary_hits:
- Addresses
- AppKit
- Box
- EIP
- ErgoScript
- ErgoTree
- Sigma protocols
- Sigmastate interpreter
---

# Ergoscript and contract templates - why & how (EIP-5)

> **Forum thread:** [https://ergoforum.org/t/ergoscript-and-contract-templates-why-how-eip-5/5006](https://ergoforum.org/t/ergoscript-and-contract-templates-why-how-eip-5/5006)
> **Category:** Development | **Created:** 2024-11-26 | **Posts:** 1 | **Views:** 84

**Related concepts:** Addresses, AppKit, Box, EIP, ErgoScript, ErgoTree, Sigma protocols, Sigmastate interpreter

---

### Post #1 — @Luivatra (2024-11-26)

# Ergoscript templates - why and how

## Why

When a regular ergoscript is compiled into ergotree any constants that are part of the ergoscript are segregated from the tree itself (which will have ConstantPlaceholder instead) and put into a list of serialised constants. Let’s have a look at an example

```ergoscript
{
    val milliPerDay: Long = 86400000L
    val timeOfDay: Long = CONTEXT.preHeader.timestamp % milliPerDay
    sigmaProp(
        allOf(
            Coll(
                timeOfDay > $openTime,
                timeOfDay < $closeTime
            )
        )
    )
}
```

This contract is only spendable within a certain time window each day. A common practice is to take a contract like this and replace the “constants” such as openTime and closeTime and compile the contract into ergotree before using it. This is a bad practice because future compiler changes might alter the shape of the ergotree (even though the logic does not change the order of operations might change), resulting in a different address which could cause problems in off chain code and also on chain code if there are conditions based on the propositionBytes of an output box.

So a better practice is to compile the contract once and reuse the ergotree. If a contract with different values is needed the relevant constants can be replaced, but the ergotree itself remains the same. Doing this as is has some obstacles, because ALL constants are segregated, meaning not only openTime and closeTime, but also the value for milliPerDay. So the ergotree has 3, not 2 constants, which might be in a different order than expected. This is manageable with only 3 constants, but larger contracts might have many more constants in a, from the dev’s perspective, random order. So to use this it would require a bit of digging from the dev to figure out which constants are relevant for replacing and what data type they are etc.

So clean this process up and also have a more descriptive standard for exporting compiled ergotree [EIP-5](https://github.com/ergoplatform/eips/blob/master/eip-0005.md) was made.

## How

First we adjust the contract to allow it to be compiled into an ergotree template. We do this by defining the parameters of the contract. We also add a description for the contract and each parameter which will be part of the output.

```ergoscript
/**
  * The contract ensures a utxo is only spent within a specific time frame
  * according to the provided parameters.
  *
  * @param openTime The time of day the utxo becomes available for spending, defaults to start of day
  * @param closeTime The time of day the utxo stops being available for spending, defaults to end of day
  *
  * @return
  */
@contract def openingHours(openTime: Long = 0L, closeTime: Long = 86400000L) = {
    val milliPerDay: Long = 86400000L
    val timeOfDay: Long = CONTEXT.preHeader.timestamp % milliPerDay
    sigmaProp(
        allOf(
            Coll(
                timeOfDay > openTime,
                timeOfDay < closeTime
            )
        )
    ) 
}
```

This is basically a normal ergoscript with some added syntactic sugar in front. The comment at the start not only provides clarity when looking at the contract, it will also be used in the json version of the template. It can be compiled using the new SigmaTemplateCompiler in the sigmastate-interpreter (which is part of the AppKit):

```ergoscript
val template: ContractTemplate = SigmaTemplateCompiler(
      NetworkType.MAINNET
    ).compile(ergoscript)

val templateJson: String = template.toJsonString
```

The templateJson string holds a json which can be exported to your off chain code project and will look like this:

```ergoscript
{
  "name" : "openingHours",
  "description" : "The contract ensures a utxo is only spent within a specific time frame according to the provided parameters.",
  "constTypes" : [
    "05",
    "05"
  ],
  "constValues" : [
    "0500",
    "0580f0b252"
  ],
  "parameters" : [
    {
      "name" : "openTime",
      "description" : "The time of day the utxo becomes available for spending, defaults to start of day",
      "constantIndex" : 0
    },
    {
      "name" : "closeTime",
      "description" : "The time of day the utxo stops being available for spending, defaults to end of day",
      "constantIndex" : 1
    }
  ],
  "expressionTree" : "d80ed601d9010...3b1db630872180400"
}
```

This json can then be loaded into a ContractTemplate instance like this:

```ergoscript
val template: ContractTemplate = ContractTemplate.jsonEncoder.decoder(templateJson).right.get
```

Now we have the tempalte we can easily create the ergotree with the parameter values we want or use the default values. If a parameter has no default and no value is provided it will fail.

```ergoscript
val parameters = new mutable.HashMap[String, Constant[SType]]()
parameters.put("openTime", LongConstant(3600000L))

// Because closeTime is not defined in parameters the default value will be used
val ergoTree: ErgoTree = template.applyTemplate(Some(0), parameters)
```

Now we have a fully functional ErgoTree which we can use like normal in the rest of our code.
