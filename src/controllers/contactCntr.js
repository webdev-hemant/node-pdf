const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

const getAllContacts = (req, res) => {
  res.json({ message: "this is get all contacts" });
};
const postContact = asyncHandler(async (req, res) => {
  // res.json({ message: "this is post contacts" });

  // console.log("The request body is :", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory !");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
    // user_id: req.user.id,
  });

  res.status(201).json(contact);
});

const getOneContact = (req, res) => {
  res.json({ message: "this is get One contacts" });
};
const putContact = (req, res) => {
  res.json({ message: "this is put contacts" });
};
const deleteContact = (req, res) => {
  res.json({ message: "this is delete contacts" });
};

module.exports = {
  getAllContacts,
  postContact,
  getOneContact,
  putContact,
  deleteContact,
};
