 $(document).ready(function() {

    $("#editor").on("change keyup keydown paste", function() {
        $(this).html($(this).val())
    });

 })



