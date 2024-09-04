---
layout: problem
title: "Find sum(x_i^6) for x^3-3x+2sqrt(q)=0"
permalink: /cubic-6-vieta/
tags: ["polynomial"]
source: dragos
date: 2019-10-01
---

# Problem

Let $$x_1,x_2,x_3$$ be the roots of $$x^3-2x+2\sqrt{5}$$. Find

\\[\sum_{i=1}^3x_i^6.\\]

<!-- SOLUTION_START -->
# Solution

The roots satisfy

\\[x^6-3x^4+2\sqrt{5}x^3=0\\]

so

\\[\sum_{i=1}^3x_i^6=\sum_{i=1}^33x_i^4+2\sqrt{5}x_i^3.\\]

We can reduce the sum to terms with maximal degree $$2$$. Then, note that

\\[\sum_{i=1}^3x_i^2=\left(\sum_{i=1}^3x_i\right)^2-2\sum_{i=1}^3\sum_{j=i+1}^3x_ix_j\\]

so we only need standard Vieta terms.