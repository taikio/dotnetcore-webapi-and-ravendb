(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet>\n  <app-spinner></app-spinner>\n</router-outlet>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/components/auth-signin/auth-signin.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/components/auth-signin/auth-signin.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"auth-wrapper\">\n  <div class=\"auth-content\">\n    <div class=\"card\">\n      <form [formGroup]=\"authForm\" id=\"authForm\">\n        <div class=\"row align-items-center text-center\">\n          <div class=\"col-md-12\">\n            <div class=\"card-body\">\n              <img src=\"assets/images/logo-dark.png\" alt=\"\" class=\"img-fluid mb-4\">\n              <h4 class=\"mb-3 f-w-400\">Acessar o sistema</h4>\n              <div class=\"input-group mb-3\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"feather icon-user\"></i></span>\n                </div>\n                <input type=\"email\" class=\"form-control custom-input\" placeholder=\"Username\" formControlName=\"username\">\n              </div>\n              <div class=\"input-group mb-4\">\n                <div class=\"input-group-prepend\">\n                  <span class=\"input-group-text\"><i class=\"feather icon-lock\"></i></span>\n                </div>\n                <input type=\"password\" class=\"form-control custom-input\" placeholder=\"Password\" formControlName=\"password\">\n              </div>\n              <!-- <div class=\"form-group text-left mt-2\">\n                <div class=\"checkbox checkbox-primary d-inline\">\n                  <input type=\"checkbox\" name=\"checkbox-fill-1\" id=\"checkbox-fill-a1\" checked=\"\">\n                  <label for=\"checkbox-fill-a1\" class=\"cr\"> Save credentials</label>\n                </div>\n              </div> -->\n              <button class=\"btn btn-block btn-primary mb-4\" (click)=\"submmit()\">Logar</button>\n              <!-- <p class=\"mb-2 text-muted\">Esqueceu a senha? <a [routerLink]=\"['/auth/reset-password']\"\n                  class=\"f-w-400\">Reset</a></p>\n              <p class=\"mb-0 text-muted\">Don’t have an account? <a [routerLink]=\"['/auth/signup']\"\n                  class=\"f-w-400\">Signup</a></p> -->\n            </div>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/components/auth-signup/auth-signup.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/components/auth-signup/auth-signup.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"auth-wrapper\">\n  <div class=\"auth-content\">\n    <div class=\"card\">\n      <div class=\"row align-items-center text-center\">\n        <div class=\"col-md-12\">\n          <div class=\"card-body\">\n            <img src=\"assets/images/logo-dark.png\" alt=\"\" class=\"img-fluid mb-4\">\n            <h4 class=\"mb-3 f-w-400\">Sign up</h4>\n            <div class=\"input-group mb-3\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"feather icon-user\"></i></span>\n              </div>\n              <input type=\"text\" class=\"form-control custom-input\" placeholder=\"Username\">\n            </div>\n            <div class=\"input-group mb-3\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"feather icon-mail\"></i></span>\n              </div>\n              <input type=\"email\" class=\"form-control custom-input\" placeholder=\"Email address\">\n            </div>\n            <div class=\"input-group mb-4\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\"><i class=\"feather icon-lock\"></i></span>\n              </div>\n              <input type=\"password\" class=\"form-control custom-input\" placeholder=\"Password\">\n            </div>\n            <div class=\"form-group text-left mt-2\">\n              <div class=\"checkbox checkbox-primary d-inline\">\n                <input type=\"checkbox\" name=\"checkbox-fill-2\" id=\"checkbox-fill-2\">\n                <label for=\"checkbox-fill-2\" class=\"cr\">Send me the <a href=\"javascript:\"> Newsletter</a> weekly.</label>\n              </div>\n            </div>\n            <button class=\"btn btn-primary btn-block mb-4\">Sign up</button>\n            <p class=\"mb-2\">Already have an account? <a [routerLink]=\"['/auth/signin']\" class=\"f-w-400\">Signin</a></p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/customer/components/change-customer/change-customer.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/customer/components/change-customer/change-customer.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n        <h4 class=\"modal-title\" id=\"modal-basic-title\" *ngIf=\"type != 'cancel'\">Alterar Cadastro de Cliente</h4>\n        <h4 class=\"modal-title\" id=\"modal-basic-title\" *ngIf=\"type == 'cancel'\">Excluir Cliente</h4>\n        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row\">\n          <div class=\"col-md-6\" *ngIf=\"type == 'cancel'\">\n            <p>Deseja realmente excluir esse client?</p>\n          </div>\n          <div class=\"col-md-12\" *ngIf=\"type == 'name'\">\n            <div class=\"form-group\">\n              <label for=\"exampleInputEmail1\">Nome</label>\n              <input type=\"email\" class=\"form-control\" aria-describedby=\"description\" placeholder=\"Informe o nome\"\n                [(ngModel)]=\"name\">\n            </div>\n          </div>\n          <div class=\"col-md-12\" *ngIf=\"type == 'shortname'\">\n            <div class=\"form-group\">\n              <label for=\"exampleInputEmail1\">Nome Abreviado</label>\n              <input type=\"email\" class=\"form-control\" aria-describedby=\"description\" placeholder=\"Informe o nome abreviado\"\n                [(ngModel)]=\"shortname\">\n            </div>\n          </div>\n          <div class=\"col-md-6\" *ngIf=\"type == 'cpf'\">\n            <div class=\"form-group\">\n              <label for=\"exampleFormControlSelect1\">Cpf</label>\n              <input type=\"number\" class=\"form-control\" aria-describedby=\"description\" [(ngModel)]=\"cpf\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"save()\" *ngIf=\"type != 'cancel'\">Save</button>\n        <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"cancel()\" *ngIf=\"type == 'cancel'\">Sim,\n          Cancelar</button>\n      </div>\n      ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/customer/components/form-customer/form-customer.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/customer/components/form-customer/form-customer.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Novo lançamento financeiro\" [options]=\"false\">\n      <form [formGroup]=\"customerForm\">\n\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"name\">Nome</label>\n              <input type=\"text\" class=\"form-control custom-input\" aria-describedby=\"name\" placeholder=\"Nome do cliente\"\n                formControlName=\"name\">\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"shortName\">Nome Abreviado</label>\n              <input type=\"text\" class=\"form-control custom-input\" aria-describedby=\"shortName\" placeholder=\"Nome curto\"\n                formControlName=\"shortName\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"cpf\">CPF (somente números)</label>\n              <input type=\"number\" class=\"form-control custom-input\" aria-describedby=\"cpf\" placeholder=\"CPF (somente números)\"\n                formControlName=\"cpf\">\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"email\">Email</label>\n              <input type=\"email\" class=\"form-control custom-input\" aria-describedby=\"email\" placeholder=\"Digite o email\"\n                formControlName=\"email\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\"btn-toolbar\">\n          <div class=\"btn-group perfect-margin\">\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-primary\" type=\"button\" (click)=\"submmit(false)\"><i class=\"feather icon-save\"></i>\n                Gravar</button>\n            </div>\n          </div>\n          <div class=\"btn-group perfect-margin\">\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-secondary\" type=\"button\" (click)=\"submmit(true)\"><i class=\"feather icon-save\"></i>\n                Gravar e continuar</button>\n            </div>\n          </div>\n        </div>\n\n      </form>\n    </app-card>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/customer/components/query-customers/query-customers.component.html":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/customer/components/query-customers/query-customers.component.html ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Consultar clientes\" [options]=\"false\">\n\n        <div class=\"btn-toolbar\">\n            <div class=\"btn-group perfect-margin\">\n              <div ngbDropdown class=\"d-inline-block\">\n                <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle><i\n                    class=\"feather icon-edit\"></i> Alterar</button>\n                <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n                  <button ngbDropdownItem (click)=\"open('name')\">Nome</button>\n                  <button ngbDropdownItem (click)=\"open('shortname')\">Nome Abreviado</button>\n                  <button ngbDropdownItem (click)=\"open('cpf')\">Cpf</button>\n                </div>\n              </div>\n            </div>\n    \n            <!-- <div class=\"btn-group perfect-margin\">\n              <button class=\"btn btn-outline-warning\" (click)=\"open('pay')\"><i class=\"feather icon-dollar-sign\"></i> Baixar\n                lançamento</button>\n            </div> -->\n    \n            <div class=\"btn-group perfect-margin\">\n              <button class=\"btn btn-outline-danger\" (click)=\"open('cancel')\"><i class=\"feather icon-x-circle\"></i> Excluir </button>\n            </div>\n          </div>\n    \n          <br>\n\n      <div class=\"row\">\n        <ag-grid-angular \n          style=\"width: 100%; min-height: 400px;\" \n          class=\"ag-theme-material\" \n          [rowData]=\"rowData | async\"\n          [columnDefs]=\"columnDefs\"\n          [animateRows]=true\n          [enableColResize]=true\n          [rowSelection]=\"rowSelection\"\n          (rowSelected)=\"onRowSelected($event)\">\n        </ag-grid-angular>\n      </div>\n    </app-card>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/components/dash-analytics.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/components/dash-analytics.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Balanço financeiro\" [options]=\"true\">\n\n      <div class=\"row\">\n\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Data inicial</label>\n            <div class=\"input-group\">\n              <input class=\"form-control\" placeholder=\"Selecione a data inicial\" name=\"dp\" [(ngModel)]=\"startDate\"\n                ngbDatepicker #d=\"ngbDatepicker\" container=\"body\" readonly>\n              <div class=\"input-group-append\">\n                <button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\"><i\n                    class=\"feather icon-calendar\"></i></button>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col-md-6\">\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">Data final</label>\n            <div class=\"input-group\">\n              <input class=\"form-control\" placeholder=\"Selecione a data final\" name=\"dp2\" [(ngModel)]=\"endDate\"\n                ngbDatepicker #d2=\"ngbDatepicker\" container=\"body\" readonly>\n              <div class=\"input-group-append\">\n                <button class=\"btn btn-outline-secondary\" (click)=\"d2.toggle()\" type=\"button\"><i\n                    class=\"feather icon-calendar\"></i></button>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n      </div>\n\n      <div class=\"row\">\n        <div class=\"col-md-4\">\n          <div class=\"input-group-append\">\n            <button class=\"btn btn-primary\" type=\"button\" (click)=\"search()\"><i class=\"feather icon-search\"></i>\n              Pesquisar</button>\n          </div>\n        </div>\n      </div>\n\n    </app-card>\n  </div>\n\n\n  <!-- order-card start -->\n  <div class=\"col-md-6 col-xl-3\">\n    <app-card [hidHeader]=\"true\" cardClass=\"bg-c-red order-card\">\n      <h6 class=\"text-white\">A receber</h6>\n      <h2 class=\"text-right text-white\"><i\n          class=\"fontawesome fas fa-cash-register float-left\"></i><span>R${{(accountBalance)?.incomingPendingValue}}</span>\n      </h2>\n      <p class=\"m-b-0\">Já recebido<span class=\"float-right\">R${{(accountBalance)?.incomingPaidValue}}</span></p>\n    </app-card>\n  </div>\n  <div class=\"col-md-6 col-xl-3\">\n    <app-card [hidHeader]=\"true\" cardClass=\"bg-c-green order-card\">\n      <h6 class=\"text-white\">A pagar</h6>\n      <h2 class=\"text-right text-white\"><i\n          class=\"fontawesome fas fa-hand-holding-usd float-left\"></i><span>R${{(accountBalance)?.outgoingPendingValue}}</span>\n      </h2>\n      <p class=\"m-b-0\">Já pago<span class=\"float-right\">R${{(accountBalance)?.outgoingPaidValue}}</span></p>\n    </app-card>\n  </div>\n  <div class=\"col-md-6 col-xl-3\">\n    <app-card [hidHeader]=\"true\" cardClass=\"bg-c-yellow order-card\">\n      <h6 class=\"text-white\">Contas a receber</h6>\n      <h2 class=\"text-right text-white\"><i\n          class=\"fontawesome fas fa-shopping-cart float-left\"></i><span>{{(accountBalance)?.incomingPendingQuantity}}</span>\n      </h2>\n      <p class=\"m-b-0\">Já recebido<span class=\"float-right\">{{(accountBalance)?.incomingPaidQuantity}}</span></p>\n    </app-card>\n  </div>\n  <div class=\"col-md-6 col-xl-3\">\n    <app-card [hidHeader]=\"true\" cardClass=\"bg-c-red order-card\">\n      <h6 class=\"text-white\">Contas a pagar</h6>\n      <h2 class=\"text-right text-white\"><i\n          class=\"fontawesome fas fa-hand-holding-usd float-left\"></i><span>{{(accountBalance)?.outgoingPendingQuantity}}</span>\n      </h2>\n      <p class=\"m-b-0\">Já pagas<span class=\"float-right\">{{(accountBalance)?.outgoingPaidQuantity}}</span></p>\n    </app-card>\n  </div>\n  <div class=\"col-md-6 col-xl-3\">\n    <app-card [hidHeader]=\"true\" cardClass=\"bg-c-yellow order-card\">\n      <h6 class=\"text-white\">Balanço</h6>\n      <h2 class=\"text-right text-white\"><i\n          class=\"fontawesome fas fa-balance-scale float-left\"></i><span>R${{(accountBalance)?.incomingOutgoingBalance}}</span>\n      </h2>\n      <!-- <p class=\"m-b-0\">Já pagas<span class=\"float-right\">7</span></p> -->\n    </app-card>\n  </div>\n  <div class=\"col-md-6 col-xl-3\">\n    <app-card [hidHeader]=\"true\" cardClass=\"bg-c-blue order-card\">\n      <h6 class=\"text-white\">Projeção</h6>\n      <h2 class=\"text-right text-white\"><i\n          class=\"fontawesome fas fa-chart-line float-left\"></i><span>R${{(accountBalance)?.incomingOutgoingProjection}}</span>\n      </h2>\n      <!-- <p class=\"m-b-0\">Já pagas<span class=\"float-right\">7</span></p> -->\n    </app-card>\n  </div>\n\n  <!-- \n  <div class=\"col-xl-8\">\n    <app-card cardTitle=\"Daily Visitor\" [options]=\"false\">\n      <app-apex-chart chartID=\"analytics-apex-mixed-chart\" [chartConfig]=\"this.chartDB.analyticsMixed\"></app-apex-chart>\n    </app-card>\n  </div>\n  <div class=\"col-xl-4\">\n    <app-card [hidHeader]=\"true\" blockClass=\"text-center\">\n      <i class=\"fa fa-envelope-open text-c-red d-block f-40\"></i>\n      <h4 class=\"m-t-20\"><span class=\"text-c-red\">8.62k</span> Subscribers</h4>\n      <p class=\"m-b-20\">Your main list is growing</p>\n      <button class=\"btn btn-danger btn-sm btn-round\">Manage List</button>\n    </app-card>\n\n    <app-card [hidHeader]=\"true\" cardClass=\"seo-card\" blockClass=\"seo-statustic\"\n      footerClass=\"seo-chart border border-top-0 p-0 overflow-hidden\" [isCardFooter]=\"true\">\n      <i class=\"feather icon-save f-20 text-c-green\"></i>\n      <h5 class=\"mb-1\">64%</h5>\n      <p>Memory</p>\n      <div class=\"app-card-footer\">\n        <app-apex-chart chartID=\"analytics-seo-card-chart\" [chartConfig]=\"this.chartDB.analyticsSeoCard\">\n        </app-apex-chart>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-sm-12\">\n    <div class=\"row no-gutters\">\n      <div class=\"col-md-4 col-xl-2 col-sm-6\">\n        <app-card [hidHeader]=\"true\">\n          <span>User</span>\n          <h3>798</h3>\n          <app-apex-chart chartID=\"analytics-apex-user-chart\" [chartConfig]=\"this.chartDB.analyticsUser\">\n          </app-apex-chart>\n        </app-card>\n      </div>\n      <div class=\"col-md-4 col-xl-2 col-sm-6\">\n        <app-card [hidHeader]=\"true\">\n          <span>Session</span>\n          <h3>486</h3>\n          <app-apex-chart chartID=\"analytics-apex-session-chart\" [chartConfig]=\"this.chartDB.analyticsSession\">\n          </app-apex-chart>\n        </app-card>\n      </div>\n      <div class=\"col-md-4 col-xl-2 col-sm-6\">\n        <app-card [hidHeader]=\"true\">\n          <span>Page view</span>\n          <h3>9454</h3>\n          <app-apex-chart chartID=\"analytics-apex-page-view-chart\" [chartConfig]=\"this.chartDB.analyticsPageView\">\n          </app-apex-chart>\n        </app-card>\n      </div>\n      <div class=\"col-md-4 col-xl-2 col-sm-6\">\n        <app-card [hidHeader]=\"true\">\n          <span>Page / Session</span>\n          <h3>7.15</h3>\n          <app-apex-chart chartID=\"analytics-apex-page-session-chart\" [chartConfig]=\"this.chartDB.analyticsPageSession\">\n          </app-apex-chart>\n        </app-card>\n      </div>\n      <div class=\"col-md-4 col-xl-2 col-sm-6\">\n        <app-card [hidHeader]=\"true\">\n          <span>Avg. Session Time</span>\n          <h3>00:04:30</h3>\n          <app-apex-chart chartID=\"analytics-apex-avg-session-chart\" [chartConfig]=\"this.chartDB.analyticsAvgSession\">\n          </app-apex-chart>\n        </app-card>\n      </div>\n      <div class=\"col-md-4 col-xl-2 col-sm-6\">\n        <app-card [hidHeader]=\"true\">\n          <span>Bounce Rate</span>\n          <h3>1.55%</h3>\n          <app-apex-chart chartID=\"analytics-apex-bounce-rate-chart\" [chartConfig]=\"this.chartDB.analyticsBounceRate\">\n          </app-apex-chart>\n        </app-card>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"col-lg-4 col-md-12\">\n    <app-card [hidHeader]=\"true\" footerClass=\"border border-top-0 p-0 overflow-hidden\" [isCardFooter]=\"true\">\n      <h6>Conversions</h6>\n      <h4 class=\"m-0\">0.85%<span class=\"text-c-blue ml-2\"><i class=\"feather icon-arrow-up\"></i>0.50%</span></h4>\n      <span>Purchased</span>\n      <div class=\"app-card-footer\">\n        <app-apex-chart chartID=\"analytics-conversions-chart-1\" [chartConfig]=\"this.chartDB.analyticsConversions1\">\n        </app-apex-chart>\n      </div>\n    </app-card>\n    <app-card [hidHeader]=\"true\" footerClass=\"border border-top-0 p-0 overflow-hidden\" [isCardFooter]=\"true\">\n      <h6>Conversions</h6>\n      <h4 class=\"m-0\">0.85%<span class=\"text-c-red ml-2\"><i class=\"feather icon-arrow-up\"></i>0.50%</span></h4>\n      <span>Purchased</span>\n      <div class=\"app-card-footer\">\n        <app-apex-chart chartID=\"analytics-conversions-chart-2\" [chartConfig]=\"this.chartDB.analyticsConversions2\">\n        </app-apex-chart>\n      </div>\n    </app-card>\n    <app-card [hidHeader]=\"true\" footerClass=\"border border-top-0 p-0 overflow-hidden\" [isCardFooter]=\"true\">\n      <h6>Conversions</h6>\n      <h4 class=\"m-0\">0.85%<span class=\"text-c-green ml-2\"><i class=\"feather icon-arrow-up\"></i>0.50%</span></h4>\n      <span>Purchased</span>\n      <div class=\"app-card-footer\">\n        <app-apex-chart chartID=\"analytics-conversions-chart-3\" [chartConfig]=\"this.chartDB.analyticsConversions3\">\n        </app-apex-chart>\n      </div>\n    </app-card>\n  </div>\n  <div class=\"col-lg-8 col-md-12\">\n    <app-card cardTitle=\"Activity Feed\">\n      <ul class=\"feed-blog pl-0\">\n        <li class=\"active-feed\">\n          <div class=\"feed-user-img\">\n            <img src=\"assets/images/user/avatar-4.jpg\" class=\"img-radius \" alt=\"User-Profile-Image\">\n          </div>\n          <h6><span class=\"badge badge-danger\">File</span> Eddie uploaded new files: <small class=\"text-muted\">2 hours\n              ago</small></h6>\n          <p class=\"m-b-15 m-t-15\">hii <b> @everone</b> Lorem Ipsum is simply dummy text of the printing and typesetting\n            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>\n          <div class=\"row\">\n            <div class=\"col-auto text-center\">\n              <img src=\"assets/images/gallery-grid/img-grd-gal-1.jpg\" alt=\"img\" class=\"img-fluid wid-100\">\n              <h6 class=\"m-t-15 m-b-0\">Old Scooter</h6>\n              <p class=\"text-muted m-b-0\"><small>PNG-100KB</small></p>\n            </div>\n            <div class=\"col-auto text-center\">\n              <img src=\"assets/images/gallery-grid/img-grd-gal-2.jpg\" alt=\"img\" class=\"img-fluid wid-100\">\n              <h6 class=\"m-t-15 m-b-0\">Wall Art</h6>\n              <p class=\"text-muted m-b-0\"><small>PNG-150KB</small></p>\n            </div>\n            <div class=\"col-auto text-center\">\n              <img src=\"assets/images/gallery-grid/img-grd-gal-3.jpg\" alt=\"img\" class=\"img-fluid wid-100\">\n              <h6 class=\"m-t-15 m-b-0\">Microphone</h6>\n              <p class=\"text-muted m-b-0\"><small>PNG-150KB</small></p>\n            </div>\n          </div>\n        </li>\n        <li class=\"diactive-feed\">\n          <div class=\"feed-user-img\">\n            <img src=\"assets/images/user/avatar-4.jpg\" class=\"img-radius \" alt=\"User-Profile-Image\">\n          </div>\n          <h6><span class=\"badge badge-success\">Task</span> Sarah marked the Pending Review: <span class=\"text-c-green\">\n              Trash Can Icon Design</span><small class=\"text-muted\"> 2 hours ago</small></h6>\n        </li>\n        <li class=\"diactive-feed\">\n          <div class=\"feed-user-img\">\n            <img src=\"assets/images/user/avatar-4.jpg\" class=\"img-radius \" alt=\"User-Profile-Image\">\n          </div>\n          <h6><span class=\"badge badge-primary\">comment</span> abc posted a task: <span class=\"text-c-green\">Design a\n              new Homepage</span> <small class=\"text-muted\">6 hours ago</small></h6>\n          <p class=\"m-b-15 m-t-15\">hii <b> @everone</b> Lorem Ipsum is simply dummy text of the printing and typesetting\n            industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>\n        </li>\n      </ul>\n    </app-card>\n  </div>\n  <div class=\"col-md-12\">\n    <app-card cardTitle=\"Campaign Monitor\" cardClass=\"table-card\" blockClass=\"p-0\">\n      <perfect-scrollbar [style.max-height]=\"'362px'\">\n        <table class=\"table table-hover m-b-0\">\n          <thead>\n            <tr>\n              <th><span>Campaign date</span></th>\n              <th>\n                <span>Click\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\n                </span>\n              </th>\n              <th>\n                <span>Cost\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\n                </span>\n              </th>\n              <th>\n                <span>CTR\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\n                </span>\n              </th>\n              <th>\n                <span>ARPU\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\n                </span>\n              </th>\n              <th>\n                <span>ECPI\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\n                </span>\n              </th>\n              <th>\n                <span>ROI\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\n                </span>\n              </th>\n              <th>\n                <span>Revenue\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\n                </span>\n              </th>\n              <th>\n                <span>Conversions\n                  <a class=\"help\"><i class=\"feather icon-help-circle f-16\"></i></a>\n                </span>\n              </th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr>\n              <td>08-11-2016</td>\n              <td>786\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"60\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>485\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"primary\" height=\"4px\" [value]=\"50\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>769\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>45,3%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"60\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>6,7%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"info\" height=\"4px\" [value]=\"30\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>8,56\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"40\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>10:55\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>33.8%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"40\"></ngb-progressbar>\n                </div>\n              </td>\n            </tr>\n            <tr>\n              <td>15-10-2016</td>\n              <td>786\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"65\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>523\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"primary\" height=\"4px\" [value]=\"80\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>736\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"80\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>78,3%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>6,6%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"info\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>7,56\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"44\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>4:30\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"68\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>76.8%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"90\"></ngb-progressbar>\n                </div>\n              </td>\n            </tr>\n            <tr>\n              <td>08-08-2017</td>\n              <td>624\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"45\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>436\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"primary\" height=\"4px\" [value]=\"55\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>756\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"95\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>78,3%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"38\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>6,4%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"info\" height=\"4px\" [value]=\"30\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>9,45\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"41\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>9:05\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"67\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>8.63%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"41\"></ngb-progressbar>\n                </div>\n              </td>\n            </tr>\n            <tr>\n              <td>11-12-2017</td>\n              <td>423\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"54\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>123\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"primary\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>756\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"75\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>78,6%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"60\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>45,6%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"info\" height=\"4px\" [value]=\"90\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>6,85\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"30\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>7:45\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"40\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>33.8%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"80\"></ngb-progressbar>\n                </div>\n              </td>\n            </tr>\n            <tr>\n              <td>05-06-2015</td>\n              <td>465\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"66\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>463\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"primary\" height=\"4px\" [value]=\"50\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>456\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"30\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>68,6%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"30\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>76,6%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"info\" height=\"4px\" [value]=\"32\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>7,56\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>8:45\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"71\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>39.8%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"38\"></ngb-progressbar>\n                </div>\n              </td>\n            </tr>\n            <tr>\n              <td>08-11-2016</td>\n              <td>786\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"43\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>485\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"primary\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>769\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"69\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>45,3%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"90\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>6,7%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"info\" height=\"4px\" [value]=\"80\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>8,56\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"41\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>10:55\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"55\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>33.8%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\n                </div>\n              </td>\n            </tr>\n            <tr>\n              <td>15-10-2016</td>\n              <td>786\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"61\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>523\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"primary\" height=\"4px\" [value]=\"45\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>736\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>78,3%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"60\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>6,6%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"info\" height=\"4px\" [value]=\"30\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>7,56\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"danger\" height=\"4px\" [value]=\"40\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>4:30\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"warning\" height=\"4px\" [value]=\"70\"></ngb-progressbar>\n                </div>\n              </td>\n              <td>76.8%\n                <div class=\"mt-1\">\n                  <ngb-progressbar type=\"success\" height=\"4px\" [value]=\"40\"></ngb-progressbar>\n                </div>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </perfect-scrollbar>\n    </app-card>\n  </div> -->\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/service-order/components/change-service-order/change-service-order.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/service-order/components/change-service-order/change-service-order.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\n  <h4 class=\"modal-title\" id=\"modal-basic-title\" *ngIf=\"type != 'cancel'\">Alterar ordem de serviço</h4>\n  <h4 class=\"modal-title\" id=\"modal-basic-title\" *ngIf=\"type == 'cancel'\">Cancelar ordem de serviço</h4>\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n<div class=\"modal-body\">\n  <div class=\"row\">\n    <div class=\"col-md-6\" *ngIf=\"type == 'cancel'\">\n      <p>Deseja realmente cancelar esse lançamento?</p>\n    </div>\n    <div class=\"col-md-12\" *ngIf=\"type == 'description'\">\n      <div class=\"form-group\">\n        <label for=\"exampleInputEmail1\">Nova descrição</label>\n        <input type=\"email\" class=\"form-control\" aria-describedby=\"description\" placeholder=\"Digite uma descrição\"\n          [(ngModel)]=\"description\">\n      </div>\n    </div>\n    <div class=\"col-md-6\" *ngIf=\"type == 'customer'\">\n      <div class=\"form-group\">\n        <label for=\"exampleFormControlSelect1\">Novo cliente</label>\n        <ng-select [items]=\"customers | async\" bindLabel=\"name\" bindValue=\"id\" placeholder=\"Selecione\"\n          [(ngModel)]=\"customerId\">\n        </ng-select>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"modal-footer\">\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"save()\" *ngIf=\"type != 'cancel'\">Save</button>\n  <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"cancel()\" *ngIf=\"type == 'cancel'\">Sim,\n    Cancelar</button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/service-order/components/form-service-order/form-service-order.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/service-order/components/form-service-order/form-service-order.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Nova ordem de serviço\" [options]=\"false\">\n      <form [formGroup]=\"serviceOrderForm\" novalidate>\n\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"exampleInputEmail1\">Descrição</label>\n              <input type=\"text\" class=\"form-control custom-input\" aria-describedby=\"emailHelp\" placeholder=\"Digite uma descrição\"\n                formControlName=\"description\">\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"exampleFormControlSelect1\">Cliente</label>\n              <ng-select [items]=\"customers | async\" bindLabel=\"name\" bindValue=\"id\" placeholder=\"Selecione\" formControlName=\"customerId\">\n              </ng-select>\n            </div>\n          </div>\n        </div>\n\n        <h5 class=\"mt-1\">Financeiro</h5>\n        <hr>\n\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"exampleFormControlSelect1\">Meio de pagamento</label>\n              <ng-select [items]=\"paymentMethods | async\" bindLabel=\"description\" bindValue=\"sysId\"\n                placeholder=\"Selecione\" formControlName=\"paymentMethodSysId\">\n              </ng-select>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <label for=\"basic-url\">Valor</label>\n            <div class=\"input-group mb-3\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">R$</span>\n              </div>\n              <input type=\"text\" class=\"form-control custom-input\" aria-describedby=\"basic-addon3\" formControlName=\"value\" currencyMask [options]=\"{ prefix: 'R$ ', thousands: '.', decimal: ',' }\">\n            </div>\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"exampleInputEmail1\">Data de vencimento</label>\n              <div class=\"input-group\">\n                <input class=\"form-control custom-input\" placeholder=\"Informe a data de vencimento\" name=\"dpStart\"\n                  formControlName=\"dueDate\" ngbDatepicker #dStart=\"ngbDatepicker\" container=\"body\"\n                  readonly>\n                <div class=\"input-group-append\">\n                  <button class=\"btn btn-outline-secondary\" (click)=\"dStart.toggle()\" type=\"button\"><i\n                      class=\"feather icon-calendar\"></i></button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"btn-toolbar\">\n          <div class=\"btn-group perfect-margin\">\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-primary\" type=\"button\" (click)=\"submmit(false)\"><i class=\"feather icon-save\"></i>\n                Gravar</button>\n            </div>\n          </div>\n          <div class=\"btn-group perfect-margin\">\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-secondary\" type=\"button\" (click)=\"submmit(true)\"><i class=\"feather icon-save\"></i>\n                Gravar e continuar</button>\n            </div>\n          </div>\n        </div>\n      </form>\n    </app-card>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/service-order/components/query-services-order/query-services-order.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/service-order/components/query-services-order/query-services-order.component.html ***!
  \*************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Pesquisar ordens de serviço\" [options]=\"true\">\n      <form [formGroup]=\"searchForm\">\n\n        <div class=\"row\">\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"exampleInputEmail1\">Data inicial</label>\n              <div class=\"input-group\">\n                <input class=\"form-control\" placeholder=\"Selecione a data inicial\" name=\"dpStart\"\n                  formControlName=\"startDate\" ngbDatepicker #dStart=\"ngbDatepicker\" container=\"body\" readonly>\n                <div class=\"input-group-append\">\n                  <button class=\"btn btn-outline-secondary\" (click)=\"dStart.toggle()\" type=\"button\"><i\n                      class=\"feather icon-calendar\"></i></button>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group\">\n              <label for=\"exampleInputEmail1\">Data final</label>\n              <div class=\"input-group\">\n                <input class=\"form-control\" placeholder=\"Selecione a data final\" name=\"dp\" formControlName=\"endDate\"\n                  ngbDatepicker #dEnd=\"ngbDatepicker\" container=\"body\" readonly>\n                <div class=\"input-group-append\">\n                  <button class=\"btn btn-outline-secondary\" (click)=\"dEnd.toggle()\" type=\"button\"><i\n                      class=\"feather icon-calendar\"></i></button>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"btn-toolbar\" role=\"toolbar\">\n          <div class=\"btn-group perfect-margin\" role=\"group\">\n            <button class=\"btn btn-primary\" type=\"button\" (click)=\"search()\"><i class=\"feather icon-search\"></i>\n              Pesquisar por data</button>\n          </div>\n          <!-- <div class=\"btn-group perfect-margin\" role=\"group\">\n            <button class=\"btn btn-secondary\" type=\"button\" (click)=\"search(true)\"><i class=\"feather icon-search\"></i>\n              Pesquisar todos</button>\n          </div> -->\n        </div>\n      </form>\n    </app-card>\n  </div>\n</div>\n\n<div class=\"row\" *ngIf=\"(rowData | async)!= null\">\n  <div class=\"col-sm-12\">\n    <app-card cardTitle=\"Dados\" [options]=\"false\">\n\n      <div class=\"btn-toolbar\">\n        <div class=\"btn-group perfect-margin\">\n          <div ngbDropdown class=\"d-inline-block\">\n            <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle><i\n                class=\"feather icon-edit\"></i> Alterar ordem</button>\n            <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n              <button ngbDropdownItem (click)=\"open('customer')\">Cliente</button>\n              <button ngbDropdownItem (click)=\"open('description')\">Descrição</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"btn-group perfect-margin\">\n          <button class=\"btn btn-outline-danger\" (click)=\"open('cancel')\"><i class=\"feather icon-x-circle\"></i> Cancelar\n            ordem</button>\n        </div>\n      </div>\n\n      <br>\n\n      <div class=\"row\">\n        <ag-grid-angular \n          style=\"width: 100%; min-height: 400px;\" \n          class=\"ag-theme-material\" \n          [rowData]=\"rowData | async\"\n          [columnDefs]=\"columnDefs\" \n          [defaultColDef]=\"defaultColDef\" \n          [rowSelection]=\"rowSelection\"\n          (rowSelected)=\"onRowSelected($event)\"\n          [animateRows]=true\n          [enableColResize]=true>\n        </ag-grid-angular>\n      </div>\n    </app-card>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/breadcrumb/breadcrumb.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/breadcrumb/breadcrumb.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"this.navigationList\">\n  <ng-container *ngFor=\"let breadcrumb of navigationList; let last = last\">\n    <div class=\"page-header\" *ngIf=\"last && breadcrumb.breadcrumbs !== false\">\n      <div class=\"page-block\">\n        <div class=\"row align-items-center\">\n          <div class=\"col-md-12\">\n            <div class=\"page-header-title\">\n              <ng-container *ngFor=\"let breadcrumb of navigationList; let last = last\"><h5 class=\"m-b-10\" *ngIf=\"last\">{{breadcrumb.title}}</h5></ng-container>\n            </div>\n            <ul class=\"breadcrumb\">\n              <li class=\"breadcrumb-item\">\n                <a [routerLink]=\"['/dashboard/analytics/']\" *ngIf=\"type === 'theme2'\"><i class=\"feather icon-home\"></i></a>\n                <a [routerLink]=\"['/dashboard/analytics/']\" *ngIf=\"type === 'theme1'\">Home</a>\n              </li>\n              <ng-container *ngFor=\"let breadcrumb of navigationList\">\n                <li class=\"breadcrumb-item\" *ngIf=\"breadcrumb.url !== false\"><a [routerLink]=\"breadcrumb.url\">{{breadcrumb.title}}</a></li>\n                <li class=\"breadcrumb-item\" *ngIf=\"breadcrumb.url === false\"><a href=\"javascript:\">{{breadcrumb.title}}</a></li>\n              </ng-container>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </ng-container>\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/card/card.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/card/card.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card\" [ngClass]=\"cardClass\" [@cardRemove]=\"cardRemove\" #toAnimate animates animatesInitMode=\"show\" [animatesOnInit]=\"{useVisibility: false, disabled: true}\">\n  <div class=\"card-header\" *ngIf=\"!hidHeader\" [ngClass]=\"headerClass\">\n    <h5 *ngIf=\"!customHeader\">{{ cardTitle }}</h5>\n    <p *ngIf=\"!customHeader && cardCaption\" [ngClass]=\"captionClass\">{{cardCaption}}</p>\n    <div class=\"card-header-right\" *ngIf=\"this.options && !customHeader\">\n      <div class=\"btn-group card-option dropdown\" ngbDropdown>\n        <button type=\"button\" class=\"btn dropdown-toggle btn-icon\" ngbDropdownToggle>\n          <i class=\"feather icon-more-horizontal\"></i>\n        </button>\n        <ul class=\"list-unstyled card-option dropdown-menu dropdown-menu-right\" ngbDropdownMenu>\n          <li class=\"dropdown-item full-card\" (click)=\"fullCardToggle(toAnimate, '', true)\"><a href=\"javascript:\"><span><i class=\"feather\" [ngClass]=\"fullIcon\"></i> {{this.cardClass === 'full-card' ? 'Restore' : 'Maximize'}}</span></a></li>\n          <li class=\"dropdown-item minimize-card\" (click)=\"collapsedCardToggle()\"><a href=\"javascript:\"><span><i class=\"feather\" [ngClass]=\"collapsedIcon\"></i> {{this.collapsedCard === 'collapsed' ? 'Expand' : 'Collapse'}} </span>\n            <span style=\"display:none\"><i class=\"feather icon-plus\"></i></span></a></li>\n          <li class=\"dropdown-item reload-card\" (click)=\"cardRefresh($event)\"><a href=\"javascript:\"><i class=\"feather icon-refresh-cw\"></i> Reload</a></li>\n          <li class=\"dropdown-item close-card\" (click)=\"cardRemoveAction()\"><a href=\"javascript:\"><i class=\"feather icon-trash\"></i> Remove</a></li>\n        </ul>\n      </div>\n    </div>\n    <ng-content *ngIf=\"customHeader\" select=\".app-card-header\"></ng-content>\n  </div>\n  <div [@collapsedCard]=\"collapsedCard\" *ngIf=\"this.options; else subMenuContent\">\n    <ng-container *ngTemplateOutlet=\"subMenuContent\"></ng-container>\n  </div>\n  <ng-template #subMenuContent>\n    <div class=\"card-body\" [ngClass]=\"blockClass\">\n      <ng-content></ng-content>\n    </div>\n  </ng-template>\n  <div *ngIf=\"isCardFooter\" class=\"card-footer\" [ngClass]=\"footerClass\">\n    <ng-content select=\".app-card-footer\"></ng-content>\n  </div>\n  <div class=\"card-loader\" *ngIf=\"loadCard\"><i class=\"pct-loader1 anim-rotate\"></i></div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/chart/apex-chart/apex-chart.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/chart/apex-chart/apex-chart.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"{{this.chartID}}\"></div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/spinner/spinner.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/spinner/spinner.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"http-loader\" *ngIf=\"isSpinnerVisible\">\n    <div class=\"loader-bg\">\n        <!-- material-line -->\n        <div class=\"sk-line-material\" [class.colored]=\"!backgroundColor\" *ngIf=\"spinner === Spinkit.skLine\">\n            <div class=\"sk-child sk-bounce1\" [style.background-color]='backgroundColor'></div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ui/components/admin/admin.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ui/components/admin/admin.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div [ng2-loading]=\"loading.status | async\">\n  <app-navigation class=\"pcoded-navbar\"\n    [ngClass]=\"{'navbar-collapsed' : navCollapsed, 'theme-horizontal': this.gradientConfig['layout'] === 'horizontal', 'mob-open' : navCollapsedMob}\"\n    (onNavMobCollapse)=\"navMobClick()\"></app-navigation>\n  <app-nav-bar class=\"navbar pcoded-header navbar-expand-lg navbar-light\"\n    (onNavCollapse)=\"this.navCollapsed = !this.navCollapsed;\" (onNavHeaderMobCollapse)=\"navMobClick()\"></app-nav-bar>\n  <div class=\"pcoded-main-container\">\n    <div class=\"pcoded-wrapper\"\n      [ngClass]=\"{'container': this.gradientConfig.layout === 'horizontal' && this.gradientConfig.subLayout === 'horizontal-2'}\">\n      <div class=\"pcoded-content\">\n        <div class=\"pcoded-inner-content\">\n          <div class=\"main-body\">\n            <div class=\"page-wrapper\">\n              <notification-message></notification-message>\n              <app-breadcrumb></app-breadcrumb>\n              <app-spinner></app-spinner>\n              <router-outlet></router-outlet>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <app-configuration></app-configuration>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ui/components/admin/configuration/configuration.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ui/components/admin/configuration/configuration.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ui/components/admin/nav-bar/nav-bar.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ui/components/admin/nav-bar/nav-bar.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\" *ngIf=\"this.gradientConfig.layout === 'horizontal' && this.gradientConfig.subLayout === 'horizontal-2'; else mainHeader\">\n  <ng-container *ngTemplateOutlet=\"mainHeader\"></ng-container>\n</div>\n<ng-template #mainHeader>\n  <div class=\"m-header\">\n    <a href=\"javascript:\" class=\"mobile-menu\" id=\"mobile-collapse\" (click)=\"navCollapse()\"><span></span></a>\n    <a [routerLink]=\"['/dashboard/analytics']\" class=\"b-brand\">\n      <img id=\"main-logo\" src=\"assets/images/logo.png\" alt=\"\" class=\"logo\">\n      <img src=\"assets/images/logo-icon.png\" alt=\"\" class=\"logo-thumb\">\n    </a>\n    <a class=\"mob-toggler\" [ngClass]=\"{'on' : this.menuClass}\" href=\"javascript:\" (click)=\"toggleMobOption()\"><i class=\"feather icon-more-vertical\"></i></a>\n  </div>\n  <div class=\"collapse navbar-collapse\" [style.display]=\"this.collapseStyle\">\n    <app-nav-left class=\"mr-auto\"></app-nav-left>\n    <app-nav-right class=\"ml-auto\"></app-nav-right>\n  </div>\n</ng-template>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ui/components/admin/nav-bar/nav-left/nav-left.component.html":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ui/components/admin/nav-bar/nav-left/nav-left.component.html ***!
  \****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"navbar-nav mr-auto\">\n  <li class=\"nav-item\">\n    <app-nav-search></app-nav-search>\n  </li>\n</ul>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ui/components/admin/nav-bar/nav-left/nav-search/nav-search.component.html":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ui/components/admin/nav-bar/nav-left/nav-search/nav-search.component.html ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<a href=\"javascript:\" (click)=\"this.searchOn = true\" class=\"pop-search\"><i class=\"feather icon-search\"></i></a>\n<div class=\"search-bar\" *ngIf=\"searchOn\">\n  <input type=\"text\" class=\"form-control border-0 shadow-none\" placeholder=\"Search hear\">\n  <button (click)=\"this.searchOn = false\" type=\"button\" class=\"close\" aria-label=\"Close\">\n    <span aria-hidden=\"true\">&times;</span>\n  </button>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ui/components/admin/nav-bar/nav-right/nav-right.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ui/components/admin/nav-bar/nav-right/nav-right.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ul class=\"navbar-nav ml-auto\">\n  <!-- <li>\n    <div class=\"dropdown\" ngbDropdown placement=\"auto\">\n      <a ngbDropdownToggle href=\"javascript:\" data-toggle=\"dropdown\"><i class=\"icon feather icon-bell\"></i><span\n          class=\"badge bg-danger\"><span class=\"sr-only\"></span></span></a>\n      <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right notification\">\n        <div class=\"noti-head\">\n          <h6 class=\"d-inline-block m-b-0\">Notifications</h6>\n          <div class=\"float-right\">\n            <a href=\"javascript:\" class=\"m-r-10\">mark as read</a>\n            <a href=\"javascript:\">clear all</a>\n          </div>\n        </div>\n        <ul class=\"noti-body\">\n          <li class=\"n-title\">\n            <p class=\"m-b-0\">NEW</p>\n          </li>\n          <li class=\"notification\">\n            <div class=\"media\">\n              <img class=\"img-radius\" src=\"assets/images/user/avatar-1.jpg\" alt=\"Generic placeholder image\">\n              <div class=\"media-body\">\n                <p><strong>John Doe</strong><span class=\"n-time text-muted\"><i\n                      class=\"icon feather icon-clock m-r-10\"></i>30 min</span></p>\n                <p>New ticket Added</p>\n              </div>\n            </div>\n          </li>\n          <li class=\"n-title\">\n            <p class=\"m-b-0\">EARLIER</p>\n          </li>\n          <li class=\"notification\">\n            <div class=\"media\">\n              <img class=\"img-radius\" src=\"assets/images/user/avatar-2.jpg\" alt=\"Generic placeholder image\">\n              <div class=\"media-body\">\n                <p><strong>Joseph William</strong><span class=\"n-time text-muted\"><i\n                      class=\"icon feather icon-clock m-r-10\"></i>30 min</span></p>\n                <p>Prchace New Theme and make payment</p>\n              </div>\n            </div>\n          </li>\n          <li class=\"notification\">\n            <div class=\"media\">\n              <img class=\"img-radius\" src=\"assets/images/user/avatar-3.jpg\" alt=\"Generic placeholder image\">\n              <div class=\"media-body\">\n                <p><strong>Sara Soudein</strong><span class=\"n-time text-muted\"><i\n                      class=\"icon feather icon-clock m-r-10\"></i>30 min</span></p>\n                <p>currently login</p>\n              </div>\n            </div>\n          </li>\n        </ul>\n        <div class=\"noti-footer\">\n          <a href=\"javascript:\">show all</a>\n        </div>\n      </div>\n    </div>\n  </li> -->\n  <li>\n    <div class=\"dropdown drp-user\" ngbDropdown placement=\"auto\">\n      <a href=\"javascript:\" ngbDropdownToggle data-toggle=\"dropdown\">\n        <img src=\"assets/images/user/avataaars.png\" class=\"img-radius wid-40\" alt=\"User-Profile-Image\">\n      </a>\n      <div class=\"dropdown-menu dropdown-menu-right profile-notification\" ngbDropdownMenu>\n        <div class=\"pro-head\">\n          <img src=\"assets/images/user/avataaars.png\" class=\"img-radius\" alt=\"User-Profile-Image\">\n          <span>{{(user|async)?.firstName}}</span>\n          <a href=\"javascript:\" class=\"dud-logout\" title=\"Logout\" (click)=\"logout()\">\n            <i class=\"feather icon-log-out\"></i>\n          </a>\n        </div>\n        <!-- <ul class=\"pro-body\">\n          <li><a href=\"javascript:\" class=\"dropdown-item\"><i class=\"feather icon-user\"></i> Profile</a></li>\n          <li><a href=\"javascript:\" class=\"dropdown-item\"><i class=\"feather icon-mail\"></i> My Messages</a></li>\n          <li><a href=\"javascript:\" class=\"dropdown-item\"><i class=\"feather icon-lock\"></i> Lock Screen</a></li>\n        </ul> -->\n      </div>\n    </div>\n  </li>\n</ul>\n\n<!-- <section class=\"header-user-list\" *ngIf=\"visibleUserList && !this.gradientConfig['rtl-layout']\" [ngClass]=\"{'open': visibleUserList}\" [@slideInOutLeft]>\n  <app-chat-user-list (onChatToggle)=\"onChatToggle($event)\" (onChatCollapse)=\"this.visibleUserList = !this.visibleUserList; this.chatMessage = false;\"></app-chat-user-list>\n</section>\n\n<section class=\"header-chat\" *ngIf=\"chatMessage && !this.gradientConfig['rtl-layout']\" [ngClass]=\"{'open': chatMessage}\" [@slideInOutLeft]>\n  <app-chat-msg (onChatToggle)=\"this.chatMessage = !this.chatMessage\" [friendId]=\"friendId\"></app-chat-msg>\n</section>\n\n<section class=\"header-user-list\" *ngIf=\"visibleUserList && this.gradientConfig['rtl-layout']\" [ngClass]=\"{'open': visibleUserList}\" [@slideInOutRight]>\n  <app-chat-user-list (onChatToggle)=\"onChatToggle($event)\" (onChatCollapse)=\"this.visibleUserList = !this.visibleUserList; this.chatMessage = false;\"></app-chat-user-list>\n</section>\n\n<section class=\"header-chat\" *ngIf=\"chatMessage && this.gradientConfig['rtl-layout']\" [ngClass]=\"{'open': chatMessage}\" [@slideInOutRight]>\n  <app-chat-msg (onChatToggle)=\"this.chatMessage = !this.chatMessage\" [friendId]=\"friendId\"></app-chat-msg>\n</section> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ui/components/admin/navigation/nav-content/nav-collapse/nav-collapse.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ui/components/admin/navigation/nav-content/nav-collapse/nav-collapse.component.html ***!
  \***************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"!item.hidden\">\n  <li *ngIf=\"themeLayout === 'horizontal'\" (mouseenter)=\"navCollapse($event)\" class=\"nav-item pcoded-hasmenu\" [routerLinkActive]=\"['active']\">\n    <a [routerLinkActive]=\"['active']\" href=\"javascript:\" class=\"nav-link\">\n      <ng-container *ngTemplateOutlet=\"itemContent\"></ng-container>\n    </a>\n    <ng-container *ngTemplateOutlet=\"subMenuContent\"></ng-container>\n  </li>\n  <li *ngIf=\"themeLayout === 'vertical'\" class=\"nav-item pcoded-hasmenu\" [routerLinkActive]=\"['active']\">\n    <a [routerLinkActive]=\"['active']\" href=\"javascript:\" class=\"nav-link\" (click)=\"navCollapse($event)\">\n      <ng-container *ngTemplateOutlet=\"itemContent\"></ng-container>\n    </a>\n    <ng-container *ngTemplateOutlet=\"subMenuContent\"></ng-container>\n  </li>\n  <ng-template #itemContent>\n      <span class=\"pcoded-micon\" *ngIf=\"item.icon\">\n        <i class=\"{{item.icon}}\"></i>\n      </span>\n      <span class=\"pcoded-mtext\">{{item.title}}\n        <span *ngIf=\"item.badge && themeLayout === 'horizontal'\" class=\"badge label\" [ngClass]=\"item.badge.type\">\n          {{item.badge.title}}\n        </span>\n      </span>\n      <span *ngIf=\"item.badge && themeLayout === 'vertical'\" class=\"pcoded-badge badge\" [ngClass]=\"item.badge.type\">\n        {{item.badge.title}}\n      </span>\n  </ng-template>\n  <ng-template #subMenuContent>\n    <ul class=\"pcoded-submenu\" [routerLinkActive]=\"['active']\">\n      <ng-container *ngFor=\"let item of item.children\">\n        <app-nav-group *ngIf=\"item.type=='group'\" [item]=\"item\"></app-nav-group>\n        <app-nav-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></app-nav-collapse>\n        <app-nav-item *ngIf=\"item.type=='item'\" [item]=\"item\"></app-nav-item>\n      </ng-container>\n    </ul>\n  </ng-template>\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ui/components/admin/navigation/nav-content/nav-content.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ui/components/admin/navigation/nav-content/nav-content.component.html ***!
  \*************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- [excludeBeforeClick]=\"true\" [exclude]=\"'#mobile-collapse'\" -->\n<perfect-scrollbar *ngIf=\"this.gradientConfig['layout'] === 'vertical'\" (clickOutside)=\"navMob()\"\n  id=\"nav-ps-gradient-able\" ngClass=\"gradientscroll\" [style.max-width]=\"'300px'\"\n  [style.max-height]=\"'calc(100vh - 60px)'\" [usePSClass]=\"'gradient-able'\" [disabled]=\"null\">\n  <div class=\"navbar-content\">\n    <ul class=\"nav pcoded-inner-navbar\" (clickOutside)=\"fireOutClick()\">\n      <ng-container *ngFor=\"let item of navigation\">\n        <app-nav-group *ngIf=\"item.type=='group'\" [item]=\"item\"></app-nav-group>\n        <app-nav-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></app-nav-collapse>\n        <app-nav-item *ngIf=\"item.type=='item'\" [item]=\"item\"></app-nav-item>\n      </ng-container>\n    </ul>\n    <app-card [hidHeader]=\"true\" cardClass=\"text-center\">\n      <i class=\"feather icon-sunset f-40\"></i>\n      <h6 class=\"mt-3\">Help?</h6>\n      <p>Please contact us on our email for need any support</p>\n      <a href=\"javascript:\" target=\"_blank\" class=\"btn btn-primary btn-sm text-white m-0\">Support</a>\n    </app-card>\n  </div>\n</perfect-scrollbar>\n\n<div *ngIf=\"this.gradientConfig['layout'] === 'horizontal'\" #navbarWrapper class=\"navbar-content sidenav-horizontal\"\n  id=\"layout-sidenav\">\n  <a href=\"javascript:\" class=\"sidenav-horizontal-prev\" [ngClass]=\"prevDisabled\" (click)=\"scrollMinus()\"></a>\n  <div class=\"sidenav-horizontal-wrapper\">\n    <!-- add 14-4 viral -->\n    <ul #navbarContent id=\"side-nav-horizontal\" class=\"nav pcoded-inner-navbar sidenav-inner\"\n      (clickOutside)=\"fireLeave()\" (mouseleave)=\"fireLeave()\">\n      <ng-container *ngFor=\"let item of navigation\">\n        <app-nav-group *ngIf=\"item.type=='group'\" [item]=\"item\"></app-nav-group>\n        <app-nav-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></app-nav-collapse>\n        <app-nav-item *ngIf=\"item.type=='item'\" [item]=\"item\"></app-nav-item>\n      </ng-container>\n    </ul>\n  </div>\n  <a href=\"javascript:\" class=\"sidenav-horizontal-next\" [ngClass]=\"nextDisabled\" (click)=\"scrollPlus()\"></a>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ui/components/admin/navigation/nav-content/nav-group/nav-group.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ui/components/admin/navigation/nav-content/nav-group/nav-group.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"!item.hidden\">\n  <li class=\"nav-item pcoded-menu-caption\"><label>{{item.title}}</label></li>\n  <ng-container *ngFor=\"let item of item.children\">\n    <app-nav-group *ngIf=\"item.type=='group'\" [item]=\"item\"></app-nav-group>\n    <app-nav-collapse *ngIf=\"item.type=='collapse'\" [item]=\"item\"></app-nav-collapse>\n    <app-nav-item *ngIf=\"item.type=='item'\" [item]=\"item\"></app-nav-item>\n  </ng-container>\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ui/components/admin/navigation/nav-content/nav-item/nav-item.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ui/components/admin/navigation/nav-content/nav-item/nav-item.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ng-container *ngIf=\"!item.hidden\">\n  <li [ngClass]=\"item.classes\" *ngIf=\"item.url && !item.external\" [routerLinkActive]=\"['active']\">\n    <a class=\"nav-link\" [target]=\"item.target ? '_blank' : '_self'\" [routerLink]=\"[item.url]\" (click)=\"closeOtherMenu($event)\">\n      <ng-container *ngTemplateOutlet=\"itemIcon\"></ng-container>\n      <span class=\"pcoded-mtext\" *ngIf=\"item.icon; else directTitle\">{{ item.title }}</span>\n      <ng-template #directTitle>\n        {{item.title}}\n      </ng-template>\n      <ng-container *ngTemplateOutlet=\"itemBadge\"></ng-container>\n    </a>\n  </li>\n  <li [ngClass]=\"item.classes\" *ngIf=\"item.url && item.external\">\n    <a [target]=\"item.target ? '_blank' : '_self'\" [href]=\"item.url\">\n      <ng-container *ngTemplateOutlet=\"itemIcon\"></ng-container>\n      <span class=\"pcoded-mtext\" *ngIf=\"item.icon; else directTitle\">{{ item.title }}</span>\n      <ng-template #directTitle>\n        {{item.title}}\n      </ng-template>\n      <ng-container *ngTemplateOutlet=\"itemBadge\"></ng-container>\n    </a>\n  </li>\n  <ng-template #itemIcon>\n    <span *ngIf=\"item.icon\" class=\"pcoded-micon\"><i class=\"feather\" [ngClass]=\"item.icon\"></i></span>\n  </ng-template>\n  <ng-template #itemBadge>\n    <span *ngIf=\"item.badge && themeLayout === 'vertical'\" class=\"pcoded-badge badge\" [ngClass]=\"item.badge.type\">\n      {{item.badge.title}}\n    </span>\n    <span *ngIf=\"item.badge && themeLayout === 'horizontal'\" class=\"badge label\" [ngClass]=\"item.badge.type\">\n      {{item.badge.title}}\n    </span>\n  </ng-template>\n</ng-container>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ui/components/admin/navigation/navigation.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ui/components/admin/navigation/navigation.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"navbar-wrapper\" [ngClass]=\"{'container': this.gradientConfig.layout === 'horizontal' && this.gradientConfig.subLayout === 'horizontal-2'}\">\n  <app-nav-content (onNavMobCollapse)=\"navMobCollapse()\"></app-nav-content>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ui/components/notification-message/notification-message.component.html":
/*!**************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ui/components/notification-message/notification-message.component.html ***!
  \**************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div *ngIf=\"notify.msg | async as msg\" class=\"notification bottom-left\" [ngClass]=\"{ \r\n  'is-danger': msg.style == 'error',\r\n  'is-success': msg.style == 'success',\r\n  'is-info': msg.style == 'info',\r\n  'is-loading': msg.style == 'loading'}\"\r\n  (click)=\"notify.clear()\">\r\n  <div class=\"ntf-icon\">\r\n    <span *ngIf=\"msg.style == 'error'\"><i class=\"fas fa-exclamation\"></i> ERRO</span>\r\n    <span *ngIf=\"msg.style == 'info'\"><i class=\"fa fa-info\"></i> INFO</span>\r\n    <span *ngIf=\"msg.style == 'success'\"><i class=\"fa fa-check\"></i> SUCESS</span>\r\n    <span *ngIf=\"msg.style == 'loading'\"><i class=\"fas fa-sync fa-spin\"></i></span>\r\n  </div>\r\n  <div class=\"nft-content\">\r\n    {{ msg.content }}\r\n  </div>\r\n</div> -->\r\n\r\n<div class=\"toast__container\">\r\n\r\n    <div @items class=\"toast\" *ngIf=\"notify.msg | async as msg\" [ngClass]=\"{ \r\n      'toast--red': msg.style == 'error',\r\n      'toast--green': msg.style == 'success' || msg.style == 'welcome',\r\n      'toast--blue': msg.style == 'info',\r\n      'toast--yellow': msg.style == 'warning'}\">\r\n\r\n\r\n        <div *ngIf=\"msg.style != 'error' && msg.style != 'welcome'\" class=\"toast__icon\">\r\n          <!--\r\n            SUCESS\r\n          -->\r\n          <svg *ngIf=\"msg.style == 'success'\" version=\"1.1\" class=\"toast__svg\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n            x=\"0px\" y=\"0px\" viewBox=\"0 0 512 512\" style=\"enable-background:new 0 0 512 512;\" xml:space=\"preserve\">\r\n            <g>\r\n              <g>\r\n                <path d=\"M504.502,75.496c-9.997-9.998-26.205-9.998-36.204,0L161.594,382.203L43.702,264.311c-9.997-9.998-26.205-9.997-36.204,0    c-9.998,9.997-9.998,26.205,0,36.203l135.994,135.992c9.994,9.997,26.214,9.99,36.204,0L504.502,111.7    C514.5,101.703,514.499,85.494,504.502,75.496z\"></path>\r\n              </g>\r\n            </g>\r\n          </svg>\r\n          \r\n          <!--\r\n            WARNING\r\n          -->\r\n          <svg *ngIf=\"msg.style == 'warning'\" version=\"1.1\" class=\"toast__svg\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n            x=\"0px\" y=\"0px\" viewBox=\"0 0 301.691 301.691\" style=\"enable-background:new 0 0 301.691 301.691;\" xml:space=\"preserve\">\r\n            <g>\r\n              <polygon points=\"119.151,0 129.6,218.406 172.06,218.406 182.54,0  \"></polygon>\r\n              <rect x=\"130.563\" y=\"261.168\" width=\"40.525\" height=\"40.523\"></rect>\r\n            </g>\r\n          </svg>\r\n\r\n          <!--\r\n            INFO\r\n          -->\r\n          <svg *ngIf=\"msg.style == 'info'\" version=\"1.1\" class=\"toast__svg\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n            x=\"0px\" y=\"0px\" viewBox=\"0 0 32 32\" style=\"enable-background:new 0 0 32 32;\" xml:space=\"preserve\">\r\n            <g>\r\n              <g id=\"info\">\r\n                <g>\r\n                  <path d=\"M10,16c1.105,0,2,0.895,2,2v8c0,1.105-0.895,2-2,2H8v4h16v-4h-1.992c-1.102,0-2-0.895-2-2L20,12H8     v4H10z\"></path>\r\n                  <circle cx=\"16\" cy=\"4\" r=\"4\"></circle>\r\n                </g>\r\n              </g>\r\n            </g>\r\n          </svg>\r\n\r\n          <!--\r\n            ERROR\r\n          -->\r\n          <!-- <svg *ngIf=\"msg.style == 'error'\" version=\"1.1\" class=\"toast__svg\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n            x=\"0px\" y=\"0px\" viewBox=\"0 0 301.691 301.691\" style=\"enable-background:new 0 0 301.691 301.691;\" xml:space=\"preserve\">\r\n            <g>\r\n              <polygon points=\"119.151,0 129.6,218.406 172.06,218.406 182.54,0  \"></polygon>\r\n              <rect x=\"130.563\" y=\"261.168\" width=\"40.525\" height=\"40.523\"></rect>\r\n            </g>\r\n          </svg> -->\r\n\r\n        </div>\r\n\r\n        <div *ngIf=\"msg.style == 'error' || msg.style == 'welcome' || msg.style == 'message'\" class=\"toast__icon-custom\">\r\n\r\n          <!--\r\n            ERROR\r\n          -->\r\n          <img *ngIf=\"msg.style == 'error'\" class=\"toast__svg-custom\" src=\"assets/svg/bug.svg\" alt=\"\" srcset=\"\" width=\"40px\">\r\n\r\n          <!--\r\n            WELCOME\r\n          -->\r\n          <img *ngIf=\"msg.style == 'welcome' || msg.style == 'message'\" class=\"toast__svg-custom toast__image\" [src]=\"msg.urlImage\">\r\n        </div>\r\n\r\n        <div class=\"toast__content\">\r\n          <p *ngIf=\"msg.style == 'error'\" class=\"toast__type\">Error</p>\r\n          <p *ngIf=\"msg.style == 'warning'\" class=\"toast__type\">Warning</p>\r\n          <p *ngIf=\"msg.style == 'info'\" class=\"toast__type\">Info</p>\r\n          <p *ngIf=\"msg.style == 'success'\" class=\"toast__type\">Sucess</p>\r\n          <p *ngIf=\"msg.style == 'welcome'\" class=\"toast__type\">Welcome</p>\r\n          <p *ngIf=\"msg.style == 'message'\" class=\"toast__type\">{{msg.title}}</p>\r\n          <p class=\"toast__message\"><!-- Anyone with access can view your invited visitors. -->{{ msg.content }}</p>\r\n        </div>\r\n        <div class=\"toast__close\" (click)=\"notify.clear()\">\r\n          <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 15.642 15.642\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n            enable-background=\"new 0 0 15.642 15.642\">\r\n            <path fill-rule=\"evenodd\" d=\"M8.882,7.821l6.541-6.541c0.293-0.293,0.293-0.768,0-1.061  c-0.293-0.293-0.768-0.293-1.061,0L7.821,6.76L1.28,0.22c-0.293-0.293-0.768-0.293-1.061,0c-0.293,0.293-0.293,0.768,0,1.061  l6.541,6.541L0.22,14.362c-0.293,0.293-0.293,0.768,0,1.061c0.147,0.146,0.338,0.22,0.53,0.22s0.384-0.073,0.53-0.22l6.541-6.541  l6.541,6.541c0.147,0.146,0.338,0.22,0.53,0.22c0.192,0,0.384-0.073,0.53-0.22c0.293-0.293,0.293-0.768,0-1.061L8.882,7.821z\"></path>\r\n          </svg>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n\r\n\r\n      \r\n      <!-- <div class=\"toast toast--blue add-margin\">\r\n        <div class=\"toast__icon\">\r\n          <svg version=\"1.1\" class=\"toast__svg\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n            x=\"0px\" y=\"0px\" viewBox=\"0 0 32 32\" style=\"enable-background:new 0 0 32 32;\" xml:space=\"preserve\">\r\n            <g>\r\n              <g id=\"info\">\r\n                <g>\r\n                  <path d=\"M10,16c1.105,0,2,0.895,2,2v8c0,1.105-0.895,2-2,2H8v4h16v-4h-1.992c-1.102,0-2-0.895-2-2L20,12H8     v4H10z\"></path>\r\n                  <circle cx=\"16\" cy=\"4\" r=\"4\"></circle>\r\n                </g>\r\n              </g>\r\n            </g>\r\n      \r\n          </svg>\r\n        </div>\r\n        <div class=\"toast__content\">\r\n          <p class=\"toast__type\">Info</p>\r\n          <p class=\"toast__message\">Anyone with access can view your invited visitors.</p>\r\n        </div>\r\n        <div class=\"toast__close\">\r\n          <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 15.642 15.642\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n            enable-background=\"new 0 0 15.642 15.642\">\r\n            <path fill-rule=\"evenodd\" d=\"M8.882,7.821l6.541-6.541c0.293-0.293,0.293-0.768,0-1.061  c-0.293-0.293-0.768-0.293-1.061,0L7.821,6.76L1.28,0.22c-0.293-0.293-0.768-0.293-1.061,0c-0.293,0.293-0.293,0.768,0,1.061  l6.541,6.541L0.22,14.362c-0.293,0.293-0.293,0.768,0,1.061c0.147,0.146,0.338,0.22,0.53,0.22s0.384-0.073,0.53-0.22l6.541-6.541  l6.541,6.541c0.147,0.146,0.338,0.22,0.53,0.22c0.192,0,0.384-0.073,0.53-0.22c0.293-0.293,0.293-0.768,0-1.061L8.882,7.821z\"></path>\r\n          </svg>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"toast toast--yellow add-margin\">\r\n        <div class=\"toast__icon\">\r\n          <svg version=\"1.1\" class=\"toast__svg\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n            x=\"0px\" y=\"0px\" viewBox=\"0 0 301.691 301.691\" style=\"enable-background:new 0 0 301.691 301.691;\" xml:space=\"preserve\">\r\n            <g>\r\n              <polygon points=\"119.151,0 129.6,218.406 172.06,218.406 182.54,0  \"></polygon>\r\n              <rect x=\"130.563\" y=\"261.168\" width=\"40.525\" height=\"40.523\"></rect>\r\n            </g>\r\n          </svg>\r\n        </div>\r\n        <div class=\"toast__content\">\r\n          <p class=\"toast__type\">Success</p>\r\n          <p class=\"toast__message\">Anyone with access can view your invited visitors.</p>\r\n        </div>\r\n        <div class=\"toast__close\">\r\n          <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 15.642 15.642\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n            enable-background=\"new 0 0 15.642 15.642\">\r\n            <path fill-rule=\"evenodd\" d=\"M8.882,7.821l6.541-6.541c0.293-0.293,0.293-0.768,0-1.061  c-0.293-0.293-0.768-0.293-1.061,0L7.821,6.76L1.28,0.22c-0.293-0.293-0.768-0.293-1.061,0c-0.293,0.293-0.293,0.768,0,1.061  l6.541,6.541L0.22,14.362c-0.293,0.293-0.293,0.768,0,1.061c0.147,0.146,0.338,0.22,0.53,0.22s0.384-0.073,0.53-0.22l6.541-6.541  l6.541,6.541c0.147,0.146,0.338,0.22,0.53,0.22c0.192,0,0.384-0.073,0.53-0.22c0.293-0.293,0.293-0.768,0-1.061L8.882,7.821z\"></path>\r\n          </svg>\r\n        </div>\r\n      </div> -->\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-config.ts":
/*!*******************************!*\
  !*** ./src/app/app-config.ts ***!
  \*******************************/
/*! exports provided: GradientConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradientConfig", function() { return GradientConfig; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class GradientConfig {
}
GradientConfig.config = {
    layout: 'vertical',
    subLayout: '',
    collapseMenu: false,
    layoutType: 'menu-light',
    headerBackColor: 'header-blue',
    // header-green, header-yellow, header-orchidgreen, header-indigogreen, header-darkgreen, header-darkblue
    rtlLayout: false,
    navFixedLayout: true,
    headerFixedLayout: true,
    boxLayout: false,
};


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _modules_auth_components_auth_signin_auth_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/auth/components/auth-signin/auth-signin.component */ "./src/app/modules/auth/components/auth-signin/auth-signin.component.ts");
/* harmony import */ var _modules_ui_components_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/ui/components/admin/admin.component */ "./src/app/modules/ui/components/admin/admin.component.ts");
/* harmony import */ var _modules_auth_services_auth_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/auth/services/auth.guard */ "./src/app/modules/auth/services/auth.guard.ts");
/* harmony import */ var _modules_dashboard_components_dash_analytics_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/dashboard/components/dash-analytics.component */ "./src/app/modules/dashboard/components/dash-analytics.component.ts");







