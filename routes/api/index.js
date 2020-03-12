const router = require("express").Router();
const bookRoutes = require("./books");

// Routes to books
router.use("/books", bookRoutes);

module.exports = router;
