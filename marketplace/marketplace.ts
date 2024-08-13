export class creatingMarketplace {
    private readonly productsList: storeProducts [] = [];
    insertproductsinsideArray (...productsList: storeProducts []): void {
        for (const product of productsList) {
            this.productsList.push(product);
        }
    };

    public removeProducts (...productsList: storeProducts []): void {
        for (const product of productsList) {
            const index = this.productsList.findIndex(p => p === product);
            if (index !== -1) {
            this.productsList.splice(index, 1);
            }   
        }
    };

    public displayItemsinsidetheList (): void {
        if (this.productsList.length === 0) {
            console.log("No products inside the list.");
            return;
        }

        this.productsList.forEach(product => {
            console.log(`Product Name: ${product.obtainproductName}, Brand: ${product.obtainproductBrand}, Price: R$${product.obtainproductPrice}`);
        });

        console.log(`Total items: ${this.productsList.length}x`);

    };

    public addingtotheValue (): number {
       return this.productsList.reduce((ac, price) => ac + price.obtainproductPrice, 0);
    }

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
randomProduct.displayItemsinsidetheList();