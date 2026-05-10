import {
  BeforeAll,
  AfterAll,
  Before,
  After,
  Status,
  setDefaultTimeout
} from "@cucumber/cucumber";

import fs from "fs-extra";

import {
  invokeBrowser
} from "../helper/browsers/browserManager.js";

import {
  getEnv
} from "../helper/env/env.js";

import {
  createScenarioLogger
} from "../helper/util/logger.js";

import {
  validateEnv
} from "../helper/types/envValidator.js";

let browser;

let context;

let page;

setDefaultTimeout(
  120 * 1000
);

BeforeAll(async function () {

  // Load environment
  getEnv();

  validateEnv();

  // Clean old results
  await fs.emptyDir(
  "test-results/screenshots"
);

await fs.emptyDir(
  "test-results/videos"
);

await fs.emptyDir(
  "test-results/traces"
);

await fs.emptyDir(
  "test-results/logs"
);

  //
  // Create folders
  //
  await fs.ensureDir(
    "test-results/screenshots"
  );

  await fs.ensureDir(
    "test-results/videos"
  );

  await fs.ensureDir(
    "test-results/traces"
  );

  await fs.ensureDir(
    "test-results/logs"
  );

  await fs.ensureDir(
  "test-results/reports"
);

  console.log(
    "Launching Browser"
  );

  // Launch browser
  browser = await invokeBrowser();

  // Create SINGLE context
  context = await browser.newContext({

    // Needed for maximize
    viewport: null,

    //
    // Record videos

    recordVideo: {

      dir:
        "test-results/videos"
    }
  });

  // Create SINGLE page
  page = await context.newPage();

  // Playwright timeouts
  page.setDefaultTimeout(
    60000
  );

  page.setDefaultNavigationTimeout(
    120000
  );

  

  console.log(
    "Framework Initialization Completed"
  );
});

Before(async function ({ pickle }) {

  // Share page/context
  this.page = page;

  this.context = context;

  // Logger
  this.logger =
    createScenarioLogger(
      pickle.name
    );



  // Start trace
  await context.tracing.start({

    screenshots: true,

    snapshots: true,

    sources: true
  });

  this.logger.info(

    `Scenario Started : ${pickle.name}`
  );
});

After(async function ({ pickle, result }) {

  // Scenario Passed
  if (result.status === Status.PASSED) {

    this.logger.info(

      `Scenario Passed : ${pickle.name}`
    );
  }

  // Scenario Failed
  if (result.status === Status.FAILED) {

    this.logger.error(

      `Scenario Failed : ${pickle.name}`
    );

    // Screenshot
    const screenshot =
      await page.screenshot({

        path:
          `test-results/screenshots/${pickle.name}.png`,

        type: "png",

        fullPage: true
      });

    //
    // Attach screenshot
    //
    // await this.attach(

    //   screenshot,

    //   "image/png"
    // );
  }

  //
  // Stop trace
  //
  await context.tracing.stop({

    path:
      `test-results/traces/${pickle.name}.zip`
  });
});

AfterAll(async function () {

  console.log(
    "Closing Browser"
  );

  //
  // Close page
  //
  await page.close();

  //
  // Close context
  //
  await context.close();

  //
  // Close browser
  //
  await browser.close();
});