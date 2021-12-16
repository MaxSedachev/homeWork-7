export function createDOM(el) {
  el.innerHTML = `
      <input class="text-field" type="Enter a text">

      <button hidden>Click me!</button>

      <div class="list">
           <p>Text1</p>
           <p>Text2</p>
           <p>Text3</p>
     </div>
      `;
  const input = el.querySelector(".text-field");
  const button = el.querySelector("button");

  input.addEventListener("input", () => {
    button.hidden = !input.value;
  });
  button.addEventListener("click", buttonClick);
}

function addParagraph() {
  const input = document.querySelector(".text-field");
  const div = document.querySelector(".list");

  const paragraph = document.createElement("p");
  paragraph.innerHTML = input.value;

  div.append(paragraph);
}
function hideButton() {
  const input = document.querySelector(".text-field");
  const button = document.querySelector("button");
  input.value = "";
  button.hidden = true;
}

function listParagraph() {
  const limit = document.querySelectorAll("p");
  if (limit.length > 5) {
    limit[0].remove();
  }
}

function buttonClick() {
  addParagraph();
  hideButton();
  listParagraph();
}
