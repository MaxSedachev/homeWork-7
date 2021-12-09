import { isWord } from "./function2";

describe("True if one word and false if several", () => {
  it("return false for string 'hello Mr Smith'", () => {
    expect(isWord("hello Mr Smith")).toBe(false);
  });
});
