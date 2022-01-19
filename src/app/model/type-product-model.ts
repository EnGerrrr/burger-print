export class TypeProductModel {
    name: string;
    type: TypeProduct;
    actived: boolean;
  }
  
  export enum TypeProduct {
    All = 0,
    PrintedApparel = 1,
    FullPrintedApparel = 2,
    Accessories = 3,
    Decoration = 4,
    Footwear = 5,
    HomeLiving = 6
  }
  export class Modelproduct {
    catalog_name: string;
    TYPE: typeproduct;
    actived: boolean;
    total: number;
  
  }
  
  export class ModelGroupProduct {
    name: string;
    type: typeproduct;
    products: ProductModel[];
  }
  
  export class ProductModel
  {
    id: string;
    img: string;
    cost: string;
    type: number;
    namecard: string;
  }
  
  export enum typeproduct {
    Allproducts = 0,
    PrintedApparel = 1,
    FullPrintedApparel = 2,
    Accessories = 3,
    Decoration = 4,
    Footwear = 5,
    HomeLiving = 6,
  }
  export interface Modelcreate{
    Nameproductchoose:string;
    Url:string
  }
  