window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'en-US';
recognition.interimResults = true;
// recognition.maxAlternatives = 1;

// const p = document.createElement('p');
let p;
const words = document.querySelector('.words');

console.log('Ready to receive a command.');
recognition.onresult = (e) => {
  if (e.results[0].isFinal) {
    p = document.createElement('p');
    p.innerText = e.results[0][0].transcript;
    words.appendChild(p);
  }
}

recognition.onnomatch = e => {
  console.log('I didn\'t recognize that word.');
  recognition.stop();
}

recognition.onerror = e => {
  console.log('Error occurred in recognition: ' + e.error);
  recognition.stop();
}

recognition.onend = recognition.start;

recognition.start();
