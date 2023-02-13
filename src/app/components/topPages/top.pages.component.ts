import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
    selector: "app-top-pages",
    templateUrl: "top.pages.component.html",
    styleUrls: ['./top.pages.component.css']
})
export class TopPagesComponent {
    @Input() title:string = "";
    @Input() description:string = "";
    @Input() icon:string = "";
    
}
