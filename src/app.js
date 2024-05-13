const express = require("express");
const { userRoute, newsRoute } = require("./routes");
const { loggerMiddleware } = require("./middlewares");

const app = express();
const port = 3001;

app.use(loggerMiddleware);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/users", userRoute);
app.use("/api/v1/news", newsRoute);

app.listen(port, (err) => {
  if (err) {
    return console.log("Something bad happened", err);
  }
  console.log(`Server is listening on ${port}`);
});

module.exports = app;
