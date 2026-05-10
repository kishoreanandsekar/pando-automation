import {
  createLogger,
  transports,
  format
} from "winston";

import path from "path";

export const createScenarioLogger =
  (scenarioName) => {

    // Safe filename
    const safeScenarioName =
      scenarioName.replace(
        /[^a-zA-Z0-9]/g,"_" );

    // Log file path
    const logFilePath = path.join(

      "test-results",

      "logs",

      `${safeScenarioName}.log`
    );

    // Create logger
    return createLogger({

      level: "info",

      format: format.combine(

        format.timestamp({

          format:
            "YYYY-MM-DD HH:mm:ss"
        }),

        format.printf(

          ({ timestamp,
             level,
             message }) =>

            `${timestamp} [${level}] ${message}`
        )
      ),

      transports: [
        // Console logs
  
        new transports.Console(),

        //
        // File logs
        //
        new transports.File({

          filename:
            logFilePath
        })
      ]
    });
};