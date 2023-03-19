const mongoose = require('mongoose');

const movieSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please enter a movie title"],
    },
    year: {
      type: Number,
      required: [true, "Please enter a year"],
      default: 0,
    },
    genre: {
      type: [String],
      required: [true, "Please enter a genre"],
    },
    actors: {
      type: [String],
      required: [true, "Please enter at least one actor name"],
    },
    rating: {
      type: Number,
      required: [true, "Please enter a rating"],
    },
  },
  {
    timestamps: true,
  }
);

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
