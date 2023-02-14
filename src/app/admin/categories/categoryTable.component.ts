import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Category } from "../../model/categories.model";
import { CategoriesRepository } from "../../model/categories.repository";

@Component({
    selector: "app-categoryTable",
    templateUrl: "categoryTable.component.html",
    styleUrls: ['./categoryTable.component.css']
})
export class CategoryTableComponent {
    editing: boolean = false;
    categories: Category = new Category();

    constructor(private repository: CategoriesRepository,
        private router: Router,
        activeRoute: ActivatedRoute) {
    }
    
    getCategories() {
        return this.repository.getCategories();
    }

    deleteCategories(id: Number){
        return this.repository.deleteCategories(id);
    }
}