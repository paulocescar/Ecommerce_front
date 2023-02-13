import { Product } from "../model/product.model";

export const mockRepository = {
    getProducts: function () {
        return [
            new Product(1, "test1", "Soccer",   "ball",  100),
            new Product(2, "test2", "Chess",    "Queen", 100),
            new Product(3, "test3", "Running",  "Tênis", 100),
        ]
    }
}
