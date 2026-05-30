---
layout: page
title: Projects
permalink: /projects/
kicker: Selected Work
description: Project cards link to detail pages describing role, technologies, and outcomes.
---

<section class="section first">
  <div class="card-grid">
    {% assign sorted_projects = site.projects | sort: 'order' %}
    {% for project in sorted_projects %}
      {% include project-card.html project=project %}
    {% endfor %}
  </div>
</section>
