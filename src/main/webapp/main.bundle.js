webpackJsonp([1,4],{

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BankService = (function () {
    function BankService(http) {
        this.http = http;
        this.urlBank = 'bank/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
    }
    BankService.prototype.getBankById = function (bankId) {
        this.params.set('bankId', bankId.toString());
        return this.http.get(this.urlBank + bankId, { headers: this.headers, search: this.params }).map(function (res) { return res.json(); });
    };
    return BankService;
}());
BankService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], BankService);

var _a;
//# sourceMappingURL=bank.service.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillToPayAmountsPaid; });
var BillToPayAmountsPaid = (function () {
    function BillToPayAmountsPaid() {
    }
    return BillToPayAmountsPaid;
}());

//# sourceMappingURL=bill-to-pay-amounts-paid.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__billet_shipping__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_client_client__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__billet_shipping_service__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_client_client_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BilletPaymentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var BilletPaymentComponent = (function () {
    function BilletPaymentComponent(elementRef, route, billetService, clientService) {
        var _this = this;
        this.elementRef = elementRef;
        this.route = route;
        this.billetService = billetService;
        this.clientService = clientService;
        this.codeBar = "";
        billetService.getBilletById(this.route.snapshot.params["billetId"]).subscribe(function (result) {
            _this.billetShipping = result;
            _this.billetShipping.isCancel = false;
            _this.billetShipping.partialPayment = "NAO";
            if (_this.billetShipping !== null && _this.billetShipping !== undefined) {
                clientService.view(_this.billetShipping.clientId).subscribe(function (client) {
                    _this.client = client;
                    // this.generateCodeBarCaixa(this.generateQrCode(this.print()));
                });
            }
        });
    }
    BilletPaymentComponent.prototype.getMaturityDate = function (date) {
        return __WEBPACK_IMPORTED_MODULE_1_moment__(date).add(1, 'd').format('DD/MM/YYYY');
    };
    BilletPaymentComponent.prototype.getCurrentDate = function () {
        return __WEBPACK_IMPORTED_MODULE_1_moment__().format('DD/MM/YYYY');
    };
    return BilletPaymentComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__billet_shipping__["a" /* BilletShipping */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__billet_shipping__["a" /* BilletShipping */]) === "function" && _a || Object)
], BilletPaymentComponent.prototype, "billetShipping", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__search_client_client__["a" /* Client */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__search_client_client__["a" /* Client */]) === "function" && _b || Object)
], BilletPaymentComponent.prototype, "client", void 0);
BilletPaymentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-billet-payment',
        template: __webpack_require__(455),
        styles: [__webpack_require__(410)]
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__billet_shipping_service__["a" /* BilletShippingService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__billet_shipping_service__["a" /* BilletShippingService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__search_client_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__search_client_client_service__["a" /* ClientService */]) === "function" && _f || Object])
], BilletPaymentComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=billet-payment.component.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BilletShippingService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BilletShippingService = (function () {
    function BilletShippingService(http) {
        this.http = http;
        this.urlBilletShipping = 'billet-shipping/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
    }
    BilletShippingService.prototype.create = function (billetShipping) {
        return this.http.post(this.urlBilletShipping, billetShipping, { headers: this.headers }).map(function (res) { return res.json(); });
    };
    BilletShippingService.prototype.getLastCounter = function () {
        return this.http.get(this.urlBilletShipping + "last", { headers: this.headers }).map(function (res) { return res.json(); });
    };
    BilletShippingService.prototype.getBilletById = function (billetId) {
        this.params.set('billetId', billetId);
        return this.http.get(this.urlBilletShipping + billetId, { headers: this.headers, search: this.params })
            .map(function (res) { return res.json(); });
    };
    return BilletShippingService;
}());
BilletShippingService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], BilletShippingService);

var _a;
//# sourceMappingURL=billet-shipping.service.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BilletShipping; });
var BilletShipping = (function () {
    function BilletShipping() {
        this.ourNumber = "";
    }
    return BilletShipping;
}());

//# sourceMappingURL=billet-shipping.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditCard; });
var CreditCard = (function () {
    function CreditCard() {
    }
    return CreditCard;
}());

//# sourceMappingURL=credit-card.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DebitCard; });
var DebitCard = (function () {
    function DebitCard() {
    }
    return DebitCard;
}());

//# sourceMappingURL=debit-card.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_client_client__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_client_client_service__ = __webpack_require__(18);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinancialComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FinancialComponent = (function () {
    function FinancialComponent(route, router, clientService) {
        this.route = route;
        this.router = router;
        this.clientService = clientService;
        this.client = new __WEBPACK_IMPORTED_MODULE_2__search_client_client__["a" /* Client */]();
    }
    FinancialComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientService.view(this.route.snapshot.params['clientId']).subscribe(function (result) {
            _this.client = result;
        });
    };
    FinancialComponent.prototype.goToSearchClient = function () {
        this.router.navigate(['/']);
    };
    return FinancialComponent;
}());
FinancialComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-financial',
        template: __webpack_require__(463),
        styles: [__webpack_require__(418)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__search_client_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__search_client_client_service__["a" /* ClientService */]) === "function" && _c || Object])
], FinancialComponent);

var _a, _b, _c;
//# sourceMappingURL=financial.component.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeInterestChargeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TypeInterestChargeService = (function () {
    function TypeInterestChargeService(http) {
        this.http = http;
        this.urlTypeInterestBillToPay = 'type-interest/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
    }
    TypeInterestChargeService.prototype.getByType = function (type) {
        this.params.set('type', type);
        return this.http.get(this.urlTypeInterestBillToPay, { search: this.params, headers: this.headers }).map(function (res) { return res.json(); });
    };
    return TypeInterestChargeService;
}());
TypeInterestChargeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], TypeInterestChargeService);

var _a;
//# sourceMappingURL=type-interest-charge.service.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__client_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchClientComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchClientComponent = (function () {
    function SearchClientComponent(clientService, router) {
        this.clientService = clientService;
        this.router = router;
        this.maskCNPJ = [/[0-9]/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/',
            /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
        this.clientCnpj = '';
        this.searchClientError = '';
        this.routerLink = router;
    }
    SearchClientComponent.prototype.searchClient = function () {
        var _this = this;
        this.clientService.getClientIdByCNPJ(this.clientCnpj).subscribe(function (result) {
            _this.routerLink.navigate(['/financeiro', result]);
        }, function (error) {
            _this.searchClientError = error.json().message;
            setTimeout(function () {
                _this.searchClientError = '';
            }, 2000);
        });
    };
    return SearchClientComponent;
}());
SearchClientComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-search-client',
        template: __webpack_require__(466),
        styles: [__webpack_require__(421)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__client_service__["a" /* ClientService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], SearchClientComponent);

var _a, _b;
//# sourceMappingURL=search-client.component.js.map

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientService = (function () {
    function ClientService(http) {
        this.http = http;
        this.urlClient = 'client/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
    }
    ClientService.prototype.getClientIdByCNPJ = function (cnpj) {
        this.params.set('cnpj', cnpj);
        return this.http.get(this.urlClient, { headers: this.headers, search: this.params }).map(function (res) { return res.json(); });
    };
    ClientService.prototype.view = function (clientId) {
        this.params.set('clientId', clientId.toString());
        return this.http.get(this.urlClient + clientId, { headers: this.headers, search: this.params }).map(function (res) { return res.json(); });
    };
    return ClientService;
}());
ClientService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ClientService);

var _a;
//# sourceMappingURL=client.service.js.map

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillToPayService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BillToPayService = (function () {
    function BillToPayService(http) {
        this.http = http;
        this.urlBillToPay = 'bill-to-pay/';
        this.urlSandBox = 'https://apisandbox.cieloecommerce.cielo.com.br/1/sales';
        this.urlSandBoxCard = 'https://apisandbox.cieloecommerce.cielo.com.br/1/card';
        this.urlCieloProduction = "https://api.cieloecommerce.cielo.com.br/1/sales/";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
    }
    BillToPayService.prototype.listByClientId = function (clientId, isBillToPay) {
        this.params.set('clientId', clientId.toString());
        this.params.set('isBillToPay', isBillToPay);
        return this.http.get(this.urlBillToPay + clientId, { headers: this.headers, search: this.params })
            .map(function (res) { return res.json(); });
    };
    BillToPayService.prototype.paymentCreditCard = function (payment) {
        this.params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        this.setMerchantIdAndKey();
        return this.http.post(this.urlCieloProduction, payment, { headers: this.headers, search: this.params })
            .map(function (res) { return res.json(); });
    };
    BillToPayService.prototype.paymentDebitCard = function (payment) {
        this.params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
        this.setMerchantIdAndKey();
        return this.http.post(this.urlCieloProduction, payment, { headers: this.headers, search: this.params })
            .map(function (res) { return res.json(); });
    };
    BillToPayService.prototype.createCardToken = function (cardTokenRequest) {
        this.setMerchantIdAndKey();
        return this.http.post(this.urlSandBoxCard, cardTokenRequest, { headers: this.headers }).map(function (res) { return res.json(); });
    };
    BillToPayService.prototype.setMerchantIdAndKey = function () {
        //teste
        /*this.headers.set('MerchantId', 'fe17c77b-df00-4ad4-a8e7-378dfc41cf96');
        this.headers.set('MerchantKey', 'TCCBVGXPLLJHJFGQBFPDUWFBNSPLLJTAZAMXJWJK');*/
        //produção
        this.headers.set('MerchantId', '75668c3e-f66f-41b2-83ef-77f0d94e32f1');
        this.headers.set('MerchantKey', 'KbKRY5d1iNuoTsOgpzKAwuFtfyyET6lIc6QKBvjH');
    };
    return BillToPayService;
}());
BillToPayService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], BillToPayService);

var _a;
//# sourceMappingURL=bill-to-pay.service.js.map

/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__credit_card_payment_credit_card__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__debit_card_payment_debit_card__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__recurrent_payment_recurrent_payment__ = __webpack_require__(351);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Payment; });



var Payment = (function () {
    function Payment() {
        this.CreditCard = new __WEBPACK_IMPORTED_MODULE_0__credit_card_payment_credit_card__["a" /* CreditCard */]();
        this.DebitCard = new __WEBPACK_IMPORTED_MODULE_1__debit_card_payment_debit_card__["a" /* DebitCard */]();
        this.RecurrentPayment = new __WEBPACK_IMPORTED_MODULE_2__recurrent_payment_recurrent_payment__["a" /* RecurrentPayment */]();
    }
    return Payment;
}());

//# sourceMappingURL=payment.js.map

/***/ }),

/***/ 332:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 332;


/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(354);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 338:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(router) {
        this.router = router;
        this.routerLink = router;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(454),
        styles: [__webpack_require__(409)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__financial_financial_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_client_search_client_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_text_mask__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angular2_text_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_routes__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__search_client_client_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__financial_bills_to_pay_bills_to_pay_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__financial_paid_bills_paid_bills_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__financial_bills_to_pay_bill_to_pay_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_pagination__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__financial_bills_to_pay_debit_card_payment_debit_card_payment_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__financial_bills_to_pay_credit_card_payment_credit_card_payment_component__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_ng2_toasty__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__financial_bills_to_pay_billet_payment_billet_payment_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__financial_type_interest_charge_service__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__financial_bills_to_pay_recurrent_payment_recurrent_payment_component__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__financial_bills_to_pay_bill_to_pay_amounts_paid_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__financial_bills_to_pay_bill_to_pay_payment_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__financial_bills_to_pay_cielo_payment_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_ng2_slim_loading_bar__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__financial_bills_to_pay_billet_payment_billet_shipping_service__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__financial_for_sale_for_sale_component__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ng2_currency_mask__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_ng2_currency_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_27_ng2_currency_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_common__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__financial_bills_to_pay_modal_late_billet_modal_late_billet_component__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__financial_bills_to_pay_bank_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__financial_bills_to_pay_modal_choose_print_type_modal_choose_print_type_component__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__financial_bills_to_pay_info_billet_late_info_billet_late_component__ = __webpack_require__(347);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__financial_financial_component__["a" /* FinancialComponent */],
            __WEBPACK_IMPORTED_MODULE_6__search_client_search_client_component__["a" /* SearchClientComponent */],
            __WEBPACK_IMPORTED_MODULE_11__financial_bills_to_pay_bills_to_pay_component__["a" /* BillsToPayComponent */],
            __WEBPACK_IMPORTED_MODULE_12__financial_paid_bills_paid_bills_component__["a" /* PaidBillsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__financial_bills_to_pay_debit_card_payment_debit_card_payment_component__["a" /* DebitCardPaymentComponent */],
            __WEBPACK_IMPORTED_MODULE_16__financial_bills_to_pay_credit_card_payment_credit_card_payment_component__["a" /* CreditCardPaymentComponent */],
            __WEBPACK_IMPORTED_MODULE_18__financial_bills_to_pay_billet_payment_billet_payment_component__["a" /* BilletPaymentComponent */],
            __WEBPACK_IMPORTED_MODULE_20__financial_bills_to_pay_recurrent_payment_recurrent_payment_component__["a" /* RecurrentPaymentComponent */],
            __WEBPACK_IMPORTED_MODULE_26__financial_for_sale_for_sale_component__["a" /* ForSaleComponent */],
            __WEBPACK_IMPORTED_MODULE_29__financial_bills_to_pay_modal_late_billet_modal_late_billet_component__["a" /* ModalLateBilletComponent */],
            __WEBPACK_IMPORTED_MODULE_31__financial_bills_to_pay_modal_choose_print_type_modal_choose_print_type_component__["a" /* ModalChoosePrintTypeComponent */],
            __WEBPACK_IMPORTED_MODULE_32__financial_bills_to_pay_info_billet_late_info_billet_late_component__["a" /* InfoBilletLateComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_28__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7_angular2_text_mask__["TextMaskModule"],
            __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap__["a" /* TabsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_14_ngx_pagination__["a" /* NgxPaginationModule */],
            __WEBPACK_IMPORTED_MODULE_8__app_routes__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_17_ng2_toasty__["a" /* ToastyModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_24_ng2_slim_loading_bar__["a" /* SlimLoadingBarModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_10_ngx_bootstrap__["b" /* ModalModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_27_ng2_currency_mask__["CurrencyMaskModule"]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__search_client_client_service__["a" /* ClientService */], __WEBPACK_IMPORTED_MODULE_13__financial_bills_to_pay_bill_to_pay_service__["a" /* BillToPayService */], __WEBPACK_IMPORTED_MODULE_19__financial_type_interest_charge_service__["a" /* TypeInterestChargeService */], __WEBPACK_IMPORTED_MODULE_21__financial_bills_to_pay_bill_to_pay_amounts_paid_service__["a" /* BillToPayAmountsPaidService */],
            __WEBPACK_IMPORTED_MODULE_22__financial_bills_to_pay_bill_to_pay_payment_service__["a" /* BillToPayPaymentService */], __WEBPACK_IMPORTED_MODULE_23__financial_bills_to_pay_cielo_payment_service__["a" /* CieloPaymentService */], __WEBPACK_IMPORTED_MODULE_25__financial_bills_to_pay_billet_payment_billet_shipping_service__["a" /* BilletShippingService */], __WEBPACK_IMPORTED_MODULE_30__financial_bills_to_pay_bank_service__["a" /* BankService */], { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["LOCALE_ID"], useValue: 'pt-BR' }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__financial_financial_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_client_search_client_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__financial_bills_to_pay_billet_payment_billet_payment_component__ = __webpack_require__(122);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });




var APP_ROUTES = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__search_client_search_client_component__["a" /* SearchClientComponent */] },
    // { path: '**', redirectTo: ''},
    { path: 'billet/:billetId', component: __WEBPACK_IMPORTED_MODULE_3__financial_bills_to_pay_billet_payment_billet_payment_component__["a" /* BilletPaymentComponent */] },
    { path: 'financeiro/:clientId', component: __WEBPACK_IMPORTED_MODULE_1__financial_financial_component__["a" /* FinancialComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(APP_ROUTES);
//# sourceMappingURL=app.routes.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bank; });
var Bank = (function () {
    function Bank() {
    }
    return Bank;
}());

//# sourceMappingURL=bank.js.map

/***/ }),

/***/ 342:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bill_to_pay_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__payment__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__type_interest_charge_service__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_client_client_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__search_client_client__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__bank_service__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_slim_loading_bar__ = __webpack_require__(37);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillsToPayComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












