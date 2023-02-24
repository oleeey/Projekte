$(document).ready(function() {
    $('#padItem1').on("click", function() {
      playSound("./sounds/kick.mp3", "Kick");
      });

    $('#padItem2').on("click", function() {
      playSound("./sounds/clap.mp3", "Clap", 0.3);
    });

    $('#padItem3').on("click", function() {
      playSound("./sounds/snare.mp3", "Snare");
    });

    $('#padItem4').on("click", function() {
      playSound("./sounds/808.mp3", "808");
    });

    $('#padItem5').on("click", function() {
      playSound("./sounds/donk.mp3", "Hardbass Donk");
    });

    $('#padItem6').on("click", function() {
      playSound("./sounds/hihat.mp3", "Closed Hi-Hat");
    });

    $('#padItem7').on("click", function() {
      playSound("./sounds/oof.mp3", "Minecraft Oof", 0.3);
    });

    $('#padItem8').on("click", function() {
      playSound("./sounds/oof2.mp3", "Roblox Oof");
    });

    $('#padItem9').on("click", function() {
      playSound("./sounds/cheeki.mp3", "Cheeki Breeki", 0.3);
    });
    

    $(function() {
      $(window).keypress(function(e) {
          let key = e.which;
          switch (key) {
            case 113:
              buttonAnimation("#padItem1", "Kick");
              break;
            case 119:
              buttonAnimation("#padItem2", "Clap");
              break;
            case 101:
              buttonAnimation("#padItem3", "Snare");
              break;
            case 97:
              buttonAnimation("#padItem4", "808");
              break;
            case 115:
              buttonAnimation("#padItem5", "Hardbass Donk");
              break;
            case 100:
              buttonAnimation("#padItem6", "Closed Hi-Hat");
              break;
            case 121:
              buttonAnimation("#padItem7", "Minecraft Oof");
              break;
            case 120:
              buttonAnimation("#padItem8", "Roblox Oof");
              break;
            case 99:
              buttonAnimation("#padItem9", "Cheeki Breeki");
              break;
          }  
      });
   });

 })

 function playSound(sound, name, volume = 0.5) {
    let audio = new Audio(sound);
    audio.volume = volume;
    audio.play();
    $("#displaySound").text(name)
 }

 function buttonAnimation(element, name) {
  $(element).click().toggleClass("active");
  setTimeout(
    function()
    {
      $(element).toggleClass("active");
    }, 100);
 }

