"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab3_tab3_module_ts"],{

/***/ 8058:
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageRoutingModule": function() { return /* binding */ Tab3PageRoutingModule; }
/* harmony export */ });
/* harmony import */ var D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3.page */ 2308);






var routes = [{
  path: '',
  component: _tab3_page__WEBPACK_IMPORTED_MODULE_2__.Tab3Page
}];

var Tab3PageRoutingModule = /*#__PURE__*/(0,D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function Tab3PageRoutingModule() {
  (0,D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Tab3PageRoutingModule);
});

Tab3PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], Tab3PageRoutingModule);


/***/ }),

/***/ 7586:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3PageModule": function() { return /* binding */ Tab3PageModule; }
/* harmony export */ });
/* harmony import */ var D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3.page */ 2308);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 456);
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tab3-routing.module */ 8058);
/* harmony import */ var _components_nbtv_common_nbtv_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/nbtv-common/nbtv-common.module */ 4733);













var Tab3PageModule = /*#__PURE__*/(0,D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function Tab3PageModule() {
  (0,D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Tab3PageModule);
});

Tab3PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
  imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_3__.ExploreContainerComponentModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild([{
    path: '',
    component: _tab3_page__WEBPACK_IMPORTED_MODULE_2__.Tab3Page
  }]), _tab3_routing_module__WEBPACK_IMPORTED_MODULE_4__.Tab3PageRoutingModule, _components_nbtv_common_nbtv_common_module__WEBPACK_IMPORTED_MODULE_5__.NbtvCommonModule],
  declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_2__.Tab3Page]
})], Tab3PageModule);


/***/ }),

/***/ 2308:
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab3Page": function() { return /* binding */ Tab3Page; }
/* harmony export */ });
/* harmony import */ var D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_muthus_nbtv_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab3_page_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./tab3.page.html */ 8752);
/* harmony import */ var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab3.page.scss */ 4170);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../app.service */ 8198);
/* harmony import */ var _app_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../app-state.service */ 2548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);









var Tab3Page = /*#__PURE__*/function () {
  function Tab3Page(appStateService, appService) {
    (0,D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Tab3Page);

    this.appStateService = appStateService;
    this.appService = appService;
  }

  (0,D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Tab3Page, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      console.dir(this.appStateService.getAppData());
      this.appData = this.appStateService.getAppData();
    }
  }, {
    key: "onOugoingEvent",
    value: function onOugoingEvent(outgoingEvent) {
      console.dir(outgoingEvent);
      this.appService.handleOutgoingEvent(outgoingEvent);
    }
  }]);

  return Tab3Page;
}();

Tab3Page.ctorParameters = function () {
  return [{
    type: _app_state_service__WEBPACK_IMPORTED_MODULE_5__.AppStateService
  }, {
    type: _app_service__WEBPACK_IMPORTED_MODULE_4__.AppService
  }];
};

Tab3Page = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-tab3',
  template: _D_muthus_nbtv_node_modules_ngtools_webpack_src_loaders_direct_resource_js_tab3_page_html__WEBPACK_IMPORTED_MODULE_2__["default"],
  styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_3__]
})], Tab3Page);


/***/ }),

/***/ 8752:
/*!****************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/tab3/tab3.page.html ***!
  \****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\r\n  <app-profile [profile]=\"appData.nakkubetta\" (profileEvent)=\"onOugoingEvent($event)\"></app-profile>\r\n</ion-content>\r\n");

/***/ }),

/***/ 4170:
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/***/ (function(module) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIzLnBhZ2Uuc2NzcyJ9 */";

/***/ })

}]);
//# sourceMappingURL=src_app_tab3_tab3_module_ts.js.map