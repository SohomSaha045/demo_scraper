const express = require("express");
const app = express();
const searchGoogleMaps = require("./function");

app.get("/", async (req, res) => {
  const doctor = req.query.doctor
  const location = req.query.location

  const data = await searchGoogleMaps(doctor, location);
  res.json(data);
});

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
