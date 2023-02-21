import { Component, EventEmitter } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { Product } from "../../model/product.model";
import { ProductRepository } from "../../model/product.repository";
import { Category } from "../../model/categories.model";
import { CategoriesRepository } from "../../model/categories.repository";
import { ProductImage } from "src/app/model/product-images.model";

@Component({
    templateUrl: "productEditor.component.html"
})

export class ProductEditorComponent {
    editing: boolean = false;
    images: ProductImage[] = [];
    image: ProductImage = new ProductImage;
    product: Product = new Product();
    constructor(private repository: ProductRepository,
        private categoryRepository: CategoriesRepository,
        private router: Router,
        activeRoute: ActivatedRoute) {

        this.editing = activeRoute.snapshot.params["mode"] == "edit";
        if (this.editing) {
            Object.assign(this.product,
                repository.getProduct(activeRoute.snapshot.params["id"]));
            if(this.product){
                this.product.images?.map(images => {
                    this.images.push(images)
                })
            }
        }
    }

    ngOnInit(){
        console.log('this.product',this.product)
    }

    save(form: NgForm) {
        this.product.categoria_id = Number(this.product.categoria_id)
        this.product.preco = parseFloat(this.product.preco)
        this.product.unidade = Number(this.product.unidade)

        this.repository.saveProduct(this.product);
        // this.router.navigateByUrl("/admin/main/products");
    }

    getCategories() {
        return this.categoryRepository.getCategories();
    }

    addImage(){
        this.image.link = '';
        this.image.validade = ''
        this.image.tipoArmazenamento = '';
        this.images.push(this.image)
        this.product.images = this.images;
    }
    
    public alerta(e:object) {
      alert('Alerta: ' + e);
      console.log(e);
    }
}