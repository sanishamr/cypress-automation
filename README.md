# Cypress Automation Project

This project contains Cypress end-to-end tests for the [Jupiter Toys demo site](https://jupiter.cloud.planittesting.com/).

## Prerequisites

- Node.js and npm

Install the dependencies from the project root:

```bash
npm ci
```

## Tests

The Cypress suite covers:

- Contact form required-field validation and successful submissions (the success test runs five times with different names).
- Cart item subtotals and the grand total.

## Running tests

Open the Cypress Test Runner:

```bash
npm run cypress:open
```

Run all tests headlessly:

```bash
npm run cypress:run
```

## Continuous integration

GitHub Actions runs the Cypress suite on pushes and pull requests targeting `main`, and can also be started manually from the Actions tab. The workflow uses Node.js 22, installs dependencies with `npm ci`, and runs the suite headlessly. Mochawesome JSON reports are uploaded as a workflow artifact and retained for 14 days.

## Test reports

Cypress writes Mochawesome JSON reports to `cypress/reports`. Each run creates a separate report file.

Merge the JSON reports:

```bash
npm run merge:reports
```

Generate an HTML report from the merged JSON:

```bash
npm run report:html
```

The merged JSON and generated HTML report are written to `cypress/reports`. The merge command processes every JSON file in that folder; before merging again, remove the previous `output.json` so it is not included in the next merge.
