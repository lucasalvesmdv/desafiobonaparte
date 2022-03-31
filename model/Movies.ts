import mongoose from 'mongoose';
const {Schema} = mongoose

const MovieSchema = new Schema({
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

export default mongoose.model('movies', MovieSchema);