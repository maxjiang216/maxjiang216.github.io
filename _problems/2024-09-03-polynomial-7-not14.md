---
layout: problem
title: "Prove P(x) is never 14 if P(x)=7 for at least 4 distinct integers"
permalink: /polynomial-7-not14/
tags: ["polynomial","integer"]
source: dragos
date: 2019-10-01
---

# Problem

Consider the polynomial

\\[P(x)=\sum_{i=0}^na_{n-i}x^i,a_i\in\mathbb{Z}\\]

such that $$P(x)=7$$ for at least 4 distinct integral values of $$x$$. Prove that $$P(x)\ne14,\forall x\in\mathbb{Z}$$.

<!-- SOLUTION_START -->
# Solution

We can write

\\[P(x)-7=(x-a)(x-b)(x-c)(x-d)G(x)\\]

for $$a,b,c,d\in\mathbb{Z},G\in\mathbb{Z}[x]$$. We see that

\\[(x-a)(x-b)(x-c)(x-d)G(x)=7\\]

has no solutions for $$x\in\mathbb{Z}$$ since there are $$5$$ factors and $$7$$ is prime.