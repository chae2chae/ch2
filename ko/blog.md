---
layout: page
title: 블로그
permalink: /ko/blog/
kicker: Research Notes
description: 논문 리뷰, 구현 메모, 연구 방향을 정리한 짧은 노트입니다.
lang: ko
---

<section class="section first">
  <div class="post-list wide">
    {% for post in site.data.posts_ko %}
      <a class="post-row" href="{{ post.url | relative_url }}">
        <span>{{ post.date_label }}</span>
        {% if post.tags and post.tags.size > 0 %}
          <div class="post-tags" aria-label="Post tags">
            {% for tag in post.tags %}
              <span>{{ tag }}</span>
            {% endfor %}
          </div>
        {% endif %}
        <strong>{{ post.title }}</strong>
        <p>{{ post.description }}</p>
      </a>
    {% endfor %}
  </div>
</section>
