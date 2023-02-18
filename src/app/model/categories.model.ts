export class Category {
    constructor(
            public id?: number,
            public descricao?: string,
            public idCategoriaPai?: number,
            public categoria_pai?: any
    ) { }
}