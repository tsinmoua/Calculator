const router = require("express").Router();
const historyController = require("../../controllers/historyController");

// Matches with "/api/history"
router.route("/")
  .get(historyController.findAll)
  .post(historyController.create)
  .delete(historyController.delete)


module.exports = router;
