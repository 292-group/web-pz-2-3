const btn=document.querySelector(".btn");
let count='';
btn.onclick=()=>{
    count++;
    if(count===1){
btn.classList.remove('red');
btn.classList.add('orange');
btn.innerHTML='Pedding'
    }
    if(count===2){
btn.classList.remove('orange');
btn.classList.add('green');
btn.innerHTML='Update'
    }
    if(count===3){
btn.classList.remove('green');
btn.classList.add('red');
btn.innerHTML='Delete'
count=0;

    }
}