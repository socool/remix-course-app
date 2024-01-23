/** @type {import('@remix-run/dev').AppConfig} */
const { createRoutesFromFolders } = require("@remix-run/v1-route-convention");
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
  /* serverModuleFormat: "cjs",
  future: {
    v2_dev: false,
    v2_errorBoundary: false,
    v2_head: false,
    v2_meta: false,
    v2_normalizeFormMethod: false,
    v2_routeConvention: true,
  },
  routes(defindRoutes) {
    return createRoutesFromFolders(defindRoutes);
  },
  */
};