const routes = [
    {
        path: '',
        component: _modules_ui_components_admin_admin_component__WEBPACK_IMPORTED_MODULE_4__["AdminComponent"],
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'full'
            },
            {
                path: 'dashboard',
                component: _modules_dashboard_components_dash_analytics_component__WEBPACK_IMPORTED_MODULE_6__["DashAnalyticsComponent"],
                canActivate: [_modules_auth_services_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]]
            },
            {
                path: 'service-order',
                canActivate: [_modules_auth_services_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./modules/service-order/service-order.module */ "./src/app/modules/service-order/service-order.module.ts")).then(module => module.ServiceOrderModule)
            },
            {
                path: 'bill',
                canActivate: [_modules_auth_services_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
                loadChildren: () => __webpack_require__.e(/*! import() | modules-bill-bill-module */ "modules-bill-bill-module").then(__webpack_require__.bind(null, /*! ./modules/bill/bill.module */ "./src/app/modules/bill/bill.module.ts")).then(module => module.BillModule)
            },
            {
                path: 'customer',
                canActivate: [_modules_auth_services_auth_guard__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]],
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./modules/customer/customer.module */ "./src/app/modules/customer/customer.module.ts")).then(module => module.CustomerModule)
            }
        ],
    },
    {
        path: '',
        component: _modules_auth_components_auth_signin_auth_signin_component__WEBPACK_IMPORTED_MODULE_3__["AuthSigninComponent"],
        children: [
            {
                path: 'auth',
                loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(null, /*! ./modules/auth/auth.module */ "./src/app/modules/auth/auth.module.ts")).then(module => module.AuthModule)
            }
        ]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/auth/services/auth.service */ "./src/app/modules/auth/services/auth.service.ts");
