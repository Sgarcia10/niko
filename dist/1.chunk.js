webpackJsonp([1],{

/***/ "../../../../../src/app/admin/admin-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cuestionario_cuestionario_component__ = __webpack_require__("../../../../../src/app/admin/cuestionario/cuestionario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__question_question_component__ = __webpack_require__("../../../../../src/app/admin/question/question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guards_auth_guard_service__ = __webpack_require__("../../../../../src/app/_guards/auth-guard.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var adminRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__admin_component__["a" /* AdminComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard_service__["a" /* AuthGuard */]],
        children: [
            {
                path: '',
                canActivateChild: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard_service__["a" /* AuthGuard */]],
                children: [
                    { path: 'cuestionario', component: __WEBPACK_IMPORTED_MODULE_3__cuestionario_cuestionario_component__["a" /* CuestionarioComponent */] },
                    { path: 'cuestionario/question', component: __WEBPACK_IMPORTED_MODULE_4__question_question_component__["a" /* QuestionComponent */] },
                    { path: '', redirectTo: 'cuestionario' }
                ]
            }
        ]
    }
];
var AdminRoutingModule = (function () {
    function AdminRoutingModule() {
    }
    return AdminRoutingModule;
}());
AdminRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(adminRoutes)
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]
        ]
    })
], AdminRoutingModule);

//# sourceMappingURL=admin-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-cover{\n  \tbackground: url(" + __webpack_require__("../../../../../src/assets/bg-pattern.png") + "),#b66d21;\n  \tbackground: url(" + __webpack_require__("../../../../../src/assets/bg-pattern.png") + "),linear-gradient(to right,#b66d21,#99401f);\n}\n\n.card-block{\n  padding: 0;\n  background-color: transparent;\n}\n\n.card{\n  padding: 0;\n  background-color: transparent;\n  border: none none none none;\n  border-width: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-cover\" [style.min-height.px]=\"height\" >\n<div class=\"container container-full\" >\n  <div class=\"container\">\n  <div class=\"card\">\n    <div class=\"card-block\">\n  <app-toolbar></app-toolbar>\n  <router-outlet></router-outlet>\n  </div>\n  </div>\n  </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = (function () {
    function AdminComponent(ngZone) {
        var _this = this;
        window.onresize = function (e) {
            ngZone.run(function () {
                _this.height = window.innerHeight;
            });
        };
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.height = window.innerHeight;
    };
    return AdminComponent;
}());
AdminComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__("../../../../../src/app/admin/admin.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/admin.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]) === "function" && _a || Object])
], AdminComponent);

var _a;
//# sourceMappingURL=admin.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_custom_http__ = __webpack_require__("../../../../../src/app/_helpers/custom-http.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__admin_routing_module__ = __webpack_require__("../../../../../src/app/admin/admin-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__toolbar_toolbar_component__ = __webpack_require__("../../../../../src/app/admin/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cuestionario_cuestionario_component__ = __webpack_require__("../../../../../src/app/admin/cuestionario/cuestionario.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__question_question_component__ = __webpack_require__("../../../../../src/app/admin/question/question.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AdminModule = (function () {
    function AdminModule() {
    }
    return AdminModule;
}());
AdminModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__admin_routing_module__["a" /* AdminRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__admin_component__["a" /* AdminComponent */],
            __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_7__toolbar_toolbar_component__["a" /* ToolbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__cuestionario_cuestionario_component__["a" /* CuestionarioComponent */],
            __WEBPACK_IMPORTED_MODULE_10__question_question_component__["a" /* QuestionComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__helpers_custom_http__["a" /* CustomHttpProvider */],
            __WEBPACK_IMPORTED_MODULE_9__services_index__["f" /* DialogService */],
            __WEBPACK_IMPORTED_MODULE_9__services_index__["g" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_9__services_index__["d" /* QuestionService */]
        ]
    })
], AdminModule);

//# sourceMappingURL=admin.module.js.map

/***/ }),

/***/ "../../../../../src/app/admin/assets/add.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "add.7384a6249bc6857cd726.svg";

/***/ }),

/***/ "../../../../../src/app/admin/assets/addQ.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "addQ.cbb80d256f8ec0caaff8.svg";

/***/ }),

/***/ "../../../../../src/app/admin/assets/chart.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "chart.587198f02034836edb15.svg";

/***/ }),

/***/ "../../../../../src/app/admin/assets/form.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "form.8e3a63ef9d30e500065c.svg";

/***/ }),

/***/ "../../../../../src/app/admin/assets/list-white.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "list-white.f867902d66475c7b36f4.svg";

/***/ }),

/***/ "../../../../../src/app/admin/assets/list.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "list.5ef2211aeee57bfcbab4.svg";

/***/ }),

/***/ "../../../../../src/app/admin/assets/search.svg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "search.b353383887a71c84f2ec.svg";

/***/ }),

