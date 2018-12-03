const path = require("path");

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.scss$/,
    use: [
      "style-loader",
      "css-loader",
      {
        loader: "sass-loader",
        options: {
          includePaths: ["./node_modules"]
        }
      },
      "import-glob-loader"
    ],
    include: path.resolve(__dirname, "../")
  });
  defaultConfig.module.rules[1] = {
    test: /\.md$/,
    use: [
      //"raw-loader",
      {
        loader: "includes-loader"
      }
    ]
  };

  RegExp.prototype.toJSON = function() {
    return this.toString();
  };
  console.log(JSON.stringify(defaultConfig, null, "\t"));
  return defaultConfig;
};
