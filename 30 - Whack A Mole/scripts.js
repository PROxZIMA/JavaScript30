const game = document.querySelector('.game'),
  holes = document.querySelectorAll('.hole'),
  scoreBoard = document.querySelector('.score'),
  moles = document.querySelectorAll('.mole'),
  start = document.getElementById('start'),
  optionMenu = document.querySelector(".select-menu"),
  selectBtn = optionMenu.querySelector(".select-btn"),
  options = optionMenu.querySelectorAll(".option"),
  sBtn_text = optionMenu.querySelector(".sBtn-text"),
  [min, max] = [0, holes.length - 1];

let [isPlaying, isIdeal] = [false, true];
let [intervalId, gameId] = [];

const gameMode = {
  Easy: [850, 750, 1200],
  Medium: [600, 550, 900],
  Hard: [450, 350, 700],
  Nitro: [300, 200, 500]
}

let [hideDur, minDelay, maxDelay] = gameMode.Easy;

const getRand = (mi = min, ma = max) => Math.floor(Math.random() * (ma - mi + 1) + mi);

const updateMole = () => {
  clearInterval(gameId);
  up.which = getRand();
  gameId = setTimeout(updateMole, getRand(minDelay, maxDelay));
};

let up = {
  state: 0,
  set which(val) {
    moles[this.state].style.top = '100%';
    this.state = val;
    moles[val].style.top = '0%';
    setTimeout(() => moles[val].style.top = '100%', hideDur);
  },
  get which() {
    return this.state;
  }
};

const stopGame = () => {
  isPlaying = false
  clearInterval(gameId);
  clearInterval(intervalId);
  start.textContent = 'Start!';
  scoreBoard.textContent = '0';
  moles[up.which].style.top = '100%';
};

start.addEventListener('click', () => {
  if (!isIdeal) return; // Game has started. Wait for a second.

  if (!isPlaying) {
    [isPlaying, isIdeal] = [true, false];
    let time = 1;
    start.textContent = time;
    intervalId = setInterval(() => start.textContent = ++time, 1000);
    gameId = updateMole();
    setTimeout(() => isIdeal = true, 1000);
  } else {
    stopGame();
  }
});

game.addEventListener('click', (e) => {
  if (!e.target.classList.contains('mole') || !isPlaying) return;
  scoreBoard.textContent = parseInt(scoreBoard.textContent) + 1;
});


selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

options.forEach(option => {
  option.addEventListener("click", () => {
    let selectedOption = option.querySelector(".option-text").innerText;
    sBtn_text.innerText = selectedOption;
    [hideDur, minDelay, maxDelay] = gameMode[selectedOption];

    optionMenu.classList.remove("active");
    stopGame();
  });
});
