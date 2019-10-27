import { types, applySnapshot, destroy, getParent } from 'mobx-state-tree';
import { flow } from 'mobx';
import { loadProducts, deleteProduct } from '../services/productHttpService'


export const CategoryModel = types.model('CategoryModel', {
    id: types.identifierNumber,
    name: types.string
});

export const ProductModel = types.model('ProductModel', {
    id: types.identifierNumber,
    name: types.string,
    price: types.number,
    category: types.maybe(CategoryModel)
}).actions(self => {
    return {
        remove() {
            getParent(self, 2).remove(self)
        }
    }
});

export const ProductStore = types.model('ProductStore', {
    products: types.optional(types.array(ProductModel), [])
}).actions(self => {
    const loadData = flow(function* load() {
        const products = yield loadProducts();
        applySnapshot(self.products, products);
    });
    const deleteData = flow(function* remove(product: any) {
        yield deleteProduct(product.id);
        //Load the data again after deleting to ensure we are sync with server.
        loadData();
    });
    return {
        afterCreate() {
            loadData();
        },
        remove(product: any) {
            deleteData(product);
            //Delete product from store directly to update UI quickly
            destroy(product);
        }
    }
});