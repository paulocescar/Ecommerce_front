import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { TokenService } from "../admin/token.service";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { Cart, CartItem } from "../model/cart.model";

@Injectable()
export class CartService {

    constructor(private http: HttpClient,
        private tokenService: TokenService){
    }

    getCart(): Observable<Object>{
        return this.http.get(environment.urlApi+'/carts/user', {headers: this.tokenService.getHeaders()});
    }

    saveCart(cartItem: CartItem): Observable<Object> {
        return this.http.post(environment.urlApi+'/carts', cartItem, {headers: this.tokenService.getHeaders()})
    }

    updateCart(cartItem: CartItem): Observable<Object> {
        return this.http.post(environment.urlApi+'/carts_user', cartItem, {headers: this.tokenService.getHeaders()})
    }
}