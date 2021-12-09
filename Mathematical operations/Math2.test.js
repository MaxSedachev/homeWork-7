import { lengthArea } from "./Math2";

describe("Length of the circle and the area of the circle with radius", () => {
  afterEach(() => {
    console.log.mockReset();
  });
  it("return circumference 25 radius 50 for number 4", () => {
    jest.spyOn(window, "prompt").mockReturnValue("4");
    console.log = jest.fn();
    lengthArea();
    expect(console.log).toHaveBeenCalledWith(25);
    expect(console.log).toHaveBeenCalledWith(50);
  });
});
