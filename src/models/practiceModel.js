const mongoose = require("mongoose");

const department = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const mySchema = new mongoose.Schema({
  employee_name: String,
  department: {
    type: department,
    required: true,
  },
});

module.exports = mongoose.model("mySchema", mySchema);
