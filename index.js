const express = require("express");
const app = express();
const port = 8686;

app.get("/", (req, res) => res.send("hello"));

app.listen(port, () =>
  console.log(`Express app listening at http://localhost:${port}`)
);