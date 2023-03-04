$(document).ready(function() {

    btnClick("#padItem1", "./sounds/kick.mp3", "Kick");
    btnClick("#padItem2", "./sounds/clap.mp3", "Clap", 0.3);
    btnClick("#padItem3", "./sounds/snare.mp3", "Snare");
    btnClick("#padItem4", "./sounds/808.mp3", "808");
    btnClick("#padItem5", "./sounds/donk.mp3", "Hardbass Donk");
    btnClick("#padItem6", "./sounds/hihat.mp3", "Closed Hi-Hat");
    btnClick("#padItem7", "./sounds/oof.mp3", "Minecraft Oof", 0.3);
    btnClick("#padItem8", "./sounds/oof2.mp3", "Roblox Oof");
    btnClick("#padItem9", "./sounds/cheeki.mp3", "Cheeki Breeki", 0.3);

    $('.select').on("click", function() {
      if ($(".inner").hasClass("right")) {
        $(".inner").addClass("left");
        $(".inner").removeClass("right");
      }
      else {
        $(".inner").addClass("right");
        $(".inner").removeClass("left");
      }
      
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

function btnClick(btnName, soundFile, soundName, volume) {
  $(btnName).on("click", function() {
    playSound(soundFile, soundName, volume);
  });
}

