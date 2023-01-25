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
        let regex = /^#+ /g;
        if (line.match(regex)) {
            let match = line.match(regex);
            line = line.replace(match,"")
            let tag = getTag(match[0].trim().length)
            $(tag, {id: "p" + i}).text(line).appendTo($("#preview"))
        }
        else {
            $("<p>", {id: "p" + i}).text(line).appendTo($("#preview"))
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


 







