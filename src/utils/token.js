const jwt = require("jsonwebtoken");

const generateAccessToken = (user) => {
  const payload = {
    id: user.id,
    role: user.role,
  };

  const token = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
    expiresIn: "10m",
  });

  return token;
};

const generateRefreshToken = (user) => {
  const payload = {
    id: user.id,
    role: user.role,
  };

  const token = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
    expiresIn: "7d",
  });

  return token;
};

module.exports = {
  generateAccessToken,
  generateRefreshToken,
};
