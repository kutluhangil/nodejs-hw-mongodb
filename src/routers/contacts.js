const express = require('express');

const upload = require('../middlewares/upload');
const authenticate = require('../middlewares/authenticate');
const validateBody = require('../middlewares/validateBody');
const isValidId = require('../middlewares/isValidId');

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

router.get('/:contactId', isValidId, ctrlWrapper(getContactByIdController));

// upload.single must run BEFORE validateBody so that multer populates req.body
// from the multipart form before Joi validation occurs.
router.post(
  '/',
  upload.single('photo'),
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);

router.patch(
  '/:contactId',
  isValidId,
  upload.single('photo'),
  validateBody(updateContactSchema),
  ctrlWrapper(updateContactController),
);

router.delete('/:contactId', isValidId, ctrlWrapper(deleteContactController));

module.exports = router;
