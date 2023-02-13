export class Category {
    constructor(
            public id?: number,
            public descricao?: string,
            public slug?: string,
            public idCategoriaPai?: number,
    ) { }
}