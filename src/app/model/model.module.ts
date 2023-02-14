import { NgModule } from "@angular/core";
import { ProductRepository } from "./product.repository";
import { StaticDataSource } from "./static.datasource";
import { Cart } from "./cart.model";
import { Order } from "./order.model";
import { OrderRepository } from "./order.repository";
import { RestDataSource } from "./rest.datasource";
import { HttpClientModule } from "@angular/common/http";
import { AuthService } from "../services/auth.service";
import { ProductService } from "../services/product.service";
import { CategoriesService } from "../services/categories.service";
import { CategoriesRepository } from "./categories.repository";
import { ConnectionService } from "./connection.service";

@NgModule({
    imports: [HttpClientModule],
    providers: [ProductRepository, Cart, Order, OrderRepository, 
        RestDataSource, AuthService, ConnectionService, ProductService, CategoriesService, CategoriesRepository]
})
export class ModelModule { }