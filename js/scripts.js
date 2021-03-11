$(document).ready(function() {
  $("button#night").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-mode")
  });
  $("button#day").click(function () {
    $("body").removeClass();
    $("body").addClass("light-mode")
  });
});