var BillsToPayComponent = (function () {
    function BillsToPayComponent(route, service, elementRef, bankService, typeInterestService, clientService, slimLoadingBarService) {
        var _this = this;
        this.route = route;
        this.service = service;
        this.elementRef = elementRef;
        this.bankService = bankService;
        this.typeInterestService = typeInterestService;
        this.clientService = clientService;
        this.slimLoadingBarService = slimLoadingBarService;
        this.listBillToPayPayment = [];
        this.listSelectedBillToPayPayment = [];
        this.isPaymentSelected = false;
        this.totalPayment = 0;
        this.paymentMethod = '';
        this.ourNumber = "";
        this.codeBar = "";
        this.client = new __WEBPACK_IMPORTED_MODULE_8__search_client_client__["a" /* Client */]();
        this.payment = new __WEBPACK_IMPORTED_MODULE_4__payment__["a" /* Payment */]();
        //TODO: remover
        this.paymentMethod = 'BILLET';
        this.clientService.view(this.route.snapshot.params["clientId"]).subscribe(function (client) {
            _this.client = client;
        });
        this.typeInterestService.getByType('MENSALIDADE').subscribe(function (result) {
            _this.typeInterestCharge = result;
        });
        this.slimLoadingBarService.start();
        this.service.listByClientId(this.route.snapshot.params["clientId"], 'NAO').subscribe(function (result) {
            _this.listBillToPayPayment = result;
            if (_this.listBillToPayPayment !== undefined && _this.listBillToPayPayment.length > 0) {
                _this.listBillToPayPayment.forEach(function (billToPayPayment) {
                    _this.isDateLessOrEqualThanToday(billToPayPayment);
                    _this.calculateInterests(billToPayPayment);
                });
            }
            _this.stopSlimLoadBar();
        }, function (error) {
            _this.stopSlimLoadBar();
        });
    }
    BillsToPayComponent.prototype.stopSlimLoadBar = function () {
        this.slimLoadingBarService.stop();
        this.slimLoadingBarService.complete();
    };
    BillsToPayComponent.prototype.payBills = function () {
        this.isPaymentSelected = true;
        this.listSelectedBillToPayPayment = [];
        for (var i = 0; i < this.listBillToPayPayment.length; i++) {
            var billToPayPayment = this.listBillToPayPayment[i];
            if (billToPayPayment.isChecked) {
                this.totalPayment += billToPayPayment.subTotal;
                this.listSelectedBillToPayPayment.push(billToPayPayment);
            }
        }
    };
    BillsToPayComponent.prototype.getConvertedDate = function (date) {
        return __WEBPACK_IMPORTED_MODULE_3_moment__(date).add(1, 'd').format('DD/MM/YYYY');
    };
    BillsToPayComponent.prototype.isDateLessOrEqualThanToday = function (billToPayPayment) {
        billToPayPayment.isChecked = false;
        if (billToPayPayment.maturity === (__WEBPACK_IMPORTED_MODULE_3_moment__().subtract(1, 'd').format('YYYY-MM-DD'))) {
            billToPayPayment.isChecked = true;
            billToPayPayment.dateStatus = 'IS_SAME';
        }
        if (__WEBPACK_IMPORTED_MODULE_3_moment__(billToPayPayment.maturity).isBefore(__WEBPACK_IMPORTED_MODULE_3_moment__().subtract(1, 'd'))) {
            billToPayPayment.isChecked = true;
            billToPayPayment.dateStatus = 'IS_BEFORE';
        }
    };
    BillsToPayComponent.prototype.calculateInterests = function (billToPayment) {
        billToPayment.amountInterest = (billToPayment.amount / 100) * 1;
        var year = __WEBPACK_IMPORTED_MODULE_3_moment__(billToPayment.maturity).add(1, 'd').year();
        var month = __WEBPACK_IMPORTED_MODULE_3_moment__(billToPayment.maturity).add(1, 'd').month();
        var day = __WEBPACK_IMPORTED_MODULE_3_moment__(billToPayment.maturity).add(1, 'd').date();
        var now = __WEBPACK_IMPORTED_MODULE_3_moment__();
        var monthInArrears = parseInt(__WEBPACK_IMPORTED_MODULE_3_moment__([now.year(), now.month(), now.date()]).diff(__WEBPACK_IMPORTED_MODULE_3_moment__([year, month, day]), 'months', true).toString(), 10);
        var daysInArrears = parseInt(__WEBPACK_IMPORTED_MODULE_3_moment__().diff(__WEBPACK_IMPORTED_MODULE_3_moment__(billToPayment.maturity).add(1, 'd'), 'days').toString(), 10);
        billToPayment.daysInArrears = daysInArrears;
        var chargesInDayMonths = [];
        if (daysInArrears !== undefined && daysInArrears > 0) {
            billToPayment.amountInterest = (billToPayment.amount / 100) * this.typeInterestCharge.percentInterest;
            billToPayment.amountCharges = 0.0;
            for (var i = 0; i < daysInArrears; i++) {
                billToPayment.amountCharges += (billToPayment.amount / 100) * this.typeInterestCharge.percentCharges;
                if (monthInArrears !== undefined && monthInArrears > 0 && i > 28 && __WEBPACK_IMPORTED_MODULE_3_moment__(billToPayment.maturity).add(i + 1, 'd').date() === day) {
                    chargesInDayMonths.push(billToPayment.amountCharges);
                }
            }
            billToPayment.amountLiveDays = 0.0;
            if (chargesInDayMonths.length > 0) {
                billToPayment.amountLiveDays = ((billToPayment.amount / 100) * (this.typeInterestCharge.percentLiveDays * billToPayment.daysInArrears));
            }
            billToPayment.subTotal = billToPayment.amount + billToPayment.amountInterest + billToPayment.amountLiveDays + billToPayment.amountCharges;
        }
        else {
            billToPayment.subTotal = billToPayment.amount;
        }
    };
    BillsToPayComponent.prototype.generateBillet = function (billetShipping, bankId) {
        var _this = this;
        document.getElementById('ifrOutput').style.display = 'block';
        __WEBPACK_IMPORTED_MODULE_6_jquery__('#btnPrintBillet_' + billetShipping.id).prop('disabled', true);
        this.billetShipping = Object.assign({}, billetShipping);
        this.billetShipping.clientId = this.route.snapshot.params["clientId"];
        this.billetShipping.isCancel = false;
        var paymentTypes = "";
        for (var i = 0; i < this.listSelectedBillToPayPayment.length; i++) {
            if (i < this.listSelectedBillToPayPayment.length - 1) {
                paymentTypes += this.listSelectedBillToPayPayment[i].description + ", ";
            }
            else {
                paymentTypes += this.listSelectedBillToPayPayment[i].description;
            }
        }
        this.billetShipping.chargingType = paymentTypes;
        this.billetShipping.partialPayment = "NAO";
        this.billetShipping.documentNumber = this.ourNumber.substring(this.ourNumber.length - 7, this.ourNumber.length - 2);
        this.codeBar = "";
        // this.printBillet();
        this.bankService.getBankById(bankId).subscribe(function (bank) {
            _this.bank = bank;
            _this.generateCodeBarCaixa(_this.generateQrCode(_this.print()));
        });
        /*setTimeout(() => {
          this.billetGenerated = true;
          this.generateQrBarCode();
          // this.printBillet();
        }, 500);*/
    };
    BillsToPayComponent.prototype.generateCodeBarCaixa = function (callback) {
        // Posição 1-3 -> Identificação do banco (104)
        // Posição 4 -> Código da moeda (9 - Real)
        var codeBarToReturn = "";
        // Posição 06 - 09 -> Fator de Vencimento
        var maturityFactor = this.getMaturityFactor(this.billetShipping.maturityDate);
        var billetValueCalculated = this.getBilletCodeBarValue(this.billetShipping.billValue).toString();
        // 20 – 25 6 9 (6) Código do Beneficiário
        var benefictCode = "377192";
        // 26 – 26 1 9 (1) DV do Código do Beneficiário
        var dvBenefictCode = this.getVerifyDigitBeneficiaryCode(benefictCode);
        // 27 – 29 3 9 (3) Nosso Número - Seqüência 1
        codeBarToReturn += this.billetShipping.ourNumber.substring(0, 2);
        // 30 – 30 1 9 (1) Constante 1
        codeBarToReturn += "1";
        // 31 – 33 3 9 (3) Nosso Número - Seqüência 2
        codeBarToReturn += this.billetShipping.ourNumber.substring(3, 5);
        // 34 – 34 1 9 (1) Constante 2
        codeBarToReturn += "4";
        // 35 – 43 9 9 (9) Nosso Número - Seqüência 3
        codeBarToReturn += this.billetShipping.ourNumber.substring(6, this.billetShipping.ourNumber.length - 1);
        // 44 – 44 1 9 (1) DV do Campo Livre
        // Código do beneficiário -> 377192
        var dvFreeCamp = this.getFreeCampCodeBar("377192", dvBenefictCode.toString(), this.billetShipping.ourNumber);
        var generalVerifyDigit = this.getVerifyDigitGeneral(maturityFactor, billetValueCalculated, benefictCode, dvBenefictCode.toString(), this.billetShipping.ourNumber, dvFreeCamp);
        var field1 = "1049" + benefictCode.charAt(0) + "." + benefictCode.substring(1, 5) +
            this.getVerifyDigitFields123("1049" + benefictCode.charAt(0) + benefictCode.substring(1, 5));
        var field2 = benefictCode.charAt(benefictCode.length - 1) + dvBenefictCode + this.billetShipping.ourNumber.substring(0, 3)
            + ".1" + this.billetShipping.ourNumber.substring(3, 6) + "4" +
            this.getVerifyDigitFields123(benefictCode.charAt(benefictCode.length - 1) + dvBenefictCode +
                this.billetShipping.ourNumber.substring(0, 3) + "1" + this.billetShipping.ourNumber.substring(3, 6) + "4");
        var field3 = this.billetShipping.ourNumber.substring(6, 11) + "." +
            this.billetShipping.ourNumber.substring(11, this.billetShipping.ourNumber.length) + dvFreeCamp +
            this.getVerifyDigitFields123(this.billetShipping.ourNumber.substring(6, 11) +
                this.billetShipping.ourNumber.substring(11, this.billetShipping.ourNumber.length) + dvFreeCamp);
        codeBarToReturn = field1 + " " + field2 + " " + field3 + " " + generalVerifyDigit + " " + maturityFactor + billetValueCalculated;
        this.billetShipping.ourNumber = "14" + this.billetShipping.ourNumber + "-" +
            this.getVerifyDigitOurNumber("14" + this.billetShipping.ourNumber);
        this.codeBar = codeBarToReturn;
        if (callback) {
            callback();
        }
    };
    // CÁLCULO DO DÍGITO VERIFICADOR DA LINHA DIGITÁVEL (CAMPOS 1, 2 E 3)
    BillsToPayComponent.prototype.getVerifyDigitFields123 = function (strToCalc) {
        var toReturn = 0;
        var total = 0;
        strToCalc = strToCalc.split("").reverse().join("");
        for (var i = 0; i < strToCalc.length; i++) {
            if (i % 2 == 0 || i == 0) {
                if ((parseInt(strToCalc[i]) * 2).toString().split("").length == 2) {
                    var alg1 = parseInt((parseInt(strToCalc[i]) * 2).toString().split("")[0]);
                    var alg2 = parseInt((parseInt(strToCalc[i]) * 2).toString().split("")[1]);
                    total += (alg1 + alg2);
                }
                else {
                    total += parseInt(strToCalc[i]) * 2;
                }
            }
            else {
                total += parseInt(strToCalc[i]);
            }
        }
        if (total < 10) {
            toReturn = 10 - total;
        }
        var rest = total % 10;
        if (rest == 0) {
            toReturn = 0;
        }
        else {
            toReturn = 10 - rest;
        }
        return toReturn;
    };
    //  CALCULO DO DÍGITO VERIFICADOR GERAL DO CÓDIGO DE BARRAS
    BillsToPayComponent.prototype.getVerifyDigitGeneral = function (maturityFactor, billetValue, benefictCode, dvBenefictCode, ourNumber, dvFreeCamp) {
        var toReturn;
        var calcStrArray = ("1049" + maturityFactor + billetValue + benefictCode + dvBenefictCode + ourNumber.substring(0, 3)
            + "1" + ourNumber.substring(3, 6) + "4" + ourNumber.substring(6, ourNumber.length) + dvFreeCamp).split("");
        var total = 0;
        for (var i = 0; i < calcStrArray.length; i++) {
            if (i == 0 || i == 8 || i == 16 || i == 24 || i == 32 || i == 40) {
                total += parseInt(calcStrArray[i]) * 4;
            }
            if (i == 1 || i == 9 || i == 17 || i == 25 || i == 33 || i == 41) {
                total += parseInt(calcStrArray[i]) * 3;
            }
            if (i == 2 || i == 10 || i == 18 || i == 26 || i == 34 || i == 42) {
                total += parseInt(calcStrArray[i]) * 2;
            }
            if (i == 3 || i == 11 || i == 19 || i == 27 || i == 35 || i == 43) {
                total += parseInt(calcStrArray[i]) * 9;
            }
            if (i == 4 || i == 12 || i == 20 || i == 28 || i == 36) {
                total += parseInt(calcStrArray[i]) * 8;
            }
            if (i == 5 || i == 13 || i == 21 || i == 29 || i == 37) {
                total += parseInt(calcStrArray[i]) * 7;
            }
            if (i == 6 || i == 14 || i == 22 || i == 30 || i == 38) {
                total += parseInt(calcStrArray[i]) * 6;
            }
            if (i == 7 || i == 15 || i == 23 || i == 31 || i == 39) {
                total += parseInt(calcStrArray[i]) * 5;
            }
        }
        var rest = total % 11;
        if (rest !== undefined) {
            if ((11 - rest) > 9) {
                toReturn = 1;
            }
            else {
                toReturn = 11 - rest;
            }
        }
        return toReturn;
    };
    // Cálculo do fator de vencimento Posição: 06-09 - CAIXA
    BillsToPayComponent.prototype.getMaturityFactor = function (date) {
        return __WEBPACK_IMPORTED_MODULE_3_moment__(date).diff(__WEBPACK_IMPORTED_MODULE_3_moment__("1997-10-07"), 'days');
    };
    // Cálculo do digito verificador do código do beneficiário - CAIXA
    BillsToPayComponent.prototype.getVerifyDigitBeneficiaryCode = function (beneficiaryCode) {
        var toReturn;
        var beneficiaryCodeInverted = beneficiaryCode.split("").reverse().join("");
        var total = 0;
        for (var i = 0; i < beneficiaryCodeInverted.length; i++) {
            total += (parseInt(beneficiaryCodeInverted[i]) * (i + 2));
        }
        var rest = 0;
        if (total >= 11) {
            rest = total % 11;
            toReturn = (11 - rest);
        }
        else {
            toReturn = (11 - total);
        }
        if (toReturn > 9) {
            return 0;
        }
        return toReturn;
    };
    // CAMPO LIVRE DO CÓDIGO DE BARRAS
    BillsToPayComponent.prototype.getFreeCampCodeBar = function (beneficCode, dvBenefictCode, ourNumber) {
        var result;
        var strCalcFreeCamp = beneficCode + dvBenefictCode + ourNumber.substring(0, 3) + "1" + ourNumber.substring(3, 6) + "4" +
            ourNumber.substring(6, ourNumber.length);
        var strInverted = strCalcFreeCamp.split("").reverse().join("");
        var multiplicationIndex = 2;
        var total = 0;
        for (var i = 0; i < strInverted.length; i++) {
            if (i == 8 || i == 16) {
                multiplicationIndex = 2;
            }
            total += (parseInt(strInverted[i])) * multiplicationIndex;
            multiplicationIndex++;
        }
        if (total < 11) {
            result = total - 11;
        }
        else {
            var rest = total % 11;
            result = 11 - rest;
        }
        if (result > 9) {
            result = 0;
        }
        return result;
    };
    // Cálculo do valor (Posição: 10-19) - CAIXA
    BillsToPayComponent.prototype.getBilletCodeBarValue = function (billValue) {
        var toReturn = "";
        var cleanValueStr = "";
        if (billValue.toString().indexOf(".") == -1 && billValue.toString().indexOf(",") == -1) {
            for (var i = 0; i < (8 - billValue.toString().length); i++) {
                toReturn += "0";
            }
            toReturn += billValue;
            toReturn += "00";
        }
        else {
            cleanValueStr = billValue.toString().replace(".", "").replace(",", "");
            for (var i = 0; i < (10 - cleanValueStr.length); i++) {
                toReturn += "0";
            }
            toReturn += cleanValueStr;
        }
        return toReturn;
    };
    BillsToPayComponent.prototype.getVerifyDigitOurNumber = function (ourNumber) {
        var toReturn;
        var ourNumberInverted = ourNumber.split("").reverse().join("");
        var total = 0;
        var multiplicationIndex = 2;
        for (var i = 0; i < ourNumberInverted.length; i++) {
            if (i == 8 || i == 16) {
                multiplicationIndex = 2;
            }
            total += (parseInt(ourNumberInverted[i]) * multiplicationIndex);
            multiplicationIndex++;
        }
        var rest = total % 11;
        if ((11 - rest) > 9) {
            toReturn = 0;
        }
        else {
            toReturn = 11 - rest;
        }
        return toReturn;
    };
    BillsToPayComponent.prototype.generateQrCode = function (callback) {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "src/app/financial/bills-to-pay/generate_barcode_print_80mm.js";
        this.elementRef.nativeElement.appendChild(s);
        if (callback) {
            callback();
        }
    };
    BillsToPayComponent.prototype.generateBarCodeAndPrint80mm = function () {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "src/app/financial/bills-to-pay/generate_barcode_print_80mm.js";
        this.elementRef.nativeElement.appendChild(s);
    };
    BillsToPayComponent.prototype.generateBarCodeAndPrint = function () {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.src = "src/app/financial/bills-to-pay/generate_barcode_print.js";
        this.elementRef.nativeElement.appendChild(s);
    };
    BillsToPayComponent.prototype.getCurrentDate = function () {
        return __WEBPACK_IMPORTED_MODULE_3_moment__().format('DD/MM/YYYY');
    };
    BillsToPayComponent.prototype.getMaturityDate = function (date) {
        return __WEBPACK_IMPORTED_MODULE_3_moment__(date).add(1, 'd').format('DD/MM/YYYY');
    };
    BillsToPayComponent.prototype.print = function () {
        __WEBPACK_IMPORTED_MODULE_6_jquery__('#btnPrintBillet_' + this.billetShipping.id).prop('disabled', false);
        var s2 = document.createElement("script");
        s2.type = "text/javascript";
        s2.src = "src/app/financial/bills-to-pay/print-billet.js";
        this.elementRef.nativeElement.appendChild(s2);
    };
    BillsToPayComponent.prototype.print80mm = function () {
        __WEBPACK_IMPORTED_MODULE_6_jquery__('#btnPrintBillet_' + this.billetShipping.id).prop('disabled', false);
        var scriptPrintBillet80mm = document.createElement("script");
        scriptPrintBillet80mm.type = "text/javascript";
        scriptPrintBillet80mm.src = "src/app/financial/bills-to-pay/print-billet-80mm.js";
        this.elementRef.nativeElement.appendChild(scriptPrintBillet80mm);
    };
    BillsToPayComponent.prototype.generateCodeBar = function () {
        // Primeiro Grupo
        var codeBarFirstGroup = "033998548";
        var codeBarFirstGroupInverted = codeBarFirstGroup.split("").reverse().join("");
        var total = 0;
        for (var i = 0; i < codeBarFirstGroupInverted.length; i++) {
            var currentNumber = parseInt(codeBarFirstGroupInverted[i]);
            if (i == 4 && currentNumber == 9) {
                total += currentNumber;
            }
            else {
                if (i % 2 == 0) {
                    if (currentNumber * 2 > 10) {
                        var firstDigit = parseInt((currentNumber * 2).toString().split("")[0].toString());
                        var secondDigit = parseInt((currentNumber * 2).toString().split("")[1].toString());
                        total += (firstDigit + secondDigit);
                    }
                    else {
                        total += currentNumber * 2;
                    }
                }
                else {
                    total += currentNumber;
                }
            }
        }
        var digitRest = parseInt((total / 10).toString().split(".")[1]);
        codeBarFirstGroup += "." + (10 - digitRest);
        // Segundo Grupo
        var codeBarSecondGroup = "862" + this.ourNumber.substr(0, 7);
        var codeBarSecondGroupInverted = codeBarSecondGroup.split("").reverse().join("");
        var totalSecondGroup = 0;
        for (var j = 0; j < codeBarSecondGroupInverted.length; j++) {
            var currentNumber = parseInt(codeBarSecondGroupInverted[j]);
            if (j % 2 == 0) {
                totalSecondGroup += currentNumber * 2;
            }
            else {
                totalSecondGroup += currentNumber;
            }
        }
        var digitRestSecondGroup = parseInt((totalSecondGroup / 10).toString().split(".")[1]);
        codeBarSecondGroup += "." + (10 - digitRestSecondGroup);
        //Terceiro Grupo
        var codeBarThirdGroup = this.ourNumber.substr(7, 14);
        codeBarThirdGroup = codeBarThirdGroup.replace(/-/g, "");
        codeBarThirdGroup += "0101";
        var codeBarThirdGroupInverted = codeBarThirdGroup.split("").reverse().join("");
        var totalThirdGroup = 0;
        for (var k = 0; k < codeBarThirdGroupInverted.length; k++) {
            var currentNumberThirdGroup = parseInt(codeBarThirdGroupInverted[k]);
            if (k % 2 == 0) {
                totalThirdGroup += currentNumberThirdGroup * 2;
            }
            else {
                totalThirdGroup += currentNumberThirdGroup;
            }
        }
        var restDigitThirdGroup = (totalThirdGroup / 10).toString().split(".")[1] !== undefined ?
            parseInt((totalThirdGroup / 10).toString().split(".")[1]) : 0;
        restDigitThirdGroup = restDigitThirdGroup !== NaN ? restDigitThirdGroup : 0;
        codeBarThirdGroup += "." + (10 - restDigitThirdGroup);
        // Quarto Grupo - Digito Verificador
        var factorMaturity = __WEBPACK_IMPORTED_MODULE_3_moment__().diff(__WEBPACK_IMPORTED_MODULE_3_moment__("1997-10-07"), 'days');
        // Numero PSK (Codigo G2) = 8548862
        // calcular valor nominal (10 digitos)
        var valueStr = (this.totalPayment.toFixed(2)).replace(/([.*+?^$|(){}\[\]-])/mg, "");
        var nominalValue = "";
        for (var y = 0; y < (10 - valueStr.length); y++) {
            nominalValue += "0";
        }
        nominalValue += valueStr;
        var verifyDigitStr = "0339" + factorMaturity + nominalValue + "9" +
            "8548862" + this.ourNumber + "0" + "101";
        verifyDigitStr = verifyDigitStr.replace(/([.*+?^$|(){}\[\]-])/mg, "");
        var verifyDigitStrInverted = verifyDigitStr.split("").reverse().join("");
        var totalFourthGroup = 0;
        var numberToCalc = 2;
        for (var p = 0; p < verifyDigitStrInverted.length; p++) {
            totalFourthGroup += parseInt(verifyDigitStrInverted[p]) * numberToCalc;
            numberToCalc++;
            if (p == 7 || p == 15 || p == 23 || p == 31 || p == 39) {
                numberToCalc = 2;
            }
        }
        var verifyDigit = ((totalFourthGroup * 10) / 11).toString().split(".")[1];
        var numberVerifyDigit = 0;
        if (verifyDigit !== undefined) {
            if (verifyDigit.split("").length > 1) {
                if (parseInt(verifyDigit.split("")[1]) > 5) {
                    numberVerifyDigit = parseInt(verifyDigit.split("")[0]) + 1;
                }
                else {
                    numberVerifyDigit = parseInt(verifyDigit.split("")[0]);
                }
            }
            else {
                numberVerifyDigit = parseInt(verifyDigit.split("")[0]);
            }
        }
        // Quinto Grupo -> Fator de Vencimento e Valor Nominal
        var codeBarFifthGroup = factorMaturity + nominalValue;
        this.codeBar = codeBarFirstGroup + " " + codeBarSecondGroup + " " + codeBarThirdGroup + " " + numberVerifyDigit + " " + codeBarFifthGroup;
        //Código do beneficiário: 45000
        //DV do Código do Beneficiário = 0
    };
    BillsToPayComponent.prototype.showModalBillet = function (billetShipping, bankId) {
        var _this = this;
        this.billetShipping = Object.assign({}, billetShipping);
        this.bankService.getBankById(bankId).subscribe(function (bank) {
            _this.bank = bank;
            _this.generateCodeBarCaixa(undefined);
            _this.modalLateBill.show();
        });
    };
    BillsToPayComponent.prototype.showModalChoosePrintType = function (billetShipping, bankId) {
        var _this = this;
        this.billetShipping = Object.assign({}, billetShipping);
        this.bankService.getBankById(bankId).subscribe(function (bank) {
            _this.bank = bank;
            _this.generateCodeBarCaixa(undefined);
            _this.modalChoosePrintType.show();
        });
    };
    BillsToPayComponent.prototype.onNotify = function (msg) {
        if (msg.message === 'printBillet') {
            document.getElementById('ifrOutput').style.display = 'block';
            this.generateBarCodeAndPrint();
        }
        if (msg.message === 'printBillet80mm') {
            document.getElementById('ifrOutput80mm').style.display = 'block';
            this.generateBarCodeAndPrint80mm();
            // this.print80mm();
        }
    };
    BillsToPayComponent.prototype.isBilletOld = function (maturityDate) {
        return __WEBPACK_IMPORTED_MODULE_3_moment__(maturityDate) < __WEBPACK_IMPORTED_MODULE_3_moment__([2017, 9, 1]);
    };
    return BillsToPayComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalLateBill'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__["c" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__["c" /* ModalDirective */]) === "function" && _a || Object)
], BillsToPayComponent.prototype, "modalLateBill", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalChoosePrintType'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__["c" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__["c" /* ModalDirective */]) === "function" && _b || Object)
], BillsToPayComponent.prototype, "modalChoosePrintType", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalInfoBilletLate'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__["c" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_ngx_bootstrap__["c" /* ModalDirective */]) === "function" && _c || Object)
], BillsToPayComponent.prototype, "modalInfoBilletLate", void 0);
BillsToPayComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-bills-to-pay',
        template: __webpack_require__(456),
        styles: [__webpack_require__(411)]
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__bill_to_pay_service__["a" /* BillToPayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__bill_to_pay_service__["a" /* BillToPayService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_10__bank_service__["a" /* BankService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__bank_service__["a" /* BankService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__type_interest_charge_service__["a" /* TypeInterestChargeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__type_interest_charge_service__["a" /* TypeInterestChargeService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_7__search_client_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__search_client_client_service__["a" /* ClientService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_11_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]) === "function" && _k || Object])
], BillsToPayComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=bills-to-pay.component.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CieloPaymentCards; });
var CieloPaymentCards = (function () {
    function CieloPaymentCards() {
    }
    return CieloPaymentCards;
}());

//# sourceMappingURL=cielo-payment-cards.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CieloPayment; });
var CieloPayment = (function () {
    function CieloPayment() {
    }
    return CieloPayment;
}());

//# sourceMappingURL=cielo-payment.js.map

/***/ }),

/***/ 345:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__payment__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__credit_card__ = __webpack_require__(125);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreditCardPaymentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreditCardPaymentComponent = (function () {
    function CreditCardPaymentComponent() {
        this.maskValidDate = [/[0-9]/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
        this.maskSecurityCode = [/[0-9]/, /\d/, /\d/];
        this.payment = new __WEBPACK_IMPORTED_MODULE_1__payment__["a" /* Payment */]();
        this.payment.CreditCard = new __WEBPACK_IMPORTED_MODULE_2__credit_card__["a" /* CreditCard */]();
    }
    return CreditCardPaymentComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], CreditCardPaymentComponent.prototype, "totalPayment", void 0);
CreditCardPaymentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-credit-card-payment',
        template: __webpack_require__(457),
        styles: [__webpack_require__(412)]
    }),
    __metadata("design:paramtypes", [])
], CreditCardPaymentComponent);

//# sourceMappingURL=credit-card-payment.component.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__payment__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__debit_card__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bill_to_pay_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_client_client_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bill_to_pay_payment_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bill_to_pay_amounts_paid_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__bill_to_pay_amounts_paid__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__util_constants__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_slim_loading_bar__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_jquery__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_jquery__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DebitCardPaymentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var DebitCardPaymentComponent = (function () {
    function DebitCardPaymentComponent(service, toastyService, route, billToPayPaymentService, toastyConfig, clientService, slimLoadingBarService, billToPayAmountPaidService) {
        this.service = service;
        this.toastyService = toastyService;
        this.route = route;
        this.billToPayPaymentService = billToPayPaymentService;
        this.toastyConfig = toastyConfig;
        this.clientService = clientService;
        this.slimLoadingBarService = slimLoadingBarService;
        this.billToPayAmountPaidService = billToPayAmountPaidService;
        this.maskValidDate = [/[0-9]/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
        this.maskSecurityCode = [/[0-9]/, /\d/, /\d/];
        this.payment = new __WEBPACK_IMPORTED_MODULE_1__payment__["a" /* Payment */]();
        this.payment.DebitCard = new __WEBPACK_IMPORTED_MODULE_2__debit_card__["a" /* DebitCard */]();
        this.toastyConfig.theme = 'bootstrap';
        this.toastyConfig.position = 'top-right';
    }
    DebitCardPaymentComponent.prototype.doPayment = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_12_jquery__('#btnDoPaymentDebitCard').prop("disabled", true);
        this.payment.Type = "DebitCard";
        this.payment.Amount = 5;
        this.payment.ReturnUrl = "http://localhost:4200";
        this.slimLoadingBarService.start();
        this.clientService.view(this.route.snapshot.params["clientId"]).subscribe(function (client) {
            var debitPayment = {
                MerchantOrderId: "2014121201",
                Customer: {
                    Name: client.name
                },
                Payment: {
                    Type: "DebitCard",
                    ReturnUrl: "http://localhost:4200",
                    Amount: 5,
                    DebitCard: _this.payment.DebitCard
                }
            };
            console.log(JSON.stringify(debitPayment));
            /*this.service.paymentDebitCard(debitPayment).subscribe(cieloPaymentReturn => {
              console.log(cieloPaymentReturn);
              // if (cieloPaymentReturn.Payment.ReturnCode === "4") {
                this.saveListBillToPayPayment();
                this.saveListBillToPayAmountsPaid();
              $('#btnDoPaymentDebitCard').prop("disabled",false);
                let toastOptions: ToastOptions = {
                  title: "Pagamento Realizado",
                  showClose: true,
                  timeout: 4000
                };
                this.toastyService.success(toastOptions);
                this.stopSlimLoadingBar();
              // }
            }, error => {
              $('#btnDoPaymentDebitCard').prop("disabled",false);
              this.stopSlimLoadingBar();
              if (error.json().length > 0) {
                error.json().forEach(error => {
                  this.showMsgError(error.Code, error.Message);
                });
              } else if (error.json() !== undefined) {
                this.showMsgError(error.json().Code, error.json().Message);
              }
            })*/
        });
    };
    DebitCardPaymentComponent.prototype.saveListBillToPayPayment = function () {
        var _this = this;
        this.billToPayPaymentService.updateList(this.listBillToPayPayment).subscribe(function () {
        }, function (error) {
            _this.showMsgError(error.join().status, error.json().message);
        });
    };
    DebitCardPaymentComponent.prototype.saveListBillToPayAmountsPaid = function () {
        var listBillToPayAmountsPaid = [];
        this.listBillToPayPayment.forEach(function (billToPayPayment) {
            var billToPayAmountsPaid = new __WEBPACK_IMPORTED_MODULE_9__bill_to_pay_amounts_paid__["a" /* BillToPayAmountsPaid */]();
            billToPayAmountsPaid.billToPayPaymentId = billToPayPayment.id;
            billToPayAmountsPaid.hour = new Date();
            billToPayAmountsPaid.date = new Date();
            billToPayAmountsPaid.amount = billToPayPayment.subTotal;
            listBillToPayAmountsPaid.push(billToPayAmountsPaid);
        });
        this.billToPayAmountPaidService.saveList(listBillToPayAmountsPaid).subscribe(function (result) {
        }, function (error) {
        });
    };
    DebitCardPaymentComponent.prototype.showMsgError = function (code, message) {
        switch (code) {
            case 57:
                this.toastyService.error({ title: __WEBPACK_IMPORTED_MODULE_10__util_constants__["a" /* Constants */].MSG_ERROR_57_CARD_EXPIRED, showClose: true, timeout: 7000 });
                break;
            case 108:
                this.toastyService.error({ title: __WEBPACK_IMPORTED_MODULE_10__util_constants__["a" /* Constants */].MSG_ERROR_108_AMOUNT_GREATER_THAN_ZERO, showClose: true, timeout: 7000 });
                break;
            case 117:
                this.toastyService.error({ title: __WEBPACK_IMPORTED_MODULE_10__util_constants__["a" /* Constants */].MSG_ERROR_117_HOLDER_IS_REQUIRED, showClose: true, timeout: 7000 });
                break;
            case 118:
                this.toastyService.error({ title: __WEBPACK_IMPORTED_MODULE_10__util_constants__["a" /* Constants */].MSG_ERROR_118_CREDIT_CARD_NUMBER_REQUIRED, showClose: true, timeout: 7000 });
                break;
            case 125:
                this.toastyService.error({ title: __WEBPACK_IMPORTED_MODULE_10__util_constants__["a" /* Constants */].MSG_ERROR_125_CREDIT_CARD_EXPIRATION_DATE_REQUIRED, showClose: true, timeout: 7000 });
                break;
            case 126:
                this.toastyService.error({ title: __WEBPACK_IMPORTED_MODULE_10__util_constants__["a" /* Constants */].MSG_ERROR_126_CREDIT_CARD_EXPIRATION_DATE_IS_INVALID, showClose: true, timeout: 7000 });
                break;
            case 127:
                this.toastyService.error({ title: __WEBPACK_IMPORTED_MODULE_10__util_constants__["a" /* Constants */].MSG_ERROR_127_CREDIT_CARD_NUMBER_IS_REQUIRED, showClose: true, timeout: 7000 });
                break;
            case 128:
                this.toastyService.error({ title: __WEBPACK_IMPORTED_MODULE_10__util_constants__["a" /* Constants */].MSG_ERROR_128_CREDIT_CARD_NUMBER_LENGHT_EXCEEDED, showClose: true, timeout: 7000 });
                break;
            default:
                this.toastyService.error({ title: message, showClose: true, timeout: 7000 });
        }
    };
    DebitCardPaymentComponent.prototype.stopSlimLoadingBar = function () {
        this.slimLoadingBarService.stop();
        this.slimLoadingBarService.complete();
    };
    return DebitCardPaymentComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], DebitCardPaymentComponent.prototype, "totalPayment", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], DebitCardPaymentComponent.prototype, "listBillToPayPayment", void 0);
DebitCardPaymentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-debit-card-payment',
        template: __webpack_require__(458),
        styles: [__webpack_require__(413)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__bill_to_pay_service__["a" /* BillToPayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__bill_to_pay_service__["a" /* BillToPayService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__["b" /* ToastyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__["b" /* ToastyService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_7__bill_to_pay_payment_service__["a" /* BillToPayPaymentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__bill_to_pay_payment_service__["a" /* BillToPayPaymentService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__["c" /* ToastyConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_toasty__["c" /* ToastyConfig */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__search_client_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__search_client_client_service__["a" /* ClientService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_11_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_8__bill_to_pay_amounts_paid_service__["a" /* BillToPayAmountsPaidService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__bill_to_pay_amounts_paid_service__["a" /* BillToPayAmountsPaidService */]) === "function" && _h || Object])
], DebitCardPaymentComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=debit-card-payment.component.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoBilletLateComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InfoBilletLateComponent = (function () {
    function InfoBilletLateComponent() {
    }
    return InfoBilletLateComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["c" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["c" /* ModalDirective */]) === "function" && _a || Object)
], InfoBilletLateComponent.prototype, "modal", void 0);
InfoBilletLateComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-info-billet-late',
        template: __webpack_require__(459),
        styles: [__webpack_require__(414)]
    }),
    __metadata("design:paramtypes", [])
], InfoBilletLateComponent);

var _a;
//# sourceMappingURL=info-billet-late.component.js.map

/***/ }),

/***/ 348:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalChoosePrintTypeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalChoosePrintTypeComponent = (function () {
    function ModalChoosePrintTypeComponent() {
        this.notify = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ModalChoosePrintTypeComponent.prototype.printBillet = function () {
        this.modalChoosePrintType.hide();
        this.notify.emit({ message: "printBillet" });
    };
    ModalChoosePrintTypeComponent.prototype.printBillet80mm = function () {
        this.modalChoosePrintType.hide();
        this.notify.emit({ message: "printBillet80mm" });
    };
    return ModalChoosePrintTypeComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["c" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ngx_bootstrap__["c" /* ModalDirective */]) === "function" && _a || Object)
], ModalChoosePrintTypeComponent.prototype, "modalChoosePrintType", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _b || Object)
], ModalChoosePrintTypeComponent.prototype, "notify", void 0);
ModalChoosePrintTypeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-modal-choose-print-type',
        template: __webpack_require__(460),
        styles: [__webpack_require__(415)]
    }),
    __metadata("design:paramtypes", [])
], ModalChoosePrintTypeComponent);

var _a, _b;
//# sourceMappingURL=modal-choose-print-type.component.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__billet_payment_billet_shipping__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bank__ = __webpack_require__(341);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalLateBilletComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalLateBilletComponent = (function () {
    function ModalLateBilletComponent() {
        this.notify = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    ModalLateBilletComponent.prototype.printBillet = function () {
        this.notify.emit({ message: "printBillet" });
    };
    ModalLateBilletComponent.prototype.printBillet80mm = function () {
        this.notify.emit({ message: "printBillet80mm" });
    };
    return ModalLateBilletComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__billet_payment_billet_shipping__["a" /* BilletShipping */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__billet_payment_billet_shipping__["a" /* BilletShipping */]) === "function" && _a || Object)
], ModalLateBilletComponent.prototype, "billetShipping", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["c" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap__["c" /* ModalDirective */]) === "function" && _b || Object)
], ModalLateBilletComponent.prototype, "modalLateBill", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ModalLateBilletComponent.prototype, "codeBar", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__bank__["a" /* Bank */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__bank__["a" /* Bank */]) === "function" && _c || Object)
], ModalLateBilletComponent.prototype, "bank", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]) === "function" && _d || Object)
], ModalLateBilletComponent.prototype, "notify", void 0);
ModalLateBilletComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-modal-late-billet',
        template: __webpack_require__(461),
        styles: [__webpack_require__(416)]
    }),
    __metadata("design:paramtypes", [])
], ModalLateBilletComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=modal-late-billet.component.js.map

/***/ }),

