const mongoose = require('mongoose');

const initMongoConnection = async () => {
  const user = process.env.MONGODB_USER;
  const password = process.env.MONGODB_PASSWORD;
  const url = process.env.MONGODB_URL;
  const db = process.env.MONGODB_DB;

  const mongoUri = `mongodb+srv://${user}:${password}@${url}/${db}?retryWrites=true&w=majority`;

  await mongoose.connect(mongoUri);

  console.log('Mongo connection successfully established!');
};

module.exports = initMongoConnection;
