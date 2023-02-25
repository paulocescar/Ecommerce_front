import { Component } from "@angular/core";
import { Cart } from "../../model/cart.model";

@Component({
    selector: "cart-summary",
    templateUrl: "cartSummary.component.html",
    styleUrls: ['./store.component.css']
})
export class CartSummaryComponent {
    constructor(public cart: Cart) { }
}