/* harmony import */ var _modules_ui_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/ui/services/loading.service */ "./src/app/modules/ui/services/loading.service.ts");





let AppComponent = class AppComponent {
    constructor(router, auth, loading) {
        this.router = router;
        this.auth = auth;
        this.loading = loading;
    }
    ngOnInit() {
        this.router.events.subscribe((evt) => {
            if (!(evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])) {
                return;
            }
            window.scrollTo(0, 0);
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _modules_ui_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/auth/auth.module */ "./src/app/modules/auth/auth.module.ts");
/* harmony import */ var _modules_http_interceptor_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/http/interceptor.module */ "./src/app/modules/http/interceptor.module.ts");
/* harmony import */ var _modules_ui_ui_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/ui/ui.module */ "./src/app/modules/ui/ui.module.ts");
/* harmony import */ var _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _modules_service_order_service_order_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/service-order/service-order.module */ "./src/app/modules/service-order/service-order.module.ts");
/* harmony import */ var _modules_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/dashboard/dashboard.module */ "./src/app/modules/dashboard/dashboard.module.ts");
/* harmony import */ var _modules_customer_customer_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/customer/customer.module */ "./src/app/modules/customer/customer.module.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var ng2_loading_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-loading-spinner */ "./node_modules/ng2-loading-spinner/fesm2015/ng2-loading-spinner.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");


















const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
const loadingConfig = {
    animationType: ng2_loading_spinner__WEBPACK_IMPORTED_MODULE_16__["ANIMATION_TYPES"].halfCircle,
    spinnerPosition: 'center',
    backdropBorderRadius: '15px',
    spinnerSize: 'xl',
    spinnerFontSize: '2rem'
};
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_17__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbDropdownModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTooltipModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbButtonsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbTabsetModule"],
            _modules_auth_auth_module__WEBPACK_IMPORTED_MODULE_7__["AuthModule"],
            _modules_http_interceptor_module__WEBPACK_IMPORTED_MODULE_8__["Interceptor"],
            _modules_ui_ui_module__WEBPACK_IMPORTED_MODULE_9__["UiModule"],
            _modules_shared_shared_module__WEBPACK_IMPORTED_MODULE_10__["SharedModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PerfectScrollbarModule"],
            _modules_service_order_service_order_module__WEBPACK_IMPORTED_MODULE_12__["ServiceOrderModule"],
            _modules_dashboard_dashboard_module__WEBPACK_IMPORTED_MODULE_13__["DashboardModule"],
            _modules_customer_customer_module__WEBPACK_IMPORTED_MODULE_14__["CustomerModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_15__["AgGridModule"].withComponents([]),
            ng2_loading_spinner__WEBPACK_IMPORTED_MODULE_16__["Ng2LoadingSpinnerModule"].forRoot(loadingConfig),
        ],
        providers: [
            {
                provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_11__["PERFECT_SCROLLBAR_CONFIG"],
                useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/modules/auth/auth.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_auth_signin_auth_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/auth-signin/auth-signin.component */ "./src/app/modules/auth/components/auth-signin/auth-signin.component.ts");
/* harmony import */ var _components_auth_signup_auth_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/auth-signup/auth-signup.component */ "./src/app/modules/auth/components/auth-signup/auth-signup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");








const routes = [{
        path: '',
        children: [
            {
                path: 'sign',
                component: _components_auth_signin_auth_signin_component__WEBPACK_IMPORTED_MODULE_3__["AuthSigninComponent"]
            },
            {
                path: 'signup',
                component: _components_auth_signup_auth_signup_component__WEBPACK_IMPORTED_MODULE_4__["AuthSignupComponent"]
            }
        ]
    }];
let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_auth_signin_auth_signin_component__WEBPACK_IMPORTED_MODULE_3__["AuthSigninComponent"],
            _components_auth_signup_auth_signup_component__WEBPACK_IMPORTED_MODULE_4__["AuthSignupComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"]]
    })
], AuthModule);



/***/ }),

/***/ "./src/app/modules/auth/components/auth-signin/auth-signin.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/auth/components/auth-signin/auth-signin.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9jb21wb25lbnRzL2F1dGgtc2lnbmluL2F1dGgtc2lnbmluLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/auth/components/auth-signin/auth-signin.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/auth/components/auth-signin/auth-signin.component.ts ***!
  \******************************************************************************/
/*! exports provided: AuthSigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSigninComponent", function() { return AuthSigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/modules/auth/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






let AuthSigninComponent = class AuthSigninComponent {
    constructor(auth, fb, router) {
        this.auth = auth;
        this.fb = fb;
        this.router = router;
    }
    buildForm() {
        this.authForm = this.fb.group({
            username: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]],
            password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]],
        });
    }
    submmit() {
        this.auth.login(this.authForm.value.username, this.authForm.value.password).subscribe(() => this.router.navigate(['/dashboard']), () => sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Oops...', 'Falha ao logar! Verifique suas credenciais e tente novamente!', 'error'));
    }
    ngOnInit() {
        this.buildForm();
    }
};
AuthSigninComponent.ctorParameters = () => [
    { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
AuthSigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth-signin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth-signin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/components/auth-signin/auth-signin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auth-signin.component.scss */ "./src/app/modules/auth/components/auth-signin/auth-signin.component.scss")).default]
    })
], AuthSigninComponent);



/***/ }),

/***/ "./src/app/modules/auth/components/auth-signup/auth-signup.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/auth/components/auth-signup/auth-signup.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYXV0aC9jb21wb25lbnRzL2F1dGgtc2lnbnVwL2F1dGgtc2lnbnVwLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/auth/components/auth-signup/auth-signup.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/auth/components/auth-signup/auth-signup.component.ts ***!
  \******************************************************************************/
/*! exports provided: AuthSignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthSignupComponent", function() { return AuthSignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AuthSignupComponent = class AuthSignupComponent {
    constructor() { }
    ngOnInit() {
    }
};
AuthSignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-auth-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./auth-signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/components/auth-signup/auth-signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./auth-signup.component.scss */ "./src/app/modules/auth/components/auth-signup/auth-signup.component.scss")).default]
    })
], AuthSignupComponent);



/***/ }),

/***/ "./src/app/modules/auth/services/auth.guard.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/auth/services/auth.guard.ts ***!
  \*****************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/modules/auth/services/auth.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AuthGuard = class AuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(next, state) {
        return this.auth.isLoggedIn().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((user) => {
            return user;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(loggedIn => {
            if (!loggedIn) {
                console.log('🤨 Access denied for route: ' + next.url[0].path);
                this.router.navigate(['/auth/sign']);
            }
        }));
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ "./src/app/modules/auth/services/auth.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/auth/services/auth.service.ts ***!
  \*******************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm2015/add/operator/map.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _http_services_http_helper_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../http/services/http-helper.service */ "./src/app/modules/http/services/http-helper.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");






let AuthService = class AuthService {
    constructor(httpHelper) {
        this.httpHelper = httpHelper;
        this.logger = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
        this.logger.next(!!this.getCurrentUser());
    }
    isLoggedIn() {
        return this.logger.asObservable();
    }
    isLogged() {
        let currentUser = this.getCurrentUser();
        return currentUser != null && currentUser.token != null;
    }
    login(username, password) {
        const body = `grant_type=password&username=${username}&password=${password}`;
        const request = this.httpHelper.post('/connect/token', body, true);
        return request.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])((token) => {
            const user = {
                username,
                password,
                token: {
                    access_token: token.access_token
                }
            };
            localStorage.setItem('current_user', JSON.stringify(user));
            this.logger.next(true);
            return user;
        }));
    }
    logout() {
        this.logger.next(false);
        localStorage.removeItem('current_user');
    }
    getCurrentUser() {
        return JSON.parse(localStorage.getItem('current_user'));
    }
    getProfile() {
        return this.httpHelper.get('/Users/GetProfile');
    }
};
AuthService.ctorParameters = () => [
    { type: _http_services_http_helper_service__WEBPACK_IMPORTED_MODULE_4__["HttpHelperService"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthService);



/***/ }),

/***/ "./src/app/modules/bill/services/bill.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/bill/services/bill.service.ts ***!
  \*******************************************************/
/*! exports provided: BillService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillService", function() { return BillService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_services_http_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http/services/http-helper.service */ "./src/app/modules/http/services/http-helper.service.ts");



let BillService = class BillService {
    constructor(httpHelper) {
        this.httpHelper = httpHelper;
    }
    new(bill) {
        if (bill.destiny === 'P') {
            return this.httpHelper.post('/Bills/NewPayable', bill);
        }
        else {
            return this.httpHelper.post('/Bills/NewReceivable', bill);
        }
    }
    getByDate(startDate, endDate, destiny) {
        return this.httpHelper.get('/Bills/GetByDate', {
            startDate,
            endDate,
            destiny
        });
    }
    AccountBalance(startDate, endDate) {
        return this.httpHelper.get('/Bills/AccountBalance', {
            startDate,
            endDate,
        });
    }
    changePaymentMethod(id, paymentMethodSysId) {
        return this.httpHelper.put('/Bills/PaymentMethod', {
            id, paymentMethodSysId
        });
    }
    changeDueDate(id, dueDate) {
        return this.httpHelper.put('/Bills/DueDate', {
            id, dueDate
        });
    }
    changeValue(id, value) {
        return this.httpHelper.put('/Bills/Value', {
            id, value
        });
    }
    cancel(id) {
        return this.httpHelper.post(`/Bills/Cancel/${id}`, null);
    }
    makeRetirement(id) {
        return this.httpHelper.put(`/Bills/MakeRetirement/${id}`, null);
    }
};
BillService.ctorParameters = () => [
    { type: _http_services_http_helper_service__WEBPACK_IMPORTED_MODULE_2__["HttpHelperService"] }
];
BillService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], BillService);



/***/ }),

/***/ "./src/app/modules/customer/components/change-customer/change-customer.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/customer/components/change-customer/change-customer.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY3VzdG9tZXIvY29tcG9uZW50cy9jaGFuZ2UtY3VzdG9tZXIvY2hhbmdlLWN1c3RvbWVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/customer/components/change-customer/change-customer.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/customer/components/change-customer/change-customer.component.ts ***!
  \******************************************************************************************/
/*! exports provided: ChangeCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeCustomerComponent", function() { return ChangeCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_modules_lookup_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/lookup/services/lookup.service */ "./src/app/modules/lookup/services/lookup.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/customer.service */ "./src/app/modules/customer/services/customer.service.ts");






let ChangeCustomerComponent = class ChangeCustomerComponent {
    constructor(lookup, activeModal, customerService) {
        this.lookup = lookup;
        this.activeModal = activeModal;
        this.customerService = customerService;
        this.name = '';
        this.shortname = '';
        this.cpf = '';
    }
    save() {
        if (this.type === 'name' && this.name.length > 0) {
            console.log('change name', this.idCustomer);
            this.customerService.changeName(this.idCustomer, this.name).subscribe((sucess) => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Sucesso...', 'Nome alterado com sucesso!', 'success');
                this.activeModal.close();
            });
        }
        else if (this.type === 'shortname' && this.shortname.length > 0) {
            this.customerService.changeShortname(this.idCustomer, this.shortname).subscribe((sucess) => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Sucesso...', 'Nome Abreviado alterado com sucesso!', 'success');
                this.activeModal.close();
            });
        }
        else if (this.type === 'cpf' && this.shortname.length > 0) {
            this.customerService.changeCpf(this.idCustomer, this.shortname).subscribe((sucess) => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Sucesso...', 'Cpf alterado com sucesso!', 'success');
                this.activeModal.close();
            });
        }
    }
    cancel() {
        this.customerService.cancel(this.idCustomer).subscribe((sucess) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Sucesso...', 'Cliente excluído com sucesso!', 'success');
            this.activeModal.close();
        });
    }
    ngOnInit() {
    }
};
ChangeCustomerComponent.ctorParameters = () => [
    { type: src_app_modules_lookup_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__["LookupService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: _services_customer_service__WEBPACK_IMPORTED_MODULE_5__["CustomerService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChangeCustomerComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChangeCustomerComponent.prototype, "idCustomer", void 0);
ChangeCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'change-customer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./change-customer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/customer/components/change-customer/change-customer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./change-customer.component.scss */ "./src/app/modules/customer/components/change-customer/change-customer.component.scss")).default]
    })
], ChangeCustomerComponent);



/***/ }),

/***/ "./src/app/modules/customer/components/form-customer/form-customer.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/customer/components/form-customer/form-customer.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY3VzdG9tZXIvY29tcG9uZW50cy9mb3JtLWN1c3RvbWVyL2Zvcm0tY3VzdG9tZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/customer/components/form-customer/form-customer.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/customer/components/form-customer/form-customer.component.ts ***!
  \**************************************************************************************/
/*! exports provided: FormCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormCustomerComponent", function() { return FormCustomerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/customer.service */ "./src/app/modules/customer/services/customer.service.ts");
/* harmony import */ var src_app_modules_lookup_services_lookup_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/lookup/services/lookup.service */ "./src/app/modules/lookup/services/lookup.service.ts");







let FormCustomerComponent = class FormCustomerComponent {
    constructor(lookup, fb, customerService, router) {
        this.lookup = lookup;
        this.fb = fb;
        this.customerService = customerService;
        this.router = router;
        this.subscriptions = new Array();
    }
    buildForm() {
        this.customerForm = this.fb.group({
            name: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]],
            shortName: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                ]],
            cpf: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]{11}')
                ]],
            email: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
                ]],
        });
    }
    submmit(continueForm = false) {
        if (!this.customerForm.valid) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Atenção...', 'Preencha todos os campos do formulario!', 'warning');
            return;
        }
        const newCustomer = this.customerForm.value;
        this.subscriptions.push(this.customerService.newCustomer(newCustomer).subscribe((sucess) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Sucesso...', 'Cliente cadastrado com sucesso', 'success');
            if (!continueForm) {
                return this.router.navigate(['/dashboard']);
            }
            this.customerForm.reset();
        }));
    }
    ngOnInit() {
        this.buildForm();
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => {
            sub.unsubscribe();
        });
    }
};
FormCustomerComponent.ctorParameters = () => [
    { type: src_app_modules_lookup_services_lookup_service__WEBPACK_IMPORTED_MODULE_6__["LookupService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _services_customer_service__WEBPACK_IMPORTED_MODULE_5__["CustomerService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
FormCustomerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-form-customer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-customer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/customer/components/form-customer/form-customer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-customer.component.scss */ "./src/app/modules/customer/components/form-customer/form-customer.component.scss")).default]
    })
], FormCustomerComponent);



/***/ }),

/***/ "./src/app/modules/customer/components/query-customers/query-customers.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/customer/components/query-customers/query-customers.component.scss ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY3VzdG9tZXIvY29tcG9uZW50cy9xdWVyeS1jdXN0b21lcnMvcXVlcnktY3VzdG9tZXJzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/customer/components/query-customers/query-customers.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/modules/customer/components/query-customers/query-customers.component.ts ***!
  \******************************************************************************************/
/*! exports provided: QueryCustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryCustomersComponent", function() { return QueryCustomersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _change_customer_change_customer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../change-customer/change-customer.component */ "./src/app/modules/customer/components/change-customer/change-customer.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_customer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/customer.service */ "./src/app/modules/customer/services/customer.service.ts");
/* harmony import */ var src_app_modules_ui_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/ui/services/loading.service */ "./src/app/modules/ui/services/loading.service.ts");
/* harmony import */ var src_app_modules_shared_services_ag_grid_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/shared/services/ag-grid-helper.service */ "./src/app/modules/shared/services/ag-grid-helper.service.ts");
/* harmony import */ var src_app_modules_ui_services_notify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/ui/services/notify.service */ "./src/app/modules/ui/services/notify.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");









let QueryCustomersComponent = class QueryCustomersComponent {
    constructor(customerService, loading, agGridHelper, notify, modalService) {
        this.customerService = customerService;
        this.loading = loading;
        this.agGridHelper = agGridHelper;
        this.notify = notify;
        this.modalService = modalService;
        this.showSpinner = false;
        this.columnDefs = [
            { headerName: 'ID Cliente', field: 'id', sortable: true, filter: true },
            { headerName: 'Nome', field: 'name', sortable: true, filter: true },
            { headerName: 'Nome curto', field: 'shortName', sortable: true, filter: true },
            { headerName: 'CPF', field: 'cpf', sortable: true, filter: true, valueFormatter: this.agGridHelper.cpfFormatter },
            { headerName: 'Email', field: 'email', sortable: true, filter: true },
        ];
        this.rowSelection = 'single';
    }
    getCustomers() {
        this.loading.showHide(true);
        this.rowData = this.customerService.getCustomers();
        this.subscription = this.rowData.subscribe(() => this.loading.showHide(false), (error) => {
            this.loading.showHide(false);
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Opps...', 'Ocorreu um erro ao buscar os clientes', 'error');
            console.error(error);
        });
    }
    open(type) {
        if (!this.selectedRow) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Opps...', 'Nenhum registro selecionado!', 'warning');
            return;
        }
        console.log('edit', this.selectedRow.id);
        const modalRef = this.modalService.open(_change_customer_change_customer_component__WEBPACK_IMPORTED_MODULE_1__["ChangeCustomerComponent"]);
        modalRef.componentInstance.type = type;
        modalRef.componentInstance.idCustomer = this.selectedRow.id;
        modalRef.result.then(() => {
            this.getCustomers();
        }, () => {
        });
    }
    onRowSelected(event) {
        this.selectedRow = event.data;
    }
    ngOnInit() {
        this.getCustomers();
    }
    ngOnDestroy() {
        if (this.subscription != null) {
            this.subscription.unsubscribe();
        }
    }
};
QueryCustomersComponent.ctorParameters = () => [
    { type: _services_customer_service__WEBPACK_IMPORTED_MODULE_3__["CustomerService"] },
    { type: src_app_modules_ui_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: src_app_modules_shared_services_ag_grid_helper_service__WEBPACK_IMPORTED_MODULE_5__["AgGridHelperService"] },
    { type: src_app_modules_ui_services_notify_service__WEBPACK_IMPORTED_MODULE_6__["NotifyService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"] }
];
QueryCustomersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-query-customers',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./query-customers.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/customer/components/query-customers/query-customers.component.html")).default,
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDropdownConfig"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./query-customers.component.scss */ "./src/app/modules/customer/components/query-customers/query-customers.component.scss")).default]
    })
], QueryCustomersComponent);



/***/ }),

/***/ "./src/app/modules/customer/customer.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/customer/customer.module.ts ***!
  \*****************************************************/
/*! exports provided: CustomerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModule", function() { return CustomerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_form_customer_form_customer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/form-customer/form-customer.component */ "./src/app/modules/customer/components/form-customer/form-customer.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _components_query_customers_query_customers_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/query-customers/query-customers.component */ "./src/app/modules/customer/components/query-customers/query-customers.component.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_change_customer_change_customer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/change-customer/change-customer.component */ "./src/app/modules/customer/components/change-customer/change-customer.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");












const routes = [{
        path: '',
        children: [{
                path: 'new',
                component: _components_form_customer_form_customer_component__WEBPACK_IMPORTED_MODULE_3__["FormCustomerComponent"]
            },
            {
                path: 'query',
                component: _components_query_customers_query_customers_component__WEBPACK_IMPORTED_MODULE_8__["QueryCustomersComponent"]
            }]
    }];
let CustomerModule = class CustomerModule {
};
CustomerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_form_customer_form_customer_component__WEBPACK_IMPORTED_MODULE_3__["FormCustomerComponent"],
            _components_query_customers_query_customers_component__WEBPACK_IMPORTED_MODULE_8__["QueryCustomersComponent"],
            _components_change_customer_change_customer_component__WEBPACK_IMPORTED_MODULE_10__["ChangeCustomerComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_9__["AgGridModule"].withComponents([]),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbDropdownModule"]
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
        ],
        entryComponents: [_components_change_customer_change_customer_component__WEBPACK_IMPORTED_MODULE_10__["ChangeCustomerComponent"]]
    })
], CustomerModule);



/***/ }),

/***/ "./src/app/modules/customer/services/customer.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/customer/services/customer.service.ts ***!
  \***************************************************************/
/*! exports provided: CustomerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerService", function() { return CustomerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_services_http_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http/services/http-helper.service */ "./src/app/modules/http/services/http-helper.service.ts");



let CustomerService = class CustomerService {
    constructor(httpHelper) {
        this.httpHelper = httpHelper;
    }
    newCustomer(customer) {
        return this.httpHelper.post('/Customers/New', customer);
    }
    getCustomers() {
        return this.httpHelper.get('/Lookups/GetCustomers');
    }
    changeName(id, name) {
        return this.httpHelper.put('/Customers/Name/', { id, name });
    }
    changeShortname(id, shortName) {
        return this.httpHelper.put('/Customers/Shortname/', { id, shortName });
    }
    changeCpf(id, cpf) {
        return this.httpHelper.put('/Customers/Cpf/', { id, cpf });
    }
    cancel(id) {
        return this.httpHelper.post(`/Customers/Cancel/${id}`, null);
    }
};
CustomerService.ctorParameters = () => [
    { type: _http_services_http_helper_service__WEBPACK_IMPORTED_MODULE_2__["HttpHelperService"] }
];
CustomerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CustomerService);



/***/ }),

/***/ "./src/app/modules/dashboard/components/dash-analytics.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/dash-analytics.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGFzaGJvYXJkL2NvbXBvbmVudHMvZGFzaC1hbmFseXRpY3MuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/dashboard/components/dash-analytics.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/dashboard/components/dash-analytics.component.ts ***!
  \**************************************************************************/
/*! exports provided: DashAnalyticsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashAnalyticsComponent", function() { return DashAnalyticsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_components_chart_apex_chart_apex_chart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/chart/apex-chart/apex-chart.service */ "./src/app/modules/shared/components/chart/apex-chart/apex-chart.service.ts");
/* harmony import */ var _fack_db_chart_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../fack-db/chart-data */ "./src/app/modules/dashboard/fack-db/chart-data.ts");
/* harmony import */ var _bill_services_bill_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../bill/services/bill.service */ "./src/app/modules/bill/services/bill.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_modules_ui_services_loading_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/ui/services/loading.service */ "./src/app/modules/ui/services/loading.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);








let DashAnalyticsComponent = class DashAnalyticsComponent {
    constructor(apexEvent, billService, loading) {
        this.apexEvent = apexEvent;
        this.billService = billService;
        this.loading = loading;
        this.subscriptions = new Array();
        this.chartDB = _fack_db_chart_data__WEBPACK_IMPORTED_MODULE_3__["ChartDB"];
        this.dailyVisitorStatus = '1y';
        this.deviceProgressBar = [
            {
                type: 'success',
                value: 66
            }, {
                type: 'primary',
                value: 26
            }, {
                type: 'danger',
                value: 8
            }
        ];
    }
    /* ========= life sycle */
    ngOnInit() {
        const date = new Date();
        const y = date.getFullYear();
        const m = date.getMonth();
        const start = new Date(y, m, 1);
        const end = new Date(y, m, this.lastDay(y, m));
        this.startDate = this.getNgbDate(start);
        this.endDate = this.getNgbDate(end);
        this.search();
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => {
            sub.unsubscribe();
        });
    }
    /* ========== end lifie sycle */
    dailyVisitorEvent(status) {
        this.dailyVisitorStatus = status;
        switch (status) {
            case '1m':
                this.dailyVisitorAxis = {
                    min: new Date('28 Jan 2013').getTime(),
                    max: new Date('27 Feb 2013').getTime(),
                };
                break;
            case '6m':
                this.dailyVisitorAxis = {
                    min: new Date('27 Sep 2012').getTime(),
                    max: new Date('27 Feb 2013').getTime()
                };
                break;
            case '1y':
                this.dailyVisitorAxis = {
                    min: new Date('27 Feb 2012').getTime(),
                    max: new Date('27 Feb 2013').getTime()
                };
                break;
            case 'ytd':
                this.dailyVisitorAxis = {
                    min: new Date('01 Jan 2013').getTime(),
                    max: new Date('27 Feb 2013').getTime()
                };
                break;
            case 'all':
                this.dailyVisitorAxis = {
                    min: undefined,
                    max: undefined
                };
                break;
        }
    }
    search() {
        const start = `${this.startDate.year}-${this.startDate.month}-${this.startDate.day}`;
        const end = `${this.endDate.year}-${this.endDate.month}-${this.endDate.day}`;
        this.loading.showHide(true);
        this.subscriptions.push(this.billService.AccountBalance(start, end)
            .subscribe(response => {
            this.accountBalance = response;
            this.loading.showHide(false);
        }, error => {
            console.log(error);
            this.loading.showHide(false);
            sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire('Ops..', 'Ocorreu um erro ao atualizar o dashboard', 'error');
        }));
        // this.accountBalance.subscribe((data) => console.log(data), (error) => console.log(error));
    }
    getNgbDate(date) {
        return new _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbDate"](date.getFullYear(), date.getMonth() + 1, date.getDate());
    }
    lastDay(y, m) {
        return new Date(y, m + 1, 0).getDate();
    }
};
DashAnalyticsComponent.ctorParameters = () => [
    { type: _shared_components_chart_apex_chart_apex_chart_service__WEBPACK_IMPORTED_MODULE_2__["ApexChartService"] },
    { type: _bill_services_bill_service__WEBPACK_IMPORTED_MODULE_4__["BillService"] },
    { type: src_app_modules_ui_services_loading_service__WEBPACK_IMPORTED_MODULE_6__["LoadingService"] }
];
DashAnalyticsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dash-analytics',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dash-analytics.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/dashboard/components/dash-analytics.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dash-analytics.component.scss */ "./src/app/modules/dashboard/components/dash-analytics.component.scss")).default]
    })
], DashAnalyticsComponent);



/***/ }),

/***/ "./src/app/modules/dashboard/dashboard.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/dashboard/dashboard.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_dash_analytics_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dash-analytics.component */ "./src/app/modules/dashboard/components/dash-analytics.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");








let DashboardModule = class DashboardModule {
};
DashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_dash_analytics_component__WEBPACK_IMPORTED_MODULE_3__["DashAnalyticsComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbProgressbarModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModule"]
        ]
    })
], DashboardModule);



/***/ }),

/***/ "./src/app/modules/dashboard/fack-db/chart-data.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/dashboard/fack-db/chart-data.ts ***!
  \*********************************************************/