/***/ 350:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__payment__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bill_to_pay_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_client_client_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__bill_to_pay_amounts_paid__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bill_to_pay_amounts_paid_service__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bill_to_pay_payment_service__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cielo_payment_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_slim_loading_bar__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_jquery__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ng2_toasty__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__util_constants__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecurrentPaymentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var RecurrentPaymentComponent = (function () {
    function RecurrentPaymentComponent(billToPayService, route, clientService, billToPayAmountPaidService, toastyService, toastyConfig, slimLoadingBarService, billToPayPaymentService, cieloPaymentService) {
        this.billToPayService = billToPayService;
        this.route = route;
        this.clientService = clientService;
        this.billToPayAmountPaidService = billToPayAmountPaidService;
        this.toastyService = toastyService;
        this.toastyConfig = toastyConfig;
        this.slimLoadingBarService = slimLoadingBarService;
        this.billToPayPaymentService = billToPayPaymentService;
        this.cieloPaymentService = cieloPaymentService;
        this.maskValidDate = [/[0-9]/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
        this.maskSecurityCode = [/[0-9]/, /\d/, /\d/];
        this.payment = new __WEBPACK_IMPORTED_MODULE_1__payment__["a" /* Payment */]();
        this.payment.Installments = 1;
        this.payment.RecurrentPayment.Interval = "Annual";
        this.getClient();
        this.toastyConfig.theme = 'bootstrap';
        this.toastyConfig.position = 'top-right';
        this.checkFuturePayments = true;
    }
    RecurrentPaymentComponent.prototype.getClient = function () {
        var _this = this;
        this.clientService.view(this.route.snapshot.params['clientId']).subscribe(function (client) {
            _this.client = client;
        });
    };
    RecurrentPaymentComponent.prototype.doPayment = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_11_jquery__('#btnDoPayment').prop("disabled", true);
        this.payment.Type = "CreditCard";
        this.payment.Amount = this.getConvertAmount();
        this.payment.SoftDescriptor = "TESTE";
        this.cieloPaymentService.getOrderId().subscribe(function (count) {
            var countOrderId = count + 1;
            _this.slimLoadingBarService.start();
            var copyPayment = Object.assign({}, _this.payment);
            copyPayment.DebitCard = undefined;
            copyPayment.RecurrentPayment = undefined;
            var creditCardPayment = {
                MerchantOrderId: countOrderId,
                Customer: {
                    Name: _this.client.name
                },
                Payment: copyPayment
            };
            _this.billToPayService.paymentCreditCard(creditCardPayment).subscribe(function (cieloPaymentReturn) {
                if (cieloPaymentReturn.Payment.ReturnCode === "4") {
                    _this.saveListBillToPayPayment();
                    _this.saveListBillToPayAmountsPaid();
                    if (_this.checkFuturePayments) {
                        _this.saveCardToken(cieloPaymentReturn);
                    }
                    else {
                        _this.saveCieloPayment(cieloPaymentReturn, undefined, countOrderId);
                    }
                }
                else {
                    _this.stopSlimLoadingBar();
                    _this.showMsgError(parseInt(cieloPaymentReturn.Payment.ReturnCode), cieloPaymentReturn.Payment.ReturnMessage);
                }
                __WEBPACK_IMPORTED_MODULE_11_jquery__('#btnDoPayment').prop("disabled", false);
            }, function (error) {
                _this.stopSlimLoadingBar();
                if (error.json().length > 0) {
                    error.json().forEach(function (error) {
                        _this.showMsgError(error.Code, error.Message);
                    });
                }
                else if (error.json() !== undefined) {
                    _this.showMsgError(error.json().Code, error.json().Message);
                }
                __WEBPACK_IMPORTED_MODULE_11_jquery__('#btnDoPayment').prop("disabled", false);
            });
        });
    };
    RecurrentPaymentComponent.prototype.getConvertAmount = function () {
        var amountSplited = this.totalPayment.toString().split(".");
        var amountToReturn = 0;
        // Exemplo: R$ 1
        if (this.totalPayment.toString().length == 1) {
            amountToReturn = parseInt(this.totalPayment + "00");
        }
        // Ex: 0,01
        if (this.totalPayment.toString().indexOf("0.0") !== -1 && this.totalPayment.toString().length === 4) {
            amountToReturn = parseInt(this.totalPayment.toString().charAt(3));
        }
        // Exemplo: R$ 0,1
        if (this.totalPayment.toString().length === 3 && amountSplited !== undefined && amountSplited.length === 2) {
            amountToReturn = parseInt(amountSplited[0] + amountSplited[1] + "0");
        }
        if (this.totalPayment.toString().indexOf('.') === -1) {
            amountToReturn = parseInt(this.totalPayment.toString() + "00");
        }
        if (this.totalPayment.toString().length > 3 && amountSplited !== undefined && amountSplited.length === 2) {
            amountToReturn = parseInt(amountSplited[0] + amountSplited[1]);
        }
        return amountToReturn;
    };
    RecurrentPaymentComponent.prototype.saveCardToken = function (cieloPaymentReturn) {
        var _this = this;
        var cardTokenRequest = {
            CustomerName: this.client.name,
            CardNumber: this.payment.CreditCard.CardNumber,
            Holder: this.payment.CreditCard.Holder,
            ExpirationDate: this.payment.CreditCard.ExpirationDate,
            Brand: this.payment.CreditCard.Brand
        };
        this.billToPayService.createCardToken(cardTokenRequest).subscribe(function (result) {
            _this.saveCieloPayment(cieloPaymentReturn, result.CardToken, undefined);
        }, function (error) {
            _this.stopSlimLoadingBar();
            if (error.json().length > 0) {
                error.json().forEach(function (error) {
                    _this.showMsgError(error.Code, error.Message);
                });
            }
            else if (error.json() !== undefined) {
                _this.showMsgError(error.json().Code, error.json().Message);
            }
        });
    };
    RecurrentPaymentComponent.prototype.stopSlimLoadingBar = function () {
        this.slimLoadingBarService.stop();
        this.slimLoadingBarService.complete();
    };
    RecurrentPaymentComponent.prototype.showMsgError = function (code, message) {
        switch (code) {
            case 57:
                this.toastyService.error({ title: __WEBPACK_IMPORTED_MODULE_13__util_constants__["a" /* Constants */].MSG_ERROR_57_CARD_EXPIRED, showClose: true, timeout: 7000 });
                break;
            case 108:
                this.toastyService.error({ title: __WEBPACK_IMPORTED_MODULE_13__util_constants__["a" /* Constants */].MSG_ERROR_108_AMOUNT_GREATER_THAN_ZERO, showClose: true, timeout: 7000 });
                break;
            case 117:
                this.toastyService.error({ title: __WEBPACK_IMPORTED_MODULE_13__util_constants__["a" /* Constants */].MSG_ERROR_117_HOLDER_IS_REQUIRED, showClose: true, timeout: 7000 });
                break;
            case 118:
                this.toastyService.error({ title: __WEBPACK_IMPORTED_MODULE_13__util_constants__["a" /* Constants */].MSG_ERROR_118_CREDIT_CARD_NUMBER_REQUIRED, showClose: true, timeout: 7000 });
                break;
            case 125:
                this.toastyService.error({ title: __WEBPACK_IMPORTED_MODULE_13__util_constants__["a" /* Constants */].MSG_ERROR_125_CREDIT_CARD_EXPIRATION_DATE_REQUIRED, showClose: true, timeout: 7000 });
                break;
            case 126:
                this.toastyService.error({ title: __WEBPACK_IMPORTED_MODULE_13__util_constants__["a" /* Constants */].MSG_ERROR_126_CREDIT_CARD_EXPIRATION_DATE_IS_INVALID, showClose: true, timeout: 7000 });
                break;
            case 127:
                this.toastyService.error({ title: __WEBPACK_IMPORTED_MODULE_13__util_constants__["a" /* Constants */].MSG_ERROR_127_CREDIT_CARD_NUMBER_IS_REQUIRED, showClose: true, timeout: 7000 });
                break;
            case 128:
                this.toastyService.error({ title: __WEBPACK_IMPORTED_MODULE_13__util_constants__["a" /* Constants */].MSG_ERROR_128_CREDIT_CARD_NUMBER_LENGHT_EXCEEDED, showClose: true, timeout: 7000 });
                break;
            default:
                this.toastyService.error({ title: message, showClose: true, timeout: 7000 });
        }
    };
    RecurrentPaymentComponent.prototype.saveListBillToPayPayment = function () {
        var _this = this;
        this.billToPayPaymentService.updateList(this.listBillToPayPayment).subscribe(function () {
        }, function (error) {
            _this.showMsgError(error.join().status, error.json().message);
        });
    };
    RecurrentPaymentComponent.prototype.saveCieloPayment = function (cieloPaymentReturn, cardToken, countOrderId) {
        var _this = this;
        this.cieloPayment = __WEBPACK_IMPORTED_MODULE_13__util_constants__["a" /* Constants */].getCiloPaymentConverted(cieloPaymentReturn, cardToken, false);
        this.cieloPayment.clientId = this.route.snapshot.params['clientId'];
        this.cieloPayment.countOrderId = countOrderId;
        this.cieloPaymentService.create(this.cieloPayment, false).subscribe(function (result) {
            _this.stopSlimLoadingBar();
            _this.modalReceipt.show();
        }, function (error) {
        });
    };
    RecurrentPaymentComponent.prototype.saveListBillToPayAmountsPaid = function () {
        var listBillToPayAmountsPaid = [];
        this.listBillToPayPayment.forEach(function (billToPayPayment) {
            var billToPayAmountsPaid = new __WEBPACK_IMPORTED_MODULE_6__bill_to_pay_amounts_paid__["a" /* BillToPayAmountsPaid */]();
            billToPayAmountsPaid.billToPayPaymentId = billToPayPayment.id;
            billToPayAmountsPaid.hour = new Date();
            billToPayAmountsPaid.date = new Date();
            billToPayAmountsPaid.amount = billToPayPayment.subTotal;
            listBillToPayAmountsPaid.push(billToPayAmountsPaid);
        });
        this.billToPayAmountPaidService.saveList(listBillToPayAmountsPaid).subscribe(function (result) {
        }, function (error) {
        });
    };
    RecurrentPaymentComponent.prototype.checkRecurrency = function () {
        if (parseInt(this.payment.Installments.toString()) > 1) {
            this.payment.RecurrentPayment.Interval = 'None';
        }
    };
    RecurrentPaymentComponent.prototype.getCurrentDate = function (format) {
        return __WEBPACK_IMPORTED_MODULE_5_moment__().format(format);
    };
    RecurrentPaymentComponent.prototype.getLast4DigitsFromCard = function () {
        if (this.payment.CreditCard.CardNumber !== undefined) {
            return this.payment.CreditCard.CardNumber.substr(this.payment.CreditCard.CardNumber.length - 4, this.payment.CreditCard.CardNumber.length - 1);
        }
        else {
            return '';
        }
    };
    RecurrentPaymentComponent.prototype.getNumberRecurrentInstalments = function () {
        switch (this.payment.RecurrentPayment.Interval) {
            case 'Annual':
                return 12;
            case 'SemiAnnual':
                return 6;
            case 'Quarterly':
                return 4;
            case 'Bimonthly':
                return 2;
            default:
                return 12;
        }
    };
    RecurrentPaymentComponent.prototype.getConvertedDate = function (date) {
        return __WEBPACK_IMPORTED_MODULE_5_moment__(date).format('DD/MM/YYYY');
    };
    RecurrentPaymentComponent.prototype.print = function () {
        var printContents, popupWin;
        printContents = document.getElementById('div-payment-receipt').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write("\n      <html>\n        <head>\n          <title>Comprovante</title>\n          <style>\n            #div-payment-receipt {\n              float: none;\n              margin: 0 auto;\n              background-color: #EBFAFF\n            }\n            p {\n              font-size: 11px;\n              margin: 0;\n              max-width: 220px;\n            }\n          </style>\n        </head>\n    <body onload=\"window.print();window.close()\">" + printContents + "</body>\n      </html>");
        popupWin.document.close();
    };
    return RecurrentPaymentComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Number)
], RecurrentPaymentComponent.prototype, "totalPayment", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Object)
], RecurrentPaymentComponent.prototype, "listBillToPayPayment", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalReceipt'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap__["c" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14_ngx_bootstrap__["c" /* ModalDirective */]) === "function" && _a || Object)
], RecurrentPaymentComponent.prototype, "modalReceipt", void 0);
RecurrentPaymentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-recurrent-payment',
        template: __webpack_require__(462),
        styles: [__webpack_require__(417)]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__bill_to_pay_service__["a" /* BillToPayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__bill_to_pay_service__["a" /* BillToPayService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__search_client_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__search_client_client_service__["a" /* ClientService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__bill_to_pay_amounts_paid_service__["a" /* BillToPayAmountsPaidService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__bill_to_pay_amounts_paid_service__["a" /* BillToPayAmountsPaidService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_12_ng2_toasty__["b" /* ToastyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12_ng2_toasty__["b" /* ToastyService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_12_ng2_toasty__["c" /* ToastyConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12_ng2_toasty__["c" /* ToastyConfig */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_10_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_8__bill_to_pay_payment_service__["a" /* BillToPayPaymentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__bill_to_pay_payment_service__["a" /* BillToPayPaymentService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_9__cielo_payment_service__["a" /* CieloPaymentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__cielo_payment_service__["a" /* CieloPaymentService */]) === "function" && _k || Object])
], RecurrentPaymentComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
//# sourceMappingURL=recurrent-payment.component.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecurrentPayment; });
var RecurrentPayment = (function () {
    function RecurrentPayment() {
    }
    return RecurrentPayment;
}());

//# sourceMappingURL=recurrent-payment.js.map

/***/ }),

/***/ 352:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bills_to_pay_payment__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bills_to_pay_cielo_payment_service__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bills_to_pay_bill_to_pay_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_slim_loading_bar__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_client_client_service__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toasty__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__util_constants__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForSaleComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};













var ForSaleComponent = (function () {
    function ForSaleComponent(cieloPaymentService, billToPayService, route, toastyService, toastyConfig, slimLoadingBarService, clientService, formBuilder) {
        var _this = this;
        this.cieloPaymentService = cieloPaymentService;
        this.billToPayService = billToPayService;
        this.route = route;
        this.toastyService = toastyService;
        this.toastyConfig = toastyConfig;
        this.slimLoadingBarService = slimLoadingBarService;
        this.clientService = clientService;
        this.maskSecurityCode = [/[0-9]/, /\d/, /\d/];
        this.maskValidDate = [/[0-9]/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
        this.payment = new __WEBPACK_IMPORTED_MODULE_1__bills_to_pay_payment__["a" /* Payment */]();
        this.toastyConfig.theme = 'bootstrap';
        this.toastyConfig.position = 'top-right';
        this.formBuilder = formBuilder;
        this.initFormBuilder();
        this.initFormBuilderDebitCard();
        this.initFormBuilderCreditCard();
        this.clientService.view(this.route.snapshot.params['clientId']).subscribe(function (client) {
            _this.client = client;
        });
    }
    ForSaleComponent.prototype.initFormBuilder = function () {
        this.formForSale = this.formBuilder.group({
            'paymentDescription': [this.paymentDescription, [__WEBPACK_IMPORTED_MODULE_12__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_12__angular_forms__["Validators"].minLength(3)]],
            'amountString': [this.amountString, [__WEBPACK_IMPORTED_MODULE_12__angular_forms__["Validators"].required]],
            'paymentMethod': [this.paymentMethod]
        });
    };
    ForSaleComponent.prototype.initFormBuilderCreditCard = function () {
        this.formForSaleCreditCard = this.formBuilder.group({
            'creditCardBrand': [this.payment.CreditCard.Brand, [__WEBPACK_IMPORTED_MODULE_12__angular_forms__["Validators"].required]],
            'creditCardNumber': [this.payment.CreditCard.CardNumber, [__WEBPACK_IMPORTED_MODULE_12__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_12__angular_forms__["Validators"].minLength(16)]],
            'creditCardExpirationDate': [this.payment.CreditCard.ExpirationDate, [__WEBPACK_IMPORTED_MODULE_12__angular_forms__["Validators"].required]],
            'creditCardSecurityCode': [this.payment.CreditCard.SecurityCode, [__WEBPACK_IMPORTED_MODULE_12__angular_forms__["Validators"].required]],
            'creditCardHolder': [this.payment.CreditCard.Holder, [__WEBPACK_IMPORTED_MODULE_12__angular_forms__["Validators"].required]],
            'creditCardInstallments': [this.payment.Installments, [__WEBPACK_IMPORTED_MODULE_12__angular_forms__["Validators"].required]]
        });
    };
    ForSaleComponent.prototype.initFormBuilderDebitCard = function () {
        this.formForSaleDebitCard = this.formBuilder.group({
            'debitCardBrand': [this.payment.DebitCard.Brand, [__WEBPACK_IMPORTED_MODULE_12__angular_forms__["Validators"].required]],
            'debitCardNumber': [this.payment.DebitCard.CardNumber, [__WEBPACK_IMPORTED_MODULE_12__angular_forms__["Validators"].required,
                    __WEBPACK_IMPORTED_MODULE_12__angular_forms__["Validators"].minLength(16)]],
            'debitCardExpirationDate': [this.payment.DebitCard.ExpirationDate, [__WEBPACK_IMPORTED_MODULE_12__angular_forms__["Validators"].required]],
            'debitCardSecurityCode': [this.payment.DebitCard.SecurityCode, [__WEBPACK_IMPORTED_MODULE_12__angular_forms__["Validators"].required]],
            'debitCardHolder': [this.payment.DebitCard.Holder, [__WEBPACK_IMPORTED_MODULE_12__angular_forms__["Validators"].required]],
        });
    };
    ForSaleComponent.prototype.doPayment = function () {
        var _this = this;
        var amountSplited = this.amountString.toString().split(".");
        // Exemplo: R$ 1
        if (this.amountString.toString().length == 1) {
            this.payment.Amount = parseInt(this.amountString + "00");
        }
        // Ex: 0,01
        if (this.amountString.toString().indexOf("0.0") !== -1 && this.amountString.toString().length === 4) {
            this.payment.Amount = parseInt(this.amountString.toString().charAt(3));
        }
        // Exemplo: R$ 0,1
        if (this.amountString.toString().length === 3 && amountSplited !== undefined && amountSplited.length === 2) {
            this.payment.Amount = parseInt(amountSplited[0] + amountSplited[1] + "0");
        }
        if (this.amountString.toString().indexOf('.') === -1) {
            this.payment.Amount = parseInt(this.amountString.toString() + "00");
        }
        if (this.amountString.toString().length > 3 && amountSplited !== undefined && amountSplited.length === 2) {
            this.payment.Amount = parseInt(amountSplited[0] + amountSplited[1]);
        }
        this.cieloPaymentService.getOrderId().subscribe(function (countId) {
            var countOrderId = countId + 1;
            if (_this.paymentMethod === 'CREDIT') {
                __WEBPACK_IMPORTED_MODULE_8_jquery__('#btnDoPaymentForSaleCreditCard').prop("disabled", true);
                _this.payment.Type = "CreditCard";
                if (_this.client.name.length > 13) {
                    _this.payment.SoftDescriptor = _this.client.name.substring(0, 13);
                }
                else {
                    _this.payment.SoftDescriptor = _this.client.name;
                }
                _this.slimLoadingBarService.start();
                var copyPayment = Object.assign({}, _this.payment);
                copyPayment.DebitCard = undefined;
                copyPayment.RecurrentPayment = undefined;
                var creditCardPayment = {
                    MerchantOrderId: countOrderId.toString(),
                    Customer: {
                        Name: _this.client.name
                    },
                    Payment: copyPayment
                };
                _this.billToPayService.paymentCreditCard(creditCardPayment).subscribe(function (cieloPaymentReturn) {
                    if (cieloPaymentReturn.Payment.Status === 1 || cieloPaymentReturn.Payment.Status === 2) {
                        var toastOptions = {
                            title: "Pagamento Realizado",
                            showClose: true,
                            timeout: 4000
                        };
                        _this.toastyService.success(toastOptions);
                        _this.saveCieloPayment(cieloPaymentReturn, undefined, countOrderId);
                    }
                    else {
                        _this.stopSlimLoadingBar();
                        _this.showMsgError(parseInt(cieloPaymentReturn.Payment.ReturnCode), cieloPaymentReturn.Payment.ReturnMessage);
                        __WEBPACK_IMPORTED_MODULE_8_jquery__('#btnDoPaymentForSaleCreditCard').prop("disabled", false);
                    }
                    __WEBPACK_IMPORTED_MODULE_8_jquery__('#btnDoPaymentForSaleCreditCard').prop("disabled", false);
                }, function (error) {
                    _this.handleError(error);
                    __WEBPACK_IMPORTED_MODULE_8_jquery__('#btnDoPaymentForSaleCreditCard').prop("disabled", false);
                });
            }
            else if (_this.paymentMethod === 'DEBIT') {
                __WEBPACK_IMPORTED_MODULE_8_jquery__('#btnDoPaymentForSaleDebitCard').prop("disabled", true);
                var debitPayment = {
                    MerchantOrderId: countOrderId.toString(),
                    Customer: {
                        Name: _this.client.name
                    },
                    Payment: {
                        Type: "DebitCard",
                        Amount: _this.payment.Amount,
                        ReturnUrl: "http://localhost:4200",
                        DebitCard: _this.payment.DebitCard
                    }
                };
                console.log(JSON.stringify(debitPayment));
                /*this.billToPayService.paymentDebitCard(debitPayment).subscribe(cieloPaymentReturn => {
                  if (cieloPaymentReturn.Payment.Status === 1 || cieloPaymentReturn.Payment.Status === 2) {
                    let toastOptions: ToastOptions = {
                      title: "Pagamento Realizado",
                      showClose: true,
                      timeout: 4000
                    };
                    this.toastyService.success(toastOptions);
                    this.saveCieloPayment(cieloPaymentReturn, undefined, countOrderId);
                    $('#btnDoPaymentForSaleDebitCard').prop("disabled",false);
                  } else {
                    let toastOptions: ToastOptions = {
                      title: cieloPaymentReturn.Payment.ReturnMessage,
                      showClose: true,
                      timeout: 4000
                    };
                    this.toastyService.error(toastOptions);
                    $('#btnDoPaymentForSaleDebitCard').prop("disabled",false);
                  }
        
                }, error => {
                  this.handleError(error);
                  $('#btnDoPaymentForSaleDebitCard').prop("disabled",false);
                })*/
            }
        }, function (error) {
            _this.handleError(error);
        });
    };
    ForSaleComponent.prototype.handleError = function (error) {
        var _this = this;
        this.stopSlimLoadingBar();
        if (error.json().length > 0) {
            error.json().forEach(function (error) {
                _this.showMsgError(error.Code, error.Message);
            });
        }
        else if (error.json() !== undefined) {
            this.showMsgError(error.json().Code, error.json().Message);
        }
        else if (error.status !== undefined && error.statusTesxt !== undefined) {
            this.showMsgError(error.status, error.statusTesxt);
        }
    };
    ForSaleComponent.prototype.stopSlimLoadingBar = function () {
        this.slimLoadingBarService.stop();
        this.slimLoadingBarService.complete();
    };
    ForSaleComponent.prototype.showMsgError = function (code, message) {
        switch (code) {
            case 57:
                this.toastyService.error({ title: __WEBPACK_IMPORTED_MODULE_10__util_constants__["a" /* Constants */].MSG_ERROR_57_CARD_EXPIRED, showClose: true, timeout: 7000 });
                break;
            case 108:
                this.toastyService.error({ title: __WEBPACK_IMPORTED_MODULE_10__util_constants__["a" /* Constants */].MSG_ERROR_108_AMOUNT_GREATER_THAN_ZERO, showClose: true, timeout: 7000 });
                break;
            case 117:
                this.toastyService.error({ title: __WEBPACK_IMPORTED_MODULE_10__util_constants__["a" /* Constants */].MSG_ERROR_117_HOLDER_IS_REQUIRED, showClose: true, timeout: 7000 });
                break;
            case 118:
                this.toastyService.error({ title: __WEBPACK_IMPORTED_MODULE_10__util_constants__["a" /* Constants */].MSG_ERROR_118_CREDIT_CARD_NUMBER_REQUIRED, showClose: true, timeout: 7000 });
                break;
            case 125:
                this.toastyService.error({ title: __WEBPACK_IMPORTED_MODULE_10__util_constants__["a" /* Constants */].MSG_ERROR_125_CREDIT_CARD_EXPIRATION_DATE_REQUIRED, showClose: true, timeout: 7000 });
                break;
            case 126:
                this.toastyService.error({ title: __WEBPACK_IMPORTED_MODULE_10__util_constants__["a" /* Constants */].MSG_ERROR_126_CREDIT_CARD_EXPIRATION_DATE_IS_INVALID, showClose: true, timeout: 7000 });
                break;
            case 127:
                this.toastyService.error({ title: __WEBPACK_IMPORTED_MODULE_10__util_constants__["a" /* Constants */].MSG_ERROR_127_CREDIT_CARD_NUMBER_IS_REQUIRED, showClose: true, timeout: 7000 });
                break;
            case 128:
                this.toastyService.error({ title: __WEBPACK_IMPORTED_MODULE_10__util_constants__["a" /* Constants */].MSG_ERROR_128_CREDIT_CARD_NUMBER_LENGHT_EXCEEDED, showClose: true, timeout: 7000 });
                break;
            default:
                this.toastyService.error({ title: message, showClose: true, timeout: 7000 });
        }
    };
    ForSaleComponent.prototype.saveCieloPayment = function (cieloPaymentReturn, cardToken, countOrderId) {
        var _this = this;
        this.cieloPayment = __WEBPACK_IMPORTED_MODULE_10__util_constants__["a" /* Constants */].getCiloPaymentConverted(cieloPaymentReturn, cardToken, true);
        this.cieloPayment.description = this.paymentDescription;
        this.cieloPayment.clientId = this.route.snapshot.params['clientId'];
        this.cieloPayment.recurrent = false;
        this.cieloPayment.cieloPaymentCards.saveCard = false;
        this.cieloPayment.countOrderId = countOrderId;
        this.cieloPaymentService.create(this.cieloPayment, true).subscribe(function () {
            _this.stopSlimLoadingBar();
            _this.modalReceiptForSale.show();
        }, function (error) {
            _this.handleError(error);
        });
    };
    ForSaleComponent.prototype.getCurrentDate = function (format) {
        return __WEBPACK_IMPORTED_MODULE_9_moment__().format(format);
    };
    ForSaleComponent.prototype.getConvertedDate = function (date) {
        return __WEBPACK_IMPORTED_MODULE_9_moment__(date).format('DD/MM/YYYY');
    };
    ForSaleComponent.prototype.getLast4DigitsFromCard = function () {
        if (this.payment.CreditCard.CardNumber !== undefined) {
            return this.payment.CreditCard.CardNumber.substr(this.payment.CreditCard.CardNumber.length - 4, this.payment.CreditCard.CardNumber.length - 1);
        }
        else if (this.payment.DebitCard.CardNumber !== undefined) {
            return this.payment.DebitCard.CardNumber.substr(this.payment.DebitCard.CardNumber.length - 4, this.payment.DebitCard.CardNumber.length - 1);
        }
        else {
            return '';
        }
    };
    ForSaleComponent.prototype.print = function () {
        var printContents, popupWin;
        printContents = document.getElementById('div-payment-receipt-for-sale').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=100%');
        popupWin.document.open();
        popupWin.document.write("\n      <html>\n        <head>\n          <title>Comprovante</title>\n          <style>\n            #div-payment-receipt-for-sale {\n              float: none;\n              margin: 0 auto;\n              background-color: #EBFAFF;\n              max-width: 250px;\n            }\n            p {\n              font-size: 11px;\n              margin: 0;\n            }\n\n          </style>\n        </head>\n    <body onload=\"window.print();window.close()\">" + printContents + "</body>\n      </html>");
        popupWin.document.close();
    };
    return ForSaleComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('modalReceiptForSale'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap__["c" /* ModalDirective */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11_ngx_bootstrap__["c" /* ModalDirective */]) === "function" && _a || Object)
], ForSaleComponent.prototype, "modalReceiptForSale", void 0);
ForSaleComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-for-sale',
        template: __webpack_require__(464),
        styles: [__webpack_require__(419)]
    }),
    __param(7, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_12__angular_forms__["FormBuilder"])),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__bills_to_pay_cielo_payment_service__["a" /* CieloPaymentService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__bills_to_pay_cielo_payment_service__["a" /* CieloPaymentService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__bills_to_pay_bill_to_pay_service__["a" /* BillToPayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__bills_to_pay_bill_to_pay_service__["a" /* BillToPayService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["b" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7_ng2_toasty__["b" /* ToastyService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_ng2_toasty__["b" /* ToastyService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7_ng2_toasty__["c" /* ToastyConfig */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_ng2_toasty__["c" /* ToastyConfig */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_5__search_client_client_service__["a" /* ClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__search_client_client_service__["a" /* ClientService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_12__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__angular_forms__["FormBuilder"]) === "function" && _j || Object])
], ForSaleComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j;
//# sourceMappingURL=for-sale.component.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bills_to_pay_bill_to_pay_service__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaidBillsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PaidBillsComponent = (function () {
    function PaidBillsComponent(route, service) {
        var _this = this;
        this.route = route;
        this.service = service;
        this.listPaidBills = [];
        this.listBillToPayPayment = [];
        this.service.listByClientId(this.route.snapshot.params['clientId'], "SIM").subscribe(function (result) {
            _this.listBillToPayPayment = result;
        });
    }
    PaidBillsComponent.prototype.getListBillToPayPayment = function () {
        var _this = this;
        this.listPaidBills.forEach(function (billToPay) {
            if (billToPay.listBillToPayPayment !== null && billToPay.listBillToPayPayment.length > 0) {
                billToPay.listBillToPayPayment.forEach(function (billToPayPayment) {
                    billToPayPayment.description = billToPay.description;
                    billToPayPayment.isChecked = false;
                    _this.listBillToPayPayment.push(billToPayPayment);
                });
            }
        });
    };
    PaidBillsComponent.prototype.getConvertedDate = function (date) {
        return __WEBPACK_IMPORTED_MODULE_3_moment__(date).format('DD/MM/YYYY');
    };
    return PaidBillsComponent;
}());
PaidBillsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-paid-bills',
        template: __webpack_require__(465),
        styles: [__webpack_require__(420)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__bills_to_pay_bill_to_pay_service__["a" /* BillToPayService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__bills_to_pay_bill_to_pay_service__["a" /* BillToPayService */]) === "function" && _b || Object])
], PaidBillsComponent);

