// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let selectElement = document.querySelector("#horn-select");
  let selectedImage = document.querySelector("img");
  let currentHorn;
  let selectedAudio = document.querySelector(".hidden");

  let currentVolume = document.querySelector("#volume");
  let volumeControls = document.querySelector("#volume-controls");
  let volumeControlImg = volumeControls.querySelector("img");

  let soundButton = document.querySelector("button");

  selectElement.addEventListener("change", (event) => {
    currentHorn = event.target.value;

    // display correct image and audio
    selectedImage.src = "assets/images/" + currentHorn + ".svg";
    selectedAudio.src = "assets/audio/" + currentHorn + ".mp3";

  })

  // displays correct volume control image based on what value the volume slider is at
  currentVolume.addEventListener("change", (event) => {
    let current = event.target.value;

    if(current == 0){
      volumeControlImg.src = "assets/icons/volume-level-0.svg";
    }
    else if ((current > 0) && (current < 33)){
      volumeControlImg.src = "assets/icons/volume-level-1.svg";
    }
    else if ((current >= 33) && (current < 67)){
      volumeControlImg.src = "assets/icons/volume-level-2.svg";
    }
    else{
      volumeControlImg.src = "assets/icons/volume-level-3.svg";
    }
    selectedAudio.volume = current / 100; // need to set audio to a value between 0 and 1
  })

  // will play audio when button is pressed 
  soundButton.addEventListener("click", () => {
    if(currentHorn == "party-horn"){
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
      selectedAudio.play();
    }
    else{
      selectedAudio.play();
    }
  })

}


