let playBtn = document.querySelector("#ply-btn");
let inputText = document.querySelector("#textInput");
let userInput = inputText.value;



function speak(text,callback) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.addEventListener('end', () => {
        // Call the callback function once speech is complete
        if (callback) {
            callback();
        }
    });
    utterance.lang = "hi-IN";
    //utterance.lang = "en-US";
    utterance.rate = 1.0;
    synth.speak(utterance);
}




playBtn.addEventListener("click", () => {
    userInput = inputText.value;
    
    // Disable the play button
    playBtn.disabled = true;

    // Change the text of the play button to "Playing..."
    playBtn.innerText = "Playing...";

    // Speak the user input
    speak(userInput, () => {
        // Re-enable the play button and change its text back to "Play" once speaking is complete
        playBtn.disabled = false;
        playBtn.innerText = "Play";
        // inputText.value = ''; 
    });
});


console.log(userInput);

