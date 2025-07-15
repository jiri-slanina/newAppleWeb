/* IPHONE11  */
function infoIphone11() {
    document.getElementById("infoIphone11").innerHTML = "Procesor: A13 Bionic chip<br>"+
    "Fotoaparát: zadní (12MP+12MP)<br>"+
    "Přední kamera: 12MP<br>" +
    "Odolnost: IP68<br>" +
    "Face ID: Ano<br>" +
    "Bezdrátové nabíjení: Ano<br>"+
    "Rozměry: 150.9 x 75.7 x 8.3mm<br>"+
    "Hmotnost: 194g";

    let btn = document.getElementById("skrytBtnIphone");
    btn.style.display = "inline-block";
    btn.classList.remove("fade-out");
    btn.classList.add("fade-in");
}

function smazInfo() {
    let btn = document.getElementById("skrytBtnIphone");
    btn.classList.remove("fade-in");
    btn.classList.add("fade-out");

    setTimeout(function(){
        document.getElementById("infoIphone11").textContent = "";
        btn.style.display = "none";
    }, 1000);
}
/* IPHONE11 END */

/* IMAC */
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
/* IMAC END */

/* IWATCH */

function iWatchInfo() {
    document.getElementById("infoIWatch").innerHTML = "Model: Apple Watch SE (2. generace)<br>" +
    "Procesor: Apple S8 SiP s 64bitovým dvoujádrovým čipem<br>" +
    "Displej: Retina LTPO OLED, až 1000 nitů<br>" +
    "Funkce: detekce pádu, nouzové SOS, sledování srdečního tepu a spánku<br>" +
    "Připojení: Bluetooth 5.3, Wi‑Fi, GPS<br>" +
    "Odolnost: voděodolnost do 50 m (WR50)<br>" +
    "Baterie: až 18 hodin výdrže<br>" +
    "Velikosti: 40 mm / 44 mm<br>" +
    "Kompatibilita: iPhone 8 nebo novější, iOS 16 a vyšší<br>";

    document.getElementById("skrytBtnWatch").style.display = "inline-block"
}

function smazIWatch(){
    document.getElementById("infoIWatch").innerHTML = ""
    
    document.getElementById("skrytBtnWatch").style.display = "none"
}
/* IWATCH END */

