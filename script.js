const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');
const year = document.getElementById('year');
const loading = document.getElementById('loading');

const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

year.innerHTML = currentYear + 1;

function updateCountDown() {
    const currentTime = new Date();
    const difference = newYearTime - currentTime;


    // Convert miliseconds to days - hours - minutes - seconds
    // Use the modulo operator to keep the hours to 24, minutes to 60, and seconds to 60
    // 86400000 = 24 * 60 * 60 * 1000
    const d = Math.floor(difference / 86400000);
    // 3600000 = 60 * 60 * 1000
    const h = Math.floor(difference / 3600000) % 24;
    // 60000 = * 60 * 1000
    const m = Math.floor(difference / 60000) % 60;
    const s = Math.floor(difference / 1000) % 60;
    
    days.innerHTML = d;
    hours.innerHTML = h < 10 ? '0' + h : h;
    minutes.innerHTML = m < 10 ? '0' + m : m;
    seconds.innerHTML = s < 10 ? '0' + s : s;

};

// Show spinner before countdown
setTimeout(() => {
    loading.remove();
    countdown.style.display = 'flex';
}, 1000)

setInterval(updateCountDown, 1000);