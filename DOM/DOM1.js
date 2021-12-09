export function buttonClick(){
 let text = getInput();
  addParagraph(text);
  hideButton();
  listParagraph();
};

export function getInput(){
  
  let input = document.querySelector('.text-field');
  let button = document.querySelector('button');

  input.addEventListener('input', () => {
    button.hidden = !input.value;
  });
  return input.value
};

export function addParagraph(text){
  let paragraph = document.createElement('p');
  paragraph.innerText = text;

  let list = document.querySelector('.list');
  list.append(paragraph);

};
export function hideButton() {
  let input = document.querySelector('.text-field');
  let button = document.querySelector('button');
  input.value = '';
  button.hidden = true;
  };

export function listParagraph() {
  let limit = document.querySelectorAll('p');
  if (limit.length > 5) {
    limit[0].remove();
  };
};