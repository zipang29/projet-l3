/**
* L'image de l'élévateur
*/
var imgElevateur;

/**
* La liste des élévateurs actuels
*/
var listeElevateurs = new Array();

/**
* Initialise les images des élévateurs
*/
function initElevateur() {
	imgElevateur = new Image();
	imgElevateur.src = "img/objets/interactions/elevateur.png";
}

/**
* Permet d'ajouter un élévateur.
* @var x1 La position x de l'élévateur dans sa position initiale
* @var y2 La position y de l'élévateur dans sa position initiale
* @var x2 La position x d'arrivée de l'élévateur
* @var y2 La position y d'arrivée de l'élévateur
*/
function addElevateur(x1, y1, x2, y2) {
	listeElevateurs[listeElevateurs.length] = new Array();
	var elevateur = listeElevateurs[listeElevateurs.length - 1];
	elevateur['x1'] = x1;
	elevateur['y1'] = y1;
	elevateur['x2'] = x2;
	elevateur['y2'] = y2;
	elevateur['x'] = x1;
	elevateur['y'] = y1;
	
	/**
	* Détermine si l'élévateur est en cours de déplacement ou non
	*/
	elevateur['actif'] = false;
	
	/**
	* Détermine la direction de l'élévateur : true = vers l'avant ou le haut, false, vers l'arrière ou le bas
	*/
	elevateur['direction'] = false;
};

/**
* Permet d'afficher tout les élévateurs
*/
function displayAllElevateurs() {
	var elevateur;
	for (var i=0; i<listeElevateurs.length; i++) {
		elevateur = listeElevateurs[i];
		context.drawImage(imgElevateur, xFond + elevateur['x'], elevateur['y']);
	}
};

function deplacement(elevateurNumber) {
	var e = listeElevateurs[elevateurNumber];
	if (e['actif'] == true) {
		if (e['direction'] == false) {
			if (e['x'] < e['x1']) {
				e['x'] += 1;
			}
			if (e['y'] < e['y1']) {
				e['y'] += 1;
				yJoueur += 1;
			}
			if (e['x'] == e['x1'] && e['y'] == e['y1']) {
				e['direction'] = false;
				e['actif'] = false;
			}
		}
		if (e['direction'] == true) {
			if (e['x'] > e['x2']) {
				e['x'] -= 1;
			}
			if (e['y'] > e['y2']) {
				e['y'] -= 1;
				yJoueur -= 1;
			}
			if (e['x'] == e['x2'] && e['y'] == e['y2']) {
				e['direction'] = true;
				e['actif'] = false;
			}
		}
	}
	else {
		if (Math.abs(xFond) + xJoueur > e['x1'] && Math.abs(xFond) + xJoueur < e['x2'] + imgElevateur.width) {
			e['actif'] = true;
			if (e['direction'] == false) {
				e['direction'] = true;
			}
			else {
				e['direction'] = false;
			}
		}
	}
};

function lancerElevateurs() {
	for (var i=0; i<listeElevateurs.length; i++) {
		setInterval("deplacement("+i+")", 10);
	}
};