import { dayOfWeek } from "./Date1";

describe("dayOfWeek", () => {
  it("day of the week", () => {
    jest.spyOn(window, "prompt").mockReturnValue("01.01.2021");
    expect(dayOfWeek()).toBe(5);
  });
});
