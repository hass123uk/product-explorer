jest.mock('../services/productHttpService');

import { ProductStore, CategoryModel, ProductModel } from './ProductStore';
import { when } from 'mobx';

describe('test store models creation', () => {

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

    it('can create an instance of the category model', () => {
        const newCategory = {
            id: 1234,
            name: 'Test Category'
        };

        const item = CategoryModel.create(newCategory);

        expect(item.id).toEqual(newCategory.id);
        expect(item.name).toEqual(newCategory.name)
    });

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
});


describe('test product store actions', () => {
    it('products are loaded on create product store and on delete product', async () => {
        const onLoadSpy = jest.fn();
        const storeUnderTest = ProductStore.actions(() => ({
            loadData: onLoadSpy
        }));
        const store = storeUnderTest.create();

        expect(onLoadSpy).toHaveBeenCalledTimes(1);

        await store.deleteData({});
        expect(onLoadSpy).toHaveBeenCalledTimes(2);
    });

    it('contains same number of products in mock and is updated on delete', async done => {
        const store = ProductStore.create();
        when(
            () => store.isLoading === false,
            async () => {
                expect(store.products.length).toEqual(3)
                store.remove(store.products[0]);
                expect(store.products.length).toEqual(2)
                done()
            }
        );
    });
});