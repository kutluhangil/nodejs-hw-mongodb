const multer = require('multer');

const storage = multer.memoryStorage();

const upload = multer({
  storage,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
  },
  // Use utf8 for parameter charset — busboy 1.x defaults to latin1, which
  // causes "Malformed part header" errors for filenames containing special
  // characters or when using clients like Insomnia/Postman.
  defParamCharset: 'utf8',
});

module.exports = upload;
