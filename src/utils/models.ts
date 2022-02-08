// Custom types

// Product listing page types - /src/features/product-deatil
export interface ProductDetailInterface {
    imageArray: Array<string>,
    name: string,
    description: string,
    priceInDollars: string,
    color: string,
    tags: Array<string>,
    noteFromEditor: string,
    editor: string,
    editorDesignation: string,
    optionImages: Array<string>,
    sizeAvailable: Array<{size: SizeType, available: boolean}>,
    details: string,
    delivery: string,
    fit: string,
    share: string,
};

export type SizeType = 'XS' | 'S' | 'M' | 'L' | 'XL' | 'XXL' ;