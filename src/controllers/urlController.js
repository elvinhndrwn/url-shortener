import { nanoid } from "nanoid";
import { saveUrl, findUrl } from "../models/urlModel.js";

// Shorten URL
export const shortenUrl = async (req, res) => {
  try {
    if (!req.body.originalUrl)
      return res.status(400).json({ message: "URL is required" });

    const shortCode = nanoid(6);
    const newData = await saveUrl(shortCode, req.body.originalUrl);

    res.json({
      originalUrl: req.body.originalUrl,
      shortUrl: `${process.env.BASE_URL}/${shortCode}`,
    });
  } catch (error) {
    console.error("Error in shortenUrl:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// Redirect URL
export const redirectUrl = async (req, res) => {
  try {
    const { shortCode } = req.params;
    const data = await findUrl(shortCode);
    if (!data) return res.status(404).send("URL not found");
    res.redirect(data.original_url);
  } catch (error) {
    console.error("Error in redirectUrl:", error);
    res.status(500).send("Internal server error");
  }
};
