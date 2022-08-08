/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  serverBuildTarget: "netlify",
  server:
    process.env.NETLIFY || process.env.NETLIFY_LOCAL
      ? "./server.js"
      : undefined,
  ignoredRouteFiles: ["**/.*"],
  serverDependenciesToBundle: [
    // /rehype.*/,
    /remark.*/,
    // /unified.*/,
    /micromark.*/,
    // /mdast.*/,
    /mdast-util-to-markdown.*/,
    // /fault.*/,
    // /hast-.*/,
    // /hastscript.*/,
    // /unist-.*/,
    // /bail.*/,
    // /zwitch.*/,
    // /longest-streak.*/,
    // /vfile.*/,
    // /trough.*/,
    // /property-information.*/,
    // /comma-.*/,
    // /web-.*/,
    // /html-void.*/,
    // /space-separated.*/,
    // /parse-entities.*/,
    // /character-entities.*/,
    // /prismjs.*/,
    "@stoplight/elements-dev-portal",
    "@stoplight/elements-core",
    "@stoplight/markdown-viewer",
    "@stoplight/markdown",
    // "@stoplight/json-schema-viewer"
  ],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
};
