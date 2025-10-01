const display = document.querySelector(".value");
const buttons = document.querySelectorAll(".buttons button");
function updateDisplayScroll() {
    display.scrollLeft = display.scrollWidth; // 항상 끝으로 이동
}
buttons.forEach(btn => {
    btn.addEventListener("click",()=>{
        const val = btn.textContent;
        if (display.value === "Error"||display.value ==='undefined' && val !== "=") {
            display.value = "";
        }
        if(val === '='){
            try{
                display.value = math.evaluate(display.value);
            }
            catch{
                display.value = 'Error';
            }
        }
        else if(val === 'C'){
            display.value = "";
        }
        else if(val === '<='){
            display.value = display.value.slice(0,-1);
        }
        else{
            display.value += val;
        }
        updateDisplayScroll();
    });
});

//keyboard
document.addEventListener("keydown" ,(e)=>{
    const allowedKeys = "0123456789+-*/().";
    if (display.value === "Error"||display.value ==='undefined' && allowedKeys.includes(e.key)) {
        display.value = "";
    }
    if (e.key === "Enter") {
        e.preventDefault(); // form 제출 방지
        try {
            display.value = math.evaluate(display.value);
        } catch {
            display.value = "Error";
        }
    } 
    else if (e.key === "Backspace") {
        e.preventDefault();
        display.value = display.value.slice(0, -1);
    } 
    else if (allowedKeys.includes(e.key)) {
        e.preventDefault();
        display.value += e.key;
    }
    updateDisplayScroll();
});



