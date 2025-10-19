const { saveUrl, findUrl } = require("../models/urlModel");

const shortenUrl = async (req, res) => {
  if (!req.body.originalUrl)
    return res.status(400).json({ message: "URL is required" });

  // Dynamic import nanoid
  const { nanoid } = await import("nanoid");
  const shortCode = nanoid(6);

  const newData = await saveUrl(shortCode, req.body.originalUrl);

  res.json({
    originalUrl: req.body.originalUrl,
    shortUrl: `${process.env.BASE_URL}/${shortCode}`,
  });
};

const redirectUrl = async (req, res) => {
  const { shortCode } = req.params;

  const data = await findUrl(shortCode);

  if (!data) return res.status(404).send("URL not found");

  res.redirect(data.original_url);
};

module.exports = { shortenUrl, redirectUrl };
