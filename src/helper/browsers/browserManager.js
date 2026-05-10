import {chromium,firefox,webkit} from "playwright";

export const invokeBrowser = async () => {

    // Read browser from ENV

    const browserName =
      process.env.BROWSER || "chromium";

    console.log(
      `Launching Browser : ${browserName}`
    );

    const browserType = {

      chromium,
      firefox,
      webkit
    }[browserName];

    // Invalid browser validation

    if (!browserType) {

      throw new Error(

        `Invalid Browser : ${browserName}`
      );
    }

    // Launch browser
    return await browserType.launch({
      // Headless mode

      headless:
        process.env.HEADLESS === "true",

      // Slow execution
    
      slowMo:
        Number(process.env.SLOWMO),

      // Start maximized
      args: ["--start-maximized"]
    });
};