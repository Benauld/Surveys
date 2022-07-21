// figure out what credentials to return

if (process.env.NODE_ENV === "production") {
  console.log("prod", process.env.NODE_ENV);
  module.exports = require("./prod");
} else {
  console.log("dev", process.env.NODE_ENV);
  module.exports = require("./dev");
}
