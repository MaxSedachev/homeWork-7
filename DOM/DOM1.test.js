import { createDOM } from "./DOM1";

describe("Make a page and connect a file to it withscript", () => {
  let el;
  beforeEach(() => {
    el = document.createElement("div");
    document.body.append(el);
    createDOM(el);
  });
  afterEach(() => {
    document.querySelector("html").innerHTML = null;
  });
  it("Markup is displayed on the page: input, button, paragraphs", () => {
    expect(el.querySelector(".text-field")).toBeTruthy();
    expect(el.querySelector("button")).toBeTruthy();
    expect(el.querySelector(".list")).toBeTruthy();
    expect(el.querySelector(".list").childElementCount).toEqual(3);
  });
  it("The button is hidden if there is no value in the input field", () => {
    const input = el.querySelector(".text-field");
    const button = el.querySelector("button");
    input.value = "";
    expect(button.hidden).toBeTruthy();
  });
  it("When you click on the button, a new paragraph is added", () => {
    const input = el.querySelector(".text-field");
    const button = el.querySelector("button");
    input.value = "Text4";
    button.click();
    expect(el.querySelector(".list").childElementCount).toEqual(4);
    expect(el.querySelectorAll("p")[3].textContent).toBe("Text4");
  });
  it("If there are more than 5 paragraphs, the first of them removed", () => {
    const input = el.querySelector(".text-field");
    const button = el.querySelector("button");

    ["Text5", "Text6", "Text7", "Text8"].forEach((value) => {
      input.value = value;
      button.click();
      return null;
    });

    expect(el.querySelector(".list").childElementCount).toEqual(5);
    expect(el.querySelectorAll("p")[4].textContent).toBe("Text8");
  });
});
