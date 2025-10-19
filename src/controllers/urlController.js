const { nanoid } = require("nanoid");
const { saveUrl, findUrl } = require("../models/urlModel");

const shortenUrl = async (req, res) => {
  const { originalUrl } = req.body;

  if (!originalUrl) return res.status(400).json({ message: "URL is required" });

  const shortCode = nanoid(6);

  const newData = await saveUrl(shortCode, originalUrl);

  res.json({
    originalUrl,
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
