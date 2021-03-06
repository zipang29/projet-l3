/**
* L'image des plateformes
*/
var imgPlateforme;

/**
* La liste des plateformes
*/
var listePlateforme = new Array();

/**
* Initialise les images pour les plateformes
*/
function initPlateforme() {
	imgPlateforme = new Image();
	imgPlateforme.src = "img/objets/interactions/plateforme.png";
};

/**
* Ajoute une plateforme au niveau
* @var x La position x de la plateforme
* @var y La position y de la plateforme
*/
function addPlateforme(x, y) {
	listePlateforme[listePlateforme.length] = new Array();
	var plateforme = listePlateforme[listePlateforme.length-1];
	plateforme['x'] = x;
	plateforme['y'] = y;
};

/**
* Permet d'afficher toutes les plateformes
*/
function displayAllPlateformes() {
	var plateforme;
	for (var i=0, t=listePlateforme.length; i<t; i++) {
		plateforme = listePlateforme[i];
		context.drawImage(imgPlateforme, xFond + plateforme['x'], plateforme['y']);
	}
};

/**
* Test si le joueur est sur une plateforme
*/
function joueurIsOnPlateforme() {
	var ret = false;
	for (i=0, t=listePlateforme.length; i<t; i++) {
		var plateforme = listePlateforme[i];
		if (Math.abs(xFond) + xJoueur > plateforme['x'] && Math.abs(xFond) + xJoueur < plateforme['x'] + imgPlateforme.width && yJoueur + p0.height <= plateforme['y']) {
			ret = true;
			break;
		}
	}
	return ret;
}
