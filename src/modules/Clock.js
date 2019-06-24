export default function startClock(divId) {
    const today = new Date();
    let hh = today.getHours();
    let mm = today.getMinutes();
    let ss = today.getSeconds();
    mm = checkTime(mm);
    ss = checkTime(ss);
    document.getElementById(divId).innerHTML = `${hh}:${mm}:${ss}`;
    setTimeout(() => {
        startClock(divId);
    }, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
}