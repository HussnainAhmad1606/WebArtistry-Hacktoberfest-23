randomNumber = Math.floor(Math.random()*4+1);  

window.onload = function() {  
	if (randomNumber == 1) {
		document.getElementById("content1").style.display = "inline";
		document.getElementById("content2").style.display = "none";
		document.getElementById("content3").style.display = "none";
		document.getElementById("content4").style.display = "none";
	}
	if (randomNumber == 2) {
		document.getElementById("content1").style.display = "none";
		document.getElementById("content2").style.display = "inline";
		document.getElementById("content3").style.display = "none";
		document.getElementById("content4").style.display = "none";
	}
	if (randomNumber == 3) {
		document.getElementById("content1").style.display = "none";
		document.getElementById("content2").style.display = "none";
		document.getElementById("content3").style.display = "inline";
		document.getElementById("content4").style.display = "none";
	}
	if (randomNumber == 4) {
		document.getElementById("content1").style.display = "none";
		document.getElementById("content2").style.display = "none";
		document.getElementById("content3").style.display = "none";
		document.getElementById("content4").style.display = "inline";
	}
}






