import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Product } from '../model/product.model'

@Injectable()
export class ProductService {

    constructor(private http: HttpClient) {  }

    getProducts(): Observable<Product> {
        return this.http.get(environment.urlApi+'/products');
    }
}
