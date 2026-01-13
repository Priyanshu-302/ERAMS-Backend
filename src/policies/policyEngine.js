// Central Policy Handler
const resourcePolicies = require("./resourcePolicy");
const userPolicies = require("./userPolicy");

const policies = {
  ...resourcePolicies,
  ...userPolicies,
};

async function evaluatePolicy(policyName, context) {
  const policy = policies[policyName];

  if (!policy) {
    throw new Error(`Policy ${policyName} not found`);
  }

  const result = await policy(context);

  return Boolean(result);
}

module.exports = { evaluatePolicy };
