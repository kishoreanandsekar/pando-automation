export const validateEnv = () => {

  // Allowed browsers
  const allowedBrowsers = [

    "chromium",

    "firefox",

    "webkit"
  ];

  //
  // Allowed environments
  //
  const allowedEnvironments = [

    "qa",

    "staging"
  ];

  //
  // Validate ENV
  //
  const currentEnv =
    process.env.ENV || "qa";

  if (

    !allowedEnvironments.includes(
      currentEnv
    )
  ) {

    throw new Error(

      `Invalid ENV : ${currentEnv}`
    );
  }

  //
  // Validate Browser
  //
  const browser =
    process.env.BROWSER;

  if (

    !allowedBrowsers.includes(
      browser
    )
  ) {

    throw new Error(

      `Invalid Browser : ${browser}`
    );
  }

  //
  // Validate BASEURL
  //
  if (!process.env.BASEURL) {

    throw new Error(

      "BASEURL is missing in .env file"
    );
  }

  //
  // Validate Username
  //
  if (!process.env.TEST_USERNAME) {

    throw new Error(

      "APP_USERNAME is missing in .env file"
    );
  }

  //
  // Validate Password
  //
  if (!process.env.TEST_PASSWORD) {

    throw new Error(

      "APP_PASSWORD is missing in .env file"
    );
  }

  console.log(
    "Environment validation successful"
  );
};