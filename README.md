# Strava Declutter

[![AMO](https://img.shields.io/badge/AMO-Firefox%20Addon-orange?logo=firefox)](https://addons.mozilla.org/it/firefox/addon/strava-declutter/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![Issues](https://img.shields.io/github/issues/giacomo-folli/Strava-Declutter)](https://github.com/giacomo-folli/Strava-Declutter/issues)

A small Firefox extension that declutters the Strava web interface by hiding or simplifying UI elements for a cleaner experience.

<!-- ## Screenshot -->

<!-- ![Screenshot of Strava Declutter in action](docs/screenshot.png) -->

<!-- > Replace docs/screenshot.png with an actual screenshot of the addon in use (or link the screenshot hosted on the add-on page). -->

## Features

- Removes or hides non-essential elements on Strava activity pages.
- Simplifies the layout for faster reading of activity data.
- Lightweight and privacy-friendly: no data sent outside the browser.

## Why use this?

Strava's web UI can be noisy and distracting. Strava Declutter reduces visual clutter so you can focus on the metrics and route details you care about.

## Install

- Official Firefox add-on: https://addons.mozilla.org/it/firefox/addon/strava-declutter/
- Development / manual install:
  1. Clone this repository:
     ```
     git clone https://github.com/giacomo-folli/Strava-Declutter.git
     ```
  2. Open Firefox and go to `about:debugging` → "This Firefox" → "Load Temporary Add-on" and select `manifest.json` from the repo root.

## Usage

Once installed, visit any Strava activity page. The addon applies automatically. To toggle behavior or revert changes, either disable the extension in Firefox or uninstall it.

If the addon provides options (e.g., toggles), describe where the options page is or how to access them here.

## Permissions & Privacy

The extension needs permission to access Strava pages to modify the DOM. It does not collect, send, or store any of your Strava data. No network requests are made outside of the add-on/update system.

If you want to be explicit, list any host permissions from `manifest.json` and explain why each is required.

## Development

- Requirements: Node.js (if the project uses a build step), npm/yarn.
- Typical dev flow (adjust commands to match this repo's build system):
  ```
  npm install
  npm run build
  ```
- Load the extension temporarily in Firefox for testing (see Install → manual install).
- Linting / formatting: mention ESLint / Prettier if used.

## Testing

Describe how to run tests if any (unit tests, linters, or browser tests). Example:
```
npm test
```

## Contributing

Contributions welcome! Please open an issue for bugs or feature requests, then submit a pull request with:

- A clear description of the change.
- Tests (if applicable).
- Updated README/docs/screenshots when behavior or UI changes.

Consider adding a CONTRIBUTING.md and CODE_OF_CONDUCT.md for larger projects.

## Changelog

Keep a changelog (CHANGELOG.md) for non-trivial changes and releases.

## License

This project is (proposed) licensed under the MIT License — see [LICENSE](./LICENSE) for details. If you prefer a different license, add the appropriate file and update the badge above.

## Authors & Credits

- Giacomo Folli — original author
- (Add other contributors, libraries, or references here)

## Support

Open an issue on GitHub for bugs or questions:
https://github.com/giacomo-folli/Strava-Declutter/issues
