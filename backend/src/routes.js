const express = require('express');
const jwt = require('jsonwebtoken');

const authMiddleware = require('./auth');

const router = express.Router();

router.post('/authenticate', (req, res) => {
  const user = {
    id: 1,
    name: 'Mateus Silva',
    company: 'DevAcademy',
    website: 'https://devacademy.com.br',
  };

  return res.json({
    user,
    token: jwt.sign(user, 'PRIVATEKEY'),
  });
});

/**
 * Private route
 */
router.use(authMiddleware);

router.get('/users', async (req, res) => {
  return res.json([
    {
      id: 1,
      name: 'Mateus Silva',
      website: 'https://devacademy.com.br',
    },
    {
      id: 2,
      name: 'Mark Zuckerberg',
      website: 'https://facebook.com',
    },
    {
      id: 3,
      name: 'Bill Gates',
      website: 'https://www.microsoft.com',
    },
  ]);
});

module.exports = router;
