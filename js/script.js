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

var burger = document.getElementById("burger");
var mobmenu = document.getElementById("mobmenu");
var isburger = false;

function burger_menu(){
	if (!isburger) {
		mobmenu.classList.add("menuopened");
		burger.classList.remove("fa-bars");
		burger.classList.add("fa-times");
		isburger = true;
	}
	else if (isburger){
		mobmenu.classList.remove("menuopened");
		burger.classList.add("fa-bars");
		burger.classList.remove("fa-times");
		isburger = false;
	}
}