const { Schema, model } = require('mongoose');

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    phoneNumber: {
      type: String,
      required: true,
    },

    email: {
      type: String,
    },

    contactType: {
      type: String,
      enum: ['personal', 'work', 'home'],
      default: 'personal',
    },

    isFavourite: {
      type: Boolean,
      default: false,
    },

    photo: {
      type: String,
    },

    userId: {
      type: Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

const Contact = model('contacts', contactSchema);

module.exports = Contact;
