const Contact = require('../models/contact');

const getAllContacts = async (userId) => {
  const contacts = await Contact.find({ userId });
  return contacts;
};

const getContactById = async (contactId, userId) => {
  const contact = await Contact.findOne({
    _id: contactId,
    userId,
  });

  return contact;
};

const createContact = async (payload) => {
  const contact = await Contact.create(payload);
  return contact;
};

const updateContact = async (contactId, payload, userId) => {
  const contact = await Contact.findOneAndUpdate(
    { _id: contactId, userId },
    payload,
    { new: true },
  );

  return contact;
};

const deleteContact = async (contactId, userId) => {
  const contact = await Contact.findOneAndDelete({
    _id: contactId,
    userId,
  });

  return contact;
};

module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
};
