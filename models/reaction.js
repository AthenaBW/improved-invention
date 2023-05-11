
// Importing  dependencies from the Mongoose library
const { Schema, Types } = require('mongoose');

// Defining the reaction schema with all required fields
const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: time => new Date(time).toLocaleDateString()
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

// export

module.exports = reactionSchema