// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    let voiceElement = document.querySelector("#voice-select");
    let voiceOptions = [];

    function populateVoices(){
        voiceOptions = window.speechSynthesis.getVoices();
        for (let i = 0; i < voiceOptions.length; i++){
            let option = document.createElement("option");
            option.textContent = `${voiceOptions[i].name} (${voiceOptions[i].lang})`;
            voiceElement.appendChild(option);
        }
    }

    populateVoices();
    if (speechSynthesis.onvoiceschanged !== undefined) {
        speechSynthesis.onvoiceschanged = populateVoices;
    }
    
    let soundButton = document.querySelector("button");
    let inputText = document.querySelector("#text-to-speak");

    soundButton.addEventListener("click", () => {
        let utterThis = new SpeechSynthesisUtterance(inputText.value);
        let selectedOption = voiceElement.selectedOptions[0].textContent;
        for (let i = 0; i < voiceOptions.length; i++) {
          if (`${voiceOptions[i].name} (${voiceOptions[i].lang})` === selectedOption) {
            utterThis.voice = voiceOptions[i];
          }
        }
        speechSynthesis.speak(utterThis);
        let selectedImage = document.querySelector("img");
        selectedImage.src = "assets/images/smiling-open.png";

        utterThis.addEventListener("end", () => {
            selectedImage.src = "assets/images/smiling.png"; 
        })
    })

}