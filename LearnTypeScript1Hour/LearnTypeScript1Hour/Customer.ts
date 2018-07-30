import { Address } from "./Address";

export class Customer {
    private _customerName: string = "";
    public addressObj: Address = new Address();
    public set CustomerName(value: string) {
        if (value.length == 0) {
            throw "Customer Name is required";
        }
        this._customerName = value;
    }

    public get CustomerName(): string {
        return this._customerName;
    }

    Validate(input:number) : boolean {
        alert(input);
        return true;
    }
}

//class SomeOtherCustomer extends Customer {
//    Validate(input: number): boolean {
//        alert("NewCustomer: " + input);
//        return true;
//    }
//}