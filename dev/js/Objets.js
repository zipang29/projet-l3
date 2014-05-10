var listeObjets = new Array();

function addCoeurRamassable(x, y) {
	listeObjets[listeObjets.length] = new Array();
	var objet = listeObjets[listeObjets.length - 1];
	objet['type'] = "coeur";
	objet['x'] = x;
	objet['y'] = y;
	objet['ramasse'] = false;
}

function addPieceRamassable(x, y) {
	listeObjets[listeObjets.length] = new Array();
	var objet = listeObjets[listeObjets.length - 1];
	objet['type'] = "piece";
	objet['x'] = x;
	objet['y'] = y;
	objet['ramasse'] = false;
}

function onObject() {
	for (var i=0, t=listeObjets.length; i<t; i++) {
		var objet = listeObjets[i];
		if (objet['type'] == 'coeur' && !objet['ramasse'] && Math.abs(xFond) + xJoueur + p0.width > objet['x'] && Math.abs(xFond) + xJoueur + p0.width < objet['x'] + coeur.width && yJoueur <= objet['y']) {
			objet['ramasse'] = true;
			vieJoueur++;
		}
		if (objet['type'] == 'piece' && !objet['ramasse'] && Math.abs(xFond) + xJoueur + p0.width > objet['x'] && Math.abs(xFond) + xJoueur + p0.width < objet['x'] + piece.width && yJoueur <= objet['y'] + piece.height && yJoueur >= objet['y'] - 2*piece.height ) {
			objet['ramasse'] = true;
			score++;
		}
	}
}

function displayAllObjects() {
	var objet;
	for (var i=0, t=listeObjets.length; i<t; i++) {
		objet = listeObjets[i];
		if (!(objet['ramasse']) && objet['type'] == 'coeur') {
			context.drawImage(coeur, xFond + objet['x'], objet['y']);
		}
		if (!(objet['ramasse']) && objet['type'] == 'piece') {
			context.drawImage(piece, xFond + objet['x'], objet['y']);
		}
	}
}