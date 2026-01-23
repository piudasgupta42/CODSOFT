

    alert("JavaScript is connected");

function updateClock() {
    const now = new Date();

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    if (h < 10) h = "0" + h;
    if (m < 10) m = "0" + m;
    if (s < 10) s = "0" + s;

    document.getElementById("clock").innerText =
        h + ":" + m + ":" + s;
}

function updateCountdown() {
    const target = new Date("January 1, 2027 00:00:00").getTime();
    const now = new Date().getTime();

    const diff = target - now;

    if (diff <= 0) {
        document.getElementById("countdown").innerText =
            "Happy New Year!";
        return;
    }

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / (1000 * 60)) % 60);
    const s = Math.floor((diff / 1000) % 60);

    document.getElementById("countdown").innerText =
        d + "d " + h + "h " + m + "m " + s + "s";
}

setInterval(updateClock, 1000);
setInterval(updateCountdown, 1000);

updateClock();
updateCountdown();
