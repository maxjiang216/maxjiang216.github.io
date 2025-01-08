---
layout: problem
title: "Derive linear regression"
permalink: /linear-regression/
tags: ["stats","linalg"]
source: interview
date: 2024-11-28
---

# Problem

Prove

1. Derive the formula for simple linear regression.
2. Derive the formula for multiple linear regression.

<!-- SOLUTION_START -->
# Solution

1. We wish to minimize the sum of squared errors
\\[\sum_i(y_i-\hat{y}_i)^2\\]
where
\\[\hat{y}_i=\alpha+\beta x_i\\]
and $$\alpha$$ and $$\beta$$ are the parameters we wish to solve for.

Substituting in the formula for $$\hat{y}_i$$ gives
\\[\sum_i(y_i-\alpha-\beta x_i)^2\\]

Computing the partial derivatives with respect to $$\alpha$$ and $$\beta$$ gives
\\[\frac{\partial}{\partial\alpha}\sum_i(y_i-\alpha-\beta x_i)^2=-2\sum_i(y_i-\alpha-\beta x_i)\\]
\\[\frac{\partial}{\partial\beta}\sum_i(y_i-\alpha-\beta x_i)^2=-2\sum_i x_i(y_i-\alpha-\beta x_i)\\]

Setting these equal to zero and solving gives the formula for simple linear regression, which is
\\[\alpha=\bar{y}-\beta\bar{x}\\]
\\[\beta=\frac{\sum_i(x_i-\bar{x})(y_i-\bar{y})}{\sum_i(x_i-\bar{x})^2}\\]

2. We wish to minimize the sum of squared errors
\\[(y-X\beta)^\intercal(y-X\beta)\\]

We expand this to get
\\[(y-X\beta)^\intercal(y-X\beta)=y^Ty-y^\intercal X\beta-(X\beta)^\intercal y+X\beta^\intercal X\beta=y^Ty-2y^\intercal X\beta+X^\intercal\beta^\intercal X\beta\\]
since $$y^\intercal X\beta$$ and $$(X\beta)^\intercal y$$ are both scalars.

The derivative of this expression with respect to $$\beta$$ is
\\[-2y^\intercal X+2X^\intercal X\beta\\]
The normal equation is
\\[(X^\intercal X)\beta=X^\intercal y\\]
Solving this gives the formula for multiple linear regression, which is
\\[\beta=(X^\intercal X)^{-1}X^\intercal y.\\]