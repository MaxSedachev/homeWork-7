import { date } from "./regExp1";

describe("Is date", () => {
  afterEach(() => {
    console.log.mockReset();
  });
  it("return true for 11.11.2011", () => {
    jest.spyOn(window, "prompt").mockReturnValue("11.11.2011");
    console.log = jest.fn();
    date();
    expect(console.log).toHaveBeenCalledWith(true);
  });
});
