"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 5257:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": function() { return /* binding */ TabsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var D_muthus_nbtv_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var D_muthus_nbtv_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs.page */ 3278);






var routes = [{
  path: 'tabs',
  component: _tabs_page__WEBPACK_IMPORTED_MODULE_2__.TabsPage,
  children: [{
    path: 'tab1',
    loadChildren: function loadChildren() {
      return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_tab1_tab1_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab1/tab1.module */ 4265)).then(function (m) {
        return m.Tab1PageModule;
      });
    }
  }, {
    path: 'tab2',
    loadChildren: function loadChildren() {
      return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_tab2_tab2_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab2/tab2.module */ 4250)).then(function (m) {
        return m.Tab2PageModule;
      });
    }
  }, {
    path: 'tab3',
    loadChildren: function loadChildren() {
      return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_tab3_tab3_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab3/tab3.module */ 7586)).then(function (m) {
        return m.Tab3PageModule;
      });
    }
  }, {
    path: 'tab4',
    loadChildren: function loadChildren() {
      return Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_tab4_tab4_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab4/tab4.module */ 2379)).then(function (m) {
        return m.Tab4PageModule;
      });
    }
  }, {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full'
  }]
}, {
  path: '',
  redirectTo: '/tabs/tab1',
  pathMatch: 'full'
}];

var TabsPageRoutingModule = /*#__PURE__*/(0,D_muthus_nbtv_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function TabsPageRoutingModule() {
  (0,D_muthus_nbtv_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TabsPageRoutingModule);
});

TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)]
})], TabsPageRoutingModule);


/***/ }),

/***/ 9483:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": function() { return /* binding */ TabsPageModule; }
/* harmony export */ });
/* harmony import */ var D_muthus_nbtv_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var D_muthus_nbtv_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs-routing.module */ 5257);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page */ 3278);
/* harmony import */ var _components_nbtv_common_nbtv_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/nbtv-common/nbtv-common.module */ 4733);











var TabsPageModule = /*#__PURE__*/(0,D_muthus_nbtv_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function TabsPageModule() {
  (0,D_muthus_nbtv_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TabsPageModule);
});

TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _tabs_routing_module__WEBPACK_IMPORTED_MODULE_2__.TabsPageRoutingModule, _components_nbtv_common_nbtv_common_module__WEBPACK_IMPORTED_MODULE_4__.NbtvCommonModule],
  declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_3__.TabsPage]
})], TabsPageModule);


/***/ }),

/***/ 3278:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": function() { return /* binding */ TabsPage; }
/* harmony export */ });
/* harmony import */ var D_muthus_nbtv_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var D_muthus_nbtv_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_muthus_nbtv_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tabs_page_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tabs.page.html */ 8711);
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tabs.page.scss */ 8758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../app.service */ 8198);








var TabsPage = /*#__PURE__*/(0,D_muthus_nbtv_master_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function TabsPage(appService) {
  var _this = this;

  (0,D_muthus_nbtv_master_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, TabsPage);

  this.appService = appService;
  this.fullscreen = false;
  this.appService.getfullscreensync().subscribe(function (changed) {
    if (changed == 1) {
      _this.fullscreen = true;
    } else {
      _this.fullscreen = false;
    }
  });
});

TabsPage.ctorParameters = function () {
  return [{
    type: _app_service__WEBPACK_IMPORTED_MODULE_4__.AppService
  }];
};

TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-tabs',
  template: _D_muthus_nbtv_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tabs_page_html__WEBPACK_IMPORTED_MODULE_2__["default"],
  styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_3__]
})], TabsPage);


/***/ }),

/***/ 8711:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tabs/tabs.page.html ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\r\n\r\n  <ion-tab-bar slot=\"bottom\" *ngIf=\"!fullscreen\">\r\n    <ion-tab-button tab=\"tab1\">\r\n      <ion-icon name=\"tv-sharp\" color=\"primary\"></ion-icon>\r\n      <ion-label color=\"dark\">Live TV</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tab4\">\r\n      <ion-icon name=\"radio\" color=\"primary\"></ion-icon>\r\n      <ion-label color=\"dark\">Radio</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tab2\">\r\n      <ion-icon name=\"calendar-number-sharp\" color=\"primary\"></ion-icon>\r\n      <ion-label color=\"dark\">Schedule</ion-label>\r\n    </ion-tab-button>\r\n\r\n    <ion-tab-button tab=\"tab3\">\r\n      <ion-icon name=\"card-outline\" color=\"primary\"></ion-icon>\r\n      <ion-label class=\"tab-font\" color=\"dark\">Contact</ion-label>\r\n    </ion-tab-button>\r\n  </ion-tab-bar>\r\n\r\n</ion-tabs>\r\n");

/***/ }),

/***/ 8758:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/***/ (function(module) {

module.exports = ".tab-font {\n  font-family: \"Roboto\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksaUNBQUE7QUFBSiIsImZpbGUiOiJ0YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4udGFiLWZvbnQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59Il19 */";

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts.js.map