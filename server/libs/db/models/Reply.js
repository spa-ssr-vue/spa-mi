const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  comment: { type: mongoose.SchemaTypes.ObjectId, ref: 'Comment' },
  fromUser: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
  toUser: { type: mongoose.SchemaTypes.ObjectId, ref: 'User' },
  content: { type: String }
}, {
  timestamps: true
})

module.exports = mongoose.model('Reply', schema, 'replies')