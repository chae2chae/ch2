---
title: Robot Learning for Flower Thinning
period: May 2025 - May 2026
organization: Metafarmers
role: Researcher
focus: Imitation learning and vision-language-action models for agricultural manipulation
summary: From ACT-based imitation learning on a Piper robot to MaskACT and GR00T N1.5 deployment on an AI-Worker bimanual robot for autonomous flower thinning.
image: assets/img/projects/flower-thinning.jpg
thumbnail: https://img.youtube.com/vi/VW5eOvwIgac/hqdefault.jpg
fallback: Robot Learning for Flower Thinning
order: 1
featured_video:
  title: GR00T N1.5 on AI-Worker Bimanual Robot
  embed_url: https://www.youtube.com/embed/VW5eOvwIgac
demo_flow:
  - title: ACT on Piper Robot
    description: Initial ACT-based imitation learning test for robotic flower thinning, used to evaluate whether action-chunking policies could reproduce teleoperated manipulation behavior on a physical Piper robot.
    links:
      - label: Watch ACT test
        url: https://youtu.be/KUHjVpi3j1w
  - title: MaskACT
    description: ACT-based behavior cloning augmented with a binary visual mask prior, making the policy more target-aware in cluttered agricultural scenes.
    links:
      - label: Watch MaskACT demo 1
        url: https://youtu.be/MkzP3aIDAu8
      - label: Watch MaskACT demo 2
        url: https://youtu.be/9AamnXX1VZw
  - title: GR00T N1.5 on AI-Worker Bimanual Robot
    description: Later-stage extension toward bimanual flower thinning using GR00T N1.5, a vision-language-action model, on the AI-Worker robot platform.
results:
  - Presented MaskACT as a poster at the IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS) 2025 Workshop.
  - Presented the follow-up autonomous flower thinning system as an oral presentation at the 21st Korea Robotics Society Annual Conference (KRoC 2026).
technologies:
  - Imitation Learning
  - Action Chunking Transformer
  - Vision-Language-Action Models
  - Bimanual Manipulation
  - Agricultural Robotics
---

## Overview

This project studies robot learning for flower thinning, a long-horizon agricultural manipulation task that requires visual target selection, precise contact, and reliable execution in cluttered real-world scenes.

The work progressed from an initial Action Chunking Transformer test on a Piper robot to MaskACT, then toward GR00T N1.5 deployment on an AI-Worker bimanual robot. The goal was to move from teleoperated demonstrations toward closed-loop autonomous flower thinning while testing how imitation learning and vision-language-action models can support real-robot agricultural manipulation.
