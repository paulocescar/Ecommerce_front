import { Injectable } from "@angular/core";
import { CartService } from "../services/cart.service";
import { Product } from "./product.model";
@Injectable()
export class Cart {
    public lines: CartLine[] = [];
    public itemCount: number = 0;
    public cartPrice: number = 0;

    constructor(private cartService:CartService){
        cartService.getCart().subscribe((data: any) => {
            if(data){
                for(let item of data){
                    console.log(data)
                    item.produto[0].quantidade = item.quantidade;
                    this.addLine(item.produto[0])
                }
            }
        })
    }

    addLine(product: Product, quantidade: number = 1) {
        let line = this.lines.find(line => line.product.id == product.id);
        if (line != undefined) {
            line.quantidade += quantidade;
        } else {
            this.lines.push(new CartLine(product, quantidade));
        }
        this.recalculate();
    }

    updateQuantity(product: Product, quantidade: number) {
        let line = this.lines.find(line => line.product.id == product.id);
        if (line != undefined) {
            line.quantidade = Number(quantidade);
        }
        this.recalculate();
    }

    removeLine(id: number) {
        let index = this.lines.findIndex(line => line.product.id == id);
        this.lines.splice(index, 1);
        this.recalculate();
    }

    clear() {
        this.lines = [];
        this.itemCount = 0;
        this.cartPrice = 0;
    }

    private recalculate() {
        this.itemCount = 0;
        this.cartPrice = 0;
        this.lines.forEach((l:any) => {
            this.itemCount += l.quantidade;
            this.cartPrice += (l.quantidade * l.product.preco);
        })
    }
}

export class CartLine {
    constructor(public product: Product | any,
        public quantidade: number) { }
    get lineTotal() {
        return this.quantidade * this.product.preco;
    }
}

export class CartItem {
    constructor(
        public produto_id: number,
        public preco: number,
        public quantidade: number,
        public user_id?: number,
    ){}
}