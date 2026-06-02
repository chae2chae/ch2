---
layout: page
title: 프로젝트
permalink: /ko/projects/
kicker: Selected Work
description: 역할, 기술 스택, 성과를 정리한 프로젝트 상세 페이지입니다.
lang: ko
---

<section class="section first">
  <div class="card-grid">
    {% assign sorted_projects = site.data.projects_ko | sort: 'order' %}
    {% for project in sorted_projects %}
      {% include project-card.html project=project %}
    {% endfor %}
  </div>
</section>
