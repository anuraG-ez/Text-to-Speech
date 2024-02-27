// selecting DOM elements
const btnThemeSwitcher= document.querySelector('.btn-theme-switcher');
const iconThemeSwitcher= document.querySelector('.theme-icon');
let playBtn = document.querySelector("#ply-btn");
let inputText = document.querySelector("#textInput");
let userInput = inputText.value;


// finding out user's theme preference
let defaultTheme= 1;    // (0 => light, 1 => dark)
let iconType;           // which other theme icon to load
const darkThemeSupporter= window.matchMedia("(prefers-color-scheme: dark").matches; // checking if user has a dark theme preference

if(darkThemeSupporter){
    document.body.classList.add('dark');
    iconType= "light";
}
else{
    document.body.classList.add('light');
    iconType= "dark";
    defaultTheme= 0;
} 
iconThemeSwitcher.src= `./media/icons/${iconType}-mode.png`;


// handling theme switching
btnThemeSwitcher.addEventListener('click', ()=>{
    if(defaultTheme){   // currently it is dark => need to switch to light
        iconType= "dark";
        defaultTheme= 0;
    }
    else{
        iconType= "light";
        defaultTheme= 1;
    }
    document.body.classList.toggle('light');
    document.body.classList.toggle('dark');
    iconThemeSwitcher.src= `./media/icons/${iconType}-mode.png`;
});


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

