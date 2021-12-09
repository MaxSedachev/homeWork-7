import { addValues } from "./Objects";

describe("work with object", () => {
  it("Converts values ​​to variables John, 21, admin", () => {
    jest.spyOn(window, "prompt").mockImplementation(() => "21");
    expect(addValues()).toBe("John, 21, admin");
  });
});
