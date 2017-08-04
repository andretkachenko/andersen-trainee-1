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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var customer_service_1 = require("../../../shared/customer.service");
var BankAccountListComponent = (function () {
    function BankAccountListComponent(customerService) {
        this.customerService = customerService;
        //this.customerArr = [
        //    {
        //        id: 1,
        //        name: "test",
        //        surname: "qwe",
        //        birthDate: new Date(),
        //        phone: "123",
        //        eMail: "zxc"
        //    },
        //    {
        //        id: 2,
        //        name: "asd",
        //        surname: "zxc",
        //        birthDate: new Date(),
        //        phone: "456",
        //        eMail: "qwe"
        //    }
        //]
    }
    BankAccountListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.customerService.getAllCustomers()
            .then(function (customerArr) {
            _this.customerArr = customerArr;
        });
    };
    return BankAccountListComponent;
}());
BankAccountListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'bank-account-list',
        templateUrl: 'bank-account-list.component.html',
        styleUrls: ['bank-account-list.component.css']
    }),
    __metadata("design:paramtypes", [customer_service_1.CustomerService])
], BankAccountListComponent);
exports.BankAccountListComponent = BankAccountListComponent;
//# sourceMappingURL=bank-account-list.component.js.map