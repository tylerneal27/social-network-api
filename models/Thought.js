const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      
    },
    createdAt: {
      
    },
    username: {
      type: String,
      required: true,
      
    },
    reactions: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Reaction',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

userSchema.virtual('reactionCount')
  
  .get(function () {
    return this.reactions.length;
  })
  
const Thought = model('thought', thoughtSchema);

module.exports = Thought;