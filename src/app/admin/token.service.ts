import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private token: string | null | undefined;
  

  setToken(token: string) {
    sessionStorage.setItem('token', token);
    const storedToken = sessionStorage.getItem('token');  
    this.token = storedToken;
  }

  getToken(): string | "" {
    const storedToken = sessionStorage.getItem('token');  
    return storedToken ? storedToken : "";
  }

  clearToken(): void {
    sessionStorage.removeItem('token');  
  }

  getHeaders(): any {
    const storedToken = sessionStorage.getItem('token'); 
    return {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${storedToken}`
    }
  }
}
