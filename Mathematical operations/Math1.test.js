import { pythagoreanTheorem } from "./Math1";

describe("Define, is a triangle right-angled", () => {
  it("return false for sides 2, 2, 6", () => {
    expect(pythagoreanTheorem(2, 2, 6)).toBe(false);
  });
});
