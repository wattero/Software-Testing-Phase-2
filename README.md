# Software Testing Phase 2

[![Coverage Status](https://coveralls.io/repos/github/wattero/Software-Testing-Phase-2/badge.svg?branch=vrinne)](https://coveralls.io/github/wattero/Software-Testing-Phase-2?branch=vrinne)
[![CI Pipeline](https://github.com/wattero/Software-Testing-Phase-2/actions/workflows/ci.yml/badge.svg)](https://github.com/wattero/Software-Testing-Phase-2/actions/workflows/ci.yml)

## Purpose of this repository

This is a project template for students participating in Software Testing course
at Tampere University.

The repository only contains the source code that is under testing, `package.json` skeleton
and LICENSE file.

Source code folder contains a separate license file that must **NOT** be removed under any circumstances!
Removing this license file directly violates terms and conditions of the software under testing.
Individuals who remove or modify the license file will also carry the consequences.

## Installation

```bash
npm install
```

## Running Tests Locally

Run all tests:
```bash
npm test
```

Run tests with coverage report:
```bash
npm run test:coverage
```

The coverage report will be generated in the `coverage/` directory. Open `coverage/lcov-report/index.html` in a browser to view the HTML report.

## Test Structure

- `test/add.preplanned.test.js` - Pre-planned test cases for `add.js` (Phase 1 Test Plan)
- `test/capitalize.preplanned.test.js` - Pre-planned test cases for `capitalize.js` (Phase 1 Test Plan)

## CI/CD Pipeline

This project uses GitHub Actions for continuous integration. The pipeline:
1. Runs on every push to `main`, `master`, or `vrinne` branches
2. Runs on every pull request to `main` or `master`
3. Tests against Node.js versions 18.x and 20.x
4. Uploads coverage reports to Coveralls

## Coverage Reports

Coverage reports are automatically uploaded to [Coveralls](https://coveralls.io/github/wattero/Software-Testing-Phase-2) on every push.

## Bug Reporting

Use the [Bug Report template](.github/ISSUE_TEMPLATE/bug_report.yml) to report any defects found during testing.