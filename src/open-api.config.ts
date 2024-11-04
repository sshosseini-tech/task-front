import type { ConfigFile } from "@rtk-query/codegen-openapi";

const config: ConfigFile = {
  schemaFile: "http://localhost:3002/api-docs.json",
  apiFile: "./services/apiFile.ts",
  outputFile: "./services/generatedApis.ts",
  hooks: true,
};

export default config;
