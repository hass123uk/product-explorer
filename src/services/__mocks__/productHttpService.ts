import { ProductInterface, CategoryInterface } from '../../interfaces'

const categories: CategoryInterface[] = [
    {
        id: 0,
        name: 'category'
    }, {
        id: 1,
        name: 'category1'
    }
];

let products: ProductInterface[] = [
    {
        id: 0,
        name: 'product',
        price: 10,
        category: categories[0]
    }, {
        id: 1,
        name: 'product1',
        price: 10,
        category: categories[0]
    }, {
        id: 3,
        name: 'product2',
        price: 10,
        category: categories[1]
    }
]

export async function loadProducts() {
    return new Promise((resolve, reject) => {
        process.nextTick(() =>
            resolve(products)
        );
    })
}

export async function deleteProduct(productId: number) {
    products = products.filter(product => product.id !== productId);
}
