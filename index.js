const fs = require("fs");
const path = require("path");
const fastify = require("fastify")({
  logger: true,
  http2: true,
  https: {
    allowHTTP1: true, // fallback support for HTTP1
    key: fs.readFileSync(path.join(__dirname, "https", "example.key")),
    cert: fs.readFileSync(path.join(__dirname, "https", "example.crt")),
  },
});
const deviceController = require("./controllers/deviceController.js");
const ip = require("ip");

fastify.get("/", (request, response) => {
  response.send({ hello: "world" });
});

fastify.get("/link", deviceController.getDeepLink);

fastify.listen(3000, ip.address(), (err, address) => {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  console.log(`server listening in ${address}`);
});
