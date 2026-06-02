---
layout: page
title: CV
permalink: /ko/cv/
kicker: Web CV
description: 학력, 경력, 기술 스택, 수상, 추가 프로젝트를 정리했습니다.
lang: ko
---
{% assign profile = site.data.profile_ko %}
{% assign ui = site.data.ui.ko %}

<section class="section first">
  <div class="section-heading">
    <h2>{{ ui.cv.education }}</h2>
  </div>
  <div class="cv-list">
    {% for item in profile.education %}
      <article class="cv-entry">
        <span class="cv-date">{{ item.period }}</span>
        <div>
          <h3>{{ item.school }}</h3>
          <p class="cv-org">{{ item.degree }}</p>
          {% if item.details and item.details.size > 0 %}
            <ul>
              {% for detail in item.details %}
                <li>{{ detail }}</li>
              {% endfor %}
            </ul>
          {% endif %}
        </div>
      </article>
    {% endfor %}
  </div>
</section>

<section class="section">
  <div class="section-heading">
    <h2>{{ ui.cv.experience }}</h2>
  </div>
  <div class="cv-list">
    {% for item in profile.experience %}
      <article class="cv-entry">
        <span class="cv-date">{{ item.period }}</span>
        <div>
          <h3>{{ item.role }}</h3>
          <p class="cv-org">{{ item.organization }}</p>
          <ul>
            {% if item.details and item.details.size > 0 %}
              {% for detail in item.details %}
                <li>{{ detail }}</li>
              {% endfor %}
            {% else %}
              <li>{{ item.summary }}</li>
            {% endif %}
          </ul>
        </div>
      </article>
    {% endfor %}
  </div>
</section>

<section class="section">
  <div class="section-heading">
    <h2>{{ ui.cv.skills }}</h2>
  </div>
  <div class="skill-columns wide">
    <div>
      <h3>{{ ui.cv.software }}</h3>
      <div class="focus-grid small">
        {% for skill in profile.skills.software %}
          <span>{{ skill }}</span>
        {% endfor %}
      </div>
    </div>
    <div>
      <h3>{{ ui.cv.learning }}</h3>
      <div class="focus-grid small">
        {% for skill in profile.skills.learning %}
          <span>{{ skill }}</span>
        {% endfor %}
      </div>
    </div>
    <div>
      <h3>{{ ui.cv.tooling }}</h3>
      <div class="focus-grid small">
        {% for skill in profile.skills.tooling %}
          <span>{{ skill }}</span>
        {% endfor %}
      </div>
    </div>
    <div>
      <h3>{{ ui.cv.robots }}</h3>
      <div class="focus-grid small">
        {% for item in profile.skills.robots %}
          <span>{{ item }}</span>
        {% endfor %}
      </div>
    </div>
    <div>
      <h3>{{ ui.cv.sensing }}</h3>
      <div class="focus-grid small">
        {% for item in profile.skills.sensors %}
          <span>{{ item }}</span>
        {% endfor %}
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="section-heading">
    <h2>{{ ui.cv.languages }}</h2>
  </div>
  <div class="cv-list compact">
    {% for item in profile.languages %}
      <article class="cv-entry slim">
        <span class="cv-date">{{ item.language }}</span>
        <div>
          <p>{{ item.level }}</p>
        </div>
      </article>
    {% endfor %}
  </div>
</section>

<section class="section">
  <div class="section-heading">
    <h2>{{ ui.cv.additional_projects }}</h2>
  </div>
  <div class="cv-list">
    {% for project in profile.other_projects %}
      <article class="cv-entry">
        <span class="cv-date">{{ project.period }}</span>
        <div>
          <h3>{{ project.title }}</h3>
          <p class="cv-org">{{ project.organization }}</p>
          <ul>
            <li>{{ project.summary }}</li>
          </ul>
        </div>
      </article>
    {% endfor %}
  </div>
</section>

<section class="section">
  <div class="section-heading">
    <h2>{{ ui.cv.patent }}</h2>
  </div>
  <div class="cv-list compact cv-wide-rows">
    {% for patent in profile.patents %}
      <article class="cv-entry">
        <span class="cv-date">{{ patent.registration_date }}</span>
        <div>
          <h3>{{ patent.title }}</h3>
          <ul>
            <li>{{ ui.cv.registration }} {{ patent.number }} ({{ patent.registration_date }})</li>
            <li>{{ ui.cv.application }} {{ patent.application }} ({{ patent.application_date }})</li>
          </ul>
        </div>
      </article>
    {% endfor %}
  </div>
</section>

<section class="section">
  <div class="section-heading">
    <h2>{{ ui.cv.awards }}</h2>
  </div>
  <div class="cv-list compact cv-wide-rows">
    {% for award in profile.awards %}
      <article class="cv-entry">
        <span class="cv-date">{{ award.date }}</span>
        <div>
          <h3>{{ award.title }}</h3>
          <p class="cv-org">{{ award.organization }}</p>
          <ul>
            <li>{{ award.description }}</li>
          </ul>
        </div>
      </article>
    {% endfor %}
  </div>
</section>
