$(function() {
  // copy info to clipboard
  function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }

  // copy info to clipboard
  $(".phone-btn").on("click", function() {
    copyToClipboard("#phone-field");
    $(".phone-alert").fadeIn("slow");
  });
});

$(function() {
  // copy info to clipboard
  function copyToClipboard(element) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($(element).text()).select();
    document.execCommand("copy");
    $temp.remove();
  }

  // copy info to clipboard
  $(".mail-btn").on("click", function() {
    copyToClipboard("#mail-field");
    $(".mail-alert").fadeIn("slow");
  });
});
