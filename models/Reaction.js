const { Schema, _model } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      
    },
    reactionBody: {
      type: String,
      required: true,
      max_length: 280,
    },
    username: {
      type: String,
      required: true,
      
    },
    createdAt: {

    },
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// userSchema.virtual('reactionCount')
  
//   .get(function () {
//     return this.reactions.length;
//   })
  


module.exports = reactionSchema;