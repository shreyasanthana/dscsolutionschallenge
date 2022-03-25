/// <reference types="chrome"/>
import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "disability-chrome-extension";
  focusSelected = false;
  textHighlightingSelected = false;
  increaseTextButtonSelected = false;
  autoScrollingSelected = false;
  focusIconColor = "red";
  currentFocusIcon = "pi pi-eye-slash";
  currentTextHighlightingIcon = "pi pi-eye-slash";
  currentIncreaseTextButtonIcon = "pi pi-eye-slash";
  currentAutoScrollIcon = "pi pi-eye-slash";
  blurIntensity: number = 3;
  color: string;

  ngOnInit() {
    // chrome.storage.sync.get(['focusSelected'], function(result) {
    //   this.focusSelected = result;
    //   this.setFocusIcons();
    // });
  }

  setFocusIcons() {
    if (this.focusSelected) {
      this.currentFocusIcon = "pi pi-eye";
      this.focusIconColor = "green";
    } else {
      this.currentFocusIcon = "pi pi-eye-slash";
      this.focusIconColor = "red";
    }
  }

  setTextHighlightingIcons() {
    if (this.textHighlightingSelected) {
      this.currentTextHighlightingIcon = "pi pi-eye";
    } else {
      this.currentTextHighlightingIcon = "pi pi-eye-slash";
    }
  }

  //step 1
  setIncreaseButtonSizeIcons() {
    if (this.increaseTextButtonSelected) {
      this.currentIncreaseTextButtonIcon = "pi pi-eye";
    } else {
      this.currentIncreaseTextButtonIcon = "pi pi-eye-slash";
    }
  }

  setAutoScrollIcons() {
    if (this.autoScrollingSelected) {
      this.currentAutoScrollIcon = "pi pi-eye";
    } else {
      this.currentAutoScrollIcon = "pi pi-eye-slash";
    }
  }

  onFocusClick() {
    this.focusSelected = !this.focusSelected;
    this.setFocusIcons();

    //chrome.storage.sync.set({'focusSelected': this.focusSelected});
    if (this.focusSelected) {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        let message = "enableFocusHoveredArea:" + this.blurIntensity;
        chrome.tabs.sendMessage(tabs[0].id, message);
      });
    } else {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, "disableFocusHoveredArea");
      });
    }
  }

  updateBlurIntensity() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      let message = "updateBlurIntensity:" + this.blurIntensity;
      chrome.tabs.sendMessage(tabs[0].id, message);
    });
  }

  onTextHighlightingClick() {
    this.textHighlightingSelected = !this.textHighlightingSelected;
    this.setTextHighlightingIcons();

    if (this.textHighlightingSelected) {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        let message = "enableTextHighlighting";
        chrome.tabs.sendMessage(tabs[0].id, message);
      });
    } else {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        let message = "disableTextHighlighting";
        chrome.tabs.sendMessage(tabs[0].id, message);
      });
    }
  }

  onAutoScrollButtonClick() {
    this.autoScrollingSelected = !this.autoScrollingSelected;
    this.setAutoScrollIcons();

    if (this.autoScrollingSelected) {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        let message = "enableAutoScrolling";
        chrome.tabs.sendMessage(tabs[0].id, message);
      });
    } else {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        let message = "disableAutoScrolling";
        chrome.tabs.sendMessage(tabs[0].id, message);
      });
    }
  }

  //step 2
  onIncreaseTextButtonClick() {
    this.increaseTextButtonSelected = !this.increaseTextButtonSelected;
    this.setIncreaseButtonSizeIcons();

    if (this.increaseTextButtonSelected) {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        let message = "enableIncreaseTextButton:" + this.color;
        chrome.tabs.sendMessage(tabs[0].id, message);
      });
    } else {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, "disableIncreaseTextButton");
      });
    }
  }
  //step 3
  updateButtonColor() {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      let message = "updateButtonColor:" + this.color;
      chrome.tabs.sendMessage(tabs[0].id, message);
    });
  }
}
