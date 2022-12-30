(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 6354:
/*!******************************************!*\
  !*** ./src/app/app-component.service.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponentService": function() { return /* binding */ AppComponentService; }
/* harmony export */ });
/* harmony import */ var D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);






var AppComponentService = /*#__PURE__*/function () {
  function AppComponentService(httpClient) {
    (0,D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AppComponentService);

    this.httpClient = httpClient;
  }
  /**
   * Currently fetches data from the json file. In future can fetch data from
   * a webservice / firebase DB ..
   */


  (0,D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AppComponentService, [{
    key: "fetchAppData",
    value: function fetchAppData() {
      return this.httpClient.get('./assets/data/app_data.json', {
        responseType: 'json'
      });
    }
  }, {
    key: "getAppData",
    value: function getAppData() {
      return this.appData;
    }
  }, {
    key: "setAppData",
    value: function setAppData(appData) {
      this.appData = appData;
    }
  }]);

  return AppComponentService;
}();

AppComponentService.ctorParameters = function () {
  return [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
  }];
};

AppComponentService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], AppComponentService);


/***/ }),

/***/ 3696:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 3252);





var routes = [{
  path: '',
  loadChildren: function loadChildren() {
    return __webpack_require__.e(/*! import() */ "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./tabs/tabs.module */ 9483)).then(function (m) {
      return m.TabsPageModule;
    });
  }
}];

var AppRoutingModule = /*#__PURE__*/(0,D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppRoutingModule() {
  (0,D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppRoutingModule);
});

AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__.PreloadAllModules
  })],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
})], AppRoutingModule);


/***/ }),

/***/ 2548:
/*!**************************************!*\
  !*** ./src/app/app-state.service.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppStateService": function() { return /* binding */ AppStateService; }
/* harmony export */ });
/* harmony import */ var D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 4008);






var AppStateService = /*#__PURE__*/function () {
  function AppStateService() {
    (0,D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AppStateService);

    this.appData = null;
    this.programSchedule = [];
    this.liveTVSource = null;
    this.liveTVSourceSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  }

  (0,D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AppStateService, [{
    key: "getAppData",
    value: function getAppData() {
      return this.appData;
    }
  }, {
    key: "setAppData",
    value: function setAppData(appData) {
      this.appData = appData;
    }
  }, {
    key: "getProgramSchedule",
    value: function getProgramSchedule() {
      return this.programSchedule;
    }
  }, {
    key: "setProgramSchdule",
    value: function setProgramSchdule(schedule) {
      this.programSchedule = schedule;
    }
  }, {
    key: "setLiveTvSource",
    value: function setLiveTvSource(liveTvSource) {
      this.liveTVSource = liveTvSource;
      console.log('Going to multicast the change');
      this.liveTVSourceSubject.next(liveTvSource);
    }
  }, {
    key: "getLiveTvSource",
    value: function getLiveTvSource() {
      return this.liveTVSource;
    }
  }, {
    key: "getLiveTVSourceSubject",
    value: function getLiveTVSourceSubject() {
      return this.liveTVSourceSubject;
    }
  }]);

  return AppStateService;
}();

AppStateService.ctorParameters = function () {
  return [];
};

AppStateService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], AppStateService);


/***/ }),

/***/ 2050:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var D_muthus_nbtv_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 3703);
/* harmony import */ var D_muthus_nbtv_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_muthus_nbtv_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_muthus_nbtv_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 5158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component.scss */ 836);
/* harmony import */ var _app_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-state.service */ 2548);
/* harmony import */ var _node_modules_fortawesome_free_solid_svg_icons_faTv_d__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../node_modules/@fortawesome/free-solid-svg-icons/faTv.d */ 6043);
/* harmony import */ var _node_modules_fortawesome_free_solid_svg_icons_faTv_d__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_node_modules_fortawesome_free_solid_svg_icons_faTv_d__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _app_component_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-component.service */ 6354);










 // import { faTv} from '@fortawesome/fontawesome-free';

var AppComponent = /*#__PURE__*/function () {
  function AppComponent(menu, appComponentService, toastController, appStateService) {
    (0,D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AppComponent);

    this.menu = menu;
    this.appComponentService = appComponentService;
    this.toastController = toastController;
    this.appStateService = appStateService;
    this.faTVIcon = _node_modules_fortawesome_free_solid_svg_icons_faTv_d__WEBPACK_IMPORTED_MODULE_7__.faTv;
    this.nbtvLogoSrc = '../assets/img/logo_contact_us.png';
    this.appData = null;
    this.isDataInitialized = false;
  }

  (0,D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AppComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      var _this = this;

      this.appComponentService.fetchAppData().subscribe(function (response) {
        _this.appData = response;

        _this.appStateService.setAppData(response); // set the live TV source


        _this.appStateService.setLiveTvSource(_this.appData.liveTvURL[0]);

        _this.isDataInitialized = true;
        console.dir(_this.appData);
      }, function (error) {
        console.error(error);
        _this.isDataInitialized = true;

        _this.showErrorMessage();
      });
    } // opens the side navigation when the hamburger menu icon is clicked in the
    // toolbar

  }, {
    key: "openAboutMenuItem",
    value: function openAboutMenuItem() {
      console.log('openAboutMenuItem');
      this.menu.enable(true, 'aboutMenu');
      this.menu.open('aboutMenu');
    }
  }, {
    key: "showErrorMessage",
    value: function showErrorMessage() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/D_muthus_nbtv_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var toast;
        return D_muthus_nbtv_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.toastController.create({
                  color: 'dark',
                  duration: 2000,
                  message: 'Error communicating with server'
                });

              case 2:
                toast = _context.sent;
                _context.next = 5;
                return toast.present();

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }]);

  return AppComponent;
}();

AppComponent.ctorParameters = function () {
  return [{
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.MenuController
  }, {
    type: _app_component_service__WEBPACK_IMPORTED_MODULE_6__.AppComponentService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController
  }, {
    type: _app_state_service__WEBPACK_IMPORTED_MODULE_5__.AppStateService
  }];
};

AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-root',
  template: _D_muthus_nbtv_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_3__["default"],
  styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_4__]
})], AppComponent);


/***/ }),

/***/ 4750:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 3252);
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ 8249);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 3696);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ 2050);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ 6781);
/* harmony import */ var _components_nbtv_common_nbtv_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/nbtv-common/nbtv-common.module */ 4733);
/* harmony import */ var _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/call-number/ngx */ 6143);
/* harmony import */ var _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/screen-orientation/ngx */ 4553);
/* harmony import */ var _awesome_cordova_plugins_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/streaming-media/ngx */ 9196);
















var AppModule = /*#__PURE__*/(0,D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function AppModule() {
  (0,D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, AppModule);
});

AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent],
  entryComponents: [],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule, _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_12__.FontAwesomeModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpClientModule, _components_nbtv_common_nbtv_common_module__WEBPACK_IMPORTED_MODULE_4__.NbtvCommonModule],
  providers: [{
    provide: _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouteReuseStrategy,
    useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicRouteStrategy
  }, _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__.CallNumber, _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_6__.ScreenOrientation, _awesome_cordova_plugins_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_7__.StreamingMedia],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__.AppComponent]
})], AppModule);


/***/ }),

/***/ 8198:
/*!********************************!*\
  !*** ./src/app/app.service.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppService": function() { return /* binding */ AppService; }
/* harmony export */ });
/* harmony import */ var D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var D_muthus_nbtv_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 3703);
/* harmony import */ var D_muthus_nbtv_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_muthus_nbtv_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _types_outgoing_event_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types/outgoing-event-type */ 5346);
/* harmony import */ var _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/call-number/ngx */ 6143);
/* harmony import */ var _capacitor_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @capacitor/browser */ 9337);