var _a, _b;
//# sourceMappingURL=paid-bills.component.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 409:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 410:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, ".logo{\r\n  text-align: center; height: 10mm; border-right: 1mm solid #000000; border-bottom: 1mm solid #000000\r\n}\r\n.img-logo {\r\n  content: url(" + __webpack_require__(505) + ");\r\n}\r\n.bankCode {\r\n  font-size: 5mm; font-family: arial, verdana; font-weight : bold;\r\n  font-style: italic; text-align: center; vertical-align: bottom;\r\n  padding-right: 1mm; border-right: 1mm solid #000000; border-bottom: 1mm solid #000000\r\n}\r\n.bankCode2 {\r\n  font-size: 5mm; font-family: arial, verdana; font-weight : bold;\r\n  font-style: italic; text-align: center; vertical-align: bottom;\r\n  /*border-bottom: 1.2mm solid #000000; border-right: 1.2mm solid #000000;*/\r\n}\r\n.billetNumber {\r\n  font-size: 3.2mm; font-family: arial, verdana; font-weight : bold;\r\n  text-align: center; vertical-align: bottom; padding-bottom : 1mm;\r\n  border-bottom: 1mm solid #000000;\r\n}\r\n.billetRightHeader {\r\n  font-size: 0.2cm; font-family: arial, verdana; padding-left : 1mm;\r\n  border-bottom: 1mm solid #000000; font-weight : bold;\r\n}\r\n.billetRightHeader2 {\r\n  font-size: 0.2cm; font-family: arial, verdana; padding-left : 1mm;\r\n}\r\n.billetRightField {\r\n  font-size: 0.2cm; font-family: arial, verdana; padding-left : 1mm;\r\n  border-left: 0.15mm solid #000000;\r\n}\r\n.billetRightFieldBorderNone {\r\n  font-size: 0.2cm; font-family: arial, verdana; padding-left : 1mm;\r\n}\r\n.billetLeftField2 {\r\n  font-size: 0.2cm; font-family: arial, verdana; padding-left : 1mm; border-left: 0.15mm solid #000000;\r\n}\r\n.billetLeftField {\r\n  font-size: 0.2cm; font-family: arial, verdana; padding-left : 1mm;\r\n}\r\n.billetLeftValue {\r\n  font-size: 0.29cm; font-family: arial, verdana; padding-left : 1mm;\r\n  border-left: 0.15mm solid #000000; border-bottom: 0.15mm solid #000000;\r\n  font-weight: bold;\r\n}\r\n.billetLeftValueBorderNone {\r\n  font-size: 0.29cm; font-family: arial, verdana; padding-left : 1mm;\r\n  font-weight: bold;\r\n}\r\n.billetLeftValue2 {\r\n  font-size: 3mm; font-family: arial, verdana; padding-left : 1mm;\r\n  text-align: center; font-weight: bold; border-left: 0.15mm solid #000000;\r\n  border-bottom: 0.15mm solid #000000;\r\n}\r\n.billetLeftValue3 {\r\n  font-size: 0.29cm; font-family: arial, verdana; padding-left : 1mm;\r\n  text-align: left; font-weight: bold; border-left: 0.15mm solid #000000;\r\n}\r\n.billetRightTextValue {\r\n  font-size: 0.29cm; font-family: arial, verdana; text-align:right;\r\n  padding-right: 1mm; font-weight: bold; border-left: 0.15mm solid #000000; border-bottom: 0.15mm solid #000000;\r\n}\r\n.billetLeftTextValue2 {\r\n  font-size: 0.29cm; font-family: arial, verdana;\r\n  padding-left: 1mm; font-weight: bold; border-left: 0.15mm solid #000000;\r\n}\r\n.tr-border-bottom {\r\n  border-bottom: 0.15mm solid #000000;\r\n}\r\n.logo80mm{\r\n  text-align: left; height: 10mm; border-right: 0.15mm solid #000000;\r\n  padding-left : 1mm; padding-right: 1mm;\r\n  border-bottom: 0.15mm solid #000000; display: table-caption;float: left;\r\n}\r\n.billetRightField80mm {\r\n  font-size: 0.2cm; font-family: arial, verdana; padding-left : 1mm; padding-right: 1mm;\r\n  border-left: 0.15mm solid #000000; display: table-caption;float: left;\r\n}\r\n.bankCode80mm {\r\n  font-size: 5mm; font-family: arial, verdana; font-weight : bold;\r\n  font-style: italic; text-align: center; vertical-align: bottom;\r\n  border-right: none; border-bottom: 0.15mm solid #000000; padding-bottom: 1mm;\r\n}\r\n.billetNumber80mm {\r\n  font-size: 3.2mm; font-family: arial, verdana; font-weight : bold;\r\n  text-align: center; vertical-align: bottom; padding-bottom : 1mm;\r\n  border-bottom: 0.15mm solid #000000; display: block;\r\n}\r\n.billetLeftValue80mm {\r\n  font-size: 0.20cm; font-family: arial, verdana; padding : 0px 0px 6px 1px !important;\r\n  text-align: center; font-weight: bold; border-left: 0.15mm solid #000000;\r\n  border-bottom: 0.15mm solid #000000; display: table-caption;float: left;\r\n}\r\n.trBillet80mm {\r\n  display: table-caption; width: 920px; max-height: 8px !important;\r\n}\r\n#test > tr {\r\n  display: block;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 411:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 412:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 413:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 414:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 415:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 416:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 417:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "#div-payment-receipt {\r\n  float: none;\r\n  margin: 0 auto;\r\n  background-color: #EBFAFF\r\n}\r\n\r\np {\r\n  font-size: 11px;\r\n  margin: 0;\r\n  max-width: 220px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 418:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 419:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "#div-payment-receipt-for-sale {\r\n  float: none;\r\n  margin: 0 auto;\r\n  background-color: #EBFAFF\r\n}\r\n\r\np {\r\n  font-size: 11px;\r\n  margin: 0;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 420:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 421:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 422:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 141,
	"./af.js": 141,
	"./ar": 148,
	"./ar-dz": 142,
	"./ar-dz.js": 142,
	"./ar-kw": 143,
	"./ar-kw.js": 143,
	"./ar-ly": 144,
	"./ar-ly.js": 144,
	"./ar-ma": 145,
	"./ar-ma.js": 145,
	"./ar-sa": 146,
	"./ar-sa.js": 146,
	"./ar-tn": 147,
	"./ar-tn.js": 147,
	"./ar.js": 148,
	"./az": 149,
	"./az.js": 149,
	"./be": 150,
	"./be.js": 150,
	"./bg": 151,
	"./bg.js": 151,
	"./bn": 152,
	"./bn.js": 152,
	"./bo": 153,
	"./bo.js": 153,
	"./br": 154,
	"./br.js": 154,
	"./bs": 155,
	"./bs.js": 155,
	"./ca": 156,
	"./ca.js": 156,
	"./cs": 157,
	"./cs.js": 157,
	"./cv": 158,
	"./cv.js": 158,
	"./cy": 159,
	"./cy.js": 159,
	"./da": 160,
	"./da.js": 160,
	"./de": 163,
	"./de-at": 161,
	"./de-at.js": 161,
	"./de-ch": 162,
	"./de-ch.js": 162,
	"./de.js": 163,
	"./dv": 164,
	"./dv.js": 164,
	"./el": 165,
	"./el.js": 165,
	"./en-au": 166,
	"./en-au.js": 166,
	"./en-ca": 167,
	"./en-ca.js": 167,
	"./en-gb": 168,
	"./en-gb.js": 168,
	"./en-ie": 169,
	"./en-ie.js": 169,
	"./en-nz": 170,
	"./en-nz.js": 170,
	"./eo": 171,
	"./eo.js": 171,
	"./es": 173,
	"./es-do": 172,
	"./es-do.js": 172,
	"./es.js": 173,
	"./et": 174,
	"./et.js": 174,
	"./eu": 175,
	"./eu.js": 175,
	"./fa": 176,
	"./fa.js": 176,
	"./fi": 177,
	"./fi.js": 177,
	"./fo": 178,
	"./fo.js": 178,
	"./fr": 181,
	"./fr-ca": 179,
	"./fr-ca.js": 179,
	"./fr-ch": 180,
	"./fr-ch.js": 180,
	"./fr.js": 181,
	"./fy": 182,
	"./fy.js": 182,
	"./gd": 183,
	"./gd.js": 183,
	"./gl": 184,
	"./gl.js": 184,
	"./gom-latn": 185,
	"./gom-latn.js": 185,
	"./he": 186,
	"./he.js": 186,
	"./hi": 187,
	"./hi.js": 187,
	"./hr": 188,
	"./hr.js": 188,
	"./hu": 189,
	"./hu.js": 189,
	"./hy-am": 190,
	"./hy-am.js": 190,
	"./id": 191,
	"./id.js": 191,
	"./is": 192,
	"./is.js": 192,
	"./it": 193,
	"./it.js": 193,
	"./ja": 194,
	"./ja.js": 194,
	"./jv": 195,
	"./jv.js": 195,
	"./ka": 196,
	"./ka.js": 196,
	"./kk": 197,
	"./kk.js": 197,
	"./km": 198,
	"./km.js": 198,
	"./kn": 199,
	"./kn.js": 199,
	"./ko": 200,
	"./ko.js": 200,
	"./ky": 201,
	"./ky.js": 201,
	"./lb": 202,
	"./lb.js": 202,
	"./lo": 203,
	"./lo.js": 203,
	"./lt": 204,
	"./lt.js": 204,
	"./lv": 205,
	"./lv.js": 205,
	"./me": 206,
	"./me.js": 206,
	"./mi": 207,
	"./mi.js": 207,
	"./mk": 208,
	"./mk.js": 208,
	"./ml": 209,
	"./ml.js": 209,
	"./mr": 210,
	"./mr.js": 210,
	"./ms": 212,
	"./ms-my": 211,
	"./ms-my.js": 211,
	"./ms.js": 212,
	"./my": 213,
	"./my.js": 213,
	"./nb": 214,
	"./nb.js": 214,
	"./ne": 215,
	"./ne.js": 215,
	"./nl": 217,
	"./nl-be": 216,
	"./nl-be.js": 216,
	"./nl.js": 217,
	"./nn": 218,
	"./nn.js": 218,
	"./pa-in": 219,
	"./pa-in.js": 219,
	"./pl": 220,
	"./pl.js": 220,
	"./pt": 222,
	"./pt-br": 221,
	"./pt-br.js": 221,
	"./pt.js": 222,
	"./ro": 223,
	"./ro.js": 223,
	"./ru": 224,
	"./ru.js": 224,
	"./sd": 225,
	"./sd.js": 225,
	"./se": 226,
	"./se.js": 226,
	"./si": 227,
	"./si.js": 227,
	"./sk": 228,
	"./sk.js": 228,
	"./sl": 229,
	"./sl.js": 229,
	"./sq": 230,
	"./sq.js": 230,
	"./sr": 232,
	"./sr-cyrl": 231,
	"./sr-cyrl.js": 231,
	"./sr.js": 232,
	"./ss": 233,
	"./ss.js": 233,
	"./sv": 234,
	"./sv.js": 234,
	"./sw": 235,
	"./sw.js": 235,
	"./ta": 236,
	"./ta.js": 236,
	"./te": 237,
	"./te.js": 237,
	"./tet": 238,
	"./tet.js": 238,
	"./th": 239,
	"./th.js": 239,
	"./tl-ph": 240,
	"./tl-ph.js": 240,
	"./tlh": 241,
	"./tlh.js": 241,
	"./tr": 242,
	"./tr.js": 242,
	"./tzl": 243,
	"./tzl.js": 243,
	"./tzm": 245,
	"./tzm-latn": 244,
	"./tzm-latn.js": 244,
	"./tzm.js": 245,
	"./uk": 246,
	"./uk.js": 246,
	"./ur": 247,
	"./ur.js": 247,
	"./uz": 249,
	"./uz-latn": 248,
	"./uz-latn.js": 248,
	"./uz.js": 249,
	"./vi": 250,
	"./vi.js": 250,
	"./x-pseudo": 251,
	"./x-pseudo.js": 251,
	"./yo": 252,
	"./yo.js": 252,
	"./zh-cn": 253,
	"./zh-cn.js": 253,
	"./zh-hk": 254,
	"./zh-hk.js": 254,
	"./zh-tw": 255,
	"./zh-tw.js": 255
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 422;


/***/ }),

/***/ 454:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n\n"

/***/ }),

/***/ 455:
/***/ (function(module, exports) {

module.exports = "<ng2-toasty></ng2-toasty>\r\n<iframe id=\"ifrOutput\" height=\"700px\" width=\"100%\">\r\n  <div class=\"col-lg-10 col-md-10\" style=\"padding: 0px; margin-top: 15px\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-md-12\" id=\"tablebillet\">\r\n        <table cellSpacing=0 cellPadding=0 border=0>\r\n          <tr>\r\n            <td style='width: 1cm'></td>\r\n            <td style='width: 1cm'></td>\r\n            <td style='width: 1.9cm'></td>\r\n\r\n            <td style='width: 0.8cm'></td>\r\n            <td style='width: 1cm'></td>\r\n            <td style='width: 1cm'></td>\r\n            <td style='width: 1.0cm'></td>\r\n\r\n            <td style='width: 2.3cm'></td>\r\n            <td style='width: 2.3cm'></td>\r\n\r\n            <td style='width: 1.9cm'></td>\r\n\r\n            <td style='width: 1.9cm'></td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=\"11\" style=\"border-top: 0.3mm dashed #000000; font-size: 1mm\">&nbsp;</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=4 class=\"logo\">\r\n              <img style=\"max-height: 50px\" src=\"http://www.inovemoveis.com.br/franquias/2/14830/editor-html/575822.jpg\"/>\r\n            </td>\r\n            <td colspan=\"2\" class=\"bankCode\">104-0</td>\r\n            <td colspan=\"5\" class=\"billetNumber\">\r\n              {{codeBar}}\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=4 class=\"billetRightField\">Cedente</td>\r\n            <td colspan=3 class=\"billetRightField\">\r\n              Agência/Código do Cedente\r\n            </td>\r\n            <td colspan=1 style=\"border-left: none;text-align: right; padding-right: 1mm;\"\r\n                class=\"billetRightField\">Espécie</td>\r\n            <td colspan=1 class=\"billetRightField\">Quantidade</td>\r\n            <td colspan=2 class=\"billetRightField\">Nosso Número</td>\r\n          </tr>\r\n          <tr class=\"tr-border-bottom\">\r\n            <td colspan=4 style=\"border-left: 0.15mm solid #000000; border-bottom: 0.15mm solid #000000;\" class=\"billetLeftValue\">G2 SOFT COMERCIO LTDA - ME</td>\r\n            <td colspan=3 class=\"billetLeftValue\">0044 / 377192-0</td>\r\n            <td colspan=1 style=\"border-left: none; text-align: right;padding-right: 3px;\" class=\"billetLeftValue\">R$</td>\r\n            <td colspan=1 class=\"billetLeftValue\"></td>\r\n            <td colspan=2 style=\"border-left: 0.15mm solid #000000; border-bottom: 0.15mm solid #000000;\" class=\"billetLeftValue text-right\">{{billetShipping?.ourNumber}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=4 class=\"billetRightField\">Número do Documento</td>\r\n            <td colspan=4 class=\"billetRightField\">CPF/CNPJ</td>\r\n            <td colspan=1 class=\"billetRightField\"\r\n                style=\"text-align: right; border-left: none;padding-right: 1mm;\">Vencimento</td>\r\n            <td colspan=2 class=\"billetRightField\">Valor documento</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=4 class=\"billetLeftValue\"></td>\r\n            <td colspan=4 class=\"billetLeftValue\">14.272.237/001-36</td>\r\n            <td colspan=1 class=\"billetLeftValue\"\r\n                style=\"text-align: right; border-left: none;padding-right: 1mm;\">{{getMaturityDate(billetShipping?.maturityDate)}}</td>\r\n            <td colspan=2 class=\"billetLeftValue text-right\">{{billetShipping?.billValue | currency:'BRL':true: '1.2-2'}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=3 class=\"billetRightField\">(-) Desconto / Abatimentos</td>\r\n            <td colspan=2 class=\"billetRightField\">(-) Outras deduções</td>\r\n            <td colspan=2 class=\"billetRightField\">(+) Mora / Multa</td>\r\n            <td colspan=2 class=\"billetRightField\">(+) Outros acréscimos</td>\r\n            <td colspan=2 class=\"billetRightField\">(=) Valor Cobrado</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=3 class=\"billetLeftValue\">&nbsp;</td>\r\n            <td colspan=2 class=\"billetLeftValue\">&nbsp;</td>\r\n            <td colspan=2 class=\"billetLeftValue\">&nbsp;</td>\r\n            <td colspan=2 class=\"billetLeftValue\">&nbsp;</td>\r\n            <td colspan=2 class=\"billetLeftValue\">&nbsp;</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=11 class=\"billetRightField\">Sacado</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=11 class=\"billetLeftValue\">{{client?.name}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=9 class=\"billetRightFieldBorderNone\">Demonstrativo</td>\r\n            <td colspan=2 class=\"billetRightFieldBorderNone text-right\">Autenticação Mecânica</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=11 class=\"billetLeftValueBorderNone\">REFERENTE: {{getCurrentDate()}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=11 class=\"billetLeftValueBorderNone\">COBRANÇA: {{billetShipping?.chargingType}}</td>\r\n          </tr>\r\n\r\n\r\n          <tr>\r\n            <td colspan=11 height=40 valign=top>&nbsp;</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=11 style=\"border-left: none; text-align: right\" class=\"billetLeftField2\">\r\n              Corte na linha pontilhada\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=11 style=\"border-top: 0.3mm dashed #000000; font-size: 1mm\">&nbsp;</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=4 class=\"logo\">\r\n              <!--<img style=\"max-height: 40px;max-width: 195px;margin-bottom: 2px;\" class=\"img-logo\"/>-->\r\n              <img style=\"max-height: 50px\" src=\"http://www.inovemoveis.com.br/franquias/2/14830/editor-html/575822.jpg\"/>\r\n            </td>\r\n            <td colspan=\"2\" class=\"bankCode\" >104-0</td>\r\n            <td colspan=\"5\" class=\"billetNumber\" style=\"vertical-align: bottom\">\r\n              <p id=\"tdCodeBar\" style=\"margin: 0;\">{{codeBar}}</p>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=9 style=\"border-right: none; border-bottom: none\" class=\"billetLeftField2\">Local de Pagamento</td>\r\n            <td colspan=2 class=\"billetRightField\" style=\"border-bottom: none\">Vencimento</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=9 class=\"billetLeftValue3 text-center\">\r\n              PREFERENCIALMENTE NAS CASAS LOTÉRICAS ATÉ O VALOR LIMITE\r\n            </td>\r\n            <td colspan=2 style=\"border-bottom: none\" class=\"billetRightTextValue\">{{getMaturityDate(billetShipping?.maturityDate)}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=9 style=\"border-right: none; border-bottom: none\" class=\"billetLeftField2\">\r\n              Cedente\r\n            </td>\r\n            <td colspan=2 class=\"billetRightField\" style=\"border-bottom: none\">Agência/Código cedente</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=9 class=\"billetLeftValue3\" style=\"border-bottom: 0.15mm solid #000000\">\r\n              G2 SOFT COMERCIO LTDA - ME\r\n            </td>\r\n            <td colspan=2 class=\"billetRightTextValue\" style=\"border-bottom: 0.15mm solid #000000\">0044 / 377192-0</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=2 class=\"billetLeftField2\">Data do documento</td>\r\n            <td colspan=3 class=\"billetLeftField2\">Nº documento</td>\r\n            <td colspan=2 class=\"billetLeftField2\">Espécie doc.</td>\r\n            <td colspan=1 class=\"billetLeftField2\">Aceite</td>\r\n            <td colspan=1 class=\"billetLeftField2\">Data processamento</td>\r\n            <td colspan=2 class=\"billetLeftField2\">Nosso Número</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=2 style=\"border-bottom: none\" class=\"billetLeftValue2\">{{getCurrentDate()}}</td>\r\n            <td colspan=3 class=\"billetLeftTextValue2\">&nbsp;</td>\r\n            <td colspan=2 class=\"billetLeftTextValue2\">DM</td>\r\n            <td colspan=1 class=\"billetLeftTextValue2\">NÃO</td>\r\n            <td colspan=1 class=\"billetLeftTextValue2\">{{getCurrentDate()}}</td>\r\n            <td colspan=2 class=\"billetLeftTextValue2 text-right\">{{billetShipping?.ourNumber}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=2 class=\"billetLeftField2\">Uso do banco</td>\r\n            <td colspan=2 class=\"billetLeftField2\">Carteira</td>\r\n            <td colspan=1 class=\"billetLeftField2\" style=\"border-left: none\">Espécie</td>\r\n            <td colspan=3 class=\"billetLeftField2\" style=\"border-left: none\">Quantidade</td>\r\n            <td colspan=1 class=\"billetLeftField2\">Valor Documento</td>\r\n            <td colspan=2 class=\"billetLeftField2\">(=) Valor documento</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=2 style=\"border-bottom: 0.15mm solid #000000\" class=\"billetLeftValue2\">&nbsp;</td>\r\n            <td colspan=2 style=\"border-bottom: 0.15mm solid #000000\" class=\"billetLeftTextValue2\">SR</td>\r\n            <td colspan=1  class=\"billetLeftTextValue2\" style=\"border-bottom: 0.15mm solid #000000;border-left: none\">R$</td>\r\n            <td colspan=3 class=\"billetLeftTextValue2\" style=\"border-bottom: 0.15mm solid #000000;border-left: none\">&nbsp;</td>\r\n            <td colspan=1 style=\"border-bottom: 0.15mm solid #000000\" class=\"billetLeftTextValue2\">&nbsp;</td>\r\n            <td colspan=2 style=\"border-bottom: 0.15mm solid #000000\" class=\"billetLeftTextValue2 text-right\">{{billetShipping?.billValue | number : '1.2-2'}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=9 class=\"billetLeftField2\">Instruções (Texto de responsibilidade do cedente)</td>\r\n            <td colspan=2 class=\"billetLeftField2\">(-) Desconto / Abatimentos</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=9  class=\"billetLeftValue3\">&nbsp;</td>\r\n            <td colspan=2 class=\"billetLeftValue3\">&nbsp;</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=9 class=\"billetLeftValue3\">NÃO RECEBER APÓS O VENCIMENTO</td>\r\n            <td colspan=2 class=\"billetLeftField2\">(-) Outras deduções</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=9 class=\"billetLeftField2\">&nbsp;</td>\r\n            <td colspan=2 style=\"border-bottom: 0.15mm solid #000000;\" class=\"billetLeftField2\">&nbsp;</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=9 class=\"billetLeftField2\">&nbsp;</td>\r\n            <td colspan=2 class=\"billetLeftField2\">(+) Mora / Multa</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=9 class=\"billetLeftField2\">&nbsp;</td>\r\n            <td colspan=2 class=\"billetLeftField2\">&nbsp;</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=9 class=\"billetLeftField2\">&nbsp;</td>\r\n            <td colspan=2 class=\"billetLeftField2\">(+) Outros acréscimos</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=9 class=\"billetLeftField2\">&nbsp;</td>\r\n            <td colspan=2 class=\"billetLeftField2\" style=\"border-bottom: 0.15mm solid #000000;\">&nbsp;</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=9 class=\"billetLeftField2\">&nbsp;</td>\r\n            <td colspan=2 class=\"billetLeftField2\">(=) Valor cobrado</td>\r\n          </tr>\r\n          <tr>\r\n            <td style=\"border-bottom: 0.15mm solid #000000;\" colspan=9 class=\"billetLeftField2\">&nbsp;</td>\r\n            <td style=\"border-bottom: 0.15mm solid #000000;\" colspan=2 class=\"billetLeftField2\">&nbsp;</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=9 class=\"billetLeftField2\">Sacado</td>\r\n            <td colspan=2 class=\"billetLeftField2\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=9 class=\"billetLeftValue3\">{{client?.name}}</td>\r\n            <td colspan=2 class=\"billetLeftField2\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=9 class=\"billetLeftValue3\">{{client?.address}}, {{client?.addressNumber}}</td>\r\n            <td colspan=2 class=\"billetLeftField2\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td style=\"border-bottom: 0.15mm solid #000000;\" colspan=9 class=\"billetLeftValue3\">\r\n              {{client?.city}} - {{client?.uf}}&nbsp;CEP:&nbsp;{{client?.zipCode}}\r\n            </td>\r\n            <td style=\"border-bottom: 0.15mm solid #000000;\" colspan=2 class=\"billetLeftField2\">Cód. baixa</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=8 style=\"border-left: none\" class=\"billetLeftField2\">Sacado/Avalista</td>\r\n            <td colspan=3 style=\"border-left: none\" class=\"billetLeftField2 text-right\">Autenticação mecânica - <strong>Ficha de Compensação</strong></td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=\"11\" id=\"boleto\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=11 style=\"border-left: none; text-align: right\" class=\"billetLeftField2\">\r\n              Corte na linha pontilhada\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=\"11\" style=\"border-top: 0.3mm dashed #000000; font-size: 1mm\">&nbsp;</td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</iframe>\r\n\r\n"

/***/ }),

