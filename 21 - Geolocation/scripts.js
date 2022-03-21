const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition((position) => {
  console.log(position);
  speed.textContent = position.coords.speed || 0;
  arrow.style.transform = `rotate(${position.coords.heading || 0}deg)`;
}, (e) => console.log(e));
