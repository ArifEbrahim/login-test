const formatPolicyRef = (policy) => {
  console.log(policy.policy_reference.replaceAll("-", " "))
  // const policyRef = policy.policy_reference;
  // return policyRef.replaceAll("-", " ");
  return "apple orange pear"
};

module.exports = { formatPolicyRef };
