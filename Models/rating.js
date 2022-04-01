import mongoose from 'mongoose';
const {Schema} = mongoose

const RatingSchema = new Schema({
  tconst: {
    type: String,
    required: true,
    unique: true,
  },

  averageRating: {
    type: Number,
    required: true,
    default: 0,
  },

  numVotes: {
    type: Number,
    required: true,
    default: 0,
  },

  createdAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },

  updatedAt: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

const dbRating = mongoose.model('Rating', RatingSchema);

export default dbRating;