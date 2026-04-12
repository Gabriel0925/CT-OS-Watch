Bangle.setLCDPower(1);
// Réglage de la durée de mise en veille ainsi que de la luminosité
Bangle.setLCDTimeout(10); // le temps est en secondes
Bangle.setLCDBrightness(0.5); // la luminosité est réglable entre 0 et 1

// g c'est l'objet Garphics c'est le "pinceau" virtuel
g.clear(); // on efface tous ce qu'il y avait à l'écran

g.setFont("Vector", 50); // 50 pour 50 pixels de haut

g.setFontAlign(0,0); // (x, y) en sachant que "-1": L'ancrage est à gauche | "0": L'ancrage est au centre. | "1": L'ancrage est à droite.

// L'écran fait 176x176px
g.drawString("CT", 88, 88); // On prend le centre

g.flip(); // affichage -> équivalent de .pack()

setTimeout(() => {
    load("main.js");
}, 2500);