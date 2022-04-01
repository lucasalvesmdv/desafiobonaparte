import mongoose from 'mongoose';
const movieSchema = new mongoose.Schema({
  tconst: {
    type: String,
    required: true,
    unique: true,
  },

  titleType: {
    type: String,
    required: true,
  },

  primaryTitle: {
    type: String,
    required: true,
  },

  originalTitle: {
    type: String,
    required: true,
  },

  isAdult: {
    type: Number,
    required: true,
  },

  startYear: {
    type: Number,
    required: false,
  },

  endYear: {
    type: Number,
    required: false,
  },

  runtimeMinutes: {
    type: Number,
    required: false,
  },

  genres: {
    type: String,
    required: false,
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

const dbMovies = mongoose.model('Movie', movieSchema);
export default dbMovies