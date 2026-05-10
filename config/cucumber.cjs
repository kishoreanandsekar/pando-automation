console.log(
  "CUCUMBER CONFIG LOADED-1"
);

module.exports = {

  default: {

    // Feature files path
    paths: [ "src/test/features/*.feature"],

    // Required files
    require: [

      "src/support/world.js",

      "src/test/steps/*.js",

      "src/hooks/hooks.js"
    ],

    // Reports
    format: [

      "progress",

      "json:test-results/reports/cucumber-report.json",

      "html:test-results/reports/cucumber-report.html"
    ],

    // Tags
    tags:
      process.env.TAGS || "",


    // Retry on failure

    retry: 1,

    retryTagFilter: "@flaky",

    // Timeout

    timeout: 120 * 1000,

    // parallel execution
    parallel:
      Number(process.env.PARALLEL) || 1,


    // Dry run

    dryRun: false,
    publishQuiet: true
  },

  // rerun profile

  rerun: {

    require: [

      "src/support/world.js",

      "src/test/steps/*.js",

      "src/hooks/hooks.js"
    ],

    format: [
      "progress-bar"
    ],

    parallel: 1,

    publishQuiet: true
  }
};