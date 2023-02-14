import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Product } from "../../model/product.model";
import { ProductRepository } from "../../model/product.repository";

@Component({
    selector: "app-productTable",
    templateUrl: "productTable.component.html",
    styleUrls: ['./productTable.component.css']
})
export class ProductTableComponent {
    editing: boolean = false;
    product: Product = new Product();

    constructor(private repository: ProductRepository,
        private router: Router,
        activeRoute: ActivatedRoute) {
    }
    
    getProducts() {
        return this.repository.getProducts();
    }
}