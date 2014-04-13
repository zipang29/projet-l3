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
	imgPlateforme = new Image();
	imgPlateforme.src = "img/objets/interactions/elevateur.png";
}

/**
* Permet d'ajouter un élévateur.
* @var x1 La position x de l'élévateur dans sa position initiale
* @var y2 La position y de l'élévateur dans sa position initiale
* @var x2 La position x d'arrivée de l'élévateur
* @var y2 La position y d'arrivée de l'élévateur
* @var direction Un boolean est attendu. <code>true</code> si l'animation est sur l'axe x, <code>false</code> si il est sur l'axe y
*/
function addElevateur(x1, y1, x2, y2, direction) {
	listeElevateurs[listeElevateurs.length] = new Array();
	var elevateur = listeElevateurs[listeElevateurs.length - 1];
	elevateur['x1'] = x1;
	elevateur['y1'] = y1;
	elevateur['x2'] = x2;
	elevateur['y2'] = y2;
	elevateur['direction'] = direction;
	
	/**
	* Détermine si l'élévateur est en cours de déplacement ou non
	*/
	elevateur['actif'] = false;
}

/**
* Permet d'afficher tout les élévateurs
*/
/*function displayAllPlateformes() {
	var elevateur;
	for (var i=0; i<listeElevateurs.length; i++) {
		elevateur = listeElevateurs[i];
		context.drawImage(imgElevateur, xFond + elevateur['x1'], elevateur['y1']);
	}
}*/
