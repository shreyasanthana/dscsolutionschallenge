/// <reference types="chrome"/>
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'disability-chrome-extension';
  focusSelected = false;
  textHighlightingSelected = false;
  increaseTextButtonSelected = false;
  textToSpeechSelected = false;
  focusIconColor = "red";
  currentFocusIcon = "pi pi-eye-slash";
  currentTextHighlightingIcon = "pi pi-eye-slash";
  currentIncreaseTextButtonIcon = "pi pi-eye-slash";
  currentTextToSpeechIcon = "pi pi-eye-slash";
  blurIntensity: number = 3;

  ngOnInit() {
    // chrome.storage.local.get(['focusSelected'], function(result) {
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

<<<<<<< Updated upstream:disability-chrome-extension/src/app/app.component.ts
=======
  setTextToSpeechIcons() {
    if (this.textToSpeechSelected) {
      this.currentTextToSpeechIcon = "pi pi-eye";
    } else {
      this.currentTextToSpeechIcon = "pi pi-eye-slash";
    }
  }

>>>>>>> Stashed changes:src/app/app.component.ts
  onFocusClick() {
    this.focusSelected = !this.focusSelected;
    this.setFocusIcons();
    
    
    // chrome.storage.local.set({'focusSelected': this.focusSelected});
    if (this.focusSelected) {
      chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        let message = "enableFocusHoveredArea:" + this.blurIntensity;
        chrome.tabs.sendMessage(tabs[0].id, message);
      });
    } else {
      chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, "disableFocusHoveredArea");
      });
    }
  }

  updateBlurIntensity() {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      let message = "updateBlurIntensity:" + this.blurIntensity;
      chrome.tabs.sendMessage(tabs[0].id, message);
    });
  }

  onTextHighlightingClick() {
    this.textHighlightingSelected = !this.textHighlightingSelected;
    this.setTextHighlightingIcons();

    if (this.textHighlightingSelected) {
      chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        let message = "enableTextHighlighting";
        chrome.tabs.sendMessage(tabs[0].id, message);
      });
    } else {
      chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        let message = "disableTextHighlighting";
        chrome.tabs.sendMessage(tabs[0].id, message);
      });
    }
  }

<<<<<<< Updated upstream:disability-chrome-extension/src/app/app.component.ts
=======
  onTextToSpeechClick() {
    this.textToSpeechSelected = !this.textToSpeechSelected;
    this.setTextToSpeechIcons();

    if (this.textToSpeechSelected) {
      chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        let message = "enableTextToSpeech";
        chrome.tabs.sendMessage(tabs[0].id, message);
      });
    } else {
      chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        let message = "disableTextToSpeech";
        chrome.tabs.sendMessage(tabs[0].id, message);
      });
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

//step 2
>>>>>>> Stashed changes:src/app/app.component.ts
  onIncreaseTextButtonClick() {
    this.increaseTextButtonSelected = !this.increaseTextButtonSelected;
    if (this.increaseTextButtonSelected) {
      this.currentIncreaseTextButtonIcon = "pi pi-eye";
    } else {
      this.currentIncreaseTextButtonIcon = "pi pi-eye-slash";
    }
  }
}
