/**
* Fonction anonyme qui s'ex�cute (�v�nement) � la pression d'une touche du clavier
*/
document.onkeydown = function(event) {
	x = x - 4; //Permet de faire avancer les 2 images de fond de 4 pixel � chaque appuie sur une touche
	redraw();
};