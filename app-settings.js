g.clear();

var menu = {
    "": {"title": "Apps"},
    // Param de la montre
    "Screen": function() {console.log("Screen");},

    // Information
    "About": function() {about();},
    "Version": function() {console.log("Version");},
};

E.showMenu(menu);

function about() {
    g.clear();
    g.setFontAlign(-1,-1);
    g.setFont("Vector", 20);

    g.drawString("v1", 82, 88); 
}

// Pour détécter quand il y a un appuie sur le bouton
setWatch(() => {
    load("main.js");
}, BTN1, {repeat:true, edge: "falling"}); // "falling" : le moment ou tu relaches le bouton et repeat true pour continuer de détecter les clics même si on a deja cliqué sur le bouton