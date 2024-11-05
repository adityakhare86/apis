const jwt = require('jsonwebtoken');

exports.authenticateToken = (req, res, next) => {
  // Get token from the Authorization header
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ error: 'Access denied' });

  // Strip the 'Bearer ' prefix if it exists
  const bearerToken = token.startsWith('Bearer ') ? token.slice(7) : token;

  try {
    // Verify the token
    const verified = jwt.verify(bearerToken, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ error: 'Invalid token' });
  }
};
