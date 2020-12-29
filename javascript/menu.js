let feuille = document.getElementById("reservation");
feuille.addEventListener("click", function() {
    document.location.href = "../pages/reservation.html"
});

let calendrier = document.getElementById("calendrier");
calendrier.addEventListener("click", function() {
    document.location.href = "../pages/planning.html"
});

let retour = document.getElementById("retour");
retour.addEventListener("click", function() {
    document.location.href="../index.html";
});