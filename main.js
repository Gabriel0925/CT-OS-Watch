g.clear();

// On définit le fuseau horaire (2 pour UTC+2)
E.setTimeZone(2);

// init
const dicoDayWeek = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
};
const dicoMonth = {
    0:"January",
    1:"February",
    2:"March",
    3:"April",
    4:"May",
    5:"June",
    6:"July",
    7:"August",
    8:"September",
    9:"October",
    10:"November",
    11:"December"
};
let percentageBattery = E.getBattery();

// cette fonction permet juste de mettre à jour la variable et avoir le nouveau pourcentage de battery
function majBattery() {
    percentageBattery = E.getBattery();
}
let batteryInterval = setInterval(() => {
    majBattery();
}, 60000); // refresh du pourcentage de la batterie toutes les minutes

function drawBattery() {
    // Changement de la couleur en fonction du pourcentage de batterie
    if (percentageBattery <= 20) {
        g.setColor("#F00");
    } else {
        g.setColor("#0A0");
    }

    g.setFontAlign(1, -1);
    g.setFont("Vector", 20);
    g.drawString(percentageBattery + " %", 176, 1, {filled:true});

    // on remet la couleur en noir pour les prochaine écriture
    g.setColor("#000");
}

function drawDateTime() {
    if (!Bangle.isLCDOn()) return;

    const objDate = new Date();

    const dayWeek = objDate.getDay(); // renvoie 5 pour vendredi
    const dayMonth = objDate.getDate(); // renvoie 3 parce que on est le 3 Avril par exemple
    const month = objDate.getMonth();
    const dateToday = dayMonth + " " + dicoMonth[month];

    const hours = objDate.getHours().toString().padStart(2, "0");
    const minutes = objDate.getMinutes().toString().padStart(2, "0");
    const seconds = objDate.getSeconds().toString().padStart(2, "0");

    const timeHoursMinutes = hours + ":" + minutes;
    const timeSeconds = seconds;

    // prépa avant de dessiner
    g.setFontAlign(0,0);
    // config pour hh:mm
    g.setFont("Vector", 50);
    // {filled: true} permet de mettre un rectangle de couleur derrière ce qu'on va écrire donc ça "efface" l'ancien affichage
    g.drawString(timeHoursMinutes, 82, 88, {filled: true}); 

    // config pour les secondes en plus petit
    g.setFont("Vector", 16);
    g.drawString(timeSeconds, 160, 100, {filled: true});

    // config pour l'affichage du jours
    g.setFont("Vector", 18);
    g.drawString(dicoDayWeek[dayWeek], 95, 50, {filled: true});

    // config pour l'affichage du jours
    g.setFont("Vector", 18);
    g.drawString(dateToday, 95, 122, {filled: true});

    drawBattery();

    g.flip(); // .pack()
}

const refreshWatchface = setInterval(drawDateTime, 1000); // exécution de la fonction toutes les secondes pour mettre à jour l'heure,...

// On l'appelle aussi immédiatement pour ne pas avoir d'écran blanc la première seconde
drawDateTime();

// Pour détécter quand il y a un appuie sur le bouton
setWatch(() => {
    clearInterval(refreshWatchface);
    clearInterval(batteryInterval);
    load("launcher.js");
}, BTN1, {repeat:true, edge: "falling"}); // "falling" : le moment ou tu relaches le bouton et repeat true pour continuer de détecter les clics même si on a deja cliqué sur le bouton
