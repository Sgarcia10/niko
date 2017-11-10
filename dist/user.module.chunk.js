webpackJsonp(["user.module"],{

/***/ "../../../../../src/app/user/projects/carreras.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return carreras; });
var carreras = [
    'ADMINISTRACION',
    'ANTROPOLOGIA',
    'ARQUITECTURA',
    'ARTE',
    'AUTOMATIZACION PROC. INDUST',
    'BIOLOGIA',
    'CIDER',
    'CIENCIA POLITICA',
    'CIENCIAS SOCIALES',
    'CONSTRUCCION DE SOFTWARE',
    'CONTADURIA INTERNACIONAL',
    'DECANATURA ESTUDIANTES',
    'DEPORTES',
    'DERECHO',
    'DERECHO COMERCIAL',
    'DIRECCION INTERNACIONALIZACION',
    'DISEÑO',
    'DOCTORADO EN ADMINISTRACION',
    'DOCTORADO EN DERECHO',
    'DOCTORADO EN LITERATURA',
    'ECONOMIA',
    'EDUCACION',
    'ESCUELA DE GOBIERNO',
    'ESP.DERE.MINERO ENERG DES SOST',
    'ESPEC.DERECHO DE LA EMPRESA',
    'ESPEC.DISEÑO GEST.SOC.TECNOL.',
    'ESPECIAL.DEREC.NEGOC.INTERNALE',
    'ESPECIALIZACION EN ECONOMIA',
    'ESTUDIOS INTERNALES',
    'FILOSOFIA',
    'FISICA',
    'GEOCIENCIAS',
    'GERENCIA EMPRESAS DE TELECOMUN',
    'GESTION PUBLICA',
    'HISTORIA',
    'HISTORIA DEL ARTE',
    'ING. ELECTRICA Y ELECTRONICA',
    'INGENIERIA BIOMEDICA',
    'INGENIERIA CIVIL Y AMBIENTAL',
    'INGENIERIA DE SISTEMAS',
    'INGENIERIA GENERAL',
    'INGENIERIA INDUSTRIAL',
    'INGENIERIA MECANICA',
    'INGENIERIA QUIMICA',
    'LEGISLACION FINANCIERA',
    'LENGUAS Y CULTURA',
    'LITERATURA',
    'MAES.EN DER.PUBLICO GEST.ADMIN',
    'MAEST EN GERENCIA AMBIENTAL TP',
    'MAEST GER AMB. Y PRAC. DRLLO.',
    'MAEST.BIOLOGIA COMPUTACIONAL',
    'MAEST.DERE.GOB.Y GEST.JUSTICIA',
    'MAEST.DISEÑO PROCES.Y PRODUCT.',
    'MAEST.EN ARQUITECTURAS DE TI',
    'MAEST.GERENC Y PRACT.DESARROLL',
    'MAEST.HUMANIDADES DIGITALES',
    'MAEST.INGENIER.DE INFORMACION',
    'MAEST.INGENIERIA DE PETROLEOS',
    'MAEST.INTELIG.ANALIT.TOMA DECI',
    'MAEST.PEDAGOG.LENGUAS EXTRANJ.',
    'MAEST.PSICOLOG.CLINICA Y SALUD',
    'MAESTR.EN INVESTIG.EN ADMON',
    'MAESTRIA DERECHO INTERNAL',
    'MAESTRIA EDUCACION MATEMATICA',
    'MAESTRIA EN ADMINISTRACION',
    'MAESTRIA EN CONTRUCCION DE PAZ',
    'MAESTRIA EN DERECHO',
    'MAESTRIA EN DERECHO PRIVADO',
    'MAESTRIA EN DISEÑO',
    'MAESTRIA EN ECONOMIA APLICADA',
    'MAESTRIA EN EDUCACION - IBAGUE',
    'MAESTRIA EN ESTUD.CULTURALES',
    'MAESTRIA EN FINANZAS',
    'MAESTRIA EN GEOGRAFIA',
    'MAESTRIA EN HISTORIA DEL ARTE',
    'MAESTRIA EN LITERATURA',
    'MAESTRIA EN MERCADEO',
    'MAESTRIA EN PERIODISMO',
    'MAESTRIA EN TRIBUTACION',
    'MAESTRIA PROPIEDAD INTELECTUAL',
    'MAESTR.INGENIERIA DE SOFTWARE',
    'MAESTR.SEGURIDAD INFORMACION',
    'MAESTR.TECNOLOG.INFORMAC.NEGOC',
    'MATEMATICAS',
    'MBA EJECUTIVO',
    'MEDICINA',
    'MICROBIOLOGIA',
    'MUSICA',
    'PERIODISMO',
    'POSTGRADO CIENCIAS BIOLOGICAS',
    'POSTGR.SALUD PUBLICA',
    'PSICOLOGIA',
    'QUIMICA',
    'REGIMEN JURID.FINAN.CONT.IMP.',
    'SIST.CONTROL ORGANIZ.Y GEST',
    'SISTEMAS DE INFORMACION - ESIO',
    'SISTEMAS DE TRANSMISION',
    'SOCIOLOGIA'
];


/***/ }),

