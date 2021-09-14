const Contact = require("../models/Contact");

exports.addContact = async (req, res) => {
  const { name, email, age } = req.body;
  try {
    const contact = await Contact.findOne({ email });
    if (contact) {
      return res.status(400).send("contact already exists");
    }
    const newContact = new Contact({
      name,
      email,
      age,
    });
    await newContact.save();
    res.status(200).send({ msg: "contact added", newContact });
  } catch (error) {
    res.status(500).send({ msg: "impossible to add contact", error });
  }
};
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).send({ msg: "all contacts", contacts });
  } catch (error) {
    res.status(500).send({ msg: "impossible to get contacts", error });
  }
};
exports.deleteContact = async (req, res) => {
  const { ID } = req.params;
  try {
    await Contact.findOneAndDelete({ _id: ID });
    res.status(200).send("contact deleted");
  } catch (error) {
    res.status(500).send({ msg: "impossible to delete contact", error });
  }
};
exports.updateContact = async (req, res) => {
  const { ID } = req.params;
  try {
    await Contact.findByIdAndUpdate(ID, { $set: { ...req.body } });
    res.status(200).send("contact updated");
  } catch (error) {
    res.status(500).send({ msg: "impossible to update contact", error });
  }
};
exports.getContact = async (req, res) => {
  const { ID } = req.params;
  try {
    const contact = await Contact.findById(ID);
    res.status(200).send({ msg: "contact", contact });
  } catch (error) {
    res.status(500).send({ msg: "impossible to get contact", error });
  }
};
