const formatPolicyRef = (policy) => {
  const policyRef = policy.policy_reference;
  return policyRef.replaceAll("-", " ");
};

module.exports = { formatPolicyRef };
