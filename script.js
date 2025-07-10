function infoIphone11() {
    document.getElementById("infoIphone11").innerHTML = "Procesor: A13 Bionic chip<br>"+
    "Fotoaparát: zadní (12MP+12MP)<br>"+
    "Přední kamera: 12MP<br>" +
    "Odolnost: IP68<br>" +
    "Face ID: Ano<br>" +
    "Bezdrátové nabíjení: Ano<br>"+
    "Rozměry: 150.9 x 75.7 x 8.3mm<br>"+
    "Hmotnost: 194g";

    document.getElementById("skrytBtn").style.display = "inline-block"
}

function smazInfo() {
    document.getElementById("infoIphone11").textContent = ""
    document.getElementById("skrytBtn").style.display = "none"
}