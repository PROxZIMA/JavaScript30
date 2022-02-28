const hour = document.getElementById("hour");
const min = document.getElementById("minute");
const second = document.getElementById("second");

const toggleTransition = (bool) => {
  const transition = bool ? 'all 0.05s cubic-bezier(0.1, 2, 0.58, 1) 0s' : 'none';
  hour.style.transition = transition;
  min.style.transition = transition;
  second.style.transition = transition;
};

const date = () => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const degrees = [
    (hours * 30) + (minutes / 2),
    (minutes * 6) + (seconds / 10),
    (seconds * 6)
  ];
  const [hourDeg, minDeg, secDeg] = degrees;

  hour.style.transform = `rotateZ(${hourDeg}deg)`;
  min.style.transform = `rotateZ(${minDeg}deg)`;
  second.style.transform = `rotateZ(${secDeg}deg) translateY(25px)`;

  toggleTransition(!degrees.some(deg => deg % 360 < 6));
};

date();
setInterval(date, 1000);
