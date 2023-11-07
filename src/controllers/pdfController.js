const { createPdfFile } = require("../helper/pdfcreatefile");
const path = require("path");
// const Contact = require("../models/contactModel");

const getAllPdfs = (req, res) => {
  res.json({ message: "this is get all pdf" });
};

const createPdf = async (req, res) => {
  try {
    const { pdfName } = req.body;
    if (!pdfName) {
      throw new Error("Pdf name is required!");
    }
    await createPdfFile({ pdfName });
    const fileName = `${pdfName}.pdf`;
    const filePath = path.join(__dirname, fileName);
    // console.log({ filePath });

    res.download(filePath, fileName, (err) => {
      if (err) {
        res.send({
          error: err,
          msg: "Problem downloading the file",
        });
      }
    });
  } catch (error) {
    res.status(400).send(error.message);
  }
};

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
