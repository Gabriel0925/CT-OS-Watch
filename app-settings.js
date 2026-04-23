g.clear();

var menu = {
    "": {"title": "Apps"},
    // Information
    "About": function() {about();},
};

E.showMenu(menu);

function about() {
    g.clear();
    g.setFontAlign(-1,-1);
    g.setFont("Vector", 20);

    g.drawString("About", 1, 1);
    g.drawString("v0 beta 1", 20, 88);
}

// Pour détécter quand il y a un appuie sur le bouton
setWatch(() => {
    load("launcher.js");
}, BTN1, {repeat:true, edge: "falling"}); // "falling" : le moment ou tu relaches le bouton et repeat true pour continuer de détecter les clics même si on a deja cliqué sur le bouton
