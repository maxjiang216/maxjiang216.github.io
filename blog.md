---
layout: default
title: Blog
permalink: /blog/
---
<h1>My Blog</h1>
<ul>
{% for post in site.posts %}
    <li>
    <a href="{{ post.permalink }}">{{ post.title }}</a>
    <small>{{ post.date | date: "%-d %B %Y" }}</small>
    </li>
{% endfor %}
</ul>
