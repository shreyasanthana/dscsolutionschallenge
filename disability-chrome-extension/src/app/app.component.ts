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
  
  constructor() {
    
  }

  onFocusClick() {
    this.focusSelected = !this.focusSelected;
    if (this.focusSelected) {
      this.currentFocusIcon = "pi pi-eye";
      this.focusIconColor = "green";
    } else {
      this.currentFocusIcon = "pi pi-eye-slash";
      this.focusIconColor = "red";
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
