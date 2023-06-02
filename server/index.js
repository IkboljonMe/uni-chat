const express = require("express");
const cors = require("cors");
require("dotenv").config();
const axios = require("axios");

const app = express();
// app.use(dotenv.config());
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  console.log(process.env.CHAT_ENGINE_PRIVATE_KEY);
  const { username } = req.body;
  try {
    const response = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username: username,
        first_name: username,
        secret: username,
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
