const {
  registerUser,
  loginUser,
  refreshSession,
  logoutUser,
} = require('../services/auth');

const registerUserController = async (req, res) => {
  const user = await registerUser(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully registered a user!',
    data: user,
  });
};

const loginUserController = async (req, res) => {
  const session = await loginUser(req.body);

  res.cookie('refreshToken', session.refreshToken, {
    httpOnly: true,
    expires: session.refreshTokenValidUntil,
  });

  res.status(200).json({
    status: 200,
    message: 'Successfully logged in an user!',
    data: {
      accessToken: session.accessToken,
    },
  });
};

const refreshSessionController = async (req, res) => {
  const { refreshToken } = req.cookies;

  const session = await refreshSession(refreshToken);

  res.cookie('refreshToken', session.refreshToken, {
    httpOnly: true,
    expires: session.refreshTokenValidUntil,
  });

  res.status(200).json({
    status: 200,
    message: 'Successfully refreshed a session!',
    data: {
      accessToken: session.accessToken,
    },
  });
};

const logoutUserController = async (req, res) => {
  const { refreshToken } = req.cookies;

  await logoutUser(refreshToken);

  res.clearCookie('refreshToken');

  res.status(204).send();
};

module.exports = {
  registerUserController,
  loginUserController,
  refreshSessionController,
  logoutUserController,
};
