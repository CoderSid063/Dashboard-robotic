const mongoose = require("mongoose");

// Define the schema for the data
const dataSchema = new mongoose.Schema({
  robot_id: String,
  timestamp: Date,
  battery_level: Number,
  operational_status: String,
  activity_log: [
    {
      timestamp: Date,
      activity: String,
    },
  ],
});

// Create a model using the schema
const Data = mongoose.model("Data", dataSchema);

module.exports = Data;
