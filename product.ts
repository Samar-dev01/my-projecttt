interface Product {
  readonly id: number;
  readonly name: string;
  price: number;
  category: string;
  description?: string;
}

class ProductManager {
  private products: Product[] = [];

  createProduct(product: Product): void {
    const natija = this.products.find(p => p.id === product.id);
    if (natija) {
      alert(`Savatchada id'si ${product.id} ga teng bo'lgan element bor`);
      return;
    } else {
      this.products.push(product);
    }
  }

  getProductById(id: number): Product | undefined {
    const result = this.products.find(p => p.id === id);
    return result;
  }

  updateProduct(id: number, updateData: Partial<Product>): void {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) {
      alert(`Id ${id} bo'lgan element topilmadi`);
      return;
    }
    this.products = this.products.map(p => {
      if (p.id === id) {
        return { ...p, ...updateData };
      }
      return p;
    });
  }

  deleteProduct(id: number): void {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) {
      alert(`Id ${id} bo'lgan element topilmadi`);
      return;
    }
    this.products = this.products.filter(p => p.id !== id);
    alert(`Id ${id} bo'lagan element o'chirildi`);
  }

  getAllProducts(): Product[] {
    return this.products;
  }

  //Qo'shimcha metodlar

  getProductsByCategory(category: string): Product[] {
    const result = this.products.filter(p => p.category === category);
    return result;
  }

  getProductsUnderPrice(price: number): Product[] {
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
