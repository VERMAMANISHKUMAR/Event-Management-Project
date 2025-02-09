// Middleware to validate event data
exports.validateEventData = (req, res, next) => {
  const { name, description, date, time, imageUrl } = req.body;

  if (!name || !description || !date || !time || !imageUrl) {
    return res
      .status(400)
      .json({ message: "Please provide all required fields" });
  }

  next();
};
