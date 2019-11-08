(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-bill-bill-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/bill/components/change-bill/change-bill.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/bill/components/change-bill/change-bill.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\" id=\"modal-basic-title\" *ngIf=\"type != 'cancel' && type != 'pay'\">Alterar lançamento</h4>\r\n  <h4 class=\"modal-title\" id=\"modal-basic-title\" *ngIf=\"type == 'cancel'\">Cancelar lançamento</h4>\r\n  <h4 class=\"modal-title\" id=\"modal-basic-title\" *ngIf=\"type == 'pay'\">Baixar lançamento</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click')\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-6\" *ngIf=\"type == 'cancel'\">\r\n      <p>Deseja realmente cancelar esse lançamento?</p>\r\n    </div>\r\n    <div class=\"col-md-6\" *ngIf=\"type == 'pay'\">\r\n      <p>Deseja realmente dar baixa nesse lançamento?</p>\r\n    </div>\r\n    <div class=\"col-md-6\" *ngIf=\"type == 'value'\">\r\n      <div class=\"form-group\">\r\n        <label for=\"exampleInputEmail1\">Novo valor</label>\r\n        <input type=\"text\" class=\"form-control\" aria-describedby=\"valor\" [(ngModel)]=\"value\" currencyMask [options]=\"{ prefix: 'R$ ', thousands: '.', decimal: ',' }\">\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\" *ngIf=\"type == 'duedate'\">\r\n      <div class=\"form-group\">\r\n        <label for=\"exampleInputEmail1\">Nova data de vencimento</label>\r\n        <!-- <input type=\"date\" class=\"form-control\" aria-describedby=\"description\" placeholder=\"Digite uma descrição\"\r\n          [(ngModel)]=\"duedate\"> -->\r\n          <div class=\"input-group\">\r\n            <input type=\"text\" class=\"form-control\" placeholder=\"Informe a data de vencimento\" [(ngModel)]=\"dueDate\" ngbDatepicker #dStart=\"ngbDatepicker\" container=\"body\">\r\n            <div class=\"input-group-append\">\r\n              <button class=\"btn btn-outline-secondary\" (click)=\"dStart.toggle()\" type=\"button\"><i\r\n                  class=\"feather icon-calendar\"></i></button>\r\n            </div>\r\n          </div>\r\n\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-6\" *ngIf=\"type == 'payment'\">\r\n      <div class=\"form-group\">\r\n        <label for=\"exampleFormControlSelect1\">Novo meio de pagamento</label>\r\n        <ng-select [items]=\"customers | async\" bindLabel=\"name\" bindValue=\"id\" placeholder=\"Selecione\"\r\n          [(ngModel)]=\"paymentId\">\r\n        </ng-select>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"save()\"\r\n    *ngIf=\"type != 'cancel' && type != 'pay'\">Alterar</button>\r\n  <button type=\"button\" class=\"btn btn-outline-danger\" (click)=\"cancel()\" *ngIf=\"type == 'cancel'\">Sim,\r\n    Cancelar</button>\r\n  <button type=\"button\" class=\"btn btn-outline-warning\" (click)=\"pay()\" *ngIf=\"type == 'pay'\">Sim, baixar</button>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/bill/components/form-bill/form-bill.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/bill/components/form-bill/form-bill.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card cardTitle=\"Novo lançamento financeiro\" [options]=\"false\">\r\n      <form [formGroup]=\"billForm\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <div class=\"form-group\">\r\n                <label for=\"exampleInputEmail1\">Descrição</label>\r\n                <input type=\"text\" class=\"form-control custom-input\" aria-describedby=\"description\" placeholder=\"Digite uma descrição\"\r\n                  formControlName=\"description\">\r\n              </div>\r\n            </div>            \r\n          </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleFormControlSelect1\">Meio de pagamento</label>\r\n              <ng-select id=\"exampleFormControlSelect1\" [items]=\"paymentMethods | async\" bindLabel=\"description\"\r\n                bindValue=\"sysId\" placeholder=\"Selecione\" formControlName=\"paymentMethodSysId\">\r\n              </ng-select>\r\n              <div class=\"invalid-feedback\">\r\n                Selecione um meio de pagamento.\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col-md-6\">\r\n            <label for=\"value\">Valor</label>\r\n            <div class=\"input-group mb-3\">\r\n              <div class=\"input-group-prepend\">\r\n                <span class=\"input-group-text\" id=\"basic-addon3\">R$</span>\r\n              </div>\r\n              <input type=\"text\" class=\"form-control custom-input\" id=\"value\" aria-describedby=\"value\" formControlName=\"value\" currencyMask [options]=\"{ prefix: 'R$ ', thousands: '.', decimal: ',' }\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">Data de vencimento</label>\r\n              <div class=\"input-group\">\r\n                <input class=\"form-control\" placeholder=\"Informe a data de vencimento\" name=\"dpStart\"\r\n                  formControlName=\"dueDate\" ngbDatepicker #dStart=\"ngbDatepicker\" container=\"body\" readonly>\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary\" (click)=\"dStart.toggle()\" type=\"button\"><i\r\n                      class=\"feather icon-calendar\"></i></button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <label for=\"inputPassword3\">Destino</label>\r\n            <div class=\"form-check\">\r\n              <input class=\"form-check-input\" type=\"radio\" formControlName=\"destiny\" id=\"gridRadios1\" value=\"R\" checked>\r\n              <label class=\"form-check-label\" for=\"gridRadios1\">Conta a Receber</label>\r\n            </div>\r\n            <div class=\"form-check\">\r\n              <input class=\"form-check-input\" type=\"radio\" formControlName=\"destiny\" id=\"gridRadios2\" value=\"P\">\r\n              <label class=\"form-check-label\" for=\"gridRadios2\">Conta a pagar</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"btn-toolbar\">\r\n          <div class=\"btn-group perfect-margin\">\r\n            <div class=\"input-group-append\">\r\n              <button class=\"btn btn-primary\" type=\"button\" (click)=\"submmit(false)\"><i class=\"feather icon-save\"></i>\r\n                Gravar</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"btn-group perfect-margin\">\r\n            <div class=\"input-group-append\">\r\n              <button class=\"btn btn-secondary\" type=\"button\" (click)=\"submmit(true)\"><i class=\"feather icon-save\"></i>\r\n                Gravar e continuar</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/bill/components/query-bills/query-bills.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/bill/components/query-bills/query-bills.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n\r\n  <div class=\"col-sm-12\">\r\n    <app-card cardTitle=\"Pesquisar lançamentos\" [options]=\"true\">\r\n      <form [formGroup]=\"searchForm\">\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">Data inicial</label>\r\n              <div class=\"input-group\">\r\n                <input class=\"form-control\" placeholder=\"Selecione a data inicial\" name=\"dpStart\"\r\n                  formControlName=\"startDate\" ngbDatepicker #dStart=\"ngbDatepicker\" container=\"body\" readonly>\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary\" (click)=\"dStart.toggle()\" type=\"button\"><i\r\n                      class=\"feather icon-calendar\"></i></button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-md-6\">\r\n            <div class=\"form-group\">\r\n              <label for=\"exampleInputEmail1\">Data final</label>\r\n              <div class=\"input-group\">\r\n                <input class=\"form-control\" placeholder=\"Selecione a data final\" name=\"dp\" formControlName=\"endDate\"\r\n                  ngbDatepicker #dEnd=\"ngbDatepicker\" container=\"body\" readonly>\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary\" (click)=\"dEnd.toggle()\" type=\"button\"><i\r\n                      class=\"feather icon-calendar\"></i></button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6\">\r\n            <label for=\"inputPassword3\">Destino</label>\r\n            <div class=\"form-check\">\r\n              <input class=\"form-check-input\" type=\"radio\" formControlName=\"destiny\" id=\"gridRadios1\" value=\"R\" checked>\r\n              <label class=\"form-check-label\" for=\"gridRadios1\">Conta a Receber</label>\r\n            </div>\r\n            <div class=\"form-check\">\r\n              <input class=\"form-check-input\" type=\"radio\" formControlName=\"destiny\" id=\"gridRadios2\" value=\"P\">\r\n              <label class=\"form-check-label\" for=\"gridRadios2\">Conta a pagar</label>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <br>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-4\">\r\n            <div class=\"input-group-append\">\r\n              <button class=\"btn btn-primary\" type=\"button\" (click)=\"search()\"><i class=\"feather icon-search\"></i>\r\n                Pesquisar</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </app-card>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\" *ngIf=\"(rowData | async)!= null\">\r\n  <div class=\"col-sm-12\">\r\n    <app-card cardTitle=\"Dados\" [options]=\"false\">\r\n\r\n      <div class=\"btn-toolbar\">\r\n        <div class=\"btn-group perfect-margin\">\r\n          <div ngbDropdown class=\"d-inline-block\">\r\n            <button class=\"btn btn-outline-primary\" id=\"dropdownBasic1\" ngbDropdownToggle><i\r\n                class=\"feather icon-edit\"></i> Alterar lançamento</button>\r\n            <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\r\n              <button ngbDropdownItem (click)=\"open('payment')\">Meio de pagamento</button>\r\n              <button ngbDropdownItem (click)=\"open('duedate')\">Data de vencimento</button>\r\n              <button ngbDropdownItem (click)=\"open('value')\">Valor</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"btn-group perfect-margin\">\r\n          <button class=\"btn btn-outline-warning\" (click)=\"open('pay')\"><i class=\"feather icon-dollar-sign\"></i> Baixar\r\n            lançamento</button>\r\n        </div>\r\n\r\n        <div class=\"btn-group perfect-margin\">\r\n          <button class=\"btn btn-outline-danger\" (click)=\"open('cancel')\"><i class=\"feather icon-x-circle\"></i> Cancelar\r\n            lançamento</button>\r\n        </div>\r\n      </div>\r\n\r\n      <br>\r\n\r\n      <div class=\"row\">\r\n        <ag-grid-angular \r\n          style=\"width: 100%; min-height: 400px;\" \r\n          class=\"ag-theme-material\" \r\n          [rowData]=\"rowData | async\"\r\n          [columnDefs]=\"columnDefs\" \r\n          [rowSelection]=\"rowSelection\" \r\n          (rowSelected)=\"onRowSelected($event)\"\r\n          [animateRows]=true\r\n          [enableColResize]=true>\r\n        </ag-grid-angular>\r\n      </div>\r\n\r\n    </app-card>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/modules/bill/bill.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/bill/bill.module.ts ***!
  \*********************************************/
/*! exports provided: BillModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillModule", function() { return BillModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _components_form_bill_form_bill_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/form-bill/form-bill.component */ "./src/app/modules/bill/components/form-bill/form-bill.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/modules/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _components_query_bills_query_bills_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/query-bills/query-bills.component */ "./src/app/modules/bill/components/query-bills/query-bills.component.ts");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ag-grid-angular */ "./node_modules/ag-grid-angular/main.js");
/* harmony import */ var ag_grid_angular__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ag_grid_angular__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var ngx_currency__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-currency */ "./node_modules/ngx-currency/index.js");
/* harmony import */ var _components_change_bill_change_bill_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/change-bill/change-bill.component */ "./src/app/modules/bill/components/change-bill/change-bill.component.ts");













