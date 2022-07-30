export default class TextFormatter {
  constructor(policy) {
    this.policy = policy;
  }

  formatPolicyRef = () => {
    const policyRef = this.policy.policy_reference;
    return policyRef.replaceAll("-", " ");
  };

  formatCoverType = () => {
    const { cover } = this.policy.policy;
    return cover;
  };

  formatCar = () => {
    const { reg, make, model, colour } = this.policy.vehicle;
    return `${make} ${model} ${colour} - ${reg}`;
  };

  formatName = () => {
    const { first_names, last_names } = this.policy.proposer;
    return `${first_names} ${last_names}`;
  };

  formatAddress = () => {
    const { line_1, line_2, postcode } = this.policy.policy.address;
    return `${line_1}, ${line_2}, ${postcode}`;
  };
}