var AppService = /*#__PURE__*/function () {
  function AppService(callNumber) {
    (0,D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, AppService);

    this.callNumber = callNumber;
  }

  (0,D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(AppService, [{
    key: "handleOutgoingEvent",
    value: function handleOutgoingEvent(outgoingEvent) {
      console.dir(outgoingEvent);
      var retValue = true;

      switch (outgoingEvent.type) {
        case _types_outgoing_event_type__WEBPACK_IMPORTED_MODULE_3__.OutgoingEventType.EMAIL:
          {
            retValue = this.invokeEmail(outgoingEvent.value);
            break;
          }

        case _types_outgoing_event_type__WEBPACK_IMPORTED_MODULE_3__.OutgoingEventType.WEBSITE:
          {
            this.invokeBrowser(outgoingEvent.value);
            break;
          }

        case _types_outgoing_event_type__WEBPACK_IMPORTED_MODULE_3__.OutgoingEventType.PHONE:
          {
            retValue = this.invokeDiallerApp(outgoingEvent.value);
            break;
          }

        case _types_outgoing_event_type__WEBPACK_IMPORTED_MODULE_3__.OutgoingEventType.WHATSAPP:
          {
            retValue = this.invokeWhatsapp(outgoingEvent.value);
            break;
          }
      }

      return retValue;
    }
  }, {
    key: "invokeDiallerApp",
    value: function invokeDiallerApp(value) {
      var val = false;
      this.callNumber.callNumber(value, false).then(function (response) {
        // do nothing'hbg
        val = true;
      }).catch(function (error) {
        console.error(error);
        val = false;
      });
      return val;
    }
  }, {
    key: "invokeWhatsapp",
    value: function invokeWhatsapp(value) {
      var val = false;
      window.open('whatsapp://send?phone=' + value);
      return val;
    }
  }, {
    key: "invokeBrowser",
    value: function invokeBrowser(value) {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, /*#__PURE__*/D_muthus_nbtv_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var val;
        return D_muthus_nbtv_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                val = false;
                _context.next = 3;
                return _capacitor_browser__WEBPACK_IMPORTED_MODULE_5__.Browser.open({
                  url: value
                });

              case 3:
                return _context.abrupt("return", Promise.resolve(true));

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    }
  }, {
    key: "invokeEmail",
    value: function invokeEmail(value) {
      var val = false;
      var email = {
        to: value,
        subject: 'Nakkubetta TV mobile app Feedback',
        body: 'I would like to share feedback about the Nakkubetta TV mobile app',
        isHtml: true
      };
      /** TODO: fix this
      this.emailComposer.isAvailable().then((available => {
        if(available) {
          this.emailComposer.open(email);
        }
      }));
       */

      return val;
    }
  }]);

  return AppService;
}();

AppService.ctorParameters = function () {
  return [{
    type: _awesome_cordova_plugins_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__.CallNumber
  }];
};

AppService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
  providedIn: 'root'
})], AppService);


/***/ }),

/***/ 8372:
/*!*********************************************************!*\
  !*** ./src/app/components/live-tv/live-tv.component.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LiveTvComponent": function() { return /* binding */ LiveTvComponent; }
/* harmony export */ });
/* harmony import */ var D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var D_muthus_nbtv_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 3703);
/* harmony import */ var D_muthus_nbtv_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_muthus_nbtv_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_muthus_nbtv_node_modules_ngtools_webpack_src_loaders_direct_resource_js_live_tv_component_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./live-tv.component.html */ 1888);
/* harmony import */ var _live_tv_component_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./live-tv.component.scss */ 7003);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _app_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../app-state.service */ 2548);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @awesome-cordova-plugins/screen-orientation/ngx */ 4553);
/* harmony import */ var _awesome_cordova_plugins_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/streaming-media/ngx */ 9196);














var LiveTvComponent = /*#__PURE__*/function () {
  function LiveTvComponent(appStateService, domSanitizer, screenOrientation, streamingMedia, toastController, platform) {
    (0,D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, LiveTvComponent);

    this.appStateService = appStateService;
    this.domSanitizer = domSanitizer;
    this.screenOrientation = screenOrientation;
    this.streamingMedia = streamingMedia;
    this.toastController = toastController;
    this.platform = platform;
    this.appData = null;
    this.isVideoLoaded = false;
    this.selectedSource = null; // be default open the app in portrait mode

    this.isPortait = true;
    this.currentScreenOrientation = 'portrait';
  }

  (0,D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(LiveTvComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      console.log('ngOnInit');
      this.appData = this.appStateService.getAppData(); // lock to portrait mode initially

      this.changeToPortait();
      this.setUpLiveTVPlayer(); // this.changeLiveTVSource();

      this.initializeScreenOrientation();
    }
  }, {
    key: "changeLiveTVSource",
    value: function changeLiveTVSource() {
      var _this = this;

      console.log('changeLiveTVSource');
      this.appStateService.getLiveTVSourceSubject().subscribe(function (response) {
        console.dir(response);
        _this.selectedSource = response;

        _this.setUpLiveTVPlayer();
      }, function (error) {
        console.error(error);

        _this.showErrorMessage();
      });
    }
  }, {
    key: "setUpLiveTVPlayer",
    value: function setUpLiveTVPlayer() {
      console.dir(this.selectedSource);

      if (this.selectedSource.isHLS === true && this.isPortait === false) {
        this.setUpHlsSource();
      } else if (this.selectedSource.isHLS === false && this.isPortait === true) {
        this.setUpIFrameSource();
      }
    }
  }, {
    key: "getSanitizedURL",
    value: function getSanitizedURL(url) {
      console.log(url);
      return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    }
  }, {
    key: "setUpIFrameSource",
    value: function setUpIFrameSource() {
      /* const iframe = this.iframeVideoPlayerComponent.nativeElement;
      console.dir(this.iframeVideoPlayerComponent.nativeElement);
      iframe.addEventListener('load', ()=> {
        console.log('iframe loaded');
      }); */
    }
  }, {
    key: "setUpHlsSource",
    value: function setUpHlsSource() {
      var videoOptions = this.getStreamingVideoOptions();
      this.streamingMedia.playVideo(this.selectedSource.url, videoOptions);
    }
  }, {
    key: "getStreamingVideoOptions",
    value: function getStreamingVideoOptions() {
      var _this2 = this;

      var videoOptions = {
        controls: true,
        orientation: 'landscape',
        shouldAutoClose: true,
        errorCallback: function errorCallback(err) {
          console.error(err);

          _this2.showErrorMessage();
        },
        successCallback: function successCallback() {
          // nothing to do
          console.log('yay!!');
        }
      };
      return videoOptions;
    }
    /** Screen Orientation changes */

  }, {
    key: "changeToLandscape",
    value: function changeToLandscape() {
      this.isPortait = false;
      this.selectedSource = this.appData.liveTvURL[0];

      if (this.platform.is('android')) {
        this.screenOrientation.unlock();
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
      }

      this.setUpLiveTVPlayer();
    }
  }, {
    key: "changeToPortait",
    value: function changeToPortait() {
      this.isPortait = true;
      this.selectedSource = this.appData.liveTvURL[1];

      if (this.platform.is('android')) {
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      }
    }
  }, {
    key: "initializeScreenOrientation",
    value: function initializeScreenOrientation() {
      var _this3 = this;

      this.screenOrientation.onChange().subscribe(function (value) {
        console.log('Orientation changed to ' + _this3.screenOrientation.type);

        if (_this3.currentScreenOrientation !== _this3.screenOrientation.type) {
          _this3.currentScreenOrientation = _this3.screenOrientation.type;

          if (_this3.platform.is('android')) {
            _this3.screenOrientation.unlock();
          } // if the screen orientation is portrait then show iFrame video
          // if the screen orientation is landscape then show HLS video


          if (_this3.screenOrientation.type === 'landscape-primary' || _this3.screenOrientation.type === 'landscape-secondary' || _this3.screenOrientation.type === 'landscape') {
            _this3.isPortait = false;

            _this3.changeToLandscape();
          } else if (_this3.screenOrientation.type === 'portrait-primary' || _this3.screenOrientation.type === 'portrait-secondary' || _this3.screenOrientation.type === 'portrait') {
            _this3.isPortait = true;

            _this3.changeToPortait();
          }

          console.dir(_this3.screenOrientation.type);

          _this3.setUpLiveTVPlayer();
        }
      });
    }
  }, {
    key: "showErrorMessage",
    value: function showErrorMessage() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/D_muthus_nbtv_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var toast;
        return D_muthus_nbtv_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.toastController.create({
                  color: 'dark',
                  duration: 3000,
                  message: 'Error playing the video. Try the alternate server from settings'
                });

              case 2:
                toast = _context.sent;
                _context.next = 5;
                return toast.present();

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }]);

  return LiveTvComponent;
}();

