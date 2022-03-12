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
  focusIconColor = "red";
  currentFocusIcon = "pi pi-eye-slash";
  currentTextHighlightingIcon = "pi pi-eye-slash";
  currentIncreaseTextButtonIcon = "pi pi-eye-slash";
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

  onIncreaseTextButtonClick() {
    this.increaseTextButtonSelected = !this.increaseTextButtonSelected;
    if (this.increaseTextButtonSelected) {
      this.currentIncreaseTextButtonIcon = "pi pi-eye";
    } else {
      this.currentIncreaseTextButtonIcon = "pi pi-eye-slash";
    }
  }
}
