import { sumAllElements } from "./Array";

describe("the sum of all the elements of the array", () => {
  // let arr = [2,4,6,8,10,12,14,16,18,20];
  it("return 110 for an array [2,4,6,8,10,12,14,16,18,20]", () => {
    jest.spyOn(console, "log");
    sumAllElements();
    expect(console.log).toHaveBeenCalledWith(110);
  });
});
