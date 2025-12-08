let tapBtn = document.querySelector("#tap-btn");
let decBtn = document.querySelector("#decr-btn");
let resetBtn = document.querySelector("#reset-btn");
let h1 = document.querySelector("h1");
let body = document.querySelector("body");

const colors1 = ["#52357B", "#0C2B4E", "#154D71", "#3E0703"];
const colors2 = ["#4477CE", "#1A3D64", "#1C6EA4", "#660B05"];
const colors3 = ["#FF6D1F", "#1D546C", "#33A1E0", "#8C1007"];
const colors4 = ["#DC0000", "#064232", "#00809D", "#BB6653"];

let count = 0;

tapBtn.addEventListener("click", () => {
	tapBtn.innerHTML = ++count;
});

decBtn.addEventListener("click", () => {
	if (count > 0) {
		tapBtn.innerHTML = --count;
	}
});

resetBtn.addEventListener("click", () => {
	count = 0;
	tapBtn.innerHTML = count;
});

let i = 0;

h1.addEventListener("click", () => {
	i = (i + 1) % colors1.length;
	body.style.background = colors1[i];
	tapBtn.style.background = colors2[i];
	decBtn.style.background = colors3[i];
	resetBtn.style.background = colors4[i];
});
