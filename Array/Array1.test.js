import { twiceValue } from "./Array1";

describe("Element is twice the size of the original array", () => {
  it("Returns a new array [4,8,12,16,20,24,28,32,36,40] x2 values", () => {
    console.log = jest.fn();
    twiceValue();
    expect(console.log).toHaveBeenCalledWith([
      4, 8, 12, 16, 20, 24, 28, 32, 36, 40,
    ]);
  });
});
