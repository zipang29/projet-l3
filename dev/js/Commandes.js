/**
* Fonction anonyme qui s'ex�cute (�v�nement) � la pression d'une touche du clavier
*/
document.onkeydown = function(e) {
	// Fl�che droite : on avance
	if (window.event.keyCode == 39) {
		if (Math.abs(x - 10) < f1.width - canvas.width && Math.abs(x - 10) < f2.width - canvas.width) {
			x -= 10; // Permet de faire avancer de 10 pixel � chaque appuie sur une touche
		}
	}
	// Fl�che gauche : on recule
	if (window.event.keyCode == 37) {
		if (x + 10 <= 0) {
			x += 10;
		}
	}
	redraw();
};
