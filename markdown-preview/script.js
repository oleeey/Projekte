$(document).ready(function() {
   setInput();

   $("#editor").on("change keyup paste", function() {
      setNewInput();
   });

})

function getInput() {
   return $("#editor").val().split("\n");
}

function setInput() {
   let input = getInput();
   for (let i = 1; i <= input.length; i++) {
      let line = input[i - 1];
      let tag = isHeader(line, i)[0];
      line = isHeader(line, i)[1];
      let code = isSpecial(line)[1];
      line = isSpecial(line,i)[0];

      if (code && code.length > 0) {      
         code = code.replace(/\s/g,"");
         code = code.replace(/`/g,"");
         for (let i in line) {
            if (line[i].replace(/\s/g,"") === code) {
               $("<p>", {class: "code"}).text(line[i].replace(/`/g,"")).appendTo($("#preview"));
            }
            else {
               $("<p>", {class: "codeWrapper"}).text(line[i]).appendTo($("#preview"));
            }
         }
      }
      else if (line == "```") {
         let count = 0;
         let codes = [];
         for (let j = i; j < input.length - 1; j++) {
            codes.push(input[j])
            count++;
         }
         i += count;
         $("<div>", {class: "multiCodeWrapper"}).appendTo("#preview");
         codes.map(item => $("<p>", {class: "multiCode"}).text(item).appendTo($(".multiCodeWrapper")))
      }
      else {
         $(tag).html(line).appendTo($("#preview"));
      }
   }
}

function setNewInput() {
   $("#preview").empty();
   setInput();
}

function getTag(count) {
return `<h${count}>`;
}

function isHeader(line) {
   let regex = /^#+ /g;
   let tag = "<p>";
   if (line.match(regex)) {
      let match = line.match(regex);
      line = line.replace(match,"")
      tag = getTag(match[0].trim().length)
   }
   return [tag, line];
}

function isSpecial(line,i) {
   let regex1 = /^[^`]*`[^`]+`[^`]*$/g;

   let code = "";
   if (line.match(regex1)) {
      /*
      schaut nochmal ob nur 2 Backticks sind, da sonst ein Teil vom Satz vor den Backticks auch im Variablen
      "code" gespeichert wird 
      */
         code = line.match(regex1)[0];
         code = code.match(/`.+`/)[0];
         line = line.split("`");
         line = line.map(el => el.trim());
   }
   return [line, code];
}










