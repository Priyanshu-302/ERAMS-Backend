const jwt = require("jsonwebtoken");

// Verifies the User
const authHandler = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    const token = authHeader.split(" ")[1];

    const decoded = jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    req.user = {
      id: decoded.id,
      oragnizationId: decoded.organizationId,
      roleId: decoded.roleId,
      permissions: decoded.permissions || [],
    };

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authHandler;
