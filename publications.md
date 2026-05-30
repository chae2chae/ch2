---
layout: page
title: Publications
permalink: /publications/
kicker: Conference Papers
description: Conference papers and research outputs.
---
{% assign profile = site.data.profile %}

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
