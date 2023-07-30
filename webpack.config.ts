
import {Configuration} from "webpack";
import path from "path";

import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnv, BuildPath } from "./config/build/types/config";

export default (env: BuildEnv) => {
  const mode = env.mode || "development";
  const isDev = mode === "development";
  const PORT = env.port || 3000;

  const paths: BuildPath = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    build: path.resolve(__dirname, "build"),
    html: path.resolve(__dirname, "public", "index.html"),
    src: path.resolve(__dirname, "src")
  };

  const config: Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT
  });

  return config;
};