const asyncHandler = require("express-async-handler");
// const Contact = require("../models/contactModel");

const getAllPdfs = (req, res) => {
  res.json({ message: "this is get all pdf" });
};
const createPdf = asyncHandler(async (req, res) => {
  console.log("The request body is :", req.body);
  //   const { name, email, phone } = req.body;
  //   if (!name || !email || !phone) {
  //     res.status(400);
  //     throw new Error("All fields are mandatory !");
  //   }

  res.status(201).json("pdf");
});

const getOnePdf = (req, res) => {
  res.json({ message: "this is get One Pdf" });
};
const putPdf = (req, res) => {
  res.json({ message: "this is put Pdf" });
};
const deletePdf = (req, res) => {
  res.json({ message: "this is delete Pdf" });
};

module.exports = {
  getAllPdfs,
  createPdf,
  getOnePdf,
  putPdf,
  deletePdf,
};
