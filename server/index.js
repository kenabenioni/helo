require("dotenv").config();
const express = require("express"),
        bodyParser = require("body-parser"),
        ctrl = require("./controller.js"),
        massive = require('massive');

  const app = express();
  const PORT = 3005;

  app.use(bodyParser.json());

  massive(process.env.MY_URL).then(db => {
    app.set('db', db);
    app.listen(PORT, () => console.log(`${PORT} by Childish Gambino`));
  })
  .catch(err => console.log(err));

