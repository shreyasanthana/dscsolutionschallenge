// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor into current page
changeColor.addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

function blurImages(element) {
  // if (element.hasChildNodes()) {
  //   element.childNodes.forEach(blurImage)
  // } else if (element.getElementsByTagName('img').length > 0) {
  //   element.
  // }

  let images = element.getElementsByTagName("img");
  console.log(images);
}

// The body of this function will be executed as a content script inside the
// current page
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    // document.body.style.backgroundColor = color;
    document.body.style.background = color;

    let images = document.getElementsByTagName("img");
    console.log(images);

    for (let image of images) {
      // image.style.filter = "blur(5px)";
      let parent = image;
      while (parent.nodeName != "DIV") {
        parent = parent.parentElement;
      }
      parent.style.filter = "blur(5px)";
      // image.style.borderRadius = "50px";
      console.log(image);
    }

    // console.log(document.body.style.filter);
  });
}
