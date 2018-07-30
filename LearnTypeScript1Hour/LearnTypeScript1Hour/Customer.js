"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Address_1 = require("./Address");
var Customer = /** @class */ (function () {
    function Customer() {
        this._customerName = "";
        this.addressObj = new Address_1.Address();
    }
    Object.defineProperty(Customer.prototype, "CustomerName", {
        get: function () {
            return this._customerName;
        },
        set: function (value) {
            if (value.length == 0) {
                throw "Customer Name is required";
            }
            this._customerName = value;
        },
        enumerable: true,
        configurable: true
    });
    Customer.prototype.Validate = function (input) {
        alert(input);
        return true;
    };
    return Customer;
}());
exports.Customer = Customer;
//class SomeOtherCustomer extends Customer {
//    Validate(input: number): boolean {
//        alert("NewCustomer: " + input);
//        return true;
//    }
//}
//# sourceMappingURL=Customer.js.map