const hideTimer = document.getElementById('timer');
const hideCalc = document.getElementById('datecalc');
hideTimer.style.display = "none";
document.getElementById('hide').addEventListener("click", hider);

function hider() {

    if (hideTimer.style.display !== "none") {
        hideTimer.style.display = "none";
        hideCalc.style.display = "block";
    }
    else {
        hideTimer.style.display = "block";
        hideCalc.style.display = "none";
    }
};