const express = require('express');
const router = express.Router();

router.get('/dashboard', (req, res) => {
  res.json({ data: 'This is a private route' });
});

module.exports = router;
