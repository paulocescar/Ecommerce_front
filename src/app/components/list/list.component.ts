import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { TokenService } from "src/app/admin/token.service";

@Component({
    selector: "app-list",
    templateUrl: "list.component.html",
    styleUrls: ['./list.component.css']
})
export class ListComponent {
    menuitem: string = 'produtos';

    constructor(private auth: AuthService, private token: TokenService,
        private router: Router) { }

    ngOnInit() {
        this.menuitem = 'produtos'
    }
    selectMenu(item: string){
        this.menuitem = item
    }
    logout() {
        this.token.clearToken();
        this.router.navigateByUrl("/");
    }
}
