const PDFDocument = require("pdfkit");
const fs = require("fs");
const doc = new PDFDocument();

const createPdfFile = ({ pdfName = "example3" }) => {
  return new Promise((resolve, reject) => {
    try {
      doc.pipe(fs.createWriteStream(`../storage/pdfs/${pdfName}.pdf`));

      doc.fontSize(27).text("This the article by Hemant Jadhav", 100, 100);

      // Adding an image in the pdf.
      // doc.image('download3.jpg', {
      // 	fit: [300, 300],
      // 	align: 'center',
      // 	valign: 'center'
      // });

      doc
        .addPage()
        .fontSize(15)
        .text("Generating PDF with the provide name", 100, 100);

      // Apply some transforms and render an SVG path with the
      doc
        .scale(0.6)
        .translate(470, -380)
        .path("M 250,75 L 323,301 131,161 369,161 177,301 z")
        .fill("red", "even-odd")
        .restore();

      // Add some text with annotations
      doc
        .addPage()
        .fillColor("blue")
        .text("The link for my portfolio website", 100, 100)
        .link(100, 100, 160, 27, "https://crazy-devloper.vercel.app");

      // Finalize PDF file
      doc.end();
      resolve();
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { createPdfFile };
