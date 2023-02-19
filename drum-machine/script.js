$(document).ready(function() {
    $('.padItem').on("click", function() {
        let audio = new Audio("https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3");
        audio.play();
      });
 })