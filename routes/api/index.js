const router = require("express").Router();
const history = require("./history");

// Book routes
router.use("/history", history);

module.exports = router;