LiveTvComponent.ctorParameters = function () {
  return [{
    type: _app_state_service__WEBPACK_IMPORTED_MODULE_5__.AppStateService
  }, {
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.DomSanitizer
  }, {
    type: _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_6__.ScreenOrientation
  }, {
    type: _awesome_cordova_plugins_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_7__.StreamingMedia
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.Platform
  }];
};

LiveTvComponent.propDecorators = {
  iframeVideoPlayerComponent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ViewChild,
    args: ['video_player_iframe']
  }]
};
LiveTvComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-live-tv',
  template: _D_muthus_nbtv_node_modules_ngtools_webpack_src_loaders_direct_resource_js_live_tv_component_html__WEBPACK_IMPORTED_MODULE_3__["default"],
  styles: [_live_tv_component_scss__WEBPACK_IMPORTED_MODULE_4__]
})], LiveTvComponent);


/***/ }),

/***/ 7902:
/*!*******************************************************************!*\
  !*** ./src/app/components/menu-content/menu-content.component.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MenuContentComponent": function() { return /* binding */ MenuContentComponent; }
/* harmony export */ });
/* harmony import */ var D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_muthus_nbtv_node_modules_ngtools_webpack_src_loaders_direct_resource_js_menu_content_component_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./menu-content.component.html */ 3831);
/* harmony import */ var _menu_content_component_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-content.component.scss */ 8446);
/* harmony import */ var _app_state_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../app-state.service */ 2548);
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../app.service */ 8198);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 4001);









var MenuContentComponent = /*#__PURE__*/function () {
  function MenuContentComponent(appService, appStateService) {
    (0,D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, MenuContentComponent);

    this.appService = appService;
    this.appStateService = appStateService;
    this.selectedTVSource = null;
  }

  (0,D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(MenuContentComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      console.dir(this.appData.liveTvURL);
      this.selectedTVSource = this.appData.liveTvURL[0];
      console.dir(this.appData);
    }
  }, {
    key: "onOugoingEvent",
    value: function onOugoingEvent(outgoingEvent) {
      console.dir(outgoingEvent);
      this.appService.handleOutgoingEvent(outgoingEvent);
    }
  }, {
    key: "changeLiveTVSource",
    value: function changeLiveTVSource(event) {
      console.dir(event.detail.value);
      this.appStateService.setLiveTvSource(event.detail.value);
    }
  }]);

  return MenuContentComponent;
}();

MenuContentComponent.ctorParameters = function () {
  return [{
    type: _app_service__WEBPACK_IMPORTED_MODULE_5__.AppService
  }, {
    type: _app_state_service__WEBPACK_IMPORTED_MODULE_4__.AppStateService
  }];
};

MenuContentComponent.propDecorators = {
  appData: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
  }]
};
MenuContentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-menu-content',
  template: _D_muthus_nbtv_node_modules_ngtools_webpack_src_loaders_direct_resource_js_menu_content_component_html__WEBPACK_IMPORTED_MODULE_2__["default"],
  styles: [_menu_content_component_scss__WEBPACK_IMPORTED_MODULE_3__]
})], MenuContentComponent);


/***/ }),

/***/ 4733:
/*!**************************************************************!*\
  !*** ./src/app/components/nbtv-common/nbtv-common.module.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NbtvCommonModule": function() { return /* binding */ NbtvCommonModule; }
/* harmony export */ });
/* harmony import */ var D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _live_tv_live_tv_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../live-tv/live-tv.component */ 8372);
/* harmony import */ var _program_schedule_program_schedule_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../program-schedule/program-schedule.component */ 2363);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../profile/profile.component */ 6386);
/* harmony import */ var _menu_content_menu_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../menu-content/menu-content.component */ 7902);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 8267);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 8346);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common/http */ 6781);
/* harmony import */ var _radio_radio_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../radio/radio.component */ 1261);
/* harmony import */ var swiper_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! swiper/angular */ 8980);















var NbtvCommonModule = /*#__PURE__*/(0,D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(function NbtvCommonModule() {
  (0,D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, NbtvCommonModule);
});

NbtvCommonModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
  exports: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__.ProfileComponent, _menu_content_menu_content_component__WEBPACK_IMPORTED_MODULE_5__.MenuContentComponent, _program_schedule_program_schedule_component__WEBPACK_IMPORTED_MODULE_3__.ProgramScheduleComponent, _live_tv_live_tv_component__WEBPACK_IMPORTED_MODULE_2__.LiveTvComponent, _radio_radio_component__WEBPACK_IMPORTED_MODULE_6__.RadioComponent],
  declarations: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_4__.ProfileComponent, _menu_content_menu_content_component__WEBPACK_IMPORTED_MODULE_5__.MenuContentComponent, _program_schedule_program_schedule_component__WEBPACK_IMPORTED_MODULE_3__.ProgramScheduleComponent, _live_tv_live_tv_component__WEBPACK_IMPORTED_MODULE_2__.LiveTvComponent, _radio_radio_component__WEBPACK_IMPORTED_MODULE_6__.RadioComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_12__.HttpClientModule, swiper_angular__WEBPACK_IMPORTED_MODULE_13__.SwiperModule],
  providers: []
})], NbtvCommonModule);


/***/ }),

/***/ 6386:
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileComponent": function() { return /* binding */ ProfileComponent; }
/* harmony export */ });
/* harmony import */ var D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_muthus_nbtv_node_modules_ngtools_webpack_src_loaders_direct_resource_js_profile_component_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./profile.component.html */ 8999);
/* harmony import */ var _profile_component_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.component.scss */ 8476);
/* harmony import */ var _types_outgoing_event_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../types/outgoing-event-type */ 5346);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 4001);








var ProfileComponent = /*#__PURE__*/function () {
  function ProfileComponent() {
    (0,D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProfileComponent);

    this.profileEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
  }

  (0,D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProfileComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      console.dir(this.profile);
    }
  }, {
    key: "handleEmail",
    value: function handleEmail(email) {
      console.dir(email);
      var outgoingEvent = {
        type: _types_outgoing_event_type__WEBPACK_IMPORTED_MODULE_4__.OutgoingEventType.EMAIL,
        value: email.id
      };
      this.profileEvent.emit(outgoingEvent);
    }
  }, {
    key: "handlePhone",
    value: function handlePhone(phone) {
      console.dir(phone);
      var outgoingEvent = {
        type: _types_outgoing_event_type__WEBPACK_IMPORTED_MODULE_4__.OutgoingEventType.PHONE,
        value: phone.phNumber
      };

      if (phone.whatsapp) {
        outgoingEvent.type = _types_outgoing_event_type__WEBPACK_IMPORTED_MODULE_4__.OutgoingEventType.WHATSAPP;
      }

      this.profileEvent.emit(outgoingEvent);
    }
  }, {
    key: "handleWebsite",
    value: function handleWebsite(site) {
      console.dir(site);
      var outgoingEvent = {
        type: _types_outgoing_event_type__WEBPACK_IMPORTED_MODULE_4__.OutgoingEventType.WEBSITE,
        value: site.url
      };
      this.profileEvent.emit(outgoingEvent);
    }
  }, {
    key: "handleSocialMedia",
    value: function handleSocialMedia(socialMedia) {
      console.dir(socialMedia);
      var outgoingEvent = {
        type: _types_outgoing_event_type__WEBPACK_IMPORTED_MODULE_4__.OutgoingEventType.WEBSITE,
        value: socialMedia.url
      };
      this.profileEvent.emit(outgoingEvent);
    }
  }]);

  return ProfileComponent;
}();

