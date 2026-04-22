g.clear();

var menu = {
    "": {"title": "Apps"},
    // Sport
    "Activity": function() {},
    "History": function() {},
    "Workout": function() {},

    // Analyse sport
    "Progression": function() {},

    // Utilitaire
    "Alarms": function() {},
    "Stopwatch": function() {},
    "Timers": function() {},

    // Autre
    "Settings": function() {load("app-settings.js");},
};

E.showMenu(menu);

// Pour détécter quand il y a un appuie sur le bouton
setWatch(() => {
    load("main.js");
}, BTN1, {repeat:true, edge: "falling"}); // "falling" : le moment ou tu relaches le bouton et repeat true pour continuer de détecter les clics même si on a deja cliqué sur le bouton
