const { createPdfFile } = require("../helper/pdfcreatefile");

// const Contact = require("../models/contactModel");

const getAllPdfs = (req, res) => {
    res.json({ message: "this is get all pdf" });
};

const createPdf = async(req, res) => {
    try {
        const { pdfName } = req.body;
        if (!pdfName) {
            throw new Error("Pdf name is required!");
        }
        await createPdfFile({ pdfName });
        res.status(201).send("successful");

    } catch (error) {
        res.status(400).send(error.message);
    }
}

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
