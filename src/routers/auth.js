const express = require('express');

const ctrlWrapper = require('../utils/ctrlWrapper');
const validateBody = require('../middlewares/validateBody');

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

module.exports = router;
