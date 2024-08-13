export class creatingMarketplace {
    private readonly productsList: storeProducts [] = [];
    insertproductsinsideArray (...productsList: storeProducts []): void {
        for (const product of productsList) {
            console.log(this.productsList.push(product));
        }
    };

    removeProducts (...productsList: storeProducts []): void {
        for (const product of productsList) {
            const index = this.productsList.findIndex(p => p === product);
            if (index !== -1) {
            this.productsList.splice(index, 1);
            }   
        }
    };

    displayItemsinsidetheList (): number {
        return this.productsList.length;
    };

}

export class storeProducts {
    constructor (
        private _productName: string,
        private _productfullValue: number,
        private _productBrand: string,
    ) {};

    get obtainproductName (): string {
        return this._productName;
    };

    get obtainproductPrice (): number {
        return this._productfullValue;
    };

    get obtainproductBrand (): string {
        return this._productBrand;
    };

}

const randomProduct = new creatingMarketplace();
const product = new storeProducts('Biscuit', 10, 'Marilan');
randomProduct.insertproductsinsideArray(product);
console.log(randomProduct.displayItemsinsidetheList());
console.log(randomProduct); 