const routes = [{
        path: '',
        children: [{
                path: 'new',
                component: _components_form_bill_form_bill_component__WEBPACK_IMPORTED_MODULE_3__["FormBillComponent"]
            },
            {
                path: 'query',
                component: _components_query_bills_query_bills_component__WEBPACK_IMPORTED_MODULE_8__["QueryBillsComponent"]
            }]
    }];
let BillModule = class BillModule {
};
BillModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _components_form_bill_form_bill_component__WEBPACK_IMPORTED_MODULE_3__["FormBillComponent"],
            _components_query_bills_query_bills_component__WEBPACK_IMPORTED_MODULE_8__["QueryBillsComponent"],
            _components_change_bill_change_bill_component__WEBPACK_IMPORTED_MODULE_12__["ChangeBillComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            ag_grid_angular__WEBPACK_IMPORTED_MODULE_9__["AgGridModule"].withComponents([]),
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDatepickerModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbDropdownModule"],
            ngx_currency__WEBPACK_IMPORTED_MODULE_11__["NgxCurrencyModule"]
        ],
        exports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]
        ],
        entryComponents: [_components_change_bill_change_bill_component__WEBPACK_IMPORTED_MODULE_12__["ChangeBillComponent"]]
    })
], BillModule);



/***/ }),

