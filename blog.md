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
      {% assign post_lang = post.lang | default: 'en' %}
      {% assign post_description = post.description | default: '' | strip %}
      {% if post_lang == 'en' and post_description != '' %}
        <a class="post-row" href="{{ post.url | relative_url }}">
          <span>{{ post.date | date: '%B %d, %Y' }}</span>
          {% if post.tags and post.tags.size > 0 %}
            <div class="post-tags" aria-label="Post tags">
              {% for tag in post.tags %}
                <span>{{ tag }}</span>
              {% endfor %}
            </div>
          {% endif %}
          <strong>{{ post.title }}</strong>
          <p>{{ post_description }}</p>
        </a>
      {% endif %}
    {% endfor %}
  </div>
</section>
