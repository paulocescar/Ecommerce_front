import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Category } from "./categories.model";
// import { StaticDataSource } from "./static.datasource";
// import { RestDataSource } from "./rest.datasource";
import { ProductService } from '../services/product.service'
import { CategoriesService } from "../services/categories.service";

@Injectable()
export class ProductRepository {
    private products: (Product | any)[] = [];
    private categories: (string | any)[] = [];

    // constructor(private dataSource: StaticDataSource) {
    constructor(
        private productService: ProductService,
        private categoriesService: CategoriesService
        ) {
        productService.getProducts().subscribe((data: Product | any)  => {
            this.products = data;
            return data;
        });


        categoriesService.getCategories().subscribe((data: Category | any)  => {
            this.categories = data;
            return data;
        });
    }

    getProducts(categoria_id?: number | null): Product[] {
        if (!categoria_id)
            return this.products

        return this.products
            .filter(p => categoria_id == p.categoria_id);
    }
    
    getProduct(id: number): Product {
        return this.products.find(p => p.id == id);
    }

    getCategories(): Category[] {
        return this.categories;
    }

    saveProduct(product: Product | any) {
        // if (product.id == null || product.id == 0) {
        //     this.dataSource.saveProduct(product)
        //         .subscribe(p => this.products.push(p));
        // } else {
        //     this.dataSource.updateProduct(product)
        //         .subscribe(p => {
        //             this.products.splice(this.products.
        //                 findIndex(p => p.id == product.id), 1, product);
        //         });
        // }
    }
    deleteProduct(id: number) {
        // this.dataSource.deleteProduct(id).subscribe(p => {
        //     this.products.splice(this.products.
        //         findIndex(p => p.id == id), 1);
        // })
    }
}