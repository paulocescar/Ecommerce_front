import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { TokenService } from "../admin/token.service";
import { environment } from "src/environments/environment";
import { Category } from '../model/categories.model'

@Injectable()
export class CategoriesService {
    public auth_token: string = "";
    public headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.tokenService.getToken()}`
    }

    constructor(private http: HttpClient,
        private tokenService:TokenService) 
    {   }

    getCategories(): Observable<Category> {
        return this.http.get(environment.urlApi+'/categories');
    }

    saveCategories(data: Category): Observable<Category> {
        return this.http.post(environment.urlApi+'/categories', data, {headers: this.headers})
    }

    updateCategories(data: Category): Observable<Category> {
        return this.http.put(environment.urlApi+`/categories/${data.id}`, data, {headers: this.headers})
    }

    deleteCategories(id: Number): Observable<Category> {
        return this.http.delete(environment.urlApi+`/categories/${id}`, {headers: this.headers})
    }
}
