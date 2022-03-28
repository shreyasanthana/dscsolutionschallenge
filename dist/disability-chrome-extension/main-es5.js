(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/aayushseth/Documents/side projects/chrome-dsc/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var primeng_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! primeng/panel */
      "7CaW");
      /* harmony import */


      var primeng_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! primeng/api */
      "7zfz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var primeng_slider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! primeng/slider */
      "+la4");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var primeng_colorpicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! primeng/colorpicker */
      "bv7W");
      /* harmony import */


      var primeng_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! primeng/button */
      "jIHw");
      /* harmony import */


      var primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! primeng/tooltip */
      "xlun"); /// <reference types="chrome"/>


      function AppComponent_ng_template_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_template_6_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.onFocusClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.currentFocusIcon);
        }
      }

      function AppComponent_h5_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Blur Intensity: ", ctx_r1.blurIntensity, "px");
        }
      }

      function AppComponent_h5_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Toggle focus to change blur intensity");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_ng_template_15_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_template_15_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r13.onTextHighlightingClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r3.currentTextHighlightingIcon);
        }
      }

      function AppComponent_ng_template_21_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_template_21_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r15.onIncreaseTextButtonClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r4.currentIncreaseTextButtonIcon);
        }
      }

      function AppComponent_h5_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Button Color: ", ctx_r5.color, "px ");
        }
      }

      function AppComponent_h5_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Select button color");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_h5_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Text Size: ", ctx_r7.textSize, "%");
        }
      }

      function AppComponent_h5_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Select text size");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function AppComponent_ng_template_33_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_template_33_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r17.onTextToSpeechClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r9.currentTextToSpeechIcon);
        }
      }

      function AppComponent_ng_template_39_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_ng_template_39_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r19.onAutoScrollButtonClick();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r10.currentAutoScrollIcon);
        }
      }

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent() {
          _classCallCheck(this, AppComponent);

          this.title = "disability-chrome-extension";
          this.focusSelected = false;
          this.textHighlightingSelected = false;
          this.increaseTextButtonSelected = false;
          this.textToSpeechSelected = false;
          this.autoScrollingSelected = false;
          this.focusIconColor = "red";
          this.currentFocusIcon = "pi pi-eye-slash";
          this.currentTextHighlightingIcon = "pi pi-eye-slash";
          this.currentIncreaseTextButtonIcon = "pi pi-eye-slash";
          this.currentTextToSpeechIcon = "pi pi-eye-slash";
          this.currentAutoScrollIcon = "pi pi-eye-slash";
          this.blurIntensity = 3;
          this.textSize = 110;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {// chrome.storage.sync.get(['focusSelected'], function(result) {
            //   this.focusSelected = result;
            //   this.setFocusIcons();
            // });
          }
        }, {
          key: "setFocusIcons",
          value: function setFocusIcons() {
            if (this.focusSelected) {
              this.currentFocusIcon = "pi pi-eye";
              this.focusIconColor = "green";
            } else {
              this.currentFocusIcon = "pi pi-eye-slash";
              this.focusIconColor = "red";
            }
          }
        }, {
          key: "setTextHighlightingIcons",
          value: function setTextHighlightingIcons() {
            if (this.textHighlightingSelected) {
              this.currentTextHighlightingIcon = "pi pi-eye";
            } else {
              this.currentTextHighlightingIcon = "pi pi-eye-slash";
            }
          }
        }, {
          key: "onTextToSpeechClick",
          value: function onTextToSpeechClick() {
            this.textToSpeechSelected = !this.textToSpeechSelected;
            this.setTextToSpeechIcons();

            if (this.textToSpeechSelected) {
              chrome.tabs.query({
                active: true,
                currentWindow: true
              }, function (tabs) {
                var message = "enableTextToSpeech";
                chrome.tabs.sendMessage(tabs[0].id, message);
              });
            } else {
              chrome.tabs.query({
                active: true,
                currentWindow: true
              }, function (tabs) {
                var message = "disableTextToSpeech";
                chrome.tabs.sendMessage(tabs[0].id, message);
              });
            }
          }
        }, {
          key: "setTextToSpeechIcons",
          value: function setTextToSpeechIcons() {
            if (this.textToSpeechSelected) {
              this.currentTextToSpeechIcon = "pi pi-eye";
            } else {
              this.currentTextToSpeechIcon = "pi pi-eye-slash";
            }
          } //step 1

        }, {
          key: "setIncreaseButtonSizeIcons",
          value: function setIncreaseButtonSizeIcons() {
            if (this.increaseTextButtonSelected) {
              this.currentIncreaseTextButtonIcon = "pi pi-eye";
            } else {
              this.currentIncreaseTextButtonIcon = "pi pi-eye-slash";
            }
          }
        }, {
          key: "setAutoScrollIcons",
          value: function setAutoScrollIcons() {
            if (this.autoScrollingSelected) {
              this.currentAutoScrollIcon = "pi pi-eye";
            } else {
              this.currentAutoScrollIcon = "pi pi-eye-slash";
            }
          }
        }, {
          key: "onFocusClick",
          value: function onFocusClick() {
            var _this = this;

            this.focusSelected = !this.focusSelected;
            this.setFocusIcons(); //chrome.storage.sync.set({'focusSelected': this.focusSelected});

            if (this.focusSelected) {
              chrome.tabs.query({
                active: true,
                currentWindow: true
              }, function (tabs) {
                var message = "enableFocusHoveredArea:" + _this.blurIntensity;
                chrome.tabs.sendMessage(tabs[0].id, message);
              });
            } else {
              chrome.tabs.query({
                active: true,
                currentWindow: true
              }, function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, "disableFocusHoveredArea");
              });
            }
          }
        }, {
          key: "updateBlurIntensity",
          value: function updateBlurIntensity() {
            var _this2 = this;

            chrome.tabs.query({
              active: true,
              currentWindow: true
            }, function (tabs) {
              var message = "updateBlurIntensity:" + _this2.blurIntensity;
              chrome.tabs.sendMessage(tabs[0].id, message);
            });
          }
        }, {
          key: "onTextHighlightingClick",
          value: function onTextHighlightingClick() {
            this.textHighlightingSelected = !this.textHighlightingSelected;
            this.setTextHighlightingIcons();

            if (this.textHighlightingSelected) {
              chrome.tabs.query({
                active: true,
                currentWindow: true
              }, function (tabs) {
                var message = "enableTextHighlighting";
                chrome.tabs.sendMessage(tabs[0].id, message);
              });
            } else {
              chrome.tabs.query({
                active: true,
                currentWindow: true
              }, function (tabs) {
                var message = "disableTextHighlighting";
                chrome.tabs.sendMessage(tabs[0].id, message);
              });
            }
          }
        }, {
          key: "onAutoScrollButtonClick",
          value: function onAutoScrollButtonClick() {
            this.autoScrollingSelected = !this.autoScrollingSelected;
            this.setAutoScrollIcons();

            if (this.autoScrollingSelected) {
              chrome.tabs.query({
                active: true,
                currentWindow: true
              }, function (tabs) {
                var message = "enableAutoScrolling";
                chrome.tabs.sendMessage(tabs[0].id, message);
              });
            } else {
              chrome.tabs.query({
                active: true,
                currentWindow: true
              }, function (tabs) {
                var message = "disableAutoScrolling";
                chrome.tabs.sendMessage(tabs[0].id, message);
              });
            }
          } //step 2

        }, {
          key: "onIncreaseTextButtonClick",
          value: function onIncreaseTextButtonClick() {
            var _this3 = this;

            this.increaseTextButtonSelected = !this.increaseTextButtonSelected;
            this.setIncreaseButtonSizeIcons();

            if (this.increaseTextButtonSelected) {
              chrome.tabs.query({
                active: true,
                currentWindow: true
              }, function (tabs) {
                var message = "enableIncreaseTextButton:" + _this3.color;
                chrome.tabs.sendMessage(tabs[0].id, message);
              });
            } else {
              chrome.tabs.query({
                active: true,
                currentWindow: true
              }, function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, "disableIncreaseTextButton");
              });
            }
          }
        }, {
          key: "updateButtonColor",
          value: function updateButtonColor() {
            var _this4 = this;

            chrome.tabs.query({
              active: true,
              currentWindow: true
            }, function (tabs) {
              var message = "updateButtonColor:" + _this4.color;
              chrome.tabs.sendMessage(tabs[0].id, message);
            });
          }
        }, {
          key: "updateTextSize",
          value: function updateTextSize() {
            var _this5 = this;

            chrome.tabs.query({
              active: true,
              currentWindow: true
            }, function (tabs) {
              var message = "updateTextSize:" + _this5.textSize;
              console.log(message);
              chrome.tabs.sendMessage(tabs[0].id, message);
            });
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 43,
        vars: 30,
        consts: [[1, "body"], [1, "header"], ["src", "icon.png", "alt", "Logo", 1, "center"], [1, "space"], ["header", "Focus Content", "iconPos", "end", "collapsed", "true", 3, "toggleable"], ["pTemplate", "icons"], [4, "ngIf"], [3, "animate", "ngModel", "step", "min", "max", "disabled", "ngModelChange", "onSlideEnd"], [1, "less-space"], ["header", "Text Highlighting", "iconPos", "end", "collapsed", "true", 3, "toggleable"], ["header", "Increase Text and Button Sizing", "iconPos", "end", "collapsed", "true", 3, "toggleable"], [3, "ngModel", "inline", "disabled", "ngModelChange", "onChange"], ["header", "Text-to-Speech", "iconPos", "end", "collapsed", "true", 3, "toggleable"], ["header", "Auto Scrolling", "iconPos", "end", "collapsed", "true", 3, "toggleable"], ["pButton", "", "pTooltip", "Toggle focused content on the page", 1, "p-panel-header-icon", "p-link", 3, "click"], [2, "font-size", "1.5rem"], ["pButton", "", "pTooltip", "Toggle text highlighting on the page", 1, "p-panel-header-icon", "p-link", 3, "click"], ["pButton", "", "pTooltip", "Toggle increased text and button sizing", 1, "p-panel-header-icon", "p-link", 3, "click"], ["pButton", "", "pTooltip", "Toggle text-to-speech on this page", 1, "p-panel-header-icon", "p-link", 3, "click"], ["pButton", "", "pTooltip", "Toggle keyboard auto scrolling on the page", 1, "p-panel-header-icon", "p-link", 3, "click"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p-panel", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_ng_template_6_Template, 2, 2, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " This helps focus on what matters. Improve your focus by turning on this extension. It will blur the content around the page, keeping important headers like navigation bars, in order to make the process of activities like reading a Wikepedia article more efficient! ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppComponent_h5_10_Template, 2, 1, "h5", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, AppComponent_h5_11_Template, 2, 0, "h5", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p-slider", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_p_slider_ngModelChange_12_listener($event) {
              return ctx.blurIntensity = $event;
            })("onSlideEnd", function AppComponent_Template_p_slider_onSlideEnd_12_listener() {
              return ctx.updateBlurIntensity();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p-panel", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AppComponent_ng_template_15_Template, 2, 2, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " This makes reading paragraphs and text alike a lot easier. It will highlight the text you are reading in order to make for a smoother reading experience. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p-panel", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, AppComponent_ng_template_21_Template, 2, 2, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " This helps increase the size of button and select its color to make buttons easier to read. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, AppComponent_h5_25_Template, 2, 1, "h5", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, AppComponent_h5_26_Template, 2, 0, "h5", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p-colorPicker", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_p_colorPicker_ngModelChange_27_listener($event) {
              return ctx.color = $event;
            })("onChange", function AppComponent_Template_p_colorPicker_onChange_27_listener() {
              return ctx.updateButtonColor();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, AppComponent_h5_28_Template, 2, 1, "h5", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, AppComponent_h5_29_Template, 2, 0, "h5", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p-slider", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_p_slider_ngModelChange_30_listener($event) {
              return ctx.textSize = $event;
            })("onSlideEnd", function AppComponent_Template_p_slider_onSlideEnd_30_listener() {
              return ctx.updateTextSize();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p-panel", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, AppComponent_ng_template_33_Template, 2, 2, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " It will speak whatever text is being hovered on. Use arrow keys to change the hover. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p-panel", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, AppComponent_ng_template_39_Template, 2, 2, "ng-template", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " This lets you scroll through content easy! Use the up and down arrow keys to jump to important content quickly. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("color", ctx.focusIconColor);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("toggleable", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.focusSelected);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.focusSelected);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("animate", true)("ngModel", ctx.blurIntensity)("step", 1)("min", 1)("max", 6)("disabled", !ctx.focusSelected);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("toggleable", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("color", ctx.focusIconColor);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("toggleable", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.increaseTextButtonSelected);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.increaseTextButtonSelected);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.color)("inline", true)("disabled", !ctx.increaseTextButtonSelected);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.increaseTextButtonSelected);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.increaseTextButtonSelected);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("animate", true)("ngModel", ctx.textSize)("step", 10)("min", 110)("max", 150)("disabled", !ctx.increaseTextButtonSelected);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("toggleable", true);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("toggleable", true);
          }
        },
        directives: [primeng_panel__WEBPACK_IMPORTED_MODULE_1__["Panel"], primeng_api__WEBPACK_IMPORTED_MODULE_2__["PrimeTemplate"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], primeng_slider__WEBPACK_IMPORTED_MODULE_4__["Slider"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], primeng_colorpicker__WEBPACK_IMPORTED_MODULE_6__["ColorPicker"], primeng_button__WEBPACK_IMPORTED_MODULE_7__["ButtonDirective"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_8__["Tooltip"]],
        styles: [".header[_ngcontent-%COMP%] {\n  height: 20%;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-width: 20%;\n  height: auto;\n}\n\n.space[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n.less-space[_ngcontent-%COMP%] {\n  margin-top: 5px;\n}\n\n.center[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n\n.body[_ngcontent-%COMP%] {\n  min-width: 500px;\n  min-height: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7QUFDRjs7QUFFQTtFQUNFLGNBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUNBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBRUo7O0FBQ0E7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FBRUoiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XG4gIGhlaWdodDogMjAlO1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDIwJTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uc3BhY2Uge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4ubGVzcy1zcGFjZSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cbi5jZW50ZXIge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogNTAlO1xuICB9XG5cbi5ib2R5IHtcbiAgICBtaW4td2lkdGg6IDUwMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xufSJdfQ== */"]
      });
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var primeng_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! primeng/button */
      "jIHw");
      /* harmony import */


      var primeng_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! primeng/card */
      "QIUk");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! primeng/selectbutton */
      "5o1E");
      /* harmony import */


      var primeng_panel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! primeng/panel */
      "7CaW");
      /* harmony import */


      var primeng_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! primeng/menu */
      "1SLH");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! primeng/tooltip */
      "xlun");
      /* harmony import */


      var primeng_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! primeng/slider */
      "+la4");
      /* harmony import */


      var primeng_colorpicker__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! primeng/colorpicker */
      "bv7W");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      AppModule.ɵfac = function AppModule_Factory(t) {
        return new (t || AppModule)();
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({
        providers: [],
        imports: [[_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], primeng_button__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"], primeng_card__WEBPACK_IMPORTED_MODULE_4__["CardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], primeng_selectbutton__WEBPACK_IMPORTED_MODULE_6__["SelectButtonModule"], primeng_panel__WEBPACK_IMPORTED_MODULE_7__["PanelModule"], primeng_menu__WEBPACK_IMPORTED_MODULE_8__["MenuModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__["TooltipModule"], primeng_slider__WEBPACK_IMPORTED_MODULE_11__["SliderModule"], primeng_colorpicker__WEBPACK_IMPORTED_MODULE_12__["ColorPickerModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
          imports: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_1__["AppRoutingModule"], primeng_button__WEBPACK_IMPORTED_MODULE_3__["ButtonModule"], primeng_card__WEBPACK_IMPORTED_MODULE_4__["CardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], primeng_selectbutton__WEBPACK_IMPORTED_MODULE_6__["SelectButtonModule"], primeng_panel__WEBPACK_IMPORTED_MODULE_7__["PanelModule"], primeng_menu__WEBPACK_IMPORTED_MODULE_8__["MenuModule"], primeng_tooltip__WEBPACK_IMPORTED_MODULE_10__["TooltipModule"], primeng_slider__WEBPACK_IMPORTED_MODULE_11__["SliderModule"], primeng_colorpicker__WEBPACK_IMPORTED_MODULE_12__["ColorPickerModule"]]
        });
      })();
      /***/

    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var routes = [];

      var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      });

      AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map