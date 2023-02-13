const express = require("express");
const { Book } = require("../config/database");
const router = express.Router();

router.post("/", (req, res) => {
  const { author, name, pages } = req.body;

  Book.create({
    author,
    name,
    pages,
  }).then(() => {
    return res.send("ok");
  });
});

router.get("/:bookName", (req, res) => {
  const { bookName } = req.params;

  Book.findOne({ name: bookName }).then((book) => {
    if (book) {
      return res.json({
        bookName: book.name,
        author: book.author,
        pages: book.pages,
      });
    } else {
      return res.status(404);
    }
  });
});

module.exports = router;
