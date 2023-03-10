import { Category } from "./categories.model";
import { ProductImage } from "./product-images.model";

export class Product {
        constructor(
                public id?: number,
                public codigo?: number,
                public descricao?: string,
                public tipo?: string,
                public situacao?: string,
                public slug?: string,
                public unidade?: number,
                public preco?: any,
                public precoCusto?: string,
                public descricaoCurta?: string,
                public descricaoComplementar?: string,
                public dataInclusao?: string,
                public dataAlteracao?: string,
                public imageThumbnail?: string,
                public urlVideo?: string,
                public nomeFornecedorc?: string,
                public codigoFabricante?: string,
                public marca?: string,
                public class_fiscal?: string,
                public cest?: string,
                public origem?: string,
                public idGrupoProduto?: string,
                public linkExterno?: string,
                public observacoes?: string,
                public grupoProduto?: string,
                public garantia?: string,
                public descricaoFornecedor?: string,
                public idFabricante?: string,
                public pesoLiq?: string,
                public pesoBruto?: string,
                public estoqueMinimo?: string,
                public estoqueMaximo?: string,
                public gtin?: string,
                public gtinEmbalagem?: string,
                public larguraProduto?: string,
                public alturaProduto?: string,
                public profundidadeProduto?: string,
                public unidadeMedida?: string,
                public itensPorCaixa?: string,
                public volumes?: string,
                public localizacao?: string,
                public crossdocking?: string,
                public condicao?: string,
                public freteGratis?: string,
                public producao?: string,
                public dataValidade?: string,
                public spedTipoItem?: string,
                public categoria_id?: number,
                public categoria?: Category,
                public images?: ProductImage[]
        ) { }
    }