/***/ "./src/app/modules/bill/components/change-bill/change-bill.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/bill/components/change-bill/change-bill.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYmlsbC9jb21wb25lbnRzL2NoYW5nZS1iaWxsL2NoYW5nZS1iaWxsLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/bill/components/change-bill/change-bill.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/bill/components/change-bill/change-bill.component.ts ***!
  \******************************************************************************/
/*! exports provided: ChangeBillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeBillComponent", function() { return ChangeBillComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_modules_lookup_services_lookup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/lookup/services/lookup.service */ "./src/app/modules/lookup/services/lookup.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_bill_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/bill.service */ "./src/app/modules/bill/services/bill.service.ts");






let ChangeBillComponent = class ChangeBillComponent {
    constructor(lookup, activeModal, billService) {
        this.lookup = lookup;
        this.activeModal = activeModal;
        this.billService = billService;
    }
    save() {
        if (this.type === 'payment' && this.value) {
            this.billService.changePaymentMethod(this.idBill, this.paymentId).subscribe((sucess) => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Sucesso...', 'Meio de pagamento alterado com sucesso!', 'success');
                this.activeModal.close();
            }, (error) => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Opps...', error.error ? error.error : 'Ocorreu uma falha ao alterar o meio de pagamento!', 'error');
                console.log('Falha ao cadastrar o lançamento', error);
            });
        }
        else if (this.type === 'duedate' && this.dueDate) {
            const formattedDate = this.getStringDateFromNgbDate(this.dueDate);
            this.billService.changeDueDate(this.idBill, formattedDate).subscribe((sucess) => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Sucesso...', 'Data de vencimento alterada com sucesso!', 'success');
                this.activeModal.close();
            }, (error) => {
                // Swal.fire('Opps...', 'Ocorreu uma falha ao alterar a data de vencimento!', 'error');
                // Swal.fire({type: 'error', title: 'Oops...', text: 'Falha ao alterar a data de vencimento'});
                console.log('Falha ao cadastrar o lançamento');
                this.activeModal.close();
            });
        }
        else if (this.type === 'value' && this.value) {
            this.billService.changeValue(this.idBill, this.value).subscribe((sucess) => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Sucesso...', 'Valor alterado com sucesso!', 'success');
                this.activeModal.close();
            }, (error) => {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Opps...', error.error ? error.error : 'Ocorreu uma falha ao alterar o valor!', 'error');
                console.log('Falha ao cadastrar o lançamento', error);
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Atenção...', 'Preencha o campo corretamente!', 'warning');
        }
    }
    cancel() {
        this.billService.cancel(this.idBill).subscribe((sucess) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Sucesso...', 'Lançamento cancelado com sucesso!', 'success');
            this.activeModal.close();
        }, (error) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Opps...', error.error ? error.error : 'Ocorreu uma falha ao cancelar o lançamento!', 'error');
            console.log('Falha ao falha ao cancelar o lançamento', error);
        });
    }
    pay() {
        this.billService.makeRetirement(this.idBill).subscribe((sucess) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Sucesso...', 'Lançamento baixado com sucesso!', 'success');
            this.activeModal.close();
        }, (error) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Opps...', error.error ? error.error : 'Ocorreu uma falha ao baixar o lançamento!', 'error');
            console.log('Falha ao baixar o lançamento', error);
        });
    }
    getStringDateFromNgbDate(ngb) {
        return `${ngb.year}-${ngb.month}-${ngb.day}`;
    }
    ngOnInit() {
        // const today = new Date(Date.now());
        // this.dueDate = new NgbDate(today.getFullYear(), today.getMonth(), today.getDay());
        if (this.type === 'payment') {
            this.customers = this.lookup.getCustomers();
        }
    }
};
ChangeBillComponent.ctorParameters = () => [
    { type: src_app_modules_lookup_services_lookup_service__WEBPACK_IMPORTED_MODULE_2__["LookupService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbActiveModal"] },
    { type: _services_bill_service__WEBPACK_IMPORTED_MODULE_5__["BillService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChangeBillComponent.prototype, "type", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ChangeBillComponent.prototype, "idBill", void 0);
ChangeBillComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-change-bill',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./change-bill.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/bill/components/change-bill/change-bill.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./change-bill.component.scss */ "./src/app/modules/bill/components/change-bill/change-bill.component.scss")).default]
    })
], ChangeBillComponent);