/***/ 456:
/***/ (function(module, exports) {

module.exports = "<ng2-toasty></ng2-toasty>\r\n<div class=\"col-lg-12 col-md-12\" style=\"padding: 0px\">\r\n  <ng2-slim-loading-bar></ng2-slim-loading-bar>\r\n</div>\r\n<div class=\"col-lg-12 col-md-12\" style=\"padding: 0px;\" *ngIf=\"!isPaymentSelected && listBillToPayPayment.length > 0\">\r\n  <table class=\"table table-bordered\">\r\n    <thead>\r\n      <tr>\r\n        <th class=\"text-center col-lg-2 col-md-2\">Vencimento</th>\r\n        <th class=\"text-left col-md-6 col-lg-6\">Descrição</th>\r\n        <th class=\"text-center col-lg-2 col-md-2\">Valor</th>\r\n        <th class=\"text-center col-lg-1 col-md-1\"></th>\r\n        <th class=\"text-center col-lg-1 col-md-1\"></th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let billToPayPayment of listBillToPayPayment\r\n          | paginate: {id: 'tableBillsToPay', itemsPerPage: 10, currentPage: page }\"\r\n          [ngClass]=\"{'bg-danger' : billToPayPayment.dateStatus === 'IS_BEFORE',\r\n          'bg-info': billToPayPayment.dateStatus === 'IS_SAME'}\">\r\n        <td class=\"text-center\">{{getConvertedDate(billToPayPayment.maturity)}}</td>\r\n        <td class=\"text-left\" *ngIf=\"billToPayPayment.dateStatus !== 'IS_BEFORE'\">\r\n          {{billToPayPayment.description}}\r\n        </td>\r\n        <td class=\"text-left\" style=\"color: red;\" *ngIf=\"billToPayPayment.dateStatus === 'IS_BEFORE'\">\r\n          {{billToPayPayment.description}}&nbsp;-&nbsp;VENCIDO\r\n        </td>\r\n        <td class=\"text-center\">R$ {{billToPayPayment.amount | number : '1.2-2'}}</td>\r\n        <td class=\"text-center\">\r\n          <input type=\"checkbox\" [(ngModel)]=\"billToPayPayment.isChecked\">\r\n        </td>\r\n        <td *ngIf=\"!isBilletOld(billToPayPayment.maturity)\">\r\n          <button *ngIf=\"billToPayPayment.billetShipping !== null &&\r\n          billToPayPayment.billetShipping !== undefined && billToPayPayment.dateStatus !== 'IS_BEFORE'\" class=\"btn btn-primary\" id=\"btnPrintBillet_{{billToPayPayment.billetShipping?.id}}\"\r\n          (click)=\"showModalChoosePrintType(billToPayPayment.billetShipping, billToPayPayment.bankId)\">\r\n            <span class=\"fa fa-file-text-o\"></span>&nbsp;Boleto\r\n          </button>\r\n          <button *ngIf=\"billToPayPayment.billetShipping !== null &&\r\n          billToPayPayment.billetShipping !== undefined && billToPayPayment.dateStatus === 'IS_BEFORE'\" class=\"btn btn-primary\" id=\"btnPrintBilletBefore_{{billToPayPayment.billetShipping?.id}}\"\r\n                  (click)=\"showModalBillet(billToPayPayment.billetShipping, billToPayPayment.bankId)\">\r\n            <span class=\"fa fa-file-text-o\"></span>&nbsp;Boleto\r\n          </button>\r\n        </td>\r\n        <td *ngIf=\"isBilletOld(billToPayPayment.maturity)\" (click)=\"modalInfoBilletLate.show()\">\r\n          <button class=\"btn btn-default\">\r\n            <span class=\"fa fa-info\"></span>\r\n          </button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <pagination-controls id=\"tableBillsToPay\" previousLabel=\"Anterior\"\r\n                       nextLabel=\"Próximo\"\r\n                       (pageChange)=\"page = $event\">\r\n  </pagination-controls>\r\n\r\n  <div bsModal id=\"modalLateBill\" #modalLateBill=\"bs-modal\" #childModal=\"bs-modal\" class=\"modal fade\"\r\n       tabindex=\"-1\" role=\"dialog\"\r\n       aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n    <app-modal-late-billet [codeBar]=\"codeBar\" [modalLateBill]=\"modalLateBill\" [billetShipping]=\"billetShipping\"\r\n                           [bank]=\"bank\" (notify)=\"onNotify($event)\">\r\n    </app-modal-late-billet>\r\n  </div>\r\n\r\n  <div bsModal id=\"modalChoosePrintType\" #modalChoosePrintType=\"bs-modal\" #childModal=\"bs-modal\" class=\"modal fade\"\r\n       tabindex=\"-1\" role=\"dialog\"\r\n       aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n    <app-modal-choose-print-type [modalChoosePrintType]=\"modalChoosePrintType\" (notify)=\"onNotify($event)\"></app-modal-choose-print-type>\r\n  </div>\r\n\r\n  <div bsModal id=\"modalInfoBilletLate\" #modalInfoBilletLate=\"bs-modal\" #childModal=\"bs-modal\" class=\"modal fade\"\r\n       tabindex=\"-1\" role=\"dialog\"\r\n       aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n    <app-info-billet-late [modal]=\"modalInfoBilletLate\"></app-info-billet-late>\r\n  </div>\r\n\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-lg-9 col-md-9\"  *ngIf=\"!isPaymentSelected\">\r\n    <!--<img src=\"http://cielohlg.sensedia.com/api-portal/sites/default/files/selo4.png\" style=\"cursor: pointer\" (click)=\"payBills()\" />-->\r\n  </div>\r\n  <div class=\"col-lg-3 col-md-3\" *ngIf=\"!isPaymentSelected && listBillToPayPayment.length > 0\">\r\n    <img src=\"assets/images/pagar-agora.png\"\r\n         class=\"img-responsive\" alt=\"\" style=\"margin-top: 25px; cursor: pointer\" (click)=\"payBills()\">\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-12 col-md-12\" *ngIf=\"isPaymentSelected\">\r\n    <table class=\"table table-striped table-bordered\">\r\n      <thead>\r\n      <tr>\r\n        <th class=\"text-center col-lg-1 col-md-1\">Venc.</th>\r\n        <th class=\"text-center col-lg-1 col-md-1\">Dias/Atraso</th>\r\n        <th class=\"text-left col-lg-2 col-md-2\">Descrição</th>\r\n        <th class=\"text-center col-lg-1 col-md-1\">Valor</th>\r\n        <th class=\"text-center col-lg-2 col-md-2\">Juros % / Valor</th>\r\n        <th class=\"text-center col-lg-2 col-md-2\">Mora % / Valor</th>\r\n        <th class=\"text-center col-lg-2 col-md-2\">Encargos % / Valor</th>\r\n        <th class=\"text-center col-lg-1 col-md-1\">SubTotal</th>\r\n      </tr>\r\n      </thead>\r\n      <tbody>\r\n      <tr *ngFor=\"let billToPayment of listSelectedBillToPayPayment\r\n          | paginate: {id: 'tableBillsToPaySelected', itemsPerPage: 10, currentPage: page }\">\r\n        <td class=\"text-center col-lg-1 col-md-1\">{{getConvertedDate(billToPayment.maturity)}}</td>\r\n        <td class=\"text-center col-lg-1 col-md-1\">{{billToPayment.daysInArrears >= 0 ? billToPayment.daysInArrears : 0}}</td>\r\n        <td class=\"text-left col-lg-2 col-md-2\">{{billToPayment.description}}</td>\r\n        <td class=\"text-center col-lg-1 col-md-1\">{{billToPayment.amount | number : '1.2-2'}}</td>\r\n        <td class=\"text-center col-lg-2 col-md-2\">{{typeInterestCharge.percentInterest}} % / R$ {{billToPayment.amountInterest | number : '1.2-2'}}</td>\r\n        <td class=\"text-center col-lg-2 col-md-2\">{{typeInterestCharge.percentLiveDays}} % / R$ {{billToPayment.amountLiveDays | number : '1.2-2'}}</td>\r\n        <td class=\"text-center col-lg-2 col-md-2\">{{typeInterestCharge.percentCharges}} % / R$ {{billToPayment.amountCharges | number : '1.2-2'}}</td>\r\n        <td class=\"text-center col-lg-1 col-md-1\">{{billToPayment.subTotal | number : '1.2-2'}}</td>\r\n      </tr>\r\n      </tbody>\r\n    </table>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-10 col-md-10\">\r\n        <pagination-controls id=\"tableBillsToPaySelected\" previousLabel=\"Anterior\"\r\n                             nextLabel=\"Próximo\"\r\n                             (pageChange)=\"page = $event\"></pagination-controls>\r\n      </div>\r\n      <div class=\"col-lg-2 col-md-2\">\r\n        <label class=\"control-label pull-right\">Total: {{totalPayment | currency:'BRL':true: '1.2-2'}}</label>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\" *ngIf=\"listSelectedBillToPayPayment.length > 0\">\r\n  <div class=\"col-lg-4 col-md-4\" *ngIf=\"isPaymentSelected\">\r\n    <label class=\"control-label\">Forma de Pagamento</label>\r\n    <select name=\"paymentMethod\" id=\"paymentMethod\" class=\"form-control\" [(ngModel)]=\"paymentMethod\">\r\n      <option value=\"CREDIT\">Cartão de Crédito</option>\r\n      <!--<option value=\"DEBIT\">Cartão de Débito</option>-->\r\n    </select>\r\n  </div>\r\n</div>\r\n\r\n<iframe id=\"ifrOutput\" height=\"700px\" width=\"100%\" style=\"display: none\">\r\n  <div class=\"col-lg-10 col-md-10\" style=\"padding: 0px; margin-top: 15px\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-md-12\" id=\"tablebillet\">\r\n        <table cellSpacing=0 cellPadding=0>\r\n          <tr>\r\n            <td style='width: 1cm'></td>\r\n            <td style='width: 1cm'></td>\r\n            <td style='width: 1.9cm'></td>\r\n\r\n            <td style='width: 0.8cm'></td>\r\n            <td style='width: 1cm'></td>\r\n            <td style='width: 1cm'></td>\r\n            <td style='width: 1.0cm'></td>\r\n\r\n            <td style='width: 2.3cm'></td>\r\n            <td style='width: 2.3cm'></td>\r\n\r\n            <td style='width: 1.9cm'></td>\r\n\r\n            <td style='width: 1.9cm'></td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=\"11\" style=\"border-top: 0.3mm dashed #000000; font-size: 1mm\">&nbsp;</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=4 class=\"logo\">\r\n              <img style=\"max-height: 50px\" src=\"http://www.inovemoveis.com.br/franquias/2/14830/editor-html/575822.jpg\"/>\r\n              <!--<img id=\"img-caixa\" style=\"max-height: 40px;max-width: 195px;margin-bottom: 2px;\" class=\"img-logo\"/>-->\r\n            </td>\r\n            <td colspan=\"2\" class=\"bankCode\">{{bank?.bankCode}}-0</td>\r\n            <td colspan=\"5\" class=\"billetNumber\">\r\n              <!--Code Bar-->\r\n              <!--Beneficiário\r\n              <p style=\"padding-top: 5px;font-family: arial, verdana;font-size: 0.2cm;\" class=\"text-right\">\r\n                G2 Soft Comercio LTDA - ME, Rua Presidente Kennedy, 122, Centro. 14.272.237/0001-36</p>-->\r\n              {{codeBar}}\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=4 class=\"billetRightField\">Cedente</td>\r\n            <td colspan=3 class=\"billetRightField\">\r\n              Agência/Código do Cedente\r\n            </td>\r\n            <td colspan=1 style=\"border-left: none;text-align: right; padding-right: 1mm;\"\r\n                class=\"billetRightField\">Espécie</td>\r\n            <td colspan=1 class=\"billetRightField\">Quantidade</td>\r\n            <td colspan=2 class=\"billetRightField\">Nosso Número</td>\r\n          </tr>\r\n          <tr class=\"tr-border-bottom\">\r\n            <td colspan=4 style=\"border-left: 0.15mm solid #000000; border-bottom: 0.15mm solid #000000;\" class=\"billetLeftValue\">G2 SOFT COMERCIO LTDA - ME</td>\r\n            <td colspan=3 class=\"billetLeftValue\">{{bank?.agency}} / 377192-0</td>\r\n            <td colspan=1 style=\"border-left: none; text-align: right;padding-right: 3px;\" class=\"billetLeftValue\">R$</td>\r\n            <td colspan=1 class=\"billetLeftValue\"></td>\r\n            <td colspan=2 style=\"border-left: 0.15mm solid #000000; border-bottom: 0.15mm solid #000000;\" class=\"billetLeftValue text-right\">{{billetShipping?.ourNumber}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=4 class=\"billetRightField\">Número do Documento</td>\r\n            <td colspan=4 class=\"billetRightField\">CPF/CNPJ</td>\r\n            <td colspan=1 class=\"billetRightField\"\r\n                style=\"text-align: right; border-left: none;padding-right: 1mm;\">Vencimento</td>\r\n            <td colspan=2 class=\"billetRightField\">Valor documento</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=4 class=\"billetLeftValue\"></td>\r\n            <td colspan=4 class=\"billetLeftValue\">14.272.237/001-36</td>\r\n            <td colspan=1 class=\"billetLeftValue\"\r\n                style=\"text-align: right; border-left: none;padding-right: 1mm;\">{{getMaturityDate(billetShipping?.maturityDate)}}</td>\r\n            <td colspan=2 class=\"billetLeftValue text-right\">{{billetShipping?.billValue | currency:'BRL':true: '1.2-2'}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=3 class=\"billetRightField\">(-) Desconto / Abatimentos</td>\r\n            <td colspan=2 class=\"billetRightField\">(-) Outras deduções</td>\r\n            <td colspan=2 class=\"billetRightField\">(+) Mora / Multa</td>\r\n            <td colspan=2 class=\"billetRightField\">(+) Outros acréscimos</td>\r\n            <td colspan=2 class=\"billetRightField\">(=) Valor Cobrado</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=3 class=\"billetLeftValue\">&nbsp;</td>\r\n            <td colspan=2 class=\"billetLeftValue\">&nbsp;</td>\r\n            <td colspan=2 class=\"billetLeftValue\">&nbsp;</td>\r\n            <td colspan=2 class=\"billetLeftValue\">&nbsp;</td>\r\n            <td colspan=2 class=\"billetLeftValue\">&nbsp;</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=11 class=\"billetRightField\">Sacado</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=11 class=\"billetLeftValue\">{{client?.name}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=9 class=\"billetRightFieldBorderNone\">Demonstrativo</td>\r\n            <td colspan=2 class=\"billetRightFieldBorderNone text-right\">Autenticação Mecânica</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=11 class=\"billetLeftValueBorderNone\">REFERENTE: {{getCurrentDate()}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=11 class=\"billetLeftValueBorderNone\">COBRANÇA: {{billetShipping?.chargingType}}</td>\r\n          </tr>\r\n\r\n\r\n          <tr>\r\n            <td colspan=11 height=40 valign=top>&nbsp;</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=11 style=\"border-left: none; text-align: right\" class=\"billetLeftField2\">\r\n              Corte na linha pontilhada\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=11 style=\"border-top: 0.3mm dashed #000000; font-size: 1mm\">&nbsp;</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=4 class=\"logo\">\r\n              <!--<img style=\"max-height: 40px;max-width: 195px;margin-bottom: 2px;\" class=\"img-logo\"/>-->\r\n              <img style=\"max-height: 50px\" src=\"http://www.inovemoveis.com.br/franquias/2/14830/editor-html/575822.jpg\"/>\r\n            </td>\r\n            <td colspan=\"2\" class=\"bankCode\">{{bank?.bankCode}}-0</td>\r\n            <td colspan=\"5\" class=\"billetNumber\" style=\"vertical-align: bottom\">\r\n              <p id=\"tdCodeBar\" style=\"margin: 0;\">{{codeBar}}</p>\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=9 style=\"border-right: none; border-bottom: none\" class=\"billetLeftField2\">Local de Pagamento</td>\r\n            <td colspan=2 class=\"billetRightField\" style=\"border-bottom: none\">Vencimento</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=9 class=\"billetLeftValue3 text-center\">\r\n              PREFERENCIALMENTE NAS CASAS LOTÉRICAS ATÉ O VALOR LIMITE\r\n            </td>\r\n            <td colspan=2 style=\"border-bottom: none\" class=\"billetRightTextValue\">{{getMaturityDate(billetShipping?.maturityDate)}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=9 style=\"border-right: none; border-bottom: none\" class=\"billetLeftField2\">\r\n              Cedente\r\n            </td>\r\n            <td colspan=2 class=\"billetRightField\" style=\"border-bottom: none\">Agência/Código cedente</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=9 class=\"billetLeftValue3\" style=\"border-bottom: 0.15mm solid #000000\">\r\n              G2 SOFT COMERCIO LTDA - ME\r\n            </td>\r\n            <td colspan=2 class=\"billetRightTextValue\" style=\"border-bottom: 0.15mm solid #000000\">{{bank?.agency}} / 377192-0</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=2 class=\"billetLeftField2\">Data do documento</td>\r\n            <td colspan=3 class=\"billetLeftField2\">Nº documento</td>\r\n            <td colspan=2 class=\"billetLeftField2\">Espécie doc.</td>\r\n            <td colspan=1 class=\"billetLeftField2\">Aceite</td>\r\n            <td colspan=1 class=\"billetLeftField2\">Data processamento</td>\r\n            <td colspan=2 class=\"billetLeftField2\">Nosso Número</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=2 style=\"border-bottom: none\" class=\"billetLeftValue2\">{{getCurrentDate()}}</td>\r\n            <td colspan=3 class=\"billetLeftTextValue2\">&nbsp;</td>\r\n            <td colspan=2 class=\"billetLeftTextValue2\">DM</td>\r\n            <td colspan=1 class=\"billetLeftTextValue2\">NÃO</td>\r\n            <td colspan=1 class=\"billetLeftTextValue2\">{{getCurrentDate()}}</td>\r\n            <td colspan=2 class=\"billetLeftTextValue2 text-right\">{{billetShipping?.ourNumber}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=2 class=\"billetLeftField2\">Uso do banco</td>\r\n            <td colspan=2 class=\"billetLeftField2\">Carteira</td>\r\n            <td colspan=1 class=\"billetLeftField2\" style=\"border-left: none\">Espécie</td>\r\n            <td colspan=3 class=\"billetLeftField2\" style=\"border-left: none\">Quantidade</td>\r\n            <td colspan=1 class=\"billetLeftField2\">Valor Documento</td>\r\n            <td colspan=2 class=\"billetLeftField2\">(=) Valor documento</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=2 style=\"border-bottom: 0.15mm solid #000000\" class=\"billetLeftValue2\">&nbsp;</td>\r\n            <td colspan=2 style=\"border-bottom: 0.15mm solid #000000\" class=\"billetLeftTextValue2\">SR</td>\r\n            <td colspan=1  class=\"billetLeftTextValue2\" style=\"border-bottom: 0.15mm solid #000000;border-left: none\">R$</td>\r\n            <td colspan=3 class=\"billetLeftTextValue2\" style=\"border-bottom: 0.15mm solid #000000;border-left: none\">&nbsp;</td>\r\n            <td colspan=1 style=\"border-bottom: 0.15mm solid #000000\" class=\"billetLeftTextValue2\">&nbsp;</td>\r\n            <td colspan=2 style=\"border-bottom: 0.15mm solid #000000\" class=\"billetLeftTextValue2 text-right\">{{billetShipping?.billValue | number : '1.2-2'}}</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=9 class=\"billetLeftField2\">Instruções (Texto de responsibilidade do cedente)</td>\r\n            <td colspan=2 class=\"billetLeftField2\">(-) Desconto / Abatimentos</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=9  class=\"billetLeftValue3\">&nbsp;</td>\r\n            <td colspan=2 class=\"billetLeftValue3\">&nbsp;</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=9 class=\"billetLeftValue3\">NÃO RECEBER APÓS O VENCIMENTO</td>\r\n            <td colspan=2 class=\"billetLeftField2\">(-) Outras deduções</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=9 class=\"billetLeftField2\">&nbsp;</td>\r\n            <td colspan=2 style=\"border-bottom: 0.15mm solid #000000;\" class=\"billetLeftField2\">&nbsp;</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=9 class=\"billetLeftField2\">&nbsp;</td>\r\n            <td colspan=2 class=\"billetLeftField2\">(+) Mora / Multa</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=9 class=\"billetLeftField2\">&nbsp;</td>\r\n            <td colspan=2 class=\"billetLeftField2\">&nbsp;</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=9 class=\"billetLeftField2\">&nbsp;</td>\r\n            <td colspan=2 class=\"billetLeftField2\">(+) Outros acréscimos</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=9 class=\"billetLeftField2\">&nbsp;</td>\r\n            <td colspan=2 class=\"billetLeftField2\" style=\"border-bottom: 0.15mm solid #000000;\">&nbsp;</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=9 class=\"billetLeftField2\">&nbsp;</td>\r\n            <td colspan=2 class=\"billetLeftField2\">(=) Valor cobrado</td>\r\n          </tr>\r\n          <tr>\r\n            <td style=\"border-bottom: 0.15mm solid #000000;\" colspan=9 class=\"billetLeftField2\">&nbsp;</td>\r\n            <td style=\"border-bottom: 0.15mm solid #000000;\" colspan=2 class=\"billetLeftField2\">&nbsp;</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=9 class=\"billetLeftField2\">Sacado</td>\r\n            <td colspan=2 class=\"billetLeftField2\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=9 class=\"billetLeftValue3\">{{client?.name}}</td>\r\n            <td colspan=2 class=\"billetLeftField2\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=9 class=\"billetLeftValue3\">{{client?.address}}, {{client?.addressNumber}}</td>\r\n            <td colspan=2 class=\"billetLeftField2\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td style=\"border-bottom: 0.15mm solid #000000;\" colspan=9 class=\"billetLeftValue3\">\r\n              {{client?.city}} - {{client?.uf}}&nbsp;CEP:&nbsp;{{client?.zipCode}}\r\n            </td>\r\n            <td style=\"border-bottom: 0.15mm solid #000000;\" colspan=2 class=\"billetLeftField2\">Cód. baixa</td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=8 style=\"border-left: none\" class=\"billetLeftField2\">Sacado/Avalista</td>\r\n            <td colspan=3 style=\"border-left: none\" class=\"billetLeftField2 text-right\">Autenticação mecânica - <strong>Ficha de Compensação</strong></td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=\"11\" id=\"boleto\"></td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=11 style=\"border-left: none; text-align: right\" class=\"billetLeftField2\">\r\n              Corte na linha pontilhada\r\n            </td>\r\n          </tr>\r\n          <tr>\r\n            <td colspan=\"11\" style=\"border-top: 0.3mm dashed #000000; font-size: 1mm\">&nbsp;</td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</iframe>\r\n\r\n<iframe id=\"ifrOutput80mm\" height=\"252.6px\" width=\"100%\" style=\"display: none;\">\r\n  <div class=\"col-lg-12 col-md-12\" id=\"tablebillet80mm\" style=\"max-height: 252.6px\">\r\n    <table class=\"table\" cellSpacing=0 cellPadding=0 style=\"display: block\">\r\n      <tr>\r\n        <td colspan=3 class=\"logo80mm\" style=\"width: 2.9cm\">\r\n          <img style=\"max-height: 22px\" src=\"http://www.inovemoveis.com.br/franquias/2/14830/editor-html/575822.jpg\"/>\r\n        </td>\r\n        <td colspan=2 style=\"width: 2.8cm\" class=\"bankCode80mm\">{{bank?.bankCode}}-0</td>\r\n        <td colspan=1 style=\"float: left\">&nbsp;</td>\r\n        <td colspan=1 style=\"width: 2.81cm\" class=\"logo80mm\">\r\n          <img style=\"max-height: 22px\" src=\"http://www.inovemoveis.com.br/franquias/2/14830/editor-html/575822.jpg\"/>\r\n        </td>\r\n        <td colspan=\"6\" style=\"width: 15.11cm;\" class=\"billetNumber80mm\" id=\"tdBilletCodeBar80mmValue\">\r\n          {{codeBar}}\r\n        </td>\r\n      </tr>\r\n      <tr class=\"trBillet80mm\">\r\n        <td colspan=1 class=\"billetRightField80mm\">&nbsp;</td>\r\n        <td colspan=2 style=\"width: 2.4cm\" class=\"billetRightField80mm\">Id Documento</td>\r\n        <td colspan=2 class=\"billetRightField80mm\" style=\"border-right: 0.15mm solid #000000;width:  2.6cm\">\r\n          Número Documento\r\n        </td>\r\n        <td colspan=1 style=\"float: left;\">&nbsp;</td>\r\n        <td colspan=6 style=\"width: 15cm\" class=\"billetRightField80mm\">Local de pagamento</td>\r\n        <td colspan=1 style=\"border-right: 0.15mm solid #000000;width: 2.5cm\" class=\"billetRightField80mm\">Vencimento</td>\r\n      </tr>\r\n      <tr class=\"trBillet80mm\">\r\n        <td colspan=1 class=\"billetLeftValue80mm\">&nbsp;</td>\r\n        <td colspan=2 style=\"width: 2.4cm\" class=\"billetLeftValue80mm\">{{billetShipping?.id}}</td>\r\n        <td colspan=2 class=\"billetLeftValue80mm\" style=\"border-right: 0.15mm solid #000000;width:  2.6cm\">\r\n          {{billetShipping?.id}}\r\n        </td>\r\n        <td colspan=1 style=\"float: left;\">&nbsp;</td>\r\n        <td colspan=6 style=\"width: 15cm\" class=\"billetLeftValue80mm\">\r\n          PREFERENCIALMENTE NAS CASAS LOTÉRICAS ATÉ O VALOR LIMITE\r\n        </td>\r\n        <td colspan=1 style=\"border-right: 0.15mm solid #000000;width: 2.5cm\"\r\n            class=\"billetLeftValue80mm\">{{getMaturityDate(billetShipping?.maturityDate)}}\r\n        </td>\r\n      </tr>\r\n      <tr class=\"trBillet80mm\">\r\n        <td colspan=1 class=\"billetRightField80mm\">&nbsp;</td>\r\n        <td colspan=2 style=\"width: 2.7cm\" class=\"billetRightField80mm\">Agência / Código Cedente</td>\r\n        <td colspan=2 class=\"billetRightField80mm\" style=\"border-right: 0.15mm solid #000000;width:  2.3cm\">\r\n          Vencimento\r\n        </td>\r\n        <td colspan=1 style=\"float: left\">&nbsp;</td>\r\n        <td colspan=6 style=\"width: 15cm\" class=\"billetRightField80mm\">Beneficiário</td>\r\n        <td colspan=1 style=\"border-right: 0.15mm solid #000000;width: 2.5cm\" class=\"billetRightField80mm\">\r\n          Agência / Código Cedente\r\n        </td>\r\n      </tr>\r\n      <tr class=\"trBillet80mm\">\r\n        <td colspan=1 class=\"billetLeftValue80mm\">&nbsp;</td>\r\n        <td colspan=2 class=\"billetLeftValue80mm\" style=\"width: 2.7cm\">{{bank?.agency}} / 377192-0</td>\r\n        <td colspan=2 class=\"billetLeftValue80mm\" style=\"border-right: 0.15mm solid #000000;width:  2.3cm\">\r\n          {{getMaturityDate(billetShipping?.maturityDate)}}\r\n        </td>\r\n        <td colspan=1 style=\"float: left\">&nbsp;</td>\r\n        <td colspan=6 class=\"billetLeftValue80mm\" style=\"width: 15cm\">\r\n          G2 SOFT COMERCIO LTDA - ME&nbsp;&nbsp;CNPJ:14.272.237/0001-36\r\n        </td>\r\n        <td colspan=1 style=\"border-right: 0.15mm solid #000000; width: 2.5cm\" class=\"billetLeftValue80mm\">\r\n          {{bank?.agency}} / 377192-0\r\n        </td>\r\n      </tr>\r\n      <tr class=\"trBillet80mm\">\r\n        <td colspan=1 class=\"billetRightField80mm\">&nbsp;</td>\r\n        <td colspan=4 class=\"billetRightField80mm\" style=\"border-right: 0.15mm solid #000000; width: 5.23cm;\">\r\n          Nosso Número\r\n        </td>\r\n        <td colspan=1 style=\"float: left\">&nbsp;</td>\r\n        <td colspan=1 style=\"width: 3cm\" class=\"billetRightField80mm\">Data Documento</td>\r\n        <td colspan=2 style=\"width: 4cm\" class=\"billetRightField80mm\">Número Documento</td>\r\n        <td colspan=1 style=\"width: 3cm\" class=\"billetRightField80mm\">Espécie Documento</td>\r\n        <td colspan=1 style=\"width: 1cm\" class=\"billetRightField80mm\">Aceite</td>\r\n        <td colspan=1 style=\"width: 3.09cm\" class=\"billetRightField80mm\">Data Processamento</td>\r\n        <td colspan=1 class=\"billetRightField80mm\" style=\"border-right: 0.15mm solid #000000; width: 2.5cm\">\r\n          Nosso Número\r\n        </td>\r\n      </tr>\r\n      <tr class=\"trBillet80mm\">\r\n        <td colspan=1 class=\"billetLeftValue80mm\">&nbsp;</td>\r\n        <td colspan=4 class=\"billetLeftValue80mm\" style=\"border-right: 0.15mm solid #000000; width: 5.23cm\">\r\n          {{billetShipping?.ourNumber}}\r\n        </td>\r\n        <td colspan=1 style=\"float: left\">&nbsp;</td>\r\n        <td colspan=1 style=\"width: 3cm\" class=\"billetLeftValue80mm\">{{getCurrentDate()}}</td>\r\n        <td colspan=2 style=\"width: 4cm\" class=\"billetLeftValue80mm\">{{billetShipping?.id}}</td>\r\n        <td colspan=1 style=\"width: 3cm\" class=\"billetLeftValue80mm\">R$</td>\r\n        <td colspan=1 style=\"width: 1cm\" class=\"billetLeftValue80mm\">&nbsp;</td>\r\n        <td colspan=1 style=\"width: 3.09cm\" class=\"billetLeftValue80mm\">{{getCurrentDate()}}</td>\r\n        <td colspan=1 class=\"billetLeftValue80mm\" style=\"border-right: 0.15mm solid #000000; width: 2.5cm\">\r\n          {{billetShipping?.ourNumber}}\r\n        </td>\r\n      </tr>\r\n      <tr class=\"trBillet80mm\">\r\n        <td colspan=1 class=\"billetRightField80mm\">&nbsp;</td>\r\n        <td colspan=1 class=\"billetRightField80mm\" style=\"width: 1cm;\">Espécie</td>\r\n        <td colspan=3 class=\"billetRightField80mm\" style=\"border-right: 0.15mm solid #000000; width: 4cm\">\r\n          Valor Documento\r\n        </td>\r\n        <td colspan=1 style=\"float: left\">&nbsp;</td>\r\n        <td colspan=1 style=\"width: 3cm\" class=\"billetRightField80mm\">Uso Banco</td>\r\n        <td colspan=2 style=\"width: 4cm;\" class=\"billetRightField80mm\">Carteira</td>\r\n        <td colspan=1 style=\"width: 1cm;\" class=\"billetRightField80mm\">Espécie</td>\r\n        <td colspan=1 style=\"width: 3cm;\" class=\"billetRightField80mm\">Quantidade</td>\r\n        <td colspan=1 style=\"width: 3.09cm;\" class=\"billetRightField80mm\">Valor</td>\r\n        <td colspan=1 class=\"billetRightField80mm\" style=\"border-right: 0.15mm solid #000000; width: 2.5cm\">\r\n          Valor Documento\r\n        </td>\r\n      </tr>\r\n      <tr class=\"trBillet80mm\">\r\n        <td colspan=1 class=\"billetLeftValue80mm\">&nbsp;</td>\r\n        <td colspan=1 class=\"billetLeftValue80mm\" style=\"width: 1cm;\">R$</td>\r\n        <td colspan=3 class=\"billetLeftValue80mm\" style=\"border-right: 0.15mm solid #000000; width: 4cm\">\r\n          {{billetShipping?.billValue | number : '1.2-2'}}\r\n        </td>\r\n        <td colspan=1 style=\"float: left\">&nbsp;</td>\r\n        <td colspan=1 class=\"billetLeftValue80mm\" style=\"width: 3cm\">&nbsp;</td>\r\n        <td colspan=2 class=\"billetLeftValue80mm\" style=\"width: 4cm\">{{bank?.walletShippingNumber}}</td>\r\n        <td colspan=1 class=\"billetLeftValue80mm\" style=\"width: 1cm\">R$</td>\r\n        <td colspan=1 class=\"billetLeftValue80mm\" style=\"width: 3cm\">&nbsp;</td>\r\n        <td colspan=1 class=\"billetLeftValue80mm\" style=\"width: 3.09cm\">&nbsp;</td>\r\n        <td colspan=1 class=\"billetLeftValue80mm\" style=\"border-right: 0.15mm solid #000000; width: 2.5cm\">\r\n          {{billetShipping?.billValue | number : '1.2-2'}}\r\n        </td>\r\n      </tr>\r\n      <tr class=\"trBillet80mm\">\r\n        <td colspan=1 class=\"billetRightField80mm\">&nbsp;</td>\r\n        <td colspan=4 class=\"billetRightField80mm\" style=\"width: 5.23cm; border-right: 0.15mm solid #000000;\">\r\n          (-) Desconto/Abatimento\r\n        </td>\r\n        <td colspan=1 style=\"float: left\">&nbsp;</td>\r\n        <td colspan=6 class=\"billetRightField80mm\" style=\"width: 14.98cm\">Texto de Responsibilidade do Cedente</td>\r\n        <td colspan=1 class=\"billetRightField80mm\" style=\"border-right: 0.15mm solid #000000; width: 2.5cm\">\r\n          (-) Desconto/Abatimento\r\n        </td>\r\n      </tr>\r\n      <tr class=\"trBillet80mm\">\r\n        <td colspan=1 class=\"billetLeftValue80mm\">&nbsp;</td>\r\n        <td colspan=4 class=\"billetLeftValue80mm\" style=\"border-right: 0.15mm solid #000000; width: 5.23cm\">&nbsp;</td>\r\n        <td colspan=1 style=\"float: left\">&nbsp;</td>\r\n        <td colspan=6 class=\"billetLeftValue80mm\" style=\"width: 14.98cm; border-bottom: none\">&nbsp;</td>\r\n        <td colspan=1 class=\"billetLeftValue80mm\" style=\"border-right: 0.15mm solid #000000; width: 2.5cm\">&nbsp;</td>\r\n      </tr>\r\n      <tr class=\"trBillet80mm\">\r\n        <td colspan=1 class=\"billetRightField80mm\">&nbsp;</td>\r\n        <td colspan=4 class=\"billetRightField80mm\" style=\"width: 5.23cm; border-right: 0.15mm solid #000000;\">\r\n          (-) Outras Deduções\r\n        </td>\r\n        <td colspan=1 style=\"float: left\">&nbsp;</td>\r\n        <td colspan=6 class=\"billetRightField80mm\" style=\"width: 14.98cm\">&nbsp;</td>\r\n        <td colspan=1 class=\"billetRightField80mm\" style=\"border-right: 0.15mm solid #000000; width: 2.5cm\">\r\n          (-) Outras Deduções\r\n        </td>\r\n      </tr>\r\n      <tr class=\"trBillet80mm\">\r\n        <td colspan=1 class=\"billetLeftValue80mm\">&nbsp;</td>\r\n        <td colspan=4 class=\"billetLeftValue80mm\" style=\"width: 5.23cm; border-right: 0.15mm solid #000000\">&nbsp;</td>\r\n        <td colspan=1 style=\"float: left\">&nbsp;</td>\r\n        <td colspan=6 class=\"billetLeftValue80mm\" style=\"width: 14.98cm; border-bottom: none\">&nbsp;</td>\r\n        <td colspan=1 class=\"billetLeftValue80mm\" style=\"border-right: 0.15mm solid #000000; width: 2.5cm\">&nbsp;</td>\r\n      </tr>\r\n      <tr class=\"trBillet80mm\">\r\n        <td colspan=1 class=\"billetRightField80mm\">&nbsp;</td>\r\n        <td colspan=4 class=\"billetRightField80mm\" style=\"width: 5.23cm; border-right: 0.15mm solid #000000\">\r\n          (+) Multa/Mora\r\n        </td>\r\n        <td colspan=1 style=\"float: left\">&nbsp;</td>\r\n        <td colspan=6 class=\"billetRightField80mm\" style=\"width: 14.98cm; border-bottom: none\">&nbsp;</td>\r\n        <td colspan=1 class=\"billetRightField80mm\" style=\"border-right: 0.15mm solid #000000; width: 2.5cm\">\r\n          (+) Multa/Mora\r\n        </td>\r\n      </tr>\r\n      <tr class=\"trBillet80mm\">\r\n        <td colspan=1 class=\"billetLeftValue80mm\">&nbsp;</td>\r\n        <td colspan=4 class=\"billetLeftValue80mm\" style=\"width: 5.23cm; border-right: 0.15mm solid #000000\">&nbsp;</td>\r\n        <td colspan=1 style=\"float: left\">&nbsp;</td>\r\n        <td colspan=6 style=\"width: 14.98cm;\" class=\"billetLeftValue80mm\">&nbsp;</td>\r\n        <td colspan=1 class=\"billetLeftValue80mm\" style=\"border-right: 0.15mm solid #000000; width: 2.5cm\">&nbsp;</td>\r\n      </tr>\r\n      <tr class=\"trBillet80mm\">\r\n        <td colspan=1 class=\"billetRightField80mm\">&nbsp;</td>\r\n        <td colspan=4 class=\"billetRightField80mm\" style=\"width: 5.23cm; border-right: 0.15mm solid #000000\">\r\n          (+) Outros Acréscimos\r\n        </td>\r\n        <td colspan=1 style=\"float: left\">&nbsp;</td>\r\n        <td colspan=6 class=\"billetRightField80mm\" style=\"width: 14.98cm; border-bottom: none\">\r\n          Pagador\r\n        </td>\r\n        <td colspan=1 class=\"billetRightField80mm\" style=\"border-right: 0.15mm solid #000000; width: 2.5cm\">\r\n          (+) Outros Acréscimos\r\n        </td>\r\n      </tr>\r\n      <tr class=\"trBillet80mm\">\r\n        <td colspan=1 class=\"billetLeftValue80mm\">&nbsp;</td>\r\n        <td colspan=4 class=\"billetLeftValue80mm\" style=\"width: 5.23cm; border-right: 0.15mm solid #000000\">&nbsp;</td>\r\n        <td colspan=1 style=\"float: left\">&nbsp;</td>\r\n        <td colspan=6 style=\"width: 14.98cm; border-bottom: none;\" class=\"billetLeftValue80mm\">\r\n          {{client?.name}}&nbsp;&nbsp;CNPJ:&nbsp;{{client?.cnpj}}&nbsp;\r\n          Endereço&nbsp;{{client?.address}}&nbsp;{{client?.addressNumber}}&nbsp;\r\n          CEP:{{client?.zipCode}}&nbsp;{{client?.city}}&nbsp;-&nbsp;{{client?.uf}}\r\n        </td>\r\n        <td colspan=1 class=\"billetLeftValue80mm\" style=\"border-right: 0.15mm solid #000000; width: 2.5cm\">&nbsp;</td>\r\n      </tr>\r\n      <tr class=\"trBillet80mm\">\r\n        <td colspan=1 class=\"billetRightField80mm\">&nbsp;</td>\r\n        <td colspan=4 class=\"billetRightField80mm\" style=\"width: 5.23cm; border-right: 0.15mm solid #000000\">\r\n          (=) Valor Cobrado\r\n        </td>\r\n        <td colspan=1 style=\"float: left\">&nbsp;</td>\r\n        <td colspan=6 class=\"billetRightField80mm\" style=\"width: 14.98cm; border-bottom: none\">&nbsp;</td>\r\n        <td colspan=1 class=\"billetRightField80mm\" style=\"border-right: 0.15mm solid #000000; width: 2.5cm\">\r\n          (=) Valor Cobrado\r\n        </td>\r\n      </tr>\r\n      <tr class=\"trBillet80mm\">\r\n        <td colspan=1 class=\"billetLeftValue80mm\">&nbsp;</td>\r\n        <td colspan=4 class=\"billetLeftValue80mm\" style=\"width: 5.23cm; border-right: 0.15mm solid #000000\">&nbsp;</td>\r\n        <td colspan=1 style=\"float: left\">&nbsp;</td>\r\n        <td colspan=6 style=\"width: 14.98cm; border-bottom: 0.15mm solid #000000\" class=\"billetRightField80mm\">\r\n          Sacador / Avalista\r\n        </td>\r\n        <td colspan=1 class=\"billetLeftValue80mm\" style=\"border-right: 0.15mm solid #000000; width: 2.5cm\">&nbsp;</td>\r\n      </tr>\r\n      <tr style=\"display: flex; max-height: 30px\">\r\n        <td id=\"tdBilletBarCode80mm\"></td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n</iframe>\r\n\r\n<div class=\"row\" *ngIf=\"listSelectedBillToPayPayment.length > 0\">\r\n  <div *ngIf=\"paymentMethod === 'DEBIT' && isPaymentSelected\">\r\n    <app-debit-card-payment [totalPayment]=\"totalPayment\" [listBillToPayPayment]=\"listSelectedBillToPayPayment\"></app-debit-card-payment>\r\n  </div>\r\n  <div *ngIf=\"paymentMethod === 'CREDIT' && isPaymentSelected\">\r\n    <app-recurrent-payment [listBillToPayPayment]=\"listSelectedBillToPayPayment\" [totalPayment]=\"totalPayment\"></app-recurrent-payment>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 457:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 col-md-12\" style=\"padding: 0px; margin-top: 15px\">\n  <form class=\"form\">\n    <div class=\"row\">\n      <div class=\"col-lg-4 col-md-4 form-group\">\n        <label for=\"inputCreditCardBrand\" class=\"control-label\">Bandeira</label>\n        <select name=\"inputCreditCardBrand\" id=\"inputCreditCardBrand\" class=\"form-control\"\n                [(ngModel)]=\"payment.CreditCard.Brand\">\n          <option value=\"Visa\">Visa</option>\n          <option value=\"\">MasterCard</option>\n          <option value=\"\">Elo</option>\n          <option value=\"\">Diners Club</option>\n          <option value=\"\">Hipercard</option>\n        </select>\n      </div>\n      <div class=\"col-lg-4 col-md-4 form-group\">\n        <label for=\"inputCreditCardNumber\" class=\"control-label\">Número</label>\n        <input type=\"text\" name=\"CardNumber\" id=\"inputCreditCardNumber\" class=\"form-control\"\n               [(ngModel)]=\"payment.CreditCard.CardNumber\">\n      </div>\n      <div class=\"col-lg-2 col-md-2 form-group\">\n        <label for=\"inputCreditCardValidDate\" class=\"control-label\">Validade</label>\n        <input type=\"text\" id=\"inputCreditCardValidDate\" name=\"ExpirationDate\" class=\"form-control\"\n               [textMask]=\"{mask: maskValidDate}\" [(ngModel)]=\"payment.CreditCard.ExpirationDate\">\n      </div>\n      <div class=\"col-lg-2 col-md-2 form-group\">\n        <label for=\"inputCreditCardSecurityCode\" class=\"control-label\">Cód. Segurança</label>\n        <input type=\"text\" id=\"inputCreditCardSecurityCode\" class=\"form-control\" [textMask]=\"{mask: maskSecurityCode}\"\n               [(ngModel)]=\"payment.CreditCard.SecurityCode\" name=\"SecurityCode\"\n               style=\"background-color: rgba(255, 255, 0, 0.34)\">\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-4 col-md-4 form-group\">\n        <label for=\"inputCreditCardHolder\" class=\"control-label\">Nome impresso</label>\n        <input type=\"text\" id=\"inputCreditCardHolder\" class=\"form-control\"\n               [(ngModel)]=\"payment.CreditCard.Holder\" name=\"Holder\">\n      </div>\n      <div class=\"col-lg-4 col-md-4 form-group\">\n        <label for=\"inputCreditCardInstallments\" class=\"control-label\">Parcelas</label>\n        <select name=\"Installments\" id=\"inputCreditCardInstallments\" class=\"form-control\"\n                [(ngModel)]=\"payment.Installments\">\n          <option value=\"1\">1x</option>\n          <!--<option value=\"2\">2x</option>\n          <option value=\"3\">3x</option>\n          <option value=\"4\">4x</option>\n          <option value=\"5\">5x</option>\n          <option value=\"6\">6x</option>\n          <option value=\"7\">7x</option>\n          <option value=\"8\">8x</option>\n          <option value=\"9\">9x</option>-->\n        </select>\n      </div>\n    </div>\n    <div class=\"col-lg-12 col-md-12 form-group\" style=\"padding: 0px\">\n      <button class=\"btn btn-primary pull-right\">Finalizar</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ 458:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 col-md-12\" style=\"margin-top: 15px\">\n  <!--<ng2-toasty></ng2-toasty>-->\n  <form class=\"form\">\n    <div class=\"row\">\n      <div class=\"col-lg-4 col-md-4 form-group\">\n        <label for=\"inputDebitCardBrand\" class=\"control-label\">Bandeira</label>\n        <select name=\"inputDebitCardBrand\" id=\"inputDebitCardBrand\" class=\"form-control\"\n                [(ngModel)]=\"payment.DebitCard.Brand\">\n          <option value=\"Visa\">Visa</option>\n          <option value=\"Master\">MasterCard</option>\n          <option value=\"Elo\">Elo</option>\n          <option value=\"Diners\">Diners Club</option>\n          <option value=\"\">Hipercard</option>\n        </select>\n      </div>\n      <div class=\"col-lg-4 col-md-4 form-group\">\n        <label for=\"inputDebitCardNumber\" class=\"control-label\">Número</label>\n        <input type=\"text\" name=\"CardNumber\" id=\"inputDebitCardNumber\" class=\"form-control\"\n               [(ngModel)]=\"payment.DebitCard.CardNumber\">\n      </div>\n      <div class=\"col-lg-2 col-md-2 form-group\">\n        <label for=\"inputDebitCardValidDate\" class=\"control-label\">Validade</label>\n        <input type=\"text\" id=\"inputDebitCardValidDate\" name=\"ExpirationDate\" class=\"form-control\"\n               [textMask]=\"{mask: maskValidDate}\" [(ngModel)]=\"payment.DebitCard.ExpirationDate\">\n      </div>\n      <div class=\"col-lg-2 col-md-2 form-group\">\n        <label for=\"inputDebitCardSecurityCode\" class=\"control-label\">Cód. Segurança</label>\n        <input type=\"text\" id=\"inputDebitCardSecurityCode\" class=\"form-control\" [textMask]=\"{mask: maskSecurityCode}\"\n               [(ngModel)]=\"payment.DebitCard.SecurityCode\" name=\"SecurityCode\">\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-4 col-md-4 form-group\">\n        <label for=\"inputDebitCardHolder\" class=\"control-label\">Nome impresso</label>\n        <input type=\"text\" id=\"inputDebitCardHolder\" class=\"form-control\"\n               [(ngModel)]=\"payment.DebitCard.Holder\" name=\"Holder\">\n      </div>\n    </div>\n    <div class=\"col-lg-12 col-md-12 form-group\" style=\"padding: 0px\">\n      <button id=\"btnDoPaymentDebitCard\" class=\"btn btn-primary pull-right\" (click)=\"doPayment()\">Finalizar</button>\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ 459:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog modal-md\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Atualização do Boleto</h4>\n      <button type=\"button\" class=\"close pull-right\" (click)=\"modal.hide();\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"row\">\n        <div class=\"col-lg-12 col-md-12\">\n          Por favor entre em contato com a G2 Soft para atualização do boleto (3292-3886)\n        </div>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button class=\"btn btn-default\" (click)=\"modal.hide();\">Fechar</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 460:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog modal-md\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Tipo de Impressão</h4>\n      <button type=\"button\" class=\"close pull-right\" (click)=\"modalChoosePrintType.hide();\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"row\">\n        <div class=\"col-lg-12 col-md-12\">\n          Por favor escolha o tipo de impressão\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-12 col-md-12 pull-right\">\n          <button class=\"btn btn-primary\" (click)=\"printBillet()\">Normal</button>\n          <button class=\"btn btn-primary\" (click)=\"printBillet80mm()\">\n            Impressão 80mm\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button class=\"btn btn-default\" (click)=\"modalChoosePrintType.hide();\">Fechar</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 461:
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-dialog modal-md\">\n  <div class=\"modal-content\">\n    <div class=\"modal-header\">\n      <h4 class=\"modal-title pull-left\">Atualizar ou Imprimir Boleto</h4>\n      <button type=\"button\" class=\"close pull-right\" (click)=\"modalLateBill.hide();\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <div class=\"row\">\n        <div class=\"col-lg-12 col-md-12\">\n          Código de Barras: {{codeBar}}\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-12 col-md-12 pull-right\">\n          <button class=\"btn btn-primary\" (click)=\"printBillet()\">Imprimir</button>\n          <button class=\"btn btn-primary\" (click)=\"printBillet80mm()\">Imprimir 80mm</button>\n          <button class=\"btn btn-primary\">\n            <a style=\"color: white\" href=\"https://bloquetoexpresso.caixa.gov.br/bloquetoexpresso/index.jsp\" target=\"_blank\">\n              Atualizar Boleto\n            </a>\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"modal-footer\">\n      <button class=\"btn btn-default\" (click)=\"modalLateBill.hide();\">Fechar</button>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 462:
/***/ (function(module, exports) {

module.exports = "<!--<ng2-toasty></ng2-toasty>-->\r\n<div class=\"col-lg-12 col-md-12\" style=\"margin-top: 20px\">\r\n  <form class=\"form\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4 col-md-4 form-group\">\r\n        <label for=\"inputCreditCardBrand\" class=\"control-label\">Bandeira</label>\r\n        <select name=\"inputCreditCardBrand\" id=\"inputCreditCardBrand\" class=\"form-control\"\r\n                [(ngModel)]=\"payment.CreditCard.Brand\">\r\n          <option value=\"Visa\">Visa</option>\r\n          <option value=\"Master\">MasterCard</option>\r\n          <option value=\"Elo\">Elo</option>\r\n          <option value=\"Diners\">Diners Club</option>\r\n          <option value=\"Aura\">Aura</option>\r\n          <option value=\"JCB\">JCB</option>\r\n          <option value=\"Discover\">Discover</option>\r\n        </select>\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-4 form-group\">\r\n        <label for=\"inputCreditCardNumber\" class=\"control-label\">Número</label>\r\n        <input type=\"text\" name=\"CardNumber\" id=\"inputCreditCardNumber\" class=\"form-control\"\r\n               [(ngModel)]=\"payment.CreditCard.CardNumber\">\r\n      </div>\r\n      <div class=\"col-lg-2 col-md-2 form-group\">\r\n        <label for=\"inputCreditCardValidDate\" class=\"control-label\">Validade</label>\r\n        <input type=\"text\" id=\"inputCreditCardValidDate\" name=\"ExpirationDate\" class=\"form-control\"\r\n               [textMask]=\"{mask: maskValidDate}\" [(ngModel)]=\"payment.CreditCard.ExpirationDate\">\r\n      </div>\r\n      <div class=\"col-lg-2 col-md-2 form-group\">\r\n        <label for=\"inputCreditCardSecurityCode\" class=\"control-label\">Cód. Segurança</label>\r\n        <input type=\"text\" id=\"inputCreditCardSecurityCode\" class=\"form-control\" [textMask]=\"{mask: maskSecurityCode}\"\r\n               [(ngModel)]=\"payment.CreditCard.SecurityCode\" name=\"SecurityCode\"\r\n               style=\"background-color: rgba(255, 255, 0, 0.34)\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-4 col-md-4 form-group\">\r\n        <label for=\"inputCreditCardHolder\" class=\"control-label\">Nome impresso</label>\r\n        <input type=\"text\" id=\"inputCreditCardHolder\" class=\"form-control\"\r\n               [(ngModel)]=\"payment.CreditCard.Holder\" name=\"Holder\">\r\n      </div>\r\n      <div class=\"col-lg-4 col-md-4 form-group\">\r\n        <label for=\"inputCreditCardInstallments\" class=\"control-label\">Parcelas</label>\r\n        <select name=\"Installments\" id=\"inputCreditCardInstallments\" class=\"form-control\"\r\n                [(ngModel)]=\"payment.Installments\" (change)=\"checkRecurrency()\">\r\n          <option value=\"1\">1x</option>\r\n          <!--<option value=\"2\">2x</option>\r\n          <option value=\"3\">3x</option>\r\n          <option value=\"4\">4x</option>\r\n          <option value=\"5\">5x</option>\r\n          <option value=\"6\">6x</option>\r\n          <option value=\"7\">7x</option>\r\n          <option value=\"8\">8x</option>\r\n          <option value=\"9\">9x</option>\r\n          <option value=\"10\">10x</option>\r\n          <option value=\"11\">11x</option>\r\n          <option value=\"12\">12x</option>-->\r\n        </select>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6 col-md-6 form-group\">\r\n        <div class=\"checkbox\">\r\n          <label>\r\n            <input type=\"checkbox\" name=\"checkFuturePayments\" [(ngModel)]=\"checkFuturePayments\"> desejo usar esse cartão para pagamentos futuros\r\n          </label>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-lg-6 col-md-6 form-group\">\r\n        <button class=\"btn btn-primary pull-right\" id=\"btnDoPayment\" (click)=\"doPayment()\">Finalizar</button>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-12 col-md-12 form-group\">\r\n        <ng2-slim-loading-bar [color]=\"'#204d74'\" [height]=\"'4px'\"></ng2-slim-loading-bar>\r\n      </div>\r\n    </div>\r\n  </form>\r\n\r\n  <div bsModal #modalReceipt=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\"\r\n       aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\r\n\r\n    <div class=\"modal-dialog modal-md\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h4 class=\"modal-title pull-left\">Comprovante de Pagamento</h4>\r\n          <button type=\"button\" class=\"close pull-right\" (click)=\"modalReceipt.hide()\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-5 col-md-5\" id=\"div-payment-receipt\">\r\n              <h3 class=\"modal-title text-center\">G2 Soft</h3><br>\r\n              <p class=\"text-center\" >DEMONSTRACAO DE COMPROVANTE CREDITO</p>\r\n              <p class=\"text-left\"><strong>VIA - Cliente</strong></p>\r\n              <p class=\"text-left\">CNPJ: 14.272.237/0001-36</p>\r\n              <p class=\"text-left\">Rua Presidente Kennedy, 122, Centro</p>\r\n              <p class=\"text-left\">Mamanguape - PB</p>\r\n              <p class=\"text-left\"><strong>{{getCurrentDate('DD/MM/YYYY')}}</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>{{getCurrentDate('hh:mm')}}</strong></p>\r\n              <p class=\"text-left\"><strong>VALOR:</strong></p>\r\n              <p style=\"margin-top: -15px; text-align: right\"><strong>{{totalPayment | number : '1.2-2'}}</strong></p>\r\n              <!--Outros valores-->\r\n              <p class=\"text-left\">******{{getLast4DigitsFromCard()}}</p>\r\n              <p style=\"margin-top: -15px; text-align: right\">{{payment.Installments}}x</p>\r\n              <p class=\"text-left\">Termino: {{getConvertedDate(payment.RecurrentPayment?.EndDate)}}</p>\r\n              <p class=\"text-left\">Transacao: {{cieloPayment?.tid}}</p>\r\n              <p style=\"text-align: left;\">NSU: {{cieloPayment?.proofOfSale}}</p>\r\n              <hr style=\"border-top: 1px dashed #8c8b8b;\">\r\n              <!--Lista-->\r\n              <p class=\"text-left\">DESCRICAO</p>\r\n              <p style=\"margin-top: -15px; text-align: right\">PRECO(R$)</p>\r\n              <div *ngFor=\"let billToPayPayment of listBillToPayPayment\">\r\n                <p class=\"text-left\">{{billToPayPayment.description}}</p>\r\n                <p  style=\"margin-top: -15px;text-align: right\">{{billToPayPayment.subTotal | number : '1.2-2'}}</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n              <button class=\"btn\" (click)=\"modalReceipt.hide()\">Cancelar</button>\r\n              <button class=\"btn btn-primary\" (click)=\"print()\">\r\n                <span class=\"fa fa-print\"></span> Imprimir\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ 463:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <ng2-toasty></ng2-toasty>\n  <div class=\"row\" style=\"display: flex;align-items: center\">\n    <div class=\"col-lg-4 col-md-4 img-responsive\">\n      <img src=\"assets/images/logo_g2.jpeg\" alt=\"G2 Logo\"><br>\n      <small class=\"text-center\" style=\"margin-left: 65px;\">(83) 3292-3886</small>\n    </div>\n    <div class=\"col-lg-6 col-md-6\">\n      <h3 class=\"panel title\">{{client.name}}</h3>\n      <h4>{{client.fantasyName}}</h4>\n      <h4>{{client.cnpj}}</h4>\n    </div>\n  </div>\n  <div class=\"row\" style=\"margin-top: 20px\">\n    <div class=\"col-lg-10 col-md-10\" style=\"padding: 0px;\">\n      <button class=\"btn btn-primary pull-right\" (click)=\"goToSearchClient()\">Nova Consulta</button>\n    </div>\n  </div>\n  <div class=\"row\" style=\"margin-top: 20px\">\n    <div class=\"col-lg-10 col-md-10\" style=\"padding: 0px\">\n      <tabset #financialTabs>\n        <tab heading=\"Contas a pagar\">\n          <app-bills-to-pay></app-bills-to-pay>\n        </tab>\n        <tab heading=\"Contas pagas\">\n          <app-paid-bills></app-paid-bills>\n        </tab>\n        <tab heading=\"Venda Avulsa\">\n          <app-for-sale></app-for-sale>\n        </tab>\n      </tabset>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 464:
/***/ (function(module, exports) {

module.exports = "<form class=\"form\" name=\"formForSale\" [formGroup]=\"formForSale\">\n  <div class=\"row\">\n    <div class=\"col-lg-6 col-md-6 form-group\" [ngClass]=\"{'has-error' :\n          formForSale.controls.paymentDescription.errors && (formForSale.controls.paymentDescription.dirty ||\n          formForSale.controls.paymentDescription.touched)}\">\n      <label for=\"inputForSaleDiscrimination\" class=\"control-label\">Discriminação</label>\n      <input type=\"text\" class=\"form-control\" id=\"inputForSaleDiscrimination\" name=\"paymentDescription\"\n             [(ngModel)]=\"paymentDescription\" formControlName=\"paymentDescription\">\n      <span class=\"control-label\" *ngIf=\"formForSale.controls.paymentDescription.errors\n              && formForSale.controls.paymentDescription.errors.required\n              && (formForSale.controls.paymentDescription.dirty || formForSale.controls.paymentDescription.touched)\">\n        Discriminação é obrigatória\n      </span>\n      <span class=\"control-label\" *ngIf=\"formForSale.controls.paymentDescription.errors\n              && formForSale.controls.paymentDescription.errors.minlength\n              && (formForSale.controls.paymentDescription.dirty || formForSale.controls.paymentDescription.touched)\">\n        Discriminação deve ter no mínimo 3 caracteres\n      </span>\n    </div>\n    <div class=\"col-lg-4 col-md-4 form-group\" [ngClass]=\"{'has-error' :\n          (formForSale.controls.amountString.errors || (amountString !== undefined && amountString === 0))\n          && (formForSale.controls.amountString.dirty ||\n          formForSale.controls.amountString.touched)}\">\n      <label for=\"inputForSaleValue\" class=\"control-label\">Valor</label>\n      <input type=\"text\" class=\"form-control\" id=\"inputForSaleValue\" [(ngModel)]=\"amountString\"\n             formControlName=\"amountString\" name=\"amountString\"\n             currencyMask [options]=\"{ prefix: 'R$ ', thousands: '.', decimal: ',' }\">\n      <span class=\"control-label\" *ngIf=\"(formForSale.controls.amountString.errors\n              && formForSale.controls.amountString.errors.required\n              && (formForSale.controls.amountString.dirty || formForSale.controls.amountString.touched) ||\n              (amountString !== undefined && amountString === 0))\">\n        Valor é obrigatório\n      </span>\n\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-4 col-md-4 form-group\">\n      <label class=\"control-label\" for=\"paymentMethod\">Forma de Pagamento</label>\n      <select name=\"paymentMethod\" id=\"paymentMethod\" class=\"form-control\" [(ngModel)]=\"paymentMethod\"\n              formControlName=\"paymentMethod\">\n        <option value=\"CREDIT\">Cartão de Crédito</option>\n        <!--<option value=\"DEBIT\">Cartão de Débito</option>-->\n      </select>\n    </div>\n  </div>\n  <div class=\"row\" *ngIf=\"paymentMethod === 'CREDIT'\" style=\"margin: 0;\">\n    <form name=\"formForSaleCreditCard\" [formGroup]=\"formForSaleCreditCard\">\n      <div class=\"row\">\n        <div class=\"col-lg-4 col-md-4 form-group\" [ngClass]=\"{'has-error' :\n          formForSaleCreditCard.controls.creditCardBrand.errors && (formForSaleCreditCard.controls.creditCardBrand.dirty ||\n          formForSaleCreditCard.controls.creditCardBrand.touched)}\">\n          <label for=\"inputCreditCardBrand\" class=\"control-label\">Bandeira</label>\n          <select name=\"creditCardBrand\" id=\"inputCreditCardBrand\" class=\"form-control\"\n                  formControlName=\"creditCardBrand\"\n                  [(ngModel)]=\"payment.CreditCard.Brand\">\n            <option value=\"Visa\">Visa</option>\n            <option value=\"Master\">MasterCard</option>\n            <option value=\"Elo\">Elo</option>\n            <option value=\"Diners\">Diners Club</option>\n            <option value=\"Aura\">Aura</option>\n            <option value=\"JCB\">JCB</option>\n            <option value=\"Discover\">Discover</option>\n          </select>\n          <span class=\"control-label\" *ngIf=\"formForSaleCreditCard.controls.creditCardBrand.errors\n              && formForSaleCreditCard.controls.creditCardBrand.errors.required\n              && (formForSaleCreditCard.controls.creditCardBrand.dirty ||\n              formForSaleCreditCard.controls.creditCardBrand.touched)\">\n            Bandeira é obrigatória\n          </span>\n        </div>\n        <div class=\"col-lg-4 col-md-4 form-group\" [ngClass]=\"{'has-error' :\n          formForSaleCreditCard.controls.creditCardNumber.errors &&\n          (formForSaleCreditCard.controls.creditCardNumber.dirty ||\n          formForSaleCreditCard.controls.creditCardNumber.touched)}\">\n          <label for=\"inputCreditCardNumber\" class=\"control-label\">Número</label>\n          <input type=\"text\" name=\"creditCardNumber\" id=\"inputCreditCardNumber\" class=\"form-control\"\n                 formControlName=\"creditCardNumber\"\n                 [(ngModel)]=\"payment.CreditCard.CardNumber\">\n          <span class=\"control-label\" *ngIf=\"formForSaleCreditCard.controls.creditCardNumber.errors\n              && formForSaleCreditCard.controls.creditCardNumber.errors.required\n              && (formForSaleCreditCard.controls.creditCardNumber.dirty ||\n              formForSaleCreditCard.controls.creditCardNumber.touched)\">\n            Número é obrigatório\n          </span>\n          <span class=\"control-label\" *ngIf=\"formForSaleCreditCard.controls.creditCardNumber.errors\n              && formForSaleCreditCard.controls.creditCardNumber.errors.minlength\n              && (formForSaleCreditCard.controls.creditCardNumber.dirty ||\n              formForSaleCreditCard.controls.creditCardNumber.touched)\">\n            Número do cartão deve ter no mínimo 16 caracteres\n          </span>\n        </div>\n        <div class=\"col-lg-2 col-md-2 form-group\" [ngClass]=\"{'has-error' :\n          formForSaleCreditCard.controls.creditCardExpirationDate.errors &&\n          (formForSaleCreditCard.controls.creditCardExpirationDate.dirty ||\n          formForSaleCreditCard.controls.creditCardExpirationDate.touched)}\">\n          <label for=\"inputCreditCardValidDate\" class=\"control-label\">Validade</label>\n          <input type=\"text\" id=\"inputCreditCardValidDate\" name=\"creditCardExpirationDate\" class=\"form-control\"\n                 formControlName=\"creditCardExpirationDate\"\n                 [textMask]=\"{mask: maskValidDate}\" [(ngModel)]=\"payment.CreditCard.ExpirationDate\">\n          <span class=\"control-label\" *ngIf=\"formForSaleCreditCard.controls.creditCardExpirationDate.errors\n              && formForSaleCreditCard.controls.creditCardExpirationDate.errors.required\n              && (formForSaleCreditCard.controls.creditCardExpirationDate.dirty ||\n              formForSaleCreditCard.controls.creditCardExpirationDate.touched)\">\n            Data é obrigatória\n          </span>\n        </div>\n        <div class=\"col-lg-2 col-md-2 form-group\" [ngClass]=\"{'has-error' :\n          formForSaleCreditCard.controls.creditCardSecurityCode.errors &&\n          (formForSaleCreditCard.controls.creditCardSecurityCode.dirty ||\n          formForSaleCreditCard.controls.creditCardSecurityCode.touched)}\">\n          <label for=\"inputCreditCardSecurityCode\" class=\"control-label\">Cód. Segurança</label>\n          <input type=\"text\" id=\"inputCreditCardSecurityCode\" class=\"form-control\" [textMask]=\"{mask: maskSecurityCode}\"\n                 [(ngModel)]=\"payment.CreditCard.SecurityCode\" name=\"creditCardSecurityCode\"\n                 formControlName=\"creditCardSecurityCode\"\n                 style=\"background-color: rgba(255, 255, 0, 0.34)\">\n          <span class=\"control-label\" *ngIf=\"formForSaleCreditCard.controls.creditCardSecurityCode.errors\n              && formForSaleCreditCard.controls.creditCardSecurityCode.errors.required\n              && (formForSaleCreditCard.controls.creditCardSecurityCode.dirty ||\n              formForSaleCreditCard.controls.creditCardSecurityCode.touched)\">\n            Código é obrigatório\n          </span>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-4 col-md-4 form-group\" [ngClass]=\"{'has-error' :\n          formForSaleCreditCard.controls.creditCardHolder.errors &&\n          (formForSaleCreditCard.controls.creditCardHolder.dirty ||\n          formForSaleCreditCard.controls.creditCardHolder.touched)}\">\n          <label for=\"inputCreditCardHolder\" class=\"control-label\">Nome impresso</label>\n          <input type=\"text\" id=\"inputCreditCardHolder\" class=\"form-control\"\n                 formControlName=\"creditCardHolder\"\n                 [(ngModel)]=\"payment.CreditCard.Holder\" name=\"creditCardHolder\">\n          <span class=\"control-label\" *ngIf=\"formForSaleCreditCard.controls.creditCardHolder.errors\n              && formForSaleCreditCard.controls.creditCardHolder.errors.required\n              && (formForSaleCreditCard.controls.creditCardHolder.dirty ||\n              formForSaleCreditCard.controls.creditCardHolder.touched)\">\n            Nome é obrigatório\n          </span>\n        </div>\n        <div class=\"col-lg-4 col-md-4 form-group\" [ngClass]=\"{'has-error' :\n          formForSaleCreditCard.controls.creditCardInstallments.errors &&\n          (formForSaleCreditCard.controls.creditCardInstallments.dirty ||\n          formForSaleCreditCard.controls.creditCardInstallments.touched)}\">\n          <label for=\"inputCreditCardInstallments\" class=\"control-label\">Parcelas</label>\n          <select name=\"creditCardInstallments\" id=\"inputCreditCardInstallments\" class=\"form-control\"\n                  formControlName=\"creditCardInstallments\"\n                  [(ngModel)]=\"payment.Installments\">\n            <option value=\"1\">1x</option>\n            <!--<option value=\"2\">2x</option>\n            <option value=\"3\">3x</option>\n            <option value=\"4\">4x</option>\n            <option value=\"5\">5x</option>\n            <option value=\"6\">6x</option>\n            <option value=\"7\">7x</option>\n            <option value=\"8\">8x</option>\n            <option value=\"9\">9x</option>\n            <option value=\"10\">10x</option>\n            <option value=\"11\">11x</option>\n            <option value=\"12\">12x</option>-->\n          </select>\n          <span class=\"control-label\" *ngIf=\"formForSaleCreditCard.controls.creditCardInstallments.errors\n              && formForSaleCreditCard.controls.creditCardInstallments.errors.required\n              && (formForSaleCreditCard.controls.creditCardInstallments.dirty ||\n              formForSaleCreditCard.controls.creditCardInstallments.touched)\">\n            Quant. de parcelas é obrigatória\n          </span>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"row\" *ngIf=\"paymentMethod === 'DEBIT'\" style=\"margin: 0;\">\n    <form name=\"formForSaleDebitCard\" [formGroup]=\"formForSaleDebitCard\">\n      <div class=\"row\">\n        <div class=\"col-lg-4 col-md-4 form-group\" [ngClass]=\"{'has-error' :\n          formForSaleDebitCard.controls.debitCardBrand.errors && (formForSaleDebitCard.controls.debitCardBrand.dirty ||\n          formForSaleDebitCard.controls.debitCardBrand.touched)}\">\n          <label for=\"inputDebitCardBrand\" class=\"control-label\">Bandeira</label>\n          <select name=\"debitCardBrand\" id=\"inputDebitCardBrand\" class=\"form-control\"\n                  [(ngModel)]=\"payment.DebitCard.Brand\" formControlName=\"debitCardBrand\">\n            <option value=\"Visa\">Visa</option>\n            <option value=\"Master\">MasterCard</option>\n            <option value=\"Elo\">Elo</option>\n            <option value=\"Diners\">Diners Club</option>\n            <option value=\"\">Hipercard</option>\n          </select>\n          <span class=\"control-label\" *ngIf=\"formForSaleDebitCard.controls.debitCardBrand.errors\n              && formForSaleDebitCard.controls.debitCardBrand.errors.required\n              && (formForSaleDebitCard.controls.debitCardBrand.dirty ||\n              formForSaleDebitCard.controls.debitCardBrand.touched)\">\n            Bandeira é obrigatória\n          </span>\n        </div>\n        <div class=\"col-lg-4 col-md-4 form-group\"\n             [ngClass]=\"{'has-error' :\n          formForSaleDebitCard.controls.debitCardNumber.errors && (formForSaleDebitCard.controls.debitCardNumber.dirty ||\n          formForSaleDebitCard.controls.debitCardNumber.touched)}\">\n          <label for=\"inputDebitCardNumber\" class=\"control-label\">Número</label>\n          <input type=\"text\" name=\"debitCardNumber\" id=\"inputDebitCardNumber\" class=\"form-control\"\n                 formControlName=\"debitCardNumber\"\n                 [(ngModel)]=\"payment.DebitCard.CardNumber\">\n          <span class=\"control-label\" *ngIf=\"formForSaleDebitCard.controls.debitCardNumber.errors\n              && formForSaleDebitCard.controls.debitCardNumber.errors.required\n              && (formForSaleDebitCard.controls.debitCardNumber.dirty ||\n              formForSaleDebitCard.controls.debitCardNumber.touched)\">\n            Número é obrigatório\n          </span>\n          <span class=\"control-label\" *ngIf=\"formForSaleDebitCard.controls.debitCardNumber.errors\n              && formForSaleDebitCard.controls.debitCardNumber.errors.minlength\n              && (formForSaleDebitCard.controls.debitCardNumber.dirty ||\n              formForSaleDebitCard.controls.debitCardNumber.touched)\">\n            Número do cartão deve ter no mínimo 16 caracteres\n          </span>\n        </div>\n        <div class=\"col-lg-2 col-md-2 form-group\" [ngClass]=\"{'has-error' :\n          formForSaleDebitCard.controls.debitCardExpirationDate.errors && (formForSaleDebitCard.controls.debitCardExpirationDate.dirty ||\n          formForSaleDebitCard.controls.debitCardExpirationDate.touched)}\">\n          <label for=\"inputDebitCardValidDate\" class=\"control-label\">Validade</label>\n          <input type=\"text\" id=\"inputDebitCardValidDate\" name=\"debitCardExpirationDate\" class=\"form-control\"\n                 formControlName=\"debitCardExpirationDate\"\n                 [textMask]=\"{mask: maskValidDate}\" [(ngModel)]=\"payment.DebitCard.ExpirationDate\">\n          <span class=\"control-label\" *ngIf=\"formForSaleDebitCard.controls.debitCardExpirationDate.errors\n              && formForSaleDebitCard.controls.debitCardExpirationDate.errors.required\n              && (formForSaleDebitCard.controls.debitCardExpirationDate.dirty ||\n              formForSaleDebitCard.controls.debitCardExpirationDate.touched)\">\n            Data é obrigatória\n          </span>\n        </div>\n        <div class=\"col-lg-2 col-md-2 form-group\" [ngClass]=\"{'has-error' :\n          formForSaleDebitCard.controls.debitCardSecurityCode.errors &&\n          (formForSaleDebitCard.controls.debitCardSecurityCode.dirty ||\n          formForSaleDebitCard.controls.debitCardSecurityCode.touched)}\">\n          <label for=\"inputDebitCardSecurityCode\" class=\"control-label\">Cód. Segurança</label>\n          <input type=\"text\" id=\"inputDebitCardSecurityCode\" class=\"form-control\"\n                 [textMask]=\"{mask: maskSecurityCode}\" formControlName=\"debitCardSecurityCode\"\n                 [(ngModel)]=\"payment.DebitCard.SecurityCode\" name=\"debitCardSecurityCode\">\n          <span class=\"control-label\" *ngIf=\"formForSaleDebitCard.controls.debitCardSecurityCode.errors\n              && formForSaleDebitCard.controls.debitCardSecurityCode.errors.required\n              && (formForSaleDebitCard.controls.debitCardSecurityCode.dirty ||\n              formForSaleDebitCard.controls.debitCardSecurityCode.touched)\">\n            Código é obrigatório\n          </span>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-4 col-md-4 form-group\" [ngClass]=\"{'has-error' :\n          formForSaleDebitCard.controls.debitCardHolder.errors &&\n          (formForSaleDebitCard.controls.debitCardHolder.dirty ||\n          formForSaleDebitCard.controls.debitCardHolder.touched)}\">\n          <label for=\"inputDebitCardHolder\" class=\"control-label\">Nome impresso</label>\n          <input type=\"text\" id=\"inputDebitCardHolder\" class=\"form-control\"\n                 formControlName=\"debitCardHolder\"\n                 [(ngModel)]=\"payment.DebitCard.Holder\" name=\"debitCardHolder\">\n          <span class=\"control-label\" *ngIf=\"formForSaleDebitCard.controls.debitCardHolder.errors\n              && formForSaleDebitCard.controls.debitCardHolder.errors.required\n              && (formForSaleDebitCard.controls.debitCardHolder.dirty ||\n              formForSaleDebitCard.controls.debitCardHolder.touched)\">\n            Nome é obrigatório\n          </span>\n        </div>\n      </div>\n    </form>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-md-12 form-group\" *ngIf=\"paymentMethod === 'CREDIT'\">\n      <button class=\"btn btn-primary pull-right\" id=\"btnDoPaymentForSaleCreditCard\" [disabled]=\"!formForSale.valid ||\n      !formForSaleCreditCard.valid ||\n      (amountString !== undefined && amountString === 0)\"\n              (click)=\"doPayment()\">Finalizar</button>\n    </div>\n    <div class=\"col-lg-12 col-md-12 form-group\" *ngIf=\"paymentMethod === 'DEBIT'\">\n      <button class=\"btn btn-primary pull-right\" id=\"btnDoPaymentForSaleDebitCard\"\n              [disabled]=\"!formForSale.valid || !formForSaleDebitCard.valid ||\n      (amountString !== undefined && amountString === 0)\"\n              (click)=\"doPayment()\">Finalizar</button>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-md-12 form-group\">\n      <ng2-slim-loading-bar [color]=\"'#204d74'\" [height]=\"'4px'\"></ng2-slim-loading-bar>\n    </div>\n  </div>\n</form>\n\n<div bsModal #modalReceiptForSale=\"bs-modal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\"\n     aria-labelledby=\"myLargeModalLabel\" aria-hidden=\"true\">\n\n  <div class=\"modal-dialog modal-md\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Comprovante de Pagamento</h4>\n        <button type=\"button\" class=\"close pull-right\" (click)=\"modalReceiptForSale.hide()\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"row\">\n          <div class=\"col-lg-5 col-md-5\" id=\"div-payment-receipt-for-sale\" style=\"background-color: #EBFAFF;max-width: 250px;\">\n            <p style=\"max-width: 220px; text-align: center\"\n               *ngIf=\"paymentMethod === 'CREDIT'\">DEMONSTRACAO DE COMPROVANTE CREDITO</p>\n            <p style=\"max-width: 220px; text-align: center\"\n               *ngIf=\"paymentMethod === 'DEBIT'\">DEMONSTRACAO DE COMPROVANTE DEBITO</p>\n            <br>\n            <p style=\"max-width: 220px; text-align: left\"><strong>Estabelecimento: </strong>{{client?.name}}</p>\n            <p class=\"text-left\">CNPJ:&nbsp;{{client?.cnpj}}</p>\n            <p style=\"max-width: 220px; text-align: left\">\n              {{client?.address}},&nbsp;{{client?.addressNumber}},&nbsp;{{client?.neighborhood}}\n            </p>\n            <br>\n            <p style=\"text-align: left\">Emissor: G2 Soft Comércio LTDA</p>\n            <p class=\"text-left\">CNPJ: 14.272.237/0001-36</p>\n            <!--<p class=\"text-left\">Rua Presidente Kennedy, 122, Centro</p>\n            <p class=\"text-left\">Mamanguape - PB</p>-->\n            <br>\n            <p style=\"max-width: 220px; text-align: left\">Discriminação:&nbsp;{{paymentDescription}}</p>\n            <p style=\"text-align: left;max-width: 220px;\"><strong>VALOR:</strong></p>\n            <p style=\"margin-top: -15px; text-align: right;max-width: 220px;\"><strong>{{amountString | number : '1.2-2'}}</strong></p>\n            <!--Outros valores-->\n            <p style=\"text-align: left;max-width: 220px;\">******{{getLast4DigitsFromCard()}}</p>\n            <p *ngIf=\"paymentMethod === 'CREDIT'\"\n               style=\"margin-top: -15px;text-align: right;max-width: 220px;\">Parcelas:&nbsp; {{cieloPayment?.installments}}</p>\n            <p class=\"text-left\"><strong>{{getCurrentDate('DD/MM/YYYY')}}</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<strong>{{getCurrentDate('hh:mm')}}</strong></p>\n            <p style=\"text-align: left\">Transacao: {{cieloPayment?.tid}}</p>\n            <p style=\"text-align: left;max-width: 220px;\">NSU: {{cieloPayment?.proofOfSale}}</p>\n            <!--<hr style=\"border-top: 1px dashed #8c8b8b;max-width: 220px;text-align: left\">-->\n          </div>\n        </div>\n      </div>\n      <div class=\"modal-footer\">\n        <div class=\"row\">\n          <div class=\"col-lg-12\">\n            <button class=\"btn\" (click)=\"modalReceiptForSale.hide()\">Cancelar</button>\n            <button class=\"btn btn-primary\" (click)=\"print()\">\n              <span class=\"fa fa-print\"></span> Imprimir\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ 465:
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 col-md-12\" style=\"padding: 0px;\">\n  <table class=\"table table-striped table-bordered\">\n    <thead>\n      <tr>\n        <th class=\"text-center col-lg-2 col-md-2\">Vencimento</th>\n        <th class=\"text-left col-lg-6 col-md-6\">Descrição</th>\n        <th class=\"text-center col-md-1 col-lg-1\">Valor</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let billPay of listBillToPayPayment\n          | paginate: {id: 'tableBillPay', itemsPerPage: 10, currentPage: page }\">\n        <td class=\"text-center col-lg-2 col-md-2\">{{getConvertedDate(billPay.maturity)}}</td>\n        <td class=\"text-left col-lg-6 col-md-6\">{{billPay.description}}</td>\n        <td class=\"text-center col-lg-1 col-md-1\">{{billPay.amountPaid}}</td>\n      </tr>\n    </tbody>\n  </table>\n  <pagination-controls id=\"tableBillPay\" previousLabel=\"Anterior\"\n                       nextLabel=\"Próximo\"\n                       (pageChange)=\"page = $event\">\n  </pagination-controls>\n</div>\n"

/***/ }),

/***/ 466:
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-center\">\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-md-12 img-responsive\">\n      <img src=\"assets/images/logo_g2.jpeg\" alt=\"G2 Logo\"><br>\n      <small>(83) 3292-3886</small>\n    </div>\n  </div>\n  <div class=\"row\" style=\"margin-top: 15px;\">\n    <form name=\"formSearchClient\" class=\"inline-form\" style=\"max-width: 400px; margin-left: auto; margin-right: auto;\">\n      <div class=\"col-lg-9 col-md-9\">\n        <input type=\"text\" name=\"clientCnpj\" class=\"form-control\" placeholder=\"CNPJ\" [(ngModel)]=\"clientCnpj\"\n               [textMask]=\"{mask: maskCNPJ}\" (keyup.enter)=\"searchClient()\">\n      </div>\n      <div class=\"col-lg-3 col-md-3\">\n        <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"clientCnpj.length == 0\" (click)=\"searchClient()\">Consultar</button>\n      </div>\n      <div class=\"col-lg-6 col-md-6 has-error\">\n        <span class=\"control-label\">{{searchClientError}}</span>\n      </div>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ 505:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAX4AAACECAMAAACgerAFAAABO1BMVEX///8Bbbj4oj3///3///z//v8AXK7q9Pf8//8BbbcAZLarydn9//0Aarf///oAbbq0zuBal8r2smL34ML66tr3nzVUkMX4mi48h7z///cAZ7b3//8AZbQAYLEAbr0AZrQAZ70AZq8AXap0oMPK2ecAZqwAYLb4oUAAcLYAVa3xo0KMtdFhlMIAYKvf6/AAaqz99+s4gL3q9/fQ5/Vnn8mdw9mSh3/8pzQtebv47NHBz9eCr9QkcatJirqQstZqo9OMhIPxypS5k2Wqy9jnoEczc5+ojnGqzuevkmbS2+T61avvoDBUeZbA2enE4ur50Kh0g4Rwe4313Lfh9f2BqsUATpuNvNP048vot3rvsmjCmFafzNzvs2/tqkzg6emDqNGTlYypo5+Dfov4rWHjnDR1lKgtcqT1lhb/m0aSiVk9AAAXYElEQVR4nO1djXfbNpKnDFACaACUm8gySZH68JdiWVQkW42zspJmk12f61W3W2fb9LYfd7d32/3//4IbULItiQNKTpR97+7x99qXOBaB4Q+DwcxgAFlWjhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cvzfB6GEWcwitsWY/lED/pz9oAKW/Ig9CM9ZNgomFM3oUsGT2FPW/UOMsCwIZttz7dlWkPyIygJvYmPCZIivf/lYGj8W8DaUAFtKqcFZeTjsdIbD8kHsKaIHRXlGSRiBR4gBFsvo0p6N8iKosu6fguHzKKEGEC3sXHuK2YFtHisSBDYmhoIuUKhs8TcKTwkgeFB+tcuPWqHj1Oo156jYctqnr343CCwC/+EPMlUabpswHGSov/3W8NDv7khVrHRVNuNv3yzwaXvshydG/PDkOw+hn6jYLP62+lepf0BoPDw9DB1fSrfAC5HrutJ1201ZO2qOX8WKoqqjFXh01HVw1J5dmXskAx7WsKeOzh/aHlyGhrb1B/uBN9cgsH9TNeO3N0KkpaDW+AiVQiOMPzv9TCmmrfvk9NDxI855ocA5DAD8xYW/uHospBPulVBJYMUoNWGYcPDayLINw2ZZv4RJ++mHOndThglv6BxGBbz1QtvZBvOQtB9QWAleVrYMOL65Of4aDNCSBEQxb9I1CA/vHU6U9XkBSw+hltjuh07kFozw+wyhHx5WdFSThodc7p9aZv4Pihx9LCzft89UcBm1TXK5vB/M+KGwSr80ka9RfSOYWjblNrOtscON713rbIbkDDDi0XLfkYnem+k/xWw/gbcuSeOwaQWFSWOif1hDu5Td+L59EG541DO077q9o20iEr1gJHh5Ujkxqn/lDbMTJ2dBfCXUpBuZ3hu059z63LCtb8ahBA6zlJ87ry3EcMIbWKOuWT0jGf7CjPT/2nSRN+eyPbgbaUaFYBe+iR8eyf7AS+gHy/OumsV+oIRYnsBEEDb2gWcT/RE65zcGpQIVfF/zZ2+TQX+tg8phqxLPfNB5awtTwLDroA/KvpjXUvL2WVb74JwIW1D7+d+rRsO/VfmgEh1I0W8dOBkv7brdkkVRtdsECCxtt3tH3GS75xCWUcdfkFE98zn/vWWgn7BLiRkfV54uPKCsS9/cvrwI7ICI4DlYHhP7J9WfvAANAAkdZ4gP9Lcmeow+EyCgmURN3mivpr8WY2JQEoNfkgW5K/CAgdilZgEzPoX6aIGpgPztyNx++2ioLBY8/2KrYrI8x9WfhJWy+1NMjrIWPL32fsbAl6hO8dBv8wztmsHlKP1MjXADMvcgmAaka0atuFhAhy688uafsD2rnzE9JQ9s5f1YNek+2P2fhGfh7Kvxilf3T73PZHwE4H0os5X3Drw9SLGo3Z647Wcs2BqtOOXuJb3b6go3u9y5XuhJMO9tEVZZvHnXdYaW+tG45m4dV77w0MWfUaYmNVO7M8gLZX0e158Ib/8oyvQ258Top1NuihFQ/lXrRncbNT5gDjo1wyPxQlc2ePR7DZOcrnvIvS/M7J9Uv3geoOabQKyQ5fPPxB98Jvottd9YY82dQu6kXwG057ZndJrvnxyh8sN6fIpPfHlRovP0Q6yqyi0j/QXe+I/fbo5N9AP71EYzZ0KQSeianM47QAi4eeOvc5F0H5YddyV9U9RGXop+oGVUQxfPBTbHzEMkAPoNFh0W64VEl01sm41dg6aAb857J1sm+it/f24zWKIQCRgN9ny+SvudDmo7Pw0QKlrfF+V61GvUhiqVLRcqNsWj82weopGLYqKJP1w/V3T5jdUkzOjC/xI1PscQBL97ykxBn8hudIbm7nNhTFp9LITue127D3BrE5piUdBfTdZ7Drx1htJvxS38AczXU2wvw0WJeseo+h9X371kRvqZl9XmPdpq8/Qz6xcuIapYo/sp5HU652Dfhms0wMExx9Ls1qSIft4NJyQVqCky6Wb0YVL/k5cMPCwDB2RSXGPp48XbrA27x4MkvkRfuq7Z59Jp37kUHPwAbr+92Aojo8Ya04c3RigBZIg97RZk8zo90Wwl9nzjMiNl7+R4aQBOKsc3Wy+ZTdGoA8IAJvoG67coUFjeLP22NqydblZ+Taf6o+g+BcddfhEQMk8/LB5q0M1K9tw3FvXxqHcfzaTJqDdLoi2ypSatyBScu7z5ZfVkMd+mk59PzPkyoq3vqmVXI2q+2jT9ipzVZFaiAdyxRPtn4nEu9yBymadfwXDsr6P8MHbdAJPCQi0vRFF9kfI1iO5ubAzwQD5wfm6WLM/NE7D7pmwf+EIX3F8j2QKO2IZ4v3txYQdjJ8vuS6fWPWxK5y6k4nrXxF5Yw0jg3bb8tdZut3iGSCGIxCwvGJ8dnZBY/jRMNrP1b/sF+dVyvrPyHVO2sToDQomiuyLinb6739ys9sM6Vu7KNtZ1svVXqPXGncnB9aT8ftysJQs0d0ZLcTvMoH0nzT680bJGuW44JIgvMzhC6dfbk+lAh+iCk11T3h86dXs/z/k+YHh++y6gsGIYKIAYsg99zaugq3ca3JQ5bTceNn82AmbpcAN9jwgUvdYfliw1C3ziUbuuJQqHqWZKmN8oZUqjXFfuW2n+1fURNv/cQmjYnCcZ6g84/OrFHP/Hv33NMH/rngMPaQwk5Sn6eeOwbG7nI0DJtinccN0mHwbECtj0hZVHSvuhz6PaZKkRUH7EdMvddBoN4uo+TJ1lPVTbaMINujrAxSbM2s3y0w/fPSy9lcrXzLMzolVG+svdgzI433dqae1pjj6eawRC9E3hLnf2zoiCBYvqwikwuEwIb9KWUX3JfNsqriFtOOU4lT/nEQ+FnXL/1AhrAOZ6wTDXbUEnGVsjUn41R3+ytZih/bSc0kC30C4O0s6w5P7eJ9G9DHYQoh40eDq13UBNC+vsxGewE6Ur7TUOS/MNUDBg+41l28Gjw7puO92w842XyrqoHdzvlBeYnzTrdnxodD4Lhd67m+rJMcS/N9U3uibMWJWnq+P6qc79XuPU6qTeShZ4U4kN7ngZHG5YNZ2xJ7AQSY3l/ESmEEnGzdQM4q5/bp2FSNu1oUo7M5e4FNKkazpN9Q2uOBrRof/Vi5OtyvFJBdj3MrKUMDCqnK6x4DIsWx0npT2u3rEgG/N+SKnpYvGGy/3LgQjS9NsWE/vz3YMTbiE+Py8UD6wYo79+TpdtPwmaaMTvNk2lHYSCt7VbN/HPo6j3DtivVCofPCEy7L6uHepHqUQzb/RKpJNakMDxq5UpVh73kRgeoe4650cTmGVptbFt6i2MimBeLGU6cJAXnhVjlVOyn96vjg0VBt20j3UnBxXkzFCYpX3/tvNtNdlWD2xiCrem8qu3IU95aFL+atFhausUhrU2UhuinymmdvCFNwrPs1y1hUascyTV6XY7lMRoFq5eSuX8yw6asZCN32Uwx9TYj0wFjRAw//zPm+pPprqWOxARYDsNvHhNyHYDk6m/KfrBbg8O8ViVy8Gau2pKxE2shRrYyFILo792kNL+Tg0Nu6WfFeQoet3i5mq85n+9qPyYThgtgdFtzEL6/UCQbaxwwO0FG6OfTlq49P6OZ/I5ltuwXmOWwx/rWO0QpX+YouR1E434ebuUMQVJQE5r0gjn6L//7rGVrxH0sWSV07HAtW0hUrngdm9ow1HQjqEypIbXUS0DPsPidHCo8/pXihGCJjP81wu7t/rv/SZa05iEaEbYRJ3t7Zox/s/nEKmseA26fZRyPbjL6zHz1Bk6eZ3yhtgnQu0adlh5bNwXmgPTBz72fbkkZdR2/XaJEJ1HxOi/WBhanUDjTcz94v6OMU+TdM/0ISj8HE0yqqsMD3ww6KeCZ7cdHe6C001KRXTpGnkb2u8F9UTZh/WlRNagnzCmYie1eEdt3tiHwaUWOrrycGHLCPyruM7RGoPaKMvDnp02S3D3pz6QxpITaPeZqizxCb0KU+UFoD3OlU5qsxYqfn8datYAuLyGHVa5J7w1TtLoMvr9RgFJV3cPwD8Q5BzN4tcXjykQNUnHNwmcbbyQeia+eGrED0+frnYdwOcf9P2U9K4r2yXFwDTjOej2mqviKoDHbki3yb5YrTxWchQqbKfo51L2A8rAM08HLhoP51U0BFVlnH4X8ZHuOia2rT5UKwZsVSrv/sdaFZwC/VehTJu9qH4OJhEck7Rh0tz415sx/kRvsRnoV2g1zBIg8jyvp5mD0DDJCwoLpV/qQy4PELb1Hk24Qexwa7L9MO3Um5vq8p7uQ5rt3T+Kk1W5GcJQn9+V3YkmWDG09EvHvWvRuwoE1M5A/0Upa9rfN2DFIRazRDI5hCasIUa/C3NjvhFhqnBze8xU0Qqrzptq5cR0gqLy7g/S2V1VDmtbb7GSZldeBFPxUdtZcPbX5HcVe8REf6F7Zjq6OA8BPj9mNprjafuWqXRp/ogg6PGFwf/qE1OEY6s31ZPjkxuU/OOtkz/4DV78ZtUEDtrLTptG25keHtEF24hU7caGcs4Ej+s06vgIU2LDej0tzxaggTGadOThlV54wTRdY9U7EXcO9OHsOynoAC8y4PXXCnXbKbWDr7XeV7B6quOtCrCvyw37ipl9T3BswOfHCvO4H+vtDcHwycujdsnU6KMA2m+w/QWnF2OKxxhV27MSfZ3JOk/5/ImAhYENS7cK2C+YZwX0d+ZogeAJL7HhtY5CD1AqO/hzxVzCX333J200XNmaUHO2jRDK8DS3M2aB0mfzrW0sIOZu3bAF90gQaqS/7ewjpbC28OJ+hySrcuLzg/YgzPl36ToaYMYn0qUSc4GvmuDViTws49YbdP+monUft/snf5rphL9noeOXvDsR5KqFlhQ3tqdGC2wnVv/Eo1rG6fBHgJjLStt+E8v1iu32s7dWchof5q513owwu3HY+WZyAJhMDjC9drnexHqgheLuaYEXY3S/xxbfVbdOtgx1zJWtvzSnrLYL4cQzLR6EeQF+mqxwWE6kB/mvsO18rv3SjcCL8crKhKTa0FKBDi3BDFK95Uuss1OHF3+ZHs2xqYq7HN2rKdS6oUYr7JpOocT03qoLijoYYGKLlKQCTAoh7XcVk8MJdv/mL3IWQSf1YMbaHksNQzxb6tbCGdDiP4jK+lRswPeEVbRppL/gOue3HoTlIpmoSrCzfelEvM7spGqA2SZ/cTXccDJHvzXGHB9YOtuWlUq5CZs92QKnx0D/TeXbxlyVfndi3Ghkor32cZIl6QvtErYT9XgQg8s37aYZdeI7Dz0e7tWb3HXBnk471scYP1J+mB6v5vZLgwvsIxA8jDH62Q/VLbPdf/HtfATH/T1zvh9dV9cC756RdcKiVRDqdTOjF+468vJ01Hl1Pr7kNekXuOT1EZmumoycrnMEFYd/Sh5KN2O8d+mPEPqtl9VjMDEG7X/xVbMxbw65MzFZCdFecQjWDA52eRPn25mOuzLqO8Gpl36tXktulUn+AdwC/aBNGLl+xHGYZcDae59OIAdNzAFxndTibzNivzTmGbZOKi++rC85wnIP+kkdI9XiD9N5/rVRB9fu07Uf9HgQuu1HnKsoFKYVsiC+dYrm6NeD24zvtZJcoddYuDJVTAd2/+mxVn6D5al8qS+jmG+LR2EZSx0yGlx+tO3Rg2q8TO1R/Ntqz2+vOs63wElzYCVVNvTMR3KFa6NbfjD++EUEbru4HFyS4OlJJXV04n7ZffHHemoqu04/SJUV6VTc8DGnqZbBebwB48Ns5l2B+q/fL/hcU0+c0lPc518Tegm5I+MUL7HqNZa3JNlTXTlluq2h8se6K/niAES6XCq93S7U4FK2P177+dH1hu42GfScxyygzddJMEyt6/onmP7kQqC7RZXuYYkLPcMXGPNs9vJdxnH16r/1UH2Qe0EqcSQoms1ZH2FnU9e6vcq8tmoZ9U6i/crbaX6S/DqjPQUpXeDWbzG2FHaQcUkMWJ7fNxso/fyonL43aXDxaeL751k1AI8AjS9XnoWee5fWNNtErldeH5AJV9bvc84xrCGYBIt3BgH7X4DZMW6v/P7Q5zxCXEkIfYOUpg7R4wTrQ/Y3tNsu7GG3gO3W4rTVSkTfrapOcYNRKCzfc2f4kNbJ6UBak5Cjma+HQ4RE+5zPM65q2Kr+e8+HzlAPqqe7mnNU9AWZF2gB0triw5huJues3Yk9X647AeSFAKcH3J4QreBZG5w33k97J9YQv8iCF+8PYBNG9SUxxpsajis/Xvpuz9SX/MdCigDGYhg+wttD2ww3k3O2bM8+Ax9mzeXXP6WWCCjZcYzqwxdh+pR/Or2P2LL2fZz+7mBORZ7/ZLb7+qKMv7UapgQUj1pX1H7Y3WFE+/xGwdYSf2OXGupz3sMueq4QgdPR983Rs1aEHkXlSK0f2o4rZVKuIcCqgN+JbpldPFzbQb0Pvx0vnxV9wM/PmV3oGbTfLbj+ZWCzhwwf+PyGI8jris9duaGcM5Bp0/f6NpN1DFBYtvQ21k69gJlZ7o9Pd5Zwmq6dT0jhrdhiBEL3gfEqk+mNzFpA8aFqyu8f62tKGPG2jwzaD+/lhsO5AzUk6Enk6hIYpmh3WfqdMe5euxtbey3txSe3yaxhDsNYV9icGXYJJC+lrsEetFHT4rb1bXy2LUhsCN5qs5t/wO4HH0wpNl3B//NT8GxUcJmhPbLH7tkSaohtrsHb1091Hnfh/m5rUsQmAGhqF7/G92NAmNiHGHz1YprUnzDPdKbQPye2mr8mXNdv9tHd4Ig3RkTBKk7OTFeZzBJu1FYfjPfi6Y3dp0zPIlXOuGGPF6/u78smAX6QRhcI0GDhinr4dIzf3OQWwuWE1CfRb3W6+PmeBchdQZTxUIm+Z0YwsQT0+LOmfzdQzGNW+lThFK1JstFLhHqTsepW3r1kusxWHxHKkr99p/621cFKk5Id0AGYqEXhSQk/q++6zuYuFE5usypf1iVvR2Znl3Pf36ew9O6iIZfrH/b1dF0qNBb4XQ9gaaUSVChDHSLYuZISzIbR/PNvBrt/fFLRl8QoBgYKXBtj2YA2dY0hSe6nBrfnELV2stD8VXtFSyi1Das0+ICb2HC8A1Ol1/rya85NqaiI83BICQXlR625TBQiFYujpUoJv7G+/806NygtB+WzlWJvjFcxn1T+ufUkmK0QthX0kRNmM9l4dKlDX2rZ6ntDaZPrYxc9BaZTzzoC2uCdkqBq3sFuKKVvmsPg6xwdgHqPG+g2EczeGKFfDZEi0AS1oa50MtmMJKUuKPu6Ylx2K8eVl7Z9V8hJSLlroh80R9+KBeqqBr0G5uK5uqoYoYWY9rPd1q35sPDjwRQsg+Rgpxsa+pMyrJ+X9D1qh2iOzpWn2qdept+7ws8NAf2/eoyIkmG7wT+3FBjir6uVrRtTHXPlCVNkFtESqkRff9kDCl/6+mIg+NT3dXyORN30kSetPdhtCQmc8kY2HO8xuzZjuNsK674faeucpD2kr783pNkflUv6ePves+JREUGrOEHlP/sr9mnAs8tACRX/FW2t+Oy9Pj3+wxdZ+I4t3GtDJ/09M/plRZg96BqkKR7eomS+f9YyiP9+g9zfj4HnqVK5s3PRnfba6vL+6WhYvg2YAvGJTW9LOG5v0UMfxDY9UCpREhBh+vVA6S8q8jK+qUiBTAs7Mgo5Bn4P5ukAThmluUUz+CIwvm/J2/ydnkyvd572WYJSHJdKAbh1OhTR/+vroGzbW/YsZ7DSJVGJ/IpS/AGqv+VI+xr4r/X3SIHXqUxfVETp9GqBOdmtrE8TElArsBXem9CKgonvJWVmmPiKfYYrPYFokEUfaNfH08CPFIkrrwtsgF+tkAS5DslKvrYFc8T02og/Mf1HYuG/tXVxsi0Ww7hF6Irf+UwmXfbaF/m1wY33jN/9JNCrnXVAgb2slhnC8c/5ZQo5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cuTIkSNHjhw5cvz/w/8CzftByIUUCUsAAAAASUVORK5CYII="

/***/ }),

/***/ 508:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(333);


/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillToPayAmountsPaidService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BillToPayAmountsPaidService = (function () {
    function BillToPayAmountsPaidService(http) {
        this.http = http;
        this.urlBillToPayAmountPaid = 'bill-to-pay-amounts-paid/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
    }
    BillToPayAmountsPaidService.prototype.create = function (billToPayAmountsPaid) {
        return this.http.post(this.urlBillToPayAmountPaid, billToPayAmountsPaid, { headers: this.headers }).map(function (res) { return res.json(); });
    };
    BillToPayAmountsPaidService.prototype.saveList = function (listBillToPayAmountsPaid) {
        return this.http.post(this.urlBillToPayAmountPaid + "/list", listBillToPayAmountsPaid, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    return BillToPayAmountsPaidService;
}());
BillToPayAmountsPaidService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], BillToPayAmountsPaidService);

var _a;
//# sourceMappingURL=bill-to-pay-amounts-paid.service.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BillToPayPaymentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BillToPayPaymentService = (function () {
    function BillToPayPaymentService(http) {
        this.http = http;
        this.urlBillToPayPayment = 'bill-to-pay-payment/';
        this.urlSandBox = 'https://apisandbox.cieloecommerce.cielo.com.br/1/sales';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
    }
    BillToPayPaymentService.prototype.updateList = function (listBillToPayPayment) {
        return this.http.put(this.urlBillToPayPayment + "/list", listBillToPayPayment, { headers: this.headers })
            .map(function (res) { return res.json(); });
    };
    return BillToPayPaymentService;
}());
BillToPayPaymentService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], BillToPayPaymentService);

