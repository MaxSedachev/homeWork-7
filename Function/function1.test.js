import { diff } from "./function1";

describe("Difference between largest and smallest", () => {
  it("return 3 for numbers 2 and 5", () => {
    expect(diff(2, 5)).toBe(3);
  });
});
