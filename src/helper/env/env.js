import dotenv from "dotenv";

export const getEnv = () => {

  //
  // Default environment
  //
  const env = process.env.ENV || "qa";

  dotenv.config({
    
    path:
      `src/helper/env/.env.${env}`
  });

  console.log(
    `Environment Loaded : ${env}`
  );
};