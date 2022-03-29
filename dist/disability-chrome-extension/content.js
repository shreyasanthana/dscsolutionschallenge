chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (
    message.includes("enableFocusHoveredArea") ||
    message.includes("updateBlurIntensity")
  ) {
    let numIndex = message.indexOf(":") + 1;
    let blurIntensity = message.substring(numIndex);
    enableFocusHoveredArea(blurIntensity);
  } else if (message.includes("disableFocusHoveredArea")) {
    disableFocusHoveredArea();
  } else if (message.includes("enableTextHighlighting")) {
    enableTextHighlighting();
  } else if (message.includes("updateTextHighlightingColor")) {
    let numIndex = message.indexOf(":") + 1;
    textHighlightingColor = message.substring(numIndex);
  } else if (message.includes("disableTextHighlighting")) {
    disableTextHighlighting();
  } else if (
    message.includes("enableIncreaseTextButton") ||
    message.includes("updateButtonColor")
  ) {
    let val = message.indexOf(":") + 1;
    let valOfColor = message.substring(val);
    enableButton(valOfColor, "110");
  } else if (
    message.includes("enableIncreaseTextButton") ||
    message.includes("updateTextSize")
  ) {
    let sizeOfText = message.indexOf(":") + 1;
    let sizeOfTextFormat = message.substring(sizeOfText);
    enableButton(valOfColor, sizeOfTextFormat);
  } else if (message.includes("disableIncreaseTextButton")) {
    disableIncreaseTextButton();
  } else if (message.includes("enableTextToSpeech")) {
    enableTextToSpeech();
  } else if (message.includes("enableAutoScrolling")) {
    enableAutoScrolling();
  } else if (message.includes("disableAutoScrolling")) {
    disableAutoScrolling();
  }
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
var textHighlightingColor = "#ffff00";

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
  for (var i = 0; i < textElements.length; i++) {
    for (var element = 0; element < textElements[i].length; element++) {
      var originalBackgroundColor = "transparent";
      textElements[i][element].addEventListener("mouseover", function () {
        if (this.style.backgroundColor) {
          originalBackgroundColor = this.style.backgroundColor;
        }
        this.style.backgroundColor = textHighlightingColor;
      });

      textElements[i][element].addEventListener("mouseout", function () {
        this.style.backgroundColor = originalBackgroundColor;
      });
    }
  }
}

function enableButton(valOfColor, sizeOfTextFormat) {
  let buttons = document.getElementsByTagName("button");
  for (button of buttons) {
    applyFontAndHighlight(button, valOfColor, sizeOfTextFormat);
  }
}

function disableIncreaseTextButton() {
  window.location.reload();
}

function applyFontAndHighlight(element, color, sizeOfTextFormat) {
  try {
    element.style.fontSize = sizeOfTextFormat + "%";
    element.style.background = color;
  } catch (exception_var) {
    console.log("no changes needed");
  }
  if (element.hasChildNodes()) {
    element.childNodes.forEach(applyFontAndHighlight);
  }
}
function enableTextToSpeech() {
  textElementsList = [];
  for (textElement of textElements) {
    for (const [key, value] of Object.entries(textElement)) {
      textElementsList.push(value);
    }
  }
  let textElementIndex = 0;
  var storedAudioFiles = new Object();
  document.onkeydown = function (event) {
    switch (event.keyCode) {
      case 37:
        textElementsList[textElementIndex].style.border = "transparent";

        textElementIndex--;
        if (textElementIndex < 0) {
          textElementIndex = textElementsList.length - 1;
        }

        textElementsList[textElementIndex].style.border = "solid";
        textToSpeak = textElementsList[textElementIndex].textContent;
        synthesizeSpeech(textToSpeak);
        break;
      case 39:
        textElementsList[textElementIndex].style.border = "transparent";

        textElementIndex++;
        if (textElementIndex >= textElementsList.length) {
          textElementIndex = 0;
        }

        textElementsList[textElementIndex].style.border = "solid";
        textToSpeak = textElementsList[textElementIndex].textContent;
        synthesizeSpeech(textToSpeak);
        break;
    }
  };
}

function synthesizeSpeech(text) {
  const synthesizeURL =
    "https://texttospeech.googleapis.com/v1/text:synthesize?key=AIzaSyDvALGSWt0xrrvSM6Q52art2s1nQuglQZo";
  const body = {
    input: { text: text },
    voice: { languageCode: "en-US", ssmlGender: "FEMALE" },
    audioConfig: { audioEncoding: "MP3" },
  };

  fetch(synthesizeURL, {
    method: "POST",
    body: JSON.stringify(body),
  })
    .then((response) => response.json())
    .then((data) => {
      const playableAudioContent = data.audioContent;
      chrome.runtime.sendMessage({
        playableAudioContent,
      });
    });
}


function enableAutoScrolling() {
  let index = 0;

  let sortedElems = [...h1s, ...h2s, ...h3s].sort(
    (e1, e2) => e1.offsetTop - e2.offsetTop
  );
  document.addEventListener("keydown", (e) => {
    if (e.key === "s" && index < sortedElems.length - 1) {
      index++;
      sortedElems[index].scrollIntoView();
    } else if (e.key === "w" && index >= 0) {
      index--;
      sortedElems[index].scrollIntoView();
    }
  });
}

function disableAutoScrolling() {
  document.removeEventListener("keydown", function (event) {}, false);
}
