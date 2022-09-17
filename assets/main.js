$(document).ready(function () {
    $("[data-toggle='tooltip']").tooltip().on("click", function() {
        $(this).tooltip("hide");
    });
});