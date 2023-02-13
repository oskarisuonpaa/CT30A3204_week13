const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/book", require("./routes/books"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve("..", "client", "build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve("..", "client", "build", "index.html"));
  });
} else if (process.env.NODE_ENV === "development") {
  const corsOptions = {
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  };

  app.use(cors(corsOptions));
}

module.exports = app;
