/**
* Booleen permettant de savoir si on avance ou si on recule (pour l'animation du personnage)
*/
var reculer = false;

/**
* Fonction anonyme qui s'exécute (évènement) à la pression d'une touche du clavier
*/
document.onkeydown = function(e) {
	// Flèche droite : on avance
	if (e.keyCode == 39) {
		recule = false;
		if (statutPersonnage >= 0 && statutPersonnage < 2) {
			statutPersonnage++;
		}
		else {
			statutPersonnage = 0;
		}
		if (xPerso == 450) {
			if (Math.abs(x - 10) < f1.width - canvas.width && Math.abs(x - 10) < f2.width - canvas.width) {
				x -= 10; // Permet de faire avancer de 10 pixel à chaque appuie sur une touche
			}
		}
		else {
			xPerso += 10;
		}
	}
	// Flèche gauche : on recule
	if (e.keyCode == 37) {
		recule = true;
		if (statutPersonnage >= 3 && statutPersonnage < 5) {
			statutPersonnage++;
		}
		else {
			statutPersonnage = 3;
		}
		if (xPerso <= 450 && xPerso > 0) {
			xPerso -= 10;
		}
		else {
			if (x + 10 <= 0) {
				x += 10;
			}
		}
	}
};

/**
* Fonction anonyme qui s'exécute lorsqu'on relache une touche du clavier
*/
document.onkeyup = function(e) {
	// Si on relache la flèche droite
	if (e.keyCode == 39 || e.keyCode == 37) {
		if (!recule) {
			statutPersonnage = 0; // On affiche l'image du personnage qui ne marche pas
		}
		else {
			statutPersonnage = 5;
		}
		context.drawImage(p1, xPerso, canvas.height - p1.height - sol.height);
	}
}