/*! exports provided: ChartDB */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChartDB", function() { return ChartDB; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class ChartDB {
}
ChartDB.analyticsMixed = {
    chart: {
        height: 320,
        type: 'line',
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '40%',
            endingShape: 'rounded'
        },
    },
    series: [{
            name: 'Website Blog',
            type: 'column',
            data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
        }, {
            name: 'Repeated',
            type: 'line',
            data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43, 23]
        }, {
            name: 'Social Media',
            type: 'line',
            data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
        }],
    stroke: {
        width: [0, 4, 4],
        dashArray: [0, 10, 0],
        curve: 'smooth'
    },
    colors: ['#73b4ff', '#ff869a', '#59e0c5'],
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            type: 'vertical',
            gradientToColors: ['#4099ff', '#ff5370', '#2ed8b6'],
            shadeIntensity: 0.25,
            inverseColors: true,
            opacityFrom: 0.99,
            opacityTo: 0.95,
            stops: [0, 100]
        },
    },
    labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001',
        '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
    xaxis: {
        type: 'datetime'
    },
    yaxis: [{
            title: {
                text: 'Website Blog',
            },
        }, {
            opposite: true,
            title: {
                text: 'Social Media'
            }
        }]
};
ChartDB.analyticsSeoCard = {
    chart: {
        type: 'area',
        height: 120,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#2ed8b6'],
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            gradientToColors: ['#2ed8b6'],
            shadeIntensity: 1,
            type: 'horizontal',
            opacityFrom: 0.9,
            opacityTo: 0.5,
            stops: [0, 100, 100, 100]
        },
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    series: [{
            data: [40, 25, 60, 50, 75, 60]
        }],
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: (seriesName) => 'Ticket '
            }
        },
        marker: {
            show: false
        }
    }
};
ChartDB.analyticsUser = {
    chart: {
        type: 'line',
        height: 30,
        sparkline: {
            enabled: true
        },
    },
    stroke: {
        curve: 'straight',
        width: 2,
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            shadeIntensity: 0.5,
            type: 'horizontal',
            opacityFrom: 0.5,
            opacityTo: 1,
            stops: [0, 100]
        },
    },
    series: [{
            data: [3, 0, 1, 2, 1, 1, 2]
        }],
    yaxis: {
        min: -2,
        max: 5
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: (seriesName) => ''
            }
        },
        marker: {
            show: false
        }
    },
    colors: ['#ffb64d'],
};
ChartDB.analyticsSession = {
    chart: {
        type: 'line',
        height: 30,
        sparkline: {
            enabled: true
        },
    },
    stroke: {
        curve: 'straight',
        width: 2,
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            shadeIntensity: 0.5,
            type: 'horizontal',
            opacityFrom: 0.5,
            opacityTo: 1,
            stops: [0, 100]
        },
    },
    series: [{
            data: [2, 1, 2, 1, 1, 3, 0]
        }],
    yaxis: {
        min: -3,
        max: 5
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: (seriesName) => ''
            }
        },
        marker: {
            show: false
        }
    },
    colors: ['#dc6788'],
};
ChartDB.analyticsPageView = {
    chart: {
        type: 'line',
        height: 30,
        sparkline: {
            enabled: true
        },
    },
    stroke: {
        curve: 'straight',
        width: 2,
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            shadeIntensity: 0.5,
            type: 'horizontal',
            opacityFrom: 0.5,
            opacityTo: 1,
            stops: [0, 100]
        },
    },
    series: [{
            data: [3, 0, 1, 2, 1, 1, 2]
        }],
    yaxis: {
        min: -3,
        max: 5
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: (seriesName) => ''
            }
        },
        marker: {
            show: false
        }
    },
    colors: ['#FF5370'],
};
ChartDB.analyticsPageSession = {
    chart: {
        type: 'line',
        height: 30,
        sparkline: {
            enabled: true
        },
    },
    stroke: {
        curve: 'straight',
        width: 2,
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            shadeIntensity: 0.5,
            type: 'horizontal',
            opacityFrom: 0.5,
            opacityTo: 1,
            stops: [0, 100]
        },
    },
    series: [{
            data: [2, 1, 2, 1, 1, 3, 0]
        }],
    yaxis: {
        min: -3,
        max: 5
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: (seriesName) => ''
            }
        },
        marker: {
            show: false
        }
    },
    colors: ['#7759de'],
};
ChartDB.analyticsAvgSession = {
    chart: {
        type: 'line',
        height: 30,
        sparkline: {
            enabled: true
        },
    },
    stroke: {
        curve: 'straight',
        width: 2,
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            shadeIntensity: 0.5,
            type: 'horizontal',
            opacityFrom: 0.5,
            opacityTo: 1,
            stops: [0, 100]
        },
    },
    series: [{
            data: [3, 0, 1, 2, 1, 1, 2]
        }],
    yaxis: {
        min: -3,
        max: 5
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: (seriesName) => ''
            }
        },
        marker: {
            show: false
        }
    },
    colors: ['#4099ff'],
};
ChartDB.analyticsBounceRate = {
    chart: {
        type: 'line',
        height: 30,
        sparkline: {
            enabled: true
        },
    },
    stroke: {
        curve: 'straight',
        width: 2,
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            shadeIntensity: 0.5,
            type: 'horizontal',
            opacityFrom: 0.5,
            opacityTo: 1,
            stops: [0, 100]
        },
    },
    series: [{
            data: [2, 1, 2, 1, 1, 3, 0]
        }],
    yaxis: {
        min: -3,
        max: 5
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: (seriesName) => ''
            }
        },
        marker: {
            show: false
        }
    },
    colors: ['#2ed8b6'],
};
ChartDB.analyticsConversions1 = {
    chart: {
        type: 'bar',
        height: 65,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#73b4ff'],
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            type: 'vertical',
            shadeIntensity: 0,
            gradientToColors: ['#4099ff'],
            inverseColors: true,
            opacityFrom: 0.99,
            opacityTo: 0.99,
            stops: [0, 100]
        },
    },
    plotOptions: {
        bar: {
            columnWidth: '80%'
        }
    },
    series: [{
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 85, 63, 25,
                44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 25, 44, 12, 36, 9, 54]
        }],
    xaxis: {
        crosshairs: {
            width: 1
        },
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: (seriesName) => ''
            }
        },
        marker: {
            show: false
        }
    }
};
ChartDB.analyticsConversions2 = {
    chart: {
        type: 'bar',
        height: 65,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#59e0c5'],
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            type: 'vertical',
            shadeIntensity: 0,
            gradientToColors: ['#2ed8b6'],
            inverseColors: true,
            opacityFrom: 0.99,
            opacityTo: 0.99,
            stops: [0, 100]
        },
    },
    plotOptions: {
        bar: {
            columnWidth: '80%'
        }
    },
    series: [{
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 85, 63, 25, 44,
                12, 36, 9, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 25, 44, 12, 36, 9, 54]
        }],
    xaxis: {
        crosshairs: {
            width: 1
        },
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: (seriesName) => ''
            }
        },
        marker: {
            show: false
        }
    }
};
ChartDB.analyticsConversions3 = {
    chart: {
        type: 'bar',
        height: 65,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#ff869a'],
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            type: 'vertical',
            shadeIntensity: 0,
            gradientToColors: ['#ff5370'],
            inverseColors: true,
            opacityFrom: 0.99,
            opacityTo: 0.99,
            stops: [0, 100]
        },
    },
    plotOptions: {
        bar: {
            columnWidth: '80%'
        }
    },
    series: [{
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 85,
                63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 25, 44, 12, 36, 9, 54]
        }],
    xaxis: {
        crosshairs: {
            width: 1
        },
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: (seriesName) => ''
            }
        },
        marker: {
            show: false
        }
    }
};
ChartDB.saleAnnualProfit = {
    chart: {
        height: 350,
        type: 'line',
        stacked: false,
    },
    stroke: {
        width: [0, 5],
        curve: 'smooth'
    },
    plotOptions: {
        bar: {
            columnWidth: '50%'
        }
    },
    colors: ['#4099ff', '#2ed8b6'],
    series: [{
            name: 'Facebook',
            type: 'column',
            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
        }, {
            name: 'Dribbble',
            type: 'line',
            data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
        }],
    fill: {
        opacity: [0.85, 1],
    },
    labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003',
        '07/01/2003', '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'],
    markers: {
        size: 0
    },
    xaxis: {
        type: 'datetime'
    },
    yaxis: {
        min: 0
    },
    tooltip: {
        shared: true,
        intersect: false,
        y: {
            formatter: (y) => {
                if (typeof y !== 'undefined') {
                    return y.toFixed(0) + ' views';
                }
                return y;
            }
        }
    },
    legend: {
        labels: {
            useSeriesColors: true
        },
        markers: {
            customHTML: [
                () => '',
                () => ''
            ]
        }
    }
};
ChartDB.saleSatisfaction = {
    chart: {
        height: 260,
        type: 'pie',
    },
    series: [66, 50, 40, 30],
    labels: ['extremely Satisfied', 'Satisfied', 'Poor', 'Very Poor'],
    legend: {
        show: true,
        offsetY: 50,
    },
    dataLabels: {
        enabled: true,
        dropShadow: {
            enabled: false,
        }
    },
    theme: {
        monochrome: {
            enabled: true,
            color: '#4099ff',
        }
    },
    responsive: [{
            breakpoint: 768,
            options: {
                chart: {
                    height: 320,
                },
                legend: {
                    position: 'bottom',
                    offsetY: 0,
                }
            }
        }]
};
ChartDB.chartStudent = {
    chart: {
        height: 200,
        type: 'line',
        toolbar: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 2,
        curve: 'smooth'
    },
    series: [{
            name: 'Arts',
            data: [20, 50, 30, 60, 30, 50, 40]
        }, {
            name: 'Commerce',
            data: [60, 30, 65, 45, 67, 35, 68]
        }, {
            name: 'Science',
            data: [40, 20, 50, 15, 40, 65, 20]
        }],
    xaxis: {
        type: 'datetime',
        categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000'],
    },
    colors: ['#73b4ff', '#59e0c5', '#ff869a'],
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            gradientToColors: ['#4099ff', '#2ed8b6', '#ff5370'],
            shadeIntensity: 0.5,
            type: 'horizontal',
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
        },
    },
    markers: {
        size: 5,
        colors: ['#4099ff', '#2ed8b6', '#ff5370'],
        opacity: 0.9,
        strokeWidth: 2,
        hover: {
            size: 7,
        }
    },
    yaxis: {
        min: 10,
        max: 70,
    }
};
ChartDB.chartEmail = {
    chart: {
        height: 200,
        type: 'donut',
    },
    dataLabels: {
        enabled: false,
    },
    series: [85.7, 77.56, 20.9],
    colors: ['#4099ff', '#ff5370', '#2ed8b6'],
    labels: ['Send', 'Open', 'Bounced'],
    legend: {
        show: true,
        position: 'bottom',
    }
};
ChartDB.chartSeoCard = {
    chart: {
        type: 'area',
        height: 120,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#4099ff'],
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            gradientToColors: ['#4099ff'],
            shadeIntensity: 1,
            type: 'horizontal',
            opacityFrom: 0.9,
            opacityTo: 0.5,
            stops: [0, 100, 100, 100]
        },
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    series: [{
            data: [40, 25, 60, 50, 75, 60]
        }],
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: (seriesName) => 'Ticket '
            }
        },
        marker: {
            show: false
        }
    }
};
ChartDB.chartUniqueVisitor = {
    chart: {
        type: 'bar',
        height: 220,
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false,
    },
    colors: ['#fff'],
    plotOptions: {
        bar: {
            color: '#fff',
            columnWidth: '80%',
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            type: 'vertical',
            shadeIntensity: 0.25,
            gradientToColors: ['#fff',],
            inverseColors: true,
            opacityFrom: 0.99,
            opacityTo: 0.65,
            stops: [0, 100]
        },
    },
    series: [{
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89, 63, 25,
                44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 25, 44, 12, 36, 9, 54]
        }],
    xaxis: {
        crosshairs: {
            width: 1
        },
        labels: {
            show: true,
            style: {
                colors: '#fff',
            },
        },
    },
    yaxis: {
        labels: {
            style: {
                color: '#fff',
            },
        },
    },
    grid: {
        borderColor: '#ffffff3b',
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: (seriesName) => 'Click '
            }
        },
        marker: {
            show: false
        }
    }
};
ChartDB.chartStatistics = {
    chart: {
        height: 195,
        type: 'line',
        toolbar: {
            show: false,
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 3,
        curve: 'smooth'
    },
    series: [{
            name: 'Arts',
            data: [20, 50, 30, 60, 30, 65, 30]
        }, {
            name: 'Science',
            data: [40, 20, 50, 15, 45, 30, 60]
        }],
    xaxis: {
        type: 'datetime',
        categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000'],
    },
    colors: ['#73b4ff', '#ff869a'],
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            gradientToColors: ['#4099ff', '#ff5370'],
            shadeIntensity: 0.5,
            type: 'horizontal',
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
        },
    },
    markers: {
        size: 5,
        colors: ['#4099ff', '#ff5370'],
        opacity: 0.9,
        strokeWidth: 2,
        hover: {
            size: 7,
        }
    },
    yaxis: {
        min: 10,
        max: 70,
    }
};
ChartDB.chartProcessCompliance = {
    chart: {
        height: 200,
        type: 'bar',
        sparkline: {
            enabled: true
        },
    },
    colors: ['#4099ff', '#2ed8b6', '#ff5370'],
    plotOptions: {
        bar: {
            columnWidth: '55%',
            distributed: true
        }
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        width: 0
    },
    series: [{
            name: 'Requests',
            data: [66.6, 29.7, 32.8]
        }],
    xaxis: {
        categories: ['Desktop', 'Tablet', 'Mobile'],
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            type: 'vertical',
            shadeIntensity: 0.25,
            gradientToColors: ['#4099ff', '#2ed8b6', '#ff5370'],
            inverseColors: true,
            opacityFrom: 0.99,
            opacityTo: 0.65,
            stops: [0, 100]
        },
    },
};
ChartDB.chartUser1 = {
    chart: {
        height: 150,
        type: 'area',
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false,
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 3,
        curve: 'straight',
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            gradientToColors: ['#4099ff'],
            shadeIntensity: 1,
            type: 'horizontal',
            opacityFrom: 0.9,
            opacityTo: 0.5,
            stops: [0, 100, 100, 100]
        },
    },
    yaxis: {
        labels: {
            show: true,
            maxWidth: 20,
        }
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',],
    },
    colors: ['#4099ff'],
    series: [{
            name: 'Hour.',
            data: [0, 30, 10, 45, 30, 55, 30, 50]
        }],
    grid: {
        row: {
            opacity: 0.5
        }
    },
};
ChartDB.chartUser2 = {
    chart: {
        height: 150,
        type: 'area',
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false,
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 3,
        curve: 'straight',
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            gradientToColors: ['#2ed8b6'],
            shadeIntensity: 1,
            type: 'horizontal',
            opacityFrom: 0.9,
            opacityTo: 0.5,
            stops: [0, 100, 100, 100]
        },
    },
    yaxis: {
        labels: {
            show: true,
            maxWidth: 20,
        }
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',],
    },
    colors: ['#2ed8b6'],
    series: [{
            name: 'Hour.',
            data: [0, 30, 10, 45, 30, 55, 30, 50]
        }],
    grid: {
        row: {
            opacity: 0.5
        }
    },
};
ChartDB.chartUser3 = {
    chart: {
        height: 150,
        type: 'area',
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false,
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 3,
        curve: 'straight',
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'dark',
            gradientToColors: ['#ffb64d'],
            shadeIntensity: 1,
            type: 'horizontal',
            opacityFrom: 0.9,
            opacityTo: 0.5,
            stops: [0, 100, 100, 100]
        },
    },
    yaxis: {
        labels: {
            show: true,
            maxWidth: 20,
        }
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',],
    },
    colors: ['#ffb64d'],
    series: [{
            name: 'Hour.',
            data: [0, 30, 10, 45, 30, 55, 30, 50]
        }],
    grid: {
        row: {
            opacity: 0.5
        }
    },
};
ChartDB.chartAmount1 = {
    chart: {
        type: 'area',
        height: 90,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#FFF'],
    fill: {
        type: 'solid',
        opacity: 1
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    series: [{
            name: 'series1',
            data: [65, 45, 60, 40, 80]
        }],
    yaxis: {
        min: 0,
        max: 80,
    },
    tooltip: {
        theme: 'dark',
        fixed: {
            enabled: false
        },
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: (seriesName) => '$'
            }
        },
        marker: {
            show: false
        }
    }
};
ChartDB.chartAmount2 = {
    chart: {
        type: 'area',
        height: 90,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#FFF'],
    fill: {
        type: 'solid',
        opacity: 1
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    series: [{
            name: 'series1',
            data: [80, 40, 60, 45, 65]
        }],
    yaxis: {
        min: 0,
        max: 80,
    },
    tooltip: {
        theme: 'dark',
        fixed: {
            enabled: false
        },
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: (seriesName) => '$'
            }
        },
        marker: {
            show: false
        }
    }
};
ChartDB.chartAmount3 = {
    chart: {
        type: 'area',
        height: 90,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#FFF'],
    fill: {
        type: 'solid',
        opacity: 1
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    series: [{
            name: 'series1',
            data: [65, 45, 60, 40, 80]
        }],
    yaxis: {
        min: 0,
        max: 80,
    },
    tooltip: {
        theme: 'dark',
        fixed: {
            enabled: false
        },
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: (seriesName) => '$'
            }
        },
        marker: {
            show: false
        }
    }
};
ChartDB.chartAmount4 = {
    chart: {
        type: 'area',
        height: 90,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#FFF'],
    fill: {
        type: 'solid',
        opacity: 1
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    series: [{
            name: 'series1',
            data: [80, 40, 60, 45, 65]
        }],
    yaxis: {
        min: 0,
        max: 80,
    },
    tooltip: {
        theme: 'dark',
        fixed: {
            enabled: false
        },
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: (seriesName) => '$'
            }
        },
        marker: {
            show: false
        }
    }
};
ChartDB.completedTicketCAC = {
    chart: {
        type: 'line',
        height: 80,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 3,
        curve: 'smooth',
    },
    series: [{
            data: [45, 66, 41, 89, 25, 44, 9, 54]
        }],
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: (seriesName) => ''
            }
        },
        marker: {
            show: false
        }
    }
};
ChartDB.transactions1CAC = {
    chart: {
        type: 'bar',
        height: 60,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#4099ff'],
    plotOptions: {
        bar: {
            columnWidth: '80%'
        }
    },
    series: [{
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
        }],
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    xaxis: {
        crosshairs: {
            width: 1
        },
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: (seriesName) => 'Inbound'
            }
        },
        marker: {
            show: false
        }
    }
};
ChartDB.transactions2CAC = {
    chart: {
        type: 'bar',
        height: 65,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#FF5370'],
    plotOptions: {
        bar: {
            columnWidth: '80%'
        }
    },
    series: [{
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
        }],
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
    xaxis: {
        crosshairs: {
            width: 1
        },
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: (seriesName) => 'Outbound'
            }
        },
        marker: {
            show: false
        }
    }
};
ChartDB.storageCAC = {
    chart: {
        type: 'area',
        height: 95,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#4099ff', '#00bcd4'],
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    series: [{
            name: 'Storage',
            data: [100, 40, 28, 51, 42, 109, 100]
        }, {
            name: 'Bandwidth',
            data: [41, 109, 45, 109, 34, 52, 41]
        }],
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        marker: {
            show: false
        }
    }
};
ChartDB.accountCAC = {
    chart: {
        type: 'area',
        height: 215,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#4099ff', '#0e9e4a', '#FF5370'],
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    series: [{
            name: 'series1',
            data: [20, 90, 65, 85, 20, 80, 30]
        }, {
            name: 'series2',
            data: [70, 30, 40, 15, 60, 40, 95]
        }],
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: (seriesName) => ''
            }
        },
        marker: {
            show: false
        }
    }
};
ChartDB.percentageCAC = {
    chart: {
        height: 120,
        type: 'bar',
        sparkline: {
            enabled: true
        },
    },
    colors: ['#4099ff', '#0e9e4a', '#FF5370'],
    plotOptions: {
        bar: {
            columnWidth: '55%',
            distributed: true
        }
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        width: 0
    },
    series: [{
            name: 'Requests',
            data: [66.6, 29.7, 32.8]
        }],
    xaxis: {
        categories: ['Desktop', 'Tablet', 'Mobile'],
    }
};
ChartDB.deviceCAC = {
    chart: {
        height: 135,
        type: 'donut',
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    series: [66.6, 29.7, 38.6],
    labels: ['Desktop', 'Mobile', 'Tablet'],
    grid: {
        padding: {
            top: 20,
            right: 0,
            bottom: 0,
            left: 0
        },
    },
    legend: {
        show: false
    }
};
ChartDB.average1CAC = {
    chart: {
        type: 'area',
        height: 145,
        width: '100%',
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#4099ff'],
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.8,
            opacityTo: 0.4,
            stops: [0, 80, 100]
        }
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    series: [{
            name: 'series1',
            data: [40, 60, 35, 55, 35, 75, 50]
        }],
    yaxis: {
        min: 0,
        max: 100,
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: (seriesName) => '$'
            }
        },
        marker: {
            show: false
        }
    }
};
ChartDB.average2CAC = {
    chart: {
        type: 'area',
        height: 145,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#0e9e4a'],
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.8,
            opacityTo: 0.4,
            stops: [0, 90, 100]
        }
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    series: [{
            name: 'series1',
            data: [40, 55, 35, 75, 50, 90, 50]
        }],
    yaxis: {
        min: 0,
        max: 100,
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: (seriesName) => '$'
            }
        },
        marker: {
            show: false
        }
    }
};
ChartDB.average3CAC = {
    chart: {
        type: 'area',
        height: 145,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#FFF'],
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0.4,
            stops: [0, 100]
        }
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    series: [{
            name: 'series1',
            data: [40, 60, 35, 70, 50]
        }],
    yaxis: {
        min: 0,
        max: 100,
    },
    tooltip: {
        theme: 'dark',
        fixed: {
            enabled: false
        },
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: (seriesName) => '$'
            }
        },
        marker: {
            show: false
        }
    }
};
ChartDB.average4CAC = {
    chart: {
        type: 'area',
        height: 145,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#FFF'],
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.5,
            opacityTo: 0.4,
            stops: [0, 100]
        }
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    series: [{
            name: 'series1',
            data: [65, 45, 60, 40, 80]
        }],
    yaxis: {
        min: 0,
        max: 100,
    },
    tooltip: {
        theme: 'dark',
        fixed: {
            enabled: false
        },
        x: {
            show: false,
        },
        y: {
            title: {
                formatter: (seriesName) => '$'
            }
        },
        marker: {
            show: false
        }
    }
};
ChartDB.conversionsBarCAC = {
    chart: {
        type: 'bar',
        height: 85,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#4099ff'],
    plotOptions: {
        bar: {
            columnWidth: '80%'
        }
    },
    series: [{
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89,
                63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 25, 44, 12, 36, 9, 54]
        }],
    xaxis: {
        crosshairs: {
            width: 1
        },
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: (seriesName) => ''
            }
        },
        marker: {
            show: false
        }
    }
};
ChartDB.conversionsCAC = {
    chart: {
        type: 'bar',
        height: 65,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#00acc1'],
    plotOptions: {
        bar: {
            columnWidth: '80%'
        }
    },
    series: [{
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41,
                89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 25, 44, 12, 36, 9, 54]
        }],
    xaxis: {
        crosshairs: {
            width: 1
        },
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: (seriesName) => ''
            }
        },
        marker: {
            show: false
        }
    }
};
ChartDB.customerCAC = {
    chart: {
        height: 200,
        type: 'donut',
    },
    dataLabels: {
        enabled: false
    },
    plotOptions: {
        pie: {
            donut: {
                size: '65%'
            }
        }
    },
    labels: ['New', 'Return', 'Custom'],
    series: [76.7, 15, 30],
    legend: {
        show: false
    },
    grid: {
        padding: {
            top: 20,
            right: 0,
            bottom: 0,
            left: 0
        },
    },
    colors: ['#4099ff', '#0e9e4a', '#FF5370'],
};
ChartDB.dailyVisitorAACC = {
    chart: {
        type: 'area',
        height: 285,
    },
    dataLabels: {
        enabled: false
    },
    series: [{
            name: 'visitor',
            data: [
                [1327359600000, 30],
                [1327446000000, 31],
                [1327532400000, 31],
                [1327618800000, 31],
                [1327878000000, 31],
                [1327964400000, 30],
                [1328050800000, 31],
                [1328137200000, 31],
                [1328223600000, 31],
                [1328482800000, 31],
                [1328569200000, 32],
                [1328655600000, 32],
                [1328742000000, 32],
                [1328828400000, 32],
                [1329087600000, 32],
                [1329174000000, 32],
                [1329260400000, 32],
                [1329346800000, 32],
                [1329433200000, 32],
                [1329778800000, 32],
                [1329865200000, 32],
                [1329951600000, 32],
                [1330038000000, 33],
                [1330297200000, 33],
                [1330383600000, 33],
                [1330470000000, 32],
                [1330556400000, 33],
                [1330642800000, 33],
                [1330902000000, 33],
                [1330988400000, 31],
                [1331074800000, 32],
                [1331161200000, 33],
                [1331247600000, 33],
                [1331506800000, 33],
                [1331593200000, 34],
                [1331679600000, 33],
                [1331766000000, 34],
                [1331852400000, 33],
                [1332111600000, 34],
                [1332198000000, 33],
                [1332284400000, 33],
                [1332370800000, 33],
                [1332457200000, 33],
                [1332712800000, 34],
                [1332799200000, 34],
                [1332885600000, 34],
                [1332972000000, 34],
                [1333058400000, 34],
                [1333317600000, 34],
                [1333404000000, 34],
                [1333490400000, 33],
                [1333576800000, 33],
                [1333922400000, 33],
                [1334008800000, 32],
                [1334095200000, 33],
                [1334181600000, 33],
                [1334268000000, 33],
                [1334527200000, 32],
                [1334613600000, 33],
                [1334700000000, 33],
                [1334786400000, 32],
                [1334872800000, 33],
                [1335132000000, 32],
                [1335218400000, 32],
                [1335304800000, 33],
                [1335391200000, 33],
                [1335477600000, 33],
                [1335736800000, 33],
                [1335823200000, 33],
                [1335909600000, 33],
                [1335996000000, 33],
                [1336082400000, 32],
                [1336341600000, 32],
                [1336428000000, 32],
                [1336514400000, 32],
                [1336600800000, 31],
                [1336687200000, 32],
                [1336946400000, 32],
                [1337032800000, 32],
                [1337119200000, 32],
                [1337205600000, 32],
                [1337292000000, 31],
                [1337551200000, 32],
                [1337637600000, 32],
                [1337724000000, 32],
                [1337810400000, 31],
                [1337896800000, 31],
                [1338242400000, 32],
                [1338328800000, 31],
                [1338415200000, 31],
                [1338501600000, 29],
                [1338760800000, 30],
                [1338847200000, 30],
                [1338933600000, 31],
                [1339020000000, 31],
                [1339106400000, 31],
                [1339365600000, 31],
                [1339452000000, 31],
                [1339538400000, 31],
                [1339624800000, 31],
                [1339711200000, 32],
                [1339970400000, 32],
                [1340056800000, 32],
                [1340143200000, 31],
                [1340229600000, 31],
                [1340316000000, 31],
                [1340575200000, 30],
                [1340661600000, 31],
                [1340748000000, 31],
                [1340834400000, 31],
                [1340920800000, 32],
                [1341180000000, 32],
                [1341266400000, 32],
                [1341439200000, 32],
                [1341525600000, 31],
                [1341784800000, 30],
                [1341871200000, 30],
                [1341957600000, 30],
                [1342044000000, 30],
                [1342130400000, 30],
                [1342389600000, 30],
                [1342476000000, 30],
                [1342562400000, 31],
                [1342648800000, 31],
                [1342735200000, 31],
                [1342994400000, 30],
                [1343080800000, 30],
                [1343167200000, 30],
                [1343253600000, 30],
                [1343340000000, 31],
                [1343599200000, 31],
                [1343685600000, 30],
                [1343772000000, 30],
                [1343858400000, 30],
                [1343944800000, 32],
                [1344204000000, 32],
                [1344290400000, 32],
                [1344376800000, 32],
                [1344463200000, 32],
                [1344549600000, 32],
                [1344808800000, 32],
                [1344895200000, 32],
                [1344981600000, 32],
                [1345068000000, 33],
                [1345154400000, 33],
                [1345413600000, 33],
                [1345500000000, 33],
                [1345586400000, 33],
                [1345672800000, 33],
                [1345759200000, 32],
                [1346018400000, 32],
                [1346104800000, 32],
                [1346191200000, 31],
                [1346277600000, 31],
                [1346364000000, 31],
                [1346709600000, 31],
                [1346796000000, 32],
                [1346882400000, 32],
                [1346968800000, 32],
                [1347228000000, 32],
                [1347314400000, 32],
                [1347400800000, 32],
                [1347487200000, 32],
                [1347573600000, 33],
                [1347832800000, 33],
                [1347919200000, 32],
                [1348005600000, 33],
                [1348092000000, 34],
                [1348178400000, 33],
                [1348437600000, 33],
                [1348524000000, 32],
                [1348610400000, 32],
                [1348696800000, 32],
                [1348783200000, 32],
                [1349042400000, 32],
                [1349128800000, 32],
                [1349215200000, 32],
                [1349301600000, 32],
                [1349388000000, 32],
                [1349647200000, 32],
                [1349733600000, 31],
                [1349820000000, 31],
                [1349906400000, 31],
                [1349992800000, 31],
                [1350252000000, 32],
                [1350338400000, 33],
                [1350424800000, 33],
                [1350511200000, 33],
                [1350597600000, 33],
                [1350856800000, 33],
                [1350943200000, 33],
                [1351029600000, 33],
                [1351116000000, 33],
                [1351202400000, 34],
                [1351638000000, 34],
                [1351724400000, 34],
                [1351810800000, 34],
                [1352070000000, 34],
                [1352156400000, 34],
                [1352242800000, 33],
                [1352329200000, 32],
                [1352415600000, 32],
                [1352674800000, 32],
                [1352761200000, 32],
                [1352847600000, 32],
                [1352934000000, 32],
                [1353020400000, 32],
                [1353279600000, 32],
                [1353366000000, 32],
                [1353452400000, 32],
                [1353625200000, 33],
                [1353884400000, 33],
                [1353970800000, 33],
                [1354057200000, 33],
                [1354143600000, 34],
                [1354230000000, 34],
                [1354489200000, 34],
                [1354575600000, 35],
                [1354662000000, 35],
                [1354748400000, 35],
                [1354834800000, 35],
                [1355094000000, 35],
                [1355180400000, 35],
                [1355266800000, 35],
                [1355353200000, 35],
                [1355439600000, 37],
                [1355698800000, 37],
                [1355785200000, 37],
                [1355871600000, 38],
                [1355958000000, 37],
                [1356044400000, 37],
                [1356303600000, 37],
                [1356476400000, 37],
                [1356562800000, 37],
                [1356649200000, 36],
                [1356908400000, 37],
                [1357081200000, 38],
                [1357167600000, 37],
                [1357254000000, 38],
                [1357513200000, 37],
                [1357599600000, 38],
                [1357686000000, 38],
                [1357772400000, 38],
                [1357858800000, 38],
                [1358118000000, 38],
                [1358204400000, 38],
                [1358290800000, 37],
                [1358377200000, 37],
                [1358463600000, 37],
                [1358809200000, 37],
                [1358895600000, 38],
                [1358982000000, 38],
                [1359068400000, 38],
                [1359327600000, 38],
                [1359414000000, 38],
                [1359500400000, 37],
                [1359586800000, 37],
                [1359673200000, 38],
                [1359932400000, 38],
                [1360018800000, 38],
                [1360105200000, 38],
                [1360191600000, 38],
                [1360278000000, 39],
                [1360537200000, 38],
                [1360623600000, 38],
                [1360710000000, 38],
                [1360796400000, 38],
                [1360882800000, 38],
                [1361228400000, 38],
                [1361314800000, 38],
                [1361401200000, 38],
                [1361487600000, 38],
                [1361746800000, 38],
                [1361833200000, 38],
                [1361919600000, 39],
            ]
        },],
    stroke: {
        curve: 'straight',
        width: 2,
    },
    markers: {
        size: 0,
        style: 'hollow',
    },
    colors: ['#4099ff'],
    xaxis: {
        type: 'datetime',
        min: new Date('01 Mar 2012').getTime(),
        tickAmount: 6,
        labels: {
            offsetY: 5,
        }
    },
    grid: {
        borderColor: '#cccccc42',
        padding: {
            left: 0,
            right: 0,
            bottom: 0
        }
    },
    yaxis: {
        show: true,
        labels: {
            show: true,
            align: 'left',
            offsetX: -18,
            maxWidth: 40,
        }
    },
    tooltip: {
        x: {
            format: 'dd MMM yyyy'
        }
    },
    fill: {
        type: 'gradient',
        gradient: {
            // shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.0,
            stops: [0, 100]
        }
    },
};
ChartDB.horizontalBarCAC = {
    chart: {
        height: 350,
        type: 'bar',
    },
    plotOptions: {
        bar: {
            horizontal: true,
            dataLabels: {
                position: 'top',
            },
        }
    },
    colors: ['#4099ff', '#0e9e4a', '#FF5370'],
    dataLabels: {
        enabled: false,
        offsetX: -6,
        style: {
            fontSize: '12px',
            colors: ['#fff']
        }
    },
    stroke: {
        show: true,
        width: 1,
        colors: ['#fff']
    },
    series: [{
            name: 'India',
            data: [44, 55, 41, 64, 22]
        }, {
            name: 'Japan',
            data: [53, 32, 33, 52, 13]
        }, {
            name: 'London',
            data: [44, 33, 52, 13, 22]
        }],
    xaxis: {
        categories: [2001, 2002, 2003, 2004, 2005],
    },
};
ChartDB.marketCAC = {
    chart: {
        height: 200,
        type: 'bar',
        stacked: true,
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        },
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#E0291D', '#3C5A99', '#42C0FB'],
    plotOptions: {
        bar: {
            horizontal: false,
        },
    },
    series: [{
            name: 'Youtube',
            data: [44, 50, 41, 67, 22, 43, 44, 50, 41, 52, 22, 43]
        }, {
            name: 'Facebook',
            data: [13, 23, 20, 8, 13, 27, 13, 23, 20, 8, 13, 27]
        }, {
            name: 'Twitter',
            data: [11, 17, 15, 15, 21, 14, 11, 17, 15, 15, 21, 14]
        }],
    xaxis: {
        type: 'datetime',
        categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT', '01/05/2011 GMT', '01/06/2011 GMT',
            '01/07/2011 GMT', '01/08/2011 GMT', '01/09/2011 GMT', '01/10/2011 GMT', '01/11/2011 GMT', '01/12/2011 GMT'],
    },
    legend: {
        show: false,
    },
    fill: {
        opacity: 1
    },
};
ChartDB.revenueCAC = {
    chart: {
        height: 223,
        type: 'donut',
    },
    dataLabels: {
        enabled: false
    },
    labels: ['Target', 'Last week', 'Last day'],
    series: [1258, 975, 500],
    legend: {
        show: false
    },
    colors: ['#00acc1', '#FFB64D', '#4099ff'],
};
ChartDB.saleCAC = {
    chart: {
        type: 'bar',
        height: 220,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#4099ff'],
    plotOptions: {
        bar: {
            columnWidth: '80%'
        }
    },
    series: [{
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89, 63, 25]
        }],
    xaxis: {
        crosshairs: {
            width: 1
        },
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: (seriesName) => ''
            }
        },
        marker: {
            show: false
        }
    }
};
ChartDB.siteCAC = {
    chart: {
        type: 'line',
        height: 150,
        sparkline: {
            enabled: true
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight',
        width: 3,
    },
    series: [{
            data: [135, 187, 180, 222, 185, 195, 158]
        }],
    yaxis: {
        min: 100
    },
    colors: ['#4099ff'],
};
ChartDB.supportCAC = {
    chart: {
        type: 'area',
        height: 95,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#4099ff'],
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    series: [{
            data: [0, 20, 10, 45, 30, 55, 20, 30, 0]
        }],
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: (seriesName) => 'Ticket '
            }
        },
        marker: {
            show: false
        }
    }
};
ChartDB.timeUserCAC = {
    chart: {
        height: 400,
        type: 'heatmap',
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#4099ff'],
    series: [{
            name: 'Metric1',
            data: generateDataSabraThat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric2',
            data: generateDataSabraThat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric3',
            data: generateDataSabraThat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric4',
            data: generateDataSabraThat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric5',
            data: generateDataSabraThat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric6',
            data: generateDataSabraThat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric7',
            data: generateDataSabraThat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric8',
            data: generateDataSabraThat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric9',
            data: generateDataSabraThat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric10',
            data: generateDataSabraThat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric11',
            data: generateDataSabraThat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric12',
            data: generateDataSabraThat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric13',
            data: generateDataSabraThat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric14',
            data: generateDataSabraThat(12, {
                min: 0,
                max: 90
            })
        }
    ]
};
ChartDB.trafficCAC = {
    chart: {
        height: 300,
        type: 'donut',
    },
    dataLabels: {
        enabled: true,
        dropShadow: {
            enabled: false,
        }
    },
    series: [85.7, 77.56, 20.9, 10.9, 15.8, 86.7],
    colors: ['#4099ff', '#0e9e4a', '#00acc1', '#FFB64D', '#FF5370', '#7759de'],
    labels: ['Facebook ads', 'Amazon ads', 'Youtube videos', 'Google adsense', 'Twitter ads', 'News ads'],
    legend: {
        show: true,
        position: 'bottom',
    }
};
ChartDB.timeCAC = {
    chart: {
        height: 225,
        type: 'line',
        zoom: {
            enabled: false
        },
        toolbar: {
            show: false,
        }
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: 3,
        curve: 'straight',
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    },
    colors: ['#0e9e4a'],
    series: [{
            name: 'Hour.',
            data: [10, 41, 35, 51, 49, 52, 58, 71, 89]
        }],
    grid: {
        row: {
            colors: ['#f3f6ff', 'transparent'],
            opacity: 0.5
        }
    },
};
ChartDB.trafficMonitorCAC = {
    chart: {
        type: 'bar',
        height: 400,
        zoom: {
            enabled: false
        },
    },
    dataLabels: {
        enabled: true
    },
    colors: ['#4099ff'],
    plotOptions: {
        bar: {
            colors: {
                ranges: [{
                        from: 0,
                        to: 15,
                        color: '#FF5370'
                    }, {
                        from: 16,
                        to: 30,
                        color: '#FFB64D'
                    }, {
                        from: 31,
                        to: 50,
                        color: '#4099ff'
                    }, {
                        from: 51,
                        to: 100,
                        color: '#0e9e4a'
                    }]
            },
            columnWidth: '80%',
        }
    },
    series: [{
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41,
                89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 25, 44, 12, 36, 9, 54]
        }],
    xaxis: {
        crosshairs: {
            width: 1
        },
    },
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: (seriesName) => 'Click '
            }
        },
        marker: {
            show: false
        }
    }
};
ChartDB.typeCAC = {
    chart: {
        height: 235,
        type: 'donut',
    },
    dataLabels: {
        enabled: false
    },
    plotOptions: {
        pie: {
            donut: {
                size: '65%'
            }
        }
    },
    labels: ['Desktop Computers', 'Smartphones', 'Tablets'],
    series: [76.7, 15, 30],
    legend: {
        show: false
    },
    colors: ['#FF5370', '#FFB64D', '#00acc1'],
};
ChartDB.view1CAC = {
    chart: {
        type: 'area',
        height: 87,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#FF5370'],
    stroke: {
        curve: 'straight',
        width: 3,
    },
    series: [{
            name: 'series1',
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 54, 25, 66, 41, 89]
        }],
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: (seriesName) => 'Page view:'
            }
        },
        marker: {
            show: false
        }
    }
};
ChartDB.view2CAC = {
    chart: {
        type: 'area',
        height: 87,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#00acc1'],
    stroke: {
        curve: 'smooth',
        width: 3,
    },
    series: [{
            name: 'series1',
            data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
        }],
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: (seriesName) => 'Users:'
            }
        },
        marker: {
            show: false
        }
    }
};
ChartDB.line1CAC = {
    chart: {
        height: 300,
        type: 'line',
        zoom: {
            enabled: false
        }
    },
    dataLabels: {
        enabled: false,
        width: 2,
    },
    stroke: {
        curve: 'straight',
    },
    colors: ['#4099ff'],
    series: [{
            name: 'Desktops',
            data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
        }],
    title: {
        text: 'Product Trends by Month',
        align: 'left'
    },
    grid: {
        row: {
            colors: ['#f3f6ff', 'transparent'],
            opacity: 0.5
        },
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
    }
};
ChartDB.line3CAC = {
    chart: {
        height: 300,
        type: 'line',
        zoom: {
            enabled: false
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: [5, 7, 5],
        curve: 'straight',
        dashArray: [0, 8, 5]
    },
    colors: ['#0e9e4a', '#FFB64D', '#FF5370'],
    series: [{
            name: 'Session Duration',
            data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
        },
        {
            name: 'Page Views',
            data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
        },
        {
            name: 'Total Visits',
            data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
        }
    ],
    title: {
        text: 'Page Statistics',
        align: 'left'
    },
    markers: {
        size: 0,
        hover: {
            sizeOffset: 6
        }
    },
    xaxis: {
        categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
            '10 Jan', '11 Jan', '12 Jan'
        ],
    },
    tooltip: {
        y: [{
                title: {
                    formatter: (val) => val + ' (mins)'
                }
            }, {
                title: {
                    formatter: (val) => val + ' per session'
                }
            }, {
                title: {
                    formatter: (val) => val
                }
            }]
    },
    grid: {
        borderColor: '#f1f1f1',
    }
};
ChartDB.area1CAC = {
    chart: {
        height: 350,
        type: 'area',
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    colors: ['#FFB64D', '#FF5370'],
    series: [{
            name: 'series1',
            data: [31, 40, 28, 51, 42, 109, 100]
        }, {
            name: 'series2',
            data: [11, 32, 45, 32, 34, 52, 41]
        }],
    xaxis: {
        type: 'datetime',
        categories: [
            '2018-09-19T00:00:00',
            '2018-09-19T01:30:00',
            '2018-09-19T02:30:00',
            '2018-09-19T03:30:00',
            '2018-09-19T04:30:00',
            '2018-09-19T05:30:00',
            '2018-09-19T06:30:00'
        ],
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    }
};
ChartDB.bar1CAC = {
    chart: {
        height: 350,
        type: 'bar',
    },
    plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded'
        },
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#0e9e4a', '#4099ff', '#FF5370'],
    stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
    },
    series: [{
            name: 'Net Profit',
            data: [44, 55, 57, 56, 61, 58, 63]
        }, {
            name: 'Revenue',
            data: [76, 85, 101, 98, 87, 105, 91]
        }, {
            name: 'Free Cash Flow',
            data: [35, 41, 36, 26, 45, 48, 52]
        }],
    xaxis: {
        categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
    },
    yaxis: {
        title: {
            text: '$ (thousands)'
        }
    },
    fill: {
        opacity: 1
    },
    tooltip: {
        y: {
            formatter: (val) => '$ ' + val + ' thousands'
        }
    }
};
ChartDB.bar2CAC = {
    chart: {
        height: 350,
        type: 'bar',
        stacked: true,
        toolbar: {
            show: true
        },
        zoom: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#4099ff', '#0e9e4a', '#FFB64D', '#FF5370'],
    responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    position: 'bottom',
                    offsetX: -10,
                    offsetY: 0
                }
            }
        }],
    plotOptions: {
        bar: {
            horizontal: false,
        },
    },
    series: [{
            name: 'PRODUCT A',
            data: [44, 55, 41, 67, 22, 43]
        }, {
            name: 'PRODUCT B',
            data: [13, 23, 20, 8, 13, 27]
        }, {
            name: 'PRODUCT C',
            data: [11, 17, 15, 15, 21, 14]
        }, {
            name: 'PRODUCT D',
            data: [21, 7, 25, 13, 22, 8]
        }],
    xaxis: {
        type: 'datetime',
        categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT', '01/05/2011 GMT', '01/06/2011 GMT'],
    },
    legend: {
        position: 'right',
        offsetY: 40
    },
    fill: {
        opacity: 1
    },
};
ChartDB.bar3CAC = {
    chart: {
        height: 350,
        type: 'bar',
    },
    plotOptions: {
        bar: {
            horizontal: true,
            dataLabels: {
                position: 'top',
            },
        }
    },
    colors: ['#4099ff', '#0e9e4a'],
    dataLabels: {
        enabled: false,
        offsetX: -6,
        style: {
            fontSize: '12px',
            colors: ['#fff']
        }
    },
    stroke: {
        show: true,
        width: 1,
        colors: ['#fff']
    },
    series: [{
            data: [44, 55, 41, 64, 22, 43, 21]
        }, {
            data: [53, 32, 33, 52, 13, 44, 32]
        }],
    xaxis: {
        categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
    },
};
ChartDB.bar4CAC = {
    chart: {
        height: 350,
        type: 'bar',
        stacked: true,
        stackType: '100%'
    },
    dataLabels: {
        enabled: false
    },
    plotOptions: {
        bar: {
            horizontal: true,
        },
    },
    colors: ['#4099ff', '#00acc1', '#0e9e4a', '#FFB64D', '#FF5370'],
    stroke: {
        width: 1,
        colors: ['#fff']
    },
    series: [{
            name: 'Marine Sprite',
            data: [44, 55, 41, 37, 22, 43, 21]
        }, {
            name: 'Striking Calf',
            data: [53, 32, 33, 52, 13, 43, 32]
        }, {
            name: 'Tank Picture',
            data: [12, 17, 11, 9, 15, 11, 20]
        }, {
            name: 'Bucket Slope',
            data: [9, 7, 5, 8, 6, 9, 4]
        }, {
            name: 'Reborn Kid',
            data: [25, 12, 19, 32, 25, 24, 10]
        }],
    title: {
        text: '100% Stacked Bar'
    },
    xaxis: {
        categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
    },
    tooltip: {
        y: {
            formatter: (val) => val + 'K'
        }
    },
    fill: {
        opacity: 1
    },
    legend: {
        position: 'top',
        horizontalAlign: 'left',
        offsetX: 40
    }
};
ChartDB.mixed1CAC = {
    chart: {
        height: 350,
        type: 'line',
    },
    dataLabels: {
        enabled: false
    },
    series: [{
            name: 'Website Blog',
            type: 'column',
            data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
        }, {
            name: 'Social Media',
            type: 'line',
            data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
        }],
    stroke: {
        width: [0, 4]
    },
    colors: ['#4099ff', '#FF5370'],
    title: {
        text: 'Traffic Sources'
    },
    labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001',
        '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
    xaxis: {
        type: 'datetime'
    },
    yaxis: [{
            title: {
                text: 'Website Blog',
            },
        }, {
            opposite: true,
            title: {
                text: 'Social Media'
            }
        }]
};
ChartDB.mixed2CAC = {
    chart: {
        height: 350,
        type: 'line',
        stacked: false,
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        width: [0, 2, 5],
        curve: 'smooth'
    },
    plotOptions: {
        bar: {
            columnWidth: '50%'
        }
    },
    colors: ['#FF5370', '#4099ff', '#FFB64D'],
    series: [{
            name: 'Facebook',
            type: 'column',
            data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
        }, {
            name: 'Vine',
            type: 'area',
            data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43]
        }, {
            name: 'Dribbble',
            type: 'line',
            data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
        }],
    fill: {
        opacity: [0.85, 0.25, 1],
        gradient: {
            inverseColors: false,
            shade: 'light',
            type: 'vertical',
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
        }
    },
    labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003',
        '06/01/2003', '07/01/2003', '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'],
    markers: {
        size: 0
    },
    xaxis: {
        type: 'datetime'
    },
    yaxis: {
        min: 0
    },
    tooltip: {
        shared: true,
        intersect: false,
        y: {
            formatter: (y) => {
                if (typeof y !== 'undefined') {
                    return y.toFixed(0) + ' views';
                }
                return y;
            }
        }
    },
    legend: {
        labels: {
            useSeriesColors: true
        },
        markers: {
            customHTML: [
                () => '',
                () => '',
                () => ''
            ]
        }
    }
};
ChartDB.candlestickCAC = {
    chart: {
        height: 350,
        type: 'candlestick',
    },
    dataLabels: {
        enabled: false
    },
    series: [{
            data: [{
                    x: new Date(1538778600000),
                    y: [6629.81, 6650.5, 6623.04, 6633.33]
                },
                {
                    x: new Date(1538780400000),
                    y: [6632.01, 6643.59, 6620, 6630.11]
                },
                {
                    x: new Date(1538782200000),
                    y: [6630.71, 6648.95, 6623.34, 6635.65]
                },
                {
                    x: new Date(1538784000000),
                    y: [6635.65, 6651, 6629.67, 6638.24]
                },
                {
                    x: new Date(1538785800000),
                    y: [6638.24, 6640, 6620, 6624.47]
                },
                {
                    x: new Date(1538787600000),
                    y: [6624.53, 6636.03, 6621.68, 6624.31]
                },
                {
                    x: new Date(1538789400000),
                    y: [6624.61, 6632.2, 6617, 6626.02]
                },
                {
                    x: new Date(1538791200000),
                    y: [6627, 6627.62, 6584.22, 6603.02]
                },
                {
                    x: new Date(1538793000000),
                    y: [6605, 6608.03, 6598.95, 6604.01]
                },
                {
                    x: new Date(1538794800000),
                    y: [6604.5, 6614.4, 6602.26, 6608.02]
                },
                {
                    x: new Date(1538796600000),
                    y: [6608.02, 6610.68, 6601.99, 6608.91]
                },
                {
                    x: new Date(1538798400000),
                    y: [6608.91, 6618.99, 6608.01, 6612]
                },
                {
                    x: new Date(1538800200000),
                    y: [6612, 6615.13, 6605.09, 6612]
                },
                {
                    x: new Date(1538802000000),
                    y: [6612, 6624.12, 6608.43, 6622.95]
                },
                {
                    x: new Date(1538803800000),
                    y: [6623.91, 6623.91, 6615, 6615.67]
                },
                {
                    x: new Date(1538805600000),
                    y: [6618.69, 6618.74, 6610, 6610.4]
                },
                {
                    x: new Date(1538807400000),
                    y: [6611, 6622.78, 6610.4, 6614.9]
                },
                {
                    x: new Date(1538809200000),
                    y: [6614.9, 6626.2, 6613.33, 6623.45]
                },
                {
                    x: new Date(1538811000000),
                    y: [6623.48, 6627, 6618.38, 6620.35]
                },
                {
                    x: new Date(1538812800000),
                    y: [6619.43, 6620.35, 6610.05, 6615.53]
                },
                {
                    x: new Date(1538814600000),
                    y: [6615.53, 6617.93, 6610, 6615.19]
                },
                {
                    x: new Date(1538816400000),
                    y: [6615.19, 6621.6, 6608.2, 6620]
                },
                {
                    x: new Date(1538818200000),
                    y: [6619.54, 6625.17, 6614.15, 6620]
                },
                {
                    x: new Date(1538820000000),
                    y: [6620.33, 6634.15, 6617.24, 6624.61]
                },
                {
                    x: new Date(1538821800000),
                    y: [6625.95, 6626, 6611.66, 6617.58]
                },
                {
                    x: new Date(1538823600000),
                    y: [6619, 6625.97, 6595.27, 6598.86]
                },
                {
                    x: new Date(1538825400000),
                    y: [6598.86, 6598.88, 6570, 6587.16]
                },
                {
                    x: new Date(1538827200000),
                    y: [6588.86, 6600, 6580, 6593.4]
                },
                {
                    x: new Date(1538829000000),
                    y: [6593.99, 6598.89, 6585, 6587.81]
                },
                {
                    x: new Date(1538830800000),
                    y: [6587.81, 6592.73, 6567.14, 6578]
                },
                {
                    x: new Date(1538832600000),
                    y: [6578.35, 6581.72, 6567.39, 6579]
                },
                {
                    x: new Date(1538834400000),
                    y: [6579.38, 6580.92, 6566.77, 6575.96]
                },
                {
                    x: new Date(1538836200000),
                    y: [6575.96, 6589, 6571.77, 6588.92]
                },
                {
                    x: new Date(1538838000000),
                    y: [6588.92, 6594, 6577.55, 6589.22]
                },
                {
                    x: new Date(1538839800000),
                    y: [6589.3, 6598.89, 6589.1, 6596.08]
                },
                {
                    x: new Date(1538841600000),
                    y: [6597.5, 6600, 6588.39, 6596.25]
                },
                {
                    x: new Date(1538843400000),
                    y: [6598.03, 6600, 6588.73, 6595.97]
                },
                {
                    x: new Date(1538845200000),
                    y: [6595.97, 6602.01, 6588.17, 6602]
                },
                {
                    x: new Date(1538847000000),
                    y: [6602, 6607, 6596.51, 6599.95]
                },
                {
                    x: new Date(1538848800000),
                    y: [6600.63, 6601.21, 6590.39, 6591.02]
                },
                {
                    x: new Date(1538850600000),
                    y: [6591.02, 6603.08, 6591, 6591]
                },
                {
                    x: new Date(1538852400000),
                    y: [6591, 6601.32, 6585, 6592]
                },
                {
                    x: new Date(1538854200000),
                    y: [6593.13, 6596.01, 6590, 6593.34]
                },
                {
                    x: new Date(1538856000000),
                    y: [6593.34, 6604.76, 6582.63, 6593.86]
                },
                {
                    x: new Date(1538857800000),
                    y: [6593.86, 6604.28, 6586.57, 6600.01]
                },
                {
                    x: new Date(1538859600000),
                    y: [6601.81, 6603.21, 6592.78, 6596.25]
                },
                {
                    x: new Date(1538861400000),
                    y: [6596.25, 6604.2, 6590, 6602.99]
                },
                {
                    x: new Date(1538863200000),
                    y: [6602.99, 6606, 6584.99, 6587.81]
                },
                {
                    x: new Date(1538865000000),
                    y: [6587.81, 6595, 6583.27, 6591.96]
                },
                {
                    x: new Date(1538866800000),
                    y: [6591.97, 6596.07, 6585, 6588.39]
                },
                {
                    x: new Date(1538868600000),
                    y: [6587.6, 6598.21, 6587.6, 6594.27]
                },
                {
                    x: new Date(1538870400000),
                    y: [6596.44, 6601, 6590, 6596.55]
                },
                {
                    x: new Date(1538872200000),
                    y: [6598.91, 6605, 6596.61, 6600.02]
                },
                {
                    x: new Date(1538874000000),
                    y: [6600.55, 6605, 6589.14, 6593.01]
                },
                {
                    x: new Date(1538875800000),
                    y: [6593.15, 6605, 6592, 6603.06]
                },
                {
                    x: new Date(1538877600000),
                    y: [6603.07, 6604.5, 6599.09, 6603.89]
                },
                {
                    x: new Date(1538879400000),
                    y: [6604.44, 6604.44, 6600, 6603.5]
                },
                {
                    x: new Date(1538881200000),
                    y: [6603.5, 6603.99, 6597.5, 6603.86]
                },
                {
                    x: new Date(1538883000000),
                    y: [6603.85, 6605, 6600, 6604.07]
                },
                {
                    x: new Date(1538884800000),
                    y: [6604.98, 6606, 6604.07, 6606]
                },
            ]
        }],
    title: {
        text: 'CandleStick Chart',
        align: 'left'
    },
    colors: ['#0e9e4a', '#FF5370'],
    xaxis: {
        type: 'datetime'
    },
    yaxis: {
        tooltip: {
            enabled: true
        }
    }
};
ChartDB.bubble1CAC = {
    chart: {
        height: 350,
        type: 'bubble',
    },
    dataLabels: {
        enabled: false
    },
    series: [{
            name: 'Bubble1',
            data: generateBubbleData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'Bubble2',
            data: generateBubbleData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'Bubble3',
            data: generateBubbleData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'Bubble4',
            data: generateBubbleData(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        }
    ],
    colors: ['#4099ff', '#0e9e4a', '#FFB64D', '#FF5370'],
    fill: {
        opacity: 0.8
    },
    title: {
        text: 'Simple Bubble Chart'
    },
    xaxis: {
        tickAmount: 12,
        type: 'category',
    },
    yaxis: {
        max: 70
    }
};
ChartDB.bubble2CAC = {
    chart: {
        height: 350,
        type: 'bubble',
    },
    dataLabels: {
        enabled: false
    },
    series: [{
            name: 'Product1',
            data: generateDatasehratheatbubble3d(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'Product2',
            data: generateDatasehratheatbubble3d(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'Product3',
            data: generateDatasehratheatbubble3d(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'Product4',
            data: generateDatasehratheatbubble3d(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        }
    ],
    fill: {
        type: 'gradient',
    },
    colors: ['#4099ff', '#0e9e4a', '#FFB64D', '#FF5370'],
    title: {
        text: '3D Bubble Chart'
    },
    xaxis: {
        tickAmount: 12,
        type: 'datetime',
        labels: {
            rotate: 0,
        }
    },
    yaxis: {
        max: 70
    },
    theme: {
        palette: 'palette2'
    }
};
ChartDB.scatter1CAC = {
    chart: {
        height: 350,
        type: 'scatter',
        zoom: {
            enabled: true,
            type: 'xy'
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#4099ff', '#0e9e4a', '#FF5370', '#FFB64D', '#00acc1'],
    series: [{
            name: 'SAMPLE A',
            data: [
                [16.4, 5.4],
                [21.7, 2],
                [25.4, 3],
                [19, 2],
                [10.9, 1],
                [13.6, 3.2],
                [10.9, 7.4],
                [10.9, 0],
                [10.9, 8.2],
                [16.4, 0],
                [16.4, 1.8],
                [13.6, 0.3],
                [13.6, 0],
                [29.9, 0],
                [27.1, 2.3],
                [16.4, 0],
                [13.6, 3.7],
                [10.9, 5.2],
                [16.4, 6.5],
                [10.9, 0],
                [24.5, 7.1],
                [10.9, 0],
                [8.1, 4.7],
                [19, 0],
                [21.7, 1.8],
                [27.1, 0],
                [24.5, 0],
                [27.1, 0],
                [29.9, 1.5],
                [27.1, 0.8],
                [22.1, 2]
            ]
        }, {
            name: 'SAMPLE B',
            data: [
                [36.4, 13.4],
                [1.7, 11],
                [5.4, 8],
                [9, 17],
                [1.9, 4],
                [3.6, 12.2],
                [1.9, 14.4],
                [1.9, 9],
                [1.9, 13.2],
                [1.4, 7],
                [6.4, 8.8],
                [3.6, 4.3],
                [1.6, 10],
                [9.9, 2],
                [7.1, 15],
                [1.4, 0],
                [3.6, 13.7],
                [1.9, 15.2],
                [6.4, 16.5],
                [0.9, 10],
                [4.5, 17.1],
                [10.9, 10],
                [0.1, 14.7],
                [9, 10],
                [12.7, 11.8],
                [2.1, 10],
                [2.5, 10],
                [27.1, 10],
                [2.9, 11.5],
                [7.1, 10.8],
                [2.1, 12]
            ]
        }, {
            name: 'SAMPLE C',
            data: [
                [21.7, 3],
                [23.6, 3.5],
                [24.6, 3],
                [29.9, 3],
                [21.7, 20],
                [23, 2],
                [10.9, 3],
                [28, 4],
                [27.1, 0.3],
                [16.4, 4],
                [13.6, 0],
                [19, 5],
                [22.4, 3],
                [24.5, 3],
                [32.6, 3],
                [27.1, 4],
                [29.6, 6],
                [31.6, 8],
                [21.6, 5],
                [20.9, 4],
                [22.4, 0],
                [32.6, 10.3],
                [29.7, 20.8],
                [24.5, 0.8],
                [21.4, 0],
                [21.7, 6.9],
                [28.6, 7.7],
                [15.4, 0],
                [18.1, 0],
                [33.4, 0],
                [16.4, 0]
            ]
        }],
    xaxis: {
        tickAmount: 10,
        labels: {
            formatter: (val) => parseFloat(val).toFixed(1)
        }
    },
    yaxis: {
        tickAmount: 7
    }
};
ChartDB.scatter2CAC = {
    chart: {
        height: 350,
        type: 'scatter',
        zoom: {
            type: 'xy'
        }
    },
    series: [{
            name: 'TEAM 1',
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'TEAM 2',
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'TEAM 3',
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 30, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'TEAM 4',
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
                min: 10,
                max: 60
            })
        },
        {
            name: 'TEAM 5',
            data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 30, {
                min: 10,
                max: 60
            })
        },
    ],
    dataLabels: {
        enabled: false
    },
    colors: ['#4099ff', '#0e9e4a', '#FF5370', '#FFB64D', '#00acc1'],
    grid: {
        xaxis: {
            showLines: true
        },
        yaxis: {
            showLines: true
        },
    },
    xaxis: {
        type: 'datetime',
    },
    yaxis: {
        max: 70
    }
};
ChartDB.heatMap1CAC = {
    chart: {
        height: 350,
        type: 'heatmap',
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#4099ff'],
    series: [{
            name: 'Metric1',
            data: generateDatasehratheat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric2',
            data: generateDatasehratheat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric3',
            data: generateDatasehratheat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric4',
            data: generateDatasehratheat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric5',
            data: generateDatasehratheat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric6',
            data: generateDatasehratheat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric7',
            data: generateDatasehratheat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric8',
            data: generateDatasehratheat(12, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric9',
            data: generateDatasehratheat(12, {
                min: 0,
                max: 90
            })
        }
    ],
    title: {
        text: 'HeatMap Chart (Single color)'
    },
};
ChartDB.heatMap2CAC = {
    chart: {
        height: 350,
        type: 'heatmap',
    },
    stroke: {
        width: 0
    },
    plotOptions: {
        heatmap: {
            radius: 30,
            enableShades: false,
            colorScale: {
                ranges: [{
                        from: 0,
                        to: 50,
                        color: '#FFB64D'
                    },
                    {
                        from: 51,
                        to: 100,
                        color: '#FF5370'
                    },
                ],
            },
        }
    },
    dataLabels: {
        enabled: true,
        style: {
            colors: ['#fff']
        }
    },
    series: [{
            name: 'Metric1',
            data: generateDatasehrat(15, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric2',
            data: generateDatasehrat(15, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric3',
            data: generateDatasehrat(15, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric4',
            data: generateDatasehrat(15, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric5',
            data: generateDatasehrat(15, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric6',
            data: generateDatasehrat(15, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric7',
            data: generateDatasehrat(15, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric8',
            data: generateDatasehrat(15, {
                min: 0,
                max: 90
            })
        },
        {
            name: 'Metric8',
            data: generateDatasehrat(15, {
                min: 0,
                max: 90
            })
        }
    ],
    colors: ['#4099ff', '#00acc1', '#0e9e4a', '#FFB64D', '#FF5370'],
    xaxis: {
        type: 'category',
    },
    title: {
        text: 'Rounded (Range without Shades)'
    },
};
ChartDB.pie1CAC = {
    chart: {
        height: 320,
        type: 'pie',
    },
    labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    series: [44, 55, 13, 43, 22],
    colors: ['#4099ff', '#0e9e4a', '#00acc1', '#FFB64D', '#FF5370'],
    legend: {
        show: true,
        position: 'bottom',
    },
    dataLabels: {
        enabled: true,
        dropShadow: {
            enabled: false,
        }
    },
    responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
};
ChartDB.pie2CAC = {
    chart: {
        height: 320,
        type: 'donut',
    },
    series: [44, 55, 41, 17, 15],
    colors: ['#4099ff', '#0e9e4a', '#00acc1', '#FFB64D', '#FF5370'],
    legend: {
        show: true,
        position: 'bottom',
    },
    plotOptions: {
        pie: {
            donut: {
                labels: {
                    show: true,
                    name: {
                        show: true
                    },
                    value: {
                        show: true
                    }
                }
            }
        }
    },
    dataLabels: {
        enabled: true,
        dropShadow: {
            enabled: false,
        }
    },
    responsive: [{
            breakpoint: 480,
            options: {
                chart: {
                    width: 200
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
};
ChartDB.radialBar1CAC = {
    chart: {
        height: 350,
        type: 'radialBar',
    },
    dataLabels: {
        enabled: false
    },
    plotOptions: {
        radialBar: {
            hollow: {
                size: '70%',
            }
        },
    },
    colors: ['#4099ff'],
    series: [70],
    labels: ['Cricket'],
};
ChartDB.radialBar2CAC = {
    chart: {
        height: 350,
        type: 'radialBar',
    },
    dataLabels: {
        enabled: false
    },
    plotOptions: {
        radialBar: {
            offsetY: -30,
            startAngle: 0,
            endAngle: 270,
            hollow: {
                margin: 5,
                size: '30%',
                background: 'transparent',
                image: undefined,
            },
            dataLabels: {
                name: {
                    show: false,
                },
                value: {
                    show: false,
                }
            }
        }
    },
    colors: ['#4099ff', '#0e9e4a', '#FFB64D', '#FF5370'],
    series: [76, 67, 61, 90],
    labels: ['Vimeo', 'Messenger', 'Facebook', 'LinkedIn'],
    legend: {
        show: true,
        floating: true,
        fontSize: '16px',
        position: 'left',
        offsetX: 0,
        offsetY: 0,
        labels: {
            useSeriesColors: true,
        },
        markers: {
            size: 0
        },
        formatter: (seriesName, opts) => seriesName + ':  ' + opts.w.globals.series[opts.seriesIndex],
        itemMargin: {
            horizontal: 1,
        }
    },
    responsive: [{
            breakpoint: 480,
            options: {
                legend: {
                    show: false
                }
            }
        }]
};
ChartDB.radar1CAC = {
    chart: {
        height: 350,
        type: 'radar',
    },
    dataLabels: {
        enabled: false
    },
    series: [{
            name: 'Series 1',
            data: [20, 100, 40, 30, 50, 80, 33],
        }],
    labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    plotOptions: {
        radar: {
            size: 140,
            polygons: {
                strokeColor: '#f3f6ff',
                fill: {
                    colors: ['#f3f6ff', '#fff']
                }
            }
        }
    },
    title: {
        text: 'Radar with Polygon Fill'
    },
    colors: ['#FF5370'],
    markers: {
        size: 4,
        colors: ['#fff'],
        strokeColor: '#FF5370',
        strokeWidth: 2,
    },
    tooltip: {
        y: {
            formatter: (val) => val
        }
    },
    yaxis: {
        tickAmount: 7,
        labels: {
            formatter: (val, i) => {
                if (i % 2 === 0) {
                    return val;
                }
                else {
                    return '';
                }
            }
        }
    }
};
ChartDB.radar2CAC = {
    chart: {
        height: 350,
        type: 'radar',
        dropShadow: {
            enabled: true,
            blur: 1,
            left: 1,
            top: 1
        }
    },
    dataLabels: {
        enabled: false
    },
    series: [{
            name: 'Series 1',
            data: [80, 50, 30, 40, 100, 20],
        }, {
            name: 'Series 2',
            data: [20, 30, 40, 80, 20, 80],
        }, {
            name: 'Series 3',
            data: [44, 76, 78, 13, 43, 10],
        }],
    title: {
        text: 'Radar Chart - Multi Series'
    },
    colors: ['#4099ff', '#0e9e4a', '#FF5370'],
    stroke: {
        width: 0
    },
    fill: {
        opacity: 0.7
    },
    markers: {
        size: 0
    },
    labels: ['2011', '2012', '2013', '2014', '2015', '2016']
};
ChartDB.support1HACC = {
    chart: {
        type: 'area',
        height: 100,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#7759de'],
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    series: [{
            name: 'series1',
            data: [0, 20, 10, 45, 30, 55, 20, 30, 0]
        }],
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: (seriesName) => ''
            }
        },
        marker: {
            show: false
        }
    }
};
ChartDB.support2HACC = {
    chart: {
        type: 'area',
        height: 100,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#4099ff'],
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    series: [{
            name: 'series1',
            data: [0, 20, 10, 45, 30, 55, 20, 30, 0]
        }],
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: (seriesName) => ''
            }
        },
        marker: {
            show: false
        }
    }
};
ChartDB.support3HACC = {
    chart: {
        type: 'area',
        height: 100,
        sparkline: {
            enabled: true
        }
    },
    dataLabels: {
        enabled: false
    },
    colors: ['#11c15b'],
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    series: [{
            name: 'series1',
            data: [0, 20, 10, 45, 30, 55, 20, 30, 0]
        }],
    tooltip: {
        fixed: {
            enabled: false
        },
        x: {
            show: false
        },
        y: {
            title: {
                formatter: (seriesName) => ''
            }
        },
        marker: {
            show: false
        }
    }
};
ChartDB.satisfactionHACC = {
    chart: {
        height: 260,
        type: 'pie',
    },
    dataLabels: {
        enabled: false
    },
    series: [66, 50, 40, 30],
    labels: ['Very Poor', 'Satisfied', 'Very Satisfied', 'Poor'],
    legend: {
        show: true,
        offsetY: 50,
    },
    theme: {
        monochrome: {
            enabled: true,
            color: '#4099ff',
        }
    },
    responsive: [{
            breakpoint: 768,
            options: {
                chart: {
                    height: 320,
                },
                legend: {
                    position: 'bottom',
                    offsetY: 0,
                }
            }
        }]
};
function generateDataSabraThat(count, yrange) {
    let i = 0;
    const series = [];
    while (i < count) {
        series.push({
            x: 'w' + (i + 1).toString(),
            y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
        });
        i++;
    }
    return series;
}
function generateBubbleData(baseval, count, yrange) {
    let i = 0;
    const series = [];
    while (i < count) {
        const x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
        const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
        series.push([x, y, z]);
        baseval += 86400000;
        i++;
    }
    return series;
}
function generateDatasehratheatbubble3d(baseval, count, yrange) {
    let i = 0;
    const series = [];
    while (i < count) {
        const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        const z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;
        series.push([baseval, y, z]);
        baseval += 86400000;
        i++;
    }
    return series;
}
function generateDayWiseTimeSeries(baseval, count, yrange) {
    let i = 0;
    const series = [];
    while (i < count) {
        const y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
        series.push([baseval, y]);
        baseval += 86400000;
        i++;
    }
    return series;
}
function generateDatasehratheat(count, yrange) {
    let i = 0;
    const series = [];
    while (i < count) {
        series.push({
            x: 'w' + (i + 1).toString(),
            y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
        });
        i++;
    }
    return series;
}
function generateDatasehrat(count, yrange) {
    let i = 0;
    const series = [];
    while (i < count) {
        series.push({
            x: (i + 1).toString(),
            y: Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min
        });
        i++;
    }
    return series;
}


/***/ }),

/***/ "./src/app/modules/http/auth.interceptor.ts":
/*!**************************************************!*\
  !*** ./src/app/modules/http/auth.interceptor.ts ***!
  \**************************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth/services/auth.service */ "./src/app/modules/auth/services/auth.service.ts");
/* harmony import */ var _ui_services_notify_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/services/notify.service */ "./src/app/modules/ui/services/notify.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);







let AuthInterceptor = class AuthInterceptor {
    constructor(auth, notify) {
        this.auth = auth;
        this.notify = notify;
        this.AUTH_HEADER = 'Authorization';
        this.refreshTokenInProgress = false;
        this.refreshTokenSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    intercept(req, next) {
        if (!req.headers.has('Content-Type')) {
            req = req.clone({
                headers: req.headers.set('Content-Type', 'application/json')
            });
        }
        req = this.addAuthenticationToken(req);
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            if (error && error.status === 401) {
                // 401 errors are most likely going to be because we have an expired token that we need to refresh.
                if (this.refreshTokenInProgress) {
                    // If refreshTokenInProgress is true, we will wait until refreshTokenSubject has a non-null value
                    // which means the new token is ready and we can retry the request again
                    return this.refreshTokenSubject.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(result => result !== null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => next.handle(this.addAuthenticationToken(req))));
                }
                else {
                    this.refreshTokenInProgress = true;
                    // Set the refreshTokenSubject to null so that subsequent API calls will wait until the new token has been retrieved
                    this.refreshTokenSubject.next(null);
                    return this.refreshAccessToken().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])((success) => {
                        this.refreshTokenSubject.next(success);
                        return next.handle(this.addAuthenticationToken(req));
                    }), 
                    // When the call to refreshToken completes we reset the refreshTokenInProgress to false
                    // for the next time the token needs to be refreshed
                    Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["finalize"])(() => this.refreshTokenInProgress = false));
                }
            }
            else if (error && error.status === 400) {
                console.log('erro do servidor', error.error);
                let serverErrors = '';
                for (let key in error.error) {
                    if (serverErrors.length > 0) {
                        serverErrors += '; ';
                    }
                    serverErrors += error.error[key];
                }
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Opps...', serverErrors, 'error');
                // const validationErrorDictionary = JSON.parse(error.error);
                // console.log('erro do servidor', validationErrorDictionary);
                /* After hadle the error continue the request life cycle */
                return next.handle(req);
            }
            else {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
            }
        }));
    }
    refreshAccessToken() {
        this.notify.update('Obtendo token da sessão', 'info');
        // Swal.fire('Opps...', 'Ocorreu um erro ao buscar os clientes', 'info');
        const currentUser = this.auth.getCurrentUser();
        return this.auth.login(currentUser.username, currentUser.password);
    }
    addAuthenticationToken(request) {
        // If we do not have a token yet then we should not set the header.
        // Here we could first retrieve the token from where we store it.
        if (!this.auth.isLogged()) {
            return request;
        }
        // If you are calling an outside domain then do not add the token.
        // if (!request.url.match(/www.mydomain.com\//)) {
        //   return request;
        // }
        return request.clone({
            headers: request.headers.set(this.AUTH_HEADER, 'Bearer ' + this.auth.getCurrentUser().token.access_token)
        });
    }
};
AuthInterceptor.ctorParameters = () => [
    { type: _auth_services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _ui_services_notify_service__WEBPACK_IMPORTED_MODULE_5__["NotifyService"] }
];
AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthInterceptor);



/***/ }),

