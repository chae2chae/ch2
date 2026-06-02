---
layout: post
title: "VITRA: Human Activity Video로 Vision-Language-Action Model 사전학습하기"
description: Unscripted egocentric human video를 dexterous manipulation pretraining data로 변환하는 VITRA에 대한 reading note.
permalink: /ko/blog/2026/06/01/vitra-human-video-vla/
lang: ko
date_label: "2026.06.01"
tags:
  - Paper Review
---

Links: [arXiv](https://arxiv.org/abs/2510.21571), [Project](https://microsoft.github.io/VITRA/), [GitHub](https://github.com/microsoft/VITRA/), [Hugging Face](https://huggingface.co/microsoft/VITRA-VLA-3B)

VITRA가 흥미로운 이유는 robot learning의 가장 큰 bottleneck 중 하나인 robot demonstration 수집 비용을 다루기 때문입니다. Scripted robot data에만 의존하는 대신, 실제 human activity video를 vision-language-action model의 pretraining data로 변환합니다.

Human video는 object, skill, environment, motion style의 다양성이 큽니다. 하지만 이런 영상은 clean robot episode로 잘려 있지 않고, language instruction도 없으며, robot action label도 없습니다. VITRA는 human hand motion을 복원하고, 의미 있는 action을 segment하고, language label을 붙인 뒤 action-chunk training data로 변환하는 pipeline을 구성합니다.

첫 단계는 **3D motion labeling**입니다. Background optical flow를 통해 camera가 moving camera인지 fixed camera인지 판단하고, camera intrinsics를 추정하며 distortion을 보정합니다. 이후 3D hand pose와 camera trajectory를 복원하고, camera-frame hand trajectory를 world-frame trajectory로 변환해 action segmentation과 instruction generation에 사용합니다.

두 번째 단계는 **atomic action segmentation**입니다. VITRA는 wrist velocity의 local minima를 action boundary로 사용합니다. 사람이 한 행동에서 다음 행동으로 넘어갈 때 손이 잠깐 느려진다는 관찰을 이용한 방식입니다. Left hand와 right hand를 독립적으로 segment하기 때문에 long unscripted video에서 짧은 one-hand action clip을 만들 수 있습니다.

세 번째 단계는 **instruction labeling**입니다. 각 clip에서 frame을 sampling하고, future palm trajectory를 이미지 위에 표시한 뒤 vision-language model이 "Right hand: pick up ..." 같은 instruction을 생성하도록 합니다. 의미 있는 action이 아니면 제외합니다. 최종 episode는 language instruction, visual frame, 3D human-hand action chunk로 구성됩니다.

평가는 조심스럽게 해석해야 합니다. Grasping에서는 predicted fingertip trajectory가 target object의 RGB-D point cloud에 얼마나 가까이 접근하는지를 측정합니다. 이는 실제 grasp success rate가 아니라 plausibility metric입니다. VITRA는 Being-H0보다 낮은 hand-object distance를 보이며, target object 근처로 더 자연스럽게 접근하는 motion을 예측함을 보여줍니다.

General action에서는 user study를 사용합니다. 참가자는 여러 model이 예측한 hand-motion video를 보고 scene과 instruction에 더 잘 맞는 motion을 선택합니다. VITRA는 baseline보다 높은 preference score를 받아, 예측 motion이 장면과 instruction에 더 잘 정렬되어 있음을 보입니다.

핵심 caveat은 이러한 결과가 closed-loop robot execution과 같지는 않다는 점입니다. Human-hand action chunk는 여전히 robot embodiment로 mapping되어야 하고, real robot dynamics, perception noise, contact constraint 안에서 검증되어야 합니다.

내 연구 방향에서 VITRA는 demonstration dependence를 줄이는 실용적인 경로를 보여준다는 점에서 중요합니다. Human video pretraining은 넓은 manipulation prior를 제공할 수 있고, 이후 robot-specific fine-tuning과 closed-loop evaluation이 실제 배포 가능성을 결정합니다.
