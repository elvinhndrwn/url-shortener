import express from "express";
import path from "path";
import favicon from "serve-favicon";
import urlRoutes from "./routes/urlRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Views
app.set("views", path.resolve("views"));
app.set("view engine", "ejs");

// Public static & favicon
app.use(favicon(path.resolve("public", "favicon.ico")));
app.use(express.static(path.resolve("public")));

// Routes
app.use("/", urlRoutes);

// Landing page
app.get("/", (req, res) => {
  res.render("index");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
