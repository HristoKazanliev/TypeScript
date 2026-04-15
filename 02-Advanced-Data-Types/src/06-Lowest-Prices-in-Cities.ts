interface ProductInfo {
    town: string;
    price: number;
}

type Product = {
    [name: string]: ProductInfo;
}

function findLowestPrices(arrInput: string[]): void {
    const products: Product = {};

    for (const productInfo of arrInput) {
        const [town, product, price] = productInfo.split(" | ");
        const priceNum = Number(price);

        if (!products[product]) {
            products[product] = { town, price: priceNum};
        } else if (priceNum < products[product].price) {
            products[product] = { town, price: priceNum};
        }
    }

    Object.entries(products).forEach(([product, { town, price}]) => {
        console.log(`${product} -> ${price} (${town})`);
        
    });
}

findLowestPrices(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10']
);