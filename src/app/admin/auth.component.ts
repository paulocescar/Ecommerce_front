import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

@Component({
    templateUrl: "auth.component.html"
})
export class AuthComponent {
    public email: string | any;
    public password: string | any
    public errorMessage: string | any;
    
    constructor(private router: Router,
        private auth: AuthService) { 
            this.auth.authenticated ? 
            this.router.navigateByUrl("/admin/main") : 
            this.router.navigateByUrl("/admin/auth");

        }
    authenticate(form: NgForm) {
        if (form.valid) {
            this.auth.authenticate(this.email, this.password)
                .subscribe(response => {
                    if (response) {
                        this.router.navigateByUrl("/admin/main");
                    }
                    this.errorMessage = "Authentication Failed";
                })
        } else {
            this.errorMessage = "Form Data Invalid";
        }
    }
}