require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();

var corsOptions = {
  origin: "http://localhost:8080",
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Routes
const userRoute = require("./api/routes/userRoute");

// Import connection
const db = require("./config/database.js");
// Testing database connection
db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

app.use("/api/users", userRoute);

app.listen(process.env.PORT || 3000);
console.log("Web Server is listening at port " + (process.env.port || 3000));