/***/ "../../../../../src/app/admin/cuestionario/cuestionario.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card{\n  background-color: transparent;\n  border-color: rgb(212, 213, 233);\n}\n\n.card-block{\n  padding: 0;\n}\n\n.container{\n  padding: 10px;\n  max-width: 100%;\n  position: relative;\n}\n\n.card-header{\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  position: relative;\n  min-height: 30px;\n  background-color: rgba(198, 149, 154, 0.69);\n}\n\n.category-text{\n  margin-left: 18px;\n  font-size: 22px;\n  font-weight: bold;\n  padding: 0;\n  max-width: auto;\n  word-wrap: break-word;\n  /*min-height: 55px;*/\n}\n\n.container-questions{\n  margin: 0;\n  padding: 10px;\n}\n\n.row-questions{\n  position: relative;\n  border-style:  none none solid none;\n  border-width: thin;\n  border-color: #DFDFDF;\n  margin-left: 0;\n  margin-right: 0;\n  margin-bottom: 10px;\n  vertical-align: middle;\n  min-height: 45px;\n}\n\n.category-buttons{\n  text-align: center;\n}\n\n.category-button-edit{\n  background-color: transparent;\n  color: white;\n}\n\n.category-button-delete{\n  background-color: transparent;\n  color: white;\n  border-left: 1px solid white;\n}\n\n.category-button:hover{\n  font-size: 0.9em;\n}\n\n.pos-question{\n  margin: 0;\n  line-height: 30px;\n}\n\n.question-text{\n  margin: 0;\n  line-height: 25px;\n}\n\n.col-q{\n  min-height: inherit;\n}\n\n.col-questions{\n  padding: 0;\n  position: relative;\n  top: 50%;\n  text-align: center;\n  margin-top: -0.9em;\n  min-height: 45px;\n\n}\n\n.ng-valid[required], .ng-valid.required  {\n  border-left: 5px solid #42A948; /* green */\n}\n\n.ng-invalid:not(form)  {\n  border-left: 5px solid #a94442; /* red */\n}\n\n.alert{\n  position: absolute;\n}\n\n.form-group{\n  margin : 0;\n}\n\n.overlay {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0,0,0,0.4);\n    z-index: 1;\n}\n\n.input-category{\n  position: absolute;\n  background-color: transparent;\n  border-top: none;\n  border-left: none;\n  border-bottom-width: thin;\n  border-bottom-color: black;\n  z-index: inherit;\n}\n\n.input-category-name{\n  background-color: transparent;\n  color: white;\n  border-style: none none solid none;\n  border-color: white;\n}\n\ninput[type='text'] { font-size: 24px; color: white;}\n\n#add-category-text{\n  position: relative;\n\n  vertical-align: middle;\n  color: white;\n  line-height: 58px;\n  font-size: 35px;\n  font-family: 'Roboto';\n  font-weight: 400;\n  text-align: center;\n  transition: all 0.03s;\n}\n\n.add-category{\n  margin-top: 15px;\n  min-width: 100%;\n  height: auto;\n  text-align: center;\n}\n\n.add-category-button {\n\tcolor: #fff;\n\tborder: 1px solid;\n\tborder-radius: 300px;\n\tpadding: 15px 45px;\n\tfont-size: 16px;\n  transition: all 0.3s;\n}\n\n.add-category-button:hover {\n  transition: all 0.3s;\n  background-color: rgba(219, 192, 121, 0.83);\n  font-weight: bolder;\n}\n\n.add-category-button:active {\n  transition: all 0.3s;\n  background-color: rgba(219, 192, 121, 0.83);\n  font-weight: bolder;\n}\n\n.add-button{\n  background-color: rgb(226, 199, 17);\n  border-color: rgb(226, 199, 17);\n}\n.remove-button{\n  background-color: rgb(196, 50, 68);\n  border-color: rgb(196, 50, 68);\n}\n.add-up-button{\n  background-color: rgb(226, 199, 17);\n  border-color: rgb(226, 199, 17);\n}\n\n.add-svg {\n  background-image: url(" + __webpack_require__("../../../../../src/app/admin/assets/add.svg") + ");\n  background-position: center;\n  vertical-align: middle;\n  display: inline-block;\n  background-repeat: no-repeat;\n  height: 15px;\n  width: 15px;\n}\n\n.add-question{\n  min-width: 100%;\n  height: auto;\n  text-align: center;\n  padding-right: 25px;\n  margin-bottom: 15px;\n}\n\n.add-question-button{\n  background-image: url(" + __webpack_require__("../../../../../src/app/admin/assets/addQ.svg") + ");\n  border-width: 0;\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.question-button{\n  height: 30px;\n  width: 30px;\n  vertical-align: middle;\n  padding: 0;\n  text-align: center;\n  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n  transition: all 0.3s;\n  border-radius: 50%;\n}\n\n.icon-button{\n  margin-top: 5px;\n}\n\n.question-button:hover {\n  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n  transition: all 0.3s;\n  /*transform: translateZ(10px);*/\n}\n\n.question-button:hover .question-text-button{\n  transition: all 0.03s;\n  top: -0.5px;\n  font-size: 22px;\n  font-weight: 500;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/cuestionario/cuestionario.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"overlay\" *ngIf=\"editable || newCategory\"></div>\n    <div class=\"card\" *ngFor=\"let category of categories; let i = index\">\n        <div class=\"card-header\" [ngStyle]=\"{'z-index' : getZ(i), 'cursor': getCursor(i)}\"\n            [attr.data-toggle]=\"isCollapsible(i)\"  [attr.href]=\"'#collapse'+i\"\n            aria-expanded=\"false\" [attr.aria-controls]=\"'collapse'+i\">\n            <form  *ngIf=\"isEditable(i)\" #categoryForm=\"ngForm\" (ngSubmit)=\"save()\">\n                <div class = \"row align-items-center\">\n                    <div class=\"col col-sm-8\">\n                        <div  class=\"form-group\">\n                            <input type=\"text\" id=\"name\" class=\"form-control input-category-name\"\n                                 required name=\"name\" [(ngModel)]=\"category.name\"\n                                 #name=\"ngModel\" placeholder=\"Category\">\n                             <div *ngIf=\"name.errors && (name.dirty || name.touched)\"\n                                 class=\"alert alert-danger\">\n                                <div [hidden]=\"!name.errors.required\">\n                                  Nombre requerido\n                                </div>\n                             </div>\n                        </div>\n                    </div>\n                    <div class=\"col-lg-4 category-buttons\">\n                        <div class=\"btn-group\">\n                            <button type=\"submit\" class=\"btn category-button-edit category-button\">\n                              Bien</button>\n                            <button type=\"button\" class=\"btn category-button-delete category-button\"\n                              (click)=\"cancel(i)\">\n                              Cancelar</button>\n                        </div>\n                    </div>\n                </div>\n            </form>\n            <div *ngIf=\"!isEditable(i)\" class = \"row\">\n                <div class=\"col-sm-12 col-lg-8\">\n                      <div class=\"category-text\"> {{category.name}} </div>\n                </div>\n                <div class=\"col-lg-4 category-buttons\">\n                    <div class=\"btn-group\">\n                        <button type=\"button\" class=\"btn category-button-edit category-button\"\n                             (click)=\"edit(i)\">Editar</button>\n                        <button type=\"button\" class=\"btn category-button-delete category-button\"\n                              (click)=\"delete(i)\">Eliminar</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div [attr.id]=\"'collapse'+i\" class=\"collapse\" >\n            <div class=\"container-questions\">\n                <div class=\"row row-questions\"  *ngFor=\"let question of category.questions; let j = index\">\n                    <div class=\"col-1 col-sm-1 col-q\">\n                        <div class=\"col-questions\">\n                            <h4 class=\"pos-question\">{{question.pos}}</h4>\n                        </div>\n                    </div>\n                    <div class=\"col-11 col-sm-9 col-q\" style=\"text-align:left;\">\n                        <a class=\"question-text\" (click)=\"editQuestion(i,j)\">{{question.title}}</a>\n                    </div>\n                    <div class=\"col-6 col-sm-1 col-q\">\n                        <div class=\"col-questions\">\n                            <a (click)=\"editQuestion(i,j)\" class=\"btn question-button add-button\">\n                              <i class=\"fa fa-arrow-up icon-button\" aria-hidden=\"true\"></i>\n                            </a>\n                        </div>\n                    </div>\n                    <div class=\"col-6 col-sm-1 col-q\">\n                        <div class=\"col-questions\">\n                            <a (click)=\"removeQuestion(i,j)\" class=\"btn question-button remove-button\">\n                              <i class=\"fa fa-trash-o icon-button\" aria-hidden=\"true\"></i>\n                            </a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"add-question\">\n                <button (click)=\"addQuestion(i)\" class=\"btn question-button add-question-button\">\n                  </button>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"add-category\">\n        <a (click)=\"add()\" class=\"btn add-category-button\">Agregar</a>\n    </div>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/cuestionario/cuestionario.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_index__ = __webpack_require__("../../../../../src/app/_models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CuestionarioComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CuestionarioComponent = (function () {
    // questions = new Array<Question>();
    // cat = new Category('','', this.questions);
    function CuestionarioComponent(service, questionService, dialogService, alertService, route, router) {
        this.service = service;
        this.questionService = questionService;
        this.dialogService = dialogService;
        this.alertService = alertService;
        this.route = route;
        this.router = router;
        this.categories = [];
        this.editable = false;
        this.newCategory = false;
        this.selectedOption = "cancelar";
        this.numOfQuestions = [];
    }
    CuestionarioComponent.prototype.ngOnInit = function () {
        this.loadAllCategories();
    };
    CuestionarioComponent.prototype.loadAllCategories = function () {
        var _this = this;
        this.selectedPos = -1;
        this.numOfQuestions = [];
        this.questionService.question = null;
        this.questionService.questionDetail = null;
        this.questionService.idCategory = null;
        this.service.getAll().subscribe(function (categories) {
            _this.categories = categories;
            _this.loadNumOfQuestions();
        }, function (err) { return _this.router.navigate(['/']); });
    };
    CuestionarioComponent.prototype.loadNumOfQuestions = function () {
        var sum = 0;
        for (var _i = 0, _a = this.categories; _i < _a.length; _i++) {
            var category = _a[_i];
            sum = sum + category.questions.length;
            this.numOfQuestions.push(sum);
        }
    };
    CuestionarioComponent.prototype.createCategory = function () {
        var _this = this;
        var category = this.categories[this.selectedPos];
        if (category) {
            this.service.create(category).subscribe(function (data) {
                _this.newCategory = false;
                _this.selectedPos = -1;
                _this.loadAllCategories();
            }, function (err) {
                _this.alertService.error(err);
            });
        }
    };
    CuestionarioComponent.prototype.updateCategory = function () {
        var _this = this;
        var category = this.categories[this.selectedPos];
        if (category) {
            this.service.update(category).subscribe(function (data) {
                _this.editable = false;
                _this.selectedPos = -1;
                _this.loadAllCategories();
            }, function (err) {
                _this.alertService.error(err);
            });
        }
    };
    CuestionarioComponent.prototype.delete = function (pos) {
        var _this = this;
        this.dialogService.confirm('Esta seguro de eliminar la categoria?')
            .then(function (res) {
            if (res) {
                var category = _this.categories[pos];
                if (category) {
                    _this.service.delete(category._id).subscribe(function (data) {
                        _this.selectedPos = -1;
                        _this.loadAllCategories();
                    }, function (err) {
                        _this.alertService.error(err);
                    });
                }
            }
        });
    };
    CuestionarioComponent.prototype.editQuestion = function (i, j) {
        var _this = this;
        var question = this.categories[i].questions[j];
        var idCategory = this.categories[i]._id;
        if (question)
            this.questionService.getById(question.idQuestion).subscribe(function (data) {
                _this.questionService.questionDetail = data;
                _this.questionService.question = question;
                _this.questionService.idCategory = idCategory;
                _this.router.navigate(['./question'], { relativeTo: _this.route });
            }, function (err) {
                _this.alertService.error(err);
            });
    };
    CuestionarioComponent.prototype.save = function () {
        if (this.newCategory) {
            this.createCategory();
        }
        else if (this.editable) {
            this.updateCategory();
        }
    };
    CuestionarioComponent.prototype.cancel = function () {
        if (this.newCategory) {
            this.categories.splice(this.selectedPos, 1);
            this.newCategory = false;
        }
        else if (this.editable) {
            this.editable = false;
        }
        this.selectedPos = -1;
    };
    CuestionarioComponent.prototype.isEditable = function (pos) {
        return this.selectedPos === pos;
    };
    CuestionarioComponent.prototype.edit = function (pos) {
        this.editable = true;
        this.selectedPos = pos;
    };
    CuestionarioComponent.prototype.addQuestion = function (i) {
        var pos = this.numOfQuestions[i] + 1;
        console.log(pos);
        this.questionService.idCategory = this.categories[i]._id;
        this.questionService.question = new __WEBPACK_IMPORTED_MODULE_2__models_index__["f" /* Question */]('', pos, '');
        this.router.navigate(['./question'], { relativeTo: this.route });
    };
    CuestionarioComponent.prototype.removeQuestion = function (i, j) {
        var _this = this;
        this.dialogService.confirm('Esta seguro de eliminar la pregunta?')
            .then(function (res) {
            if (res) {
                var question = _this.categories[i].questions[j];
                if (question)
                    _this.questionService.delete(question).subscribe(function (data) {
                        _this.loadAllCategories();
                    }, function (err) {
                        _this.alertService.error("No se pudo eliminar pregunta,  intentar en otro momento.");
                    });
            }
        });
    };
    CuestionarioComponent.prototype.add = function () {
        this.newCategory = true;
        var cat = new __WEBPACK_IMPORTED_MODULE_2__models_index__["g" /* Category */]('', '', this.categories.length, []);
        this.selectedPos = this.categories.length;
        this.categories.push(cat);
    };
    CuestionarioComponent.prototype.getZ = function (i) {
        return this.isEditable(i) ? 2 : 0;
    };
    CuestionarioComponent.prototype.getCursor = function (i) {
        return this.isEditable(i) ? '' : 'pointer';
    };
    CuestionarioComponent.prototype.isCollapsible = function (i) {
        return this.isEditable(i) ? '' : 'collapse';
    };
    return CuestionarioComponent;
}());
CuestionarioComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-cuestionario',
        template: __webpack_require__("../../../../../src/app/admin/cuestionario/cuestionario.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/cuestionario/cuestionario.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_index__["g" /* CategoryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_index__["g" /* CategoryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_index__["d" /* QuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_index__["d" /* QuestionService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_index__["f" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_index__["f" /* DialogService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_index__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_index__["a" /* AlertService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _f || Object])
], CuestionarioComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=cuestionario.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/admin/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/admin/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/question/question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container{\n  padding: 30px;\n  max-width: 100%;\n}\n\n.container-options{\n  padding: 0;\n}\n\n.alert{\n  margin: 0;\n}\n\n.card{\n  background-color: transparent;\n  border-color: white;\n}\n\n.card-block{\n  padding: 0;\n}\n\n.card-block-option{\n  padding: 15px;\n}\n\n.card-header{\n  text-align: center;\n  background-color: rgba(223, 245, 245, 0.47);\n}\n\n.form-group{\n  margin: 0;\n}\n\n.row{\n  margin: 0;\n}\n\n.card-message{\n  padding: 10px;\n}\n\n.row-download{\n  margin: 5px;\n}\n\n.row-form{\n  margin-top: 20px;\n}\n\n.col-sm-1.btn-option{\n  text-align: center;\n  vertical-align: middle;\n  padding: 0;\n}\n\n.form-check-input{\n  text-align: center;\n  position: inherit;\n  vertical-align: middle;\n  margin: 0;\n}\n\n.form-check{\n  padding: 0;\n}\n\n.form-check-label{\n  padding: 0;\n  color: white;\n}\n.form-check.disabled .form-check-label{\n  font-size: 18px;\n  font-weight: bold;\n  color: white;\n}\n\n.option-text{\n  color: white;\n  text-align: left;\n}\n\n.delete-option{\n  min-width: 100%;\n  height: auto;\n  text-align: center;\n}\n\n.divider{\n  border-style: solid none none none;\n  border-width: thin;\n  border-color: #DFDFDF;\n  padding-top: 10px;\n}\n\n.overlay {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0,0,0,0.4);\n    z-index: 1;\n}\n\n.add-file {\n  margin-top: 10px;\n}\n\ninput[type='radio'] {\n  font-size: 16px;\n  font-weight: bold;\n  color: white;\n}\n\n#edit-option-text{\n  position: relative;\n  vertical-align: middle;\n  color: white;\n  line-height: 28px;\n  font-size: 20px;\n  font-family: 'Roboto';\n  font-weight: 400;\n  text-align: center;\n  transition: all 0.03s;\n}\n\n#edit-option-button{\n  position: relative;\n  margin: 10px;\n  height: 30px;\n  width: 30px;\n  background-color: rgb(222, 195, 16);\n  border-color: rgb(222, 195, 16);\n  vertical-align: middle;\n  padding: 0;\n  text-align: center;\n  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n  transition: all 0.3s;\n  border-radius: 50%;\n}\n\n#delete-option-text{\n  position: relative;\n  vertical-align: middle;\n  color: white;\n  line-height: 28px;\n  font-size: 20px;\n  font-family: 'Roboto';\n  font-weight: 400;\n  text-align: center;\n  transition: all 0.03s;\n}\n\n#delete-option-button{\n  position: relative;\n  margin: 10px;\n  height: 30px;\n  width: 30px;\n  background-color: rgb(205, 41, 61);\n  border-color: rgb(205, 41, 61);\n  vertical-align: middle;\n  padding: 0;\n  text-align: center;\n  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n  transition: all 0.3s;\n  border-radius: 50%;\n}\n\n#add-option-text{\n  position: relative;\n  vertical-align: middle;\n  color: white;\n  line-height: 28px;\n  font-size: 20px;\n  font-family: 'Roboto';\n  font-weight: 400;\n  text-align: center;\n  transition: all 0.03s;\n}\n\n.add-option{\n  min-width: 100%;\n  height: auto;\n  text-align: center;\n}\n\n#add-option-button{\n  position: relative;\n  margin: 10px;\n  height: 30px;\n  width: 30px;\n  background-color: rgb(109, 226, 17);\n  border-color: rgb(109, 226, 17);\n  vertical-align: middle;\n  padding: 0;\n  text-align: center;\n  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n  transition: all 0.3s;\n  border-radius: 50%;\n}\n\n.question-button:hover {\n  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n  transition: all 0.3s;\n  /*transform: translateZ(10px);*/\n}\n\n\n.question-button:hover {\n  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n  transition: all 0.3s;\n  /*transform: translateZ(10px);*/\n}\n\n#add-option-button:hover {\n  box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);\n  transition: all 0.3s;\n  /*transform: translateZ(10px);*/\n}\n#add-option-button:hover #add-category-text{\n  transition: all 0.03s;\n  top: -0.5px;\n  font-size: 22px;\n  font-weight: 500;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/question/question.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n    <div class=\"overlay\" *ngIf=\"editable\"></div>\n    <!-- <div *ngFor=\"let option of pregunta.options\">\n      <div> {{option._id}}.{{option.text}}   {{option.jump}}   {{option.textBox}} </div>\n      <div *ngIf=\"option.message\">\n          {{option.message.title}}   {{option.message.text}}   {{option.message.uploadURL}}</div>\n    </div> -->\n    <form  #questionForm=\"ngForm\" (ngSubmit)=\"save()\">\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <h3 for=\"title\">Pregunta {{pos}}</h3>\n            </div>\n            <div class=\"card-block\">\n                <div class=\"form-group\">\n                    <textarea class=\"form-control\" id=\"title\" rows=\"2\"\n                      [(ngModel)]=\"pregunta.title\" name=\"title\" #title=\"ngModel\"\n                      placeholder=\"¿Pregunta?\" required></textarea>\n                    <div *ngIf=\"title.errors \"\n                        class=\"alert alert-danger\">\n                       <div [hidden]=\"!title.errors.required\">\n                         Pregunta requerida\n                       </div>\n                     </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"card\">\n            <div class=\"card-header\">\n                <div class=\"form-group row\">\n                    <label class=\"col-sm-3\">Tipo de Respuesta:</label>\n                    <div class=\"col-sm-3\" *ngFor=\"let type of types; let i = index\">\n                        <div class=\"form-check\">\n                            <label class=\"form-check-label\">\n                              <input type=\"radio\" class=\"form-check-input\" name=\"tipo\"\n                                id=\"'type'+i\" value=\"{{type.type}}\" [checked]=\"isSelectedType(i)\"\n                                [(ngModel)]=\"pregunta.type\">\n                                  {{type.text}}\n                            </label>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"form-group row divider\">\n                    <div class=\"form-check col-sm-12 \">\n                        <label class=\"form-check-label\">\n                          <input type=\"checkbox\" class=\"form-check-input\" name=\"helping\"\n                            value=\"helping\" (click)=\"toggleHelp()\">\n                              Añadir ayuda\n                        </label>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div *ngIf=\"!esAbierta()\" class=\"container-options\">\n            <div class=\"card\" *ngFor=\"let option of pregunta.options; let j = index\">\n                <div *ngIf=\"isOptionEditable(j)\" class=\"card-header\" style=\"z-index:2;\">\n                    <div class=\"row\" >\n                        <div class=\"col-sm-1 btn-option\">\n                          <div class=\"form-check disabled\">\n                              <label class=\"form-check-label\">\n                                  <input class=\"form-check-input\" type=\"radio\"\n                                    disabled> {{option._id}}\n                              </label>\n                          </div>\n                        </div>\n                        <div class=\"form-group  col-sm-9\">\n                            <textarea class=\"form-control\"  #name=\"ngModel\"\n                             rows=\"2\" [(ngModel)]=\"option.text\" [value]=\"option.text\" name=\"'optionText'+j\"\n                              ></textarea>\n                              <!-- <div *ngIf=\"'formErrors.optionText'+j\" class=\"alert alert-danger\">\n                                  {{ formErrors.option }}\n                              </div> -->\n                        </div>\n                        <div class=\"col col-sm-1 btn-option\">\n                              <a id=\"add-option-button\" class=\"btn btn-primary question-button\"(click)=\"acceptOption(j)\">\n                                <i class=\"fa fa-check\" aria-hidden=\"true\"></i>\n                              </a>\n                        </div>\n                        <div class=\"col col-sm-1 btn-option\">\n                              <a id=\"delete-option-button\" class=\"btn btn-primary question-button\"(click)=\"cancelOption(j)\">\n                                <i class=\"fa fa-times\" aria-hidden=\"true\"></i>\n                              </a>\n                        </div>\n                    </div>\n                </div>\n                <div *ngIf=\"!isOptionEditable(j)\" class=\"card-header\" >\n                    <div class=\"row\">\n                        <div class=\"col-sm-1 btn-option\">\n                          <div class=\"form-check form-check-inline disabled\">\n                              <label class=\"form-check-label\">\n                                  <input class=\"form-check-input\" type=\"radio\"\n                                    disabled> {{option._id}}\n                              </label>\n                          </div>\n                        </div>\n                        <div class=\"form-group  col-sm-9\">\n                            <div  class=\"option-text\">\n                                {{option.text}}\n                           </div>\n                              <!-- <div *ngIf=\"'formErrors.optionText'+j\" class=\"alert alert-danger\">\n                                  {{ formErrors.option }}\n                              </div> -->\n                        </div>\n                        <div class=\"col col-sm-1 btn-option\">\n                              <a id=\"edit-option-button\" class=\"btn btn-primary question-button\"(click)=\"editOption(j)\">\n                                <i class=\"fa fa-pencil\" aria-hidden=\"true\"></i>\n                              </a>\n                        </div>\n                        <div class=\"col col-sm-1 btn-option\">\n                              <a id=\"delete-option-button\" class=\"btn btn-primary question-button\"(click)=\"deleteOption(j)\">\n                                <i class=\"fa fa-trash-o\" aria-hidden=\"true\"></i>\n                              </a>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"card-block-option\">\n                    <div class=\"form-group row\" style=\"text-align=left;\">\n                        <div class=\"form-check col-sm-4\" style=\"text-align=left;\">\n                            <label class=\"form-check-label\">\n                                <input class=\"form-check-input\" [checked]=\"option.jump>0\" (click)=\"toggleJump(j)\"\n                                   type=\"checkbox\"> Saltar numero de preguntas:\n                            </label>\n                        </div>\n                        <div *ngIf=\"option.jump>0\" class=\"col-4 col-sm-2\">\n                            <input class=\"form-control\" type=\"number\" value=\"1\"\n                              name=\"'jump'+j\" [(ngModel)]=\"option.jump\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <div class=\"form-check\">\n                            <label class=\"form-check-label\">\n                                <input class=\"form-check-input\" type=\"checkbox\"\n                                  name=\"'textBox'+j\" [checked]=\"option.isTextArea\"\n                                  (click)=\"toggleTextArea(j)\">\n                                  Agregar cuadro de texto\n                            </label>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <div class=\"form-check\">\n                            <label class=\"form-check-label\">\n                                <input class=\"form-check-input\" [checked]=\"isMessage(j)\" (click)=\"toggleMessage(j)\"\n                                  type=\"checkbox\"> Agregar Mensaje:\n                            </label>\n                        </div>\n                    </div>\n                    <div *ngIf=\"isMessage(j)\" class=\"card-message \">\n                        <div class=\"form-group\">\n                            <label for=\"titleMessage\">Titulo</label>\n                            <input type=\"text\" class=\"form-control\" name=\"'titleMessage'+j\"\n                            [(ngModel)]=\"option.message.title\" placeholder=\"Titulo\">\n                        </div>\n                        <div class=\"form-group\">\n                            <label for=\"textMessage\">Mensaje:</label>\n                            <textarea class=\"form-control\" rows=\"3\" name=\"'textMessage'+j\"\n                              [(ngModel)]=\"option.message.text\"></textarea>\n                        </div>\n                        <div class=\"row row-download\">\n                                <button  *ngIf=\"!option.message.downloadURL\" class=\"btn btn-primary col\"\n                                type=\"button\" (click)=\"downloadURL(j)\">Agregar Archivo</button>\n                                <div *ngIf=\"option.message.downloadURL\" class=\"form-group col-sm-12\">\n                                    <label for=\"nameDownload\">Nombre del archivo</label>\n                                    <input  type=\"text\" class=\"form-control\" name=\"'textUploadURL'+j\"\n                                    [(ngModel)]=\"option.message.downloadURL.name\" placeholder=\"Nombre del archivo\">\n                                </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"form-check col\">\n                                <label class=\"form-check-label\">\n                                    <input class=\"form-check-input\" type=\"checkbox\"\n                                      name=\"'uploadURL'+j\" [checked]=\"option.message.isTextArea\" (click)=\"toggleUploadURL(j)\">\n                                        El estudiante sube documento\n                                </label>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"add-option\">\n                <a id=\"add-option-button\" (click)=\"addOption(i)\" class=\"btn btn-primary\">\n                  <h6 id=\"add-option-text\">+</h6>\n                </a>\n            </div>\n        </div>\n        <div *ngIf=\"pregunta.help\">\n            <div class=\"card card-message card-block\">\n                <div class=\"form-group\">\n                    <label for=\"titleMessage\">Titulo de ayuda:</label>\n                    <input type=\"text\" class=\"form-control\" name=\"helpTitle\"\n                    [(ngModel)]=\"pregunta.help.title\" placeholder=\"Titulo\">\n                </div>\n                <div class=\"form-group\">\n                    <label for=\"textMessage\">Mensaje de ayuda:</label>\n                    <textarea class=\"form-control\" rows=\"3\" name=\"helpText\"\n                      [(ngModel)]=\"pregunta.help.text\"></textarea>\n                </div>\n                <div class=\"row row-download\">\n                        <button  *ngIf=\"!pregunta.help.downloadURL\" class=\"btn btn-primary\"\n                        type=\"button\" (click)=\"helpDownloadURL(j)\">Agregar Archivo</button>\n                        <div *ngIf=\"pregunta.help.downloadURL\" class=\"form-group col-sm-12\">\n                            <label for=\"nameDownload\">Nombre del archivo</label>\n                            <input  type=\"text\" class=\"form-control\" name=\"textHelpUploadURL\"\n                            [(ngModel)]=\"pregunta.help.name\" placeholder=\"Nombre del archivo\">\n                        </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"row justify-content-sm-center row-form\">\n            <div class=\"col col-sm-auto\">\n                <button type=\"submit\" class=\"btn btn-primary\">Guardar</button>\n            </div>\n            <div class=\"col col-sm-auto\">\n                <button type=\"button\" class=\"btn btn-danger\" (click)=\"cancel()\">\n                  Cancelar</button>\n            </div>\n        </div>\n    </form>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/question/question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_index__ = __webpack_require__("../../../../../src/app/_models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var QuestionComponent = (function () {
    function QuestionComponent(route, router, service, alertService, dialogService) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.alertService = alertService;
        this.dialogService = dialogService;
        this.uploadedFileUrls = [];
        // question :
        this.isNew = false;
        this.formErrors = {
            'option1': '',
            'option2': '',
            'power': ''
        };
        this.validationMessages = {
            'option': {
                'required': 'Name is required.',
                'minlength': 'Name must be at least 4 characters long.',
                'maxlength': 'Name cannot be more than 24 characters long.',
                'forbiddenName': 'Someone named "Bob" cannot be a hero.'
            },
            'power': {
                'required': 'Power is required.'
            }
        };
        this.pos = 0;
        this.types = [
            { 'type': 'unica', 'text': 'Unica' },
            { 'type': 'multiple', 'text': 'Multiple' },
            { 'type': 'abierta', 'text': 'Abierta' }
        ];
        this.editable = false;
        this.newOption = false;
        this.optionSelected = -1;
        this.helping = false;
        this.update = false;
    }
    QuestionComponent.prototype.ngOnInit = function () {
        if (this.service.question && this.service.idCategory) {
            if (this.service.questionDetail) {
                this.pos = this.service.question.pos;
                this.pregunta = this.service.questionDetail;
                this.update = true;
                // this.arreglar();
            }
            else {
                this.pos = this.service.question.pos;
                var category = null;
                var id = 0;
                var help = new __WEBPACK_IMPORTED_MODULE_3__models_index__["b" /* Message */]('', '', null, false, "");
                this.pregunta = new __WEBPACK_IMPORTED_MODULE_3__models_index__["c" /* QuestionDetail */]('', '', 'abierta', "", [], null);
            }
        }
        else {
            this.router.navigate(['../'], { relativeTo: this.route });
        }
    };
    QuestionComponent.prototype.arreglar = function () {
        for (var i = 0; i < this.pregunta.options.length; i++) {
            this.pregunta.options[i].isTextArea = false;
            this.pregunta.options[i].textArea = "";
        }
    };
    QuestionComponent.prototype.save = function () {
        var _this = this;
        this.service.question.title = this.pregunta.title;
        if (!this.update) {
            this.service.create(this.pregunta).subscribe(function (data) {
                _this.router.navigate(['../'], { relativeTo: _this.route });
            }, function (err) {
                _this.alertService.error(err);
            });
        }
        else {
            this.service.update(this.pregunta).subscribe(function (data) {
                _this.router.navigate(['../'], { relativeTo: _this.route });
            }, function (err) {
                _this.alertService.error(err);
            });
        }
    };
    QuestionComponent.prototype.cancel = function () {
        var _this = this;
        this.dialogService.confirm('Esta seguro de cancelar?')
            .then(function (res) {
            if (res) {
                _this.service.question = null;
                _this.service.idCategory = null;
                _this.router.navigate(['../'], { relativeTo: _this.route });
            }
        });
    };
    QuestionComponent.prototype.deleteOption = function (j) {
        this.decreaseOptionsId(j);
        this.pregunta.options.splice(j, 1);
    };
    QuestionComponent.prototype.addOption = function () {
        var size = this.pregunta.options.length;
        this.editable = true;
        this.newOption = true;
        this.optionSelected = size;
        var pos = ('a'.charCodeAt(0)) + size;
        var letra = String.fromCharCode(pos);
        var option = new __WEBPACK_IMPORTED_MODULE_3__models_index__["d" /* Option */](letra, false, '', -1, false, null, null);
        this.pregunta.options.push(option);
    };
    QuestionComponent.prototype.editOption = function (i) {
        this.optionSelected = i;
        this.editable = true;
    };
    QuestionComponent.prototype.acceptOption = function (i) {
        this.optionSelected = -1;
        this.editable = false;
        this.newOption = false;
    };
    QuestionComponent.prototype.cancelOption = function (i) {
        this.optionSelected = -1;
        this.editable = false;
        if (this.newOption) {
            this.decreaseOptionsId(i);
            this.pregunta.options.splice(i, 1);
        }
    };
    QuestionComponent.prototype.decreaseOptionsId = function (id) {
        for (var _i = id + 1; _i < this.pregunta.options.length; _i++) {
            var pos = ('a'.charCodeAt(0)) + (_i - 1);
            var letra = String.fromCharCode(pos);
            this.pregunta.options[_i]._id = letra;
        }
    };
    QuestionComponent.prototype.isOptionEditable = function (i) {
        return this.optionSelected === i;
    };
    QuestionComponent.prototype.toggleJump = function (i) {
        if (this.pregunta.options[i].jump < 0) {
            this.pregunta.options[i].jump = 1;
        }
        else {
            this.pregunta.options[i].jump = -1;
        }
    };
    QuestionComponent.prototype.toggleTextArea = function (i) {
        if (this.pregunta.options[i].isTextArea)
            this.pregunta.options[i].isTextArea = false;
        else
            this.pregunta.options[i].isTextArea = true;
    };
    QuestionComponent.prototype.toggleUploadURL = function (j) {
        if (this.pregunta.options[j].message) {
            if (this.pregunta.options[j].message.isUploadURL)
                this.pregunta.options[j].message.isUploadURL = false;
            else
                this.pregunta.options[j].message.isUploadURL = true;
        }
    };
    QuestionComponent.prototype.toggleMessage = function (i) {
        var msg = this.pregunta.options[i].message;
        if (msg) {
            this.pregunta.options[i].message = null;
        }
        else {
            this.pregunta.options[i].message = new __WEBPACK_IMPORTED_MODULE_3__models_index__["b" /* Message */]('', '', null, false, "");
        }
    };
    QuestionComponent.prototype.toggleHelp = function () {
        var msg = this.pregunta.help;
        if (msg) {
            this.pregunta.help = null;
        }
        else {
            this.pregunta.help = new __WEBPACK_IMPORTED_MODULE_3__models_index__["b" /* Message */]('', '', null, false, "");
        }
    };
    QuestionComponent.prototype.isMessage = function (i) {
        return (!(this.pregunta.options[i].message === null)) ? true : false;
    };
    QuestionComponent.prototype.isSelectedType = function (i) {
        return this.pregunta.type === this.types[i].type;
    };
    QuestionComponent.prototype.isTextBox = function (i) {
        // return (this.pregunta.options[i].textBox==="y")?true:false;
    };
    QuestionComponent.prototype.isUploadOption = function (i) {
        if (this.isMessage(i))
            return (this.pregunta.options[i].message.uploadURL === "y") ? true : false;
        else
            return false;
    };
    QuestionComponent.prototype.esAbierta = function () {
        return this.pregunta.type === this.types[2].type;
    };
    QuestionComponent.prototype.uploadDoc = function (i) {
        if (this.pregunta.options[i].message) {
            if (this.pregunta.options[i].message.uploadURL === "y")
                this.pregunta.options[i].message.uploadURL = "n";
            else
                this.pregunta.options[i].message.uploadURL = "y";
        }
    };
    QuestionComponent.prototype.esUnica = function () {
        return this.pregunta.type === this.types[0].type;
    };
    QuestionComponent.prototype.esMultiple = function () {
        return this.pregunta.type === this.types[1].type;
    };
    QuestionComponent.prototype.downloadURL = function (i) {
        return __awaiter(this, void 0, void 0, function () {
            var client, result, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = filestack.init('AzQ6VeLs4QvmDxKFrY7N6z');
                        return [4 /*yield*/, client.pick({ maxFiles: 1 })];
                    case 1:
                        result = _a.sent();
                        url = result.filesUploaded[0].url;
                        if (url) {
                            this.pregunta.options[i].message.downloadURL = new __WEBPACK_IMPORTED_MODULE_3__models_index__["e" /* DownloadURL */](url, url);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    QuestionComponent.prototype.helpDownloadURL = function (i) {
        return __awaiter(this, void 0, void 0, function () {
            var client, result, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        client = filestack.init('AzQ6VeLs4QvmDxKFrY7N6z');
                        return [4 /*yield*/, client.pick({ maxFiles: 1 })];
                    case 1:
                        result = _a.sent();
                        url = result.filesUploaded[0].url;
                        if (url) {
                            this.pregunta.help.downloadURL = new __WEBPACK_IMPORTED_MODULE_3__models_index__["e" /* DownloadURL */](url, url);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    QuestionComponent.prototype.ngAfterViewChecked = function () {
        this.formChanged();
    };
    QuestionComponent.prototype.formChanged = function () {
        var _this = this;
        if (this.currentForm === this.questionForm) {
            return;
        }
        this.questionForm = this.currentForm;
        if (this.questionForm) {
            this.questionForm.valueChanges
                .subscribe(function (data) { return _this.onValueChanged(data); });
        }
    };
    QuestionComponent.prototype.onValueChanged = function (data) {
        if (!this.questionForm) {
            return;
        }
        var form = this.questionForm.form;
        for (var field in this.formErrors) {
            // clear previous error message (if any)
            this.formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = this.validationMessages[field];
                for (var key in control.errors) {
                    this.formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    return QuestionComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('questionForm'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */]) === "function" && _a || Object)
], QuestionComponent.prototype, "currentForm", void 0);
QuestionComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-question',
        template: __webpack_require__("../../../../../src/app/admin/question/question.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/question/question.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_index__["d" /* QuestionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_index__["d" /* QuestionService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_index__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_index__["a" /* AlertService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_4__services_index__["f" /* DialogService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_index__["f" /* DialogService */]) === "function" && _f || Object])
], QuestionComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=question.component.js.map

/***/ }),

/***/ "../../../../../src/app/admin/toolbar/toolbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@media screen and (max-width : 720px){\n  span.toolbar-text {\n    display: none;\n    /*visibility: hidden;*/\n  }\n}\n\n\n.container{\n  padding: 0;\n  margin: 0;\n  max-width: 100%;\n  position: relative;\n}\n\n.btn-group {\n  min-width: 100%;\n}\n.btn {\n  min-height: 100%;\n  min-width: 33.33333%;\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 33.333333%;\n          flex: 0 0 33.333333%;\n  background-color: transparent;\n  border-style: solid;\n  border-radius: 5px;\n  border-width: 2px;;\n  border-color: rgba(255, 255, 255, 0.81);\n  color: rgba(14, 10, 68, 0.81);\n  font-family: 'Fresca', sans-serif;\n  font-weight: 800;\n  text-align: center;\n  font-size: 20px;\n}\n\n.list {\n  background-image: url(" + __webpack_require__("../../../../../src/app/admin/assets/list.svg") + ");\n  background-position: center;\n  vertical-align: middle;\n  display: inline-block;\n  background-repeat: no-repeat;\n  height: 30px;\n  width: 30px;\n}\n.search {\n  background-image: url(" + __webpack_require__("../../../../../src/app/admin/assets/search.svg") + ");\n  background-position: center;\n  vertical-align: middle;\n  display: inline-block;\n  background-repeat: no-repeat;\n  height: 30px;\n  width: 30px;\n}\n.chart {\n  background-image: url(" + __webpack_require__("../../../../../src/app/admin/assets/chart.svg") + ");\n  background-position: center;\n  vertical-align: middle;\n  display: inline-block;\n  background-repeat: no-repeat;\n  height: 30px;\n  width: 30px;\n}\n\n  .btn.active{\n    background-color: rgba(16, 98, 175, 0.81);\n    color: white;\n  }\n\n  .btn:focus{\n    background-color: rgba(16, 98, 175, 0.81);\n    color: white;\n  }\n\n  .btn.active .list{\n    background-image: url(" + __webpack_require__("../../../../../src/app/admin/assets/list-white.svg") + ");\n  }\n\n  .btn:focus .list{\n    background-image: url(" + __webpack_require__("../../../../../src/app/admin/assets/list-white.svg") + ");\n  }\n\n.btn span {\n  cursor: pointer;\n  position: relative;\n  transition: 0.5s;\n  padding-left: 5px;\n}\n\n.btn span:after {\n  background-image: url(" + __webpack_require__("../../../../../src/app/admin/assets/form.svg") + ");\n  position: absolute;\n  opacity: 1;\n  top: 0;\n  right: -20px;\n  transition: 0.5s;\n}\n\n.btn:hover span {\n  padding-right: 25px;\n}\n\n.btn:hover span:after {\n  opacity: 1;\n  right: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/toolbar/toolbar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div id='toolbar' class=\"container\">\n    <div class=\"btn-group\" role=\"group\">\n        <button routerLink=\"./cuestionario\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\"\n        type=\"button\" class=\"btn btn-secondary\"  autofocus=\"true\">\n            <svg  id=\"list\" class=\"list\"></svg>\n            <span class=\"toolbar-text\">cuestionario </span>\n        </button>\n        <button routerLink=\"./buscar\" routerLinkActive=\"active\" type=\"button\" class=\"btn btn-secondary\">\n            <svg  id=\"search\" class=\"search\" ></svg>\n            <span class=\"toolbar-text\">buscar </span>\n        </button>\n        <button routerLink=\"./estadisticas\" routerLinkActive=\"active\" type=\"button\" class=\"btn btn-secondary\">\n            <svg  id=\"chart\" class=\"chart\" ></svg>\n            <span class=\"toolbar-text\">estadisticas </span>\n        </button>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/admin/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToolbarComponent = (function () {
    function ToolbarComponent() {
    }
    ToolbarComponent.prototype.ngOnInit = function () {
    };
    return ToolbarComponent;
}());
ToolbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-toolbar',
        template: __webpack_require__("../../../../../src/app/admin/toolbar/toolbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/admin/toolbar/toolbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ToolbarComponent);

//# sourceMappingURL=toolbar.component.js.map

/***/ }),

/***/ "../../../../rxjs/add/operator/switchMap.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("../../../../rxjs/Observable.js");
var switchMap_1 = __webpack_require__("../../../../rxjs/operator/switchMap.js");
Observable_1.Observable.prototype.switchMap = switchMap_1.switchMap;
//# sourceMappingURL=switchMap.js.map

/***/ }),

