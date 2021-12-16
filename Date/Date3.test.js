import { youngUser } from "./Date3";

describe("The program identifies the younger user", () => {
  it("return 16.05.20 for by birth dates '10.11.15' and '16.05.20'", () => {
    expect(youngUser("10.11.2015", "16.05.2020")).toBe("16.05.2020");
  });
});
