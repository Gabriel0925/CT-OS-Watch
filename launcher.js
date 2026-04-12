g.clear();

var menu = {
    "": {"title": "Apps"},
    // Sport
    "Activity": function() {console.log("Activity");},
    "History": function() {console.log("History");},
    "Workout": function() {console.log("Workout");},

    // Analyse sport
    "Progression": function() {console.log("Progression");},
    "Training Load": function() {console.log("Training Load");},

    // Utilitaire
    "Alarms": function() {console.log("Alarms");},
    "Stopwatch": function() {load("app-stopwatch.js");},
    "Timers": function() {console.log("Timers");},
    "Weather": function() {console.log("Weather");},

    // Autre
    "Settings": function() {load("app-settings.js");},
};

E.showMenu(menu);

// Pour détécter quand il y a un appuie sur le bouton
setWatch(() => {
    load("main.js");
}, BTN1, {repeat:true, edge: "falling"}); // "falling" : le moment ou tu relaches le bouton et repeat true pour continuer de détecter les clics même si on a deja cliqué sur le bouton
