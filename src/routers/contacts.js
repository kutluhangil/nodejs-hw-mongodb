const express = require('express');

const upload = require('../middlewares/upload');
const authenticate = require('../middlewares/authenticate');
const validateBody = require('../middlewares/validateBody');

const {
  createContactSchema,
  updateContactSchema,
} = require('../validation/contacts');

const {
  getContactsController,
  getContactByIdController,
  createContactController,
  updateContactController,
  deleteContactController,
} = require('../controllers/contacts');

const ctrlWrapper = require('../utils/ctrlWrapper');

const router = express.Router();

router.use(authenticate);

router.get('/', ctrlWrapper(getContactsController));

router.get('/:contactId', ctrlWrapper(getContactByIdController));

router.post('/', upload.single('photo'), ctrlWrapper(createContactController));

router.patch(
  '/:contactId',
  upload.single('photo'),
  validateBody(updateContactSchema),
  ctrlWrapper(updateContactController),
);

router.delete('/:contactId', ctrlWrapper(deleteContactController));

module.exports = router;
