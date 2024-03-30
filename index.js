const express = require("express");
const app = express();
var cors = require("cors");
app.use(cors());

require("dotenv").config();

const port = process.env.PORT || 3000;

const { readdirSync } = require("fs");
readdirSync("./routes").map((file) =>
  app.use("/", require("./routes/" + file))
);
app.get("/", (req, res) => {
  res.send();
});

const products = require("./routes/products.js");

app.listen(port, () => {
  console.log(`Server is running on ${port}`); // Use template literal for proper interpolation
});
