---
layout: problem
title: "Binary Search"
permalink: /binary-search/
tags: ["algorithms"]
source: interview
date: 2024-11-24
---

# Problem

1. Given a sorted list with no repeated elements, find the element with a given value or identify that it does not exist.
2. Given a sorted list, find the first element whose value is at least the given value.
3. Given a sorted list, find the first element whose value is greater than the given value.

<!-- SOLUTION_START -->
# Solution

1.

Here, any binary search algorithm should work. The cleanest is

```
 int l = 0;
 int r = n - 1;
 while (l <= r) {
    int m = (l + r) / 2;
    if (a[m] < t) l = m + 1;
    else if (a[m] > t) r = m - 1;
    else return m;
 }
 return -1;
```