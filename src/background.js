let chromeIds = [];

function playSound(audioContent) {
    let url = chrome.runtime.getURL('audio.html');

    url += '?volume=0.5&src=' + encodeURIComponent(audioContent);

    popupId = 0;
    chrome.windows.getAll().then((response) => {
        if (chromeIds.length !== 0) {
            response.forEach((windowVal) => {
                if (!chromeIds.includes(windowVal.id)) {
                    console.log(windowVal.id);
                    chrome.windows.remove(parseInt(windowVal.id));
                }
            })
                
            chromeIds = [];
        }
        response.forEach(windowVal => {
            chromeIds.push(windowVal.id);
        })
    }).then(() => {
        chrome.windows.create({
            type: 'popup',
            focused: false,
            top: 1,
            left: 1,
            height: 1,
            width: 1,
            url
        });
    });
}

function stopSound(audioContent) {
    let url = chrome.runtime.getURL('audio.html');

    url += '?volume=0.5&src=' + encodeURIComponent(audioContent);

    popupId = 0;
    chrome.windows.getAll().then((response) => {
        if (chromeIds.length !== 0) {
            response.forEach((windowVal) => {
                if (!chromeIds.includes(windowVal.id)) {
                    console.log(windowVal.id);
                    chrome.windows.remove(parseInt(windowVal.id));
                }
            })
                
            chromeIds = [];
        }
        response.forEach(windowVal => {
            chromeIds.push(windowVal.id);
        })
    });
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if ("playSound" in message) {
        playSound(message.playSound);
    } else if ("stopSound" in message) {
        stopSound();
    }
});