const express = require("express");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./app/routing/htmlRoutes")(app);

require("./app/routing/apiRoutes")(app);

// FOllowing code accepts all files and folders in the current directory
app.use("/", express.static(path.join(__dirname, "")));

const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
  console.log(`Listening on port: ${PORT}`);
});
