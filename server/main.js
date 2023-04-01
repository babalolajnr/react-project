const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const cors = require("cors");

const app = express();

app.use(cors());

const sampleJsonCleanProxy = createProxyMiddleware({
  target: "https://myapi.smartcode.com.ng/sample-json-clean",
  changeOrigin: true,
});
// Forward all requests to the target server
app.use("/", sampleJsonCleanProxy);
// app.use(
//   "/",
//   createProxyMiddleware("api", {
//     target: "https://myapi.smartcode.com.ng/sample-json-clean",
//     changeOrigin: true,
//   })
// );

// app.use(
//   "/",
//   createProxyMiddleware({
//     target: "https://myapi.smartcode.com.ng/sample-json-clean",
//     changeOrigin: true,
//   })
// );

// Start the server
app.listen(3000, () => {
  console.log("Proxy server listening on port 3000");
});