var _a;
//# sourceMappingURL=bill-to-pay-payment.service.js.map

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CieloPaymentService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CieloPaymentService = (function () {
    function CieloPaymentService(http) {
        this.http = http;
        this.urlCieloPayment = 'cielo-payment/';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
        this.params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* URLSearchParams */]();
    }
    CieloPaymentService.prototype.create = function (cieloPayment, isForSale) {
        this.params.set('isForSale', isForSale);
        return this.http.post(this.urlCieloPayment, cieloPayment, { headers: this.headers, search: this.params }).map(function (res) { return res.json(); });
    };
    CieloPaymentService.prototype.getOrderId = function () {
        return this.http.get(this.urlCieloPayment + "count-order-id/", { headers: this.headers }).map(function (res) { return res.json(); });
    };
    return CieloPaymentService;
}());
CieloPaymentService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], CieloPaymentService);

var _a;
//# sourceMappingURL=cielo-payment.service.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Client; });
var Client = (function () {
    function Client() {
    }
    return Client;
}());

//# sourceMappingURL=client.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__financial_bills_to_pay_cielo_payment__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__financial_bills_to_pay_cielo_payment_cards__ = __webpack_require__(343);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });


var Constants = (function () {
    function Constants() {
    }
    //  Customer Identity length exceeded
    Constants.getCiloPaymentConverted = function (clientPaymentReturn, cardToken, isForSale) {
        var cieloPayment = new __WEBPACK_IMPORTED_MODULE_0__financial_bills_to_pay_cielo_payment__["a" /* CieloPayment */]();
        cieloPayment = new __WEBPACK_IMPORTED_MODULE_0__financial_bills_to_pay_cielo_payment__["a" /* CieloPayment */]();
        cieloPayment.cieloPaymentCards = new __WEBPACK_IMPORTED_MODULE_1__financial_bills_to_pay_cielo_payment_cards__["a" /* CieloPaymentCards */]();
        cieloPayment.isForSale = isForSale;
        // clientPayment.clientId = this.route.snapshot.params['clientId'];
        cieloPayment.serviceTaxAmount = clientPaymentReturn.Payment.ServiceTaxAmount !== null
            ? clientPaymentReturn.Payment.ServiceTaxAmount : 0.0;
        cieloPayment.installments = clientPaymentReturn.Payment.Installments;
        cieloPayment.interest = clientPaymentReturn.Payment.Interest;
        cieloPayment.capture = clientPaymentReturn.Payment.Capture;
        cieloPayment.recurrent = clientPaymentReturn.Payment.Recurrent;
        cieloPayment.amount = clientPaymentReturn.Payment.Amount;
        cieloPayment.authenticate = clientPaymentReturn.Payment.Authenticate;
        cieloPayment.authorizationCode = clientPaymentReturn.Payment.AuthorizationCode;
        cieloPayment.authenticate = clientPaymentReturn.Payment.Authenticate;
        cieloPayment.recurrent = clientPaymentReturn.Payment.Recurrent;
        //Credit Card
        cieloPayment.cieloPaymentCards.cardToken = cardToken !== undefined ? cardToken : '';
        if (clientPaymentReturn.Payment.CreditCard !== undefined) {
            cieloPayment.cieloPaymentCards.cardNumber = clientPaymentReturn !== null
                ? clientPaymentReturn.Payment.CreditCard.CardNumber : "";
            cieloPayment.cieloPaymentCards.holder = clientPaymentReturn.Payment.CreditCard.Holder;
            cieloPayment.cieloPaymentCards.expirationDate = clientPaymentReturn.Payment.CreditCard.ExpirationDate;
            cieloPayment.cieloPaymentCards.saveCard = clientPaymentReturn.Payment.CreditCard.SaveCard;
            cieloPayment.cieloPaymentCards.brand = clientPaymentReturn.Payment.CreditCard.Brand;
        }
        // Debit Card
        if (clientPaymentReturn.Payment.DebitCard !== undefined) {
            cieloPayment.cieloPaymentCards.cardNumber = clientPaymentReturn !== null
                ? clientPaymentReturn.Payment.DebitCard.CardNumber : "";
            cieloPayment.cieloPaymentCards.holder = clientPaymentReturn.Payment.DebitCard.Holder;
            cieloPayment.cieloPaymentCards.expirationDate = clientPaymentReturn.Payment.DebitCard.ExpirationDate;
            cieloPayment.cieloPaymentCards.saveCard = clientPaymentReturn.Payment.DebitCard.SaveCard;
            cieloPayment.cieloPaymentCards.brand = clientPaymentReturn.Payment.DebitCard.Brand;
        }
        cieloPayment.tid = clientPaymentReturn.Payment.Tid;
        cieloPayment.proofOfSale = clientPaymentReturn.Payment.ProofOfSale;
        cieloPayment.authorizationCode = clientPaymentReturn.Payment.AuthorizationCode;
        cieloPayment.softDescriptor = clientPaymentReturn.Payment.SoftDescriptor;
        cieloPayment.provider = clientPaymentReturn.Payment.Provider;
        cieloPayment.paymentId = clientPaymentReturn.Payment.PaymentId;
        cieloPayment.type = clientPaymentReturn.Payment.Type;
        cieloPayment.amount = clientPaymentReturn.Payment.Amount;
        cieloPayment.currency = clientPaymentReturn.Payment.Currency;
        cieloPayment.country = clientPaymentReturn.Payment.Country;
        cieloPayment.returnCode = clientPaymentReturn.Payment.ReturnCode;
        cieloPayment.returnMessage = clientPaymentReturn.Payment.ReturnMessage;
        cieloPayment.status = clientPaymentReturn.Payment.Status;
        cieloPayment.cieloPaymentCards.type = clientPaymentReturn.Payment.Type;
        return cieloPayment;
    };
    return Constants;
}());

