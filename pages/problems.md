---
layout: default
title: Problems
permalink: /secret-problem/
---
# Problem Collection

This is a secret page of math problems. This is mostly prep for the Putnam and quant interview questions.
<ul>
{% for problem in site.problems %}
    <li>
    <a href="{{ problems.permalink }}">{{ problem.title }}</a>
    </li>
{% endfor %}
</ul>