/***/ "../../../../rxjs/operator/switchMap.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OuterSubscriber_1 = __webpack_require__("../../../../rxjs/OuterSubscriber.js");
var subscribeToResult_1 = __webpack_require__("../../../../rxjs/util/subscribeToResult.js");
/* tslint:enable:max-line-length */
/**
 * Projects each source value to an Observable which is merged in the output
 * Observable, emitting values only from the most recently projected Observable.
 *
 * <span class="informal">Maps each value to an Observable, then flattens all of
 * these inner Observables using {@link switch}.</span>
 *
 * <img src="./img/switchMap.png" width="100%">
 *
 * Returns an Observable that emits items based on applying a function that you
 * supply to each item emitted by the source Observable, where that function
 * returns an (so-called "inner") Observable. Each time it observes one of these
 * inner Observables, the output Observable begins emitting the items emitted by
 * that inner Observable. When a new inner Observable is emitted, `switchMap`
 * stops emitting items from the earlier-emitted inner Observable and begins
 * emitting items from the new one. It continues to behave like this for
 * subsequent inner Observables.
 *
 * @example <caption>Rerun an interval Observable on every click event</caption>
 * var clicks = Rx.Observable.fromEvent(document, 'click');
 * var result = clicks.switchMap((ev) => Rx.Observable.interval(1000));
 * result.subscribe(x => console.log(x));
 *
 * @see {@link concatMap}
 * @see {@link exhaustMap}
 * @see {@link mergeMap}
 * @see {@link switch}
 * @see {@link switchMapTo}
 *
 * @param {function(value: T, ?index: number): ObservableInput} project A function
 * that, when applied to an item emitted by the source Observable, returns an
 * Observable.
 * @param {function(outerValue: T, innerValue: I, outerIndex: number, innerIndex: number): any} [resultSelector]
 * A function to produce the value on the output Observable based on the values
 * and the indices of the source (outer) emission and the inner Observable
 * emission. The arguments passed to this function are:
 * - `outerValue`: the value that came from the source
 * - `innerValue`: the value that came from the projected Observable
 * - `outerIndex`: the "index" of the value that came from the source
 * - `innerIndex`: the "index" of the value from the projected Observable
 * @return {Observable} An Observable that emits the result of applying the
 * projection function (and the optional `resultSelector`) to each item emitted
 * by the source Observable and taking only the values from the most recently
 * projected inner Observable.
 * @method switchMap
 * @owner Observable
 */
