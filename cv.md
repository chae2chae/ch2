---
layout: page
title: CV
permalink: /cv/
kicker: Web CV
description: Education, experience, skills, awards, and additional projects.
---
{% assign profile = site.data.profile %}

<section class="section first">
  <div class="section-heading">
    <h2>Education</h2>
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
    <h2>Experience</h2>
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
    <h2>Skills</h2>
  </div>
  <div class="skill-columns wide">
    <div>
      <h3>Languages & Frameworks</h3>
      <div class="focus-grid small">
        {% for skill in profile.skills.software %}
          <span>{{ skill }}</span>
        {% endfor %}
      </div>
    </div>
    <div>
      <h3>IL / RL / VLA</h3>
      <div class="focus-grid small">
        {% for skill in profile.skills.learning %}
          <span>{{ skill }}</span>
        {% endfor %}
      </div>
    </div>
    <div>
      <h3>Simulation & Tooling</h3>
      <div class="focus-grid small">
        {% for skill in profile.skills.tooling %}
          <span>{{ skill }}</span>
        {% endfor %}
      </div>
    </div>
    <div>
      <h3>Robot Platforms</h3>
      <div class="focus-grid small">
        {% for item in profile.skills.robots %}
          <span>{{ item }}</span>
        {% endfor %}
      </div>
    </div>
    <div>
      <h3>Sensing & Teleop</h3>
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
    <h2>Languages</h2>
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
    <h2>Additional Projects</h2>
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
    <h2>Patent</h2>
  </div>
  <div class="cv-list compact cv-wide-rows">
    {% for patent in profile.patents %}
      <article class="cv-entry">
        <span class="cv-date">{{ patent.registration_date }}</span>
        <div>
          <h3>{{ patent.title }}</h3>
          <ul>
            <li>Registration {{ patent.number }} ({{ patent.registration_date }})</li>
            <li>Application {{ patent.application }} ({{ patent.application_date }})</li>
          </ul>
        </div>
      </article>
    {% endfor %}
  </div>
</section>

<section class="section">
  <div class="section-heading">
    <h2>Honors & Awards</h2>
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
