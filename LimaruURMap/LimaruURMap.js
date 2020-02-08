window.onload = function () {
  var svgTemp = document.getElementById('LimaruURMapSVG');
  var lineSelect = document.getElementById('edit-line-sel');
  var svgObject;
  svgTemp.addEventListener("load",function() {
    svgObject = svgTemp.contentDocument;
  }, false)
  var lines = svgObject.getElementById('Lines');

  function selectedLine() {
    alert(lineSelect.options[lineSelect.selectedIndex].text);
  }

  console.log(svg);
};