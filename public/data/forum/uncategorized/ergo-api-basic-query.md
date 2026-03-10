---
title: Ergo API basic query
description: 'ErgoForum discussion: Ergo API basic query'
tags:
- ergo-explorer
- ergoforum
- ergoscript
- ergoscript-context
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/ergo-api-basic-query/3533
created: '2022-04-21'
last_activity: '2022-04-21'
posts_count: 1
views: 636
likes: 2
glossary_hits:
- Ergo Explorer
- ErgoScript
- ErgoScript context
---

# Ergo API basic query

> **Forum thread:** [https://ergoforum.org/t/ergo-api-basic-query/3533](https://ergoforum.org/t/ergo-api-basic-query/3533)
> **Category:** Uncategorized | **Created:** 2022-04-21 | **Posts:** 1 | **Views:** 636

**Related concepts:** Ergo Explorer, ErgoScript, ErgoScript context

---

### Post #1 — @Ladopixel (2022-04-21)

![ErgoTutorials logo](https://canada1.discourse-cdn.com/flex030/uploads/ergoforum/original/2X/2/22c5510ecd3e6a35b725f45b807b9cb0a9f525d5.png)

## Tutorial 1 - Ergo API basic query

[ErgoTutorials.com](https://ergotutorials.com)

In this tutorial we are going to rescue some values from the Ergo blockchain. We will use a simple function to query Ergo Explorer API version 1. We are going to see how with very few lines of code and very basic knowledge of HTML and JavaScript, we can interact with the Ergo blockchain.

[ErgoTutorials.com/video/ergo-api-query](https://ergotutorials.com/video/ergo-api-query)

The first thing we will do is create a file with an HTML5 structure called index.html. We will modify its title, from its body tag we will call the heightCreation function through an onload and we will add a Javascript file called getInfo.js that we will create later.

*index.html*

```ergoscript
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ErgoTutorials.com - Video 1</title>
</head>
<body onload="heightCreation()">
    <script src="getInfo.js"></script>
</body>
</html>
```

Now we are going to create the Javascript function to receive the values of the Ergo blockchain through its API.

For our function we will use an endpoint that will be in charge of providing us with the information we need. The endpoint is the following <https://api.ergoplatform.com/api/v1/info>

[Ergo Explorer API v1](https://api.ergoplatform.com/api/v1/docs/)

*getInfo.js*

```ergoscript
function heightCreation(){
    fetch('https://api.ergoplatform.com/api/v1/info')
        .then(response => response.json())
        .then(data => {
            console.log(data)
        })
        .catch(error => console.error('Error:', error))
}
```

The values that I will receive from the API will be shown in the console through console.log. From the console of our browser we can see that the API response returns the data correctly, we make the comparison with the documentation.

Now we will add one more line of code to use one of the received values to color the background of our website, this color will be defined by the current block height.

*getInfo.js*

```ergoscript
console.log(data)
document.body.style.backgroundColor = "#" + data.height
```

With this last line we have our example finished. Now we go to the browser and refresh to observe how the background of our website changes color and takes the color of the current Ergo block height.

### Ergo API basic query

* [The code for this tutorial can be downloaded from Github.](https://github.com/ladopixel/ErgoTutorials.com/tree/master/tutorial-1)
* [You can see this tutorial in Youtube.](https://www.youtube.com/watch?v=B3W9uNwk_DM)  
  You can see this tutorial in other languages
* [Consulta básica API Ergo ES](https://ergotutorials.com/video/consulta-basica-api-ergo)
* [Consulta básica API Ergo PT-BR](https://ergotutorials.com/video/api-ergo-consulta)
* [API Ergo Basisabfrage DE](https://ergotutorials.com/video/basisabfrage-api-ergo)
* [API Ergo Query di base](https://ergotutorials.com/video/apiergo-query-di-base)
