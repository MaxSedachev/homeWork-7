import { email } from "./regExp2";

describe("Is email", () => {
  afterEach(() => {
    console.log.mockReset();
  });
  it("return true for test@gmail.com", () => {
    jest.spyOn(window, "prompt").mockReturnValue("test@gmail.com");
    jest.spyOn(console, "log");
    email();
    expect(console.log).toHaveBeenCalledWith(true);
  });
});
