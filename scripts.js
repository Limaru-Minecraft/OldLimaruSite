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

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function fromDropdown() {document.getElementById("fromDropdown").classList.toggle("show");}
function fromBlur() {document.getElementById("fromDropdown").classList.toggle("show");}


function toDropdown() {
  document.getElementById("toDropdown").classList.toggle("show");
}

function fromFilterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("fromInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("fromDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}

function toFilterFunction() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("toInput");
  filter = input.value.toUpperCase();
  div = document.getElementById("toDropdown");
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
