const { model, Schema } = require('mongoose')

const Create = new Schema({
  cource: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  }
})

module.exports = model( 'cources', Create )