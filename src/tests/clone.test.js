const { shallowClone, deepClone } = require("../files/clone");

/**
 * JS Variables:
 * - string
 * - number
 * - boolean
 * - undefined
 * - null            PRIMITIVES
 * -----------------------------------
 * - object          ...NOT PRIMITIVES
 * - array
 * - function
 */

describe.only("shallowClone", () => {
  it("returns undefined if passed no argument", () => {
    // ARRANGE
    const output = shallowClone();
    const expected = undefined;

    // ASSERT
    expect(output).toBe(expected);
  });

  it("returns undefined if passed a function as an argument", () => {
    // ARRANGE
    const input = () => {};
    const output = shallowClone(input);
    const expected = undefined;

    // ASSERT
    expect(output).toBe(expected);
  });

  it("returns a new empty object if passed an empty object", () => {
    // ARRANGE
    const input = {};
    const output = shallowClone(input);
    const expected = {};

    // ASSERT
    expect(output === input).toBe(false);
    expect(output).toEqual(expected);
  });

  it("returns a new empty array if passed an empty array", () => {
    // ARRANGE
    const input = [];
    const output = shallowClone(input);
    const expected = [];

    // ASSERT
    expect(output === input).toBe(false);
    expect(output).toEqual(expected);
  });

  it("returns a new object matching the input when single key, value is a primitive", () => {
    const primitives = ["hello", 49, true, undefined, null];

    primitives.forEach((primitive) => {
      const input = { test: primitive };
      const output = shallowClone(input);
      const expected = { test: primitive };

      expect(output === input).toBe(false);
      expect(output).toEqual(expected);
    });
  });

  it("returns a new array matching the input when all values are primitives", () => {
    const input = ["hello", 49, true, undefined, null];
    const output = shallowClone(input);
    const expected = ["hello", 49, true, undefined, null];

    expect(output === input).toBe(false);
    expect(output).toEqual(expected);
  });

  it("only performs a shallow clone, nested items are the same reference", () => {
    const nestedObject = { nested: "object" };
    const input = { nestedObject }; // same as {nestedObject: nestedObject};
    const output = shallowClone(input);
    const expected = { nestedObject };

    expect(output === input).toBe(false);
    expect(output).toEqual(expected);
    expect(output.nestedObject === input.nestedObject).toBe(true);
  });

  it("only performs a shallow clone, nested items are the same reference", () => {
    const exampleObject = { nested: "object" };
    const exampleArray = ["hi", "123"];
    const input = [exampleObject, exampleArray];
    const output = shallowClone(input);
    const expected = [exampleObject, exampleArray];

    expect(output === input).toBe(false);
    expect(output).toEqual(expected);
    expect(output[0] === exampleObject).toBe(true);
    expect(output[1] === exampleArray).toBe(true);
  });

  it("can handle primitive arguments, not undefined", () => {
    const primitives = ["hello", 49, true, undefined, null];

    primitives.forEach((primitive) => {
      const input = primitive;
      const output = shallowClone(input);
      const expected = undefined;

      expect(output).toBe(expected);
    });
  });
});

describe("deepClone", () => {});
