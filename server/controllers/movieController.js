const { mongoose } = require("mongoose");
const Movie = require("../models/Movie");

exports.getAllMovies = async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    console.error("Error fetching movies:", err);
    res.status(500).json({ msg: "Failed to retrieve movies." });
  } 
};

exports.getMovieById = async (req, res) => {
  try{
    const movieId = new mongoose.Types.ObjectId(req.params.movieId)
    const movie = await Movie.findById(movieId);
    if (!movie) {
      return res.status(404).json({ msg: "Movie not found." });
    }
    res.json(movie);
  } catch (err) {
    console.error("Error fetching movie by ID:", err);
    res.status(500).json({ msg: "Failed to retrieve movie." });
  }
}

exports.addMovie = async (req, res) => {
  try {
    const movie = new Movie(req.body);
    await movie.save();
    res.status(201).json({msg:"Movie added successfully", movie});
  } catch (err) {
    console.error("Error adding movie:", err);
    res.status(500).json({ msg: "Failed to add movie." });
  }
};

exports.updateMovie = async (req, res) => {
  try {
    console.log(req.params.id)
    const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!movie) return res.status(404).json({ msg: "Movie not found" });
    res.json(movie);
  } catch (err) {
    console.error("Error updating movie:", err);
    res.status(500).json({ msg: "Failed to update movie." });
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findByIdAndDelete(req.params.id);
    if (!movie) return res.status(404).json({ msg: "Movie not found" });
    res.json({ msg: "Movie deleted successfully" });
  } catch (err) {
    console.error("Error deleting movie:", err);
    res.status(500).json({ msg: "Failed to delete movie." });
  }
};


// controllers/movieController.js
const path = require("path");
const multer = require("multer");

// Setup multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../../client/public/images"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Export upload middleware to use in routes
exports.upload = upload.single("photo");

// Upload handler
exports.uploadPhoto = (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "No file uploaded" });
  }
  const url = `/images/${req.file.filename}`;
  res.status(200).json({ url });
};

