button.textContent = 'update'
 button.style.backgroundColor = "green"
 let count = document.getElementById("button");
 let number = 1;

 button.onclick = function () {
     if (number <= 2) {
         number++;
         if (number === 1) {
             count.innerHTML = 'update';
             button.style.backgroundColor = "green"
             button.style.backgroundColor = "green"
         }
         if (number === 2) {
             count.innerHTML = 'delete';
             button.style.backgroundColor = "red"
         }
         if (number === 3) {
             count.innerHTML = 'pendding';
             button.style.backgroundColor = "orange"
             number = 0;
         }
     }
 }