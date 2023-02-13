import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
    selector: "app-list",
    templateUrl: "list.component.html",
    styleUrls: ['./list.component.css']
})
export class ListComponent {
    menuitem: string = 'produtos';

    constructor(private auth: AuthService,
        private router: Router) { }

    ngOnInit() {
        this.menuitem = 'produtos'
    }
    selectMenu(item: string){
        this.menuitem = item
    }
    logout() {
        this.auth.clear();
        this.router.navigateByUrl("/");
    }
}
