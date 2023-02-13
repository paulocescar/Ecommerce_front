import { Component } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
import { Injectable } from '@angular/core';
import { RestDataSource } from "../model/rest.datasource";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { mockRepository } from "./mock.repository";

@Component({
    selector: "first",
    template: `<div class="bg-primary p-a-1">
                There are
                    <span class="strong"> {{getProducts().length}} </span>
                products
            </div>`,
    providers: [ProductRepository, RestDataSource,  [
        { provide: Product, useValue: mockRepository }
    ]]
})

@Injectable()
export class FirstComponent {
    mockRepository: any;

    getProducts(category: string): Product[] {
        return mockRepository.getProducts()
        .filter(p => p.category == category);
    }
}