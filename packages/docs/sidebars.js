module.exports = {
  lambdaSidebar: [
    {
      type: "link",
      label: "← Back to main docs",
      href: "/docs",
    },
    "lambda",
    "lambda-cli",
    "lambda-setup",
    "lambda-permissions",
    "lambda-region-selection",
    "lambda-runtime",
    "lambda-faq",
    {
      collapsed: false,
      type: "category",
      label: "Node.JS APIs",
      items: [
        "estimateprice",
        "deployfunction",
        "deletefunction",
        "getfunctioninfo",
        "getfunctions",
        "deployproject",
        "ensurelambdabinaries",
        "getuserpolicy",
        "getrolepolicy",
        "getorcreatebucket",
        "getrenderprogress",
        "rendervideoonlambda",
        "simulatepermissions",
        "renderstillonlambda",
      ],
    },
    "lambda-changelog",
  ],
  someSidebar: [
    {
      collapsed: false,
      type: "category",
      label: "Getting started",
      items: [
        "getting-started",
        "the-fundamentals",
        "animating-properties",
        "reusability",
        "timeline",
        "render",
      ],
    },
    {
      type: "category",
      label: "Techniques",
      collapsed: false,
      items: [
        "assets",
        "using-audio",
        "fonts",
        "using-randomness",
        "audio-visualization",
        "use-img-and-iframe",
        "javascript",
        "data-fetching",
        "encoding",
        "transparent-videos",
        "parametrized-rendering",
        "dynamic-metadata",
        "ssr",
        "webpack",
        "legacy-babel",
        "env-variables",
        "third-party",
        "stills",
      ],
    },
    "cli",
    "config",
    {
      type: "category",
      label: "API - Core",
      collapsed: false,
      items: [
        "continue-render",
        "delay-render",
        "interpolate",
        "interpolate-colors",
        "get-input-props",
        "measure-spring",
        "random",
        "register-root",
        "spring",
        "use-current-frame",
        "use-video-config",
        "audio",
        "composition",
        "sequence",
        "video",
        "absolute-fill",
        "img",
        "iframe",
        "freeze",
        "still",
        "series",
        "easing",
      ],
    },
    {
      type: "category",
      label: "API - @remotion/bundler",
      items: ["bundle"],
    },
    "gif",
    {
      type: "category",
      label: "API - @remotion/media-utils",
      items: [
        "get-audio-data",
        "get-audio-duration",
        "get-video-metadata",
        "get-waveform-portion",
        "use-audio-data",
        "visualize-audio",
      ],
    },
    {
      type: "link",
      href: "/docs/lambda",
      label: "API - @remotion/lambda",
    },
    "player",
    {
      type: "category",
      label: "API - @remotion/three",
      items: ["three", "three-canvas", "use-video-texture"],
    },
    {
      type: "category",
      label: "API - @remotion/renderer",
      items: [
        "get-compositions",
        "render-frames",
        "stitch-frames-to-video",
        "render-still",
      ],
    },
    {
      type: "category",
      label: "Troubleshooting",
      collapsed: false,
      items: [
        "timeout",
        "media-playback-error",
        "performance",
        "webpack-dynamic-imports",
        "non-seekable-media",
        "flickering",
      ],
    },
    "2-0-migration",
    "license",
  ],
};
