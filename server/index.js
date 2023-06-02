const express = require("express");
const cors = require("cors");
const validateInputs = require("./validator");
require("dotenv").config();
const axios = require("axios");

const app = express();
// app.use(dotenv.config());
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  console.log(process.env.CHAT_ENGINE_PRIVATE_KEY);
  const { userName, email, firstName, lastName } = req.body;

  try {
    validateInputs(userName, email, firstName, lastName);
    const response = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username: userName,
        first_name: firstName,
        email: email,
        last_name: lastName,
        secret: userName,
      },
      {
        headers: { "private-key": process.env.CHAT_ENGINE_PRIVATE_KEY },
      }
    );
    return res.status(201).json(response.data);
  } catch (err) {
    console.log(err);
    return res.status(401).json("Error request");
  }
});

app.listen(3001);
