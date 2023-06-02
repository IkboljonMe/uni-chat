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
  const { userName, email, firstName, lastName } = req.body;
  const validationError = validateInputs(userName, email, firstName, lastName);
  if (validationError) {
    return res.status(400).json(validationError);
  }
  try {
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
  }
});

app.listen(3001);
