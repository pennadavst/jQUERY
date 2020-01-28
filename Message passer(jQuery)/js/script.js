// assign varibales
const $message = $(".message");
const $text = $("#text");
const $send = $("#send");
const $clear = $("#clear");

// click event

$send.click(deliverMessage);

// deliver message function
function deliverMessage() {
  let textValue = $text.val();
  $message.html(textValue);
}

// clear the fields

$clear.click(clearField);

// clear field function
function clearField() {
  $message.html("");
  $text.val("");
}
