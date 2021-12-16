import { sumDigit } from "./dataType3";

describe("the sum of the digits of the entered number", () => {
  afterEach(() => {
    console.log.mockReset();
  });
  it("return 6 for 123", () => {
    jest.spyOn(window, "prompt").mockReturnValue("123");
    jest.spyOn(console, "log");
    sumDigit();
    expect(console.log).toHaveBeenCalledWith(6);
  });
});
