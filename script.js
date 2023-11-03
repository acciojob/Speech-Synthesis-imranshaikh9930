// Your script here.
function populateVoices() {
    voices = speechSynthesis.getVoices();
    voicesDropdown.innerHTML = voices
        .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
        .join('');
}

// Set up the initial SpeechSynthesisUtterance properties
function setUtteranceProperties() {
    msg.voice = voices.find(voice => voice.name === voicesDropdown.value);
    msg.text = document.querySelector('[name="text"]').value;
    msg.rate = document.querySelector('[name="rate"]').value;
    msg.pitch = document.querySelector('[name="pitch"]').value;
}

// Event listeners
speechSynthesis.addEventListener('voiceschanged', populateVoices);

voicesDropdown.addEventListener('change', setUtteranceProperties);

options.forEach(option => {
    option.addEventListener('input', () => {
        setUtteranceProperties();
    });
});

speakButton.addEventListener('click', () => {
    speechSynthesis.speak(msg);
});

stopButton.addEventListener('click', () => {
    speechSynthesis.cancel();
});