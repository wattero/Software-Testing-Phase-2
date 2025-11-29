#!/bin/bash

# Automated Bug Report Creation Script
# Uses GitHub CLI (gh) to create issues from the bug_report.yml template
# Usage: ./scripts/create-bug-reports.sh

set -e

REPO="wattero/Software-Testing-Phase-2"
DATE=$(date +%Y-%m-%d)

echo "🐞 Creating Bug Reports for Software-Testing-Phase-2"
echo "=================================================="

# Bug 1: add.js - String concatenation instead of numeric addition
echo ""
echo "Creating bug report for add.js..."
gh issue create \
  --repo "$REPO" \
  --title "[Bug]: add.js performs string concatenation instead of numeric addition" \
  --label "critical,P0" \
  --body "## 📝 Description
The \`add\` function concatenates strings instead of performing numeric addition when one or more arguments are strings.

## 📅 Date
$DATE

## 💻 Name of Program
add.js (Utility Library)

## 🏷️ Release and Version Number
Phase 2

## ⚙️ Testing Configuration
Node.js with Jest, ES Modules

## 📊 Report Type
Programming error

## 🔁 Repeatability
Always

## ⚠️ Criticality
Critical

## 🚨 Priority
P0 (Immediate)

## 👥 Impact on Customers
E-commerce price calculations will be incorrect. Cart totals, discounts, and taxes will produce wrong results.

## 🔍 Steps to Reproduce
1. Import add function: \`import add from './add.js'\`
2. Call with string number: \`add(\"5\", 3)\`
3. Observe result is \`\"53\"\` instead of \`8\`

## 🎯 Expected Result
\`add(\"5\", 3)\` should return \`8\` (numeric addition)
\`add(\"10\", \"20\")\` should return \`30\`

## ❌ Actual Result
\`add(\"5\", 3)\` returns \`\"53\"\` (string concatenation)
\`add(\"10\", \"20\")\` returns \`\"1020\"\`

## 🛠️ Recommended Fix
Convert string arguments to numbers before addition:
\`\`\`javascript
return Number(a) + Number(b);
// or use toNumber utility
\`\`\`

## 📌 Status (Lifecycle)
New

## 🏷️ Keywords
add, arithmetic, string, concatenation, price calculation"

echo "✅ add.js bug report created"

# Bug 2: filter.js - Returns [[]] instead of []
echo ""
echo "Creating bug report for filter.js..."
gh issue create \
  --repo "$REPO" \
  --title "[Bug]: filter.js returns [[]] instead of [] for empty results" \
  --label "critical,P0" \
  --body "## 📝 Description
The \`filter\` function returns \`[[]]\` (array containing empty array) instead of \`[]\` (empty array) when no elements match the predicate or when input is null/undefined.

## 📅 Date
$DATE

## 💻 Name of Program
filter.js (Utility Library)

## 🏷️ Release and Version Number
Phase 2

## ⚙️ Testing Configuration
Node.js with Jest, ES Modules

## 📊 Report Type
Programming error

## 🔁 Repeatability
Always

## ⚠️ Criticality
Critical

## 🚨 Priority
P0 (Immediate)

## 👥 Impact on Customers
Product filtering, search results, and cart filtering will return incorrect data structure, potentially breaking UI components expecting an empty array.

## 🔍 Steps to Reproduce
1. Import filter function: \`import filter from './filter.js'\`
2. Call with no matches: \`filter([1, 2, 3], n => n > 10)\`
3. Observe result is \`[[]]\` instead of \`[]\`

## 🎯 Expected Result
\`filter([1, 2, 3], n => n > 10)\` should return \`[]\`
\`filter([], () => true)\` should return \`[]\`
\`filter(null, () => true)\` should return \`[]\`

## ❌ Actual Result
\`filter([1, 2, 3], n => n > 10)\` returns \`[[]]\`
\`filter([], () => true)\` returns \`[[]]\`

## 🛠️ Recommended Fix
Change initialization from:
\`\`\`javascript
const result = [[]]
\`\`\`
to:
\`\`\`javascript
const result = []
\`\`\`

## 📌 Status (Lifecycle)
New

## 🏷️ Keywords
filter, array, empty, initialization, product search"

echo "✅ filter.js bug report created"

# Bug 3: toString.js - Incorrect null/undefined handling
echo ""
echo "Creating bug report for toString.js..."
gh issue create \
  --repo "$REPO" \
  --title "[Bug]: toString.js returns 'null'/'undefined' strings instead of empty string" \
  --label "critical,P0" \
  --body "## 📝 Description
The \`toString\` function returns literal strings \`\"null\"\` and \`\"undefined\"\` instead of empty string \`\"\"\` for null/undefined inputs. Also throws errors on BigInt \`0n\` and objects with null prototype.

## 📅 Date
$DATE

## 💻 Name of Program
toString.js (Utility Library)

## 🏷️ Release and Version Number
Phase 2

## ⚙️ Testing Configuration
Node.js with Jest, ES Modules

## 📊 Report Type
Programming error

## 🔁 Repeatability
Always

## ⚠️ Criticality
Major

## 🚨 Priority
P1 (High)

## 👥 Impact on Customers
Product names, descriptions, and user inputs may display 'null' or 'undefined' text to users instead of being empty.

## 🔍 Steps to Reproduce
1. Import toString function: \`import toString from './toString.js'\`
2. Call with null: \`toString(null)\`
3. Observe result is \`\"null\"\` instead of \`\"\"\`

## 🎯 Expected Result
\`toString(null)\` should return \`\"\"\`
\`toString(undefined)\` should return \`\"\"\`
\`toString(0n)\` should return \`\"0\"\`

## ❌ Actual Result
\`toString(null)\` returns \`\"null\"\`
\`toString(undefined)\` returns \`\"undefined\"\`
\`toString(0n)\` throws an error

## 🛠️ Recommended Fix
Add explicit null/undefined check at the start:
\`\`\`javascript
if (value == null) return ''
\`\`\`

## 📌 Status (Lifecycle)
New

## 🏷️ Keywords
toString, null, undefined, string conversion, display"

echo "✅ toString.js bug report created"

# Bug 4: capitalize.js - Edge case handling
echo ""
echo "Creating bug report for capitalize.js..."
gh issue create \
  --repo "$REPO" \
  --title "[Bug]: capitalize.js has edge case handling issues" \
  --label "major,P1" \
  --body "## 📝 Description
The \`capitalize\` function has issues with certain edge case inputs.

## 📅 Date
$DATE

## 💻 Name of Program
capitalize.js (Utility Library)

## 🏷️ Release and Version Number
Phase 2

## ⚙️ Testing Configuration
Node.js with Jest, ES Modules

## 📊 Report Type
Programming error

## 🔁 Repeatability
Always

## ⚠️ Criticality
Minor

## 🚨 Priority
P2 (Medium)

## 👥 Impact on Customers
Product names and category titles may not display correctly in certain edge cases.

## 🔍 Steps to Reproduce
1. Import capitalize function: \`import capitalize from './capitalize.js'\`
2. Test with edge case inputs
3. Observe unexpected behavior

## 🎯 Expected Result
Should properly capitalize first letter and lowercase the rest for all valid string inputs.

## ❌ Actual Result
Fails on 2 edge case tests in the test suite.

## 🛠️ Recommended Fix
Review edge case handling in capitalize function.

## 📌 Status (Lifecycle)
New

## 🏷️ Keywords
capitalize, string, text formatting, product names"

echo "✅ capitalize.js bug report created"

# Bug 5: defaultTo.js - Default value handling
echo ""
echo "Creating bug report for defaultTo.js..."
gh issue create \
  --repo "$REPO" \
  --title "[Bug]: defaultTo.js incorrect default value handling" \
  --label "major,P1" \
  --body "## 📝 Description
The \`defaultTo\` function incorrectly handles certain default value scenarios, failing on 7 test cases.

## 📅 Date
$DATE

## 💻 Name of Program
defaultTo.js (Utility Library)

## 🏷️ Release and Version Number
Phase 2

## ⚙️ Testing Configuration
Node.js with Jest, ES Modules

## 📊 Report Type
Programming error

## 🔁 Repeatability
Always

## ⚠️ Criticality
Major

## 🚨 Priority
P1 (High)

## 👥 Impact on Customers
Default product quantities, prices, or configuration values may not be applied correctly when values are null, undefined, or NaN.

## 🔍 Steps to Reproduce
1. Import defaultTo function: \`import defaultTo from './defaultTo.js'\`
2. Test with null/undefined/NaN values
3. Observe incorrect default value application

## 🎯 Expected Result
\`defaultTo(null, 10)\` should return \`10\`
\`defaultTo(undefined, 10)\` should return \`10\`
\`defaultTo(NaN, 10)\` should return \`10\`
\`defaultTo(1, 10)\` should return \`1\`

## ❌ Actual Result
Fails on 7 test cases with incorrect default value handling.

## 🛠️ Recommended Fix
Review the condition for when to return the default value. Should check for null, undefined, and NaN.

## 📌 Status (Lifecycle)
New

## 🏷️ Keywords
defaultTo, default value, null, undefined, NaN, configuration"

echo "✅ defaultTo.js bug report created"

echo ""
echo "=================================================="
echo "🎉 All 5 bug reports created successfully!"
echo ""
echo "View issues at: https://github.com/$REPO/issues"
