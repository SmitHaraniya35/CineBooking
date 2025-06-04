const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
const movieRoutes = require("./routes/movieRoutes");
const bookingRoutes = require("./routes/bookingRoutes");
const showtimeRoutes = require("./routes/showtimeRoutes");
const cinemaRoutes = require("./routes/cinemaRoutes");
const theaterRoutes = require("./routes/theaterRoutes");
const path = require("path")

dotenv.config();
const app = express();

// Middleware
app.use(cors({
  origin: "http://localhost:5173", // your frontend origin
  credentials: true,
}));
app.use(cookieParser());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "../../client/public/images")));


// Routes
app.use("/api/auth", authRoutes);
app.use("/api/movies", movieRoutes);
app.use("/api/bookings", bookingRoutes);
app.use("/api/showtimes", showtimeRoutes);
app.use("/api/cinemas", cinemaRoutes);
app.use("/api/theaters", theaterRoutes);

// DB connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => app.listen(5000, () => console.log("Server running on port 5000")))
.catch((err) => console.error(err));