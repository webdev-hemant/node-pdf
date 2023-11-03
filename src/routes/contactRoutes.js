const { Router } = require("express");
const {
  getAllContacts,
  getOneContact,
  putContact,
  deleteContact,
  postContact,
} = require("../controllers/contactCntr");
const validateToken = require("../middlerwares/validateToken");
const contactRouter = Router();

// middleware
// contactRouter.use(validateToken);

// routes
contactRouter.route("/").get(getAllContacts).post(postContact);

contactRouter
  .route("/:id")
  .get(getOneContact)
  .put(putContact)
  .delete(deleteContact);

module.exports = contactRouter;
