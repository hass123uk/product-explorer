import { ProductStore, CategoryModel, ProductModel } from './ProductStore';

it('can create an instance of the product model', () => {
    const newProduct = {
        id: 1234,
        name: 'Test product',
        price: 500
    };

    const item = ProductModel.create(newProduct);

    expect(item.id).toEqual(newProduct.id);
    expect(item.name).toEqual(newProduct.name)
});

it('cannot create an instance of a product model without id, name or price', () => {
    expect(() => {
        ProductModel.create({})
    }).toThrow();

    expect(() => {
        ProductModel.create({ id: 1234 });
    }).toThrow();

    expect(() => {
        ProductModel.create({ id: 1234, name: 'test' });
    }).toThrow();

    expect(() => {
        var product = ProductModel.create({ id: 1234, price: 100 });
    }).toThrow();
})

it('can create an instance of the category model', () => {
    const newCategory = {
        id: 1234,
        name: 'Test Category'
    };

    const item = CategoryModel.create(newCategory);

    expect(item.id).toEqual(newCategory.id);
    expect(item.name).toEqual(newCategory.name)
});

it('cannot create an instance of a category model without id or name', () => {
    expect(() => {
        CategoryModel.create({})
    }).toThrow();

    expect(() => {
        CategoryModel.create({ id: 1234 });
    }).toThrow();

    expect(() => {
        CategoryModel.create({ name: 'test' });
    }).toThrow();
})

it('can create an instance of the product store model', () => {
    const newProductList = {
        products: [
            {
                id: 123,
                name: 'test',
                price: 100
            }
        ]
    };

    const list = ProductStore.create(newProductList);

    expect(list.products.length).toEqual(newProductList.products.length);
    expect(list.products[0].id).toEqual(newProductList.products[0].id);
});