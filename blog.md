---
layout: page
title: Blog
permalink: /blog/
kicker: Research Notes
description: Short notes on projects, implementation lessons, and research direction.
---

<section class="section first">
  <div class="post-list wide">
    {% for post in site.posts %}
      <a class="post-row" href="{{ post.url | relative_url }}">
        <span>{{ post.date | date: '%B %d, %Y' }}</span>
        <strong>{{ post.title }}</strong>
        <p>{{ post.description }}</p>
      </a>
    {% endfor %}
  </div>
</section>
