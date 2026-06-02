---
layout: post
title: "TacO: TacO: Benchmarking Tactile Sensors for Object Manipulation"
description: Hardware spec이 아니라 policy success 기준으로 tactile sensor를 비교한 TacO benchmark에 대한 reading note.
permalink: /ko/blog/2026/06/02/taco-tactile-sensors/
lang: ko
date_label: "2026.06.02"
tags:
  - Paper Review
---

Links: [arXiv](https://arxiv.org/abs/2605.21976)

TacO가 흥미로운 이유는 여러 tactile sensor를 동일한 robot manipulation pipeline 안에서 비교한다는 점입니다. Tactile sensor는 sensing principle, geometry, compliance, friction, signal format이 모두 다르지만, 실제 manipulation task에서 어떤 sensor가 learned policy에 유리한지 판단하기는 어렵습니다.

이 benchmark는 ACT 기반 imitation learning policy에서 여섯 종류의 tactile sensor를 평가합니다.

- **FSR**: 저비용 single normal-force sensor.
- **FlexiTac**: Distributed normal-force reading을 제공하는 resistive taxel array.
- **eGain**: Elastomer microchannel 내부의 EGaIn resistance change를 사용하는 liquid-metal resistive sensor.
- **Contact Mic**: Contact, slip, impact에서 발생하는 high-frequency vibration을 포착하는 piezo contact microphone.
- **Daimon**: Soft membrane deformation을 관찰하는 camera-based visual tactile sensor.
- **eFlesh**: Magnet displacement를 통해 normal/shear force를 추정하는 magnetic tactile sensor.

Policy는 RGB observation, robot proprioception, tactile observation을 함께 입력으로 받습니다. Tactile modality는 signal type에 따라 다르게 encoding됩니다. Scalar force는 linear projection을 사용하고, taxel array와 resistive value는 MLP를 통과하며, tactile image는 ResNet 계열 encoder를 사용합니다. Contact microphone waveform은 mel-spectrogram feature로 변환됩니다.

실험은 세 가지 manipulation task와 하나의 repeatability test로 구성됩니다. Reorientation은 object를 table contact 상태로 유지하면서 회전시키는 task입니다. Pick-and-place with unknown mass는 겉보기에는 비슷하지만 무게가 다른 can을 다룰 때 tactile feedback이 도움이 되는지 확인합니다. Insertion은 contact 순간의 geometry가 시각적으로 가려지기 때문에 tactile 정보의 효과가 특히 큰 setting입니다.

핵심 결과는 tactile feedback이 대체로 성능을 높이지만, 모든 task에서 항상 가장 좋은 sensor는 없다는 점입니다. 특히 insertion처럼 local contact geometry가 vision에서 사라지는 task에서는 tactile sensing의 효과가 큽니다. Contact Mic과 eFlesh는 plug insertion에서 큰 성능 개선을 보였고, pick-and-place에서도 object mass가 visual observation만으로 구분되지 않을 때 여러 sensor가 성능을 높였습니다.

중요한 caveat은 sensor performance가 signal만의 문제가 아니라는 점입니다. Sensor body는 fingertip material, friction, compliance, shape, contact area를 바꿉니다. High-friction 또는 compliant fingertip은 pick-and-place와 insertion에 유리할 수 있지만, reorientation에서는 controlled slipping이 필요해 다른 특성이 더 유리할 수 있습니다. 즉 policy success에는 tactile modality와 embodiment effect가 함께 섞여 있습니다.

Robot learning 관점에서 TacO의 takeaway는 tactile sensor를 hardware specification만으로 평가해서는 안 된다는 것입니다. Mass estimation, occluded insertion, continuous force regulation에서 tactile feedback은 vision을 보완할 수 있으며, sensor form factor 자체도 policy embodiment의 일부로 다뤄야 합니다.
