import TextFormatter from "../text-formatter";

const testData = {
  policy_reference: "apple-orange-pear",
  policy: {
    cover: "Comprehensive",
    address: {
      line_1: "Flat 1, 11 The Street",
      line_2: "Little Hampton",
      line_3: "Burton-on-the-water",
      county: "Avon",
      city: "Stroud",
      country: "GB",
      postcode: "W53TR",
    },
  },
  vehicle: {
    reg: "WO123XX",
    make: "Tesla",
    model: "S",
    colour: "black",
  },
  proposer: {
    first_names: "Dave",
    last_names: "Jones",
  },
};

const tf = new TextFormatter(testData);

describe("Text formatter", () => {
  it("correctly formats the name", () => {
    const proposerName = tf.formatName();
    expect(proposerName).toBe("Dave Jones");
  });

  it("correctly formats the address", () => {
    const address = tf.formatAddress();
    expect(address).toBe("Flat 1, 11 The Street, Little Hampton, W53TR");
  });

  it("correctly formats the vehicle", () => {
    const car = tf.formatCar();
    expect(car).toBe("Tesla S black - WO123XX");
  });

  it("correctly formats the policy reference", () => {
    const policyRef = tf.formatPolicyRef();
    expect(policyRef).toBe("apple orange pear");
  });

  it("correctly returns the cover type", () => {
    const coverType = tf.formatCoverType();
    expect(coverType).toBe("Comprehensive");
  });
});