Constants.PAYMENT_SUCCESS = "Pagamento realizado com Sucesso";
Constants.MSG_ERROR_57_CARD_EXPIRED = "Cartão Expirado";
Constants.MSG_ERROR_108_AMOUNT_GREATER_THAN_ZERO = "Valor da transação deve ser maior que “0”";
Constants.MSG_ERROR_117_HOLDER_IS_REQUIRED = "Nome impresso no cartão é obrigatório";
Constants.MSG_ERROR_118_CREDIT_CARD_NUMBER_REQUIRED = "Número do cartão de crédito é obrigatório";
Constants.MSG_ERROR_125_CREDIT_CARD_EXPIRATION_DATE_REQUIRED = "Data de expiração é obrigatória";
Constants.MSG_ERROR_126_CREDIT_CARD_EXPIRATION_DATE_IS_INVALID = "Data de expiração é inválida";
Constants.MSG_ERROR_127_CREDIT_CARD_NUMBER_IS_REQUIRED = "Número do cartão é obrigatório";
Constants.MSG_ERROR_128_CREDIT_CARD_NUMBER_LENGHT_EXCEEDED = "Número do cartão superior a 16 dígitos";
Constants.MSG_ERROR_133_CREDIT_CARD_NUMBER_LENGHT_EXCEEDED = "Fornecedor enviado não existe";
Constants.MSG_ERROR_155_CUSTOMER_NAME_LENGTH_EXCEEDED = "Nome do cliente excede o tamanho máximo";
Constants.MSG_ERROR_156_CUSTOMER_NAME_LENGTH_EXCEEDED = "Identidade do cliente excede o tamanho máximo";
//# sourceMappingURL=constants.js.map

/***/ })

},[508]);
//# sourceMappingURL=main.bundle.js.map