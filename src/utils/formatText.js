const formatPolicyRef = (policy) => {
  const policyRef = policy.policy_reference;
  return policyRef.replaceAll("-", " ");
};

const formatCoverType = (policy) => {
  const { cover } = policy.policy;
  return cover;
};

const formatCar = (policy) => {
  const { reg, make, model, colour } = policy.vehicle;
  return `${make} ${model} ${colour} - ${reg}`;
};

const formatName = (policy) => {
  const { first_names, last_names } = policy.proposer;
  return `${first_names} ${last_names}`;
};

const formatAddress = (policy) => {
  const { line_1, line_2, postcode } = policy.policy.address;
  return `${line_1}, ${line_2}, ${postcode}`;
};

module.exports = { formatPolicyRef, formatCoverType, formatCar, formatName, formatAddress };
