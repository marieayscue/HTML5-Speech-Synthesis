
//speak function
function speak() {
    var voice = new SpeechSynthesisUtterance();
    voice.text = "This is the shoreline in Shanghai, China.";
    speechSynthesis.speak(voice);
}