---
layout: problem
title: "Parallel DAG"
permalink: /parallel-dag/
tags: ["data structures", "graph"]
source: interview
date: 2020-10-11
---

# Problem

You have a set of jobs you must compete. Each job has a set of jobs that must be completed before the job can start as well as the time needed to complete the job. The dependency graph is guaranteed to be a DAG (directed acyclic graph). There is unlimited parallelism, so any number of jobs can be in progress simultaneously.

1. Find the amount of time needed to complete all the jobs.
2. Find the set of "bottleneck" jobs. These are defined as jobs where if you increased its runtime, the total time from the previous part would increase.
3. Find the "slack" for each job. This is the amount of time by which you can increase the runtime of the job before the total runtime is increased.

<!-- SOLUTION_START -->
# Solution

