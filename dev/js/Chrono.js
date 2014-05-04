var chronometreDemarre;
var minutes;
var secondes;
var dixiemes;

var initChronometre = function() {
	minutes = 0;
	secondes = 0;
	dixiemes = 0;
	chronometreDemarre = setInterval(chronometrer, 100);
}

function chronometrer() {
	dixiemes++;
	if(dixiemes > 9) {
		dixiemes = 0;
		secondes++;
	}
	if(secondes > 59) {
		secondes = 0;
		minutes++;
	}
}

var suspendreChronometre = function() {
	clearTimeout(chronometreDemarre);
}

var changBout2 = function() {
	boutpause.onclick = changBout1;
	boutpause.value = "Mettre en pause";
}

var changBout1 = function() {
	timer = setInterval("init()",0);
    boutpause = document.getElementById("pause")
    boutpause.onclick = changBout2;
	window.clearInterval();
	suspendreChronometre();
	boutpause.value = "Redémarrer";
}