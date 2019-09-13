var firstselectblock = document.getElementById("first-select-block");
var secondselectblock = document.getElementById("second-select-block");

function showselectblock(a){
	if(a=="1"){
		firstselectblock.classList.remove("hidden");
		secondselectblock.classList.add("hidden");
	}
	else if(a=="2"){
		firstselectblock.classList.add("hidden");
		secondselectblock.classList.remove("hidden");
	}
}