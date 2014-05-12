var chronometreDemarre;
var minutes;
var secondes;
var dixiemes;

var enPause = false;

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

/**
* Fonction pour désactiver la pause
*/
var changBout2 = function() {
	boutpause.onclick = changBout1;
	boutpause.value = "Mettre en pause";
	lancerBidon();
	mainTimer = setInterval("redraw()", 30/1000);
	enPause = false;
}

/**
* Met en pause le jeu
*/
var changBout1 = function() {
    boutpause = document.getElementById("pause");
    boutpause.onclick = changBout2;
	clearInterval(mainTimer);
	mainTimer = null;
	desactiverBidon();
	boutpause.value = "Redémarrer";
	enPause = true;
}