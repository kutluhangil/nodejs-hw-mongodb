const express = require('express');

const ctrlWrapper = require('../utils/ctrlWrapper');
const validateBody = require('../middlewares/validateBody');

const { sendResetEmailController } = require('../controllers/auth');
const { sendResetEmailSchema } = require('../validation/auth');

const { resetPasswordController } = require('../controllers/auth');
const { resetPasswordSchema } = require('../validation/auth');

const {
  registerUserController,
  loginUserController,
  refreshSessionController,
  logoutUserController,
} = require('../controllers/auth');

const { registerUserSchema, loginUserSchema } = require('../validation/auth');

const router = express.Router();

router.post(
  '/register',
  validateBody(registerUserSchema),
  ctrlWrapper(registerUserController),
);

router.post(
  '/login',
  validateBody(loginUserSchema),
  ctrlWrapper(loginUserController),
);

router.post('/refresh', ctrlWrapper(refreshSessionController));

router.post('/logout', ctrlWrapper(logoutUserController));

router.post(
  '/send-reset-email',
  validateBody(sendResetEmailSchema),
  ctrlWrapper(sendResetEmailController),
);

router.post(
  '/reset-pwd',
  validateBody(resetPasswordSchema),
  ctrlWrapper(resetPasswordController),
);

module.exports = router;
