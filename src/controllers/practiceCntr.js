const practiceModel = require("../models/practiceModel");

const getAllData = async (req, res) => {
  res.send("get all practice data");
}

const createData = async (req, res) => {
  const { employee_name, department } = req.body;

  try {
    const data = await practiceModel.create({
      employee_name,
      department: {
        name: department,
      },
    });
    res.send("create practice data => " + data);
  } catch (error) {
    console.log(error);
    // throw new Error("db error");
  }
}

module.exports = { getAllData, createData };
