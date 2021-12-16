import { solutionEquation } from "./Math3";

describe("solutionEquation", () => {
  it("equation with 2 roots", () => {
    jest
      .spyOn(window, "prompt")
      .mockImplementationOnce(() => "1")
      .mockImplementationOnce(() => "-8")
      .mockImplementationOnce(() => "12");

    expect(solutionEquation()).toBe("6, 2");
  });

  it("equation with 1 roots", () => {
    jest
      .spyOn(window, "prompt")
      .mockImplementationOnce(() => "1")
      .mockImplementationOnce(() => "-6")
      .mockImplementationOnce(() => "9");

    expect(solutionEquation()).toBe(3);
  });

  it("equation with 0 roots", () => {
    jest
      .spyOn(window, "prompt")
      .mockImplementationOnce(() => "5")
      .mockImplementationOnce(() => "-2")
      .mockImplementationOnce(() => "2");

    expect(solutionEquation()).toBe("No roots");
  });
});
