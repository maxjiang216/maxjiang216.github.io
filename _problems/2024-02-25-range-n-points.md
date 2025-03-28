---
layout: problem
title: "Range of n Points on [0,1]"
permalink: /range-n-points/
tags: ["expectation","combo"]
source: mark-joshi
date: 2024-02-25
---

# Problem

Suppose $$x_1,\ldots,x_n$$ are i.i.d. uniformly on $$[0,1]$$. Compute
\\[\mathbb{E}[\max_ix_i-\min_ix_i].\\]

<!-- SOLUTION_START -->
# Solution

$$\begin{aligned} \mathbb{E}[\max_ix_i-\min_ix_i] &= \mathbb{E}[\max_ix_i]-\mathbb{E}[\min_ix_i] \\ &=\mathbb{E}[\max_ix_i]-\mathbb{E}[1-\max_ix_i] \\ &=2\mathbb{E}[\max_ix_i]-1 \\ &=2\int_0^1x\cdot\frac{d}{dx}x^n\,dx-1 \\ &=2\int_0^1nx^n\,dx-1 \\ &=2\left[\frac{n}{n+1}x^{n+1}\right]_0^1-1 \\ &= \frac{n-1}{n+1}. \end{aligned}$$

Note that $$\lim_{n\to\infty}\frac{n-1}{n+1}=1$$, which makes sense.