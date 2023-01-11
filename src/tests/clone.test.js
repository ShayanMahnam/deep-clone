const { shallowClone, deepClone } = require("../files/clone");

describe("shallowClone", () => {
  it("returns undefined if passed no argument", () => {
    expect(shallowClone()).toBe(undefined);
  });
});

describe("deepClone", () => {});