/***/ "../../../../../src/app/user/projects/projects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-cover{\n  background: url(" + __webpack_require__("../../../../../src/assets/bg-pattern.png") + "),#dc2430;\n  background: url(" + __webpack_require__("../../../../../src/assets/bg-pattern.png") + "),linear-gradient(to left,#912186,#dc2430);\n}\n\n/*.container-full{\n  position: absolute;\n  top:0; bottom: 0; left: 0; right: 0;\n  text-align: center;\n  vertical-align: middle;\n}*/\n\n.inicio{\n  position: relative;\n  top: 50%;\n}\n\n.btn-xl {\n\tcolor: #fff;\n\tborder: 2px solid;\n\tborder-radius: 300px;\n\tpadding: 15px 45px;\n\tfont-size: 16px;\n  transition: all 0.3s;\n}\n\n.btn:hover {\n  transition: all 0.3s;\n  background-color: rgb(212, 131, 47);\n  font-weight: bolder;\n}\n\n.container-form{\n  margin: auto;\n  padding: 15px;\n  max-width: 700px;\n}\n\n.text-titulo{\n  margin-top: 15px;\n  min-width: 100%;\n  background-color: transparent;\n  font-size: 15px;\n  color: white;\n  border-style: none none solid none;\n  border-color: rgb(240, 237, 237);\n  border-width: thin;\n}\n\n.input-text{\n  color: white;\n  background-color: transparent;\n  border-style: none none solid none;\n  border-color: rgb(240, 237, 237);\n  border-width: thin;\n}\n\n.input-text:focus, .text-titulo:focus\n{\n  border-width: thick;\n}\n\n.select-program{\n  background-color: transparent;\n  border: normal solid;\n  border-color: rgb(240, 237, 237);\n  color: white;\n  max-width: 100%\n}\n\nselect:invalid{\n  color: #b5abb5;\n}\n\n.select-option{\n  background-color: rgba(238, 229, 222, 0.58);\n  color: black;\n  width: 300px;\n  max-width: 100%;\n  font-size: 12px;\n}\n\n.form-group{\n  position: relative;\n}\n\n.help{\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.help-text{\n  color: black;\n    z-index: 1;\n}\n\n.input-periodo{\n  color: white;\n  max-width: 57px;\n  background-color: rgba(255, 255, 255, 0.32);\n}\n\n.col-year{\n  text-align: right;\n}\n\n.input-year{\n  color: white;\n  max-width: 82px;\n  position: relative;\n  margin: auto;\n  background-color: rgba(255, 255, 255, 0.32);\n}\n\n.popover.left.in{\n  background-color: rgba(250, 250, 250, 0.6);\n}\n\n::-webkit-input-placeholder { /* WebKit, Blink, Edge */\n    color:    #b5abb5;\n}\n:-moz-placeholder { /* Mozilla Firefox 4 to 18 */\n   color:    #b5abb5;\n   opacity:  1;\n}\n::-moz-placeholder { /* Mozilla Firefox 19+ */\n   color:    #b5abb5;\n   opacity:  1;\n}\n:-ms-input-placeholder { /* Internet Explorer 10-11 */\n   color:    #b5abb5;\n}\n::-ms-input-placeholder { /* Microsoft Edge */\n   color:    #b5abb5;\n}\n\n\n.card-header{\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  position: relative;\n  min-height: 30px;\n  background-color: rgba(198, 149, 154, 0.5);\n  min-height: 80px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  padding: 0;\n}\n\n.titulo-lista{\n    margin-top: 30px;\n    margin-bottom: 30px;\n    font-size: 40px;\n}\n\n.project-name{\n    font-size: 20px;\n    text-align: left;\n    vertical-align: middle;\n    padding: 0;\n    position: relative;\n    line-height: 50px;\n    word-wrap: normal;\n    padding: 15px;\n}\n\n.project-delete{\n  position: relative;\n    line-height: 50px;\n    padding: 0;\n}\n\n.delete-button{\n  position: relative;\n  top: 50%;\n  text-align: center;\n  margin-top: -0.9em;\n  min-height: 100%;\n  min-width: 100%;\n  height: 30px;\n  width: 30px;\n  vertical-align: middle;\n  padding: 0;\n  text-align: center;\n  padding-top: 15px;\n  padding-bottom: 15px;\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-cover\" [style.min-height.px]=\"height\" >\n<div *ngIf=\"firstTime()\" class=\"container container-full\" >\n    <div *ngIf=\"newProject\" class=\"inicio\" [style.margin-top.px]=\"height/2-120\">\n        <a (click)=\"add()\" class=\"btn btn-xl \">Crea tu primer proyecto</a>\n    </div>\n    <div *ngIf=\"!newProject\" class=\"container-form\" [style.margin-top.px]=\"getMargin()\">\n          <div class=\"titulo-lista\">\n              <h2>Tus proyectos:</h2>\n          </div>\n          <div class=\"row card-header\" *ngFor=\"let project of projects; let i = index\">\n              <div class=\"col-11 project-name\">\n                {{project.title}}\n              </div>\n              <div class=\"col-1 project-delete\">\n                  <i class=\"fa fa-trash-o fa-2x delete-button\"\n                    (click)=\"delete(i)\" aria-hidden=\"true\"></i>\n              </div>\n          </div>\n          <a (click)=\"add()\" class=\"btn btn-xl \">Agregar proyecto</a>\n    </div>\n    <div *ngIf=\"false\" class=\"container-form\" [style.margin-top.px]=\"getMargin()\">\n        <div class=\"login-text\">\n            <h2>Tu nuevo proyecto:</h2>\n        </div>\n        <form  name=\"form\" class=\"form-login\"   novalidate>\n            <div class=\"form-group\">\n                <textarea class=\"form-control text-titulo\" id=\"exampleTextarea\"\n                [(ngModel)] = \"currentProject.title\" name=\"title\"\n                rows=\"4\" placeholder=\"Titulo de tu proyecto\"></textarea>\n            </div>\n            <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control input-text\"\n                [(ngModel)] = \"currentProject.adviser\" name=\"adviser\"\n                placeholder=\"Nombre del asesor\" />\n            </div>\n            <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control input-text\"\n                [(ngModel)] = \"currentProject.subject\" name=\"subject\"\n                placeholder=\"Nombre del curso\" />\n            </div>\n            <div class=\"form-group\">\n                <div class=\"row\">\n                    <div class=\"col\">\n                      <label class=\"col-form-label text-periodo\">Actividad:</label>\n                    </div>\n                    <div class=\"col\">\n                        <select class=\"form-control select-program\"\n                        [(ngModel)] = \"currentProject.activity\" name=\"activity\">\n                            <option value=\"individual\" class=\"select-option\" selected >Individual</option>\n                            <option value=\"grupal\" class=\"select-option\"  >Grupal</option>\n                        </select>\n                    </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control input-text\"\n                [(ngModel)] = \"currentProject.type\" name=\"type\"\n                placeholder=\"Tipo de proyecto\"  />\n                <popover-content #myPopover\n                    class = \"help-popover\"\n                    placement=\"left\"\n                    [animation]=\"true\"\n                    [closeOnClickOutside]=\"true\" >\n                    <div class=\"help-text\">\n                      Ej. proyecto de grado, proyecto de diseño, proyecto de mitad de carrera,\n                      proyecto de un curso, proyecto especial, tesis, proyecto de Expoandes.\n                    </div>\n                </popover-content>\n                <a class=\"help\" aria-label=\"Left Align\" ata-container=\"body\"\n                [popover]=\"myPopover\" [popoverDismissTimeout]=\"4000\" >\n                  <i class=\"fa fa-question-circle fa-2x color\" aria-hidden=\"true\"></i>\n                </a>\n            </div>\n            <div class=\"form-group\">\n                <div class=\"row\">\n                  <div class=\"col\">\n                    <label class=\"col-form-label text-periodo\">Periodo:</label>\n                  </div>\n                  <div class=\"col col-year\">\n                  <input type=\"number\" class=\"form-control input-year\" size=\"4\" min=\"1990\"\n                  [max]=\"this.year\" step=\"1\"\n                  [(ngModel)] = \"currentProject.period.year\" name=\"year\" />\n                  </div><div class=\"col\">\n                  <input type=\"number\" class=\"form-control input-periodo\" size=\"1\"\n                  min=\"1990\" max=\"3\" step=\"1\"\n                  [(ngModel)] = \"currentProject.period.semester\" name=\"semester\" />\n                  </div>\n                </div>\n            </div>\n            <div class=\"form-group\">\n              <select class=\"form-control select-program\"\n              [(ngModel)] = \"currentProject.program\" name=\"program\" >\n                <option value=\"\" disabled selected hidden>Escoge tu programa...</option>\n                <option class=\"select-option\" *ngFor=\"let carrera of carreras\"\n                    [value]=\"carrera\" >\n                  {{carrera}}\n                </option>\n                <!-- <option *ngFor=\"carrera of carreras\" class=\"select-option\">{{carrera}}</option> -->\n              </select>\n            </div>\n            <div class=\"form-group\" style=\"text-align: center;\">\n                <a (click)=\"saveProject()\" class=\"btn btn-xl \">Empezar</a>\n\n            </div>\n        </form>\n      </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_index__ = __webpack_require__("../../../../../src/app/_models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__carreras__ = __webpack_require__("../../../../../src/app/user/projects/carreras.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProjectsComponent = (function () {
    function ProjectsComponent(ngZone, router, route, answerService, projectService, dialogService, alertService) {
        var _this = this;
        this.ngZone = ngZone;
        this.router = router;
        this.route = route;
        this.answerService = answerService;
        this.projectService = projectService;
        this.dialogService = dialogService;
        this.alertService = alertService;
        this.carreras = __WEBPACK_IMPORTED_MODULE_4__carreras__["a" /* carreras */];
        this.projects = [];
        window.onresize = function (e) {
            ngZone.run(function () {
                _this.height = window.innerHeight;
            });
        };
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        this.height = window.innerHeight;
        window.scrollTo(0, 0);
        var year = new Date().getFullYear();
        this.year = year;
        this.newProject = false;
        this.projects = [];
        var u = JSON.parse(localStorage.getItem('currentUser'));
        this.currentUser = new __WEBPACK_IMPORTED_MODULE_2__models_index__["m" /* UserProject */](u._id, u.username, u.code);
        this.projectService.currentProject = null;
        console.log(this.currentUser);
        this.getProjects();
    };
    ProjectsComponent.prototype.getMargin = function () {
        if (this.height < 630)
            return -10;
        return (this.height / 2) - 370;
    };
    ProjectsComponent.prototype.firstTime = function () {
        return true;
    };
    ProjectsComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getByUserId(this.currentUser.userId)
            .subscribe(function (data) {
            if (data.length === 0)
                _this.newProject = true;
            else {
                _this.projects = data;
            }
        }, function (err) {
            _this.alertService.error(err);
        });
    };
    ProjectsComponent.prototype.saveProject = function () {
        var _this = this;
        this.projectService.create(this.currentProject).subscribe(function (data) {
            var idSurvey = _this.currentProject.idSurvey;
            _this.answerService.answer = new __WEBPACK_IMPORTED_MODULE_2__models_index__["a" /* Answer */]('', idSurvey, data._id, 1, [], []);
            _this.router.navigate(['./question'], { relativeTo: _this.route });
        }, function (err) {
            _this.alertService.error(err);
        });
    };
    ProjectsComponent.prototype.add = function () {
        var _this = this;
        var survey = null;
        this.projectService.getActiveSurvey()
            .subscribe(function (data) {
            survey = data;
        }, function (err) {
            _this.alertService.error(err);
        });
        if (survey) {
            this.newProject = false;
            this.currentProject = new __WEBPACK_IMPORTED_MODULE_2__models_index__["h" /* Project */]('', survey._id, '', '', '', 'individual', '', new __WEBPACK_IMPORTED_MODULE_2__models_index__["g" /* Period */](2018, 1), '', this.currentUser);
            window.scrollTo(0, 0);
        }
        else {
            this.alertService.error('Actualmente no hay encuestas disponibles');
        }
    };
    ProjectsComponent.prototype.delete = function (i) {
        var _this = this;
        this.dialogService.confirm('Esta seguro de eliminar el proyecto?')
            .then(function (res) {
            if (res) {
                var project = _this.projects[i];
                _this.projectService.delete(project._id)
                    .subscribe(function (data) {
                    _this.getProjects();
                }, function (err) {
                    _this.alertService.error(err);
                });
            }
        });
    };
    ProjectsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__("../../../../../src/app/user/projects/projects.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__services_index__["b" /* AnswerService */],
            __WEBPACK_IMPORTED_MODULE_3__services_index__["f" /* ProjectService */],
            __WEBPACK_IMPORTED_MODULE_3__services_index__["e" /* DialogService */],
            __WEBPACK_IMPORTED_MODULE_3__services_index__["a" /* AlertService */]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/question/question.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n.container-cover {\n\tbackground: url(" + __webpack_require__("../../../../../src/assets/bg-pattern.png") + "),#466bb4;\n\tbackground: url(" + __webpack_require__("../../../../../src/assets/bg-pattern.png") + "),linear-gradient(to left,#2f58aa,#5175e3);\n}\n\n.container-full{\n  width: 100%;\n}\n\n.question-title{\n  font-size: 20px;\n  line-height: 1.2;\n  font-weight: bold;\n  word-spacing: 1px;\n  font-family: 'Catamaran',sans-serif;\n}\n\n.respuesta-abierta{\n  min-width: 100%;\n}\n\n.respuesta-unica{\n  min-width: 100%;\n  text-align: left;\n}\n\n.text-area{\n\tmin-width: 100%;\n}\n\n.mover-btn{\n\tmin-width: 40px;\n\tmin-height: 40px;\n}\n\n.message-title{\n  font-size: 20px;\n  line-height: 1.2;\n  font-weight: bolder;\n  word-spacing: 1px;\n  font-family: 'Catamaran',sans-serif;\n}\n\n.message-text{\n  font-size: 17px;\n  text-align: justify;\n  text-justify: inter-word;\n  line-height: 1.4;\n  font-weight: bold;\n  font-family: 'Catamaran',sans-serif;\n}\n\n.result-title{\n  font-size: 22px;\n\tmargin-bottom: 15px;\n  line-height: 1.2;\n  font-weight: bolder;\n  word-spacing: 1px;\n  font-family: 'Catamaran',sans-serif;\n}\n\n.card-remark{\n\tbackground-color: transparent;\n\tborder-color: white;\n\tmargin-top: 10px;\n}\n\n.header-remark{\n\tbackground-color: rgba(238, 238, 238, 0.64);\n\tcolor: rgb(20, 85, 138);\n  font-weight: bold;\n  font-size: 17px;\n}\n\n.block-remark{\n  text-align: justify;\n  text-justify: inter-word;\n}\n\n.btn-xl {\n\tcolor: #fff;\n\tmargin-top: 10px;\n\tborder: 1px solid;\n\tborder-radius: 300px;\n\tpadding: 15px 45px;\n\tfont-size: 14px;\n  transition: all 0.3s;\n}\n\n.btn-xl:hover {\n  transition: all 0.3s;\n  background-color: rgb(212, 131, 47);\n  font-weight: bolder;\n}\n\n@media screen and (min-width : 992px){\n}\n@media screen and (max-width : 992px){\n}\n@media screen and (max-width : 768px){\n}\n@media screen and (max-width : 576px){\n\t.question-title{\n\t\tfont-size: 16px;\n\t}\n\t.message-title{\n\t\tfont-size: 16px;\n\t}\n\t.message-text{\n\t\tfont-size: 13px;\n\t}\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/question/question.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-cover\" [style.min-height.px]=\"height\" >\n<div class=\"container container-full\" >\n<div class=\"container container-question\" #containerQuestion [style.margin-top.px]=\"getMargin()\">\n    <div  *ngIf=\"available && !isShowMessage && !isShowResult\" >\n        <div class=\"row\">\n            <div class=\"col-lg col-md-12\">\n                <div class=\"question-title\">\n                    <p>{{currentQuestion.title}}</p>\n                </div>\n                <!-- <div *ngIf=\"isAbierta()\" ngclass=\"respuessta-abierta\">\n                    <div class=\"form-group\">\n                        <textarea class=\"form-control\" name=\"name\" rows=\"3\"\n                        [(ngModel)]=\"currentQuestion.textArea\" name=\"textArea\"></textarea>\n                    </div>\n                </div> -->\n                <div *ngIf=\"!isAbierta()\" class=\"respuesta-unica\">\n                    <div *ngFor=\"let option of optionsAnswered; let i = index\">\n                        <div class=\"row\">\n                            <div class=\"col form-check\" >\n                                <label class=\"form-check-label\">\n                                    <input [type]=\"tipoOpcion(i)\" cheked=\"false\"\n                                    (change)=\"(option.checked)?option.checked=false:option.checked=true\"\n                                    class=\"form-check-input\" name=\"tipo\">\n                                    {{option.text}}\n                                </label>\n                                <textarea class=\"text-area\" *ngIf=\"isTextArea(i) && option.checked\" rows=\"4\" [(ngModel)]=\"option.answer\">\n                                </textarea>\n                            </div>\n                            <div *ngIf=\"option.help\" class=\"col-1\">\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"currentQuestion.help\" class=\"col-lg-5 col-md-12\">\n                <div class=\"message-title\">\n                    <p>{{currentQuestion.help.title}}</p>\n                </div>\n                <div class=\"message-text\">\n                    <p>{{currentQuestion.help.text}}</p>\n                </div>\n                <!-- <div class=\"message-text\">\n                    <p>{{currentMessage.text}}</p>\n                </div> -->\n            </div>\n        </div>\n\n        <div class=\"row justify-content-center\">\n            <div *ngIf=\"currentPos>1\" class=\"col-4\">\n                <a class=\"mover-btn\" (click)=\"anterior()\"><i class=\"fa fa-arrow-left fa-3x\" aria-hidden=\"true\"></i>\n                </a>\n            </div>\n            <div class=\"col-4\">\n                <a class=\"mover-btn\" (click)=\"siguiente()\" ><i class=\"fa fa-arrow-right fa-3x\" aria-hidden=\"true\"></i>\n                </a>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"isShowMessage\">\n        <div class=\"message-title\">\n            <p>{{currentMessage.title}}</p>\n        </div>\n        <div class=\"message-text\">\n            <p>{{currentMessage.text}}</p>\n        </div>\n        <a (click)=\"closeMessage()\" class=\"btn btn-xl \">Entendido!</a>\n        <!-- <div class=\"message-text\">\n            <p>{{currentMessage.text}}</p>\n        </div> -->\n    </div>\n\n    <div *ngIf=\"!isShowMessage && isShowResult\">\n        <div class=\"result-title\">\n            <p>RESULTADO</p>\n        </div>\n        <div *ngFor=\"let remark of this.answerService.answer.remarks\">\n            <div class=\"card card-remark\">\n                <div class=\"card-header header-remark\">\n                    {{remark.title}}\n                </div>\n                <div class=\"card-block block-remark\">\n                    {{remark.text}}\n                </div>\n            </div>\n        </div>\n        <a (click)=\"closeResult()\" class=\"btn btn-xl \">¡Gracias!</a>\n\n        <!-- <div class=\"message-text\">\n            <p>{{currentMessage.text}}</p>\n        </div> -->\n    </div>\n</div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/user/question/question.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_index__ = __webpack_require__("../../../../../src/app/_models/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__data_questionTypes__ = __webpack_require__("../../../../../src/app/_data/questionTypes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var QuestionComponent = (function () {
    function QuestionComponent(ngZone, questionService, answerService, alertService, router, route) {
        var _this = this;
        this.ngZone = ngZone;
        this.questionService = questionService;
        this.answerService = answerService;
        this.alertService = alertService;
        this.router = router;
        this.route = route;
        this.currentQuestion = null;
        this.currentMessage = null;
        this.optionsAnswered = [];
        this.types = __WEBPACK_IMPORTED_MODULE_4__data_questionTypes__["a" /* types */];
        window.onresize = function (e) {
            ngZone.run(function () {
                _this.height = window.innerHeight;
                var size = (_this.height / 2) - 90;
                if (_this.elementView) {
                    var sizeElem = _this.elementView.nativeElement.offsetHeight / 2;
                    if (sizeElem > size)
                        _this.margin = 0;
                    else
                        _this.margin = size - sizeElem;
                }
            });
        };
    }
    QuestionComponent.prototype.ngOnInit = function () {
        this.available = false;
        this.height = window.innerHeight;
        this.isShowResult = false;
        this.isShowMessage = false;
        this.optionsAnswered = [];
        if (this.answerService.answer)
            this.currentPos = this.answerService.answer.currentPos;
        else
            this.currentPos = 1;
        this.loadCurrentQuestion();
        this.getMargin();
    };
    QuestionComponent.prototype.ngAfterViewInit = function () {
        window.scrollTo(0, 0);
    };
    QuestionComponent.prototype.getMargin = function () {
        var size = this.height / 2 - 90;
        if (this.elementView) {
            var sizeElem = this.elementView.nativeElement.offsetHeight / 2;
            if (sizeElem > size)
                return 0;
            else
                return size - sizeElem;
        }
        return 0;
    };
    QuestionComponent.prototype.loadCurrentQuestion = function () {
        var _this = this;
        if (this.answerService.answer) {
            this.questionService.getByPos(this.currentPos).subscribe(function (question) {
                if (!(question === '')) {
                    _this.currentQuestion = question;
                    _this.loadAnswer();
                    _this.available = true;
                }
                else {
                    _this.isShowResult = true;
                }
            }, function (err) { return _this.router.navigate(['../'], { relativeTo: _this.route }); });
        }
        else
            this.router.navigate(['../'], { relativeTo: this.route });
    };
    QuestionComponent.prototype.loadAnswer = function () {
        this.optionsAnswered = [];
        if (this.currentQuestion.type === __WEBPACK_IMPORTED_MODULE_4__data_questionTypes__["a" /* types */][2].type) {
            var o = new __WEBPACK_IMPORTED_MODULE_2__models_index__["f" /* OptionAnswered */]('a', __WEBPACK_IMPORTED_MODULE_4__data_questionTypes__["a" /* types */][2].type, true, '');
            this.optionsAnswered.push(o);
        }
        else if (this.currentQuestion.type === __WEBPACK_IMPORTED_MODULE_4__data_questionTypes__["a" /* types */][3].type) {
            var o = new __WEBPACK_IMPORTED_MODULE_2__models_index__["f" /* OptionAnswered */]('a', __WEBPACK_IMPORTED_MODULE_4__data_questionTypes__["a" /* types */][3].type, true, '');
            this.optionsAnswered.push(o);
        }
        else {
            for (var _i = 0, _a = this.currentQuestion.options; _i < _a.length; _i++) {
                var option = _a[_i];
                var o = new __WEBPACK_IMPORTED_MODULE_2__models_index__["f" /* OptionAnswered */](option._id, option.text, false, 'a');
                this.optionsAnswered.push(o);
            }
        }
        var q = new __WEBPACK_IMPORTED_MODULE_2__models_index__["j" /* QuestionAsked */](this.currentQuestion._id, this.currentQuestion.title, this.currentQuestion.type, this.optionsAnswered);
        this.answerService.answer.questionsAsked.push(q);
    };
    QuestionComponent.prototype.save = function () {
    };
    QuestionComponent.prototype.anterior = function () {
        // if(this.jump>0){
        //   this.currentPos = this.currentPos-this.jump-1;
        // }
        // else
        //   this.currentPos = this.currentPos-1;
        //   let long = this.answerService.answer.questions.length;
        // this.currentQuestion = this.answerService.answer.questions[long-2];
        // this.answerService.answer.questions.splice(this.currentPos-1,1);
        // this.jump = 0;
    };
    QuestionComponent.prototype.siguiente = function () {
        this.available = false;
        this.jump();
        this.loadCurrentQuestion();
        // this.answerService.create().subscribe(
        //   data => {
        //
        //   },
        //   err => {
        //      this.alertService.error(err);
        //   }
        // )
    };
    QuestionComponent.prototype.jump = function () {
        var i = 0;
        var n = 0;
        for (var _i = 0, _a = this.optionsAnswered; _i < _a.length; _i++) {
            var option = _a[_i];
            if (option.checked) {
                if (this.currentQuestion.options[i].message) {
                    this.answerService.answer.remarks.push(option.message);
                }
                if (this.currentQuestion.options[i].jump > n) {
                    n = this.currentQuestion.options[i].jump;
                }
            }
            i++;
        }
        this.currentPos = this.currentPos + n + 1;
    };
    QuestionComponent.prototype.isTextArea = function (i) {
        return this.currentQuestion.options[i].isTextArea;
    };
    QuestionComponent.prototype.isAbierta = function () {
        return (this.currentQuestion.type === 'abierta') ? true : false;
    };
    QuestionComponent.prototype.tipoOpcion = function () {
        return (this.currentQuestion.type === 'unica') ? 'radio' : 'checkbox';
    };
    QuestionComponent.prototype.toggleSelect = function (i) {
        // let selected = this.currentQuestion.options[i].selected;
        // if(selected)
        //   this.currentQuestion.options[i].selected=false;
        // else{
        //   this.currentQuestion.options[i].selected=true;
        //   if(this.currentQuestion.options[i].message)
        //   {
        //     this.currentMessage=this.currentQuestion.options[i].message;
        //     this.showMessage();
        //   }
        // }
    };
    QuestionComponent.prototype.showMessage = function () {
        this.isShowMessage = true;
    };
    QuestionComponent.prototype.closeResult = function () {
        this.isShowResult = false;
        this.router.navigate(['../'], { relativeTo: this.route });
    };
    QuestionComponent.prototype.closeMessage = function () {
        this.isShowMessage = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('containerQuestion'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], QuestionComponent.prototype, "elementView", void 0);
    QuestionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-question',
            template: __webpack_require__("../../../../../src/app/user/question/question.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/question/question.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_3__services_index__["g" /* QuestionService */],
            __WEBPACK_IMPORTED_MODULE_3__services_index__["b" /* AnswerService */],
            __WEBPACK_IMPORTED_MODULE_3__services_index__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], QuestionComponent);
    return QuestionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/user-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__projects_projects_component__ = __webpack_require__("../../../../../src/app/user/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__question_question_component__ = __webpack_require__("../../../../../src/app/user/question/question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guards_auth_guard_service__ = __webpack_require__("../../../../../src/app/_guards/auth-guard.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var userRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__user_component__["a" /* UserComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard_service__["a" /* AuthGuard */]],
        children: [
            {
                path: '',
                canActivateChild: [__WEBPACK_IMPORTED_MODULE_5__guards_auth_guard_service__["a" /* AuthGuard */]],
                children: [
                    { path: 'projects', component: __WEBPACK_IMPORTED_MODULE_3__projects_projects_component__["a" /* ProjectsComponent */] },
                    { path: 'projects/question', component: __WEBPACK_IMPORTED_MODULE_4__question_question_component__["a" /* QuestionComponent */] },
                    { path: '', redirectTo: 'projects' }
                ]
            }
        ]
    }
];
var UserRoutingModule = (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(userRoutes)
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */]
            ]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-cover{\n  background: url(" + __webpack_require__("../../../../../src/assets/bg-pattern.png") + "),#7b4397;\n  background: url(" + __webpack_require__("../../../../../src/assets/bg-pattern.png") + "),linear-gradient(to left,#7b4397,#dc2430);\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-user',
            template: __webpack_require__("../../../../../src/app/user/user.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__projects_projects_component__ = __webpack_require__("../../../../../src/app/user/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__helpers_custom_http__ = __webpack_require__("../../../../../src/app/_helpers/custom-http.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_popover__ = __webpack_require__("../../../../ngx-popover/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_popover___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ngx_popover__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_routing_module__ = __webpack_require__("../../../../../src/app/user/user-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__question_question_component__ = __webpack_require__("../../../../../src/app/user/question/question.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var UserModule = (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_6_ngx_popover__["PopoverModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__user_routing_module__["a" /* UserRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_3__projects_projects_component__["a" /* ProjectsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__question_question_component__["a" /* QuestionComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__helpers_custom_http__["a" /* CustomHttpProvider */],
                __WEBPACK_IMPORTED_MODULE_9__services_index__["g" /* QuestionService */],
                __WEBPACK_IMPORTED_MODULE_9__services_index__["b" /* AnswerService */],
                __WEBPACK_IMPORTED_MODULE_9__services_index__["f" /* ProjectService */],
                __WEBPACK_IMPORTED_MODULE_9__services_index__["e" /* DialogService */]
            ]
        })
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "../../../../ngx-popover/Popover.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var PopoverContent_1 = __webpack_require__("../../../../ngx-popover/PopoverContent.js");
var Popover = (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function Popover(viewContainerRef, resolver) {
        this.viewContainerRef = viewContainerRef;
        this.resolver = resolver;
        // -------------------------------------------------------------------------
        // Properties
        // -------------------------------------------------------------------------
        this.PopoverComponent = PopoverContent_1.PopoverContent;
        this.popoverOnHover = false;
        this.popoverDismissTimeout = 0;
        this.onShown = new core_1.EventEmitter();
        this.onHidden = new core_1.EventEmitter();
    }
    // -------------------------------------------------------------------------
    // Event listeners
    // -------------------------------------------------------------------------
    Popover.prototype.showOrHideOnClick = function () {
        if (this.popoverOnHover)
            return;
        if (this.popoverDisabled)
            return;
        this.toggle();
    };
    Popover.prototype.showOnHover = function () {
        if (!this.popoverOnHover)
            return;
        if (this.popoverDisabled)
            return;
        this.show();
    };
    Popover.prototype.hideOnHover = function () {
        if (this.popoverCloseOnMouseOutside)
            return; // don't do anything since not we control this
        if (!this.popoverOnHover)
            return;
        if (this.popoverDisabled)
            return;
        this.hide();
    };
    Popover.prototype.ngOnChanges = function (changes) {
        if (changes["popoverDisabled"]) {
            if (changes["popoverDisabled"].currentValue) {
                this.hide();
            }
        }
    };
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    Popover.prototype.toggle = function () {
        if (!this.visible) {
            this.show();
        }
        else {
            this.hide();
        }
    };
    Popover.prototype.show = function () {
        var _this = this;
        if (this.visible)
            return;
        this.visible = true;
        if (typeof this.content === "string") {
            var factory = this.resolver.resolveComponentFactory(this.PopoverComponent);
            if (!this.visible)
                return;
            this.popover = this.viewContainerRef.createComponent(factory);
            var popover = this.popover.instance;
            popover.popover = this;
            popover.content = this.content;
            if (this.popoverPlacement !== undefined)
                popover.placement = this.popoverPlacement;
            if (this.popoverAnimation !== undefined)
                popover.animation = this.popoverAnimation;
            if (this.popoverTitle !== undefined)
                popover.title = this.popoverTitle;
            if (this.popoverCloseOnClickOutside !== undefined)
                popover.closeOnClickOutside = this.popoverCloseOnClickOutside;
            if (this.popoverCloseOnMouseOutside !== undefined)
                popover.closeOnMouseOutside = this.popoverCloseOnMouseOutside;
            popover.onCloseFromOutside.subscribe(function () { return _this.hide(); });
            // if dismissTimeout option is set, then this popover will be dismissed in dismissTimeout time
            if (this.popoverDismissTimeout > 0)
                setTimeout(function () { return _this.hide(); }, this.popoverDismissTimeout);
        }
        else {
            var popover = this.content;
            popover.popover = this;
            if (this.popoverPlacement !== undefined)
                popover.placement = this.popoverPlacement;
            if (this.popoverAnimation !== undefined)
                popover.animation = this.popoverAnimation;
            if (this.popoverTitle !== undefined)
                popover.title = this.popoverTitle;
            if (this.popoverCloseOnClickOutside !== undefined)
                popover.closeOnClickOutside = this.popoverCloseOnClickOutside;
            if (this.popoverCloseOnMouseOutside !== undefined)
                popover.closeOnMouseOutside = this.popoverCloseOnMouseOutside;
            popover.onCloseFromOutside.subscribe(function () { return _this.hide(); });
            // if dismissTimeout option is set, then this popover will be dismissed in dismissTimeout time
            if (this.popoverDismissTimeout > 0)
                setTimeout(function () { return _this.hide(); }, this.popoverDismissTimeout);
            popover.show();
        }
        this.onShown.emit(this);
    };
    Popover.prototype.hide = function () {
        if (!this.visible)
            return;
        this.visible = false;
        if (this.popover)
            this.popover.destroy();
        if (this.content instanceof PopoverContent_1.PopoverContent)
            this.content.hideFromPopover();
        this.onHidden.emit(this);
    };
    Popover.prototype.getElement = function () {
        return this.viewContainerRef.element.nativeElement;
    };
    return Popover;
}());
__decorate([
    core_1.Input("popover"),
    __metadata("design:type", Object)
], Popover.prototype, "content", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], Popover.prototype, "popoverDisabled", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], Popover.prototype, "popoverAnimation", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Popover.prototype, "popoverPlacement", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], Popover.prototype, "popoverTitle", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], Popover.prototype, "popoverOnHover", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], Popover.prototype, "popoverCloseOnClickOutside", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], Popover.prototype, "popoverCloseOnMouseOutside", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], Popover.prototype, "popoverDismissTimeout", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], Popover.prototype, "onShown", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], Popover.prototype, "onHidden", void 0);
__decorate([
    core_1.HostListener("click"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Popover.prototype, "showOrHideOnClick", null);
__decorate([
    core_1.HostListener("focusin"),
    core_1.HostListener("mouseenter"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Popover.prototype, "showOnHover", null);
__decorate([
    core_1.HostListener("focusout"),
    core_1.HostListener("mouseleave"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Popover.prototype, "hideOnHover", null);
Popover = __decorate([
    core_1.Directive({
        selector: "[popover]",
        exportAs: "popover"
    }),
    __metadata("design:paramtypes", [core_1.ViewContainerRef,
        core_1.ComponentFactoryResolver])
], Popover);
exports.Popover = Popover;
//# sourceMappingURL=Popover.js.map

/***/ }),

/***/ "../../../../ngx-popover/PopoverContent.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var PopoverContent = (function () {
    // -------------------------------------------------------------------------
    // Constructor
    // -------------------------------------------------------------------------
    function PopoverContent(element, cdr, renderer) {
        var _this = this;
        this.element = element;
        this.cdr = cdr;
        this.renderer = renderer;
        this.placement = "bottom";
        this.animation = true;
        this.closeOnClickOutside = false;
        this.closeOnMouseOutside = false;
        this.onCloseFromOutside = new core_1.EventEmitter();
        this.top = -10000;
        this.left = -10000;
        this.isIn = false;
        this.displayType = "none";
        // -------------------------------------------------------------------------
        // Anonymous 
        // -------------------------------------------------------------------------
        /**
         * Closes dropdown if user clicks outside of this directive.
         */
        this.onDocumentMouseDown = function (event) {
            var element = _this.element.nativeElement;
            if (!element || !_this.popover)
                return;
            if (element.contains(event.target) || _this.popover.getElement().contains(event.target))
                return;
            _this.hide();
            _this.onCloseFromOutside.emit(undefined);
        };
    }
    PopoverContent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.closeOnClickOutside)
            this.listenClickFunc = this.renderer.listenGlobal("document", "mousedown", function (event) { return _this.onDocumentMouseDown(event); });
        if (this.closeOnMouseOutside)
            this.listenMouseFunc = this.renderer.listenGlobal("document", "mouseover", function (event) { return _this.onDocumentMouseDown(event); });
        this.show();
        this.cdr.detectChanges();
    };
    PopoverContent.prototype.ngOnDestroy = function () {
        if (this.closeOnClickOutside)
            this.listenClickFunc();
        if (this.closeOnMouseOutside)
            this.listenMouseFunc();
    };
    // -------------------------------------------------------------------------
    // Public Methods
    // -------------------------------------------------------------------------
    PopoverContent.prototype.show = function () {
        if (!this.popover || !this.popover.getElement())
            return;
        var p = this.positionElements(this.popover.getElement(), this.popoverDiv.nativeElement, this.placement);
        this.displayType = "block";
        this.top = p.top;
        this.left = p.left;
        this.isIn = true;
    };
    PopoverContent.prototype.hide = function () {
        this.top = -10000;
        this.left = -10000;
        this.isIn = true;
        this.popover.hide();
    };
    PopoverContent.prototype.hideFromPopover = function () {
        this.top = -10000;
        this.left = -10000;
        this.isIn = true;
    };
    // -------------------------------------------------------------------------
    // Protected Methods
    // -------------------------------------------------------------------------
    PopoverContent.prototype.positionElements = function (hostEl, targetEl, positionStr, appendToBody) {
        if (appendToBody === void 0) { appendToBody = false; }
        var positionStrParts = positionStr.split("-");
        var pos0 = positionStrParts[0];
        var pos1 = positionStrParts[1] || "center";
        var hostElPos = appendToBody ? this.offset(hostEl) : this.position(hostEl);
        var targetElWidth = targetEl.offsetWidth;
        var targetElHeight = targetEl.offsetHeight;
        this.effectivePlacement = pos0 = this.getEffectivePlacement(pos0, hostEl, targetEl);
        var shiftWidth = {
            center: function () {
                return hostElPos.left + hostElPos.width / 2 - targetElWidth / 2;
            },
            left: function () {
                return hostElPos.left;
            },
            right: function () {
                return hostElPos.left + hostElPos.width;
            }
        };
        var shiftHeight = {
            center: function () {
                return hostElPos.top + hostElPos.height / 2 - targetElHeight / 2;
            },
            top: function () {
                return hostElPos.top;
            },
            bottom: function () {
                return hostElPos.top + hostElPos.height;
            }
        };
        var targetElPos;
        switch (pos0) {
            case "right":
                targetElPos = {
                    top: shiftHeight[pos1](),
                    left: shiftWidth[pos0]()
                };
                break;
            case "left":
                targetElPos = {
                    top: shiftHeight[pos1](),
                    left: hostElPos.left - targetElWidth
                };
                break;
            case "bottom":
                targetElPos = {
                    top: shiftHeight[pos0](),
                    left: shiftWidth[pos1]()
                };
                break;
            default:
                targetElPos = {
                    top: hostElPos.top - targetElHeight,
                    left: shiftWidth[pos1]()
                };
                break;
        }
        return targetElPos;
    };
    PopoverContent.prototype.position = function (nativeEl) {
        var offsetParentBCR = { top: 0, left: 0 };
        var elBCR = this.offset(nativeEl);
        var offsetParentEl = this.parentOffsetEl(nativeEl);
        if (offsetParentEl !== window.document) {
            offsetParentBCR = this.offset(offsetParentEl);
            offsetParentBCR.top += offsetParentEl.clientTop - offsetParentEl.scrollTop;
            offsetParentBCR.left += offsetParentEl.clientLeft - offsetParentEl.scrollLeft;
        }
        var boundingClientRect = nativeEl.getBoundingClientRect();
        return {
            width: boundingClientRect.width || nativeEl.offsetWidth,
            height: boundingClientRect.height || nativeEl.offsetHeight,
            top: elBCR.top - offsetParentBCR.top,
            left: elBCR.left - offsetParentBCR.left
        };
    };
    PopoverContent.prototype.offset = function (nativeEl) {
        var boundingClientRect = nativeEl.getBoundingClientRect();
        return {
            width: boundingClientRect.width || nativeEl.offsetWidth,
            height: boundingClientRect.height || nativeEl.offsetHeight,
            top: boundingClientRect.top + (window.pageYOffset || window.document.documentElement.scrollTop),
            left: boundingClientRect.left + (window.pageXOffset || window.document.documentElement.scrollLeft)
        };
    };
    PopoverContent.prototype.getStyle = function (nativeEl, cssProp) {
        if (nativeEl.currentStyle)
            return nativeEl.currentStyle[cssProp];
        if (window.getComputedStyle)
            return window.getComputedStyle(nativeEl)[cssProp];
        // finally try and get inline style
        return nativeEl.style[cssProp];
    };
    PopoverContent.prototype.isStaticPositioned = function (nativeEl) {
        return (this.getStyle(nativeEl, "position") || "static") === "static";
    };
    PopoverContent.prototype.parentOffsetEl = function (nativeEl) {
        var offsetParent = nativeEl.offsetParent || window.document;
        while (offsetParent && offsetParent !== window.document && this.isStaticPositioned(offsetParent)) {
            offsetParent = offsetParent.offsetParent;
        }
        return offsetParent || window.document;
    };
    PopoverContent.prototype.getEffectivePlacement = function (placement, hostElement, targetElement) {
        var placementParts = placement.split(" ");
        if (placementParts[0] !== "auto") {
            return placement;
        }
        var hostElBoundingRect = hostElement.getBoundingClientRect();
        var desiredPlacement = placementParts[1] || "bottom";
        if (desiredPlacement === "top" && hostElBoundingRect.top - targetElement.offsetHeight < 0) {
            return "bottom";
        }
        if (desiredPlacement === "bottom" && hostElBoundingRect.bottom + targetElement.offsetHeight > window.innerHeight) {
            return "top";
        }
        if (desiredPlacement === "left" && hostElBoundingRect.left - targetElement.offsetWidth < 0) {
            return "right";
        }
        if (desiredPlacement === "right" && hostElBoundingRect.right + targetElement.offsetWidth > window.innerWidth) {
            return "left";
        }
        return desiredPlacement;
    };
    return PopoverContent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PopoverContent.prototype, "content", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PopoverContent.prototype, "placement", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], PopoverContent.prototype, "title", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], PopoverContent.prototype, "animation", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], PopoverContent.prototype, "closeOnClickOutside", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean)
], PopoverContent.prototype, "closeOnMouseOutside", void 0);
__decorate([
    core_1.ViewChild("popoverDiv"),
    __metadata("design:type", core_1.ElementRef)
], PopoverContent.prototype, "popoverDiv", void 0);
PopoverContent = __decorate([
    core_1.Component({
        selector: "popover-content",
        template: "\n<div #popoverDiv class=\"popover {{ effectivePlacement }}\"\n     [style.top]=\"top + 'px'\"\n     [style.left]=\"left + 'px'\"\n     [class.in]=\"isIn\"\n     [class.fade]=\"animation\"\n     style=\"display: block\"\n     role=\"popover\">\n    <div [hidden]=\"!closeOnMouseOutside\" class=\"virtual-area\"></div>\n    <div class=\"arrow\"></div> \n    <h3 class=\"popover-title\" [hidden]=\"!title\">{{ title }}</h3>\n    <div class=\"popover-content\">\n        <ng-content></ng-content>\n        {{ content }}\n    </div> \n</div>\n",
        styles: ["\n.popover .virtual-area {\n    height: 11px;\n    width: 100%;\n    position: absolute;\n}\n.popover.top .virtual-area {\n    bottom: -11px; \n}\n.popover.bottom .virtual-area {\n    top: -11px; \n}\n.popover.left .virtual-area {\n    right: -11px; \n}\n.popover.right .virtual-area {\n    left: -11px; \n}\n"]
    }),
    __metadata("design:paramtypes", [core_1.ElementRef,
        core_1.ChangeDetectorRef,
        core_1.Renderer])
], PopoverContent);
exports.PopoverContent = PopoverContent;
//# sourceMappingURL=PopoverContent.js.map

/***/ }),

/***/ "../../../../ngx-popover/index.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var Popover_1 = __webpack_require__("../../../../ngx-popover/Popover.js");
var PopoverContent_1 = __webpack_require__("../../../../ngx-popover/PopoverContent.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
__export(__webpack_require__("../../../../ngx-popover/Popover.js"));
__export(__webpack_require__("../../../../ngx-popover/PopoverContent.js"));
var PopoverModule = (function () {
    function PopoverModule() {
    }
    return PopoverModule;
}());
PopoverModule = __decorate([
    core_1.NgModule({
        imports: [
            common_1.CommonModule
        ],
        declarations: [
            PopoverContent_1.PopoverContent,
            Popover_1.Popover,
        ],
        exports: [
            PopoverContent_1.PopoverContent,
            Popover_1.Popover,
        ],
        entryComponents: [
            PopoverContent_1.PopoverContent
        ]
    })
], PopoverModule);
exports.PopoverModule = PopoverModule;
//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=user.module.chunk.js.map