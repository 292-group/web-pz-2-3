
var myArray = [];
[...document.getElementsByTagName('img')].map((e, i) =>
    myArray.push(e.src)
);
document.querySelector('#image1').onclick = () => {
    alert(myArray[0]);
}
document.querySelector('#image2').onclick = () => {
    alert(myArray[1]);
}
document.querySelector('#image3').onclick = () => {
    alert(myArray[2]);
}
document.querySelector('#image1').oncontextmenu = () => {
    image1.style.rotate = '90deg'
    return false;
}
document.querySelector('#image2').oncontextmenu = () => {
    image2.style.rotate = '90deg'
    return false;
}
document.querySelector('#image3').oncontextmenu = () => {
    image3.style.rotate = '90deg'
    return false;
}
document.querySelector('#link1').onmouseenter = () => {
    link1.textContent = 'Посилання1' + '(' + link1 + ')';
}
link1.onmouseout = function (event) {
    link1.textContent = 'Посилання1'
};

document.querySelector('#link2').onmouseenter = () => {
    link2.textContent = 'Посилання2' + '(' + link2 + ')';
}
link2.onmouseout = function (event) {
    link2.textContent = 'Посилання2'
};

document.querySelector('#link3').onmouseenter = () => {
    link3.textContent = 'Посилання3' + '(' + link3 + ')';
}
link3.onmouseout = function (event) {
    link3.textContent = 'Посилання3'
};





const lastName = document.querySelector('.name');
const firstName = document.querySelector('.firstName');
const age = document.querySelector('.age');
const btn = document.querySelector('.btn');
let checked = false;




check=(name)=>{
    name.onkeyup=()=>{
   let inpt_v = name.value;
   const RegExp = /\W+/g;
   checked=RegExp.test(inpt_v)

   if(inpt_v.length>15||!checked ){
   name.classList.remove('red_border');
   name.classList.add('green_border');
   }

   else{
   name.classList.remove('green_border');
   name.classList.add('red_border');
       }
 }}

 check(lastName);
 check(firstName);
 age.onkeyup=()=>{
   let input_age=age.value;
   if(input_age>0){
     age.classList.remove('red_border');
     age.classList.add('green_border');
   }
   else{
     age.classList.remove('green_border');
     age.classList.add('red_border');
   }
 }

//click on button
 btn.onclick=()=>{
   if(lastName.classList.contains('green_border')&&firstName.classList.contains('green_border')&&age.classList.contains('green_border')){
    alert(`
   First name: ${firstName.value}
   Last name: ${lastName.value}
   Age: ${age.value}`)
   }
   else{
     alert('THe data entered incorrected!!!')
   }

 }
