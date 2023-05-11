const path = require("path");
module.exports = {
  webpack: {
    alias: {
      "@inteligo/atoms": path.resolve(__dirname, "src/components/atoms/"),
      "@inteligo/molecules": path.resolve(
        __dirname,
        "src/components/molecules/"
      ),
      "@inteligo/organism": path.resolve(__dirname, "src/components/organism/"),
      "@inteligo/templates": path.resolve(
        __dirname,
        "src/components/templates/"
      ),
      "@inteligo/models": path.resolve(__dirname, "src/models/"),
      "@inteligo/router": path.resolve(__dirname, "src/router/"),
      "@inteligo/services": path.resolve(__dirname, "src/services/"),
      "@inteligo/views": path.resolve(__dirname, "src/views/"),
    },
  },
};
