import { month } from "./conditions2";

describe("Return the name of the month", () => {
  afterEach(() => {
    console.log.mockReset();
  });
  it("return December for 12", () => {
    jest.spyOn(window, "prompt").mockReturnValue("12");
    jest.spyOn(console, "log");
    month();
    expect(console.log).toHaveBeenCalledWith("December");
  });
});
