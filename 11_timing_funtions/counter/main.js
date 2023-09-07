let countdownDuration = new Date('09/06/2023 09:30').getTime() - new Date().getTime();

let countdown = setInterval(function () {
  countdownDuration -= 1000; // decrease by one second

  let days = Math.floor(countdownDuration / (1000 * 60 * 60 * 24));
  let hours = Math.floor((countdownDuration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((countdownDuration % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((countdownDuration % (1000 * 60)) / 1000);

  console.log(`Countdown: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);

  document.getElementById('days').innerText = days;
  document.getElementById('hours').innerText = hours;
  document.getElementById('minutes').innerText = minutes;
  document.getElementById('seconds').innerText = seconds;

  if (countdownDuration < 0) {
    clearInterval(countdown);
    console.log("Countdown complete!");
    document.getElementById('days').innerText = 0;
    document.getElementById('hours').innerText = 0;
    document.getElementById('minutes').innerText = 0;
    document.getElementById('seconds').innerText = 0;
  }
}, 1000);