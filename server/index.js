require("dotenv").config();
const express = require("express");
const cors = require("cors");
const validateInputs = require("./validator");
const axios = require("axios");
const databaseConnection = require("./db/databaseConnection");
const authRoute = require("./routers/authRoute");

const app = express();

app.use(express.json());
app.use(cors({ origin: true }));
databaseConnection();
app.use("/", authRoute);

// Port Listenning on 3333
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