ProfileComponent.ctorParameters = function () {
  return [];
};

ProfileComponent.propDecorators = {
  profile: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input
  }],
  profileEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Output
  }]
};
ProfileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-profile',
  template: _D_muthus_nbtv_node_modules_ngtools_webpack_src_loaders_direct_resource_js_profile_component_html__WEBPACK_IMPORTED_MODULE_2__["default"],
  styles: [_profile_component_scss__WEBPACK_IMPORTED_MODULE_3__]
})], ProfileComponent);


/***/ }),

/***/ 2363:
/*!***************************************************************************!*\
  !*** ./src/app/components/program-schedule/program-schedule.component.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgramScheduleComponent": function() { return /* binding */ ProgramScheduleComponent; }
/* harmony export */ });
/* harmony import */ var D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var D_muthus_nbtv_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 3703);
/* harmony import */ var D_muthus_nbtv_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_muthus_nbtv_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_muthus_nbtv_node_modules_ngtools_webpack_src_loaders_direct_resource_js_program_schedule_component_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./program-schedule.component.html */ 5239);
/* harmony import */ var _program_schedule_component_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./program-schedule.component.scss */ 4127);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _app_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../app-state.service */ 2548);
/* harmony import */ var _program_schedule_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./program-schedule.service */ 8817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 4001);











var ProgramScheduleComponent = /*#__PURE__*/function () {
  function ProgramScheduleComponent(programScheduleService, appStateService, toastController) {
    (0,D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProgramScheduleComponent);

    this.programScheduleService = programScheduleService;
    this.appStateService = appStateService;
    this.toastController = toastController;
    this.showLoader = false;
    this.next7Days = [];
    this.isDataInitialized = false;
    this.programSchedule = null;
    this.weeklySchedule = [];
  }

  (0,D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProgramScheduleComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      this.getProgramSchdule();
    }
  }, {
    key: "getProgramSchdule",
    value: function getProgramSchdule() {
      var _this = this;

      this.showLoader = true;
      var programSchedule = this.programScheduleService.fetchScheduleList().subscribe(function (response) {
        console.dir(response);

        _this.appStateService.setProgramSchdule(response['schedule']);

        _this.getNext7CalendarDays();

        _this.setSchedule();

        _this.weeklySchedule = response;
        _this.isDataInitialized = true;
        _this.showLoader = false;
      }, function (error) {
        console.error(error);
        _this.showLoader = false;

        _this.showErrorMessage();

        _this.isDataInitialized = true;
      });
    }
  }, {
    key: "getNext7CalendarDays",
    value: function getNext7CalendarDays() {
      this.next7Days = this.programScheduleService.getNext7CalendarDays();
    }
  }, {
    key: "changeSchedule",
    value: function changeSchedule(event) {
      console.dir(event);
      this.setSchedule(event.detail.value);
    }
    /** if no data is passed select the current Date */

  }, {
    key: "setSchedule",
    value: function setSchedule(date) {
      var dayOfWeek = 0;

      if (date != null) {
        dayOfWeek = date.day;
      }

      var sched = this.appStateService.getProgramSchedule();

      if (sched === undefined) {
        sched = this.weeklySchedule;
      }

      this.programSchedule = sched[dayOfWeek];
    }
  }, {
    key: "showErrorMessage",
    value: function showErrorMessage() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, /*#__PURE__*/D_muthus_nbtv_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var toast;
        return D_muthus_nbtv_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.toastController.create({
                  color: 'dark',
                  duration: 2000,
                  message: 'Error communicating with server'
                });

              case 2:
                toast = _context.sent;
                _context.next = 5;
                return toast.present();

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }]);

  return ProgramScheduleComponent;
}();

ProgramScheduleComponent.ctorParameters = function () {
  return [{
    type: _program_schedule_service__WEBPACK_IMPORTED_MODULE_6__.ProgramScheduleService
  }, {
    type: _app_state_service__WEBPACK_IMPORTED_MODULE_5__.AppStateService
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController
  }];
};

ProgramScheduleComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-program-schedule',
  template: _D_muthus_nbtv_node_modules_ngtools_webpack_src_loaders_direct_resource_js_program_schedule_component_html__WEBPACK_IMPORTED_MODULE_3__["default"],
  styles: [_program_schedule_component_scss__WEBPACK_IMPORTED_MODULE_4__]
})], ProgramScheduleComponent);


/***/ }),

/***/ 8817:
/*!*************************************************************************!*\
  !*** ./src/app/components/program-schedule/program-schedule.service.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProgramScheduleService": function() { return /* binding */ ProgramScheduleService; }
/* harmony export */ });
/* harmony import */ var D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);






var ProgramScheduleService = /*#__PURE__*/function () {
  function ProgramScheduleService(httpClient) {
    (0,D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, ProgramScheduleService);

    this.httpClient = httpClient;
  }
  /**
   * For now fetched the schedule list from the json
   * In future this can fetch the program list from any webservice / firebase
   */


  (0,D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(ProgramScheduleService, [{
    key: "fetchScheduleList",
    value: function fetchScheduleList() {
      return this.httpClient.get('../../../assets/data/program_schedule.json');
    }
  }, {
    key: "setScheduleList",
    value: function setScheduleList(scheduleList) {
      this.scheduleList = scheduleList;
    }
  }, {
    key: "getScheduleList",
    value: function getScheduleList() {
      return this.scheduleList;
    }
  }, {
    key: "getNext7CalendarDays",
    value: function getNext7CalendarDays() {
      var next7Days = [];

      try {
        var todayDate = new Date();
        var today = {
          date: todayDate,
          label: 'Today',
          day: todayDate.getDay()
        };
        next7Days.push(today);
        var tomorrowDate = new Date();
        tomorrowDate.setDate(new Date().getDate() + 1);
        var tomorrow = {
          date: tomorrowDate,
          label: 'Tomorrow',
          day: tomorrowDate.getDay()
        };
        next7Days.push(tomorrow);

        for (var counter = 2; counter < 7; counter++) {
          var nextDate = this.addDays(counter);
          next7Days.push(nextDate);
        }
      } catch (err) {
        return null;
      }

      return next7Days;
    }
  }, {
    key: "addDays",
    value: function addDays(noOfDays) {
      var nextDate = new Date();
      nextDate.setDate(new Date().getDate() + noOfDays);
      var dateLabel = nextDate.toLocaleString().split(',')[0];
      var next = {
        date: nextDate,
        label: dateLabel,
        day: nextDate.getDay()
      };
      return next;
    }
  }]);

  return ProgramScheduleService;
}();

ProgramScheduleService.ctorParameters = function () {
  return [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
  }];
};

ProgramScheduleService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], ProgramScheduleService);


/***/ }),

/***/ 1261:
/*!*****************************************************!*\
  !*** ./src/app/components/radio/radio.component.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RadioComponent": function() { return /* binding */ RadioComponent; }
/* harmony export */ });
/* harmony import */ var D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var D_muthus_nbtv_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 3703);
/* harmony import */ var D_muthus_nbtv_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(D_muthus_nbtv_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _D_muthus_nbtv_node_modules_ngtools_webpack_src_loaders_direct_resource_js_radio_component_html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./radio.component.html */ 6839);
/* harmony import */ var _radio_component_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./radio.component.scss */ 5984);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 8099);
/* harmony import */ var _app_state_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../app-state.service */ 2548);
/* harmony import */ var _youtube_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../../youtube.service */ 7195);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 6219);
/* harmony import */ var _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/screen-orientation/ngx */ 4553);
/* harmony import */ var _awesome_cordova_plugins_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @awesome-cordova-plugins/streaming-media/ngx */ 9196);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! swiper */ 4269);















