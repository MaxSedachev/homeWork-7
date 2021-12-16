import { highestNum } from "./conditions1";

describe("Greatest number", () => {
  it("from numbers 3 and 4 return 4", () => {
    expect(highestNum(3, 4)).toBe(4);
  });
});
