---
layout: project
title: Flower Thinning을 위한 Robot Learning
permalink: /ko/projects/flower-thinning-vla/
lang: ko
period: 2025.05 - 2026.05
organization: Metafarmers
role: Researcher
focus: 농업 manipulation을 위한 imitation learning 및 vision-language-action model
summary: Piper robot의 ACT 기반 imitation learning test에서 MaskACT, 그리고 AI-Worker bimanual robot의 GR00T N1.5 deployment까지 이어지는 autonomous flower thinning 프로젝트입니다.
image: assets/img/projects/flower-thinning.jpg
thumbnail: https://img.youtube.com/vi/VW5eOvwIgac/hqdefault.jpg
fallback: Robot Learning for Flower Thinning
featured_video:
  title: GR00T N1.5 on AI-Worker Bimanual Robot
  embed_url: https://www.youtube.com/embed/VW5eOvwIgac
demo_flow:
  - title: ACT on Piper Robot
    description: Robotic flower thinning에 ACT 기반 imitation learning을 적용할 수 있는지 확인하기 위한 초기 real-robot test입니다. 최적화된 최종 시스템이 아니라, teleoperation manipulation behavior를 physical Piper robot에서 재현할 수 있는지 검증한 단계입니다.
    links:
      - label: ACT test 보기
        url: https://youtu.be/KUHjVpi3j1w
  - title: MaskACT
    description: Binary visual mask prior를 결합한 ACT 기반 behavior cloning policy입니다. 복잡한 농업 장면에서 target-aware flower thinning을 수행하도록 설계했습니다.
    links:
      - label: MaskACT demo 1 보기
        url: https://youtu.be/MkzP3aIDAu8
      - label: MaskACT demo 2 보기
        url: https://youtu.be/9AamnXX1VZw
  - title: GR00T N1.5 on AI-Worker Bimanual Robot
    description: AI-Worker bimanual robot platform에서 GR00T N1.5 기반 vision-language-action model을 적용하는 후속 확장 단계입니다.
results:
  - MaskACT를 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS) 2025 Workshop에서 poster로 발표했습니다.
  - 후속 autonomous flower thinning system을 21st Korea Robotics Society Annual Conference (KRoC 2026)에서 oral presentation으로 발표했습니다.
technologies:
  - Imitation Learning
  - Action Chunking Transformer
  - Vision-Language-Action Models
  - Bimanual Manipulation
  - Agricultural Robotics
---

## Overview

이 프로젝트는 flower thinning을 위한 robot learning 연구입니다. Flower thinning은 visual target selection, precise contact, cluttered real-world scene에서의 안정적인 실행이 필요한 long-horizon agricultural manipulation task입니다.

연구 흐름은 Piper robot에서의 초기 Action Chunking Transformer test, MaskACT, 그리고 AI-Worker bimanual robot에서의 GR00T N1.5 deployment로 이어졌습니다. 목표는 teleoperated demonstration에서 closed-loop autonomous flower thinning으로 확장하면서, imitation learning과 vision-language-action model이 실제 농업 manipulation에 어떻게 기여할 수 있는지 검증하는 것이었습니다.
