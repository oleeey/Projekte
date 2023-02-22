$(document).ready(function() {
    $('#padItem1').on("click", function() {
      playSound("./sounds/kick.mp3");
      });

    $('#padItem2').on("click", function() {
      playSound("./sounds/clap.mp3", 0.3);
    });

    $('#padItem3').on("click", function() {
      playSound("./sounds/snare.mp3");
    });

    $('#padItem4').on("click", function() {
      playSound("./sounds/808.mp3");
    });

    $('#padItem5').on("click", function() {
      playSound("./sounds/donk.mp3");
    });

    $('#padItem6').on("click", function() {
      playSound("./sounds/hihat.mp3");
    });

    $('#padItem7').on("click", function() {
      playSound("./sounds/oof.mp3", 0.3);
    });

    $('#padItem8').on("click", function() {
      playSound("./sounds/oof2.mp3");
    });

    $('#padItem9').on("click", function() {
      playSound("./sounds/cheeki.mp3");
    });
    

    $(function() {
      $(window).keypress(function(e) {
          let key = e.which;
          switch (key) {
            case 113:
              buttonAnimation("#padItem1");
              break;
            case 119:
              buttonAnimation("#padItem2");
              break;
            case 101:
              buttonAnimation("#padItem3");
              break;
            case 97:
              buttonAnimation("#padItem4");
              break;
            case 115:
              buttonAnimation("#padItem5");
              break;
            case 100:
              buttonAnimation("#padItem6");
              break;
            case 121:
              buttonAnimation("#padItem7");
              break;
            case 120:
              buttonAnimation("#padItem8");
              break;
            case 99:
              buttonAnimation("#padItem9");
              break;
          }  
      });
   });

 })

 function playSound(sound, volume = 0.5) {
    let audio = new Audio(sound);
    audio.volume = volume;
    audio.play();
 }

 function buttonAnimation(item) {
  $(item).click().toggleClass("active");
  setTimeout(
    function()
    {
      $(item).toggleClass("active");
    }, 100);
 }