swiper__WEBPACK_IMPORTED_MODULE_9__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_9__.Autoplay, swiper__WEBPACK_IMPORTED_MODULE_9__.Keyboard, swiper__WEBPACK_IMPORTED_MODULE_9__.Pagination, swiper__WEBPACK_IMPORTED_MODULE_9__.Scrollbar, swiper__WEBPACK_IMPORTED_MODULE_9__.Zoom]);

var RadioComponent = /*#__PURE__*/function () {
  function RadioComponent(appStateService, youtubeService, domSanitizer, screenOrientation, streamingMedia, toastController, platform) {
    (0,D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, RadioComponent);

    this.appStateService = appStateService;
    this.youtubeService = youtubeService;
    this.domSanitizer = domSanitizer;
    this.screenOrientation = screenOrientation;
    this.streamingMedia = streamingMedia;
    this.toastController = toastController;
    this.platform = platform;
    this.radioEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_10__.EventEmitter();
    this.isVideoLoaded = false;
    this.selectedSource = null; // be default open the app in portrait mode

    this.isPortait = true;
    this.currentScreenOrientation = 'portrait';
    this.videos = [];
    this.latestvideos = [];
    this.viewedvideos = [];
  }

  (0,D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(RadioComponent, [{
    key: "ngOnInit",
    value: function ngOnInit() {
      console.dir(this.appData); // Play an audio file with options (all options optional)

      var options = {
        bgColor: "#FFFFFF",
        bgImage: '../../../assets/img/radio-logo.jpeg',
        bgImageScale: "fit",
        initFullscreen: false,
        keepAwake: false,
        successCallback: function successCallback() {
          console.log("Player closed without error.");
        },
        errorCallback: function errorCallback(errMsg) {
          console.log("Error! " + errMsg);
        }
      };
      this.streamingMedia.playAudio('http://transcoding.livebox.co.in/liveradio/public/nakkubetta_radio', options); // lock to portrait mode initially

      this.changeToPortait();
      this.initializeScreenOrientation();
      this.getVideos();
      this.getLatestVideos();
      this.getViewedVideos();
    }
  }, {
    key: "getVideos",
    value: function getVideos() {
      var _this = this;

      this.youtubeService.getVideos().subscribe(function (response) {
        _this.videos = response.items;
      }, function (error) {
        console.error(error);

        _this.showErrorMessage();
      });
    }
  }, {
    key: "getLatestVideos",
    value: function getLatestVideos() {
      var _this2 = this;

      this.youtubeService.getLatestVideos().subscribe(function (response) {
        _this2.latestvideos = response.items;
      }, function (error) {
        console.error(error);

        _this2.showErrorMessage();
      });
    }
  }, {
    key: "getViewedVideos",
    value: function getViewedVideos() {
      var _this3 = this;

      this.youtubeService.getViewedVideos().subscribe(function (response) {
        _this3.viewedvideos = response.items;
      }, function (error) {
        console.error(error);

        _this3.showErrorMessage();
      });
    }
  }, {
    key: "setUpLiveTVPlayer",
    value: function setUpLiveTVPlayer() {
      console.dir(this.selectedSource);

      if (this.selectedSource.isHLS === true && this.isPortait === false) {
        this.setUpHlsSource();
      } else if (this.selectedSource.isHLS === false && this.isPortait === true) {
        this.setUpIFrameSource();
      }
    }
  }, {
    key: "getSanitizedURL",
    value: function getSanitizedURL(url) {
      console.log(url);
      return this.domSanitizer.bypassSecurityTrustResourceUrl(url);
    }
  }, {
    key: "setUpIFrameSource",
    value: function setUpIFrameSource() {
      /* const iframe = this.iframeVideoPlayerComponent.nativeElement;
      console.dir(this.iframeVideoPlayerComponent.nativeElement);
      iframe.addEventListener('load', ()=> {
        console.log('iframe loaded');
      }); */
    }
  }, {
    key: "setUpHlsSource",
    value: function setUpHlsSource() {
      var videoOptions = this.getStreamingVideoOptions();
      this.streamingMedia.playVideo(this.selectedSource.url, videoOptions);
    }
  }, {
    key: "getStreamingVideoOptions",
    value: function getStreamingVideoOptions() {
      var _this4 = this;

      var videoOptions = {
        controls: true,
        orientation: 'landscape',
        shouldAutoClose: true,
        errorCallback: function errorCallback(err) {
          console.error(err);

          _this4.showErrorMessage();
        },
        successCallback: function successCallback() {
          // nothing to do
          console.log('yay!!');
        }
      };
      return videoOptions;
    }
    /** Screen Orientation changes */

  }, {
    key: "changeToLandscape",
    value: function changeToLandscape() {
      this.isPortait = false;
      this.selectedSource = this.appData.liveTvURL[0];

      if (this.platform.is('android')) {
        this.screenOrientation.unlock();
        this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
      }

      this.setUpLiveTVPlayer();
    }
  }, {
    key: "changeToPortait",
    value: function changeToPortait() {
      this.isPortait = true;
      this.selectedSource = this.appData.liveTvURL[1];

      if (this.platform.is('android')) {//this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
      }
    }
  }, {
    key: "initializeScreenOrientation",
    value: function initializeScreenOrientation() {
      var _this5 = this;

      this.screenOrientation.onChange().subscribe(function (value) {
        console.log('Orientation changed to ' + _this5.screenOrientation.type);

        if (_this5.currentScreenOrientation !== _this5.screenOrientation.type) {
          _this5.currentScreenOrientation = _this5.screenOrientation.type;

          if (_this5.platform.is('android')) {
            _this5.screenOrientation.unlock();
          } // if the screen orientation is portrait then show iFrame video
          // if the screen orientation is landscape then show HLS video


          if (_this5.screenOrientation.type === 'landscape-primary' || _this5.screenOrientation.type === 'landscape-secondary' || _this5.screenOrientation.type === 'landscape') {
            _this5.isPortait = false;

            _this5.changeToLandscape();
          } else if (_this5.screenOrientation.type === 'portrait-primary' || _this5.screenOrientation.type === 'portrait-secondary' || _this5.screenOrientation.type === 'portrait') {
            _this5.isPortait = true;

            _this5.changeToPortait();
          }

          console.dir(_this5.screenOrientation.type);

          _this5.setUpLiveTVPlayer();
        }
      });
    }
  }, {
    key: "showErrorMessage",
    value: function showErrorMessage() {
      return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, /*#__PURE__*/D_muthus_nbtv_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
        var toast;
        return D_muthus_nbtv_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.toastController.create({
                  color: 'dark',
                  duration: 3000,
                  message: 'Error playing the video. Try the alternate server from settings'
                });

              case 2:
                toast = _context.sent;
                _context.next = 5;
                return toast.present();

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));
    }
  }, {
    key: "checkMoreVideos",
    value: function checkMoreVideos(eve, type) {
      console.log('eve', eve);
    }
  }]);

  return RadioComponent;
}();

RadioComponent.ctorParameters = function () {
  return [{
    type: _app_state_service__WEBPACK_IMPORTED_MODULE_5__.AppStateService
  }, {
    type: _youtube_service__WEBPACK_IMPORTED_MODULE_6__.YoutubeService
  }, {
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer
  }, {
    type: _awesome_cordova_plugins_screen_orientation_ngx__WEBPACK_IMPORTED_MODULE_7__.ScreenOrientation
  }, {
    type: _awesome_cordova_plugins_streaming_media_ngx__WEBPACK_IMPORTED_MODULE_8__.StreamingMedia
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ToastController
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.Platform
  }];
};

