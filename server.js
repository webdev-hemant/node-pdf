const express = require("express");
const contactRouter = require("./src/routes/contactRoutes");
const practiceRouter = require("./src/routes/practiceRoutes");
const pdfRouter = require("./src/routes/pdfRoutes");
// const connectDb = require("./src/config/dbConnection");
const errorHandler = require("./src/middlerwares/errorHandle");
require("dotenv").config({});
const app = express();
const port = process.env.PORT;

// db connection
// connectDb();

// middlewares
app.use(express.json());

// routes middlewares
app.use("/api/contact", contactRouter);
app.use("/api/practice", practiceRouter);
app.use("/api/pdf", pdfRouter);

app.get("/", (req, res) => {
  res.json({ message: "hellow world" });
});

app.use(errorHandler);

app.listen(port, () => console.log(`server started on port ${port}`));
