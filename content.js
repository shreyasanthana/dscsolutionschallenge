chrome.runtime.onMessage.addListener(gotMessage);
function gotMessage(message,sender,sendresponse)
{
	console.log(message.txt);

    let buttons = document.getElementsByTagName("button");
    for (button of buttons) {
        applyFontAndHighlight(button);
    }
    let images = document.getElementsByTagName("svg");
    for (image in images) {
        applyImageScaling(image);
    }

}

function applyFontAndHighlight(element) {
    try {
        element.style.fontSize = "120%";
        element.style.background = '#708090';
        console.log("made a change"); 
        // try {
        //     element.style.width = "50%";
        //     element.style.height = "50%";
        // } catch (exception) {
        //     console.log("no changes needed");
        // }
    }
    
    catch (exception_var) {
        console.log("no changes needed");
    }
    if (element.hasChildNodes()) {
        element.childNodes.forEach(applyFontAndHighlight)
    } 
} 

function applyImageScaling(element) {
    try {
        element.style.width = "120%";
        element.style.height = "120%";
        console.log("changed image size"); 
    }
    
    catch (exception_var) {
        console.log("no changes needed");
    }
    if (element.hasChildNodes()) {
        element.childNodes.forEach(applyImageScaling)
    } 
}
