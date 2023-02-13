import { TestBed, ComponentFixture } from "@angular/core/testing";
import { FirstComponent } from "../ondemand/first.component";
import { Product } from "../model/product.model";
import { ProductRepository } from "../model/product.repository";
import { HttpClient, HttpHandler } from "@angular/common/http";
import { mockRepository } from "./mock.repository";

describe("FirstComponent", () => {
    let fixture: ComponentFixture<FirstComponent>;

    let component: FirstComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [FirstComponent],
            providers: [HttpClient, HttpHandler,
                { provide: Product, useValue: mockRepository }
            ]
        });
        fixture = TestBed.createComponent(FirstComponent);
        component = fixture.componentInstance;
    });
    
    it("filters categories", () => {
        expect(component.getProducts("Chess").length).toBe(1);
        expect(component.getProducts("Soccer").length).toBe(1);
        expect(component.getProducts("Running").length).toBe(1);
    });
});