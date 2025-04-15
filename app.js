let recognition;
let isListening = false;
const startBtn = document.getElementById('startBtn');
const statusDiv = document.getElementById('status');
const responseDiv = document.getElementById('response');

if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onresult = (event) => {
        const transcript = Array.from(event.results)
            .map(result => result[0])
            .map(result => result.transcript)
            .join('');

        if (transcript.toLowerCase().includes('hey jarvis')) {
            handleCommand(transcript.replace(/hey jarvis/gi, '').trim());
        }
    };

    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
    };
} else {
    statusDiv.textContent = "Speech recognition not supported in this browser";
}

const synth = window.speechSynthesis;
let voices = [];

function populateVoices() {
    voices = synth.getVoices();
    const femaleVoice = voices.find(voice => voice.name.toLowerCase().includes('female') || voice.name.toLowerCase().includes('woman'));
    if (femaleVoice) {
        synth.voice = femaleVoice;
    }
}
populateVoices();
if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoices;
}

startBtn.addEventListener('click', () => {
    if (!isListening) {
        recognition.start();
        statusDiv.textContent = "Status: Listening...";
        startBtn.textContent = "Stop Listening";
        isListening = true;
    } else {
        recognition.stop();
        statusDiv.textContent = "Status: Offline";
        startBtn.textContent = "Start Listening";
        isListening = false;
    }
});

async function handleCommand(command) {
    try {
        const response = await fetch('/process', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ command })
        });

        const data = await response.json();
        responseDiv.textContent = data.response;
        speak(data.response);
    } catch (error) {
        console.error('Error:', error);
    }
}

function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = synth.voice;
    synth.speak(utterance);
}