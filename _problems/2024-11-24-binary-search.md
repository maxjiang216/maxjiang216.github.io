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
4. Given a non-decreasing function `f` on the range 0 to 1, find `x` such that `abs(f(x)-t) < d`, assuming such a value exists in [0, 1].
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

2.

```
int l = 0;
int r = n;
while (l < r) {
    int m = (l + r) / 2;
    if (a[m] < t) l = m + 1;
    else r = m;
}
return l;
```

3.

```
int l = 0;
int r = n;
while (l < r) {
    int m = (l + r) / 2;
    if (a[m] > t) r = m;
    else l = m + 1;
}
return r - 1;
```

4.

```
float l = 0;
float r = 1;
while (r - l > d) {
    float m = (l + r) / 2;
    if (f(m) > t) r = m;
    else l = m;
}
return l;
```