RadioComponent.propDecorators = {
  appData: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input
  }],
  radioEvent: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Output
  }]
};
RadioComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-radio',
  template: _D_muthus_nbtv_node_modules_ngtools_webpack_src_loaders_direct_resource_js_radio_component_html__WEBPACK_IMPORTED_MODULE_3__["default"],
  styles: [_radio_component_scss__WEBPACK_IMPORTED_MODULE_4__]
})], RadioComponent);


/***/ }),

/***/ 5346:
/*!**********************************************!*\
  !*** ./src/app/types/outgoing-event-type.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OutgoingEventType": function() { return /* binding */ OutgoingEventType; }
/* harmony export */ });
var OutgoingEventType;

(function (OutgoingEventType) {
  OutgoingEventType[OutgoingEventType["EMAIL"] = 0] = "EMAIL";
  OutgoingEventType[OutgoingEventType["PHONE"] = 1] = "PHONE";
  OutgoingEventType[OutgoingEventType["WEBSITE"] = 2] = "WEBSITE";
  OutgoingEventType[OutgoingEventType["WHATSAPP"] = 3] = "WHATSAPP";
})(OutgoingEventType || (OutgoingEventType = {}));

/***/ }),

/***/ 7195:
/*!************************************!*\
  !*** ./src/app/youtube.service.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "YoutubeService": function() { return /* binding */ YoutubeService; }
/* harmony export */ });
/* harmony import */ var D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 5960);
/* harmony import */ var D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 9367);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 8806);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 4001);






var YoutubeService = /*#__PURE__*/function () {
  function YoutubeService(httpClient) {
    (0,D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, YoutubeService);

    this.httpClient = httpClient;
    this.channel = 'UCIztcOKnrVrXdBjI24CnSHw';
    this.playlist = 'UUIztcOKnrVrXdBjI24CnSHw';
    this.apiBase = 'https://www.googleapis.com/youtube/v3/playlistItems?key=AIzaSyA4LvNqf079wOTTxB2LlUy2IVXr_iq5fto&part=snippet&maxResults=50&playlistId=';
    this.apiBaseSort = 'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&safeSearch=none&maxResults=20&key=AIzaSyA4LvNqf079wOTTxB2LlUy2IVXr_iq5fto&channelId=';
  }
  /**
   * Fetching data from youtube data api v3
   */


  (0,D_muthus_nbtv_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(YoutubeService, [{
    key: "getVideos",
    value: function getVideos() {
      var options = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
          'Content-Type': 'application/json'
        }),
        'xhrFields': {
          'withCredentials': true
        }
      }; //{responseType: 'json'}

      return this.httpClient.get(this.apiBaseSort + this.channel + '&order=rating', options);
    }
  }, {
    key: "getLatestVideos",
    value: function getLatestVideos() {
      var options = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
          'Content-Type': 'application/json'
        }),
        'xhrFields': {
          'withCredentials': true
        }
      }; //{responseType: 'json'}

      return this.httpClient.get(this.apiBaseSort + this.channel + '&order=date', options);
    }
  }, {
    key: "getViewedVideos",
    value: function getViewedVideos() {
      var options = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpHeaders({
          'Content-Type': 'application/json'
        }),
        'xhrFields': {
          'withCredentials': true
        }
      }; //{responseType: 'json'}

      return this.httpClient.get(this.apiBaseSort + this.channel + '&order=viewCount', options);
    }
  }]);

  return YoutubeService;
}();

YoutubeService.ctorParameters = function () {
  return [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
  }];
};

YoutubeService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], YoutubeService);


/***/ }),

/***/ 4509:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
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

/***/ 271:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 4001);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 2577);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 4750);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 4509);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}

(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(function (err) {
  return console.log(err);
});

/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var map = {
	"./ion-accordion_2.entry.js": [
		3477,
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		7196,
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		8081,
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		5017,
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		9721,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		9216,
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		6612,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		2694,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		2938,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		1379,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		7552,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		7218,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		4398,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		4134,
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		6836,
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		6397,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		3296,
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		2413,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		9411,
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		9133,
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		9003,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		6065,
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		6991,
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		2947,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		5919,
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		3109,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		9459,
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		301,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3799,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		2140,
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		6197,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		1975,
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		8387,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		8659,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		6404,
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		5253,
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		2619,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		2871,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		7668,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		5342,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		174,
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		6185,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		7337,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		4833,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		9468,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5705,
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		7463,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function() { return Object.keys(map); };
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 5158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\r\n\r\n  <!-- add side menu -->\r\n  <ion-menu side=\"start\" contentId=\"menuContent\" menuId=\"aboutMenu\" class=\"menu-font\" *ngIf=\"appData\">\r\n    <ion-header>\r\n      <ion-toolbar translucent>\r\n        <ion-title>{{appData.title}}</ion-title>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <ion-content>\r\n      <app-menu-content [appData]=\"appData\"></app-menu-content>\r\n    </ion-content>\r\n  </ion-menu>\r\n\r\n\r\n  <!-- add toolbar -->\r\n  <ion-header>\r\n    <ion-toolbar>\r\n      <!-- nbtv logo -->\r\n\r\n      <!-- Navigation Drawer Menu-->\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button (click)=\"openAboutMenuItem()\">\r\n          <ion-icon  name=\"menu\" color=\"primary\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n      <ion-title>  \r\n        <ion-img [src]=\"nbtvLogoSrc\" class=\"nbtv-logo-center-xxsmall\"></ion-img>\r\n        </ion-title>\r\n    </ion-toolbar>\r\n    </ion-header>\r\n\r\n    <ion-content>\r\n      <ion-progress-bar type=\"indeterminate\" *ngIf=\"isDataInitialized\"></ion-progress-bar>\r\n      <ion-router-outlet id=\"menuContent\"></ion-router-outlet>\r\n    </ion-content>\r\n</ion-app>\r\n");

/***/ }),

/***/ 1888:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/live-tv/live-tv.component.html ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- iframe video player will be shown only when source 2/3 is selected. Source 1 will play hls file -->\r\n<ion-grid class=\"portrait-mode-center\" *ngIf=\"selectedSource !== null && isPortait === true \">\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-item>\r\n        <iframe id=\"nbtv_video_player\" #video_player_iframe [src]=\"getSanitizedURL(selectedSource.url)\" class=\"nbtv-livetv-iframe-portrait\" >\r\n        </iframe>\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-button expand=\"block\" color=\"tertiary\" (click)=\"changeToLandscape()\" color=\"light\">\r\n        View in Full Screen<ion-icon name=\"expand-outline\" color=\"dark\"></ion-icon>\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n");

/***/ }),

/***/ 3831:
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/menu-content/menu-content.component.html ***!
  \************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- contains the Settings , Developer profile & version/about text for nbtv-->\r\n\r\n<ion-grid>\r\n  <!-- Settings row -->\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-card class=\"card-background-light\">\r\n        <ion-card-header>\r\n          <ion-card-subtitle>Settings</ion-card-subtitle>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n\r\n          <!-- Dark mode toggle-->\r\n          <ion-item>\r\n            <ion-label>Dark Mode</ion-label>\r\n            <ion-toggle slot=\"end\" name=\"apple\" color=\"dark\" [checked]=\"false\" disabled=\"true\"></ion-toggle>\r\n          </ion-item>\r\n\r\n          <!--  Select the source of the live tv-->\r\n          <ion-item>\r\n            <ion-label>TV Source</ion-label>\r\n            <ion-select interface=\"popover\" (ionChange)=\"changeLiveTVSource($event)\" [(ngModel)]=\"selectedTVSource\" disabled=\"true\">\r\n              <ion-select-option *ngFor=\"let url of appData.liveTvURL\" [value]=\"url\">\r\n                {{url.name}}\r\n              </ion-select-option>\r\n            </ion-select>\r\n          </ion-item>\r\n\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <!-- version/text row-->\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-card class=\"card-background-light\">\r\n        <ion-card-header>\r\n          <ion-card-subtitle>About Us</ion-card-subtitle>\r\n        </ion-card-header>\r\n        <ion-card-content>\r\n          <ion-item-divider>\r\n            <ion-label class=\"ion-text-wrap\">\r\n              {{appData.description1}}\r\n            </ion-label>\r\n          </ion-item-divider>\r\n        </ion-card-content>\r\n      </ion-card>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <!-- Developer profile row-->\r\n  <ion-row>\r\n    <ion-col>\r\n        <app-profile [profile]=\"appData.developer\" (profileEvent)=\"onOugoingEvent($event)\"></app-profile>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  \r\n\r\n</ion-grid>\r\n");

