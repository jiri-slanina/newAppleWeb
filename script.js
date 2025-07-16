/* IPHONE11  */
function infoIphone11() {
    document.getElementById("infoIphone11").innerHTML = "<span>Procesor:</span> A13 Bionic chip<br>"+
    "<span>Fotoaparát:</span> zadní (12MP+12MP)<br>"+
    "<span>Přední kamera:</span> 12MP<br>" +
    "<span>Odolnost:</span> IP68<br>" +
    "<span>Face ID:</span> Ano<br>" +
    "<span>Bezdrátové nabíjení:</span> Ano<br>"+
    "<span>Rozměry:</span>150.9 x 75.7 x 8.3mm<br>"+
    "<span>Hmotnost:</span> 194g";

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
    document.getElementById("infoIMac").innerHTML = "<span>Procesor:</span> Apple M3 chip (8jádrové CPU, 8jádrové nebo 10jádrové GPU)<br>"+
    "<span>Paměť (RAM):</span> 8 GB / 16 GB / 24 GB jednotné paměti<br>"+
    "<span>Úložiště:</span> SSD – 256 GB / 512 GB / 1 TB / 2 TB<br>"+
    "<span>Kamera:</span> FaceTime HD (1080p)<br>"+
    "<span>Bezdrátové připojení:</span> Wi-Fi 6E, Bluetooth 5.3<br>"+
    "<span>Rozměry:</span> 547 × 461 × 147 mm (se stojanem)<br>"+
    "<span>Hmotnost:</span> cca 4,5 kg<br>"

    document.getElementById("skrytBtnIMac").style.display = "inline-block"
}

function skrytBtnIMac() {
    document.getElementById("infoIMac"). innerHTML = ""
    document.getElementById("skrytBtnIMac").style.display = "none"
}
/* IMAC END */

/* IWATCH */

function iWatchInfo() {
    document.getElementById("infoIWatch").innerHTML = "<span>Model:</span> Apple Watch SE (2. generace)<br>" +
    "<span>Procesor:</span> Apple S8 SiP s 64bitovým dvoujádrovým čipem<br>" +
    "<span>Displej:</span> Retina LTPO OLED, až 1000 nitů<br>" +
    "<span>Funkce:</span> detekce pádu, nouzové SOS, sledování srdečního tepu a spánku<br>" +
    "<span>Připojení:</span> Bluetooth 5.3, Wi‑Fi, GPS<br>" +
    "<span>Odolnost:</span> voděodolnost do 50 m (WR50)<br>" +
    "<span>Baterie:</span> až 18 hodin výdrže<br>" +
    "<span>Velikosti:</span> 40 mm / 44 mm<br>" +
    "<span>Kompatibilita:</span> iPhone 8 nebo novější, iOS 16 a vyšší<br>";

    document.getElementById("skrytBtnWatch").style.display = "inline-block"
}

function smazIWatch(){
    document.getElementById("infoIWatch").innerHTML = ""
    
    document.getElementById("skrytBtnWatch").style.display = "none"
}
/* IWATCH END */

