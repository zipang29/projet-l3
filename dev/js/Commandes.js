/**
* Fonction anonyme qui s'exécute (évènement) à la pression d'une touche du clavier
*/
document.onkeydown = function(event) {
	x = x - 4; //Permet de faire avancer les 2 images de fond de 4 pixel à chaque appuie sur une touche
	redraw();
};