// Hide confetti gif on page load
$('#confetti').hide();

// Replace download button with confetti gif when download resume button is clicked
// After 3 seconds but download button back
$("#downloadBtn").on("click", function(){
    $('#confetti').show();
    $('#downloadBtn').hide();
    setTimeout(putButtonBack, 3000);
});
function putButtonBack() {    
    $('#confetti').hide();
    $('#downloadBtn').show();
}

// Handle nav and footer bar hover feedback
$('li').hover(function(){
    $(this).css("background-color", "white");
  }, function(){
  $(this).css("background-color", "");
});