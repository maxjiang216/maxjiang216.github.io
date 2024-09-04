---
layout: problem
title: "Take or Place"
permalink: /place-or-take/
tags: ["1 player game","optimization","expectation"]
source: quantguide
date: 2024-02-25
---

# Problem

You are playing a one-player game with two opaque boxes. At each turn, you can choose to either "place" or "take". "Place" places $$$1$$ from a third party into one box randomly. "Take" empties out one box randomly and that money is yours. This game consists of $$100$$ turns where you must either place or take. Assuming optimal play, what is the expected payoff of this game? Note that you do not know how much money you have taken until the end of the game.

<!-- SOLUTION_START -->
# Solution

We first note that it is always optimal to do all the "take" moves at the end. This can be proven with a simple interchange argument (for any pair of "place" and "take" it is better to do the "take" move second). It suffices to find the optimal number of "take" moves. Using linearity of expectation, the expected number of winnings using $$k$$ "takes" is
\\[(1-1/2^k)(100-k).\\]
To optimize this, we can either use calculus or consider at what point the marginal change from $$k+1$$ to $$k$$,
\\[\frac{1-1/2^{k+1}}{1-1/2^k}\cdot\frac{100-(k+1)}{100-k},\\]
is less than $$1$$. The first fraction simplifies to
\\[\frac{2^{k+1}-1}{2^{k+1}-2}\\]
which will be smaller than the reciprocal of the second fraction at
\\[k=6\implies2^{k+1}=128.\\]
This gives an expected payout of
\\[\boxed{\frac{2961}{32}}=92.53125.\\]