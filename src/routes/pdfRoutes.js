const { Router } = require("express");
const {
    createPdf,
    deletePdf,
    getAllPdfs,
    getOnePdf,
    putPdf
} = require("../controllers/pdfController");
// const validateToken = require("../middlerwares/validateToken");
const pdfRouter = Router();

// middleware
// pdfRouter.use(validateToken);

// routes
pdfRouter.route("/").get(getAllPdfs);

pdfRouter
    .route("/:id")
    .post(createPdf)
    .get(getOnePdf)
    .put(putPdf)
    .delete(deletePdf);

module.exports = pdfRouter;
