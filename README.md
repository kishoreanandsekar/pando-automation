# Playwright + Cucumber+POM Automation Framework

A scalable end-to-end automation framework built using:

* Playwright
* Cucumber.js
* Page Object Model (POM)
* ES Modules
* Winston Logger
* Environment-based execution

---

# Framework Goals

This framework is designed for:

* End-to-End Automation
* UI Automation
* Scalable Test Architecture
* Maintainable Page Objects
* Parallel Execution Support
* Environment-based Execution
* Runtime Dynamic Data Handling

---

# Project Structure

```text
project-root
│
├── config
│   └── cucumber.cjs
│
├── src
│   │
│   ├── helper
│   │   │
│   │   ├── browsers
│   │   │   └── browserManager.js
│   │   │
│   │   ├── env
│   │   │   ├── env.js
│   │   │   ├── .env.qa
│   │   │   └── .env.staging
│   │   │
│   │   ├── report
│   │   │   └── report.js
│   │   │
│   │   ├── types
│   │   │   └── envValidator.js
│   │   │
│   │   └── util
│   │       └── logger.js
│   │
│   ├── hooks
│   │   └── hooks.js
│   │
│   ├── pages
│   │   ├── loginPage.js
│   │   ├── indentPage.js
│   │   └── docPage.js
│   │
│   ├── support
│   │   └── world.js
│   │
│   └── test
│       │
│       ├── features
│       │   └── TC001_EndToEndAutomation.feature
│       │
│       └── steps
│           └── TC001_EndToEndStep.js
│
├── test-results
│   ├── screenshots
│   ├── videos
│   ├── traces
│   ├── logs
│   └── reports
│
├── package.json
└── README.md
```

---

# Framework Architecture

```text
Feature File
     ↓
Step Definition
     ↓
Page Object
     ↓
Playwright
     ↓
Browser
```

---

# Why This Structure?

| Layer            | Responsibility          |
| ---------------- | ----------------------- |
| Feature Files    | Business flow           |
| Step Definitions | Business Logic          |
| Page Files       | UI actions and locators |
| Hooks            | Setup and teardown      |
| World            | Shared runtime data     |
| Helper           | Utilities/configuration |
| Reports          | Execution artifacts     |

Benefits:

* Better maintainability
* Easier debugging
* Scalable architecture
* Reusable components
* Cleaner test design

---

# Folder Explanation

## config

### cucumber.cjs

Framework configuration file.

Handles:

* Feature paths
* Step paths
* Retry
* Parallel execution
* Tags
* Timeout
* Reporting

---

# helper

Reusable framework utilities.

---

## helper/browsers

### browserManager.js

Responsible for:

* Launching browser
* Browser selection
* Headless/headed execution
* Slow motion configuration

This centralizes browser setup.

---

## helper/env

### env.js

Loads environment variables dynamically.

Supports:

* QA
* Staging
* Production

Example:

```bash
npm run test:qa
```

---

### .env.qa / .env.staging

Contains:

* Base URL
* Browser
* Credentials
* Execution settings

---

## helper/report

### report.js

Generates HTML reports from cucumber JSON reports.

---

## helper/types

### envValidator.js

Validates:

* Browser
* Base URL
* Environment
* Credentials

Helps fail fast instead of failing during execution.
---

## helper/util

### logger.js

Custom Winston logger.

Used for:

* Scenario logs
* Execution logs
* Error logs
* Debugging

---

# hooks

## hooks.js

Framework lifecycle management.

Contains:

* BeforeAll
* Before
* After
* AfterAll

Responsibilities:

* Load environment
* Validate configuration
* Launch browser
* Create context
* Create page
* Start traces
* Capture screenshots
* Save videos
* Close browser

---

# pages

Contains Page Object Model classes.

---

# Why POM?

POM separates:

* UI logic
* Test logic

Benefits:

* Reusable methods
* Centralized locators
* Easier maintenance
* Cleaner test design

---

## loginPage.js

Handles:

* Login locators
* Login actions
* Authentication workflow

---

## indentPage.js

Handles:

* Indent creation workflow
* Assertions
* Runtime data extraction
* Search operations

---

## docPage.js

Handles:

* Document upload
* LR number operations
* Transport-related actions

---

# support

## world.js

Custom Cucumber World.

Stores shared runtime objects:

```js
this.page
this.context
this.logger
this.testData
```

Used for:

* Sharing data across steps
* Runtime storage
* Dynamic workflow handling

# test/features

Contains BDD feature files.

Example:

```gherkin
Scenario: Complete pando end to end workflow successfully
```

Feature files describe business behavior instead of technical implementation.

---

# test/steps

Contains step definitions.

Acts as bridge between:

* Feature files
* Page objects

Responsibilities:

* Orchestrate workflow
* Call page methods
* Store runtime data

---

# test-results

Stores execution artifacts.

| Folder      | Purpose                |
| ----------- | ---------------------- |
| screenshots | Failure screenshots    |
| videos      | Execution recordings   |
| traces      | Playwright trace files |
| logs        | Scenario logs          |
| reports     | HTML and JSON reports  |

---

# Execution Flow

```text
Start Execution
      ↓
Load Environment
      ↓
Validate Config
      ↓
Launch Browser
      ↓
Execute Feature
      ↓
Execute Steps
      ↓
Call Page Methods
      ↓
Generate Reports
      ↓
Close Browser
```

---

# Supported Features

| Feature               | Supported |
| --------------------- | --------- |
| POM                   | ✅         |
| Logger                | ✅         |
| Video Recording       | ✅         |
| Trace Viewer          | ✅         |
| Screenshot Capture    | ✅         |
| Environment Execution | ✅         |
| Dynamic Runtime Data  | ✅         |
| Retry                 | ✅         |
| Parallel Execution    | ✅         |
| Reporting             | ✅         |

---

# Execution Commands

## Run Tests

```bash
npm test
```

## Run QA Environment

```bash
npm run test:qa
```
---

# Final Notes

This framework is structured to simulate real-world enterprise automation architecture while keeping:

* readability
* maintainability
* scalability

as the primary goals.
