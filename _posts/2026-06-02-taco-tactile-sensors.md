---
title: "TacO: Comparing Tactile Sensors for Robot Manipulation"
description: A reading note on TacO, a real-world benchmark that compares tactile sensors by policy success instead of hardware specifications.
tags:
  - Paper Review
---

Links: [arXiv](https://arxiv.org/abs/2605.21976)

TacO is useful because it compares tactile sensors inside the same robot manipulation pipeline. The motivation is straightforward: tactile sensors differ widely in sensing principle, geometry, compliance, friction, and signal format, but it is hard to know which sensor actually helps a learned manipulation policy on real tasks.

The benchmark evaluates six tactile sensors with an ACT-based imitation learning policy:

- **FSR**: a low-cost single normal-force sensor.
- **FlexiTac**: a resistive taxel array that provides distributed normal-force readings.
- **eGain**: a liquid-metal resistive sensor based on EGaIn resistance changes inside elastomer microchannels.
- **Contact Mic**: a piezo contact microphone that captures high-frequency vibration from contact, slip, and impact.
- **Daimon**: a camera-based visual tactile sensor that observes soft membrane deformation.
- **eFlesh**: a magnetic tactile sensor that estimates normal and shear force from magnet displacement.

The policy receives RGB observations, robot proprioception, and tactile observations. Each tactile modality is encoded according to its signal type: scalar force is linearly projected, taxel arrays and resistive values are passed through MLPs, tactile images use a ResNet-style encoder, and contact microphone waveforms are converted into mel-spectrogram features.

The experiments cover three manipulation tasks and one repeatability test. Reorientation requires the robot to rotate an object while maintaining table contact. Pick-and-place with unknown mass tests whether tactile feedback helps distinguish visually similar cans with different weights. Insertion is the most contact-sensitive setting because the plug geometry becomes partially occluded at the critical moment of contact. The repeatability setup measures how consistently each sensor responds to repeated indentation.

The main result is that tactile feedback often improves performance, but no single sensor dominates every task. Tactile sensing is especially helpful for insertion, where visual observations lose access to the local contact geometry. Contact Mic and eFlesh show large improvements in plug insertion, while several sensors improve pick-and-place performance when object mass is not visually observable.

The most important caveat is that sensor performance is not only about the signal. The sensor body changes the fingertip material, friction, compliance, shape, and contact area. High-friction or compliant fingertips can help pick-and-place and insertion, while reorientation may benefit from controlled slipping. That means policy success is influenced by both tactile modality and embodiment.

For robot learning, the takeaway is that tactile sensors should be evaluated by closed-loop task success, not only by hardware specifications. TacO makes a strong case that tactile feedback can complement vision in mass estimation, occluded insertion, and continuous force regulation, while also showing that sensor form factor must be treated as part of the policy's embodiment.
