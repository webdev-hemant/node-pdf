const { Router } = require("express");
const { getAllData, createData } = require("../controllers/practiceCntr");
const practiceRouter = Router();

practiceRouter.get("/all", getAllData);
practiceRouter.post("/create", createData);

module.exports = practiceRouter;