/***/ }),

/***/ "./src/app/modules/bill/components/form-bill/form-bill.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/modules/bill/components/form-bill/form-bill.component.scss ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYmlsbC9jb21wb25lbnRzL2Zvcm0tYmlsbC9mb3JtLWJpbGwuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/bill/components/form-bill/form-bill.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/bill/components/form-bill/form-bill.component.ts ***!
  \**************************************************************************/
/*! exports provided: FormBillComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormBillComponent", function() { return FormBillComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_modules_lookup_services_lookup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/modules/lookup/services/lookup.service */ "./src/app/modules/lookup/services/lookup.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _services_bill_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/bill.service */ "./src/app/modules/bill/services/bill.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");







let FormBillComponent = class FormBillComponent {
    constructor(lookup, fb, billService, router) {
        this.lookup = lookup;
        this.fb = fb;
        this.billService = billService;
        this.router = router;
        this.subscriptions = new Array();
    }
    buildForm() {
        this.billForm = this.fb.group({
            paymentMethodSysId: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                ]],
            value: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                ]],
            destiny: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                ]],
            dueDate: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                ]],
            description: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                ]]
        });
    }
    submmit(continueForm = false) {
        if (!this.billForm.valid) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Atenção...', 'Preencha todos os campos do formulario!', 'warning');
            return;
        }
        const newService = this.billForm.value;
        newService.dueDate = this.getStringDateFromNgbDate(this.billForm.value.dueDate);
        this.subscriptions.push(this.billService.new(newService).subscribe((sucess) => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.fire('Sucesso...', 'Lançamento cadastrado com sucesso', 'success');
            if (!continueForm) {
                return this.router.navigate(['/dashboard']);
            }
            this.billForm.reset();
        }));
    }
    getStringDateFromNgbDate(ngb) {
        return `${ngb.year}-${ngb.month}-${ngb.day}`;
    }
    ngOnInit() {
        this.buildForm();
        this.paymentMethods = this.lookup.getPaymentMethod();
    }
    ngOnDestroy() {
        this.subscriptions.forEach(sub => {
            sub.unsubscribe();
        });
    }
};
FormBillComponent.ctorParameters = () => [
    { type: src_app_modules_lookup_services_lookup_service__WEBPACK_IMPORTED_MODULE_2__["LookupService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _services_bill_service__WEBPACK_IMPORTED_MODULE_5__["BillService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
];
FormBillComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'form-bill',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./form-bill.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/bill/components/form-bill/form-bill.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./form-bill.component.scss */ "./src/app/modules/bill/components/form-bill/form-bill.component.scss")).default]
    })
], FormBillComponent);