/***/ "./src/app/modules/http/interceptor.module.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/http/interceptor.module.ts ***!
  \****************************************************/
/*! exports provided: Interceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Interceptor", function() { return Interceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _auth_interceptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.interceptor */ "./src/app/modules/http/auth.interceptor.ts");




let Interceptor = class Interceptor {
};
Interceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        providers: [{
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
                useClass: _auth_interceptor__WEBPACK_IMPORTED_MODULE_3__["AuthInterceptor"],
                multi: true,
            },],
    })
], Interceptor);



/***/ }),

/***/ "./src/app/modules/http/services/http-helper.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/http/services/http-helper.service.ts ***!
  \**************************************************************/
/*! exports provided: HttpHelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpHelperService", function() { return HttpHelperService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let HttpHelperService = class HttpHelperService {
    constructor(http) {
        this.http = http;
    }
    getUrl(route) {
        return src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiBaseUrl + route;
    }
    get(route, parameters) {
        console.log(route);
        return this.http.get(this.getUrl(route), { params: parameters });
    }
    post(route, body, isUrlencoded = false) {
        const headers = isUrlencoded ? new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'content-type': 'application/x-www-form-urlencoded', Accept: 'application/json' })
            : new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'content-type': 'application/json', Accept: 'pplication/json' });
        return this.http.post(this.getUrl(route), body, { headers });
    }
    put(route, body, isUrlencoded = false) {
        const headers = isUrlencoded ? new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'content-type': 'application/x-www-form-urlencoded', Accept: 'application/json' })
            : new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'content-type': 'application/json', Accept: 'pplication/json' });
        return this.http.put(this.getUrl(route), body, { headers });
    }
};
HttpHelperService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
HttpHelperService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], HttpHelperService);



/***/ }),

