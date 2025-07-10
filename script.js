function infoIphone11() {
    document.getElementById("infoIphone11").innerHTML = "Procesor: A13 Bionic chip<br>"+
    "Fotoaparát: zadní (12MP+12MP)<br>"+
    "Přední kamera: 12MP<br>" +
    "Odolnost: IP68<br>" +
    "Face ID: Ano<br>" +
    "Bezdrátové nabíjení: Ano<br>"+
    "Rozměry: 150.9 x 75.7 x 8.3mm<br>"+
    "Hmotnost: 194g";

    document.getElementById("skrytBtnIphone").style.display = "inline-block"
}

function smazInfo() {
    document.getElementById("infoIphone11").textContent = ""
    document.getElementById("skrytBtnIphone").style.display = "none"
}


function iMacInfo() {
    document.getElementById("infoIMac").innerHTML = "Procesor: Apple M3 chip (8jádrové CPU, 8jádrové nebo 10jádrové GPU)<br>"+
    "Paměť (RAM): 8 GB / 16 GB / 24 GB jednotné paměti<br>"+
    "Úložiště: SSD – 256 GB / 512 GB / 1 TB / 2 TB<br>"+
    "Kamera: FaceTime HD (1080p)<br>"+
    "Bezdrátové připojení: Wi-Fi 6E, Bluetooth 5.3<br>"+
    "Rozměry: 547 × 461 × 147 mm (se stojanem)<br>"+
    "Hmotnost: cca 4,5 kg<br>"

    document.getElementById("skrytBtnIMac").style.display = "inline-block"
}

function skrytBtnIMac() {
    document.getElementById("infoIMac"). innerHTML = ""
    document.getElementById("skrytBtnIMac").style.display = "none"
}