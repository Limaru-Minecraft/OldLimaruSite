function copyIP() {
  var copyText = document.getElementById('serverIP');
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  document.getElementById('serverIPtooltip').innerHTML = "Copied!";
  setTimeout(resetCopiedHoverText,2000);
}
function resetCopiedHoverText(){
  document.getElementById('serverIPtooltip').innerHTML = "Click to copy!";
}