// Verifies that what features are accessible to what role
const policyEngine = require("../policies/policyEngine");

const policyHandler = (policyName) => {
  return async (req, res, next) => {
    try {
      const allowedPolicy = await policyEngine.evaluatePolicy(policyName, {
        user: req.user,
        resource: req.resource,
        request: req,
      });

      if (!allowedPolicy) {
        return res.status(403).json({
          success: false,
          message: "Policy Violation",
        });
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};

module.exports = policyHandler;
