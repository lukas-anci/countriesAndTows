const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const formSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    continent: {
      type: String,
      required: true,
    },
    population: {
      type: Number,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const MyForm = mongoose.model('Form', formSchema);

module.exports = MyForm;
