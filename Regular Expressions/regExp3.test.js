import { phoneNumber } from "./regExp3";

describe("Is phone number", () => {
  afterEach(() => {
    console.log.mockReset();
  });
  it("return true for 8911-333-22-11", () => {
    jest.spyOn(window, "prompt").mockReturnValue("8911-333-22-11");
    console.log = jest.fn();
    phoneNumber();
    expect(console.log).toHaveBeenCalledWith(true);
  });
});
