// Initial value to 0
let count = 0;

let value = document.querySelector('#value');
let btns = document.querySelectorAll('.btn');

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        // Catch current clicked btn class 
        let getBtn = e.currentTarget.classList;
        // If it Increase ++
        if(getBtn.contains("increase")) {
            count++;
        }
         // If it Decrease --
        else if(getBtn.contains('decrease')){
            count--;
        }
         // If it Reset 0
        else {
            count = 0;
        }
        // Change color if count is increase/decrease/reset
        if (count > 0){
            value.style.color = "green"
        }
        if (count < 0){
            value.style.color = "red"
        }
        if (count === 0){
            value.style.color = "#222"
        }
        value.textContent = count;
        //console.log(value)
    });
});