import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Product } from '../model/product.model'
import { TokenService } from "../admin/token.service";

@Injectable()
export class ProductService {

    constructor(private http: HttpClient, 
        private tokenService: TokenService) {  }

    getProducts(): Observable<Product> {
        return this.http.get(environment.urlApi+'/products');
    }

    saveProducts(product: Product): Observable<Product> {
        return this.http.post(environment.urlApi+'/products', product, {
            headers: this.tokenService.getHeaders()
        })
    }

    updateProducts(product: Product): Observable<Product> {
        return this.http.post(environment.urlApi+`/products/${product.id}`, product, {
            headers: this.tokenService.getHeaders()
        })
    }


    deleteProduct(id: Number): Observable<Product> {
        return this.http.get(environment.urlApi+`/products/${id}`, {
            headers: this.tokenService.getHeaders()
        })
    }
}
