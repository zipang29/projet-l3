/**
* Booleen permettant de savoir si on avance ou si on recule (pour l'animation du personnage)
*/
var reculer = false;

/**
* Permet de gérer la répétition des touches au clavier et de faire en sorte qu'il n'y ait plus une "pause" après le premier appuie sur une touche
*/
var timer = null;

/**
* Fonction anonyme qui s'exécute (évènement) à la pression d'une touche du clavier
*/
document.onkeydown = function(e) {
	if (timer) return;
	timer = setInterval(function(){
		// Flèche droite : on avance
		if (e.keyCode == 39) {
			recule = false;
			if (joueur.statutPersonnage >= 0 && joueur.statutPersonnage < 2) {
				joueur.statutPersonnage++;
			}
			else {
				joueur.statutPersonnage = 0;
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
			if (joueur.statutPersonnage >= 3 && joueur.statutPersonnage < 5) {
				joueur.statutPersonnage++;
			}
			else {
				joueur.statutPersonnage = 3;
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
    }, 30); // Le dernier paramètre sert à modifier la vitesse d'avancement du joueur
	
	// On met ceci hors de la fonction de répétition car on ne doit pas pouvoir sauter plusieurs fois d'affiler (pas avant d'avoir toucher le sol à nouveau)
	if (e.keyCode == 32) {
		
	}
};

/**
* Fonction anonyme qui s'exécute lorsqu'on relache une touche du clavier
*/
document.onkeyup = function(e) {
	clearTimeout(timer);
    timer = null;
	// Si on relache la flèche droite
	if (e.keyCode == 39 || e.keyCode == 37) {
		if (!recule) {
			joueur.statutPersonnage = 0; // On affiche l'image du personnage qui ne marche pas
		}
		else {
			joueur.statutPersonnage = 5;
		}
		context.drawImage(p1, xPerso, canvas.height - p1.height - sol.height);
	}
}
