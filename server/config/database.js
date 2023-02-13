const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/database");

const bookSchema = mongoose.Schema({
  author: String,
  name: String,
  pages: Number,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = { Book };
