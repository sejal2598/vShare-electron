import {expect} from "chai";
import env from "env";

describe("Defaults", () => {

  it("should load test environment variables", () => {
    expect(env.name).to.equal("test");
    expect(env.description).to.equal(
      "Add here any environment specific stuff you like."
    );
  });

  it("babel features should work", () => {
    const a = {a: 1};
    const b = {...a, b: 2};
    expect(b).to.eql({a: 1, b: 2});
  });
});
