// Middleware to check if user is a worker
const isWorker = (req, res, next) => {
    if (req.user && req.user.role === 'worker') {
      next(); // User is a worker, allow access
    } else {
      res.status(403).json({ message: 'Access denied' }); // Access denied
    }
  };  