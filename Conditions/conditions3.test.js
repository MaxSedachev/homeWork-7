import { circleIntoSquare } from "./conditions3";

describe("the circle fit into a square", () => {
  it("return false when circle = 5 and square = 4", () => {
    expect(circleIntoSquare(5, 4)).toBe(false);
  });
});
