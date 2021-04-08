const fs = require("fs");
const path = require("path");

exports.getAndroidLink = (req, res) => {
  const deepLink = fs.readFileSync(
    path.join(__dirname, "../.well-known/assetlinks.json")
  );

  res
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(deepLink);
};

exports.getIosLink = (req, res) => {
  const deepLink = fs.readFileSync(
    path.join(__dirname, "../.well-known/apple-app-site-association")
  );

  res
    .code(200)
    .header("Content-Type", "application/json; charset=utf-8")
    .send(deepLink);
};