function switchMap(project, resultSelector) {
    return this.lift(new SwitchMapOperator(project, resultSelector));
}
exports.switchMap = switchMap;
var SwitchMapOperator = (function () {
    function SwitchMapOperator(project, resultSelector) {
        this.project = project;
        this.resultSelector = resultSelector;
    }
    SwitchMapOperator.prototype.call = function (subscriber, source) {
        return source.subscribe(new SwitchMapSubscriber(subscriber, this.project, this.resultSelector));
    };
    return SwitchMapOperator;
}());
/**
 * We need this JSDoc comment for affecting ESDoc.
 * @ignore
 * @extends {Ignored}
 */
var SwitchMapSubscriber = (function (_super) {
    __extends(SwitchMapSubscriber, _super);
    function SwitchMapSubscriber(destination, project, resultSelector) {
        _super.call(this, destination);
        this.project = project;
        this.resultSelector = resultSelector;
        this.index = 0;
    }
    SwitchMapSubscriber.prototype._next = function (value) {
        var result;
        var index = this.index++;
        try {
            result = this.project(value, index);
        }
        catch (error) {
            this.destination.error(error);
            return;
        }
        this._innerSub(result, value, index);
    };
    SwitchMapSubscriber.prototype._innerSub = function (result, value, index) {
        var innerSubscription = this.innerSubscription;
        if (innerSubscription) {
            innerSubscription.unsubscribe();
        }
        this.add(this.innerSubscription = subscribeToResult_1.subscribeToResult(this, result, value, index));
    };
    SwitchMapSubscriber.prototype._complete = function () {
        var innerSubscription = this.innerSubscription;
        if (!innerSubscription || innerSubscription.closed) {
            _super.prototype._complete.call(this);
        }
    };
    SwitchMapSubscriber.prototype._unsubscribe = function () {
        this.innerSubscription = null;
    };
    SwitchMapSubscriber.prototype.notifyComplete = function (innerSub) {
        this.remove(innerSub);
        this.innerSubscription = null;
        if (this.isStopped) {
            _super.prototype._complete.call(this);
        }
    };
    SwitchMapSubscriber.prototype.notifyNext = function (outerValue, innerValue, outerIndex, innerIndex, innerSub) {
        if (this.resultSelector) {
            this._tryNotifyNext(outerValue, innerValue, outerIndex, innerIndex);
        }
        else {
            this.destination.next(innerValue);
        }
    };
    SwitchMapSubscriber.prototype._tryNotifyNext = function (outerValue, innerValue, outerIndex, innerIndex) {
        var result;
        try {
            result = this.resultSelector(outerValue, innerValue, outerIndex, innerIndex);
        }
        catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
    return SwitchMapSubscriber;
}(OuterSubscriber_1.OuterSubscriber));
//# sourceMappingURL=switchMap.js.map

/***/ })

});
//# sourceMappingURL=1.chunk.js.map