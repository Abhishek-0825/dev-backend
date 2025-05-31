const express = require('express');
const router = express.Router();

router.get('/info', (req, res) => {
  res.json({ data: 'This is a public route' });
});

module.exports = router;
