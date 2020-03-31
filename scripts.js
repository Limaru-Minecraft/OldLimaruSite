function copyIP() {
  var copyText = document.getElementById('serverIP');
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Copied the text: " + copyText.value);
}
