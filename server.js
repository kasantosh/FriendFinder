const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
  console.log(`Listening on port: ${PORT}`);
});