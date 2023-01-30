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
      let code = isCode(line)[1];
      line = isCode(line)[0];

      if (code && code.length > 0) {      
         code = code[0].replace(/\s/g,"")
         for (let i in line) {
            if (line[i] === code) {
               $("<p>", {class: "code"}).text(line[i]).appendTo($("#preview"));
            }
            else {
               $("<p>", {class: "codeWrapper"}).text(line[i]).appendTo($("#preview"));
            }
         }
         
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

function isCode(line) {
   let regex = /`(.*)`/g
   let code = line.match(regex);
   if (line.match(regex)) {
      //line = line.replace(line.match(regex),"");
      line = line.split(",");
      line = line.map(item => item.replace(/^\s/g,""))
   }

   return [line, code];
}