/***/ "./src/app/modules/lookup/services/lookup.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/lookup/services/lookup.service.ts ***!
  \***********************************************************/
/*! exports provided: LookupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LookupService", function() { return LookupService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_services_http_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http/services/http-helper.service */ "./src/app/modules/http/services/http-helper.service.ts");



let LookupService = class LookupService {
    constructor(httpHelper) {
        this.httpHelper = httpHelper;
    }
    getPaymentMethod() {
        return this.httpHelper.get('/Lookups/GetPaymentMethods');
    }
    getCustomers() {
        return this.httpHelper.get('/Lookups/GetCustomers');
    }
};
LookupService.ctorParameters = () => [
    { type: _http_services_http_helper_service__WEBPACK_IMPORTED_MODULE_2__["HttpHelperService"] }
];
LookupService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LookupService);



/***/ }),

/***/ "./src/app/modules/service-order/components/change-service-order/change-service-order.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/service-order/components/change-service-order/change-service-order.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2VydmljZS1vcmRlci9jb21wb25lbnRzL2NoYW5nZS1zZXJ2aWNlLW9yZGVyL2NoYW5nZS1zZXJ2aWNlLW9yZGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/service-order/components/change-service-order/change-service-order.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/service-order/components/change-service-order/change-service-order.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ChangeServiceOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeServiceOrderComponent", function() { return ChangeServiceOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var src_app_modules_lookup_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/modules/lookup/services/lookup.service */ "./src/app/modules/lookup/services/lookup.service.ts");
/* harmony import */ var _services_service_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/service-order.service */ "./src/app/modules/service-order/services/service-order.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






let ChangeServiceOrderComponent = class ChangeServiceOrderComponent {
    constructor(lookup, activeModal, serviceOrderService) {
        this.lookup = lookup;
        this.activeModal = activeModal;
        this.serviceOrderService = serviceOrderService;
    }
    save() {
        if (this.type === 'customer' && this.customerId) {
            this.serviceOrderService.changeCustomer(this.idServiceOrder, this.customerId).subscribe((sucess) => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Sucesso...', 'Cliente alterado com sucesso!', 'success');
                this.activeModal.close();
            }, (error) => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Opps...', error.error ? error.error : 'Ocorreu uma falha ao alterar o cliente!', 'error');
                console.log('Falha ao alterar a ordem de serviço', error);
            });
        }
        else if (this.description) {
            this.serviceOrderService.changeDescription(this.idServiceOrder, this.description).subscribe((sucess) => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Sucesso...', 'Descrição alterada com sucesso!', 'success');
                this.activeModal.close();
            }, (error) => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Opps...', error.error ? error.error : 'Ocorreu uma falha ao alterar a descrição!', 'error');
                console.log('Falha ao alterar a ordem de serviço', error);
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Atenção...', 'Preencha o campo corretamente!', 'warning');
        }
    }
    cancel() {
        this.serviceOrderService.cancel(this.idServiceOrder).subscribe((sucess) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Sucesso...', 'Ordem de serviço cancelada com sucesso!', 'success');
            this.activeModal.close();
        }, (error) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Opps...', error.error ? error.error : 'Ocorreu uma falha ao cancelar a ordem de serviço!', 'error');
            console.log('Falha ao cancelar a ordem de serviço', error);
        });
    }
    ngOnInit() {
        if (this.type === 'customer') {
            this.customers = this.lookup.getCustomers();
        }
    }
};
ChangeServiceOrderComponent.ctorParameters = () => [
    { type: src_app_modules_lookup_services_lookup_service__WEBPACK_IMPORTED_MODULE_3__["LookupService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"] },
    { type: _services_service_order_service__WEBPACK_IMPORTED_MODULE_4__["ServiceOrderService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChangeServiceOrderComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChangeServiceOrderComponent.prototype, "idServiceOrder", void 0);
ChangeServiceOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-service-order',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./change-service-order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/service-order/components/change-service-order/change-service-order.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./change-service-order.component.scss */ "./src/app/modules/service-order/components/change-service-order/change-service-order.component.scss")).default]
    })
], ChangeServiceOrderComponent);



/***/ }),

/***/ "./src/app/modules/service-order/components/form-service-order/form-service-order.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/service-order/components/form-service-order/form-service-order.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2VydmljZS1vcmRlci9jb21wb25lbnRzL2Zvcm0tc2VydmljZS1vcmRlci9mb3JtLXNlcnZpY2Utb3JkZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/service-order/components/form-service-order/form-service-order.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/service-order/components/form-service-order/form-service-order.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: FormServiceOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormServiceOrderComponent", function() { return FormServiceOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_modules_lookup_services_lookup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/lookup/services/lookup.service */ "./src/app/modules/lookup/services/lookup.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_service_order_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/service-order.service */ "./src/app/modules/service-order/services/service-order.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let FormServiceOrderComponent = class FormServiceOrderComponent {
    constructor(lookup, fb, serviceOrder, router) {
        this.lookup = lookup;
        this.fb = fb;
        this.serviceOrder = serviceOrder;
        this.router = router;
        this.subscriptions = new Array();
    }
    buildForm() {
        this.serviceOrderForm = this.fb.group({
            description: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                ]],
            customerId: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                ]],
            paymentMethodSysId: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                ]],
            value: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                ]],
            dueDate: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                ]],
        });
    }
    submmit(continueForm = false) {
        if (!this.serviceOrderForm.valid) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Atenção...', 'Preencha todos os campos do formulario!', 'warning');
            return;
        }
        const newService = this.serviceOrderForm.value;
        newService.dueDate = this.getStringDateFromNgbDate(this.serviceOrderForm.value.dueDate);
        this.subscriptions.push(this.serviceOrder.newServiceOrder(newService).subscribe((sucess) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Sucesso...', 'Ordem de serviço cadastrada com sucesso', 'success');
            if (!continueForm) {
                return this.router.navigate(['/dashboard']);
            }
            this.serviceOrderForm.reset();
        }));
    }
    getStringDateFromNgbDate(ngb) {
        return `${ngb.year}-${ngb.month}-${ngb.day}`;
    }
    ngOnInit() {
        this.buildForm();
        this.paymentMethods = this.lookup.getPaymentMethod();
        this.customers = this.lookup.getCustomers();
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => {
            sub.unsubscribe();
        });
    }
};
FormServiceOrderComponent.ctorParameters = () => [
    { type: src_app_modules_lookup_services_lookup_service__WEBPACK_IMPORTED_MODULE_2__["LookupService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: _services_service_order_service__WEBPACK_IMPORTED_MODULE_4__["ServiceOrderService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
FormServiceOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'form-service-order',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-service-order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/service-order/components/form-service-order/form-service-order.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-service-order.component.scss */ "./src/app/modules/service-order/components/form-service-order/form-service-order.component.scss")).default]
    })
], FormServiceOrderComponent);



/***/ }),

/***/ "./src/app/modules/service-order/components/query-services-order/query-services-order.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/service-order/components/query-services-order/query-services-order.component.scss ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("::ng-deep .ag-theme-balham .ag-header .lancamento {\n  background-color: #b1b1b1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3drL0RvY3VtZW50b3MvZG90bmV0Y29yZS13ZWJhcGktYW5kLXJhdmVuZGIvQ2xpZW50QXBwL3NyYy9hcHAvbW9kdWxlcy9zZXJ2aWNlLW9yZGVyL2NvbXBvbmVudHMvcXVlcnktc2VydmljZXMtb3JkZXIvcXVlcnktc2VydmljZXMtb3JkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2VydmljZS1vcmRlci9jb21wb25lbnRzL3F1ZXJ5LXNlcnZpY2VzLW9yZGVyL3F1ZXJ5LXNlcnZpY2VzLW9yZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5hZy10aGVtZS1iYWxoYW0gLmFnLWhlYWRlciAubGFuY2FtZW50byB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiMWIxYjE7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/modules/service-order/components/query-services-order/query-services-order.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/service-order/components/query-services-order/query-services-order.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: QueryServicesOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryServicesOrderComponent", function() { return QueryServicesOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_service_order_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/service-order.service */ "./src/app/modules/service-order/services/service-order.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_modules_ui_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/ui/services/loading.service */ "./src/app/modules/ui/services/loading.service.ts");
/* harmony import */ var src_app_modules_shared_services_ag_grid_helper_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/shared/services/ag-grid-helper.service */ "./src/app/modules/shared/services/ag-grid-helper.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _change_service_order_change_service_order_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../change-service-order/change-service-order.component */ "./src/app/modules/service-order/components/change-service-order/change-service-order.component.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);









let QueryServicesOrderComponent = class QueryServicesOrderComponent {
    constructor(serviceOrderService, fb, loading, agGridHelper, modalService) {
        this.serviceOrderService = serviceOrderService;
        this.fb = fb;
        this.loading = loading;
        this.agGridHelper = agGridHelper;
        this.modalService = modalService;
        this.showSpinner = false;
        this.selectedRowsString = 'Teste';
        this.columnDefs = [
            { headerName: 'ID Ordem', field: 'id', sortable: true, filter: true },
            { headerName: 'Descrição', field: 'description', sortable: true, filter: true },
            { headerName: 'Cliente', field: 'customer.name', sortable: true, filter: true },
            { headerName: 'Data', field: 'date', sortable: true, filter: true, valueFormatter: this.agGridHelper.dateFormatter },
            {
                headerName: 'Cancelado?', field: 'isCanceled', sortable: true, filter: true, cellRenderer: params => {
                    return `<input type='checkbox' ${params.value ? 'checked' : ''} />`;
                }
            },
            {
                headerName: 'Dt. Cancelamento', field: 'cancelDate', sortable: true, filter: true, valueFormatter: this.agGridHelper.dateFormatter
            },
            {
                headerName: 'Lançamento',
                marryChildren: true,
                headerClass: 'lancamento',
                children: [
                    {
                        headerName: 'Meio de Pagamento', field: 'bill.paymentMethod.description',
                        sortable: true, filter: true, columnGroupShow: 'open'
                    },
                    { headerName: 'Valor R$', field: 'bill.value', sortable: true, filter: true, valueFormatter: this.agGridHelper.currencyFormatter },
                    { headerName: 'Destino', field: 'bill.destiny', sortable: true, filter: true, columnGroupShow: 'open' },
                    { headerName: 'Status', field: 'bill.status', sortable: true, filter: true, columnGroupShow: 'open' },
                    {
                        headerName: 'Pago?', field: 'bill.paid', sortable: true, filter: true, cellRenderer: params => {
                            return `<input type='checkbox' ${params.value ? 'checked' : ''} />`;
                        }, columnGroupShow: 'open'
                    },
                    {
                        headerName: 'Dt. Vencimento', field: 'bill.dueDate', sortable: true, filter: true,
                        valueFormatter: this.agGridHelper.dateFormatter, columnGroupShow: 'open'
                    },
                    {
                        headerName: 'Dt. Pagamento', field: 'bill.payDate', sortable: true,
                        filter: true, valueFormatter: this.agGridHelper.dateFormatter, columnGroupShow: 'open'
                    },
                    { headerName: 'Dt. Reversão', field: 'bill.reversalDate', sortable: true, filter: true, columnGroupShow: 'open' },
                    {
                        headerName: 'Dt. Cancelamento', field: 'bill.cancelDate', sortable: true,
                        filter: true, valueFormatter: this.agGridHelper.dateFormatter, columnGroupShow: 'open'
                    },
                    { headerName: 'ID Lançamento', field: 'bill.id', sortable: true, filter: true, columnGroupShow: 'open' },
                ]
            },
        ];
        this.rowSelection = 'single';
    }
    buildForm() {
        this.searchForm = this.fb.group({
            startDate: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                ]],
            endDate: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                ]],
        });
    }
    search(pesquisarTodos = false) {
        if (!pesquisarTodos && !this.searchForm.valid) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Atenção...', 'Preencha o formulario corretamente!', 'warning');
            return;
        }
        this.loading.showHide(true);
        if (pesquisarTodos) {
            this.rowData = this.serviceOrderService.getAll();
        }
        else {
            this.rowData = this.serviceOrderService.getByDate(this.getStringDateFromNgbDate(this.searchForm.value.startDate), this.getStringDateFromNgbDate(this.searchForm.value.endDate));
        }
        this.subscription = this.rowData.subscribe(() => this.loading.showHide(false), (error) => {
            this.loading.showHide(false);
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Ops..', 'Ocorreu um erro ao buscar as ordens de serviço', 'error');
            console.error(error);
        });
    }
    getStringDateFromNgbDate(ngb) {
        return `${ngb.year}-${ngb.month}-${ngb.day}`;
    }
    ngOnInit() {
        this.buildForm();
    }
    ngOnDestroy() {
        if (this.subscription != null) {
            this.subscription.unsubscribe();
        }
    }
    open(type) {
        if (!this.selectedRow) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Opps...', 'Nenhum registro selecionado!', 'warning');
            return;
        }
        const modalRef = this.modalService.open(_change_service_order_change_service_order_component__WEBPACK_IMPORTED_MODULE_7__["ChangeServiceOrderComponent"]);
        modalRef.componentInstance.type = type;
        modalRef.componentInstance.idServiceOrder = this.selectedRow.id;
        modalRef.result.then(() => {
            if (this.searchForm.valid) {
                this.search();
            }
            else {
                this.search(true);
            }
        }, () => {
        });
    }
    onRowSelected(event) {
        this.selectedRow = event.data;
    }
};
QueryServicesOrderComponent.ctorParameters = () => [
    { type: _services_service_order_service__WEBPACK_IMPORTED_MODULE_2__["ServiceOrderService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_modules_ui_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: src_app_modules_shared_services_ag_grid_helper_service__WEBPACK_IMPORTED_MODULE_5__["AgGridHelperService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbModal"] }
];
QueryServicesOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-query-services-order',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./query-services-order.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/service-order/components/query-services-order/query-services-order.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./query-services-order.component.scss */ "./src/app/modules/service-order/components/query-services-order/query-services-order.component.scss")).default]
    })
], QueryServicesOrderComponent);



/***/ }),

/***/ "./src/app/modules/service-order/service-order.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/service-order/service-order.module.ts ***!
  \***************************************************************/
/*! exports provided: ServiceOrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceOrderModule", function() { return ServiceOrderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_currency__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-currency */ "./node_modules/ngx-currency/index.js");
/* harmony import */ var _components_form_service_order_form_service_order_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/form-service-order/form-service-order.component */ "./src/app/modules/service-order/components/form-service-order/form-service-order.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _components_query_services_order_query_services_order_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/query-services-order/query-services-order.component */ "./src/app/modules/service-order/components/query-services-order/query-services-order.component.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_change_service_order_change_service_order_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/change-service-order/change-service-order.component */ "./src/app/modules/service-order/components/change-service-order/change-service-order.component.ts");













const routes = [{
        path: '',
        children: [{
                path: 'new',
                component: _components_form_service_order_form_service_order_component__WEBPACK_IMPORTED_MODULE_7__["FormServiceOrderComponent"]
            },
            {
                path: 'query',
                component: _components_query_services_order_query_services_order_component__WEBPACK_IMPORTED_MODULE_10__["QueryServicesOrderComponent"]
            }]
    }];
let ServiceOrderModule = class ServiceOrderModule {
};
ServiceOrderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_form_service_order_form_service_order_component__WEBPACK_IMPORTED_MODULE_7__["FormServiceOrderComponent"],
            _components_query_services_order_query_services_order_component__WEBPACK_IMPORTED_MODULE_10__["QueryServicesOrderComponent"],
            _components_change_service_order_change_service_order_component__WEBPACK_IMPORTED_MODULE_12__["ChangeServiceOrderComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_11__["AgGridModule"].withComponents([]),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
            ngx_currency__WEBPACK_IMPORTED_MODULE_6__["NgxCurrencyModule"]
        ],
        entryComponents: [_components_change_service_order_change_service_order_component__WEBPACK_IMPORTED_MODULE_12__["ChangeServiceOrderComponent"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"], _components_change_service_order_change_service_order_component__WEBPACK_IMPORTED_MODULE_12__["ChangeServiceOrderComponent"]]
    })
], ServiceOrderModule);



/***/ }),

/***/ "./src/app/modules/service-order/services/service-order.service.ts":
/*!*************************************************************************!*\
  !*** ./src/app/modules/service-order/services/service-order.service.ts ***!
  \*************************************************************************/
/*! exports provided: ServiceOrderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceOrderService", function() { return ServiceOrderService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _http_services_http_helper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../http/services/http-helper.service */ "./src/app/modules/http/services/http-helper.service.ts");



let ServiceOrderService = class ServiceOrderService {
    constructor(httpHelper) {
        this.httpHelper = httpHelper;
    }
    newServiceOrder(order) {
        return this.httpHelper.post('/ServiceOrders/New', order);
    }
    cancel(id) {
        return this.httpHelper.post(`/ServiceOrders/Cancel/${id}`, null);
    }
    getAll() {
        return this.httpHelper.get('/ServiceOrders/GetList');
    }
    getByDate(startDate, endDate) {
        return this.httpHelper.get('/ServiceOrders/GetByDate', {
            startDate,
            endDate,
        });
    }
    changeCustomer(serviceOrderId, customerId) {
        return this.httpHelper.put(`/ServiceOrders/Customer`, {
            serviceOrderId, customerId
        });
    }
    changeDescription(serviceOrderId, description) {
        return this.httpHelper.put(`/ServiceOrders/Description`, {
            serviceOrderId, description
        });
    }
};
ServiceOrderService.ctorParameters = () => [
    { type: _http_services_http_helper_service__WEBPACK_IMPORTED_MODULE_2__["HttpHelperService"] }
];
ServiceOrderService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ServiceOrderService);



/***/ }),

/***/ "./src/app/modules/shared/components/breadcrumb/breadcrumb.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/shared/components/breadcrumb/breadcrumb.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvYnJlYWRjcnVtYi9icmVhZGNydW1iLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/shared/components/breadcrumb/breadcrumb.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/shared/components/breadcrumb/breadcrumb.component.ts ***!
  \******************************************************************************/
/*! exports provided: BreadcrumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbComponent", function() { return BreadcrumbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var src_app_modules_ui_components_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/ui/components/admin/navigation/navigation */ "./src/app/modules/ui/components/admin/navigation/navigation.ts");





let BreadcrumbComponent = class BreadcrumbComponent {
    constructor(route, nav, titleService) {
        this.route = route;
        this.nav = nav;
        this.titleService = titleService;
        this.breadcrumbList = [];
        this.navigationList = [];
        this.navigation = this.nav.get();
        this.type = 'theme2';
        this.setBreadcrumb();
    }
    ngOnInit() {
        let routerUrl;
        routerUrl = this.route.url;
        if (routerUrl && typeof routerUrl === 'string') {
            this.filterNavigation(routerUrl);
        }
    }
    setBreadcrumb() {
        let routerUrl;
        this.route.events.subscribe((router) => {
            routerUrl = router.urlAfterRedirects;
            if (routerUrl && typeof routerUrl === 'string') {
                this.breadcrumbList.length = 0;
                const activeLink = router.url;
                this.filterNavigation(activeLink);
            }
        });
    }
    filterNavigation(activeLink) {
        let result = [];
        let title = 'Welcome';
        this.navigation.forEach((a) => {
            if (a.type === 'item' && 'url' in a && a.url === activeLink) {
                result = [
                    {
                        url: ('url' in a) ? a.url : false,
                        title: a.title,
                        breadcrumbs: ('breadcrumbs' in a) ? a.breadcrumbs : true,
                        type: a.type
                    }
                ];
                title = a.title;
            }
            else {
                if (a.type === 'group' && 'children' in a) {
                    a.children.forEach((b) => {
                        if (b.type === 'item' && 'url' in b && b.url === activeLink) {
                            result = [
                                {
                                    url: ('url' in b) ? b.url : false,
                                    title: b.title,
                                    breadcrumbs: ('breadcrumbs' in b) ? b.breadcrumbs : true,
                                    type: b.type
                                }
                            ];
                            title = b.title;
                        }
                        else {
                            if (b.type === 'collapse' && 'children' in b) {
                                b.children.forEach((c) => {
                                    if (c.type === 'item' && 'url' in c && c.url === activeLink) {
                                        result = [
                                            {
                                                url: ('url' in b) ? b.url : false,
                                                title: b.title,
                                                breadcrumbs: ('breadcrumbs' in b) ? b.breadcrumbs : true,
                                                type: b.type
                                            },
                                            {
                                                url: ('url' in c) ? c.url : false,
                                                title: c.title,
                                                breadcrumbs: ('breadcrumbs' in c) ? c.breadcrumbs : true,
                                                type: c.type
                                            }
                                        ];
                                        title = c.title;
                                    }
                                    else {
                                        if (c.type === 'collapse' && 'children' in c) {
                                            c.children.forEach((d) => {
                                                if (d.type === 'item' && 'url' in d && d.url === activeLink) {
                                                    result = [
                                                        {
                                                            url: ('url' in b) ? b.url : false,
                                                            title: b.title,
                                                            breadcrumbs: ('breadcrumbs' in b) ? b.breadcrumbs : true,
                                                            type: b.type
                                                        },
                                                        {
                                                            url: ('url' in c) ? c.url : false,
                                                            title: c.title,
                                                            breadcrumbs: ('breadcrumbs' in c) ? c.breadcrumbs : true,
                                                            type: c.type
                                                        },
                                                        {
                                                            url: ('url' in d) ? d.url : false,
                                                            title: d.title,
                                                            breadcrumbs: ('breadcrumbs' in c) ? d.breadcrumbs : true,
                                                            type: d.type
                                                        }
                                                    ];
                                                    title = d.title;
                                                }
                                            });
                                        }
                                    }
                                });
                            }
                        }
                    });
                }
            }
        });
        this.navigationList = result;
        this.titleService.setTitle(title + ' | Gradient Able Angular 8+ Admin Template');
    }
};
BreadcrumbComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_modules_ui_components_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_4__["NavigationItem"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], BreadcrumbComponent.prototype, "type", void 0);
BreadcrumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-breadcrumb',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./breadcrumb.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/breadcrumb/breadcrumb.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./breadcrumb.component.scss */ "./src/app/modules/shared/components/breadcrumb/breadcrumb.component.scss")).default]
    })
], BreadcrumbComponent);



/***/ }),

/***/ "./src/app/modules/shared/components/breadcrumb/breadcrumb.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/shared/components/breadcrumb/breadcrumb.module.ts ***!
  \***************************************************************************/
/*! exports provided: BreadcrumbModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbModule", function() { return BreadcrumbModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./breadcrumb.component */ "./src/app/modules/shared/components/breadcrumb/breadcrumb.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let BreadcrumbModule = class BreadcrumbModule {
};
BreadcrumbModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
        ],
        declarations: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbComponent"]],
        exports: [_breadcrumb_component__WEBPACK_IMPORTED_MODULE_3__["BreadcrumbComponent"]]
    })
], BreadcrumbModule);



/***/ }),

/***/ "./src/app/modules/shared/components/card/card.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/modules/shared/components/card/card.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".card.full-card {\n  position: fixed !important;\n  top: 0 !important;\n  left: 0 !important;\n  z-index: 99999;\n  border-radius: 0;\n  width: calc(100vw) !important;\n  height: 100vh !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3drL0RvY3VtZW50b3MvZG90bmV0Y29yZS13ZWJhcGktYW5kLXJhdmVuZGIvQ2xpZW50QXBwL3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9jYXJkL2NhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBMEI7RUFDMUIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3Qix3QkFBd0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQuZnVsbC1jYXJkIHtcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gIHRvcDogMCAhaW1wb3J0YW50O1xuICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6IDk5OTk5O1xuICBib3JkZXItcmFkaXVzOiAwO1xuICB3aWR0aDogY2FsYygxMDB2dykgIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDB2aCAhaW1wb3J0YW50O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/modules/shared/components/card/card.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/shared/components/card/card.component.ts ***!
  \******************************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var css_animator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! css-animator */ "./node_modules/css-animator/index.js");
/* harmony import */ var css_animator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(css_animator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");





let CardComponent = class CardComponent {
    constructor(animationService, config) {
        config.placement = 'bottom-right';
        this.customHeader = false;
        this.options = true;
        this.hidHeader = false;
        this.isCardFooter = false;
        this.cardTitle = '';
        this.animator = animationService.builder();
        this.animators = animationService.builder();
        this.animator.useVisibility = true;
        this.fullIcon = 'icon-maximize';
        this.isAnimating = false;
        this.collapsedCard = 'expanded';
        this.collapsedIcon = 'icon-minus';
        this.loadCard = false;
        this.cardRemove = 'open';
    }
    ngOnInit() {
        if (this.hidHeader) {
            this.options = false;
        }
        if (!this.options || this.hidHeader || this.customHeader) {
            this.collapsedCard = 'false';
        }
    }
    fullCardToggle(element, animation, status) {
        animation = this.cardClass === 'full-card' ? 'zoomOut' : 'zoomIn';
        this.fullIcon = this.cardClass === 'full-card' ? 'icon-maximize' : 'icon-minimize';
        // const duration = this.cardClass === 'full-card' ? 300 : 600;
        this.cardClass = this.cardClass === 'full-card' ? this.cardClass : 'full-card';
        if (status) {
            this.animation = animation;
        }
        this.isAnimating = true;
        this.animators
            .setType(this.animation)
            .setDuration(500)
            .setDirection('alternate')
            .setTimingFunction('cubic-bezier(0.1, -0.6, 0.2, 0)')
            .animate(element)
            .then(() => {
            this.isAnimating = false;
        })
            .catch(() => {
            this.isAnimating = false;
        });
        setTimeout(() => {
            this.cardClass = animation === 'zoomOut' ? '' : this.cardClass;
            if (this.cardClass === 'full-card') {
                document.querySelector('body').style.overflow = 'hidden';
            }
            else {
                document.querySelector('body').removeAttribute('style');
            }
        }, 500);
    }
    collapsedCardToggle() {
        this.collapsedCard = this.collapsedCard === 'collapsed' ? 'expanded' : 'collapsed';
        this.collapsedIcon = this.collapsedCard === 'collapsed' ? 'icon-plus' : 'icon-minus';
    }
    cardRefresh() {
        this.loadCard = true;
        this.cardClass = 'card-load';
        setTimeout(() => {
            this.loadCard = false;
            this.cardClass = 'expanded';
        }, 3000);
    }
    cardRemoveAction() {
        this.cardRemove = this.cardRemove === 'closed' ? 'open' : 'closed';
    }
};
CardComponent.ctorParameters = () => [
    { type: css_animator__WEBPACK_IMPORTED_MODULE_3__["AnimationService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownConfig"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "cardTitle", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "cardClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "blockClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "headerClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "options", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "hidHeader", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "customHeader", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "cardCaption", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "captionClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "isCardFooter", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], CardComponent.prototype, "footerClass", void 0);
CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/card/card.component.html")).default,
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownConfig"]],
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('collapsedCard', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                    overflow: 'hidden',
                    height: '0px',
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                    overflow: 'hidden',
                    height: _angular_animations__WEBPACK_IMPORTED_MODULE_4__["AUTO_STYLE"],
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('collapsed <=> expanded', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('400ms ease-in-out')
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["trigger"])('cardRemove', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('open', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                    opacity: 1
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["state"])('closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["style"])({
                    opacity: 0,
                    display: 'none'
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["transition"])('open <=> closed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_4__["animate"])('400ms')),
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./card.component.scss */ "./src/app/modules/shared/components/card/card.component.scss")).default]
    })
], CardComponent);



/***/ }),

/***/ "./src/app/modules/shared/components/card/card.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/shared/components/card/card.module.ts ***!
  \***************************************************************/
/*! exports provided: CardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardModule", function() { return CardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card.component */ "./src/app/modules/shared/components/card/card.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var css_animator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! css-animator */ "./node_modules/css-animator/index.js");
/* harmony import */ var css_animator__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(css_animator__WEBPACK_IMPORTED_MODULE_5__);






let CardModule = class CardModule {
};
CardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbDropdownModule"],
            css_animator__WEBPACK_IMPORTED_MODULE_5__["AnimatorModule"]
        ],
        declarations: [_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]],
        exports: [_card_component__WEBPACK_IMPORTED_MODULE_3__["CardComponent"]],
        providers: [css_animator__WEBPACK_IMPORTED_MODULE_5__["AnimationService"]]
    })
], CardModule);



/***/ }),

/***/ "./src/app/modules/shared/components/chart/apex-chart/apex-chart.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/shared/components/chart/apex-chart/apex-chart.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2hhcmVkL2NvbXBvbmVudHMvY2hhcnQvYXBleC1jaGFydC9hcGV4LWNoYXJ0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/shared/components/chart/apex-chart/apex-chart.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/shared/components/chart/apex-chart/apex-chart.component.ts ***!
  \************************************************************************************/
