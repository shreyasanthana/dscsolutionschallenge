const { element } = require("protractor");

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (
    message.includes("enableFocusHoveredArea") ||
    message.includes("updateBlurIntensity")
  ) {
    var numIndex = message.indexOf(":") + 1;
    var blurIntensity = message.substring(numIndex);
    enableFocusHoveredArea(blurIntensity);
  } else if (message.includes("disableFocusHoveredArea")) {
    disableFocusHoveredArea();
  } else if (message.includes("enableTextHighlighting")) {
    enableTextHighlighting();
  } else if (message.includes("disableTextHighlighting")) {
    disableTextHighlighting();
  } else if (
    message.includes("enableIncreaseTextButton") ||
    message.includes("updateButtonColor")
  ) {
    //fix this part
    var val = message.indexOf(":") + 1;
    var valOfColor = message.substring(val);
    enableButton(valOfColor);
  } else if (message.includes("enableAutoScrolling")) {
    //fix this part
    var val = message.indexOf(":") + 1;
    var valOfColor = message.substring(val);
    enableButton(valOfColor);
  } else if (message.includes("enableAutoScrolling")) {
    enableAutoScrolling();
  } else if (message.includes("disableAutoScrolling")) {
    disableAutoScrolling();
  }
  //NEED ONE FOR DISABLE BUTTON
});

var divs = document.getElementsByTagName("div");
var paragraphs = document.getElementsByTagName("p");
var h1s = document.getElementsByTagName("h1");
var h2s = document.getElementsByTagName("h2");
var h3s = document.getElementsByTagName("h3");
var h4s = document.getElementsByTagName("h4");
var h5s = document.getElementsByTagName("h5");
var h6s = document.getElementsByTagName("h6");
var lis = document.getElementsByTagName("li");
var as = document.getElementsByTagName("a");

var textElements = [paragraphs, h1s, h2s, h3s, h4s, h5s, h6s, lis, as];

var largeDivsAndNavs = [];

for (const [key, value] of Object.entries(divs)) {
  if (value.offsetHeight > 400) {
    largeDivsAndNavs.push(value);
  }
}

for (var i = 0; i < largeDivsAndNavs.length; i++) {
  for (const [key, value] of Object.entries(largeDivsAndNavs[i].children)) {
    if (largeDivsAndNavs.includes(value)) {
      largeDivsAndNavs.splice(i, 1);
    }
  }
}

console.log(largeDivsAndNavs);

function enableFocusHoveredArea(blurIntensity) {
  for (var i = 0; i < largeDivsAndNavs.length; i++) {
    largeDivsAndNavs[i].addEventListener(
      "mouseover",
      function (event) {
        this.style.filter = "blur(0px)";
      },
      false
    );

    largeDivsAndNavs[i].addEventListener(
      "mouseout",
      function (event) {
        blurFilter = "blur(" + blurIntensity + "px)";
        this.style.filter = blurFilter;
      },
      false
    );
  }
}

function disableFocusHoveredArea() {
  for (var i = 0; i < largeDivsAndNavs.length; i++) {
    largeDivsAndNavs[i].removeEventListener(
      "mouseover",
      function (event) {},
      false
    );
    largeDivsAndNavs[i].removeEventListener(
      "mouseout",
      function (event) {},
      false
    );
  }
  window.location.reload();
}

function disableTextHighlighting() {
  for (var i = 0; i < textElements.length; i++) {
    for (var element = 0; element < textElements[i].length; element++) {
      textElements[i][element].removeEventListener(
        "mouseover",
        function (event) {},
        false
      );
      textElements[i][element].removeEventListener(
        "mouseout",
        function (event) {},
        false
      );
    }
  }
  window.location.reload();
}

function enableTextHighlighting() {
  console.log("ENABLE TEXT HIGHLIGHTING");
  console.log(textElements);
  for (var i = 0; i < textElements.length; i++) {
    for (var element = 0; element < textElements[i].length; element++) {
      var originalBackgroundColor = "transparent";
      textElements[i][element].addEventListener("mouseover", function () {
        if (this.style.backgroundColor) {
          originalBackgroundColor = this.style.backgroundColor;
        }

        if (
          this.style.color &&
          val1ColorGreaterThanVal2Color(this.style.color, "#808080")
        ) {
          this.style.backgroundColor = "yellow";
        } else {
          this.style.backgroundColor = "red";
        }
      });

      textElements[i][element].addEventListener("mouseout", function () {
        this.style.backgroundColor = originalBackgroundColor;
      });
    }
  }
}

//WORK HERE NEXT
function enableButton(valOfColor) {
  let buttons = document.getElementsByTagName("button");
  for (button of buttons) {
    applyFontAndHighlight(button, valOfColor);
  }
  let images = document.getElementsByTagName("svg");
  for (image in images) {
    applyImageScaling(image);
  }
}

function applyFontAndHighlight(element, color) {
  try {
    element.style.fontSize = "120%";
    // changeColor(element);
    element.style.background = color;
    //element.style.background = '#708090';
    console.log("made a change");
    try {
      element.style.width = "50%";
      element.style.height = "50%";
    } catch (exception) {
      console.log("no changes needed");
    }
  } catch (exception_var) {
    console.log("no changes needed");
  }
  if (element.hasChildNodes()) {
    element.childNodes.forEach(applyFontAndHighlight);
  }
}

function applyImageScaling(element) {
  try {
    element.style.width = "120%";
    element.style.height = "120%";
    console.log("changed image size");
  } catch (exception_var) {
    console.log("no changes needed");
  }
  if (element.hasChildNodes()) {
    element.childNodes.forEach(applyImageScaling);
  }
}

//end of new code
function val1ColorGreaterThanVal2Color(val1, val2) {
  console.log("FIRST STYLE COLOR: " + color1);
  console.log("Hex " + val2);
  var color1 = parseInt(val1.substring(1), 16);
  var color2 = parseInt(val2.substring(1), 16);

  if (color1 < color2) {
    return true;
  } else {
    return false;
  }
}

function enableAutoScrolling() {
  let index = 0;

  let sortedElems = [h1s, h2s, h3s].sort(
    (e1, e2) => e1.scrollHeight > e2.scrollHeight
  );

  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown" && index < sortedElems.length - 1) {
      index++;
      sortedElems[index].scrollIntoView();
      console.log(sortedElems[index]);
    } else if (e.key === "ArrowUp" && index >= 0) {
      index--;
      sortedElems[index].scrollIntoView();
    }
  });
}

function disableAutoScrolling() {
  document.removeEventListener("keydown", function (event) {}, false);
}
