const synth = window.speechSynthesis;
const msg = new SpeechSynthesisUtterance();
const voicesDropdown = document.querySelector('[name="voice"]');
const [rate, pitch, text] = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');
let voices = [];
msg.volume = 1;

synth.addEventListener('voiceschanged', () => {
  voices = synth.getVoices();
  voices.forEach((voice) => {
    const opt = document.createElement('template');
    opt.innerHTML = `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`;
    voicesDropdown.appendChild(opt.content.firstChild);
  })
})

voicesDropdown.addEventListener('change', e => {
  msg.voice = voices.find(voice => voice.name === e.target.value);
})

speakButton.addEventListener('click', () => {
  synth.cancel()
  msg.rate = rate.value;
  msg.pitch = pitch.value;
  msg.text = text.value;
  synth.speak(msg);
});

stopButton.addEventListener('click', () => synth.cancel());
