(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "tr{\r\n    border: 1px;\r\n    border-color: black;\r\n}\r\n\r\ntd{\r\n    border: 1px black solid;\r\n    height: 20px;\r\n    width: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRye1xyXG4gICAgYm9yZGVyOiAxcHg7XHJcbiAgICBib3JkZXItY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG50ZHtcclxuICAgIGJvcmRlcjogMXB4IGJsYWNrIHNvbGlkO1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style>\n  .square {\n    height: 20px;\n    width: 20px;\n    background-color: red; \n  }\n  .focussed {\n    height: 20px;\n    width: 20px;\n    background-color: yellow;\n  }\n</style>\n\n<table style=\"border-collapse: collapse\">\n  <tr *ngFor=\"let mrow of MRows\">\n    <td *ngFor=\"let mcol of mrow\" style=\"margin: 0px; padding: 0px\">\n      <ng-template *ngIf =\"mcol.isDot;then showDot; else showfocussed\">\n\n      </ng-template>\n      <ng-template #showDot>\n        <div>\n            <img src=\"\\assets\\turtle.ico\" style=\"width: 15px; height: 15px;align-content: center\">\n        </div>\n      </ng-template>\n      <ng-template #showfocussed>\n          \n        <div *ngIf = \"mcol.isFocussed\" class=\"focussed\">\n            <img src=\"\\assets\\mario.ico\" style=\"width: 15px; height: 15px; align-content: center\">\n        </div>\n      </ng-template>\n    </td>\n  </tr>\n</table>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _matrix_cell__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./matrix-cell */ "./src/app/matrix-cell.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.MRows = [];
        this.iCounter = 0;
        this.iDotCounter = 0;
        this.setUpGame();
    }
    AppComponent.prototype.setUpGame = function () {
        this.MRows = [];
        this.noOfCols = parseInt(window.prompt('Please enter board width', '10'));
        this.noOfRows = parseInt(window.prompt('Please enter board height', '10'));
        for (var i = 0; i < this.noOfRows; i++) {
            var mArray = [];
            for (var j = 0; j < this.noOfCols; j++) {
                var mCell = new _matrix_cell__WEBPACK_IMPORTED_MODULE_2__["MatrixCell"]();
                mArray.push(mCell);
            }
            this.MRows.push(mArray);
        }
        var targetDots = (this.noOfCols + this.noOfRows) / 2;
        while (this.iDotCounter < targetDots) {
            var rowNum = Math.floor(Math.random() * 10);
            var colNum = Math.floor(Math.random() * 10);
            this.focussedCell = this.MRows[rowNum][colNum];
            if (!this.focussedCell.isDot) {
                this.focussedCell.isDot = true;
                this.iDotCounter++;
            }
        }
        // To land on a cell which is not a dot
        do {
            this.marioRow = Math.floor(Math.random() * 10);
            this.marioCol = Math.floor(Math.random() * 10);
            if (!this.MRows[this.marioRow][this.marioCol].isDot) {
                this.focussedCell = this.MRows[this.marioRow][this.marioCol];
                this.focussedCell.isFocussed = true;
            }
        } while (this.MRows[this.marioRow][this.marioCol].isDot);
    };
    AppComponent.prototype.keyEvent = function (event) {
        switch (event.code) {
            case 'ArrowUp':
                this.moveUp();
                break;
            case 'ArrowDown':
                this.moveDown();
                break;
            case 'ArrowLeft':
                this.moveLeft();
                break;
            case 'ArrowRight':
                this.moveRight();
                break;
        }
    };
    AppComponent.prototype.moveLeft = function () {
        if (this.marioCol > 0) {
            this.focussedCell.isFocussed = false;
            this.focussedCell.isDot = false;
            this.focussedCell = this.MRows[this.marioRow][--this.marioCol];
            this.activateAndCheckCell();
        }
    };
    AppComponent.prototype.moveRight = function () {
        if (this.marioCol !== this.noOfCols - 1) {
            this.focussedCell.isFocussed = false;
            this.focussedCell.isDot = false;
            this.focussedCell = this.MRows[this.marioRow][++this.marioCol];
            this.activateAndCheckCell();
        }
    };
    AppComponent.prototype.moveUp = function () {
        if (this.marioRow > 0) {
            this.focussedCell.isFocussed = false;
            this.focussedCell.isDot = false;
            this.focussedCell = this.MRows[--this.marioRow][this.marioCol];
            this.activateAndCheckCell();
        }
    };
    AppComponent.prototype.moveDown = function () {
        if (this.marioRow !== this.noOfRows - 1) {
            this.focussedCell.isFocussed = false;
            this.focussedCell.isDot = false;
            this.focussedCell = this.MRows[++this.marioRow][this.marioCol];
            this.activateAndCheckCell();
        }
    };
    AppComponent.prototype.activateAndCheckCell = function () {
        this.iCounter++;
        if (this.focussedCell.isDot) {
            this.iDotCounter--;
        }
        if (this.iDotCounter === 0) {
            window.alert('Game Over. Total moves to save princess: ' + this.iCounter);
        }
        this.focussedCell.isDot = false;
        this.focussedCell.isFocussed = true;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:keyup', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], AppComponent.prototype, "keyEvent", null);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/matrix-cell.ts":
/*!********************************!*\
  !*** ./src/app/matrix-cell.ts ***!
  \********************************/
/*! exports provided: MatrixCell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatrixCell", function() { return MatrixCell; });
var MatrixCell = /** @class */ (function () {
    function MatrixCell() {
        this.valval = 1;
    }
    return MatrixCell;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\anand\Desktop\Assignment1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map