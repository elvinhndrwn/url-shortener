import express from "express";
import path from "path";
import favicon from "serve-favicon";
import dotenv from "dotenv";
import serverless from "serverless-http";
import urlRoutes from "./routes/urlRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "views"));
// app.use(favicon(path.join(path.resolve(), "public", "favicon.ico")));
app.use(express.static(path.join(path.resolve(), "public")));

// Routes
app.use("/", urlRoutes);

app.get("/", (req, res) => {
  res.render("index");
});

export default serverless(app);
