import { pow } from "./function3";

describe("Returns the value of the number raised to the power", () => {
  it("return 8 for value 2 and degree 3'", () => {
    expect(pow(2, 3)).toBe(8);
  });
});
