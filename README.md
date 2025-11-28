# Software Testing Phase 2

[![Coverage Status](https://coveralls.io/repos/github/wattero/Software-Testing-Phase-2/badge.svg?branch=main&cacheSeconds=5)](https://coveralls.io/github/wattero/Software-Testing-Phase-2?branch=main)
[![CI Pipeline](https://github.com/wattero/Software-Testing-Phase-2/actions/workflows/ci.yml/badge.svg)](https://github.com/wattero/Software-Testing-Phase-2/actions/workflows/ci.yml)

## Purpose of this repository

This repository contains the Phase 2 implementation of the Software Testing course (COMP.SE.200) at Tampere University. The project implements unit tests for a utility library used by an E-commerce food store application.

### What's included:
- **Pre-planned unit tests** for `add.js` and `capitalize.js` based on Phase 1 test plan
- **CI/CD pipeline** using GitHub Actions
- **Coverage reporting** via Coveralls
- **Bug report templates** for GitHub Issues

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

### Pre-planned Tests (Phase 1 Test Plan)
- `test/add.preplanned.test.js` - Pre-planned test cases for `add.js`
- `test/capitalize.preplanned.test.js` - Pre-planned test cases for `capitalize.js`

### AI-Assisted Tests
- `test/add.ai-assisted.test.js` - AI-assisted test cases for `add.js`
- `test/capitalize.ai-assisted.test.js` - AI-assisted test cases for `capitalize.js`

### Unit Tests (Prioritized Functions)
Based on the Phase 1 test plan prioritization, the following utility functions are tested:

| File | Test File | Passed | Failed | Status |
|------|-----------|--------|--------|--------|
| `add.js` | `add.preplanned.test.js` | 8/9 | 1 | ⚠️ Bug found |
| `add.js` | `add.ai-assisted.test.js` | 63/79 | 16 | ⚠️ Bug found |
| `capitalize.js` | `capitalize.preplanned.test.js` | 11/11 | 0 | ✅ Pass |
| `capitalize.js` | `capitalize.ai-assisted.test.js` | 106/108 | 2 | ⚠️ Bug found |
| `get.js` | `get.test.js` | 114/114 | 0 | ✅ Pass |
| `filter.js` | `filter.test.js` | 77/92 | 15 | ⚠️ Bug found |
| `map.js` | `map.test.js` | 100/100 | 0 | ✅ Pass |
| `toNumber.js` | `toNumber.test.js` | 135/135 | 0 | ✅ Pass |
| `isEmpty.js` | `isEmpty.test.js` | 184/184 | 0 | ✅ Pass |
| `isObject.js` | `isObject.test.js` | 103/103 | 0 | ✅ Pass |
| `toString.js` | `toString.test.js` | 80/88 | 8 | ⚠️ Bug found |
| `defaultTo.js` | `defaultTo.test.js` | 87/94 | 7 | ⚠️ Bug found |

**Total: 1068 passed, 49 failed (1117 tests)**  
**Test Suites: 6 failed, 6 passed (12 total)**

### Test Methodology
All tests follow the methodology defined in the Phase 1 test plan:
- **Equivalence Partitioning** - Input space divided into equivalence classes
- **Boundary Value Analysis** - Testing at boundaries of equivalence classes
- **E-Commerce Use Cases** - Real-world scenarios from the E-commerce application

### Known Bugs Found
- **`add.js`** - String concatenation instead of numeric addition when one or more arguments are strings (e.g., `add("5", 3)` returns `"53"` instead of `8`)
- **`capitalize.js`** - Issues with certain edge case inputs
- **`filter.js`** - Returns `[[]]` instead of `[]` when no elements match the predicate (bug in `const result = [[]]` initialization)
- **`toString.js`** - Returns `"null"` and `"undefined"` strings instead of empty string `""` for null/undefined inputs; throws error on BigInt `0n` and objects with null prototype
- **`defaultTo.js`** - Incorrect handling of certain default value scenarios

## CI/CD Pipeline

This project uses GitHub Actions for continuous integration. The pipeline:
1. Runs on every push to `main`, `master`, `vrinne` or `o_rinne` branches
2. Runs on every pull request to `main` or `master`
3. Tests against Node.js versions 18.x and 20.x
4. Uploads coverage reports to Coveralls

## Coverage Reports

Coverage reports are automatically uploaded to [Coveralls](https://coveralls.io/github/wattero/Software-Testing-Phase-2?branch=main) on every push.

## Bug Reporting

The [Bug Report template](.github/ISSUE_TEMPLATE/bug_report.yml) is used to report any defects found during testing.