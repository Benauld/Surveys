const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ hi: "there it's, the second deploy" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);
