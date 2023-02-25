import { Injectable } from "@angular/core";
import { CartService } from "../services/cart.service";
import { CartItem } from "./cart.model";

@Injectable()
export class CartRepository{
    private cartItems: any;

    constructor(private cartService: CartService){
        cartService.getCart().subscribe((data: any) => {
            this.cartItems = data;
        })
    }

    getCart(){
        return this.cartItems;
    }

    saveCart(cartItem: CartItem){
        if(!cartItem.user_id){
            this.cartService.saveCart(cartItem).subscribe((data: any) => {
                this.cartItems.push(cartItem)
            })
        } else {
            this.cartService.updateCart(cartItem).subscribe((data: any) => {
                this.cartItems.push(cartItem)
            })
        }
    }

}