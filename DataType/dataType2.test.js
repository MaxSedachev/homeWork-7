import { totalLength } from "./dataType2";

describe("total length", () => {
  it("return 13 for strings 'Oleg' and 'Alexander'", () => {
    expect(totalLength("Oleg", "Alexander")).toBe(13);
  });
});
