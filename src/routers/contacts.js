const express = require('express');

const {
  getContactsController,
  getContactByIdController,
  createContactController,
  updateContactController,
  deleteContactController,
} = require('../controllers/contacts');

const ctrlWrapper = require('../utils/ctrlWrapper');

const validateBody = require('../middlewares/validateBody');
const isValidId = require('../middlewares/isValidId');

const {
  createContactSchema,
  updateContactSchema,
} = require('../validation/contacts');

const router = express.Router();

// GET all contacts
router.get('/', ctrlWrapper(getContactsController));

// GET contact by id
router.get('/:contactId', isValidId, ctrlWrapper(getContactByIdController));

// CREATE contact
router.post(
  '/',
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);

// UPDATE contact
router.patch(
  '/:contactId',
  isValidId,
  validateBody(updateContactSchema),
  ctrlWrapper(updateContactController),
);

// DELETE contact
router.delete('/:contactId', isValidId, ctrlWrapper(deleteContactController));

module.exports = router;
