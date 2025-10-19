import express from "express";
import path from "path";
import favicon from "serve-favicon";
import serverless from "serverless-http";
import urlRoutes from "./routes/urlRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "views"));
app.use(favicon(path.join(path.resolve(), "public", "favicon.ico")));
app.use("/", urlRoutes);

app.get("/", (req, res) => {
  res.render("index");
});

// ❌ Jangan pakai app.listen()
// ✅ Export default handler untuk Vercel
export default serverless(app);
