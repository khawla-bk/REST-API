const express = require("express");
const {
  addContact,
  getAllContacts,
  deleteContact,
  updateContact,
  getContact,
} = require("../controllers/contact");
const router = express.Router();

// add new contact

router.post("/", addContact);

// get all contacts

router.get("/", getAllContacts);
// delete contact

router.delete("/:ID", deleteContact);

// update contact

router.put("/:ID", updateContact);
// get one contact

router.get("/:ID", getContact);

module.exports = router;
