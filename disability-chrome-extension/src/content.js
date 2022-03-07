chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.includes("enableFocusHoveredArea")) {
        var numIndex = message.indexOf(":") + 1;
        var blurIntensity = message.substring(numIndex)
        enableFocusHoveredArea(blurIntensity);
    } else if (message.includes("disableFocusHoveredArea")) {
        disableFocusHoveredArea();
    } else if (message.includes("changeIntensity")) {
        var numIndex = message.indexOf(":") + 1;
        var blurIntensity = message.substring(numIndex)
        updateFocusHoveredAreaBlur(blurIntensity);
    }
});

var divs = document.getElementsByTagName('div');

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
    console.log(blurIntensity)
    for (var i = 0; i < largeDivsAndNavs.length; i++) {
        largeDivsAndNavs[i].addEventListener("mouseover", function(event) {            
            this.style.filter = "blur(0px)";
        }, false);


        largeDivsAndNavs[i].addEventListener("mouseout", function(event) {
            blurFilter = "blur(" + blurIntensity + "px)";
            this.style.filter = blurFilter;
        }, false);
    }   
}

function disableFocusHoveredArea() {
    for (var i = 0; i < largeDivsAndNavs.length; i++) {
        largeDivsAndNavs[i].removeEventListener("mouseover", function(event) {            
        }, false);
        largeDivsAndNavs[i].removeEventListener("mouseout", function(event) {
        }, false);
    }
    window.location.reload();
}

function updateFocusHoveredAreaBlur(blurIntensity) {
    console.log(blurIntensity);
    enableFocusHoveredArea(blurIntensity);    
}