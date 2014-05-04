var timerTomber = null;

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

function tomber() {
	if (yJoueur < canvas.height - p1.height - sol.height) {
		yJoueur += 1;
	}
	else {
		clearInterval(timerTomber);
		timerTomber = null;
	}
};