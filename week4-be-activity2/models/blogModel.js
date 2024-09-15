const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const blogSchema = new Schema({
    model: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  age: {
    type: String,
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Blog', blogSchema);