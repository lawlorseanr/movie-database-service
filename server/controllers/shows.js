module.exports = {
  get: (req, res) => {
    res.status(200).json({ success: 'example of shows endpoint' });
  }
}