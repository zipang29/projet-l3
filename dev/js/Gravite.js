/**
* Le timer lançant la méthode tomber lorsqu'il y en a besoin
*/
var timerTomber = null;

/**
* Vérifie si le joueur doit tomber ou non. Si il doit tomber le timerTomber est définit et lance la méthode tomber() toute les milisecondes
*/
function verifGravite() {
	var tomber = false;
	var i = 0;
	if (yJoueur < canvas.height - p1.height - sol.height && !sautEnCours) {
		var onElevateur = joueurIsOnElevateur();
		var onPlateforme = joueurIsOnPlateforme();
		if (!onElevateur && !onPlateforme) {
			tomber = true;
		}
	}
	if (tomber) {
		if (timerTomber == null) {
			timerTomber = setInterval("tomber()", 1);
		}
	}
};

/**
* Fait tomber le joueur de 5 pixels à chaque fois que la méthode est appelée. Le timerTomber est désactivé lorsque l'on atteint le sol
*/
function tomber() {
	if (yJoueur < canvas.height - p1.height - sol.height) {
		yJoueur += 5;
	}
	else {
		yJoueur = canvas.height - p1.height - sol.height;
		clearInterval(timerTomber);
		timerTomber = null;
	}
};