import { averageFn } from "./loops3";

describe("Arithmetic mean of all odd numbers", () => {
  afterEach(() => {
    console.log.mockReset();
  });
  it("return 2 for 3", () => {
    jest.spyOn(window, "prompt").mockReturnValue("3");
    console.log = jest.fn();
    averageFn();
    expect(console.log).toHaveBeenCalledWith(2);
  });
});
