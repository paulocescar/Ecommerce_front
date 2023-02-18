import { Component } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Category } from "../../model/categories.model";
import { CategoriesRepository } from "../../model/categories.repository";

@Component({
    templateUrl: "categoryEditor.component.html"
})

export class CategoryEditorComponent {
    editing: boolean = false;
    category: Category = new Category();
    constructor(private repository: CategoriesRepository,
        private router: Router,
        activeRoute: ActivatedRoute) {
        this.editing = activeRoute.snapshot.params["mode"] == "edit";
        if (this.editing) {
            console.log('edit')
            console.log(Object.assign(this.category,
                repository.getCategories(activeRoute.snapshot.params["id"])))
            Object.assign(this.category,
                repository.getCategories(activeRoute.snapshot.params["id"]));
        }
    }
    
    save(form: NgForm) {
        this.repository.saveCategories(this.category);
        this.router.navigateByUrl("/admin/main/categories");
    }

    getCategories() {
        return this.repository.getCategories();
    }
}