/*! exports provided: ApexChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApexChartComponent", function() { return ApexChartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var apexcharts_dist_apexcharts_common_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apexcharts/dist/apexcharts.common.js */ "./node_modules/apexcharts/dist/apexcharts.common.js");
/* harmony import */ var apexcharts_dist_apexcharts_common_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(apexcharts_dist_apexcharts_common_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apex_chart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apex-chart.service */ "./src/app/modules/shared/components/chart/apex-chart/apex-chart.service.ts");




let ApexChartComponent = class ApexChartComponent {
    constructor(apexEvent) {
        this.apexEvent = apexEvent;
    }
    ngOnInit() {
        setTimeout(() => {
            this.chart = new apexcharts_dist_apexcharts_common_js__WEBPACK_IMPORTED_MODULE_2___default.a(document.querySelector('#' + this.chartID), this.chartConfig);
            this.chart.render();
        });
        this.apexEvent.changeTimeRange.subscribe(() => {
            if (this.xAxis) {
                this.chart.updateOptions({
                    xaxis: this.xAxis
                });
            }
        });
        this.apexEvent.changeSeriesData.subscribe(() => {
            if (this.newData) {
                this.chart.updateSeries([{
                        data: this.newData
                    }]);
            }
        });
    }
};
ApexChartComponent.ctorParameters = () => [
    { type: _apex_chart_service__WEBPACK_IMPORTED_MODULE_3__["ApexChartService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ApexChartComponent.prototype, "chartID", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ApexChartComponent.prototype, "chartConfig", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ApexChartComponent.prototype, "xAxis", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ApexChartComponent.prototype, "newData", void 0);
ApexChartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-apex-chart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./apex-chart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/chart/apex-chart/apex-chart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./apex-chart.component.scss */ "./src/app/modules/shared/components/chart/apex-chart/apex-chart.component.scss")).default]
    })
], ApexChartComponent);



/***/ }),

/***/ "./src/app/modules/shared/components/chart/apex-chart/apex-chart.service.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/shared/components/chart/apex-chart/apex-chart.service.ts ***!
  \**********************************************************************************/
/*! exports provided: ApexChartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApexChartService", function() { return ApexChartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ApexChartService = class ApexChartService {
    constructor() {
        this.changeTimeRange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.changeSeriesData = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    eventChangeTimeRange() {
        this.changeTimeRange.emit();
    }
    eventChangeSeriesData() {
        this.changeSeriesData.emit();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ApexChartService.prototype, "changeTimeRange", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ApexChartService.prototype, "changeSeriesData", void 0);
ApexChartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ApexChartService);



/***/ }),

/***/ "./src/app/modules/shared/components/index.ts":
/*!****************************************************!*\
  !*** ./src/app/modules/shared/components/index.ts ***!
  \****************************************************/
/*! exports provided: CardModule, BreadcrumbModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _card_card_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./card/card.module */ "./src/app/modules/shared/components/card/card.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardModule", function() { return _card_card_module__WEBPACK_IMPORTED_MODULE_1__["CardModule"]; });

/* harmony import */ var _breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./breadcrumb/breadcrumb.module */ "./src/app/modules/shared/components/breadcrumb/breadcrumb.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbModule", function() { return _breadcrumb_breadcrumb_module__WEBPACK_IMPORTED_MODULE_2__["BreadcrumbModule"]; });






/***/ }),

/***/ "./src/app/modules/shared/components/spinner/spinkit-css/sk-line-material.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/shared/components/spinner/spinkit-css/sk-line-material.scss ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sk-line-material {\n  top: 0;\n  position: relative;\n  margin: auto;\n  width: 100%; }\n\n.sk-line-material .sk-child {\n  width: 100%;\n  height: 4px;\n  position: absolute;\n  top: 0;\n  display: inline-block;\n  transform-origin: 0% 0%;\n  -webkit-animation: sk-line-material 2s ease-in-out 0s infinite both;\n  animation: sk-line-material 2s ease-in-out 0s infinite both; }\n\n@-webkit-keyframes sk-line-material {\n  0%, 80%, 100% {\n    transform: scaleX(0); }\n  40% {\n    transform: scaleX(1); } }\n\n@keyframes sk-line-material {\n  0% {\n    transform: scaleX(0); }\n  100% {\n    transform: scaleX(1); } }\n\n#http-loader {\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 9999; }\n\n.loader-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  filter: alpha(opacity=70);\n  opacity: 1;\n  background-color: rgba(0, 0, 0, 0); }\n\n.colored-parent, .colored > div {\n  background-color: rgba(26, 188, 156, 0.8); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3drL0RvY3VtZW50b3MvZG90bmV0Y29yZS13ZWJhcGktYW5kLXJhdmVuZGIvQ2xpZW50QXBwL3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5raXQtY3NzL3NrLWxpbmUtbWF0ZXJpYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLE1BQVE7RUFDUixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHZjtFQUNJLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQUs7RUFDTCxxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLG1FQUFtRTtFQUNuRSwyREFBMkQsRUFBQTs7QUFHL0Q7RUFDSTtJQUVJLG9CQUFvQixFQUFBO0VBRXhCO0lBRUksb0JBQW9CLEVBQUEsRUFBQTs7QUFJNUI7RUFDSTtJQUVJLG9CQUFvQixFQUFBO0VBRXhCO0lBRUksb0JBQW9CLEVBQUEsRUFBQTs7QUFJNUI7RUFDSSxNQUFNO0VBQ04sT0FBTztFQUNQLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsVUFBVTtFQUNWLGtDQUErQixFQUFBOztBQUduQztFQUNJLHlDQUEwQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5raXQtY3NzL3NrLWxpbmUtbWF0ZXJpYWwuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zay1saW5lLW1hdGVyaWFsIHtcbiAgICB0b3A6IDAgIDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uc2stbGluZS1tYXRlcmlhbCAuc2stY2hpbGQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6MDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNrLWxpbmUtbWF0ZXJpYWwgMnMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgYm90aDtcbiAgICBhbmltYXRpb246IHNrLWxpbmUtbWF0ZXJpYWwgMnMgZWFzZS1pbi1vdXQgMHMgaW5maW5pdGUgYm90aDtcbn1cblxuQC13ZWJraXQta2V5ZnJhbWVzIHNrLWxpbmUtbWF0ZXJpYWwge1xuICAgIDAlLCA4MCUsIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDApO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICB9XG4gICAgNDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XG4gICAgfVxufVxuXG5Aa2V5ZnJhbWVzIHNrLWxpbmUtbWF0ZXJpYWwge1xuICAgIDAlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgfVxuICAgIDEwMCUge1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgICB9XG59XG5cbiNodHRwLWxvYWRlciB7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiA5OTk5O1xufVxuXG4ubG9hZGVyLWJnIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGZpbHRlcjogYWxwaGEob3BhY2l0eT03MCk7XG4gICAgb3BhY2l0eTogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDApO1xufVxuXG4uY29sb3JlZC1wYXJlbnQsIC5jb2xvcmVkID4gZGl2IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI2LCAxODgsIDE1NiwgMC44MCk7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/modules/shared/components/spinner/spinkits.ts":
/*!***************************************************************!*\
  !*** ./src/app/modules/shared/components/spinner/spinkits.ts ***!
  \***************************************************************/
/*! exports provided: Spinkit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spinkit", function() { return Spinkit; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const Spinkit = {
    skChasingDots: 'sk-chasing-dots',
    skCubeGrid: 'sk-cube-grid',
    skDoubleBounce: 'sk-double-bounce',
    skRotatingPlane: 'sk-rotationg-plane',
    skSpinnerPulse: 'sk-spinner-pulse',
    skThreeBounce: 'sk-three-bounce',
    skWanderingCubes: 'sk-wandering-cubes',
    skWave: 'sk-wave',
    skLine: 'sk-line-material'
};


/***/ }),

/***/ "./src/app/modules/shared/components/spinner/spinner.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/shared/components/spinner/spinner.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#http-loader {\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 9999; }\n\n.loader-bg {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  filter: alpha(opacity=70);\n  opacity: .7;\n  background-color: #f1f1f1; }\n\n.colored-parent, .colored > div {\n  background-color: #333; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3drL0RvY3VtZW50b3MvZG90bmV0Y29yZS13ZWJhcGktYW5kLXJhdmVuZGIvQ2xpZW50QXBwL3NyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxNQUFNO0VBQ04sT0FBTztFQUNQLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLGFBQWEsRUFBQTs7QUFHakI7RUFDSSxZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsV0FBVztFQUNYLHlCQUF5QixFQUFBOztBQUc3QjtFQUNJLHNCQUFzQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9zaGFyZWQvY29tcG9uZW50cy9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjaHR0cC1sb2FkZXIge1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgei1pbmRleDogOTk5OTtcbn1cblxuLmxvYWRlci1iZyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBmaWx0ZXI6IGFscGhhKG9wYWNpdHk9NzApO1xuICAgIG9wYWNpdHk6IC43O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG59XG5cbi5jb2xvcmVkLXBhcmVudCwgLmNvbG9yZWQgPiBkaXYge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/modules/shared/components/spinner/spinner.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/shared/components/spinner/spinner.component.ts ***!
  \************************************************************************/
/*! exports provided: SpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function() { return SpinnerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _spinkits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./spinkits */ "./src/app/modules/shared/components/spinner/spinkits.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let SpinnerComponent = class SpinnerComponent {
    constructor(router, document) {
        this.router = router;
        this.document = document;
        this.isSpinnerVisible = true;
        this.Spinkit = _spinkits__WEBPACK_IMPORTED_MODULE_2__["Spinkit"];
        this.backgroundColor = '#2196f3';
        this.spinner = _spinkits__WEBPACK_IMPORTED_MODULE_2__["Spinkit"].skLine;
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationStart"]) {
                this.isSpinnerVisible = true;
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationCancel"] || event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationError"]) {
                this.isSpinnerVisible = false;
            }
        }, () => {
            this.isSpinnerVisible = false;
        });
    }
    ngOnDestroy() {
        this.isSpinnerVisible = false;
    }
};
SpinnerComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SpinnerComponent.prototype, "backgroundColor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SpinnerComponent.prototype, "spinner", void 0);
SpinnerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-spinner',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./spinner.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/shared/components/spinner/spinner.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./spinner.component.scss */ "./src/app/modules/shared/components/spinner/spinner.component.scss")).default, tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./spinkit-css/sk-line-material.scss */ "./src/app/modules/shared/components/spinner/spinkit-css/sk-line-material.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"]))
], SpinnerComponent);



/***/ }),

/***/ "./src/app/modules/shared/full-screen/toggle-full-screen.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/shared/full-screen/toggle-full-screen.ts ***!
  \******************************************************************/
/*! exports provided: ToggleFullScreenDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleFullScreenDirective", function() { return ToggleFullScreenDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! screenfull */ "./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var screenfull__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(screenfull__WEBPACK_IMPORTED_MODULE_2__);



let ToggleFullScreenDirective = class ToggleFullScreenDirective {
    constructor(elements) {
        this.elements = elements;
    }
    onClick() {
        /*if (screenfull.enabled) {
          (this.elements).nativeElement.querySelector('.feather').classList.toggle('icon-maximize');
          (this.elements).nativeElement.querySelector('.feather').classList.toggle('icon-minimize');
          screenfull.toggle();
        }*/
        if (isScreenFull(screenfull__WEBPACK_IMPORTED_MODULE_2__)) {
            if (screenfull__WEBPACK_IMPORTED_MODULE_2__["isFullscreen"]) {
                screenfull__WEBPACK_IMPORTED_MODULE_2__["exit"]();
            }
            else {
                screenfull__WEBPACK_IMPORTED_MODULE_2__["request"]();
            }
        }
    }
};
ToggleFullScreenDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click')
], ToggleFullScreenDirective.prototype, "onClick", null);
ToggleFullScreenDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appToggleFullScreen]'
    })
], ToggleFullScreenDirective);

function isScreenFull(sf) {
    return sf.isFullscreen;
}


/***/ }),

/***/ "./src/app/modules/shared/services/ag-grid-helper.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/shared/services/ag-grid-helper.service.ts ***!
  \*******************************************************************/
/*! exports provided: AgGridHelperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgGridHelperService", function() { return AgGridHelperService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");



let AgGridHelperService = class AgGridHelperService {
    constructor() {
    }
    currencyFormatter(params) {
        return 'R$ ' + params.value.toLocaleString('pt');
    }
    dateFormatter(params) {
        const datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]('en-US');
        return datePipe.transform(params.value, 'dd/MM/yyyy hh:mm:ss');
    }
    cpfFormatter(params) {
        let cpf = params.value;
        // retira os caracteres indesejados...
        cpf = cpf.replace(/[^\d]/g, '');
        // realizar a formatação...
        return cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4');
    }
};
AgGridHelperService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AgGridHelperService);



/***/ }),

/***/ "./src/app/modules/shared/shared.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/shared/shared.module.ts ***!
  \*************************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-click-outside */ "./node_modules/ng-click-outside/lib/index.js");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_click_outside__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/spinner/spinner.component */ "./src/app/modules/shared/components/spinner/spinner.component.ts");
/* harmony import */ var _components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/chart/apex-chart/apex-chart.component */ "./src/app/modules/shared/components/chart/apex-chart/apex-chart.component.ts");
/* harmony import */ var _components_chart_apex_chart_apex_chart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/chart/apex-chart/apex-chart.service */ "./src/app/modules/shared/components/chart/apex-chart/apex-chart.service.ts");
/* harmony import */ var _full_screen_toggle_full_screen__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./full-screen/toggle-full-screen */ "./src/app/modules/shared/full-screen/toggle-full-screen.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components */ "./src/app/modules/shared/components/index.ts");











const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
let SharedModule = class SharedModule {
};
SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _components__WEBPACK_IMPORTED_MODULE_10__["CardModule"],
            _components__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbModule"],
            ng_click_outside__WEBPACK_IMPORTED_MODULE_5__["ClickOutsideModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarModule"]
        ],
        exports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _components__WEBPACK_IMPORTED_MODULE_10__["CardModule"],
            _components__WEBPACK_IMPORTED_MODULE_10__["BreadcrumbModule"],
            ng_click_outside__WEBPACK_IMPORTED_MODULE_5__["ClickOutsideModule"],
            _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__["SpinnerComponent"],
            _components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_7__["ApexChartComponent"],
            _full_screen_toggle_full_screen__WEBPACK_IMPORTED_MODULE_9__["ToggleFullScreenDirective"]
        ],
        declarations: [
            _components_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__["SpinnerComponent"],
            _components_chart_apex_chart_apex_chart_component__WEBPACK_IMPORTED_MODULE_7__["ApexChartComponent"],
            _full_screen_toggle_full_screen__WEBPACK_IMPORTED_MODULE_9__["ToggleFullScreenDirective"]
        ],
        providers: [
            {
                provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PERFECT_SCROLLBAR_CONFIG"],
                useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            },
            _components_chart_apex_chart_apex_chart_service__WEBPACK_IMPORTED_MODULE_8__["ApexChartService"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/modules/ui/components/admin/admin.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/modules/ui/components/admin/admin.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdWkvY29tcG9uZW50cy9hZG1pbi9hZG1pbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/ui/components/admin/admin.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/ui/components/admin/admin.component.ts ***!
  \****************************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../app-config */ "./src/app/app-config.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/loading.service */ "./src/app/modules/ui/services/loading.service.ts");





let AdminComponent = class AdminComponent {
    constructor(zone, location, loading) {
        this.zone = zone;
        this.location = location;
        this.loading = loading;
        this.gradientConfig = _app_config__WEBPACK_IMPORTED_MODULE_2__["GradientConfig"].config;
        let currentURL = this.location.path();
        const baseHerf = this.location['_baseHref'];
        if (baseHerf) {
            currentURL = baseHerf + this.location.path();
        }
        this.windowWidth = window.innerWidth;
        if (currentURL === baseHerf + '/layout/collapse-menu'
            || currentURL === baseHerf + '/layout/box'
            || (this.windowWidth >= 992 && this.windowWidth <= 1024)) {
            this.gradientConfig.collapseMenu = true;
        }
        this.navCollapsed = (this.windowWidth >= 992) ? this.gradientConfig.collapseMenu : false;
        this.navCollapsedMob = false;
    }
    ngOnInit() {
        if (this.windowWidth < 992) {
            this.gradientConfig.layout = 'vertical';
            setTimeout(() => {
                document.querySelector('.pcoded-navbar').classList.add('menupos-static');
                document.querySelector('#nav-ps-gradient-able').style.maxHeight = '100%'; // 100% amit
            }, 500);
        }
    }
    navMobClick() {
        if (this.windowWidth < 992) {
            if (this.navCollapsedMob && !(document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open'))) {
                this.navCollapsedMob = !this.navCollapsedMob;
                setTimeout(() => {
                    this.navCollapsedMob = !this.navCollapsedMob;
                }, 100);
            }
            else {
                this.navCollapsedMob = !this.navCollapsedMob;
            }
        }
    }
};
AdminComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] },
    { type: _services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] }
];
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ui/components/admin/admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin.component.scss */ "./src/app/modules/ui/components/admin/admin.component.scss")).default]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/modules/ui/components/admin/configuration/configuration.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/ui/components/admin/configuration/configuration.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".menu-styler .nav-pills {\n  margin-bottom: 8px;\n  box-shadow: none; }\n\nbody.gradient-dark .menu-styler .tab-content {\n  background: rgba(4, 169, 245, 0.03); }\n\nbody.gradient-dark .menu-styler h1,\nbody.gradient-dark .menu-styler h2,\nbody.gradient-dark .menu-styler h3,\nbody.gradient-dark .menu-styler h4,\nbody.gradient-dark .menu-styler h5,\nbody.gradient-dark .menu-styler p,\nbody.gradient-dark .menu-styler h6 {\n  color: #222; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3drL0RvY3VtZW50b3MvZG90bmV0Y29yZS13ZWJhcGktYW5kLXJhdmVuZGIvQ2xpZW50QXBwL3NyYy9hcHAvbW9kdWxlcy91aS9jb21wb25lbnRzL2FkbWluL2NvbmZpZ3VyYXRpb24vY29uZmlndXJhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGtCQUFrQjtFQUNsQixnQkFBZ0IsRUFBQTs7QUFJcEI7RUFHTSxtQ0FBa0MsRUFBQTs7QUFIeEM7Ozs7Ozs7RUFZTSxXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3VpL2NvbXBvbmVudHMvYWRtaW4vY29uZmlndXJhdGlvbi9jb25maWd1cmF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lbnUtc3R5bGVyIHtcbiAgLm5hdi1waWxscyB7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gIH1cblxufVxuYm9keS5ncmFkaWVudC1kYXJre1xuICAubWVudS1zdHlsZXJ7XG4gICAgLnRhYi1jb250ZW50e1xuICAgICAgYmFja2dyb3VuZDpyZ2JhKDQsIDE2OSwgMjQ1LCAwLjAzKTtcbiAgICB9XG4gICAgaDEsXG4gICAgaDIsXG4gICAgaDMsXG4gICAgaDQsXG4gICAgaDUsXG4gICAgcCxcbiAgICBoNntcbiAgICAgIGNvbG9yOiAjMjIyO1xuICAgIH1cbiAgfVxufVxuIl19 */");

/***/ }),

/***/ "./src/app/modules/ui/components/admin/configuration/configuration.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/ui/components/admin/configuration/configuration.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ConfigurationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigurationComponent", function() { return ConfigurationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app-config */ "./src/app/app-config.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let ConfigurationComponent = class ConfigurationComponent {
    constructor(zone, location) {
        this.zone = zone;
        this.location = location;
        this.scroll = () => {
            if (this.headerFixedLayout === false) {
                document.querySelector('#nav-ps-gradient-able').style.maxHeight = 'calc(100vh)';
                const el = document.querySelector('.pcoded-navbar.menupos-fixed');
                const scrollPosition = window.pageYOffset;
                if (scrollPosition > 60) {
                    el.style.position = 'fixed';
                    el.style.transition = 'none';
                    el.style.marginTop = '0';
                }
                else {
                    el.style.position = 'absolute';
                    el.style.marginTop = '60px';
                }
            }
            else if (document.querySelector('.pcoded-navbar').hasAttribute('style')) {
                document.querySelector('.pcoded-navbar.menupos-fixed').removeAttribute('style');
            }
        };
        this.gradientConfig = _app_config__WEBPACK_IMPORTED_MODULE_2__["GradientConfig"].config;
        this.setThemeLayout();
    }
    ngOnInit() {
        this.styleSelectorToggle = false;
        this.layoutType = this.gradientConfig.layoutType;
        this.setLayout(this.layoutType);
        this.headerBackgroundColor = this.gradientConfig.headerBackColor;
        this.setHeaderBackground(this.headerBackgroundColor);
        this.rtlLayout = this.gradientConfig.rtlLayout;
        this.changeRtlLayout(this.rtlLayout);
        this.menuFixedLayout = this.gradientConfig.navFixedLayout;
        if (this.gradientConfig.layout === 'vertical') {
            this.changeMenuFixedLayout(this.menuFixedLayout);
        }
        this.headerFixedLayout = this.gradientConfig.headerFixedLayout;
        this.changeHeaderFixedLayout(this.headerFixedLayout);
        this.boxLayout = this.gradientConfig.boxLayout;
        this.changeBoxLayout(this.boxLayout);
    }
    setThemeLayout() {
        let currentURL = this.location.path();
        const baseHref = this.location['_baseHref'];
        if (baseHref) {
            currentURL = baseHref + this.location.path();
        }
        switch (currentURL) {
            case baseHref + '/layout/static':
                this.gradientConfig.layout = 'vertical';
                this.gradientConfig.navFixedLayout = false;
                this.gradientConfig.headerFixedLayout = false;
                break;
            case baseHref + '/layout/fixed':
                this.gradientConfig.layout = 'vertical';
                this.gradientConfig.navFixedLayout = true;
                this.gradientConfig.headerFixedLayout = true;
                break;
            case baseHref + '/layout/nav-fixed':
                this.gradientConfig.layout = 'vertical';
                this.gradientConfig.navFixedLayout = true;
                this.gradientConfig.headerFixedLayout = false;
                break;
            case baseHref + '/layout/collapse-menu':
                this.gradientConfig.layout = 'vertical';
                this.gradientConfig.collapseMenu = true;
                break;
            case baseHref + '/layout/vertical-rtl':
                this.gradientConfig.layout = 'vertical';
                this.gradientConfig.rtlLayout = true;
                break;
            case baseHref + '/layout/horizontal':
                this.gradientConfig.layout = 'horizontal';
                this.gradientConfig.navFixedLayout = false;
                this.gradientConfig.headerFixedLayout = false;
                break;
            case baseHref + '/layout/horizontal-l2':
                this.gradientConfig.layout = 'horizontal';
                this.gradientConfig.subLayout = 'horizontal-2';
                this.gradientConfig.navFixedLayout = false;
                this.gradientConfig.headerFixedLayout = false;
                break;
            case baseHref + '/layout/horizontal-rtl':
                this.gradientConfig.layout = 'horizontal';
                this.gradientConfig.subLayout = 'horizontal-2';
                this.gradientConfig.navFixedLayout = false;
                this.gradientConfig.headerFixedLayout = false;
                this.gradientConfig.rtlLayout = true;
                break;
            case baseHref + '/layout/box':
                this.gradientConfig.layout = 'vertical';
                this.gradientConfig.boxLayout = true;
                this.gradientConfig.headerFixedLayout = false;
                this.gradientConfig.collapseMenu = true;
                break;
            case baseHref + '/layout/light':
                this.gradientConfig.layout = 'vertical';
                this.gradientConfig.layoutType = 'menu-light';
                this.gradientConfig.headerBackColor = 'header-default';
                break;
            case baseHref + '/layout/dark':
                this.gradientConfig.layout = 'vertical';
                this.gradientConfig.layoutType = 'dark';
                this.gradientConfig.headerBackColor = 'header-blue';
                break;
            case baseHref + '/layout/nav-color':
                this.gradientConfig.layout = 'vertical';
                this.gradientConfig.layoutType = 'menu-light';
                this.gradientConfig.headerBackColor = 'header-info';
                this.gradientConfig.navFixedLayout = true;
                this.gradientConfig.headerFixedLayout = true;
                break;
            default:
                break;
        }
    }
    setHeaderBackColor(color) {
        this.headerBackColor = color;
        document.querySelector('body').style.background = color;
    }
    // change main layout
    setLayout(layout) {
        this.isConfig = true;
        document.querySelector('.pcoded-navbar').classList.remove('menu-light');
        document.querySelector('.pcoded-navbar').classList.remove('menu-dark');
        document.querySelector('.pcoded-navbar').classList.remove('navbar-dark');
        document.querySelector('.pcoded-navbar').classList.remove('brand-dark');
        document.querySelector('body').classList.remove('gradient-dark');
        this.layoutType = layout;
        if (layout === 'menu-light') {
            document.querySelector('.pcoded-navbar').classList.add(layout);
        }
        if (layout === 'dark') {
            document.querySelector('.pcoded-navbar').classList.add('navbar-dark');
            document.querySelector('.pcoded-navbar').classList.add('brand-dark');
            this.setHeaderBackground('header-blue');
            document.querySelector('body').classList.add('gradient-dark');
        }
        if (layout === 'reset') {
            this.reset();
        }
    }
    reset() {
        document.querySelector('.pcoded-navbar').classList.remove('icon-colored');
        this.ngOnInit();
    }
    setRtlLayout(e) {
        const flag = !!(e.target.checked);
        this.changeRtlLayout(flag);
    }
    changeRtlLayout(flag) {
        if (flag) {
            document.querySelector('body').classList.add('gradient-rtl');
        }
        else {
            document.querySelector('body').classList.remove('gradient-rtl');
        }
    }
    setMenuFixedLayout(e) {
        const flag = !!(e.target.checked);
        this.changeMenuFixedLayout(flag);
    }
    changeMenuFixedLayout(flag) {
        setTimeout(() => {
            if (flag) {
                document.querySelector('.pcoded-navbar').classList.remove('menupos-static');
                document.querySelector('.pcoded-navbar').classList.add('menupos-fixed');
                if (this.gradientConfig.layout === 'vertical') {
                    document.querySelector('#nav-ps-gradient-able')
                        .style.maxHeight = 'calc(100vh - 60px)'; // calc(100vh - 70px) amit
                }
                window.addEventListener('scroll', this.scroll, true);
                window.scrollTo(0, 0);
            }
            else {
                document.querySelector('.pcoded-navbar').classList.add('menupos-static');
                document.querySelector('.pcoded-navbar').classList.remove('menupos-fixed');
                if (this.gradientConfig.layout === 'vertical') {
                    document.querySelector('#nav-ps-gradient-able').style.maxHeight = 'calc(100%)'; // calc(100% - 70px) amit
                }
                if (this.gradientConfig.layout === 'vertical') {
                    window.removeEventListener('scroll', this.scroll, true);
                }
            }
        }, 100);
    }
    setHeaderFixedLayout(e) {
        const flag = !!(e.target.checked);
        this.changeHeaderFixedLayout(flag);
    }
    changeHeaderFixedLayout(flag) {
        if (flag) {
            document.querySelector('.pcoded-header').classList.add('headerpos-fixed');
        }
        else {
            document.querySelector('.pcoded-header').classList.remove('headerpos-fixed');
            // static
            if (this.gradientConfig.layout === 'vertical' && this.menuFixedLayout) {
                window.addEventListener('scroll', this.scroll, true);
                window.scrollTo(0, 0);
            }
            else {
                window.removeEventListener('scroll', this.scroll, true);
            }
        }
    }
    setBoxLayout(e) {
        const flag = !!(e.target.checked);
        this.changeBoxLayout(flag);
    }
    changeBoxLayout(flag) {
        if (flag) {
            document.querySelector('body').classList.add('container');
            document.querySelector('body').classList.add('box-layout');
        }
        else {
            document.querySelector('body').classList.remove('box-layout');
            document.querySelector('body').classList.remove('container');
        }
    }
    setHeaderBackground(background) {
        this.headerBackgroundColor = background;
        this.gradientConfig.headerBackColor = background;
        document.querySelector('.pcoded-header').classList.remove('header-blue');
        document.querySelector('.pcoded-header').classList.remove('header-red');
        document.querySelector('.pcoded-header').classList.remove('header-purple');
        document.querySelector('.pcoded-header').classList.remove('header-info');
        document.querySelector('.pcoded-header').classList.remove('header-dark');
        document.querySelector('.pcoded-header').classList.remove('header-orenge');
        document.querySelector('.pcoded-header').classList.remove('header-green');
        document.querySelector('.pcoded-header').classList.remove('header-yellow');
        document.querySelector('.pcoded-header').classList.remove('header-orchidgreen');
        document.querySelector('.pcoded-header').classList.remove('header-indigogreen');
        document.querySelector('.pcoded-header').classList.remove('header-darkgreen');
        document.querySelector('.pcoded-header').classList.remove('header-darkblue');
        if (background !== 'header-default') {
            document.querySelector('.pcoded-header').classList.add(background);
        }
    }
};
ConfigurationComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
ConfigurationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-configuration',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./configuration.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ui/components/admin/configuration/configuration.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./configuration.component.scss */ "./src/app/modules/ui/components/admin/configuration/configuration.component.scss")).default]
    })
], ConfigurationComponent);



/***/ }),

/***/ "./src/app/modules/ui/components/admin/nav-bar/nav-bar.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/ui/components/admin/nav-bar/nav-bar.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdWkvY29tcG9uZW50cy9hZG1pbi9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/ui/components/admin/nav-bar/nav-bar.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/ui/components/admin/nav-bar/nav-bar.component.ts ***!
  \**************************************************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app-config */ "./src/app/app-config.ts");



let NavBarComponent = class NavBarComponent {
    constructor() {
        this.onNavCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onNavHeaderMobCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.gradientConfig = _app_config__WEBPACK_IMPORTED_MODULE_2__["GradientConfig"].config;
        this.menuClass = false;
        this.collapseStyle = 'none';
        this.windowWidth = window.innerWidth;
    }
    ngOnInit() { }
    toggleMobOption() {
        this.menuClass = !this.menuClass;
        this.collapseStyle = (this.menuClass) ? 'block' : 'none';
    }
    navCollapse() {
        if (this.windowWidth >= 992) {
            this.onNavCollapse.emit();
        }
        else {
            this.onNavHeaderMobCollapse.emit();
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NavBarComponent.prototype, "onNavCollapse", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NavBarComponent.prototype, "onNavHeaderMobCollapse", void 0);
NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ui/components/admin/nav-bar/nav-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-bar.component.scss */ "./src/app/modules/ui/components/admin/nav-bar/nav-bar.component.scss")).default]
    })
], NavBarComponent);



/***/ }),

/***/ "./src/app/modules/ui/components/admin/nav-bar/nav-left/nav-left.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/ui/components/admin/nav-bar/nav-left/nav-left.component.scss ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdWkvY29tcG9uZW50cy9hZG1pbi9uYXYtYmFyL25hdi1sZWZ0L25hdi1sZWZ0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/ui/components/admin/nav-bar/nav-left/nav-left.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/ui/components/admin/nav-bar/nav-left/nav-left.component.ts ***!
  \************************************************************************************/
/*! exports provided: NavLeftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLeftComponent", function() { return NavLeftComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavLeftComponent = class NavLeftComponent {
    constructor() { }
    ngOnInit() {
    }
};
NavLeftComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-left',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-left.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ui/components/admin/nav-bar/nav-left/nav-left.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-left.component.scss */ "./src/app/modules/ui/components/admin/nav-bar/nav-left/nav-left.component.scss")).default]
    })
], NavLeftComponent);



/***/ }),

/***/ "./src/app/modules/ui/components/admin/nav-bar/nav-left/nav-search/nav-search.component.scss":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/ui/components/admin/nav-bar/nav-left/nav-search/nav-search.component.scss ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdWkvY29tcG9uZW50cy9hZG1pbi9uYXYtYmFyL25hdi1sZWZ0L25hdi1zZWFyY2gvbmF2LXNlYXJjaC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/ui/components/admin/nav-bar/nav-left/nav-search/nav-search.component.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/ui/components/admin/nav-bar/nav-left/nav-search/nav-search.component.ts ***!
  \*************************************************************************************************/
/*! exports provided: NavSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavSearchComponent", function() { return NavSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavSearchComponent = class NavSearchComponent {
    constructor() {
        this.searchOn = false;
    }
    ngOnInit() { }
};
NavSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-search',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ui/components/admin/nav-bar/nav-left/nav-search/nav-search.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-search.component.scss */ "./src/app/modules/ui/components/admin/nav-bar/nav-left/nav-search/nav-search.component.scss")).default]
    })
], NavSearchComponent);



/***/ }),

/***/ "./src/app/modules/ui/components/admin/nav-bar/nav-right/nav-right.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/modules/ui/components/admin/nav-bar/nav-right/nav-right.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdWkvY29tcG9uZW50cy9hZG1pbi9uYXYtYmFyL25hdi1yaWdodC9uYXYtcmlnaHQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/ui/components/admin/nav-bar/nav-right/nav-right.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/ui/components/admin/nav-bar/nav-right/nav-right.component.ts ***!
  \**************************************************************************************/
