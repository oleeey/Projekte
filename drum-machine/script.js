$(document).ready(function() {
    $('#padItem1').on("click", function() {
        playSound("./kick.mp3");
      });

    $("#padItem1").keypress(function(e) {
      if (e.keyCode == 81) {
        playSound("./kick.mp3");
      }
    });

    $('#padItem2').on("click", function() {
      playSound("./clap.mp3");
    });

 })

 function playSound(sound) {
    let audio = new Audio(sound);
    audio.volume = 0.5;
    audio.play();
 }

