const agentParser = require("ua-parser-js");
const mobileLinkServes = require("../services/mobileLinkServes.js");
const desktopLinkServes = require("../services/desktopLinkServes.js");

exports.getDeepLink = (req, res) => {
  const headersUserAgent = agentParser(req.headers["user-agent"]);
  console.log({ headersUserAgent });

  if (headersUserAgent.os.name === "iOS") {
    return mobileLinkServes.getIosLink(req, res);
  }

  if (headersUserAgent.os.name === "Android") {
    return mobileLinkServes.getAndroidLink(req, res);
  }

  desktopLinkServes.getDesktop(req, res);
};
