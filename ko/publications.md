---
layout: page
title: 논문
permalink: /ko/publications/
kicker: Conference Papers
description: 학회 논문과 연구 발표를 정리했습니다.
lang: ko
---
{% assign profile = site.data.profile_ko %}

<section class="section first">
  <div class="publication-list">
    {% for paper in profile.publications %}
      <article class="publication-item">
        <div class="publication-id">{{ paper.id }}</div>
        <div>
          <span class="card-meta">
            {{ paper.year }} · {{ paper.venue }}{% if paper.presentation %} ({{ paper.presentation }}){% endif %}
          </span>
          <h2>{{ paper.title }}</h2>
          {% if paper.original != '' %}
            <p class="original-title">{{ paper.original }}</p>
          {% endif %}
          <p>{{ paper.authors }}</p>
        </div>
      </article>
    {% endfor %}
  </div>
</section>
