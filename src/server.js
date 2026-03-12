const express = require('express');
const cors = require('cors');
const pino = require('pino-http');
const cookieParser = require('cookie-parser');

const contactsRouter = require('./routers/contacts');
const authRouter = require('./routers/auth');

const errorHandler = require('./middlewares/errorHandler');
const notFoundHandler = require('./middlewares/notFoundHandler');

const setupServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(pino());
  app.use(cookieParser());

  app.use('/contacts', contactsRouter);
  app.use('/auth', authRouter);

  app.use(notFoundHandler);

  app.use(errorHandler);

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};

module.exports = setupServer;
