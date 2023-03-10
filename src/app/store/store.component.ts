import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
import { Cart } from "../model/cart.model";
import { Router } from "@angular/router";
import { Category } from "../model/categories.model";
import { CartRepository } from "../model/cart.repository";

@Component({
    selector: "store",
    templateUrl: "store.component.html",
    styleUrls: ['./store.component.css']
})
export class StoreComponent {
    selectedCategory: any;
    productsPerPage = 4;
    selectedPage = 1;

    constructor(private repository: ProductRepository,
        private cart: Cart,
        private cartRepository: CartRepository,
        private router: Router) 
    {
        cartRepository.getCart();
    }

    get products(): Product[] {
        let pageIndex = (this.selectedPage - 1) * this.productsPerPage
        return this.repository.getProducts(this.selectedCategory).slice(pageIndex, pageIndex + this.productsPerPage);
    }
    get categories(): Category[] {
        return this.repository.getCategories();
    }

    changeCategory(newCategory?: number | undefined) {
        this.selectedCategory = newCategory;
        this.repository.getProducts(newCategory)
    }

    changePage(newPage: any) {
        this.selectedPage = Number(newPage);
    }

    changePageSize(newSize: number) {
        this.productsPerPage = Number(newSize);
        this.changePage(1);
    }

    get pageCount(): number {
        return Math.ceil(this.repository
            .getProducts(this.selectedCategory).length / this.productsPerPage)
    }

    addProductToCart(product: Product) {
        this.cart.addLine(product);
        this.router.navigateByUrl("/cart");
    }
    
    
}