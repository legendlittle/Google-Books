const router = require("express").Router();
const booksController = require("../../controllers/booksCon");

// for /api/books
router.route("/")
  .get(booksController.findAll)
  .post(booksController.create);

// for api/books/:id
router
  .route("/:id")
  .delete(booksController.remove);

module.exports = router;
