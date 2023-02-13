import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { TokenService } from "../admin/token.service";

@Injectable()
export class AuthService {
    auth_token: string | any;

    constructor(private http: HttpClient,
        private tokenService: TokenService) {  }

    authenticate(email: string, password: string): Observable<any> {
        return this.http.post(environment.urlApi+'/login', {email: email, password: password})
        .pipe(map((response: any) => {
            this.tokenService.setToken(response ? response.token : null);
            return true;
        }));
    }

    get authenticated(): string | null {
        const storedToken = this.tokenService.getToken();
        return storedToken
    }

    clear() {
        this.auth_token = null;
    }
}