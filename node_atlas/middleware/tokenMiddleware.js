const tokenMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
  
    if (token) {
     
      req.user = validateToken(token);
      next();
    } else {
      res.status(401).json({ message: 'Unauthorized User' });
    }
  };
  
  module.exports = tokenMiddleware;
  