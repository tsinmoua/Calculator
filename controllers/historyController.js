const db = require("../models");

// Defining methods for the historyController
module.exports = {
  findAll: function (req, res) {
    db.History
      .find(req.query)
      .limit(10)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function (req, res) {
    db.History
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  delete: function (req, res) {
    db.History
      .deleteMany(req.body)
      .where({ session: 1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
