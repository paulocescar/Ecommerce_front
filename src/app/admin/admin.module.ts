import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AuthComponent } from "./auth.component";
import { AdminComponent } from "./admin.component";
import { AuthGuard } from "./auth.guard";
import { DashboardComponent } from "./dashboard.component";
import { ProductTableComponent } from "./products/productTable.component";
import { ProductEditorComponent } from "./products/productEditor.component";
import { CategoryTableComponent } from "./categories/categoryTable.component";
import { CategoryEditorComponent } from "./categories/categoryEditor.component";
import { OrderTableComponent } from "./orderTable.component";
import { NavbarComponent } from "../components/navbar/navbar.component";
import { ListComponent } from "../components/list/list.component";
import { TopPagesComponent } from "../components/topPages/top.pages.component";
import { ProductImagesComponent } from "./products/productImages/productImages.component";

let routing = RouterModule.forChild([
    { path: "auth", component: AuthComponent },
    {
        path: "main", component: AdminComponent, canActivate: [AuthGuard],
        children: [
            { path: "home", component: DashboardComponent },
            { path: "products/:mode/:id", component: ProductEditorComponent },
            { path: "products/:mode", component: ProductEditorComponent },
            { path: "products", component: ProductTableComponent },
            { path: "categories/:mode/:id", component: CategoryEditorComponent },
            { path: "categories/:mode", component: CategoryEditorComponent },
            { path: "categories", component: CategoryTableComponent },
            { path: "orders", component: OrderTableComponent },
            { path: "**", redirectTo: "products" }
        ]
    },
    { path: "**", redirectTo: "auth" }
]);

@NgModule({
    imports: [CommonModule, FormsModule, routing],
    providers: [AuthGuard],
    declarations: [
        AuthComponent, 
        AdminComponent, 
        ProductTableComponent, 
        ProductEditorComponent, 
        CategoryTableComponent,
        CategoryEditorComponent,
        OrderTableComponent, 
        NavbarComponent,
        ListComponent,
        TopPagesComponent,
        ProductImagesComponent
    ]
})
export class AdminModule { }