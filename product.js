class ProductManager {
    constructor() {
        this.products = [];
    }
    createProduct(product) {
        const natija = this.products.find(p => p.id === product.id);
        if (natija) {
            alert(`Savatchada id'si ${product.id} ga teng bo'lgan element bor`);
            return;
        }
        else {
            this.products.push(product);
        }
    }
    getProductById(id) {
        const result = this.products.find(p => p.id === id);
        return result;
    }
    updateProduct(id, updateData) {
        const index = this.products.findIndex(p => p.id === id);
        if (index === -1) {
            alert(`Id ${id} bo'lgan element topilmadi`);
            return;
        }
        this.products = this.products.map(p => {
            if (p.id === id) {
                return Object.assign(Object.assign({}, p), updateData);
            }
            return p;
        });
    }
    deleteProduct(id) {
        const index = this.products.findIndex(p => p.id === id);
        if (index === -1) {
            alert(`Id ${id} bo'lgan element topilmadi`);
            return;
        }
        this.products = this.products.filter(p => p.id !== id);
        alert(`Id ${id} bo'lagan element o'chirildi`);
    }
    getAllProducts() {
        return this.products;
    }
    //Qo'shimcha metodlar
    getProductsByCategory(category) {
        const result = this.products.filter(p => p.category === category);
        return result;
    }
    getProductsUnderPrice(price) {
        const result = this.products.filter(p => p.price < price);
        return result;
    }
}
const manager = new ProductManager();
manager.createProduct({
    id: 1,
    name: 'Iphone',
    price: 999,
    category: 'smartphone',
});
manager.createProduct({ id: 2, name: 'Iphone', price: 899, category: 'car' });
export {};
//# sourceMappingURL=product.js.map