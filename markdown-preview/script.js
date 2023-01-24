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
    console.log(input);
    for (let i = 1; i <= input.length; i++) {
        let line = input[i - 1];
        let regex = /^#/g;
        if (line.match(regex)) {
            console.log(line)
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







