import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";
import { ProductImage } from "src/app/model/product-images.model";

@Component({
    selector: "app-productImages",
    templateUrl: "productImages.component.html",
    styleUrls: ['./productImages.component.css']
})
export class ProductImagesComponent {
    @Input() public imageComponent: ProductImage | any
    @Output() public onAlert = new EventEmitter();

    public alertEvent(e: object) {
        this.onAlert.emit(e);
    }

    ngOnInit(){
        console.log(this.imageComponent)
    }


}