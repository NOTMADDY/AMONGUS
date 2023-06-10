const api = require("discord.js-selfbot");
const fs = require('fs');
const express = require('express');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

const app = express();
app.get('/', function (req, res) {
  res.send('FR1ENDS VC JOINER');
});
app.listen(3000);

const token = process.env.TOKEN; // Retrieve token from environment variable

Hosting(token);

function Hosting(token) {
  const userclient = new api.Client();
  userclient.on("ready", () => {
    function randomStatus() {
      userclient.user.setActivity("ELDEN RING", { type: "PLAYING" });
    }
    setInterval(randomStatus, 10000);
    console.log('Connected: ' + userclient.user.tag);
    const vc = userclient.channels.cache.get('782920405081653251');
    vc.join();
  });
  userclient.login(token);
}

process.on('uncaughtException', function (exception) {
});

process.on('unhandledRejection', error => {
});
