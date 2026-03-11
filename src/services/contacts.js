const Contact = require('../models/contact');

const getAllContacts = async ({
  page = 1,
  perPage = 10,
  sortBy = 'name',
  sortOrder = 'asc',
  type,
  isFavourite,
}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const query = Contact.find();

  // filtering
  if (type) {
    query.where('contactType').equals(type);
  }

  if (isFavourite !== undefined) {
    query.where('isFavourite').equals(isFavourite === 'true');
  }

  const totalItems = await Contact.find().merge(query).countDocuments();

  const contacts = await query
    .skip(skip)
    .limit(limit)
    .sort({ [sortBy]: sortOrder })
    .exec();

  const totalPages = Math.ceil(totalItems / perPage);

  return {
    data: contacts,
    page,
    perPage,
    totalItems,
    totalPages,
    hasPreviousPage: page > 1,
    hasNextPage: page < totalPages,
  };
};

const getContactById = async (contactId) => {
  const contact = await Contact.findById(contactId);
  return contact;
};

const createContact = async (payload) => {
  const contact = await Contact.create(payload);
  return contact;
};

const updateContact = async (contactId, payload) => {
  const contact = await Contact.findByIdAndUpdate(contactId, payload, {
    new: true,
  });

  return contact;
};

const deleteContact = async (contactId) => {
  const contact = await Contact.findByIdAndDelete(contactId);
  return contact;
};

module.exports = {
  getAllContacts,
  getContactById,
  createContact,
  updateContact,
  deleteContact,
};
