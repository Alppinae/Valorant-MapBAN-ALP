const slctAscent = document.getElementById('slctAscent');
const slctBind = document.getElementById('slctBind');
const slctBreeze = document.getElementById('slctBreeze');
const slctIcebox = document.getElementById('slctIcebox');
const slctLotus = document.getElementById('slctLotus');
const slctSplit = document.getElementById('slctSplit');
const slctSunset = document.getElementById('slctSunset');



const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('closeBtn');
const messageBox = document.getElementById('message');

let counter = 0;
let bans = 0;
let picks = 0;
let mapBans = [];

const players = ['Team A', 'Team B'];
let currentPlayerIndex = 0;

function changeTurn() {
    currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
}

function showModal(message) {
    messageBox.textContent = message;
    overlay.style.display = 'block';
    setTimeout(() => {
        modal.style.opacity = '1';
    }, 50); // Küçük bir gecikme ekleyerek daha pürüzsüz bir geçiş sağlıyoruz
    setTimeout(hideModal, 2000); // 2 saniye sonra modalı otomatik olarak kapat
}

function hideModal() {
    modal.style.opacity = '0';
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 300); // Opaklık animasyonu tamamlandıktan sonra overlay'i gizle
}

closeBtn.addEventListener('click', hideModal);

// addMap fonksiyonunu güncelle
function addMap(map) {
    const currentPlayer = players[currentPlayerIndex];
    if (mapBans.includes(map)) {
        return;
    }
    else if (counter < 7) {
        addBan(map);
        showModal(currentPlayer + " Banladı: " + map);
    }
    else if (counter < 10) {
        addPick(map);
        showModal(currentPlayer + " Pickledi: " + map);
    }
    changeTurn();
}



function addBan(map) {
    counter++;
    bans++;
    mapURL = "\'./assets/images/ban_" + map + ".png\'";
    banItem = "ban" + bans;
    let buffer = document.getElementById(banItem);
    buffer.style.backgroundImage = "url(" + mapURL + ")";

    mapBans.push(map);
}

function addPick(map) {
    counter++;
    picks++;
    mapURL = "\'./assets/images/pick_" + map + ".png\'";

    pickItem = "pick" + picks;
    let buffer = document.getElementById(pickItem);
    buffer.style.backgroundImage = "url(" + mapURL + ")";
}




slctAscent.addEventListener('click', () => addMap("ASCENT"))
slctBind.addEventListener('click', () => addMap("BIND"))
slctBreeze.addEventListener('click', () => addMap("BREEZE"))
slctIcebox.addEventListener('click', () => addMap("ICEBOX"))
slctLotus.addEventListener('click', () => addMap("LOTUS"))
slctSplit.addEventListener('click', () => addMap("SPLIT"))
slctSunset.addEventListener('click', () => addMap("SUNSET"))
