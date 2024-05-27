const slctAscent = document.getElementById('slctAscent');
const slctBind = document.getElementById('slctBind');
const slctBreeze = document.getElementById('slctBreeze');
// const slctFracture = document.getElementById('slctFracture');
// const slctHaven = document.getElementById('slctHaven');
const slctIcebox = document.getElementById('slctIcebox');
const slctLotus = document.getElementById('slctLotus');
// const slctPearl = document.getElementById('slctPearl');
const slctSplit = document.getElementById('slctSplit');
const slctSunset = document.getElementById('slctSunset');
let counter = 0;
let bans = 0;
let picks = 0;

let mapBans = [];

function addMap(map) {
    if (mapBans.includes(map)) {
        return;
    }
    else if (counter < 7) {
        addBan(map);
    }
    else if (counter < 10) {
        addPick(map);
    }
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

slctAscent.addEventListener('click', () => addMap("ascent"))
slctBind.addEventListener('click', () => addMap("bind"))
slctBreeze.addEventListener('click', () => addMap("breeze"))

// slctFracture.addEventListener('click', () => addMap("fracture"))
// slctHaven.addEventListener('click', () => addMap("haven"))
// slctPearl.addEventListener('click', () => addMap("pearl"))

slctLotus.addEventListener('click', () => addMap("lotus"))
slctSplit.addEventListener('click', () => addMap("split"))
slctIcebox.addEventListener('click', () => addMap("icebox"))
slctSunset.addEventListener('click', () => addMap("sunset"))


