const btn = document.querySelector(".talk");
const content = document.querySelector(".content");

// Speech outputs --------------------------

const greetings = [
    "Hello",
    "Hey, how are you?",
    "howdy!"
 ];

 const weather = ["The weather outside is cold"];

 const whoAMI = ["You are Batman"];

 const congrats = ["Congratulations! You are the best!"];

 // ----------------------------------------

const speechRecognition = 
    window.speechRecognition || window.webkitSpeechRecognition;
const recognition = new speechRecognition();

recognition.onstart = function() {
    console.log("Recording now");
    document.querySelector(".talk").style.backgroundColor = "red"
};

recognition.onresult = function(event) {
    console.log("Done recording");
    document.querySelector(".talk").style.backgroundColor = "black"
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

btn.addEventListener('click', () => {
    recognition.start();
});

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();
    speech.text = "I don't understand, please try again";

    if(message.includes("Hello", "hey")){
        var finalText = 
            greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;

    } else if(message.includes("weather")){
        var finalText = 
            weather[Math.floor(Math.random() * weather.length)];
        speech.text = finalText;

    } else if(message.includes("Who am I")){
        var finalText = 
            whoAMI[Math.floor(Math.random() * whoAMI.length)];
        speech.text = finalText;
    } else if(message.includes("congratulations", "congrats")){
        var finalText = 
            congrats[Math.floor(Math.random() * congrats.length)];
        speech.text = finalText;
    }

    speech.volume = 1;
    speech.rate = 0.9;
    speech.pitch = 0.4;

    window.speechSynthesis.speak(speech);
};

