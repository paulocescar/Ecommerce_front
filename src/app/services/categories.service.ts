import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Category } from '../model/categories.model'

@Injectable()
export class CategoriesService {

    constructor(private http: HttpClient) {  }

    getCategories(): Observable<Category> {
        return this.http.get(environment.urlApi+'/categories');
    }
}