/***/ }),

/***/ 8999:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/profile/profile.component.html ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Display as a card -->\r\n<ion-card class=\"card-background-light\">\r\n    <ion-card-header>\r\n        <ion-card-subtitle>{{profile.title}}</ion-card-subtitle>\r\n    </ion-card-header>\r\n    <ion-img *ngIf=\"profile.about.logo !== ''\"  [src]=\"profile.about.logo\" \r\n             class=\"nbtv-logo-center-small\">\r\n    </ion-img>\r\n    <ion-card-content>\r\n        <ion-grid>\r\n            <!-- 1st row : line 1 & line 2-->\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-label>\r\n                    <h2>{{profile.about.line1}}</h2>\r\n                    <h3>{{profile.about.line2}}</h3>\r\n                    </ion-label>\r\n                </ion-col>\r\n            </ion-row>\r\n\r\n            <!-- 2nd row : contact details -->\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-label>Contact</ion-label>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n\r\n                <!-- 1st col: email -->\r\n                <ion-col>\r\n                    <ion-button (click)=\"handleEmail(profile.contact.email)\" color=\"tertiary\">\r\n                        <ion-icon [name]=\"profile.contact.email.logo\" [color]=\"profile.contact.email.color\"></ion-icon>\r\n                    </ion-button>\r\n                </ion-col>\r\n\r\n                <!-- 2nd col: phone -->\r\n                <ion-col>\r\n                    <ion-button (click)=\"handlePhone(profile.contact.phone[0])\" color=\"tertiary\">\r\n                        <ion-icon [name]=\"profile.contact.phone[0].logo\" [color]=\"profile.contact.phone[0].color\"></ion-icon>\r\n                    </ion-button>\r\n                </ion-col>\r\n\r\n                <!-- 3rd col: alt phone-->\r\n                <ion-col *ngIf=\"profile.contact.phone.length > 1\">\r\n                    <ion-button (click)=\"handlePhone(profile.contact.phone[1])\" color=\"tertiary\">\r\n                        <ion-icon [name]=\"profile.contact.phone[1].logo\" [color]=\"profile.contact.phone[1].color\"></ion-icon>\r\n                    </ion-button>\r\n                </ion-col>\r\n                \r\n                <!-- 4th col: website -->\r\n                <ion-col *ngIf=\"profile.contact.website !== undefined\">\r\n                    <ion-button (click)=\"handleWebsite(profile.contact.website)\" color=\"tertiary\">\r\n                        <ion-icon [name]=\"profile.contact.website.logo\" [color]=\"profile.contact.website.color\"></ion-icon>\r\n                    </ion-button>\r\n                </ion-col>\r\n            </ion-row>\r\n\r\n            <!-- 3d row: Social Media-->\r\n            <ion-row>\r\n                <ion-col>\r\n                    <ion-label>Follow</ion-label>\r\n                </ion-col>\r\n            </ion-row>\r\n            <ion-row>\r\n                <ion-col *ngFor=\"let socMedia of profile.socialMedia\">\r\n                    <ion-button (click)=\"handleSocialMedia(socMedia)\" color=\"tertiary\">\r\n                        <ion-icon [name]=\"socMedia.logo\" [color]=\"socMedia.color\"></ion-icon>\r\n                    </ion-button>\r\n                </ion-col>\r\n            </ion-row>\r\n        </ion-grid>      \r\n    </ion-card-content>\r\n</ion-card>");

/***/ }),

/***/ 5239:
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/program-schedule/program-schedule.component.html ***!
  \********************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-progress-bar type=\"indeterminate\" *ngIf=\"showLoader === true\"></ion-progress-bar>\r\n\r\n<ion-grid *ngIf=\"isDataInitialized === true\">\r\n  \r\n  <!-- 1st row for showing the next 7 calendar days -->\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-segment (ionChange)=\"changeSchedule($event)\" scrollable=\"true\">\r\n        <ion-segment-button *ngFor=\"let schedule of next7Days\" [value]=\"schedule\">\r\n          <ion-label>{{schedule.label}}</ion-label>\r\n        </ion-segment-button>\r\n      </ion-segment>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n  <!-- 2nd row for showing the schedule -->\r\n  <ion-row>\r\n    <ion-col>\r\n      <ion-list>\r\n        <ion-item *ngFor=\"let program of programSchedule.program\">\r\n          <ion-label>\r\n            <h3>{{program.time}}</h3>\r\n            <h2>{{program.name}}</h2>\r\n          </ion-label>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-col>\r\n  </ion-row>\r\n\r\n\r\n</ion-grid>\r\n");

/***/ }),

/***/ 6839:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/components/radio/radio.component.html ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-grid class=\"portrait-mode-center radio-player\" *ngIf=\"selectedSource !== null\">\r\n  <ion-row>\r\n    <ion-col class=\"radio-player-col\">\r\n      <!-- <ion-item>\r\n        <iframe id=\"nbtv_video_player\" #video_player_iframe [src]=\"getSanitizedURL('http://transcoding.livebox.co.in/liveradio/public/nakkubetta_radio')\" class=\"nbtv-livetv-iframe-portrait\" >\r\n        </iframe>\r\n      </ion-item> -->\r\n    </ion-col>\r\n  </ion-row>\r\n</ion-grid>\r\n\r\n<div>\r\n    <h5 class=\"sub-heading\"><b>Trending</b></h5>\r\n    <ion-grid>\r\n<ion-row>\r\n    <swiper [slidesPerView]=\"isPortait?2:3\" [zoom]=\"true\" (reachEnd)=\"checkMoreVideos($event,1)\" style=\"\">\r\n    <ng-container *ngFor=\"let video of videos\">\r\n            <ng-template swiperSlide>\r\n              <ion-col class=\"slide-col\">\r\n                <ion-img [src]=\"video.snippet.thumbnails.medium.url\"></ion-img>\r\n                <!-- <ion-label>{{video.snippet.title}}</ion-label> -->\r\n              </ion-col>\r\n            </ng-template>\r\n        </ng-container>\r\n  </swiper>\r\n  </ion-row>\r\n</ion-grid>\r\n</div>\r\n\r\n\r\n<div>\r\n    <h5 class=\"sub-heading\"><b>Latest</b></h5>\r\n    <ion-grid>\r\n<ion-row>\r\n    <swiper [slidesPerView]=\"isPortait?2:3\" [zoom]=\"true\" (reachEnd)=\"checkMoreVideos($event,1)\" style=\"\">\r\n    <ng-container *ngFor=\"let video of latestvideos\">\r\n            <ng-template swiperSlide>\r\n              <ion-col class=\"slide-col\">\r\n                <ion-img [src]=\"video.snippet.thumbnails.medium.url\"></ion-img>\r\n                <!-- <ion-label>{{video.snippet.title}}</ion-label> -->\r\n              </ion-col>\r\n            </ng-template>\r\n        </ng-container>\r\n  </swiper>\r\n  </ion-row>\r\n</ion-grid>\r\n</div>\r\n\r\n<div>\r\n    <h5 class=\"sub-heading\"><b>Mostly Viewed</b></h5>\r\n    <ion-grid>\r\n<ion-row>\r\n    <swiper [slidesPerView]=\"isPortait?2:3\" [zoom]=\"true\" (reachEnd)=\"checkMoreVideos($event,1)\" style=\"\">\r\n    <ng-container *ngFor=\"let video of viewedvideos\">\r\n            <ng-template swiperSlide>\r\n              <ion-col class=\"slide-col\">\r\n                <ion-img [src]=\"video.snippet.thumbnails.medium.url\"></ion-img>\r\n                <!-- <ion-label>{{video.snippet.title}}</ion-label> -->\r\n              </ion-col>\r\n            </ng-template>\r\n        </ng-container>\r\n  </swiper>\r\n  </ion-row>\r\n</ion-grid>\r\n</div>");

