const timeLeft = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
let intervalId = 0;

const formatTime = seconds => `${parseInt(seconds / 60).toString().padStart(2, '0')}:${parseInt(seconds % 60).toString().padStart(2, '0')}`;

const incrementDate = seconds => {
  const d = new Date((new Date()).getTime() + seconds * 1000);
  return `Be back at ${d.getHours().toString().padStart(2, '0')}:${d.getMinutes().toString().padStart(2, '0')}`;
};

const timer = seconds => {
  clearInterval(intervalId);
  endTime.textContent = incrementDate(seconds);
  timeLeft.textContent = formatTime(seconds);
  intervalId = setInterval(() => {
    seconds--;
    timeLeft.textContent = formatTime(seconds);
    if (seconds <= 0) {
      clearInterval(intervalId);
      return;
    }
  }, 1000);
};

document.querySelectorAll('button[data-time]').forEach((timeButton) => {
  timeButton.addEventListener('click', () => {
    timer(parseInt(timeButton.dataset.time));
  })
})

document.getElementById('custom').addEventListener('submit', (e) => {
  e.preventDefault();
  const time = e.target["minutes"].value.trim();
  if (!/^\d+$/.test(time)) return;
  timer(parseInt(time) * 60);
})
