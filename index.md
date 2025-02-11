---
layout: home
title: Yichi Zhang
---

## About me
<div class="about-section">
    <div class="about-text">
        <p>
            Hi! I am a third-year Ph.D. in Electrical & Computer Engineering at the University of Illinois at Urbana-Champaign, advised by <a href="https://zhizhenz.ece.illinois.edu/">Prof. Zhizhen (Jane) Zhao</a>. I also collaborate closely with <a href="https://www.alexander-schwing.de/">Prof. Alexander Schwing</a>. Prior to that I obtained my Bachelor of Engineering degree from Zhejiang University and Bachelor of Science degree from UIUC, majoring in Computer Engineering. 
        </p>
        <p>
            My research focuses on generative AI for computer vision, with a particular interest in developing novel diffusion and flow models and applying them to imaging sciences and inverse problems. 
        </p>
        <p>
            Email: <a href="javascript:void(0);">yichi5@illinois.edu</a>
        </p>
    </div>
    <div class="about-image">
        <img src="{{ '/assets/images/portfolio.jpg' | relative_url }}" alt="Profile Picture">
    </div>
</div>
<div class="social-icons">
    <a href="https://scholar.google.com/citations?user=yourID" target="_blank">
        <img src="/assets/icons/google_scholar.svg" alt="Google Scholar">
    </a>
    <a href="https://github.com/riccizz" target="_blank">
        <img src="/assets/icons/github.svg" alt="GitHub">
    </a>
    <a href="https://www.linkedin.com/in/yichi-zhang-b5989821b/" target="_blank">
        <img src="/assets/icons/linkedin.svg" alt="LinkedIn">
    </a>
    <a href="https://x.com/riccizz0045" target="_blank">
        <img src="/assets/icons/twitter.svg" alt="Twitter">
    </a>
</div>

---

## Selected Publications {#projects}
<div class="projects">
    {% assign sorted_projects = site.projects | sort: "weight" | reverse %}
    {% for project in sorted_projects %}
        {% include project-card.html project=project %}
    {% endfor %}
</div>

---