/*! exports provided: NavRightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavRightComponent", function() { return NavRightComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../../app-config */ "./src/app/app-config.ts");
/* harmony import */ var src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/auth/services/auth.service */ "./src/app/modules/auth/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let NavRightComponent = class NavRightComponent {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
        this.visibleUserList = false;
        this.chatMessage = false;
        this.gradientConfig = _app_config__WEBPACK_IMPORTED_MODULE_4__["GradientConfig"].config;
    }
    ngOnInit() {
        this.user = this.auth.getProfile();
    }
    logout() {
        this.auth.logout();
        this.router.navigate(['/auth/sign']);
    }
    onChatToggle(friendID) {
        this.friendId = friendID;
        this.chatMessage = !this.chatMessage;
    }
    ngDoCheck() {
        if (document.querySelector('body').classList.contains('elite-rtl')) {
            this.gradientConfig['rtl-layout'] = true;
        }
        else {
            this.gradientConfig['rtl-layout'] = false;
        }
    }
};
NavRightComponent.ctorParameters = () => [
    { type: src_app_modules_auth_services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
NavRightComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-right',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-right.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ui/components/admin/nav-bar/nav-right/nav-right.component.html")).default,
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbDropdownConfig"]],
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('slideInOutLeft', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateX(100%)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateX(0%)' }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateX(100%)' }))
                ])
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('slideInOutRight', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateX(-100%)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateX(0%)' }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["animate"])('300ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({ transform: 'translateX(-100%)' }))
                ])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-right.component.scss */ "./src/app/modules/ui/components/admin/nav-bar/nav-right/nav-right.component.scss")).default]
    })
], NavRightComponent);



/***/ }),

/***/ "./src/app/modules/ui/components/admin/navigation/nav-content/nav-collapse/nav-collapse.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/ui/components/admin/navigation/nav-content/nav-collapse/nav-collapse.component.scss ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdWkvY29tcG9uZW50cy9hZG1pbi9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1jb2xsYXBzZS9uYXYtY29sbGFwc2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/ui/components/admin/navigation/nav-content/nav-collapse/nav-collapse.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/ui/components/admin/navigation/nav-content/nav-collapse/nav-collapse.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: NavCollapseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavCollapseComponent", function() { return NavCollapseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../app-config */ "./src/app/app-config.ts");




let NavCollapseComponent = class NavCollapseComponent {
    constructor() {
        this.visible = false;
        this.gradientConfig = _app_config__WEBPACK_IMPORTED_MODULE_3__["GradientConfig"].config;
        this.themeLayout = this.gradientConfig.layout;
    }
    ngOnInit() {
    }
    navCollapse(e) {
        this.visible = !this.visible;
        let parent = e.target;
        if (this.themeLayout === 'vertical') {
            parent = parent.parentElement;
        }
        const sections = document.querySelectorAll('.pcoded-hasmenu');
        for (let i = 0; i < sections.length; i++) {
            if (sections[i] !== parent) {
                sections[i].classList.remove('pcoded-trigger');
            }
        }
        let firstParent = parent.parentElement;
        let preParent = parent.parentElement.parentElement;
        if (firstParent.classList.contains('pcoded-hasmenu')) {
            do {
                firstParent.classList.add('pcoded-trigger');
                // firstParent.parentElement.classList.toggle('pcoded-trigger');
                firstParent = firstParent.parentElement.parentElement.parentElement;
            } while (firstParent.classList.contains('pcoded-hasmenu'));
        }
        else if (preParent.classList.contains('pcoded-submenu')) {
            do {
                preParent.parentElement.classList.add('pcoded-trigger');
                preParent = preParent.parentElement.parentElement.parentElement;
            } while (preParent.classList.contains('pcoded-submenu'));
        }
        parent.classList.toggle('pcoded-trigger');
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NavCollapseComponent.prototype, "item", void 0);
NavCollapseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-collapse',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-collapse.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ui/components/admin/navigation/nav-content/nav-collapse/nav-collapse.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('slideInOut', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(-100%)', display: 'block' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(0%)' }))
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('250ms ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(-100%)' }))
                ])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-collapse.component.scss */ "./src/app/modules/ui/components/admin/navigation/nav-content/nav-collapse/nav-collapse.component.scss")).default]
    })
], NavCollapseComponent);



/***/ }),

/***/ "./src/app/modules/ui/components/admin/navigation/nav-content/nav-content.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/ui/components/admin/navigation/nav-content/nav-content.component.scss ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdWkvY29tcG9uZW50cy9hZG1pbi9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1jb250ZW50LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/ui/components/admin/navigation/nav-content/nav-content.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/ui/components/admin/navigation/nav-content/nav-content.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: NavContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavContentComponent", function() { return NavContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../navigation */ "./src/app/modules/ui/components/admin/navigation/navigation.ts");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../app-config */ "./src/app/app-config.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





let NavContentComponent = class NavContentComponent {
    constructor(nav, zone, location) {
        this.nav = nav;
        this.zone = zone;
        this.location = location;
        this.onNavMobCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.gradientConfig = _app_config__WEBPACK_IMPORTED_MODULE_3__["GradientConfig"].config;
        this.windowWidth = window.innerWidth;
        this.navigation = this.nav.get();
        this.prevDisabled = 'disabled';
        this.nextDisabled = '';
        this.scrollWidth = 0;
        this.contentWidth = 0;
    }
    ngOnInit() {
        if (this.windowWidth < 992) {
            this.gradientConfig['layout'] = 'vertical';
            setTimeout(() => {
                document.querySelector('.pcoded-navbar').classList.add('menupos-static');
                document.querySelector('#nav-ps-gradient-able').style.maxHeight = '100%';
            }, 500);
        }
    }
    ngAfterViewInit() {
        if (this.gradientConfig['layout'] === 'horizontal') {
            this.contentWidth = this.navbarContent.nativeElement.clientWidth;
            this.wrapperWidth = this.navbarWrapper.nativeElement.clientWidth;
        }
    }
    scrollPlus() {
        this.scrollWidth = this.scrollWidth + (this.wrapperWidth - 80);
        if (this.scrollWidth > (this.contentWidth - this.wrapperWidth)) {
            this.scrollWidth = this.contentWidth - this.wrapperWidth + 80;
            this.nextDisabled = 'disabled';
        }
        this.prevDisabled = '';
        if (this.gradientConfig.rtlLayout) {
            document.querySelector('#side-nav-horizontal').style.marginRight = '-' + this.scrollWidth + 'px';
        }
        else {
            document.querySelector('#side-nav-horizontal').style.marginLeft = '-' + this.scrollWidth + 'px';
        }
    }
    scrollMinus() {
        this.scrollWidth = this.scrollWidth - this.wrapperWidth;
        if (this.scrollWidth < 0) {
            this.scrollWidth = 0;
            this.prevDisabled = 'disabled';
        }
        this.nextDisabled = '';
        if (this.gradientConfig.rtlLayout) {
            document.querySelector('#side-nav-horizontal').style.marginRight = '-' + this.scrollWidth + 'px';
        }
        else {
            document.querySelector('#side-nav-horizontal').style.marginLeft = '-' + this.scrollWidth + 'px';
        }
    }
    fireLeave() {
        const sections = document.querySelectorAll('.pcoded-hasmenu');
        for (let i = 0; i < sections.length; i++) {
            sections[i].classList.remove('active');
            sections[i].classList.remove('pcoded-trigger');
        }
        let current_url = this.location.path();
        if (this.location['_baseHref']) {
            current_url = this.location['_baseHref'] + this.location.path();
        }
        const link = "a.nav-link[ href='" + current_url + "' ]";
        const ele = document.querySelector(link);
        if (ele !== null && ele !== undefined) {
            const parent = ele.parentElement;
            const up_parent = parent.parentElement.parentElement;
            const last_parent = up_parent.parentElement;
            if (parent.classList.contains('pcoded-hasmenu')) {
                parent.classList.add('active');
            }
            else if (up_parent.classList.contains('pcoded-hasmenu')) {
                up_parent.classList.add('active');
            }
            else if (last_parent.classList.contains('pcoded-hasmenu')) {
                last_parent.classList.add('active');
            }
        }
    }
    navMob() {
        if (this.windowWidth < 992 && document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open')) {
            this.onNavMobCollapse.emit();
        }
    }
    fireOutClick() {
        let current_url = this.location.path();
        if (this.location['_baseHref']) {
            current_url = this.location['_baseHref'] + this.location.path();
        }
        const link = "a.nav-link[ href='" + current_url + "' ]";
        const ele = document.querySelector(link);
        if (ele !== null && ele !== undefined) {
            const parent = ele.parentElement;
            const up_parent = parent.parentElement.parentElement;
            const last_parent = up_parent.parentElement;
            if (parent.classList.contains('pcoded-hasmenu')) {
                if (this.gradientConfig['layout'] === 'vertical') {
                    parent.classList.add('pcoded-trigger');
                }
                parent.classList.add('active');
            }
            else if (up_parent.classList.contains('pcoded-hasmenu')) {
                if (this.gradientConfig['layout'] === 'vertical') {
                    up_parent.classList.add('pcoded-trigger');
                }
                up_parent.classList.add('active');
            }
            else if (last_parent.classList.contains('pcoded-hasmenu')) {
                if (this.gradientConfig['layout'] === 'vertical') {
                    last_parent.classList.add('pcoded-trigger');
                }
                last_parent.classList.add('active');
            }
        }
    }
};
NavContentComponent.ctorParameters = () => [
    { type: _navigation__WEBPACK_IMPORTED_MODULE_2__["NavigationItem"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NavContentComponent.prototype, "onNavMobCollapse", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('navbarContent', { static: false })
], NavContentComponent.prototype, "navbarContent", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('navbarWrapper', { static: false })
], NavContentComponent.prototype, "navbarWrapper", void 0);
NavContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-content',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-content.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ui/components/admin/navigation/nav-content/nav-content.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-content.component.scss */ "./src/app/modules/ui/components/admin/navigation/nav-content/nav-content.component.scss")).default]
    })
], NavContentComponent);



/***/ }),

/***/ "./src/app/modules/ui/components/admin/navigation/nav-content/nav-group/nav-group.component.scss":
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/ui/components/admin/navigation/nav-content/nav-group/nav-group.component.scss ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdWkvY29tcG9uZW50cy9hZG1pbi9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1ncm91cC9uYXYtZ3JvdXAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/ui/components/admin/navigation/nav-content/nav-group/nav-group.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/ui/components/admin/navigation/nav-content/nav-group/nav-group.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: NavGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavGroupComponent", function() { return NavGroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../../app-config */ "./src/app/app-config.ts");




let NavGroupComponent = class NavGroupComponent {
    constructor(zone, location) {
        this.zone = zone;
        this.location = location;
        this.layout1 = false;
        this.gradientConfig = _app_config__WEBPACK_IMPORTED_MODULE_3__["GradientConfig"].config;
    }
    ngOnInit() {
        // at reload time active and trigger link
        let current_url = this.location.path();
        if (this.location['_baseHref']) {
            current_url = this.location['_baseHref'] + this.location.path();
        }
        const link = "a.nav-link[ href='" + current_url + "' ]";
        const ele = document.querySelector(link);
        if (ele !== null && ele !== undefined) {
            const parent = ele.parentElement;
            const up_parent = parent.parentElement.parentElement;
            const last_parent = up_parent.parentElement;
            if (parent.classList.contains('pcoded-hasmenu')) {
                if (this.gradientConfig['layout'] === 'vertical') {
                    parent.classList.add('pcoded-trigger');
                }
                parent.classList.add('active');
            }
            else if (up_parent.classList.contains('pcoded-hasmenu')) {
                if (this.gradientConfig['layout'] === 'vertical') {
                    up_parent.classList.add('pcoded-trigger');
                }
                up_parent.classList.add('active');
            }
            else if (last_parent.classList.contains('pcoded-hasmenu')) {
                if (this.gradientConfig['layout'] === 'vertical') {
                    last_parent.classList.add('pcoded-trigger');
                }
                last_parent.classList.add('active');
            }
        }
    }
};
NavGroupComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NavGroupComponent.prototype, "item", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NavGroupComponent.prototype, "layout1", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NavGroupComponent.prototype, "activeId", void 0);
NavGroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-group',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-group.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ui/components/admin/navigation/nav-content/nav-group/nav-group.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-group.component.scss */ "./src/app/modules/ui/components/admin/navigation/nav-content/nav-group/nav-group.component.scss")).default]
    })
], NavGroupComponent);



/***/ }),

/***/ "./src/app/modules/ui/components/admin/navigation/nav-content/nav-item/nav-item.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/ui/components/admin/navigation/nav-content/nav-item/nav-item.component.scss ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdWkvY29tcG9uZW50cy9hZG1pbi9uYXZpZ2F0aW9uL25hdi1jb250ZW50L25hdi1pdGVtL25hdi1pdGVtLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/ui/components/admin/navigation/nav-content/nav-item/nav-item.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/ui/components/admin/navigation/nav-content/nav-item/nav-item.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: NavItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavItemComponent", function() { return NavItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../app-config */ "./src/app/app-config.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");




let NavItemComponent = class NavItemComponent {
    constructor(location) {
        this.location = location;
        this.gradientConfig = _app_config__WEBPACK_IMPORTED_MODULE_2__["GradientConfig"].config;
        this.themeLayout = this.gradientConfig['layout'];
    }
    ngOnInit() {
    }
    closeOtherMenu(event) {
        if (this.gradientConfig['layout'] === 'vertical') {
            const ele = event.target;
            if (ele !== null && ele !== undefined) {
                const parent = ele.parentElement;
                const up_parent = parent.parentElement.parentElement;
                const last_parent = up_parent.parentElement;
                const sections = document.querySelectorAll('.pcoded-hasmenu');
                for (let i = 0; i < sections.length; i++) {
                    sections[i].classList.remove('active');
                    sections[i].classList.remove('pcoded-trigger');
                }
                if (parent.classList.contains('pcoded-hasmenu')) {
                    parent.classList.add('pcoded-trigger');
                    parent.classList.add('active');
                }
                else if (up_parent.classList.contains('pcoded-hasmenu')) {
                    up_parent.classList.add('pcoded-trigger');
                    up_parent.classList.add('active');
                }
                else if (last_parent.classList.contains('pcoded-hasmenu')) {
                    last_parent.classList.add('pcoded-trigger');
                    last_parent.classList.add('active');
                }
            }
            if ((document.querySelector('app-navigation.pcoded-navbar').classList.contains('mob-open'))) {
                document.querySelector('app-navigation.pcoded-navbar').classList.remove('mob-open');
            }
        }
        else {
            setTimeout(() => {
                const sections = document.querySelectorAll('.pcoded-hasmenu');
                for (let i = 0; i < sections.length; i++) {
                    sections[i].classList.remove('active');
                    sections[i].classList.remove('pcoded-trigger');
                }
                let current_url = this.location.path();
                if (this.location['_baseHref']) {
                    current_url = this.location['_baseHref'] + this.location.path();
                }
                const link = "a.nav-link[ href='" + current_url + "' ]";
                const ele = document.querySelector(link);
                if (ele !== null && ele !== undefined) {
                    const parent = ele.parentElement;
                    const up_parent = parent.parentElement.parentElement;
                    const last_parent = up_parent.parentElement;
                    if (parent.classList.contains('pcoded-hasmenu')) {
                        parent.classList.add('active');
                    }
                    else if (up_parent.classList.contains('pcoded-hasmenu')) {
                        up_parent.classList.add('active');
                    }
                    else if (last_parent.classList.contains('pcoded-hasmenu')) {
                        last_parent.classList.add('active');
                    }
                }
            }, 500);
        }
    }
};
NavItemComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], NavItemComponent.prototype, "item", void 0);
NavItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-nav-item',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./nav-item.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ui/components/admin/navigation/nav-content/nav-item/nav-item.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./nav-item.component.scss */ "./src/app/modules/ui/components/admin/navigation/nav-content/nav-item/nav-item.component.scss")).default]
    })
], NavItemComponent);



/***/ }),

/***/ "./src/app/modules/ui/components/admin/navigation/navigation.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/ui/components/admin/navigation/navigation.component.scss ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdWkvY29tcG9uZW50cy9hZG1pbi9uYXZpZ2F0aW9uL25hdmlnYXRpb24uY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/ui/components/admin/navigation/navigation.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/modules/ui/components/admin/navigation/navigation.component.ts ***!
  \********************************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../app-config */ "./src/app/app-config.ts");



let NavigationComponent = class NavigationComponent {
    constructor() {
        this.onNavMobCollapse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.gradientConfig = _app_config__WEBPACK_IMPORTED_MODULE_2__["GradientConfig"].config;
        this.windowWidth = window.innerWidth;
    }
    ngOnInit() { }
    navMobCollapse() {
        if (this.windowWidth < 992) {
            this.onNavMobCollapse.emit();
        }
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], NavigationComponent.prototype, "onNavMobCollapse", void 0);
NavigationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navigation',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ui/components/admin/navigation/navigation.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigation.component.scss */ "./src/app/modules/ui/components/admin/navigation/navigation.component.scss")).default]
    })
], NavigationComponent);



/***/ }),

/***/ "./src/app/modules/ui/components/admin/navigation/navigation.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/ui/components/admin/navigation/navigation.ts ***!
  \**********************************************************************/
/*! exports provided: NavigationItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationItem", function() { return NavigationItem; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const NavigationItems = [
    {
        id: 'dashboard',
        title: 'Dashboard',
        type: 'group',
        icon: 'feather icon-monitor',
        children: [
            {
                id: 'dashboard',
                title: 'Dashboard',
                type: 'item',
                icon: 'feather icon-home',
                url: '/dashboard',
                breadcrumbs: false
            },
        ]
    },
    {
        id: 'serviceOrder',
        title: 'Ordem de serviço',
        type: 'group',
        icon: 'feather icon-monitor',
        children: [
            {
                id: 'newOrder',
                title: 'Nova ordem',
                type: 'item',
                icon: 'feather icon-file-plus',
                url: '/service-order/new',
                breadcrumbs: false
            },
            {
                id: 'queryOrder',
                title: 'Consultar',
                type: 'item',
                icon: 'feather icon-search',
                url: '/service-order/query',
                breadcrumbs: false
            }
        ]
    },
    {
        id: 'customer',
        title: 'Clientes',
        type: 'group',
        icon: 'feather icon-dollar-sign',
        children: [
            {
                id: 'newCustomer',
                title: 'Novo cliente',
                type: 'item',
                icon: 'feather icon-user-plus',
                url: '/customer/new',
                breadcrumbs: false
            },
            {
                id: 'querycustomer',
                title: 'Consultar',
                type: 'item',
                icon: 'feather icon-search',
                url: '/customer/query',
                breadcrumbs: false
            },
        ]
    },
    {
        id: 'bill',
        title: 'Financeiro',
        type: 'group',
        icon: 'feather icon-dollar-sign',
        children: [
            {
                id: 'newBill',
                title: 'Novo lançamento',
                type: 'item',
                icon: 'feather icon-file-plus',
                url: '/bill/new',
                breadcrumbs: false
            },
            {
                id: 'queryBill',
                title: 'Consultar',
                type: 'item',
                icon: 'feather icon-search',
                url: '/bill/query',
                breadcrumbs: false
            },
        ]
    }
];
let NavigationItem = class NavigationItem {
    get() {
        return NavigationItems;
    }
};
NavigationItem = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], NavigationItem);



/***/ }),

/***/ "./src/app/modules/ui/components/notification-message/notification-message.component.scss":
/*!************************************************************************************************!*\
  !*** ./src/app/modules/ui/components/notification-message/notification-message.component.scss ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".toast__container {\n  position: fixed;\n  bottom: 0;\n  z-index: 999; }\n\n.toast__cell {\n  display: inline-block; }\n\n.add-margin {\n  margin-top: 20px; }\n\n.toast__svg {\n  fill: #fff; }\n\n.toast {\n  margin: 1em;\n  position: relative;\n  text-align: left;\n  padding: 21px 0;\n  background-color: #fff;\n  border-radius: 10px;\n  max-width: 500px;\n  bottom: 0px;\n  box-shadow: 1px 7px 14px -5px rgba(0, 0, 0, 0.2);\n  word-wrap: break-word; }\n\n.toast:before {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 4px;\n  height: 100%;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px; }\n\n.toast__icon {\n  position: absolute;\n  top: 50%;\n  left: 22px;\n  transform: translateY(-50%);\n  width: 14px;\n  height: 14px;\n  padding: 7px;\n  border-radius: 50%;\n  display: inline-block; }\n\n.toast__icon-custom {\n  position: absolute;\n  top: 37%;\n  left: 11px;\n  transform: translateY(-50%);\n  height: 14px;\n  padding: 7px;\n  border-radius: 50%;\n  display: inline-block; }\n\n.toast__image {\n  width: 40px;\n  border-radius: 10em; }\n\n.toast__type {\n  color: #3e3e3e;\n  font-weight: 700;\n  margin-top: 0;\n  margin-bottom: 8px; }\n\n.toast__message {\n  font-size: 14px;\n  margin-top: 0;\n  margin-bottom: 0;\n  color: #878787; }\n\n.toast__content {\n  padding-left: 70px;\n  padding-right: 60px; }\n\n.toast__close {\n  position: absolute;\n  right: 22px;\n  top: 50%;\n  width: 14px;\n  cursor: pointer;\n  height: 14px;\n  fill: #878787;\n  transform: translateY(-50%); }\n\n.toast--green .toast__icon {\n  background-color: #2BDE3F; }\n\n.toast--green:before {\n  background-color: #2BDE3F; }\n\n.toast--blue .toast__icon {\n  background-color: #1D72F3; }\n\n.toast--blue:before {\n  background-color: #1D72F3; }\n\n.toast--yellow .toast__icon {\n  background-color: #FFC007; }\n\n.toast--yellow:before {\n  background-color: #FFC007; }\n\n.toast--red .toast__icon {\n  background-color: red; }\n\n.toast--red:before {\n  background-color: red; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3drL0RvY3VtZW50b3MvZG90bmV0Y29yZS13ZWJhcGktYW5kLXJhdmVuZGIvQ2xpZW50QXBwL3NyYy9hcHAvbW9kdWxlcy91aS9jb21wb25lbnRzL25vdGlmaWNhdGlvbi1tZXNzYWdlL25vdGlmaWNhdGlvbi1tZXNzYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGdEQUFnRDtFQUNoRCxxQkFBcUIsRUFBQTs7QUFJdkI7RUFFRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxVQUFVO0VBQ1YsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQiw4QkFBOEIsRUFBQTs7QUFJaEM7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDViwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQixFQUFBOztBQUd2QjtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsVUFBVTtFQUVWLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFFBQVE7RUFDUixXQUFXO0VBQ1gsZUFBZTtFQUNmLFlBQVk7RUFDWixhQUFhO0VBQ2IsMkJBQTJCLEVBQUE7O0FBRzdCO0VBQ0UseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UscUJBQXFCLEVBQUE7O0FBR3ZCO0VBQ0UscUJBQXFCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3VpL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uLW1lc3NhZ2Uvbm90aWZpY2F0aW9uLW1lc3NhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9hc3RfX2NvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMDtcclxuICB6LWluZGV4OiA5OTk7XHJcbn1cclxuXHJcbi50b2FzdF9fY2VsbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uYWRkLW1hcmdpbiB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG5cclxuLnRvYXN0X19zdmcge1xyXG4gIGZpbGw6ICNmZmY7XHJcbn1cclxuXHJcbi50b2FzdCB7XHJcbiAgbWFyZ2luOiAxZW07XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgcGFkZGluZzogMjFweCAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIGJveC1zaGFkb3c6IDFweCA3cHggMTRweCAtNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICB3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcbn1cclxuXHJcblxyXG4udG9hc3Q6YmVmb3JlIHtcclxuICAvL2NvbnRlbnQ6ICcnOyBkaXNhYmxlIGZvciB0ZXN0XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiA0cHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDRweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA0cHg7XHJcblxyXG59XHJcblxyXG4udG9hc3RfX2ljb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiAyMnB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB3aWR0aDogMTRweDtcclxuICBoZWlnaHQ6IDE0cHg7XHJcbiAgcGFkZGluZzogN3B4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi50b2FzdF9faWNvbi1jdXN0b217XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMzclO1xyXG4gIGxlZnQ6IDExcHg7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gIGhlaWdodDogMTRweDtcclxuICBwYWRkaW5nOiA3cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnRvYXN0X19pbWFnZXtcclxuICB3aWR0aDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiAxMGVtO1xyXG59XHJcblxyXG4udG9hc3RfX3R5cGUge1xyXG4gIGNvbG9yOiAjM2UzZTNlO1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbi50b2FzdF9fbWVzc2FnZSB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICBjb2xvcjogIzg3ODc4NztcclxufVxyXG5cclxuLnRvYXN0X19jb250ZW50IHtcclxuICBwYWRkaW5nLWxlZnQ6IDcwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogNjBweDtcclxufVxyXG5cclxuLnRvYXN0X19jbG9zZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAyMnB4O1xyXG4gIHRvcDogNTAlO1xyXG4gIHdpZHRoOiAxNHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBoZWlnaHQ6IDE0cHg7XHJcbiAgZmlsbDogIzg3ODc4NztcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbn1cclxuXHJcbi50b2FzdC0tZ3JlZW4gLnRvYXN0X19pY29uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkJERTNGO1xyXG59XHJcblxyXG4udG9hc3QtLWdyZWVuOmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJCREUzRjtcclxufVxyXG5cclxuLnRvYXN0LS1ibHVlIC50b2FzdF9faWNvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFENzJGMztcclxufVxyXG5cclxuLnRvYXN0LS1ibHVlOmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFENzJGMztcclxufVxyXG5cclxuLnRvYXN0LS15ZWxsb3cgLnRvYXN0X19pY29uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZDMDA3O1xyXG59XHJcblxyXG4udG9hc3QtLXllbGxvdzpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkMwMDc7XHJcbn1cclxuXHJcbi50b2FzdC0tcmVkIC50b2FzdF9faWNvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG59XHJcblxyXG4udG9hc3QtLXJlZDpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/modules/ui/components/notification-message/notification-message.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/ui/components/notification-message/notification-message.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: NotificationMessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationMessageComponent", function() { return NotificationMessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");
/* harmony import */ var _services_notify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/notify.service */ "./src/app/modules/ui/services/notify.service.ts");




let NotificationMessageComponent = class NotificationMessageComponent {
    constructor(notify) {
        this.notify = notify;
        this.visiblityState = 'shown';
    }
    remove() {
        this.visiblityState = 'hidden';
    }
};
NotificationMessageComponent.ctorParameters = () => [
    { type: _services_notify_service__WEBPACK_IMPORTED_MODULE_3__["NotifyService"] }
];
NotificationMessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'notification-message',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./notification-message.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/ui/components/notification-message/notification-message.component.html")).default,
        animations: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('expandableState', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '0', opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '*', opacity: 1 })),
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '*', opacity: 1 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('500ms', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ height: '0', opacity: 0 })),
                ]),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('items', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':enter', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'scale(0.5)', opacity: 0 }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1s cubic-bezier(.8, -0.6, 0.2, 1.5)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'scale(1)', opacity: 1 })) // final
                ]),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])(':leave', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1s cubic-bezier(.8, -0.6, 0.2, 1.5)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ transform: 'translateY(+200%)', opacity: 1 })) // final
                ])
            ])
        ],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./notification-message.component.scss */ "./src/app/modules/ui/components/notification-message/notification-message.component.scss")).default]
    })
], NotificationMessageComponent);



/***/ }),

/***/ "./src/app/modules/ui/services/loading.service.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/ui/services/loading.service.ts ***!
  \********************************************************/
/*! exports provided: LoadingService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingService", function() { return LoadingService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let LoadingService = class LoadingService {
    constructor() {
        this.statusSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
        this.status = this.statusSource.asObservable();
    }
    showHide(command) {
        this.statusSource.next(command);
    }
};
LoadingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoadingService);



/***/ }),

/***/ "./src/app/modules/ui/services/notify.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/ui/services/notify.service.ts ***!
  \*******************************************************/
/*! exports provided: NotifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotifyService", function() { return NotifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let NotifyService = class NotifyService {
    constructor() {
        this.msgSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
        this.msg = this.msgSource.asObservable();
    }
    update(content, style, urlImage, title) {
        const msg = { content, style, urlImage, title };
        this.msgSource.next(msg);
    }
    clear() {
        this.msgSource.next(null);
    }
};
NotifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], NotifyService);



/***/ }),

/***/ "./src/app/modules/ui/ui.module.ts":
/*!*****************************************!*\
  !*** ./src/app/modules/ui/ui.module.ts ***!
  \*****************************************/
/*! exports provided: UiModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiModule", function() { return UiModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/admin/admin.component */ "./src/app/modules/ui/components/admin/admin.component.ts");
/* harmony import */ var _components_admin_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/admin/navigation/navigation.component */ "./src/app/modules/ui/components/admin/navigation/navigation.component.ts");
/* harmony import */ var _components_admin_navigation_nav_content_nav_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/admin/navigation/nav-content/nav-content.component */ "./src/app/modules/ui/components/admin/navigation/nav-content/nav-content.component.ts");
/* harmony import */ var _components_admin_navigation_nav_content_nav_group_nav_group_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/admin/navigation/nav-content/nav-group/nav-group.component */ "./src/app/modules/ui/components/admin/navigation/nav-content/nav-group/nav-group.component.ts");
/* harmony import */ var _components_admin_navigation_nav_content_nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/admin/navigation/nav-content/nav-collapse/nav-collapse.component */ "./src/app/modules/ui/components/admin/navigation/nav-content/nav-collapse/nav-collapse.component.ts");
/* harmony import */ var _components_admin_navigation_nav_content_nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/admin/navigation/nav-content/nav-item/nav-item.component */ "./src/app/modules/ui/components/admin/navigation/nav-content/nav-item/nav-item.component.ts");
/* harmony import */ var _components_admin_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/admin/nav-bar/nav-bar.component */ "./src/app/modules/ui/components/admin/nav-bar/nav-bar.component.ts");
/* harmony import */ var _components_admin_nav_bar_nav_left_nav_left_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/admin/nav-bar/nav-left/nav-left.component */ "./src/app/modules/ui/components/admin/nav-bar/nav-left/nav-left.component.ts");
/* harmony import */ var _components_admin_nav_bar_nav_left_nav_search_nav_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/admin/nav-bar/nav-left/nav-search/nav-search.component */ "./src/app/modules/ui/components/admin/nav-bar/nav-left/nav-search/nav-search.component.ts");
/* harmony import */ var _components_admin_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/admin/configuration/configuration.component */ "./src/app/modules/ui/components/admin/configuration/configuration.component.ts");
/* harmony import */ var _components_admin_nav_bar_nav_right_nav_right_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/admin/nav-bar/nav-right/nav-right.component */ "./src/app/modules/ui/components/admin/nav-bar/nav-right/nav-right.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_components__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/components */ "./src/app/modules/shared/components/index.ts");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _components_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/admin/navigation/navigation */ "./src/app/modules/ui/components/admin/navigation/navigation.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var ng2_loading_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng2-loading-spinner */ "./node_modules/ng2-loading-spinner/fesm2015/ng2-loading-spinner.js");
/* harmony import */ var _components_notification_message_notification_message_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/notification-message/notification-message.component */ "./src/app/modules/ui/components/notification-message/notification-message.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
























const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};
const loadingConfig = {
    animationType: ng2_loading_spinner__WEBPACK_IMPORTED_MODULE_20__["ANIMATION_TYPES"].halfCircle,
    backdropColor: 'rgba(0, 0, 0, 0.5)',
    spinnerColor: '#fff',
    spinnerPosition: 'center',
    backdropBorderRadius: '15px',
    spinnerSize: 'xl',
    spinnerFontSize: '2rem'
};
let UiModule = class UiModule {
};
UiModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_admin_admin_component__WEBPACK_IMPORTED_MODULE_3__["AdminComponent"],
            _components_admin_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_4__["NavigationComponent"],
            _components_admin_navigation_nav_content_nav_content_component__WEBPACK_IMPORTED_MODULE_5__["NavContentComponent"],
            _components_admin_navigation_nav_content_nav_group_nav_group_component__WEBPACK_IMPORTED_MODULE_6__["NavGroupComponent"],
            _components_admin_navigation_nav_content_nav_collapse_nav_collapse_component__WEBPACK_IMPORTED_MODULE_7__["NavCollapseComponent"],
            _components_admin_navigation_nav_content_nav_item_nav_item_component__WEBPACK_IMPORTED_MODULE_8__["NavItemComponent"],
            _components_admin_nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_9__["NavBarComponent"],
            _components_admin_nav_bar_nav_left_nav_left_component__WEBPACK_IMPORTED_MODULE_10__["NavLeftComponent"],
            _components_admin_nav_bar_nav_left_nav_search_nav_search_component__WEBPACK_IMPORTED_MODULE_11__["NavSearchComponent"],
            _components_admin_configuration_configuration_component__WEBPACK_IMPORTED_MODULE_12__["ConfigurationComponent"],
            _components_admin_nav_bar_nav_right_nav_right_component__WEBPACK_IMPORTED_MODULE_13__["NavRightComponent"],
            _components_notification_message_notification_message_component__WEBPACK_IMPORTED_MODULE_21__["NotificationMessageComponent"]
        ],
        exports: [
            _components_admin_navigation_nav_content_nav_content_component__WEBPACK_IMPORTED_MODULE_5__["NavContentComponent"]
        ],
        imports: [
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ReactiveFormsModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__["BrowserModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_22__["NgbModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"],
            _shared_components__WEBPACK_IMPORTED_MODULE_16__["BreadcrumbModule"],
            _shared_components__WEBPACK_IMPORTED_MODULE_16__["CardModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__["PerfectScrollbarModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_19__["SharedModule"],
            ng2_loading_spinner__WEBPACK_IMPORTED_MODULE_20__["Ng2LoadingSpinnerModule"].forRoot(loadingConfig),
        ],
        providers: [
            _components_admin_navigation_navigation__WEBPACK_IMPORTED_MODULE_18__["NavigationItem"],
            {
                provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_17__["PERFECT_SCROLLBAR_CONFIG"],
                useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
            }
        ]
    })
], UiModule);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
    apiBaseUrl: 'http://localhost:5002'
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/wk/Documentos/dotnetcore-webapi-and-ravendb/ClientApp/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map