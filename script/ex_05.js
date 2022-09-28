const buttons = document.getElementsByTagName('button');
const left_button = buttons[0]
const right_button = buttons[1]
let fontsize = 14;

document.body.style.fontSize = fontsize + 'px';


left_button.addEventListener('click', function(){
  fontsize = fontsize + 1;
  document.body.style.fontSize = fontsize + 'px';
})

right_button.addEventListener('click', function(){
  fontsize = fontsize - 1;
  document.body.style.fontSize = fontsize + 'px';
})


document.querySelector('select').addEventListener('change',function(){
  const div = document.querySelector('body')
  div.style.backgroundColor = this.value
})
