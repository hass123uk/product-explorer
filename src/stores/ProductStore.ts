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
    isLoading: true,
    products: types.optional(types.array(ProductModel), [])
}).actions(self => ({
    markLoading(loading: boolean) {
        self.isLoading = loading
    }

})).actions(self => ({
    loadData: flow(function* load() {
        try {
            const products = yield loadProducts();
            if (products) {
                applySnapshot(self.products, products);
            }
            self.markLoading(false);
        } catch (error) {
            console.error(error);
        }
    })
})).actions(self => ({
    deleteData: flow(function* remove(product: any) {
        yield deleteProduct(product.id);
        //Load the data again after deleting to ensure we are sync with server.
        self.loadData();
    })
})).actions(self => {
    return {
        afterCreate() {
            self.loadData();
        },
        remove(product: any) {
            self.deleteData(product);
            //Delete product from store directly to update UI quickly
            destroy(product);
        }
    }
});