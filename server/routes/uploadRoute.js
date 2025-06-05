const express = require('express');
const upload = require('../utils/upload');

const router = express.Router();

router.post('/', upload.single('photo'), (req, res) => {
  if (!req.file || !req.file.path) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  res.json({ imageUrl: req.file.path });
});

module.exports = router;