/***/ }),

/***/ 836:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = ".nbtv-logo-center-small {\n  height: 25vh;\n  width: 25vw;\n  margin: auto;\n}\n\n.nbtv-logo-center-xxsmall {\n  height: 25px;\n  width: 25px;\n}\n\n.menu-font {\n  font-family: \"Roboto\", sans-serif;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGlDQUFBO0FBQ0oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5idHYtbG9nby1jZW50ZXItc21hbGwge1xyXG4gICAgaGVpZ2h0OiAyNXZoO1xyXG4gICAgd2lkdGg6IDI1dnc7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5uYnR2LWxvZ28tY2VudGVyLXh4c21hbGwge1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbn1cclxuXHJcbi5tZW51LWZvbnQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59Il19 */";

/***/ }),

/***/ 7003:
/*!***********************************************************!*\
  !*** ./src/app/components/live-tv/live-tv.component.scss ***!
  \***********************************************************/
/***/ (function(module) {

"use strict";
module.exports = ".nbtv-livetv-iframe-portrait {\n  width: 100vw;\n  /* set height based on the width in portait mode*/\n  height: 56.25vw;\n  border: 0;\n  margin: auto;\n}\n\n.nbtv-livetv-iframe-landscape {\n  width: 100vw;\n  height: 100vh;\n}\n\n.portrait-mode-center {\n  padding-top: 35%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpdmUtdHYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsaURBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUE7RUFDSSxnQkFBQTtBQUNKIiwiZmlsZSI6ImxpdmUtdHYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmJ0di1saXZldHYtaWZyYW1lLXBvcnRyYWl0IHtcclxuICAgIHdpZHRoOiAxMDB2dztcclxuICAgIC8qIHNldCBoZWlnaHQgYmFzZWQgb24gdGhlIHdpZHRoIGluIHBvcnRhaXQgbW9kZSovXHJcbiAgICBoZWlnaHQ6IGNhbGMoKDkvMTYpKiAxMDB2dyk7IFxyXG4gICAgYm9yZGVyOiAwO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4ubmJ0di1saXZldHYtaWZyYW1lLWxhbmRzY2FwZSB7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4ucG9ydHJhaXQtbW9kZS1jZW50ZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDM1JTtcclxufSJdfQ== */";

/***/ }),

/***/ 8446:
/*!*********************************************************************!*\
  !*** ./src/app/components/menu-content/menu-content.component.scss ***!
  \*********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = ".card-background-light {\n  background-color: #FFFFFF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUtY29udGVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FBQ0oiLCJmaWxlIjoibWVudS1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtYmFja2dyb3VuZC1saWdodCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG59Il19 */";

/***/ }),

/***/ 8476:
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.scss ***!
  \***********************************************************/
/***/ (function(module) {

"use strict";
module.exports = ".card-background-light {\n  background-color: #FFFFFF;\n}\n\n.nbtv-logo-center-small {\n  /** \n  height: 40vh;\n  **/\n  width: 40vw;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBQTtBQUNKOztBQUVBO0VBQ0k7O0lBQUE7RUFHQSxXQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6InByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1iYWNrZ3JvdW5kLWxpZ2h0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuXHJcbi5uYnR2LWxvZ28tY2VudGVyLXNtYWxsIHtcclxuICAgIC8qKiBcclxuICAgIGhlaWdodDogNDB2aDtcclxuICAgICoqL1xyXG4gICAgd2lkdGg6IDQwdnc7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn0iXX0= */";

/***/ }),

/***/ 4127:
/*!*****************************************************************************!*\
  !*** ./src/app/components/program-schedule/program-schedule.component.scss ***!
  \*****************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9ncmFtLXNjaGVkdWxlLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 5984:
/*!*******************************************************!*\
  !*** ./src/app/components/radio/radio.component.scss ***!
  \*******************************************************/
/***/ (function(module) {

"use strict";
module.exports = ".card-background-light {\n  background-color: #FFFFFF;\n}\n\n.nbtv-logo-center-small {\n  /** \n  height: 40vh;\n  **/\n  width: 40vw;\n  margin: auto;\n}\n\n.radio-player-col {\n  padding: 0px;\n}\n\n.radio-player-col .item {\n  --padding-start: 0px;\n  --inner-padding-end: 0px;\n}\n\n#nbtv_video_player {\n  width: 100vw;\n}\n\n.sub-heading {\n  padding: 10px 10px 0 10px;\n  margin: 0px;\n}\n\n.radio-player {\n  background-image: url('radio-logo.jpeg');\n  background-repeat: no-repeat;\n  background-position: center;\n  min-height: 250px;\n  background-attachment: fixed;\n}\n\n.slide-col {\n  padding: 0px;\n  cursor: pointer;\n}\n\n.swiper-slide:hover {\n  border: 3px solid #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJhZGlvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQUE7QUFDSjs7QUFFQTtFQUNJOztJQUFBO0VBR0EsV0FBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNDLFlBQUE7QUFFRDs7QUFBQTtFQUNDLG9CQUFBO0VBQ0Esd0JBQUE7QUFHRDs7QUFEQTtFQUNDLFlBQUE7QUFJRDs7QUFGQTtFQUNDLHlCQUFBO0VBQ0EsV0FBQTtBQUtEOztBQUhBO0VBQ0Msd0NBQUE7RUFDRyw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtBQU1KOztBQUpBO0VBQ0MsWUFBQTtFQUNBLGVBQUE7QUFPRDs7QUFKQTtFQUNDLHNCQUFBO0FBT0QiLCJmaWxlIjoicmFkaW8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZC1iYWNrZ3JvdW5kLWxpZ2h0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbn1cclxuXHJcbi5uYnR2LWxvZ28tY2VudGVyLXNtYWxsIHtcclxuICAgIC8qKiBcclxuICAgIGhlaWdodDogNDB2aDtcclxuICAgICoqL1xyXG4gICAgd2lkdGg6IDQwdnc7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuLnJhZGlvLXBsYXllci1jb2x7XHJcblx0cGFkZGluZzowcHg7XHJcbn1cclxuLnJhZGlvLXBsYXllci1jb2wgLml0ZW17XHJcblx0LS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcblx0LS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG59XHJcbiNuYnR2X3ZpZGVvX3BsYXllcntcclxuXHR3aWR0aDogMTAwdnc7XHJcbn1cclxuLnN1Yi1oZWFkaW5ne1xyXG5cdHBhZGRpbmc6IDEwcHggMTBweCAwIDEwcHg7XHJcblx0bWFyZ2luOiAwcHg7XHJcbn1cclxuLnJhZGlvLXBsYXllcntcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvcmFkaW8tbG9nby5qcGVnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgbWluLWhlaWdodDogMjUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG59XHJcbi5zbGlkZS1jb2x7XHJcblx0cGFkZGluZzogMHB4O1xyXG5cdGN1cnNvcjpwb2ludGVyO1xyXG59XHJcblxyXG4uc3dpcGVyLXNsaWRlOmhvdmVye1xyXG5cdGJvcmRlcjogM3B4IHNvbGlkICNjY2M7XHJcbn0iXX0= */";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(271); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map