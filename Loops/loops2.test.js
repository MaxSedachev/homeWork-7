import { multiplicationBySeven } from "./loops2";

describe("Print the multiplication table by 7", () => {
  it("return multiplication results from 1 to 9", () => {
    expect(multiplicationBySeven()).toBe(
      "7*1=7; 7*2=14; 7*3=21; 7*4=28; 7*5=35; 7*6=42; 7*7=49; 7*8=56; 7*9=63; "
    );
  });
});
