//Install express server
const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8081;

// Serve only the static files form the dist directory
app.use(express.static("./dist/angular-store-frontend"));

app.get("/*", (req, res) =>
  res.sendFile("index.html", { root: "dist/angular-store-frontend/" })
);

// Start the app by listening on the default Heroku port
app.listen(port, function () {
  console.log(`starting app on: http://localhost:${port}`);
});
