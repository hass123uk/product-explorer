//TODO: Do not proxy all requests through another service.
const corsProxyServer = 'https://cors-anywhere.herokuapp.com/';
const oDataWebService = "https://services.odata.org/(S(cejbbsovyyufagzt5weoj0fq))/V2/OData/OData.svc/";
const baseUrl = `${corsProxyServer}${oDataWebService}`
const productsBaseUrl = `${baseUrl}Products`;

type ProductResponse = {
    ID: number;
    Name: string;
    Price: string;
    Category: { ID: number, Name: string }
}

export async function loadProducts() {
    const expandQuery = '$expand=Category'
    const selectQuery = '$select=ID,Name,Price,Category/ID,Category/Name'
    const filterQuery = '$filter=Name ne null and Price ne null and Category/Name ne null';
    const url = `${productsBaseUrl}?${expandQuery}&${selectQuery}&${filterQuery}`;
    const response = await fetch(url, {
        headers: {
            'Accept': 'application/json'
        }
    }).catch(console.error);
    if (response) {
        if (response.ok) {
            const jsonResponse = await response.json().catch(console.error);
            return jsonResponse.d.map((product: ProductResponse) => {
                return {
                    id: product.ID,
                    name: product.Name,
                    price: parseFloat(product.Price),
                    category: {
                        id: product.Category.ID,
                        name: product.Category.Name
                    }
                }
            })
        } else {
            throw Error(`loadProducts rejected with status ${response.status}`);
        }
    } else {
        console.error('Empty response on loadProducts')
    }
}

export async function deleteProduct(productId: number) {
    const url = `${productsBaseUrl}(${productId})`;
    const response = await fetch(url, { method: 'DELETE', }).catch(console.error);
    if (response && !response.ok) {
        throw Error(`deleteProduct rejected with status ${response.status}`);
    }
}
