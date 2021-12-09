import { sumOfNumbers } from "./loops1";

describe("the sum of all integers", () => {
  it("return 3825 for numbers from 50 to 100", () => {
    expect(sumOfNumbers()).toBe(3825);
  });
});
