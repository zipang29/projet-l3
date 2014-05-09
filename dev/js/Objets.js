var listeObjets = new Array();

function addCoeurRamassable(x, y) {
	listeObjets[listeObjets.length] = new Array();
	var objet = listeObjets[listeObjets.length - 1];
	objet['type'] = "coeur";
	objet['x'] = x;
	objet['y'] = y;
	objet['ramasse'] = false;
}

function onObject() {
	for (var i=0; i<listeObjets.length; i++) {
		var objet = listeObjets[i];
		if (objet['type'] == 'coeur' && !objet['ramasse'] && Math.abs(xFond) + xJoueur + p0.width > objet['x'] && Math.abs(xFond) + xJoueur + p0.width < objet['x'] + coeur.width && yJoueur <= objet['y']) {
			objet['ramasse'] = true;
			vieJoueur++;
		}
	}
}

function displayAllObjects() {
	var objet;
	for (var i=0; i<listeObjets.length; i++) {
		objet = listeObjets[i];
		if (!(objet['ramasse'])) {
			context.drawImage(coeur, xFond + objet['x'], objet['y']);
		}
	}
}