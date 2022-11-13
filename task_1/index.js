function taskClick1() {
  alert('Task 1')
}


let angle = [0, 90, 180, 270];
let current = 0;

function taskClick2(id, event) {
  current++;
  if (current === 4)
    current = 0;
  $('#' + id).css('transform', 'rotate(' + angle[current] + 'deg)');
}

let div = document.getElementsByClassName('link')
for (let docKey of  div) {
  docKey.addEventListener('mouseover',(e)=>{
    console.log(e)
    docKey.innerHTML = docKey.innerHTML +' (' + docKey.getAttribute('href') + ')'
  })
  docKey.addEventListener('mouseout',(e)=>{
    docKey.innerHTML = docKey.innerHTML.slice(0,docKey.innerHTML.length-docKey.getAttribute('href').length-3)
  })
}
let form = document.getElementById('form')
let button = document.getElementById('submit')
let name = document.getElementById('name')
let surname = document.getElementById('surname')
let age = document.getElementById('age')
form.addEventListener('submit',(e)=>{

})
name.addEventListener('focusout', (e)=>{
  let ns= /[^a-zA-Z]+/g
  let text = name.value
  if (isValid(text,ns).length==text.length && text.length<50){
    name.setAttribute('style','border-color:black;')
    button.removeAttribute('disabled')
  }else{
    name.setAttribute('style','border-color:red;')
    button.setAttribute('disabled','true')
  }
})
surname.addEventListener('focusout',(e)=>{
  let ns= /[^a-zA-Z]+/g
  let text = surname.value
  if (isValid(text,ns).length==text.length && text.length<50){
    surname.setAttribute('style','border-color:black;')
    button.removeAttribute('disabled')
  }else{
    surname.setAttribute('style','border-color:red;')
    button.setAttribute('disabled','true')
  }
})
age.addEventListener('focusout',(e)=>{
  let reg = /[0-9]+/
  let gg = age.value
  if (isValid(gg, reg)){
    age.setAttribute('style','border-color:black;')
    button.removeAttribute('disabled')
  }else{
    age.setAttribute('style','border-color:red;')
    button.setAttribute('disabled','true')
  }
})

function isValid(text, regex) {
  return text.match(regex)
}
