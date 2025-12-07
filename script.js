let tapBtn = document.querySelector("#tap-btn");
let decBtn = document.querySelector("#decr-btn");
let resetBtn = document.querySelector("#reset-btn");

let count = 0;

tapBtn.addEventListener("click", () => {
	tapBtn.innerHTML = ++count;
});

decBtn.addEventListener("click", () => {
	if (count>0){
        tapBtn.innerHTML = --count;
    }
});

resetBtn.addEventListener("click", () => {
	count = 0;
	tapBtn.innerHTML = count;
});

