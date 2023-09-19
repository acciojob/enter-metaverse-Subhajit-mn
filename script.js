//your JS code here. If required.
const button = document.getElementById("enterBtn");
const para = document.getElementById("status");
button.addEventListener("click", () => {
	para.innerText = "Enter the Metaverse";
	para.innerHTML = "<h1>Enter the Metaverse</h1>";
})