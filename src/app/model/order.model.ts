import { Injectable } from "@angular/core";
import { Cart } from "./cart.model";

@Injectable()
export class Order {
    public id: number | any;
    public name: string | any;
    public address: string | any;
    public city: string | any;
    public state: string | any;
    public zip: string | any;
    public country: string | any;
    public shipped: boolean = false;
    
    constructor(public cart: Cart) { }

    clear() {
        this.id = null;
        this.name = this.address = this.city = null;
        this.state = this.zip = this.country = null;
        this.shipped = false;
        this.cart.clear();
    }
}