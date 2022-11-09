const img1=document.querySelector('.img_1');
const img2=document.querySelector('.img_2');
const img3=document.querySelector('.img_3');
const lastName=document.querySelector('.l_name');
const firstName=document.querySelector('.f_name');
const age=document.querySelector('.age_name');
const btn=document.querySelector('.btn');
let checked=false;
rotateImg=(img)=> img.oncontextmenu=()=> img.classList.toggle('rotate');
rotateImg(img1);
rotateImg(img2);
rotateImg(img3);
  showHref=(a,href,number)=>{
    a.onmouseover=()=> a.textContent = `Посилання ${number} :${href}`;
    a.onmouseleave=()=> a.textContent=`Посилання ${number} :`;
  }
  showHref(a1,'https://planbphoto.com/ua/patriotuchni-kartunku/',1);
  showHref(a2,'https://ua.reactor.cc/tag/%D0%BC%D0%B8%D1%80',2);
  showHref(a3,'https://www.unian.net/lite/holidays/krasivye-kartinki-pro-ukrainu-na-rabochiy-stol-i-telefon-11884050.html',3);
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
  }
}
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