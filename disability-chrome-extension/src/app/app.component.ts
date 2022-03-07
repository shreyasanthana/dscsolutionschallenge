/// <reference types="chrome"/>
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'disability-chrome-extension';
  focusSelected = false;
  increaseTextButtonSelected = false;
  focusIconColor = "red";
  currentFocusIcon = "pi pi-eye-slash";
  currentIncreaseTextButtonIcon = "pi pi-eye-slash";
  blurIntensity: number = 3;

  constructor() {

  }

  onFocusClick() {
    this.focusSelected = !this.focusSelected;
    if (this.focusSelected) {
      this.currentFocusIcon = "pi pi-eye";
      this.focusIconColor = "green";

      chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        let message = "enableFocusHoveredArea:" + this.blurIntensity;
        chrome.tabs.sendMessage(tabs[0].id, message);
      });
    } else {
      this.currentFocusIcon = "pi pi-eye-slash";
      this.focusIconColor = "red";

      chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, "disableFocusHoveredArea");
      });
    }
  }

  updateBlurIntensity() {
    chrome.tabs.query({ active: true, currentWindow: true }, tabs => {
      let message = "changeIntensity:" + this.blurIntensity;
      chrome.tabs.sendMessage(tabs[0].id, message);
    });
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
