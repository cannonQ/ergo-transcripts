---
title: Scala Performance Style Guide
description: 'ErgoForum discussion: Scala Performance Style Guide'
tags:
- ergoforum
- ergoscript
- sigmastate-interpreter
- uncategorized
category: forum
forum_category: Uncategorized
source: ergoforum
source_url: https://ergoforum.org/t/scala-performance-style-guide/95
created: '2019-09-27'
last_activity: '2019-09-27'
posts_count: 1
views: 652
likes: 2
glossary_hits:
- ErgoScript
- Sigmastate interpreter
---

# Scala Performance Style Guide

> **Forum thread:** [https://ergoforum.org/t/scala-performance-style-guide/95](https://ergoforum.org/t/scala-performance-style-guide/95)
> **Category:** Uncategorized | **Created:** 2019-09-27 | **Posts:** 1 | **Views:** 652

**Related concepts:** ErgoScript, Sigmastate interpreter

---

### Post #1 — @morphic (2019-09-27)

Here is a description of simple Scala [tricks](https://github.com/ScorexFoundation/sigmastate-interpreter/blob/master/docs/perf-style-guide.md) behind  
upcoming 3-4x speedup of ErgoScript contracts validation.

Many more optimisations has been done in the upcoming release (see [related PR](https://github.com/ScorexFoundation/sigmastate-interpreter/pull/566) for details),  
but these guidelines are kind of “low hanging fruits” to boost the performance of Scala  
code almost for free and are widely applicable.

If you are practicing Scala let us know your experience, contributions are very welcome.
