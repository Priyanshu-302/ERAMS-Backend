// Verifies that if the current user have the required permissions or not
const permissionHandler = (permissionCode) => {
  return (req, res, next) => {
    const userPermissions = req.user?.permissions;

    if (!userPermissions || !userPermissions.includes(permissionCode)) {
      return res.status(403).json({
        success: false,
        message: "Insufficient Permissions",
      });
    }

    next();
  };
};

module.exports = permissionHandler;
