import { minPass } from "./Date2";

describe("Displaying minutes elapsed since the start of the day", () => {
  it("Returns the number of minutes since the start of the day", () => {
    const now = new Date(
      "Thu Nov 25 2021 07:34:26 GMT+0300 (Москва, стандартное время)"
    );
    expect(minPass(now)).toBe(274);
  });
});
