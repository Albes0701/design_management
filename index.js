const express = require("express");

const route = require("./routes/client/index.route");

const app = express();
const port = 3000;

//Routes
route(app);

app.set("views", "./views");
app.set("views engine", "pug");

app.listen(port, () => {
  console.log(`Connect port to ${port}`);
});
