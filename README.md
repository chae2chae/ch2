# Homepage

Slim Jekyll portfolio site for robotic learning and robotics engineering work.

## Local Preview

```sh
bundle install --path vendor/bundle
bundle exec jekyll serve --host 127.0.0.1 --port 4001
```

Then open <http://127.0.0.1:4001/ch2/>.

For a root-path local preview, run:

```sh
bundle exec jekyll serve --host 127.0.0.1 --port 4001 --baseurl ""
```

## Media Slots

Add personal media files at these paths to replace the fallback panels:

- `assets/img/profile.jpg`
- `assets/img/projects/flower-thinning.jpg`
- `assets/img/projects/pollination-harvesting.jpg`
- `assets/img/projects/tact-bimanual-flower-thinning.jpg`
- `assets/img/projects/mujoco-teleoperation.jpg`
- `assets/img/projects/keti-teleoperation.jpg`
- `assets/img/projects/drl-pedestrian-avoidance.jpg`
- `assets/img/projects/process-anomaly-detection.jpg`

Update `_data/profile.yml` if the GitHub URL or media filenames change.
