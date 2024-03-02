const express = require("express");
const app = express();
const searchGoogleMaps = require("./function");
const scrapeWebsite = require("./demo.js");
// import searchGoogleMaps from "./function";

// Define a route for the root URL ('/')

app.get("/", async (req, res) => {
//   const data = await searchGoogleMaps();
  const data = await scrapeWebsite();
  console.log(data);
  //   res.send(data);
  res.json(data);
});

// Start the server
app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
