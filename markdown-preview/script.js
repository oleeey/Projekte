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
        line = isCode(line);

        $(tag).html(line).appendTo($("#preview"));
    }
 }

 function setNewInput() {
    $("#preview").empty();
    setInput();
 }

 function getTag(count) {
   return `<h${count}>`;
 }

 function isHeader(line, i) {
    let regex = /^#+ /g;
    let tag = "<p>";
    if (line.match(regex)) {
        let match = line.match(regex);
        line = line.replace(match,"")
        tag = getTag(match[0].trim().length)
    }
    return [tag, line];
 }

 function isCode(line ,i) {
    let regex = /`(.*)`/g
    if (line.match(regex)) {
        line = line.replace(line.match(regex),`<span class='code'>${line.match(regex)}</span>`).replace(/`/g,"")
    }
    return line;
 }


 







