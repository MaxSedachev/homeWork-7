import { multAndSum } from "./dataType1";

describe("multiplication and sum of numbers", () => {
  it("return 10 and 16 for 'a=2 and b=8'", () => {
    jest.spyOn(console, "log");
    multAndSum(2, 8);
    expect(console.log).toHaveBeenCalledWith(10);
    expect(console.log).toHaveBeenCalledWith(16);
  });
});