/***/ }),

/***/ "./src/app/modules/bill/components/query-bills/query-bills.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/modules/bill/components/query-bills/query-bills.component.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYmlsbC9jb21wb25lbnRzL3F1ZXJ5LWJpbGxzL3F1ZXJ5LWJpbGxzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/bill/components/query-bills/query-bills.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/bill/components/query-bills/query-bills.component.ts ***!
  \******************************************************************************/
/*! exports provided: QueryBillsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryBillsComponent", function() { return QueryBillsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_bill_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/bill.service */ "./src/app/modules/bill/services/bill.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_modules_ui_services_loading_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/ui/services/loading.service */ "./src/app/modules/ui/services/loading.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_modules_shared_services_ag_grid_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/modules/shared/services/ag-grid-helper.service */ "./src/app/modules/shared/services/ag-grid-helper.service.ts");
/* harmony import */ var src_app_modules_ui_services_notify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/modules/ui/services/notify.service */ "./src/app/modules/ui/services/notify.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _change_bill_change_bill_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../change-bill/change-bill.component */ "./src/app/modules/bill/components/change-bill/change-bill.component.ts");











let QueryBillsComponent = class QueryBillsComponent {
    constructor(billService, fb, loading, agGridHelper, notify, modalService) {
        this.billService = billService;
        this.fb = fb;
        this.loading = loading;
        this.agGridHelper = agGridHelper;
        this.notify = notify;
        this.modalService = modalService;
        this.showSpinner = false;
        this.datePipe = new _angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]('en-US');
        this.columnDefs = [
            { headerName: 'ID Lançamento', field: 'id', sortable: true, filter: true },
            { headerName: 'Meio de Pagamento', field: 'paymentMethod.description', sortable: true, filter: true },
            { headerName: 'Valor R$', field: 'value', sortable: true, filter: true, valueFormatter: this.agGridHelper.currencyFormatter },
            { headerName: 'Destino', field: 'destiny', sortable: true, filter: true },
            { headerName: 'Status', field: 'computedStatus', sortable: true, filter: true },
            { headerName: 'Descrição', field: 'description', sortable: true, filter: false },
            {
                headerName: 'Pago?', field: 'paid', sortable: true, filter: true, cellRenderer: params => {
                    return `<input type='checkbox' ${params.value ? 'checked' : ''} />`;
                }
            },
            {
                headerName: 'Dt. Vencimento', field: 'dueDate', sortable: true, filter: true, valueFormatter: this.agGridHelper.dateFormatter
            },
            {
                headerName: 'Dt. Pagamento', field: 'payDate', sortable: true, filter: true, valueFormatter: this.agGridHelper.dateFormatter
            },
            { headerName: 'Dt. Reversão', field: 'reversalDate', sortable: true, filter: true },
            {
                headerName: 'Dt. Cancelamento', field: 'cancelDate', sortable: true, filter: true, valueFormatter: this.agGridHelper.dateFormatter
            }
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
            destiny: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required,
                ]],
        });
    }
    search() {
        if (!this.searchForm.valid) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire('Atenção...', 'Preencha o formulario corretamente!', 'warning');
            return;
        }
        this.loading.showHide(true);
        this.rowData = this.billService.getByDate(this.getStringDateFromNgbDate(this.searchForm.value.startDate), this.getStringDateFromNgbDate(this.searchForm.value.endDate), this.searchForm.value.destiny);
        this.subscription = this.rowData.subscribe(() => this.loading.showHide(false), (error) => {
            this.loading.showHide(false);
            sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire('Opps...', 'Ocorreu um erro ao buscar os lançamento financeiros', 'error');
            console.error(error);
        });
    }
    open(type) {
        if (!this.selectedRow) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_9___default.a.fire('Opps...', 'Nenhum registro selecionado!', 'warning');
            return;
        }
        const modalRef = this.modalService.open(_change_bill_change_bill_component__WEBPACK_IMPORTED_MODULE_10__["ChangeBillComponent"]);
        modalRef.componentInstance.type = type;
        modalRef.componentInstance.idBill = this.selectedRow.id;
        modalRef.result.then(() => {
            this.search();
        }, () => {
        });
    }
    getStringDateFromNgbDate(ngb) {
        return `${ngb.year}-${ngb.month}-${ngb.day}`;
    }
    onRowSelected(event) {
        this.selectedRow = event.data;
    }
    ngOnInit() {
        this.buildForm();
    }
    ngOnDestroy() {
        if (this.subscription != null) {
            this.subscription.unsubscribe();
        }
    }
};
QueryBillsComponent.ctorParameters = () => [
    { type: _services_bill_service__WEBPACK_IMPORTED_MODULE_2__["BillService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_modules_ui_services_loading_service__WEBPACK_IMPORTED_MODULE_4__["LoadingService"] },
    { type: src_app_modules_shared_services_ag_grid_helper_service__WEBPACK_IMPORTED_MODULE_6__["AgGridHelperService"] },
    { type: src_app_modules_ui_services_notify_service__WEBPACK_IMPORTED_MODULE_7__["NotifyService"] },
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"] }
];
QueryBillsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-query-bills',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./query-bills.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/bill/components/query-bills/query-bills.component.html")).default,
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDropdownConfig"]],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./query-bills.component.scss */ "./src/app/modules/bill/components/query-bills/query-bills.component.scss")).default]
    })
], QueryBillsComponent);



/***/ })

}]);
//# sourceMappingURL=modules-bill-bill-module-es2015.js.map