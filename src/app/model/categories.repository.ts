import { Injectable } from "@angular/core";
import { Product } from "./product.model";
import { Category } from "./categories.model";
import { CategoriesService } from "../services/categories.service";

@Injectable()
export class CategoriesRepository {
    private categories: (string | any)[] = [];

    constructor(private categoriesService: CategoriesService)
    {
        categoriesService.getCategories().subscribe((data: Category | any)  => {
            this.categories = data;
            return data;
        });
    }

    getCategories(id?: number | null): Category[] {
        if (!id)
            return this.categories

        return this.categories
            .filter(c => id == c.id)[0];
    }

    saveCategories(category: Category) {

        let categoria = new Category;
        categoria.id = category.id
        categoria.descricao = category.descricao
        categoria.idCategoriaPai = Number(category.idCategoriaPai)

        if (category.id == null || category.id == 0) {
            this.categoriesService.saveCategories(categoria)
                .subscribe(cat => this.categories.push(cat));
        } else {
            this.categoriesService.updateCategories(categoria)
                .subscribe(p => {
                    this.categories.splice(this.categories.
                        findIndex(c => c.id == category.id), 1, category);
                });
        }
    }

    deleteCategories(id: Number) {
        this.categoriesService.deleteCategories(id).subscribe(c => {
            this.categories.splice(this.categories.
                findIndex(c => c.id == id), 1);
        })
    }
}