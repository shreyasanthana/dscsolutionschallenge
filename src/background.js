let currWindowID = 1;

function playSound(audioContent) {
    let url = chrome.runtime.getURL('audio.html');

    // set this string dynamically in your code, this is just an example
    // this will play audio content at half the volume and close the popup after a second
    url += '?volume=0.5&src=' + encodeURIComponent(audioContent);
    chrome.windows.getAll().then(response => {
        console.log(response);
        response.forEach(window => {
            if (window.id !== currWindowID) {
                console.log(window.id);
                chrome.windows.remove(window.id);
            }
        })
    });

    chrome.windows.create({
        type: 'popup',
        focused: false,
        top: 1,
        left: 1,
        height: 1,
        width: 1,
        url,
    });
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    playSound(message.playableAudioContent);
});