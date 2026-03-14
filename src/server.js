const express = require('express');
const cors = require('cors');
const pino = require('pino-http');
const cookieParser = require('cookie-parser');
const swaggerUi = require('swagger-ui-express');

const contactsRouter = require('./routers/contacts');
const authRouter = require('./routers/auth');

const errorHandler = require('./middlewares/errorHandler');
const notFoundHandler = require('./middlewares/notFoundHandler');

const setupServer = () => {
  const app = express();

  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cors());
  app.use(pino());
  app.use(cookieParser());

  // Swagger UI — served from the bundled docs/swagger.json
  // Generate/update swagger.json by running: npm run build-docs
  const swaggerDocument = require('../docs/swagger.json');
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

  app.use('/contacts', contactsRouter);
  app.use('/auth', authRouter);

  app.use(notFoundHandler);

  app.use(errorHandler);

  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`API docs available at http://localhost:${PORT}/api-docs`);
  });
};

module.exports = setupServer;
