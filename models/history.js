const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const historySchema = new Schema({
  equation: { type: String, required: true },
  date: { type: Date, default: Date.now },
  session: { type: Number, default: 1 }
});

const History = mongoose.model("History", historySchema);

module.exports = History;
