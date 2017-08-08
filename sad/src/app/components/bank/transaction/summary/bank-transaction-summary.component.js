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
var transaction_log_type_1 = require("../../../shared/transaction-log.type");
var BankTransactionSummaryComponent = (function () {
    function BankTransactionSummaryComponent() {
        console.log(this.transactionLog);
    }
    return BankTransactionSummaryComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", transaction_log_type_1.TransactionLog)
], BankTransactionSummaryComponent.prototype, "transactionLog", void 0);
BankTransactionSummaryComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'bank-transaction-summary',
        templateUrl: 'bank-transaction-summary.component.html',
        styleUrls: ['bank-transaction-summary.component.css']
    }),
    __metadata("design:paramtypes", [])
], BankTransactionSummaryComponent);
exports.BankTransactionSummaryComponent = BankTransactionSummaryComponent;
//# sourceMappingURL=bank-transaction-summary.component.js.map